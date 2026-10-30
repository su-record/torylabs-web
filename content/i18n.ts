// Site languages. English lives at the root paths, the others under /ja and /ko.
export const langs = ["en", "ja", "ko"] as const;
export type Lang = (typeof langs)[number];

export const langNames: Record<Lang, string> = { en: "English", ja: "日本語", ko: "한국어" };

/** Static params for app/[lang]: every language with a path prefix. */
export const prefixed = langs.filter((l) => l !== "en").map((lang) => ({ lang }));

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

/** `path` ("/", "/vica", …) in `lang`. */
export function localized(lang: Lang, path: string) {
  return lang === "en" ? path : `/${lang}${path === "/" ? "" : path}`;
}

/** Canonical and hreflang links for a page. */
export function alternates(lang: Lang, path: string) {
  return {
    canonical: localized(lang, path),
    languages: Object.fromEntries(langs.map((l) => [l, localized(l, path)])),
  };
}

// Before the page renders: an English page opens in Japanese or Korean when the
// browser prefers it, unless the visitor picked a language (links with data-lang).
export const languageScript = `(function(){
var k="lang",s;try{s=localStorage.getItem(k)}catch(e){}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-lang]");if(a)try{localStorage.setItem(k,a.dataset.lang)}catch(e){}});
var p=location.pathname,m=/^\\/(ja|ko)(\\/|$)/.exec(p);if(m){document.documentElement.lang=m[1];return}
var l=s||(navigator.languages&&navigator.languages[0]||navigator.language||"").slice(0,2).toLowerCase();
if(l==="ja"||l==="ko")location.replace("/"+l+(p==="/"?"":p)+location.search+location.hash);
})();`;
