/**
 * The three "Why Lidespy" pillars that head the dark rail in the Solutions
 * mega-menu. Each one gets its own page at `/why-lidespy/<key>`; the rail
 * blurbs stay in `nav.ts` because the menu shows a much shorter version.
 */

export type PillarSection = {
  id: string;
  title: string;
  body: string;
  points: string[];
};

export type Pillar = {
  key: string;
  name: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  stats: { value: string; label: string }[];
  sections: PillarSection[];
  /** Service keys this pillar shows up in — cross-links to the service pages. */
  services: string[];
  cta: { title: string; body: string; button: string };
};

export const PILLARS: Pillar[] = [
  {
    key: "precision-targeting",
    name: "Precision Targeting",
    eyebrow: "Why Lidespy · Pillar 01",
    titleLead: "Every campaign starts with",
    titleAccent: "the right list.",
    intro:
      "ICP-matched audiences, buying committee intelligence and intent data activation. We do the targeting work before a single email goes out — because no amount of creative rescues a campaign pointed at the wrong people.",
    stats: [
      { value: "50+", label: "Countries covered" },
      { value: "9", label: "Committee roles mapped per account" },
      { value: "95%+", label: "Verified deliverability on delivered records" },
      { value: "0", label: "Recycled or scraped lists" },
    ],
    sections: [
      {
        id: "icp-definition",
        title: "ICP definition, not ICP assumptions",
        body:
          "Most target lists are a filter someone set once and never revisited. We start from your closed-won data — which accounts actually bought, at what size, in what industry, running what stack — and rebuild the profile from evidence rather than from the deck.",
        points: [
          "Closed-won and closed-lost analysis to find the real pattern",
          "Firmographic, technographic and behavioural scoring model",
          "Segment tiers so budget follows the accounts worth the spend",
          "Documented exclusions and suppression rules from day one",
        ],
      },
      {
        id: "buying-committee",
        title: "The buying committee, mapped",
        body:
          "B2B deals are not signed by one person. We map the full committee for every target account — economic buyer, technical evaluator, end user, procurement — so outreach reaches the people who can actually move the deal, and nobody who matters is missed.",
        points: [
          "Named decision-makers with verified work email and direct dial",
          "Role and seniority coverage tracked per account",
          "Reporting-line context so messaging lands per persona",
          "Coverage gaps flagged before the campaign launches",
        ],
      },
      {
        id: "intent-activation",
        title: "Intent data you act on, not admire",
        body:
          "Intent signals only matter if they change what you do this week. We monitor category and competitor research activity across your target accounts and route surging accounts straight into live outreach, with the reason for the surge attached.",
        points: [
          "Category, competitor and solution-level intent monitoring",
          "Weekly surge list with the topic that triggered it",
          "Prioritised outreach queues for sales, refreshed continuously",
          "Signal decay handling so stale accounts drop out",
        ],
      },
      {
        id: "verification",
        title: "Verified before delivery, every record",
        body:
          "Every contact we hand over is validated and enriched at the point of delivery — not at the point it was first collected. Records that fail verification never reach your CRM, and the ones that do arrive with the fields your sequences need.",
        points: [
          "Multi-step email and phone validation before handoff",
          "Enrichment: title, seniority, company size, region, tech stack",
          "Suppression file applied against your existing pipeline",
          "Replacement guarantee on any record that bounces",
        ],
      },
    ],
    services: ["audience-intelligence", "b2b-data", "abm"],
    cta: {
      title: "See the targeting before you commit to the campaign.",
      body: "We will build a sample audience against your ICP so you can judge the list quality first — not after the invoice.",
      button: "Request a sample audience",
    },
  },
  {
    key: "multi-channel-execution",
    name: "Multi-Channel Execution",
    eyebrow: "Why Lidespy · Pillar 02",
    titleLead: "Six channels, one program,",
    titleAccent: "one timeline.",
    intro:
      "Email, ABM, content syndication, telemarketing, webinars and SDR outreach — planned, sequenced and timed as a single program rather than six vendors sending into the same inbox in the same week.",
    stats: [
      { value: "6", label: "Channels run in-house" },
      { value: "1", label: "Team, one campaign calendar" },
      { value: "7–14", label: "Touches per account before qualification" },
      { value: "Weekly", label: "Delivery and reporting cadence" },
    ],
    sections: [
      {
        id: "orchestration",
        title: "One calendar, not six vendors",
        body:
          "The usual failure mode is not a bad channel — it is three agencies hitting the same buyer with unrelated messages in the same fortnight. We run every channel off one campaign calendar, so each touch builds on the last instead of competing with it.",
        points: [
          "Single sequenced plan across every channel in the program",
          "Frequency caps enforced per contact and per account",
          "Message progression from awareness through to meeting request",
          "One point of contact accountable for the whole program",
        ],
      },
      {
        id: "channel-mix",
        title: "Channel mix chosen by the buying cycle",
        body:
          "Long, multi-stakeholder cycles need content syndication and ABM. Fast, transactional ones need email and SDR outreach. We set the mix from your deal length and committee size, then reallocate as the data comes in.",
        points: [
          "Mix modelled against deal size, cycle length and committee size",
          "Budget reallocated monthly toward the channels producing pipeline",
          "Channel-level CPL and conversion reported separately",
          "Underperforming channels paused rather than defended",
        ],
      },
      {
        id: "sequencing",
        title: "Sequenced touches, not scattered ones",
        body:
          "A content download is followed by a relevant email, then a call that references what they read. Every touch has context from the one before it — which is the difference between a sequence and a series of interruptions.",
        points: [
          "Content-first entry, then progressive qualification",
          "Email, phone and LinkedIn touches from one shared timeline",
          "Behaviour-triggered branches on open, download and reply",
          "Full call recordings and notes delivered with each meeting",
        ],
      },
      {
        id: "compliance",
        title: "Compliant in every region we run",
        body:
          "Multi-channel across multiple regions means multiple legal regimes. We document the lawful basis per region before launch, and every record carries its consent and source trail with it.",
        points: [
          "GDPR, CAN-SPAM and CASL aligned by region",
          "Documented lawful basis and source per record",
          "Opt-out handling propagated across every channel",
          "Full campaign audit trail available on request",
        ],
      },
    ],
    services: ["demand-generation", "content-syndication", "abm"],
    cta: {
      title: "One program. One calendar. One team accountable.",
      body: "Tell us which channels you already run and we will show you where the overlap is costing you conversions.",
      button: "Book a program review",
    },
  },
  {
    key: "revenue-focused-outcomes",
    name: "Revenue-Focused Outcomes",
    eyebrow: "Why Lidespy · Pillar 03",
    titleLead: "Qualified leads, booked meetings,",
    titleAccent: "real pipeline.",
    intro:
      "Not impressions. Not MQLs that die on contact with sales. We report on the metrics your CFO recognises — accepted leads, held meetings and pipeline contribution — and we are willing to be measured on them.",
    stats: [
      { value: "SQL", label: "The unit we report against" },
      { value: "100%", label: "Leads replaced if they fail your criteria" },
      { value: "Weekly", label: "Pipeline contribution reporting" },
      { value: "3", label: "Engagement models, including performance-based" },
    ],
    sections: [
      {
        id: "definition-of-done",
        title: "We agree what counts as a lead first",
        body:
          "Most disputes about lead quality are really disputes about definition. Before a campaign starts we write down the qualification criteria — title, company size, budget authority, timing — and both teams sign it. Anything that fails it is replaced, not argued over.",
        points: [
          "Written qualification criteria agreed before launch",
          "BANT or your own custom framework, whichever sales uses",
          "Rejected leads replaced at no cost, no negotiation",
          "Rejection reasons fed back into the targeting model",
        ],
      },
      {
        id: "attribution",
        title: "Attribution through to pipeline, not to the form",
        body:
          "A form fill is not an outcome. We track each delivered lead through acceptance, meeting held, opportunity created and closed-won, so the number you see is what the program actually contributed to revenue.",
        points: [
          "CRM sync with campaign and source stamped on every record",
          "Lead-to-opportunity and opportunity-to-won conversion tracked",
          "Cost per accepted lead, per meeting and per opportunity",
          "Monthly pipeline contribution reported alongside spend",
        ],
      },
      {
        id: "reporting",
        title: "Reporting your revenue team can read",
        body:
          "Weekly delivery reports with the records and the reasoning, monthly reviews with the trend and the recommendation. No dashboards that require an interpreter, and no metrics that exist only to look good.",
        points: [
          "Weekly lead delivery report with qualification notes",
          "Monthly performance review with channel-level breakdown",
          "Clear read on what to scale, what to fix and what to stop",
          "Full visibility into every campaign we run for you",
        ],
      },
      {
        id: "commercials",
        title: "Commercial terms that share the risk",
        body:
          "Project, retainer or performance-based. If you want the first engagement priced on delivered outcomes rather than on effort, that is a conversation we are happy to have — the model should match how confident we both are.",
        points: [
          "Project engagements for a defined campaign or launch",
          "Monthly retainers for ongoing programs",
          "Performance-based pricing on qualifying programs",
          "Scale up or down as programs prove out",
        ],
      },
    ],
    services: ["demand-generation", "abm", "content-syndication"],
    cta: {
      title: "Ask us what the last program actually contributed.",
      body: "We will walk you through a real campaign — the spend, the accepted leads, the meetings held and the pipeline created.",
      button: "Book a strategy call",
    },
  },
];

export const PILLARS_COPY = {
  backLabel: "Why Lidespy",
  statsLabel: "By the numbers",
  onThisPage: "On this page",
  sectionsLabel: "How it works",
  servicesLabel: "Services built on this",
  servicesIntro: "The programs where this shows up first.",
  otherLabel: "The other pillars",
};

export function pillarByKey(key: string): Pillar | undefined {
  return PILLARS.find((p) => p.key === key);
}
