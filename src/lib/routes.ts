/**
 * The design project links between `*.dc.html` artboards; this maps each one to
 * its route in the app. Anything unmapped resolves to "#".
 */
const ROUTES: Record<string, string> = {
  "Lidespy Home.dc.html": "/",
  "Services.dc.html": "/services",
  "Solutions.dc.html": "/solutions",
  "Industries.dc.html": "/industries",
  "About.dc.html": "/about",
  "Why Lidespy.dc.html": "/why-lidespy",
  "Resources.dc.html": "/resources",
  "Blog.dc.html": "/blog",
  "Case Studies.dc.html": "/case-studies",
  "Contact.dc.html": "/contact",
  "Calculator.dc.html": "/calculator",
};

export function route(designHref: string): string {
  const [target, hash] = designHref.split("#");
  // In-page anchors ("#cta") stay as-is.
  if (!target) return `#${hash}`;
  // A design href may carry a query ("Resources.dc.html?type=reports"): the
  // App Router re-renders a page when its search params change, which a bare
  // fragment does not do, so deep links that must drive page state use one.
  const [file, query] = target.split("?");
  const path = ROUTES[file];
  if (!path) return "#";
  return `${path}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

/**
 * The slug an anchor uses on a service detail page. Deliverable names are the
 * link text in the mega-menu and the section heading on the page, so both ends
 * derive the anchor from the same string.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’'"()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Services with a page of their own. Everything else still resolves to its
 * section on `/services`, so the menu stays complete while the detail pages
 * are written one at a time.
 *
 * This mirrors the keys in `en/service-pages.ts`, deliberately: the nav is a
 * client component, and importing that file here would ship every service
 * page's copy to the browser. Add a key in both places.
 */
const SERVICE_PAGE_KEYS = new Set([
  "demand-generation",
  "content-syndication",
  "abm",
]);

export function hasServicePage(key: string | undefined): boolean {
  return !!key && SERVICE_PAGE_KEYS.has(key);
}

/**
 * Where a service link points. A service with its own page gets it; the rest
 * fall back to their anchor on the services overview. `deliverable` deep-links
 * to that deliverable's section, and is ignored when there is no page to
 * anchor into.
 */
export function serviceHref(key: string | undefined, deliverable?: string): string {
  if (!key) return "/services";
  if (!hasServicePage(key)) return `/services#${key}`;
  return deliverable
    ? `/services/${key}#${slugify(deliverable)}`
    : `/services/${key}`;
}

/** The three "Why Lidespy" pillars each have a page under the parent route. */
export function pillarHref(key: string): string {
  return `/why-lidespy/${key}`;
}

/** Resource categories deep-link into the page that hosts them. */
export function resourceHref(cat: "blog" | "reports" | "insights"): string {
  return cat === "blog" ? "Blog.dc.html" : "#";
}
