import { isServicePageKey } from "./service-keys";

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

export { isServicePageKey as hasServicePage };

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
 * Where a service link points. A service with its own page gets it; anything
 * else falls back to its anchor on the services overview. `deliverable`
 * deep-links to that deliverable's section — the anchor is derived from the
 * same string the page headings use, which is why the mega-menu labels in
 * `en/nav.ts` have to match the deliverable names in `en/services.ts`.
 */
export function serviceHref(key: string | undefined, deliverable?: string): string {
  if (!key) return "/services";
  if (!isServicePageKey(key)) return `/services#${key}`;
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
