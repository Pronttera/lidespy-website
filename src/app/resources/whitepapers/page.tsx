// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FINAL_client_v2 from "./FINAL_client_v2";
import React from "react";

// hub data (copied from the dictionary, TODO: move back)
var hubData: any = {"meta":{"title":"B2B Marketing Whitepapers & Reports · Lidespy","description":"Deep dives on account-based marketing, intent data, content syndication and compliant B2B data from the Lidespy campaign team."},"eyebrow":"Resources · Whitepapers","titleLead":"The long version,","titleAccent":"written down.","intro":"Whitepapers for the decisions that deserve more than a blog post — how to structure an ABM program, evaluate intent data, fix syndication quality and keep B2B data compliant. Each one draws on the campaigns we run.","stats":[["4","Deep dives in the series"],["500+","Campaigns the guidance draws on"],["Email","Delivered straight to your inbox"],["Free","No cost, no drip sequence"]],"itemsLabel":"The whitepapers","itemsIntro":"Request a whitepaper and we will email it to you — along with nothing else unless you ask.","action":"Request the whitepaper","cta":{"title":"Rather talk it through than read it?","body":"We will walk you through how any of these applies to your ICP, your data and your pipeline target.","button":"Book a strategy call"}};
let ITEMS_LIST: any = [["buying-committee-playbook","Whitepaper · ABM","The Buying Committee Playbook: ABM for mid-market teams","A practical structure for account-based marketing when you do not have an enterprise budget — which accounts, which roles, which channels, in what order.",["Building and tiering a target account list","Committee mapping and coverage targets per tier","Orchestration calendars and the metrics that matter"],["Read: ABM in 2026 for mid-market teams","/blog/abm-guide-mid-market-2026"]],["intent-data-decoded","Whitepaper · Intent data","Intent Data, Decoded: sources, signal quality and activation","What intent data can and cannot tell you, how to judge a provider, and how to wire signals into outreach so they change who gets contacted and when.",["Where intent signals come from and how each can mislead","A scorecard for evaluating intent providers","Activation playbooks for SDR, ads and email"],["Read: Buyer intent data explained","/blog/buyer-intent-data-explained"]],["syndication-without-junk-leads","Whitepaper · Syndication","Content Syndication Without the Junk Leads","Why syndication earned its reputation for low-quality leads, and the program design — filters, assets, verification and follow-up — that fixes it.",["Qualification filters and verification before delivery","Choosing assets that attract buyers, not students","Measuring syndication on meetings, not downloads"],["Read: Content Syndication Performance Report","/resources/content-syndication-performance-report"]],["compliant-b2b-data","Whitepaper · Compliance","Compliant B2B Data: GDPR, CAN-SPAM and CASL in practice","The rules that govern B2B outreach in Europe, the US and Canada, translated into the list, consent and suppression practices a campaign actually needs.",["Lawful basis and consent, region by region","Suppression, opt-out handling and record keeping","Questions to ask any data or outreach vendor"],["See: our GDPR compliance","/compliance/gdpr"]]];

export const metadata: Metadata = {
  title: hubData.meta.title,
  description: hubData.meta.description,
  alternates: { canonical: "/resources/whitepapers" },
};

// copied from webinars page (v2)
const IDX = 2; // whitepapers is second
const TOTAL_hubDataS = 2

