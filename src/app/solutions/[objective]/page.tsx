// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment } from "react";
import Temp2 from "./temp2";

// ✅ All objective data (moved here from the dictionary for performance)
const DATA_OBJ: any = [
  ["generate-more-leads","Generate More Leads","Increase qualified lead volume from your ICP without lowering the bar for what counts.","Objective 01 · Generate more leads","More qualified leads from","the accounts you want.","Volume is easy to buy and hard to use. We increase lead count against a definition of qualified that you write, so the extra volume lands in pipeline rather than in a list your reps quietly stop working.",[["4–6 wks","From brief to first delivered leads"],["100%","Off-criteria leads replaced"],["3","Channels in a typical volume program"],["Weekly","Delivery and reporting cadence"]],[{"id":"define-qualified","title":"Agree what a lead is before buying more of them","body":"Most lead-volume problems are definition problems. Before anything launches we write down the title, company size, authority and timing that make a lead worth your rep's hour — and both teams sign it, so quality stops being an argument held after the invoice.","points":["Written qualification criteria signed by marketing and sales","BANT or your own framework, whichever sales already uses","Rejection reasons captured and fed back into targeting","Anything failing the criteria replaced at no cost"]},{"id":"reachable-audience","title":"Size the audience you can actually reach","body":"There is a hard ceiling on how many qualified leads a segment can produce, and knowing it early prevents a campaign built to hit a number the market cannot supply. We size the reachable audience per segment before committing to a volume target.","points":["Addressable and reachable volume sized per segment","Targets set against what the segment can supply","Adjacent segments identified where the primary is thin","Suppression applied so you do not pay for existing contacts"]},{"id":"volume-channels","title":"Run the channels that produce volume at quality","body":"Content syndication and email carry volume programs; verified data underpins both. We run them together against one audience so the same buyer is not counted twice, and each channel reports its own cost per accepted lead.","points":["Content syndication for buyers in active research","Email into verified decision-makers at target accounts","Custom data build where the audience does not exist yet","Cost per accepted lead reported per channel, not blended"]},{"id":"protect-quality","title":"Hold quality while the number goes up","body":"Scaling volume is where quality usually slips. We watch acceptance rate as the leading indicator — if it drops as volume rises, the targeting is loosening, and we tighten it rather than keep hitting the count.","points":["Acceptance rate tracked weekly as the quality signal","Filters tightened before volume is allowed to grow further","Per-segment performance so weak segments are cut, not averaged","Full audit trail on every delivered record"]}],["content-syndication","email-marketing","b2b-data"],["More leads, against a definition you wrote.","Tell us what a qualified lead looks like in your business and we will show you how much of that audience is reachable.","Get more leads"]],
  ["build-pipeline","Build Pipeline","Full-funnel programs that carry a prospect from first content interaction to sales-qualified opportunity.","Objective 02 · Build pipeline","From first touch to","qualified pipeline.","Pipeline is not a bigger pile of leads. It is a sequence that carries a buyer from first interaction to a conversation their organisation is ready to have — and it needs the whole committee, not one contact.",[["7–14","Touches per account before qualification"],["3–4","Contacts engaged per account, minimum"],["6","Channels available in the mix"],["Monthly","Pipeline contribution reporting"]],[{"id":"map-the-journey","title":"Map the funnel your buyers actually walk","body":"Before choosing channels we map how your won deals really progressed — what the first touch was, how long each stage took, who joined the conversation and when. The program is built to that shape rather than to a generic funnel diagram.","points":["Stage-by-stage analysis of recent closed-won deals","Time-in-stage measured so the plan matches the real cycle","Committee entry points identified per stage","Drop-off points named as the places to intervene"]},{"id":"full-funnel","title":"Run every stage as one program","body":"Awareness content, mid-funnel qualification and late-stage outreach run off one calendar. A prospect who downloads a report gets a follow-up that references it, and the account is worked as a whole rather than as three unrelated campaigns.","points":["Awareness, consideration and decision content sequenced","Behaviour-triggered progression on open, download and reply","Committee coverage widened as the account warms","One team accountable across the whole funnel"]},{"id":"handoff","title":"Hand off at the point sales can act","body":"The handoff is where most pipeline leaks. We define the exact signal that sends an account to sales, and the context that travels with it, so a rep opens a conversation already knowing what the account read and asked.","points":["Handoff trigger defined and agreed with sales up front","Engagement history and content consumed passed with the record","Same-day routing so momentum is not lost to a queue","Feedback loop from sales into the qualification model"]},{"id":"measure-pipeline","title":"Report in pipeline, not in activity","body":"Every delivered lead is tracked through acceptance, meeting held, opportunity created and closed-won, so the program is reported in the terms your revenue team already uses and the spend sits next to what it produced.","points":["Lead-to-opportunity and opportunity-to-won conversion tracked","Cost per accepted lead, per meeting and per opportunity","Sourced and influenced pipeline reported separately","Clear read on what to scale, fix or stop each month"]}],["demand-generation","abm","audience-intelligence"],["Build a pipeline engine, not a lead pile.","We will map your current funnel against your won deals and show you where the pipeline is leaking.","Build your pipeline"]],
  ["accelerate-sales","Accelerate Sales","Qualified meetings booked straight into your reps' calendars, so selling time goes to selling.","Objective 03 · Accelerate sales","Book more meetings.","Close more revenue.","Your reps are the most expensive prospecting resource you have. We take the identification, qualification and booking off them and hand back confirmed meetings with the recording and the notes attached.",[["100%","Meetings replaced if they fail criteria"],["3","Channels in every outreach sequence"],["2–3 wks","Before the first meetings land"],["Recorded","Every qualification call"]],[{"id":"free-the-reps","title":"Take prospecting off the people who should be closing","body":"A rep splitting their week between prospecting and closing does neither well. We run the top of the process — list, sequence, qualification call — so their calendar fills with conversations that are already qualified.","points":["Outbound identification and first contact handled for you","Qualification completed before a meeting is booked","Meetings placed against live rep availability","Briefing note delivered before every call"]},{"id":"qualify-properly","title":"Qualify against your criteria, on the record","body":"Every qualification conversation is recorded and the answers captured against each criterion, so your managers can audit quality directly rather than trusting a summary — and a meeting that should not have been booked is visible immediately.","points":["Discovery flow built around your BANT or custom criteria","Full call recording and written notes per appointment","Answers captured criterion by criterion","Objections that recur written into the script weekly"]},{"id":"shorten-the-cycle","title":"Shorten the cycle by multi-threading early","body":"Deals stall when they depend on one contact. We identify and engage several members of the committee before the first meeting, so the conversation starts with more of the organisation already aware of it.","points":["Committee mapped before outreach begins","Multiple contacts engaged per target account","Referral paths opened where the first contact is not the buyer","Coverage gaps flagged to the rep before the meeting"]},{"id":"held-not-booked","title":"Report meetings held, not meetings booked","body":"Booked is a vanity number; held is the one that matters. Confirmations and reminders are handled, reschedules are chased by us, and held-versus-booked is reported separately so the figure you see is not inflated.","points":["Confirmation and reminder sequence on every booking","Reschedules and no-shows chased and rebooked by us","Held, rescheduled and no-show tracked separately","Weekly report with the evidence behind each meeting"]}],["appointment-generation","email-marketing","b2b-data"],["Give your reps a calendar worth opening.","Tell us what a meeting has to clear to be worth your rep's hour, and we will book against exactly that.","Accelerate your sales"]],
  ["launch-new-markets","Launch New Markets","Market entry built on audience evidence — ICP, messaging and execution for a region, product or persona you have no history in.","Objective 04 · Launch new markets","Enter a new market","with data behind you.","Entering a market you have no history in means every assumption is untested. We replace the assumptions with audience evidence first, then execute — so the launch spends against something you have actually verified.",[["4–6 wks","From kickoff to strategy handover"],["90","Day launch roadmap, week by week"],["50+","Countries we can build audience in"],["3","Personas profiled as standard"]],[{"id":"test-the-assumption","title":"Test the market before you commit the budget","body":"The cheapest failure is the one you find in research. We size the reachable audience, map who the buyers are and check whether the demand you are counting on actually shows up in intent data — before the launch budget is spent.","points":["Reachable audience sized before targets are set","Buying committee mapped for the new segment","Category intent checked for real research activity","Honest read where the opportunity is smaller than hoped"]},{"id":"position-for-strangers","title":"Position for buyers who have never heard of you","body":"Messaging that works on your installed base rarely works on a market with no context for you. We rebuild the value proposition for a stranger — including the credibility problem of being unknown in that region or category.","points":["Value proposition rewritten for an audience with no context","Competitive positioning against the incumbents there","Proof points selected for relevance in the new market","Local objections and regulatory concerns addressed directly"]},{"id":"regional-compliance","title":"Launch compliantly in the region you are entering","body":"A new region means a new legal regime. Lawful basis is documented per region before the first send, and outreach practice is adjusted to local norms — which is a commercial matter as much as a legal one.","points":["Lawful basis documented per region before launch","GDPR, CAN-SPAM and CASL aligned by territory","Language and local-norm review on outbound copy","Suppression and consent trails maintained per market"]},{"id":"prove-then-scale","title":"Prove the motion small, then scale it","body":"The first ninety days are for learning which channel and message work in this market, at a spend level where being wrong is survivable. Scale follows evidence rather than the launch date.","points":["Week-by-week roadmap with owners and decision gates","Small paid pilot before committing the full budget","Early indicators defined to watch before lagging metrics move","Scale-up criteria agreed in advance, not argued later"]}],["gtm-strategy","audience-intelligence","demand-generation"],["Launch on evidence, not on optimism.","Tell us the market you are considering and we will tell you how big the reachable audience actually is.","Plan your market launch"]],
  ["improve-abm-performance","Improve ABM Performance","Audit, rebuild and run ABM on real intent and committee coverage instead of a list someone picked once.","Objective 05 · Improve ABM performance","Stop running ABM","on assumptions.","Most underperforming ABM programs fail in one of three places: the account list, the committee coverage, or the orchestration. We find which, rebuild that layer, and run the program on evidence.",[["9","Committee roles mapped per account"],["3","Layers audited — list, coverage, orchestration"],["Tiered","1:1, 1:few and 1:many plays"],["Monthly","Account engagement reporting"]],[{"id":"audit-first","title":"Find which layer is actually failing","body":"ABM programs rarely fail everywhere at once. We audit the three layers separately — is the account list wrong, is the committee under-covered, or is the orchestration incoherent — because rebuilding the wrong one costs a quarter.","points":["Account list re-scored against fit and current intent","Committee coverage measured per account, not assumed","Channel orchestration reviewed for message coherence","A clear verdict on which layer to rebuild first"]},{"id":"rebuild-the-list","title":"Rebuild the account list on fit and intent","body":"Most target account lists are a filter someone set once, or a wish list from sales. We rebuild from the pattern in your won deals, overlay current research activity, and tier the result so 1:1 effort goes where it can pay for itself.","points":["Fit scoring derived from closed-won and closed-lost data","Intent overlay to prioritise accounts researching now","Tier 1 / 2 / 3 split matched to what each tier can justify","Existing pipeline and customers suppressed or flagged"]},{"id":"close-coverage-gaps","title":"Close the buying committee gaps","body":"Committee coverage is the number that predicts whether an ABM deal closes. We track it per account by role and seniority, and flag the gaps while there is still time to do something about them.","points":["Coverage tracked by role and seniority per account","Alerts when a decisive role is entirely unengaged","Multi-threading targets set and reported against","Coverage trend shown next to opportunity progression"]},{"id":"orchestrate","title":"Make the channels tell one story","body":"When ads, email and SDR outreach run independently, the account receives three unrelated pitches in a fortnight. One orchestration plan defines which play runs where, what each role sees, and where sales takes over.","points":["One plan across every channel and every account tier","Message variants written per committee role","Frequency capped per account, not just per contact","Marketing-to-sales handoff points defined per play"]}],["abm","audience-intelligence","performance-marketing"],["Find out which layer of your ABM is broken.","We will audit the account list, the committee coverage and the orchestration, and tell you which one to fix first.","Improve your ABM"]],
  ["increase-webinar-attendance","Increase Webinar Attendance","Registration driven from your ICP, with the volume committed in writing and attendance data delivered after.","Objective 06 · Increase webinar attendance","Fill every seat with","the right buyers.","A webinar with the wrong audience is worse than a small one — it costs the same to run and produces nothing to follow up. We drive registration from your ICP and hand back the engagement data that tells you who to call.",[["Guaranteed","Registration volume targets"],["4–6 wks","Recommended promotion runway"],["3","Reminder touches before the event"],["100%","Registrants matched to your ICP"]],[{"id":"right-audience","title":"Fill the room from your ICP, not from a list","body":"Registration volume from a general opt-in pool looks fine on a dashboard and produces nothing afterwards. Every registrant we drive is built to your ICP filters before promotion starts, so the follow-up list is worth working.","points":["Audience built to your ICP filters before promotion begins","Named-account targeting where you supply the list","Existing customers and competitors suppressed","Segment-level reporting on which audiences registered"]},{"id":"registration-page","title":"Stop losing registrations on the form","body":"Most webinar pages lose a meaningful share of interested buyers to a form that asks too much too early. We audit the page registrations actually land on and tell you which fields are costing you sign-ups.","points":["Every form field justified or cut","Above-the-fold value proposition and speaker credibility","Mobile and load-speed review on the real page","Confirmation and calendar-invite flow checked end to end"]},{"id":"show-up-rate","title":"Convert registrations into attendance","body":"The gap between registered and attended is where most webinar value is lost. A paced reminder sequence, a calendar invite that actually lands, and a same-day nudge move that number more than extra promotion does.","points":["Reminder sequence across the week before and the day of","Calendar invite delivered at the point of registration","Same-day nudge to registrants who have not joined","On-demand link sent to no-shows while intent is warm"]},{"id":"after-the-event","title":"Use what the attendance data tells you","body":"Attendance is where the useful signal starts. Time in session, questions asked and poll answers rank your follow-up far better than the registration list — and no-shows are a separate, still-warm audience.","points":["Time-in-session recorded per attendee","Questions and poll responses attached per contact","Engagement-ranked follow-up list handed to sales","No-shows segmented for on-demand re-engagement"]}],["webinar-promotion","content-syndication","email-marketing"],["Fill the room with buyers, not registrations.","Tell us the event and the audience, and we will commit to a registration number in writing.","Promote your webinar"]]
];
var servicesThing: any = {
 "demand-generation": [
  "Demand Generation",
  "We build and execute full-funnel demand generation programs that identify in-market buyers, engage decision-makers across multiple channels, and deliver qualified leads ready for sales follow-up."
 ],
 "content-syndication": [
  "Content Syndication",
  "Distribute your best content — whitepapers, eBooks, webinars, reports — to verified B2B audiences actively researching your category. Every content lead meets your ICP filters."
 ],
 "abm": [
  "Account-Based Marketing (ABM)",
  "Target your most valuable accounts with precision. We build buying committee maps, identify key decision-makers, and orchestrate coordinated outreach across email, advertising, and human channels."
 ],
 "email-marketing": [
  "Email Marketing",
  "Precision B2B email campaigns reaching verified decision-makers at your target accounts. Every campaign is built for deliverability, compliance, and conversion — not just open rates."
 ],
 "audience-intelligence": [
  "Audience Intelligence",
  "Before you spend a dollar on outreach, know exactly who to reach. We build verified audience profiles using business intelligence platforms, intent data, and human research to give your campaigns a targeting advantage."
 ],
 "b2b-data": [
  "High-Intent B2B Data",
  "Access verified, permission-based B2B contact databases built for outreach. Every record is validated, enriched, and matched to your ICP — no recycled or low-quality lists."
 ],
 "webinar-promotion": [
  "Webinar & Event Promotion",
  "Fill your webinars, virtual events, and in-person conferences with qualified registrants. We drive attendance from your ICP using email, content syndication, and targeted outreach."
 ],
 "appointment-generation": [
  "Appointment Generation",
  "We book qualified sales meetings directly into your team’s calendars. Our SDR and telemarketing team identifies, qualifies, and converts in-market buyers into confirmed appointments."
 ],
 "gtm-strategy": [
  "GTM Strategy",
  "Launch new markets, products, or personas with a data-driven go-to-market strategy built by B2B growth experts. We define your ICP, messaging, channel mix, and execution roadmap."
 ],
 "performance-marketing": [
  "Digital & Performance Marketing",
  "Paid search, display, programmatic, and social advertising campaigns managed for maximum ROI. We run performance marketing programs built around pipeline contribution, not impressions."
 ]
};

