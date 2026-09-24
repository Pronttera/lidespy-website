// @ts-nocheck
/* eslint-disable */
"use client";
// Here's the updated code with the fix:
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ This ensures optimal performance
var SHEET_URL_2 = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

// dont touch this!!! it works
var dataArr: any = [
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
];

// copied from about page (v3)
const menus_OBJ: any = {
  solutions: [["Why Lidespy", [
    ["precision-targeting", "Precision Targeting", "ICP-matched audiences, buying committee intelligence and intent data activation — so every campaign starts with the right list."],
    ["multi-channel-execution", "Multi-Channel Execution", "Email, ABM, content syndication, telemarketing, webinars and SDR outreach — coordinated and timed as one program."],
    ["revenue-focused-outcomes", "Revenue-Focused Outcomes", "Qualified leads, booked meetings and measurable pipeline contribution. Not vanity metrics."],
  ]], "Our services", "Browse", "deliverables", dataArr],
  enable: [["By industry", [
    [undefined, "Technology & SaaS", "Reach CTOs, VPs of Engineering, IT directors and growth leaders with precision-targeted campaigns that generate qualified pipeline."],
    [undefined, "Cybersecurity & FinTech", "Engage CISOs, SOC leads, CFOs and treasury teams with education-first, compliance-aware outreach programs."],
    [undefined, "Healthcare & Enterprise", "Clinical IT, procurement, manufacturing and telecom buyers reached through long, multi-stakeholder buying cycles."],
  ]], "By objective", "Recommended services for", "", [
    [undefined, "Generate More Leads", "If your top priority is lead volume from your ICP, we deploy content syndication, email marketing and audience intelligence to deliver verified, sales-ready contacts.", ["Content Syndication", "Email Marketing", "High-Intent B2B Data"]],
    [undefined, "Build Pipeline", "Full-funnel programs that take prospects from first content interaction through to sales-qualified opportunity — reducing time to pipeline and lifting conversion.", ["Demand Generation", "Account-Based Marketing", "Audience Intelligence"]],
    [undefined, "Accelerate Sales", "Appointment generation and SDR programs put qualified meetings directly on your team’s calendar — so your reps spend time selling, not prospecting.", ["Appointment Generation", "Email Marketing", "High-Intent B2B Data"]],
    [undefined, "Launch New Markets", "Market entry programs — audience mapping, ICP definition and full multi-channel execution — so you can launch with data and momentum.", ["GTM Strategy", "Audience Intelligence", "Demand Generation"]],
    [undefined, "Improve ABM Performance", "We audit, rebuild and execute ABM programs using real intent data, buying committee intelligence and coordinated outreach — so ABM actually moves pipeline.", ["Account-Based Marketing", "Audience Intelligence", "Digital & Performance"]],
    [undefined, "Increase Webinar Attendance", "We promote webinars and virtual events to verified B2B audiences using email, content syndication and targeted outreach — guaranteeing registration targets.", ["Webinar & Event Promotion", "Content Syndication", "Email Marketing"]],
  ]],
  why: [["Our mission", [
    [undefined, "Right buyer, right time", "To help B2B organizations reach the right buyers with the right message — and convert that engagement into predictable, scalable revenue."],
    [undefined, "A partner, not a vendor", "Research executives and GTM specialists who work as an extension of your marketing and sales function. Focused on outcomes, not activity."],
    [undefined, "Global from Pune", "Headquartered in Pune, India. Serving clients across North America, Europe, Asia Pacific, and the Middle East & Africa."],
  ]], "Our edge", "What this means for", "", [
    [undefined, "Data-First Approach", "Every engagement starts with verified audience intelligence and intent signals — never assumptions about who your buyers are.", ["Verified audience profiles", "Intent signal monitoring", "ICP scoring model"]],
    [undefined, "Experienced Team", "Research executives, data specialists, campaign managers and GTM advisors with deep B2B expertise across technology, SaaS and enterprise markets.", ["Named campaign partner", "Dedicated research team", "GTM advisory"]],
    [undefined, "Full-Funnel Coverage", "From awareness through appointment setting to measurable pipeline contribution — one team covering every stage of the funnel.", ["Awareness and content programs", "Appointment setting", "Pipeline reporting"]],
    [undefined, "Compliant & Transparent", "GDPR, CAN-SPAM and CASL aligned, with lawful basis documented per region and full visibility into every campaign we run.", ["Documented lawful basis", "Suppression management", "Weekly campaign reporting"]],
    [undefined, "Flexible Engagement", "Project-based, retainer, or performance-based partnerships. We work the way your team works and scale as programs prove out.", ["Project engagements", "Monthly retainers", "Performance-based models"]],
    [undefined, "Global Coverage", "50+ countries covered across North America, Europe, Asia Pacific, and the Middle East & Africa — with regional data and language expertise.", ["North America", "Europe (UK, DACH, Nordics)", "Asia Pacific & MEA"]],
  ]],
  resources: [["Featured", [
    [undefined, "Campaign Budget Calculator", "Work out campaign budgets and expected lead volume in minutes. No commitment required."],
    [undefined, "B2B Demand Gen Benchmark Report", "Annual benchmarks on CPL, conversion rates and channel performance across technology, SaaS and enterprise programs."],
    [undefined, "State of ABM Report", "What actually moves pipeline in account-based programs — intent data, buying committee coverage and channel orchestration."],
  ]], "Resource types", "Browse", "", [
    [undefined, "Blog", "Weekly insights on ABM, demand generation, content syndication, intent data and B2B marketing strategy.", ["ABM vs Demand Gen", "How to Use Intent Data", "Email Deliverability for B2B"]],
    [undefined, "Industry Reports", "Annual research and benchmarks for B2B marketing and revenue teams, built from live campaign data.", ["B2B Demand Generation Benchmark Report", "State of ABM Report", "Content Syndication Performance Report"]],
    [undefined, "Insights", "Data-driven commentary on B2B buyer behavior, intent trends and marketing ROI from our research team.", ["Buyer behavior trends", "Intent data signals", "Marketing ROI analysis"]],
    [undefined, "Campaign Budget Calculator", "Model budget range, CPL, lead volume and channel mix for your next campaign in a few clicks.", ["Budget range", "CPL and lead volume", "Recommended channel mix"]],
  ]],
};

