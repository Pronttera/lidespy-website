import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight, Check, ChevronRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import { PILLARS, PILLARS_COPY, pillarByKey } from "@/i18n/dictionaries/en/pillars";
import { SERVICE_DETAILS } from "@/i18n/dictionaries/en/services";
import { pillarHref, route, serviceHref } from "@/lib/routes";

export function generateStaticParams() {
  return PILLARS.map((p) => ({ pillar: p.key }));
}

export async function generateMetadata({
  params,
}: PageProps<"/why-lidespy/[pillar]">): Promise<Metadata> {
  const pillar = pillarByKey((await params).pillar);
  if (!pillar) return {};
  return {
    title: `${pillar.name} · Lidespy`,
    description: pillar.intro,
  };
}

export default async function PillarPage({
  params,
}: PageProps<"/why-lidespy/[pillar]">) {
  const pillar = pillarByKey((await params).pillar);
  if (!pillar) notFound();

  const others = PILLARS.filter((p) => p.key !== pillar.key);
  const services = pillar.services
    .map((key) => SERVICE_DETAILS.find((s) => s.key === key))
    .filter((s) => s !== undefined);

  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="solutions" />

      {/* ═══ HERO ══════════════════════════════════════════════════════════
          The pillar is an argument, so it opens the way the Why Lidespy page
          does — dark, oversized claim on the left, the numbers that back it
          stacked beside it. */}
      <section className="dc-rules-dark relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[30%] -left-[10%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.26),transparent_62%)] blur-[12px]"
        />

        <div className="relative mx-auto grid max-w-[1280px] items-start gap-[clamp(36px,5vw,80px)] page-x pt-[clamp(40px,4.5vw,72px)] pb-[clamp(48px,5vw,80px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
          <div className="flex flex-col gap-[clamp(22px,2.4vw,32px)]">
            <Link
              href={route("Why Lidespy.dc.html")}
              className="inline-flex items-center gap-2 self-start text-[11px] font-semibold tracking-[0.12em] text-cream/50 uppercase transition-colors hover:text-coral"
            >
              <span className="text-coral">←</span>
              {PILLARS_COPY.backLabel}
            </Link>

            <div className="self-start">
              <Eyebrow tone="coral">{pillar.eyebrow}</Eyebrow>
            </div>

            <h1 className="m-0 text-[clamp(36px,5vw,74px)] leading-[1.02] font-normal tracking-[-0.035em] text-balance">
              {pillar.titleLead}{" "}
              <span className="text-coral">{pillar.titleAccent}</span>
            </h1>

            <p className="m-0 max-w-[58ch] text-[clamp(15px,1.25vw,18.5px)] leading-[1.62] text-cream/70 text-pretty">
              {pillar.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={route("Contact.dc.html")}
                className="inline-flex items-center gap-3 rounded-ui bg-brand-cta px-7 py-[17px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
              >
                {pillar.cta.button}
                <ArrowRight />
              </Link>
              <Link
                href="#how"
                className="inline-flex items-center gap-3 rounded-ui border border-cream/30 px-[22px] py-[17px] text-[12px] font-semibold tracking-[0.04em] text-cream uppercase transition-colors hover:border-coral hover:text-coral"
              >
                {PILLARS_COPY.sectionsLabel}
                <span className="text-coral">↓</span>
              </Link>
            </div>
          </div>

          <div className="rounded-card border border-cream/14 bg-cream/[0.045] p-[clamp(20px,2vw,28px)]">
            <div className="mb-4 border-b border-cream/14 pb-4 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
              {PILLARS_COPY.statsLabel}
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7">
              {pillar.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[clamp(26px,2.6vw,34px)] leading-none font-medium tracking-[-0.03em] text-coral">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[12.5px] leading-[1.45] text-cream/60 text-pretty">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ══════════════════════════════════════════════════
          A sticky index on the left against the numbered sections, matching
          the two-column rhythm the Services page already uses. */}
      <section id="how" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(48px,5vw,84px)]">
        <div className="grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-26 lg:self-start">
            <Eyebrow>{PILLARS_COPY.sectionsLabel}</Eyebrow>
            <div className="mt-6 flex flex-col">
              {pillar.sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-baseline gap-3 border-b border-ink/12 py-3 text-[14px] leading-[1.35] text-muted transition-colors hover:text-brand"
                >
                  <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">{s.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            {pillar.sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-24 border-b border-ink/15 py-[clamp(32px,3.5vw,52px)] first:pt-0"
              >
                <div className="mb-5 flex items-center gap-3.5">
                  <span className="text-[12px] font-semibold tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
                </div>
                <h2 className="m-0 text-[clamp(24px,2.8vw,38px)] leading-[1.08] font-medium tracking-[-0.028em] text-pretty">
                  {s.title}
                </h2>
                <p className="mt-4 mb-0 max-w-[62ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
                  {s.body}
                </p>
                <div className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {s.points.map((pt) => (
                    <div
                      key={pt}
                      className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-ink"
                    >
                      <Check size={13} className="mt-1 shrink-0 text-brand" />
                      <span className="text-pretty">{pt}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES BUILT ON THIS ════════════════════════════════════════ */}
      <section className="bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
          <Eyebrow>{PILLARS_COPY.servicesLabel}</Eyebrow>
          <p className="mt-5 mb-8 max-w-[52ch] text-[clamp(17px,1.6vw,24px)] leading-[1.35] font-medium tracking-[-0.02em] text-ink text-pretty">
            {PILLARS_COPY.servicesIntro}
          </p>
          <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {services.map((s) => (
              <Link
                key={s.key}
                href={serviceHref(s.key)}
                className="flex flex-col gap-3 rounded-card border border-ink/12 bg-white px-[22px] pt-[22px] pb-6 transition-colors hover:border-brand/45"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink text-pretty">
                    {s.name}
                  </div>
                  <ArrowRight className="mt-1 shrink-0 text-brand opacity-75" />
                </div>
                <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">
                  {s.overview}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE OTHER PILLARS ═════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,72px)]">
        <Eyebrow>{PILLARS_COPY.otherLabel}</Eyebrow>
        <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.key}
              href={pillarHref(p.key)}
              className="group flex flex-col gap-3 rounded-card border border-ink/14 px-[26px] pt-6 pb-7 transition-colors hover:border-brand/45 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-[clamp(20px,2vw,26px)] leading-[1.15] font-medium tracking-[-0.022em] text-ink text-pretty">
                  {p.name}
                </div>
                <ChevronRight className="mt-1.5 shrink-0 text-brand" />
              </div>
              <div className="text-[14px] leading-[1.6] text-muted text-pretty">
                {p.intro}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════════════════════════ */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">
            {pillar.cta.title}
          </h2>
          <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            {pillar.cta.body}
          </p>
          <Link
            href={route("Contact.dc.html")}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            {pillar.cta.button}
            <ArrowRight />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
