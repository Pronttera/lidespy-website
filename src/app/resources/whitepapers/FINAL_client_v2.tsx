// @ts-nocheck
/* eslint-disable */
"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// v2 of the client stuff - DO NOT DELETE
// t=1 nav, t=2 cookie btn, t=3 optout thing, t=4 hero anim, t=5 buttons anim
// NOTE: t=6 was the newsletter but we removed it (its still here somewhere)

var SERVICES_FINAL = [["demand-generation","Demand Generation","Full-funnel programs that identify in-market buyers, engage decision-makers across channels, and deliver qualified leads ready for sales follow-up.",["Target account list building","Multi-channel outreach sequences","Pipeline contribution tracking"]],["content-syndication","Content Syndication","Distribute whitepapers, eBooks and reports to verified B2B audiences actively researching your category. Every lead meets your ICP filters.",["Audience segmentation and filtering","Lead capture and qualification","CPL or flat-fee pricing options"]],["abm","Account-Based Marketing","Target your most valuable accounts with precision — buying committee maps, decision-maker identification and coordinated multi-channel outreach.",["Target account list (TAL) build","ABM campaign orchestration plan","Buying committee coverage tracking"]],["email-marketing","Email Marketing","Precision B2B email reaching verified decision-makers at your target accounts — built for deliverability, compliance and conversion, not open rates.",["List build and segmentation","Email copy and template creation","Deliverability and performance reporting"]],["audience-intelligence","Audience Intelligence","Before you spend a dollar on outreach, know exactly who to reach. Verified audience profiles from intelligence platforms, intent data and human research.",["Audience intelligence report","ICP scoring model","Recommended channel strategy"]],["b2b-data","High-Intent B2B Data","Verified, permission-based B2B contact databases built for outreach. Every record validated, enriched and matched to your ICP — no recycled lists.",["Custom database build to your ICP","CSV or CRM-ready format","Suppression file application"]],["webinar-promotion","Webinar & Event Promotion","Fill your webinars, virtual events and conferences with qualified registrants drawn from your ICP via email, content syndication and outreach.",["Webinar promotion campaign setup","Registration delivery and reporting","Post-event attendee list with engagement data"]],["appointment-generation","Appointment Generation","We book qualified sales meetings directly into your team’s calendars — SDR and telemarketing outreach that converts in-market buyers into appointments.",["Outreach sequence (email + phone + LinkedIn)","Qualification script development","Weekly appointment report with notes"]],["gtm-strategy","GTM Strategy","Launch new markets, products or personas with a data-driven go-to-market strategy — ICP, messaging, channel mix and execution roadmap.",["GTM strategy document","Messaging playbook","90-day launch roadmap"]],["ai-visibility","AI Visibility","Ensure your brand and thought leadership appear in AI-generated answers and search summaries. Content and presence optimized for LLM visibility.",["AI visibility audit report","AI-optimized content creation","Competitor AI share-of-voice analysis"]],["performance-marketing","Digital & Performance","Paid search, display, programmatic and social campaigns managed for ROI — performance programs built around pipeline contribution, not impressions.",["Campaign setup and management","Audience targeting and bid strategy","Monthly strategy and optimization review"]],["digital-marketing","Digital Marketing","Own the channels your buyers already use — SEO, content, organic social and marketing automation run as one always-on programme, not a campaign burst.",["SEO and content programme","Organic social and LinkedIn management","Marketing automation and nurture journeys"]],["website-design","Technology Development","Conversion-optimized B2B websites designed to generate leads and communicate your value proposition — from landing pages to full builds.",["UI/UX design (desktop + mobile)","Front-end and back-end development","QA, launch and post-launch support"]]];
const pillarsData: any = [{"k":"precision-targeting","n":"Precision Targeting","b":"ICP-matched audiences, buying committee intelligence and intent data activation — so every campaign starts with the right list."},{"k":"multi-channel-execution","n":"Multi-Channel Execution","b":"Email, ABM, content syndication, telemarketing, webinars and SDR outreach — coordinated and timed as one program."},{"k":"revenue-focused-outcomes","n":"Revenue-Focused Outcomes","b":"Qualified leads, booked meetings and measurable pipeline contribution. Not vanity metrics."}];

