import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight } from "@/components/icons";
import { Eyebrow, Slot } from "@/components/ui";
import { INDUSTRIES_LIST } from "@/i18n/dictionaries/en/industries";
import { route } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Industries · Lidespy",
  description:
    "B2B demand generation specialized for technology, SaaS, cybersecurity, fintech, healthcare and more.",
};

export default function IndustriesPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="enable" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-[clamp(32px,5vw,80px)] page-x pt-[clamp(64px,7vw,104px)] pb-[clamp(56px,6vw,88px)] lg:grid-cols-[minmax(0,1fr)_minmax(300px,.9fr)]">
          <div className="flex flex-col gap-7">
            <div className="inline-block self-start border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              Industries · 9 sectors
            </div>
            <h1 className="m-0 text-[clamp(40px,5.2vw,80px)] leading-none font-normal tracking-[-0.035em] text-pretty">
              B2B demand generation{" "}
              <span className="text-coral">specialized for your industry</span>.
            </h1>
            <p className="m-0 max-w-[600px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
              We understand the buying cycles, personas, and competitive dynamics
              of the industries we serve. Every campaign is built with industry
              context, not generic templates.
            </p>
            <Link
              href={route("Contact.dc.html")}
              className="inline-flex items-center gap-3 self-start rounded-ui bg-brand-cta px-7 py-[17px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
            >
              Book a strategy call
              <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {INDUSTRIES_LIST.map((t, n) => (
              <a
                key={t.key}
                href={`#${t.key}`}
                className={`flex aspect-square flex-col justify-end rounded-card border border-cream/16 p-3.5 transition-colors hover:border-coral hover:text-coral ${
                  n === 0 ? "bg-coral text-ink" : "bg-cream/4 text-cream"
                }`}
              >
                <span className="text-[12.5px] leading-[1.25] font-medium tracking-[-0.01em] text-pretty">
                  {t.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6vw,88px)]">
        <div className="mb-10 grid items-end gap-[clamp(28px,4vw,64px)] lg:grid-cols-2">
          <div>
            <div className="mb-[18px]">
              <Eyebrow>Industries we serve</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
              Built for B2B. Specialized by industry.
            </h2>
          </div>
          <p className="m-0 text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
            Every industry page follows the same structure: an overview, the job
            titles we reach, estimated audience reach, two or three campaign use
            cases, and the services that fit.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {INDUSTRIES_LIST.map((i) => (
            <Link
              key={i.key}
              id={i.key}
              href={route("Contact.dc.html")}
              className="flex scroll-mt-24 flex-col overflow-hidden rounded-ui border border-ink/14 bg-white text-ink transition-colors hover:border-brand/55"
            >
              <Slot
                src={i.img}
                alt={i.name}
                credit={i.credit}
                creditHref={i.creditHref}
                sizes="(max-width: 640px) 100vw, 33vw"
                className="aspect-video"
              />
              <div className="flex flex-1 flex-col gap-3 px-6 pt-6 pb-[26px]">
                <h3 className="m-0 text-[20px] leading-[1.2] font-semibold tracking-[-0.018em]">
                  {i.name}
                </h3>
                <p className="m-0 flex-1 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                  {i.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {i.personas.map((p) => (
                    <span
                      key={p}
                      className="rounded-ui border border-ink/10 bg-panel px-2 py-1 text-[11px] text-ink"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <span className="mt-1 inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.05em] text-brand uppercase">
                  Explore
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-pretty">
            Your industry, <span className="text-coral">your buyers</span>, our
            campaigns.
          </h2>
          <p className="m-0 max-w-[600px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            Tell us who you sell to. We&apos;ll show you the audience we can reach
            and the campaigns that have worked in your sector.
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
