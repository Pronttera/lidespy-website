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
import { RATES } from "@/lib/calculator";

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

const usd = (n: number) => "$" + n.toLocaleString("en-US");

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
            <div className="grid gap-3.5 sm:grid-cols-2">
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

      {/* RATE CARD */}
      <section id="rate-card" className="scroll-mt-24 border-t border-ink/12">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(48px,5vw,84px)]">
          <div className="mb-10 grid items-end gap-[clamp(24px,4vw,64px)] lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 self-start">
                <Eyebrow>{T.rateCard.eyebrow}</Eyebrow>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                  {T.rateCard.effective}
                </span>
              </div>
              <h2 className="m-0 text-[clamp(28px,3vw,42px)] leading-[1.06] font-medium tracking-[-0.028em] text-pretty">
                {T.rateCard.title}
              </h2>
            </div>
            <p className="m-0 max-w-[52ch] text-[15px] leading-[1.65] text-muted text-pretty">
              {T.rateCard.intro}
            </p>
          </div>

          {/* The table scrolls inside its own box rather than the page. */}
          <div className="overflow-x-auto rounded-card border border-ink/14 bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-panel">
                  <th className="px-5 py-4 text-[11px] font-semibold tracking-[0.1em] text-muted-2 uppercase">
                    {T.rateCard.columns.category}
                  </th>
                  <th className="px-5 py-4 text-[11px] font-semibold tracking-[0.1em] text-muted-2 uppercase">
                    {T.rateCard.columns.cpl}
                  </th>
                  <th className="px-5 py-4 text-[11px] font-semibold tracking-[0.1em] text-muted-2 uppercase">
                    {T.rateCard.columns.whatYouGet}
                  </th>
                  <th className="px-5 py-4 text-[11px] font-semibold tracking-[0.1em] text-muted-2 uppercase">
                    {T.rateCard.columns.benchmark}
                  </th>
                </tr>
              </thead>
              <tbody>
                {RATES.map((r) => (
                  <tr key={r.campaignType} className="border-t border-ink/12 align-top">
                    <td className="px-5 py-[18px] text-[14.5px] font-semibold tracking-[-0.01em] text-ink">
                      {T.campaignTypes[
                        r.campaignType as keyof typeof T.campaignTypes
                      ] ?? r.campaignType}
                    </td>
                    <td className="px-5 py-[18px] text-[14.5px] font-semibold whitespace-nowrap tabular-nums text-brand">
                      {r.pricePerLead === r.pricePerLeadMax
                        ? usd(r.pricePerLead)
                        : `${usd(r.pricePerLead)} – ${usd(r.pricePerLeadMax)}`}
                    </td>
                    <td className="max-w-[420px] px-5 py-[18px] text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                      {r.whatYouGet}
                    </td>
                    <td className="px-5 py-[18px] text-[13px] leading-[1.5] text-muted-3 text-pretty">
                      {r.benchmark}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How the same lead prices elsewhere — the rate card's own comparison. */}
          <div className="mt-6 grid gap-3.5 rounded-card border border-ink/12 bg-panel p-[clamp(20px,2.2vw,28px)] sm:grid-cols-2">
            <div className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase sm:col-span-2">
              {T.rateCard.marketNote.label}
            </div>
            {T.rateCard.marketNote.items.map((m) => (
              <p
                key={m}
                className="m-0 text-[13.5px] leading-[1.6] text-muted text-pretty"
              >
                {m}
              </p>
            ))}
          </div>

          <p className="mt-5 max-w-[80ch] text-[12.5px] leading-[1.6] text-muted-3 text-pretty">
            {T.rateCard.note}
          </p>

          <div className="mt-10 grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
            {T.rateCard.proof.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-2.5 rounded-card border border-ink/12 bg-white px-[22px] pt-5 pb-6"
              >
                <div className="text-[11px] font-semibold tracking-[0.1em] text-brand uppercase">
                  {p.title}
                </div>
                <p className="m-0 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
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
