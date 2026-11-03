import type { MetadataRoute } from "next";
import { absoluteUrl, publicPaths } from "@/content/seo";
import { alternates, langs, localized } from "@/content/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // No synthetic lastModified: rebuild time is not a content update.
  return publicPaths.flatMap((path) => langs.map((lang) => ({
    url: absoluteUrl(localized(lang, path)),
    alternates: {
      languages: Object.fromEntries(Object.entries(alternates(lang, path).languages)
        .map(([language, href]) => [language, absoluteUrl(href)])),
    },
  })));
}
