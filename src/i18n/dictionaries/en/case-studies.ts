/** Content for the Case Studies artboard. */
const SLUG: Record<string, string> = {
  "Demand Generation": "demand-generation",
  "Content Syndication": "content-syndication",
  "Account-Based Marketing": "abm",
  "Email Marketing": "email-marketing",
  "Audience Intelligence": "audience-intelligence",
  "High-Intent B2B Data": "b2b-data",
  "Appointment Generation": "appointment-generation",
  "Webinar & Event Promotion": "webinar-promotion",
  "GTM Strategy": "gtm-strategy",
};

const svc = (names: string[]) =>
  names.map((name) => ({ name, href: `Services.dc.html#${SLUG[name] ?? ""}` }));

export type Study = {
  segment: string;
  region: string;
  duration: string;
  title: string;
  challenge: string;
  solution: string;
  results: { v: string; l: string }[];
  services: { name: string; href: string }[];
  img: string;
  credit: string;
  creditHref: string;
};

export const STUDIES: Study[] = [
  { segment: "SaaS", region: "North America", duration: "6 weeks", title: "Series B database rebuild",
    challenge: "31% bounce rate on legacy lists inherited from three previous vendors, with no consent records and duplicate accounts across two CRMs.",
    solution: "Full ICP remap, verified rebuild from source, suppression pass against existing opportunities, then CRM-synced delivery with weekly re-verification.",
    results: [{ v: "48k", l: "Verified records delivered" }, { v: "1.8%", l: "Bounce rate post-rebuild" }, { v: "37", l: "Meetings per month" }],
    services: svc(["High-Intent B2B Data", "Audience Intelligence", "Email Marketing"]),
    img: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Vitaly Gariev on Unsplash", creditHref: "https://unsplash.com/@silverkblack" },
  { segment: "Technology", region: "UK & EU", duration: "4 markets", title: "GDPR outbound across four EU markets",
    challenge: "Legal blocked outbound entirely — no documented lawful basis per market and no defensible audit trail for existing contact records.",
    solution: "Consent-aware data build with lawful basis documented per market, localised sequences reviewed by counsel, and a suppression and retention policy handed to their legal team.",
    results: [{ v: "6 wks", l: "To first compliant campaign" }, { v: "112", l: "Qualified meetings" }, { v: "0", l: "Complaints filed" }],
    services: svc(["Content Syndication", "Email Marketing", "Audience Intelligence"]),
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Dylan Gillis on Unsplash", creditHref: "https://unsplash.com/@mainermedia" },
  { segment: "Cybersecurity", region: "APAC", duration: "1 quarter", title: "ABM into 120 named accounts",
    challenge: "Every deal single-threaded through one champion. When the champion moved, the deal died — average committee coverage was 1.4 people per account.",
    solution: "Buying committee mapping across all 120 accounts, then coordinated plays hitting CISO, SOC lead and procurement with role-specific content in sequence.",
    results: [{ v: "84", l: "Accounts engaged" }, { v: "4.6", l: "Contacts per committee" }, { v: "$2.1M", l: "Pipeline sourced" }],
    services: svc(["Account-Based Marketing", "Audience Intelligence", "Appointment Generation"]),
    img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Christina @ wocintechchat.com on Unsplash", creditHref: "https://unsplash.com/@wocintechchat" },
  { segment: "FinTech", region: "UK", duration: "3 weeks", title: "Database cleanse and re-verification",
    challenge: "180k records accumulated over five years, unknown decay, and a marketing team afraid to send to any of it.",
    solution: "Tiered verification by seniority and recency, records past recovery archived rather than deleted, and a quarterly refresh cadence set up against their CRM.",
    results: [{ v: "-91%", l: "Bounce rate cut" }, { v: "26k", l: "Records recovered" }, { v: "3 wks", l: "End to end" }],
    services: svc(["High-Intent B2B Data", "Audience Intelligence"]),
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Markus Spiske on Unsplash", creditHref: "https://unsplash.com/@markusspiske" },
  { segment: "B2B services", region: "US & Canada", duration: "2 quarters", title: "Webinar series from 40 to 400 registrants",
    challenge: "A monthly thought-leadership webinar averaging 40 registrants, mostly existing customers, with no measurable pipeline contribution.",
    solution: "ICP-matched promotion via email and syndication, a pre-event nurture track, and post-event routing that split attendees from no-shows into separate SDR sequences.",
    results: [{ v: "412", l: "Average registrants" }, { v: "38%", l: "Attendance rate" }, { v: "61", l: "Meetings from series" }],
    services: svc(["Webinar & Event Promotion", "Content Syndication", "Appointment Generation"]),
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Chris Montgomery on Unsplash", creditHref: "https://unsplash.com/@cmontgomery" },
  { segment: "Healthcare", region: "US", duration: "90 days", title: "Market entry for a clinical software launch",
    challenge: "A new product with no category presence, targeting hospital committees where the buying cycle runs three to five stakeholders and nine months.",
    solution: "GTM strategy defining three personas and a messaging framework, then a 90-day launch program combining syndication for awareness and SDR outreach into named IDNs.",
    results: [{ v: "2.4k", l: "ICP contacts reached" }, { v: "43", l: "Discovery calls" }, { v: "9", l: "Committee evaluations" }],
    services: svc(["GTM Strategy", "Content Syndication", "Appointment Generation"]),
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70", credit: "Photo by National Cancer Institute on Unsplash", creditHref: "https://unsplash.com/@nci" },
];

export const STUDY_FILTERS = ["All", "SaaS", "Technology", "Cybersecurity", "FinTech", "B2B services", "Healthcare"];

export const HEADLINE_STATS = [
  { v: "500+", l: "Campaigns executed" },
  { v: "1.8%", l: "Average bounce rate" },
  { v: "$2.1M", l: "Largest single-program pipeline" },
  { v: "12+", l: "Industries served" },
];

/** Copy for the Case Studies page shell. */
export const CASE_STUDIES_COPY = {
  meta: {
    title: "Case Studies · Lidespy",
    description:
      "Proven B2B demand generation campaigns that drove real pipeline — challenge, solution and the numbers.",
  },
  hero: {
    /** Reads "Case studies · {count} programs". */
    eyebrow: "Case studies · {count} programs",
    titleLead: "Proven campaigns that drove",
    titleAccent: "real pipeline",
    intro:
      "Every study follows the same three beats: the challenge the client brought us, what we built, and the numbers it produced. No composite clients, no rounded-up results.",
  },
  list: {
    countOne: "{count} case study",
    countOther: "{count} case studies",
    challengeLabel: "Challenge",
    solutionLabel: "Solution",
    resultsLabel: "Results",
    runThisProgram: "Run this program",
  },
  cta: {
    titleLead: "Your program could be the",
    titleAccent: "next one here",
    titleTail: ".",
    body: "Tell us the target and the quarter. We’ll show you which of these programs maps closest to your situation.",
    button: "Book a strategy call",
  },
};
