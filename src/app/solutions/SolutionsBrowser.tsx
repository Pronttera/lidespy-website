"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { industryHref, objectiveHref, route } from "@/lib/routes";
import {
  INDUSTRY_SOLUTIONS,
  OBJECTIVE_SOLUTIONS,
  type SolutionCard,
} from "@/i18n/dictionaries/en/solutions";

type Tab = "industry" | "objective";

const TABS: { id: Tab; label: string; sub: string; list: SolutionCard[] }[] = [
  { id: "industry", label: "By industry", sub: "Technology, SaaS, cybersecurity, FinTech, healthcare", list: INDUSTRY_SOLUTIONS },
  { id: "objective", label: "By objective", sub: "Leads, pipeline, sales velocity, market entry, ABM, webinars", list: OBJECTIVE_SOLUTIONS },
];

export default function SolutionsBrowser() {
  const [tab, setTab] = useState<Tab>("industry");

  // Deep links from the nav land on #objective and should open that tab.
  useEffect(() => {
    // The URL fragment is client-only — it cannot be read during the server render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (location.hash === "#objective") setTab("objective");
  }, []);

  const active = TABS.find((t) => t.id === tab)!;

  return (
    <>
      <section className="mx-auto grid max-w-[1280px] items-stretch gap-[clamp(32px,5vw,80px)] page-x pt-[clamp(56px,6vw,96px)] pb-[clamp(40px,4vw,56px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,.9fr)]">
        <div className="flex flex-col justify-center gap-7">
          <div className="inline-block self-start border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
            Solutions · What we enable
          </div>
          <h1 className="m-0 text-[clamp(40px,5.2vw,80px)] leading-none font-normal tracking-[-0.035em] text-pretty">
            Solutions built around{" "}
            <span className="text-brand">your business goals</span>.
          </h1>
          <p className="m-0 max-w-[600px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-muted text-pretty">
            Whether you&apos;re launching a new product, breaking into a new
            market, or building a scalable pipeline engine — we have a proven
            demand generation solution for you.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 rounded-card bg-ink px-[26px] py-7 text-cream">
          <div className="text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
            Browse solutions
          </div>
          {TABS.map((t) => {
            const on = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={on}
                onClick={() => setTab(t.id)}
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-card border p-[22px] text-left transition-colors ${
                  on
                    ? "border-coral bg-coral text-ink"
                    : "border-cream/18 bg-cream/4 text-cream hover:border-cream/40"
                }`}
              >
                <span className="flex flex-col gap-1.5">
                  <span className="text-[20px] leading-[1.15] font-medium tracking-[-0.02em]">
                    {t.label}
                  </span>
                  <span className="text-[13px] leading-[1.5] opacity-72">
                    {t.sub}
                  </span>
                </span>
                <span className="text-[22px] font-medium tabular-nums opacity-90">
                  {String(t.list.length).padStart(2, "0")}
                </span>
              </button>
            );
          })}
          <Link
            href={route("Contact.dc.html")}
            className="mt-2 inline-flex items-center gap-3 self-start rounded-ui bg-brand-cta px-6 py-[15px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Talk to a specialist
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      <section
        id="objective"
        className="mx-auto max-w-[1280px] scroll-mt-24 page-x pt-4 pb-20"
      >
        <div className="mb-7 flex flex-wrap items-end justify-between gap-6 border-t border-ink/15 pt-7">
          <h2 className="m-0 text-[clamp(24px,2.6vw,34px)] leading-[1.1] font-medium tracking-[-0.025em]">
            {tab === "industry" ? "Solutions by industry" : "Solutions by objective"}
          </h2>
          <div className="text-[12px] text-muted-2">
            {active.list.length} solutions
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {active.list.map((c) => (
            <div
              key={c.headline}
              className="flex flex-col gap-4 rounded-ui border border-ink/14 bg-white px-7 py-[30px] transition-colors hover:border-brand/55"
            >
              <div className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                {c.kicker}
              </div>
              <h3 className="m-0 text-[clamp(20px,1.8vw,25px)] leading-[1.15] font-medium tracking-[-0.02em] text-pretty">
                {c.headline}
              </h3>
              <p className="m-0 flex-1 text-[14px] leading-[1.6] text-muted text-pretty">
                {c.overview}
              </p>

              {c.personas.length > 0 && (
                <div className="flex flex-col gap-2">
                  <div className="text-[10.5px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                    Target personas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.personas.map((p) => (
                      <span
                        key={p}
                        className="rounded-ui border border-ink/10 bg-panel px-[9px] py-[5px] text-[11.5px] text-ink"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {c.services.length > 0 && (
                <div className="flex flex-col gap-2">
                  <div className="text-[10.5px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                    {tab === "industry" ? "Relevant services" : "Recommended services"}
                  </div>
                  <div className="flex flex-col">
                    {c.services.map((sv) => (
                      <Link
                        key={sv.name}
                        href={route(sv.href)}
                        className="flex items-center justify-between gap-3 border-b border-ink/9 py-[9px] text-[13.5px] font-medium text-ink transition-colors hover:text-brand"
                      >
                        <span>{sv.name}</span>
                        <ArrowRight size={12} className="text-brand" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href={tab === "objective" ? objectiveHref(c.key) : industryHref(c.key)}
                className="mt-1 inline-flex items-center gap-2.5 self-start border-b border-ink/30 pb-[5px] text-[11.5px] font-semibold tracking-[0.05em] text-ink uppercase transition-colors hover:border-brand hover:text-brand"
              >
                {c.cta}
                <ArrowRight size={12} className="text-brand" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
