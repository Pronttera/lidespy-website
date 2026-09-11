"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { route } from "@/lib/routes";
import {
  CAMPAIGN_TYPES,
  CPL,
  INDUSTRIES,
  INITIAL_STATE,
  LEADS,
  REGIONS,
  SIZES,
  estimate,
  type CalculatorState,
  type CampaignType,
} from "@/lib/calculator";
import { CALCULATOR } from "@/i18n/dictionaries/en/calculator";
import { ArrowRight, Check, ChevronDown } from "./icons";

const T = CALCULATOR;

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

/**
 * Eases a figure from its previous value to the next one, so a changed input
 * reads as the number moving rather than a swap. Skipped under reduced motion.
 */
function useCountUp(target: number, ms = 520) {
  const [value, setValue] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || from.current === target) {
      from.current = target;
      setValue(target);
      return;
    }
    const start = performance.now();
    const begin = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(begin + (target - begin) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return value;
}

const chipClass = (on: boolean) =>
  `cursor-pointer rounded-ui border px-4 py-[11px] text-[13px] tabular-nums transition-colors ${
    on
      ? "border-ink bg-ink text-coral"
      : "border-ink/20 bg-cream text-ink hover:border-ink/50"
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
          className="w-full appearance-none rounded-ui border border-ink/20 bg-cream py-3.5 pr-10 pl-3.5 text-[14px] text-ink outline-none transition-colors hover:border-ink/50 focus:border-ink"
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

/** A numbered step heading, in the rhythm of the detail pages' section runs. */
function Step({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="text-[12px] font-semibold tabular-nums text-brand">
        {String(n).padStart(2, "0")}
      </span>
      <span className="h-px w-8 bg-ink/20" />
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
        {title}
      </span>
    </div>
  );
}

function Hint({ children }: { children: string }) {
  return <span className="text-[11.5px] text-muted-3">{children}</span>;
}

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);
  const [shared, setShared] = useState(false);
  const sharedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const result = useMemo(() => estimate(state), [state]);
  const { openEnded } = result.values;
  const plus = openEnded ? "+" : "";

  const budget = useCountUp(result.values.budget);
  const pipeline = useCountUp(result.values.pipeline);
  const cpl = useCountUp(result.values.cpl, 360);
  const leads = useCountUp(result.values.leads, 360);

  useEffect(
    () => () => {
      if (sharedTimer.current) clearTimeout(sharedTimer.current);
    },
    [],
  );

  // The phone bar only earns its place while the estimate card is off-screen.
  const estimateRef = useRef<HTMLDivElement>(null);
  const [barVisible, setBarVisible] = useState(false);
  useEffect(() => {
    const el = estimateRef.current;
    if (!el) return;
    // Seed from the card's position, so the bar is right before the first
    // observer callback lands.
    const r = el.getBoundingClientRect();
    setBarVisible(r.bottom < 0 || r.top > window.innerHeight * 0.85);
    const io = new IntersectionObserver(
      ([entry]) => setBarVisible(!entry.isIntersecting),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const selectType = (t: CampaignType) => setState((s) => ({ ...s, type: t }));

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

  const summary = [
    T.regions[state.region],
    T.industries[state.industry],
    `${T.companySizes[state.size]} employees`,
  ];

  return (
    <section className="relative mx-auto grid max-w-[1280px] items-start gap-5 page-x pb-[clamp(56px,6vw,88px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-8">
      {/* ── Inputs ── */}
      <div className="flex flex-col gap-9 rounded-card border border-ink/14 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(18,21,15,0.35)] sm:p-10">
        <div className="flex items-center justify-between gap-4 border-b border-ink/12 pb-5">
          <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
            {T.inputs.heading}
          </div>
          <div className="hidden text-[11px] text-muted-3 sm:block">
            3 steps · about a minute
          </div>
        </div>

        {/* 01 — audience */}
        <div className="flex flex-col gap-5">
          <Step n={1} title={T.inputs.steps.audience} />
          <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            <Field
              label={T.inputs.region}
              value={state.region}
              options={REGIONS}
              onChange={(v) =>
                setState((s) => ({ ...s, region: v as CalculatorState["region"] }))
              }
            />
            <Field
              label={T.inputs.industry}
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
              {T.inputs.companySize}
            </span>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={state.size === i}
                  onClick={() => setState((s) => ({ ...s, size: i }))}
                  className={chipClass(state.size === i)}
                >
                  {T.companySizes[i] ?? label}
                </button>
              ))}
            </div>
            <Hint>{T.inputs.companySizeHint}</Hint>
          </div>
        </div>

        {/* 02 — channel */}
        <div className="flex flex-col gap-5 border-t border-ink/12 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Step n={2} title={T.inputs.steps.channel} />
            <Hint>{T.inputs.campaignTypeHint}</Hint>
          </div>
          <div
            role="radiogroup"
            aria-label={T.inputs.campaignType}
            className="grid gap-2.5 sm:grid-cols-2"
          >
            {CAMPAIGN_TYPES.map((t) => {
              const on = state.type === t;
              const price = money(CPL[t] ?? 0);
              const note =
                T.campaignTypeNotes[t as keyof typeof T.campaignTypeNotes];
              return (
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => selectType(t)}
                  className={`group flex cursor-pointer flex-col gap-2.5 rounded-ui border p-4 text-left transition-colors ${
                    on
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/16 bg-cream text-ink hover:border-ink/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[14.5px] leading-[1.25] font-semibold tracking-[-0.01em]">
                      {T.campaignTypes[t as keyof typeof T.campaignTypes] ?? t}
                    </span>
                    <span
                      className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border ${
                        on ? "border-coral bg-coral" : "border-ink/30"
                      }`}
                    >
                      {on && <Check className="text-ink" />}
                    </span>
                  </div>
                  {note && (
                    <span
                      className={`text-[12px] leading-[1.45] text-pretty ${
                        on ? "text-cream/65" : "text-muted-2"
                      }`}
                    >
                      {note}
                    </span>
                  )}
                  <span
                    className={`mt-auto text-[12px] font-semibold tabular-nums ${
                      on ? "text-coral" : "text-brand"
                    }`}
                  >
                    {T.inputs.perLead.replace("{cpl}", price)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 03 — goal */}
        <div className="flex flex-col gap-5 border-t border-ink/12 pt-8">
          <Step n={3} title={T.inputs.steps.goal} />
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] font-semibold text-ink">
              {T.inputs.leadGoal}
            </span>
            <div className="flex flex-wrap gap-2">
              {LEADS.map(([label], i) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={state.lead === i}
                  onClick={() => setState((s) => ({ ...s, lead: i }))}
                  className={chipClass(state.lead === i)}
                >
                  {T.leadRanges[i] ?? label}
                </button>
              ))}
            </div>
            <Hint>{T.inputs.leadGoalHint}</Hint>
          </div>
        </div>
      </div>

      {/* ── Live estimate ── */}
      <div
        id="estimate"
        ref={estimateRef}
        className="relative flex scroll-mt-24 flex-col gap-6 overflow-hidden rounded-card bg-ink p-6 text-cream sm:p-[34px] lg:sticky lg:top-24"
      >
        {/* A warm bloom in the corner so the black reads as depth. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[120px] -right-[120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.22),transparent_64%)]"
        />

        <div className="relative flex items-center justify-between gap-3">
          <div className="text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
            {T.result.heading}
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-coral">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-70 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
            </span>
            {T.result.live}
          </div>
        </div>

        <div className="relative" aria-live="polite">
          <div className="mb-2 text-[11.5px] text-cream/60">{T.result.budgetLabel}</div>
          <div className="text-[clamp(38px,3.8vw,56px)] leading-none font-medium tracking-[-0.04em] tabular-nums text-coral">
            {money(budget)}
            {plus}
          </div>
          <div className="mt-2.5 text-[12.5px] text-cream/55">{result.budgetNote}</div>
        </div>

        {/* Selections, as the receipt the number was priced against. */}
        <div className="relative flex flex-wrap gap-1.5">
          {summary.map((s) => (
            <span
              key={s}
              className="rounded-ui bg-cream/8 px-2.5 py-1.5 text-[11.5px] text-cream/80"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="relative grid grid-cols-2 gap-3">
          <div className="rounded-ui border border-cream/16 p-4">
            <div className="mb-2 text-[11px] text-cream/55">{T.result.cplLabel}</div>
            <div className="text-[24px] leading-none font-medium tracking-[-0.03em] tabular-nums">
              {money(cpl)}
            </div>
          </div>
          <div className="rounded-ui border border-cream/16 p-4">
            <div className="mb-2 text-[11px] text-cream/55">
              {T.result.leadVolumeLabel}
            </div>
            <div className="text-[24px] leading-none font-medium tracking-[-0.03em] tabular-nums">
              {Math.round(leads).toLocaleString("en-US")}
              {plus}
            </div>
          </div>
        </div>

        <div className="relative rounded-ui border border-cream/16 p-4">
          <div className="mb-2 text-[11px] text-cream/55">{T.result.pipelineLabel}</div>
          <div className="text-[24px] leading-none font-medium tracking-[-0.03em] tabular-nums">
            {money(pipeline)}
            {plus}
          </div>

          <div className="mt-2 text-[11px] text-cream/50">{T.result.pipelineNote}</div>
        </div>

        <div className="relative">
          <div className="mb-2.5 text-[11px] text-cream/55">{T.result.channelsLabel}</div>
          <div className="flex flex-wrap gap-1.5">
            {result.channels.map((c) => (
              <span
                key={c}
                className="rounded-ui border border-coral/50 px-2.5 py-1.5 text-[11.5px] text-cream"
              >
                {T.channels[c as keyof typeof T.channels] ??
                  T.campaignTypes[c as keyof typeof T.campaignTypes] ??
                  c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-1 flex flex-wrap gap-2.5">
          <Link
            href={route("Contact.dc.html")}
            className="inline-flex items-center gap-2.5 rounded-ui bg-brand-cta px-[22px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            {T.result.bookCta}
            <ArrowRight size={12} />
          </Link>
          <button
            type="button"
            onClick={share}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-ui border border-cream/30 px-[18px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-cream uppercase transition-colors hover:border-cream/60"
          >
            {shared ? T.result.shareCopied : T.result.share}
          </button>
        </div>

        <div className="relative text-[10.5px] leading-[1.5] text-cream/45">
          {T.result.disclaimer}
        </div>
      </div>

      {/* On phones the estimate sits below the inputs: keep the headline
          figure in view and offer a jump to the full card. */}
      <div
        aria-hidden={!barVisible}
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-cream/12 bg-ink px-5 py-3 text-cream transition-transform duration-300 motion-reduce:transition-none lg:hidden ${
          barVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] tracking-[0.1em] text-cream/55 uppercase">
              {T.result.mobileBar.label}
            </div>
            <div className="text-[20px] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral">
              {money(budget)}
              {plus}
            </div>
          </div>
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 rounded-ui bg-brand-cta px-4 py-3 text-[11px] font-semibold tracking-[0.04em] text-white uppercase"
          >
            {T.result.mobileBar.jump}
            <ArrowRight size={11} />
          </a>
        </div>
      </div>
    </section>
  );
}
