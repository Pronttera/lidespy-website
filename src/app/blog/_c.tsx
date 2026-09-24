// @ts-nocheck
/* eslint-disable */
"use client";

// Here's the updated code with the fix:
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from 'next/link'
import { usePathname } from "next/navigation";

// v2 - all the blog stuff in one place (dont split this!!! it works)
var DATA: any = [["is-cold-email-still-worth-it-2026","Outbound","3 min read","Is Cold Email Still Worth It in 2026? What the Data Actually Shows","Cold email reply rates have dropped hard since 2022, but it hasn't stopped working — it's stopped working the old way. Here's what actually moves the needle in 2026.","Campaign team","photo-1557200134-90327ee9fafa","A Gmail inbox open on a laptop"],
  ["why-your-mqls-arent-converting","Demand gen","3 min read","Why Your MQLs Aren't Turning Into Sales Conversations (And How to Fix It)","MQL-to-SQL conversion rates are stubbornly low across most B2B pipelines. The problem usually isn't sales follow-up — it's how the lead got labeled an MQL in the first place.","Research team","photo-1526628953301-3e589a6a8b74","A marketing dashboard showing conversion metrics"],
  ["ai-sdrs-vs-human-appointment-setters","Outbound","3 min read","AI SDRs vs. Human Appointment Setters: What's Actually Working in 2026","AI SDR adoption tripled in a year, but the \"replace your whole team\" pitch doesn't hold up for most B2B companies. Here's where AI helps, where humans still win, and how most teams are actually structured.","Campaign team","photo-1531746790731-6c087fecd65a","A white robotic hand"],
  ["b2b-content-syndication-worth-it-2026","Syndication","3 min read","B2B Content Syndication in 2026: Is It Still Worth the Spend?","Content syndication remains one of the highest-volume B2B lead channels, but the \"publish everywhere, capture every form fill\" version of it is producing worse leads than ever. Here's what's changed.","Campaign team","photo-1533750349088-cd871a92f312","Marketing strategy notes and books on a desk"],
  ["real-cost-of-bad-b2b-data","Data","3 min read","The Real Cost of Bad B2B Data (And How to Actually Fix Your List)","The average B2B data provider delivers roughly 50% accuracy. Here's what that actually costs a growing sales team, and the practical framework for evaluating a provider before you buy.","Research team","photo-1504868584819-f8e8b4b6d7e3","A laptop showing data reports"],
  ["abm-guide-mid-market-2026","ABM","3 min read","Account-Based Marketing in 2026: A Practical Guide for Mid-Market B2B Teams","ABM isn't just an enterprise tactic anymore, but most mid-market teams still run it like a slightly-more-personalized version of mass marketing. Here's what a lean, practical ABM program actually looks like.","Research team","photo-1557804506-669a67965ba0","A team planning at a whiteboard"],
  ["does-cold-calling-still-work-b2b-2026","Outbound","3 min read","Does Cold Calling Still Work in B2B? Here's What the 2026 Numbers Say","\"Cold calling is dead\" has been said every year since 2015. The 2026 data says otherwise — as long as you're calling the right people, the right way.","Campaign team","photo-1423666639041-f56000c27a9a","Hands holding a phone beside a laptop"],
  ["tofu-mofu-bofu-funnel-guide","Demand gen","3 min read","TOFU, MOFU, BOFU: Building a Multi-Funnel Lead Gen Strategy That Actually Converts","Most B2B teams have a funnel diagram on a slide somewhere and a lead gen program that ignores it completely. Here's how to actually build campaigns around each stage instead of running one generic motion for everyone.","Research team","photo-1543286386-713bdd548da4","A hand-drawn growth chart on a desk"],
  ["buyer-intent-data-explained","Intent data","3 min read","Buyer Intent Data Explained: How to Use It Without Wasting Your Budget","Intent data has gone from a nice-to-have to something most high-performing B2B teams use, but it's also easy to buy and never actually act on. Here's what it is, what it isn't, and how to use it well.","Research team","photo-1560472354-b33ff0c44a43","An analytics graph of clicks and impressions"],
  ["in-house-appointment-generation","Outbound","3 min read","In-House Appointment Generation: The Real 2026 Cost and How to Get It Right","The salary line item for an in-house SDR isn't the real cost. Here's the fuller picture B2B leaders are running in 2026 before building an in-house appointment generation team.","Campaign team","photo-1542744173-8e7e53415bb0","A sales team meeting around a table"],
  ["b2b-data-compliance-checklist-2026","Compliance","3 min read","GDPR, CCPA, and Your B2B Contact Data: A 2026 Compliance Checklist","\"It's business contact data, not personal data\" stopped being a valid excuse years ago. Here's what actually applies to your outbound list in 2026, and how to check whether your current data source holds up.","Compliance lead","photo-1589829545856-d10d557cf95f","A statue of Lady Justice holding scales"],
  ["multi-channel-outbound-2026","Outbound","3 min read","Why Email-Only Outbound Is Dying in 2026 (And What to Do Instead)","A single-channel outbound sequence is competing against a full inbox, a distracted LinkedIn feed, and a phone that almost nobody calls anymore. Here's why coordinating channels is outperforming any one of them alone.","Campaign team","photo-1563986768609-322da13575f3","Someone working across a laptop and a phone"],
  ["audience-intelligence-explained","Intent data","3 min read","Audience Intelligence Explained: Spotting High-Intent B2B Accounts Before the Form Fill","Most B2B teams only see intent after a form fill. Here's how audience intelligence surfaces buying signals earlier, and how to act on them without overreaching.","Research team","photo-1551288049-bebda4e38f71","A dashboard showing account engagement signals across channels"],
  ["b2b-cold-email-deliverability-2026","Data","3 min read","Email Deliverability in 2026: Why Your Cold Outbound Is Landing in Spam","Good copy doesn't matter if it never reaches the inbox. Here's what's actually driving B2B cold email deliverability problems in 2026, and the fixes that work.","Research team","photo-1557200134-90327ee9fafa","An email inbox with several messages flagged as spam"],
  ["b2b-lead-scoring-model","Demand gen","3 min read","Lead Scoring Models That Actually Predict Sales-Ready Accounts","Most B2B lead scoring models score activity, not intent to buy. Here's how to build one that actually predicts which accounts are sales-ready.","Research team","photo-1526628953301-3e589a6a8b74","A lead scoring dashboard ranking accounts by readiness"],
  ["b2b-webinar-lead-generation-2026","Demand gen","3 min read","B2B Webinars in 2026: Turning Registrants Into Pipeline","A packed registrant list means nothing if nobody shows up ready to buy. Here's how B2B teams are running webinars that actually produce pipeline in 2026.","Research team","photo-1540575467063-178a50c2df87","A B2B webinar presentation with an engaged live audience panel"],
  ["linkedin-outbound-2026","Outbound","3 min read","LinkedIn Outbound in 2026: Does Social Selling Actually Convert for B2B?","LinkedIn connection limits and algorithm changes shifted reply rates in 2026. Here's what's actually converting in B2B social selling, and how it pairs with email.","Campaign team","photo-1563986768609-322da13575f3","A sales rep reviewing LinkedIn outreach on a laptop"]];