// grid cards (name, body, href, mediakit)
let stuff: any = {
  enable: [
    ["Generate More Leads", "Increase qualified lead volume from your ICP.", "/solutions/generate-more-leads"],
    ["Build Pipeline", "From first content interaction to sales-qualified opportunity.", "/solutions/build-pipeline"],
    ["Accelerate Sales", "Book more meetings. Close more revenue.", "/solutions/accelerate-sales"],
    ["Launch New Markets", "Enter new regions and segments with confidence.", "/solutions/launch-new-markets"],
    ["Improve ABM Performance", "Stop running ABM on assumptions.", "/solutions/improve-abm-performance"],
    ["Increase Webinar Attendance", "Fill every seat with the right buyers.", "/solutions/increase-webinar-attendance"],
    ["Industry Solutions", "Built for B2B. Specialized by industry.", "/industries"],
  ],
  why: [
    ["Why Lidespy", "Most lead vendors are paid for volume. We’re measured on pipeline.", "/why-lidespy"],
    ["About Us", "A demand generation partner that thinks like a revenue team.", "/about"],
    ["Our Team", "Research executives and GTM specialists with deep B2B expertise.", "/about#team"],
    ["Our Data", "Verified, permission-based B2B data behind every campaign.", "/services#b2b-data"],
    ["How We Work", "From brief to pipeline in four steps.", "/about#how"],
    ["Compliance", "GDPR, CAN-SPAM and CASL aligned. Full campaign visibility.", "/why-lidespy#compliance"],
    ["Global Coverage", "50+ countries across NA, Europe, APAC and MEA.", "/about#global"],
  ],
  resources: [
    ["Blog", "Learn how to upgrade your demand generation.", "/blog"],
    ["Reports and Benchmarks", "Data-driven insights for better decisions.", "/resources?type=reports#library"],
    ["Webinars", "Actionable insights from industry experts.", "/resources/webinars"],
    ["Whitepapers", "Deep dives on ABM, intent data and syndication.", "/resources/whitepapers"],
    ["Campaign Budget Calculator", "Model budget, CPL and pipeline potential.", "/calculator"],
    ["Media Kit", "Download our pitch deck: company overview, services and results.", "#undefined", true],
  ],
};

