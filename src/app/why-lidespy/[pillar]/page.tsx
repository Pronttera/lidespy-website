// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import Temp2 from "./temp2";

// v2 - pillar data (key, name, eyebrow, titleLead, titleAccent, intro, stats, sections, services, cta)
const PILLARZ: any[] = [
  [
    "precision-targeting",
    "Precision Targeting",
    "Why Lidespy · Pillar 01",
    "Every campaign starts with",
    "the right list.",
    "ICP-matched audiences, buying committee intelligence and intent data activation. We do the targeting work before a single email goes out — because no amount of creative rescues a campaign pointed at the wrong people.",
    [["50+", "Countries covered"], ["9", "Committee roles mapped per account"], ["95%+", "Verified deliverability on delivered records"], ["0", "Recycled or scraped lists"]],
    [
      { id: "icp-definition", title: "ICP definition, not ICP assumptions", body: "Most target lists are a filter someone set once and never revisited. We start from your closed-won data — which accounts actually bought, at what size, in what industry, running what stack — and rebuild the profile from evidence rather than from the deck.", points: ["Closed-won and closed-lost analysis to find the real pattern", "Firmographic, technographic and behavioural scoring model", "Segment tiers so budget follows the accounts worth the spend", "Documented exclusions and suppression rules from day one"] },
      { id: "buying-committee", title: "The buying committee, mapped", body: "B2B deals are not signed by one person. We map the full committee for every target account — economic buyer, technical evaluator, end user, procurement — so outreach reaches the people who can actually move the deal, and nobody who matters is missed.", points: ["Named decision-makers with verified work email and direct dial", "Role and seniority coverage tracked per account", "Reporting-line context so messaging lands per persona", "Coverage gaps flagged before the campaign launches"] },
      { id: "intent-activation", title: "Intent data you act on, not admire", body: "Intent signals only matter if they change what you do this week. We monitor category and competitor research activity across your target accounts and route surging accounts straight into live outreach, with the reason for the surge attached.", points: ["Category, competitor and solution-level intent monitoring", "Weekly surge list with the topic that triggered it", "Prioritised outreach queues for sales, refreshed continuously", "Signal decay handling so stale accounts drop out"] },
      { id: "verification", title: "Verified before delivery, every record", body: "Every contact we hand over is validated and enriched at the point of delivery — not at the point it was first collected. Records that fail verification never reach your CRM, and the ones that do arrive with the fields your sequences need.", points: ["Multi-step email and phone validation before handoff", "Enrichment: title, seniority, company size, region, tech stack", "Suppression file applied against your existing pipeline", "Replacement guarantee on any record that bounces"] },
    ],
    ["audience-intelligence", "b2b-data", "abm"],
    ["See the targeting before you commit to the campaign.", "We will build a sample audience against your ICP so you can judge the list quality first — not after the invoice.", "Request a sample audience"],
  ],
  [
    "multi-channel-execution",
    "Multi-Channel Execution",
    "Why Lidespy · Pillar 02",
    "Six channels, one program,",
    "one timeline.",
    "Email, ABM, content syndication, telemarketing, webinars and SDR outreach — planned, sequenced and timed as a single program rather than six vendors sending into the same inbox in the same week.",
    [["6", "Channels run in-house"], ["1", "Team, one campaign calendar"], ["7–14", "Touches per account before qualification"], ["Weekly", "Delivery and reporting cadence"]],
    [
      { id: "orchestration", title: "One calendar, not six vendors", body: "The usual failure mode is not a bad channel — it is three agencies hitting the same buyer with unrelated messages in the same fortnight. We run every channel off one campaign calendar, so each touch builds on the last instead of competing with it.", points: ["Single sequenced plan across every channel in the program", "Frequency caps enforced per contact and per account", "Message progression from awareness through to meeting request", "One point of contact accountable for the whole program"] },
      { id: "channel-mix", title: "Channel mix chosen by the buying cycle", body: "Long, multi-stakeholder cycles need content syndication and ABM. Fast, transactional ones need email and SDR outreach. We set the mix from your deal length and committee size, then reallocate as the data comes in.", points: ["Mix modelled against deal size, cycle length and committee size", "Budget reallocated monthly toward the channels producing pipeline", "Channel-level CPL and conversion reported separately", "Underperforming channels paused rather than defended"] },
      { id: "sequencing", title: "Sequenced touches, not scattered ones", body: "A content download is followed by a relevant email, then a call that references what they read. Every touch has context from the one before it — which is the difference between a sequence and a series of interruptions.", points: ["Content-first entry, then progressive qualification", "Email, phone and LinkedIn touches from one shared timeline", "Behaviour-triggered branches on open, download and reply", "Full call recordings and notes delivered with each meeting"] },
      { id: "compliance", title: "Compliant in every region we run", body: "Multi-channel across multiple regions means multiple legal regimes. We document the lawful basis per region before launch, and every record carries its consent and source trail with it.", points: ["GDPR, CAN-SPAM and CASL aligned by region", "Documented lawful basis and source per record", "Opt-out handling propagated across every channel", "Full campaign audit trail available on request"] },
    ],
    ["demand-generation", "content-syndication", "abm"],
    ["One program. One calendar. One team accountable.", "Tell us which channels you already run and we will show you where the overlap is costing you conversions.", "Book a program review"],
  ],
  [
    "revenue-focused-outcomes",
    "Revenue-Focused Outcomes",
    "Why Lidespy · Pillar 03",
    "Qualified leads, booked meetings,",
    "real pipeline.",
    "Not impressions. Not MQLs that die on contact with sales. We report on the metrics your CFO recognises — accepted leads, held meetings and pipeline contribution — and we are willing to be measured on them.",
    [["SQL", "The unit we report against"], ["100%", "Leads replaced if they fail your criteria"], ["Weekly", "Pipeline contribution reporting"], ["3", "Engagement models, including performance-based"]],
    [
      { id: "definition-of-done", title: "We agree what counts as a lead first", body: "Most disputes about lead quality are really disputes about definition. Before a campaign starts we write down the qualification criteria — title, company size, budget authority, timing — and both teams sign it. Anything that fails it is replaced, not argued over.", points: ["Written qualification criteria agreed before launch", "BANT or your own custom framework, whichever sales uses", "Rejected leads replaced at no cost, no negotiation", "Rejection reasons fed back into the targeting model"] },
      { id: "attribution", title: "Attribution through to pipeline, not to the form", body: "A form fill is not an outcome. We track each delivered lead through acceptance, meeting held, opportunity created and closed-won, so the number you see is what the program actually contributed to revenue.", points: ["CRM sync with campaign and source stamped on every record", "Lead-to-opportunity and opportunity-to-won conversion tracked", "Cost per accepted lead, per meeting and per opportunity", "Monthly pipeline contribution reported alongside spend"] },
      { id: "reporting", title: "Reporting your revenue team can read", body: "Weekly delivery reports with the records and the reasoning, monthly reviews with the trend and the recommendation. No dashboards that require an interpreter, and no metrics that exist only to look good.", points: ["Weekly lead delivery report with qualification notes", "Monthly performance review with channel-level breakdown", "Clear read on what to scale, what to fix and what to stop", "Full visibility into every campaign we run for you"] },
      { id: "commercials", title: "Commercial terms that share the risk", body: "Project, retainer or performance-based. If you want the first engagement priced on delivered outcomes rather than on effort, that is a conversation we are happy to have — the model should match how confident we both are.", points: ["Project engagements for a defined campaign or launch", "Monthly retainers for ongoing programs", "Performance-based pricing on qualifying programs", "Scale up or down as programs prove out"] },
    ],
    ["demand-generation", "abm", "content-syndication"],
    ["Ask us what the last program actually contributed.", "We will walk you through a real campaign — the spend, the accepted leads, the meetings held and the pipeline created.", "Book a strategy call"],
  ],
];