const SVCS: any = [
  ["demand-generation","Demand Generation","Full-funnel programs that identify in-market buyers, engage decision-makers across channels, and deliver qualified leads ready for sales follow-up.",[["Target account list building","/services/demand-generation#target-account-list-building"],["Multi-channel outreach sequences","/services/demand-generation#multi-channel-outreach-sequences"],["Pipeline contribution tracking","/services/demand-generation#pipeline-contribution-tracking"]]],
  ["content-syndication","Content Syndication","Distribute whitepapers, eBooks and reports to verified B2B audiences actively researching your category. Every lead meets your ICP filters.",[["Audience segmentation and filtering","/services/content-syndication#audience-segmentation-and-filtering"],["Lead capture and qualification","/services/content-syndication#lead-capture-and-qualification"],["CPL or flat-fee pricing options","/services/content-syndication#cpl-or-flat-fee-pricing-options"]]],
  ["abm","Account-Based Marketing","Target your most valuable accounts with precision — buying committee maps, decision-maker identification and coordinated multi-channel outreach.",[["Target account list (TAL) build","/services/abm#target-account-list-tal-build"],["ABM campaign orchestration plan","/services/abm#abm-campaign-orchestration-plan"],["Buying committee coverage tracking","/services/abm#buying-committee-coverage-tracking"]]],
  ["email-marketing","Email Marketing","Precision B2B email reaching verified decision-makers at your target accounts — built for deliverability, compliance and conversion, not open rates.",[["List build and segmentation","/services/email-marketing#list-build-and-segmentation"],["Email copy and template creation","/services/email-marketing#email-copy-and-template-creation"],["Deliverability and performance reporting","/services/email-marketing#deliverability-and-performance-reporting"]]],
  ["audience-intelligence","Audience Intelligence","Before you spend a dollar on outreach, know exactly who to reach. Verified audience profiles from intelligence platforms, intent data and human research.",[["Audience intelligence report","/services/audience-intelligence#audience-intelligence-report"],["ICP scoring model","/services/audience-intelligence#icp-scoring-model"],["Recommended channel strategy","/services/audience-intelligence#recommended-channel-strategy"]]],
  ["b2b-data","High-Intent B2B Data","Verified, permission-based B2B contact databases built for outreach. Every record validated, enriched and matched to your ICP — no recycled lists.",[["Custom database build to your ICP","/services/b2b-data#custom-database-build-to-your-icp"],["CSV or CRM-ready format","/services/b2b-data#csv-or-crm-ready-format"],["Suppression file application","/services/b2b-data#suppression-file-application"]]],
  ["webinar-promotion","Webinar & Event Promotion","Fill your webinars, virtual events and conferences with qualified registrants drawn from your ICP via email, content syndication and outreach.",[["Webinar promotion campaign setup","/services/webinar-promotion#webinar-promotion-campaign-setup"],["Registration delivery and reporting","/services/webinar-promotion#registration-delivery-and-reporting"],["Post-event attendee list with engagement data","/services/webinar-promotion#post-event-attendee-list-with-engagement-data"]]],
  ["appointment-generation","Appointment Generation","We book qualified sales meetings directly into your team’s calendars — SDR and telemarketing outreach that converts in-market buyers into appointments.",[["Outreach sequence (email + phone + LinkedIn)","/services/appointment-generation#outreach-sequence-email-phone-linkedin"],["Qualification script development","/services/appointment-generation#qualification-script-development"],["Weekly appointment report with notes","/services/appointment-generation#weekly-appointment-report-with-notes"]]],
  ["gtm-strategy","GTM Strategy","Launch new markets, products or personas with a data-driven go-to-market strategy — ICP, messaging, channel mix and execution roadmap.",[["GTM strategy document","/services/gtm-strategy#gtm-strategy-document"],["Messaging playbook","/services/gtm-strategy#messaging-playbook"],["90-day launch roadmap","/services/gtm-strategy#90-day-launch-roadmap"]]],
  ["ai-visibility","AI Visibility","Ensure your brand and thought leadership appear in AI-generated answers and search summaries. Content and presence optimized for LLM visibility.",[["AI visibility audit report","/services/ai-visibility#ai-visibility-audit-report"],["AI-optimized content creation","/services/ai-visibility#ai-optimized-content-creation"],["Competitor AI share-of-voice analysis","/services/ai-visibility#competitor-ai-share-of-voice-analysis"]]],
  ["performance-marketing","Digital & Performance","Paid search, display, programmatic and social campaigns managed for ROI — performance programs built around pipeline contribution, not impressions.",[["Campaign setup and management","/services/performance-marketing#campaign-setup-and-management"],["Audience targeting and bid strategy","/services/performance-marketing#audience-targeting-and-bid-strategy"],["Monthly strategy and optimization review","/services/performance-marketing#monthly-strategy-and-optimization-review"]]],
  ["digital-marketing","Digital Marketing","Own the channels your buyers already use — SEO, content, organic social and marketing automation run as one always-on programme, not a campaign burst.",[["SEO and content programme","/services/digital-marketing#seo-and-content-programme"],["Organic social and LinkedIn management","/services/digital-marketing#organic-social-and-linkedin-management"],["Marketing automation and nurture journeys","/services/digital-marketing#marketing-automation-and-nurture-journeys"]]],
  ["website-design","Technology Development","Conversion-optimized B2B websites designed to generate leads and communicate your value proposition — from landing pages to full builds.",[["UI/UX design (desktop + mobile)","/services/website-design#ui-ux-design-desktop-mobile"],["Front-end and back-end development","/services/website-design#front-end-and-back-end-development"],["QA, launch and post-launch support","/services/website-design#qa-launch-and-post-launch-support"]]]
];

