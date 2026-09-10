/**
 * Content for the Why Lidespy page (`Why Lidespy.dc.html`).
 *
 * This is the differentiation page the "Why Lidespy" nav item points at. It
 * deliberately does not repeat Home's vendor comparison table — instead it
 * argues from the operating model: what we commit to in writing, how the data
 * is built, and how engagements are priced.
 */

/**
 * A differentiator tile. Not every tile carries a metric, and the closing
 * full-width tile carries model chips instead — so both are optional.
 */
export type DifferenceItem = {
  k: string;
  title: string;
  body: string;
  metric?: string;
  metricLabel?: string;
  chips?: string[];
};

export const WHY = {
  meta: {
    title: "Why Lidespy · B2B demand generation judged on pipeline",
    description:
      "Most lead vendors are paid for volume. Lidespy is measured on pipeline — verified data, documented compliance, a named partner and reporting your RevOps team can audit.",
  },

  hero: {
    eyebrow: "Why Lidespy",
    titleLead: "Most lead vendors are paid for volume.",
    titleAccent: "We're measured on pipeline.",
    intro:
      "Anyone can send you a spreadsheet. Lidespy builds the audience, proves every record, runs the outreach and reports at source level — so the number your board sees and the number we're judged on are the same number.",
    ctaPrimary: "Book a strategy call",
    ctaSecondary: "See the proof",
    /** The animated "verification receipt" panel beside the headline. */
    receipt: {
      label: "Record verification",
      file: "ICP_target_list.csv",
      steps: [
        "ICP and firmographic match",
        "Human research pass",
        "Email syntax and MX check",
        "Live mailbox verification",
        "Suppression list applied",
        "Lawful basis documented",
      ],
      resultLabel: "Records released to campaign",
      resultValue: "94.2%",
      footnote: "Every record. Every campaign. Bounce SLA written into the contract.",
    },
    stats: [
      { v: "500", suffix: "+", l: "Campaigns executed" },
      { v: "98", suffix: "%", l: "Contactable rate on delivered data" },
      { v: "50", suffix: "+", l: "Countries covered" },
      { v: "6", suffix: " wks", l: "Typical time to first meetings" },
    ],
    /** The kinetic rail under the hero. */
    marquee: [
      "Verified data",
      "GDPR framework",
      "Named partner",
      "Source-level reporting",
      "ISO 9001:2015",
      "No-shows replaced",
      "Bounce SLA",
      "Full-funnel coverage",
    ],
  },

  gap: {
    eyebrow: "The gap",
    title: "Demand generation rarely fails at the campaign. It fails before it.",
    intro:
      "By the time a program underperforms, the cause is usually three decisions upstream — in the list, the consent trail, or who was actually accountable.",
    items: [
      {
        n: "01",
        problem: "The list was bought, not built.",
        detail:
          "Resold databases age the day they are downloaded. 15–30% bounce is normal, and the deliverability damage outlives the campaign.",
        answer: "We build to your ICP and re-verify before every send.",
      },
      {
        n: "02",
        problem: "Compliance was asserted, not documented.",
        detail:
          "\"GDPR compliant\" on a slide is not a lawful basis. When legal asks for the trail, the program stops.",
        answer: "Lawful basis documented per region, per record.",
      },
      {
        n: "03",
        problem: "Nobody owned the outcome.",
        detail:
          "Rotating account managers and SDRs you never meet mean context resets every quarter and nothing compounds.",
        answer: "One named partner accountable end to end.",
      },
      {
        n: "04",
        problem: "Reporting stopped at activity.",
        detail:
          "Opens, clicks and a monthly PDF. None of it reconciles against the CRM, so pipeline attribution is guesswork.",
        answer: "Weekly, source-level, RevOps-ready.",
      },
    ],
  },

  difference: {
    eyebrow: "The difference",
    title: "Six reasons revenue teams keep the contract.",
    items: [
      {
        k: "data",
        title: "Data we build, not data we resell",
        body: "Every record is researched, matched to your ICP and verified against a live mailbox before it enters a campaign. Nothing recycled, nothing scraped.",
        metric: "98%",
        metricLabel: "contactable on delivery",
      },
      {
        k: "compliance",
        title: "Compliance you can hand to legal",
        body: "GDPR, CAN-SPAM and CASL aligned, with lawful basis documented per region and suppression handled at the file level — not the send level.",
        metric: "3",
        metricLabel: "regulatory frameworks aligned",
      },
      {
        k: "ownership",
        title: "A named partner, not a queue",
        body: "One accountable partner across research, messaging and meetings. Your context lives with a person, not a ticketing system.",
        metric: "1",
        metricLabel: "named partner, end to end",
      },
      {
        k: "funnel",
        title: "Full funnel under one roof",
        body: "Audience intelligence, syndication, ABM, email, telemarketing and appointment setting run by the same team — so channels reinforce each other instead of competing for credit.",
        metric: "12",
        metricLabel: "services, one team",
      },
      {
        k: "reporting",
        title: "Reporting your RevOps team can audit",
        body: "Source-level performance every week, delivered in a shape that reconciles against your CRM. If a number moves, you can see which record moved it.",
        metric: "52",
        metricLabel: "reports a year, not 12",
      },
      {
        k: "flex",
        title: "Commercials that flex with proof",
        body: "Start project-based, move to retainer, or tie fees to delivered meetings. We scale the commitment as the program earns it — not before.",
        chips: ["Project", "Retainer", "Performance"],
      },
    ] as DifferenceItem[],
  },

  standard: {
    eyebrow: "Our operating standard",
    title: "The commitments that go in the contract.",
    intro:
      "Not aspirations. These are the terms we sign, and the ones we are measured against every week.",
    items: [
      { v: "≤2", suffix: "%", k: "Hard bounce rate", body: "Exceeded, and we re-verify and re-run the segment at our cost." },
      { v: "100", suffix: "%", k: "ICP match on delivered leads", body: "Every lead meets the filters agreed in the brief, or it is replaced." },
      { v: "48", suffix: "h", k: "Lead delivery window", body: "Qualified leads reach your CRM within two business days of qualification." },
      { v: "1:1", suffix: "", k: "No-show replacement", body: "A booked meeting that does not happen is rebooked or replaced. You pay for attendance." },
      { v: "7", suffix: " days", k: "Reporting cadence", body: "Source-level campaign reporting, weekly, in a format your RevOps team can reconcile." },
      { v: "30", suffix: " days", k: "Notice period on retainers", body: "No annual lock-in. The program earns the next month or it doesn't run." },
    ],
  },

  compliance: {
    eyebrow: "Data & compliance",
    title: "Every record earns its place in the file.",
    intro:
      "Our data pipeline is the reason the rest of this page is possible. It runs on every build, and it is the same pipeline whether you buy one campaign or twelve.",
    steps: [
      { n: "01", title: "ICP definition", body: "Firmographics, tech stack, buying signals and exclusions agreed in writing before any research begins." },
      { n: "02", title: "Human research", body: "Research executives confirm role, seniority and account fit — the part automation still gets wrong." },
      { n: "03", title: "Technical verification", body: "Syntax, domain, MX and live mailbox checks on every address, immediately before send." },
      { n: "04", title: "Consent & suppression", body: "Lawful basis recorded per region; your suppression file and ours applied to the final build." },
      { n: "05", title: "Release & re-verify", body: "The file is released to campaign and re-verified before each subsequent send. Decay never accumulates." },
    ],
    badges: [
      { k: "GDPR", d: "EU / UK framework, lawful basis documented per record" },
      { k: "CAN-SPAM", d: "US commercial email requirements built into every send" },
      { k: "CASL", d: "Canadian consent standards applied to CA segments" },
      { k: "ISO 9001:2015", d: "Externally audited quality management system" },
    ],
  },

  models: {
    eyebrow: "Engagement models",
    title: "Three ways to start. No lock-in on any of them.",
    items: [
      {
        name: "Project",
        best: "Best for a single campaign or market test",
        body: "A defined scope with a fixed fee — one syndication push, one ABM sprint, one database build. The lowest-risk way to see how we work.",
        points: ["Fixed scope and fee", "4–8 week typical duration", "Full data and reporting handover"],
      },
      {
        name: "Retainer",
        best: "Best for always-on pipeline",
        body: "A standing program across multiple channels with a named partner, a quarterly plan and weekly reporting. Most clients land here after a project.",
        points: ["Monthly program fee", "Multi-channel orchestration", "Quarterly planning and QBR"],
        featured: true,
      },
      {
        name: "Performance",
        best: "Best for teams that buy outcomes",
        body: "Fees tied to delivered qualified leads or booked meetings. Available once we have run a program together and both sides know the conversion maths.",
        points: ["Per-lead or per-meeting pricing", "No-shows replaced", "Volume commitments agreed upfront"],
      },
    ],
  },

  proof: {
    eyebrow: "Proof",
    title: "What the standard produces.",
    outcomes: [
      { v: "312", suffix: "%", l: "Average pipeline lift in the first two quarters", note: "Across enterprise SaaS retainer programs" },
      { v: "41", suffix: "%", l: "Reduction in cost per qualified meeting", note: "Versus the client's prior vendor" },
      { v: "6", suffix: " wks", l: "From kickoff to first booked meetings", note: "Typical for a retainer engagement" },
    ],
    quote: {
      text: "Testimonial placeholder — a revenue leader on why they consolidated three vendors into one Lidespy retainer.",
      name: "Name",
      role: "VP Demand Generation, Enterprise SaaS",
    },
    linkLabel: "Read the case studies",
  },

  faq: {
    eyebrow: "Straight answers",
    title: "The questions buyers actually ask us.",
    items: [
      {
        q: "How is this different from buying a list?",
        a: "A list is a file. We build the audience, verify it, run the outreach across channels, qualify the responses and report at source level. If you only want the file, we will sell you the file — but the contract still carries the bounce SLA, which no list broker will offer you.",
      },
      {
        q: "What happens if the leads don't meet our ICP?",
        a: "They are replaced at no cost. The ICP filters are agreed in writing during discovery, and every delivered lead is checked against them. Disputed leads are reviewed within two business days.",
      },
      {
        q: "Can you work in regulated industries?",
        a: "Yes. We run programs in fintech, healthcare and cybersecurity, where consent trails and messaging review matter more than volume. Lawful basis is documented per record, and we will work inside your legal team's review process rather than around it.",
      },
      {
        q: "How quickly do programs go live?",
        a: "Discovery and ICP definition take one to two weeks. Data build and campaign setup take a further two to three. Most retainer clients see their first booked meetings around week six.",
      },
      {
        q: "Do we own the data you build?",
        a: "Yes. Data built for your program is delivered to you — CSV or CRM-ready — and remains yours, including after the engagement ends.",
      },
      {
        q: "What if it doesn't work?",
        a: "Project engagements end at the end of the project; there is nothing to unwind. Retainers run on 30 days' notice. We would rather lose a renewal than defend a program that isn't producing pipeline.",
      },
    ],
  },

  cta: {
    eyebrow: "Next step",
    title: "Bring us the target list you're least confident in.",
    body: "We will verify a sample against our pipeline and show you exactly what would have bounced, what was mismatched to your ICP, and what a compliant build looks like instead. No cost, no commitment.",
    primary: "Book a strategy call",
    secondary: "Model your budget",
  },
};
