/**
 * Detail pages for the gated reports and the insight pieces, at
 * `/resources/<slug>`.
 *
 * Blog-category resources are not here — those open their article under
 * `/blog`. The card copy, cover image and category stay in `resources.ts`;
 * this file carries the page itself.
 */

import type { DetailCopy } from "./detail";

export type ResourcePage = DetailCopy & {
  /** Sits under the title in the hero — "Annual · 2026 edition". */
  meta: string;
  /** One line for the "more from the library" cards. */
  summary: string;
};

export const RESOURCE_PAGES: Record<string, ResourcePage> = {
  "b2b-demand-generation-benchmark-report": {
    meta: "Industry report · Annual · 2026 edition",
    summary: "CPL, conversion and channel benchmarks from 500+ executed B2B campaigns.",
    eyebrow: "Industry report · Annual",
    titleLead: "What a B2B campaign",
    titleAccent: "actually costs now.",
    intro:
      "Cost per lead, conversion rates and channel performance drawn from more than 500 campaigns we executed across technology, SaaS and enterprise markets — with the ranges shown rather than the averages that hide them.",
    stats: [
      { value: "500+", label: "Campaigns analysed" },
      { value: "12", label: "Industries covered" },
      { value: "6", label: "Channels benchmarked" },
      { value: "Free", label: "No paywall, no drip sequence" },
    ],
    sections: [
      {
        id: "whats-inside",
        title: "What the report covers",
        body: "Benchmarks are only useful if you can find yourself in them. Every figure is broken out by channel, segment and region rather than reported as a single blended number that describes nobody's programme.",
        points: [
          "Cost per lead by channel, segment and region",
          "Lead-to-opportunity and opportunity-to-won conversion",
          "Channel mix of the programmes that outperformed",
          "Budget allocation patterns by company size",
        ],
      },
      {
        id: "findings",
        title: "The findings that changed our own advice",
        body: "Three results in this year's data run against advice that was standard eighteen months ago — including the widening cost gap between segments that used to be priced almost identically.",
        points: [
          "Enterprise and mid-market CPL have diverged sharply",
          "Multi-channel programmes convert well above single-channel",
          "Committee coverage predicts close rate more than lead volume",
          "Speed of follow-up still outweighs almost every other factor",
        ],
      },
      {
        id: "methodology",
        title: "How the numbers were produced",
        body: "The data comes from campaigns we ran and can account for, not from a survey of what marketers believe their numbers are. That narrows the sample and makes it considerably more reliable.",
        points: [
          "Executed campaign data, not self-reported survey responses",
          "Outliers shown rather than trimmed away",
          "Ranges and quartiles reported, not just medians",
          "Sample size stated for every individual benchmark",
        ],
      },
      {
        id: "how-to-use",
        title: "Using it on your own numbers",
        body: "A benchmark is a question, not a verdict. The useful exercise is finding where you sit outside the range and asking whether that is a deliberate choice or an unexamined one.",
        points: [
          "Compare against your segment, never the blended figure",
          "Treat a gap as a question about targeting or follow-up",
          "Use the ranges to sanity-check next year's budget",
          "Re-run the comparison quarterly, not annually",
        ],
      },
    ],
    services: ["demand-generation", "audience-intelligence"],
    cta: {
      title: "Want the report and a read on your own numbers?",
      body: "We will send the report and walk through how your current programme compares to the benchmarks for your segment.",
      button: "Request the report",
    },
  },

  "state-of-abm-report": {
    meta: "Industry report · Annual · 2026 edition",
    summary: "What actually moves pipeline in account-based programmes — intent, coverage and orchestration.",
    eyebrow: "Industry report · Annual",
    titleLead: "Why most ABM",
    titleAccent: "never moves pipeline.",
    intro:
      "Most account-based programmes produce impressive dashboards and unimpressive pipeline. This report looks at what actually distinguished the programmes that moved revenue from the ones that only moved engagement scores.",
    stats: [
      { value: "3", label: "Layers where programmes fail" },
      { value: "9", label: "Committee roles tracked per account" },
      { value: "2026", label: "Edition, published this year" },
      { value: "Free", label: "No paywall, no drip sequence" },
    ],
    sections: [
      {
        id: "whats-inside",
        title: "What the report covers",
        body: "The report is organised around the three layers where ABM programmes fail — the account list, the committee coverage and the orchestration — because in our experience a failing programme is almost always failing in exactly one of them.",
        points: [
          "How high and low performers build their account lists",
          "Committee coverage levels against close rate",
          "Orchestration patterns across channels and tiers",
          "Where intent data helped and where it misled",
        ],
      },
      {
        id: "findings",
        title: "Coverage beats effort",
        body: "The clearest result in the data: how many of the buying committee you engaged predicted the outcome better than how many touches you delivered. Programmes working three or four contacts per account outperformed those working one contact very hard.",
        points: [
          "Multi-threaded accounts closed at a materially higher rate",
          "Single-contact accounts stalled at the same predictable stage",
          "Intent without fit scoring produced expensive false positives",
          "Tiering discipline separated the top quartile from the rest",
        ],
      },
      {
        id: "methodology",
        title: "How the numbers were produced",
        body: "Drawn from account-based programmes we ran or audited, with outcomes tracked to opportunity and close rather than to engagement. Programmes without outcome data were excluded rather than estimated.",
        points: [
          "Outcomes tracked to opportunity and closed-won",
          "Programmes without outcome data excluded entirely",
          "Account tiers analysed separately, never blended",
          "Sample size stated for every finding",
        ],
      },
      {
        id: "how-to-use",
        title: "Auditing your own programme against it",
        body: "The report doubles as an audit structure. Working through the three layers in order usually surfaces the failing one within a morning — and it is rarely the layer teams expect.",
        points: [
          "Score your account list on fit and current intent",
          "Measure committee coverage per account honestly",
          "Check whether channels tell one story or three",
          "Fix one layer before touching the other two",
        ],
      },
    ],
    services: ["abm", "audience-intelligence"],
    cta: {
      title: "Want the report and an audit of your programme?",
      body: "We will send the report and review your account list, coverage and orchestration against what the data says works.",
      button: "Request the report",
    },
  },

  "content-syndication-performance-report": {
    meta: "Industry report · 2026 edition",
    summary: "Asset types, qualification filters and follow-up timing that turn syndicated leads into meetings.",
    eyebrow: "Industry report",
    titleLead: "Why syndicated leads",
    titleAccent: "convert, or don't.",
    intro:
      "Content syndication has a reputation problem earned by programmes run without filters or follow-up. This report separates what actually predicts conversion from what buyers of syndication have been told to optimise.",
    stats: [
      { value: "5", label: "Asset types compared" },
      { value: "48h", label: "Follow-up window that mattered most" },
      { value: "2026", label: "Edition, published this year" },
      { value: "Free", label: "No paywall, no drip sequence" },
    ],
    sections: [
      {
        id: "whats-inside",
        title: "What the report covers",
        body: "Which assets produce leads that convert, which qualification filters are worth their cost in volume, and how quickly follow-up has to happen before a syndicated lead stops responding.",
        points: [
          "Conversion by asset type — report, guide, webinar, checklist",
          "The filters that improved quality and those that only cut volume",
          "Follow-up timing against reply and meeting rates",
          "Where CPL pricing beat flat-fee, and where it did not",
        ],
      },
      {
        id: "findings",
        title: "Speed of follow-up dominated everything",
        body: "No filter, asset or targeting choice moved conversion as much as how fast the lead was contacted after download. Programmes following up within two days outperformed identical programmes that waited a week.",
        points: [
          "The 48-hour window mattered more than any targeting variable",
          "Deeper filters raised quality but hit volume ceilings fast",
          "Practical assets outperformed thought-leadership assets",
          "Custom qualification questions predicted fit well",
        ],
      },
      {
        id: "methodology",
        title: "How the numbers were produced",
        body: "Campaign-level data from syndication programmes we executed, with conversion tracked through to accepted lead and meeting rather than stopping at the download.",
        points: [
          "Tracked to accepted lead and meeting, not to download",
          "Asset types compared within the same audience segments",
          "Follow-up timing recorded per lead, not assumed",
          "Sample size stated for every comparison",
        ],
      },
      {
        id: "how-to-use",
        title: "Fixing a programme that is underperforming",
        body: "If your syndication is producing leads nobody works, the fix is usually operational rather than a targeting change. Follow-up capacity is the first thing to check.",
        points: [
          "Check follow-up speed before changing the filters",
          "Match delivery pacing to what your team can actually work",
          "Test one asset type against another in the same segment",
          "Insist on replacement terms for off-criteria leads",
        ],
      },
    ],
    services: ["content-syndication", "email-marketing"],
    cta: {
      title: "Want the report and a look at your syndication?",
      body: "We will send the report and review where your current programme is losing conversion between download and follow-up.",
      button: "Request the report",
    },
  },

  "b2b-buyer-research-phase": {
    meta: "Insight · Q3 2026",
    summary: "Buyers are researching for longer and engaging vendors later — what that does to campaign timing.",
    eyebrow: "Insight · Q3 2026",
    titleLead: "Buyers research longer,",
    titleAccent: "and call you later.",
    intro:
      "Across twelve industries the research phase has stretched while the vendor conversation has shortened. By the time a buyer contacts you, more of the decision is already made — which changes what a campaign has to do and when.",
    stats: [
      { value: "12", label: "Industries in the sample" },
      { value: "Q3", label: "2026 intent data window" },
      { value: "70%", label: "Of evaluation done before first contact" },
      { value: "Free", label: "No paywall, no drip sequence" },
    ],
    sections: [
      {
        id: "what-changed",
        title: "The research phase keeps stretching",
        body: "Buyers are spending longer in anonymous research before identifying themselves, and arriving at the first vendor conversation with a shortlist already formed. The window in which you can influence the decision has moved earlier.",
        points: [
          "Longer anonymous research before any vendor contact",
          "Shortlists formed before the first conversation",
          "More stakeholders involved in the research phase",
          "Budget scrutiny extending the timeline further",
        ],
      },
      {
        id: "why",
        title: "Why it is happening",
        body: "Two forces at once: more information is available without talking to a salesperson, and post-2023 budget scrutiny means more people must agree before anything is signed. Both push discovery earlier and decisions later.",
        points: [
          "Independent information easily available without vendor contact",
          "AI summarisation compressing the early comparison stage",
          "More approvers required for the same spend",
          "Consolidation pressure favouring incumbent vendors",
        ],
      },
      {
        id: "implications",
        title: "What it means for campaign timing",
        body: "If most of the evaluation happens before you know the buyer exists, waiting for a hand-raise means arriving after the shortlist is set. Intent signals and always-on presence stop being sophistication and become the baseline.",
        points: [
          "Intent monitoring to catch accounts during research",
          "Always-on presence rather than campaign bursts",
          "Content that answers comparison questions directly",
          "Committee-wide reach, since research is now collective",
        ],
      },
      {
        id: "what-to-do",
        title: "What to change this quarter",
        body: "Three practical adjustments, in the order that pays back fastest. None of them require a new budget line — they are mostly a reallocation of attention from late-stage capture to early-stage presence.",
        points: [
          "Move budget from hand-raise capture toward intent-led outreach",
          "Publish comparison and alternatives content you have avoided",
          "Widen reach to the full committee, not the champion",
          "Measure first-touch to opportunity, not last-touch",
        ],
      },
    ],
    services: ["audience-intelligence", "demand-generation"],
    cta: {
      title: "Find out which accounts are researching you now.",
      body: "We will run intent analysis against your ICP and show you the accounts already in the research phase.",
      button: "Book a strategy call",
    },
  },

  "marketing-roi-pipeline-not-mqls": {
    meta: "Insight · Q2 2026",
    summary: "Why sourced pipeline is the only marketing metric revenue teams trust — and how to report it.",
    eyebrow: "Insight · Q2 2026",
    titleLead: "Report pipeline,",
    titleAccent: "not MQLs.",
    intro:
      "The MQL survived because it was easy to count, not because it predicted revenue. As budget scrutiny has tightened, marketing teams still reporting lead volume are finding the number no longer buys them any credibility.",
    stats: [
      { value: "SQL", label: "The unit that survives scrutiny" },
      { value: "Q2", label: "2026 analysis window" },
      { value: "3", label: "Metrics worth reporting upward" },
      { value: "Free", label: "No paywall, no drip sequence" },
    ],
    sections: [
      {
        id: "the-problem",
        title: "The MQL measures effort, not outcome",
        body: "An MQL records that marketing did something and someone responded. It says nothing about whether the account can buy, wants to buy, or ever will — which is why sales teams learned to discount the number.",
        points: [
          "Volume optimisation rewards cheap, unqualified responses",
          "Definitions drift until the number is no longer comparable",
          "Sales discounts the figure, so it stops informing decisions",
          "Finance cannot connect it to anything on the P&L",
        ],
      },
      {
        id: "what-to-measure",
        title: "The three numbers worth reporting upward",
        body: "Sourced pipeline, cost per opportunity, and pipeline-to-close conversion. Together they answer what marketing produced, what it cost, and whether it was real — which is the entire question being asked.",
        points: [
          "Sourced pipeline value, attributed to campaign and channel",
          "Cost per opportunity rather than cost per lead",
          "Pipeline-to-close conversion by source",
          "Influenced pipeline reported separately, never blended in",
        ],
      },
      {
        id: "how-to-instrument",
        title: "Instrumenting it without a replatform",
        body: "Most teams can report this on the systems they already run. The work is stamping campaign and source on every record at creation and agreeing one attribution rule that both marketing and sales accept.",
        points: [
          "Stamp campaign and source at record creation, not later",
          "Agree one attribution model and stop relitigating it",
          "Feed offline conversions back to the ad platforms",
          "Report on the same cadence as the sales forecast",
        ],
      },
      {
        id: "the-conversation",
        title: "Changing the conversation with finance",
        body: "Reporting in pipeline moves marketing from a cost centre defending activity to a function forecasting contribution. It also removes the incentive to buy cheap leads to hit a number nobody trusts.",
        points: [
          "Forecast contribution rather than report activity",
          "Defend budget with cost per opportunity, not volume",
          "Make the trade-off between volume and quality explicit",
          "Retire the MQL target rather than running both",
        ],
      },
    ],
    services: ["demand-generation", "abm"],
    cta: {
      title: "Report on pipeline instead of lead volume.",
      body: "We will show you how we track delivered leads through to opportunity and closed-won, and what it takes to instrument.",
      button: "Book a strategy call",
    },
  },
};

export const RESOURCE_PAGES_COPY = {
  backLabel: "Resource library",
  statsLabel: "At a glance",
  sectionsLabel: "What's inside",
  onThisPage: "On this page",
  servicesLabel: "Related services",
  servicesIntro: "The programs behind the numbers in this piece.",
  otherLabel: "More from the library",
  indexLabel: "Resource",
};

export function resourcePageBySlug(slug: string): ResourcePage | undefined {
  return Object.prototype.hasOwnProperty.call(RESOURCE_PAGES, slug)
    ? RESOURCE_PAGES[slug]
    : undefined;
}