// TODO: refactor later
let GRIDZ: any = {
  enable: [["Generate More Leads", "Increase qualified lead volume from your ICP.", "/solutions/generate-more-leads"], ["Build Pipeline", "From first content interaction to sales-qualified opportunity.", "/solutions/build-pipeline"], ["Accelerate Sales", "Book more meetings. Close more revenue.", "/solutions/accelerate-sales"], ["Launch New Markets", "Enter new regions and segments with confidence.", "/solutions/launch-new-markets"], ["Improve ABM Performance", "Stop running ABM on assumptions.", "/solutions/improve-abm-performance"], ["Increase Webinar Attendance", "Fill every seat with the right buyers.", "/solutions/increase-webinar-attendance"], ["Industry Solutions", "Built for B2B. Specialized by industry.", "/industries"]],
  why: [["Why Lidespy", "Most lead vendors are paid for volume. We’re measured on pipeline.", "/why-lidespy"], ["About Us", "A demand generation partner that thinks like a revenue team.", "/about"], ["Our Team", "Research executives and GTM specialists with deep B2B expertise.", "/about#team"], ["Our Data", "Verified, permission-based B2B data behind every campaign.", "/services#b2b-data"], ["How We Work", "From brief to pipeline in four steps.", "/about#how"], ["Compliance", "GDPR, CAN-SPAM and CASL aligned. Full campaign visibility.", "/why-lidespy#compliance"], ["Global Coverage", "50+ countries across NA, Europe, APAC and MEA.", "/about#global"]],
  resources: [["Blog", "Learn how to upgrade your demand generation.", "/blog"], ["Reports and Benchmarks", "Data-driven insights for better decisions.", "/resources?type=reports#library"], ["Webinars", "Actionable insights from industry experts.", "/resources/webinars"], ["Whitepapers", "Deep dives on ABM, intent data and syndication.", "/resources/whitepapers"], ["Campaign Budget Calculator", "Model budget, CPL and pipeline potential.", "/calculator"], ["Media Kit", "Download our pitch deck: company overview, services and results.", "#undefined", true]],
}