// grids (name, body, href, mediakit)
let megaGrids: any = {
  enable: [["Generate More Leads","Increase qualified lead volume from your ICP.","/solutions/generate-more-leads"],["Build Pipeline","From first content interaction to sales-qualified opportunity.","/solutions/build-pipeline"],["Accelerate Sales","Book more meetings. Close more revenue.","/solutions/accelerate-sales"],["Launch New Markets","Enter new regions and segments with confidence.","/solutions/launch-new-markets"],["Improve ABM Performance","Stop running ABM on assumptions.","/solutions/improve-abm-performance"],["Increase Webinar Attendance","Fill every seat with the right buyers.","/solutions/increase-webinar-attendance"],["Industry Solutions","Built for B2B. Specialized by industry.","/industries"]],
  why: [["Why Lidespy","Most lead vendors are paid for volume. We’re measured on pipeline.","/why-lidespy"],["About Us","A demand generation partner that thinks like a revenue team.","/about"],["Our Team","Research executives and GTM specialists with deep B2B expertise.","/about#team"],["Our Data","Verified, permission-based B2B data behind every campaign.","/services#b2b-data"],["How We Work","From brief to pipeline in four steps.","/about#how"],["Compliance","GDPR, CAN-SPAM and CASL aligned. Full campaign visibility.","/why-lidespy#compliance"],["Global Coverage","50+ countries across NA, Europe, APAC and MEA.","/about#global"]],
  resources: [["Blog","Learn how to upgrade your demand generation.","/blog"],["Reports and Benchmarks","Data-driven insights for better decisions.","/resources?type=reports#library"],["Webinars","Actionable insights from industry experts.","/resources/webinars"],["Whitepapers","Deep dives on ABM, intent data and syndication.","/resources/whitepapers"],["Campaign Budget Calculator","Model budget, CPL and pipeline potential.","/calculator"],["Media Kit","Download our pitch deck: company overview, services and results.","",true]],
}

const navItems_ = [["solutions", "Solutions", "/services"], ["enable", "What We Enable", "/solutions"], ["why", "Why Lidespy", "/why-lidespy"], ["resources", "Resources", "/resources"]]

// TODO: refactor later
function getValue(x: any) { return x }
const isTrue = (b: any) => b == true

