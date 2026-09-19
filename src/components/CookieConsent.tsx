"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Cookie banner and the only place analytics is loaded. Nothing from Google or
 * Microsoft is requested until the visitor allows it; a denial is remembered
 * and neither GA nor Clarity ever loads for them. Mounted once in the root
 * layout; the footer's "Cookie settings" calls `openCookieSettings()` to
 * reopen it.
 */
const GA_ID = "G-PL0XQ1LZ7M";
const CLARITY_ID = "yjbzvjlmzo";
const STORAGE_KEY = "lidespy-cookie-consent";
const OPEN_EVENT = "lidespy:open-cookie-settings";

type Choice = "granted" | "denied";

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const COPY = {
  title: "We use cookies for analytics only",
  body: "With your permission, we use Google Analytics and Microsoft Clarity to understand how visitors use this site so we can improve it. No advertising, no selling your data.",
  policy: "Cookie Policy",
  allow: "Allow cookies",
  deny: "Deny",
};

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : memoryChoice;
  } catch {
    return memoryChoice;
  }
}

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function saveChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice holds until the next page load.
    memoryChoice = choice;
  }
  listeners.forEach((l) => l());
}

let memoryChoice: Choice | null = null;

/** Removes the cookies GA and Clarity set before the visitor withdrew consent. */
function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    const analytics =
      name.startsWith("_ga") || name === "_clck" || name === "_clsk" || name === "CLID";
    if (!analytics) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

export default function CookieConsent() {
  // "unset" on the server, so neither the banner nor GA renders before hydration.
  const choice = useSyncExternalStore<Choice | null | "unset">(subscribe, readChoice, () => "unset");
  const [reopened, setReopened] = useState(false);
  const open = choice === null || reopened;

  useEffect(() => {
    const onOpen = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  function decide(next: Choice) {
    if (next === "denied" && choice === "granted") {
      // GA is already running on this page; stop it and drop its cookies.
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        clarity?: (...args: unknown[]) => void;
      };
      w.gtag?.("consent", "update", { analytics_storage: "denied" });
      (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
      w.clarity?.("consent", false);
      clearAnalyticsCookies();
    }
    if (next === "granted" && choice === "denied") {
      // Re-enable a GA instance switched off earlier on this same page view.
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        clarity?: (...args: unknown[]) => void;
      };
      (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = false;
      w.gtag?.("consent", "update", { analytics_storage: "granted" });
      w.clarity?.("consent", true);
    }
    setReopened(false);
    saveChoice(next);
  }

  return (
    <>
      {choice === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window['ga-disable-${GA_ID}'] = false;
              gtag('consent', 'update', { analytics_storage: 'granted' });
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
              window.clarity('consent', true);
            `}
          </Script>
        </>
      )}

      {open && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-65 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[400px]"
        >
          <div className="rounded-card border border-ink/12 bg-white p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] sm:p-6">
            <h2 className="m-0 text-[16px] leading-[1.3] font-medium tracking-[-0.01em] text-ink">
              {COPY.title}
            </h2>
            <p className="mt-2 mb-0 text-[13px] leading-[1.6] text-muted-2 text-pretty">
              {COPY.body}{" "}
              <Link href="/cookies" className="text-ink underline underline-offset-2 hover:text-brand">
                {COPY.policy}
              </Link>
            </p>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => decide("granted")}
                className="flex-1 cursor-pointer rounded-ui bg-brand-cta px-4 py-3 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
              >
                {COPY.allow}
              </button>
              <button
                type="button"
                onClick={() => decide("denied")}
                className="flex-1 cursor-pointer rounded-ui border border-ink/20 px-4 py-3 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase transition-colors hover:border-ink"
              >
                {COPY.deny}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Footer link that reopens the banner so a visitor can change their choice. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie settings
    </button>
  );
}
