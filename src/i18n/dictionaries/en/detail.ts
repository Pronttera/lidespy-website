/**
 * The shape shared by every non-service detail page — pillars, objectives,
 * industries and resources all run the same structure: a hero built from the
 * title and stats, a numbered section run, a set of related services, and a
 * closing CTA. Services have their own richer shape in `service-pages.ts`.
 */

import type { ServicePageKey } from "../../../lib/service-keys";

export type DetailStat = { value: string; label: string };

export type DetailSection = {
  /** Anchor id — also the hero's "on this page" target. */
  id: string;
  title: string;
  body: string;
  points: string[];
};

export type DetailCopy = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  stats: DetailStat[];
  sections: DetailSection[];
  /** Services to surface at the foot of the page. */
  services: ServicePageKey[];
  cta: { title: string; body: string; button: string };
};
