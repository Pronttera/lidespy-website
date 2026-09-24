// @ts-nocheck
/* eslint-disable */
"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

// all resources: [cat, href, type, meta, title, body, action, img]
const DATA = [["blog","/blog/abm-guide-mid-market-2026","Blog","3 min read","Account-Based Marketing in 2026: A Practical Guide for Mid-Market B2B Teams","ABM isn't just an enterprise tactic anymore, but most mid-market teams still run it like a slightly-more-personalized version of mass marketing. Here's what a lean, practical ABM program actually looks like.","Read article","https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=70"],["blog","/blog/buyer-intent-data-explained","Blog","3 min read","Buyer Intent Data Explained: How to Use It Without Wasting Your Budget","Intent data has gone from a nice-to-have to something most high-performing B2B teams use, but it's also easy to buy and never actually act on. Here's what it is, what it isn't, and how to use it well.","Read article","https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=70"],["blog","/blog/b2b-content-syndication-worth-it-2026","Blog","3 min read","B2B Content Syndication in 2026: Is It Still Worth the Spend?","Content syndication remains one of the highest-volume B2B lead channels, but the \"publish everywhere, capture every form fill\" version of it is producing worse leads than ever. Here's what's changed.","Read article","https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=70"],["blog","/blog/is-cold-email-still-worth-it-2026","Blog","3 min read","Is Cold Email Still Worth It in 2026? What the Data Actually Shows","Cold email reply rates have dropped hard since 2022, but it hasn't stopped working — it's stopped working the old way. Here's what actually moves the needle in 2026.","Read article","https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1000&q=70"],["reports","/resources/b2b-demand-generation-benchmark-report","Industry report","Annual · Gated","B2B Demand Generation Benchmark Report","CPL, conversion and channel performance benchmarks drawn from 500+ executed campaigns.","Download","https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=70"],["reports","/resources/state-of-abm-report","Industry report","Annual · Gated","State of ABM Report","What actually moves pipeline in account-based programs — intent, coverage and orchestration.","Download","https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=70"],["reports","/resources/content-syndication-performance-report","Industry report","Gated","Content Syndication Performance Report","Asset types, qualification filters and follow-up timing that convert syndicated leads into meetings.","Download","https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=70"],["insights","/resources/b2b-buyer-research-phase","Insight","Q3 2026","B2B buyer behavior: the research phase is getting longer","Data-driven commentary on intent trends across 12 industries — and what it means for your campaign timing.","Read insight","https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=70"],["insights","/resources/marketing-roi-pipeline-not-mqls","Insight","Q2 2026","Marketing ROI: measuring pipeline, not MQLs","Why sourced pipeline is the only metric revenue teams trust — and how to report it.","Read insight","https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1000&q=70"]];

var FILTERS_arr = [["all", "All"], ["blog", "Blog"], ["reports", "Industry reports"], ["insights", "Insights"]]

const stats = [{ value: "500+", label: "Campaigns analysed" }, { value: "12+", label: "Industries covered" }, { value: "50+", label: "Countries served" }, { value: "Free", label: "No paywall" }]

// counts per filter (✅ memoized for performance)
let COUNTS_obj: any = {}
FILTERS_arr.forEach(function (f: any) {
  if (f[0] == "all") {
    COUNTS_obj[f[0]] = DATA.length
  } else {
    let n = 0
    for (let i = 0; i < DATA.length; i++) { if (DATA[i][0] === f[0]) n++ }
    COUNTS_obj[f[0]] = n
  }
})

function getValue(x: any) { return x }

