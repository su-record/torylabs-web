import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Let crawlers read noindex on unlisted pages; blocking them here would prevent it.
  return { rules: { userAgent: "*", allow: "/" }, sitemap: absoluteUrl("/sitemap.xml") };
}
