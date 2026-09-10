/**
 * Deep-dive pages for individual services, at `/services/<key>`.
 *
 * The shared name/overview/benefits/deliverables live in `services.ts` — this
 * file only carries what the detail page adds on top. It is a record over
 * `ServicePageKey`, so every service listed in `src/lib/service-keys.ts` has
 * to appear here or the build fails.
 *
 * `deliverables` is keyed by the exact deliverable string from
 * `SERVICE_DETAILS`, because the mega-menu links to `#<slugified deliverable>`
 * and the anchor on this page is generated from the same string.
 */

import { isServicePageKey, type ServicePageKey } from "../../../lib/service-keys";

export type DeliverableCopy = { body: string; points: string[] };

export type ServicePage = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  stats: { value: string; label: string }[];
  /** Keyed by the deliverable name in `SERVICE_DETAILS`. */
  deliverables: Record<string, DeliverableCopy>;
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  /** Other services worth a look from here. */
  related: ServicePageKey[];
};

export const SERVICE_PAGES: Record<ServicePageKey, ServicePage> = {
  "demand-generation": {
    eyebrow: "Service 01 · Demand Generation",
    titleLead: "Demand generation that ends in",
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

  "content-syndication": {
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

  abm: {
    eyebrow: "Service 03 · Account-Based Marketing",
    titleLead: "Your best accounts, worked with",
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

  "email-marketing": {
    eyebrow: "Service 04 · Email Marketing",
    titleLead: "Email that lands in the inbox,",
    titleAccent: "and gets a reply.",
    intro:
      "Precision B2B email to verified decision-makers at your target accounts — built for deliverability, compliance and reply rate, not for a screenshot of an open-rate chart.",
    stats: [
      { value: "95%+", label: "Verified deliverability on delivered records" },
      { value: "0", label: "Purchased or scraped lists used" },
      { value: "A/B", label: "Subject and offer testing on every send" },
      { value: "Weekly", label: "Deliverability and performance reporting" },
    ],
    deliverables: {
      "List build and segmentation": {
        body: "Deliverability starts with the list, not the sending tool. We build from verified, permission-based records matched to your ICP, then segment by persona and funnel stage so each send has one audience and one job.",
        points: [
          "Verified work emails, validated at the point of send",
          "Segmentation by persona, seniority, industry and stage",
          "Suppression against customers, open opportunities and opt-outs",
          "List hygiene re-run before every wave, not once at setup",
        ],
      },
      "Email copy and template creation": {
        body: "Copy written per persona and per stage, in the register a busy buyer actually reads — short, specific, and about their problem. Templates are built plain-text-first so they render the same everywhere and do not trip spam filters.",
        points: [
          "Message variants per persona and funnel stage",
          "Plain-text-first templates that render across clients",
          "Subject and preview lines built as testable pairs",
          "Compliance footer and opt-out wired in by region",
        ],
      },
      "Campaign deployment and monitoring": {
        body: "Authentication, domain warm-up and send pacing are set before the first campaign goes out, and monitored live once it does. If placement drifts, we throttle and fix it mid-flight rather than after the report.",
        points: [
          "SPF, DKIM and DMARC verified before the first send",
          "Domain and IP warm-up with paced volume ramp",
          "Live bounce, complaint and placement monitoring",
          "Sends throttled or paused the moment placement drops",
        ],
      },
      "Deliverability and performance reporting": {
        body: "You get the numbers that predict revenue and the ones that predict deliverability, side by side — replies and meetings alongside bounce, complaint and placement rates, so a rising open rate never hides a dying domain.",
        points: [
          "Replies, positive replies and meetings booked",
          "Bounce, complaint and unsubscribe rates per segment",
          "Inbox placement tracked separately from open rate",
          "A/B results reported with the variant that won and why",
        ],
      },
      "Lead handoff and follow-up sequencing": {
        body: "A reply is only worth having if someone acts on it. Interested repliers route to your team the same day with the thread and context attached; everyone else moves into a follow-up sequence rather than going cold.",
        points: [
          "Same-day routing of positive replies with full thread context",
          "CRM sync with campaign, segment and source stamped",
          "Nurture sequencing for not-now and no-reply contacts",
          "Re-engagement waves scheduled off the original send data",
        ],
      },
    },
    process: [
      { title: "Audience and infrastructure", body: "We build and verify the list while setting up authentication, warm-up and sending domains — the two halves that decide whether anything lands." },
      { title: "Copy and templates", body: "Message variants are written per persona and stage, built into plain-text-first templates and set up as testable pairs." },
      { title: "Send and monitor", body: "Volume ramps on a paced schedule with bounce, complaint and placement watched live, and throttled the moment anything drifts." },
      { title: "Report and hand off", body: "Positive replies route to sales the same day; performance and deliverability are reported together every week." },
    ],
    faq: [
      { q: "Do you send from our domain or yours?", a: "Either. Sending from a dedicated subdomain protects your primary domain's reputation during ramp-up, which is what we usually recommend for a first program." },
      { q: "Why do you report placement instead of open rate?", a: "Open tracking has been unreliable since mail privacy protection started pre-fetching images. Placement, replies and meetings are the numbers that still mean something." },
      { q: "How do you stay compliant across regions?", a: "Lawful basis is documented per region before launch, opt-outs propagate across every channel we run, and the consent source travels with each record." },
      { q: "How many emails per contact?", a: "Frequency is capped per contact and per account across the whole program, so a contact in three campaigns does not receive three times the volume." },
    ],
    related: ["b2b-data", "demand-generation"],
  },

  "audience-intelligence": {
    eyebrow: "Service 05 · Audience Intelligence",
    titleLead: "Know who to reach",
    titleAccent: "before you spend a dollar.",
    intro:
      "Verified audience profiles built from intelligence platforms, intent data and human research — so your campaigns start with a targeting advantage instead of an assumption about who your buyers are.",
    stats: [
      { value: "2–3 wks", label: "From brief to delivered report" },
      { value: "9", label: "Committee roles profiled per account" },
      { value: "50+", label: "Countries covered" },
      { value: "100%", label: "Records sourced and dated" },
    ],
    deliverables: {
      "Audience intelligence report": {
        body: "One document that answers who to reach, why them, and what to say. It sets out the profile with the evidence behind it — the patterns in your own won deals, the market you can actually address, and where the reachable audience sits.",
        points: [
          "ICP defined from closed-won and closed-lost patterns",
          "Addressable market sized by segment and region",
          "Persona profiles with priorities, triggers and objections",
          "Competitor audience overlap and white space identified",
        ],
      },
      "Verified contact database by segment": {
        body: "The profile is only useful if you can reach the people in it. Each segment comes with a verified, enriched contact set — validated at delivery rather than at the point the record was first collected.",
        points: [
          "Named contacts per segment with verified email and direct dial",
          "Firmographic and technographic enrichment on every record",
          "Segment sizes reported so you can plan volume against budget",
          "Suppression applied against your pipeline and customer base",
        ],
      },
      "Intent data insights summary": {
        body: "Which accounts in your addressable market are researching right now, what they are researching, and how that has moved over the last quarter — with the surges attached to named accounts rather than shown as an aggregate trend.",
        points: [
          "Category, competitor and solution-level intent signals",
          "Surging accounts named, with the topic that triggered them",
          "Trend view across the quarter, not a single snapshot",
          "Signal decay handled so stale accounts drop out",
        ],
      },
      "ICP scoring model": {
        body: "A scoring model your team can apply to any account, so the definition survives past this report. Weighted on the attributes that actually predicted a won deal in your data, not on the ones that feel important.",
        points: [
          "Attribute weights derived from your own win data",
          "Fit, intent and engagement scored separately",
          "Tier thresholds set for 1:1, 1:few and 1:many treatment",
          "Delivered as a model your ops team can run in-house",
        ],
      },
      "Recommended channel strategy": {
        body: "Where this audience is actually reachable, and what it will cost. We recommend the channel mix from the segment's buying cycle and committee size, with an indicative budget split rather than a menu of everything we sell.",
        points: [
          "Channel mix recommended per segment and buying cycle",
          "Indicative budget split with expected volume ranges",
          "Sequencing advice — which channel opens, which converts",
          "Clear note on which channels are not worth it here",
        ],
      },
    },
    process: [
      { title: "Data intake", body: "We start in your CRM — won deals, lost deals, cycle lengths and deal sizes — because the pattern you need is usually already in your own history." },
      { title: "Research and enrichment", body: "Intelligence platforms, intent feeds and human research fill in the market beyond your existing customers, with every record sourced and dated." },
      { title: "Modelling", body: "Fit attributes are weighted against win data to produce the scoring model, and segments are sized against reachable contact volume." },
      { title: "Handover", body: "You get the report, the segmented database, the scoring model and a channel recommendation — plus a working session to walk your team through it." },
    ],
    faq: [
      { q: "What do you need from us to start?", a: "Read access to closed-won and closed-lost data for the last 12–24 months, and time with whoever knows why deals were won. Everything else we source." },
      { q: "Is this useful if we already know our ICP?", a: "Usually, yes — most teams have a persona description rather than a scored, evidence-backed model. The common outcome is a segment you were under-investing in." },
      { q: "Do we have to run campaigns with you afterwards?", a: "No. The report, database and scoring model are yours to use with any agency or in-house team." },
      { q: "How current is the contact data?", a: "Every record is validated at the point of delivery, and each carries its source and date so you can see what you are working with." },
    ],
    related: ["b2b-data", "abm"],
  },

  "b2b-data": {
    eyebrow: "Service 06 · High-Intent B2B Data",
    titleLead: "Verified B2B data,",
    titleAccent: "built for outreach.",
    intro:
      "Permission-based contact databases built to your ICP and validated at delivery. Every record enriched, matched and suppression-checked — no recycled lists, no filler rows to hit a count.",
    stats: [
      { value: "95%+", label: "Verified deliverability rate" },
      { value: "7", label: "Enriched fields on every record" },
      { value: "50+", label: "Countries covered" },
      { value: "0", label: "Recycled or scraped lists" },
    ],
    deliverables: {
      "Custom database build to your ICP": {
        body: "Every build is made to order against your filters — industry, size, region, title, seniority, tech stack — rather than pulled from a pre-cut list that happens to be close. If a segment cannot be built to volume, we tell you before you buy it.",
        points: [
          "Built to your filters, not selected from a stock list",
          "Named-account builds where you supply the account list",
          "Realistic volume confirmed per segment before you commit",
          "Sample delivered for review before the full build runs",
        ],
      },
      "CSV or CRM-ready format": {
        body: "Delivered in the shape your systems expect — a clean CSV or a direct sync — with consistent field names, normalised values and no merged cells or half-parsed job titles to clean up before import.",
        points: [
          "CSV, Excel or direct CRM sync on delivery",
          "Normalised titles, seniority bands and country codes",
          "Field mapping agreed to match your CRM schema",
          "Re-delivery at no cost if the import does not run clean",
        ],
      },
      "Data fields: Name, Title, Company, Email, Phone, LinkedIn, Tech Stack": {
        body: "Seven core fields on every record as standard, because a name and an email is not enough to personalise or route anything. Additional enrichment is available where your sequences need it.",
        points: [
          "Full name, job title and seniority band",
          "Company, size, industry and region",
          "Verified work email, direct dial and LinkedIn profile",
          "Technographic stack data for fit and messaging",
        ],
      },
      "Quality guarantee: verified deliverability rate": {
        body: "The guarantee is written into the order, not offered as reassurance. Records are validated at delivery, and anything that hard-bounces above the agreed threshold is replaced or credited without an argument.",
        points: [
          "Multi-step validation run at the point of delivery",
          "Agreed deliverability threshold written into the order",
          "Hard bounces above threshold replaced or credited",
          "Replacement records supplied to the same filters",
        ],
      },
      "Suppression file application": {
        body: "Before anything is delivered we run your suppression files against the build — existing customers, open opportunities, past opt-outs, competitors — so you are never paying for records your team is already working or is not allowed to contact.",
        points: [
          "Customer, pipeline and opt-out suppression applied pre-delivery",
          "Competitor and partner domains excluded on request",
          "Duplicate check against previous deliveries to you",
          "Suppression counts reported so you see what was removed",
        ],
      },
    },
    process: [
      { title: "Spec the build", body: "We agree the filters, the fields and the realistic volume per segment — including telling you where a segment is smaller than you hoped." },
      { title: "Sample and sign-off", body: "A sample goes back for review before the full build runs, so any mismatch in titles or firmographics is caught while it is cheap to fix." },
      { title: "Build and validate", body: "Records are sourced, enriched and put through multi-step validation, with your suppression files applied before anything is counted." },
      { title: "Deliver", body: "The database arrives in your format with the deliverability guarantee attached and replacement terms already agreed." },
    ],
    faq: [
      { q: "Where does the data come from?", a: "Permission-based sources, business intelligence platforms and our own research, with the source recorded per record. We do not resell scraped lists." },
      { q: "Can we see data before we buy?", a: "Yes. Every build includes a sample for review before the full run, and the sample is representative of the segment rather than cherry-picked." },
      { q: "What happens if records bounce?", a: "Anything above the agreed deliverability threshold is replaced or credited, with replacements built to the same filters." },
      { q: "Is the data GDPR compliant?", a: "Lawful basis is documented per region and the consent or legitimate-interest source travels with each record, so your outreach can stand up to a challenge." },
    ],
    related: ["audience-intelligence", "email-marketing"],
  },

  "webinar-promotion": {
    eyebrow: "Service 07 · Webinar & Event Promotion",
    titleLead: "Fill the room with",
    titleAccent: "the right registrants.",
    intro:
      "Registration driven from your ICP through email, content syndication and targeted outreach — with volume committed in writing and the attendee engagement data delivered after the event, not just a headcount.",
    stats: [
      { value: "Guaranteed", label: "Registration volume targets" },
      { value: "4–6 wks", label: "Recommended promotion runway" },
      { value: "3", label: "Reminder touches before the event" },
      { value: "100%", label: "Registrants matched to your ICP" },
    ],
    deliverables: {
      "Webinar promotion campaign setup": {
        body: "The whole promotion built and run for you — positioning, copy, channel mix and a schedule paced against the event date, so registrations build steadily instead of arriving in one spike you cannot react to.",
        points: [
          "Event positioning and promotional copy per channel",
          "Promotion calendar paced back from the event date",
          "Multi-channel mix: email, content syndication and outreach",
          "Registration pacing monitored, with volume adjusted mid-flight",
        ],
      },
      "Registration landing page optimization advice": {
        body: "We review the page registrations actually land on and tell you what is costing you sign-ups — form length, the value proposition above the fold, speaker credibility, the mobile experience — with specific changes rather than general principles.",
        points: [
          "Form field audit — every field justified or cut",
          "Above-the-fold value proposition and speaker framing",
          "Mobile and load-speed review on the real page",
          "Confirmation and calendar-invite flow checked end to end",
        ],
      },
      "Audience targeting and list build": {
        body: "Registrants are drawn from a verified audience built to your ICP filters, not from a general opt-in pool. If the event only makes sense for a specific seniority or region, that is enforced at targeting rather than discovered on the attendee list.",
        points: [
          "Audience built to your ICP filters before promotion starts",
          "Named-account targeting where you supply the list",
          "Existing customer and competitor suppression applied",
          "Segment-level reporting on which audiences registered",
        ],
      },
      "Registration delivery and reporting": {
        body: "Registrations are delivered as they come in — not in a batch the day before — with the volume commitment tracked openly against the target so you always know whether you are on pace.",
        points: [
          "Registrations delivered continuously, CSV or CRM sync",
          "Running totals against the committed volume target",
          "Source and segment stamped on every registration",
          "Shortfall made up or credited, agreed before launch",
        ],
      },
      "Post-event attendee list with engagement data": {
        body: "Attendance is where the useful data starts. You get who showed up, how long they stayed, what they asked and how they answered your poll questions — so follow-up is prioritised by interest rather than sent to everyone equally.",
        points: [
          "Attended versus registered, with time-in-session per contact",
          "Questions asked and poll responses attached per attendee",
          "Engagement-ranked follow-up list for sales",
          "No-show list segmented for on-demand re-engagement",
        ],
      },
    },
    process: [
      { title: "Event and audience", body: "We agree the registration target, build the audience to your ICP filters and set the promotion runway against the event date." },
      { title: "Page and copy", body: "The landing page is reviewed against what actually converts, and promotion copy is written per channel and segment." },
      { title: "Promote", body: "Multi-channel promotion runs on a paced schedule, with registrations delivered live and volume adjusted if pacing slips." },
      { title: "Reminders and handover", body: "Reminder touches run before the event; afterwards you get the attendee list ranked by engagement, with no-shows segmented separately." },
    ],
    faq: [
      { q: "How far ahead should promotion start?", a: "Four to six weeks is the usual runway. Under three weeks the audience does not have time to plan around it, and registration volume drops noticeably." },
      { q: "What happens if we miss the registration target?", a: "The shortfall is made up or credited on terms agreed before launch — the volume commitment is written into the order, not offered as a best effort." },
      { q: "Can you promote in-person events too?", a: "Yes, though targeting narrows to the travelable region and the runway usually needs to be longer. The mechanics are otherwise the same." },
      { q: "Do you handle the webinar platform itself?", a: "You keep your platform — we drive registration into it and pull the attendance and engagement data back out afterwards." },
    ],
    related: ["content-syndication", "email-marketing"],
  },

  "appointment-generation": {
    eyebrow: "Service 08 · Appointment Generation",
    titleLead: "Qualified meetings, booked",
    titleAccent: "into the calendar.",
    intro:
      "SDR and telemarketing outreach that identifies in-market buyers, qualifies them against criteria you set, and puts confirmed meetings on your team's calendar — with the recording and the notes attached.",
    stats: [
      { value: "100%", label: "Meetings replaced if they fail criteria" },
      { value: "3", label: "Channels in every outreach sequence" },
      { value: "Recorded", label: "Every qualification call" },
      { value: "Weekly", label: "Appointment reporting with notes" },
    ],
    deliverables: {
      "Target account and contact list build": {
        body: "Nothing gets dialled until the list is right. Accounts are selected on fit and intent, contacts are named and verified, and direct dials are confirmed — because an SDR working a bad list is the most expensive way to learn the list was bad.",
        points: [
          "Accounts selected on fit and current intent signals",
          "Named contacts with verified direct dials, not switchboards",
          "Suppression against customers, open opportunities and opt-outs",
          "List refreshed and revalidated between waves",
        ],
      },
      "Outreach sequence (email + phone + LinkedIn)": {
        body: "Meetings come from coordinated pressure across channels, not from call volume alone. Each contact moves through a sequence where the email, the call and the LinkedIn touch reference each other and escalate.",
        points: [
          "Email, phone and LinkedIn touches on one shared timeline",
          "Call attempts timed to when that persona actually answers",
          "Sequence branches on open, reply and connect behaviour",
          "Frequency capped per contact and per account",
        ],
      },
      "Qualification script development": {
        body: "The script is built around your qualification criteria and your buyer's language, then refined weekly from what real calls surface. It is a working document — objections that come up twice get an answer written into it.",
        points: [
          "Discovery flow built around your BANT or custom criteria",
          "Objection handling written from the calls, not invented",
          "Persona-specific openers and value framing",
          "Reviewed and updated weekly against call outcomes",
        ],
      },
      "Appointment booking and calendar management": {
        body: "Meetings are booked directly into your reps' calendars against their real availability, with confirmation and reminders handled so the meeting actually happens. Reschedules are chased by us, not by your team.",
        points: [
          "Direct calendar integration against live rep availability",
          "Confirmation email and reminder sequence per booking",
          "Reschedules and no-shows chased and rebooked by us",
          "Briefing note delivered to the rep before the call",
        ],
      },
      "Weekly appointment report with notes": {
        body: "Every meeting arrives with the evidence behind it — the recording, the qualification notes, the answers to your criteria — so your reps walk in informed and your managers can audit quality rather than take it on trust.",
        points: [
          "Full call recording and written notes per appointment",
          "Answers captured against each qualification criterion",
          "Held, rescheduled and no-show tracked separately",
          "Meetings that fail criteria replaced at no cost",
        ],
      },
    },
    process: [
      { title: "Criteria and list", body: "We write down what counts as a qualified meeting, then build and verify the account and contact list the team will work." },
      { title: "Script and sequence", body: "The discovery flow and objection handling are built around your criteria, and the email, phone and LinkedIn sequence is set on one timeline." },
      { title: "Outreach", body: "The team works the sequence with calls timed to when your personas answer, recording every qualification conversation." },
      { title: "Book and report", body: "Meetings go straight into rep calendars with a briefing note; the weekly report carries recordings, notes and held-versus-booked." },
    ],
    faq: [
      { q: "What counts as a qualified appointment?", a: "Whatever we agree in writing before we start — usually title, company size, budget authority and timing. Anything that fails those criteria is replaced at no cost." },
      { q: "Who does the calling?", a: "Our SDR and telemarketing team, trained on your product and script. You get the recordings, so you can audit quality rather than rely on a summary." },
      { q: "How do you handle no-shows?", a: "We chase the reschedule ourselves and rebook. Held-versus-booked is reported separately so the number you see is not inflated by meetings that never happened." },
      { q: "How long before meetings start landing?", a: "Usually two to three weeks — one for list build, script and calibration, then bookings from the first full week of outreach." },
    ],
    related: ["demand-generation", "abm"],
  },

  "gtm-strategy": {
    eyebrow: "Service 09 · GTM Strategy",
    titleLead: "Launch with data,",
    titleAccent: "not a hunch.",
    intro:
      "A go-to-market strategy for a new market, product or persona — ICP, messaging, channel mix and a roadmap specific enough to execute from on the Monday after you receive it.",
    stats: [
      { value: "4–6 wks", label: "From kickoff to strategy handover" },
      { value: "90", label: "Day launch roadmap, week by week" },
      { value: "3", label: "Personas profiled as standard" },
      { value: "1", label: "Document your whole team works from" },
    ],
    deliverables: {
      "GTM strategy document": {
        body: "The strategy in one document rather than five decks that contradict each other — the opportunity, the audience, the positioning, the channel plan and the numbers it has to hit, written so a new hire could execute against it.",
        points: [
          "Market opportunity sized with the assumptions shown",
          "Competitive positioning and the wedge you lead with",
          "Channel plan with budget allocation and expected returns",
          "Success metrics and review gates defined up front",
        ],
      },
      "ICP and persona profiles": {
        body: "Who to sell to and who inside those accounts to convince. Built from evidence — your own win data where it exists, primary research where it does not — and specific enough to filter a target list with.",
        points: [
          "ICP defined as filters you can actually build a list against",
          "Buying committee mapped by role, influence and concern",
          "Per-persona priorities, triggers and objections",
          "Anti-personas named, so the team stops chasing bad fits",
        ],
      },
      "Messaging playbook": {
        body: "What to say to each persona at each stage, with the proof points attached. Written as usable language — subject lines, openers, objection responses — not as a positioning statement nobody can turn into an email.",
        points: [
          "Value proposition per persona with supporting proof points",
          "Message progression from first touch to evaluation",
          "Objection responses written in the buyer's own language",
          "Ready-to-use copy blocks for email, ads and outreach",
        ],
      },
      "Channel and campaign recommendations": {
        body: "Where this audience is reachable and what each channel is likely to cost, with a recommended split and expected volume. It includes the channels we think you should skip, and why — that is usually the more valuable half.",
        points: [
          "Channel mix recommended against cycle length and deal size",
          "Budget split with expected volume and cost ranges",
          "Sequencing — which channel opens, which converts",
          "Explicit list of channels not worth running here",
        ],
      },
      "90-day launch roadmap": {
        body: "The first ninety days broken into weeks, with owners, dependencies and decision gates. It is deliberately specific: the point is that execution starts immediately, not after another quarter of planning.",
        points: [
          "Week-by-week plan with named owners and dependencies",
          "Pre-launch, launch and scale phases with entry criteria",
          "Review gates where the plan is expected to change",
          "Early indicators to watch before the lagging metrics move",
        ],
      },
    },
    process: [
      { title: "Discovery", body: "We work through your win data, current pipeline and the team's own read of the market, and interview whoever knows why deals close." },
      { title: "Research", body: "Primary and secondary research fills in the segments you have no history in — competitors, buyer behaviour and reachable audience volume." },
      { title: "Strategy build", body: "ICP, positioning, messaging and channel plan are drafted, pressure-tested against your numbers and revised with your team in a working session." },
      { title: "Roadmap and handover", body: "The 90-day plan is built with owners and gates, then handed over in a session that leaves your team able to run it without us." },
    ],
    faq: [
      { q: "Is this useful for an existing market?", a: "Yes — a repositioning or a new persona inside a market you already serve uses the same process, and usually moves faster because the win data is already there." },
      { q: "Do you execute the strategy as well?", a: "We can, but it is not a condition. The document, playbook and roadmap are built to be executable by your team or any agency you choose." },
      { q: "How much of our time does this take?", a: "Roughly a day in total across four to six weeks — a kickoff, a handful of interviews, one working session and the handover." },
      { q: "What if the research contradicts our plan?", a: "Then you have found that out for the cost of a strategy engagement rather than a launch. We show the evidence and the assumptions so you can judge it yourself." },
    ],
    related: ["audience-intelligence", "demand-generation"],
  },

  "ai-visibility": {
    eyebrow: "Service 10 · AI Visibility",
    titleLead: "Be the answer when",
    titleAccent: "buyers ask an AI.",
    intro:
      "Buyers now shortlist through AI assistants and search summaries before they ever reach your site. We audit how your brand shows up in those answers, fix what is keeping you out, and track the change month over month.",
    stats: [
      { value: "5+", label: "Assistants and AI surfaces monitored" },
      { value: "Monthly", label: "Visibility tracking report" },
      { value: "SOV", label: "Measured against named competitors" },
      { value: "100%", label: "Recommendations tied to a tracked prompt" },
    ],
    deliverables: {
      "AI visibility audit report": {
        body: "We build the set of prompts your buyers actually use — category questions, comparison questions, problem statements — run them across the major assistants, and record whether you appear, how you are described, and who appears instead.",
        points: [
          "Buyer-intent prompt set built for your category",
          "Presence and sentiment recorded across major assistants",
          "The sources those answers cite, ranked by influence",
          "Baseline captured so later movement is measurable",
        ],
      },
      "Content optimization recommendations": {
        body: "Specific changes to specific pages, ordered by the difference they will make. AI answers favour content that states things plainly, structures them clearly and can be verified elsewhere — most B2B sites fail on all three.",
        points: [
          "Page-level changes prioritised by expected impact",
          "Structured data and schema gaps identified per template",
          "Claims made verifiable and attributable where they are not",
          "Entity and terminology consistency fixed across the site",
        ],
      },
      "AI-optimized content creation": {
        body: "Where the gap is missing content rather than weak content, we write it — the comparison pages, definitional explainers and specific answers that assistants draw on when someone asks about your category.",
        points: [
          "Answer-shaped content written for real buyer prompts",
          "Comparison and alternatives pages that stand up to scrutiny",
          "Structured markup applied at the point of publication",
          "Written to serve the reader first, so it survives model changes",
        ],
      },
      "Monthly AI visibility tracking report": {
        body: "The same prompt set, re-run every month, so you can see whether the work moved anything. Model behaviour shifts on its own — tracking against a fixed baseline is the only way to separate your progress from theirs.",
        points: [
          "Fixed prompt set re-run monthly for comparability",
          "Presence, position and sentiment trended over time",
          "Changes attributed to your work versus model updates",
          "Next actions recommended from what actually moved",
        ],
      },
      "Competitor AI share-of-voice analysis": {
        body: "Across your prompt set, who gets named and how often. Share of voice makes the gap concrete — and usually shows that the competitor winning the answers is not the one winning the market.",
        points: [
          "Share of voice per competitor across the full prompt set",
          "The sources driving their visibility, named",
          "Prompts where nobody wins yet — the reachable ground",
          "Trend tracked monthly alongside your own movement",
        ],
      },
    },
    process: [
      { title: "Prompt set and baseline", body: "We build the prompts your buyers actually use and run them across the major assistants to capture where you stand today." },
      { title: "Diagnosis", body: "The audit identifies why you are absent or misdescribed — missing content, unstructured pages, unverifiable claims or inconsistent entity signals." },
      { title: "Fix and publish", body: "Recommendations are applied and new answer-shaped content is written and published with structured markup in place." },
      { title: "Track", body: "The same prompt set re-runs monthly, separating your movement from model drift and setting the next month's priorities." },
    ],
    faq: [
      { q: "Is this just SEO with a new name?", a: "There is overlap in the fundamentals, but the target differs: assistants synthesise an answer and cite a few sources rather than ranking ten links, so verifiability and structure matter more than position." },
      { q: "How long before visibility changes?", a: "Content and structure fixes typically show up within one to two monthly cycles. Establishing presence in a category where you have none takes longer." },
      { q: "Can you guarantee we appear in AI answers?", a: "No, and be wary of anyone who does — the systems are not deterministic and change without notice. What we guarantee is measurement against a fixed baseline and work aimed at the causes." },
      { q: "Which assistants do you track?", a: "The major consumer and enterprise assistants plus AI search summaries. The exact set is agreed at kickoff and held fixed so the monthly numbers stay comparable." },
    ],
    related: ["performance-marketing", "gtm-strategy"],
  },

  "performance-marketing": {
    eyebrow: "Service 11 · Digital & Performance",
    titleLead: "Paid media measured on",
    titleAccent: "pipeline, not clicks.",
    intro:
      "Paid search, LinkedIn, programmatic and display run as a pipeline channel — optimised toward cost per opportunity rather than cost per click, and reported against the spend that produced it.",
    stats: [
      { value: "4", label: "Paid channels managed in-house" },
      { value: "CPO", label: "The cost we optimise toward" },
      { value: "100%", label: "Spend reported against pipeline" },
      { value: "Weekly", label: "Performance reporting" },
    ],
    deliverables: {
      "Campaign setup and management": {
        body: "Accounts built properly from the start — conversion tracking that fires on the right events, sensible campaign structure, and offline conversions fed back so the platforms optimise toward revenue instead of form fills.",
        points: [
          "Account structure built for clean signal, not for a screenshot",
          "Conversion tracking verified end to end before spend starts",
          "Offline conversions imported so platforms learn from real deals",
          "Day-to-day management, budget pacing and anomaly checks",
        ],
      },
      "Ad creative and copywriting": {
        body: "Creative written for a B2B buyer who is evaluating, not impulse-buying. We produce variants per persona and stage, and retire the ones that lose rather than leaving a whole account on a single tired concept.",
        points: [
          "Concepts and copy per persona and funnel stage",
          "Static and motion variants sized for every placement",
          "Structured testing with one variable at a time",
          "Fatigued creative retired on a defined refresh cycle",
        ],
      },
      "Audience targeting and bid strategy": {
        body: "Targeting built from your account list and ICP rather than from platform-suggested interests, with bidding set by segment value — a Tier 1 account is worth paying more for, and the bid strategy should say so.",
        points: [
          "Account-list and ICP-based audiences, not interest guesses",
          "Bids weighted by account tier and segment value",
          "Exclusions for customers, competitors and job seekers",
          "Retargeting sequenced by stage, with frequency capped",
        ],
      },
      "Weekly performance reporting": {
        body: "One report, weekly, in the language of pipeline — spend, qualified leads, opportunities and cost per opportunity by channel and campaign. Platform metrics are there if you want them, but they are not the headline.",
        points: [
          "Spend, leads, opportunities and CPO per channel",
          "Campaign and creative-level breakdown of what is working",
          "Pacing against budget and target for the period",
          "Plain note on what changed this week and why",
        ],
      },
      "Monthly strategy and optimization review": {
        body: "A working session each month to decide what scales, what gets fixed and what gets cut — with budget reallocated toward whatever is producing opportunities rather than left where last quarter's plan put it.",
        points: [
          "Budget reallocated across channels on the evidence",
          "Landing page and conversion path recommendations",
          "Audience and creative roadmap for the coming month",
          "Channels that are not producing paused, not defended",
        ],
      },
    },
    process: [
      { title: "Audit and tracking", body: "We audit existing accounts and fix conversion tracking first — until the signal is trustworthy, every optimisation after it is guesswork." },
      { title: "Build", body: "Campaign structure, ICP-based audiences and creative variants are built, with bids weighted by account tier." },
      { title: "Launch and learn", body: "Spend ramps deliberately while the platforms gather signal, with structured tests running one variable at a time." },
      { title: "Scale", body: "Weekly reporting drives in-flight adjustments; the monthly review reallocates budget toward whatever is producing opportunities." },
    ],
    faq: [
      { q: "What budget do we need to make this work?", a: "Enough for the platforms to gather signal — usually a meaningful monthly floor per channel. We will tell you if your budget is better spent on one channel than split across three." },
      { q: "Why optimise to cost per opportunity, not cost per lead?", a: "Because CPL rewards cheap leads. Feeding real opportunity data back to the platforms makes them find people who look like buyers rather than people who fill in forms." },
      { q: "Do you work in our ad accounts or yours?", a: "Yours. You keep ownership of the accounts, the data and the history — including if you stop working with us." },
      { q: "How quickly will we see results?", a: "Expect four to six weeks before the data is worth drawing conclusions from, and a quarter before the optimisation compounds into a stable cost per opportunity." },
    ],
    related: ["demand-generation", "website-design"],
  },

  "website-design": {
    eyebrow: "Service 12 · Website Design & Development",
    titleLead: "A B2B website built to",
    titleAccent: "convert the visit.",
    intro:
      "Conversion-focused B2B sites and landing pages — designed around how your buyers actually evaluate, built to load fast on a phone, and handed over on a CMS your marketing team can run without a developer.",
    stats: [
      { value: "6–10 wks", label: "Typical build timeline" },
      { value: "90+", label: "Lighthouse performance target" },
      { value: "Mobile", label: "First, on every template" },
      { value: "30", label: "Days of post-launch support included" },
    ],
    deliverables: {
      "Website discovery and wireframes": {
        body: "Structure before styling. We work out who the site is for, what they need to establish before they will talk to you, and what is currently getting in the way — then wireframe the pages against that, while changes still cost nothing.",
        points: [
          "Audience, objection and conversion-path mapping",
          "Analytics and heatmap review of the existing site",
          "Sitemap and page hierarchy agreed before design starts",
          "Wireframes for every unique template, signed off up front",
        ],
      },
      "UI/UX design (desktop + mobile)": {
        body: "Designed at both ends of the range rather than shrunk down afterwards, because most B2B first visits are on a phone. You get a component set, not a pile of one-off page mockups.",
        points: [
          "Desktop and mobile designed together, not adapted after",
          "Reusable component library your team can build new pages from",
          "Accessible colour contrast and type scale as standard",
          "Interaction and motion specified, not left to the developer",
        ],
      },
      "Front-end and back-end development": {
        body: "Built for speed and search from the first commit — semantic markup, optimised assets, clean structured data. Performance is a build constraint here, not something audited after launch and patched.",
        points: [
          "Semantic, accessible markup with SEO-ready architecture",
          "Performance budgets enforced during the build",
          "Forms wired to your CRM or marketing automation",
          "Analytics and conversion tracking implemented and verified",
        ],
      },
      "CMS setup and content migration": {
        body: "Content modelled so your marketing team can publish and restructure pages without a developer — and existing content migrated with redirects mapped, so the search equity you have already earned survives the move.",
        points: [
          "WordPress or Webflow, modelled for editors not developers",
          "Existing content migrated and re-checked page by page",
          "301 redirect map built and tested before cutover",
          "Editor training session and written documentation",
        ],
      },
      "QA, launch, and post-launch support": {
        body: "Tested across real browsers and devices, launched on a planned cutover rather than a hopeful one, and supported for thirty days afterwards — because the issues worth catching surface in the first fortnight of real traffic.",
        points: [
          "Cross-browser, cross-device and accessibility QA pass",
          "Forms, tracking and redirects verified on production",
          "Planned cutover with rollback ready",
          "30 days of post-launch support and fixes included",
        ],
      },
    },
    process: [
      { title: "Discovery", body: "We map the audience, the objections and the conversion paths, and review what the current site's analytics say is going wrong." },
      { title: "Design", body: "Wireframes are signed off before visual design begins, then desktop and mobile are designed together into a reusable component set." },
      { title: "Build", body: "Development runs against performance budgets, with forms, CRM integration and tracking wired in and verified as they are built." },
      { title: "Launch", body: "Content migrates with a tested redirect map, QA runs across real devices, and we support the site for thirty days after cutover." },
    ],
    faq: [
      { q: "WordPress or Webflow?", a: "Webflow suits marketing sites your team wants to change constantly; WordPress suits heavier content operations and complex integrations. We will recommend one after discovery rather than before." },
      { q: "Will we lose search rankings?", a: "Not if the migration is done properly. The redirect map is built and tested before cutover, and URL structure is preserved wherever there is equity worth keeping." },
      { q: "Can you just do landing pages?", a: "Yes. Campaign landing pages are a common standalone engagement and run on a much shorter timeline than a full site." },
      { q: "What do you need from us?", a: "Content and brand assets, one decision-maker who can sign off, and access to your CRM and analytics. Content is usually what sets the real timeline." },
    ],
    related: ["performance-marketing", "gtm-strategy"],
  },
};

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
  return isServicePageKey(key) ? SERVICE_PAGES[key] : undefined;
}
