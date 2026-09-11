/**
 * The site's public origin. Canonical tags, the sitemap, robots.txt and the
 * structured data all build absolute URLs from this, so a staging deploy can
 * point them at itself by setting `NEXT_PUBLIC_SITE_URL`.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidespy.com"
).replace(/\/+$/, "");

export const SITE_NAME = "Lidespy";

/** `/services/abm` → `https://lidespy.com/services/abm`. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
