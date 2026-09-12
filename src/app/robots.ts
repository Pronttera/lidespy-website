import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** The site is statically exported, so this file is generated at build time. */
export const dynamic = "force-static";

/**
 * Everything on the site is public marketing content, so all crawlers —
 * search engines and the AI assistants that cite pages in their answers — are
 * allowed in. Only framework internals are kept out.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
