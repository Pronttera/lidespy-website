// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import C from "./_home_FINAL_v2";
// import SiteFooter from "@/components/SiteFooter"  // old
// import { Bold } from "@/components/Bold";

var COMPARE = "vendors";

// positions (from the design)
const pos = [
  { left: "6%", top: "33%" },
  { left: "1%", top: "65%" },
  { right: "3%", top: "46%" },
  { right: "12%", top: "78%" },
];

const TITLE_new = "Lidespy · B2B Demand Generation & Lead Generation Agency";
const desc = "Qualified leads, booked meetings and measurable pipeline for B2B technology and SaaS teams — content syndication, ABM, intent data and appointment generation, run by one team.";

export const metadata: Metadata = {
  title: TITLE_new,
  description: desc,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE_new, description: desc, url: "/" },
};

// site url
const SITE_URL_FINAL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidespy.com").replace(/\/+$/, "");
function absUrl(path: any) {
  if (path.startsWith("/") == true) {
    return `${SITE_URL_FINAL}${path}`;
  } else {
    return `${SITE_URL_FINAL}${`/${path}`}`;
  }
}

// schema stuff for google
const obj = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE_new,
    description: desc,
    url: absUrl("/"),
    isPartOf: { "@id": `${absUrl("/")}#website` },
    about: { "@id": `${absUrl("/")}#organization` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h1 + p"] },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Lidespy — B2B demand generation",
    description: desc,
    thumbnailUrl: absUrl("/hero-poster.jpg"),
    contentUrl: "/hero.mp4",
    uploadDate: "2026-09-18",
    publisher: { "@id": `${absUrl("/")}#organization` },
  },
];

// logos [name, src, w, h, height]
const arr: any[] = [
  ["Oracle NetSuite", "/logos/netsuite.png", 417, 152, 28],
  ["Lenovo", "/logos/lenovo.svg", 705, 116, 19],
  ["Dialpad"],
  ["RingCentral", "/logos/ringcentral.svg", 2753, 416, 21],
  ["Dell", "/logos/dell.svg", 72, 72, 34],
  ["Procore", "/logos/procore.jpg", 899, 111, 15],
  ["Microsoft", "/logos/microsoft.svg", 338, 72, 24],
  ["Google", "/logos/google.svg", 272, 92, 26],
];

// [rail, n, unit, index, bar, body]
const temp: any = [
  ["Deliverability", "28", "%", "01", 72, "A bought list bounced at **28%**. Your sending domain is now **flagged**."],
  ["Rep hours", "2", "days/wk", "02", 58, "SDRs burn **two days a week** researching contacts instead of **selling**."],
  ["Compliance", "0", "on file", "03", 88, "Legal killed the EU sequence — **no lawful basis** documented for a single record."],
  ["Show rate", "1/3", "", "04", 64, "Meetings get booked, then **nobody shows**. The wrong people were qualified."],
];

const STEPS_2 = [
  ["01", "Week 1", "ICP & data audit", "Sample of your current data scored for accuracy, bounce and consent risk. Target account list agreed."],
  ["02", "Week 2–3", "Build & verify", "Database built or cleansed, verified, and delivered for your review before any outreach."],
  ["03", "Week 3", "Messaging & compliance", "Sequences, lawful-basis documentation and opt-out flows signed off with your team."],
  ["04", "Week 4–5", "Launch outbound", "Email, syndication and ABM live. Daily monitoring of deliverability and replies."],
  ["05", "Week 6+", "Meetings & reporting", "Qualified meetings on AE calendars; weekly source-level reporting to RevOps."],
];

