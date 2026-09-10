import { cache } from "react";
import { defaultLocale, isLocale, localeTags, type Locale } from "./config";
import type { Dictionary } from "./dictionaries";
import { dictionaries } from "./dictionaries";

/**
 * The active locale for the current request.
 *
 * There is no locale routing yet (English is the only locale), so this always
 * resolves to `defaultLocale`. When locale routing lands — a `[lang]` segment,
 * a cookie, or an `Accept-Language` negotiation — this is the single place that
 * has to change; every caller already goes through it.
 */
export const getLocale = cache(async (): Promise<Locale> => defaultLocale);

/** Loads the dictionary for a locale, falling back to `defaultLocale`. */
export async function getDictionary(locale?: string): Promise<Dictionary> {
  const resolved =
    locale !== undefined && isLocale(locale) ? locale : await getLocale();
  return dictionaries[resolved]();
}

/** The BCP 47 tag for the active locale, for `Intl` and `<html lang>`. */
export async function getLocaleTag(): Promise<string> {
  return localeTags[await getLocale()];
}