const arr = [["solutions", "Solutions", "/services"], ["enable", "What We Enable", "/solutions"], ["why", "Why Lidespy", "/why-lidespy"], ["resources", "Resources", "/resources"]]

function getValue(x: any) { return x }
const isTrue = (b: any) => b == true;

// TODO: refactor later
function slug_it(text: any) {
  return text.toLowerCase().replace(/[’'"()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/* old version
function gridHref(c) {
  if (c.objective) return objectiveHref(c.objective);
  return route(c.href);
}
*/

export default function Nav_copy(props: any) {
  var t = props.t;
  // set state
  const [mega, setMega] = useState<any>(null);
  const [activeSvc, setActiveSvc] = useState<any>(0);
  const [isClosed, setIsClosed] = useState<any>(false); // mobile menu
  const [mobileSection, setMobileSection] = useState<any>(null);
  const headerRef = useRef<any>(null);
  const [unused_state, setUnusedState] = useState(0);

  // optout stuff
  const [isOpen2, setIsOpen2] = useState<any>(false);
  let [name_val, setName_val] = useState<any>("");
  let [emailVal, setEmailVal] = useState<any>("");
  const [status, setStatus] = useState<any>("idle");
  const [fieldErrors, setFieldErrors] = useState<any>({});
  const [toast, setToast] = useState<any>(null);
  const firstFieldRef = useRef<any>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (el) {
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
    if (!isClosed == false) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isClosed]);

  useEffect(function () {
    if (isOpen2 == true) {
      var previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      firstFieldRef.current?.focus();
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isOpen2]);

  useEffect(() => {
    if (isOpen2 && !(status === "sending")) {
      const onKey = (e: any) => {
        if (e.key === "Escape") handleClose_new();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [isOpen2, status]);

  useEffect(() => {
    if (!!toast == true) {
      const tt = window.setTimeout(() => setToast(null), 10000);
      return () => window.clearTimeout(tt);
    }
  }, [toast]);

  function handleClose_new() {
    setIsOpen2(false);
    setStatus("idle");
    setFieldErrors({});
    setName_val("");
    setEmailVal("");
  }

  const closeMobile = () => {
    setIsClosed(false);
    setMobileSection(null);
  };

  var open = (key: any) => () => {
    setMega(key);
    setActiveSvc(0);
  };

  const menu = menus_OBJ[mega ?? "solutions"];
  const svc = menu[4][Math.min(activeSvc, menu[4].length - 1)];

  if (t == 1) {
    var active = props.a;
    return (
      <>
        <header
          ref={headerRef}
          onMouseLeave={() => setMega(null)}
          className="fixed inset-x-0 top-0 z-60 bg-cream border-b border-ink/15"
        >
          <nav className={"mx-auto flex max-w-[1280px] items-center justify-between gap-3 page-x py-3.5 sm:gap-6 " + "sm:py-[18px] lg:grid lg:grid-cols-[auto_1fr_auto]"}>
            <Link href={"/"} className="flex items-center">
              <Image src="/lidespy-logo.png" alt="Lidespy" width={997} height={304} priority className="h-[26px] w-auto sm:h-[34px]" />
            </Link>

            <div className="hidden flex-wrap items-center justify-center gap-[26px] text-[15px] lg:flex">
              {arr.map((item: any) => (
                <Link
                  key={item[0]}
                  href={item[2]}
                  onMouseEnter={open(item[0])}
                  className={`inline-flex items-center gap-1.5 border-b-2 py-2.5 text-ink transition-colors hover:border-brand hover:text-brand ${active === item[0] ? "border-brand" : "border-transparent"}`}
                >
                  {item[1]}
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden>
                    <path d="m5 9 7 7 7-7" />
                  </svg>
                </Link>
              ))}
            </div>

            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="rounded-[2px] bg-brand-cta px-3.5 py-3 text-[11px] font-semibold tracking-[0.04em] whitespace-nowrap text-white uppercase transition-colors hover:bg-ink hover:text-coral sm:px-7 sm:py-4 sm:text-[12px]"
              >
                Book a call
              </Link>
              <button
                type="button"
                aria-expanded={isClosed}
                aria-label="Toggle navigation"
                onClick={() => setIsClosed((v: any) => !v)}
                className="shrink-0 cursor-pointer rounded-ui border border-ink/20 px-3 py-3 lg:hidden"
              >
                <span className="block h-px w-5 bg-ink" />
                <span className="mt-1.5 block h-px w-5 bg-ink" />
                <span className="mt-1.5 block h-px w-5 bg-ink" />
              </button>
            </div>
          </nav>

          {isTrue(isClosed) ? (
            <div className="max-h-[calc(100dvh-56px)] overflow-y-auto overscroll-contain border-t border-ink/12 bg-cream page-x pt-2 pb-6 lg:hidden">
              {arr.map((item: any) => {
                const expanded = mobileSection === item[0];
                return (
                  <div key={item[0]} className="border-b border-ink/10">
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={item[2]}
                        onClick={closeMobile}
                        className={`flex-1 py-3.5 text-[16px] font-medium ${active === item[0] ? "text-brand" : "text-ink"}`}
                      >
                        {item[1]}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item[1]}`}
                        onClick={() => setMobileSection(expanded ? null : item[0])}
                        className="cursor-pointer p-3 text-ink"
                      >
                        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
                          <path d="m5 9 7 7 7-7" />
                        </svg>
                      </button>
                    </div>
                    {expanded && (
                      <div className="pb-3">
                        {(() => {
                          var res: any[] = [];
                          if (item[0] === "solutions") {
                            menus_OBJ.solutions[0][1].forEach((p: any) => { if (p[0]) { res.push({ name: p[1], href: "/why-lidespy/" + p[0] }) } });
                            dataArr.forEach((s: any) => res.push({ name: s[1], href: "/services/" + s[0] }));
                          } else {
                            for (var i = 0; i < stuff[item[0]].length; i++) {
                              var c = stuff[item[0]][i];
                              res.push({ name: c[0], href: c[2], mediaKit: c[3] });
                            }
                          }
                          return res.map((l: any) => {
                            const cls = "flex w-full cursor-pointer items-center justify-between gap-3 border-t border-ink/8 py-2.5 pl-3 text-left text-[14px] text-muted";
                            if (l.mediaKit == true) {
                              return (
                                <button
                                  key={l.name}
                                  type="button"
                                  onClick={() => {
                                    closeMobile();
                                    window.dispatchEvent(new Event("lidespy:open-media-kit"));
                                  }}
                                  className={cls}
                                >
                                  <span>{l.name}</span>
                                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="shrink-0 text-brand">
                                    <path d="m9 5 7 7-7 7" />
                                  </svg>
                                </button>
                              );
                            } else {
                              return (
                                <Link key={l.name + l.href} href={l.href} onClick={closeMobile} className={cls}>
                                  <span>{l.name}</span>
                                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="text-brand shrink-0">
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
              <Link
                href="/contact"
                onClick={closeMobile}
                className="mt-5 flex items-center justify-center gap-2.5 rounded-ui border border-ink/25 py-3.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase"
              >
                Contact us
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand">
                  <path d="M3 12h17M14 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          ) : null}

          {mega && mega !== "solutions" ? (
            <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
              <div className="pointer-events-auto mx-auto max-w-[1280px] rounded-card border border-ink/12 bg-cream p-[26px] shadow-[0_40px_80px_-20px_rgba(18,21,15,0.28)]">
                <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
                  {stuff[mega].map((c: any) => {
                    const cls = "flex min-h-[104px] cursor-pointer flex-col gap-2.5 rounded-card border border-transparent bg-panel px-[22px] pt-[22px] pb-6 text-left text-ink transition-colors hover:border-brand/45 hover:bg-white";
                    return c[3] ? (
                      <button
                        key={c[0]}
                        type="button"
                        onClick={() => {
                          setMega(null);
                          window.dispatchEvent(new Event("lidespy:open-media-kit"));
                        }}
                        className={cls}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-[17.5px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">{c[0]}</div>
                          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75">
                            <path d="M3 12h17M14 6l6 6-6 6" />
                          </svg>
                        </div>
                        <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">{c[1]}</div>
                      </button>
                    ) : (
                      <Link key={c[0]} href={getValue(c[2])} className={cls}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-[17.5px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">{c[0]}</div>
                          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75">
                            <path d="M3 12h17M14 6l6 6-6 6" />
                          </svg>
                        </div>
                        <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">{c[1]}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {mega === "solutions" && (
            <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
              <div className="pointer-events-auto mx-auto grid max-w-[1280px] grid-cols-[minmax(260px,340px)_minmax(0,1fr)] overflow-hidden rounded-card bg-ink shadow-[0_40px_80px_-20px_rgba(18,21,15,0.45)]">
                <div className="flex flex-col px-[34px] py-9">
                  <div className="mb-[26px] text-[11px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                    {menu[0][0]}
                  </div>
                  {menu[0][1].map((p: any) => (
                    <Link
                      key={p[1]}
                      href={p[0] ? `/why-lidespy/${p[0]}` : "/about"}
                      className="block border-t border-cream/14 py-5 text-cream transition-colors hover:text-coral"
                    >
                      <div className="mb-2.5 flex items-start justify-between gap-4">
                        <div className="text-[20px] leading-[1.15] font-medium tracking-[-0.015em]">
                          {p[1]}
                        </div>
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 opacity-65">
                          <path d="M7 17 17 7M8 7h9v9" />
                        </svg>
                      </div>
                      <div className="text-[13px] leading-[1.55] text-cream/60 text-pretty">
                        {p[2]}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="my-3 mr-3 grid grid-cols-2 rounded-card bg-cream px-8 py-[30px]">
                  <div className="border-r border-ink/12 pr-7">
                    <div className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
                      {menu[1]}
                    </div>
                    <div className="grid gap-0.5">
                      {menu[4].map((s: any, i: any) => (
                        <Link
                          key={s[1]}
                          href={!s[0] ? "/services" : `/services/${s[0]}`}
                          onMouseEnter={() => setActiveSvc(i)}
                          className={`flex items-center gap-3 rounded-card px-3 py-[9px] text-[14.5px] leading-[1.2] transition-colors hover:bg-brand/10 hover:text-ink ${i === activeSvc ? "bg-brand/10 text-ink" : "text-muted"}`}
                        >
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
                      <div className="mb-3 text-[22px] leading-[1.15] font-medium tracking-[-0.02em] text-ink">
                        {svc[1]}
                      </div>
                      <div className="text-[14px] leading-[1.6] text-muted text-pretty">
                        {svc[2]}
                      </div>
                    </div>
                    <div>
                      <div className="mb-3.5 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                        {[menu[2], svc[1], menu[3]].filter(Boolean).join(" ")}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {svc[3].map((dd: any) => (
                          <Link
                            key={dd}
                            href={!svc[0] ? "/services" : "/services/" + svc[0] + "#" + slug_it(dd)}
                            className="flex items-center justify-between gap-3.5 border-b border-ink/10 py-3 text-[15px] font-medium text-ink transition-colors hover:text-brand"
                          >
                            <span>{dd}</span>
                            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="shrink-0 text-brand">
                              <path d="M3 12h17M14 6l6 6-6 6" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="self-start rounded-ui bg-brand-cta px-6 py-3.5 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
                    >
                      Book a strategy call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
        <div aria-hidden className="h-[var(--nav-h,70px)] sm:h-[var(--nav-h,87px)]" />
      </>
    );
  } else {
    if (t == 2) {
      return (
        <button type="button" onClick={() => { window.dispatchEvent(new Event("lidespy:open-cookie-settings")) }} className={props.cn}>
          Cookie settings
        </button>
      );
    } else {
      if (false) {
        console.log("never");
      }
      // FIXED
      const inp = "rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand";
      async function submit(event: any) {
        event.preventDefault();
        const errors: any = {};
        if (!name_val.trim()) errors.name = "Enter the full name on the record.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal.trim())) errors.email = "Enter a valid email address.";
        setFieldErrors(errors);
        if (!(Object.keys(errors).length > 0)) {
          if (SHEET_URL_2) {
            setStatus("sending");
            setToast(null);
            try {
              // post it
              if (!SHEET_URL_2) throw new Error("NEXT_PUBLIC_ENQUIRY_ENDPOINT is not set");
              const response = await fetch(SHEET_URL_2, {
                method: "POST",
                redirect: "manual",
                body: new URLSearchParams({
                  action: "optout",
                  fullName: name_val.trim(),
                  email: emailVal.trim(),
                }),
              });
              if (response.type !== "opaqueredirect" && !response.ok) {
                throw new Error(`HTTP ${response.status}`);
              }
              handleClose_new();
              setToast({ tone: "success", text: "You have been opted out. Any record matching that email has been deleted, and we will not contact you again." });
            } catch (error) {
              console.error("[opt-out] failed to submit", error);
              setStatus("idle");
              setToast({ tone: "error", text: "Something went wrong on our side. Please email info@lidespy.com and we will remove your data by hand." });
            }
          } else {
            setToast({ tone: "error", text: "The opt-out form is not connected yet. Please email info@lidespy.com and we will remove your data by hand." });
          }
        }
      }
      return (
        <>
          <button
            type="button"
            onClick={() => setIsOpen2(true)}
            className="cursor-pointer text-[11px] text-muted-2 underline-offset-2 transition-colors hover:text-brand hover:underline"
          >
            {"Opt-out / Unsubscribe"}
          </button>

          {toast ? (
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
                <button
                  type="button"
                  onClick={() => setToast(null)}
                  aria-label={"Close"}
                  className="mt-[2px] cursor-pointer text-cream/55 transition-colors hover:text-cream"
                >
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
                    <path d="M5 5l14 14M19 5 5 19" />
                  </svg>
                </button>
              </div>
            </div>
          ) : null}

          {isOpen2 && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="optout-title"
              className="fixed inset-0 z-70 flex items-end justify-center bg-ink/55 p-4 backdrop-blur-[2px] sm:items-center"
              onMouseDown={(e: any) => {
                if (e.target === e.currentTarget && status !== "sending") handleClose_new();
              }}
            >
              <div className="relative w-full max-w-[440px] rounded-card border border-ink/12 bg-white p-[clamp(22px,3vw,32px)]">
                <button
                  type="button"
                  onClick={handleClose_new}
                  disabled={status === "sending"}
                  aria-label="Close"
                  className="absolute top-4 right-4 cursor-pointer rounded-ui p-1.5 text-muted-3 transition-colors hover:bg-panel hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
                >
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
                      value={name_val}
                      placeholder="Jane Doe"
                      onChange={(e: any) => setName_val(e.target.value)}
                      aria-invalid={fieldErrors.name ? true : undefined}
                      className={`${inp} ${fieldErrors.name ? "border-brand-cta bg-brand-cta/5" : ""}`}
                    />
                    {fieldErrors.name && (
                      <span className="text-[11.5px] leading-[1.45] text-brand-cta">{fieldErrors.name}</span>
                    )}
                  </label>

                  <label className="flex flex-col gap-[7px]">
                    <span className="text-[12px] font-semibold text-ink">{"Email address"}</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={160}
                      value={emailVal}
                      placeholder={"you@company.com"}
                      onChange={(e: any) => setEmailVal(e.target.value)}
                      aria-invalid={fieldErrors.email ? true : undefined}
                      className={inp + " " + (fieldErrors.email ? "border-brand-cta bg-brand-cta/5" : "")}
                    />
                    {fieldErrors.email ? (
                      <span className="text-[11.5px] leading-[1.45] text-brand-cta">{fieldErrors.email}</span>
                    ) : null}
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-1 cursor-pointer rounded-ui bg-brand-cta px-6 py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Removing…" : "Remove my data"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      );
    }
  }
}
