/** Content for the Home artboard (`Lidespy Home.dc.html`). */
import { POSTS as BLOG_POSTS } from "./blog";

/**
 * The client marquee on the home page. `src` points at the brand's own logo
 * under `public/logos` (sourced from Wikipedia/Wikimedia); a logo we have no
 * file for falls back to its name set as a wordmark, which is how the whole
 * strip used to read.
 */
export type LogoItem = {
  name: string;
  src?: string;
  /** Intrinsic size of the file, so the marquee reserves the right box. */
  w?: number;
  h?: number;
  /** Rendered height in the strip, tuned so the marks read as one weight. */
  height?: number;
};

export const LOGOS: LogoItem[] = [
  { name: "Oracle NetSuite", src: "/logos/netsuite.png", w: 417, h: 152, height: 28 },
  { name: "Lenovo", src: "/logos/lenovo.svg", w: 705, h: 116, height: 19 },
  { name: "Dialpad" },
  { name: "RingCentral", src: "/logos/ringcentral.svg", w: 2753, h: 416, height: 21 },
  { name: "Dell", src: "/logos/dell.svg", w: 72, h: 72, height: 34 },
  { name: "Procore", src: "/logos/procore.jpg", w: 899, h: 111, height: 15 },
  { name: "Microsoft", src: "/logos/microsoft.svg", w: 338, h: 72, height: 24 },
  { name: "Google", src: "/logos/google.svg", w: 272, h: 92, height: 26 },
];

export const CHALLENGE_CARDS = [
  { rail: "Deliverability", n: "28", unit: "%", index: "01", bar: 72,
    body: "A bought list bounced at **28%**. Your sending domain is now **flagged**." },
  { rail: "Rep hours", n: "2", unit: "days/wk", index: "02", bar: 58,
    body: "SDRs burn **two days a week** researching contacts instead of **selling**." },
  { rail: "Compliance", n: "0", unit: "on file", index: "03", bar: 88,
    body: "Legal killed the EU sequence — **no lawful basis** documented for a single record." },
  { rail: "Show rate", n: "1/3", unit: "", index: "04", bar: 64,
    body: "Meetings get booked, then **nobody shows**. The wrong people were qualified." },
];

export const STEPS = [
  { n: "01", week: "Week 1", title: "ICP & data audit",
    out: "Sample of your current data scored for accuracy, bounce and consent risk. Target account list agreed." },
  { n: "02", week: "Week 2–3", title: "Build & verify",
    out: "Database built or cleansed, verified, and delivered for your review before any outreach." },
  { n: "03", week: "Week 3", title: "Messaging & compliance",
    out: "Sequences, lawful-basis documentation and opt-out flows signed off with your team." },
  { n: "04", week: "Week 4–5", title: "Launch outbound",
    out: "Email, syndication and ABM live. Daily monitoring of deliverability and replies." },
  { n: "05", week: "Week 6+", title: "Meetings & reporting",
    out: "Qualified meetings on AE calendars; weekly source-level reporting to RevOps." },
];

export const HOME_SERVICES = [
  { img: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?auto=format&fit=crop&w=800&q=70",
    tag: "ABM", title: "Verified contact data & database building",
    body: "ICP-mapped databases built from scratch or enriched from your CRM — every record verified before it reaches a sequence." },
  { img: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=800&q=70",
    tag: "Content Syndication", title: "Content syndication",
    body: "Put your assets in front of your ICP and turn engagement into verified, sales-ready leads." },
  { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=70",
    tag: "GTM", title: "Database cleansing & enrichment",
    body: "Dedupe, re-verify and enrich the data you already own. Cut bounce, restore deliverability, keep legal comfortable." },
  { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=70",
    tag: "Demand Gen", title: "Demand generation",
    body: "Multi-channel programs that build awareness in your market and turn it into qualified pipeline." },
  { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=70",
    tag: "In-House Appt Gen", title: "In-house appointment generation",
    body: "Messaging, infrastructure and SDR execution that lands qualified meetings on your AEs’ calendars." },
];

export const CASES = [
  { img: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?auto=format&fit=crop&w=1200&q=70",
    segment: "SaaS", region: "North America", title: "Series B database rebuild",
    sub: "Database · outbound · 6 weeks", span: 7, minH: 420,
    v1: "48k", m1: "Verified records", v2: "37", m2: "Meetings / month" },
  { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=70",
    segment: "Technology", region: "UK & EU", title: "GDPR outbound, four EU markets",
    sub: "Compliance · email · 4 markets", span: 5, minH: 420,
    v1: "1.8%", m1: "Bounce rate", v2: "112", m2: "Qualified meetings" },
  { img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=70",
    segment: "B2B services", region: "APAC", title: "ABM into 120 named accounts",
    sub: "ABM · buying committees · 1 quarter", span: 5, minH: 380,
    v1: "84", m1: "Accounts engaged", v2: "$2.1M", m2: "Pipeline sourced" },
  { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70",
    segment: "Fintech", region: "UK", title: "Database cleanse & re-verification",
    sub: "Data hygiene · CRM sync · 3 weeks", span: 7, minH: 380,
    v1: "-91%", m1: "Bounce cut", v2: "26k", m2: "Records recovered" },
];