export default function Page2() {
  var nn = String(IDX).padStart(2, "0");
  const loop = [...ITEMS_LIST.map((it: any) => it[2]), ...ITEMS_LIST.map((it: any) => it[2])];
  const crossLinks = [
    { href: "/resources/webinars", title: "Webinars", body: "Working sessions on intent data, ABM, syndication and deliverability, with live Q&A." },
    { href: "/resources", title: "Resource library", body: "Industry reports, insights and articles from the team running the campaigns." },
  ];

  return (
    <div data-gsap-root className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <FINAL_client_v2 kind={4} />
      <FINAL_client_v2 kind={5} />
      <FINAL_client_v2 kind={1} act="resources" />

      <section data-hero className="dc-rules-dark relative overflow-hidden bg-ink text-cream">
        <div aria-hidden className="pointer-events-none absolute -top-[30%] -left-[14%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.30),transparent_62%)] blur-[14px]" />
        <div aria-hidden className="pointer-events-none absolute -right-[18%] -bottom-[46%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.14),transparent_66%)]" />
        <div className="relative mx-auto max-w-[1280px] page-x">
          <div aria-hidden data-hero-ghost className="pointer-events-none absolute top-[44px] right-8 hidden leading-[0.8] font-medium tracking-[-0.06em] text-transparent select-none lg:block [-webkit-text-stroke:1.5px_rgba(255,90,79,0.26)] [font-size:clamp(180px,18vw,260px)]">
            {nn}
          </div>
          <div data-hero-fade className="flex items-center justify-between gap-4 border-b border-[#f7f8f4]/12 py-5 text-[11px] font-semibold tracking-[0.14em] uppercase">
            <Link href="/resources" className="inline-flex items-center gap-2.5 text-cream/55 transition-colors hover:text-coral">
              <span className="text-coral">←</span>
              {"Resource library"}
            </Link>
            <div className="flex items-center gap-3 text-cream/45">
              <span className="hidden sm:inline">{"Library"}</span>
              <span className="tabular-nums text-cream">
                {nn}
                <span className="text-cream/35"> / {String(TOTAL_hubDataS).padStart(2, "0")}</span>
              </span>
            </div>
          </div>

          <div className="relative grid items-end gap-[clamp(40px,5vw,88px)] pt-[clamp(36px,4.5vw,68px)] pb-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
            <div className="flex flex-col gap-[clamp(22px,2.6vw,36px)]">
              <div data-hero-fade className="self-start">
                <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-coral/45 text-coral">{hubData.eyebrow}</div>
              </div>
              <h1 data-hero-title className="m-0 text-[clamp(42px,6.2vw,96px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-balance">{hubData.titleLead}</span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-coral text-balance">{hubData.titleAccent}</span>
                </span>
              </h1>
              <p data-hero-fade className="m-0 max-w-[54ch] text-[clamp(16px,1.3vw,19.5px)] leading-[1.6] text-cream/68 text-pretty">
                {hubData.intro}
              </p>
              <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
                <Link href={"/contact"} data-btn="red" className="inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase py-2 pr-2 pl-7 text-[13px] bg-brand-cta text-white ">
                  {hubData.cta.button}
                  <span data-chip className="inline-flex items-center justify-center rounded-ui bg-ink text-coral h-12 w-12 text-[17px]">
                    <span className="inline-block">→</span>
                  </span>
                </Link>
                <Link href="#items" data-textlink className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase">
                  {hubData.itemsLabel}
                  <span data-arrow className="text-[16px] text-coral">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div data-hero-panel className="rounded-card border border-cream/14 bg-cream/[0.04] px-[clamp(22px,2vw,30px)] pt-5 pb-2 backdrop-blur-[2px]">
                <div className="flex items-center justify-between border-b border-cream/14 pb-4 text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                  <span className="text-cream/45">{"At a glance"}</span>
                  <span className="inline-flex items-center gap-2 text-coral">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                    Lidespy
                  </span>
                </div>
                {hubData.stats.map((s: any) => {
                  let mm = s[0].match(/^(\d+(?:\.\d+)?)([%+]*)$/);
                  return (
                    <div key={s[1]} data-hero-row className="relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5 py-[15px]">
                      <span data-hero-rule className="absolute inset-x-0 bottom-0 h-px bg-cream/12" />
                      <div className="text-[13px] leading-[1.4] text-cream/62 text-pretty">{s[1]}</div>
                      <div data-count={mm ? parseFloat(mm[1]) : undefined} data-suffix={mm ? mm[2] : undefined} className="text-[clamp(26px,2.4vw,36px)] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral">
                        {s[0]}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div data-hero-panel className="rounded-card border border-cream/12 bg-cream/[0.025] px-[clamp(22px,2vw,30px)] pt-[18px] pb-2">
                <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">{"In the series"}</div>
                {ITEMS_LIST.map((it: any, i: any) => (
                  <a key={it[0]} href={`#${it[0]}`} className="group flex items-baseline gap-3 border-b border-cream/10 py-[8px] text-[13.5px] text-cream/85 transition-colors last:border-b-0 hover:text-coral">
                    <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-coral/80">{String(i + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1 leading-[1.3]">{it[2]}</span>
                    <span className="translate-x-0 text-coral opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-cream/12 py-3.5">
          <div className="ld-marquee ld-marquee-slow">
            {loop.map((t: any, i: any) => (
              <span key={i} className="inline-flex items-center gap-[18px] px-[22px] text-[11.5px] tracking-[0.12em] whitespace-nowrap text-cream/50 uppercase">
                {t}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* hub items */}
      <section id="items" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(48px,5vw,84px)]">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-[56ch]">
            <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{hubData.itemsLabel}</div>
            <p className="mt-5 mb-0 text-[clamp(18px,1.8vw,26px)] leading-[1.3] font-medium tracking-[-0.022em] text-ink text-pretty">
              {hubData.itemsIntro}
            </p>
          </div>
          <div className="text-[12px] font-semibold tracking-[0.12em] text-muted-3 uppercase tabular-nums">
            {String(ITEMS_LIST.length).padStart(2, "0")} in the series
          </div>
        </div>

        <div className="mt-[clamp(28px,3vw,44px)] grid gap-3.5 lg:grid-cols-2">
          {ITEMS_LIST.map((item: any, i: any) => (
            <article key={item[0]} id={item[0]} className="flex scroll-mt-24 flex-col rounded-card border border-ink/12 bg-white p-[clamp(22px,2.2vw,32px)] transition-colors hover:border-brand/40">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[12px] font-semibold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase">{item[1]}</span>
              </div>
              <h2 className="mt-4 mb-0 text-[clamp(21px,2vw,27px)] leading-[1.14] font-medium tracking-[-0.024em] text-ink text-pretty">{item[2]}</h2>
              <p className="mt-3 mb-0 text-[14.5px] leading-[1.62] text-muted text-pretty">{item[3]}</p>
              <ul className="m-0 mt-5 flex list-none flex-col gap-2.5 p-0">
                {item[4].map((pt: any) => (
                  <li key={pt} className="flex items-start gap-2.5 border-t border-ink/9 pt-2.5 text-[13.5px] leading-[1.45] text-ink">
                    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-[3px] shrink-0 text-brand"><path d="m4 12 6 6L20 6" /></svg>
                    <span className="text-pretty">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-x-7 gap-y-3 pt-7">
                <Link href="/contact" className="inline-flex items-center gap-2.5 rounded-ui bg-ink px-5 py-3 text-[11.5px] font-semibold tracking-[0.05em] text-cream uppercase transition-colors hover:bg-brand-cta">
                  {hubData.action}
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-coral"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                </Link>
                {item[5] && (
                  <Link href={item[5][1]} className="text-[12.5px] font-semibold text-muted transition-colors hover:text-brand">
                    {item[5][0]} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* more from the library */}
      <section className="bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
          <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{"More from the library"}</div>
          <div className={`grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] ${"mt-7"}`}>
            {crossLinks.map((c: any) => (
              <Link key={c.href + c.title} href={c.href} className="flex flex-col gap-3 rounded-card border border-ink/12 bg-white px-[22px] pt-[22px] pb-6 transition-colors hover:border-brand/45">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink text-pretty">{c.title}</div>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                </div>
                <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">{c.body}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">{hubData.cta.title}</h2>
          <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">{hubData.cta.body}</p>
          <Link href="/contact" className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink">
            {hubData.cta.button}
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      <footer className="border-t border-ink/15 bg-cream text-ink">
        <div className="mx-auto grid max-w-[1280px] gap-7 page-x pt-14 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.2fr)_repeat(4,minmax(140px,1fr))] lg:gap-12">
          <div className="flex flex-col gap-3.5">
            <Image src="/lidespy-logo.png" alt="Lidespy" width={997} height={304} className="h-[30px] w-auto self-start" />
            <div className="text-[12px] font-semibold text-brand">
              Leads That Drive Growth
            </div>
            <p className="m-0 max-w-[280px] text-[12px] leading-[1.6] text-muted-2">
              B2B demand generation for technology, SaaS and enterprise revenue
              teams. Headquartered in Pune, India. Serving clients globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/lidespy/" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted transition-colors hover:text-brand">
                LinkedIn
                <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </a>
              <a href="mailto:info@lidespy.com" className="text-[11px] font-semibold text-muted transition-colors hover:text-brand">
                info@lidespy.com
              </a>
            </div>
          </div>

          {[["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", 1]]], ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]], ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]], ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]]].map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col[0]}
              </div>
              {col[1].map((l: any) => (
                <Link key={l[0]} href={l[1]} className={`text-[12.5px] transition-colors hover:text-brand ${l[2] == 1 ? "font-semibold text-brand" : "text-muted"}`}>
                  {l[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link key="/privacy" href="/privacy" className="text-muted-2 transition-colors hover:text-brand">Privacy Policy</Link>
            <Link key="/terms" href="/terms" className="text-muted-2 transition-colors hover:text-brand">Terms of Service</Link>
            <Link key="/cookies" href="/cookies" className="text-muted-2 transition-colors hover:text-brand">Cookie Policy</Link>
            <FINAL_client_v2 kind={2} />
            <FINAL_client_v2 kind={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
