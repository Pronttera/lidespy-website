"use client";

import { createContext, useContext } from "react";
import { defaultLocale, localeTags, type Locale } from "./config";
import type { Dictionary } from "./dictionaries";

type I18nValue = { locale: Locale; dict: Dictionary };

const I18nContext = createContext<I18nValue | null>(null);

/**
 * Makes the active locale's dictionary available to Client Components. Server
 * Components should call `getDictionary()` instead of reading this context.
 */
export function I18nProvider({
  locale,
  dict,
  children,
}: I18nValue & { children: React.ReactNode }) {
  return (
    <I18nContext.Provider value={{ locale, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useDictionary must be used inside <I18nProvider>");
  }
  return value;
}

/** The full dictionary for the active locale. */
export function useDictionary(): Dictionary {
  return useI18n().dict;
}

export function useLocale(): Locale {
  return useI18n().locale;
}

/** The BCP 47 tag for the active locale, for client-side `Intl` formatting. */
export function useLocaleTag(): string {
  return localeTags[useContext(I18nContext)?.locale ?? defaultLocale];
}
