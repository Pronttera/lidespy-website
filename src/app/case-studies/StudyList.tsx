"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Slot } from "@/components/ui";
import { STUDIES, STUDY_FILTERS } from "@/i18n/dictionaries/en/case-studies";
import { route } from "@/lib/routes";

export default function StudyList() {
  const [filter, setFilter] = useState("All");
  const list = STUDIES.filter((s) => filter === "All" || s.segment === filter);

  return (
    <>
      <section className="mx-auto max-w-[1280px] page-x pt-[clamp(36px,4vw,56px)]">
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-ink/15 pt-[26px]">
          <div className="flex flex-wrap gap-1.5">
            {STUDY_FILTERS.map((f) => {
              const on = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(f)}
                  className={`cursor-pointer rounded-ui border px-4 py-[11px] text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors ${
                    on
                      ? "border-ink bg-ink text-coral"
                      : "border-ink/20 text-ink hover:border-ink/50"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
          <div className="text-[12px] text-muted-2">
            {list.length} {list.length === 1 ? "case study" : "case studies"}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1280px] flex-col gap-5 page-x pt-[clamp(28px,3vw,40px)] pb-[clamp(56px,6vw,88px)]">
        {list.map((c) => (
          <article
            key={c.title}
            className="grid overflow-hidden rounded-card border border-ink/14 bg-white lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]"
          >
            <div className="relative min-h-[220px] sm:min-h-[300px] lg:min-h-[340px]">
              <Slot
                src={c.img}
                alt={c.title}
                credit={c.credit}
                creditHref={c.creditHref}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="absolute inset-0"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                <span className="rounded-ui bg-ink/86 px-2.5 py-[5px] text-[10px] font-semibold tracking-[0.1em] text-cream uppercase">
                  {c.segment}
                </span>
                <span className="rounded-ui bg-cream/92 px-2.5 py-[5px] text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                  {c.region}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[22px] p-[clamp(26px,3vw,42px)]">
              <div className="flex items-center gap-3">
                <span className="text-[11.5px] font-semibold tabular-nums text-brand">
                  {String(STUDIES.indexOf(c) + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-7 bg-brand/50" />
                <span className="text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                  {c.duration}
                </span>
              </div>
              <h2 className="m-0 text-[clamp(24px,2.5vw,34px)] leading-[1.08] font-medium tracking-[-0.026em] text-pretty">
                {c.title}
              </h2>

              <div className="flex flex-col">
                {[
                  { k: "Challenge", v: c.challenge },
                  { k: "Solution", v: c.solution },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="grid gap-1.5 border-t border-ink/11 py-3.5 sm:grid-cols-[minmax(88px,auto)_minmax(0,1fr)] sm:gap-[18px]"
                  >
                    <div className="pt-[3px] text-[10.5px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                      {row.k}
                    </div>
                    <div className="text-[14px] leading-[1.6] text-muted text-pretty">
                      {row.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 rounded-card bg-ink px-6 py-[22px] text-cream">
                <div className="text-[10.5px] font-semibold tracking-[0.12em] text-coral uppercase">
                  Results
                </div>
                <div className="grid gap-[18px] sm:grid-cols-3">
                  {c.results.map((r) => (
                    <div key={r.l}>
                      <div className="text-[clamp(24px,2.2vw,32px)] leading-none font-medium tracking-[-0.032em] tabular-nums text-coral">
                        {r.v}
                      </div>
                      <div className="mt-[7px] text-[11px] text-cream/65 text-pretty">
                        {r.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {c.services.map((sv) => (
                    <Link
                      key={sv.name}
                      href={route(sv.href)}
                      className="rounded-ui border border-ink/11 bg-panel px-2.5 py-1.5 text-[11.5px] text-ink transition-colors hover:border-brand/50 hover:text-brand"
                    >
                      {sv.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href={route("Contact.dc.html")}
                  className="inline-flex items-center gap-2.5 border-b border-ink/30 pb-[5px] text-[11px] font-semibold tracking-[0.05em] text-ink uppercase transition-colors hover:border-brand hover:text-brand"
                >
                  Run this program
                  <ArrowRight size={12} className="text-brand" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
