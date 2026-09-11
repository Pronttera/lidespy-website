/** Content for the Solutions artboard. */

const SERVICE_KEYS: Record<string, string> = {
  "Demand Generation": "demand-generation",
  ABM: "abm",
  "Account-Based Marketing": "abm",
  "Content Syndication": "content-syndication",
  "Audience Intelligence": "audience-intelligence",
  "Email Marketing": "email-marketing",
  "Webinar Promotion": "webinar-promotion",
  "Appointment Generation": "appointment-generation",
  "High-Intent B2B Data": "b2b-data",
  "GTM Strategy": "gtm-strategy",
};

const svc = (names: string[]) =>
  names.map((name) => ({
    name,
    href: `Services.dc.html#${SERVICE_KEYS[name] ?? ""}`,
  }));

export type SolutionCard = {
  /** Routes the card's CTA to its industry or objective detail page. */
  key: string;
  kicker: string;
  headline: string;
  overview: string;
  personas: string[];
  services: { name: string; href: string }[];
  cta: string;
};

export const INDUSTRY_SOLUTIONS: SolutionCard[] = [
  { key: "technology", kicker: "Technology", headline: "Demand generation for technology companies",
    overview: "We help technology vendors and ISVs reach IT decision-makers, technical buyers, and C-suite executives with precision-targeted campaigns that generate qualified pipeline.",
    personas: ["CTO / CIO", "VP of Engineering", "IT Director", "Head of Infrastructure", "Technology Procurement"],
    services: svc(["Demand Generation", "ABM", "Content Syndication", "Audience Intelligence"]),
    cta: "Explore technology solutions" },
  { key: "saas", kicker: "SaaS", headline: "Pipeline generation for SaaS companies",
    overview: "SaaS growth demands a constant flow of qualified trials, demos, and meetings. We build demand generation programs that fill your funnel with buyers actively evaluating your category.",
    personas: ["VP of Marketing", "CMO", "Head of Growth", "Revenue Operations", "SaaS Founders"],
    services: svc(["Demand Generation", "Email Marketing", "Webinar Promotion", "Appointment Generation"]),
    cta: "Explore SaaS solutions" },
  { key: "cybersecurity", kicker: "Cybersecurity", headline: "Demand generation for cybersecurity vendors",
    overview: "Cybersecurity buyers are cautious, research-intensive, and hard to reach. We engage CISO, SOC, and IT security teams with education-first content and multi-touch outreach programs.",
    personas: ["CISO", "VP of Security", "IT Security Manager", "SOC Lead", "Risk & Compliance Officer"],
    services: [], cta: "Explore cybersecurity solutions" },
  { key: "fintech", kicker: "FinTech", headline: "B2B demand generation for FinTech companies",
    overview: "We help FinTech companies reach CFOs, treasury teams, and financial decision-makers with compliance-aware campaigns that generate qualified leads across banking, insurance, and financial services.",
    personas: [], services: [], cta: "Explore FinTech solutions" },
  { key: "healthcare", kicker: "Healthcare", headline: "Demand generation for healthcare technology companies",
    overview: "Reach hospital administrators, clinical IT leaders, and healthcare procurement teams with HIPAA-aware demand generation programs designed for complex, multi-stakeholder healthcare buying cycles.",
    personas: [], services: [], cta: "Explore healthcare solutions" },
];

export const OBJECTIVE_SOLUTIONS: SolutionCard[] = [
  { key: "generate-more-leads", kicker: "Generate more leads", headline: "Need more qualified leads? We build pipeline.",
    overview: "If your top priority is increasing lead volume from your ICP, we deploy a combination of content syndication, email marketing, and audience intelligence to deliver verified, sales-ready contacts.",
    personas: [], services: svc(["Content Syndication", "Email Marketing", "High-Intent B2B Data", "Demand Generation"]),
    cta: "Get more leads now" },
  { key: "build-pipeline", kicker: "Build pipeline", headline: "From awareness to pipeline — end to end.",
    overview: "We build full-funnel pipeline programs that take prospects from first content interaction through to sales-qualified opportunity — reducing time to pipeline and increasing conversion rates.",
    personas: [], services: [], cta: "Build your pipeline" },
  { key: "accelerate-sales", kicker: "Accelerate sales", headline: "Book more meetings. Close more revenue.",
    overview: "Our appointment generation and SDR programs put qualified meetings directly on your team’s calendar — so your reps spend time selling, not prospecting.",
    personas: [], services: [], cta: "Accelerate your sales" },
  { key: "launch-new-markets", kicker: "Launch new markets", headline: "Enter new markets with confidence.",
    overview: "We build market entry demand generation programs — from audience mapping and ICP definition to full multi-channel campaign execution — so you can launch with data and momentum.",
    personas: [], services: [], cta: "Plan your market launch" },
  { key: "improve-abm-performance", kicker: "Improve ABM performance", headline: "Stop running ABM on assumptions.",
    overview: "We audit, rebuild, and execute ABM programs using real intent data, buying committee intelligence, and coordinated multi-channel outreach — so your ABM actually moves pipeline.",
    personas: [], services: [], cta: "Improve your ABM" },
  { key: "increase-webinar-attendance", kicker: "Increase webinar attendance", headline: "Fill every seat. Engage the right buyers.",
    overview: "We promote webinars and virtual events to verified B2B audiences using email, content syndication, and targeted outreach — guaranteeing your registration targets.",
    personas: [], services: [], cta: "Promote your webinar" },
];

/** Copy for the Solutions page shell. */
export const SOLUTIONS_COPY = {
  meta: {
    title: "B2B Growth Solutions · Lidespy",
    description:
      "Demand generation solutions built around your business goals — by industry and by objective.",
  },
  hero: {
    eyebrow: "Solutions · What we enable",
    titleLead: "Solutions built around",
    titleAccent: "your business goals",
    intro:
      "Whether you’re launching a new product, breaking into a new market, or building a scalable pipeline engine — we have a proven demand generation solution for you.",
  },
  browser: {
    heading: "Browse solutions",
    specialistCta: "Talk to a specialist",
    tabs: {
      industry: {
        label: "By industry",
        sub: "Technology, SaaS, cybersecurity, FinTech, healthcare",
        title: "Solutions by industry",
        servicesLabel: "Relevant services",
      },
      objective: {
        label: "By objective",
        sub: "Leads, pipeline, sales velocity, market entry, ABM, webinars",
        title: "Solutions by objective",
        servicesLabel: "Recommended services",
      },
    },
    /** `{count}` solutions. */
    count: "{count} solutions",
    personasLabel: "Target personas",
  },
  cta: {
    title: "Don’t see your goal? We’ll build a solution around it.",
    button: "Book a strategy call",
  },
};
