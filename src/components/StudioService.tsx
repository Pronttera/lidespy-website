import Link from "next/link";
import type { ReactNode } from "react";
import type { HeroStat } from "./DetailHero";
import { Check } from "./icons";
import { ArrowCta, Eyebrow } from "./ui";

/**
 * The studio layout for the service pages that are agency and build work —
 * paid media, websites — rather than lead generation. Where `DetailHero` is a
 * dark editorial claim, this is a light split hero around a mock-up of the
 * thing the service produces, followed by a bento of deliverables and a
 * timeline for the process, so these pages read as their own kind of offer.
 *
 * The hero carries the same `data-hero-*` hooks as `DetailHero`, so
 * `DetailHeroMotion` animates it unchanged and it is complete without JS.
 */

function countable(value: string): { n: number; suffix: string } | null {
  const m = value.match(/^(\d+(?:\.\d+)?)([%+]*)$/);
  return m ? { n: parseFloat(m[1]), suffix: m[2] } : null;
}

export function StudioHero({
  back,
  index,
  eyebrow,
  titleLead,
  titleAccent,
  intro,
  primary,
  secondary,
  stats,
  benefits,
  screen,
}: {
  back: { label: string; href: string };
  index: { n: number; of: number; label: string };
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  /** `href` is a design-artboard href — `ArrowCta` resolves it through `route()`. */
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  stats: HeroStat[];
  benefits: string[];
  screen: "dashboard" | "browser";
}) {
  const nn = String(index.n).padStart(2, "0");

  return (
    <section
      data-hero
      className="dc-rules relative overflow-hidden border-b border-ink/12 bg-cream text-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20%] right-[-10%] h-[820px] w-[820px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.16),transparent_62%)]"
      />

      <div className="relative mx-auto max-w-[1280px] page-x">
        <div
          data-hero-fade
          className="flex items-center justify-between gap-4 border-b border-ink/12 py-5 text-[11px] font-semibold tracking-[0.14em] uppercase"
        >
          <Link
            href={back.href}
            className="inline-flex items-center gap-2.5 text-muted-3 transition-colors hover:text-brand"
          >
            <span className="text-brand">←</span>
            {back.label}
          </Link>
          <div className="flex items-center gap-3 text-muted-3">
            <span className="hidden sm:inline">{index.label}</span>
            <span className="tabular-nums text-ink">
              {nn}
              <span className="text-ink/35"> / {String(index.of).padStart(2, "0")}</span>
            </span>
          </div>
        </div>

        <div className="grid items-center gap-[clamp(40px,5vw,80px)] pt-[clamp(36px,4.5vw,64px)] pb-[clamp(40px,5vw,72px)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col gap-[clamp(20px,2.4vw,32px)]">
            <div data-hero-fade className="self-start">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>

            <h1
              data-hero-title
              className="m-0 text-[clamp(40px,5.4vw,82px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance"
            >
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block text-balance">
                  {titleLead}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block text-brand text-balance">
                  {titleAccent}
                </span>
              </span>
            </h1>

            <p
              data-hero-fade
              className="m-0 max-w-[52ch] text-[clamp(16px,1.25vw,19px)] leading-[1.6] text-muted text-pretty"
            >
              {intro}
            </p>

            <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
              <ArrowCta href={primary.href}>{primary.label}</ArrowCta>
              <Link
                href={secondary.href}
                data-textlink
                className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-ink uppercase"
              >
                {secondary.label}
                <span data-arrow className="text-[16px] text-brand">
                  →
                </span>
              </Link>
            </div>

            <ul data-hero-fade className="m-0 flex list-none flex-wrap gap-2 p-0 pt-2">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/14 bg-white/70 px-3.5 py-[7px] text-[12.5px] leading-none text-muted"
                >
                  <Check size={10} className="shrink-0 text-brand" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div data-hero-panel className="relative">
            {screen === "dashboard" ? <DashboardScreen /> : <BrowserScreen />}
          </div>
        </div>
      </div>

      <div className="relative border-t border-ink/12 bg-white/55">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 page-x lg:grid-cols-4">
          {stats.map((s, i) => {
            const c = countable(s.value);
            return (
              <div
                key={s.label}
                data-hero-row
                className={`flex flex-col gap-2 py-[clamp(20px,2.2vw,30px)] ${
                  i % 2 ? "pl-5 sm:pl-8" : "pr-5 sm:pr-8"
                } ${i > 0 ? "lg:border-l lg:border-ink/12 lg:pl-8" : ""} ${
                  i < 2 ? "border-b border-ink/12 lg:border-b-0" : ""
                } ${i % 2 ? "border-l border-ink/12" : ""}`}
              >
                <div
                  data-count={c ? c.n : undefined}
                  data-suffix={c ? c.suffix : undefined}
                  className="text-[clamp(26px,2.6vw,40px)] leading-none font-medium tracking-[-0.03em] tabular-nums text-brand"
                >
                  {s.value}
                </div>
                <div className="text-[13px] leading-[1.4] text-muted-2 text-pretty">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Mock-ups ───────────────────────────────────────────────────────────────
   Illustrative, not data: they show the shape of what the service delivers.
   Both are drawn in markup so they stay sharp, theme with the palette and need
   no image request. Hidden from assistive tech. */

function WindowChrome({ label, right }: { label: string; right?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-cream/10 px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
      </div>
      <div className="min-w-0 flex-1 truncate rounded-full bg-cream/[0.07] px-3 py-1 text-[11px] text-cream/55">
        {label}
      </div>
      {right}
    </div>
  );
}

const WEEKS = [34, 42, 38, 51, 47, 58, 55, 66, 62, 74, 71, 83];
const OPPS = [18, 22, 25, 30, 33, 41, 44, 50, 55, 63, 67, 78];

const CHANNELS = [
  { name: "LinkedIn Ads", share: 38, cpo: "$690" },
  { name: "Google Search", share: 31, cpo: "$742" },
  { name: "Programmatic", share: 19, cpo: "$880" },
  { name: "Display retargeting", share: 12, cpo: "$915" },
];

function DashboardScreen() {
  return (
    <div aria-hidden className="relative select-none">
      <div className="overflow-hidden rounded-[10px] border border-ink/20 bg-ink text-cream shadow-[0_40px_80px_-30px_rgba(18,21,15,0.55)]">
        <WindowChrome
          label="Pipeline report · Paid media · Last 12 weeks"
          right={
            <span className="hidden items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] text-coral uppercase sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Live
            </span>
          }
        />

        <div className="grid grid-cols-3 border-b border-cream/10">
          {[
            { k: "Spend", v: "$48.2k", d: "on budget" },
            { k: "Opportunities", v: "63", d: "+24% vs plan" },
            { k: "Cost / opp", v: "$765", d: "−18% QoQ" },
          ].map((m, i) => (
            <div key={m.k} className={`px-4 py-3.5 ${i ? "border-l border-cream/10" : ""}`}>
              <div className="text-[10px] tracking-[0.1em] text-cream/45 uppercase">{m.k}</div>
              <div className="mt-1.5 text-[clamp(18px,2vw,26px)] leading-none font-medium tracking-[-0.03em]">
                {m.v}
              </div>
              <div className={`mt-1.5 text-[10.5px] ${i ? "text-coral" : "text-cream/45"}`}>
                {m.d}
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pt-4 pb-3">
          <div className="mb-3 flex items-center gap-4 text-[10px] tracking-[0.08em] text-cream/50 uppercase">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-[1px] bg-cream/25" /> Spend
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-[1px] bg-coral" /> Opportunities
            </span>
          </div>
          <div className="flex h-[clamp(96px,11vw,140px)] items-end gap-[clamp(4px,0.6vw,8px)]">
            {WEEKS.map((w, i) => (
              <div key={i} className="flex h-full flex-1 items-end gap-[2px]">
                <div className="flex-1 rounded-t-[2px] bg-cream/20" style={{ height: `${w}%` }} />
                <div className="flex-1 rounded-t-[2px] bg-coral" style={{ height: `${OPPS[i]}%` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-cream/10 px-4 pt-2 pb-3">
          {CHANNELS.map((c) => (
            <div
              key={c.name}
              className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] items-center gap-3 border-b border-cream/[0.07] py-2 text-[11.5px] last:border-b-0"
            >
              <span className="truncate text-cream/80">{c.name}</span>
              <span className="h-1.5 overflow-hidden rounded-full bg-cream/10">
                <span
                  className="block h-full rounded-full bg-brand-cta"
                  style={{ width: `${c.share * 2.4}%` }}
                />
              </span>
              <span className="w-12 text-right tabular-nums text-cream/60">{c.cpo}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-[8px] border border-ink/12 bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(18,21,15,0.4)] sm:flex lg:-left-10">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Check size={12} />
        </span>
        <div>
          <div className="text-[12.5px] font-semibold text-ink">Offline conversions synced</div>
          <div className="text-[11px] text-muted-3">14 closed-won deals fed back today</div>
        </div>
      </div>
    </div>
  );
}

function BrowserScreen() {
  return (
    <div aria-hidden className="relative select-none sm:pr-10 sm:pb-8">
      <div className="overflow-hidden rounded-[10px] border border-ink/20 bg-ink shadow-[0_40px_80px_-30px_rgba(18,21,15,0.55)]">
        <WindowChrome label="https://yourbrand.com" />

        {/* The site being built: a real-looking B2B page, blocked out. */}
        <div className="bg-cream px-[clamp(14px,2vw,24px)] pt-4 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-[3px] bg-brand" />
              <span className="h-2 w-14 rounded-full bg-ink/70" />
            </div>
            <div className="hidden gap-3 sm:flex">
              <span className="h-1.5 w-9 rounded-full bg-ink/20" />
              <span className="h-1.5 w-9 rounded-full bg-ink/20" />
              <span className="h-1.5 w-9 rounded-full bg-ink/20" />
            </div>
            <span className="h-5 w-16 rounded-[3px] bg-ink" />
          </div>

          <div className="mt-[clamp(18px,2.4vw,30px)] grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center gap-4">
            <div className="flex flex-col gap-2">
              <span className="h-1.5 w-16 rounded-full bg-brand/60" />
              <span className="h-3.5 w-[92%] rounded-[3px] bg-ink/85" />
              <span className="h-3.5 w-[70%] rounded-[3px] bg-ink/85" />
              <span className="mt-1 h-1.5 w-full rounded-full bg-ink/15" />
              <span className="h-1.5 w-[80%] rounded-full bg-ink/15" />
              <div className="mt-2 flex gap-2">
                <span className="h-6 w-20 rounded-[3px] bg-brand-cta" />
                <span className="h-6 w-16 rounded-[3px] border border-ink/25" />
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-ink">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,90,79,0.55),transparent_60%)]" />
              <div className="absolute right-3 bottom-3 left-3 flex items-end gap-1.5">
                {[40, 62, 50, 78, 66, 90].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-[2px] bg-cream/70"
                    style={{ height: `${h * 0.5}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[5px] border border-ink/10 bg-white p-2.5">
                <span className="block h-4 w-4 rounded-[3px] bg-brand/15" />
                <span className="mt-2.5 block h-1.5 w-[75%] rounded-full bg-ink/60" />
                <span className="mt-1.5 block h-1 w-full rounded-full bg-ink/12" />
                <span className="mt-1 block h-1 w-[60%] rounded-full bg-ink/12" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The same page on a phone — designed together, not shrunk afterwards. */}
      <div className="absolute right-0 bottom-0 hidden w-[118px] overflow-hidden rounded-[18px] border-[5px] border-ink bg-cream shadow-[0_24px_50px_-20px_rgba(18,21,15,0.55)] sm:block">
        <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-ink/25" />
        <div className="px-2.5 pt-2.5 pb-4">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-brand" />
            <span className="h-1 w-4 rounded-full bg-ink/40" />
          </div>
          <span className="mt-3 block h-2 w-[90%] rounded-[2px] bg-ink/85" />
          <span className="mt-1 block h-2 w-[65%] rounded-[2px] bg-ink/85" />
          <span className="mt-2 block h-1 w-full rounded-full bg-ink/15" />
          <span className="mt-1 block h-1 w-[80%] rounded-full bg-ink/15" />
          <span className="mt-2.5 block h-4 w-full rounded-[3px] bg-brand-cta" />
          <div className="relative mt-2.5 aspect-[4/3] overflow-hidden rounded-[4px] bg-ink">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,90,79,0.55),transparent_60%)]" />
          </div>
        </div>
      </div>

      <div className="absolute -top-5 -left-4 hidden items-center gap-3 rounded-[8px] border border-ink/12 bg-white px-3.5 py-2.5 shadow-[0_18px_40px_-18px_rgba(18,21,15,0.4)] sm:flex lg:-left-10">
        <span className="relative inline-flex h-10 w-10 items-center justify-center">
          <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgb(190 22 34 / 0.14)" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#be1622"
              strokeWidth="3"
              strokeDasharray="97.4"
              strokeDashoffset="3.9"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[12px] font-semibold tabular-nums text-ink">96</span>
        </span>
        <div>
          <div className="text-[12.5px] font-semibold text-ink">Performance</div>
          <div className="text-[11px] text-muted-3">Lighthouse, mobile</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Deliverables bento ─────────────────────────────────────────────────── */

/** Column spans for the bento on `lg`, cycling if a service has more than five. */
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

export function StudioDeliverables({
  label,
  intro,
  sections,
}: {
  label: string;
  intro: string;
  sections: { id: string; name: string; copy?: { body: string; points: string[] } }[];
}) {
  return (
    <section className="mx-auto max-w-[1280px] page-x py-[clamp(48px,5vw,88px)]">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="max-w-[56ch]">
          <Eyebrow>{label}</Eyebrow>
          <p className="mt-5 mb-0 text-[clamp(20px,2.1vw,32px)] leading-[1.2] font-medium tracking-[-0.025em] text-ink text-pretty">
            {intro}
          </p>
        </div>
        <div className="text-[12px] font-semibold tracking-[0.12em] text-muted-3 uppercase tabular-nums">
          {String(sections.length).padStart(2, "0")} deliverables
        </div>
      </div>

      <div className="mt-[clamp(28px,3vw,44px)] grid gap-3.5 lg:grid-cols-12">
        {sections.map((s, i) => {
          const lead = i === 0;
          return (
            <article
              key={s.id}
              id={s.id}
              className={`group relative flex scroll-mt-24 flex-col overflow-hidden rounded-card border p-[clamp(22px,2.2vw,32px)] ${
                SPANS[i % SPANS.length]
              } ${
                lead
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/12 bg-white text-ink transition-colors hover:border-brand/40"
              }`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -top-4 right-4 leading-none font-medium tracking-[-0.06em] text-transparent select-none [font-size:clamp(88px,8vw,128px)] ${
                  lead
                    ? "[-webkit-text-stroke:1.5px_rgba(255,90,79,0.35)]"
                    : "[-webkit-text-stroke:1.5px_rgba(190,22,34,0.16)]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h2
                className={`relative m-0 max-w-[20ch] pr-[clamp(84px,7.5vw,120px)] text-[clamp(21px,2vw,28px)] leading-[1.12] font-medium tracking-[-0.025em] text-pretty ${
                  lead ? "text-cream" : "text-ink"
                }`}
              >
                {s.name}
              </h2>
              {s.copy && (
                <>
                  <p
                    className={`relative mt-3.5 mb-0 max-w-[56ch] text-[14.5px] leading-[1.62] text-pretty ${
                      lead ? "text-cream/68" : "text-muted"
                    }`}
                  >
                    {s.copy.body}
                  </p>
                  <ul className="relative m-0 mt-auto flex list-none flex-col gap-2.5 p-0 pt-6">
                    {s.copy.points.map((pt) => (
                      <li
                        key={pt}
                        className={`flex items-start gap-2.5 border-t pt-2.5 text-[13.5px] leading-[1.45] ${
                          lead ? "border-cream/12 text-cream/85" : "border-ink/9 text-ink"
                        }`}
                      >
                        <Check
                          size={11}
                          className={`mt-[3px] shrink-0 ${lead ? "text-coral" : "text-brand"}`}
                        />
                        <span className="text-pretty">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Process timeline ───────────────────────────────────────────────────── */

export function StudioProcess({
  label,
  steps,
}: {
  label: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <section className="border-y border-ink/12 bg-panel">
      <div className="mx-auto max-w-[1280px] page-x py-[clamp(48px,5vw,84px)]">
        <Eyebrow>{label}</Eyebrow>
        <ol className="relative m-0 mt-[clamp(28px,3vw,44px)] grid list-none gap-y-8 p-0 lg:grid-cols-4 lg:gap-x-8">
          {/* The rail the steps hang from: across on desktop, down on mobile. */}
          <span
            aria-hidden
            className="absolute top-5 right-0 left-0 hidden h-px bg-ink/18 lg:block"
          />
          <span aria-hidden className="absolute top-0 bottom-0 left-5 w-px bg-ink/18 lg:hidden" />
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 lg:flex-col lg:gap-0">
              <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-cream text-[12px] font-semibold tabular-nums text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-6">
                <div className="text-[clamp(18px,1.6vw,21px)] leading-[1.2] font-medium tracking-[-0.02em] text-ink text-pretty">
                  {step.title}
                </div>
                <div className="mt-2.5 max-w-[42ch] text-[14px] leading-[1.6] text-muted text-pretty">
                  {step.body}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
