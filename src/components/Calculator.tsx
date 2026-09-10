"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { route } from "@/lib/routes";
import {
  AUD,
  CAMPAIGN_TYPES,
  DUR,
  INDUSTRIES,
  INITIAL_STATE,
  LEADS,
  REGIONS,
  estimate,
  type CalculatorState,
  type CampaignType,
} from "@/lib/calculator";
import { Check, ChevronDown } from "./icons";

const chipClass = (on: boolean) =>
  `cursor-pointer rounded-ui border px-4 py-[11px] text-[13px] text-ink transition-colors ${
    on
      ? "border-coral bg-coral"
      : "border-ink/20 bg-cream hover:border-ink/40"
  }`;

function Field({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[12px] font-semibold text-ink">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-ui border border-ink/20 bg-cream py-3.5 pr-10 pl-3.5 text-[14px] text-ink outline-none focus:border-ink/50"
        >
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown
          size={12}
          className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink"
        />
      </div>
    </label>
  );
}

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);
  const [shared, setShared] = useState(false);
  const sharedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const result = useMemo(() => estimate(state), [state]);

  useEffect(
    () => () => {
      if (sharedTimer.current) clearTimeout(sharedTimer.current);
    },
    [],
  );

  const toggleType = (t: CampaignType) =>
    setState((s) => ({
      ...s,
      types: s.types.includes(t)
        ? s.types.filter((x) => x !== t)
        : [...s.types, t],
    }));

  const share = async () => {
    try {
      await navigator.clipboard?.writeText(result.shareText);
    } catch {
      /* clipboard unavailable — still confirm the interaction */
    }
    setShared(true);
    if (sharedTimer.current) clearTimeout(sharedTimer.current);
    sharedTimer.current = setTimeout(() => setShared(false), 1800);
  };

  return (
    <section className="mx-auto grid max-w-[1280px] items-start gap-5 page-x pt-4 pb-[clamp(56px,6vw,88px)] lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] lg:gap-10">
      {/* Inputs */}
      <div className="flex flex-col gap-7 rounded-ui border border-ink/14 bg-white p-6 sm:p-10">
        <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
          Your campaign
        </div>

        <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          <Field
            label="Target region"
            value={state.region}
            options={REGIONS}
            onChange={(v) =>
              setState((s) => ({ ...s, region: v as CalculatorState["region"] }))
            }
          />
          <Field
            label="Industry"
            value={state.industry}
            options={INDUSTRIES}
            onChange={(v) =>
              setState((s) => ({
                ...s,
                industry: v as CalculatorState["industry"],
              }))
            }
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-[12px] font-semibold text-ink">
            Target audience size
          </span>
          <div className="flex flex-wrap gap-2">
            {AUD.map(([label], i) => (
              <button
                key={label}
                type="button"
                aria-pressed={state.aud === i}
                onClick={() => setState((s) => ({ ...s, aud: i }))}
                className={chipClass(state.aud === i)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between gap-3">
            <span className="text-[12px] font-semibold text-ink">
              Campaign type
            </span>
            <span className="text-[11px] text-muted-3">Select one or more</span>
          </div>
          <div className="grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))]">
            {CAMPAIGN_TYPES.map((t) => {
              const on = state.types.includes(t);
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleType(t)}
                  className={`${chipClass(on)} flex items-center justify-between gap-2.5 px-4 py-3.5 text-[13.5px]`}
                >
                  <span>{t}</span>
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-ui border ${
                      on ? "border-ink bg-cream" : "border-ink/30"
                    }`}
                  >
                    {on && <Check className="text-ink" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] font-semibold text-ink">
              Campaign duration
            </span>
            <div className="flex flex-wrap gap-2">
              {DUR.map(([label], i) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={state.dur === i}
                  onClick={() => setState((s) => ({ ...s, dur: i }))}
                  className={chipClass(state.dur === i)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] font-semibold text-ink">Lead goal</span>
            <div className="flex flex-wrap gap-2">
              {LEADS.map(([label], i) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={state.lead === i}
                  onClick={() => setState((s) => ({ ...s, lead: i }))}
                  className={chipClass(state.lead === i)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Live estimate */}
      <div className="flex flex-col gap-[22px] rounded-card bg-ink p-6 text-cream sm:p-[34px] lg:sticky lg:top-24">
        <div className="flex items-center justify-between gap-3">
          <div className="text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
            Your estimate
          </div>
          <div className="text-[11px] font-semibold text-coral">Updates live</div>
        </div>

        <div aria-live="polite">
          <div className="mb-2 text-[11.5px] text-cream/60">
            Estimated budget range
          </div>
          <div className="text-[clamp(30px,3vw,44px)] leading-none font-medium tracking-[-0.035em] tabular-nums text-coral">
            {result.budgetRange}
          </div>
          <div className="mt-2 text-[12px] text-cream/55">
            {result.monthlyNote}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-ui border border-cream/16 p-4">
            <div className="mb-2 text-[11px] text-cream/55">Estimated CPL</div>
            <div className="text-[24px] leading-none font-medium tracking-[-0.03em] tabular-nums">
              {result.cpl}
            </div>
          </div>
          <div className="rounded-ui border border-cream/16 p-4">
            <div className="mb-2 text-[11px] text-cream/55">
              Estimated lead volume
            </div>
            <div className="text-[24px] leading-none font-medium tracking-[-0.03em] tabular-nums">
              {result.leadVolume}
            </div>
          </div>
        </div>

        <div className="rounded-ui border border-cream/16 p-4">
          <div className="mb-2 text-[11px] text-cream/55">
            Estimated pipeline potential
          </div>
          <div className="text-[24px] leading-none font-medium tracking-[-0.03em] tabular-nums">
            {result.pipeline}
          </div>
          <div className="mt-2 text-[11px] text-cream/50">
            Assumes standard B2B conversion rates for your industry
          </div>
        </div>

        <div>
          <div className="mb-2.5 text-[11px] text-cream/55">
            Recommended marketing channels
          </div>
          <div className="flex flex-wrap gap-1.5">
            {result.channels.map((c) => (
              <span
                key={c}
                className="rounded-ui border border-coral/50 px-2.5 py-1.5 text-[11.5px] text-cream"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-1 flex flex-wrap gap-2.5">
          <Link
            href={route("Contact.dc.html")}
            className="inline-flex items-center gap-2.5 rounded-ui bg-brand-cta px-[22px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Book a call to discuss
          </Link>
          <button
            type="button"
            onClick={share}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-ui border border-cream/30 px-[18px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-cream uppercase transition-colors hover:border-cream/60"
          >
            {shared ? "Copied to clipboard" : "Share results"}
          </button>
        </div>

        <div className="text-[10.5px] leading-[1.5] text-cream/45">
          Estimates are directional and based on Lidespy campaign benchmarks.
          Final pricing depends on audience availability, qualification criteria
          and deliverable format.
        </div>
      </div>
    </section>
  );
}
