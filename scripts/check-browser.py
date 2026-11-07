"""Exercise the static export with Sutory's installed browser capability."""
import functools
import json
import os
import re
import sys
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'out'
ARTIFACTS = Path.home() / 'sutory/work/torylabs-seo'
WINDOWS_DOWNLOAD = re.search(r'export const WINDOWS_DOWNLOAD = "([^"]+)";', (ROOT / 'content/vica.ts').read_text()).group(1)
sys.path.insert(0, str(Path(os.environ.get('SUTORY_ROOT', Path.home() / 'repos/sutory'))))
from capabilities.browser import Browser


class ExportServer(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        target = Path(super().translate_path(path))
        if not target.suffix:
            html = target.with_suffix('.html')
            if html.is_file(): return str(html)
        return str(target)

    def log_message(self, *args):
        pass


def inspect_page(page, base, path, lang):
    response = page.goto(base + path, wait_until='networkidle')
    assert response.status == 200, path
    assert urlsplit(page.url).path.rstrip('/') == path.rstrip('/'), page.url
    assert page.locator('html').get_attribute('lang') == lang, path
    assert page.locator('h1').count() == 1
    assert page.locator('h1').is_visible()
    assert page.locator('link[rel=canonical]').get_attribute('href').rstrip('/') == ('https://torylabs.dev' + path).rstrip('/')
    assert page.locator('main').inner_text().strip()
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), path
    # Every language name must remain one readable line on narrow screens.
    assert page.locator('header a[data-lang]').evaluate_all('''links => links.every(link => {
        const range = document.createRange(); range.selectNodeContents(link);
        return range.getClientRects().length === 1;
    })'''), path
    assert 'TBD' not in page.locator('body').inner_text(), path


def check_browser(browser, base):
    results = []
    for javascript in (False, True):
        for width in (320, 1280):
            context = browser._browser.new_context(java_script_enabled=javascript,
                viewport={'width': width, 'height': 900}, locale='ko-KR', reduced_motion='reduce')
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            for lang, prefix in [('en', ''), ('ko', '/ko'), ('ja', '/ja')]:
                for route in ('', '/vica', '/voin', '/relay'):
                    path = prefix + route or '/'
                    inspect_page(page, base, path, lang)
                    if route == '/vica':
                        windows = page.locator(f'a[href="{WINDOWS_DOWNLOAD}"]')
                        assert windows.count() == 2, path
                        assert windows.first.is_visible() and windows.first.is_enabled(), path
                        assert windows.first.get_attribute('aria-disabled') is None, path
                        assert 'x64' in windows.first.inner_text(), path
                    if route in ('', '/vica', '/voin'):
                        assert page.locator('#faq dt').count() >= 4
                        # Whole question and answer are visible to visitors, not schema-only.
                        first = page.locator('#faq dd').first
                        first.scroll_into_view_if_needed()
                        assert first.is_visible() and len(first.inner_text()) > 20
                    if route == '/relay':
                        check_relay(page, javascript)
                    results.append({'path': path, 'javascript': javascript, 'width': width})
            inspect_page(page, base, '/ko/vica', 'ko')
            page.locator('a[data-lang=en]').click()
            page.wait_for_url(base + '/vica')
            assert page.locator('html').get_attribute('lang') == 'en'
            assert page.locator('a[href*="vica-releases/releases/latest"]').first.is_visible()
            response = page.goto(base + '/not-a-real-page', wait_until='domcontentloaded')
            assert response.status == 404, 'Missing pages must not fall back to the homepage'
            assert not errors, errors
            context.close()
    return results


def check_relay(page, javascript):
    if javascript:
        buttons = page.locator('.relay-interactive button[aria-expanded]')
        assert buttons.count() == 4
        for i in range(4):
            buttons.nth(i).click()
            panel = page.locator(f'#relay-step-{i}')
            assert panel.is_visible() and len(panel.locator('p').first.inner_text()) > 20
            assert buttons.nth(i).get_attribute('aria-expanded') == 'true'
        buttons.nth(1).click()
        # A denied clipboard operation keeps the manual-copy instructions available.
        page.evaluate("() => { navigator.clipboard.writeText = async () => { throw new Error('denied'); }; }")
        page.locator('#relay-step-1 button').click()
        assert page.locator('#relay-step-1 [role=alert]').is_visible()
        page.evaluate('() => { navigator.clipboard.writeText = async () => {}; }')
        page.locator('#relay-step-1 button').click()
        assert page.locator('#relay-step-1 [role=status]').inner_text().strip()
        assert page.locator('#relay-step-1 [role=alert]').count() == 0
    else:
        assert page.locator('noscript ol li').count() == 4
        for item in page.locator('noscript ol li').all():
            assert item.is_visible() and len(item.inner_text()) > 20
        assert not page.locator('.relay-interactive').is_visible()


def screenshots(browser, base):
    context = browser._browser.new_context(viewport={'width': 1280, 'height': 900}, reduced_motion='reduce')
    page = context.new_page()
    for path, name, width in [('/ko', 'home-desktop', 1280), ('/ko/voin', 'voin-mobile', 390), ('/ja/relay', 'relay-mobile', 320),
        ('/ko/vica', 'vica-desktop', 1280), ('/ko/vica', 'vica-mobile', 320), ('/ja/vica', 'vica-ja-mobile', 320)]:
        page.set_viewport_size({'width': width, 'height': 900})
        page.goto(base + path, wait_until='networkidle')
        page.screenshot(path=str(ARTIFACTS / f'{name}.png'), full_page=True)
    context.close()


def main():
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    handler = functools.partial(ExportServer, directory=str(OUT))
    server = ThreadingHTTPServer(('127.0.0.1', 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    base = f'http://127.0.0.1:{server.server_port}'
    try:
        with Browser(cdp_url='') as browser:
            results = check_browser(browser, base)
            screenshots(browser, base)
        (ARTIFACTS / 'browser-results.json').write_text(json.dumps(results, ensure_ascii=False, indent=2))
        print(f'Browser PASS: {len(results)} page configurations, language navigation, all relay steps, clipboard denial/retry and 404.')
    finally:
        server.shutdown()
        server.server_close()
        thread.join()


if __name__ == '__main__':
    main()
