/**
 * The services that have a detail page at `/services/<key>`.
 *
 * This lives in its own module so the nav — a client component — can decide
 * where a service link points without pulling every service page's copy into
 * the browser bundle. `SERVICE_PAGES` in `en/service-pages.ts` is a record
 * over this union, so adding a key here fails to compile until its page copy
 * exists, and removing one leaves no orphaned entry behind.
 */
export const SERVICE_PAGE_KEYS = [
  "demand-generation",
  "content-syndication",
  "abm",
  "email-marketing",
  "audience-intelligence",
  "b2b-data",
  "webinar-promotion",
  "appointment-generation",
  "gtm-strategy",
  "ai-visibility",
  "performance-marketing",
  "website-design",
] as const;

export type ServicePageKey = (typeof SERVICE_PAGE_KEYS)[number];

export function isServicePageKey(key: string | undefined): key is ServicePageKey {
  return !!key && (SERVICE_PAGE_KEYS as readonly string[]).includes(key);
}
