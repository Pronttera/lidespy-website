// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import Thing from "./FINAL_client_v2";

// ALL the industry data. d[i][0] = key, d[i][1] = name ... (see below, dont change order!!!)
// 0 key 1 name 2 desc 3 personas 4 summary 5 eyebrow 6 lead 7 accent 8 intro 9 stats 10 sections 11 services 12 cta
const d: any = [
  ["technology", "Technology", "IT buyers, vendors, ISVs, managed service providers", ["CTO / CIO","IT Director","VP Engineering"], "IT buyers, vendors, ISVs and managed service providers, reached through technical and commercial evaluation alike.", "Industry 01 · Technology", "Reach technical buyers", "on their own terms.",
   "Technology buyers research thoroughly, distrust marketing language and bring engineers into the evaluation early. Campaigns here work when they respect that — specific, technically credible and patient with a long committee.",
   [["9", "Committee roles mapped per account"], ["3–9 mo", "Typical evaluation cycle"], ["50+", "Countries covered"], ["95%+", "Verified deliverability on delivered records"]],
   [
    ["who-we-reach", "The committee behind a technology purchase", "Almost no technology deal is signed by one person. The evaluator who tests it, the architect who has to live with it and the executive who signs it want completely different things — and reaching only one of them is why deals stall in evaluation.", ["CTO, CIO and VP Engineering for the strategic case","IT directors and architects for the technical evaluation","Platform and operations leads who inherit the system","Procurement and vendor management on commercial terms"]],
    ["buying-cycle", "Why the cycle runs long here", "Technology buyers are replacing or integrating something that already works, so the cost of being wrong is high and the evaluation is correspondingly slow. Campaigns built on a one-month cadence run out before the committee has assembled.", ["Integration and migration risk raised early in evaluation","Proof-of-concept stages that pause outbound momentum","Security and procurement review as a distinct late stage","Programs paced across quarters, not weeks"]],
    ["what-works", "The campaigns that actually land", "Technical audiences reward specificity and punish vagueness. Architecture-level content, benchmark data and honest comparison material outperform brand-led messaging by a wide margin in this sector.", ["Technical content syndication into active research","Benchmark and comparison assets that survive scrutiny","ABM into named accounts with a stack you integrate with","Webinars with an engineer presenting, not a marketer"]],
    ["data-and-targeting", "Targeting on the stack, not just the firmographics", "Company size and industry tell you very little about whether a technology buyer is a fit. What they currently run does. Technographic targeting is the difference between a relevant approach and an obvious mass mailing.", ["Technographic filters on current stack and tooling","Displacement targeting against named incumbent products","Intent monitoring on category and competitor research","Verified direct contact for technical decision-makers"]]
   ],
   ["demand-generation","abm","content-syndication"], ["Reach technology buyers who are already evaluating.", "Tell us the stack you integrate with or displace, and we will show you how many accounts are researching right now.", "Book a strategy call"]],
  ["saas", "SaaS", "Product-led and sales-led SaaS companies at every stage", ["CMO","Head of Growth","RevOps"], "Product-led and sales-led SaaS companies at every stage, from first pipeline engine to enterprise motion.", "Industry 02 · SaaS", "Pipeline that keeps pace", "with the growth plan.",
   "SaaS lives on predictable pipeline coverage against a number that resets every quarter. We build the demand engine to that rhythm — enough volume to cover the target, qualified tightly enough that the coverage is real.",
   [["4–6 wks", "From brief to first delivered leads"], ["3", "Pipeline coverage ratio most teams plan to"], ["Weekly", "Lead delivery and reporting"], ["100%", "Off-criteria leads replaced"]],
   [
    ["who-we-reach", "Who signs off on SaaS spend now", "Budget scrutiny changed the SaaS committee. The economic buyer is joined by finance, security and often a procurement function that did not exist in the deal three years ago — and each needs a different case made to them.", ["CMO, VP Marketing and Head of Growth on the commercial case","RevOps on data, integration and reporting fit","Finance on renewal terms and total cost","Security review as a standard late-stage gate"]],
    ["buying-cycle", "Quarterly pressure, longer cycles", "The tension in SaaS demand generation is a quarterly target against a lengthening cycle. Programs that only chase in-quarter deals starve the following quarter, so we build coverage on two horizons at once.", ["Near-term volume for the current quarter's coverage","Longer-horizon nurture for deals landing next quarter","Pipeline coverage tracked against the target, not raw leads","Seasonality and budget cycles built into the calendar"]],
    ["what-works", "What produces coverage in SaaS", "Category-defining content and competitive comparison work at the top; appointment generation and ABM carry the enterprise motion. Most SaaS programs need both because the segments buy so differently.", ["Content syndication for self-serve and mid-market volume","Appointment generation for the enterprise segment","Competitor displacement plays against renewal timing","Webinars and product-led events to fill the mid-funnel"]],
    ["data-and-targeting", "Targeting by stack, stage and signal", "A Series A and a Series D SaaS buyer are not the same customer. Funding stage, headcount trajectory and current tooling separate the segments far better than industry codes do.", ["Funding stage and headcount growth as fit signals","Technographic targeting on adjacent and competing tools","Hiring signals as an indicator of budget movement","Existing customers and open opportunities suppressed"]]
   ],
   ["demand-generation","appointment-generation","email-marketing"], ["Cover the number with pipeline you can trust.", "Tell us the target and the segment, and we will model the volume and coverage it takes to get there.", "Book a strategy call"]],
  ["cybersecurity", "Cybersecurity", "Security vendors targeting CISO, SOC, and IT security teams", ["CISO","SOC Lead","Risk & Compliance"], "Security vendors reaching CISOs, SOC teams and risk functions with education-first, credible outreach.", "Industry 03 · Cybersecurity", "Reach security buyers", "who distrust vendors.",
   "Security buyers are professionally sceptical, heavily marketed to and quick to dismiss anything that reads as pressure. This sector rewards education, credibility and patience more than any other we work in.",
   [["6–12 mo", "Typical evaluation cycle"], ["9", "Committee roles mapped per account"], ["0", "Fear-based messaging"], ["Monthly", "Account engagement reporting"]],
   [
    ["who-we-reach", "The security buying committee", "Security purchases pull in more of the organisation than most. The CISO owns the decision, but the SOC lead who will operate the tool and the compliance officer who must evidence it both hold a veto.", ["CISO and VP Security on strategy and budget","SOC leads and analysts who operate the tooling daily","Risk and compliance on evidencing and audit","IT and infrastructure on deployment impact"]],
    ["buying-cycle", "Credibility first, and it takes time", "A security buyer's default assumption is that your claims are overstated. Trust is built through independent validation and peer evidence over months — outbound that skips that stage tends to be blocked rather than ignored.", ["Third-party validation and analyst coverage carry weight","Peer and community reference matters more than case studies","Budget often tied to audit findings or an incident","Long nurture runs expected before a first conversation"]],
    ["what-works", "Education-first programs", "Threat research, practical frameworks and honest capability comparisons earn attention here. Fear-based messaging gets the sender dismissed — this audience has seen every variant of it and reads it as a lack of substance.", ["Threat research and practitioner-level technical content","Framework and compliance-mapping assets (NIST, ISO, DORA)","Webinars with practitioners rather than product marketing","ABM against accounts with a visible compliance driver"]],
    ["data-and-targeting", "Targeting and hygiene in a suspicious inbox", "Security teams scrutinise inbound mail more carefully than any other audience, and a poorly authenticated send does lasting reputational damage. Deliverability practice here has to be exemplary before volume is even considered.", ["SPF, DKIM and DMARC verified before any send","Technographic targeting on current security stack","Compliance-driven trigger events used as timing signals","Conservative volume and frequency caps by design"]]
   ],
   ["content-syndication","abm","audience-intelligence"], ["Earn attention from buyers who distrust marketing.", "We will show you the education-first program that opens conversations with security teams without burning credibility.", "Book a strategy call"]],
  ["cloud", "Cloud & Infrastructure", "Cloud platforms, hosting, and DevOps tools", ["Head of Infrastructure","DevOps Lead","Platform Eng"], "Cloud platforms, hosting and DevOps tooling, reached through the engineers who evaluate and the executives who fund.", "Industry 04 · Cloud & Infrastructure", "Reach the engineers", "who make the call.",
   "Infrastructure decisions are made bottom-up more often than in any other category. The engineer who trials the tool drives the outcome, and the campaign has to reach them without patronising them.",
   [["Bottom-up", "Where most evaluations start"], ["3–6 mo", "Trial to commercial commitment"], ["50+", "Countries covered"], ["0", "Gated content for practitioners"]],
   [
    ["who-we-reach", "Practitioners first, budget second", "The person who decides is often the one who ran the trial on a Friday afternoon. Reaching only the executive misses the evaluation entirely; reaching only the practitioner leaves nobody able to sign.", ["Platform engineers and DevOps leads who run the trial","Heads of infrastructure who standardise the choice","CTOs and VPs Engineering who release the budget","FinOps and procurement on committed spend"]],
    ["buying-cycle", "Adoption before purchase", "The commercial conversation usually happens after the technology is already in use. That inverts the funnel: the job is to be findable and trialable early, then to arrive with a commercial case once usage is real.", ["Self-serve trial as the true first conversion point","Usage growth as the signal that a deal is available","Migration cost and lock-in as the central objection","Commercial outreach timed to consumption milestones"]],
    ["what-works", "Documentation, benchmarks and proof", "This audience reads documentation and runs benchmarks. Content that is genuinely useful without a form in front of it builds the reach; the gated material comes later, aimed at the funding conversation rather than the practitioner.", ["Ungated technical content and reference architectures","Independent benchmark and cost-comparison material","Technical webinars and live migration walkthroughs","Executive-level TCO content for the funding case"]],
    ["data-and-targeting", "Targeting on infrastructure signals", "Firmographics say almost nothing here. What a company currently runs, how fast it is scaling and whether it is hiring platform engineers say almost everything.", ["Technographic targeting on current cloud and tooling","Scaling and hiring signals as budget indicators","Displacement targeting against incumbent platforms","Verified contact for engineering and platform roles"]]
   ],
   ["demand-generation","content-syndication","b2b-data"], ["Reach the practitioners who decide.", "Tell us what you displace or integrate with, and we will map the accounts running it today.", "Book a strategy call"]],
  ["fintech", "FinTech", "Banking, insurance, payments, and financial services technology", ["CFO","Treasury","Head of Payments"], "Banking, insurance, payments and financial technology, reached with compliance-aware programs built for scrutiny.", "Industry 05 · FinTech", "Reach financial buyers", "under real scrutiny.",
   "Financial services buyers operate under regulatory obligation, and every vendor decision carries audit consequences. Campaigns here have to be precise, compliant and prepared for a procurement process that is genuinely adversarial.",
   [["9–18 mo", "Typical enterprise cycle"], ["100%", "Lawful basis documented per region"], ["9", "Committee roles mapped per account"], ["Weekly", "Delivery and reporting cadence"]],
   [
    ["who-we-reach", "A committee with a regulator behind it", "Financial buying committees include functions that exist to say no. Risk, compliance and vendor management are not obstacles to route around — they are stakeholders who need their own evidence.", ["CFO, treasury and heads of payments on the commercial case","Risk and compliance on regulatory exposure","CISO and third-party risk on vendor assessment","Procurement on contract terms and exit provisions"]],
    ["buying-cycle", "Long, gated and evidence-driven", "Deals move through formal gates with documentation requirements at each one. The cycle is measured in quarters, and pipeline forecasting that assumes otherwise consistently disappoints.", ["Formal vendor risk assessment as a distinct stage","Proof of regulatory alignment required early","Budget cycles tied to fiscal and audit calendars","Incumbent displacement slowed by migration risk"]],
    ["what-works", "Programs built for a regulated audience", "Regulatory change is the most reliable trigger in this sector. Content that helps a team meet an obligation earns a conversation that a product pitch will not.", ["Regulatory-change content mapped to specific obligations","Peer benchmarking against comparable institutions","ABM into named institutions with a compliance driver","Executive roundtables in place of open webinars"]],
    ["data-and-targeting", "Compliance is a targeting constraint, not a footnote", "Outreach into financial services is scrutinised, and consent provenance may genuinely be asked for. Every record we deliver into this sector carries its lawful basis and source with it.", ["Lawful basis documented per region before launch","Consent source and date attached to every record","Institution-type and regulatory-regime targeting","Suppression maintained rigorously across programs"]]
   ],
   ["abm","audience-intelligence","b2b-data"], ["Reach regulated buyers without compliance risk.", "We will show you the audience we can reach in your target institutions, and the lawful basis behind it.", "Book a strategy call"]],
  ["healthcare", "Healthcare", "Health IT, medical devices, clinical software, and digital health", ["Clinical IT","Hospital Admin","Procurement"], "Health IT, medical devices, clinical software and digital health, reached across clinical and administrative committees.", "Industry 06 · Healthcare", "Reach clinical and", "administrative buyers.",
   "Healthcare purchases answer to clinicians, administrators and procurement at once, under privacy rules that shape what outreach can look like. The cycles are long and the committee is genuinely divided in its priorities.",
   [["12–18 mo", "Typical health system cycle"], ["9", "Committee roles mapped per account"], ["100%", "Lawful basis documented per region"], ["Monthly", "Account engagement reporting"]],
   [
    ["who-we-reach", "Clinicians and administrators want different things", "A clinical lead is asking whether it improves care and fits the workflow; an administrator is asking what it costs and what it replaces. A single message aimed at both usually persuades neither.", ["Clinical IT and informatics leads on workflow fit","Hospital administrators and COOs on cost and capacity","Procurement and group purchasing on contracting","Privacy and security officers on data handling"]],
    ["buying-cycle", "Committee-heavy and calendar-bound", "Decisions pass through committees that meet monthly or quarterly, so momentum is structurally limited. Programs are paced to that reality rather than pushing against it.", ["Formal committee review as a fixed pacing constraint","Capital versus operational budget routes differ sharply","Pilot-before-purchase as the norm in clinical settings","Integration with existing records systems raised early"]],
    ["what-works", "Evidence, outcomes and peer proof", "Clinical audiences respond to outcome evidence and peer institutions, not to product claims. Material that helps a team make an internal case travels further than material that pitches.", ["Outcome and efficiency evidence from comparable institutions","Content built to support an internal business case","Clinical webinars and CPD-adjacent education","ABM into named systems and hospital groups"]],
    ["data-and-targeting", "Privacy-aware targeting", "Healthcare outreach touches a sector where privacy expectations are high and institutional. We target roles and institutions with documented sourcing and stay well inside professional norms on frequency.", ["Institution-type and bed-size targeting for health systems","Role-level targeting across clinical and administrative lines","Documented source and lawful basis on every record","Conservative frequency capping by design"]]
   ],
   ["abm","content-syndication","audience-intelligence"], ["Reach healthcare buyers on both sides of the committee.", "Tell us which institutions you sell into and we will map the clinical and administrative contacts inside them.", "Book a strategy call"]],
  ["manufacturing", "Manufacturing", "Industrial technology, supply chain, and operational software", ["COO","Plant Manager","Supply Chain"], "Industrial technology, supply chain and operational software, reached through plant-level and executive buyers.", "Industry 07 · Manufacturing", "Reach the plant floor", "and the boardroom.",
   "Manufacturing buyers judge everything against downtime and payback period. The operational people who live with the system and the executives who fund it need different arguments, and both have to be convinced.",
   [["6–12 mo", "Typical evaluation cycle"], ["ROI", "The measure that decides it"], ["50+", "Countries covered"], ["9", "Committee roles mapped per account"]],
   [
    ["who-we-reach", "Operations decides, finance approves", "A plant manager who does not believe a system will survive contact with the floor can end an evaluation regardless of the business case. Operational credibility comes before the financial argument, not after it.", ["COOs and heads of operations on the strategic case","Plant and production managers on practical fit","Supply chain and procurement leads on continuity","Finance on payback period and capital approval"]],
    ["buying-cycle", "Downtime is the real objection", "The question underneath every manufacturing evaluation is what happens to production during changeover. Until that has a credible answer, nothing else in the pitch is being heard.", ["Implementation downtime addressed before features","Pilot on a single line or site before rollout","Capital expenditure cycles that gate timing","Legacy and OT integration raised as a hard constraint"]],
    ["what-works", "Payback, peers and proof on site", "This sector responds to arithmetic and to peers. A credible payback calculation and a comparable plant that made the change are worth more than any amount of positioning.", ["ROI and payback-period content with defensible numbers","Peer case evidence from comparable operations","Trade event and industry webinar promotion","Direct outreach into named plants and groups"]],
    ["data-and-targeting", "Targeting by site, not just by company", "Manufacturing groups buy at group level and at site level, often independently. Targeting the parent alone misses the plant where the actual problem is being felt.", ["Site-level as well as group-level account targeting","Facility size, output and sector filters","Technographic targeting on ERP and MES systems","Verified direct contact for plant-level roles"]]
   ],
   ["demand-generation","appointment-generation","b2b-data"], ["Reach operations and finance with the right argument each.", "Tell us what you replace on the floor and we will map the plants and groups running it.", "Book a strategy call"]],
  ["telecom", "Telecommunications", "Telco vendors, network infrastructure, and connectivity solutions", ["Network Director","CTO","Procurement"], "Telco vendors, network infrastructure and connectivity providers, reached through long procurement-led cycles.", "Industry 08 · Telecommunications", "Reach network buyers", "through a long process.",
   "Telecom procurement is formal, slow and heavily contested, often running through RFPs against a handful of established vendors. Positioning has to happen well before the tender, because by then the outcome is largely set.",
   [["12–24 mo", "Typical carrier cycle"], ["RFP", "How most decisions are made"], ["9", "Committee roles mapped per account"], ["Monthly", "Account engagement reporting"]],
   [
    ["who-we-reach", "Engineering, procurement and the executive sponsor", "Network engineering sets the requirements, procurement runs the process and an executive sponsor decides whether it happens at all. Missing any of the three means arriving at the tender already behind.", ["Network directors and engineering leads on requirements","CTOs and technology officers as executive sponsors","Procurement and vendor management running the process","Operations teams who will run the deployment"]],
    ["buying-cycle", "The tender is decided before it opens", "By the time an RFP is published, the requirements usually reflect conversations that happened months earlier. Being present during requirement-setting matters far more than responding well.", ["Requirement-shaping stage as the decisive window","Vendor shortlists formed long before tender","Interoperability with existing infrastructure as a gate","Multi-year contracts that make displacement rare"]],
    ["what-works", "Technical standing and long-horizon presence", "Credibility in telecom is built through standards participation, technical depth and consistent presence over years. Short campaigns do not register; sustained ABM does.", ["Standards-aware technical content and white papers","Sustained ABM against a small named account set","Industry event and conference-led programs","Executive briefings rather than volume outreach"]],
    ["data-and-targeting", "A small, precisely mapped account set", "There are only so many carriers and network operators in any region. This is the clearest case in our work for depth over volume — every account mapped exhaustively rather than a wide list worked thinly.", ["Exhaustive committee mapping on a small account set","Operator type, region and network-generation targeting","Contract renewal timing tracked where it is visible","Verified direct contact across engineering and procurement"]]
   ],
   ["abm","audience-intelligence","demand-generation"], ["Be in the conversation before the tender opens.", "Tell us which operators you are targeting and we will map the committee inside each one.", "Book a strategy call"]],
  ["professional-services", "Professional Services", "Consulting, advisory, and B2B service providers", ["Managing Partner","Practice Lead","BD Director"], "Consulting, advisory and B2B service firms, where the relationship is the product and reputation drives the deal.", "Industry 09 · Professional Services", "Win work where", "reputation decides.",
   "Professional services firms sell judgement, and buyers choose on credibility and relationship rather than on feature comparison. Demand generation here builds standing and opens conversations — it does not close deals on its own.",
   [["Referral", "Still the strongest channel"], ["3–9 mo", "Typical engagement cycle"], ["50+", "Countries covered"], ["Weekly", "Delivery and reporting cadence"]],
   [
    ["who-we-reach", "Buyers choosing a firm, not a product", "The question is not which capability is better but which firm they trust with a problem that matters. That makes named-partner visibility and demonstrated thinking the substance of the campaign.", ["Managing partners and practice leads as the visible expertise","C-suite buyers commissioning the engagement","Heads of function who scope and shortlist","Procurement on panel arrangements and rates"]],
    ["buying-cycle", "Triggered by events, decided on trust", "Engagements start when something changes — a transaction, a regulation, a leadership move. The firm that is already known and credible at that moment wins; the one that starts marketing afterwards is too late.", ["Trigger events as the practical timing signal","Panel and framework arrangements gating access","Existing relationships weighted heavily in shortlisting","Individual reputation often outweighing firm brand"]],
    ["what-works", "Thinking that demonstrates the judgement", "The most effective asset in this sector is genuinely good thinking published under a named partner. It functions as a work sample, which is exactly what a buyer of judgement is looking for.", ["Point-of-view content published under named partners","Original research that positions the firm as a source","Executive roundtables and invitation-only briefings","Targeted outreach timed to visible trigger events"]],
    ["data-and-targeting", "Targeting on change, not on stack", "There is no technographic signal for needing advice. The useful signals are organisational: leadership changes, transactions, funding events and regulatory exposure.", ["Leadership change and new-appointment monitoring","Transaction, funding and restructuring signals","Regulatory exposure by sector and jurisdiction","Existing client and conflict suppression applied"]]
   ],
   ["gtm-strategy","audience-intelligence","email-marketing"], ["Be the firm they already know when the trigger comes.", "Tell us the practice you are growing and we will show you the accounts showing the signals that precede a mandate.", "Book a strategy call"]]

];