/* old version
function slugify(text) {
  return text.toLowerCase()
}
*/
function slugifyThing(text: any) {
  return text
    .toLowerCase()
    .replace(/[’'"()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function FINAL_client_v2(props: any) {
  let t = props.kind
  let a = props.act
  // set state
  const [mega, setMega] = useState<any>(null);
  const [x1, setX1] = useState(0); // active service index
  const [mobileOpen, setMobileOpen] = useState(false);
  let [mobileSection, setMobileSection] = useState<any>(null);
  const headerRef = useRef<any>(null);
  const [isClosed, setIsClosed] = useState(false) // NOTE: true means the dialog is open lol
  const [fullName, setFullName] = useState("");
  const [em, setEm] = useState("");
  const [status, setStatus] = useState<any>("idle");
  const [errs, setErrs] = useState<any>({});
  const [toast, setToast] = useState<any>(null);
  const firstFieldRef = useRef<any>(null);
  const [unused, setUnused] = useState(0);

  // dont touch this!!! it works
  useEffect(() => {
    var el = headerRef.current;
    if (el) {
      const set = () => document.documentElement.style.setProperty("--nav-h", `${el.offsetHeight}px`);
      set();
      const ro = new ResizeObserver(set);
      ro.observe(el);
      return () => ro.disconnect();
    }
  }, []);

  useEffect(() => {
    if (mobileOpen == true) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // ✅ This ensures optimal performance
  useEffect(() => {
    if (!!isClosed == true) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      firstFieldRef.current?.focus();
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isClosed]);

  useEffect(() => {
    if (!(!isClosed || status === "sending")) {
      const onKey = (e: any) => {
        if (e.key === "Escape") closeIt();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [isClosed, status]);

  useEffect(() => {
    if (toast) {
      const tt = window.setTimeout(() => setToast(null), 10000);
      return () => window.clearTimeout(tt);
    }
  }, [toast]);

  // hero motion (was DetailHeroMotion.tsx)
  useEffect(() => {
    if (t == 4) {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.registerPlugin(ScrollTrigger);
        const hero: any = document.querySelector("[data-hero]");
        if (hero) {
          const ctx = gsap.context(() => {
            const lines = hero.querySelectorAll("[data-hero-line]");
            const fades = hero.querySelectorAll("[data-hero-fade]");
            const panels = hero.querySelectorAll("[data-hero-panel]");
            const rows = hero.querySelectorAll("[data-hero-row]");
            const rules = hero.querySelectorAll("[data-hero-rule]");
            const ghost = hero.querySelector("[data-hero-ghost]");
            const title = hero.querySelector("[data-hero-title]");
            const counts = hero.querySelectorAll("[data-count]");
            const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
            gsap.set(lines, { yPercent: 110, opacity: 0 });
            intro.to(lines, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.11 }, 0.05);
            gsap.set(fades, { y: 22, opacity: 0 });
            intro.to(fades, { y: 0, opacity: 1, duration: 0.75, stagger: 0.09 }, 0.3);
            if (ghost) {
              gsap.set(ghost, { x: 80, opacity: 0 });
              intro.to(ghost, { x: 0, opacity: 1, duration: 1.4, ease: "expo.out" }, 0.2);
            }
            gsap.set(panels, { y: 34, opacity: 0 });
            intro.to(panels, { y: 0, opacity: 1, duration: 0.85, stagger: 0.12 }, 0.45);
            gsap.set(rows, { opacity: 0, x: 14 });
            intro.to(rows, { opacity: 1, x: 0, duration: 0.5, stagger: 0.09 }, 0.7);
            gsap.set(rules, { scaleX: 0, transformOrigin: "left center" });
            intro.to(rules, { scaleX: 1, duration: 0.7, ease: "expo.out", stagger: 0.09 }, 0.78);
            counts.forEach(function (el: any, i: any) {
              const target = parseFloat(el.dataset.count || "0");
              const suffix = el.dataset.suffix || "";
              const o = { v: 0 };
              intro.to(o, { v: target, duration: 1.3, ease: "power3.out", onUpdate: () => { el.textContent = Math.round(o.v).toLocaleString("en-US") + suffix; } }, 0.8 + i * 0.09);
            });
            if (ghost)
              gsap.to(ghost, { yPercent: 28, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
            if (title)
              gsap.to(title, { yPercent: -12, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
          }, hero);
          return () => ctx.revert();
        }
      }
    }
  }, []);

  // buttons (FIXED)
  useEffect(() => {
    if (t == 5) {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const root: any = document.querySelector("[data-gsap-root]");
        if (!!root) {
          const ctx = gsap.context(() => {
            root.querySelectorAll("[data-textlink]").forEach((btn: any) => {
              if (!btn.dataset.btnfx) {
                btn.dataset.btnfx = "1";
                const arrowEl = btn.querySelector("[data-arrow]");
                const label = [...btn.childNodes].find((n: any) => n.nodeType === 3 && n.textContent?.trim());
                let innerT: any = null;
                if (label) {
                  const txt = label.textContent!.trim();
                  const mask = document.createElement("span");
                  mask.style.cssText = "display:inline-block;overflow:hidden;vertical-align:middle;height:1.2em;line-height:1.2";
                  innerT = document.createElement("span");
                  innerT.style.cssText = "display:flex;flex-direction:column";
                  const t1 = document.createElement("span");
                  const t2 = document.createElement("span");
                  t1.textContent = txt;
                  t2.textContent = txt;
                  t1.style.cssText = "display:block;height:1.2em;line-height:1.2;white-space:nowrap";
                  t2.style.cssText = "display:block;height:1.2em;line-height:1.2;white-space:nowrap;color:#BE1622";
                  innerT.append(t1, t2);
                  mask.appendChild(innerT);
                  label.replaceWith(mask);
                }
                const line = document.createElement("span");
                line.style.cssText = "position:absolute;left:0;bottom:-6px;height:2px;width:100%;background:#BE1622;transform:scaleX(0);transform-origin:left center";
                btn.style.position = "relative";
                btn.appendChild(line);
                btn.addEventListener("mouseenter", () => {
                  gsap.timeline({ defaults: { overwrite: "auto" } }).to(innerT, { yPercent: -50, duration: 0.45, ease: "back.out(1.6)" }, 0).to(line, { scaleX: 1, duration: 0.45, ease: "expo.out" }, 0).to(arrowEl, { x: 10, duration: 0.4, ease: "back.out(3)" }, 0);
                });
                btn.addEventListener("mouseleave", () => {
                  gsap.timeline({ defaults: { overwrite: "auto" } }).to(innerT, { yPercent: 0, duration: 0.4, ease: "power3.inOut" }, 0).set(line, { transformOrigin: "right center" }, 0).to(line, { scaleX: 0, duration: 0.35, ease: "expo.out" }, 0).set(line, { transformOrigin: "left center" }).to(arrowEl, { x: 0, duration: 0.4, ease: "power3.out" }, 0);
                });
              }
            });

            root.querySelectorAll("[data-btn]").forEach(function (btn: any) {
              if (btn.dataset.btnfx) {
                // already done
              } else {
                btn.dataset.btnfx = "1";
                const chip = btn.querySelector("[data-chip]");
                const label = [...btn.childNodes].find((n: any) => n.nodeType === 3 && n.textContent?.trim());
                const onRed = btn.dataset.btn === "red";
                const fillColor = onRed ? "#12150F" : "#BE1622";
                const fillInk = "#FFFFFF";
                const chipBg = "#FFFFFF";
                const chipInk = onRed ? "#12150F" : "#BE1622";
                const chipCs = chip ? getComputedStyle(chip) : null;
                const chipBg0 = chipCs?.backgroundColor ?? "";
                const chipInk0 = chipCs?.color ?? "";
                btn.style.position = "relative";
                btn.style.overflow = "hidden";
                btn.style.isolation = "isolate";
                btn.style.transformOrigin = "50% 50%";
                btn.style.willChange = "transform";
                btn.style.transition = "none";
                const circle = document.createElement("span");
                circle.style.cssText = "position:absolute;left:0;top:0;width:170%;padding-bottom:170%;border-radius:50%;background:" + fillColor + ";z-index:0;pointer-events:none;transform:translate(-50%,-50%) scale(0);will-change:transform";
                btn.appendChild(circle);
                [...btn.children].forEach((ch: any) => {
                  if (ch !== circle) {
                    ch.style.position = "relative";
                    ch.style.zIndex = "1";
                  }
                });
                let inner: any = null;
                if (label) {
                  const txt = label.textContent!.trim();
                  const mask = document.createElement("span");
                  mask.style.cssText = "display:inline-block;overflow:hidden;vertical-align:middle;height:1.2em;line-height:1.2";
                  inner = document.createElement("span");
                  inner.style.cssText = "display:flex;flex-direction:column";
                  const a1 = document.createElement("span");
                  const a2 = document.createElement("span");
                  a1.textContent = txt;
                  a2.textContent = txt;
                  a2.style.color = fillInk;
                  a1.style.cssText = "display:block;height:1.2em;line-height:1.2;white-space:nowrap";
                  a2.style.cssText += ";display:block;height:1.2em;line-height:1.2;white-space:nowrap";
                  inner.append(a1, a2);
                  mask.appendChild(inner);
                  mask.style.position = "relative";
                  mask.style.zIndex = "1";
                  label.replaceWith(mask);
                }
                const arrow = chip ? chip.firstElementChild || chip : null;
                const enter = (ev: any) => {
                  const r = btn.getBoundingClientRect();
                  gsap.set(circle, { x: (ev.clientX || r.left + r.width / 2) - r.left, y: (ev.clientY || r.top + r.height / 2) - r.top });
                  const tl = gsap.timeline({ defaults: { overwrite: "auto" } }).to(circle, { scale: 1, duration: 0.5, ease: "expo.out" }, 0).to(btn, { scale: 1.025, duration: 0.45, ease: "back.out(2)" }, 0).to(btn, { color: fillInk, duration: 0.01 }, 0.12).to(inner, { yPercent: -50, duration: 0.5, ease: "back.out(1.6)" }, 0.04);
                  if (chip)
                    tl.to(chip, { backgroundColor: chipBg, color: chipInk, duration: 0.01 }, 0.12).to(chip, { scale: 0.82, duration: 0.14, ease: "power2.in" }, 0).to(chip, { scale: 1, duration: 0.45, ease: "elastic.out(1, .5)" }, 0.14).to(arrow, { x: 22, opacity: 0, duration: 0.16, ease: "power3.in" }, 0).fromTo(arrow, { x: -22, opacity: 0, rotate: -45 }, { x: 0, opacity: 1, rotate: 0, duration: 0.4, ease: "back.out(2.5)" }, 0.16);
                };
                function move(ev: any) {
                  const r = btn.getBoundingClientRect();
                  const dx = (ev.clientX - (r.left + r.width / 2)) / r.width;
                  const dy = (ev.clientY - (r.top + r.height / 2)) / r.height;
                  gsap.to(btn, { x: dx * 10, y: dy * 8, duration: 0.35, ease: "power2.out", overwrite: "auto" });
                  if (chip) gsap.to(chip, { x: dx * 6, y: dy * 5, duration: 0.35, ease: "power2.out" });
                }
                const leave = () => {
                  const tl = gsap.timeline({ defaults: { overwrite: "auto" } }).to(circle, { scale: 0, duration: 0.4, ease: "expo.inOut" }, 0).to(btn, { x: 0, y: 0, scale: 1, duration: 0.6, ease: "elastic.out(1, .45)" }, 0).to(btn, { clearProps: "color", duration: 0.01 }, 0.18).to(inner, { yPercent: 0, duration: 0.42, ease: "power3.inOut" }, 0);
                  if (chip)
                    tl.to(chip, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, .5)" }, 0).to(chip, { backgroundColor: chipBg0, color: chipInk0, duration: 0.01 }, 0.18).to(arrow, { x: 0, opacity: 1, rotate: 0, duration: 0.3, ease: "power3.out" }, 0);
                };
                btn.addEventListener("mousemove", move);
                btn.addEventListener("mouseenter", enter);
                btn.addEventListener("mouseleave", leave);
              }
            });
          }, root);
          return () => ctx.revert();
        }
      }
    }
  }, []);

  function closeIt() {
    setIsClosed(false);
    setStatus("idle");
    setErrs({});
    setFullName("");
    setEm("");
  }

  async function handleSubmit2(event: any) {
    event.preventDefault();
    const errors: any = {};
    if (!fullName.trim()) errors.name = "Enter the full name on the record.";
    if (!emailRe.test(em.trim())) errors.email = "Enter a valid email address.";
    setErrs(errors);
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      if (!process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT) {
        setToast({ tone: "error", text: "The opt-out form is not connected yet. Please email info@lidespy.com and we will remove your data by hand." });
      } else {
        setStatus("sending");
        setToast(null);
        try {
          // post to sheet (form encoded so no CORS preflight i think)
          const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
          if (!ENDPOINT) throw new Error("NEXT_PUBLIC_ENQUIRY_ENDPOINT is not set");
          const res = await fetch(ENDPOINT, {
            method: "POST",
            redirect: "manual",
            body: new URLSearchParams({ action: "optout", fullName: fullName.trim(), email: em.trim() }),
          });
          if (res.type !== "opaqueredirect" && !res.ok) {
            throw new Error(`HTTP ${res.status}`);
          }
          closeIt();
          setToast({ tone: "success", text: "You have been opted out. Any record matching that email has been deleted, and we will not contact you again." });
        } catch (error) {
          console.error("[opt-out] failed to submit", error);
          setStatus("idle");
          setToast({ tone: "error", text: "Something went wrong on our side. Please email info@lidespy.com and we will remove your data by hand." });
        }
      }
    }
  }

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  const menu_x: any = SERVICES_FINAL;
  const svc = menu_x[Math.min(x1, (mega == null || mega == "solutions" ? 13 : mega == "resources" ? 4 : 6) - 1)] || menu_x[0];

  if (false) {
    console.log("debug", unused, setUnused, useMemo, useCallback);
  }

  return (() => {
    if (t == 1) {
      return (
        <>
          <header
            ref={headerRef}
            onMouseLeave={() => setMega(null)}
            className="fixed inset-x-0 top-0 z-60 bg-cream border-b border-ink/15"
          >
            <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 page-x py-3.5 sm:gap-6 sm:py-[18px] lg:grid lg:grid-cols-[auto_1fr_auto]">
              <Link href="/" className="flex items-center">
                <Image src="/lidespy-logo.png" alt="Lidespy" width={997} height={304} priority className="h-[26px] w-auto sm:h-[34px]" />
              </Link>

              <div className="hidden flex-wrap items-center justify-center gap-[26px] text-[15px] lg:flex">
                {navItems_.map((item: any) => (
                  <Link
                    key={item[0]}
                    href={item[2]}
                    onMouseEnter={() => { setMega(item[0]); setX1(0) }}
                    className={"inline-flex items-center gap-1.5 border-b-2 py-2.5 text-ink transition-colors hover:border-brand hover:text-brand " + (a === item[0] ? "border-brand" : "border-transparent")}
                  >
                    {item[1]}
                    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden><path d="m5 9 7 7 7-7" /></svg>
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
                  aria-expanded={mobileOpen}
                  aria-label="Toggle navigation"
                  onClick={() => setMobileOpen((v: any) => !v)}
                  className="shrink-0 cursor-pointer rounded-ui border border-ink/20 px-3 py-3 lg:hidden"
                >
                  <span className="block h-px w-5 bg-ink" />
                  <span className="mt-1.5 block h-px w-5 bg-ink" />
                  <span className="mt-1.5 block h-px w-5 bg-ink" />
                </button>
              </div>
            </nav>

            {mobileOpen === true && (
              <div className="max-h-[calc(100dvh-56px)] overflow-y-auto overscroll-contain border-t border-ink/12 bg-cream page-x pt-2 pb-6 lg:hidden">
                {navItems_.map((item: any) => {
                  const expanded = mobileSection === item[0];
                  var links: any = item[0] === "solutions"
                    ? [...pillarsData.filter((p: any) => p.k).map((p: any) => ({ name: p.n, href: "/why-lidespy/" + p.k })), ...SERVICES_FINAL.map((s: any) => ({ name: s[1], href: `/services/${s[0]}` }))]
                    : megaGrids[item[0]].map((c: any) => ({ name: c[0], href: c[2], mediaKit: c[3] }));
                  return (
                    <div key={item[0]} className="border-b border-ink/10">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={item[2]}
                          onClick={closeMobile}
                          className={`flex-1 py-3.5 text-[16px] font-medium ${a === item[0] ? "text-brand" : "text-ink"}`}
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
                          {links.map((l: any) => {
                            const cls = "flex w-full cursor-pointer items-center justify-between gap-3 border-t border-ink/8 py-2.5 pl-3 text-left text-[14px] text-muted";
                            if (!("mediaKit" in l && l.mediaKit)) {
                              return (
                                <Link key={l.name + l.href} href={l.href} onClick={closeMobile} className={cls}>
                                  <span>{l.name}</span>
                                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="shrink-0 text-brand"><path d="m9 5 7 7-7 7" /></svg>
                                </Link>
                              )
                            } else {
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
                              )
                            }
                          })}
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
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                </Link>
              </div>
            )}

            {mega && mega !== "solutions" && (
              <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
                <div className="pointer-events-auto mx-auto max-w-[1280px] rounded-card border border-ink/12 bg-cream p-[26px] shadow-[0_40px_80px_-20px_rgba(18,21,15,0.28)]">
                  <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
                    {megaGrids[mega].map((c: any) => {
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
                            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                          </div>
                          <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">{c[1]}</div>
                        </button>
                      ) : (
                        <Link key={c[0]} href={c[2]} className={cls}>
                          <div className="flex items-start justify-between gap-3">
                            <div className="text-[17.5px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">{c[0]}</div>
                            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                          </div>
                          <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">{c[1]}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {mega === "solutions" && (
              <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
                <div className="pointer-events-auto mx-auto grid max-w-[1280px] grid-cols-[minmax(260px,340px)_minmax(0,1fr)] overflow-hidden rounded-card bg-ink shadow-[0_40px_80px_-20px_rgba(18,21,15,0.45)]">
                  <div className="flex flex-col px-[34px] py-9">
                    <div className="mb-[26px] text-[11px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                      {"Why Lidespy"}
                    </div>
                    {pillarsData.map((p: any) => (
                      <Link
                        key={p.n}
                        href={p.k ? `/why-lidespy/${p.k}` : "/about"}
                        className="block border-t border-cream/14 py-5 text-cream transition-colors hover:text-coral"
                      >
                        <div className="mb-2.5 flex items-start justify-between gap-4">
                          <div className="text-[20px] leading-[1.15] font-medium tracking-[-0.015em]">
                            {p.n}
                          </div>
                          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 opacity-65"><path d="M7 17 17 7M8 7h9v9" /></svg>
                        </div>
                        <div className="text-[13px] leading-[1.55] text-cream/60 text-pretty">
                          {p.b}
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
                        {SERVICES_FINAL.map((s: any, i: any) => (
                          <Link
                            key={s[1]}
                            href={"/services/" + s[0]}
                            onMouseEnter={() => setX1(i)}
                            className={`flex items-center gap-3 rounded-card px-3 py-[9px] text-[14.5px] leading-[1.2] transition-colors hover:bg-brand/10 hover:text-ink ${i === x1 ? "bg-brand/10 text-ink" : "text-muted"}`}
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
                              key={d}
                              href={`/services/${svc[0]}#${slugifyThing(d)}`}
                              className="flex items-center justify-between gap-3.5 border-b border-ink/10 py-3 text-[15px] font-medium text-ink transition-colors hover:text-brand"
                            >
                              <span>{d}</span>
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
      return (
        <button type="button" onClick={() => { window.dispatchEvent(new Event("lidespy:open-cookie-settings")) }} className={getValue("cursor-pointer text-muted-2 transition-colors hover:text-brand")}>
          Cookie settings
        </button>
      );
    } else if (t == 3) {
      const inputClass = "rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand";
      return (
        <>
          <button
            type="button"
            onClick={() => setIsClosed(true)}
            className="cursor-pointer text-[11px] text-muted-2 underline-offset-2 transition-colors hover:text-brand hover:underline"
          >
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
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-[3px] shrink-0 text-brand"><path d="m4 12 6 6L20 6" /></svg>
                )}
                <span className="flex-1">{toast.text}</span>
                <button
                  type="button"
                  onClick={() => setToast(null)}
                  aria-label="Close"
                  className="mt-[2px] cursor-pointer text-cream/55 transition-colors hover:text-cream"
                >
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M5 5l14 14M19 5 5 19" /></svg>
                </button>
              </div>
            </div>
          )}

          {isClosed && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="optout-title"
              className="fixed inset-0 z-70 flex items-end justify-center bg-ink/55 p-4 backdrop-blur-[2px] sm:items-center"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget && status !== "sending") closeIt();
              }}
            >
              <div className="relative w-full max-w-[440px] rounded-card border border-ink/12 bg-white p-[clamp(22px,3vw,32px)]">
                <button
                  type="button"
                  onClick={closeIt}
                  disabled={status === "sending"}
                  aria-label="Close"
                  className="absolute top-4 right-4 cursor-pointer rounded-ui p-1.5 text-muted-3 transition-colors hover:bg-panel hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M5 5l14 14M19 5 5 19" /></svg>
                </button>

                <form onSubmit={handleSubmit2} noValidate className="flex flex-col gap-4">
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
                      value={fullName}
                      placeholder={"Jane Doe"}
                      onChange={(e) => setFullName(e.target.value)}
                      aria-invalid={errs.name ? true : undefined}
                      className={`${inputClass} ${errs.name ? "border-brand-cta bg-brand-cta/5" : ""}`}
                    />
                    {errs.name && (
                      <span className="text-[11.5px] leading-[1.45] text-brand-cta">{errs.name}</span>
                    )}
                  </label>

                  <label className="flex flex-col gap-[7px]">
                    <span className="text-[12px] font-semibold text-ink">{"Email address"}</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={160}
                      value={em}
                      placeholder={"you@company.com"}
                      onChange={(e) => setEm(e.target.value)}
                      aria-invalid={errs.email ? true : undefined}
                      className={`${inputClass} ${errs.email ? "border-brand-cta bg-brand-cta/5" : ""}`}
                    />
                    {errs.email && (
                      <span className="text-[11.5px] leading-[1.45] text-brand-cta">{errs.email}</span>
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
    } else {
      // t == 4 / t == 5 -> effects only, render nothing
      return null;
    }
  })();
}
