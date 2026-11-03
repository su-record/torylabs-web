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
    languages: { ...Object.fromEntries(langs.map((l) => [l, localized(l, path)])), "x-default": localized("en", path) },
  };
}
