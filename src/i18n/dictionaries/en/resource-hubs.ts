/**
 * The library's format hubs — Webinars, Whitepapers and the Media Kit — at
 * `/resources/<hub>`. The Resources mega menu points at these directly.
 *
 * Nothing here is gated behind a file that does not exist: sessions and
 * whitepapers are requested through the contact form, and the media kit only
 * offers assets that ship with the site.
 */

import type { HeroStat } from "../../../components/DetailHero";

export type HubItem = {
  id: string;
  /** "Session · 45 min", "Whitepaper · Gated". */
  meta: string;
  title: string;
  summary: string;
  points: string[];
  /** Something already on the site that covers the same ground. */
  related?: { label: string; href: string };
};

export type Hub = {
  meta: { title: string; description: string };
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  stats: HeroStat[];
  itemsLabel: string;
  itemsIntro: string;
  /** Label on each item's request button. */
  action: string;
  items: HubItem[];
  cta: { title: string; body: string; button: string };
};

export type HubKey = "webinars" | "whitepapers" | "media-kit";

/** The three hubs in menu order — drives the hero index and the cross-links. */
export const LIBRARY_HUBS: { key: HubKey; href: string; title: string; body: string }[] = [
  {
    key: "webinars",
    href: "/resources/webinars",
    title: "Webinars",
    body: "Working sessions on intent data, ABM, syndication and deliverability, with live Q&A.",
  },
  {
    key: "whitepapers",
    href: "/resources/whitepapers",
    title: "Whitepapers",
    body: "Deep dives on ABM, intent data, syndication and compliant B2B data.",
  },
  {
    key: "media-kit",
    href: "/resources/media-kit",
    title: "Media Kit",
    body: "Logo files, brand colours, boilerplate and key facts for press and partners.",
  },
];

