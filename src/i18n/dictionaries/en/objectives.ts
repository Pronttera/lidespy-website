/**
 * The six "What We Enable" objectives, each with a page at
 * `/solutions/<key>`. The mega-menu and the Solutions browser both link here;
 * the short blurbs those surfaces show stay in `nav.ts` and `solutions.ts`.
 */

import type { DetailCopy } from "./detail";

export type Objective = DetailCopy & {
  key: string;
  /** The label the nav and the solutions browser use. */
  name: string;
  /** One line for the "other objectives" cards. */
  summary: string;
};

export const OBJECTIVES: Objective[] = [
  {
    key: "generate-more-leads",
    name: "Generate More Leads",
    summary: "Increase qualified lead volume from your ICP without lowering the bar for what counts.",
    eyebrow: "Objective 01 · Generate more leads",
    titleLead: "More qualified leads from",
    titleAccent: "the accounts you want.",
    intro:
      "Volume is easy to buy and hard to use. We increase lead count against a definition of qualified that you write, so the extra volume lands in pipeline rather than in a list your reps quietly stop working.",
    stats: [
      { value: "4–6 wks", label: "From brief to first delivered leads" },
      { value: "100%", label: "Off-criteria leads replaced" },
      { value: "3", label: "Channels in a typical volume program" },
      { value: "Weekly", label: "Delivery and reporting cadence" },
    ],
    sections: [
      {
        id: "define-qualified",
        title: "Agree what a lead is before buying more of them",
        body: "Most lead-volume problems are definition problems. Before anything launches we write down the title, company size, authority and timing that make a lead worth your rep's hour — and both teams sign it, so quality stops being an argument held after the invoice.",
        points: [
          "Written qualification criteria signed by marketing and sales",
          "BANT or your own framework, whichever sales already uses",
          "Rejection reasons captured and fed back into targeting",
          "Anything failing the criteria replaced at no cost",
        ],
      },
      {
        id: "reachable-audience",
        title: "Size the audience you can actually reach",
        body: "There is a hard ceiling on how many qualified leads a segment can produce, and knowing it early prevents a campaign built to hit a number the market cannot supply. We size the reachable audience per segment before committing to a volume target.",
        points: [
          "Addressable and reachable volume sized per segment",
          "Targets set against what the segment can supply",
          "Adjacent segments identified where the primary is thin",
          "Suppression applied so you do not pay for existing contacts",
        ],
      },
      {
        id: "volume-channels",
        title: "Run the channels that produce volume at quality",
        body: "Content syndication and email carry volume programs; verified data underpins both. We run them together against one audience so the same buyer is not counted twice, and each channel reports its own cost per accepted lead.",
        points: [
          "Content syndication for buyers in active research",
          "Email into verified decision-makers at target accounts",
          "Custom data build where the audience does not exist yet",
          "Cost per accepted lead reported per channel, not blended",
        ],
      },
      {
        id: "protect-quality",
        title: "Hold quality while the number goes up",
        body: "Scaling volume is where quality usually slips. We watch acceptance rate as the leading indicator — if it drops as volume rises, the targeting is loosening, and we tighten it rather than keep hitting the count.",
        points: [
          "Acceptance rate tracked weekly as the quality signal",
          "Filters tightened before volume is allowed to grow further",
          "Per-segment performance so weak segments are cut, not averaged",
          "Full audit trail on every delivered record",
        ],
      },
    ],
    services: ["content-syndication", "email-marketing", "b2b-data"],
    cta: {
      title: "More leads, against a definition you wrote.",
      body: "Tell us what a qualified lead looks like in your business and we will show you how much of that audience is reachable.",
      button: "Get more leads",
    },
  },

  {
    key: "build-pipeline",
    name: "Build Pipeline",
    summary: "Full-funnel programs that carry a prospect from first content interaction to sales-qualified opportunity.",
    eyebrow: "Objective 02 · Build pipeline",
    titleLead: "From first touch to",
    titleAccent: "qualified pipeline.",
    intro:
      "Pipeline is not a bigger pile of leads. It is a sequence that carries a buyer from first interaction to a conversation their organisation is ready to have — and it needs the whole committee, not one contact.",
    stats: [
      { value: "7–14", label: "Touches per account before qualification" },
      { value: "3–4", label: "Contacts engaged per account, minimum" },
      { value: "6", label: "Channels available in the mix" },
      { value: "Monthly", label: "Pipeline contribution reporting" },
    ],
    sections: [
      {
        id: "map-the-journey",
        title: "Map the funnel your buyers actually walk",
        body: "Before choosing channels we map how your won deals really progressed — what the first touch was, how long each stage took, who joined the conversation and when. The program is built to that shape rather than to a generic funnel diagram.",
        points: [
          "Stage-by-stage analysis of recent closed-won deals",
          "Time-in-stage measured so the plan matches the real cycle",
          "Committee entry points identified per stage",
          "Drop-off points named as the places to intervene",
        ],
      },
      {
        id: "full-funnel",
        title: "Run every stage as one program",
        body: "Awareness content, mid-funnel qualification and late-stage outreach run off one calendar. A prospect who downloads a report gets a follow-up that references it, and the account is worked as a whole rather than as three unrelated campaigns.",
        points: [
          "Awareness, consideration and decision content sequenced",
          "Behaviour-triggered progression on open, download and reply",
          "Committee coverage widened as the account warms",
          "One team accountable across the whole funnel",
        ],
      },
      {
        id: "handoff",
        title: "Hand off at the point sales can act",
        body: "The handoff is where most pipeline leaks. We define the exact signal that sends an account to sales, and the context that travels with it, so a rep opens a conversation already knowing what the account read and asked.",
        points: [
          "Handoff trigger defined and agreed with sales up front",
          "Engagement history and content consumed passed with the record",
          "Same-day routing so momentum is not lost to a queue",
          "Feedback loop from sales into the qualification model",
        ],
      },
      {
        id: "measure-pipeline",
        title: "Report in pipeline, not in activity",
        body: "Every delivered lead is tracked through acceptance, meeting held, opportunity created and closed-won, so the program is reported in the terms your revenue team already uses and the spend sits next to what it produced.",
        points: [
          "Lead-to-opportunity and opportunity-to-won conversion tracked",
          "Cost per accepted lead, per meeting and per opportunity",
          "Sourced and influenced pipeline reported separately",
          "Clear read on what to scale, fix or stop each month",
        ],
      },
    ],
    services: ["demand-generation", "abm", "audience-intelligence"],
    cta: {
      title: "Build a pipeline engine, not a lead pile.",
      body: "We will map your current funnel against your won deals and show you where the pipeline is leaking.",
      button: "Build your pipeline",
    },
  },

  {
    key: "accelerate-sales",
    name: "Accelerate Sales",
    summary: "Qualified meetings booked straight into your reps' calendars, so selling time goes to selling.",
    eyebrow: "Objective 03 · Accelerate sales",
    titleLead: "Book more meetings.",
    titleAccent: "Close more revenue.",
    intro:
      "Your reps are the most expensive prospecting resource you have. We take the identification, qualification and booking off them and hand back confirmed meetings with the recording and the notes attached.",
    stats: [
      { value: "100%", label: "Meetings replaced if they fail criteria" },
      { value: "3", label: "Channels in every outreach sequence" },
      { value: "2–3 wks", label: "Before the first meetings land" },
      { value: "Recorded", label: "Every qualification call" },
    ],
    sections: [
      {
        id: "free-the-reps",
        title: "Take prospecting off the people who should be closing",
        body: "A rep splitting their week between prospecting and closing does neither well. We run the top of the process — list, sequence, qualification call — so their calendar fills with conversations that are already qualified.",
        points: [
          "Outbound identification and first contact handled for you",
          "Qualification completed before a meeting is booked",
          "Meetings placed against live rep availability",
          "Briefing note delivered before every call",
        ],
      },
      {
        id: "qualify-properly",
        title: "Qualify against your criteria, on the record",
        body: "Every qualification conversation is recorded and the answers captured against each criterion, so your managers can audit quality directly rather than trusting a summary — and a meeting that should not have been booked is visible immediately.",
        points: [
          "Discovery flow built around your BANT or custom criteria",
          "Full call recording and written notes per appointment",
          "Answers captured criterion by criterion",
          "Objections that recur written into the script weekly",
        ],
      },
      {
        id: "shorten-the-cycle",
        title: "Shorten the cycle by multi-threading early",
        body: "Deals stall when they depend on one contact. We identify and engage several members of the committee before the first meeting, so the conversation starts with more of the organisation already aware of it.",
        points: [
          "Committee mapped before outreach begins",
          "Multiple contacts engaged per target account",
          "Referral paths opened where the first contact is not the buyer",
          "Coverage gaps flagged to the rep before the meeting",
        ],
      },
      {
        id: "held-not-booked",
        title: "Report meetings held, not meetings booked",
        body: "Booked is a vanity number; held is the one that matters. Confirmations and reminders are handled, reschedules are chased by us, and held-versus-booked is reported separately so the figure you see is not inflated.",
        points: [
          "Confirmation and reminder sequence on every booking",
          "Reschedules and no-shows chased and rebooked by us",
          "Held, rescheduled and no-show tracked separately",
          "Weekly report with the evidence behind each meeting",
        ],
      },
    ],
    services: ["appointment-generation", "email-marketing", "b2b-data"],
    cta: {
      title: "Give your reps a calendar worth opening.",
      body: "Tell us what a meeting has to clear to be worth your rep's hour, and we will book against exactly that.",
      button: "Accelerate your sales",
    },
  },

  {
    key: "launch-new-markets",
    name: "Launch New Markets",
    summary: "Market entry built on audience evidence — ICP, messaging and execution for a region, product or persona you have no history in.",
    eyebrow: "Objective 04 · Launch new markets",
    titleLead: "Enter a new market",
    titleAccent: "with data behind you.",
    intro:
      "Entering a market you have no history in means every assumption is untested. We replace the assumptions with audience evidence first, then execute — so the launch spends against something you have actually verified.",
    stats: [
      { value: "4–6 wks", label: "From kickoff to strategy handover" },
      { value: "90", label: "Day launch roadmap, week by week" },
      { value: "50+", label: "Countries we can build audience in" },
      { value: "3", label: "Personas profiled as standard" },
    ],
    sections: [
      {
        id: "test-the-assumption",
        title: "Test the market before you commit the budget",
        body: "The cheapest failure is the one you find in research. We size the reachable audience, map who the buyers are and check whether the demand you are counting on actually shows up in intent data — before the launch budget is spent.",
        points: [
          "Reachable audience sized before targets are set",
          "Buying committee mapped for the new segment",
          "Category intent checked for real research activity",
          "Honest read where the opportunity is smaller than hoped",
        ],
      },
      {
        id: "position-for-strangers",
        title: "Position for buyers who have never heard of you",
        body: "Messaging that works on your installed base rarely works on a market with no context for you. We rebuild the value proposition for a stranger — including the credibility problem of being unknown in that region or category.",
        points: [
          "Value proposition rewritten for an audience with no context",
          "Competitive positioning against the incumbents there",
          "Proof points selected for relevance in the new market",
          "Local objections and regulatory concerns addressed directly",
        ],
      },
      {
        id: "regional-compliance",
        title: "Launch compliantly in the region you are entering",
        body: "A new region means a new legal regime. Lawful basis is documented per region before the first send, and outreach practice is adjusted to local norms — which is a commercial matter as much as a legal one.",
        points: [
          "Lawful basis documented per region before launch",
          "GDPR, CAN-SPAM and CASL aligned by territory",
          "Language and local-norm review on outbound copy",
          "Suppression and consent trails maintained per market",
        ],
      },
      {
        id: "prove-then-scale",
        title: "Prove the motion small, then scale it",
        body: "The first ninety days are for learning which channel and message work in this market, at a spend level where being wrong is survivable. Scale follows evidence rather than the launch date.",
        points: [
          "Week-by-week roadmap with owners and decision gates",
          "Small paid pilot before committing the full budget",
          "Early indicators defined to watch before lagging metrics move",
          "Scale-up criteria agreed in advance, not argued later",
        ],
      },
    ],
    services: ["gtm-strategy", "audience-intelligence", "demand-generation"],
    cta: {
      title: "Launch on evidence, not on optimism.",
      body: "Tell us the market you are considering and we will tell you how big the reachable audience actually is.",
      button: "Plan your market launch",
    },
  },

  {
    key: "improve-abm-performance",
    name: "Improve ABM Performance",
    summary: "Audit, rebuild and run ABM on real intent and committee coverage instead of a list someone picked once.",
    eyebrow: "Objective 05 · Improve ABM performance",
    titleLead: "Stop running ABM",
    titleAccent: "on assumptions.",
    intro:
      "Most underperforming ABM programs fail in one of three places: the account list, the committee coverage, or the orchestration. We find which, rebuild that layer, and run the program on evidence.",
    stats: [
      { value: "9", label: "Committee roles mapped per account" },
      { value: "3", label: "Layers audited — list, coverage, orchestration" },
      { value: "Tiered", label: "1:1, 1:few and 1:many plays" },
      { value: "Monthly", label: "Account engagement reporting" },
    ],
    sections: [
      {
        id: "audit-first",
        title: "Find which layer is actually failing",
        body: "ABM programs rarely fail everywhere at once. We audit the three layers separately — is the account list wrong, is the committee under-covered, or is the orchestration incoherent — because rebuilding the wrong one costs a quarter.",
        points: [
          "Account list re-scored against fit and current intent",
          "Committee coverage measured per account, not assumed",
          "Channel orchestration reviewed for message coherence",
          "A clear verdict on which layer to rebuild first",
        ],
      },
      {
        id: "rebuild-the-list",
        title: "Rebuild the account list on fit and intent",
        body: "Most target account lists are a filter someone set once, or a wish list from sales. We rebuild from the pattern in your won deals, overlay current research activity, and tier the result so 1:1 effort goes where it can pay for itself.",
        points: [
          "Fit scoring derived from closed-won and closed-lost data",
          "Intent overlay to prioritise accounts researching now",
          "Tier 1 / 2 / 3 split matched to what each tier can justify",
          "Existing pipeline and customers suppressed or flagged",
        ],
      },
      {
        id: "close-coverage-gaps",
        title: "Close the buying committee gaps",
        body: "Committee coverage is the number that predicts whether an ABM deal closes. We track it per account by role and seniority, and flag the gaps while there is still time to do something about them.",
        points: [
          "Coverage tracked by role and seniority per account",
          "Alerts when a decisive role is entirely unengaged",
          "Multi-threading targets set and reported against",
          "Coverage trend shown next to opportunity progression",
        ],
      },
      {
        id: "orchestrate",
        title: "Make the channels tell one story",
        body: "When ads, email and SDR outreach run independently, the account receives three unrelated pitches in a fortnight. One orchestration plan defines which play runs where, what each role sees, and where sales takes over.",
        points: [
          "One plan across every channel and every account tier",
          "Message variants written per committee role",
          "Frequency capped per account, not just per contact",
          "Marketing-to-sales handoff points defined per play",
        ],
      },
    ],
    services: ["abm", "audience-intelligence", "performance-marketing"],
    cta: {
      title: "Find out which layer of your ABM is broken.",
      body: "We will audit the account list, the committee coverage and the orchestration, and tell you which one to fix first.",
      button: "Improve your ABM",
    },
  },

  {
    key: "increase-webinar-attendance",
    name: "Increase Webinar Attendance",
    summary: "Registration driven from your ICP, with the volume committed in writing and attendance data delivered after.",
    eyebrow: "Objective 06 · Increase webinar attendance",
    titleLead: "Fill every seat with",
    titleAccent: "the right buyers.",
    intro:
      "A webinar with the wrong audience is worse than a small one — it costs the same to run and produces nothing to follow up. We drive registration from your ICP and hand back the engagement data that tells you who to call.",
    stats: [
      { value: "Guaranteed", label: "Registration volume targets" },
      { value: "4–6 wks", label: "Recommended promotion runway" },
      { value: "3", label: "Reminder touches before the event" },
      { value: "100%", label: "Registrants matched to your ICP" },
    ],
    sections: [
      {
        id: "right-audience",
        title: "Fill the room from your ICP, not from a list",
        body: "Registration volume from a general opt-in pool looks fine on a dashboard and produces nothing afterwards. Every registrant we drive is built to your ICP filters before promotion starts, so the follow-up list is worth working.",
        points: [
          "Audience built to your ICP filters before promotion begins",
          "Named-account targeting where you supply the list",
          "Existing customers and competitors suppressed",
          "Segment-level reporting on which audiences registered",
        ],
      },
      {
        id: "registration-page",
        title: "Stop losing registrations on the form",
        body: "Most webinar pages lose a meaningful share of interested buyers to a form that asks too much too early. We audit the page registrations actually land on and tell you which fields are costing you sign-ups.",
        points: [
          "Every form field justified or cut",
          "Above-the-fold value proposition and speaker credibility",
          "Mobile and load-speed review on the real page",
          "Confirmation and calendar-invite flow checked end to end",
        ],
      },
      {
        id: "show-up-rate",
        title: "Convert registrations into attendance",
        body: "The gap between registered and attended is where most webinar value is lost. A paced reminder sequence, a calendar invite that actually lands, and a same-day nudge move that number more than extra promotion does.",
        points: [
          "Reminder sequence across the week before and the day of",
          "Calendar invite delivered at the point of registration",
          "Same-day nudge to registrants who have not joined",
          "On-demand link sent to no-shows while intent is warm",
        ],
      },
      {
        id: "after-the-event",
        title: "Use what the attendance data tells you",
        body: "Attendance is where the useful signal starts. Time in session, questions asked and poll answers rank your follow-up far better than the registration list — and no-shows are a separate, still-warm audience.",
        points: [
          "Time-in-session recorded per attendee",
          "Questions and poll responses attached per contact",
          "Engagement-ranked follow-up list handed to sales",
          "No-shows segmented for on-demand re-engagement",
        ],
      },
    ],
    services: ["webinar-promotion", "content-syndication", "email-marketing"],
    cta: {
      title: "Fill the room with buyers, not registrations.",
      body: "Tell us the event and the audience, and we will commit to a registration number in writing.",
      button: "Promote your webinar",
    },
  },
];

export const OBJECTIVES_COPY = {
  backLabel: "All solutions",
  statsLabel: "By the numbers",
  sectionsLabel: "How we approach it",
  onThisPage: "On this page",
  servicesLabel: "Services we deploy",
  servicesIntro: "The programs that do the work behind this objective.",
  otherLabel: "Other objectives",
  indexLabel: "Objective",
};

export function objectiveByKey(key: string): Objective | undefined {
  return OBJECTIVES.find((o) => o.key === key);
}
