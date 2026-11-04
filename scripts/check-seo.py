"""Check exported documents, not source patterns. Run after `npm run build`."""
import json
import struct
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
from urllib.robotparser import RobotFileParser

OUT = Path(__file__).resolve().parents[1] / 'out'
ORIGIN = 'https://torylabs.dev'
LANGUAGES = ('en', 'ja', 'ko')
PUBLIC = ('/', '/vica', '/voin', '/relay', '/privacy', '/terms')
UNLISTED = ('/pricing', '/refund')
LOCALES = {'en': 'en_US', 'ja': 'ja_JP', 'ko': 'ko_KR'}


def normalize(text):
    return ' '.join(text.split())


class Document(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.metas, self.links, self.scripts, self.text = [], [], [], []
        self.ids, self.hrefs = set(), []
        self.lang, self.title, self.h1s = '', '', 0
        self.script, self.buffer, self.in_title, self.in_style = None, [], False, False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'html': self.lang = a.get('lang')
        if tag == 'meta': self.metas.append(a)
        if tag == 'link': self.links.append(a)
        if tag == 'h1': self.h1s += 1
        if tag == 'a': self.hrefs.append(a.get('href', ''))
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'title': self.in_title = True
        if tag == 'style': self.in_style = True
        if tag == 'script':
            self.script, self.buffer = a.get('type', 'javascript'), []

    def handle_endtag(self, tag):
        if tag == 'script':
            if self.script == 'application/ld+json': self.scripts.append(json.loads(''.join(self.buffer)))
            self.script = None
        if tag == 'title': self.in_title = False
        if tag == 'style': self.in_style = False

    def handle_data(self, data):
        if self.script:
            self.buffer.append(data)
        elif not self.in_style:
            self.text.append(data)
        if self.in_title: self.title += data

    def meta(self, name):
        values = [m.get('content', '') for m in self.metas if m.get('name', m.get('property')) == name]
        assert len(values) == 1, (name, values)
        return values[0]


def path_for(lang, path):
    return path if lang == 'en' else '/' + lang + ('' if path == '/' else path)


def exported(path):
    path = path.rstrip('/')
    return OUT / (path.lstrip('/') + '.html' if path else 'index.html')


def check_document(lang, path):
    route = path_for(lang, path)
    doc = Document(exported(route).read_text())
    url = ORIGIN + route
    assert doc.lang == lang, (route, doc.lang)
    assert doc.h1s == 1, (route, doc.h1s)
    assert doc.title and doc.meta('description'), route
    canonicals = [l['href'] for l in doc.links if l.get('rel') == 'canonical']
    assert [u.rstrip("/") for u in canonicals] == [url.rstrip("/")], (route, canonicals)
    alternates = {l['hreflang']: l['href'] for l in doc.links if l.get('hreflang')}
    expected = {l: ORIGIN + path_for(l, path) for l in LANGUAGES}
    assert {k: v.rstrip("/") for k, v in alternates.items()} == {k: v.rstrip("/") for k, v in {**expected, "x-default": expected["en"]}.items()}, (route, alternates)
    assert doc.meta('og:url').rstrip('/') == url.rstrip('/')
    assert doc.meta('og:locale') == LOCALES[lang]
    assert doc.meta('og:title') == doc.title == doc.meta('twitter:title')
    assert doc.meta('og:description') == doc.meta('description') == doc.meta('twitter:description')
    assert doc.meta('twitter:card') == 'summary_large_image'
    for key in ('og:image', 'twitter:image'):
        image = urlsplit(doc.meta(key))
        assert image.netloc == 'torylabs.dev' and (OUT / image.path.lstrip('/')).is_file(), (route, image)
    assert ('noindex' in doc.meta('robots')) == (path in UNLISTED), route
    if path in PUBLIC:
        check_schema(doc, route, path, lang)
    assert 'TBD' not in normalize(' '.join(doc.text)), route
    return doc


def check_schema(doc, route, path, lang):
    assert len(doc.scripts) == 1, route
    graph = doc.scripts[0]['@graph']
    nodes = {node['@id']: node for node in graph}
    assert len(nodes) == len(graph), route
    organization = nodes[ORIGIN + '/#organization']
    assert organization['name'] == 'Tory Labs' and organization['email'] == 'su@torylabs.dev'
    assert 'address' not in organization and 'taxID' not in organization
    page = nodes[ORIGIN + route + '#webpage']
    assert page['inLanguage'] == lang and page['url'] == ORIGIN + route
    if path in ('/', '/vica', '/voin', '/relay'):
        faq = nodes[ORIGIN + route + '#faq']
        assert faq['@type'] == 'FAQPage' and len(faq['mainEntity']) >= 4
        body = normalize(' '.join(doc.text))
        for q in faq['mainEntity']:
            assert normalize(q['name']) in body, (route, q['name'])
            assert normalize(q['acceptedAnswer']['text']) in body, (route, q['name'])
        assert 'faq' in doc.ids
    if path in ('/vica', '/voin'):
        app = nodes[ORIGIN + path + '#software']
        assert app['@type'] == 'SoftwareApplication'
        assert app['operatingSystem'] == (['macOS', 'Windows'] if path == '/vica' else 'macOS')
        assert app['offers']['price'] == '0'
        assert {'en': 'Free app', 'ko': '앱 무료', 'ja': 'アプリ無料'}[lang] in normalize(' '.join(doc.text))
        assert app['downloadUrl'] in doc.hrefs, route
        assert not {'aggregateRating', 'review'} & app.keys()
        assert page['mainEntity']['@id'] == app['@id']


def check_crawl():
    robot = RobotFileParser()
    rules = (OUT / 'robots.txt').read_text()
    robot.parse(rules.splitlines())
    assert 'Sitemap: ' + ORIGIN + '/sitemap.xml' in rules
    sitemap = ET.parse(OUT / 'sitemap.xml')
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
    entries = sitemap.findall('s:url', ns)
    expected = {ORIGIN + path_for(l, p) for p in PUBLIC for l in LANGUAGES}
    urls = [e.findtext('s:loc', namespaces=ns) for e in entries]
    assert len(urls) == len(set(urls)) == 18 and set(urls) == expected, urls
    for e in entries:
        url = e.findtext('s:loc', namespaces=ns)
        assert e.find('s:lastmod', ns) is None, 'Do not fabricate freshness from build time'
        links = {a.attrib['hreflang']: a.attrib['href'] for a in e.findall('x:link', ns)}
        doc = Document(exported(urlsplit(url).path).read_text())
        assert {k: v.rstrip('/') for k, v in links.items()} == {a['hreflang']: a['href'].rstrip('/') for a in doc.links if a.get('hreflang')}
        for agent in ('Googlebot', 'bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot'):
            assert robot.can_fetch(agent, url), (agent, url)
    # A crawler must be able to fetch held pages to see noindex.
    for path in UNLISTED:
        assert robot.can_fetch('Googlebot', ORIGIN + path)
    png = (OUT / 'opengraph-image').read_bytes()
    assert png[:8] == b'\x89PNG\r\n\x1a\n' and struct.unpack('>II', png[16:24]) == (1200, 630)
    redirects = (OUT / '_redirects').read_text()
    for prefix in ('', '/ko', '/ja'):
        assert f'{prefix}/vica/relay {prefix}/relay 301' in redirects
    assert 'noindex' in Document((OUT / '404.html').read_text()).meta('robots')


def main():
    documents = [check_document(lang, path) for path in (*PUBLIC, *UNLISTED) for lang in LANGUAGES]
    check_crawl()
    titles = [doc.title for doc in documents]
    assert len(titles) == len(set(titles)), 'Every language/page needs a unique title'
    for doc in documents:
        for href in doc.hrefs:
            parsed = urlsplit(href)
            if not href.startswith('/') or parsed.netloc: continue
            target = exported(parsed.path)
            if parsed.path in ('/icon.svg',): continue
            assert target.is_file(), href
            if parsed.fragment:
                assert parsed.fragment in Document(target.read_text()).ids, href
    print('SEO PASS: 24 HTML documents; 18 sitemap URLs; languages, metadata, schemas, robots, links and PNG.')


if __name__ == '__main__':
    main()
