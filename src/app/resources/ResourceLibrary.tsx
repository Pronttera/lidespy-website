"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Close } from "@/components/icons";
import { Slot } from "@/components/ui";
import { resourceHref } from "@/lib/routes";
import {
  RESOURCES,
  RESOURCES_COPY,
  RESOURCE_FILTERS,
  type ResourceCategory,
} from "@/i18n/dictionaries/en/resources";

type Filter = "all" | ResourceCategory;

const { hero, featured, library: LIBRARY } = RESOURCES_COPY;

/** How many resources sit behind each filter chip — shown as a superscript count. */
const COUNTS: Record<Filter, number> = RESOURCE_FILTERS.reduce(
  (acc, f) => ({
    ...acc,
    [f.id]:
      f.id === "all"
        ? RESOURCES.length
        : RESOURCES.filter((r) => r.cat === f.id).length,
  }),
  {} as Record<Filter, number>,
);

/**
 * The hero, the filter chips and the results grid are one component because
 * they share a single piece of state: the active category filter. Splitting
 * them would mean lifting that state into a context for no gain.
 */
export default function ResourceLibrary() {
  // The site is a static export, so the query string is read here rather than
  // from the page's `searchParams` — there is no server render to read it on.
  const type = useSearchParams().get("type") ?? undefined;
  const deepLinked: Filter = RESOURCE_FILTERS.some((f) => f.id === type)
    ? (type as Filter)
    : "all";
  const [filter, setFilter] = useState<Filter>(deepLinked);
  const [lastDeepLink, setLastDeepLink] = useState(deepLinked);

  // Chip clicks stay local so filtering is instant; the Resources menu — which
  // can be used from this page — changes `type` instead. Adjusting during
  // render rather than in an effect means the grid never paints the old
  // category first.
  if (lastDeepLink !== deepLinked) {
    setLastDeepLink(deepLinked);
    setFilter(deepLinked);
  }

  const items = useMemo(
    () => RESOURCES.filter((r) => filter === "all" || r.cat === filter),
    [filter],
  );

  const filtered = filter !== "all";

  function reset() {
    setFilter("all");
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-end gap-[clamp(36px,5vw,72px)] page-x pt-[clamp(52px,6.5vw,92px)] pb-[clamp(36px,4.5vw,60px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,.85fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 self-start border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-brand-cta" />
              {hero.eyebrow} · {RESOURCES.length} pieces
            </div>

            <h1 className="m-0 max-w-[15ch] text-[clamp(40px,5.4vw,82px)] leading-[.99] font-normal tracking-[-0.036em] text-pretty">
              {hero.titleLead}{" "}
              <span className="text-coral">{hero.titleAccent}</span>.
            </h1>

            <p className="m-0 max-w-[600px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
              {hero.intro}
            </p>

          </div>

          {/* Featured report — the one thing worth reading first. */}
          <div className="group relative flex flex-col gap-4 rounded-card border border-cream/16 bg-cream/4 p-6 transition-colors hover:border-coral/50">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
                {featured.label}
              </span>
              <span className="text-[11px] text-cream/45">
                {featured.gated}
              </span>
            </div>
            <Slot
              src={featured.img}
              alt={featured.title}
              credit={featured.imageCredit}
              creditHref={featured.imageCreditHref}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="aspect-[16/9] rounded-card"
            />
            <h2 className="m-0 text-[19px] leading-[1.22] font-semibold tracking-[-0.02em] text-pretty">
              {featured.title}
            </h2>
            <p className="m-0 text-[13.5px] leading-[1.6] text-cream/68 text-pretty">
              {featured.body}
            </p>
            <a
              href={resourceHref(featured)}
              className="mt-auto inline-flex items-center gap-2.5 pt-1 text-[11px] font-semibold tracking-[0.06em] text-cream uppercase after:absolute after:inset-0"
            >
              {featured.cta}
              <ArrowRight
                size={13}
                className="text-coral transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Credibility rail, closing the hero. */}
        <div className="relative border-t border-cream/12">
          <dl className="mx-auto grid max-w-[1280px] grid-cols-2 page-x sm:grid-cols-4">
            {hero.stats.map((s, i) => (
              <div
                key={s.label}
                /* Two columns on a phone, four from `sm` — the rules between
                   cells move with the wrap. */
                className={`flex flex-col gap-1 py-[22px] sm:border-cream/12 sm:py-[26px] ${
                  i % 2 === 1 ? "border-l border-cream/12 pl-6" : ""
                } ${i >= 2 ? "border-t border-cream/12 sm:border-t-0" : ""} ${
                  i >= 1 ? "sm:border-l sm:pl-7" : ""
                }`}
              >
                <dt className="text-[clamp(24px,2.4vw,34px)] leading-none font-medium tracking-[-0.03em] text-coral">
                  {s.value}
                </dt>
                <dd className="m-0 text-[12px] tracking-[0.02em] text-cream/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The command bar sticks only while its results are on screen, so this
          wrapper — not the page root — is what bounds the sticky. */}
      <div className="relative">
        {/* COMMAND BAR — sits under the nav so filters stay reachable mid-scroll. */}
        <div
          id="library"
          className="sticky top-[70px] z-40 scroll-mt-[70px] border-b border-ink/12 bg-cream sm:top-[87px] sm:scroll-mt-[87px]"
        >
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-5 gap-y-3 page-x py-3.5">
            <div className="ld-swipe-x flex gap-1.5">
              {RESOURCE_FILTERS.map((f) => {
                const on = f.id === filter;
                return (
                  <button
                    key={f.id}
                    id={f.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setFilter(f.id)}
                    className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-ui border px-4 py-[9px] text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors ${
                      on
                        ? "border-ink bg-ink text-coral"
                        : "border-ink/20 text-ink hover:border-ink/50"
                    }`}
                  >
                    {f.label}
                    <span
                      className={`text-[10.5px] font-normal tabular-nums ${
                        on ? "text-cream/55" : "text-muted-3"
                      }`}
                    >
                      {COUNTS[f.id]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <div
                aria-live="polite"
                className="text-[12px] text-muted-2 tabular-nums"
              >
                {items.length === 1
                  ? LIBRARY.resultsOne
                  : LIBRARY.resultsMany.replace("{count}", String(items.length))}
              </div>
              {filtered && (
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-semibold tracking-[0.05em] text-brand uppercase transition-opacity hover:opacity-70"
                >
                  <Close size={11} />
                  {LIBRARY.emptyAction}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <section className="mx-auto max-w-[1280px] page-x pt-8 pb-[clamp(56px,6vw,88px)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-card border border-dashed border-ink/20 px-6 py-[clamp(48px,7vw,88px)] text-center">
              <h3 className="m-0 text-[20px] font-medium tracking-[-0.02em]">
                {LIBRARY.emptyTitle}
              </h3>
              <p className="m-0 max-w-[36ch] text-[14px] leading-[1.6] text-muted-2 text-pretty">
                {LIBRARY.emptyBody}
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-2 inline-flex cursor-pointer items-center gap-3 rounded-ui bg-brand-cta px-6 py-[13px] text-[11px] font-semibold tracking-[0.05em] text-white uppercase"
              >
                {LIBRARY.emptyAction}
                <ArrowRight size={12} />
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((r) => (
                <article
                  key={r.title}
                  className="group relative flex flex-col overflow-hidden rounded-ui border border-ink/14 bg-white text-ink transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/55 motion-reduce:hover:translate-y-0"
                >
                  <Slot
                    src={r.img}
                    alt={r.title}
                    credit={r.credit}
                    creditHref={r.creditHref}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="aspect-video"
                    innerProps={{
                      className:
                        "object-cover transition-transform duration-500 group-hover:scale-[1.045]",
                    }}
                  />
                  <div className="flex flex-1 flex-col gap-2.5 px-[22px] pt-[22px] pb-6">
                    <div className="flex justify-between gap-2.5">
                      <span className="text-[11px] font-semibold tracking-[0.1em] text-brand uppercase">
                        {r.type}
                      </span>
                      <span className="text-[11px] text-muted-3">{r.meta}</span>
                    </div>
                    <h3 className="m-0 text-[18px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">
                      {/* Stretched link: the whole card is clickable, but the
                        image credit stays a separate, reachable anchor. */}
                      <Link
                        href={resourceHref(r)}
                        className="after:absolute after:inset-0"
                      >
                        {r.title}
                      </Link>
                    </h3>
                    <p className="m-0 flex-1 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                      {r.body}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.05em] uppercase">
                      {r.action}
                      <ArrowRight
                        size={12}
                        className="text-brand transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
