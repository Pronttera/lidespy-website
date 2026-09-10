import Link from "next/link";
import { ArrowCta, Eyebrow } from "./ui";

export type HeroStat = { value: string; label: string };

/**
 * A stat counts up only when its value is a bare number with an optional
 * `%`/`+` tail ("50+", "95%+", "100%", "9"). Anything else — "Weekly",
 * "4–6 wks", "SQL" — is a word and just fades in with the rest.
 */
function countable(value: string): { n: number; suffix: string } | null {
  const m = value.match(/^(\d+(?:\.\d+)?)([%+]*)$/);
  return m ? { n: parseFloat(m[1]), suffix: m[2] } : null;
}

/**
 * The hero shared by the pillar and service detail pages: dark, editorial,
 * built around one oversized claim. The page's index numeral sits ghosted
 * behind the type, the numbers that back the claim run down a ledger on the
 * right, and the section index (when given) hangs beneath it so a visitor
 * arriving on a deep link can see what else is on the page.
 *
 * Motion is layered on by `DetailHeroMotion` through the `data-hero-*` hooks;
 * with JS off or reduced motion on, this is complete as rendered.
 */
export default function DetailHero({
  back,
  index,
  eyebrow,
  titleLead,
  titleAccent,
  intro,
  primary,
  secondary,
  stats,
  statsLabel,
  contents,
  ticker,
}: {
  back: { label: string; href: string };
  /** "01 / 03" — where this page sits in its set. */
  index: { n: number; of: number; label: string };
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  /** `href` is a design-artboard href — `ArrowCta` resolves it through `route()`. */
  primary: { label: string; href: string };
  /** A resolved app href or in-page anchor. */
  secondary: { label: string; href: string };
  stats: HeroStat[];
  statsLabel: string;
  contents?: { label: string; items: { id: string; name: string }[] };
  ticker: string[];
}) {
  const nn = String(index.n).padStart(2, "0");
  const loop = [...ticker, ...ticker];

  return (
    <section
      data-hero
      className="dc-rules-dark relative overflow-hidden bg-ink text-cream"
    >
      {/* Atmosphere: a warm bloom behind the headline and a cooler one low on
          the right, so the black reads as depth rather than a flat fill. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[30%] -left-[14%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.30),transparent_62%)] blur-[14px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] -bottom-[46%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.14),transparent_66%)]"
      />

      <div className="relative mx-auto max-w-[1280px] page-x">
        {/* The index numeral, outlined and ghosted in the space above the
            ledger — the right column bottom-aligns, so this is what fills it. */}
        <div
          aria-hidden
          data-hero-ghost
          className="pointer-events-none absolute top-[44px] right-8 hidden leading-[0.8] font-medium tracking-[-0.06em] text-transparent select-none lg:block [-webkit-text-stroke:1.5px_rgba(255,90,79,0.26)] [font-size:clamp(180px,18vw,260px)]"
        >
          {nn}
        </div>

        {/* Top rail: where you are, and where this sits in the set. */}
        <div
          data-hero-fade
          className="flex items-center justify-between gap-4 border-b border-cream/12 py-5 text-[11px] font-semibold tracking-[0.14em] uppercase"
        >
          <Link
            href={back.href}
            className="inline-flex items-center gap-2.5 text-cream/55 transition-colors hover:text-coral"
          >
            <span className="text-coral">←</span>
            {back.label}
          </Link>
          <div className="flex items-center gap-3 text-cream/45">
            <span className="hidden sm:inline">{index.label}</span>
            <span className="tabular-nums text-cream">
              {nn}
              <span className="text-cream/35"> / {String(index.of).padStart(2, "0")}</span>
            </span>
          </div>
        </div>

        <div className="relative grid items-end gap-[clamp(40px,5vw,88px)] pt-[clamp(36px,4.5vw,68px)] pb-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
          {/* ── The claim ── */}
          <div className="flex flex-col gap-[clamp(22px,2.6vw,36px)]">
            <div data-hero-fade className="self-start">
              <Eyebrow tone="coral">{eyebrow}</Eyebrow>
            </div>

            <h1
              data-hero-title
              className="m-0 text-[clamp(42px,6.2vw,96px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance">
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block text-balance">
                  {titleLead}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block text-coral text-balance">
                  {titleAccent}
                </span>
              </span>
            </h1>

            <p
              data-hero-fade
              className="m-0 max-w-[54ch] text-[clamp(16px,1.3vw,19.5px)] leading-[1.6] text-cream/68 text-pretty"
            >
              {intro}
            </p>

            <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
              <ArrowCta href={primary.href}>{primary.label}</ArrowCta>
              <Link
                href={secondary.href}
                data-textlink
                className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase"
              >
                {secondary.label}
                <span data-arrow className="text-[16px] text-coral">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ── The ledger ── */}
          <div className="flex flex-col gap-4">
            <div
              data-hero-panel
              className="rounded-card border border-cream/14 bg-cream/[0.04] px-[clamp(22px,2vw,30px)] pt-5 pb-2 backdrop-blur-[2px]"
            >
              <div className="flex items-center justify-between border-b border-cream/14 pb-4 text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                <span className="text-cream/45">{statsLabel}</span>
                <span className="inline-flex items-center gap-2 text-coral">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                  Lidespy
                </span>
              </div>
              {stats.map((s) => {
                const c = countable(s.value);
                return (
                  <div
                    key={s.label}
                    data-hero-row
                    className="relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5 py-[15px]"
                  >
                    <span
                      data-hero-rule
                      className="absolute inset-x-0 bottom-0 h-px bg-cream/12"
                    />
                    <div className="text-[13px] leading-[1.4] text-cream/62 text-pretty">
                      {s.label}
                    </div>
                    <div
                      data-count={c ? c.n : undefined}
                      data-suffix={c ? c.suffix : undefined}
                      className="text-[clamp(26px,2.4vw,36px)] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral"
                    >
                      {s.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {contents && (
              <div
                data-hero-panel
                className="rounded-card border border-cream/12 bg-cream/[0.025] px-[clamp(22px,2vw,30px)] pt-[18px] pb-2"
              >
                <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                  {contents.label}
                </div>
                {contents.items.map((it, i) => (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    className="group flex items-baseline gap-3 border-b border-cream/10 py-[8px] text-[13.5px] text-cream/85 transition-colors last:border-b-0 hover:text-coral"
                  >
                    <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-coral/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 leading-[1.3]">{it.name}</span>
                    <span className="translate-x-0 text-coral opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ticker: the page's own sections, on a slow loop along the bottom edge. */}
      <div className="relative overflow-hidden border-t border-cream/12 py-3.5">
        <div className="ld-marquee ld-marquee-slow">
          {loop.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-[18px] px-[22px] text-[11.5px] tracking-[0.12em] whitespace-nowrap text-cream/50 uppercase"
            >
              {t}
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
