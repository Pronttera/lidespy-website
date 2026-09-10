/** Navigation content, ported from the `Site Nav.dc.html` artboard. */

export type Service = {
  key: string;
  name: string;
  overview: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    key: "demand-generation",
    name: "Demand Generation",
    overview:
      "Full-funnel programs that identify in-market buyers, engage decision-makers across channels, and deliver qualified leads ready for sales follow-up.",
    deliverables: [
      "Target account list building",
      "Multi-channel outreach sequences",
      "Pipeline contribution tracking",
    ],
  },
  {
    key: "content-syndication",
    name: "Content Syndication",
    overview:
      "Distribute whitepapers, eBooks and reports to verified B2B audiences actively researching your category. Every lead meets your ICP filters.",
    deliverables: [
      "Audience segmentation and filtering",
      "Lead capture and qualification",
      "CPL or flat-fee pricing options",
    ],
  },
  {
    key: "abm",
    name: "Account-Based Marketing",
    overview:
      "Target your most valuable accounts with precision — buying committee maps, decision-maker identification and coordinated multi-channel outreach.",
    deliverables: [
      "Target account list (TAL) build",
      "ABM campaign orchestration plan",
      "Buying committee coverage tracking",
    ],
  },
  {
    key: "email-marketing",
    name: "Email Marketing",
    overview:
      "Precision B2B email reaching verified decision-makers at your target accounts — built for deliverability, compliance and conversion, not open rates.",
    deliverables: [
      "List build and segmentation",
      "Email copy and template creation",
      "Deliverability and performance reporting",
    ],
  },
  {
    key: "audience-intelligence",
    name: "Audience Intelligence",
    overview:
      "Before you spend a dollar on outreach, know exactly who to reach. Verified audience profiles from intelligence platforms, intent data and human research.",
    deliverables: [
      "Audience intelligence report",
      "ICP scoring model",
      "Recommended channel strategy",
    ],
  },
  {
    key: "b2b-data",
    name: "High-Intent B2B Data",
    overview:
      "Verified, permission-based B2B contact databases built for outreach. Every record validated, enriched and matched to your ICP — no recycled lists.",
    deliverables: [
      "Custom database build to your ICP",
      "CSV or CRM-ready delivery",
      "Suppression file application",
    ],
  },
  {
    key: "webinar-promotion",
    name: "Webinar & Event Promotion",
    overview:
      "Fill your webinars, virtual events and conferences with qualified registrants drawn from your ICP via email, content syndication and outreach.",
    deliverables: [
      "Webinar promotion campaign setup",
      "Registration delivery and reporting",
      "Post-event attendee engagement data",
    ],
  },
  {
    key: "appointment-generation",
    name: "Appointment Generation",
    overview:
      "We book qualified sales meetings directly into your team’s calendars — SDR and telemarketing outreach that converts in-market buyers into appointments.",
    deliverables: [
      "Outreach sequence (email + phone + LinkedIn)",
      "Qualification script development",
      "Weekly appointment report with notes",
    ],
  },
  {
    key: "gtm-strategy",
    name: "GTM Strategy",
    overview:
      "Launch new markets, products or personas with a data-driven go-to-market strategy — ICP, messaging, channel mix and execution roadmap.",
    deliverables: [
      "GTM strategy document",
      "Messaging playbook",
      "90-day launch roadmap",
    ],
  },
  {
    key: "ai-visibility",
    name: "AI Visibility",
    overview:
      "Ensure your brand and thought leadership appear in AI-generated answers and search summaries. Content and presence optimized for LLM visibility.",
    deliverables: [
      "AI visibility audit report",
      "AI-optimized content creation",
      "Competitor share-of-voice analysis",
    ],
  },
  {
    key: "performance-marketing",
    name: "Digital & Performance",
    overview:
      "Paid search, display, programmatic and social campaigns managed for ROI — performance programs built around pipeline contribution, not impressions.",
    deliverables: [
      "Campaign setup and management",
      "Audience targeting and bid strategy",
      "Monthly optimization review",
    ],
  },
  {
    key: "website-design",
    name: "Website Design & Dev",
    overview:
      "Conversion-optimized B2B websites designed to generate leads and communicate your value proposition — from landing pages to full builds.",
    deliverables: [
      "UI/UX design (desktop + mobile)",
      "Front-end and back-end development",
      "QA, launch and post-launch support",
    ],
  },
];

export type MenuItem = {
  key?: string;
  name: string;
  overview: string;
  deliverables: string[];
};

/** A rail item with a `key` links to that pillar's page under `/why-lidespy`. */
export type RailItem = { key?: string; name: string; body: string };

export type Menu = {
  rail: { label: string; items: RailItem[] };
  listLabel: string;
  browsePrefix: string;
  browseSuffix: string;
  items: MenuItem[];
};

export type MegaKey = "solutions" | "enable" | "why" | "resources";