// services (only the ones we need lol)
const svcs: any = {
  "demand-generation": ["Demand Generation", "We build and execute full-funnel demand generation programs that identify in-market buyers, engage decision-makers across multiple channels, and deliver qualified leads ready for sales follow-up."],
  "content-syndication": ["Content Syndication", "Distribute your best content — whitepapers, eBooks, webinars, reports — to verified B2B audiences actively researching your category. Every content lead meets your ICP filters."],
  "abm": ["Account-Based Marketing (ABM)", "Target your most valuable accounts with precision. We build buying committee maps, identify key decision-makers, and orchestrate coordinated outreach across email, advertising, and human channels."],
  "audience-intelligence": ["Audience Intelligence", "Before you spend a dollar on outreach, know exactly who to reach. We build verified audience profiles using business intelligence platforms, intent data, and human research to give your campaigns a targeting advantage."],
  "b2b-data": ["High-Intent B2B Data", "Access verified, permission-based B2B contact databases built for outreach. Every record is validated, enriched, and matched to your ICP — no recycled or low-quality lists."],
}

/* old version
const COPY = {
  backLabel: "Back",
}
*/
const COPY: any = ["Why Lidespy", "By the numbers", "On this page", "How it works", "Services built on this", "The programs where this shows up first.", "The other pillars"];