/** `v` is the server-rendered value; `n`/`suffix` drive the count-up on scroll. */
export const STATS = [
  { v: "1,200k", n: 1200000, suffix: "k", l: "Verified records delivered" },
  { v: "4,800+", n: 4800, suffix: "+", l: "Qualified meetings booked" },
  { v: "1.8%", n: 1.8, suffix: "%", l: "Average bounce rate" },
];

export type CompareKey = "vendors" | "inhouse" | "lists";

export const COMPARE_LABEL: Record<CompareKey, string> = {
  vendors: "typical lead-gen vendors",
  inhouse: "an in-house SDR team",
  lists: "buying a static list",
};

export const COMPARE_ROWS: Record<CompareKey, { k: string; us: string; them: string }[]> = {
  vendors: [
    { k: "Data", us: "Human + automated verification on every record before send. Bounce SLA in the contract.", them: "Scraped or resold lists; bounce risk is yours." },
    { k: "Compliance", us: "GDPR framework built in — lawful basis, opt-out handling, regional rules for EU/UK/APAC.", them: "“Compliant” asserted, rarely documented." },
    { k: "Ownership", us: "Named partner accountable for data, messaging and meetings.", them: "Rotating account managers; SDRs you never meet." },
    { k: "Qualification", us: "Meetings qualified against your ICP; no-shows replaced.", them: "Volume-based; you pay for the calendar invite." },
    { k: "Reporting", us: "Weekly source-level reporting your RevOps team can audit.", them: "Monthly PDF summary." },
    { k: "Quality system", us: "ISO 9001:2015 process discipline.", them: "Ad hoc." },
  ],
  inhouse: [
    { k: "Ramp", us: "Live in six weeks with lists, sequences and a booked calendar.", them: "3–6 months to hire, onboard and ramp." },
    { k: "Data", us: "Verified database delivered and maintained for you.", them: "Reps spend ~40% of time researching contacts." },
    { k: "Compliance", us: "GDPR framework and documented lawful basis.", them: "Depends on each rep’s habits." },
    { k: "Cost", us: "Program fee tied to meetings delivered.", them: "Salary, tools, data and management overhead." },
    { k: "Coverage", us: "North America, UK, EU and APAC time zones.", them: "One region per hire." },
    { k: "Reporting", us: "Weekly, source-level, RevOps-ready.", them: "CRM hygiene varies by rep." },
  ],
  lists: [
    { k: "Freshness", us: "Verified at build time and re-verified before each send.", them: "Aged the day you download it." },
    { k: "Fit", us: "Built to your ICP, tech stack and buying signals.", them: "Filtered by title and headcount only." },
    { k: "Compliance", us: "Lawful basis documented per region.", them: "Consent status unknown." },
    { k: "Bounce", us: "Bounce SLA in the contract.", them: "15–30% bounce is typical." },
    { k: "Outreach", us: "We run the outbound and book the meetings.", them: "A spreadsheet. The rest is on you." },
    { k: "Support", us: "Named partner, weekly reporting.", them: "A download link." },
  ],
};

/**
 * Home testimonials. The first entry is the featured client story; the rest
 * are the result cards beneath it. Each one is written against the program in
 * `case-studies.ts` it belongs to, so its numbers match that study.
 * TODO(client): replace with approved client quotes before launch — see
 * CLIENT-CONTENT-CHECKLIST.md §2.
 */
