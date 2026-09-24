// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import C from "./FINAL_client_v2";

// FIXED
export const metadata: Metadata = {
  alternates: { canonical: "/why-lidespy" },
  title: "Why Lidespy · B2B demand generation judged on pipeline",
  description: "Most lead vendors are paid for volume. Lidespy is measured on pipeline — verified data, documented compliance, a named partner and reporting your RevOps team can audit.",
};

// spans for the grid (dont change order!!)
var BENTO = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"]

// TODO: move this to a json file
const obj: any = {
  a: ["Why Lidespy", "Anyone can send you a spreadsheet. Lidespy builds the audience, proves every record, runs the outreach and reports at source level — so the number your board sees and the number we're judged on are the same number.", "Book a strategy call", "See the proof"],
  receipt: ["Record verification", "ICP_target_list.csv", ["ICP and firmographic match", "Human research pass", "Email syntax and MX check", "Live mailbox verification", "Suppression list applied", "Lawful basis documented"], "Records released to campaign", "94.2%", "Every record. Every campaign. Bounce SLA written into the contract."],
  stats: [["500", "+", "Campaigns executed"], ["98", "%", "Contactable rate on delivered data"], ["50", "+", "Countries covered"], ["6", " wks", "Typical time to first meetings"]],
  marquee: ["Verified data", "GDPR framework", "Named partner", "Source-level reporting", "ISO 9001:2015", "No-shows replaced", "Bounce SLA", "Full-funnel coverage"],
}

const gap_data = {
  eyebrow: "The gap",
  title: "Demand generation rarely fails at the campaign. It fails before it.",
  intro: "By the time a program underperforms, the cause is usually three decisions upstream — in the list, the consent trail, or who was actually accountable.",
  items: [
    ["01", "The list was bought, not built.", "Resold databases age the day they are downloaded. 15–30% bounce is normal, and the deliverability damage outlives the campaign.", "We build to your ICP and re-verify before every send."],
    ["02", "Compliance was asserted, not documented.", "\"GDPR compliant\" on a slide is not a lawful basis. When legal asks for the trail, the program stops.", "Lawful basis documented per region, per record."],
    ["03", "Nobody owned the outcome.", "Rotating account managers and SDRs you never meet mean context resets every quarter and nothing compounds.", "One named partner accountable end to end."],
    ["04", "Reporting stopped at activity.", "Opens, clicks and a monthly PDF. None of it reconciles against the CRM, so pipeline attribution is guesswork.", "Weekly, source-level, RevOps-ready."],
  ],
};

// the difference - k, title, body, metric, metricLabel, chips
let arr: any[] = [
  { k: "data", title: "Data we build, not data we resell", body: "Every record is researched, matched to your ICP and verified against a live mailbox before it enters a campaign. Nothing recycled, nothing scraped.", metric: "98%", metricLabel: "contactable on delivery" },
  { k: "compliance", title: "Compliance you can hand to legal", body: "GDPR, CAN-SPAM and CASL aligned, with lawful basis documented per region and suppression handled at the file level — not the send level.", metric: "3", metricLabel: "regulatory frameworks aligned" },
  { k: "ownership", title: "A named partner, not a queue", body: "One accountable partner across research, messaging and meetings. Your context lives with a person, not a ticketing system.", metric: "1", metricLabel: "named partner, end to end" },
  { k: "funnel", title: "Full funnel under one roof", body: "Audience intelligence, syndication, ABM, email, telemarketing and appointment setting run by the same team — so channels reinforce each other instead of competing for credit.", metric: "12", metricLabel: "services, one team" },
  { k: "reporting", title: "Reporting your RevOps team can audit", body: "Source-level performance every week, delivered in a shape that reconciles against your CRM. If a number moves, you can see which record moved it.", metric: "52", metricLabel: "reports a year, not 12" },
  { k: "flex", title: "Commercials that flex with proof", body: "Start project-based, move to retainer, or tie fees to delivered meetings. We scale the commitment as the program earns it — not before.", chips: ["Project", "Retainer", "Performance"] },
]