function findIt(k: any) {
  let res: any = undefined;
  for (var i = 0; i < PILLARZ.length; i++) {
    if (PILLARZ[i][0] === k) {
      if (res == undefined) {
        res = PILLARZ[i];
      }
    }
  }
  return res;
}

// ✅ This ensures optimal performance
export function generateStaticParams() {
  return PILLARZ.map((p) => ({ pillar: p[0] }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const x = findIt((await params).pillar);
  let out: any = {};
  if (!!x == true) {
    out = { title: `${x[1]} · Why Lidespy`, description: x[5], alternates: { canonical: `/why-lidespy/${x[0]}` } };
  }
  return out;
}

export default async function PillarPage({ params }: any) {
  const pillar = findIt((await params).pillar);
  if (!pillar) notFound();

  // position in list
  const position = PILLARZ.findIndex((p) => p[0] === pillar[0]);
  const others = PILLARZ.filter((p) => p[0] !== pillar[0]);
  const services = pillar[8].map((key: any) => (svcs[key] ? [key, ...svcs[key]] : undefined)).filter((s: any) => s !== undefined);
  var nn = String(position + 1).padStart(2, "0");
  const loop = [...pillar[7].map((sec: any) => sec.title), ...pillar[7].map((sec: any) => sec.title)];

  return (
    <div data-gsap-root className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <Temp2 t={1} />
      <Temp2 t={2} />
      <Temp2 t={3} active="solutions" />

      {/* hero */}
      <section data-hero className="dc-rules-dark relative overflow-hidden bg-ink text-cream">
        <div aria-hidden className="pointer-events-none absolute -top-[30%] -left-[14%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.30),transparent_62%)] blur-[14px]" />
        <div aria-hidden className="pointer-events-none absolute -right-[18%] -bottom-[46%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.14),transparent_66%)]" />

        <div className="relative mx-auto max-w-[1280px] page-x">
          <div aria-hidden data-hero-ghost className="pointer-events-none absolute top-[44px] right-8 hidden leading-[0.8] font-medium tracking-[-0.06em] text-transparent select-none lg:block [-webkit-text-stroke:1.5px_rgba(255,90,79,0.26)] [font-size:clamp(180px,18vw,260px)]">
            {nn}
          </div>

          <div data-hero-fade className="flex items-center justify-between gap-4 border-b border-cream/12 py-5 text-[11px] font-semibold tracking-[0.14em] uppercase">
            <Link href="/why-lidespy" className="inline-flex items-center gap-2.5 text-cream/55 transition-colors hover:text-coral">
              <span className="text-coral">←</span>
              {COPY[0]}
            </Link>
            <div className="flex items-center gap-3 text-cream/45">
              <span className="hidden sm:inline">{"Pillar"}</span>
              <span className="tabular-nums text-cream">
                {nn}
                <span className="text-cream/35"> / {String(PILLARZ.length).padStart(2, "0")}</span>
              </span>
            </div>
          </div>

          <div className="relative grid items-end gap-[clamp(40px,5vw,88px)] pt-[clamp(36px,4.5vw,68px)] pb-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
            <div className="flex flex-col gap-[clamp(22px,2.6vw,36px)]">
              <div data-hero-fade className="self-start">
                <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-[#ff5a4f]/45 text-[#ff5a4f]">{pillar[2]}</div>
              </div>

              <h1 data-hero-title className="m-0 text-[clamp(42px,6.2vw,96px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-balance">
                    {pillar[3]}
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-coral text-balance">
                    {pillar[4]}
                  </span>
                </span>
              </h1>

              <p data-hero-fade className="m-0 max-w-[54ch] text-[clamp(16px,1.3vw,19.5px)] leading-[1.6] text-cream/68 text-pretty">
                {pillar[5]}
              </p>

              <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
                <Link href="/contact" data-btn="red" className="inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase py-2 pr-2 pl-7 text-[13px] bg-brand-cta text-white ">
                  {pillar[9][2]}
                  <span data-chip className="inline-flex items-center justify-center rounded-ui bg-ink text-coral h-12 w-12 text-[17px]">
                    <span className="inline-block">→</span>
                  </span>
                </Link>
                <Link href="#how" data-textlink className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase">
                  {COPY[3]}
                  <span data-arrow className="text-[16px] text-coral">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div data-hero-panel className="rounded-card border border-cream/14 bg-cream/[0.04] px-[clamp(22px,2vw,30px)] pt-5 pb-2 backdrop-blur-[2px]">
                <div className="flex items-center justify-between border-b border-cream/14 pb-4 text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                  <span className="text-cream/45">{COPY[1]}</span>
                  <span className="inline-flex items-center gap-2 text-coral">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                    Lidespy
                  </span>
                </div>
                {pillar[6].map((s: any) => {
                  // check if its a number (idk regex)
                  const m = s[0].match(/^(\d+(?:\.\d+)?)([%+]*)$/);
                  const c = m ? { n: parseFloat(m[1]), suffix: m[2] } : null;
                  return (
                    <div key={s[1]} data-hero-row className="relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5 py-[15px]">
                      <span data-hero-rule className="absolute inset-x-0 bottom-0 h-px bg-cream/12" />
                      <div className="text-[13px] leading-[1.4] text-cream/62 text-pretty">
                        {s[1]}
                      </div>
                      <div data-count={c ? c.n : undefined} data-suffix={c ? c.suffix : undefined} className="text-[clamp(26px,2.4vw,36px)] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral">
                        {s[0]}
                      </div>
                    </div>
                  );
                })}
              </div>

              {(() => {
                if (true) {
                  return (
                    <div data-hero-panel className="rounded-card border border-cream/12 bg-cream/[0.025] px-[clamp(22px,2vw,30px)] pt-[18px] pb-2">
                      <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                        {COPY[2]}
                      </div>
                      {pillar[7].map((it: any, i: any) => (
                        <a key={it.id} href={`#${it.id}`} className="group flex items-baseline gap-3 border-b border-cream/10 py-[8px] text-[13.5px] text-cream/85 transition-colors last:border-b-0 hover:text-coral">
                          <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-coral/80">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1 leading-[1.3]">{it.title}</span>
                          <span className="translate-x-0 text-coral opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  );
                } else {
                  return null;
                }
              })()}
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

      {/* sections */}
      <section id="how" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(48px,5vw,84px)]">
        <div className="grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-26 lg:self-start">
            <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{COPY[3]}</div>
            <div className="mt-6 flex flex-col">
              {pillar[7].map((s: any, i: any) => (
                <a key={s.id} href={`#${s.id}`} className="flex items-baseline gap-3 border-b border-ink/12 py-3 text-[14px] leading-[1.35] text-muted transition-colors hover:text-brand">
                  <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">{s.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            {pillar[7].map((s: any, i: any) => (
              <article key={s.id} id={s.id} className="scroll-mt-24 border-b border-ink/15 py-[clamp(32px,3.5vw,52px)] first:pt-0">
                <div className="mb-5 flex items-center gap-3.5">
                  <span className="text-[12px] font-semibold tabular-nums text-[#be1622]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
                </div>
                <h2 className="m-0 text-[clamp(24px,2.8vw,38px)] leading-[1.08] font-medium tracking-[-0.028em] text-pretty">
                  {s.title}
                </h2>
                <p className="mt-4 mb-0 max-w-[62ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
                  {s.body}
                </p>
                <div className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {s.points.map((pt: any) => (
                    <div key={pt} className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-ink">
                      <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand"><path d="m4 12 6 6L20 6" /></svg>
                      <span className="text-pretty">{pt}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* services grid (compact) */}
      <section className="bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
          <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{COPY[4]}</div>
          {COPY[5] && (
            <p className="mt-5 mb-8 max-w-[52ch] text-[clamp(17px,1.6vw,24px)] leading-[1.35] font-medium tracking-[-0.02em] text-ink text-pretty">
              {COPY[5]}
            </p>
          )}
          <div className={`grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] ${COPY[5] ? "" : "mt-7"}`}>
            {services.map((s: any) => (
              <Link key={`/services/${s[0]}` + s[1]} href={`/services/${s[0]}`} className="flex flex-col gap-3 rounded-card border border-ink/12 bg-white px-[22px] pt-[22px] pb-6 transition-colors hover:border-brand/45">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink text-pretty">
                    {s[1]}
                  </div>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                </div>
                <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">
                  {s[2]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* other pillars (feature) */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,72px)]">
        <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{COPY[6]}</div>
        <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
          {others.map((p: any) => (
            <Link key={`/why-lidespy/${p[0]}` + p[1]} href={`/why-lidespy/${p[0]}`} className="flex flex-col gap-3 rounded-[3px] border border-ink/14 px-[26px] pt-6 pb-7 transition-colors hover:border-brand/45 hover:bg-white">
              <div className="flex items-start justify-between gap-4">
                <div className="text-[clamp(20px,2vw,26px)] leading-[1.15] font-medium tracking-[-0.022em] text-ink text-pretty">
                  {p[1]}
                </div>
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="mt-1.5 shrink-0 text-brand"><path d="m9 5 7 7-7 7" /></svg>
              </div>
              <div className="text-[14px] leading-[1.6] text-muted text-pretty">
                {p[5]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">
            {pillar[9][0]}
          </h2>
          <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            {pillar[9][1]}
          </p>
          <Link href="/contact" className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink">
            {pillar[9][2]}
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      {/* footer - same as the other page */}
      <footer className="border-t border-[#12150f]/15 bg-[#f7f8f4] text-[#12150f]">
        <div className="mx-auto grid max-w-[1280px] gap-7 page-x pt-14 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.2fr)_repeat(4,minmax(140px,1fr))] lg:gap-12">
          <div className="flex flex-col gap-3.5">
            <Image src="/lidespy-logo.png" alt="Lidespy" width={997} height={304} className="h-[30px] w-auto self-start" />
            <div className="text-[12px] font-semibold text-brand">
              Leads That Drive Growth
            </div>
            <p className="m-0 max-w-[280px] text-[12px] leading-[1.6] text-muted-2">
              {"B2B demand generation for technology, SaaS and enterprise revenue teams. Headquartered in Pune, India. Serving clients globally."}
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

          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">Services</div>
            {[["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"]].map((l) => (
              <Link key={l[0]} href={l[1]} className="text-[12.5px] transition-colors hover:text-brand text-muted">
                {l[0]}
              </Link>
            ))}
            <Link href="/services" className="text-[12.5px] transition-colors hover:text-brand font-semibold text-brand">
              All 13 services
            </Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">Solutions</div>
            {["Technology", "SaaS", "Cybersecurity", "FinTech", "Healthcare"].map((l) => (
              <Link key={l} href="/industries" className="text-[12.5px] transition-colors hover:text-brand text-muted">
                {l}
              </Link>
            ))}
            {["Generate More Leads", "Build Pipeline", "Accelerate Sales"].map((l) => (
              <Link key={l} href="/solutions#objective" className="text-[12.5px] transition-colors hover:text-brand text-muted">
                {l}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">Company</div>
            {[["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]].map((l) => (
              <Link key={l[0]} href={l[1]} className="text-[12.5px] transition-colors hover:text-brand text-muted">
                {l[0]}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">Compliance</div>
            <Link href="/compliance/gdpr" className="text-[12.5px] transition-colors hover:text-brand text-muted">GDPR</Link>
            <Link href="/compliance/can-spam" className="text-[12.5px] transition-colors hover:text-brand text-muted">CAN-SPAM</Link>
            <Link href="/compliance/casl" className="text-[12.5px] transition-colors hover:text-brand text-muted">CASL</Link>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="text-muted-2 transition-colors hover:text-brand">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-2 transition-colors hover:text-brand">Terms of Service</Link>
            <Link href="/cookies" className="text-muted-2 transition-colors hover:text-brand">Cookie Policy</Link>
            <Temp2 t={5} />
            <Temp2 t={6} />
          </div>
        </div>
      </footer>
    </div>
  );
}
