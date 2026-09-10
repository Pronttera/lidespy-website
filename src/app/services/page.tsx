import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight, Check } from "@/components/icons";
import { SERVICE_DETAILS } from "@/i18n/dictionaries/en/services";
import { hasServicePage, route, serviceHref } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Services · Lidespy",
  description:
    "Demand generation services that drive real revenue — from audience intelligence to appointment setting.",
};

export default function ServicesPage() {
  const ticker = [...SERVICE_DETAILS, ...SERVICE_DETAILS].map((s) => s.name);

  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="solutions" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-start gap-[clamp(32px,5vw,80px)] page-x pt-[clamp(64px,7vw,104px)] pb-[clamp(48px,5vw,72px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)]">
          <div className="flex flex-col gap-7">
            <div className="inline-block self-start border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              Services · 12 ways to fill your pipeline
            </div>
            <h1 className="m-0 text-[clamp(40px,5.2vw,80px)] leading-none font-normal tracking-[-0.035em] text-pretty">
              Demand generation services that drive{" "}
              <span className="text-coral">real revenue</span>.
            </h1>
            <p className="m-0 max-w-[640px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
              From audience intelligence to appointment setting — every service
              we offer is designed to accelerate your pipeline and contribute
              measurably to revenue.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={route("Contact.dc.html")}
                className="inline-flex items-center gap-3 rounded-ui bg-brand-cta px-7 py-[17px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
              >
                Book a strategy call
                <ArrowRight />
              </Link>
              <Link
                href={route("Calculator.dc.html")}
                className="inline-flex items-center gap-3 rounded-ui border border-cream/30 px-[22px] py-[17px] text-[12px] font-semibold tracking-[0.04em] text-cream uppercase transition-colors hover:border-coral hover:text-coral"
              >
                Estimate a campaign budget
              </Link>
            </div>
          </div>

          <div className="rounded-card border border-cream/16 bg-cream/4 px-[22px] pt-[22px] pb-3">
            <div className="mb-2.5 text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
              Index
            </div>
            {SERVICE_DETAILS.map((s, i) => (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="flex items-baseline gap-2.5 border-b border-cream/10 py-[7px] text-[13.5px] text-cream transition-colors hover:text-coral"
              >
                <span className="w-[22px] shrink-0 text-[10.5px] tabular-nums text-coral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 leading-[1.3]">{s.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-cream/12 py-3.5">
          <div className="ld-marquee [animation-duration:48s]">
            {ticker.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-[18px] px-[22px] text-[12px] tracking-[0.1em] whitespace-nowrap text-cream/55 uppercase"
              >
                {t}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      <div className="mx-auto max-w-[1280px] page-x pt-4 pb-16">
        {SERVICE_DETAILS.map((s, i) => (
          <section
            key={s.key}
            id={s.key}
            className="grid scroll-mt-24 items-start gap-[clamp(28px,5vw,80px)] border-b border-ink/15 py-[clamp(48px,5vw,72px)] lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]"
          >
            <div className="flex flex-col gap-5 lg:sticky lg:top-26">
              <div className="flex items-center gap-3.5">
                <span className="text-[12px] font-semibold tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
              </div>
              <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
                {s.name}
              </h2>
              <p className="m-0 text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
                {s.overview}
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href={route("Contact.dc.html")}
                  className="inline-flex items-center gap-3 rounded-ui bg-brand-cta px-6 py-[15px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
                >
                  {s.cta}
                  <ArrowRight size={13} />
                </Link>
                {/* Only the services with a page of their own get the deep link;
                    the rest are fully described by this section. */}
                {hasServicePage(s.key) && (
                  <Link
                    href={serviceHref(s.key)}
                    className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase transition-colors hover:text-brand"
                  >
                    Full service detail
                    <ArrowRight size={13} className="text-brand" />
                  </Link>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3.5 rounded-ui border border-ink/14 bg-white px-6 py-[26px]">
                <div className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                  Key benefits
                </div>
                {s.benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-ink"
                  >
                    <Check size={13} className="mt-1 shrink-0 text-brand" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3.5 rounded-ui border border-ink/10 bg-panel px-6 py-[26px]">
                <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                  Deliverables
                </div>
                {s.deliverables.map((d) => (
                  <div
                    key={d}
                    className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-muted"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-pretty">
            Not sure which service fits?{" "}
            <span className="text-coral">Start with a conversation.</span>
          </h2>
          <p className="m-0 max-w-[600px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            Our team will review your goals and recommend the right mix of
            channels for your budget and timeline.
          </p>
          <Link
            href={route("Contact.dc.html")}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Book a strategy call
            <ArrowRight />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