export const MENUS: Record<MegaKey, Menu> = {
  solutions: {
    rail: {
      label: "Why Lidespy",
      items: [
        { key: "precision-targeting", name: "Precision Targeting", body: "ICP-matched audiences, buying committee intelligence and intent data activation — so every campaign starts with the right list." },
        { key: "multi-channel-execution", name: "Multi-Channel Execution", body: "Email, ABM, content syndication, telemarketing, webinars and SDR outreach — coordinated and timed as one program." },
        { key: "revenue-focused-outcomes", name: "Revenue-Focused Outcomes", body: "Qualified leads, booked meetings and measurable pipeline contribution. Not vanity metrics." },
      ],
    },
    listLabel: "Our services",
    browsePrefix: "Browse",
    browseSuffix: "deliverables",
    items: SERVICES,
  },
  enable: {
    rail: {
      label: "By industry",
      items: [
        { name: "Technology & SaaS", body: "Reach CTOs, VPs of Engineering, IT directors and growth leaders with precision-targeted campaigns that generate qualified pipeline." },
        { name: "Cybersecurity & FinTech", body: "Engage CISOs, SOC leads, CFOs and treasury teams with education-first, compliance-aware outreach programs." },
        { name: "Healthcare & Enterprise", body: "Clinical IT, procurement, manufacturing and telecom buyers reached through long, multi-stakeholder buying cycles." },
      ],
    },
    listLabel: "By objective",
    browsePrefix: "Recommended services for",
    browseSuffix: "",
    items: [
      { name: "Generate More Leads", overview: "If your top priority is lead volume from your ICP, we deploy content syndication, email marketing and audience intelligence to deliver verified, sales-ready contacts.", deliverables: ["Content Syndication", "Email Marketing", "High-Intent B2B Data"] },
      { name: "Build Pipeline", overview: "Full-funnel programs that take prospects from first content interaction through to sales-qualified opportunity — reducing time to pipeline and lifting conversion.", deliverables: ["Demand Generation", "Account-Based Marketing", "Audience Intelligence"] },
      { name: "Accelerate Sales", overview: "Appointment generation and SDR programs put qualified meetings directly on your team’s calendar — so your reps spend time selling, not prospecting.", deliverables: ["Appointment Generation", "Email Marketing", "High-Intent B2B Data"] },
      { name: "Launch New Markets", overview: "Market entry programs — audience mapping, ICP definition and full multi-channel execution — so you can launch with data and momentum.", deliverables: ["GTM Strategy", "Audience Intelligence", "Demand Generation"] },
      { name: "Improve ABM Performance", overview: "We audit, rebuild and execute ABM programs using real intent data, buying committee intelligence and coordinated outreach — so ABM actually moves pipeline.", deliverables: ["Account-Based Marketing", "Audience Intelligence", "Digital & Performance"] },
      { name: "Increase Webinar Attendance", overview: "We promote webinars and virtual events to verified B2B audiences using email, content syndication and targeted outreach — guaranteeing registration targets.", deliverables: ["Webinar & Event Promotion", "Content Syndication", "Email Marketing"] },
    ],
  },
  why: {
    rail: {
      label: "Our mission",
      items: [
        { name: "Right buyer, right time", body: "To help B2B organizations reach the right buyers with the right message — and convert that engagement into predictable, scalable revenue." },
        { name: "A partner, not a vendor", body: "Research executives and GTM specialists who work as an extension of your marketing and sales function. Focused on outcomes, not activity." },
        { name: "Global from Pune", body: "Headquartered in Pune, India. Serving clients across North America, Europe, Asia Pacific, and the Middle East & Africa." },
      ],
    },
    listLabel: "Our edge",
    browsePrefix: "What this means for",
    browseSuffix: "",
    items: [
      { name: "Data-First Approach", overview: "Every engagement starts with verified audience intelligence and intent signals — never assumptions about who your buyers are.", deliverables: ["Verified audience profiles", "Intent signal monitoring", "ICP scoring model"] },
      { name: "Experienced Team", overview: "Research executives, data specialists, campaign managers and GTM advisors with deep B2B expertise across technology, SaaS and enterprise markets.", deliverables: ["Named campaign partner", "Dedicated research team", "GTM advisory"] },
      { name: "Full-Funnel Coverage", overview: "From awareness through appointment setting to measurable pipeline contribution — one team covering every stage of the funnel.", deliverables: ["Awareness and content programs", "Appointment setting", "Pipeline reporting"] },
      { name: "Compliant & Transparent", overview: "GDPR, CAN-SPAM and CASL aligned, with lawful basis documented per region and full visibility into every campaign we run.", deliverables: ["Documented lawful basis", "Suppression management", "Weekly campaign reporting"] },
      { name: "Flexible Engagement", overview: "Project-based, retainer, or performance-based partnerships. We work the way your team works and scale as programs prove out.", deliverables: ["Project engagements", "Monthly retainers", "Performance-based models"] },
      { name: "Global Coverage", overview: "50+ countries covered across North America, Europe, Asia Pacific, and the Middle East & Africa — with regional data and language expertise.", deliverables: ["North America", "Europe (UK, DACH, Nordics)", "Asia Pacific & MEA"] },
    ],
  },
  resources: {
    rail: {
      label: "Featured",
      items: [
        { name: "Campaign Budget Calculator", body: "Estimate campaign budgets, expected lead volume and pipeline potential in minutes. No commitment required." },
        { name: "B2B Demand Gen Benchmark Report", body: "Annual benchmarks on CPL, conversion rates and channel performance across technology, SaaS and enterprise programs." },
        { name: "State of ABM Report", body: "What actually moves pipeline in account-based programs — intent data, buying committee coverage and channel orchestration." },
      ],
    },
    listLabel: "Resource types",
    browsePrefix: "Browse",
    browseSuffix: "",
    items: [
      { name: "Blog", overview: "Weekly insights on ABM, demand generation, content syndication, intent data and B2B marketing strategy.", deliverables: ["ABM vs Demand Gen", "How to Use Intent Data", "Email Deliverability for B2B"] },
      { name: "Industry Reports", overview: "Annual research and benchmarks for B2B marketing and revenue teams, built from live campaign data.", deliverables: ["B2B Demand Generation Benchmark Report", "State of ABM Report", "Content Syndication Performance Report"] },
      { name: "Insights", overview: "Data-driven commentary on B2B buyer behavior, intent trends and marketing ROI from our research team.", deliverables: ["Buyer behavior trends", "Intent data signals", "Marketing ROI analysis"] },
      { name: "Campaign Budget Calculator", overview: "Model budget range, CPL, lead volume, channel mix and pipeline potential for your next campaign in a few clicks.", deliverables: ["Estimated budget range", "Estimated CPL and lead volume", "Recommended channel mix"] },
      { name: "Media Kit", overview: "Brand assets, logo files, company overview and key stats for press and partner use.", deliverables: ["Logo and brand assets", "Company overview", "Key stats and boilerplate"] },
    ],
  },
};