const STANDARD_STUFF = [
  ["≤2", "%", "Hard bounce rate", "Exceeded, and we re-verify and re-run the segment at our cost."],
  ["100", "%", "ICP match on delivered leads", "Every lead meets the filters agreed in the brief, or it is replaced."],
  ["48", "h", "Lead delivery window", "Qualified leads reach your CRM within two business days of qualification."],
  ["1:1", "", "No-show replacement", "A booked meeting that does not happen is rebooked or replaced. You pay for attendance."],
  ["7", " days", "Reporting cadence", "Source-level campaign reporting, weekly, in a format your RevOps team can reconcile."],
  ["30", " days", "Notice period on retainers", "No annual lock-in. The program earns the next month or it doesn't run."],
];

const temp: any = {
  steps: [
    { n: "01", title: "ICP definition", body: "Firmographics, tech stack, buying signals and exclusions agreed in writing before any research begins." },
    { n: "02", title: "Human research", body: "Research executives confirm role, seniority and account fit — the part automation still gets wrong." },
    { n: "03", title: "Technical verification", body: "Syntax, domain, MX and live mailbox checks on every address, immediately before send." },
    { n: "04", title: "Consent & suppression", body: "Lawful basis recorded per region; your suppression file and ours applied to the final build." },
    { n: "05", title: "Release & re-verify", body: "The file is released to campaign and re-verified before each subsequent send. Decay never accumulates." },
  ],
  badges: [["GDPR", "EU / UK framework, lawful basis documented per record"], ["CAN-SPAM", "US commercial email requirements built into every send"], ["CASL", "Canadian consent standards applied to CA segments"], ["ISO 9001:2015", "Externally audited quality management system"]],
}

var models_new = [
  ["Project", "Best for a single campaign or market test", "A defined scope with a fixed fee — one syndication push, one ABM sprint, one database build. The lowest-risk way to see how we work.", ["Fixed scope and fee", "4–8 week typical duration", "Full data and reporting handover"], false],
  ["Retainer", "Best for always-on pipeline", "A standing program across multiple channels with a named partner, a quarterly plan and weekly reporting. Most clients land here after a project.", ["Monthly program fee", "Multi-channel orchestration", "Quarterly planning and QBR"], true],
  ["Performance", "Best for teams that buy outcomes", "Fees tied to delivered qualified leads or booked meetings. Available once we have run a program together and both sides know the conversion maths.", ["Per-lead or per-meeting pricing", "No-shows replaced", "Volume commitments agreed upfront"], undefined],
] as any[];

const proof2 = [
  ["312", "%", "Average pipeline lift in the first two quarters", "Across enterprise SaaS retainer programs"],
  ["41", "%", "Reduction in cost per qualified meeting", "Versus the client's prior vendor"],
  ["6", " wks", "From kickoff to first booked meetings", "Typical for a retainer engagement"],
];

// faq (q, a)
const FAQ_ITEMS = [
  ["How is this different from buying a list?", "A list is a file. We build the audience, verify it, run the outreach across channels, qualify the responses and report at source level. If you only want the file, we will sell you the file — but the contract still carries the bounce SLA, which no list broker will offer you."],
  ["What happens if the leads don't meet our ICP?", "They are replaced at no cost. The ICP filters are agreed in writing during discovery, and every delivered lead is checked against them. Disputed leads are reviewed within two business days."],
  ["Can you work in regulated industries?", "Yes. We run programs in fintech, healthcare and cybersecurity, where consent trails and messaging review matter more than volume. Lawful basis is documented per record, and we will work inside your legal team's review process rather than around it."],
  ["How quickly do programs go live?", "Discovery and ICP definition take one to two weeks. Data build and campaign setup take a further two to three. Most retainer clients see their first booked meetings around week six."],
  ["Do we own the data you build?", "Yes. Data built for your program is delivered to you — CSV or CRM-ready — and remains yours, including after the engagement ends."],
  ["What if it doesn't work?", "Project engagements end at the end of the project; there is nothing to unwind. Retainers run on 30 days' notice. We would rather lose a renewal than defend a program that isn't producing pipeline."],
];

// footer columns
const COLS = [
  ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", true]]],
  ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]],
  ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]],
  ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]],
] as any[];

function getIt(x: any) { return x }
const isNotHidden = (b: any) => !b