// services lookup (only the ones we need) - from services page
const SVC_OBJ: any = {
  "demand-generation": { nm: "Demand Generation", txt: "We build and execute full-funnel demand generation programs that identify in-market buyers, engage decision-makers across multiple channels, and deliver qualified leads ready for sales follow-up." },
  "content-syndication": { nm: "Content Syndication", txt: "Distribute your best content — whitepapers, eBooks, webinars, reports — to verified B2B audiences actively researching your category. Every content lead meets your ICP filters." },
  "abm": { nm: "Account-Based Marketing (ABM)", txt: "Target your most valuable accounts with precision. We build buying committee maps, identify key decision-makers, and orchestrate coordinated outreach across email, advertising, and human channels." },
  "email-marketing": { nm: "Email Marketing", txt: "Precision B2B email campaigns reaching verified decision-makers at your target accounts. Every campaign is built for deliverability, compliance, and conversion — not just open rates." },
  "audience-intelligence": { nm: "Audience Intelligence", txt: "Before you spend a dollar on outreach, know exactly who to reach. We build verified audience profiles using business intelligence platforms, intent data, and human research to give your campaigns a targeting advantage." },
  "b2b-data": { nm: "High-Intent B2B Data", txt: "Access verified, permission-based B2B contact databases built for outreach. Every record is validated, enriched, and matched to your ICP — no recycled or low-quality lists." },
  "appointment-generation": { nm: "Appointment Generation", txt: "We book qualified sales meetings directly into your team’s calendars. Our SDR and telemarketing team identifies, qualifies, and converts in-market buyers into confirmed appointments." },
  "gtm-strategy": { nm: "GTM Strategy", txt: "Launch new markets, products, or personas with a data-driven go-to-market strategy built by B2B growth experts. We define your ICP, messaging, channel mix, and execution roadmap." },
};

