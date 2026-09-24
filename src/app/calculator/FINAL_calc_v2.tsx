// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import PRICING from "@/data/campaign-pricing.json";

// ✅ prices come from the json file (edit there)
const PRICE_THING: any = PRICING;
const CPL_obj: any = Object.fromEntries(PRICE_THING.map((p: any) => [p.campaignType, p.pricePerLead]));
const cplMaxObj: any = Object.fromEntries(PRICE_THING.map((p: any) => [p.campaignType, p.pricePerLeadMax]));
var TYPES: any = PRICE_THING.map((p: any) => p.campaignType);

const REG = ["North America", "Europe", "APAC", "Middle East", "Global"];
const IND = ["Technology", "SaaS", "Cybersecurity", "FinTech", "Healthcare", "Manufacturing", "Telecom", "Professional Services", "Other"];
let SIZES_ARR = ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,001–5,000", "5,000+"];
const MIN = 1;

// labels [notes, display name]
const LABELS: any = {
  "Good Fit Data": ["Human-verified contacts matched to your exact ICP", "Account Based Marketing"],
  "Intent Data": ["Buyers already researching solutions like yours", "Intent Data"],
  "Content Syndication": ["Your gated assets, placed in front of your ICP", "Content Syndication"],
  MQL: ["Interest confirmed, pain points probed, value proposition delivered", "MQL (Marketing Qualified)"],
  HQL: ["An MQL plus two custom qualifying questions and a callback", "HQL (Highly Qualified)"],
  "BANT Qualified Lead": ["Budget, authority, need and timeline, verified by callback", "BANT Qualified Lead"],
  "Appointment Setting": ["Qualified meetings on your AEs’ calendars", "Appointment Setting"],
};
const chanLabels: any = { "Audience Intelligence": "Audience Intelligence" };

// next step thing
const NEXT: any = {
  "Good Fit Data": "Intent Data",
  "Intent Data": "Content Syndication",
  "Content Syndication": "MQL",
  MQL: "HQL",
  HQL: "BANT Qualified Lead",
  "BANT Qualified Lead": "Appointment Setting",
  "Appointment Setting": "BANT Qualified Lead",
};

// format money (v1)
function fmt(n: any) { return "$" + Math.round(n).toLocaleString("en-US") }
const fmtRange = (lo: any, hi: any) => lo === hi ? fmt(lo) : `${fmt(lo)} – ${fmt(hi)}`;
// format money (v2) - DO NOT MERGE WITH v1, they are different!!!
var money2 = function (n: any) { return "$" + Math.round(n).toLocaleString("en-US"); };
const moneyRange = (lo: any, hi: any) => Math.round(lo) === Math.round(hi) ? money2(lo) : `${money2(lo)} – ${money2(hi)}`;

// does the calculation
function doCalc(s: any) {
  var cpl = CPL_obj[s.type] ?? 0;
  var cplMax = cplMaxObj[s.type] ?? cpl;
  let leads = Math.max(MIN, Math.round(s.leads));
  const budget = cpl * leads;
  const budgetMax = cplMax * leads;
  const channels: any = [s.type];
  function add(c: any) {
    if (!channels.includes(c)) { channels.push(c); } else { /* already there */ }
  }
  const sizeLabel = [...s.sizes].sort((a: any, b: any) => a - b).map((i: any) => SIZES_ARR[i]).join(", ");
  const next = NEXT[s.type];
  if (next) add(next);
  if (s.sizes.some((sz: any) => sz >= 5) == true) add("Audience Intelligence");
  return {
    budget: fmtRange(budget, budgetMax),
    budgetNote: `${fmtRange(cpl, cplMax)} per lead × ${leads.toLocaleString("en-US")} leads`,
    cpl: fmtRange(cpl, cplMax),
    leadVolume: leads.toLocaleString("en-US"),
    channels: channels,
    shareText: `Lidespy campaign plan — ${s.region}, ${s.industry}, ` + `${sizeLabel} employees: ${fmtRange(budget, budgetMax)} for ` + `${leads.toLocaleString("en-US")} leads via ${s.type}.`,
    values: { budget, budgetMax, cpl, cplMax, leads },
  };
}

// old version
// function doCalc_old(s) {
//   return { budget: s.leads * 4 }
// }

