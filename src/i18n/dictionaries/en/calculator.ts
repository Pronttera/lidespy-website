/**
 * Labels for the campaign budget calculator. The option *keys* in
 * `src/lib/calculator.ts` are stable identifiers that drive the arithmetic;
 * everything a visitor reads is looked up here, so translating the calculator
 * never changes the model.
 */

export const CALCULATOR = {
  meta: {
    title: "Campaign Budget Calculator · Free B2B Lead Gen Planner · Lidespy",
    description:
      "Work out campaign budgets and lead volume for your next B2B demand generation campaign.",
  },
  hero: {
    eyebrow: "Campaign budget calculator · Free",
    titleLead: "Plan your next",
    titleAccent: "demand generation campaign",
    intro:
      "Work out campaign budgets and lead volume in minutes. No commitment required.",
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
    leadGoal: "Lead goal",
    leadGoalUnit: "leads",
    leadGoalHint: "Enter the number of leads you need — 1 or more",
  },
  /** One line under each campaign type, keyed like `campaignTypes`. */
  campaignTypeNotes: {
    "Good Fit Data": "Human-verified contacts matched to your exact ICP",
    "Intent Data": "Buyers already researching solutions like yours",
    "Content Syndication": "Your gated assets, placed in front of your ICP",
    MQL: "Interest confirmed, pain points probed, value proposition delivered",
    HQL: "An MQL plus two custom qualifying questions and a callback",
    "BANT Qualified Lead": "Budget, authority, need and timeline, verified by callback",
    "Appointment Setting": "Qualified meetings on your AEs’ calendars",
  },
  /** Keyed by the campaign types in `src/data/campaign-pricing.json`, `REGIONS` and `INDUSTRY`. */
  campaignTypes: {
    "Good Fit Data": "Good Fit Data",
    "Intent Data": "Intent Data",
    "Content Syndication": "Content Syndication",
    MQL: "MQL (Marketing Qualified)",
    HQL: "HQL (Highly Qualified)",
    "BANT Qualified Lead": "BANT Qualified Lead",
    "Appointment Setting": "Appointment Setting",
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
  /** Positional — one label per entry in `SIZES`. */
  companySizes: ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,001–5,000", "5,000+"],
  /** Channels the model can recommend on top of the selected campaign types. */
  channels: {
    "Audience Intelligence": "Audience Intelligence",
  },
  result: {
    heading: "Your numbers",
    live: "Updates live",
    budgetLabel: "Budget range",
    /** `{cpl}` price per lead and `{leads}` the lead goal. */
    budgetNote: "{cpl} per lead × {leads} leads",
    cplLabel: "Cost per lead",
    leadVolumeLabel: "Lead volume",
    /** The sticky bar on phones, where the result sits below the inputs. */
    mobileBar: { label: "Budget", jump: "See the numbers" },
    channelsLabel: "Recommended marketing channels",
    bookCta: "Book a call to discuss",
    share: "Share results",
    shareCopied: "Copied to clipboard",
    /** `{region}`, `{industry}`, `{budget}`, `{leads}`, `{channels}`. */
    shareText:
      "Lidespy campaign plan — {region}, {industry}: {budget} for {leads} leads via {channels}.",
    disclaimer:
      "Your estimate adjusts based on requirements and volume. Final pricing may vary depending on campaign scope, targeting, deliverables, and volume. For a precise quote, contact our team.",
  },
  /** Explainer under the calculator: what each figure is built from. */
  how: {
    eyebrow: "How the numbers work",
    title: "Three inputs, no black box.",
    intro:
      "Every figure on the card is arithmetic on Lidespy campaign benchmarks — here is exactly what goes in.",
    items: [
      {
        title: "Price per lead",
        body: "Each campaign type carries its price per lead straight from the Lidespy rate card — from verified data at the low end to booked appointments at the top.",
      },
      {
        title: "Lead goal",
        body: "Budget is price per lead multiplied by the number of leads you ask for, so the figure moves one-for-one with your goal.",
      },
    ],
  },
  /** The published rate card, under the calculator. */
  rateCard: {
    eyebrow: "Rate card",
    /** The edition the published rates come from. */
    effective: "Effective Q2 2026",
    title: "Campaign categories and pricing.",
    intro:
      "Every category is priced as a pure CPL — you pay for delivered, fully qualified leads that match your spec.",
    columns: {
      category: "Campaign category",
      cpl: "CPL (USD)",
      whatYouGet: "What you get",
      benchmark: "Market benchmark",
    },
    /** Why the rates hold up, from the rate card. */
    proof: [
      {
        title: "100% human-verified",
        body: "No automated scrapes delivered as-is. All data passes manual verification checks before delivery.",
      },
      {
        title: "Trusted intent signals",
        body: "Intent data is pulled exclusively from leading verified platforms and our curated internal repository.",
      },
      {
        title: "Callback verification",
        body: "Campaigns include rigorous multi-step callback verification starting at the MQL level and above.",
      },
      {
        title: "Pure CPL model",
        body: "Risk-free pricing — you only pay for delivered, fully qualified leads matching your spec.",
      },
      {
        title: "Full ICP alignment",
        body: "Every lead is matched against your ideal client profile — title, size, geography — prior to routing.",
      },
    ],
    note:
      "All pricing is in USD. Deliverable packages are customizable: contract volumes, CPL scaling and targeting filters can be reconfigured to fit your budget and pipeline goals.",
    /** How the rates compare with the wider market, from the rate card. */
    marketNote: {
      label: "Market intelligence",
      items: [
        "Globally, the blended CPL across B2B SaaS channels averages $237 (First Page Sage, 2026) — our rates reflect direct human-verified outreach rather than high-overhead paid digital advertising.",
        "Tech BANT-qualified leads routinely cost $600 – $800 through legacy agencies. Our $100 – $150 CPL for the same qualification is where the ROI advantage sits.",
      ],
    },
  },
  cta: {
    title: "Need a custom campaign plan?",
    body: "Our demand generation specialists will review your goals and build a campaign strategy tailored to your budget and growth targets.",
    button: "Book a free strategy call",
  },
};
