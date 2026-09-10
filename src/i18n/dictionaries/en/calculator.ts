/**
 * Labels for the campaign budget calculator. The option *keys* in
 * `src/lib/calculator.ts` are stable identifiers that drive the arithmetic;
 * everything a visitor reads is looked up here, so translating the calculator
 * never changes the model.
 */

export const CALCULATOR = {
  meta: {
    title: "Campaign Budget Calculator · Lidespy",
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
    region: "Target region",
    industry: "Industry",
    audience: "Target audience size",
    campaignType: "Campaign type",
    campaignTypeHint: "Select one or more",
    duration: "Campaign duration",
    leadGoal: "Lead goal",
  },
  /** Keyed by the identifiers in `CPL`, `REGION` and `INDUSTRY`. */
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
  /** Positional — one label per entry in `AUD`, `DUR` and `LEADS`. */
  audienceSizes: ["Under 1,000", "1,000–5,000", "5,000–20,000", "20,000+ contacts"],
  durations: ["1 Month", "3 Months", "6 Months", "12 Months"],
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
    budgetLabel: "Estimated budget range",
    /** `{amount}` per month over `{duration}` (the duration label, lowercased). */
    monthlyNote: "About {amount} per month over {duration}",
    cplLabel: "Estimated CPL",
    leadVolumeLabel: "Estimated lead volume",
    pipelineLabel: "Estimated pipeline potential",
    pipelineNote: "Assumes standard B2B conversion rates for your industry",
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
  cta: {
    title: "Need a custom campaign plan?",
    body: "Our demand generation specialists will review your goals and build a campaign strategy tailored to your budget and growth targets.",
    button: "Book a free strategy call",
  },
};
