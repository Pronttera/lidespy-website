/**
 * The English dictionary. It is the reference locale: `Dictionary` is derived
 * from this object, so any locale added later has to provide the same shape.
 */

import { ABOUT } from "./about";
import { BLOG_COPY, FEATURED, POSTS as BLOG_POSTS, TOPICS } from "./blog";
import { CALCULATOR } from "./calculator";
import {
  CASE_STUDIES_COPY,
  HEADLINE_STATS,
  STUDIES,
  STUDY_FILTERS,
} from "./case-studies";
import { ACTIONS, BRAND, FOOTER, NAV_UI } from "./common";
import { CONTACT } from "./contact";
import {
  CASES,
  CHALLENGE_CARDS,
  COMPARE_LABEL,
  COMPARE_ROWS,
  HOME_COPY,
  HOME_SERVICES,
  LOGOS,
  POSTS as HOME_POSTS,
  QUOTES,
  STATS,
  STEPS,
} from "./home";
import { INDUSTRIES_COPY, INDUSTRIES_LIST } from "./industries";
import { GRIDS, MENUS, NAV_ITEMS } from "./nav";
import { PILLARS, PILLARS_COPY } from "./pillars";
import { RESOURCES, RESOURCES_COPY, RESOURCE_FILTERS } from "./resources";
import { SERVICE_PAGES, SERVICE_PAGE_COPY } from "./service-pages";
import { SERVICES_COPY, SERVICE_DETAILS } from "./services";
import {
  INDUSTRY_SOLUTIONS,
  OBJECTIVE_SOLUTIONS,
  SOLUTIONS_COPY,
} from "./solutions";

export const en = {
  brand: BRAND,
  actions: ACTIONS,
  nav: { ...NAV_UI, items: NAV_ITEMS, menus: MENUS, grids: GRIDS },
  footer: FOOTER,
  home: {
    ...HOME_COPY,
    logos: { ...HOME_COPY.logos, items: LOGOS },
    challenge: { ...HOME_COPY.challenge, cards: CHALLENGE_CARDS },
    process: { ...HOME_COPY.process, steps: STEPS },
    solution: { ...HOME_COPY.solution, services: HOME_SERVICES },
    work: { ...HOME_COPY.work, cases: CASES },
    whyUs: {
      ...HOME_COPY.whyUs,
      stats: STATS,
      compareLabel: COMPARE_LABEL,
      compareRows: COMPARE_ROWS,
    },
    testimonials: { ...HOME_COPY.testimonials, quotes: QUOTES },
    insights: { ...HOME_COPY.insights, posts: HOME_POSTS },
  },
  services: {
    ...SERVICES_COPY,
    details: SERVICE_DETAILS,
    page: { ...SERVICE_PAGE_COPY, byKey: SERVICE_PAGES },
  },
  pillars: { ...PILLARS_COPY, items: PILLARS },
  solutions: {
    ...SOLUTIONS_COPY,
    byIndustry: INDUSTRY_SOLUTIONS,
    byObjective: OBJECTIVE_SOLUTIONS,
  },
  industries: { ...INDUSTRIES_COPY, list: INDUSTRIES_LIST },
  caseStudies: {
    ...CASE_STUDIES_COPY,
    headlineStats: HEADLINE_STATS,
    studies: STUDIES,
    filters: STUDY_FILTERS,
  },
  resources: {
    ...RESOURCES_COPY,
    items: RESOURCES,
    filters: RESOURCE_FILTERS,
  },
  blog: {
    ...BLOG_COPY,
    featured: { ...BLOG_COPY.featured, ...FEATURED },
    posts: BLOG_POSTS,
    topics: TOPICS,
  },
  about: ABOUT,
  contact: CONTACT,
  calculator: CALCULATOR,
};

export default en;
