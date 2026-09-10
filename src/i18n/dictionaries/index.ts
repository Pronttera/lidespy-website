import type { Locale } from "../config";
import { en } from "./en";

/**
 * Dictionaries are plain in-repo modules. English is imported eagerly because
 * Client Components read it through `I18nProvider`; additional locales should be
 * added here the same way.
 */
export const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => en,
};

/** The shape every locale's dictionary must have. */
export type Dictionary = typeof en;

export { en };