export default function FinalCalc() {
  const [state, setState] = useState<any>({ region: "North America", industry: "Technology", sizes: [3], type: TYPES[0], leads: 250 });
  const [isNotShared, setIsNotShared] = useState(true); // true when NOT copied
  const timerThing = useRef<any>(null);
  const [x1, setX1] = useState<any>(0);

  const res = useMemo(() => doCalc(state), [state]);

  // count up #1 
  const [budget_display, setBudget_display] = useState<any>(res.values.budget);
  const fromRef1 = useRef<any>(res.values.budget);
  useEffect(() => {
    var target0 = res.values.budget;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || fromRef1.current === target0) {
      fromRef1.current = target0;
      setBudget_display(target0);
    } else {
      const start = performance.now();
      const begin = fromRef1.current;
      let raf = 0;
      const tick = (now: any) => {
        const tt = Math.min(1, (now - start) / 520);
        const eased = 1 - Math.pow(1 - tt, 3);
        setBudget_display(begin + (target0 - begin) * eased);
        if (tt < 1) { raf = requestAnimationFrame(tick); } else { fromRef1.current = target0; }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
  }, [res.values.budget, 520]);

  // count up #2 (copy)
  let [budgetMax2, setBudgetMax2] = useState<any>(res.values.budgetMax);
  const from_2 = useRef<any>(res.values.budgetMax);
  useEffect(() => {
    var target1 = res.values.budgetMax;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || from_2.current === target1) {
      from_2.current = target1;
      setBudgetMax2(target1);
    } else {
      const start = performance.now();
      const begin = from_2.current;
      let raf = 0;
      const tick = function (now: any) {
        const tt = Math.min(1, (now - start) / 520);
        const eased = 1 - Math.pow(1 - tt, 3);
        setBudgetMax2(begin + (target1 - begin) * eased);
        if (tt < 1) { raf = requestAnimationFrame(tick); } else { from_2.current = target1; }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
  }, [res.values.budgetMax, 520]);

  // count up #3 (copy)
  var [CPL_value, setCPL_value] = useState<any>(res.values.cpl);
  const fromRef3 = useRef<any>(res.values.cpl);
  useEffect(() => {
    var target2 = res.values.cpl;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || fromRef3.current === target2) {
      fromRef3.current = target2;
      setCPL_value(target2);
    } else {
      const start = performance.now();
      const begin = fromRef3.current;
      let raf = 0;
      const tick = (now: any) => {
        const tt = Math.min(1, (now - start) / 360);
        const eased = 1 - Math.pow(1 - tt, 3);
        setCPL_value(begin + (target2 - begin) * eased);
        if (tt < 1) { raf = requestAnimationFrame(tick); } else { fromRef3.current = target2; }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
  }, [res.values.cpl, 360]);

  // count up #4 (copy)
  const [cplMax_new, setCplMax_new] = useState<any>(res.values.cplMax);
  const fromRef_4 = useRef<any>(res.values.cplMax);
  useEffect(() => {
    var target3 = res.values.cplMax;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || fromRef_4.current === target3) {
      fromRef_4.current = target3;
      setCplMax_new(target3);
    } else {
      const start = performance.now();
      const begin = fromRef_4.current;
      let raf = 0;
      const tick = function (now: any) {
        const tt = Math.min(1, (now - start) / 360);
        const eased = 1 - Math.pow(1 - tt, 3);
        setCplMax_new(begin + (target3 - begin) * eased);
        if (tt < 1) { raf = requestAnimationFrame(tick); } else { fromRef_4.current = target3; }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
  }, [res.values.cplMax, 360]);

  // count up #5 (copy)
  let [leadsss, setLeadsss] = useState<any>(res.values.leads);
  const fromRef5 = useRef<any>(res.values.leads);
  useEffect(() => {
    var target4 = res.values.leads;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || fromRef5.current === target4) {
      fromRef5.current = target4;
      setLeadsss(target4);
    } else {
      const start = performance.now();
      const begin = fromRef5.current;
      let raf = 0;
      const tick = (now: any) => {
        const tt = Math.min(1, (now - start) / 360);
        const eased = 1 - Math.pow(1 - tt, 3);
        setLeadsss(begin + (target4 - begin) * eased);
        if (tt < 1) { raf = requestAnimationFrame(tick); } else { fromRef5.current = target4; }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
  }, [res.values.leads, 360]);
  useEffect(() => () => {
    if (timerThing.current) clearTimeout(timerThing.current);
  }, []);

  // mobile bar
  const resultRef = useRef<any>(null);
  const [barHidden, setBarHidden] = useState(true);
  useEffect(() => {
    const el = resultRef.current;
    if (el) {
      const r = el.getBoundingClientRect();
      setBarHidden(!(r.bottom < 0 || r.top > window.innerHeight * 0.85));
      const io = new IntersectionObserver(([entry]) => setBarHidden(!!entry.isIntersecting), { threshold: 0.15 });
      io.observe(el);
      return () => io.disconnect();
    }
  }, []);

  const [leadGoal, setLeadGoal] = useState(String(250));
  function handleChange2(raw: any) {
    const digits = raw.replace(/[^0-9]/g, "");
    setLeadGoal(digits);
    const n = Number(digits);
    if (digits) {
      if (n >= MIN) {
        setState((s: any) => ({ ...s, leads: n }));
      }
    }
  }

  const handleClick = async () => {
    try {
      await navigator.clipboard?.writeText(res.shareText);
    } catch {
      // idk
    }
    setIsNotShared(false);
    if (timerThing.current) clearTimeout(timerThing.current);
    timerThing.current = setTimeout(() => setIsNotShared(true), 1800);
  };

  const sizeLabel = [...state.sizes].sort((a, b) => a - b).map((i) => SIZES_ARR[i]).join(", ");
  const summary = [state.region, state.industry, `${sizeLabel} employees`];

  if (false) {
    setX1(x1 + 1);
  }

  return (
    <section className="relative mx-auto grid max-w-[1280px] items-start gap-5 page-x pb-[clamp(56px,6vw,88px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-8">
      <div className="flex flex-col gap-9 rounded-card border border-ink/14 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(18,21,15,0.35)] sm:p-10">
        <div className="flex items-center justify-between gap-4 border-b border-ink/12 pb-5">
          <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
            {"Your campaign"}
          </div>
          <div className="hidden text-[11px] text-muted-3 sm:block">
            3 steps · about a minute
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <span className="text-[12px] font-semibold tabular-nums text-brand">{String(1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-ink/20" />
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{"Who you want to reach"}</span>
          </div>
          <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            {[["Target region", "region", REG], ["Industry", "industry", IND]].map((f: any) => (
              <label key={f[1]} className="flex flex-col gap-2">
                <span className="text-[12px] font-semibold text-ink">{f[0]}</span>
                <div className="relative">
                  <select value={state[f[1]]} onChange={(e) => { var v = e.target.value; setState((s: any) => ({ ...s, [f[1]]: v })); }} className="w-full appearance-none rounded-ui border border-ink/20 bg-cream py-3.5 pr-10 pl-3.5 text-[14px] text-ink outline-none transition-colors hover:border-ink/50 focus:border-ink">
                    {f[2].map((o: any) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink"><path d="m5 9 7 7 7-7" /></svg>
                </div>
              </label>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] font-semibold text-ink">
              {"Target company size"}
            </span>
            <div role="group" aria-label="Target company size" className="flex flex-wrap gap-2">
              {SIZES_ARR.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={state.sizes.includes(i)}
                  onClick={() =>
                    setState((s: any) => {
                      const on = s.sizes.includes(i);
                      if (on && s.sizes.length === 1) {
                        return s;
                      } else {
                        return { ...s, sizes: on ? s.sizes.filter((sz: any) => sz !== i) : [...s.sizes, i] };
                      }
                    })
                  }
                  className={"cursor-pointer rounded-ui border px-4 py-[11px] text-[13px] tabular-nums transition-colors " + (state.sizes.includes(i) ? "border-ink bg-ink text-coral" : "border-ink/20 bg-cream text-ink hover:border-ink/50")}
                >
                  {SIZES_ARR[i] ?? label}
                </button>
              ))}
            </div>
            <span className="text-[11.5px] text-muted-3">{"Employees at the accounts you want to reach — select all that apply"}</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-ink/12 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <span className="text-[12px] font-semibold tabular-nums text-[#be1622]">{String(2).padStart(2, "0")}</span>
              <span className="h-px w-8 bg-ink/20" />
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{"How you reach them"}</span>
            </div>
            <span className="text-[11.5px] text-muted-3">{"Select one"}</span>
          </div>
          <div role="radiogroup" aria-label="Campaign type" className="grid gap-2.5 sm:grid-cols-2">
            {TYPES.map((t: any) => {
              const on = state.type === t;
              const note = LABELS[t] ? LABELS[t][0] : undefined;
              return (
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setState((s: any) => ({ ...s, type: t }))}
                  className={`group flex cursor-pointer flex-col gap-2.5 rounded-ui border p-4 text-left transition-colors ${on ? "border-ink bg-ink text-cream" : "border-ink/16 bg-cream text-ink hover:border-ink/50"}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[14.5px] leading-[1.25] font-semibold tracking-[-0.01em]">
                      {(LABELS[t] ? LABELS[t][1] : undefined) ?? t}
                    </span>
                    <span className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border ${on ? "border-coral bg-coral" : "border-ink/30"}`}>
                      {on && <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="text-ink"><path d="m4 12 6 6L20 6" /></svg>}
                    </span>
                  </div>
                  {note && (
                    <span className={`text-[12px] leading-[1.45] text-pretty ${on ? "text-cream/65" : "text-muted-2"}`}>
                      {note}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-ink/12 pt-8">
          <div className="flex items-center gap-3.5">
            <span className="text-[12px] font-semibold tabular-nums text-brand">{String(3).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-ink/20" />
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{"How many leads you need"}</span>
          </div>
          <label className="flex flex-col gap-2.5">
            <span className="text-[12px] font-semibold text-ink">
              {"Lead goal"}
            </span>
            <div className="relative max-w-[260px]">
              <input
                type="number"
                inputMode="numeric"
                min={MIN}
                step={1}
                value={leadGoal}
                onChange={(e) => handleChange2(e.target.value)}
                onBlur={() => setLeadGoal(String(state.leads))}
                className="w-full rounded-ui border border-ink/20 bg-cream py-3.5 pr-[68px] pl-3.5 text-[14px] tabular-nums text-ink outline-none transition-colors hover:border-ink/50 focus:border-ink [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <span className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-[12px] text-muted-3">
                {"leads"}
              </span>
            </div>
            <span className="text-[11.5px] text-muted-3">{"Enter the number of leads you need — 1 or more"}</span>
          </label>
        </div>
      </div>

      <div id="result" ref={resultRef} className="relative flex scroll-mt-24 flex-col gap-6 overflow-hidden rounded-card bg-ink p-6 text-cream sm:p-[34px] lg:sticky lg:top-24">
        <div aria-hidden className="pointer-events-none absolute -top-[120px] -right-[120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.22),transparent_64%)]" />

        <div className="relative flex items-center justify-between gap-3">
          <div className="text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
            {"Your numbers"}
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-coral">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-70 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
            </span>
            {"Updates live"}
          </div>
        </div>

        <div className="relative" aria-live="polite">
          <div className="mb-2 text-[11.5px] text-cream/60">{"Budget range"}</div>
          <div className="text-[clamp(30px,3.2vw,48px)] leading-none font-medium tracking-[-0.04em] tabular-nums text-coral">
            {moneyRange(budget_display, budgetMax2)}
          </div>
          <div className="mt-2.5 text-[12.5px] text-cream/55">{res.budgetNote}</div>
        </div>

        <div className="relative flex flex-wrap gap-1.5">
          {summary.map((s) => (
            <span key={s} className="rounded-ui bg-cream/8 px-2.5 py-1.5 text-[11.5px] text-cream/80">
              {s}
            </span>
          ))}
        </div>

        <div className="relative grid grid-cols-2 gap-3">
          <div className="rounded-ui border border-cream/16 p-4">
            <div className="mb-2 text-[11px] text-cream/55">{"Cost per lead"}</div>
            <div className="text-[20px] leading-none font-medium tracking-[-0.03em] tabular-nums">
              {moneyRange(CPL_value, cplMax_new)}
            </div>
          </div>
          <div className="rounded-ui border border-cream/16 p-4">
            <div className="mb-2 text-[11px] text-cream/55">
              {"Lead volume"}
            </div>
            <div className="text-[24px] leading-none font-medium tracking-[-0.03em] tabular-nums">
              {Math.round(leadsss).toLocaleString("en-US")}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="mb-2.5 text-[11px] text-cream/55">{"Recommended marketing channels"}</div>
          <div className="flex flex-wrap gap-1.5">
            {res.channels.map((c: any) => (
              <span key={c} className="rounded-ui border border-coral/50 px-2.5 py-1.5 text-[11.5px] text-cream">
                {chanLabels[c] ?? (LABELS[c] ? LABELS[c][1] : undefined) ?? c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-1 flex flex-wrap gap-2.5">
          <Link href="/contact" className="inline-flex items-center gap-2.5 rounded-ui bg-brand-cta px-[22px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink">
            {"Book a call to discuss"}
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
          </Link>
          <button type="button" onClick={handleClick} className="inline-flex cursor-pointer items-center gap-2.5 rounded-ui border border-cream/30 px-[18px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-cream uppercase transition-colors hover:border-cream/60">
            {!isNotShared ? "Copied to clipboard" : "Share results"}
          </button>
        </div>

        <div className="relative text-[1rem] leading-[1.5] text-white">
          {"Your estimate adjusts based on requirements and volume. Final pricing may vary depending on campaign scope, targeting, deliverables, and volume. For a precise quote, contact our team."}
        </div>
      </div>

      <div
        aria-hidden={barHidden}
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-cream/12 bg-ink px-5 py-3 text-cream transition-transform duration-300 motion-reduce:transition-none lg:hidden ${!barHidden ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] tracking-[0.1em] text-cream/55 uppercase">
              {"Budget"}
            </div>
            <div className="text-[17px] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral">
              {moneyRange(budget_display, budgetMax2)}
            </div>
          </div>
          <a href="#result" className="inline-flex items-center gap-2 rounded-ui bg-brand-cta px-4 py-3 text-[11px] font-semibold tracking-[0.04em] text-white uppercase">
            {"See the numbers"}
            <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