var total = 9 // number of industries

// helper
function findIt(k: any) {
  let res = undefined
  for (var i = 0; i < d.length; i++) {
    if (d[i][0] === k) {
      if (res == undefined) {
        res = d[i]
      }
    }
  }
  return res
}

const isNumberThing = function (value: any) {
  const m = value.match(/^(\d+(?:\.\d+)?)([%+]*)$/);
  if (m) { return { n: parseFloat(m[1]), suffix: m[2] } } else { return null }
}

export function generateStaticParams() {
  return d.map((x: any) => ({ industry: x[0] }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const key = (await params).industry;
  const thing = findIt(key);
  if (!thing) {
    return {};
  } else {
    return {
      title: `B2B Lead Generation for ${thing[1]} · Lidespy`,
      description: thing[8],
      alternates: { canonical: "/industries/" + key },
    };
  }
}

// Here's the updated code with the fix:
export default async function IndustryPage({ params }: any) {
  const key = (await params).industry;
  const x1 = findIt(key);
  if (!x1) notFound();

  let position = -1;
  d.forEach((z: any, i: any) => { if (z[0] === key && position == -1) position = i; });
  const others = d.filter((z: any) => z[0] !== key);
  const services = x1[11].map((k: any) => (SVC_OBJ[k] ? { key: k, name: SVC_OBJ[k].nm, overview: SVC_OBJ[k].txt } : undefined)).filter((s: any) => s !== undefined);
  const nn = String(position + 1).padStart(2, "0");
  const temp = [...x1[10].map((s: any) => s[1]), ...x1[10].map((s: any) => s[1])];

  return (
    <div
      data-gsap-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <Thing t={4} />
      <Thing t={5} />
      <Thing t={1} a="enable" />

      {/* hero */}
      <section
        data-hero
        className="dc-rules-dark relative overflow-hidden bg-ink text-cream"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[30%] -left-[14%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(225,27,34,0.30),transparent_62%)] blur-[14px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[18%] -bottom-[46%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.14),transparent_66%)]"
        />

        <div className="relative mx-auto max-w-[1280px] page-x">
          <div
            aria-hidden
            data-hero-ghost
            className="pointer-events-none absolute top-[44px] right-8 hidden leading-[0.8] font-medium tracking-[-0.06em] text-transparent select-none lg:block [-webkit-text-stroke:1.5px_rgba(255,90,79,0.26)] [font-size:clamp(180px,18vw,260px)]"
          >
            {nn}
          </div>

          <div
            data-hero-fade
            className="flex items-center justify-between gap-4 border-b border-cream/12 py-5 text-[11px] font-semibold tracking-[0.14em] uppercase"
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2.5 text-cream/55 transition-colors hover:text-coral"
            >
              <span className="text-coral">←</span>
              {"All industries"}
            </Link>
            <div className="flex items-center gap-3 text-cream/45">
              <span className="hidden sm:inline">{"Industry"}</span>
              <span className="tabular-nums text-cream">
                {nn}
                <span className="text-cream/35"> / {String(d.length).padStart(2, "0")}</span>
              </span>
            </div>
          </div>

          <div className="relative grid items-end gap-[clamp(40px,5vw,88px)] pt-[clamp(36px,4.5vw,68px)] pb-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
            <div className="flex flex-col gap-[clamp(22px,2.6vw,36px)]">
              <div data-hero-fade className="self-start">
                <div className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase ${true ? "border-coral/45 text-coral" : "border-brand/45 text-brand"}`}>
                  {x1[5]}
                </div>
              </div>

              <h1
                data-hero-title
                className="m-0 text-[clamp(42px,6.2vw,96px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-balance">
                    {x1[6]}
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block text-coral text-balance">
                    {x1[7]}
                  </span>
                </span>
              </h1>

              <p
                data-hero-fade
                className="m-0 max-w-[54ch] text-[clamp(16px,1.3vw,19.5px)] leading-[1.6] text-cream/68 text-pretty"
              >
                {x1[8]}
              </p>

              <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
                <Link
                  href="/contact"
                  data-btn={"red"}
                  className="inline-flex items-center gap-4 rounded-[2px] font-semibold tracking-[0.04em] uppercase py-2 pr-2 pl-7 text-[13px] bg-[#e11b22] text-white"
                >
                  {x1[12][2]}
                  <span
                    data-chip
                    className="inline-flex items-center justify-center rounded-ui bg-ink text-coral h-12 w-12 text-[17px]"
                  >
                    <span className="inline-block">→</span>
                  </span>
                </Link>
                <Link
                  href="#how"
                  data-textlink
                  className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase"
                >
                  {"How we work this sector"}
                  <span data-arrow className="text-[16px] text-coral">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                data-hero-panel
                className="rounded-card border border-cream/14 bg-cream/[0.04] px-[clamp(22px,2vw,30px)] pt-5 pb-2 backdrop-blur-[2px]"
              >
                <div className="flex items-center justify-between border-b border-cream/14 pb-4 text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                  <span className="text-cream/45">{"By the numbers"}</span>
                  <span className="inline-flex items-center gap-2 text-coral">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                    Lidespy
                  </span>
                </div>
                {x1[9].map((s: any) => {
                  var c = isNumberThing(s[0]);
                  return (
                    <div
                      key={s[1]}
                      data-hero-row
                      className="relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5 py-[15px]"
                    >
                      <span
                        data-hero-rule
                        className="absolute inset-x-0 bottom-0 h-px bg-cream/12"
                      />
                      <div className="text-[13px] leading-[1.4] text-cream/62 text-pretty">
                        {s[1]}
                      </div>
                      <div
                        data-count={c ? c.n : undefined}
                        data-suffix={c ? c.suffix : undefined}
                        className="text-[clamp(26px,2.4vw,36px)] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral"
                      >
                        {s[0]}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* contents (always there) */}
              {true && (
                <div
                  data-hero-panel
                  className="rounded-card border border-cream/12 bg-cream/[0.025] px-[clamp(22px,2vw,30px)] pt-[18px] pb-2"
                >
                  <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                    {"On this page"}
                  </div>
                  {x1[10].map((it: any, i: any) => (
                    <a
                      key={it[0]}
                      href={`#${it[0]}`}
                      className="group flex items-baseline gap-3 border-b border-cream/10 py-[8px] text-[13.5px] text-cream/85 transition-colors last:border-b-0 hover:text-coral"
                    >
                      <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-coral/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1 leading-[1.3]">{it[1]}</span>
                      <span className="translate-x-0 text-coral opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-cream/12 py-3.5">
          <div className="ld-marquee ld-marquee-slow">
            {temp.map((tt: any, i: any) => (
              <span
                key={i}
                className="inline-flex items-center gap-[18px] px-[22px] text-[11.5px] tracking-[0.12em] whitespace-nowrap text-cream/50 uppercase"
              >
                {tt}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* personas */}
      <section className="border-b border-ink/12 bg-panel">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[clamp(20px,3vw,56px)] page-x py-[clamp(28px,3vw,44px)] lg:grid-cols-[minmax(200px,280px)_minmax(0,1fr)]">
          <div>
            <div className={"inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase " + "border-brand/45 text-brand"}>
              {"Who we reach"}
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-wrap gap-2.5">
              {x1[3].map((p: any) => (
                <span
                  key={p}
                  className="rounded-ui border border-ink/14 bg-white px-3.5 py-2 text-[13.5px] text-ink"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="m-0 max-w-[60ch] text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
              {x1[2]}
            </p>
          </div>
        </div>
      </section>

      {/* section run thing */}
      <section
        id="how"
        className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(48px,5vw,84px)]"
      >
        <div className="grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-26 lg:self-start">
            <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-[#be1622]/45 text-[#be1622]">
              {"How we work this sector"}
            </div>
            <div className="mt-6 flex flex-col">
              {x1[10].map((s: any, i: any) => (
                <a
                  key={s[0]}
                  href={`#${s[0]}`}
                  className="flex items-baseline gap-3 border-b border-ink/12 py-3 text-[14px] leading-[1.35] text-muted transition-colors hover:text-brand"
                >
                  <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">{s[1]}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            {x1[10].map((s: any, i: any) => (
              <article
                key={s[0]}
                id={s[0]}
                className="scroll-mt-24 border-b border-ink/15 py-[clamp(32px,3.5vw,52px)] first:pt-0"
              >
                <div className="mb-5 flex items-center gap-3.5">
                  <span className="text-[12px] font-semibold tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
                </div>
                <h2 className="m-0 text-[clamp(24px,2.8vw,38px)] leading-[1.08] font-medium tracking-[-0.028em] text-pretty">
                  {s[1]}
                </h2>
                <p className="mt-4 mb-0 max-w-[62ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
                  {s[2]}
                </p>
                <div className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {s[3].map((pt: any) => (
                    <div
                      key={pt}
                      className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-ink"
                    >
                      <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand">
                        <path d="m4 12 6 6L20 6" />
                      </svg>
                      <span className="text-pretty">{pt}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* services cards (compact) */}
      <section className="bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
          <div className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand`}>
            {"Services that fit"}
          </div>
          <p className="mt-5 mb-8 max-w-[52ch] text-[clamp(17px,1.6vw,24px)] leading-[1.35] font-medium tracking-[-0.02em] text-ink text-pretty">
            {"The programs that work best in this sector."}
          </p>
          <div className={"grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] "}>
            {services.map((s: any) => (
              <Link
                key={"/services/" + s.key + s.name}
                href={"/services/" + s.key}
                className="flex flex-col gap-3 rounded-card border border-ink/12 bg-white px-[22px] pt-[22px] pb-6 transition-colors hover:border-brand/45"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink text-pretty">
                    {s.name}
                  </div>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand opacity-75">
                    <path d="M3 12h17M14 6l6 6-6 6" />
                  </svg>
                </div>
                <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">
                  {s.overview}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* other industries (feature) */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,72px)]">
        <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
          {"Other industries"}
        </div>
        <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
          {others.map((o: any) => (
            <Link
              key={"/industries/" + o[0] + o[1]}
              href={"/industries/" + o[0]}
              className="flex flex-col gap-3 rounded-card border border-ink/14 px-[26px] pt-6 pb-7 transition-colors hover:border-brand/45 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-[clamp(20px,2vw,26px)] leading-[1.15] font-medium tracking-[-0.022em] text-ink text-pretty">
                  {o[1]}
                </div>
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="mt-1.5 shrink-0 text-brand">
                  <path d="m9 5 7 7-7 7" />
                </svg>
              </div>
              <div className="text-[14px] leading-[1.6] text-muted text-pretty">
                {o[4] ?? o[2]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">
            {x1[12][0]}
          </h2>
          <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            {x1[12][1]}
          </p>
          <Link
            href="/contact"
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            {x1[12][2]}
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* footer (copied from home) */}
      <footer className="border-t border-ink/15 bg-cream text-ink">
        <div className="mx-auto grid max-w-[1280px] gap-7 page-x pt-14 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.2fr)_repeat(4,minmax(140px,1fr))] lg:gap-12">
          <div className="flex flex-col gap-3.5">
            <Image
              src="/lidespy-logo.png"
              alt="Lidespy"
              width={997}
              height={304}
              className="h-[30px] w-auto self-start"
            />
            <div className="text-[12px] font-semibold text-brand">
              Leads That Drive Growth
            </div>
            <p className="m-0 max-w-[280px] text-[12px] leading-[1.6] text-muted-2">
              B2B demand generation for technology, SaaS and enterprise revenue
              teams. Headquartered in Pune, India. Serving clients globally.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/lidespy/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted transition-colors hover:text-brand"
              >
                LinkedIn
                <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
              <a
                href="mailto:info@lidespy.com"
                className="text-[11px] font-semibold text-muted transition-colors hover:text-brand"
              >
                info@lidespy.com
              </a>
            </div>
          </div>

          {[
            ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", 1]]],
            ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]],
            ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]],
            ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]],
          ].map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col[0]}
              </div>
              {col[1].map((l: any) => (
                <Link
                  key={l[0]}
                  href={l[1]}
                  className={`text-[12.5px] transition-colors hover:text-brand ${
                    l[2] ? "font-semibold text-brand" : "text-muted"
                  }`}
                >
                  {l[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link key="/privacy" href="/privacy" className="text-muted-2 transition-colors hover:text-brand">Privacy Policy</Link>
            <Link key="/terms" href="/terms" className="text-muted-2 transition-colors hover:text-brand">Terms of Service</Link>
            <Link key="/cookies" href="/cookies" className="text-muted-2 transition-colors hover:text-brand">Cookie Policy</Link>
            <Thing t={3} cls="cursor-pointer text-muted-2 transition-colors hover:text-brand" />
            <Thing t={2} />
          </div>
        </div>
      </footer>
    </div>
  );
}