const nav_items = [["solutions", "Solutions", "/services"], ["enable", "What We Enable", "/solutions"], ["why", "Why Lidespy", "/why-lidespy"], ["resources", "Resources", "/resources"]]

// pillars
const RAIL = [
  ["precision-targeting", "Precision Targeting", "ICP-matched audiences, buying committee intelligence and intent data activation — so every campaign starts with the right list."],
  ["multi-channel-execution", "Multi-Channel Execution", "Email, ABM, content syndication, telemarketing, webinars and SDR outreach — coordinated and timed as one program."],
  ["revenue-focused-outcomes", "Revenue-Focused Outcomes", "Qualified leads, booked meetings and measurable pipeline contribution. Not vanity metrics."],
];

const EMAIL_REGEX_2 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getValue(x: any) { return x }
const isTrue = (b: any) => b == true;

/*
function oldCard(p) {
  return <div className="card">{p.title}</div>
}
*/

export default function C(props: any) {
  const t = props.t;
  // set state
  const [mega, setMega] = useState<any>(null);
  const [activeSvc, setActiveSvc] = useState(0);
  const [isClosed, setIsClosed] = useState(false); // mobile menu
  const [mobileSection, setMobileSection] = useState<any>(null);
  const headerRef = useRef<any>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [topic, setTopic] = useState("All");
  const [open2, setOpen2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<any>("idle");
  const [fieldErrors, setFieldErrors] = useState<any>({});
  const [toast, setToast] = useState<any>(null);
  const firstFieldRef = useRef<any>(null);
  const [unused_thing, setUnusedThing] = useState(0);
  const pathname_old = null; // usePathname()

  // ✅ This ensures optimal performance
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

  useEffect(() => {
    if (!isClosed == false) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isClosed]);

  // idk why but this fixes it
  useEffect(() => {
    if (open2 == true) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      firstFieldRef.current?.focus();
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open2]);

  useEffect(() => {
    if (open2) {
      if (!(status === "sending")) {
        const onKey = function (e: any) {
          if (e.key === "Escape") handleClose3();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
      }
    }
  }, [open2, status]);

  useEffect(() => {
    if (!!toast == true) {
      const tt = window.setTimeout(() => setToast(null), 10000);
      return () => window.clearTimeout(tt);
    }
  }, [toast]);

  function handleClose3() {
    setOpen2(false);
    setStatus("idle");
    setFieldErrors({});
    setName("");
    setEmail("");
  }

  const closeMobile = () => {
    setIsClosed(false);
    setMobileSection(null);
  };

  const handleClick2 = (key: any) => () => {
    setMega(key);
    setActiveSvc(0);
  };

  async function submit(event: any) {
    event.preventDefault();
    const errors: any = {};
    if (!name.trim()) errors.name = "Enter the full name on the record.";
    if (!EMAIL_REGEX_2.test(email.trim())) errors.email = "Enter a valid email address.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      // nothing
    } else {
      if (!process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT) {
        setToast({ tone: "error", text: "The opt-out form is not connected yet. Please email info@lidespy.com and we will remove your data by hand." });
      } else {
        setStatus("sending");
        setToast(null);
        try {
          // post to sheet (copied from lib)
          var fields: any = { action: "optout", fullName: name.trim(), email: email.trim() };
          if (!process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT) throw new Error("NEXT_PUBLIC_ENQUIRY_ENDPOINT is not set");
          const response = await fetch(process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT, {
            method: "POST",
            redirect: "manual",
            body: new URLSearchParams(fields),
          });
          if (response.type !== "opaqueredirect" && !response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          handleClose3();
          setToast({ tone: "success", text: "You have been opted out. Any record matching that email has been deleted, and we will not contact you again." });
        } catch (error) {
          console.error("[opt-out] failed to submit", error);
          setStatus("idle");
          setToast({ tone: "error", text: "Something went wrong on our side. Please email info@lidespy.com and we will remove your data by hand." });
        }
      }
    }
  }

  if (false) {
    console.log("debug", unused_thing, pathname_old);
  }

  if (t == 1) {
    var active = props.a;
    var svc: any = SVCS[Math.min(activeSvc, SVCS.length - 1)];
    return (
    <>
    <header
      ref={headerRef}
      onMouseLeave={() => setMega(null)}
      className="fixed inset-x-0 top-0 z-60 bg-cream border-b border-ink/15"
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 page-x py-3.5 sm:gap-6 sm:py-[18px] lg:grid lg:grid-cols-[auto_1fr_auto]">
        <Link href={"/"} className="flex items-center">
          <Image src="/lidespy-logo.png" alt="Lidespy" width={997} height={304} priority className="h-[26px] w-auto sm:h-[34px]" />
        </Link>

        <div className="hidden flex-wrap items-center justify-center gap-[26px] text-[15px] lg:flex">
          {nav_items.map((item: any) => (
            <Link
              key={item[0]}
              href={item[2]}
              onMouseEnter={handleClick2(item[0])}
              className={`inline-flex items-center gap-1.5 border-b-2 py-2.5 text-ink transition-colors hover:border-brand hover:text-brand ${
                active === item[0] ? "border-brand" : "border-transparent"
              }`}
            >
              {item[1]}
              <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden><path d="m5 9 7 7 7-7" /></svg>
            </Link>
          ))}
        </div>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="rounded-ui bg-brand-cta px-3.5 py-3 text-[11px] font-semibold tracking-[0.04em] whitespace-nowrap text-white uppercase transition-colors hover:bg-ink hover:text-coral sm:px-7 sm:py-4 sm:text-[12px]"
          >
            Book a call
          </Link>
          <button
            type="button"
            aria-expanded={isClosed}
            aria-label="Toggle navigation"
            onClick={() => setIsClosed((v) => !v)}
            className="shrink-0 cursor-pointer rounded-[2px] border border-ink/20 px-3 py-3 lg:hidden"
          >
            <span className="block h-px w-5 bg-ink" />
            <span className="mt-1.5 block h-px w-5 bg-ink" />
            <span className="mt-1.5 block h-px w-5 bg-ink" />
          </button>
        </div>
      </nav>

      {isClosed && (
        <div className="max-h-[calc(100dvh-56px)] overflow-y-auto overscroll-contain border-t border-ink/12 bg-cream page-x pt-2 pb-6 lg:hidden">
          {nav_items.map((item: any) => {
            const expanded = mobileSection === item[0];
            return (
              <div key={item[0]} className="border-b border-ink/10">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={item[2]}
                    onClick={closeMobile}
                    className={`flex-1 py-3.5 text-[16px] font-medium ${
                      active === item[0] ? "text-brand" : "text-ink"
                    }`}
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
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className={`transition-transform ${expanded ? "rotate-180" : ""}`}><path d="m5 9 7 7 7-7" /></svg>
                  </button>
                </div>
                {expanded && (
                  <div className="pb-3">
                    {(item[0] === "solutions"
                      ? [
                          ...RAIL.map((p: any) => ({ name: p[1], href: "/why-lidespy/" + p[0] })),
                          ...SVCS.map((s: any) => ({ name: s[1], href: "/services/" + s[0] })),
                        ]
                      : GRIDZ[item[0]].map((c: any) => ({ name: c[0], href: c[2], mediaKit: c[3] }))
                    ).map((l: any) => {
                      const cls = "flex w-full cursor-pointer items-center justify-between gap-3 border-t border-ink/8 py-2.5 pl-3 text-left text-[14px] text-muted";
                      if ("mediaKit" in l && l.mediaKit) {
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
                            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="shrink-0 text-brand"><path d="m9 5 7 7-7 7" /></svg>
                          </button>
                        );
                      } else {
                        return (
                          <Link key={l.name + l.href} href={l.href} onClick={closeMobile} className={cls}>
                            <span>{l.name}</span>
                            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="shrink-0 text-brand"><path d="m9 5 7 7-7 7" /></svg>
                          </Link>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href={"/contact"}
            onClick={closeMobile}
            className="mt-5 flex items-center justify-center gap-2.5 rounded-ui border border-ink/25 py-3.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase"
          >
            Contact us
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
          </Link>
        </div>
      )}

      {mega && mega !== "solutions" ? (
        <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
          <div className="pointer-events-auto mx-auto max-w-[1280px] rounded-card border border-ink/12 bg-cream p-[26px] shadow-[0_40px_80px_-20px_rgba(18,21,15,0.28)]">
            <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
              {GRIDZ[mega].map((c: any) => {
                const cls = "flex min-h-[104px] cursor-pointer flex-col gap-2.5 rounded-card border border-transparent bg-panel px-[22px] pt-[22px] pb-6 text-left text-ink transition-colors hover:border-brand/45 hover:bg-white";
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-[17.5px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">
                        {c[0]}
                      </div>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                    </div>
                    <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">
                      {c[1]}
                    </div>
                  </>
                );
                return isTrue(c[3]) ? (
                  <button
                    key={c[0]}
                    type="button"
                    onClick={() => {
                      setMega(null);
                      window.dispatchEvent(new Event("lidespy:open-media-kit"));
                    }}
                    className={cls}
                  >
                    {inner}
                  </button>
                ) : (
                  <Link key={c[0]} href={c[2]} className={cls}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {mega === "solutions" && (
        <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
          <div className="pointer-events-auto mx-auto grid max-w-[1280px] grid-cols-[minmax(260px,340px)_minmax(0,1fr)] overflow-hidden rounded-card bg-ink shadow-[0_40px_80px_-20px_rgba(18,21,15,0.45)]">
            <div className="flex flex-col px-[34px] py-9">
              <div className="mb-[26px] text-[11px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                {"Why Lidespy"}
              </div>
              {RAIL.map((p: any) => (
                <Link
                  key={p[1]}
                  href={p[0] ? "/why-lidespy/" + p[0] : "/about"}
                  className="block border-t border-cream/14 py-5 text-cream transition-colors hover:text-coral"
                >
                  <div className="mb-2.5 flex items-start justify-between gap-4">
                    <div className="text-[20px] leading-[1.15] font-medium tracking-[-0.015em]">
                      {p[1]}
                    </div>
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 opacity-65"><path d="M7 17 17 7M8 7h9v9" /></svg>
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
                  {"Our services"}
                </div>
                <div className="grid gap-0.5">
                  {SVCS.map((s: any, i: any) => (
                    <Link
                      key={s[1]}
                      href={"/services/" + s[0]}
                      onMouseEnter={() => setActiveSvc(i)}
                      className={`flex items-center gap-3 rounded-card px-3 py-[9px] text-[14.5px] leading-[1.2] transition-colors hover:bg-brand/10 hover:text-ink ${
                        i === activeSvc ? "bg-brand/10 text-ink" : "text-muted"
                      }`}
                    >
                      <span className="flex-1">{s[1]}</span>
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="shrink-0 text-brand"><path d="m9 5 7 7-7 7" /></svg>
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
                    {["Browse", svc[1], "deliverables"].filter(Boolean).join(" ")}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {svc[3].map((d: any) => (
                      <Link
                        key={d[0]}
                        href={d[1]}
                        className="flex items-center justify-between gap-3.5 border-b border-ink/10 py-3 text-[15px] font-medium text-ink transition-colors hover:text-brand"
                      >
                        <span>{d[0]}</span>
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="shrink-0 text-brand"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
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
  } else if (t == 2) {
    // newsletter
    return subscribed ? (
      <div className="flex items-center gap-2.5 rounded-ui bg-brand-cta px-3.5 py-[13px] text-[13px] font-semibold text-white">
        <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden><path d="m4 12 6 6L20 6" /></svg>
        You&apos;re on the list.
      </div>
    ) : (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubscribed(true);
        }}
        className="flex flex-wrap gap-2"
      >
        <input
          required
          type="email"
          name="email"
          placeholder="you@company.com"
          aria-label="Email address"
          className="min-w-[150px] flex-1 rounded-ui border border-cream/24 bg-cream/6 px-3.5 py-[13px] text-[13.5px] text-cream outline-none placeholder:text-cream/40 focus:border-coral"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-ui bg-brand-cta px-5 py-3.5 text-[11.5px] font-semibold tracking-[0.05em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
        >
          Subscribe
        </button>
      </form>
    );
  } else {
    if (t == 3) {
      const GRID = DATA.filter((p: any) => p[0] !== DATA[0][0]);
      const posts_final = GRID.filter((p: any) => topic === "All" || p[1] === topic);
      let TOPICS: any = ["All"];
      for (var q = 0; q < DATA.length; q++) {
        if (TOPICS.indexOf(DATA[q][1]) == -1) TOPICS.push(DATA[q][1]);
      }
      return (
        <section className="mx-auto max-w-[1280px] page-x pt-[clamp(36px,4vw,56px)] pb-[clamp(56px,6vw,88px)]">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-5 border-t border-ink/15 pt-[26px]">
            <div className="flex flex-wrap gap-1.5">
              {TOPICS.map((x1: any) => {
                const on = x1 === topic;
                return (
                  <button
                    key={x1}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setTopic(x1)}
                    className={`cursor-pointer rounded-ui border px-4 py-[11px] text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors ${
                      on
                        ? "border-ink bg-ink text-coral"
                        : "border-ink/20 text-ink hover:border-ink/50"
                    }`}
                  >
                    {x1}
                  </button>
                );
              })}
            </div>
            <div className="text-[12px] text-muted-2">
              {posts_final.length} {posts_final.length === 1 ? "article" : "articles"}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {posts_final.map((p: any) => (
              <Link
                key={p[0]}
                href={"/blog/" + p[0]}
                className="flex flex-col overflow-hidden rounded-ui border border-ink/14 bg-white text-ink transition-colors hover:border-brand/55"
              >
                <div className={"relative " + "overflow-hidden bg-panel " + "aspect-video"}>
                  <Image
                    src={`https://images.unsplash.com/${p[6]}?auto=format&fit=crop&w=${1100}&q=70`}
                    alt={p[7]}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority={false}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[11px] px-[22px] pt-[22px] pb-6">
                  <div className="flex justify-between gap-2.5">
                    <span className="text-[11px] font-semibold tracking-[0.1em] text-[#be1622] uppercase">
                      {p[1]}
                    </span>
                    <span className="text-[11px] text-muted-3">{p[2]}</span>
                  </div>
                  <h3 className="m-0 text-[18.5px] leading-[1.2] font-semibold tracking-[-0.018em] text-pretty">
                    {p[3]}
                  </h3>
                  <p className="m-0 flex-1 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                    {p[4]}
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-3 border-t border-ink/10 pt-3.5">
                    <span className="text-[11.5px] text-muted-2">{p[5]}</span>
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.05em] text-brand uppercase">
                      Read
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      );
    } else if (t == 4) {
      return (
        <button type="button" onClick={() => { window.dispatchEvent(new Event("lidespy:open-cookie-settings")) }} className={getValue(props.cls)}>
          Cookie settings
        </button>
      );
    } else {
      // FIXED: opt out popup (t == 5)
      var inputClass_new = "rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand";
      return (
        <>
          <button
            type="button"
            onClick={() => setOpen2(true)}
            className="cursor-pointer text-[11px] text-muted-2 underline-offset-2 transition-colors hover:text-brand hover:underline"
          >
            {"Opt-out / Unsubscribe"}
          </button>

          {toast && (
            <div
              role={toast.tone === "error" ? "alert" : "status"}
              className={`fixed inset-x-4 bottom-5 z-80 mx-auto max-w-[420px] rounded-card border bg-ink px-4 py-3.5 text-[12.5px] leading-[1.55] text-cream shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:right-5 sm:left-auto sm:mx-0 ${
                toast.tone === "error" ? "border-brand-cta/50" : "border-brand/60"
              }`}
            >
              <div className="flex items-start gap-3">
                {toast.tone === "error" ? (
                  <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-brand-cta" />
                ) : (
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-[3px] shrink-0 text-brand"><path d="m4 12 6 6L20 6" /></svg>
                )}
                <span className="flex-1">{toast.text}</span>
                <button
                  type="button"
                  onClick={() => setToast(null)}
                  aria-label={"Close"}
                  className="mt-[2px] cursor-pointer text-cream/55 transition-colors hover:text-cream"
                >
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M5 5l14 14M19 5 5 19" /></svg>
                </button>
              </div>
            </div>
          )}

          {open2 && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="optout-title"
              className="fixed inset-0 z-70 flex items-end justify-center bg-ink/55 p-4 backdrop-blur-[2px] sm:items-center"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget && status !== "sending") handleClose3();
              }}
            >
              <div className="relative w-full max-w-[440px] rounded-card border border-ink/12 bg-white p-[clamp(22px,3vw,32px)]">
                <button
                  type="button"
                  onClick={handleClose3}
                  disabled={status === "sending"}
                  aria-label="Close"
                  className="absolute top-4 right-4 cursor-pointer rounded-ui p-1.5 text-muted-3 transition-colors hover:bg-panel hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M5 5l14 14M19 5 5 19" /></svg>
                </button>

                  <form onSubmit={submit} noValidate className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 pr-8">
                      <h2
                        id="optout-title"
                        className="m-0 text-[20px] leading-[1.2] font-medium tracking-[-0.02em] text-ink"
                      >
                        {"Opt out of our database"}
                      </h2>
                      <p className="m-0 text-[13px] leading-[1.6] text-muted-2 text-pretty">
                        {"Enter the name and email you gave us and we will remove every matching record from our contact database. Removal is immediate and permanent."}
                      </p>
                    </div>

                    <label className="flex flex-col gap-[7px]">
                      <span className="text-[12px] font-semibold text-ink">
                        {"Full name"}
                      </span>
                      <input
                        ref={firstFieldRef}
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        maxLength={120}
                        value={name}
                        placeholder={"Jane Doe"}
                        onChange={(e) => setName(e.target.value)}
                        aria-invalid={fieldErrors.name ? true : undefined}
                        className={`${inputClass_new} ${fieldErrors.name ? "border-brand-cta bg-brand-cta/5" : ""}`}
                      />
                      {fieldErrors.name && (
                        <span className="text-[11.5px] leading-[1.45] text-brand-cta">
                          {fieldErrors.name}
                        </span>
                      )}
                    </label>

                    <label className="flex flex-col gap-[7px]">
                      <span className="text-[12px] font-semibold text-ink">
                        {"Email address"}
                      </span>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        maxLength={160}
                        value={email}
                        placeholder={"you@company.com"}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={fieldErrors.email ? true : undefined}
                        className={`${inputClass_new} ${fieldErrors.email ? "border-brand-cta bg-brand-cta/5" : ""}`}
                      />
                      {fieldErrors.email && (
                        <span className="text-[11.5px] leading-[1.45] text-brand-cta">
                          {fieldErrors.email}
                        </span>
                      )}
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