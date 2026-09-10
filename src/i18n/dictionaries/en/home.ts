/** Content for the Home artboard (`Lidespy Home.dc.html`). */

export const LOGOS = [
  "Client 01", "Client 02", "Client 03", "Client 04",
  "Client 05", "Client 06", "Client 07", "Client 08",
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
    credit: "Photo by 1981 Digital on Unsplash", creditHref: "https://unsplash.com/@1981digital",
    tag: "Data", title: "Verified contact data & database building",
    body: "ICP-mapped databases built from scratch or enriched from your CRM — every record verified before it reaches a sequence." },
  { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=70",
    credit: "Photo by krakenimages on Unsplash", creditHref: "https://unsplash.com/@krakenimages",
    tag: "Cleansing", title: "Database cleansing & enrichment",
    body: "Dedupe, re-verify and enrich the data you already own. Cut bounce, restore deliverability, keep legal comfortable." },
  { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=70",
    credit: "Photo by Headway on Unsplash", creditHref: "https://unsplash.com/@headwayio",
    tag: "Outbound", title: "Cold email outbound & appointment setting",
    body: "Messaging, infrastructure and SDR execution that lands qualified meetings on your AEs’ calendars." },
  { img: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=800&q=70",
    credit: "Photo by Mapbox on Unsplash", creditHref: "https://unsplash.com/@mapbox",
    tag: "ABM", title: "Content syndication & ABM",
    body: "Put your assets in front of named accounts and turn engagement into intent-scored, sales-ready leads." },
];

export const CASES = [
  { img: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?auto=format&fit=crop&w=1200&q=70",
    credit: "Photo by Vitaly Gariev on Unsplash", creditHref: "https://unsplash.com/@silverkblack",
    segment: "SaaS", region: "North America", title: "Series B database rebuild",
    sub: "Database · outbound · 6 weeks", span: 7, minH: 420,
    v1: "48k", m1: "Verified records", v2: "37", m2: "Meetings / month" },
  { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=70",
    credit: "Photo by Dylan Gillis on Unsplash", creditHref: "https://unsplash.com/@mainermedia",
    segment: "Technology", region: "UK & EU", title: "GDPR outbound, four EU markets",
    sub: "Compliance · email · 4 markets", span: 5, minH: 420,
    v1: "1.8%", m1: "Bounce rate", v2: "112", m2: "Qualified meetings" },
  { img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=70",
    credit: "Photo by Christina @ wocintechchat.com on Unsplash", creditHref: "https://unsplash.com/@wocintechchat",
    segment: "B2B services", region: "APAC", title: "ABM into 120 named accounts",
    sub: "ABM · buying committees · 1 quarter", span: 5, minH: 380,
    v1: "84", m1: "Accounts engaged", v2: "$2.1M", m2: "Pipeline sourced" },
  { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70",
    credit: "Photo by Campaign Creators on Unsplash", creditHref: "https://unsplash.com/@campaign_creators",
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

export const QUOTES = [
  { img: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?auto=format&fit=crop&w=300&q=70",
    credit: "Photo by Tony Luginsland on Unsplash", creditHref: "https://unsplash.com/@tonyluginsland",
    text: "Testimonial placeholder — a revenue leader on data quality and how few records bounced.",
    name: "Name", role: "CRO, SaaS" },
  { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=70",
    credit: "Photo by Michael Dam on Unsplash", creditHref: "https://unsplash.com/@michaeldam",
    text: "Testimonial placeholder — a marketing leader on GDPR comfort and legal sign-off.",
    name: "Name", role: "VP Marketing, Fintech" },
  { img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=300&q=70",
    credit: "Photo by Willian Souza on Unsplash", creditHref: "https://unsplash.com/@willsouzabr",
    text: "Testimonial placeholder — on meeting quality and show rate.",
    name: "Name", role: "Head of Sales, Technology" },
  { img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?auto=format&fit=crop&w=300&q=70",
    credit: "Photo by Clay Elliot on Unsplash", creditHref: "https://unsplash.com/@ibidsy",
    text: "Testimonial placeholder — on reporting and working with a named partner.",
    name: "Name", role: "RevOps Lead, B2B services" },
];

export const POSTS = [
  { href: "Blog.dc.html", img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=70",
    credit: "Photo by Redd Francisco on Unsplash", creditHref: "https://unsplash.com/@reddfrancisco",
    tag: "Data quality", title: "What a 2% bounce rate actually takes: our verification stack, explained",
    date: "Aug 2026", read: "7 min" },
  { href: "Blog.dc.html", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=70",
    credit: "Photo by Annie Spratt on Unsplash", creditHref: "https://unsplash.com/@anniespratt",
    tag: "Compliance", title: "Cold outreach under GDPR: legitimate interest, done properly",
    date: "Jul 2026", read: "9 min" },
  { href: "Blog.dc.html", img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=900&q=70",
    credit: "Photo by Mario Gogh on Unsplash", creditHref: "https://unsplash.com/@mariogogh",
    tag: "Outbound", title: "Appointment setting vs. SQLs: what to pay a vendor for",
    date: "Jun 2026", read: "6 min" },
];

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
    videoCredit: "Video by Tiger Lily · Pexels",
    videoCreditHref: "https://www.pexels.com/video/team-meeting-7147921/",
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
  featuredQuote: {
    label: "Client story",
    imageAlt: "Client photo",
    imageCredit: "Photo by LinkedIn Sales Solutions on Unsplash",
    imageCreditHref: "https://unsplash.com/@linkedinsalesnavigator",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=70",
    textLead: "Featured client quote —",
    textAccent1: "two to three sentences",
    textMiddle: "on data quality, compliance and the meetings that actually",
    textAccent2: "showed up",
    name: "Client name",
    role: "Title, Company",
    stats: [
      { v: "1.8%", l: "Bounce rate" },
      { v: "37", l: "Meetings / month" },
    ],
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
    title: "What buyers say.",
  },
  insights: {
    title: "Insights",
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
