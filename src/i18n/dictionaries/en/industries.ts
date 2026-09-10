/** Content for the Industries artboard. */
export type Industry = {
  key: string;
  name: string;
  description: string;
  personas: string[];
  img: string;
  credit: string;
  creditHref: string;
};

export const INDUSTRIES_LIST: Industry[] = [
  { key: "technology", name: "Technology", description: "IT buyers, vendors, ISVs, managed service providers", personas: ["CTO / CIO", "IT Director", "VP Engineering"], img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Alexandre Debiève on Unsplash", creditHref: "https://unsplash.com/@alexkixa" },
  { key: "saas", name: "SaaS", description: "Product-led and sales-led SaaS companies at every stage", personas: ["CMO", "Head of Growth", "RevOps"], img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Annie Spratt on Unsplash", creditHref: "https://unsplash.com/@anniespratt" },
  { key: "cybersecurity", name: "Cybersecurity", description: "Security vendors targeting CISO, SOC, and IT security teams", personas: ["CISO", "SOC Lead", "Risk & Compliance"], img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=70", credit: "Photo by FLY:D on Unsplash", creditHref: "https://unsplash.com/@flyd2069" },
  { key: "cloud", name: "Cloud & Infrastructure", description: "Cloud platforms, hosting, and DevOps tools", personas: ["Head of Infrastructure", "DevOps Lead", "Platform Eng"], img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Taylor Vick on Unsplash", creditHref: "https://unsplash.com/@tvick" },
  { key: "fintech", name: "FinTech", description: "Banking, insurance, payments, and financial services technology", personas: ["CFO", "Treasury", "Head of Payments"], img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Markus Spiske on Unsplash", creditHref: "https://unsplash.com/@markusspiske" },
  { key: "healthcare", name: "Healthcare", description: "Health IT, medical devices, clinical software, and digital health", personas: ["Clinical IT", "Hospital Admin", "Procurement"], img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70", credit: "Photo by National Cancer Institute on Unsplash", creditHref: "https://unsplash.com/@nci" },
  { key: "manufacturing", name: "Manufacturing", description: "Industrial technology, supply chain, and operational software", personas: ["COO", "Plant Manager", "Supply Chain"], img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Lenny Kuhne on Unsplash", creditHref: "https://unsplash.com/@lennykuhne" },
  { key: "telecom", name: "Telecommunications", description: "Telco vendors, network infrastructure, and connectivity solutions", personas: ["Network Director", "CTO", "Procurement"], img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Federico Beccari on Unsplash", creditHref: "https://unsplash.com/@federize" },
  { key: "professional-services", name: "Professional Services", description: "Consulting, advisory, and B2B service providers", personas: ["Managing Partner", "Practice Lead", "BD Director"], img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Cytonn Photography on Unsplash", creditHref: "https://unsplash.com/@cytonn_photography" },
];

/** Copy for the Industries page shell. */
export const INDUSTRIES_COPY = {
  meta: {
    title: "Industries · Lidespy",
    description:
      "B2B demand generation specialized for technology, SaaS, cybersecurity, fintech, healthcare and more.",
  },
  hero: {
    eyebrow: "Industries · 9 sectors",
    titleLead: "B2B demand generation",
    titleAccent: "specialized for your industry",
    intro:
      "We understand the buying cycles, personas, and competitive dynamics of the industries we serve. Every campaign is built with industry context, not generic templates.",
    cta: "Book a strategy call",
  },
  grid: {
    eyebrow: "Industries we serve",
    title: "Built for B2B. Specialized by industry.",
    body: "Every industry page follows the same structure: an overview, the job titles we reach, estimated audience reach, two or three campaign use cases, and the services that fit.",
    explore: "Explore",
  },
  cta: {
    titleLead: "Your industry,",
    titleAccent: "your buyers",
    titleTail: ", our campaigns.",
    body: "Tell us who you sell to. We’ll show you the audience we can reach and the campaigns that have worked in your sector.",
    button: "Book a strategy call",
  },
};