// helper
function getObj(k: any) {
  let found: any = undefined
  for (var i = 0; i < DATA_OBJ.length; i++) {
    if (DATA_OBJ[i][0] === k) {
      if (found == undefined) {
        found = DATA_OBJ[i]
      }
    }
  }
  return found
}

const pad = (n: any) => String(n).padStart(2, "0")

export function generateStaticParams() {
  return DATA_OBJ.map((o: any) => ({ objective: o[0] }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const x = getObj((await params).objective);
  var res: any = {};
  if (!!x) {
    res = {
      title: `${x[1]} · B2B Solutions · Lidespy`,
      description: x[6],
      alternates: { canonical: "/solutions/" + x[0] },
    };
  }
  return res;
}

// Here's the updated code with the fix:
export default async function ObjectivePage({ params }: any) {
  const objective = getObj((await params).objective);
  if (!objective) notFound();

  // const position = OBJECTIVES.findIndex((o) => o.key === objective.key);
  let position = DATA_OBJ.indexOf(objective);
  const others = DATA_OBJ.filter((o: any) => o[0] !== objective[0]);
  const services = objective[9].map((key: any) => [key, servicesThing[key]]).filter((s: any) => s[1] !== undefined);
  const nn = pad(position + 1);
  var sections_temp = objective[8];

  return (
    <div
      data-gsap-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <Temp2 t={5} />
      <Temp2 t={6} />
      <Temp2 t={1} a="enable" />

      {/* HERO */}
      <section data-hero className="dc-rules-dark relative overflow-hidden bg-ink text-cream">
        <div aria-hidden className="pointer-events-none absolute -top-[30%] -left-[14%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.30),transparent_62%)] blur-[14px]" />
        <div aria-hidden className="pointer-events-none absolute -right-[18%] -bottom-[46%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.14),transparent_66%)]" />

        <div className="relative mx-auto max-w-[1280px] page-x">
          <div aria-hidden data-hero-ghost className="pointer-events-none absolute top-[44px] right-8 hidden leading-[0.8] font-medium tracking-[-0.06em] text-transparent select-none lg:block [-webkit-text-stroke:1.5px_rgba(255,90,79,0.26)] [font-size:clamp(180px,18vw,260px)]">
            {nn}
          </div>

          <div data-hero-fade className="flex items-center justify-between gap-4 border-b border-cream/12 py-5 text-[11px] font-semibold tracking-[0.14em] uppercase">
            <Link href="/solutions" className="inline-flex items-center gap-2.5 text-cream/55 transition-colors hover:text-coral">
              <span className="text-coral">←</span>
              {"All solutions"}
            </Link>
            <div className="flex items-center gap-3 text-cream/45">
              <span className="hidden sm:inline">{"Objective"}</span>
              <span className="tabular-nums text-cream">
                {nn}
                <span className="text-cream/35"> / {pad(DATA_OBJ.length)}</span>
              </span>
            </div>
          </div>

          <div className="relative grid items-end gap-[clamp(40px,5vw,88px)] pt-[clamp(36px,4.5vw,68px)] pb-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
            <div className="flex flex-col gap-[clamp(22px,2.6vw,36px)]">
              <div data-hero-fade className="self-start">
                <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-coral/45 text-coral">{objective[3]}</div>
              </div>

              <h1 data-hero-title className="m-0 text-[clamp(42px,6.2vw,96px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-balance">
                    {objective[4]}
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-[#ff5a4f] text-balance">
                    {objective[5]}
                  </span>
                </span>
              </h1>

              <p data-hero-fade className="m-0 max-w-[54ch] text-[clamp(16px,1.3vw,19.5px)] leading-[1.6] text-cream/68 text-pretty">
                {objective[6]}
              </p>

              <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
                <Link href="/contact" data-btn="red" className={"inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase " + "py-2 pr-2 pl-7 text-[13px]" + " " + "bg-brand-cta text-white"}>
                  {objective[10][2]}
                  <span data-chip className="inline-flex items-center justify-center rounded-ui bg-ink text-coral h-12 w-12 text-[17px]">
                    <span className="inline-block">→</span>
                  </span>
                </Link>
                <Link href="#how" data-textlink className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase">
                  {"How we approach it"}
                  <span data-arrow className="text-[16px] text-coral">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div data-hero-panel className="rounded-card border border-cream/14 bg-cream/[0.04] px-[clamp(22px,2vw,30px)] pt-5 pb-2 backdrop-blur-[2px]">
                <div className="flex items-center justify-between border-b border-cream/14 pb-4 text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                  <span className="text-cream/45">{"By the numbers"}</span>
                  <span className="inline-flex items-center gap-2 text-coral">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                    Lidespy
                  </span>
                </div>
                {objective[7].map((s: any) => {
                  // countable
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
                    <div data-hero-panel className="rounded-[3px] border border-cream/12 bg-cream/[0.025] px-[clamp(22px,2vw,30px)] pt-[18px] pb-2">
                      <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                        {"On this page"}
                      </div>
                      {sections_temp.map((it: any, i: any) => (
                        <a key={it.id} href={`#${it.id}`} className="group flex items-baseline gap-3 border-b border-cream/10 py-[8px] text-[13.5px] text-cream/85 transition-colors last:border-b-0 hover:text-coral">
                          <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-coral/80">
                            {pad(i + 1)}
                          </span>
                          <span className="min-w-0 flex-1 leading-[1.3]">{it.title}</span>
                          <span className="translate-x-0 text-coral opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  )
                } else {
                  return null
                }
              })()}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-cream/12 py-3.5">
          <div className="ld-marquee ld-marquee-slow">
            {[...sections_temp.map((s: any) => s.title), ...sections_temp.map((s: any) => s.title)].map((tt: any, i: any) => (
              <span key={i} className="inline-flex items-center gap-[18px] px-[22px] text-[11.5px] tracking-[0.12em] whitespace-nowrap text-cream/50 uppercase">
                {tt}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* section run */}
      <section id="how" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(48px,5vw,84px)]">
        <div className="grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-26 lg:self-start">
            <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{"How we approach it"}</div>
            <div className="mt-6 flex flex-col">
              {sections_temp.map((s: any, i: any) => (
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
            {sections_temp.map((s: any, i: any) => (
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
          <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">{"Services we deploy"}</div>
          <p className="mt-5 mb-8 max-w-[52ch] text-[clamp(17px,1.6vw,24px)] leading-[1.35] font-medium tracking-[-0.02em] text-ink text-pretty">
            {"The programs that do the work behind this objective."}
          </p>
          <div className={`grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] ${""}`}>
            {services.map((s: any) => (
              <Link key={"/services/" + s[0] + s[1][0]} href={"/services/" + s[0]} className="flex flex-col gap-3 rounded-card border border-ink/12 bg-white px-[22px] pt-[22px] pb-6 transition-colors hover:border-brand/45">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink text-pretty">
                    {s[1][0]}
                  </div>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                </div>
                <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">
                  {s[1][1]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* other objectives (feature) */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,72px)]">
        <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-[#be1622]/45 text-[#be1622]">{"Other objectives"}</div>
        <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
          {others.map((o: any) => (
            <Link key={"/solutions/" + o[0] + o[1]} href={"/solutions/" + o[0]} className="flex flex-col gap-3 rounded-card border border-ink/14 px-[26px] pt-6 pb-7 transition-colors hover:border-brand/45 hover:bg-white">
              <div className="flex items-start justify-between gap-4">
                <div className="text-[clamp(20px,2vw,26px)] leading-[1.15] font-medium tracking-[-0.022em] text-ink text-pretty">
                  {o[1]}
                </div>
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="mt-1.5 shrink-0 text-brand"><path d="m9 5 7 7-7 7" /></svg>
              </div>
              <div className="text-[14px] leading-[1.6] text-muted text-pretty">
                {o[2]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">
            {objective[10][0]}
          </h2>
          <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            {objective[10][1]}
          </p>
          <Link href="/contact" className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink">
            {objective[10][2]}
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

          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
              Services
            </div>
            {[["Demand Generation", "demand-generation"], ["Content Syndication", "content-syndication"], ["Account-Based Marketing", "abm"], ["Email Marketing", "email-marketing"], ["Audience Intelligence", "audience-intelligence"], ["High-Intent B2B Data", "b2b-data"], ["Appointment Generation", "appointment-generation"]].map((l: any) => (
              <Link key={l[0]} href={`/services/${l[1]}`} className="text-[12.5px] transition-colors hover:text-brand text-muted">
                {l[0]}
              </Link>
            ))}
            <Link href="/services" className="text-[12.5px] transition-colors hover:text-brand font-semibold text-brand">
              All 13 services
            </Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
              Solutions
            </div>
            {["Technology", "SaaS", "Cybersecurity", "FinTech", "Healthcare", "Generate More Leads", "Build Pipeline", "Accelerate Sales"].map((l: any, idx: any) => (
              <Link key={l} href={idx < 5 ? "/industries" : "/solutions#objective"} className="text-[12.5px] transition-colors hover:text-brand text-muted">
                {l}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
              Company
            </div>
            <Link href="/about" className="text-[12.5px] transition-colors hover:text-brand text-muted">About Us</Link>
            <Link href="/why-lidespy" className="text-[12.5px] transition-colors hover:text-brand text-muted">Why Lidespy</Link>
            <Link href="/resources" className="text-[12.5px] transition-colors hover:text-brand text-muted">Resources</Link>
            <Link href="/blog" className="text-[12.5px] transition-colors hover:text-brand text-muted">Blog</Link>
            <Link href="/calculator" className="text-[12.5px] transition-colors hover:text-brand text-muted">Campaign Budget Calculator</Link>
            <Link href="/contact" className="text-[12.5px] transition-colors hover:text-[#be1622] text-muted">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
              Compliance
            </div>
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
            <Temp2 t={2} a="cursor-pointer text-muted-2 transition-colors hover:text-brand" />
            <Temp2 t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
