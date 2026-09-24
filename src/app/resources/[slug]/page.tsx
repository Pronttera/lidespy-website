// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment } from "react";
import TEMP2 from "./temp2";

// v2 - all the data is here now (dont move it)
const PAGES_DATA_v3: any = [
  ["b2b-demand-generation-benchmark-report","Industry report · Annual · 2026 edition","CPL, conversion and channel benchmarks from 500+ executed B2B campaigns.","Industry report · Annual","What a B2B campaign","actually costs now.","Cost per lead, conversion rates and channel performance drawn from more than 500 campaigns we executed across technology, SaaS and enterprise markets — with the ranges shown rather than the averages that hide them.",[["500+","Campaigns analysed"],["12","Industries covered"],["6","Channels benchmarked"],["Free","No paywall, no drip sequence"]],[{"ID":"whats-inside","t":"What the report covers","b":"Benchmarks are only useful if you can find yourself in them. Every figure is broken out by channel, segment and region rather than reported as a single blended number that describes nobody's programme.","pts":["Cost per lead by channel, segment and region","Lead-to-opportunity and opportunity-to-won conversion","Channel mix of the programmes that outperformed","Budget allocation patterns by company size"]},{"ID":"findings","t":"The findings that changed our own advice","b":"Three results in this year's data run against advice that was standard eighteen months ago — including the widening cost gap between segments that used to be priced almost identically.","pts":["Enterprise and mid-market CPL have diverged sharply","Multi-channel programmes convert well above single-channel","Committee coverage predicts close rate more than lead volume","Speed of follow-up still outweighs almost every other factor"]},{"ID":"methodology","t":"How the numbers were produced","b":"The data comes from campaigns we ran and can account for, not from a survey of what marketers believe their numbers are. That narrows the sample and makes it considerably more reliable.","pts":["Executed campaign data, not self-reported survey responses","Outliers shown rather than trimmed away","Ranges and quartiles reported, not just medians","Sample size stated for every individual benchmark"]},{"ID":"how-to-use","t":"Using it on your own numbers","b":"A benchmark is a question, not a verdict. The useful exercise is finding where you sit outside the range and asking whether that is a deliberate choice or an unexamined one.","pts":["Compare against your segment, never the blended figure","Treat a gap as a question about targeting or follow-up","Use the ranges to sanity-check next year's budget","Re-run the comparison quarterly, not annually"]}],["demand-generation","audience-intelligence"],["Want the report and a read on your own numbers?","We will send the report and walk through how your current programme compares to the benchmarks for your segment.","Request the report"]],
  ["state-of-abm-report","Industry report · Annual · 2026 edition","What actually moves pipeline in account-based programmes — intent, coverage and orchestration.","Industry report · Annual","Why most ABM","never moves pipeline.","Most account-based programmes produce impressive dashboards and unimpressive pipeline. This report looks at what actually distinguished the programmes that moved revenue from the ones that only moved engagement scores.",[["3","Layers where programmes fail"],["9","Committee roles tracked per account"],["2026","Edition, published this year"],["Free","No paywall, no drip sequence"]],[{"ID":"whats-inside","t":"What the report covers","b":"The report is organised around the three layers where ABM programmes fail — the account list, the committee coverage and the orchestration — because in our experience a failing programme is almost always failing in exactly one of them.","pts":["How high and low performers build their account lists","Committee coverage levels against close rate","Orchestration patterns across channels and tiers","Where intent data helped and where it misled"]},{"ID":"findings","t":"Coverage beats effort","b":"The clearest result in the data: how many of the buying committee you engaged predicted the outcome better than how many touches you delivered. Programmes working three or four contacts per account outperformed those working one contact very hard.","pts":["Multi-threaded accounts closed at a materially higher rate","Single-contact accounts stalled at the same predictable stage","Intent without fit scoring produced expensive false positives","Tiering discipline separated the top quartile from the rest"]},{"ID":"methodology","t":"How the numbers were produced","b":"Drawn from account-based programmes we ran or audited, with outcomes tracked to opportunity and close rather than to engagement. Programmes without outcome data were excluded rather than estimated.","pts":["Outcomes tracked to opportunity and closed-won","Programmes without outcome data excluded entirely","Account tiers analysed separately, never blended","Sample size stated for every finding"]},{"ID":"how-to-use","t":"Auditing your own programme against it","b":"The report doubles as an audit structure. Working through the three layers in order usually surfaces the failing one within a morning — and it is rarely the layer teams expect.","pts":["Score your account list on fit and current intent","Measure committee coverage per account honestly","Check whether channels tell one story or three","Fix one layer before touching the other two"]}],["abm","audience-intelligence"],["Want the report and an audit of your programme?","We will send the report and review your account list, coverage and orchestration against what the data says works.","Request the report"]],
  ["content-syndication-performance-report","Industry report · 2026 edition","Asset types, qualification filters and follow-up timing that turn syndicated leads into meetings.","Industry report","Why syndicated leads","convert, or don't.","Content syndication has a reputation problem earned by programmes run without filters or follow-up. This report separates what actually predicts conversion from what buyers of syndication have been told to optimise.",[["5","Asset types compared"],["48h","Follow-up window that mattered most"],["2026","Edition, published this year"],["Free","No paywall, no drip sequence"]],[{"ID":"whats-inside","t":"What the report covers","b":"Which assets produce leads that convert, which qualification filters are worth their cost in volume, and how quickly follow-up has to happen before a syndicated lead stops responding.","pts":["Conversion by asset type — report, guide, webinar, checklist","The filters that improved quality and those that only cut volume","Follow-up timing against reply and meeting rates","Where CPL pricing beat flat-fee, and where it did not"]},{"ID":"findings","t":"Speed of follow-up dominated everything","b":"No filter, asset or targeting choice moved conversion as much as how fast the lead was contacted after download. Programmes following up within two days outperformed identical programmes that waited a week.","pts":["The 48-hour window mattered more than any targeting variable","Deeper filters raised quality but hit volume ceilings fast","Practical assets outperformed thought-leadership assets","Custom qualification questions predicted fit well"]},{"ID":"methodology","t":"How the numbers were produced","b":"Campaign-level data from syndication programmes we executed, with conversion tracked through to accepted lead and meeting rather than stopping at the download.","pts":["Tracked to accepted lead and meeting, not to download","Asset types compared within the same audience segments","Follow-up timing recorded per lead, not assumed","Sample size stated for every comparison"]},{"ID":"how-to-use","t":"Fixing a programme that is underperforming","b":"If your syndication is producing leads nobody works, the fix is usually operational rather than a targeting change. Follow-up capacity is the first thing to check.","pts":["Check follow-up speed before changing the filters","Match delivery pacing to what your team can actually work","Test one asset type against another in the same segment","Insist on replacement terms for off-criteria leads"]}],["content-syndication","email-marketing"],["Want the report and a look at your syndication?","We will send the report and review where your current programme is losing conversion between download and follow-up.","Request the report"]],
  ["b2b-buyer-research-phase","Insight · Q3 2026","Buyers are researching for longer and engaging vendors later — what that does to campaign timing.","Insight · Q3 2026","Buyers research longer,","and call you later.","Across twelve industries the research phase has stretched while the vendor conversation has shortened. By the time a buyer contacts you, more of the decision is already made — which changes what a campaign has to do and when.",[["12","Industries in the sample"],["Q3","2026 intent data window"],["70%","Of evaluation done before first contact"],["Free","No paywall, no drip sequence"]],[{"ID":"what-changed","t":"The research phase keeps stretching","b":"Buyers are spending longer in anonymous research before identifying themselves, and arriving at the first vendor conversation with a shortlist already formed. The window in which you can influence the decision has moved earlier.","pts":["Longer anonymous research before any vendor contact","Shortlists formed before the first conversation","More stakeholders involved in the research phase","Budget scrutiny extending the timeline further"]},{"ID":"why","t":"Why it is happening","b":"Two forces at once: more information is available without talking to a salesperson, and post-2023 budget scrutiny means more people must agree before anything is signed. Both push discovery earlier and decisions later.","pts":["Independent information easily available without vendor contact","AI summarisation compressing the early comparison stage","More approvers required for the same spend","Consolidation pressure favouring incumbent vendors"]},{"ID":"implications","t":"What it means for campaign timing","b":"If most of the evaluation happens before you know the buyer exists, waiting for a hand-raise means arriving after the shortlist is set. Intent signals and always-on presence stop being sophistication and become the baseline.","pts":["Intent monitoring to catch accounts during research","Always-on presence rather than campaign bursts","Content that answers comparison questions directly","Committee-wide reach, since research is now collective"]},{"ID":"what-to-do","t":"What to change this quarter","b":"Three practical adjustments, in the order that pays back fastest. None of them require a new budget line — they are mostly a reallocation of attention from late-stage capture to early-stage presence.","pts":["Move budget from hand-raise capture toward intent-led outreach","Publish comparison and alternatives content you have avoided","Widen reach to the full committee, not the champion","Measure first-touch to opportunity, not last-touch"]}],["audience-intelligence","demand-generation"],["Find out which accounts are researching you now.","We will run intent analysis against your ICP and show you the accounts already in the research phase.","Book a strategy call"]],
  ["marketing-roi-pipeline-not-mqls","Insight · Q2 2026","Why sourced pipeline is the only marketing metric revenue teams trust — and how to report it.","Insight · Q2 2026","Report pipeline,","not MQLs.","The MQL survived because it was easy to count, not because it predicted revenue. As budget scrutiny has tightened, marketing teams still reporting lead volume are finding the number no longer buys them any credibility.",[["SQL","The unit that survives scrutiny"],["Q2","2026 analysis window"],["3","Metrics worth reporting upward"],["Free","No paywall, no drip sequence"]],[{"ID":"the-problem","t":"The MQL measures effort, not outcome","b":"An MQL records that marketing did something and someone responded. It says nothing about whether the account can buy, wants to buy, or ever will — which is why sales teams learned to discount the number.","pts":["Volume optimisation rewards cheap, unqualified responses","Definitions drift until the number is no longer comparable","Sales discounts the figure, so it stops informing decisions","Finance cannot connect it to anything on the P&L"]},{"ID":"what-to-measure","t":"The three numbers worth reporting upward","b":"Sourced pipeline, cost per opportunity, and pipeline-to-close conversion. Together they answer what marketing produced, what it cost, and whether it was real — which is the entire question being asked.","pts":["Sourced pipeline value, attributed to campaign and channel","Cost per opportunity rather than cost per lead","Pipeline-to-close conversion by source","Influenced pipeline reported separately, never blended in"]},{"ID":"how-to-instrument","t":"Instrumenting it without a replatform","b":"Most teams can report this on the systems they already run. The work is stamping campaign and source on every record at creation and agreeing one attribution rule that both marketing and sales accept.","pts":["Stamp campaign and source at record creation, not later","Agree one attribution model and stop relitigating it","Feed offline conversions back to the ad platforms","Report on the same cadence as the sales forecast"]},{"ID":"the-conversation","t":"Changing the conversation with finance","b":"Reporting in pipeline moves marketing from a cost centre defending activity to a function forecasting contribution. It also removes the incentive to buy cheap leads to hit a number nobody trusts.","pts":["Forecast contribution rather than report activity","Defend budget with cost per opportunity, not volume","Make the trade-off between volume and quality explicit","Retire the MQL target rather than running both"]}],["demand-generation","abm"],["Report on pipeline instead of lead volume.","We will show you how we track delivered leads through to opportunity and closed-won, and what it takes to instrument.","Book a strategy call"]]
];
var res_list = [{"s":"b2b-demand-generation-benchmark-report","title":"B2B Demand Generation Benchmark Report","body":"CPL, conversion and channel performance benchmarks drawn from 500+ executed campaigns.","img":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=70"},{"s":"state-of-abm-report","title":"State of ABM Report","body":"What actually moves pipeline in account-based programs — intent, coverage and orchestration.","img":"https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=70"},{"s":"content-syndication-performance-report","title":"Content Syndication Performance Report","body":"Asset types, qualification filters and follow-up timing that convert syndicated leads into meetings.","img":"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=70"},{"s":"b2b-buyer-research-phase","title":"B2B buyer behavior: the research phase is getting longer","body":"Data-driven commentary on intent trends across 12 industries — and what it means for your campaign timing.","img":"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=70"},{"s":"marketing-roi-pipeline-not-mqls","title":"Marketing ROI: measuring pipeline, not MQLs","body":"Why sourced pipeline is the only metric revenue teams trust — and how to report it.","img":"https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1000&q=70"}];

// services (key, name, overview)
const SERVICE_STUFF = [["demand-generation","Demand Generation","We build and execute full-funnel demand generation programs that identify in-market buyers, engage decision-makers across multiple channels, and deliver qualified leads ready for sales follow-up."],["content-syndication","Content Syndication","Distribute your best content — whitepapers, eBooks, webinars, reports — to verified B2B audiences actively researching your category. Every content lead meets your ICP filters."],["abm","Account-Based Marketing (ABM)","Target your most valuable accounts with precision. We build buying committee maps, identify key decision-makers, and orchestrate coordinated outreach across email, advertising, and human channels."],["email-marketing","Email Marketing","Precision B2B email campaigns reaching verified decision-makers at your target accounts. Every campaign is built for deliverability, compliance, and conversion — not just open rates."],["audience-intelligence","Audience Intelligence","Before you spend a dollar on outreach, know exactly who to reach. We build verified audience profiles using business intelligence platforms, intent data, and human research to give your campaigns a targeting advantage."]];

// helper
function findPage(slug: any) {
  let res: any = undefined
  for (var i = 0; i < PAGES_DATA_v3.length; i++) {
    if (PAGES_DATA_v3[i][0] === slug) {
      res = PAGES_DATA_v3[i]
    }
  }
  return res
}

function getValue(x: any) { return x }

export function generateStaticParams() {
  return PAGES_DATA_v3.map((p: any) => ({ slug: p[0] }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = (await params).slug;
  const data = findPage(slug);
  const data2 = res_list.find((r: any) => r.s === slug);
  if (!data || !data2) {
    return {};
  } else {
    return {
      title: `${data2.title} · Resources · Lidespy`,
      description: data[6],
      alternates: { canonical: `/resources/${slug}` },
    };
  }
}

// Here's the updated code with the fix:
export default async function Page({ params }: any) {
  const slug = (await params).slug;
  const data = findPage(slug);
  const temp = res_list.find((r: any) => r.s === slug);
  if (!data || !temp) notFound();

  let position = res_list.findIndex((r: any) => r.s === slug);
  const others = res_list.filter((r: any) => r.s !== slug);
  var services_final = data[9].map((k: any) => SERVICE_STUFF.find((s: any) => s[0] === k)).filter((s: any) => s !== undefined);
  const nn = String(position + 1).padStart(2, "0");
  const isLoading = false;

  return (
    <div
      data-gsap-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <TEMP2 t={4} />
      <TEMP2 t={5} />
      <TEMP2 t={1} a="resources" />

      {/* hero */}
      <section data-hero className="dc-rules-dark relative overflow-hidden bg-ink text-cream">
        <div aria-hidden className="pointer-events-none absolute -top-[30%] -left-[14%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.30),transparent_62%)] blur-[14px]" />
        <div aria-hidden className="pointer-events-none absolute -right-[18%] -bottom-[46%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.14),transparent_66%)]" />

        <div className="relative mx-auto max-w-[1280px] page-x">
          <div aria-hidden data-hero-ghost className="pointer-events-none absolute top-[44px] right-8 hidden leading-[0.8] font-medium tracking-[-0.06em] text-transparent select-none lg:block [-webkit-text-stroke:1.5px_rgba(255,90,79,0.26)] [font-size:clamp(180px,18vw,260px)]">
            {nn}
          </div>

          <div data-hero-fade className="flex items-center justify-between gap-4 border-b border-cream/12 py-5 text-[11px] font-semibold tracking-[0.14em] uppercase">
            <Link href={"/resources"} className="inline-flex items-center gap-2.5 text-cream/55 transition-colors hover:text-coral">
              <span className="text-coral">←</span>
              {"Resource library"}
            </Link>
            <div className="flex items-center gap-3 text-cream/45">
              <span className="hidden sm:inline">{"Resource"}</span>
              <span className="tabular-nums text-cream">
                {nn}
                <span className="text-cream/35"> / {String(res_list.length).padStart(2, "0")}</span>
              </span>
            </div>
          </div>

          <div className="relative grid items-end gap-[clamp(40px,5vw,88px)] pt-[clamp(36px,4.5vw,68px)] pb-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
            <div className="flex flex-col gap-[clamp(22px,2.6vw,36px)]">
              <div data-hero-fade className="self-start">
                <div className={"inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase " + "border-coral/45 text-coral"}>{data[3]}</div>
              </div>

              <h1 data-hero-title className="m-0 text-[clamp(42px,6.2vw,96px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-balance">{data[4]}</span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-coral text-balance">{data[5]}</span>
                </span>
              </h1>

              <p data-hero-fade className="m-0 max-w-[54ch] text-[clamp(16px,1.3vw,19.5px)] leading-[1.6] text-cream/68 text-pretty">
                {data[6]}
              </p>

              <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
                <Link href="/contact" data-btn={"red"} className={`inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase py-2 pr-2 pl-7 text-[13px] bg-brand-cta text-white `}>
                  {data[10][2]}
                  <span data-chip className={`inline-flex items-center justify-center rounded-ui bg-ink text-coral h-12 w-12 text-[17px]`}>
                    <span className="inline-block">→</span>
                  </span>
                </Link>
                <Link href="#inside" data-textlink className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase">
                  {"What's inside"}
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
                {data[7].map((s: any) => {
                  // countable check (idk why but this fixes it)
                  const m = s[0].match(/^(\d+(?:\.\d+)?)([%+]*)$/);
                  const c = m ? { n: parseFloat(m[1]), suffix: m[2] } : null;
                  return (
                    <div key={s[1]} data-hero-row className="relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5 py-[15px]">
                      <span data-hero-rule className="absolute inset-x-0 bottom-0 h-px bg-cream/12" />
                      <div className="text-[13px] leading-[1.4] text-cream/62 text-pretty">{s[1]}</div>
                      <div data-count={c ? c.n : undefined} data-suffix={c ? c.suffix : undefined} className="text-[clamp(26px,2.4vw,36px)] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral">
                        {s[0]}
                      </div>
                    </div>
                  );
                })}
              </div>

              {(() => {
                if (!!data[8] == true) {
                  return (
                    <div data-hero-panel className="rounded-card border border-cream/12 bg-cream/[0.025] px-[clamp(22px,2vw,30px)] pt-[18px] pb-2">
                      <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">{"On this page"}</div>
                      {data[8].map((it: any, i: any) => (
                        <a key={it.ID} href={`#${it.ID}`} className="group flex items-baseline gap-3 border-b border-cream/10 py-[8px] text-[13.5px] text-cream/85 transition-colors last:border-b-0 hover:text-coral">
                          <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-coral/80">{String(i + 1).padStart(2, "0")}</span>
                          <span className="min-w-0 flex-1 leading-[1.3]">{it.t}</span>
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
            {[...data[8].map((s: any) => s.t), ...data[8].map((s: any) => s.t)].map((tt: any, i: any) => (
              <span key={i} className="inline-flex items-center gap-[18px] px-[22px] text-[11.5px] tracking-[0.12em] whitespace-nowrap text-cream/50 uppercase">
                {tt}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* cover image */}
      <section className="border-b border-ink/12 bg-panel">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[clamp(24px,3.5vw,56px)] page-x py-[clamp(32px,3.5vw,52px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className={`relative overflow-hidden bg-panel aspect-[16/10] rounded-ui`}>
            <Image src={temp.img} alt={temp.title} fill sizes="(max-width: 1024px) 100vw, 45vw" priority={false} className="object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[11px] font-semibold tracking-[0.12em] text-[#be1622] uppercase">
              {data[1]}
            </div>
            <h2 className="m-0 text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-medium tracking-[-0.024em] text-ink text-pretty">
              {temp.title}
            </h2>
            <p className="m-0 max-w-[54ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
              {temp.body}
            </p>
          </div>
        </div>
      </section>

      {/* section run */}
      <section id="inside" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(48px,5vw,84px)]">
        <div className="grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-26 lg:self-start">
            <div className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase ${isLoading ? "border-coral/45 text-coral" : "border-brand/45 text-brand"}`}>{"What's inside"}</div>
            <div className="mt-6 flex flex-col">
              {data[8].map((s: any, i: any) => (
                <a key={s.ID} href={`#${s.ID}`} className="flex items-baseline gap-3 border-b border-ink/12 py-3 text-[14px] leading-[1.35] text-muted transition-colors hover:text-brand">
                  <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1">{s.t}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            {data[8].map((s: any, i: any) => (
              <article key={s.ID} id={s.ID} className="scroll-mt-24 border-b border-ink/15 py-[clamp(32px,3.5vw,52px)] first:pt-0">
                <div className="mb-5 flex items-center gap-3.5">
                  <span className="text-[12px] font-semibold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
                </div>
                <h2 className="m-0 text-[clamp(24px,2.8vw,38px)] leading-[1.08] font-medium tracking-[-0.028em] text-pretty">{s.t}</h2>
                <p className="mt-4 mb-0 max-w-[62ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">{s.b}</p>
                <div className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {s.pts.map((pt: any) => (
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

      {/* related services */}
      <section className="bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
          <div className={"inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand"}>{"Related services"}</div>
          <p className="mt-5 mb-8 max-w-[52ch] text-[clamp(17px,1.6vw,24px)] leading-[1.35] font-medium tracking-[-0.02em] text-ink text-pretty">
            {getValue("The programs behind the numbers in this piece.")}
          </p>
          <div className={`grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] ${getValue("The programs behind the numbers in this piece.") ? "" : "mt-7"}`}>
            {services_final.map((s: any) => (
              <Link key={"/services/" + s[0] + s[1]} href={"/services/" + s[0]} className="flex flex-col gap-3 rounded-card border border-ink/12 bg-white px-[22px] pt-[22px] pb-6 transition-colors hover:border-brand/45">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink text-pretty">{s[1]}</div>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
                </div>
                <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">{s[2]}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* more from library (feature variant) */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,72px)]">
        <Fragment>
          <div className={"inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand"}>{"More from the library"}</div>
          <div className={"mt-7 grid gap-3.5 sm:grid-cols-2"}>
            {others.map((r: any) => {
              const hrefX = `/resources/${r.s}`;
              const summ = findPage(r.s)?.[2] ?? r.body;
              return (
                <Link key={hrefX + r.title} href={hrefX} className="flex flex-col gap-3 rounded-card border border-ink/14 px-[26px] pt-6 pb-7 transition-colors hover:border-brand/45 hover:bg-white">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[clamp(20px,2vw,26px)] leading-[1.15] font-medium tracking-[-0.022em] text-ink text-pretty">{r.title}</div>
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="mt-1.5 shrink-0 text-brand"><path d="m9 5 7 7-7 7" /></svg>
                  </div>
                  <div className="text-[14px] leading-[1.6] text-muted text-pretty">{summ}</div>
                </Link>
              );
            })}
          </div>
        </Fragment>
      </section>

      {/* cta */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">{data[10][0]}</h2>
          <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">{data[10][1]}</p>
          <Link href="/contact" className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink">
            {data[10][2]}
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      {/* footer */}
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
            <TEMP2 t={2} />
            <TEMP2 t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
