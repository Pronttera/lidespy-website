import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight, Check, ChevronRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import {
  SERVICE_PAGES,
  SERVICE_PAGE_COPY,
  servicePageByKey,
} from "@/i18n/dictionaries/en/service-pages";
import { SERVICE_DETAILS } from "@/i18n/dictionaries/en/services";
import { route, serviceHref, slugify } from "@/lib/routes";

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ service: s.key }));
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

  const related = page.related
    .map((key) => SERVICE_DETAILS.find((s) => s.key === key))
    .filter((s) => s !== undefined);

  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="solutions" />

      {/* ═══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="dc-rules-dark relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[28%] -right-[12%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.24),transparent_63%)] blur-[12px]"
        />

        <div className="relative mx-auto grid max-w-[1280px] items-start gap-[clamp(36px,5vw,80px)] page-x pt-[clamp(40px,4.5vw,72px)] pb-[clamp(44px,4.5vw,72px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
          <div className="flex flex-col gap-[clamp(22px,2.4vw,32px)]">
            <Link
              href={route("Services.dc.html")}
              className="inline-flex items-center gap-2 self-start text-[11px] font-semibold tracking-[0.12em] text-cream/50 uppercase transition-colors hover:text-coral"
            >
              <span className="text-coral">←</span>
              {SERVICE_PAGE_COPY.backLabel}
            </Link>

            <div className="self-start">
              <Eyebrow tone="coral">{page.eyebrow}</Eyebrow>
            </div>

            <h1 className="m-0 text-[clamp(34px,4.8vw,70px)] leading-[1.03] font-normal tracking-[-0.035em] text-balance">
              {page.titleLead}{" "}
              <span className="text-coral">{page.titleAccent}</span>
            </h1>

            <p className="m-0 max-w-[58ch] text-[clamp(15px,1.25vw,18.5px)] leading-[1.62] text-cream/70 text-pretty">
              {page.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={route("Contact.dc.html")}
                className="inline-flex items-center gap-3 rounded-ui bg-brand-cta px-7 py-[17px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
              >
                {detail.cta}
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

          <div className="flex flex-col gap-3.5">
            <div className="rounded-card border border-cream/14 bg-cream/[0.045] px-[clamp(20px,2vw,26px)] py-[clamp(18px,1.8vw,24px)]">
              <div className="mb-4 border-b border-cream/14 pb-3.5 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                {SERVICE_PAGE_COPY.statsLabel}
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {page.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[clamp(22px,2.2vw,30px)] leading-none font-medium tracking-[-0.03em] text-coral">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[12.5px] leading-[1.45] text-cream/60 text-pretty">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The deliverable index doubles as the anchor map the mega-menu
                links into, so a visitor arriving mid-page can see the rest. */}
            <div className="rounded-card border border-cream/14 bg-cream/4 px-[22px] pt-[18px] pb-2.5">
              <div className="mb-2 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                {SERVICE_PAGE_COPY.onThisPage}
              </div>
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-baseline gap-2.5 border-b border-cream/10 py-[7px] text-[13.5px] text-cream transition-colors last:border-b-0 hover:text-coral"
                >
                  <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 leading-[1.3]">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

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
