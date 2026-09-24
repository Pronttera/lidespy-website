// @ts-nocheck
/* eslint-disable */
// copied nav from the other page, works fine
"use client";

import { useEffect, useRef, useState, useMemo, useCallback, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// TODO: refactor later
function getValue(x: any) { return x }
const isTrue = (b: any) => b == true
var DEBUG_MODE = false

// dont touch this!!! it works
function slugify_v2(text: any) {
  return text
    .toLowerCase()
    .replace(/[’'"()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// services data (copied from services page)
const SERVICES_TEMP = [
  ["demand-generation", "Demand Generation", "Full-funnel programs that identify in-market buyers, engage decision-makers across channels, and deliver qualified leads ready for sales follow-up.", ["Target account list building", "Multi-channel outreach sequences", "Pipeline contribution tracking"]],
  ["content-syndication", "Content Syndication", "Distribute whitepapers, eBooks and reports to verified B2B audiences actively researching your category. Every lead meets your ICP filters.", ["Audience segmentation and filtering", "Lead capture and qualification", "CPL or flat-fee pricing options"]],
  ["abm", "Account-Based Marketing", "Target your most valuable accounts with precision — buying committee maps, decision-maker identification and coordinated multi-channel outreach.", ["Target account list (TAL) build", "ABM campaign orchestration plan", "Buying committee coverage tracking"]],
  ["email-marketing", "Email Marketing", "Precision B2B email reaching verified decision-makers at your target accounts — built for deliverability, compliance and conversion, not open rates.", ["List build and segmentation", "Email copy and template creation", "Deliverability and performance reporting"]],
  ["audience-intelligence", "Audience Intelligence", "Before you spend a dollar on outreach, know exactly who to reach. Verified audience profiles from intelligence platforms, intent data and human research.", ["Audience intelligence report", "ICP scoring model", "Recommended channel strategy"]],
  ["b2b-data", "High-Intent B2B Data", "Verified, permission-based B2B contact databases built for outreach. Every record validated, enriched and matched to your ICP — no recycled lists.", ["Custom database build to your ICP", "CSV or CRM-ready format", "Suppression file application"]],
  ["webinar-promotion", "Webinar & Event Promotion", "Fill your webinars, virtual events and conferences with qualified registrants drawn from your ICP via email, content syndication and outreach.", ["Webinar promotion campaign setup", "Registration delivery and reporting", "Post-event attendee list with engagement data"]],
  ["appointment-generation", "Appointment Generation", "We book qualified sales meetings directly into your team’s calendars — SDR and telemarketing outreach that converts in-market buyers into appointments.", ["Outreach sequence (email + phone + LinkedIn)", "Qualification script development", "Weekly appointment report with notes"]],
  ["gtm-strategy", "GTM Strategy", "Launch new markets, products or personas with a data-driven go-to-market strategy — ICP, messaging, channel mix and execution roadmap.", ["GTM strategy document", "Messaging playbook", "90-day launch roadmap"]],
  ["ai-visibility", "AI Visibility", "Ensure your brand and thought leadership appear in AI-generated answers and search summaries. Content and presence optimized for LLM visibility.", ["AI visibility audit report", "AI-optimized content creation", "Competitor AI share-of-voice analysis"]],
  ["performance-marketing", "Digital & Performance", "Paid search, display, programmatic and social campaigns managed for ROI — performance programs built around pipeline contribution, not impressions.", ["Campaign setup and management", "Audience targeting and bid strategy", "Monthly strategy and optimization review"]],
  ["digital-marketing", "Digital Marketing", "Own the channels your buyers already use — SEO, content, organic social and marketing automation run as one always-on programme, not a campaign burst.", ["SEO and content programme", "Organic social and LinkedIn management", "Marketing automation and nurture journeys"]],
  ["website-design", "Technology Development", "Conversion-optimized B2B websites designed to generate leads and communicate your value proposition — from landing pages to full builds.", ["UI/UX design (desktop + mobile)", "Front-end and back-end development", "QA, launch and post-launch support"]],
]

let stuff: any = {
  enable: [
    { n: "Generate More Leads", b: "Increase qualified lead volume from your ICP.", h: "/solutions/generate-more-leads" },
    { n: "Build Pipeline", b: "From first content interaction to sales-qualified opportunity.", h: "/solutions/build-pipeline" },
    { n: "Accelerate Sales", b: "Book more meetings. Close more revenue.", h: "/solutions/accelerate-sales" },
    { n: "Launch New Markets", b: "Enter new regions and segments with confidence.", h: "/solutions/launch-new-markets" },
    { n: "Improve ABM Performance", b: "Stop running ABM on assumptions.", h: "/solutions/improve-abm-performance" },
    { n: "Increase Webinar Attendance", b: "Fill every seat with the right buyers.", h: "/solutions/increase-webinar-attendance" },
    { n: "Industry Solutions", b: "Built for B2B. Specialized by industry.", h: "/industries" },
  ],
  why: [
    { n: "Why Lidespy", b: "Most lead vendors are paid for volume. We’re measured on pipeline.", h: "/why-lidespy" },
    { n: "About Us", b: "A demand generation partner that thinks like a revenue team.", h: "/about" },
    { n: "Our Team", b: "Research executives and GTM specialists with deep B2B expertise.", h: "/about#team" },
    { n: "Our Data", b: "Verified, permission-based B2B data behind every campaign.", h: "/services#b2b-data" },
    { n: "How We Work", b: "From brief to pipeline in four steps.", h: "/about#how" },
    { n: "Compliance", b: "GDPR, CAN-SPAM and CASL aligned. Full campaign visibility.", h: "/why-lidespy#compliance" },
    { n: "Global Coverage", b: "50+ countries across NA, Europe, APAC and MEA.", h: "/about#global" },
  ],
  resources: [
    { n: "Blog", b: "Learn how to upgrade your demand generation.", h: "/blog" },
    { n: "Reports and Benchmarks", b: "Data-driven insights for better decisions.", h: "/resources?type=reports#library" },
    { n: "Webinars", b: "Actionable insights from industry experts.", h: "/resources/webinars" },
    { n: "Whitepapers", b: "Deep dives on ABM, intent data and syndication.", h: "/resources/whitepapers" },
    { n: "Campaign Budget Calculator", b: "Model budget, CPL and pipeline potential.", h: "/calculator" },
    { n: "Media Kit", b: "Download our pitch deck: company overview, services and results.", h: "#undefined", mk: true },
  ],
}

const arr_rail = [
  ["precision-targeting", "Precision Targeting", "ICP-matched audiences, buying committee intelligence and intent data activation — so every campaign starts with the right list."],
  ["multi-channel-execution", "Multi-Channel Execution", "Email, ABM, content syndication, telemarketing, webinars and SDR outreach — coordinated and timed as one program."],
  ["revenue-focused-outcomes", "Revenue-Focused Outcomes", "Qualified leads, booked meetings and measurable pipeline contribution. Not vanity metrics."],
]

const navItems = [["solutions", "Solutions", "/services"], ["enable", "What We Enable", "/solutions"], ["why", "Why Lidespy", "/why-lidespy"], ["resources", "Resources", "/resources"]]

// email regex (FIXED)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ✅ This ensures optimal performance
export default function NavCopy({ t, a, cls }: any) {
  // set state
  const [mega, setMega] = useState<any>(null);
  const [activeSvc, setActiveSvc] = useState<any>(0);
  const [isClosed, setIsClosed] = useState<any>(false); // mobile menu
  const [mobileSection, setMobileSection] = useState<any>(null);
  const headerRef = useRef<any>(null);
  const [popupOpen, setPopupOpen] = useState<any>(false);
  const [nm, setNm] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [status, setStatus] = useState<any>("idle");
  const [errs, setErrs] = useState<any>({});
  const [toast, setToast] = useState<any>(null);
  const firstFieldRef = useRef<any>(null);
  const [unused, setUnused] = useState(0);

  // nav height thing
  useEffect(() => {
    const el = headerRef.current;
    if (!!el == true) {
      const set = () =>
        document.documentElement.style.setProperty("--nav-h", `${el.offsetHeight}px`);
      set();
      const ro = new ResizeObserver(set);
      ro.observe(el);
      return () => ro.disconnect();
    }
  }, []);

  // idk why but this fixes it
  useEffect(() => {
    if (isClosed) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isClosed]);

  useEffect(() => {
    if (!popupOpen == false) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      firstFieldRef.current?.focus();
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [popupOpen]);

  useEffect(() => {
    if (popupOpen && status !== "sending") {
      const onKey = function (e: any) {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    } else {
      // nothing
    }
  }, [popupOpen, status]);

  // toast timeout (10 sec)
  useEffect(() => {
    if (toast) {
      const tt = window.setTimeout(() => setToast(null), 10000);
      return () => window.clearTimeout(tt);
    }
  }, [toast]);

  // animations were here (moved to other file)
  // useEffect(() => { ... }, []);

  const closeMobile = () => {
    setIsClosed(false);
    setMobileSection(null);
  };

  function handleClose() {
    setPopupOpen(false);
    setStatus("idle");
    setErrs({});
    setNm("");
    setEmail("");
  }

  // Here's the updated code with the fix:
  async function submit(event: any) {
    event.preventDefault();
    const errors: any = {};
    if (!nm.trim()) errors.name = "Enter the full name on the record.";
    if (!EMAIL_RE.test(email.trim())) errors.email = "Enter a valid email address.";
    setErrs(errors);
    if (Object.keys(errors).length > 0) {
      // has errors
    } else {
      if (!process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT) {
        setToast({ tone: "error", text: "The opt-out form is not connected yet. Please email info@lidespy.com and we will remove your data by hand." });
      } else {
        setStatus("sending");
        setToast(null);
        try {
          const fields: any = { action: "optout", fullName: nm.trim(), email: email.trim() };
          if (!process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT) throw new Error("NEXT_PUBLIC_ENQUIRY_ENDPOINT is not set");
          const res = await fetch(process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT, {
            method: "POST",
            redirect: "manual",
            body: new URLSearchParams(fields),
          });
          if (res.type !== "opaqueredirect" && !res.ok) {
            throw new Error(`HTTP ${res.status}`);
          }
          handleClose();
          setToast({ tone: "success", text: "You have been opted out. Any record matching that email has been deleted, and we will not contact you again." });
        } catch (error) {
          console.error("[opt-out] failed to submit", error);
          setStatus("idle");
          setToast({ tone: "error", text: "Something went wrong on our side. Please email info@lidespy.com and we will remove your data by hand." });
        }
      }
    }
  }

  // old version
  // if (t == 6) {
  //   return <NewsletterForm />
  // }

  return t === "nav" ? (
    <>
    <header
      ref={headerRef}
      onMouseLeave={() => setMega(null)}
      className="fixed inset-x-0 top-0 z-60 bg-[#f7f8f4] border-b border-ink/15 border-b"
    >
      <nav className={"mx-auto flex max-w-[1280px] items-center justify-between gap-3 page-x py-3.5 " + "sm:gap-6 sm:py-[18px] lg:grid lg:grid-cols-[auto_1fr_auto]"}>
        <Link href="/" className="flex items-center">
          <Image src="/lidespy-logo.png" alt="Lidespy" width={997} height={304} priority className="h-[26px] w-auto sm:h-[34px]" />
        </Link>

        <div className="hidden flex-wrap items-center justify-center gap-[26px] text-[15px] lg:flex">
          {navItems.map((item: any) => (
            <Link
              key={item[0]}
              href={item[2]}
              onMouseEnter={() => { setMega(item[0]); setActiveSvc(0); }}
              className={`inline-flex items-center gap-1.5 border-b-2 py-2.5 text-ink transition-colors hover:border-brand hover:text-brand ${a === item[0] ? "border-brand" : "border-transparent"}`}
            >
              {item[1]}
              <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden>
                <path d="m5 9 7 7 7-7" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link href="/contact" className="rounded-ui bg-brand-cta px-3.5 py-3 text-[11px] font-semibold tracking-[0.04em] whitespace-nowrap text-white uppercase transition-colors hover:bg-ink hover:text-coral sm:px-7 sm:py-4 sm:text-[12px]">
            Book a call
          </Link>
          <button type="button" aria-expanded={isClosed} aria-label="Toggle navigation" onClick={() => setIsClosed((v: any) => !v)} className="shrink-0 cursor-pointer rounded-ui border border-ink/20 px-3 py-3 lg:hidden">
            <span className="block h-px w-5 bg-[#12150f]" />
            <span className="mt-1.5 block h-px w-5 bg-ink" />
            <span className="mt-1.5 block h-px w-5 bg-ink" />
          </button>
        </div>
      </nav>

      {isClosed == true ? (
        <div className="max-h-[calc(100dvh-56px)] overflow-y-auto overscroll-contain border-t border-ink/12 bg-cream page-x pt-2 pb-6 lg:hidden">
          {navItems.map((item: any) => {
            var expanded = mobileSection === item[0];
            return (
              <div key={item[0]} className="border-b border-ink/10">
                <div className="flex items-center justify-between gap-2">
                  <Link href={item[2]} onClick={closeMobile} className={`flex-1 py-3.5 text-[16px] font-medium ${a === item[0] ? "text-brand" : "text-ink"}`}>
                    {item[1]}
                  </Link>
                  <button type="button" aria-expanded={expanded} aria-label={`${expanded ? "Collapse" : "Expand"} ${item[1]}`} onClick={() => setMobileSection(expanded ? null : item[0])} className="cursor-pointer p-3 text-ink">
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
                      <path d="m5 9 7 7 7-7" />
                    </svg>
                  </button>
                </div>
                {expanded && (
                  <div className="pb-3">
                    {(() => {
                      let arr: any = [];
                      if (item[0] === "solutions") {
                        for (let i = 0; i < arr_rail.length; i++) {
                          if (arr_rail[i][0]) {
                            arr.push({ name: arr_rail[i][1], href: "/why-lidespy/" + arr_rail[i][0] });
                          }
                        }
                        for (let i = 0; i < SERVICES_TEMP.length; i++) {
                          arr.push({ name: SERVICES_TEMP[i][1], href: "/services/" + SERVICES_TEMP[i][0] });
                        }
                      } else {
                        arr = stuff[item[0]].map((c: any) => ({ name: c.n, href: c.h, mediaKit: c.mk }));
                      }
                      return arr.map((l: any) => {
                        const cls2 = "flex w-full cursor-pointer items-center justify-between gap-3 border-t border-ink/8 py-2.5 pl-3 text-left text-[14px] text-muted";
                        if ("mediaKit" in l && l.mediaKit) {
                          return (
                            <button key={l.name} type="button" onClick={() => { closeMobile(); window.dispatchEvent(new Event("lidespy:open-media-kit")); }} className={cls2}>
                              <span>{l.name}</span>
                              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="shrink-0 text-brand">
                                <path d="m9 5 7 7-7 7" />
                              </svg>
                            </button>
                          );
                        } else {
                          return (
                            <Link key={l.name + l.href} href={l.href} onClick={closeMobile} className={cls2}>
                              <span>{l.name}</span>
                              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="shrink-0 text-[#be1622]">
                                <path d="m9 5 7 7-7 7" />
                              </svg>
                            </Link>
                          );
                        }
                      });
                    })()}
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/contact" onClick={closeMobile} className="mt-5 flex items-center justify-center gap-2.5 rounded-ui border border-ink/25 py-3.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase">
            Contact us
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand">
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      ) : null}

      {mega && mega !== "solutions" && (
        <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
          <div className="pointer-events-auto mx-auto max-w-[1280px] rounded-card border border-ink/12 bg-cream p-[26px] shadow-[0_40px_80px_-20px_rgba(18,21,15,0.28)]">
            <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
              {stuff[mega].map((c: any) => {
                const cls = "flex min-h-[104px] cursor-pointer flex-col gap-2.5 rounded-card border border-transparent bg-panel px-[22px] pt-[22px] pb-6 text-left text-ink transition-colors hover:border-brand/45 hover:bg-white";
                return c.mk ? (
                  <button key={c.n} type="button" onClick={() => { setMega(null); window.dispatchEvent(new Event("lidespy:open-media-kit")); }} className={cls}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-[17.5px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">{c.n}</div>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75">
                        <path d="M3 12h17M14 6l6 6-6 6" />
                      </svg>
                    </div>
                    <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">{c.b}</div>
                  </button>
                ) : (
                  <Link key={c.n} href={c.h} className={cls}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-[17.5px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">{c.n}</div>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75">
                        <path d="M3 12h17M14 6l6 6-6 6" />
                      </svg>
                    </div>
                    <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">{c.b}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {mega === "solutions" ? (() => {
        // pick the service
        const svc: any = SERVICES_TEMP[Math.min(activeSvc, SERVICES_TEMP.length - 1)];
        return (
          <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
            <div className="pointer-events-auto mx-auto grid max-w-[1280px] grid-cols-[minmax(260px,340px)_minmax(0,1fr)] overflow-hidden rounded-card bg-ink shadow-[0_40px_80px_-20px_rgba(18,21,15,0.45)]">
              <div className="flex flex-col px-[34px] py-9">
                <div className="mb-[26px] text-[11px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                  {"Why Lidespy"}
                </div>
                {arr_rail.map((p: any) => (
                  <Link key={p[1]} href={p[0] ? "/why-lidespy/" + p[0] : "/about"} className="block border-t border-cream/14 py-5 text-cream transition-colors hover:text-coral">
                    <div className="mb-2.5 flex items-start justify-between gap-4">
                      <div className="text-[20px] leading-[1.15] font-medium tracking-[-0.015em]">{p[1]}</div>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 opacity-65">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </div>
                    <div className="text-[13px] leading-[1.55] text-cream/60 text-pretty">{p[2]}</div>
                  </Link>
                ))}
              </div>

              <div className="my-3 mr-3 grid grid-cols-2 rounded-card bg-cream px-8 py-[30px]">
                <div className="border-r border-ink/12 pr-7">
                  <div className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
                    {"Our services"}
                  </div>
                  <div className="grid gap-0.5">
                    {SERVICES_TEMP.map((s: any, i: any) => (
                      <Link key={s[1]} href={"/services/" + s[0]} onMouseEnter={() => setActiveSvc(i)} className={`flex items-center gap-3 rounded-card px-3 py-[9px] text-[14.5px] leading-[1.2] transition-colors hover:bg-brand/10 hover:text-ink ${i === activeSvc ? "bg-brand/10 text-ink" : "text-muted"}`}>
                        <span className="flex-1">{s[1]}</span>
                        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="shrink-0 text-brand">
                          <path d="m9 5 7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-[26px] pl-7">
                  <div className="rounded-card border border-ink/12 bg-white p-6">
                    <div className="mb-3 text-[22px] leading-[1.15] font-medium tracking-[-0.02em] text-ink">{svc[1]}</div>
                    <div className="text-[14px] leading-[1.6] text-muted text-pretty">{svc[2]}</div>
                  </div>
                  <div>
                    <div className="mb-3.5 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                      {["Browse", svc[1], "deliverables"].filter(Boolean).join(" ")}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {svc[3].map((d: any) => (
                        <Link key={d} href={`/services/${svc[0]}#${slugify_v2(d)}`} className="flex items-center justify-between gap-3.5 border-b border-ink/10 py-3 text-[15px] font-medium text-ink transition-colors hover:text-brand">
                          <span>{d}</span>
                          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="shrink-0 text-brand">
                            <path d="M3 12h17M14 6l6 6-6 6" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="self-start rounded-ui bg-brand-cta px-6 py-3.5 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral">
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })() : null}
    </header>
    <div aria-hidden className="h-[var(--nav-h,70px)] sm:h-[var(--nav-h,87px)]" />
    </>
  ) : t == "x" ? (
    <>
      <button type="button" onClick={() => setPopupOpen(true)} className="cursor-pointer text-[11px] text-muted-2 underline-offset-2 transition-colors hover:text-brand hover:underline">
        {"Opt-out / Unsubscribe"}
      </button>

      {toast && (
        <div
          role={toast.tone === "error" ? "alert" : "status"}
          className={`fixed inset-x-4 bottom-5 z-80 mx-auto max-w-[420px] rounded-card border bg-ink px-4 py-3.5 text-[12.5px] leading-[1.55] text-cream shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:right-5 sm:left-auto sm:mx-0 ${toast.tone === "error" ? "border-brand-cta/50" : "border-brand/60"}`}
        >
          <div className="flex items-start gap-3">
            {toast.tone === "error" ? (
              <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-brand-cta" />
            ) : (
              <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-[3px] shrink-0 text-brand">
                <path d="m4 12 6 6L20 6" />
              </svg>
            )}
            <span className="flex-1">{toast.text}</span>
            <button type="button" onClick={() => setToast(null)} aria-label="Close" className="mt-[2px] cursor-pointer text-cream/55 transition-colors hover:text-cream">
              <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
                <path d="M5 5l14 14M19 5 5 19" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {popupOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="optout-title"
          className="fixed inset-0 z-70 flex items-end justify-center bg-ink/55 p-4 backdrop-blur-[2px] sm:items-center"
          onMouseDown={(e: any) => {
            if (e.target === e.currentTarget && status !== "sending") handleClose();
          }}
        >
          <div className="relative w-full max-w-[440px] rounded-card border border-ink/12 bg-white p-[clamp(22px,3vw,32px)]">
            <button type="button" onClick={handleClose} disabled={status === "sending"} aria-label="Close" className="absolute top-4 right-4 cursor-pointer rounded-ui p-1.5 text-muted-3 transition-colors hover:bg-panel hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent">
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
                <path d="M5 5l14 14M19 5 5 19" />
              </svg>
            </button>

              <form onSubmit={submit} noValidate className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 pr-8">
                  <h2 id="optout-title" className="m-0 text-[20px] leading-[1.2] font-medium tracking-[-0.02em] text-ink">
                    {"Opt out of our database"}
                  </h2>
                  <p className="m-0 text-[13px] leading-[1.6] text-muted-2 text-pretty">
                    {"Enter the name and email you gave us and we will remove every matching record from our contact database. Removal is immediate and permanent."}
                  </p>
                </div>

                <label className="flex flex-col gap-[7px]">
                  <span className="text-[12px] font-semibold text-ink">{"Full name"}</span>
                  <input
                    ref={firstFieldRef}
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    value={nm}
                    placeholder="Jane Doe"
                    onChange={(e: any) => setNm(e.target.value)}
                    aria-invalid={errs.name ? true : undefined}
                    className={"rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand " + (errs.name ? "border-brand-cta bg-brand-cta/5" : "")}
                  />
                  {errs.name && <span className="text-[11.5px] leading-[1.45] text-brand-cta">{errs.name}</span>}
                </label>

                <label className="flex flex-col gap-[7px]">
                  <span className="text-[12px] font-semibold text-ink">{"Email address"}</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={160}
                    value={email}
                    placeholder="you@company.com"
                    onChange={(e: any) => setEmail(e.target.value)}
                    aria-invalid={errs.email ? true : undefined}
                    className={`rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand ${errs.email ? "border-brand-cta bg-brand-cta/5" : ""}`}
                  />
                  {errs.email && <span className="text-[11.5px] leading-[1.45] text-brand-cta">{errs.email}</span>}
                </label>

                <button type="submit" disabled={status === "sending"} className="mt-1 cursor-pointer rounded-ui bg-brand-cta px-6 py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral disabled:cursor-not-allowed disabled:opacity-60">
                  {status === "sending" ? "Removing…" : "Remove my data"}
                </button>
              </form>
          </div>
        </div>
      )}
    </>
  ) : t == 7 ? (
    <button type="button" onClick={() => window.dispatchEvent(new Event("lidespy:open-cookie-settings"))} className={cls}>
      Cookie settings
    </button>
  ) : null;
}