export const HUBS: Record<"webinars" | "whitepapers", Hub> = {
  webinars: {
    meta: {
      title: "B2B Marketing Webinars · Lidespy",
      description:
        "Working sessions on B2B intent data, ABM, content syndication, deliverability and marketing ROI from the team running the campaigns.",
    },
    eyebrow: "Resources · Webinars",
    titleLead: "Working sessions from",
    titleAccent: "the campaign floor.",
    intro:
      "Forty-five minutes on one problem, taught by the people running the programs — the numbers, the mistakes and what we changed. No product tour, and live Q&A at the end of every session.",
    stats: [
      { value: "6", label: "Sessions in the series" },
      { value: "45 min", label: "Per session, Q&A included" },
      { value: "Monthly", label: "New session cadence" },
      { value: "Free", label: "No cost to attend" },
    ],
    itemsLabel: "The sessions",
    itemsIntro: "Register interest in a session and we will send you the next date and the joining link.",
    action: "Register interest",
    items: [
      {
        id: "intent-data-without-the-noise",
        meta: "Session · 45 min",
        title: "Intent data without the noise",
        summary:
          "How to separate real buying signals from background research, and turn what is left into an account list your SDRs will actually work.",
        points: [
          "First-party, third-party and bidstream intent compared",
          "Scoring intent by recency, frequency and topic fit",
          "Turning a surge into a sequenced outreach plan",
        ],
        related: { label: "Read: Buyer intent data explained", href: "/blog/buyer-intent-data-explained" },
      },
      {
        id: "buying-committee-abm",
        meta: "Session · 45 min",
        title: "Building an ABM program around the buying committee",
        summary:
          "Most ABM programs reach the champion and stall. This session covers mapping the full committee and coordinating channels so every role hears the right thing.",
        points: [
          "Tiering target accounts against your closed-won pattern",
          "Mapping committee roles and coverage gaps per account",
          "Coordinating email, LinkedIn and phone on one timeline",
        ],
        related: { label: "Read: State of ABM Report", href: "/resources/state-of-abm-report" },
      },
      {
        id: "syndication-sales-will-follow-up",
        meta: "Session · 45 min",
        title: "Content syndication that sales will actually follow up",
        summary:
          "Why syndicated leads get ignored, and the qualification filters, asset choices and follow-up timing that turn a download into a conversation.",
        points: [
          "Qualification filters agreed with sales up front",
          "Which asset types attract buyers rather than researchers",
          "The follow-up window, and what to say in it",
        ],
        related: {
          label: "Read: Content Syndication Performance Report",
          href: "/resources/content-syndication-performance-report",
        },
      },
      {
        id: "deliverability-2026",
        meta: "Session · 45 min",
        title: "Deliverability in 2026: getting B2B email into the inbox",
        summary:
          "Authentication, domain warm-up, list hygiene and sending cadence — everything between your sequence and the primary inbox, in the order it breaks.",
        points: [
          "SPF, DKIM and DMARC set up correctly, not just present",
          "Warm-up schedules and sending limits per domain",
          "Reading bounce and complaint data before it costs you",
        ],
        related: { label: "Read: Is cold email still worth it?", href: "/blog/is-cold-email-still-worth-it-2026" },
      },
      {
        id: "reporting-pipeline-not-mqls",
        meta: "Session · 45 min",
        title: "Reporting marketing ROI your revenue team will trust",
        summary:
          "Moving the conversation from MQL counts to sourced and influenced pipeline — what to instrument, how to attribute it, and how to present it.",
        points: [
          "Tracking delivered leads through to closed-won",
          "Sourced versus influenced pipeline, defined honestly",
          "A one-page report sales and finance both accept",
        ],
        related: { label: "Read: Measuring pipeline, not MQLs", href: "/resources/marketing-roi-pipeline-not-mqls" },
      },
      {
        id: "launching-new-regions",
        meta: "Session · 45 min",
        title: "Launching into a new region: data, compliance and channel mix",
        summary:
          "What changes when a program crosses a border — reachable audience size, consent rules, language and the channels that work locally.",
        points: [
          "Sizing the reachable audience before committing budget",
          "GDPR, CAN-SPAM and CASL differences that change the plan",
          "Local channel mix and language for the first 90 days",
        ],
        related: { label: "See: Launch New Markets", href: "/solutions/launch-new-markets" },
      },
    ],
    cta: {
      title: "Want a session run for your team?",
      body: "We run private versions of any session against your own ICP and data, with your marketing and sales leads in the room.",
      button: "Book a strategy call",
    },
  },

  whitepapers: {
    meta: {
      title: "B2B Marketing Whitepapers & Reports · Lidespy",
      description:
        "Deep dives on account-based marketing, intent data, content syndication and compliant B2B data from the Lidespy campaign team.",
    },
    eyebrow: "Resources · Whitepapers",
    titleLead: "The long version,",
    titleAccent: "written down.",
    intro:
      "Whitepapers for the decisions that deserve more than a blog post — how to structure an ABM program, evaluate intent data, fix syndication quality and keep B2B data compliant. Each one draws on the campaigns we run.",
    stats: [
      { value: "4", label: "Deep dives in the series" },
      { value: "500+", label: "Campaigns the guidance draws on" },
      { value: "Email", label: "Delivered straight to your inbox" },
      { value: "Free", label: "No cost, no drip sequence" },
    ],
    itemsLabel: "The whitepapers",
    itemsIntro: "Request a whitepaper and we will email it to you — along with nothing else unless you ask.",
    action: "Request the whitepaper",
    items: [
      {
        id: "buying-committee-playbook",
        meta: "Whitepaper · ABM",
        title: "The Buying Committee Playbook: ABM for mid-market teams",
        summary:
          "A practical structure for account-based marketing when you do not have an enterprise budget — which accounts, which roles, which channels, in what order.",
        points: [
          "Building and tiering a target account list",
          "Committee mapping and coverage targets per tier",
          "Orchestration calendars and the metrics that matter",
        ],
        related: { label: "Read: ABM in 2026 for mid-market teams", href: "/blog/abm-guide-mid-market-2026" },
      },
      {
        id: "intent-data-decoded",
        meta: "Whitepaper · Intent data",
        title: "Intent Data, Decoded: sources, signal quality and activation",
        summary:
          "What intent data can and cannot tell you, how to judge a provider, and how to wire signals into outreach so they change who gets contacted and when.",
        points: [
          "Where intent signals come from and how each can mislead",
          "A scorecard for evaluating intent providers",
          "Activation playbooks for SDR, ads and email",
        ],
        related: { label: "Read: Buyer intent data explained", href: "/blog/buyer-intent-data-explained" },
      },
      {
        id: "syndication-without-junk-leads",
        meta: "Whitepaper · Syndication",
        title: "Content Syndication Without the Junk Leads",
        summary:
          "Why syndication earned its reputation for low-quality leads, and the program design — filters, assets, verification and follow-up — that fixes it.",
        points: [
          "Qualification filters and verification before delivery",
          "Choosing assets that attract buyers, not students",
          "Measuring syndication on meetings, not downloads",
        ],
        related: {
          label: "Read: Content Syndication Performance Report",
          href: "/resources/content-syndication-performance-report",
        },
      },
      {
        id: "compliant-b2b-data",
        meta: "Whitepaper · Compliance",
        title: "Compliant B2B Data: GDPR, CAN-SPAM and CASL in practice",
        summary:
          "The rules that govern B2B outreach in Europe, the US and Canada, translated into the list, consent and suppression practices a campaign actually needs.",
        points: [
          "Lawful basis and consent, region by region",
          "Suppression, opt-out handling and record keeping",
          "Questions to ask any data or outreach vendor",
        ],
        related: { label: "See: our GDPR compliance", href: "/compliance/gdpr" },
      },
    ],
    cta: {
      title: "Rather talk it through than read it?",
      body: "We will walk you through how any of these applies to your ICP, your data and your pipeline target.",
      button: "Book a strategy call",
    },
  },
};

