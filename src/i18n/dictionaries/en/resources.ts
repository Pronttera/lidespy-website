/** Content for the Resources artboard. */
const U = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export type ResourceCategory = "blog" | "reports" | "insights";

export type Resource = {
  cat: ResourceCategory;
  type: string;
  meta: string;
  title: string;
  body: string;
  action: string;
  img: string;
  credit: string;
  creditHref: string;
};

export const RESOURCES: Resource[] = [
  { cat: "blog", type: "Blog", meta: "6 min read", title: "ABM vs Demand Gen: which should you run first?", body: "When account-based plays beat volume programs — and how to combine the two without doubling budget.", action: "Read article", img: U("photo-1553877522-43269d4ea984"), credit: "Photo by Austin Distel on Unsplash", creditHref: "https://unsplash.com/@austindistel" },
  { cat: "blog", type: "Blog", meta: "8 min read", title: "How to use intent data without drowning in noise", body: "A practical framework for turning intent signals into prioritized account lists your SDRs will actually work.", action: "Read article", img: U("photo-1460925895917-afdab827c52f"), credit: "Photo by Carlos Muza on Unsplash", creditHref: "https://unsplash.com/@kmuza" },
  { cat: "blog", type: "Blog", meta: "5 min read", title: "Content syndication best practices for 2026", body: "Qualification filters, asset selection and follow-up sequencing that keep syndicated leads out of the junk pile.", action: "Read article", img: U("photo-1499750310107-5fef28a66643"), credit: "Photo by Andrew Neel on Unsplash", creditHref: "https://unsplash.com/@andrewtneel" },
  { cat: "blog", type: "Blog", meta: "7 min read", title: "Email deliverability for B2B: the 2026 checklist", body: "Domain warm-up, authentication, list hygiene and sending cadence — everything between you and the inbox.", action: "Read article", img: U("photo-1596526131083-e8c633c948d2"), credit: "Photo by Solen Feyissa on Unsplash", creditHref: "https://unsplash.com/@solenfeyissa" },
  { cat: "reports", type: "Industry report", meta: "Annual · Gated", title: "B2B Demand Generation Benchmark Report", body: "CPL, conversion and channel performance benchmarks drawn from 500+ executed campaigns.", action: "Download", img: U("photo-1551288049-bebda4e38f71"), credit: "Photo by Luke Chesser on Unsplash", creditHref: "https://unsplash.com/@lukechesser" },
  { cat: "reports", type: "Industry report", meta: "Annual · Gated", title: "State of ABM Report", body: "What actually moves pipeline in account-based programs — intent, coverage and orchestration.", action: "Download", img: U("photo-1543286386-713bdd548da4"), credit: "Photo by Isaac Smith on Unsplash", creditHref: "https://unsplash.com/@isaacmsmith" },
  { cat: "reports", type: "Industry report", meta: "Gated", title: "Content Syndication Performance Report", body: "Asset types, qualification filters and follow-up timing that convert syndicated leads into meetings.", action: "Download", img: U("photo-1504868584819-f8e8b4b6d7e3"), credit: "Photo by Carlos Muza on Unsplash", creditHref: "https://unsplash.com/@kmuza" },
  { cat: "insights", type: "Insight", meta: "Q3 2026", title: "B2B buyer behavior: the research phase is getting longer", body: "Data-driven commentary on intent trends across 12 industries — and what it means for your campaign timing.", action: "Read insight", img: U("photo-1552664730-d307ca884978"), credit: "Photo by Campaign Creators on Unsplash", creditHref: "https://unsplash.com/@campaign_creators" },
  { cat: "insights", type: "Insight", meta: "Q2 2026", title: "Marketing ROI: measuring pipeline, not MQLs", body: "Why sourced pipeline is the only metric revenue teams trust — and how to report it.", action: "Read insight", img: U("photo-1543286386-2e659306cd6c"), credit: "Photo by Isaac Smith on Unsplash", creditHref: "https://unsplash.com/@isaacmsmith" },
];

export const RESOURCE_FILTERS: { id: "all" | ResourceCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "blog", label: "Blog" },
  { id: "reports", label: "Industry reports" },
  { id: "insights", label: "Insights" },
];

/** Copy for the Resources page shell. */
export const RESOURCES_COPY = {
  meta: {
    title: "Resources · Lidespy",
    description:
      "B2B demand generation insights, research and resources — guides, benchmarks and reports.",
  },
  hero: {
    eyebrow: "Resource library",
    titleLead: "Everything we know about",
    titleAccent: "building B2B pipeline",
    intro:
      "Guides, benchmarks and campaign teardowns from the team running the programs — not the marketing department. Browse the whole library below.",
    stats: [
      { value: "500+", label: "Campaigns analysed" },
      { value: "12+", label: "Industries covered" },
      { value: "50+", label: "Countries served" },
      { value: "Free", label: "No paywall" },
    ],
  },
  library: {
    resultsOne: "1 resource",
    /** `{count}` is the number of matching resources. */
    resultsMany: "{count} resources",
    emptyTitle: "Nothing in this category yet.",
    emptyBody: "Browse the whole library instead.",
    emptyAction: "Reset filters",
  },
  cta: {
    label: "Get it first",
    title: "New research, straight to your inbox.",
    body: "One email a month: fresh benchmarks and what actually worked in live B2B campaigns. No drip sequence.",
    action: "Talk to us",
  },
  featured: {
    label: "Featured · Industry report",
    gated: "Gated download",
    title: "Annual B2B Demand Generation Benchmark Report",
    body: "CPL, conversion rates and channel performance across 500+ campaigns in technology, SaaS and enterprise markets — what worked, what didn’t, and what to budget for next year.",
    cta: "Download the report",
    imageCredit: "Photo by Luke Chesser on Unsplash",
    imageCreditHref: "https://unsplash.com/@lukechesser",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
  },
  grid: {
    /** `{count}` resources. */
    count: "{count} resources",
  },
  mediaKit: {
    label: "Media kit",
    title: "Brand assets for press and partners.",
    body: "Logo files, company overview and key stats for press and partner use.",
    items: [
      { title: "Logo pack", sub: "SVG · PNG · Dark & light" },
      { title: "Company overview", sub: "One-page PDF" },
      { title: "Key stats", sub: "500+ campaigns · 12+ industries · 50+ countries" },
    ],
  },
};