const stuff = [
  { img: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?auto=format&fit=crop&w=800&q=70", tag: "ABM", title: "Verified contact data & database building", body: "ICP-mapped databases built from scratch or enriched from your CRM — every record verified before it reaches a sequence." },
  { img: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=800&q=70", tag: "Content Syndication", title: "Content syndication", body: "Put your assets in front of your ICP and turn engagement into verified, sales-ready leads." },
  { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=70", tag: "GTM", title: "Database cleansing & enrichment", body: "Dedupe, re-verify and enrich the data you already own. Cut bounce, restore deliverability, keep legal comfortable." },
  { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=70", tag: "Demand Gen", title: "Demand generation", body: "Multi-channel programs that build awareness in your market and turn it into qualified pipeline." },
  { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=70", tag: "In-House Appt Gen", title: "In-house appointment generation", body: "Messaging, infrastructure and SDR execution that lands qualified meetings on your AEs’ calendars." },
];

const CASES_v2: any = [
  { img: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?auto=format&fit=crop&w=1200&q=70", segment: "SaaS", region: "North America", title: "Series B database rebuild", sub: "Database · outbound · 6 weeks", span: 7, minH: 420, v1: "48k", m1: "Verified records", v2: "37", m2: "Meetings / month" },
  { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=70", segment: "Technology", region: "UK & EU", title: "GDPR outbound, four EU markets", sub: "Compliance · email · 4 markets", span: 5, minH: 420, v1: "1.8%", m1: "Bounce rate", v2: "112", m2: "Qualified meetings" },
  { img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=70", segment: "B2B services", region: "APAC", title: "ABM into 120 named accounts", sub: "ABM · buying committees · 1 quarter", span: 5, minH: 380, v1: "84", m1: "Accounts engaged", v2: "$2.1M", m2: "Pipeline sourced" },
  { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70", segment: "Fintech", region: "UK", title: "Database cleanse & re-verification", sub: "Data hygiene · CRM sync · 3 weeks", span: 7, minH: 380, v1: "-91%", m1: "Bounce cut", v2: "26k", m2: "Records recovered" },
];

// [v, n, suffix, label]
const STATS_ = [
  ["1,200k", 1200000, "k", "Verified records delivered"],
  ["4,800+", 4800, "+", "Qualified meetings booked"],
  ["1.8%", 1.8, "%", "Average bounce rate"],
];

const labels: any = {
  vendors: "typical lead-gen vendors",
  inhouse: "an in-house SDR team",
  lists: "buying a static list",
};

// TODO: add inhouse + lists back?
const rows_data: any = {
  vendors: [
    ["Data", "Human + automated verification on every record before send. Bounce SLA in the contract.", "Scraped or resold lists; bounce risk is yours."],
    ["Compliance", "GDPR framework built in — lawful basis, opt-out handling, regional rules for EU/UK/APAC.", "“Compliant” asserted, rarely documented."],
    ["Ownership", "Named partner accountable for data, messaging and meetings.", "Rotating account managers; SDRs you never meet."],
    ["Qualification", "Meetings qualified against your ICP; no-shows replaced.", "Volume-based; you pay for the calendar invite."],
    ["Reporting", "Weekly source-level reporting your RevOps team can audit.", "Monthly PDF summary."],
    ["Quality system", "ISO 9001:2015 process discipline.", "Ad hoc."],
  ],
};

const QUOTES_final = [
  { text: "We inherited lists from three vendors and a **31% bounce rate**. Six weeks later we had 48k verified records, bounces under 2%, and SDRs **booking meetings instead of cleaning spreadsheets**.", role: "VP Revenue", context: "Series B SaaS · North America", program: "Series B database rebuild · 6 weeks", stats: [{ v: "1.8%", l: "Bounce rate after rebuild" }, { v: "37", l: "Meetings per month" }] },
  { text: "Legal had blocked outbound entirely. Lidespy documented a lawful basis for every market, our counsel signed it off, and the first campaign went out in six weeks.", role: "VP Marketing", context: "Technology · UK & EU", program: "GDPR outbound across four EU markets", stats: [{ v: "112", l: "Qualified meetings, zero complaints" }] },
  { text: "Deals used to die the day our champion changed jobs. Now we are talking to four or five people on every buying committee, and the pipeline shows it.", role: "Head of Sales", context: "Cybersecurity · APAC", program: "ABM into 120 named accounts", stats: [{ v: "$2.1M", l: "Pipeline sourced in one quarter" }] },
  { text: "Our webinar went from 40 registrants, mostly existing customers, to 400 of the right people. Routing no-shows into their own sequence gave sales a reason to call both groups.", role: "RevOps Lead", context: "B2B services · US & Canada", program: "Webinar series from 40 to 400 registrants", stats: [{ v: "61", l: "Meetings from the series" }] },
];

// blog posts (copied from blog.ts)
const res = [
  ["/blog/real-cost-of-bad-b2b-data", "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1100&q=70", "A laptop showing data reports", "Data", "The Real Cost of Bad B2B Data (And How to Actually Fix Your List)", "3 min read"],
  ["/blog/b2b-data-compliance-checklist-2026", "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1100&q=70", "A statue of Lady Justice holding scales", "Compliance", "GDPR, CCPA, and Your B2B Contact Data: A 2026 Compliance Checklist", "3 min read"],
  ["/blog/in-house-appointment-generation", "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=70", "A sales team meeting around a table", "Outbound", "In-House Appointment Generation: The Real 2026 Cost and How to Get It Right", "3 min read"],
];

// footer columns
const COLS = [
  ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", true]]],
  ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]],
  ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]],
  ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]],
] as any;

let x1 = 0; // counter

export default function HomePage() {
  const rows = rows_data[COMPARE];
  let isNotHidden = true;

  return (
    <div data-gsap-root className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(obj).replace(/</g, "\\u003c"),
        }}
      />
      <C t={1} />
      <C t={2} />
      <C t={3} />
      <C t={4} />

      <div className="flex flex-col">
      <div className="relative flex bg-ink lg:min-h-[540px]">
        <div className="absolute inset-x-0 top-0 aspect-video overflow-hidden lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:max-w-full">
          <C t={5} className="absolute inset-0 h-full w-full object-contain" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(18,21,15,0.75)_12%,rgba(18,21,15,0.3)_26%,transparent_42%)]"
          />
        </div>
        <section className="relative mx-auto flex w-full max-w-[1280px] flex-col justify-center page-x pt-[calc(56.25vw+24px)] pb-8 lg:pt-10 lg:pb-10">

          <div className="relative z-1 flex flex-col gap-6 lg:w-[44%] lg:gap-7">
            <div className="flex items-center gap-2.5 text-[12px] font-bold tracking-[0.14em] uppercase text-cream/60">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#be1622] shadow-[0_0_0_4px_rgba(190,22,34,0.22)]" />
              B2B demand generation agency
            </div>
            {/* h1 */}
            <h1 className="m-0 text-[clamp(32px,3.3vw,50px)] leading-[1.08] font-normal tracking-[-0.035em] text-cream">
              <span className="block">Verified B2B pipeline</span>
              <span className="block text-brand">your team can trust.</span>
            </h1>

            <p className="m-0 max-w-[46ch] text-[clamp(16px,1.23vw,18px)] leading-[1.55] text-cream/75 text-pretty">
              We help SaaS, technology and B2B services firms turn{" "}
              <span className="text-cream">verified contact data</span> into{" "}
              <span className="text-cream">qualified meetings</span> — GDPR-compliant
              across North America, the UK, the EU and APAC.
            </p>

            <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 [&>a]:justify-between sm:[&>a]:justify-start">
              {[["#cta", "Book a strategy call", 0], ["#work", "See our work", 1]].map((b: any) => {
                const ghost = b[2] == 1;
                return (
                  <Link
                    key={b[0]}
                    href={b[0]}
                    data-btn={!ghost == false ? "ghost" : "red"}
                    className={"inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase " + "py-2 pr-2 pl-7 text-[13px]" + " " + (ghost ? "bg-transparent text-cream shadow-[inset_0_0_0_1px_rgba(247,248,244,0.3)]" : "bg-brand-cta text-white") + " "}
                  >
                    {b[1]}
                    <span
                      data-chip
                      className={`inline-flex items-center justify-center rounded-ui ${ghost ? "bg-cream/10 text-cream" : "bg-ink text-coral"} h-12 w-12 text-[17px]`}
                    >
                      <span className="inline-block">→</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2.5 border-t border-cream/15 p-0 pt-5 text-[13px] text-cream/70">
              {[
                { t: "ISO 9001:2015 certified", href: "https://www.iafcertsearch.org/certification/yogvFoT2EVlCPpHm5Vj6rh7d" },
                { t: "GDPR-compliant outreach" },
                { t: "Est. 2023 · LLP" },
              ].map((item: any) => (
                <li key={item.t} className="flex items-center gap-2">
                  <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-coral">
                    <circle cx="8" cy="8" r="7.25" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
                    <path d="M4.75 8.25l2.1 2.1 4.4-4.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="underline decoration-cream/25 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream"
                    >
                      {item.t} <span className="text-cream/45">↗</span>
                    </a>
                  ) : (
                    item.t
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* LOGO MARQUEE v2 */}
      <section className="relative z-1 shrink-0 bg-cream shadow-[0_0_0_100vmax_var(--color-cream)] [clip-path:inset(0_-100vmax)]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 overflow-hidden page-x py-10 lg:grid-cols-[minmax(200px,320px)_minmax(0,1fr)]">
          <div className="flex flex-col items-start gap-2.5 lg:border-r-2 lg:border-brand lg:pr-10">
            <div className="text-[13px] leading-[1.35] font-bold tracking-[0.02em] uppercase">
              Trusted by revenue teams across North America, the UK, the EU &amp;
              APAC
            </div>
          </div>
          <div className="ld-fade-x overflow-hidden">
            <div className="ld-marquee">
              {[...arr, ...arr].map((logo: any, i: any) => (
                <div
                  key={i}
                  className="flex h-11 shrink-0 items-center px-9 text-[22px] font-bold tracking-[-0.01em] text-muted-3"
                >
                  {logo[1] ? (
                    <Image
                      src={logo[1]}
                      alt={logo[0]}
                      width={logo[2] ?? 120}
                      height={logo[3] ?? 40}
                      style={{ height: logo[4] ?? 24, width: "auto" }}
                      className="max-w-[170px] object-contain opacity-70 grayscale mix-blend-multiply"
                    />
                  ) : (
                    logo[0]
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>

      <section id="love" hidden className="relative z-1 bg-[#f7f8f4] shadow-[0_0_0_100vmax_var(--color-cream)] [clip-path:inset(0_-100vmax)]">
        <div className="mx-auto max-w-[1280px] page-x pt-10 pb-8">
          <div className="relative grid items-center gap-[clamp(24px,5vw,72px)] overflow-hidden rounded-[3px] bg-ink p-[clamp(28px,4.5vw,56px)] text-cream md:grid-cols-[minmax(160px,300px)_minmax(0,1fr)]">
            <div className="pointer-events-none absolute -top-8 right-6 text-[clamp(180px,22vw,320px)] leading-none font-bold text-coral/7 select-none">
              ”
            </div>
            <div className="relative overflow-hidden bg-panel relative aspect-square w-full max-w-[240px] rounded-card outline-1 outline-offset-8 outline-cream/14 md:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=70"
                alt="Client photo"
                fill
                sizes="(max-width: 768px) 240px, 300px"
                className="object-cover"
              />
            </div>
            <div className="relative flex flex-col gap-[26px]">
              <div className="flex items-center gap-3.5">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-coral uppercase">
                  Client story
                </span>
                <span className="h-px w-10 bg-coral/50" />
              </div>
              <p className="m-0 text-[clamp(20px,2.1vw,32px)] leading-[1.3] font-normal tracking-[-0.015em] text-cream text-pretty">
                Featured client quote —{" "}
                <strong className="font-semibold text-coral">
                  two to three sentences
                </strong>{" "}
                on data quality, compliance and the meetings that actually{" "}
                <strong className="font-semibold text-coral">showed up</strong>.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-cream/14 pt-[22px]">
                <div className="text-[16px] font-semibold tracking-[-0.01em]">
                  Title, Company
                </div>
                <div className="flex gap-7">
                  {[
                    { v: "1.8%", l: "Bounce rate" },
                    { v: "37", l: "Meetings / month" },
                  ].map((s) => (
                    <div key={s.l} className="flex flex-col gap-1">
                      <span className="text-[22px] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral">
                        {s.v}
                      </span>
                      <span className="text-[11px] text-cream/55">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE — the cards are static here */}
      <section
        id="challenge"
        data-challenge
        className="relative border-y border-ink/12 bg-cream lg:h-screen lg:min-h-[640px]"
      >
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col gap-12 overflow-hidden page-x py-16 lg:block lg:py-0">
          <div className="flex flex-col items-center gap-[22px] text-center lg:absolute lg:top-[9vh] lg:right-0 lg:left-0 lg:px-8">
            <div data-ch-item="pill">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">Challenge</div>
            </div>
            <h2
              data-ch-item="title"
              className="m-0 max-w-[720px] text-[clamp(30px,3.6vw,56px)] leading-[1.08] font-medium tracking-[-0.025em] text-pretty"
            >
              Your pipeline targets grew.
              <br />
              But your data has not caught up
            </h2>
          </div>

          <div
            data-ch-item="hero"
            className="relative mx-auto aspect-[15/16] w-full max-w-[320px] lg:absolute lg:right-0 lg:bottom-[8vh] lg:left-0 lg:max-h-[46vh] lg:w-[clamp(300px,28vw,440px)] lg:max-w-none"
          >
            <Image
              src="/challenge-figure.png"
              alt="Marketer in an armchair working on a laptop"
              fill
              sizes="(max-width: 1024px) 380px, 34vw"
              className="object-contain object-bottom"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:contents">
              {temp.map((c: any, i: any) => (
              <div
                key={c[3]}
                data-ch-item="card"
                style={pos[i]}
                className="grid w-full grid-cols-[30px_minmax(0,1fr)] border border-ink bg-white shadow-[8px_10px_0_-1px_rgba(18,21,15,0.10)] lg:absolute lg:w-[clamp(216px,21.5vw,320px)]"
              >
                <div className="flex items-center justify-center border-r border-ink/14 bg-[#F2F3EE] py-3">
                  <span className="text-[9.5px] font-semibold tracking-[0.18em] whitespace-nowrap text-[#be1622] uppercase [writing-mode:vertical-rl] [transform:rotate(180deg)]">
                    {c[0]}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col">
                  <div className="flex flex-col gap-[11px] px-[17px] pt-[15px] pb-3.5">
                    <div className="flex items-baseline justify-between gap-2.5">
                      <span className="text-[clamp(32px,3.1vw,48px)] leading-[.86] font-medium tracking-[-0.045em] tabular-nums text-ink">
                        {c[1]}
                        {c[2] && (
                          <span className="ml-0.5 text-[.44em] tracking-[-0.01em]">
                            {c[2]}
                          </span>
                        )}
                      </span>
                      <span className="text-[10px] font-semibold tabular-nums text-[#A2A49F]">
                        {c[3]}
                      </span>
                    </div>
                    <div className="text-[clamp(12.5px,.98vw,15px)] leading-[1.42] text-muted text-pretty">
                      {(() => {
                        var bits = c[5].split(/\*\*(.+?)\*\*/g);
                        return bits.map((part: any, j: any) => {
                          if (j % 2 === 1) {
                            return (
                              <strong key={j} className="font-semibold text-ink">
                                {part}
                              </strong>
                            );
                          } else {
                            return <Fragment key={j}>{part}</Fragment>;
                          }
                        });
                      })()}
                    </div>
                  </div>
                  <div className="mt-auto h-1 bg-ink/9">
                    <div className="h-full bg-brand-cta" style={{ width: `${c[4]}%` }} />
                  </div>
                </div>
              </div>
              ))}
          </div>
        </div>
      </section>

      {/* PROCESS — pinned; the rail scrubs vertically */}
      <section id="process" data-process className="relative bg-cream">
        <div
          data-process-pin
          className="flex flex-col justify-center py-16 pl-5 sm:pl-8 lg:h-screen lg:min-h-[640px] lg:overflow-hidden lg:py-0 lg:pl-[max(24px,calc((100vw-1280px)/2+24px))]"
        >
          <div className="mb-10 flex flex-col gap-6 pr-5 sm:pr-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pr-[max(24px,calc((100vw-1280px)/2+24px))]">
            <div>
              <div className="mb-[18px]">
                <div className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase ${"border-brand/45 text-brand"}`}>
                  Process
                </div>
              </div>
              <h2 className="m-0 max-w-[640px] text-[clamp(30px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
                From ICP to booked meetings{" "}
                <span className="text-brand">in six weeks.</span>
              </h2>
            </div>
            <div className="hidden shrink-0 flex-col items-end gap-3 lg:flex">
              <div className="flex items-baseline gap-1.5 text-[clamp(44px,5vw,72px)] leading-none font-medium tracking-[-0.04em] tabular-nums text-ink">
                <span data-process-num>01</span>
                <span className="text-[18px] tracking-normal text-muted-2">/ 05</span>
              </div>
              <div className="relative h-0.5 w-[200px] overflow-hidden bg-ink/12">
                <div
                  data-process-bar
                  className="absolute inset-y-0 left-0 w-full origin-left scale-x-20 bg-brand"
                />
              </div>
            </div>
          </div>

          <div className="relative ld-swipe-x snap-x snap-mandatory pr-5 sm:pr-8 lg:pr-0">
            <div className="absolute top-[27px] right-0 left-0 hidden h-px bg-ink/14 lg:block" />
            <div data-process-track className="flex w-max gap-5 will-change-transform">
              {STEPS_2.map((p: any) => (
                <div
                  key={p[0]}
                  data-process-card
                  className="flex w-[78vw] max-w-[420px] snap-start flex-col gap-[22px] sm:w-[clamp(300px,30vw,420px)]"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      data-process-dot
                      className="relative z-1 inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-ink/20 bg-cream text-[13px] font-semibold text-ink"
                    >
                      {p[0]}
                    </span>
                    <span className="relative z-1 bg-cream py-1 pr-2.5 pl-1.5 text-[11px] font-semibold tracking-[0.1em] text-brand uppercase">
                      {p[1]}
                    </span>
                  </div>
                  <div className="flex min-h-[280px] flex-col gap-4 rounded-card border border-ink/14 bg-white px-[26px] py-7">
                    <div className="text-[clamp(20px,1.8vw,26px)] leading-[1.15] font-medium tracking-[-0.02em] text-pretty">
                      {p[2]}
                    </div>
                    <p className="m-0 flex-1 text-[14px] leading-[1.6] text-muted-2 text-pretty">
                      {p[3]}
                    </p>
                    <div className="flex items-center gap-2 border-t border-ink/10 pt-3.5 text-[11px] font-semibold tracking-[0.08em] uppercase">
                      <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="text-brand">
                        <path d="m4 12 6 6L20 6" />
                      </svg>
                      Reviewable output
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex w-[78vw] max-w-[380px] shrink-0 snap-start flex-col justify-center gap-[18px] pt-[76px] pr-6 pl-2 sm:w-[clamp(260px,26vw,380px)]">
                <div className="text-[clamp(22px,2vw,30px)] leading-[1.15] font-medium tracking-[-0.02em] text-pretty">
                  Ready to start week&nbsp;one?
                </div>
                <div>
                  <Link
                    href="#cta"
                    data-btn="red"
                    className="inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase py-1.5 pr-1.5 pl-[22px] text-[11px] bg-brand-cta text-white "
                  >
                    Book a strategy call
                    <span
                      data-chip
                      className="inline-flex items-center justify-center rounded-ui bg-ink text-coral h-10 w-10 text-[16px]"
                    >
                      <span className="inline-block">→</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="services" className="mx-auto max-w-[1280px] page-x py-[76px]">
        <div className="mb-[18px]">
          <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-[#be1622]/45 text-[#be1622]">
            Solution
          </div>
        </div>
        <div className="mb-10 grid items-end gap-10 lg:grid-cols-2">
          <h2 className="m-0 text-[clamp(28px,2.95vw,38px)] leading-[1.1] font-medium tracking-[-0.025em] text-pretty">
            We bridge the gap between the data you have and the pipeline you need.
          </h2>
          <p className="m-0 text-[15px] leading-[1.6] text-[#4E554C] text-pretty">
            From building and verifying the database to running demand gen,
            syndication and appointment setting — we do what most teams split
            across three vendors.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stuff.map((s) => (
            <Link
              key={s.title}
              href="/services"
              data-lift
              className="flex flex-col gap-3.5 rounded-[2px] border border-ink/14 bg-white px-6 pb-7 text-ink transition-colors hover:border-brand/45"
            >
              <div className="relative -mx-6 mb-2 aspect-4/3">
                <div className="overflow-hidden bg-panel absolute inset-0">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <span className="pointer-events-none absolute top-3.5 left-3.5 rounded-ui border border-[#c8c8c8]/60 bg-ink/86 px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-[#C8C8CC] uppercase">
                  {s.tag}
                </span>
              </div>
              <h3 className="m-0 text-[19px] leading-[1.2] font-semibold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="m-0 flex-1 text-[12px] leading-[1.55] text-muted-2">
                {s.body}
              </p>
              <span className="text-[11px] font-semibold text-muted">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-7">
          <Link
            href={"#" + "cta"}
            data-btn="red"
            className={`inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase py-1.5 pr-1.5 pl-[22px] text-[11px] ${"bg-brand-cta text-white"} `}
          >
            Book a strategy call
            <span
              data-chip
              className="inline-flex items-center justify-center rounded-[2px] bg-ink text-coral h-10 w-10 text-[16px]"
            >
              <span className="inline-block">→</span>
            </span>
          </Link>
          <Link
            href="#work"
            data-textlink
            className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.04em] text-ink uppercase "
          >
            See our work
            <span data-arrow className="text-[16px] text-brand">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* WORK GRID */}
      <section id="work" className="border-y border-ink/11 bg-panel py-[76px]">
        <div className="mx-auto max-w-[1280px] page-x">
          <div className="mb-11 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-[18px]">
                <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
                  Proof of work
                </div>
              </div>
              <h2 className="m-0 text-[clamp(28px,2.95vw,38px)] leading-[1.1] font-medium tracking-[-0.025em] text-pretty">
                Programs that shipped pipeline, not just leads.
              </h2>
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#4E554C] text-pretty">
              Four recent engagements across SaaS, technology, B2B services and
              fintech. Hover any card for the numbers behind it.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-12">
            {CASES_v2.map((c: any) => (
              <Link
                key={c.title}
                href="/case-studies"
                style={{ minHeight: c.minH }}
                data-case-card
                className={`relative flex flex-col overflow-hidden rounded-ui border border-ink/14 bg-white text-ink transition-colors hover:border-brand/55 ${
                  c.span === 7 ? "lg:col-span-7" : c.span === 5 ? "lg:col-span-5" : "lg:col-span-5"
                }`}
              >
                <div className="relative min-h-[220px] flex-1 overflow-hidden">
                  <div className="overflow-hidden bg-panel absolute inset-0">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      data-case-img=""
                    />
                  </div>
                  <div className="absolute top-3.5 left-3.5 flex gap-1.5">
                    <span className="rounded-ui bg-ink/86 px-2.5 py-[5px] text-[10px] font-semibold tracking-[0.1em] text-cream uppercase">
                      {c.segment}
                    </span>
                    <span className="rounded-ui bg-cream/92 px-2.5 py-[5px] text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                      {c.region}
                    </span>
                  </div>
                  <div
                    data-case-veil
                    className="absolute inset-0 grid grid-cols-2 content-end gap-4 bg-ink/88 p-6 text-cream opacity-0"
                  >
                    {[
                      { v: c.v1, m: c.m1 },
                      { v: c.v2, m: c.m2 },
                    ].map((s) => (
                      <div key={s.m}>
                        <div className="text-[clamp(28px,2.6vw,40px)] leading-none font-medium tracking-[-0.03em] text-coral">
                          {s.v}
                        </div>
                        <div className="mt-1.5 text-[11px] text-cream/70">
                          {s.m}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 border-t border-ink/14 px-[22px] py-[18px]">
                  <div>
                    <div className="text-[17px] font-medium tracking-[-0.01em]">
                      {c.title}
                    </div>
                    <div className="mt-1 text-[11.5px] text-muted-2">{c.sub}</div>
                  </div>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/18">
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3.5 rounded-ui border border-brand/45 py-1.5 pr-1.5 pl-[22px] text-[11px] font-semibold tracking-[0.04em] text-ink uppercase"
            >
              View more projects
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-ui bg-brand-cta text-[16px] text-white">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="relative overflow-hidden border-t border-ink/11 bg-ink py-[88px] text-cream">
        <div className="mx-auto max-w-[1280px] page-x">
          <div className="mb-13 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-[18px]">
                <div className={"inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase " + ("coral" === "coral" ? "border-coral/45 text-coral" : "border-brand/45 text-brand")}>
                  Why us
                </div>
              </div>
              <h2 className="m-0 text-[clamp(30px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
                <span className="text-coral">Why Lidespy</span> — and why not{" "}
                {labels[COMPARE]}?
              </h2>
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-cream/68 text-pretty">
              Same six things every buyer asks about. Left column is what we put
              in the contract; right column is what you usually get.
            </p>
          </div>

          <div className="mb-14 grid gap-px overflow-hidden rounded-card border border-cream/14 bg-cream/14 sm:grid-cols-3">
            {STATS_.map((st: any) => (
              <div key={st[3]} className="flex flex-col gap-2.5 bg-ink px-7 py-[30px]">
                <div
                  data-count={st[1]}
                  data-suffix={st[2]}
                  className="text-[clamp(40px,4vw,60px)] leading-none font-medium tracking-[-0.035em] tabular-nums text-coral"
                >
                  {st[0]}
                </div>
                <div className="text-[12.5px] text-cream/68">{st[3]}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="hidden grid-cols-[minmax(100px,.7fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] gap-6 pb-3.5 text-[11px] font-semibold tracking-[0.1em] text-cream/50 uppercase md:grid">
              <div />
              <div className="flex items-center gap-2.5 text-coral">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-cta" />
                Lidespy
              </div>
              <div>{labels[COMPARE]}</div>
            </div>
            {rows.map((row: any) => (
              <div
                key={row[0]}
                data-why-row
                className="grid items-start gap-3 border-t border-cream/14 py-[22px] md:grid-cols-[minmax(100px,.7fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] md:gap-6"
              >
                <div className="text-[17px] font-medium tracking-[-0.01em] text-cream">
                  {row[0]}
                </div>
                <div className="flex items-start gap-3 text-[14px] leading-[1.55] text-cream">
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-coral">
                    <path d="m4 12 6 6L20 6" />
                  </svg>
                  <span>
                    <span className="mr-1.5 text-[11px] font-semibold tracking-[0.1em] text-coral uppercase md:hidden">
                      Lidespy ·
                    </span>
                    {row[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[14px] leading-[1.55] text-cream/55">
                  <span className="mt-2.5 h-px w-3.5 shrink-0 bg-muted-3" />
                  <span>
                    <span className="mr-1.5 text-[11px] font-semibold tracking-[0.1em] text-cream/45 uppercase md:hidden">
                      {labels[COMPARE]} ·
                    </span>
                    {row[2]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL WALL */}
      <section className="overflow-hidden border-y border-ink/11 bg-panel py-[clamp(64px,6vw,96px)]">
        <div className="mx-auto mb-[clamp(36px,4vw,56px)] grid max-w-[1280px] items-end gap-6 page-x md:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="flex flex-col gap-5">
            <div className="self-start">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
                Testimonials
              </div>
            </div>
            <h2 className="m-0 text-[clamp(28px,2.95vw,38px)] leading-[1.06] font-medium tracking-[-0.025em]">
              What buyers say.
            </h2>
          </div>
          <p className="m-0 text-[15px] leading-[1.6] text-muted text-pretty">
            Revenue, marketing and ops leaders on the programs we ran with them,
            and the numbers those programs produced.
          </p>
        </div>
        <div data-quote-rail className="ld-fade-x">
          <div data-quote-track className="flex w-max gap-5 px-2 will-change-transform">
            {[...QUOTES_final, ...QUOTES_final].map((q: any, i: any) => (
              <figure
                key={i}
                aria-hidden={i >= QUOTES_final.length || undefined}
                className="m-0 flex w-[84vw] max-w-[440px] shrink-0 flex-col rounded-card border border-ink/12 bg-white sm:w-[clamp(340px,31vw,440px)]"
              >
                <div className="flex flex-1 flex-col gap-6 p-[clamp(24px,2.2vw,32px)]">
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-brand uppercase">
                    {q.program}
                  </span>
                  <blockquote className="m-0 flex-1 text-[16px] leading-[1.6] tracking-[-0.005em] text-muted text-pretty">
                    {`“${q.text}”`.split(/\*\*(.+?)\*\*/g).map((part: any, k: any) =>
                      k % 2 === 1 ? (
                        <strong key={k} className="font-semibold text-ink">
                          {part}
                        </strong>
                      ) : (
                        <React.Fragment key={k}>{part}</React.Fragment>
                      ),
                    )}
                  </blockquote>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-dashed border-ink/12 pt-5">
                    {q.stats.map((s: any) => (
                      <div key={s.l} className="flex flex-col gap-1">
                        <span className="text-[28px] leading-none font-medium tracking-[-0.03em] tabular-nums text-ink">
                          {s.v}
                        </span>
                        <span className="text-[12px] leading-[1.4] text-muted-2">
                          {s.l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <figcaption className="flex items-center gap-3 border-t border-ink/10 px-[clamp(24px,2.2vw,32px)] py-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span className="text-[13px] font-semibold text-ink">{q.role}</span>
                  <span className="truncate text-[12.5px] text-muted-2">{q.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="insights" className="mx-auto max-w-[1280px] page-x py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="m-0 text-[clamp(28px,2.95vw,38px)] leading-[1.06] font-medium tracking-[-0.025em]">
            Blogs
          </h2>
          <Link
            href="/blog"
            className="text-[12px] font-semibold text-muted transition-colors hover:text-brand"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {res.map((a: any) => (
            <Link key={a[4]} href={a[0]} data-lift className="group flex flex-col gap-4 text-ink">
              <div className="relative overflow-hidden bg-panel h-[190px] rounded-[3px]">
                <Image
                  src={a[1]}
                  alt={a[2]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="text-[11px] font-semibold tracking-[0.08em] text-brand uppercase">
                {a[3]}
              </div>
              <h3 className="m-0 text-[17px] leading-[1.3] font-semibold text-pretty group-hover:text-brand">
                {a[4]}
              </h3>
              <div className="text-[11px] text-muted-2">
                {a[5]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="mx-auto max-w-[1280px] page-x pt-6 pb-24">
        <div className="relative grid items-center gap-[clamp(32px,5vw,72px)] overflow-hidden rounded-card bg-brand-cta bg-[linear-gradient(rgba(247,248,244,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(247,248,244,.16)_1px,transparent_1px)] bg-[length:56px_56px] p-[clamp(34px,5.5vw,64px)] text-ink lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,.85fr)]">
          <div className="pointer-events-none absolute -right-10 -bottom-[90px] aspect-square w-[clamp(260px,30vw,420px)] rounded-full border border-white/28" />
          <div className="pointer-events-none absolute right-10 -bottom-10 aspect-square w-[clamp(180px,20vw,300px)] rounded-full border border-white/28" />
          <div className="relative flex flex-col gap-[22px]">
            <div className="inline-flex items-center gap-2.5 self-start rounded-ui border border-white/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-white" />
              Free 30-minute data audit
            </div>
            <h2 className="m-0 max-w-[640px] text-[clamp(30px,3.6vw,52px)] leading-[1.02] font-medium tracking-[-0.032em] text-white text-pretty">
              Let&apos;s turn your database into your most reliable pipeline
              source.
            </h2>
            <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-white/86 text-pretty">
              We audit a sample of your current data, show you the bounce and
              compliance risk, and map a program to your Q-target.
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {["ISO 9001:2015", "GDPR-compliant outreach", "No list resale"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-ui border border-white/60 bg-white px-[11px] py-[7px] text-[11.5px] font-medium text-ink"
                  >
                    <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="text-brand">
                      <path d="m4 12 6 6L20 6" />
                    </svg>
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative flex flex-col gap-5 rounded-card bg-ink p-[clamp(24px,2.6vw,34px)] text-cream shadow-[0_30px_60px_-30px_rgba(18,21,15,0.5)]">
            <div className="text-[11px] font-semibold tracking-[0.14em] text-coral uppercase">
              What you get on the call
            </div>
            <div className="flex flex-col">
              {[
                "A scored sample of your current data: accuracy, bounce and consent risk",
                "Reachable audience size for your ICP and target regions",
                "A six-week program mapped to your quarter's pipeline target",
              ].map((t, i, arr2) => (
                <div
                  key={t}
                  className={`flex items-start gap-3.5 border-t border-cream/14 py-3 ${
                    i === arr2.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="pt-[3px] text-[11px] font-semibold tabular-nums text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-[1.5] text-cream">{t}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              data-btn="light"
              className="inline-flex items-center justify-between gap-3.5 rounded-ui bg-white py-2 pr-2 pl-6 text-[12px] font-semibold tracking-[0.04em] text-brand uppercase"
            >
              Book a strategy call
              <span
                data-chip
                className="inline-flex h-11 w-11 items-center justify-center rounded-ui bg-ink text-[16px] text-coral"
              >
                <span className="inline-block">→</span>
              </span>
            </Link>
            <div className="text-[12px] text-cream/60">
              Or email{" "}
              <a
                href="mailto:info@lidespy.com"
                className="border-b border-cream/35 text-cream"
              >
                info@lidespy.com
              </a>{" "}
              · replies within one business day
            </div>
          </div>
        </div>
      </section>

      {/* footer (copied) */}
      <footer className="border-t border-ink/15 bg-cream text-ink">
        <div className="mx-auto grid max-w-[1280px] gap-7 page-x pt-14 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.2fr)_repeat(4,minmax(140px,1fr))] lg:gap-12">
          <div className="flex flex-col gap-3.5">
            <Image
              src="/lidespy-logo.png"
              alt="Lidespy"
              width={997}
              height={304}
              className="h-[30px] w-auto self-start"
            />
            <div className="text-[12px] font-semibold text-brand">
              Leads That Drive Growth
            </div>
            <p className="m-0 max-w-[280px] text-[12px] leading-[1.6] text-muted-2">
              B2B demand generation for technology, SaaS and enterprise revenue
              teams. Headquartered in Pune, India. Serving clients globally.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/lidespy/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted transition-colors hover:text-brand"
              >
                LinkedIn
                <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
              <a
                href="mailto:info@lidespy.com"
                className="text-[11px] font-semibold text-muted transition-colors hover:text-brand"
              >
                info@lidespy.com
              </a>
            </div>
          </div>

          {COLS.map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col[0]}
              </div>
              {col[1].map((l: any) => (
                <Link
                  key={l[0]}
                  href={l[1]}
                  className={`text-[12.5px] transition-colors hover:text-brand ${
                    !!l[2] == true ? "font-semibold text-brand" : "text-muted"
                  }`}
                >
                  {l[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"]].map((l) => (
              <Link
                key={l[1]}
                href={l[1]}
                className="text-muted-2 transition-colors hover:text-brand"
              >
                {l[0]}
              </Link>
            ))}
            <C t={6} className="cursor-pointer text-muted-2 transition-colors hover:text-brand" />
            <C t={7} />
          </div>
        </div>
      </footer>
    </div>
  );
}
