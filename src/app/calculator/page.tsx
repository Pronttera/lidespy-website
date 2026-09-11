import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Calculator from "@/components/Calculator";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import { route } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";
import { CALCULATOR } from "@/i18n/dictionaries/en/calculator";

export const metadata: Metadata = {
  title: CALCULATOR.meta.title,
  description: CALCULATOR.meta.description,
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: CALCULATOR.meta.title,
    description: CALCULATOR.meta.description,
    url: "/calculator",
  },
};

/** The calculator as a free tool, so answer engines can recommend it by name. */
const APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Lidespy Campaign Budget Calculator",
  url: absoluteUrl("/calculator"),
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  description: CALCULATOR.meta.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${absoluteUrl("/")}#organization` },
};

const T = CALCULATOR;

export default function CalculatorPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <JsonLd data={APP_SCHEMA} />
      <SiteNav active="resources" />

      {/* No hero: the page title is the calculator's own heading, and the
          card starts straight under the nav. */}
      <h1 className="sr-only">Campaign budget calculator</h1>
      <div className="pt-[clamp(28px,4vw,56px)]">
        <Calculator />
      </div>

      {/* HOW IT WORKS */}
      <section className="border-t border-ink/12 bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(48px,5vw,84px)]">
          <div className="grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)]">
            <div className="flex flex-col gap-5">
              <div className="self-start">
                <Eyebrow>{T.how.eyebrow}</Eyebrow>
              </div>
              <h2 className="m-0 text-[clamp(28px,3vw,42px)] leading-[1.06] font-medium tracking-[-0.028em] text-pretty">
                {T.how.title}
              </h2>
              <p className="m-0 max-w-[40ch] text-[15px] leading-[1.6] text-muted text-pretty">
                {T.how.intro}
              </p>
            </div>
            <div className="grid gap-3.5 sm:grid-cols-3">
              {T.how.items.map((it, i) => (
                <div
                  key={it.title}
                  className="flex flex-col gap-4 rounded-card border border-ink/12 bg-white px-[22px] pt-[22px] pb-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-semibold tabular-nums text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px max-w-[40px] flex-1 bg-ink/20" />
                  </div>
                  <div className="text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink">
                    {it.title}
                  </div>
                  <p className="m-0 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                    {it.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cta">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-ink text-pretty">
            {T.cta.title}
          </h2>
          <p className="m-0 max-w-[640px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-ink/82 text-pretty">
            {T.cta.body}
          </p>
          <Link
            href={route("Contact.dc.html")}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-ink px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-coral uppercase transition-colors hover:bg-brand hover:text-cream"
          >
            {T.cta.button}
            <ArrowRight />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