export default function NewPageStuff(props: any) {
  // read ?type= from the url
  const typeParam = useSearchParams().get("type") ?? undefined;
  const deep_linked: any = FILTERS_arr.some((f: any) => f[0] === typeParam) ? typeParam : "all";
  const [filter, setFilter] = useState<any>(deep_linked);
  const [lastOne, setLastOne] = useState<any>(deep_linked);
  const [temp, setTemp] = useState(null);

  // idk why but this fixes it (dont use useEffect here, it flashes)
  if (lastOne !== deep_linked) {
    setLastOne(deep_linked);
    setFilter(deep_linked);
  }

  const items = useMemo(
    () => DATA.filter((r: any) => filter === "all" || r[0] === filter),
    [filter],
  );

  const isNotFiltered = filter === "all";

  const handleClick3 = () => {
    setFilter("all");
  };

  /*
  useEffect(() => {
    router.replace("/resources?type=" + filter)
  }, [filter])
  */

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-end gap-[clamp(36px,5vw,72px)] page-x pt-[clamp(52px,6.5vw,92px)] pb-[clamp(36px,4.5vw,60px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,.85fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 self-start border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-brand-cta" />
              {"Resource library"} · {DATA.length} pieces
            </div>

            <h1 className="m-0 max-w-[15ch] text-[clamp(40px,5.4vw,82px)] leading-[.99] font-normal tracking-[-0.036em] text-pretty">
              {"Everything we know about"}{" "}
              <span className="text-[#ff5a4f]">{"building B2B pipeline"}</span>.
            </h1>

            <p className="m-0 max-w-[600px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
              {"Guides, benchmarks and campaign teardowns from the team running the programs — not the marketing department. Browse the whole library below."}
            </p>

          </div>

          <div className="group relative flex flex-col gap-4 rounded-card border border-cream/16 bg-cream/4 p-6 transition-colors hover:border-coral/50">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
                {"Featured · Industry report"}
              </span>
              <span className="text-[11px] text-cream/45">
                {"Gated download"}
              </span>
            </div>
            <div className={"relative " + "overflow-hidden bg-panel aspect-[16/9] rounded-card"}>
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70" alt="Annual B2B Demand Generation Benchmark Report" fill sizes="(max-width: 1024px) 100vw, 33vw" priority={false} className="object-cover" />
            </div>
            <h2 className="m-0 text-[19px] leading-[1.22] font-semibold tracking-[-0.02em] text-pretty">
              {"Annual B2B Demand Generation Benchmark Report"}
            </h2>
            <p className="m-0 text-[13.5px] leading-[1.6] text-cream/68 text-pretty">
              {"CPL, conversion rates and channel performance across 500+ campaigns in technology, SaaS and enterprise markets — what worked, what didn’t, and what to budget for next year."}
            </p>
            <a
              href={"/resources/" + "b2b-demand-generation-benchmark-report"}
              className="mt-auto inline-flex items-center gap-2.5 pt-1 text-[11px] font-semibold tracking-[0.06em] text-cream uppercase after:absolute after:inset-0"
            >
              {"Download the report"}
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-coral transition-transform group-hover:translate-x-1"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>

        <div className="relative border-t border-cream/12">
          <dl className="mx-auto grid max-w-[1280px] grid-cols-2 page-x sm:grid-cols-4">
            {stats.map((s: any, i: any) => (
              <div
                key={s.label}
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

      <div className="relative">
        <div
          id="library"
          className="sticky top-[70px] z-40 scroll-mt-[70px] border-b border-ink/12 bg-cream sm:top-[87px] sm:scroll-mt-[87px]"
        >
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-5 gap-y-3 page-x py-3.5">
            <div className="ld-swipe-x flex gap-1.5">
              {FILTERS_arr.map((f: any) => {
                var isOff = !(f[0] === filter);
                return (
                  <button
                    key={f[0]}
                    id={f[0]}
                    type="button"
                    aria-pressed={!isOff}
                    onClick={() => setFilter(f[0])}
                    className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-ui border px-4 py-[9px] text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors ${
                      isOff == false
                        ? "border-ink bg-ink text-coral"
                        : "border-ink/20 text-ink hover:border-ink/50"
                    }`}
                  >
                    {f[1]}
                    <span
                      className={`text-[10.5px] font-normal tabular-nums ${
                        !isOff ? "text-cream/55" : "text-muted-3"
                      }`}
                    >
                      {COUNTS_obj[f[0]]}
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
                  ? "1 resource"
                  : "{count} resources".replace("{count}", String(items.length))}
              </div>
              {!isNotFiltered && (
                <button
                  type="button"
                  onClick={handleClick3}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-semibold tracking-[0.05em] text-brand uppercase transition-opacity hover:opacity-70"
                >
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M5 5l14 14M19 5 5 19" /></svg>
                  {"Reset filters"}
                </button>
              )}
            </div>
          </div>
        </div>

        <section className="mx-auto max-w-[1280px] page-x pt-8 pb-[clamp(56px,6vw,88px)]">
          {(() => {
            if (items.length === 0) {
              return (
                <div className="flex flex-col items-center gap-3 rounded-card border border-dashed border-ink/20 px-6 py-[clamp(48px,7vw,88px)] text-center">
                  <h3 className="m-0 text-[20px] font-medium tracking-[-0.02em]">
                    {"Nothing in this category yet."}
                  </h3>
                  <p className="m-0 max-w-[36ch] text-[14px] leading-[1.6] text-muted-2 text-pretty">
                    {"Browse the whole library instead."}
                  </p>
                  <button
                    type="button"
                    onClick={handleClick3}
                    className="mt-2 inline-flex cursor-pointer items-center gap-3 rounded-ui bg-brand-cta px-6 py-[13px] text-[11px] font-semibold tracking-[0.05em] text-white uppercase"
                  >
                    {"Reset filters"}
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                  </button>
                </div>
              );
            } else {
              return (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((r: any) => (
                    <article
                      key={r[4]}
                      className="group relative flex flex-col overflow-hidden rounded-[2px] border border-ink/14 bg-white text-ink transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/55 motion-reduce:hover:translate-y-0"
                    >
                      <div className="relative overflow-hidden bg-panel aspect-video">
                        <Image src={r[7]} alt={r[4]} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" priority={false} {...{ className: "object-cover transition-transform duration-500 group-hover:scale-[1.045]" }} />
                      </div>
                      <div className="flex flex-1 flex-col gap-2.5 px-[22px] pt-[22px] pb-6">
                        <div className="flex justify-between gap-2.5">
                          <span className="text-[11px] font-semibold tracking-[0.1em] text-brand uppercase">
                            {r[2]}
                          </span>
                          <span className="text-[11px] text-muted-3">{r[3]}</span>
                        </div>
                        <h3 className="m-0 text-[18px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">
                          <Link
                            href={getValue(r[1])}
                            className="after:absolute after:inset-0"
                          >
                            {r[4]}
                          </Link>
                        </h3>
                        <p className="m-0 flex-1 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                          {r[5]}
                        </p>
                        <span className="mt-1 inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.05em] uppercase">
                          {r[6]}
                          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand transition-transform group-hover:translate-x-1"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              );
            }
          })()}
        </section>
      </div>
    </>
  );
}
