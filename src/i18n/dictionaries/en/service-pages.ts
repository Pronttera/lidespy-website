/**
 * Deep-dive pages for individual services, at `/services/<key>`.
 *
 * Only the services listed here get a page of their own; every other service
 * keeps resolving to its section on `/services` (see `serviceHref` in
 * `src/lib/routes.ts`). The shared name/overview/benefits/deliverables live in
 * `services.ts` — this file only carries what the detail page adds.
 *
 * Adding a service here is half the job: its key also has to go into
 * `SERVICE_PAGE_KEYS` in `src/lib/routes.ts`, which the nav uses to decide
 * where a link points. That list is kept separate so the mega-menu does not
 * pull this whole file into the client bundle.
 *
 * `deliverables` is keyed by the exact deliverable string from
 * `SERVICE_DETAILS`, because the mega-menu links to `#<slugified deliverable>`
 * and the anchor on this page is generated from the same string.
 */

export type DeliverableCopy = { body: string; points: string[] };

export type ServicePage = {
  key: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  stats: { value: string; label: string }[];
  /** Keyed by the deliverable name in `SERVICE_DETAILS`. */
  deliverables: Record<string, DeliverableCopy>;
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  /** Other service keys worth a look from here. */
  related: string[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    key: "demand-generation",
    eyebrow: "Service 01 · Demand Generation",
    titleLead: "Full-funnel demand generation that ends in",
    titleAccent: "sales-ready leads.",
    intro:
      "We identify in-market buyers, engage the whole decision-making committee across channels, and hand your team leads that meet criteria you signed off before the campaign started.",
    stats: [
      { value: "4–6 wks", label: "From brief to first delivered leads" },
      { value: "6", label: "Channels available in the mix" },
      { value: "Weekly", label: "Lead delivery and reporting" },
      { value: "100%", label: "Off-criteria leads replaced" },
    ],
    deliverables: {
      "Target account list building": {
        body: "The program starts with the list, because everything downstream inherits its quality. We build the target account list from your closed-won pattern, size it against your budget and coverage goals, and verify every record before it enters a sequence.",
        points: [
          "ICP rebuilt from closed-won and closed-lost evidence",
          "Account tiering so spend follows the accounts worth it",
          "Buying committee contacts named per account",
          "Suppression applied against your existing pipeline and customers",
        ],
      },
      "Campaign strategy and execution plan": {
        body: "Before anything sends, you get the plan: which accounts, which channels, which messages, in what order, on what dates, against which targets. One document your marketing and sales leads can both sign off.",
        points: [
          "Channel mix modelled on your deal size and cycle length",
          "Message and offer progression mapped per funnel stage",
          "Week-by-week calendar with volume and lead targets",
          "Qualification criteria agreed and written down up front",
        ],
      },
      "Multi-channel outreach sequences": {
        body: "Email, content, phone and LinkedIn touches run off one timeline, so each contact builds on the last. A prospect who downloads a report gets a call that references it — not a cold pitch from a channel that never saw the download.",
        points: [
          "7–14 coordinated touches per account before qualification",
          "Behaviour-triggered branches on open, download and reply",
          "Frequency capped per contact and per account",
          "Full call recordings and notes delivered with every meeting",
        ],
      },
      "Weekly lead delivery reports": {
        body: "Leads arrive weekly in your format of choice, each with the qualification notes behind it. Nothing is delivered in bulk at the end of a month, and nothing arrives without a reason attached.",
        points: [
          "CSV or direct CRM sync, campaign and source stamped",
          "Qualification notes and call context per record",
          "Rejected leads replaced at no cost, reasons fed back to targeting",
          "Running totals against the volume targets you agreed",
        ],
      },
      "Pipeline contribution tracking": {
        body: "We track delivered leads through acceptance, meeting held, opportunity created and closed-won — so the program is reported in the same terms your revenue team already uses.",
        points: [
          "Lead-to-opportunity and opportunity-to-won conversion tracked",
          "Cost per accepted lead, per meeting and per opportunity",
          "Monthly pipeline contribution reported next to spend",
          "Clear read on what to scale, what to fix and what to stop",
        ],
      },
    },
    process: [
      { title: "Brief and ICP build", body: "We review your closed-won data, agree the ICP and write the qualification criteria both teams will be measured against." },
      { title: "Audience and plan", body: "The target account list is built and verified; you approve the channel mix, messaging and week-by-week calendar." },
      { title: "Launch and sequence", body: "Coordinated outreach begins across the agreed channels, with qualification running continuously rather than at the end." },
      { title: "Deliver and optimise", body: "Leads land weekly with notes; budget shifts monthly toward whichever channels are producing accepted pipeline." },
    ],
    faq: [
      { q: "How fast do the first leads arrive?", a: "Typically four to six weeks from signed brief — two for ICP work and list build, then the first delivery in the second or third week of live campaigning." },
      { q: "What happens to leads that do not meet the criteria?", a: "They are replaced at no cost. The rejection reason goes back into the targeting model, so the same miss does not repeat." },
      { q: "Can you work inside our CRM?", a: "Yes. Leads sync directly with campaign and source stamped on each record, so attribution works in the system your team already reports from." },
      { q: "Do we have to run every channel?", a: "No. The mix is set by your deal length and committee size — some programs are email and content only, others need SDR outreach from week one." },
    ],
    related: ["content-syndication", "abm"],
  },
  {
    key: "content-syndication",
    eyebrow: "Service 02 · Content Syndication",
    titleLead: "Your best content, in front of buyers",
    titleAccent: "already researching.",
    intro:
      "Whitepapers, eBooks, webinars and reports distributed to verified B2B audiences in active research — with every lead filtered against your ICP before it reaches you.",
    stats: [
      { value: "ICP", label: "Every lead filtered before delivery" },
      { value: "CPL", label: "Or flat fee — your choice" },
      { value: "Guaranteed", label: "Lead volume commitments" },
      { value: "GDPR", label: "CAN-SPAM and CASL aligned" },
    ],
    deliverables: {
      "Content campaign setup and management": {
        body: "We take your existing asset, position it for the audience it needs to reach, and run the campaign end to end — including the promotion copy, the landing experience and the pacing across the flight.",
        points: [
          "Asset review and positioning for the target segment",
          "Promotion copy written and tested per segment",
          "Delivery paced across the flight rather than dumped",
          "Ongoing management, no self-serve dashboard to babysit",
        ],
      },
      "Audience segmentation and filtering": {
        body: "The filters are the product. Job title, seniority, company size, industry, region, tech stack — set before launch and enforced on every record, not applied as a best-effort afterthought.",
        points: [
          "Firmographic and technographic filters set per campaign",
          "Named-account targeting where you have a list",
          "Competitor and existing-customer suppression applied",
          "Segment-level reporting so you can see which filter performs",
        ],
      },
      "Lead capture and qualification": {
        body: "Every lead that downloads is verified and qualified before it reaches you. Where you need more than a form fill, we add custom qualification questions or a follow-up call to confirm fit and timing.",
        points: [
          "BANT or your own custom qualification framework",
          "Custom profiling questions at the point of download",
          "Email and phone validation before handoff",
          "Off-criteria leads replaced, not invoiced",
        ],
      },
      "CPL or flat-fee pricing options": {
        body: "Pay per qualified lead when you want the risk on us and the volume predictable, or take a flat fee when you want the whole flight and the reporting for a fixed number. Both come with the volume commitment in writing.",
        points: [
          "Cost-per-lead pricing with an agreed volume commitment",
          "Flat-fee flights for defined campaign windows",
          "Pricing set by filter depth, region and seniority",
          "No charge for leads that fail the agreed criteria",
        ],
      },
      "Lead delivery in your preferred format (CSV, CRM sync)": {
        body: "Leads land the way your team already works — a weekly CSV, a direct CRM sync, or straight into a nurture sequence — with source, asset and consent trail attached to every record.",
        points: [
          "CSV, CRM sync or marketing-automation handoff",
          "Asset, campaign and consent source stamped per record",
          "Weekly delivery cadence with running totals",
          "Full audit trail available on request",
        ],
      },
    },
    process: [
      { title: "Asset and audience", body: "We review the content you have, pick the strongest asset for the segment and set the filters every lead will be held to." },
      { title: "Campaign build", body: "Promotion copy, qualification questions and delivery format are agreed, and volume targets are committed in writing." },
      { title: "Flight", body: "The asset is distributed to in-market audiences and paced across the flight, with segment performance visible throughout." },
      { title: "Delivery", body: "Qualified leads arrive weekly with their consent trail; anything off-criteria is replaced before it is invoiced." },
    ],
    faq: [
      { q: "What if we do not have a content asset?", a: "We can run against an existing webinar recording or report, or produce the asset with you first — most campaigns launch faster with something you already own." },
      { q: "How is a lead qualified beyond the download?", a: "Custom profiling questions at the point of download, plus a verification step. Where you need BANT confirmed, we add a follow-up call before handoff." },
      { q: "Is the audience really in-market?", a: "Distribution targets audiences actively researching your category. Intent signals sit behind the targeting, and segment-level reporting shows you which ones converted." },
      { q: "How do you handle GDPR?", a: "Lawful basis is documented per region before launch and the consent source travels with every record we deliver." },
    ],
    related: ["demand-generation", "email-marketing"],
  },
  {
    key: "abm",
    eyebrow: "Service 03 · Account-Based Marketing",
    titleLead: "Your most valuable accounts, worked with",
    titleAccent: "actual precision.",
    intro:
      "Buying committee maps, decision-maker identification and coordinated outreach across email, advertising and human channels — ABM that reaches the whole committee instead of one contact who never replies.",
    stats: [
      { value: "9", label: "Committee roles mapped per account" },
      { value: "3–4", label: "Contacts engaged per account, minimum" },
      { value: "Tiered", label: "1:1, 1:few and 1:many plays" },
      { value: "Monthly", label: "Account engagement reporting" },
    ],
    deliverables: {
      "Target account list (TAL) build": {
        body: "The account list is built from fit and intent together — the accounts that look like your best customers and are showing signs of researching now — then tiered so the 1:1 effort goes where it can pay for itself.",
        points: [
          "Fit scoring from firmographic, technographic and closed-won data",
          "Intent overlay to prioritise accounts researching now",
          "Tier 1 / 2 / 3 split for 1:1, 1:few and 1:many plays",
          "Existing pipeline and customer accounts suppressed or flagged",
        ],
      },
      "Decision-maker identification and contact data": {
        body: "For every account on the list we name the people, not the personas — verified work emails and direct dials for the economic buyer, the technical evaluator, the end user and procurement.",
        points: [
          "Named contacts with verified email and direct dial",
          "Role, seniority and reporting-line context per contact",
          "Enrichment: tenure, tech stack, region, LinkedIn",
          "Records revalidated before each campaign wave",
        ],
      },
      "ABM campaign orchestration plan": {
        body: "One plan covering every channel and every account tier: which play runs where, what each committee role sees, in what order, and where sales takes over from marketing.",
        points: [
          "Play design per tier — 1:1, 1:few and 1:many",
          "Message variants written per committee role",
          "Marketing-to-sales handoff points defined per play",
          "Campaign calendar with frequency caps per account",
        ],
      },
      "Account engagement reporting": {
        body: "ABM is measured on accounts, not on clicks. Reporting rolls every touch up to account level so you can see which accounts are warming, which are flat, and which are ready for a sales conversation.",
        points: [
          "Account-level engagement score, refreshed weekly",
          "Channel contribution per account, not just per campaign",
          "Warming and stalled account lists for sales prioritisation",
          "Pipeline created and influenced, reported per tier",
        ],
      },
      "Buying committee coverage tracking": {
        body: "The number that predicts whether an ABM deal closes is how many of the committee you have actually engaged. We track coverage per account and flag the gaps while there is still time to close them.",
        points: [
          "Coverage tracked by role and seniority per account",
          "Gap alerts when a key role is unengaged",
          "Multi-threading targets set and reported against",
          "Coverage trend shown alongside opportunity progression",
        ],
      },
    },
    process: [
      { title: "Account selection", body: "Fit and intent scoring produce the target account list, tiered by how much investment each account can justify." },
      { title: "Committee mapping", body: "We name and verify the decision-makers at every account, and identify where your current coverage has gaps." },
      { title: "Play orchestration", body: "Tiered plays launch across email, advertising and human channels, with message variants per committee role." },
      { title: "Coverage and handoff", body: "Engagement rolls up per account; warming accounts and coverage gaps go to sales weekly with the context attached." },
    ],
    faq: [
      { q: "How many accounts should we target?", a: "It depends on tier. A 1:1 program runs well at 20–50 accounts; 1:few works at a few hundred; 1:many can run into the thousands. Most programs use all three." },
      { q: "Can you fix an ABM program we already run?", a: "Yes — that is a common starting point. We audit the account list, the committee coverage and the intent data behind it, then rebuild whichever layer is failing." },
      { q: "Does this need our sales team involved?", a: "Yes, at the handoff. The plan defines exactly which signals send an account to sales and what context travels with it, so the involvement is defined rather than ad hoc." },
      { q: "How is ABM reported differently?", a: "Everything rolls up to the account. Engagement score, committee coverage and pipeline per tier replace per-email click metrics." },
    ],
    related: ["demand-generation", "audience-intelligence"],
  },
];

export const SERVICE_PAGE_COPY = {
  backLabel: "All services",
  statsLabel: "At a glance",
  benefitsLabel: "Key benefits",
  deliverablesLabel: "What you get",
  deliverablesIntro: "Every deliverable below is part of the standard engagement.",
  processLabel: "How the engagement runs",
  faqLabel: "Common questions",
  relatedLabel: "Pairs well with",
  onThisPage: "On this page",
};

export function servicePageByKey(key: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.key === key);
}
