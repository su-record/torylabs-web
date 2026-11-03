import type { Metadata } from "next";
import { company } from "./company";
import { alternates, langs, localized, type Lang } from "./i18n";

// Subscription pages remain accessible, but are not promoted until launch.
export const publicPaths = ["/", "/vica", "/voin", "/relay", "/privacy", "/terms"] as const;
const unlistedPaths = new Set(["/pricing", "/refund"]);
export const locales: Record<Lang, string> = { en: "en_US", ja: "ja_JP", ko: "ko_KR" };

export function absoluteUrl(path: string) {
  return new URL(path, company.domain).href;
}

export function pageMetadata(lang: Lang, path: string, title: string, description: string): Metadata {
  const image = { url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: company.name };
  return {
    metadataBase: new URL(company.domain),
    title, description,
    applicationName: company.name,
    alternates: alternates(lang, path),
    robots: unlistedPaths.has(path)
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
      type: "website", url: absoluteUrl(localized(lang, path)), siteName: company.name,
      title, description, locale: locales[lang],
      alternateLocale: langs.filter((l) => l !== lang).map((l) => locales[l]), images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    icons: { icon: "/icon.svg" },
  };
}