export default function WhyLidespyPage() {
  var finalValue_new = parseFloat(obj.receipt[4]);
  let unused_thing = FAQ_ITEMS.length * 2;

  return (
    <div data-gsap-root data-why-root className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} />
      <C t={2} />
      <C t={3} active="why" />

      {/* hero section v2 */}
      <section className="dc-rules-dark relative overflow-hidden bg-ink text-cream">
        <div aria-hidden className="pointer-events-none absolute -top-[28%] -left-[12%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.28),transparent_62%)] blur-[12px]" />
        <div aria-hidden className="pointer-events-none absolute -right-[16%] -bottom-[38%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.16),transparent_65%)]" />

        <div className="relative mx-auto grid max-w-[1280px] items-start gap-[clamp(40px,5vw,80px)] page-x pt-[clamp(48px,5.5vw,84px)] pb-[clamp(44px,5vw,72px)] lg:grid-cols-[minmax(0,1.12fr)_minmax(330px,0.88fr)]">
          <div className="flex flex-col gap-[clamp(24px,2.6vw,34px)]">
            <div data-hero-aside className="self-start">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-coral/45 text-coral">{obj.a[0]}</div>
            </div>

            <h1 className="m-0 text-[clamp(36px,5.2vw,78px)] leading-[1.02] font-normal tracking-[-0.035em] text-balance">
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-hero-line className="block">
                  Most lead vendors
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-hero-line className="block">
                  are paid for volume.
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-hero-line className="block text-[#ff5a4f]">
                  We&apos;re measured on pipeline.
                </span>
              </span>
            </h1>

            <p data-hero-aside className="m-0 max-w-[58ch] text-[clamp(15px,1.25vw,18.5px)] leading-[1.62] text-cream/70 text-pretty">
              {obj.a[1]}
            </p>

            <div data-hero-aside className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/contact" data-btn="red" className={"inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase py-2 pr-2 pl-7 text-[13px] " + "bg-brand-cta text-white "}>
                {obj.a[2]}
                <span data-chip className="inline-flex items-center justify-center rounded-ui bg-ink text-coral h-12 w-12 text-[17px]">
                  <span className="inline-block">→</span>
                </span>
              </Link>
              <Link href="#difference" data-textlink className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase">
                {obj.a[3]}
                <span data-arrow className="text-[16px] text-coral">
                  ↓
                </span>
              </Link>
            </div>
          </div>

          {/* The receipt thing */}
          <div data-receipt className="rounded-card border border-cream/14 bg-cream/[0.045] p-[clamp(20px,2vw,28px)] backdrop-blur-[2px]">
            <div className="flex items-center justify-between gap-4 border-b border-cream/14 pb-4">
              <div className="text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                {obj.receipt[0]}
              </div>
              <div className="truncate font-mono text-[11.5px] text-coral">
                {obj.receipt[1]}
              </div>
            </div>

            <div className="flex flex-col pt-2">
              {obj.receipt[2].map((s: any) => (
                <div key={s} data-receipt-row className="flex items-center gap-3.5 border-b border-cream/8 py-[13px] last:border-b-0">
                  <span data-receipt-tick className="inline-flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-coral text-ink">
                    <svg width={9} height={9} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden><path d="m4 12 6 6L20 6" /></svg>
                  </span>
                  <span className="text-[13.5px] leading-[1.4] text-cream/82 text-pretty">
                    {s}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[2px] bg-coral/10 px-4 py-4">
              <div className="flex items-baseline justify-between gap-4">
                <div className="text-[10.5px] font-semibold tracking-[0.12em] text-cream/55 uppercase">
                  {obj.receipt[3]}
                </div>
                <div data-receipt-value={finalValue_new} className="text-[clamp(28px,2.7vw,36px)] leading-none font-medium tracking-[-0.035em] text-coral tabular-nums">
                  {obj.receipt[4]}
                </div>
              </div>
              <div className="mt-3.5 h-[5px] w-full overflow-hidden rounded-full bg-cream/12">
                <div data-receipt-bar className="h-full w-full rounded-full bg-coral" />
              </div>
            </div>
            <p className="m-0 mt-3.5 text-[11.5px] leading-[1.55] text-cream/45 text-pretty">
              {obj.receipt[5]}
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1280px] page-x">
          <div data-reveal-group className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/14 py-[clamp(28px,3vw,40px)] lg:grid-cols-4">
            {obj.stats.map((s: any) => (
              <div key={s[2]} data-reveal className="flex flex-col gap-2 lg:border-l lg:border-cream/12 lg:pl-7 lg:first:border-l-0 lg:first:pl-0">
                <div data-count={s[0]} data-suffix={s[1]} className="text-[clamp(34px,3.6vw,52px)] leading-none font-medium tracking-[-0.04em] text-cream tabular-nums">
                  {s[0]}
                  {s[1]}
                </div>
                <div className="text-[12.5px] leading-[1.45] text-cream/50 text-pretty">
                  {s[2]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-t border-cream/14 py-4">
          <div className="ld-fade-x overflow-hidden">
            <div className="ld-marquee ld-marquee-slow">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                  {obj.marquee.map((m: any) => (
                    <span key={m} className="flex items-center gap-6 px-6 text-[12px] font-semibold tracking-[0.12em] text-cream/45 uppercase">
                      {m}
                      <span className="h-[3px] w-[3px] rounded-full bg-coral" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GAP ===== */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
        <div className="mb-[clamp(36px,4vw,60px)] grid items-end gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <div className="mb-[18px]">
              <div className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase ${"border-brand/45 text-brand"}`}>{gap_data.eyebrow}</div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {gap_data.title}
            </h2>
          </div>
          <p className="m-0 text-[clamp(15px,1.2vw,17.5px)] leading-[1.65] text-muted text-pretty">
            {gap_data.intro}
          </p>
        </div>

        <div data-reveal-group className="grid gap-4 md:grid-cols-2">
          {gap_data.items.map((g) => (
            <article key={g[0]} data-reveal data-lift className="flex flex-col rounded-ui border border-ink/14 bg-white">
              <div className="flex flex-col gap-3.5 p-[clamp(24px,2.6vw,36px)]">
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-semibold tabular-nums text-[#be1622]">
                    {g[0]}
                  </span>
                  <span className="h-px flex-1 bg-ink/12" />
                </div>
                <h3 className="m-0 text-[clamp(19px,1.75vw,24px)] leading-[1.22] font-medium tracking-[-0.022em] text-pretty">
                  {g[1]}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.65] text-muted-2 text-pretty">
                  {g[2]}
                </p>
              </div>
              <div className="mt-auto flex items-start gap-3 border-t border-ink/12 bg-panel px-[clamp(24px,2.6vw,36px)] py-4">
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-[3px] shrink-0 text-brand"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                <p className="m-0 text-[13.5px] leading-[1.5] font-medium text-ink text-pretty">
                  {g[3]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DIFFERENCE ===== */}
      <section id="difference" className="scroll-mt-24 border-y border-ink/12 bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
          <div className="mb-[clamp(32px,3.5vw,52px)] max-w-[820px]">
            <div className="mb-[18px]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">The difference</div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {"Six reasons revenue teams keep the contract."}
            </h2>
          </div>

          <div data-reveal-group className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-6">
            {arr.map((d: any, i: any) => {
              // anchor = first one
              const anchor = i === 0;
              const wide = i === arr.length - 1;
              return (
                <article
                  key={d.k}
                  data-reveal
                  data-lift
                  className={`flex flex-col justify-between gap-6 rounded-ui p-[clamp(24px,2.4vw,36px)] ${BENTO[i]} ${anchor == true ? "bg-ink text-cream sm:col-span-2" : "border border-ink/14 bg-white"} ${!wide == false ? "sm:col-span-2 lg:flex-row lg:items-center lg:gap-14" : ""}`}
                >
                  <div className="flex flex-col gap-3">
                    <h3 className={`m-0 leading-[1.18] font-medium tracking-[-0.024em] text-pretty ${anchor ? "text-[clamp(24px,2.4vw,34px)]" : "text-[clamp(19px,1.7vw,23px)]"}`}>
                      {d.title}
                    </h3>
                    <p className={`m-0 leading-[1.65] text-pretty ${anchor ? "max-w-[46ch] text-[15px] text-cream/68" : "text-[14.5px] text-muted-2"}`}>
                      {d.body}
                    </p>
                  </div>

                  {(() => {
                    if (d.chips) {
                      return (
                        <div className="flex shrink-0 flex-wrap items-center gap-2 border-t border-ink/12 pt-4 lg:border-t-0 lg:pt-0">
                          {d.chips.map((c: any) => (
                            <Link key={c} href="#models" className="rounded-ui border border-ink/18 px-3.5 py-2 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase transition-colors hover:border-brand hover:bg-brand-cta hover:text-white">
                              {c}
                            </Link>
                          ))}
                        </div>
                      );
                    } else {
                      return (
                        <div className={`flex items-baseline gap-3 border-t pt-4 ${anchor ? "border-cream/16" : "border-ink/12"}`}>
                          <span className={`text-[clamp(28px,2.8vw,40px)] leading-none font-medium tracking-[-0.04em] tabular-nums ${anchor ? "text-coral" : "text-brand"}`}>
                            {d.metric}
                          </span>
                          <span className={`text-[12.5px] leading-[1.35] text-pretty ${anchor ? "text-cream/50" : "text-muted-3"}`}>
                            {d.metricLabel}
                          </span>
                        </div>
                      );
                    }
                  })()}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STANDARD ===== */}
      <section id="standard" className="scroll-mt-24 bg-ink text-cream">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
          <div className="mb-[clamp(32px,4vw,56px)] grid items-end gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <div className="mb-[18px]">
                <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-coral/45 text-coral">{"Our operating standard"}</div>
              </div>
              <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
                {"The commitments that go in the contract."}
              </h2>
            </div>
            <p className="m-0 text-[clamp(15px,1.2vw,17.5px)] leading-[1.65] text-cream/62 text-pretty">
              {"Not aspirations. These are the terms we sign, and the ones we are measured against every week."}
            </p>
          </div>

          <div data-reveal-group className="grid gap-x-[clamp(24px,3vw,56px)] sm:grid-cols-2 lg:grid-cols-3">
            {STANDARD_STUFF.map((s) => (
              <div key={s[2]} data-reveal className="flex flex-col gap-2.5 border-t border-cream/16 py-[clamp(22px,2.4vw,30px)]">
                <div className="text-[clamp(38px,4vw,56px)] leading-none font-medium tracking-[-0.04em] text-coral tabular-nums">
                  {s[0]}
                  <span className="text-[0.5em] tracking-[-0.02em]">{s[1]}</span>
                </div>
                <div className="text-[16px] leading-[1.3] font-medium tracking-[-0.015em] text-cream">
                  {s[2]}
                </div>
                <p className="m-0 max-w-[42ch] text-[13.5px] leading-[1.6] text-cream/55 text-pretty">
                  {s[3]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE ===== */}
      <section id="compliance" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(56px,6.5vw,104px)]">
        <div className="mb-[clamp(36px,4vw,60px)] grid items-end gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <div className="mb-[18px]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{"Data & compliance"}</div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {"Every record earns its place in the file."}
            </h2>
          </div>
          <p className="m-0 text-[clamp(15px,1.2vw,17.5px)] leading-[1.65] text-muted text-pretty">
            {"Our data pipeline is the reason the rest of this page is possible. It runs on every build, and it is the same pipeline whether you buy one campaign or twelve."}
          </p>
        </div>

        {/* 4 steps */}
        <div data-reveal-group className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          <div aria-hidden className="absolute top-[4px] right-0 left-0 hidden h-px origin-left bg-brand/20 lg:block">
            <span data-pipe-rule className="block h-px w-full origin-left bg-brand/60" />
          </div>
          {temp.steps.map((st: any) => (
            <div key={st.n} data-reveal className="relative flex flex-col lg:pr-4">
              <span className="relative z-1 block h-[9px] w-[9px] rounded-full bg-brand-cta ring-[5px] ring-cream" />
              <span className="mt-5 text-[11.5px] font-semibold tracking-[0.1em] tabular-nums text-brand">
                {st.n}
              </span>
              <h3 className="m-0 mt-2 mb-3 text-[17px] leading-[1.25] font-medium tracking-[-0.018em] text-pretty">
                {st.title}
              </h3>
              <p className="m-0 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                {st.body}
              </p>
            </div>
          ))}
        </div>

        <div data-reveal-group className="mt-[clamp(36px,4vw,56px)] grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {temp.badges.map((b: any) => (
            <div key={b[0]} data-reveal className="flex flex-col gap-2 rounded-ui border border-ink/14 bg-white px-[22px] py-6">
              <div className="text-[15px] font-bold tracking-[0.03em] text-brand">
                {b[0]}
              </div>
              <p className="m-0 text-[13px] leading-[1.55] text-muted-2 text-pretty">
                {b[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MODELS ===== */}
      <section id="models" className="scroll-mt-24 border-y border-ink/12 bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
          <div className="mb-[clamp(32px,3.5vw,52px)] max-w-[760px]">
            <div className="mb-[18px]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">Engagement models</div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {"Three ways to start. No lock-in on any of them."}
            </h2>
          </div>

          <div data-reveal-group className="grid gap-3.5 lg:grid-cols-3">
            {models_new.map((m: any) => (
              <article
                key={m[0]}
                data-reveal
                data-lift
                className={`flex flex-col gap-6 rounded-ui p-[clamp(26px,2.6vw,38px)] ${m[4] ? "bg-ink text-cream lg:-my-3 lg:py-[clamp(38px,3.4vw,50px)]" : "border border-ink/14 bg-white"}`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="m-0 text-[clamp(22px,2.1vw,28px)] leading-none font-medium tracking-[-0.028em]">
                      {m[0]}
                    </h3>
                    {m[4] && (
                      <span className="rounded-ui bg-coral px-2 py-[3px] text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                        Most chosen
                      </span>
                    )}
                  </div>
                  <div className={`text-[12px] font-semibold tracking-[0.04em] uppercase ${m[4] ? "text-coral" : "text-brand"}`}>
                    {m[1]}
                  </div>
                </div>

                <p className={`m-0 text-[14.5px] leading-[1.65] text-pretty ${m[4] ? "text-cream/70" : "text-muted-2"}`}>
                  {m[2]}
                </p>

                <ul className={`m-0 flex list-none flex-col gap-3 border-t p-0 pt-5 ${m[4] ? "border-cream/16" : "border-ink/12"}`}>
                  {m[3].map((p: any) => (
                    <li key={p} className="flex items-start gap-3">
                      <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className={`mt-[5px] shrink-0 ${m[4] ? "text-coral" : "text-brand"}`}><path d="m4 12 6 6L20 6" /></svg>
                      <span className={`text-[13.5px] leading-[1.5] text-pretty ${m[4] ? "text-cream/85" : "text-ink"}`}>
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-auto inline-flex items-center gap-2.5 self-start border-b pb-1 text-[11.5px] font-semibold tracking-[0.06em] uppercase transition-colors ${m[4] ? "border-cream/30 text-cream hover:border-coral hover:text-coral" : "border-ink/25 text-ink hover:border-brand hover:text-brand"}`}
                >
                  Talk through {m[0].toLowerCase()}
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className={m[4] ? "text-coral" : "text-brand"}><path d="M7 17 17 7M8 7h9v9" /></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6.5vw,104px)]">
        <div className="mb-[clamp(32px,3.5vw,52px)]">
          <div className="mb-[18px]">
            <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-[#be1622]/45 text-[#be1622]">Proof</div>
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
            What the standard produces.
          </h2>
        </div>

        <div data-reveal-group className="grid border-t border-ink/15 lg:grid-cols-3">
          {proof2.map((o) => (
            <div key={o[2]} data-reveal className="flex flex-col gap-2.5 border-b border-ink/12 py-[clamp(26px,2.8vw,36px)] lg:border-b-0 lg:border-r lg:px-[clamp(20px,2.2vw,36px)] lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <div data-count={o[0]} data-suffix={o[1]} className="text-[clamp(42px,4.6vw,64px)] leading-none font-medium tracking-[-0.045em] text-brand tabular-nums">
                {o[0]}
                {o[1]}
              </div>
              <div className="text-[15.5px] leading-[1.4] font-medium tracking-[-0.012em] text-ink text-pretty">
                {o[2]}
              </div>
              <div className="text-[12.5px] leading-[1.5] text-muted-3 text-pretty">
                {o[3]}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[clamp(28px,3vw,44px)] grid items-stretch gap-3.5 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <figure className="m-0 flex flex-col justify-between gap-8 rounded-ui bg-brand-cta p-[clamp(28px,3.4vw,52px)]">
            <blockquote className="m-0 text-[clamp(19px,2vw,28px)] leading-[1.32] font-medium tracking-[-0.022em] text-white text-pretty">
              “{"Testimonial placeholder — a revenue leader on why they consolidated three vendors into one Lidespy retainer."}”
            </blockquote>
            <figcaption className="border-t border-white/25 pt-5 text-[14px] font-semibold text-white">
              {"VP Demand Generation, Enterprise SaaS"}
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between gap-8 rounded-ui border border-ink/14 bg-white p-[clamp(28px,3.4vw,44px)]">
            <p className="m-0 text-[clamp(17px,1.6vw,21px)] leading-[1.4] font-medium tracking-[-0.018em] text-ink text-pretty">
              Every claim on this page is one we have had to evidence in a
              renewal conversation. The case studies show the working.
            </p>
            <Link href="/case-studies" data-textlink className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.04em] text-ink uppercase ${"text-[12px]"}`}>
              {"Read the case studies"}
              <span data-arrow className="text-[16px] text-brand">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="scroll-mt-24 border-t border-ink/12 bg-panel">
        <div className="mx-auto grid max-w-[1280px] items-start gap-[clamp(28px,5vw,80px)] page-x py-[clamp(56px,6.5vw,104px)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="lg:sticky lg:top-28">
            <div className="mb-[18px]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{"Straight answers"}</div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
              {"The questions buyers actually ask us."}
            </h2>
            <p className="m-0 mt-5 max-w-[38ch] text-[14.5px] leading-[1.65] text-muted text-pretty">
              Something not covered here? Ask it on the call — we would rather
              answer it before you sign than after.
            </p>
            <div className="mt-7">
              <Link href="/contact" data-textlink className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.04em] text-ink uppercase text-[12px]">
                Ask us directly
                <span data-arrow className="text-[16px] text-brand">
                  →
                </span>
              </Link>
            </div>
          </div>
          <C t={4} a={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA */}
      <section className="dc-rules-dark bg-ink text-cream">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[clamp(28px,4vw,64px)] page-x py-[clamp(56px,6.5vw,96px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="flex flex-col gap-[22px]">
            <div className="self-start">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-coral/45 text-coral">{"Next step"}</div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.6vw,52px)] leading-[1.04] font-medium tracking-[-0.032em] text-balance">
              {"Bring us the target list you're least confident in."}
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="m-0 text-[clamp(15px,1.2vw,17.5px)] leading-[1.65] text-cream/68 text-pretty">
              {"We will verify a sample against our pipeline and show you exactly what would have bounced, what was mismatched to your ICP, and what a compliant build looks like instead. No cost, no commitment."}
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/contact" data-btn="red" className="inline-flex items-center gap-4 rounded-[2px] font-semibold tracking-[0.04em] uppercase py-2 pr-2 pl-7 text-[13px] bg-brand-cta text-white">
                {"Book a strategy call"}
                <span data-chip className="inline-flex items-center justify-center rounded-[2px] bg-[#12150f] text-[#ff5a4f] h-12 w-12 text-[17px]">
                  <span className="inline-block">→</span>
                </span>
              </Link>
              <Link href="/calculator" data-textlink className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase">
                {"Model your budget"}
                <span data-arrow className="text-[16px] text-coral">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* footer (copied from home) */}
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

          {COLS.map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col[0]}
              </div>
              {col[1].map((l: any) => (
                <Link key={l[0]} href={l[1]} className={`text-[12.5px] transition-colors hover:text-brand ${l[2] ? "font-semibold text-brand" : "text-muted"}`}>
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
              <Link key={l[1]} href={l[1]} className="text-muted-2 transition-colors hover:text-brand">
                {l[0]}
              </Link>
            ))}
            <C t={5} />
            <C t={6} />
          </div>
        </div>
      </footer>
    </div>
  );
}
