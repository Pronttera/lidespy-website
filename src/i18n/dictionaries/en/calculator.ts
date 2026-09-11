/**
 * Labels for the campaign budget calculator. The option *keys* in
 * `src/lib/calculator.ts` are stable identifiers that drive the arithmetic;
 * everything a visitor reads is looked up here, so translating the calculator
 * never changes the model.
 */

export const CALCULATOR = {
  meta: {
    title: "Campaign Budget Calculator · Free B2B Lead Gen Estimate · Lidespy",
    description:
      "Estimate campaign budgets, expected lead volume and pipeline potential for your next B2B demand generation campaign.",
  },
  hero: {
    eyebrow: "Campaign budget calculator · Free",
    titleLead: "Plan your next",
    titleAccent: "demand generation campaign",
    intro:
      "Estimate campaign budgets, expected lead volume, and pipeline potential in minutes. No commitment required.",
  },
  inputs: {
    heading: "Your campaign",
    /** The three numbered steps the inputs are grouped under. */
    steps: {
      audience: "Who you want to reach",
      channel: "How you reach them",
      goal: "How many leads you need",
    },
    region: "Target region",
    industry: "Industry",
    companySize: "Target company size",
    companySizeHint: "Employees at the accounts you want to reach",
    campaignType: "Campaign type",
    campaignTypeHint: "Select one",
    /** Shown on each campaign-type card under the name — `{cpl}` is the price. */
    perLead: "{cpl} per lead",
    leadGoal: "Lead goal",
    leadGoalHint: "Priced on the top of the range, so the budget is a ceiling",
  },
  /** One line under each campaign type, keyed like `campaignTypes`. */
  campaignTypeNotes: {
    "Content Syndication": "Your gated assets, placed in front of your ICP",
    ABM: "Coordinated plays into named accounts",
    "Email Marketing": "Verified lists, warmed domains, sequenced sends",
    "Webinar Promotion": "Registrations from the buyers you actually want",
    "Appointment Generation": "Qualified meetings on your AEs’ calendars",
  },
  /** Keyed by the campaign types in `src/data/campaign-pricing.json`, `REGIONS` and `INDUSTRY`. */
  campaignTypes: {
    "Content Syndication": "Content Syndication",
    ABM: "ABM",
    "Email Marketing": "Email Marketing",
    "Webinar Promotion": "Webinar Promotion",
    "Appointment Generation": "Appointment Generation",
  },
  regions: {
    "North America": "North America",
    Europe: "Europe",
    APAC: "APAC",
    "Middle East": "Middle East",
    Global: "Global",
  },
  industries: {
    Technology: "Technology",
    SaaS: "SaaS",
    Cybersecurity: "Cybersecurity",
    FinTech: "FinTech",
    Healthcare: "Healthcare",
    Manufacturing: "Manufacturing",
    Telecom: "Telecom",
    "Professional Services": "Professional Services",
    Other: "Other",
  },
  /** Positional — one label per entry in `SIZES` and `LEADS`. */
  companySizes: ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,001–5,000", "5,000+"],
  leadRanges: ["25–50", "51–100", "101–250", "251–500", "500+ leads"],
  /** Channels the model can recommend on top of the selected campaign types. */
  channels: {
    "Audience Intelligence": "Audience Intelligence",
    "Appointment Generation": "Appointment Generation",
    "High-Intent B2B Data": "High-Intent B2B Data",
  },
  result: {
    heading: "Your estimate",
    live: "Updates live",
    budgetLabel: "Budget range",
    /** `{cpl}` price per lead and `{leads}` the lead goal's upper bound. */
    budgetNote: "{cpl} per lead × {leads} leads",
    cplLabel: "Cost per lead",
    leadVolumeLabel: "Estimated lead volume",
    pipelineLabel: "Estimated pipeline potential",
    pipelineNote: "Assumes standard B2B conversion rates for your industry",
    /** The sticky bar on phones, where the estimate sits below the inputs. */
    mobileBar: { label: "Estimated budget", jump: "See estimate" },
    channelsLabel: "Recommended marketing channels",
    bookCta: "Book a call to discuss",
    share: "Share results",
    shareCopied: "Copied to clipboard",
    /** `{region}`, `{industry}`, `{budget}`, `{leads}`, `{channels}`. */
    shareText:
      "Lidespy campaign estimate — {region}, {industry}: {budget} for {leads} leads via {channels}.",
    disclaimer:
      "Estimates are directional and based on Lidespy campaign benchmarks. Final pricing depends on audience availability, qualification criteria and deliverable format.",
  },
  /** Explainer under the calculator: what each figure is built from. */
  how: {
    eyebrow: "How the estimate works",
    title: "Three inputs, no black box.",
    intro:
      "Every number on the card is arithmetic on Lidespy campaign benchmarks — here is exactly what goes in.",
    items: [
      {
        title: "Price per lead",
        body: "Each campaign type carries a benchmark price per lead from live Lidespy programs — from email at the low end to booked appointments at the top.",
      },
      {
        title: "Lead goal",
        body: "Budget is price per lead multiplied by the top of your lead range, so the figure is a ceiling rather than a midpoint.",
      },
      {
        title: "Pipeline potential",
        body: "Leads × a 14% lead-to-opportunity rate × the average deal size for your industry. It is opportunity value, not closed revenue.",
      },
    ],
  },
  cta: {
    title: "Need a custom campaign plan?",
    body: "Our demand generation specialists will review your goals and build a campaign strategy tailored to your budget and growth targets.",
    button: "Book a free strategy call",
  },
};
