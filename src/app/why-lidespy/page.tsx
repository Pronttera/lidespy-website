import type { Metadata } from "next";
import Link from "next/link";
import ButtonMotion from "@/components/ButtonMotion";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import WhyFaq from "@/components/WhyFaq";
import WhyMotion from "@/components/WhyMotion";
import { ArrowRight, ArrowUpRight, Check } from "@/components/icons";
import { ArrowCta, Eyebrow, TextArrowLink } from "@/components/ui";
import { WHY } from "@/i18n/dictionaries/en/why";
import { route } from "@/lib/routes";

export const metadata: Metadata = {
  title: WHY.meta.title,
  description: WHY.meta.description,
};

/**
 * Bento spans for the six differentiators, read at `lg` and up against a
 * six-column track: 4+2 / 2+2+2 / 6. Panel size tracks importance — the data
 * argument is the one the rest of the page rests on, so it gets the anchor
 * tile; the commercial terms close the grid as a full-width bar.
 */
const BENTO_SPAN = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-6",
];

export default function WhyLidespyPage() {
  const { hero, gap, difference, standard, compliance, models, proof, faq, cta } = WHY;

  return (
    <div
      data-gsap-root
      data-why-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <WhyMotion />
      <ButtonMotion />
      <SiteNav active="why" />

      {/* ═══ HERO ═══════════════════════════════════════════════════════════
          The one dark hero in the site. This page argues a position rather
          than describing a service, so it opens on contrast: the claim in
          oversized type on the left, and the proof of the claim — the record
          verification pipeline — ticking through live on the right. */}
      <section className="dc-rules-dark relative overflow-hidden bg-ink text-cream">
        {/* Warm bloom behind the headline; purely atmospheric. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[28%] -left-[12%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.28),transparent_62%)] blur-[12px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[16%] -bottom-[38%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.16),transparent_65%)]"
        />

        <div className="relative mx-auto grid max-w-[1280px] items-start gap-[clamp(40px,5vw,80px)] page-x pt-[clamp(48px,5.5vw,84px)] pb-[clamp(44px,5vw,72px)] lg:grid-cols-[minmax(0,1.12fr)_minmax(330px,0.88fr)]">
          <div className="flex flex-col gap-[clamp(24px,2.6vw,34px)]">
            <div data-hero-aside className="self-start">
              <Eyebrow tone="coral">{hero.eyebrow}</Eyebrow>
            </div>

            <h1 className="m-0 text-[clamp(36px,5.2vw,78px)] leading-[1.02] font-normal tracking-[-0.035em] text-balance">
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-hero-line className="block">
                  Most lead vendors
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-hero-line className="block">
                  are paid for volume.
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-hero-line className="block text-coral">
                  We&apos;re measured on pipeline.
                </span>
              </span>
            </h1>

            <p
              data-hero-aside
              className="m-0 max-w-[58ch] text-[clamp(15px,1.25vw,18.5px)] leading-[1.62] text-cream/70 text-pretty"
            >
              {hero.intro}
            </p>

            <div data-hero-aside className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <ArrowCta href="Contact.dc.html">{hero.ctaPrimary}</ArrowCta>
              <Link
                href="#difference"
                data-textlink
                className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase"
              >
                {hero.ctaSecondary}
                <span data-arrow className="text-[16px] text-coral">
                  ↓
                </span>
              </Link>
            </div>
          </div>

          {/* The verification receipt — the page's argument in miniature. */}
          <div
            data-receipt
            className="rounded-card border border-cream/14 bg-cream/[0.045] p-[clamp(20px,2vw,28px)] backdrop-blur-[2px]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-cream/14 pb-4">
              <div className="text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                {hero.receipt.label}
              </div>
              <div className="truncate font-mono text-[11.5px] text-coral">
                {hero.receipt.file}
              </div>
            </div>

            <div className="flex flex-col pt-2">
              {hero.receipt.steps.map((s) => (
                <div
                  key={s}
                  data-receipt-row
                  className="flex items-center gap-3.5 border-b border-cream/8 py-[13px] last:border-b-0"
                >
                  <span
                    data-receipt-tick
                    className="inline-flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-coral text-ink"
                  >
                    <Check size={9} />
                  </span>
                  <span className="text-[13.5px] leading-[1.4] text-cream/82 text-pretty">
                    {s}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-ui bg-coral/10 px-4 py-4">
              <div className="flex items-baseline justify-between gap-4">
                <div className="text-[10.5px] font-semibold tracking-[0.12em] text-cream/55 uppercase">
                  {hero.receipt.resultLabel}
                </div>
                <div
                  data-receipt-value={parseFloat(hero.receipt.resultValue)}
                  className="text-[clamp(28px,2.7vw,36px)] leading-none font-medium tracking-[-0.035em] text-coral tabular-nums"
                >
                  {hero.receipt.resultValue}
                </div>
              </div>
              <div className="mt-3.5 h-[5px] w-full overflow-hidden rounded-full bg-cream/12">
                <div data-receipt-bar className="h-full w-full rounded-full bg-coral" />
              </div>
            </div>
            <p className="m-0 mt-3.5 text-[11.5px] leading-[1.55] text-cream/45 text-pretty">
              {hero.receipt.footnote}
            </p>
          </div>
        </div>

        {/* Stat strip — the hero's factual floor. */}
        <div className="relative mx-auto max-w-[1280px] page-x">
          <div
            data-reveal-group
            className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/14 py-[clamp(28px,3vw,40px)] lg:grid-cols-4"
          >
            {hero.stats.map((s) => (
              <div
                key={s.l}
                data-reveal
                className="flex flex-col gap-2 lg:border-l lg:border-cream/12 lg:pl-7 lg:first:border-l-0 lg:first:pl-0"
              >
                <div
                  data-count={s.v}
                  data-suffix={s.suffix}
                  className="text-[clamp(34px,3.6vw,52px)] leading-none font-medium tracking-[-0.04em] text-cream tabular-nums"
                >
                  {s.v}
                  {s.suffix}
                </div>
                <div className="text-[12.5px] leading-[1.45] text-cream/50 text-pretty">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kinetic rail closing the hero. */}
        <div className="relative border-t border-cream/14 py-4">
          <div className="ld-fade-x overflow-hidden">
            <div className="ld-marquee ld-marquee-slow">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                  {hero.marquee.map((m) => (
                    <span
                      key={m}
                      className="flex items-center gap-6 px-6 text-[12px] font-semibold tracking-[0.12em] text-cream/45 uppercase"
                    >
                      {m}
                      <span className="h-[3px] w-[3px] rounded-full bg-coral" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE GAP ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
        <div className="mb-[clamp(36px,4vw,60px)] grid items-end gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <div className="mb-[18px]">
              <Eyebrow>{gap.eyebrow}</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {gap.title}
            </h2>
          </div>
          <p className="m-0 text-[clamp(15px,1.2vw,17.5px)] leading-[1.65] text-muted text-pretty">
            {gap.intro}
          </p>
        </div>

        <div data-reveal-group className="grid gap-4 md:grid-cols-2">
          {gap.items.map((g) => (
            <article
              key={g.n}
              data-reveal
              data-lift
              className="flex flex-col rounded-ui border border-ink/14 bg-white"
            >
              <div className="flex flex-col gap-3.5 p-[clamp(24px,2.6vw,36px)]">
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-semibold tabular-nums text-brand">
                    {g.n}
                  </span>
                  <span className="h-px flex-1 bg-ink/12" />
                </div>
                <h3 className="m-0 text-[clamp(19px,1.75vw,24px)] leading-[1.22] font-medium tracking-[-0.022em] text-pretty">
                  {g.problem}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.65] text-muted-2 text-pretty">
                  {g.detail}
                </p>
              </div>
              <div className="mt-auto flex items-start gap-3 border-t border-ink/12 bg-panel px-[clamp(24px,2.6vw,36px)] py-4">
                <ArrowRight size={13} className="mt-[3px] shrink-0 text-brand" />
                <p className="m-0 text-[13.5px] leading-[1.5] font-medium text-ink text-pretty">
                  {g.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ THE DIFFERENCE (bento) ═════════════════════════════════════════ */}
      <section id="difference" className="scroll-mt-24 border-y border-ink/12 bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
          <div className="mb-[clamp(32px,3.5vw,52px)] max-w-[820px]">
            <div className="mb-[18px]">
              <Eyebrow>{difference.eyebrow}</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {difference.title}
            </h2>
          </div>

          <div data-reveal-group className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-6">
            {difference.items.map((d, i) => {
              /* The anchor tile inverts; the closing bar sits on white. */
              const anchor = i === 0;
              const wide = i === difference.items.length - 1;
              return (
                <article
                  key={d.k}
                  data-reveal
                  data-lift
                  className={`flex flex-col justify-between gap-6 rounded-ui p-[clamp(24px,2.4vw,36px)] ${
                    BENTO_SPAN[i]
                  } ${
                    anchor
                      ? "bg-ink text-cream sm:col-span-2"
                      : "border border-ink/14 bg-white"
                  } ${wide ? "sm:col-span-2 lg:flex-row lg:items-center lg:gap-14" : ""}`}
                >
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`m-0 leading-[1.18] font-medium tracking-[-0.024em] text-pretty ${
                        anchor
                          ? "text-[clamp(24px,2.4vw,34px)]"
                          : "text-[clamp(19px,1.7vw,23px)]"
                      }`}
                    >
                      {d.title}
                    </h3>
                    <p
                      className={`m-0 leading-[1.65] text-pretty ${
                        anchor
                          ? "max-w-[46ch] text-[15px] text-cream/68"
                          : "text-[14.5px] text-muted-2"
                      }`}
                    >
                      {d.body}
                    </p>
                  </div>

                  {d.chips ? (
                    <div className="flex shrink-0 flex-wrap items-center gap-2 border-t border-ink/12 pt-4 lg:border-t-0 lg:pt-0">
                      {d.chips.map((c) => (
                        <Link
                          key={c}
                          href="#models"
                          className="rounded-ui border border-ink/18 px-3.5 py-2 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase transition-colors hover:border-brand hover:bg-brand-cta hover:text-white"
                        >
                          {c}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`flex items-baseline gap-3 border-t pt-4 ${
                        anchor ? "border-cream/16" : "border-ink/12"
                      }`}
                    >
                      <span
                        className={`text-[clamp(28px,2.8vw,40px)] leading-none font-medium tracking-[-0.04em] tabular-nums ${
                          anchor ? "text-coral" : "text-brand"
                        }`}
                      >
                        {d.metric}
                      </span>
                      <span
                        className={`text-[12.5px] leading-[1.35] text-pretty ${
                          anchor ? "text-cream/50" : "text-muted-3"
                        }`}
                      >
                        {d.metricLabel}
                      </span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ OPERATING STANDARD ═════════════════════════════════════════════ */}
      <section id="standard" className="scroll-mt-24 bg-ink text-cream">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
          <div className="mb-[clamp(32px,4vw,56px)] grid items-end gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <div className="mb-[18px]">
                <Eyebrow tone="coral">{standard.eyebrow}</Eyebrow>
              </div>
              <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
                {standard.title}
              </h2>
            </div>
            <p className="m-0 text-[clamp(15px,1.2vw,17.5px)] leading-[1.65] text-cream/62 text-pretty">
              {standard.intro}
            </p>
          </div>

          <div data-reveal-group className="grid gap-x-[clamp(24px,3vw,56px)] sm:grid-cols-2 lg:grid-cols-3">
            {standard.items.map((s) => (
              <div
                key={s.k}
                data-reveal
                className="flex flex-col gap-2.5 border-t border-cream/16 py-[clamp(22px,2.4vw,30px)]"
              >
                <div className="text-[clamp(38px,4vw,56px)] leading-none font-medium tracking-[-0.04em] text-coral tabular-nums">
                  {s.v}
                  <span className="text-[0.5em] tracking-[-0.02em]">{s.suffix}</span>
                </div>
                <div className="text-[16px] leading-[1.3] font-medium tracking-[-0.015em] text-cream">
                  {s.k}
                </div>
                <p className="m-0 max-w-[42ch] text-[13.5px] leading-[1.6] text-cream/55 text-pretty">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DATA & COMPLIANCE ══════════════════════════════════════════════ */}
      <section id="compliance" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(56px,6.5vw,104px)]">
        <div className="mb-[clamp(36px,4vw,60px)] grid items-end gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <div className="mb-[18px]">
              <Eyebrow>{compliance.eyebrow}</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {compliance.title}
            </h2>
          </div>
          <p className="m-0 text-[clamp(15px,1.2vw,17.5px)] leading-[1.65] text-muted text-pretty">
            {compliance.intro}
          </p>
        </div>

        {/* Five steps read as one continuous pipeline: the rule behind them
            draws in on scroll (WhyMotion), so the sequence is legible before
            any of the copy is. */}
        <div data-reveal-group className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          <div
            aria-hidden
            className="absolute top-[13px] right-0 left-0 hidden h-px origin-left bg-brand/45 lg:block"
          >
            <span data-pipe-rule className="block h-px w-full origin-left bg-brand" />
          </div>
          {compliance.steps.map((st) => (
            <div key={st.n} data-reveal className="relative flex flex-col gap-3">
              <div className="relative z-1 flex items-center gap-3">
                <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-brand-cta ring-4 ring-cream" />
                <span className="text-[11.5px] font-semibold tracking-[0.1em] tabular-nums text-brand">
                  {st.n}
                </span>
              </div>
              <h3 className="m-0 text-[17px] leading-[1.25] font-medium tracking-[-0.018em] text-pretty">
                {st.title}
              </h3>
              <p className="m-0 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                {st.body}
              </p>
            </div>
          ))}
        </div>

        <div data-reveal-group className="mt-[clamp(36px,4vw,56px)] grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {compliance.badges.map((b) => (
            <div
              key={b.k}
              data-reveal
              className="flex flex-col gap-2 rounded-ui border border-ink/14 bg-white px-[22px] py-6"
            >
              <div className="text-[15px] font-bold tracking-[0.03em] text-brand">
                {b.k}
              </div>
              <p className="m-0 text-[13px] leading-[1.55] text-muted-2 text-pretty">
                {b.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ENGAGEMENT MODELS ══════════════════════════════════════════════ */}
      <section id="models" className="scroll-mt-24 border-y border-ink/12 bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
          <div className="mb-[clamp(32px,3.5vw,52px)] max-w-[760px]">
            <div className="mb-[18px]">
              <Eyebrow>{models.eyebrow}</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {models.title}
            </h2>
          </div>

          <div data-reveal-group className="grid gap-3.5 lg:grid-cols-3">
            {models.items.map((m) => (
              <article
                key={m.name}
                data-reveal
                data-lift
                className={`flex flex-col gap-6 rounded-ui p-[clamp(26px,2.6vw,38px)] ${
                  m.featured
                    ? "bg-ink text-cream lg:-my-3 lg:py-[clamp(38px,3.4vw,50px)]"
                    : "border border-ink/14 bg-white"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="m-0 text-[clamp(22px,2.1vw,28px)] leading-none font-medium tracking-[-0.028em]">
                      {m.name}
                    </h3>
                    {m.featured && (
                      <span className="rounded-ui bg-coral px-2 py-[3px] text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                        Most chosen
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-[12px] font-semibold tracking-[0.04em] uppercase ${
                      m.featured ? "text-coral" : "text-brand"
                    }`}
                  >
                    {m.best}
                  </div>
                </div>

                <p
                  className={`m-0 text-[14.5px] leading-[1.65] text-pretty ${
                    m.featured ? "text-cream/70" : "text-muted-2"
                  }`}
                >
                  {m.body}
                </p>

                <ul
                  className={`m-0 flex list-none flex-col gap-3 border-t p-0 pt-5 ${
                    m.featured ? "border-cream/16" : "border-ink/12"
                  }`}
                >
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <Check
                        size={11}
                        className={`mt-[5px] shrink-0 ${m.featured ? "text-coral" : "text-brand"}`}
                      />
                      <span
                        className={`text-[13.5px] leading-[1.5] text-pretty ${
                          m.featured ? "text-cream/85" : "text-ink"
                        }`}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={route("Contact.dc.html")}
                  className={`mt-auto inline-flex items-center gap-2.5 self-start border-b pb-1 text-[11.5px] font-semibold tracking-[0.06em] uppercase transition-colors ${
                    m.featured
                      ? "border-cream/30 text-cream hover:border-coral hover:text-coral"
                      : "border-ink/25 text-ink hover:border-brand hover:text-brand"
                  }`}
                >
                  Talk through {m.name.toLowerCase()}
                  <ArrowUpRight size={11} className={m.featured ? "text-coral" : "text-brand"} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROOF ══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
        <div className="mb-[clamp(32px,3.5vw,52px)]">
          <div className="mb-[18px]">
            <Eyebrow>{proof.eyebrow}</Eyebrow>
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
            {proof.title}
          </h2>
        </div>

        <div data-reveal-group className="grid border-t border-ink/15 lg:grid-cols-3">
          {proof.outcomes.map((o) => (
            <div
              key={o.l}
              data-reveal
              className="flex flex-col gap-2.5 border-b border-ink/12 py-[clamp(26px,2.8vw,36px)] lg:border-b-0 lg:border-r lg:px-[clamp(20px,2.2vw,36px)] lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div
                data-count={o.v}
                data-suffix={o.suffix}
                className="text-[clamp(42px,4.6vw,64px)] leading-none font-medium tracking-[-0.045em] text-brand tabular-nums"
              >
                {o.v}
                {o.suffix}
              </div>
              <div className="text-[15.5px] leading-[1.4] font-medium tracking-[-0.012em] text-ink text-pretty">
                {o.l}
              </div>
              <div className="text-[12.5px] leading-[1.5] text-muted-3 text-pretty">
                {o.note}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[clamp(28px,3vw,44px)] grid items-stretch gap-3.5 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <figure className="m-0 flex flex-col justify-between gap-8 rounded-ui bg-brand-cta p-[clamp(28px,3.4vw,52px)]">
            <blockquote className="m-0 text-[clamp(19px,2vw,28px)] leading-[1.32] font-medium tracking-[-0.022em] text-white text-pretty">
              “{proof.quote.text}”
            </blockquote>
            <figcaption className="flex flex-col gap-1 border-t border-white/25 pt-5">
              <span className="text-[14px] font-semibold text-white">
                {proof.quote.name}
              </span>
              <span className="text-[12.5px] text-white/75">{proof.quote.role}</span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between gap-8 rounded-ui border border-ink/14 bg-white p-[clamp(28px,3.4vw,44px)]">
            <p className="m-0 text-[clamp(17px,1.6vw,21px)] leading-[1.4] font-medium tracking-[-0.018em] text-ink text-pretty">
              Every claim on this page is one we have had to evidence in a
              renewal conversation. The case studies show the working.
            </p>
            <TextArrowLink href="Case Studies.dc.html" className="text-[12px]">
              {proof.linkLabel}
            </TextArrowLink>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════════════════════ */}
      <section id="faq" className="scroll-mt-24 border-t border-ink/12 bg-panel">
        <div className="mx-auto grid max-w-[1280px] items-start gap-[clamp(28px,5vw,80px)] page-x py-[clamp(56px,6.5vw,104px)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="lg:sticky lg:top-28">
            <div className="mb-[18px]">
              <Eyebrow>{faq.eyebrow}</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {faq.title}
            </h2>
            <p className="m-0 mt-5 max-w-[38ch] text-[14.5px] leading-[1.65] text-muted text-pretty">
              Something not covered here? Ask it on the call — we would rather
              answer it before you sign than after.
            </p>
            <div className="mt-7">
              <TextArrowLink href="Contact.dc.html" className="text-[12px]">
                Ask us directly
              </TextArrowLink>
            </div>
          </div>
          <WhyFaq items={faq.items} />
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════════════════ */}
      <section className="dc-rules-dark bg-ink text-cream">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[clamp(28px,4vw,64px)] page-x py-[clamp(56px,6.5vw,96px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="flex flex-col gap-[22px]">
            <div className="self-start">
              <Eyebrow tone="coral">{cta.eyebrow}</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.6vw,52px)] leading-[1.04] font-medium tracking-[-0.032em] text-balance">
              {cta.title}
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="m-0 text-[clamp(15px,1.2vw,17.5px)] leading-[1.65] text-cream/68 text-pretty">
              {cta.body}
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <ArrowCta href="Contact.dc.html">{cta.primary}</ArrowCta>
              <Link
                href={route("Calculator.dc.html")}
                data-textlink
                className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase"
              >
                {cta.secondary}
                <span data-arrow className="text-[16px] text-coral">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