export const GRIDS: Record<"enable" | "why" | "resources", { name: string; body: string; href: string }[]> = {
  enable: [
    { name: "Generate More Leads", body: "Increase qualified lead volume from your ICP.", href: "Solutions.dc.html#objective" },
    { name: "Build Pipeline", body: "From first content interaction to sales-qualified opportunity.", href: "Solutions.dc.html#objective" },
    { name: "Accelerate Sales", body: "Book more meetings. Close more revenue.", href: "Solutions.dc.html#objective" },
    { name: "Launch New Markets", body: "Enter new regions and segments with confidence.", href: "Solutions.dc.html#objective" },
    { name: "Improve ABM Performance", body: "Stop running ABM on assumptions.", href: "Solutions.dc.html#objective" },
    { name: "Increase Webinar Attendance", body: "Fill every seat with the right buyers.", href: "Solutions.dc.html#objective" },
    { name: "Industry Solutions", body: "Built for B2B. Specialized by industry.", href: "Industries.dc.html" },
  ],
  why: [
    { name: "Why Lidespy", body: "Most lead vendors are paid for volume. We’re measured on pipeline.", href: "Why Lidespy.dc.html" },
    { name: "About Us", body: "A demand generation partner that thinks like a revenue team.", href: "About.dc.html" },
    { name: "Our Team", body: "Research executives and GTM specialists with deep B2B expertise.", href: "About.dc.html#team" },
    { name: "Our Data", body: "Verified, permission-based B2B data behind every campaign.", href: "Services.dc.html#b2b-data" },
    { name: "How We Work", body: "From brief to pipeline in four steps.", href: "About.dc.html#how" },
    { name: "Compliance", body: "GDPR, CAN-SPAM and CASL aligned. Full campaign visibility.", href: "Why Lidespy.dc.html#compliance" },
    { name: "Global Coverage", body: "50+ countries across NA, Europe, APAC and MEA.", href: "About.dc.html#global" },
  ],
  resources: [
    { name: "Blog", body: "Learn how to upgrade your demand generation.", href: "Blog.dc.html" },
    { name: "Reports and Benchmarks", body: "Data-driven insights for better decisions.", href: "Resources.dc.html?type=reports#library" },
    { name: "Webinars", body: "Actionable insights from industry experts.", href: "Resources.dc.html?type=insights#library" },
    { name: "Whitepapers", body: "Deep dives on ABM, intent data and syndication.", href: "Resources.dc.html?type=reports#library" },
    { name: "Campaign Budget Calculator", body: "Model budget, CPL and pipeline potential.", href: "Calculator.dc.html" },
    { name: "Media Kit", body: "Brand assets, logos and company boilerplate.", href: "Resources.dc.html#media-kit" },
  ],
};

export const NAV_ITEMS: { key: MegaKey; label: string; href: string }[] = [
  { key: "solutions", label: "Solutions", href: "Services.dc.html" },
  { key: "enable", label: "What We Enable", href: "Solutions.dc.html" },
  { key: "why", label: "Why Lidespy", href: "Why Lidespy.dc.html" },
  { key: "resources", label: "Resources", href: "Resources.dc.html" },
];