/** The media kit page — everything on it ships with the site. */
export const MEDIA_KIT_PAGE = {
  meta: {
    title: "Media Kit · Brand Assets & Press · Lidespy",
    description:
      "Lidespy logo files, brand colours, typography, company boilerplate and key facts for press and partner use.",
  },
  eyebrow: "Resources · Media kit",
  titleLead: "Brand assets for",
  titleAccent: "press and partners.",
  intro:
    "Logo files, brand colours, company boilerplate and key facts — everything you need to write about Lidespy or feature us alongside your own brand. For anything not here, email us and we will send it the same day.",
  stats: [
    { value: "500+", label: "Campaigns analysed" },
    { value: "12+", label: "Industries covered" },
    { value: "50+", label: "Countries served" },
    { value: "Pune", label: "Headquarters, serving clients globally" },
  ],
  sections: [
    { id: "logo", name: "Logo" },
    { id: "colours", name: "Brand colours" },
    { id: "typography", name: "Typography" },
    { id: "boilerplate", name: "Boilerplate" },
    { id: "facts", name: "Key facts" },
    { id: "usage", name: "Usage guidelines" },
  ],
  logo: {
    body: "The primary logo in full colour for light backgrounds, and reversed out for dark ones. Download the PNG below; vector files are available on request.",
    download: "Download PNG · 997 × 304",
    onLight: "On light",
    onDark: "On dark",
  },
  colours: [
    { name: "Brand red", hex: "#BE1622", use: "Primary brand colour, headings and accents" },
    { name: "Signal red", hex: "#E11B22", use: "Calls to action" },
    { name: "Coral", hex: "#FF5A4F", use: "Accents on dark backgrounds" },
    { name: "Ink", hex: "#12150F", use: "Text and dark surfaces" },
    { name: "Cream", hex: "#F7F8F4", use: "Page background" },
    { name: "Panel", hex: "#EFF1EA", use: "Secondary surfaces" },
  ],
  typography: {
    family: "Satoshi",
    body: "Satoshi is used for every piece of type on the site, from display headlines to body copy. Headlines are set large and tightly tracked; body copy runs at comfortable reading sizes with generous line height.",
  },
  boilerplate: {
    shortLabel: "Short · one line",
    short: "Lidespy is a B2B demand generation company delivering qualified leads, booked meetings and measurable pipeline.",
    longLabel: "Long · one paragraph",
    long: "Lidespy is a B2B demand generation company headquartered in Pune, India, serving clients globally. We combine audience intelligence, verified B2B data and multi-channel campaign expertise to deliver qualified leads, booked meetings and measurable pipeline contribution for technology, SaaS and enterprise revenue teams. Our research executives and GTM specialists work as an extension of our clients' marketing and sales functions — focused on outcomes, not activity.",
  },
  facts: [
    ["Company", "Lidespy"],
    ["Tagline", "Leads That Drive Growth"],
    ["Focus", "B2B demand generation"],
    ["Headquarters", "Pune, India"],
    ["Coverage", "50+ countries across North America, Europe, Asia Pacific and the Middle East & Africa"],
    ["Track record", "500+ campaigns across 12+ industries"],
    ["Website", "lidespy.com"],
    ["Press and partners", "info@lidespy.com"],
  ] as [string, string][],
  usage: {
    doLabel: "Please do",
    do: [
      "Use the logo as supplied, on a clean background with room around it",
      "Use the reversed logo on dark or photographic backgrounds",
      "Keep at least the height of the mark as clear space on every side",
      "Refer to the company as “Lidespy”, capitalised as shown",
    ],
    dontLabel: "Please don't",
    dont: [
      "Recolour, stretch, rotate or add effects to the logo",
      "Place the logo on busy backgrounds where it loses contrast",
      "Combine the logo with other marks into a new lock-up",
      "Imply a partnership or endorsement without written agreement",
    ],
  },
  press: {
    title: "Press and partner enquiries",
    body: "For interviews, commentary, vector logo files or partnership questions, email us and a member of the team will respond within one business day.",
  },
  cta: {
    title: "Writing about B2B demand generation?",
    body: "Our campaign team is happy to comment on intent data, ABM, deliverability and lead quality — with the numbers behind it.",
    button: "Get in touch",
  },
};
