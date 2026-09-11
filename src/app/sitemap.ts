import type { MetadataRoute } from "next";
import { ARTICLES } from "@/i18n/dictionaries/en/blog-articles";
import { INDUSTRY_PAGES } from "@/i18n/dictionaries/en/industry-pages";
import { OBJECTIVES } from "@/i18n/dictionaries/en/objectives";
import { PILLARS } from "@/i18n/dictionaries/en/pillars";
import { RESOURCE_PAGES } from "@/i18n/dictionaries/en/resource-pages";
import {
  blogHref,
  industryHref,
  objectiveHref,
  pillarHref,
  serviceHref,
} from "@/lib/routes";
import { SERVICE_PAGE_KEYS } from "@/lib/service-keys";
import { absoluteUrl } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

const page = (
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"] = "monthly",
): Entry => ({
  url: absoluteUrl(path),
  lastModified: new Date(),
  changeFrequency,
  priority,
});

/**
 * Every public route. The detail pages are generated from the same key lists
 * their `generateStaticParams` use, so a new service, industry or resource
 * lands in the sitemap without anyone remembering to add it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    page("/solutions", 0.8),
    page("/industries", 0.8),
    page("/why-lidespy", 0.7),
    page("/calculator", 0.8),
    page("/case-studies", 0.7),
    page("/resources", 0.7, "weekly"),
    page("/blog", 0.7, "weekly"),
    page("/about", 0.6),
    page("/contact", 0.7),

    ...SERVICE_PAGE_KEYS.map((key) => page(serviceHref(key), 0.8)),
    ...OBJECTIVES.map((o) => page(objectiveHref(o.key), 0.7)),
    ...Object.keys(INDUSTRY_PAGES).map((key) => page(industryHref(key), 0.7)),
    ...PILLARS.map((p) => page(pillarHref(p.key), 0.6)),
    ...Object.keys(RESOURCE_PAGES).map((slug) => page(`/resources/${slug}`, 0.6)),
    page("/resources/webinars", 0.6),
    page("/resources/whitepapers", 0.6),
    page("/resources/media-kit", 0.5),
    ...ARTICLES.map((a) => page(blogHref(a.slug), 0.6)),

    page("/compliance/gdpr", 0.4, "yearly"),
    page("/compliance/can-spam", 0.4, "yearly"),
    page("/compliance/casl", 0.4, "yearly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
    page("/cookies", 0.3, "yearly"),
  ];
}
