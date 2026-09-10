/**
 * Locale configuration. Translations live in-repo under
 * `src/i18n/dictionaries/<locale>` — there is no translation service or runtime
 * fetch involved. English is currently the only locale; adding one means adding
 * a dictionary directory and listing it here.
 */

export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** BCP 47 tags used for `Intl` formatting and the `<html lang>` attribute. */
export const localeTags: Record<Locale, string> = {
  en: "en-US",
};