export const QUOTES = [
  { text: "We inherited lists from three vendors and a **31% bounce rate**. Six weeks later we had 48k verified records, bounces under 2%, and SDRs **booking meetings instead of cleaning spreadsheets**.",
    role: "VP Revenue", context: "Series B SaaS · North America",
    program: "Series B database rebuild · 6 weeks",
    stats: [{ v: "1.8%", l: "Bounce rate after rebuild" }, { v: "37", l: "Meetings per month" }] },
  { text: "Legal had blocked outbound entirely. Lidespy documented a lawful basis for every market, our counsel signed it off, and the first campaign went out in six weeks.",
    role: "VP Marketing", context: "Technology · UK & EU",
    program: "GDPR outbound across four EU markets",
    stats: [{ v: "112", l: "Qualified meetings, zero complaints" }] },
  { text: "Deals used to die the day our champion changed jobs. Now we are talking to four or five people on every buying committee, and the pipeline shows it.",
    role: "Head of Sales", context: "Cybersecurity · APAC",
    program: "ABM into 120 named accounts",
    stats: [{ v: "$2.1M", l: "Pipeline sourced in one quarter" }] },
  { text: "Our webinar went from 40 registrants, mostly existing customers, to 400 of the right people. Routing no-shows into their own sequence gave sales a reason to call both groups.",
    role: "RevOps Lead", context: "B2B services · US & Canada",
    program: "Webinar series from 40 to 400 registrants",
    stats: [{ v: "61", l: "Meetings from the series" }] },
];

/** The three blog articles the home page's Blogs row leads with. */
export const POSTS = [
  "real-cost-of-bad-b2b-data",
  "b2b-data-compliance-checklist-2026",
  "in-house-appointment-generation",
].map((slug) => {
  const p = BLOG_POSTS.find((post) => post.slug === slug)!;
  return {
    href: `/blog/${slug}`,
    img: p.img,
    alt: p.alt,
    tag: p.topic,
    title: p.title,
    read: p.meta,
  };
});

/** Copy for the Home page shell — everything outside the data sets above. */
export const HOME_COPY = {
  meta: {
    title: "Lidespy · B2B demand generation",
    description:
      "Build a verified B2B pipeline your revenue team can actually trust. Database building, cleansing, cold outbound, content syndication and ABM.",
  },
  hero: {
    titleLead: "Build a",
    titleAccent: "verified B2B pipeline",
    titleTail: "your revenue team can actually trust",
    introLead: "Lidespy helps SaaS, technology and B2B services firms turn",
    introAccent: "verified contact data into qualified meetings",
    introTail:
      ". Database building, cleansing, cold outbound, content syndication and ABM — GDPR-compliant across North America, the UK, the EU and APAC.",
    isoBadge: "ISO\n9001",
    isoLine: "ISO 9001:2015",
    isoLineMuted: "certified",
    credentials: "GDPR framework · Est. 2023 · LLP",
  },
  logos: {
    heading:
      "Trusted by revenue teams across North America, the UK, the EU & APAC",
  },
  challenge: {
    eyebrow: "Challenge",
    titleLine1: "Your pipeline targets grew.",
    titleLine2: "But your data has not caught up",
    imageAlt: "Marketer working through a messy contact database",
  },
  process: {
    eyebrow: "Process",
    titleLead: "From ICP to booked meetings",
    titleAccent: "in six weeks.",
    total: "/ 05",
    reviewableOutput: "Reviewable output",
    readyTitle: "Ready to start week one?",
  },
  solution: {
    eyebrow: "Solution",
    title:
      "We bridge the gap between the data you have and the pipeline you need.",
    body: "From building and verifying the database to running outbound, syndication and ABM — we do what most teams split across three vendors.",
  },
  work: {
    eyebrow: "Proof of work",
    title: "Programs that shipped pipeline, not just leads.",
    body: "Four recent engagements across SaaS, technology, B2B services and fintech. Hover any card for the numbers behind it.",
    viewMore: "View more projects",
  },
  whyUs: {
    eyebrow: "Why us",
    titleAccent: "Why Lidespy",
    /** Reads "Why Lidespy — and why not <comparison>?" */
    titleTail: "— and why not",
    body: "Same six things every buyer asks about. Left column is what we put in the contract; right column is what you usually get.",
    ourColumn: "Lidespy",
  },
  testimonials: {
    eyebrow: "Client proof",
    title: "What revenue teams say after the first quarter.",
    intro: "Every quote comes from a program in our case studies, and the numbers beside it are that program's results.",
    linkLabel: "Read the case studies",
  },
  insights: {
    title: "Blogs",
  },
  cta: {
    badge: "Free 30-minute data audit",
    title: "Let’s turn your database into your most reliable pipeline source.",
    body: "We audit a sample of your current data, show you the bounce and compliance risk, and map a program to your Q-target.",
    badges: ["ISO 9001:2015", "GDPR-compliant outreach", "No list resale"],
    panelLabel: "What you get on the call",
    panelItems: [
      "A scored sample of your current data: accuracy, bounce and consent risk",
      "Reachable audience size for your ICP and target regions",
      "A six-week program mapped to your quarter's pipeline target",
    ],
    button: "Book a strategy call",
    emailLead: "Or email",
    emailTail: "· replies within one business day",
  },
};
