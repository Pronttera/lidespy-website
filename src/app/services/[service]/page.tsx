import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ButtonMotion from "@/components/ButtonMotion";
import DetailHero from "@/components/DetailHero";
import DetailHeroMotion from "@/components/DetailHeroMotion";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight, Check, ChevronRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import {
  SERVICE_PAGE_COPY,
  servicePageByKey,
} from "@/i18n/dictionaries/en/service-pages";
import { SERVICE_DETAILS } from "@/i18n/dictionaries/en/services";
import { route, serviceHref, slugify } from "@/lib/routes";
import { SERVICE_PAGE_KEYS } from "@/lib/service-keys";

export function generateStaticParams() {
  return SERVICE_PAGE_KEYS.map((service) => ({ service }));
}

/** The shared detail and the page-only copy, resolved together or not at all. */
function load(key: string) {
  const detail = SERVICE_DETAILS.find((s) => s.key === key);
  const page = servicePageByKey(key);
  return detail && page ? { detail, page } : null;
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[service]">): Promise<Metadata> {
  const found = load((await params).service);
  if (!found) return {};
  return {
    title: `${found.detail.name} · Lidespy`,
    description: found.page.intro,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[service]">) {
  const found = load((await params).service);
  if (!found) notFound();
  const { detail, page } = found;

  // The mega-menu links to `#<slugified deliverable>`, so the sections are
  // built from the same deliverable strings the menu shows.
  const sections = detail.deliverables.map((name) => ({
    id: slugify(name),
    name,
    copy: page.deliverables[name],
  }));

  const position = SERVICE_DETAILS.findIndex((s) => s.key === detail.key);
  const related = page.related
    .map((key) => SERVICE_DETAILS.find((s) => s.key === key))
    .filter((s) => s !== undefined);

  return (
    <div
      data-gsap-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <DetailHeroMotion />
      <ButtonMotion />
      <SiteNav active="solutions" />

      <DetailHero
        back={{ label: SERVICE_PAGE_COPY.backLabel, href: route("Services.dc.html") }}
        index={{ n: position + 1, of: SERVICE_DETAILS.length, label: "Service" }}
        eyebrow={page.eyebrow}
        titleLead={page.titleLead}
        titleAccent={page.titleAccent}
        intro={page.intro}
        primary={{ label: detail.cta, href: "Contact.dc.html" }}
        secondary={{ label: "Estimate a campaign budget", href: route("Calculator.dc.html") }}
        stats={page.stats}
        statsLabel={SERVICE_PAGE_COPY.statsLabel}
        contents={{
          label: SERVICE_PAGE_COPY.onThisPage,
          items: sections.map((sec) => ({ id: sec.id, name: sec.name })),
        }}
        ticker={detail.deliverables}
      />

      {/* ═══ KEY BENEFITS ══════════════════════════════════════════════════ */}
      <section className="border-b border-ink/12 bg-panel">
        <div className="mx-auto grid max-w-[1280px] items-start gap-[clamp(24px,3.5vw,60px)] page-x py-[clamp(36px,4vw,60px)] lg:grid-cols-[minmax(200px,280px)_minmax(0,1fr)]">
          <div>
            <Eyebrow>{SERVICE_PAGE_COPY.benefitsLabel}</Eyebrow>
          </div>
          <div className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {detail.benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 border-b border-ink/10 pb-3 text-[14.5px] leading-[1.5] text-ink"
              >
                <Check size={13} className="mt-1 shrink-0 text-brand" />
                <span className="text-pretty">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DELIVERABLES ══════════════════════════════════════════════════
          One anchored section per deliverable — these are the targets the
          mega-menu's "Browse deliverables" links point at. */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,80px)]">
        <div className="max-w-[62ch]">
          <Eyebrow>{SERVICE_PAGE_COPY.deliverablesLabel}</Eyebrow>
          <p className="mt-5 mb-0 text-[clamp(18px,1.8vw,26px)] leading-[1.32] font-medium tracking-[-0.022em] text-ink text-pretty">
            {SERVICE_PAGE_COPY.deliverablesIntro}
          </p>
        </div>

        <div className="mt-[clamp(28px,3vw,48px)] flex flex-col">
          {sections.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="grid scroll-mt-24 items-start gap-[clamp(20px,3.5vw,60px)] border-t border-ink/15 py-[clamp(30px,3.5vw,52px)] lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]"
            >
              <div className="flex flex-col gap-4 lg:sticky lg:top-26">
                <div className="flex items-center gap-3.5">
                  <span className="text-[12px] font-semibold tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
                </div>
                <h2 className="m-0 text-[clamp(22px,2.5vw,34px)] leading-[1.1] font-medium tracking-[-0.026em] text-pretty">
                  {s.name}
                </h2>
                {s.copy && (
                  <p className="m-0 max-w-[46ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
                    {s.copy.body}
                  </p>
                )}
              </div>

              {s.copy && (
                <div className="flex flex-col gap-3.5 rounded-ui border border-ink/12 bg-white px-[26px] py-[26px]">
                  <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                    Included
                  </div>
                  {s.copy.points.map((pt) => (
                    <div
                      key={pt}
                      className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-ink last:border-b-0 last:pb-0"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="text-pretty">{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PROCESS ═══════════════════════════════════════════════════════ */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
          <Eyebrow tone="coral">{SERVICE_PAGE_COPY.processLabel}</Eyebrow>
          <div className="mt-8 grid gap-x-6 gap-y-8 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {page.process.map((step, i) => (
              <div key={step.title} className="border-t border-cream/18 pt-5">
                <div className="text-[11px] font-semibold tabular-nums tracking-[0.12em] text-coral">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-[19px] leading-[1.2] font-medium tracking-[-0.02em] text-pretty">
                  {step.title}
                </div>
                <div className="mt-2.5 text-[13.5px] leading-[1.6] text-cream/62 text-pretty">
                  {step.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
        <div className="grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(200px,300px)_minmax(0,1fr)]">
          <div>
            <Eyebrow>{SERVICE_PAGE_COPY.faqLabel}</Eyebrow>
          </div>
          <div className="flex flex-col">
            {page.faq.map((f) => (
              <details
                key={f.q}
                className="group border-b border-ink/14 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[clamp(16px,1.4vw,20px)] leading-[1.35] font-medium tracking-[-0.015em] text-ink text-pretty">
                  {f.q}
                  <span className="mt-1 shrink-0 text-[18px] leading-none text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3.5 mb-0 max-w-[62ch] text-[14.5px] leading-[1.65] text-muted text-pretty">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RELATED SERVICES ══════════════════════════════════════════════ */}
      <section className="bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(40px,4vw,68px)]">
          <Eyebrow>{SERVICE_PAGE_COPY.relatedLabel}</Eyebrow>
          <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {related.map((s) => (
              <Link
                key={s.key}
                href={serviceHref(s.key)}
                className="flex flex-col gap-3 rounded-card border border-ink/12 bg-white px-[26px] pt-6 pb-7 transition-colors hover:border-brand/45"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[clamp(19px,1.9vw,25px)] leading-[1.18] font-medium tracking-[-0.022em] text-ink text-pretty">
                    {s.name}
                  </div>
                  <ChevronRight className="mt-1.5 shrink-0 text-brand" />
                </div>
                <div className="text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                  {s.overview}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════════════════════════ */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">
            Ready to start with {detail.name}?{" "}
            <span className="text-coral">Let&apos;s scope it.</span>
          </h2>
          <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            We will review your goals, agree the qualification criteria and come
            back with a plan you can hold us to.
          </p>
          <Link
            href={route("Contact.dc.html")}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            {detail.cta}
            <ArrowRight />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
