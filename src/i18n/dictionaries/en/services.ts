/**
 * Full service detail for the Services artboard. The nav's mega-menu uses its
 * own shorter blurbs (see `nav-data.ts`) — the design keeps the two separate,
 * so they are kept separate here too.
 */
export type ServiceDetail = {
  key: string;
  name: string;
  overview: string;
  benefits: string[];
  deliverables: string[];
  cta: string;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    key: "demand-generation",
    name: "Demand Generation",
    overview: "We build and execute full-funnel demand generation programs that identify in-market buyers, engage decision-makers across multiple channels, and deliver qualified leads ready for sales follow-up.",
    benefits: ["ICP-matched audience targeting", "Intent data activation for in-market buyers", "Multi-channel campaign orchestration", "Qualified lead delivery with full reporting", "Scalable from SMB to enterprise"],
    deliverables: ["Target account list building", "Campaign strategy and execution plan", "Multi-channel outreach sequences", "Weekly lead delivery reports", "Pipeline contribution tracking"],
    cta: "Start a demand generation campaign",
  },
  {
    key: "content-syndication",
    name: "Content Syndication",
    overview: "Distribute your best content — whitepapers, eBooks, webinars, reports — to verified B2B audiences actively researching your category. Every content lead meets your ICP filters.",
    benefits: ["Reach buyers in active research phase", "ICP-matched content distribution", "BANT or custom lead qualification", "Guaranteed lead volume delivery", "GDPR and CAN-SPAM compliant"],
    deliverables: ["Content campaign setup and management", "Audience segmentation and filtering", "Lead capture and qualification", "CPL or flat-fee pricing options", "Lead delivery in your preferred format (CSV, CRM sync)"],
    cta: "Launch a content syndication campaign",
  },
  {
    key: "abm",
    name: "Account-Based Marketing (ABM)",
    overview: "Target your most valuable accounts with precision. We build buying committee maps, identify key decision-makers, and orchestrate coordinated outreach across email, advertising, and human channels.",
    benefits: ["Named account targeting at scale", "Buying committee mapping and multi-threading", "Coordinated multi-channel ABM plays", "Intent-driven account prioritization", "Sales and marketing alignment built-in"],
    deliverables: ["Target account list (TAL) build", "Decision-maker identification and contact data", "ABM campaign orchestration plan", "Account engagement reporting", "Buying committee coverage tracking"],
    cta: "Build your ABM program",
  },
  {
    key: "email-marketing",
    name: "Email Marketing",
    overview: "Precision B2B email campaigns reaching verified decision-makers at your target accounts. Every campaign is built for deliverability, compliance, and conversion — not just open rates.",
    benefits: ["Verified B2B contact database access", "Deliverability-optimized campaign setup", "Personalized messaging at scale", "A/B testing and optimization", "GDPR, CAN-SPAM, and CASL compliant"],
    deliverables: ["List build and segmentation", "Email copy and template creation", "Campaign deployment and monitoring", "Deliverability and performance reporting", "Lead handoff and follow-up sequencing"],
    cta: "Launch your email campaign",
  },
  {
    key: "audience-intelligence",
    name: "Audience Intelligence",
    overview: "Before you spend a dollar on outreach, know exactly who to reach. We build verified audience profiles using business intelligence platforms, intent data, and human research to give your campaigns a targeting advantage.",
    benefits: ["ICP definition and refinement", "Buying committee identification", "Intent signal monitoring", "Firmographic and technographic profiling", "Competitor audience mapping"],
    deliverables: ["Audience intelligence report", "Verified contact database by segment", "Intent data insights summary", "ICP scoring model", "Recommended channel strategy"],
    cta: "Get your audience intelligence report",
  },
  {
    key: "b2b-data",
    name: "High-Intent B2B Data",
    overview: "Access verified, permission-based B2B contact databases built for outreach. Every record is validated, enriched, and matched to your ICP — no recycled or low-quality lists.",
    benefits: ["Verified work emails and direct dials", "Firmographic and technographic data", "Intent-scored contact records", "Custom list builds by industry, title, region", "Regular refresh and validation"],
    deliverables: ["Custom database build to your ICP", "CSV or CRM-ready format", "Data fields: Name, Title, Company, Email, Phone, LinkedIn, Tech Stack", "Quality guarantee: verified deliverability rate", "Suppression file application"],
    cta: "Request a data sample",
  },
  {
    key: "webinar-promotion",
    name: "Webinar & Event Promotion",
    overview: "Fill your webinars, virtual events, and in-person conferences with qualified registrants. We drive attendance from your ICP using email, content syndication, and targeted outreach.",
    benefits: ["Guaranteed registration targets", "ICP-matched audience promotion", "Multi-channel promotion (email, content, SDR)", "Pre-event and reminder sequences", "Post-event lead nurturing support"],
    deliverables: ["Webinar promotion campaign setup", "Registration landing page optimization advice", "Audience targeting and list build", "Registration delivery and reporting", "Post-event attendee list with engagement data"],
    cta: "Promote your next webinar",
  },
  {
    key: "appointment-generation",
    name: "Appointment Generation",
    overview: "We book qualified sales meetings directly into your team’s calendars. Our SDR and telemarketing team identifies, qualifies, and converts in-market buyers into confirmed appointments.",
    benefits: ["Outbound prospecting and qualification", "Multi-touch outreach (phone, email, LinkedIn)", "BANT or custom qualification criteria", "Calendar integration and booking", "Full call recording and notes delivered"],
    deliverables: ["Target account and contact list build", "Outreach sequence (email + phone + LinkedIn)", "Qualification script development", "Appointment booking and calendar management", "Weekly appointment report with notes"],
    cta: "Start appointment generation",
  },
  {
    key: "gtm-strategy",
    name: "GTM Strategy",
    overview: "Launch new markets, products, or personas with a data-driven go-to-market strategy built by B2B growth experts. We define your ICP, messaging, channel mix, and execution roadmap.",
    benefits: ["ICP and persona definition", "Messaging framework development", "Channel strategy and budget allocation", "Competitive positioning", "Launch timeline and execution plan"],
    deliverables: ["GTM strategy document", "ICP and persona profiles", "Messaging playbook", "Channel and campaign recommendations", "90-day launch roadmap"],
    cta: "Request a GTM strategy session",
  },
  {
    key: "ai-visibility",
    name: "AI Visibility",
    overview: "Ensure your brand, products, and thought leadership appear in AI-generated answers, recommendations, and search summaries. We optimize your content and digital presence for LLM and AI search visibility.",
    benefits: ["AI search and LLM content optimization", "Brand mention tracking in AI tools", "Content strategy for AI discoverability", "Schema and structured data optimization", "Competitive AI visibility benchmarking"],
    deliverables: ["AI visibility audit report", "Content optimization recommendations", "AI-optimized content creation", "Monthly AI visibility tracking report", "Competitor AI share-of-voice analysis"],
    cta: "Improve your AI visibility",
  },
  {
    key: "performance-marketing",
    name: "Digital & Performance Marketing",
    overview: "Paid search, display, programmatic, and social advertising campaigns managed for maximum ROI. We run performance marketing programs built around pipeline contribution, not impressions.",
    benefits: ["Google Ads and paid search management", "LinkedIn and B2B social advertising", "Programmatic and display campaigns", "Landing page and conversion optimization", "Full attribution and ROI reporting"],
    deliverables: ["Campaign setup and management", "Ad creative and copywriting", "Audience targeting and bid strategy", "Weekly performance reporting", "Monthly strategy and optimization review"],
    cta: "Launch a performance marketing campaign",
  },
  {
    key: "website-design",
    name: "Website Design & Development",
    overview: "Modern, conversion-optimized B2B websites designed to generate leads and communicate your value proposition. From landing pages to full website builds.",
    benefits: ["Conversion-focused B2B website design", "Lead capture and form optimization", "CMS development (WordPress, Webflow)", "SEO-ready architecture", "Mobile-first, fast-loading builds"],
    deliverables: ["Website discovery and wireframes", "UI/UX design (desktop + mobile)", "Front-end and back-end development", "CMS setup and content migration", "QA, launch, and post-launch support"],
    cta: "Request a website quote",
  },
];

/** Copy for the Services page shell. */
export const SERVICES_COPY = {
  meta: {
    title: "Services · Lidespy",
    description:
      "Demand generation services that drive real revenue — from audience intelligence to appointment setting.",
  },
  hero: {
    eyebrow: "Services · 12 ways to fill your pipeline",
    titleLead: "Demand generation services that drive",
    titleAccent: "real revenue",
    intro:
      "From audience intelligence to appointment setting — every service we offer is designed to accelerate your pipeline and contribute measurably to revenue.",
    primaryCta: "Book a strategy call",
    secondaryCta: "Estimate a campaign budget",
    indexLabel: "Index",
  },
  benefitsLabel: "Key benefits",
  deliverablesLabel: "Deliverables",
  cta: {
    titleLead: "Not sure which service fits?",
    titleAccent: "Start with a conversation.",
    body: "Our team will review your goals and recommend the right mix of channels for your budget and timeline.",
    button: "Book a strategy call",
  },
};
