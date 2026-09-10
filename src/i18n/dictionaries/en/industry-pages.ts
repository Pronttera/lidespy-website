/**
 * Detail pages for the nine industries, at `/industries/<key>`.
 *
 * The name, one-line description, personas and cover image stay in
 * `industries.ts`, which is what the index page renders — this file carries
 * only what the detail page adds.
 */

import type { DetailCopy } from "./detail";

export type IndustryPage = DetailCopy & {
  /** One line for the "other industries" cards. */
  summary: string;
};

export const INDUSTRY_PAGES: Record<string, IndustryPage> = {
  technology: {
    summary: "IT buyers, vendors, ISVs and managed service providers, reached through technical and commercial evaluation alike.",
    eyebrow: "Industry 01 · Technology",
    titleLead: "Reach technical buyers",
    titleAccent: "on their own terms.",
    intro:
      "Technology buyers research thoroughly, distrust marketing language and bring engineers into the evaluation early. Campaigns here work when they respect that — specific, technically credible and patient with a long committee.",
    stats: [
      { value: "9", label: "Committee roles mapped per account" },
      { value: "3–9 mo", label: "Typical evaluation cycle" },
      { value: "50+", label: "Countries covered" },
      { value: "95%+", label: "Verified deliverability on delivered records" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "The committee behind a technology purchase",
        body: "Almost no technology deal is signed by one person. The evaluator who tests it, the architect who has to live with it and the executive who signs it want completely different things — and reaching only one of them is why deals stall in evaluation.",
        points: [
          "CTO, CIO and VP Engineering for the strategic case",
          "IT directors and architects for the technical evaluation",
          "Platform and operations leads who inherit the system",
          "Procurement and vendor management on commercial terms",
        ],
      },
      {
        id: "buying-cycle",
        title: "Why the cycle runs long here",
        body: "Technology buyers are replacing or integrating something that already works, so the cost of being wrong is high and the evaluation is correspondingly slow. Campaigns built on a one-month cadence run out before the committee has assembled.",
        points: [
          "Integration and migration risk raised early in evaluation",
          "Proof-of-concept stages that pause outbound momentum",
          "Security and procurement review as a distinct late stage",
          "Programs paced across quarters, not weeks",
        ],
      },
      {
        id: "what-works",
        title: "The campaigns that actually land",
        body: "Technical audiences reward specificity and punish vagueness. Architecture-level content, benchmark data and honest comparison material outperform brand-led messaging by a wide margin in this sector.",
        points: [
          "Technical content syndication into active research",
          "Benchmark and comparison assets that survive scrutiny",
          "ABM into named accounts with a stack you integrate with",
          "Webinars with an engineer presenting, not a marketer",
        ],
      },
      {
        id: "data-and-targeting",
        title: "Targeting on the stack, not just the firmographics",
        body: "Company size and industry tell you very little about whether a technology buyer is a fit. What they currently run does. Technographic targeting is the difference between a relevant approach and an obvious mass mailing.",
        points: [
          "Technographic filters on current stack and tooling",
          "Displacement targeting against named incumbent products",
          "Intent monitoring on category and competitor research",
          "Verified direct contact for technical decision-makers",
        ],
      },
    ],
    services: ["demand-generation", "abm", "content-syndication"],
    cta: {
      title: "Reach technology buyers who are already evaluating.",
      body: "Tell us the stack you integrate with or displace, and we will show you how many accounts are researching right now.",
      button: "Book a strategy call",
    },
  },

  saas: {
    summary: "Product-led and sales-led SaaS companies at every stage, from first pipeline engine to enterprise motion.",
    eyebrow: "Industry 02 · SaaS",
    titleLead: "Pipeline that keeps pace",
    titleAccent: "with the growth plan.",
    intro:
      "SaaS lives on predictable pipeline coverage against a number that resets every quarter. We build the demand engine to that rhythm — enough volume to cover the target, qualified tightly enough that the coverage is real.",
    stats: [
      { value: "4–6 wks", label: "From brief to first delivered leads" },
      { value: "3", label: "Pipeline coverage ratio most teams plan to" },
      { value: "Weekly", label: "Lead delivery and reporting" },
      { value: "100%", label: "Off-criteria leads replaced" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "Who signs off on SaaS spend now",
        body: "Budget scrutiny changed the SaaS committee. The economic buyer is joined by finance, security and often a procurement function that did not exist in the deal three years ago — and each needs a different case made to them.",
        points: [
          "CMO, VP Marketing and Head of Growth on the commercial case",
          "RevOps on data, integration and reporting fit",
          "Finance on renewal terms and total cost",
          "Security review as a standard late-stage gate",
        ],
      },
      {
        id: "buying-cycle",
        title: "Quarterly pressure, longer cycles",
        body: "The tension in SaaS demand generation is a quarterly target against a lengthening cycle. Programs that only chase in-quarter deals starve the following quarter, so we build coverage on two horizons at once.",
        points: [
          "Near-term volume for the current quarter's coverage",
          "Longer-horizon nurture for deals landing next quarter",
          "Pipeline coverage tracked against the target, not raw leads",
          "Seasonality and budget cycles built into the calendar",
        ],
      },
      {
        id: "what-works",
        title: "What produces coverage in SaaS",
        body: "Category-defining content and competitive comparison work at the top; appointment generation and ABM carry the enterprise motion. Most SaaS programs need both because the segments buy so differently.",
        points: [
          "Content syndication for self-serve and mid-market volume",
          "Appointment generation for the enterprise segment",
          "Competitor displacement plays against renewal timing",
          "Webinars and product-led events to fill the mid-funnel",
        ],
      },
      {
        id: "data-and-targeting",
        title: "Targeting by stack, stage and signal",
        body: "A Series A and a Series D SaaS buyer are not the same customer. Funding stage, headcount trajectory and current tooling separate the segments far better than industry codes do.",
        points: [
          "Funding stage and headcount growth as fit signals",
          "Technographic targeting on adjacent and competing tools",
          "Hiring signals as an indicator of budget movement",
          "Existing customers and open opportunities suppressed",
        ],
      },
    ],
    services: ["demand-generation", "appointment-generation", "email-marketing"],
    cta: {
      title: "Cover the number with pipeline you can trust.",
      body: "Tell us the target and the segment, and we will model the volume and coverage it takes to get there.",
      button: "Book a strategy call",
    },
  },

  cybersecurity: {
    summary: "Security vendors reaching CISOs, SOC teams and risk functions with education-first, credible outreach.",
    eyebrow: "Industry 03 · Cybersecurity",
    titleLead: "Reach security buyers",
    titleAccent: "who distrust vendors.",
    intro:
      "Security buyers are professionally sceptical, heavily marketed to and quick to dismiss anything that reads as pressure. This sector rewards education, credibility and patience more than any other we work in.",
    stats: [
      { value: "6–12 mo", label: "Typical evaluation cycle" },
      { value: "9", label: "Committee roles mapped per account" },
      { value: "0", label: "Fear-based messaging" },
      { value: "Monthly", label: "Account engagement reporting" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "The security buying committee",
        body: "Security purchases pull in more of the organisation than most. The CISO owns the decision, but the SOC lead who will operate the tool and the compliance officer who must evidence it both hold a veto.",
        points: [
          "CISO and VP Security on strategy and budget",
          "SOC leads and analysts who operate the tooling daily",
          "Risk and compliance on evidencing and audit",
          "IT and infrastructure on deployment impact",
        ],
      },
      {
        id: "buying-cycle",
        title: "Credibility first, and it takes time",
        body: "A security buyer's default assumption is that your claims are overstated. Trust is built through independent validation and peer evidence over months — outbound that skips that stage tends to be blocked rather than ignored.",
        points: [
          "Third-party validation and analyst coverage carry weight",
          "Peer and community reference matters more than case studies",
          "Budget often tied to audit findings or an incident",
          "Long nurture runs expected before a first conversation",
        ],
      },
      {
        id: "what-works",
        title: "Education-first programs",
        body: "Threat research, practical frameworks and honest capability comparisons earn attention here. Fear-based messaging gets the sender dismissed — this audience has seen every variant of it and reads it as a lack of substance.",
        points: [
          "Threat research and practitioner-level technical content",
          "Framework and compliance-mapping assets (NIST, ISO, DORA)",
          "Webinars with practitioners rather than product marketing",
          "ABM against accounts with a visible compliance driver",
        ],
      },
      {
        id: "data-and-targeting",
        title: "Targeting and hygiene in a suspicious inbox",
        body: "Security teams scrutinise inbound mail more carefully than any other audience, and a poorly authenticated send does lasting reputational damage. Deliverability practice here has to be exemplary before volume is even considered.",
        points: [
          "SPF, DKIM and DMARC verified before any send",
          "Technographic targeting on current security stack",
          "Compliance-driven trigger events used as timing signals",
          "Conservative volume and frequency caps by design",
        ],
      },
    ],
    services: ["content-syndication", "abm", "audience-intelligence"],
    cta: {
      title: "Earn attention from buyers who distrust marketing.",
      body: "We will show you the education-first program that opens conversations with security teams without burning credibility.",
      button: "Book a strategy call",
    },
  },

  cloud: {
    summary: "Cloud platforms, hosting and DevOps tooling, reached through the engineers who evaluate and the executives who fund.",
    eyebrow: "Industry 04 · Cloud & Infrastructure",
    titleLead: "Reach the engineers",
    titleAccent: "who make the call.",
    intro:
      "Infrastructure decisions are made bottom-up more often than in any other category. The engineer who trials the tool drives the outcome, and the campaign has to reach them without patronising them.",
    stats: [
      { value: "Bottom-up", label: "Where most evaluations start" },
      { value: "3–6 mo", label: "Trial to commercial commitment" },
      { value: "50+", label: "Countries covered" },
      { value: "0", label: "Gated content for practitioners" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "Practitioners first, budget second",
        body: "The person who decides is often the one who ran the trial on a Friday afternoon. Reaching only the executive misses the evaluation entirely; reaching only the practitioner leaves nobody able to sign.",
        points: [
          "Platform engineers and DevOps leads who run the trial",
          "Heads of infrastructure who standardise the choice",
          "CTOs and VPs Engineering who release the budget",
          "FinOps and procurement on committed spend",
        ],
      },
      {
        id: "buying-cycle",
        title: "Adoption before purchase",
        body: "The commercial conversation usually happens after the technology is already in use. That inverts the funnel: the job is to be findable and trialable early, then to arrive with a commercial case once usage is real.",
        points: [
          "Self-serve trial as the true first conversion point",
          "Usage growth as the signal that a deal is available",
          "Migration cost and lock-in as the central objection",
          "Commercial outreach timed to consumption milestones",
        ],
      },
      {
        id: "what-works",
        title: "Documentation, benchmarks and proof",
        body: "This audience reads documentation and runs benchmarks. Content that is genuinely useful without a form in front of it builds the reach; the gated material comes later, aimed at the funding conversation rather than the practitioner.",
        points: [
          "Ungated technical content and reference architectures",
          "Independent benchmark and cost-comparison material",
          "Technical webinars and live migration walkthroughs",
          "Executive-level TCO content for the funding case",
        ],
      },
      {
        id: "data-and-targeting",
        title: "Targeting on infrastructure signals",
        body: "Firmographics say almost nothing here. What a company currently runs, how fast it is scaling and whether it is hiring platform engineers say almost everything.",
        points: [
          "Technographic targeting on current cloud and tooling",
          "Scaling and hiring signals as budget indicators",
          "Displacement targeting against incumbent platforms",
          "Verified contact for engineering and platform roles",
        ],
      },
    ],
    services: ["demand-generation", "content-syndication", "b2b-data"],
    cta: {
      title: "Reach the practitioners who decide.",
      body: "Tell us what you displace or integrate with, and we will map the accounts running it today.",
      button: "Book a strategy call",
    },
  },

  fintech: {
    summary: "Banking, insurance, payments and financial technology, reached with compliance-aware programs built for scrutiny.",
    eyebrow: "Industry 05 · FinTech",
    titleLead: "Reach financial buyers",
    titleAccent: "under real scrutiny.",
    intro:
      "Financial services buyers operate under regulatory obligation, and every vendor decision carries audit consequences. Campaigns here have to be precise, compliant and prepared for a procurement process that is genuinely adversarial.",
    stats: [
      { value: "9–18 mo", label: "Typical enterprise cycle" },
      { value: "100%", label: "Lawful basis documented per region" },
      { value: "9", label: "Committee roles mapped per account" },
      { value: "Weekly", label: "Delivery and reporting cadence" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "A committee with a regulator behind it",
        body: "Financial buying committees include functions that exist to say no. Risk, compliance and vendor management are not obstacles to route around — they are stakeholders who need their own evidence.",
        points: [
          "CFO, treasury and heads of payments on the commercial case",
          "Risk and compliance on regulatory exposure",
          "CISO and third-party risk on vendor assessment",
          "Procurement on contract terms and exit provisions",
        ],
      },
      {
        id: "buying-cycle",
        title: "Long, gated and evidence-driven",
        body: "Deals move through formal gates with documentation requirements at each one. The cycle is measured in quarters, and pipeline forecasting that assumes otherwise consistently disappoints.",
        points: [
          "Formal vendor risk assessment as a distinct stage",
          "Proof of regulatory alignment required early",
          "Budget cycles tied to fiscal and audit calendars",
          "Incumbent displacement slowed by migration risk",
        ],
      },
      {
        id: "what-works",
        title: "Programs built for a regulated audience",
        body: "Regulatory change is the most reliable trigger in this sector. Content that helps a team meet an obligation earns a conversation that a product pitch will not.",
        points: [
          "Regulatory-change content mapped to specific obligations",
          "Peer benchmarking against comparable institutions",
          "ABM into named institutions with a compliance driver",
          "Executive roundtables in place of open webinars",
        ],
      },
      {
        id: "data-and-targeting",
        title: "Compliance is a targeting constraint, not a footnote",
        body: "Outreach into financial services is scrutinised, and consent provenance may genuinely be asked for. Every record we deliver into this sector carries its lawful basis and source with it.",
        points: [
          "Lawful basis documented per region before launch",
          "Consent source and date attached to every record",
          "Institution-type and regulatory-regime targeting",
          "Suppression maintained rigorously across programs",
        ],
      },
    ],
    services: ["abm", "audience-intelligence", "b2b-data"],
    cta: {
      title: "Reach regulated buyers without compliance risk.",
      body: "We will show you the audience we can reach in your target institutions, and the lawful basis behind it.",
      button: "Book a strategy call",
    },
  },

  healthcare: {
    summary: "Health IT, medical devices, clinical software and digital health, reached across clinical and administrative committees.",
    eyebrow: "Industry 06 · Healthcare",
    titleLead: "Reach clinical and",
    titleAccent: "administrative buyers.",
    intro:
      "Healthcare purchases answer to clinicians, administrators and procurement at once, under privacy rules that shape what outreach can look like. The cycles are long and the committee is genuinely divided in its priorities.",
    stats: [
      { value: "12–18 mo", label: "Typical health system cycle" },
      { value: "9", label: "Committee roles mapped per account" },
      { value: "100%", label: "Lawful basis documented per region" },
      { value: "Monthly", label: "Account engagement reporting" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "Clinicians and administrators want different things",
        body: "A clinical lead is asking whether it improves care and fits the workflow; an administrator is asking what it costs and what it replaces. A single message aimed at both usually persuades neither.",
        points: [
          "Clinical IT and informatics leads on workflow fit",
          "Hospital administrators and COOs on cost and capacity",
          "Procurement and group purchasing on contracting",
          "Privacy and security officers on data handling",
        ],
      },
      {
        id: "buying-cycle",
        title: "Committee-heavy and calendar-bound",
        body: "Decisions pass through committees that meet monthly or quarterly, so momentum is structurally limited. Programs are paced to that reality rather than pushing against it.",
        points: [
          "Formal committee review as a fixed pacing constraint",
          "Capital versus operational budget routes differ sharply",
          "Pilot-before-purchase as the norm in clinical settings",
          "Integration with existing records systems raised early",
        ],
      },
      {
        id: "what-works",
        title: "Evidence, outcomes and peer proof",
        body: "Clinical audiences respond to outcome evidence and peer institutions, not to product claims. Material that helps a team make an internal case travels further than material that pitches.",
        points: [
          "Outcome and efficiency evidence from comparable institutions",
          "Content built to support an internal business case",
          "Clinical webinars and CPD-adjacent education",
          "ABM into named systems and hospital groups",
        ],
      },
      {
        id: "data-and-targeting",
        title: "Privacy-aware targeting",
        body: "Healthcare outreach touches a sector where privacy expectations are high and institutional. We target roles and institutions with documented sourcing and stay well inside professional norms on frequency.",
        points: [
          "Institution-type and bed-size targeting for health systems",
          "Role-level targeting across clinical and administrative lines",
          "Documented source and lawful basis on every record",
          "Conservative frequency capping by design",
        ],
      },
    ],
    services: ["abm", "content-syndication", "audience-intelligence"],
    cta: {
      title: "Reach healthcare buyers on both sides of the committee.",
      body: "Tell us which institutions you sell into and we will map the clinical and administrative contacts inside them.",
      button: "Book a strategy call",
    },
  },

  manufacturing: {
    summary: "Industrial technology, supply chain and operational software, reached through plant-level and executive buyers.",
    eyebrow: "Industry 07 · Manufacturing",
    titleLead: "Reach the plant floor",
    titleAccent: "and the boardroom.",
    intro:
      "Manufacturing buyers judge everything against downtime and payback period. The operational people who live with the system and the executives who fund it need different arguments, and both have to be convinced.",
    stats: [
      { value: "6–12 mo", label: "Typical evaluation cycle" },
      { value: "ROI", label: "The measure that decides it" },
      { value: "50+", label: "Countries covered" },
      { value: "9", label: "Committee roles mapped per account" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "Operations decides, finance approves",
        body: "A plant manager who does not believe a system will survive contact with the floor can end an evaluation regardless of the business case. Operational credibility comes before the financial argument, not after it.",
        points: [
          "COOs and heads of operations on the strategic case",
          "Plant and production managers on practical fit",
          "Supply chain and procurement leads on continuity",
          "Finance on payback period and capital approval",
        ],
      },
      {
        id: "buying-cycle",
        title: "Downtime is the real objection",
        body: "The question underneath every manufacturing evaluation is what happens to production during changeover. Until that has a credible answer, nothing else in the pitch is being heard.",
        points: [
          "Implementation downtime addressed before features",
          "Pilot on a single line or site before rollout",
          "Capital expenditure cycles that gate timing",
          "Legacy and OT integration raised as a hard constraint",
        ],
      },
      {
        id: "what-works",
        title: "Payback, peers and proof on site",
        body: "This sector responds to arithmetic and to peers. A credible payback calculation and a comparable plant that made the change are worth more than any amount of positioning.",
        points: [
          "ROI and payback-period content with defensible numbers",
          "Peer case evidence from comparable operations",
          "Trade event and industry webinar promotion",
          "Direct outreach into named plants and groups",
        ],
      },
      {
        id: "data-and-targeting",
        title: "Targeting by site, not just by company",
        body: "Manufacturing groups buy at group level and at site level, often independently. Targeting the parent alone misses the plant where the actual problem is being felt.",
        points: [
          "Site-level as well as group-level account targeting",
          "Facility size, output and sector filters",
          "Technographic targeting on ERP and MES systems",
          "Verified direct contact for plant-level roles",
        ],
      },
    ],
    services: ["demand-generation", "appointment-generation", "b2b-data"],
    cta: {
      title: "Reach operations and finance with the right argument each.",
      body: "Tell us what you replace on the floor and we will map the plants and groups running it.",
      button: "Book a strategy call",
    },
  },

  telecom: {
    summary: "Telco vendors, network infrastructure and connectivity providers, reached through long procurement-led cycles.",
    eyebrow: "Industry 08 · Telecommunications",
    titleLead: "Reach network buyers",
    titleAccent: "through a long process.",
    intro:
      "Telecom procurement is formal, slow and heavily contested, often running through RFPs against a handful of established vendors. Positioning has to happen well before the tender, because by then the outcome is largely set.",
    stats: [
      { value: "12–24 mo", label: "Typical carrier cycle" },
      { value: "RFP", label: "How most decisions are made" },
      { value: "9", label: "Committee roles mapped per account" },
      { value: "Monthly", label: "Account engagement reporting" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "Engineering, procurement and the executive sponsor",
        body: "Network engineering sets the requirements, procurement runs the process and an executive sponsor decides whether it happens at all. Missing any of the three means arriving at the tender already behind.",
        points: [
          "Network directors and engineering leads on requirements",
          "CTOs and technology officers as executive sponsors",
          "Procurement and vendor management running the process",
          "Operations teams who will run the deployment",
        ],
      },
      {
        id: "buying-cycle",
        title: "The tender is decided before it opens",
        body: "By the time an RFP is published, the requirements usually reflect conversations that happened months earlier. Being present during requirement-setting matters far more than responding well.",
        points: [
          "Requirement-shaping stage as the decisive window",
          "Vendor shortlists formed long before tender",
          "Interoperability with existing infrastructure as a gate",
          "Multi-year contracts that make displacement rare",
        ],
      },
      {
        id: "what-works",
        title: "Technical standing and long-horizon presence",
        body: "Credibility in telecom is built through standards participation, technical depth and consistent presence over years. Short campaigns do not register; sustained ABM does.",
        points: [
          "Standards-aware technical content and white papers",
          "Sustained ABM against a small named account set",
          "Industry event and conference-led programs",
          "Executive briefings rather than volume outreach",
        ],
      },
      {
        id: "data-and-targeting",
        title: "A small, precisely mapped account set",
        body: "There are only so many carriers and network operators in any region. This is the clearest case in our work for depth over volume — every account mapped exhaustively rather than a wide list worked thinly.",
        points: [
          "Exhaustive committee mapping on a small account set",
          "Operator type, region and network-generation targeting",
          "Contract renewal timing tracked where it is visible",
          "Verified direct contact across engineering and procurement",
        ],
      },
    ],
    services: ["abm", "audience-intelligence", "demand-generation"],
    cta: {
      title: "Be in the conversation before the tender opens.",
      body: "Tell us which operators you are targeting and we will map the committee inside each one.",
      button: "Book a strategy call",
    },
  },

  "professional-services": {
    summary: "Consulting, advisory and B2B service firms, where the relationship is the product and reputation drives the deal.",
    eyebrow: "Industry 09 · Professional Services",
    titleLead: "Win work where",
    titleAccent: "reputation decides.",
    intro:
      "Professional services firms sell judgement, and buyers choose on credibility and relationship rather than on feature comparison. Demand generation here builds standing and opens conversations — it does not close deals on its own.",
    stats: [
      { value: "Referral", label: "Still the strongest channel" },
      { value: "3–9 mo", label: "Typical engagement cycle" },
      { value: "50+", label: "Countries covered" },
      { value: "Weekly", label: "Delivery and reporting cadence" },
    ],
    sections: [
      {
        id: "who-we-reach",
        title: "Buyers choosing a firm, not a product",
        body: "The question is not which capability is better but which firm they trust with a problem that matters. That makes named-partner visibility and demonstrated thinking the substance of the campaign.",
        points: [
          "Managing partners and practice leads as the visible expertise",
          "C-suite buyers commissioning the engagement",
          "Heads of function who scope and shortlist",
          "Procurement on panel arrangements and rates",
        ],
      },
      {
        id: "buying-cycle",
        title: "Triggered by events, decided on trust",
        body: "Engagements start when something changes — a transaction, a regulation, a leadership move. The firm that is already known and credible at that moment wins; the one that starts marketing afterwards is too late.",
        points: [
          "Trigger events as the practical timing signal",
          "Panel and framework arrangements gating access",
          "Existing relationships weighted heavily in shortlisting",
          "Individual reputation often outweighing firm brand",
        ],
      },
      {
        id: "what-works",
        title: "Thinking that demonstrates the judgement",
        body: "The most effective asset in this sector is genuinely good thinking published under a named partner. It functions as a work sample, which is exactly what a buyer of judgement is looking for.",
        points: [
          "Point-of-view content published under named partners",
          "Original research that positions the firm as a source",
          "Executive roundtables and invitation-only briefings",
          "Targeted outreach timed to visible trigger events",
        ],
      },
      {
        id: "data-and-targeting",
        title: "Targeting on change, not on stack",
        body: "There is no technographic signal for needing advice. The useful signals are organisational: leadership changes, transactions, funding events and regulatory exposure.",
        points: [
          "Leadership change and new-appointment monitoring",
          "Transaction, funding and restructuring signals",
          "Regulatory exposure by sector and jurisdiction",
          "Existing client and conflict suppression applied",
        ],
      },
    ],
    services: ["gtm-strategy", "audience-intelligence", "email-marketing"],
    cta: {
      title: "Be the firm they already know when the trigger comes.",
      body: "Tell us the practice you are growing and we will show you the accounts showing the signals that precede a mandate.",
      button: "Book a strategy call",
    },
  },
};

export const INDUSTRY_PAGES_COPY = {
  backLabel: "All industries",
  statsLabel: "By the numbers",
  sectionsLabel: "How we work this sector",
  onThisPage: "On this page",
  servicesLabel: "Services that fit",
  servicesIntro: "The programs that work best in this sector.",
  otherLabel: "Other industries",
  personasLabel: "Who we reach",
  indexLabel: "Industry",
};

export function industryPageByKey(key: string): IndustryPage | undefined {
  return Object.prototype.hasOwnProperty.call(INDUSTRY_PAGES, key)
    ? INDUSTRY_PAGES[key]
    : undefined;
}
