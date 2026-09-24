// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"
import { notFound } from "next/navigation";
import { Fragment, ReactNode } from "react";
import Temp2Final from "./temp2";

// all the keys (13) - must match the list in the data below!!
const KEYS_LIST = [
  "demand-generation",
  "content-syndication",
  "abm",
  "email-marketing",
  "audience-intelligence",
  "b2b-data",
  "webinar-promotion",
  "appointment-generation",
  "gtm-strategy",
  "ai-visibility",
  "performance-marketing",
  "digital-marketing",
  "website-design",
]

export function generateStaticParams() {
  return KEYS_LIST.map((service) => ({ service }));
}

var DATA_FINAL: any = [
    ["Demand Generation", "demand-generation", "Start a demand generation campaign", "We build and execute full-funnel demand generation programs that identify in-market buyers, engage decision-makers across multiple channels, and deliver qualified leads ready for sales follow-up.", ["Target account list building","Campaign strategy and execution plan","Multi-channel outreach sequences","Weekly lead delivery reports","Pipeline contribution tracking"], ["ICP-matched audience targeting","Intent data activation for in-market buyers","Multi-channel campaign orchestration","Qualified lead delivery with full reporting","Scalable from SMB to enterprise"]],
    ["Content Syndication", "content-syndication", "Launch a content syndication campaign", "Distribute your best content — whitepapers, eBooks, webinars, reports — to verified B2B audiences actively researching your category. Every content lead meets your ICP filters.", ["Content campaign setup and management","Audience segmentation and filtering","Lead capture and qualification","CPL or flat-fee pricing options","Lead delivery in your preferred format (CSV, CRM sync)"], ["Reach buyers in active research phase","ICP-matched content distribution","BANT or custom lead qualification","Guaranteed lead volume delivery","GDPR and CAN-SPAM compliant"]],
    ["Account-Based Marketing (ABM)", "abm", "Build your ABM program", "Target your most valuable accounts with precision. We build buying committee maps, identify key decision-makers, and orchestrate coordinated outreach across email, advertising, and human channels.", ["Target account list (TAL) build","Decision-maker identification and contact data","ABM campaign orchestration plan","Account engagement reporting","Buying committee coverage tracking"], ["Named account targeting at scale","Buying committee mapping and multi-threading","Coordinated multi-channel ABM plays","Intent-driven account prioritization","Sales and marketing alignment built-in"]],
    ["Email Marketing", "email-marketing", "Launch your email campaign", "Precision B2B email campaigns reaching verified decision-makers at your target accounts. Every campaign is built for deliverability, compliance, and conversion — not just open rates.", ["List build and segmentation","Email copy and template creation","Campaign deployment and monitoring","Deliverability and performance reporting","Lead handoff and follow-up sequencing"], ["Verified B2B contact database access","Deliverability-optimized campaign setup","Personalized messaging at scale","A/B testing and optimization","GDPR, CAN-SPAM, and CASL compliant"]],
    ["Audience Intelligence", "audience-intelligence", "Get your audience intelligence report", "Before you spend a dollar on outreach, know exactly who to reach. We build verified audience profiles using business intelligence platforms, intent data, and human research to give your campaigns a targeting advantage.", ["Audience intelligence report","Verified contact database by segment","Intent data insights summary","ICP scoring model","Recommended channel strategy"], ["ICP definition and refinement","Buying committee identification","Intent signal monitoring","Firmographic and technographic profiling","Competitor audience mapping"]],
    ["High-Intent B2B Data", "b2b-data", "Request a data sample", "Access verified, permission-based B2B contact databases built for outreach. Every record is validated, enriched, and matched to your ICP — no recycled or low-quality lists.", ["Custom database build to your ICP","CSV or CRM-ready format","Data fields: Name, Title, Company, Email, Phone, LinkedIn, Tech Stack","Quality guarantee: verified deliverability rate","Suppression file application"], ["Verified work emails and direct dials","Firmographic and technographic data","Intent-scored contact records","Custom list builds by industry, title, region","Regular refresh and validation"]],
    ["Webinar & Event Promotion", "webinar-promotion", "Promote your next webinar", "Fill your webinars, virtual events, and in-person conferences with qualified registrants. We drive attendance from your ICP using email, content syndication, and targeted outreach.", ["Webinar promotion campaign setup","Registration landing page optimization advice","Audience targeting and list build","Registration delivery and reporting","Post-event attendee list with engagement data"], ["Guaranteed registration targets","ICP-matched audience promotion","Multi-channel promotion (email, content, SDR)","Pre-event and reminder sequences","Post-event lead nurturing support"]],
    ["Appointment Generation", "appointment-generation", "Start appointment generation", "We book qualified sales meetings directly into your team’s calendars. Our SDR and telemarketing team identifies, qualifies, and converts in-market buyers into confirmed appointments.", ["Target account and contact list build","Outreach sequence (email + phone + LinkedIn)","Qualification script development","Appointment booking and calendar management","Weekly appointment report with notes"], ["Outbound prospecting and qualification","Multi-touch outreach (phone, email, LinkedIn)","BANT or custom qualification criteria","Calendar integration and booking","Full call recording and notes delivered"]],
    ["GTM Strategy", "gtm-strategy", "Request a GTM strategy session", "Launch new markets, products, or personas with a data-driven go-to-market strategy built by B2B growth experts. We define your ICP, messaging, channel mix, and execution roadmap.", ["GTM strategy document","ICP and persona profiles","Messaging playbook","Channel and campaign recommendations","90-day launch roadmap"], ["ICP and persona definition","Messaging framework development","Channel strategy and budget allocation","Competitive positioning","Launch timeline and execution plan"]],
    ["AI Visibility", "ai-visibility", "Improve your AI visibility", "Ensure your brand, products, and thought leadership appear in AI-generated answers, recommendations, and search summaries. We optimize your content and digital presence for LLM and AI search visibility.", ["AI visibility audit report","Content optimization recommendations","AI-optimized content creation","Monthly AI visibility tracking report","Competitor AI share-of-voice analysis"], ["AI search and LLM content optimization","Brand mention tracking in AI tools","Content strategy for AI discoverability","Schema and structured data optimization","Competitive AI visibility benchmarking"]],
    ["Digital & Performance Marketing", "performance-marketing", "Launch a performance marketing campaign", "Paid search, display, programmatic, and social advertising campaigns managed for maximum ROI. We run performance marketing programs built around pipeline contribution, not impressions.", ["Campaign setup and management","Ad creative and copywriting","Audience targeting and bid strategy","Weekly performance reporting","Monthly strategy and optimization review"], ["Google Ads and paid search management","LinkedIn and B2B social advertising","Programmatic and display campaigns","Landing page and conversion optimization","Full attribution and ROI reporting"]],
    ["Digital Marketing", "digital-marketing", "Build your digital marketing engine", "Own the channels your buyers already search, read and scroll. We run organic search, social, content and marketing automation as one programme, so your brand keeps showing up between campaigns — not only while paid spend is live.", ["Digital channel audit and strategy","SEO and content programme","Organic social and LinkedIn management","Marketing automation and nurture journeys","Monthly digital performance reporting"], ["Always-on visibility between paid campaigns","SEO and content built around buyer search intent","Organic LinkedIn and social presence with a real cadence","Marketing automation and nurture that keeps leads warm","One reporting view across every owned channel"]],
    ["Technology Development", "website-design", "Request a website quote", "Modern, conversion-optimized B2B websites designed to generate leads and communicate your value proposition. From landing pages to full website builds.", ["Website discovery and wireframes","UI/UX design (desktop + mobile)","Front-end and back-end development","CMS setup and content migration","QA, launch, and post-launch support"], ["Conversion-focused B2B website design","Lead capture and form optimization","CMS development (WordPress, Webflow)","SEO-ready architecture","Mobile-first, fast-loading builds"]],
]

// page data (dont touch!!!)
const stuff: any = {
  "demand-generation": {
    e: "Service 01 · Demand Generation", tl: "Demand generation that ends in", ta: "sales-ready leads.",
    i: "We identify in-market buyers, engage the whole decision-making committee across channels, and hand your team leads that meet criteria you signed off before the campaign started.",
    s: [["4–6 wks", "From brief to first delivered leads"], ["6", "Channels available in the mix"], ["Weekly", "Lead delivery and reporting"], ["100%", "Off-criteria leads replaced"]],
    d: {
      "Target account list building": ["The program starts with the list, because everything downstream inherits its quality. We build the target account list from your closed-won pattern, size it against your budget and coverage goals, and verify every record before it enters a sequence.",
        ["ICP rebuilt from closed-won and closed-lost evidence","Account tiering so spend follows the accounts worth it","Buying committee contacts named per account","Suppression applied against your existing pipeline and customers"]],
      "Campaign strategy and execution plan": ["Before anything sends, you get the plan: which accounts, which channels, which messages, in what order, on what dates, against which targets. One document your marketing and sales leads can both sign off.",
        ["Channel mix modelled on your deal size and cycle length","Message and offer progression mapped per funnel stage","Week-by-week calendar with volume and lead targets","Qualification criteria agreed and written down up front"]],
      "Multi-channel outreach sequences": ["Email, content, phone and LinkedIn touches run off one timeline, so each contact builds on the last. A prospect who downloads a report gets a call that references it — not a cold pitch from a channel that never saw the download.",
        ["7–14 coordinated touches per account before qualification","Behaviour-triggered branches on open, download and reply","Frequency capped per contact and per account","Full call recordings and notes delivered with every meeting"]],
      "Weekly lead delivery reports": ["Leads arrive weekly in your format of choice, each with the qualification notes behind it. Nothing is delivered in bulk at the end of a month, and nothing arrives without a reason attached.",
        ["CSV or direct CRM sync, campaign and source stamped","Qualification notes and call context per record","Rejected leads replaced at no cost, reasons fed back to targeting","Running totals against the volume targets you agreed"]],
      "Pipeline contribution tracking": ["We track delivered leads through acceptance, meeting held, opportunity created and closed-won — so the program is reported in the same terms your revenue team already uses.",
        ["Lead-to-opportunity and opportunity-to-won conversion tracked","Cost per accepted lead, per meeting and per opportunity","Monthly pipeline contribution reported next to spend","Clear read on what to scale, what to fix and what to stop"]]
    },
    p: [
      ["Brief and ICP build", "We review your closed-won data, agree the ICP and write the qualification criteria both teams will be measured against."],
      ["Audience and plan", "The target account list is built and verified; you approve the channel mix, messaging and week-by-week calendar."],
      ["Launch and sequence", "Coordinated outreach begins across the agreed channels, with qualification running continuously rather than at the end."],
      ["Deliver and optimise", "Leads land weekly with notes; budget shifts monthly toward whichever channels are producing accepted pipeline."]
    ],
    f: [
      { q: "How fast do the first leads arrive?", a: "Typically four to six weeks from signed brief — two for ICP work and list build, then the first delivery in the second or third week of live campaigning." },
      { q: "What happens to leads that do not meet the criteria?", a: "They are replaced at no cost. The rejection reason goes back into the targeting model, so the same miss does not repeat." },
      { q: "Can you work inside our CRM?", a: "Yes. Leads sync directly with campaign and source stamped on each record, so attribution works in the system your team already reports from." },
      { q: "Do we have to run every channel?", a: "No. The mix is set by your deal length and committee size — some programs are email and content only, others need SDR outreach from week one." }
    ],
    r: ["content-syndication","abm"]
  },
  "content-syndication": {
    e: "Service 02 · Content Syndication", tl: "Your best content, in front of buyers", ta: "already researching.",
    i: "Whitepapers, eBooks, webinars and reports distributed to verified B2B audiences in active research — with every lead filtered against your ICP before it reaches you.",
    s: [["ICP", "Every lead filtered before delivery"], ["CPL", "Or flat fee — your choice"], ["Guaranteed", "Lead volume commitments"], ["GDPR", "CAN-SPAM and CASL aligned"]],
    d: {
      "Content campaign setup and management": ["We take your existing asset, position it for the audience it needs to reach, and run the campaign end to end — including the promotion copy, the landing experience and the pacing across the flight.",
        ["Asset review and positioning for the target segment","Promotion copy written and tested per segment","Delivery paced across the flight rather than dumped","Ongoing management, no self-serve dashboard to babysit"]],
      "Audience segmentation and filtering": ["The filters are the product. Job title, seniority, company size, industry, region, tech stack — set before launch and enforced on every record, not applied as a best-effort afterthought.",
        ["Firmographic and technographic filters set per campaign","Named-account targeting where you have a list","Competitor and existing-customer suppression applied","Segment-level reporting so you can see which filter performs"]],
      "Lead capture and qualification": ["Every lead that downloads is verified and qualified before it reaches you. Where you need more than a form fill, we add custom qualification questions or a follow-up call to confirm fit and timing.",
        ["BANT or your own custom qualification framework","Custom profiling questions at the point of download","Email and phone validation before handoff","Off-criteria leads replaced, not invoiced"]],
      "CPL or flat-fee pricing options": ["Pay per qualified lead when you want the risk on us and the volume predictable, or take a flat fee when you want the whole flight and the reporting for a fixed number. Both come with the volume commitment in writing.",
        ["Cost-per-lead pricing with an agreed volume commitment","Flat-fee flights for defined campaign windows","Pricing set by filter depth, region and seniority","No charge for leads that fail the agreed criteria"]],
      "Lead delivery in your preferred format (CSV, CRM sync)": ["Leads land the way your team already works — a weekly CSV, a direct CRM sync, or straight into a nurture sequence — with source, asset and consent trail attached to every record.",
        ["CSV, CRM sync or marketing-automation handoff","Asset, campaign and consent source stamped per record","Weekly delivery cadence with running totals","Full audit trail available on request"]]
    },
    p: [
      ["Asset and audience", "We review the content you have, pick the strongest asset for the segment and set the filters every lead will be held to."],
      ["Campaign build", "Promotion copy, qualification questions and delivery format are agreed, and volume targets are committed in writing."],
      ["Flight", "The asset is distributed to in-market audiences and paced across the flight, with segment performance visible throughout."],
      ["Delivery", "Qualified leads arrive weekly with their consent trail; anything off-criteria is replaced before it is invoiced."]
    ],
    f: [
      { q: "What if we do not have a content asset?", a: "We can run against an existing webinar recording or report, or produce the asset with you first — most campaigns launch faster with something you already own." },
      { q: "How is a lead qualified beyond the download?", a: "Custom profiling questions at the point of download, plus a verification step. Where you need BANT confirmed, we add a follow-up call before handoff." },
      { q: "Is the audience really in-market?", a: "Distribution targets audiences actively researching your category. Intent signals sit behind the targeting, and segment-level reporting shows you which ones converted." },
      { q: "How do you handle GDPR?", a: "Lawful basis is documented per region before launch and the consent source travels with every record we deliver." }
    ],
    r: ["demand-generation","email-marketing"]
  },
  "abm": {
    e: "Service 03 · Account-Based Marketing", tl: "Your best accounts, worked with", ta: "actual precision.",
    i: "Buying committee maps, decision-maker identification and coordinated outreach across email, advertising and human channels — ABM that reaches the whole committee instead of one contact who never replies.",
    s: [["9", "Committee roles mapped per account"], ["3–4", "Contacts engaged per account, minimum"], ["Tiered", "1:1, 1:few and 1:many plays"], ["Monthly", "Account engagement reporting"]],
    d: {
      "Target account list (TAL) build": ["The account list is built from fit and intent together — the accounts that look like your best customers and are showing signs of researching now — then tiered so the 1:1 effort goes where it can pay for itself.",
        ["Fit scoring from firmographic, technographic and closed-won data","Intent overlay to prioritise accounts researching now","Tier 1 / 2 / 3 split for 1:1, 1:few and 1:many plays","Existing pipeline and customer accounts suppressed or flagged"]],
      "Decision-maker identification and contact data": ["For every account on the list we name the people, not the personas — verified work emails and direct dials for the economic buyer, the technical evaluator, the end user and procurement.",
        ["Named contacts with verified email and direct dial","Role, seniority and reporting-line context per contact","Enrichment: tenure, tech stack, region, LinkedIn","Records revalidated before each campaign wave"]],
      "ABM campaign orchestration plan": ["One plan covering every channel and every account tier: which play runs where, what each committee role sees, in what order, and where sales takes over from marketing.",
        ["Play design per tier — 1:1, 1:few and 1:many","Message variants written per committee role","Marketing-to-sales handoff points defined per play","Campaign calendar with frequency caps per account"]],
      "Account engagement reporting": ["ABM is measured on accounts, not on clicks. Reporting rolls every touch up to account level so you can see which accounts are warming, which are flat, and which are ready for a sales conversation.",
        ["Account-level engagement score, refreshed weekly","Channel contribution per account, not just per campaign","Warming and stalled account lists for sales prioritisation","Pipeline created and influenced, reported per tier"]],
      "Buying committee coverage tracking": ["The number that predicts whether an ABM deal closes is how many of the committee you have actually engaged. We track coverage per account and flag the gaps while there is still time to close them.",
        ["Coverage tracked by role and seniority per account","Gap alerts when a key role is unengaged","Multi-threading targets set and reported against","Coverage trend shown alongside opportunity progression"]]
    },
    p: [
      ["Account selection", "Fit and intent scoring produce the target account list, tiered by how much investment each account can justify."],
      ["Committee mapping", "We name and verify the decision-makers at every account, and identify where your current coverage has gaps."],
      ["Play orchestration", "Tiered plays launch across email, advertising and human channels, with message variants per committee role."],
      ["Coverage and handoff", "Engagement rolls up per account; warming accounts and coverage gaps go to sales weekly with the context attached."]
    ],
    f: [
      { q: "How many accounts should we target?", a: "It depends on tier. A 1:1 program runs well at 20–50 accounts; 1:few works at a few hundred; 1:many can run into the thousands. Most programs use all three." },
      { q: "Can you fix an ABM program we already run?", a: "Yes — that is a common starting point. We audit the account list, the committee coverage and the intent data behind it, then rebuild whichever layer is failing." },
      { q: "Does this need our sales team involved?", a: "Yes, at the handoff. The plan defines exactly which signals send an account to sales and what context travels with it, so the involvement is defined rather than ad hoc." },
      { q: "How is ABM reported differently?", a: "Everything rolls up to the account. Engagement score, committee coverage and pipeline per tier replace per-email click metrics." }
    ],
    r: ["demand-generation","audience-intelligence"]
  },
  "email-marketing": {
    e: "Service 04 · Email Marketing", tl: "Email that lands in the inbox,", ta: "and gets a reply.",
    i: "Precision B2B email to verified decision-makers at your target accounts — built for deliverability, compliance and reply rate, not for a screenshot of an open-rate chart.",
    s: [["95%+", "Verified deliverability on delivered records"], ["0", "Purchased or scraped lists used"], ["A/B", "Subject and offer testing on every send"], ["Weekly", "Deliverability and performance reporting"]],
    d: {
      "List build and segmentation": ["Deliverability starts with the list, not the sending tool. We build from verified, permission-based records matched to your ICP, then segment by persona and funnel stage so each send has one audience and one job.",
        ["Verified work emails, validated at the point of send","Segmentation by persona, seniority, industry and stage","Suppression against customers, open opportunities and opt-outs","List hygiene re-run before every wave, not once at setup"]],
      "Email copy and template creation": ["Copy written per persona and per stage, in the register a busy buyer actually reads — short, specific, and about their problem. Templates are built plain-text-first so they render the same everywhere and do not trip spam filters.",
        ["Message variants per persona and funnel stage","Plain-text-first templates that render across clients","Subject and preview lines built as testable pairs","Compliance footer and opt-out wired in by region"]],
      "Campaign deployment and monitoring": ["Authentication, domain warm-up and send pacing are set before the first campaign goes out, and monitored live once it does. If placement drifts, we throttle and fix it mid-flight rather than after the report.",
        ["SPF, DKIM and DMARC verified before the first send","Domain and IP warm-up with paced volume ramp","Live bounce, complaint and placement monitoring","Sends throttled or paused the moment placement drops"]],
      "Deliverability and performance reporting": ["You get the numbers that predict revenue and the ones that predict deliverability, side by side — replies and meetings alongside bounce, complaint and placement rates, so a rising open rate never hides a dying domain.",
        ["Replies, positive replies and meetings booked","Bounce, complaint and unsubscribe rates per segment","Inbox placement tracked separately from open rate","A/B results reported with the variant that won and why"]],
      "Lead handoff and follow-up sequencing": ["A reply is only worth having if someone acts on it. Interested repliers route to your team the same day with the thread and context attached; everyone else moves into a follow-up sequence rather than going cold.",
        ["Same-day routing of positive replies with full thread context","CRM sync with campaign, segment and source stamped","Nurture sequencing for not-now and no-reply contacts","Re-engagement waves scheduled off the original send data"]]
    },
    p: [
      ["Audience and infrastructure", "We build and verify the list while setting up authentication, warm-up and sending domains — the two halves that decide whether anything lands."],
      ["Copy and templates", "Message variants are written per persona and stage, built into plain-text-first templates and set up as testable pairs."],
      ["Send and monitor", "Volume ramps on a paced schedule with bounce, complaint and placement watched live, and throttled the moment anything drifts."],
      ["Report and hand off", "Positive replies route to sales the same day; performance and deliverability are reported together every week."]
    ],
    f: [
      { q: "Do you send from our domain or yours?", a: "Either. Sending from a dedicated subdomain protects your primary domain's reputation during ramp-up, which is what we usually recommend for a first program." },
      { q: "Why do you report placement instead of open rate?", a: "Open tracking has been unreliable since mail privacy protection started pre-fetching images. Placement, replies and meetings are the numbers that still mean something." },
      { q: "How do you stay compliant across regions?", a: "Lawful basis is documented per region before launch, opt-outs propagate across every channel we run, and the consent source travels with each record." },
      { q: "How many emails per contact?", a: "Frequency is capped per contact and per account across the whole program, so a contact in three campaigns does not receive three times the volume." }
    ],
    r: ["b2b-data","demand-generation"]
  },
  "audience-intelligence": {
    e: "Service 05 · Audience Intelligence", tl: "Know who to reach", ta: "before you spend a dollar.",
    i: "Verified audience profiles built from intelligence platforms, intent data and human research — so your campaigns start with a targeting advantage instead of an assumption about who your buyers are.",
    s: [["2–3 wks", "From brief to delivered report"], ["9", "Committee roles profiled per account"], ["50+", "Countries covered"], ["100%", "Records sourced and dated"]],
    d: {
      "Audience intelligence report": ["One document that answers who to reach, why them, and what to say. It sets out the profile with the evidence behind it — the patterns in your own won deals, the market you can actually address, and where the reachable audience sits.",
        ["ICP defined from closed-won and closed-lost patterns","Addressable market sized by segment and region","Persona profiles with priorities, triggers and objections","Competitor audience overlap and white space identified"]],
      "Verified contact database by segment": ["The profile is only useful if you can reach the people in it. Each segment comes with a verified, enriched contact set — validated at delivery rather than at the point the record was first collected.",
        ["Named contacts per segment with verified email and direct dial","Firmographic and technographic enrichment on every record","Segment sizes reported so you can plan volume against budget","Suppression applied against your pipeline and customer base"]],
      "Intent data insights summary": ["Which accounts in your addressable market are researching right now, what they are researching, and how that has moved over the last quarter — with the surges attached to named accounts rather than shown as an aggregate trend.",
        ["Category, competitor and solution-level intent signals","Surging accounts named, with the topic that triggered them","Trend view across the quarter, not a single snapshot","Signal decay handled so stale accounts drop out"]],
      "ICP scoring model": ["A scoring model your team can apply to any account, so the definition survives past this report. Weighted on the attributes that actually predicted a won deal in your data, not on the ones that feel important.",
        ["Attribute weights derived from your own win data","Fit, intent and engagement scored separately","Tier thresholds set for 1:1, 1:few and 1:many treatment","Delivered as a model your ops team can run in-house"]],
      "Recommended channel strategy": ["Where this audience is actually reachable, and what it will cost. We recommend the channel mix from the segment's buying cycle and committee size, with an indicative budget split rather than a menu of everything we sell.",
        ["Channel mix recommended per segment and buying cycle","Indicative budget split with expected volume ranges","Sequencing advice — which channel opens, which converts","Clear note on which channels are not worth it here"]]
    },
    p: [
      ["Data intake", "We start in your CRM — won deals, lost deals, cycle lengths and deal sizes — because the pattern you need is usually already in your own history."],
      ["Research and enrichment", "Intelligence platforms, intent feeds and human research fill in the market beyond your existing customers, with every record sourced and dated."],
      ["Modelling", "Fit attributes are weighted against win data to produce the scoring model, and segments are sized against reachable contact volume."],
      ["Handover", "You get the report, the segmented database, the scoring model and a channel recommendation — plus a working session to walk your team through it."]
    ],
    f: [
      { q: "What do you need from us to start?", a: "Read access to closed-won and closed-lost data for the last 12–24 months, and time with whoever knows why deals were won. Everything else we source." },
      { q: "Is this useful if we already know our ICP?", a: "Usually, yes — most teams have a persona description rather than a scored, evidence-backed model. The common outcome is a segment you were under-investing in." },
      { q: "Do we have to run campaigns with you afterwards?", a: "No. The report, database and scoring model are yours to use with any agency or in-house team." },
      { q: "How current is the contact data?", a: "Every record is validated at the point of delivery, and each carries its source and date so you can see what you are working with." }
    ],
    r: ["b2b-data","abm"]
  },
  "b2b-data": {
    e: "Service 06 · High-Intent B2B Data", tl: "Verified B2B data,", ta: "built for outreach.",
    i: "Permission-based contact databases built to your ICP and validated at delivery. Every record enriched, matched and suppression-checked — no recycled lists, no filler rows to hit a count.",
    s: [["95%+", "Verified deliverability rate"], ["7", "Enriched fields on every record"], ["50+", "Countries covered"], ["0", "Recycled or scraped lists"]],
    d: {
      "Custom database build to your ICP": ["Every build is made to order against your filters — industry, size, region, title, seniority, tech stack — rather than pulled from a pre-cut list that happens to be close. If a segment cannot be built to volume, we tell you before you buy it.",
        ["Built to your filters, not selected from a stock list","Named-account builds where you supply the account list","Realistic volume confirmed per segment before you commit","Sample delivered for review before the full build runs"]],
      "CSV or CRM-ready format": ["Delivered in the shape your systems expect — a clean CSV or a direct sync — with consistent field names, normalised values and no merged cells or half-parsed job titles to clean up before import.",
        ["CSV, Excel or direct CRM sync on delivery","Normalised titles, seniority bands and country codes","Field mapping agreed to match your CRM schema","Re-delivery at no cost if the import does not run clean"]],
      "Data fields: Name, Title, Company, Email, Phone, LinkedIn, Tech Stack": ["Seven core fields on every record as standard, because a name and an email is not enough to personalise or route anything. Additional enrichment is available where your sequences need it.",
        ["Full name, job title and seniority band","Company, size, industry and region","Verified work email, direct dial and LinkedIn profile","Technographic stack data for fit and messaging"]],
      "Quality guarantee: verified deliverability rate": ["The guarantee is written into the order, not offered as reassurance. Records are validated at delivery, and anything that hard-bounces above the agreed threshold is replaced or credited without an argument.",
        ["Multi-step validation run at the point of delivery","Agreed deliverability threshold written into the order","Hard bounces above threshold replaced or credited","Replacement records supplied to the same filters"]],
      "Suppression file application": ["Before anything is delivered we run your suppression files against the build — existing customers, open opportunities, past opt-outs, competitors — so you are never paying for records your team is already working or is not allowed to contact.",
        ["Customer, pipeline and opt-out suppression applied pre-delivery","Competitor and partner domains excluded on request","Duplicate check against previous deliveries to you","Suppression counts reported so you see what was removed"]]
    },
    p: [
      ["Spec the build", "We agree the filters, the fields and the realistic volume per segment — including telling you where a segment is smaller than you hoped."],
      ["Sample and sign-off", "A sample goes back for review before the full build runs, so any mismatch in titles or firmographics is caught while it is cheap to fix."],
      ["Build and validate", "Records are sourced, enriched and put through multi-step validation, with your suppression files applied before anything is counted."],
      ["Deliver", "The database arrives in your format with the deliverability guarantee attached and replacement terms already agreed."]
    ],
    f: [
      { q: "Where does the data come from?", a: "Permission-based sources, business intelligence platforms and our own research, with the source recorded per record. We do not resell scraped lists." },
      { q: "Can we see data before we buy?", a: "Yes. Every build includes a sample for review before the full run, and the sample is representative of the segment rather than cherry-picked." },
      { q: "What happens if records bounce?", a: "Anything above the agreed deliverability threshold is replaced or credited, with replacements built to the same filters." },
      { q: "Is the data GDPR compliant?", a: "Lawful basis is documented per region and the consent or legitimate-interest source travels with each record, so your outreach can stand up to a challenge." }
    ],
    r: ["audience-intelligence","email-marketing"]
  },
  "webinar-promotion": {
    e: "Service 07 · Webinar & Event Promotion", tl: "Fill the room with", ta: "the right registrants.",
    i: "Registration driven from your ICP through email, content syndication and targeted outreach — with volume committed in writing and the attendee engagement data delivered after the event, not just a headcount.",
    s: [["Guaranteed", "Registration volume targets"], ["4–6 wks", "Recommended promotion runway"], ["3", "Reminder touches before the event"], ["100%", "Registrants matched to your ICP"]],
    d: {
      "Webinar promotion campaign setup": ["The whole promotion built and run for you — positioning, copy, channel mix and a schedule paced against the event date, so registrations build steadily instead of arriving in one spike you cannot react to.",
        ["Event positioning and promotional copy per channel","Promotion calendar paced back from the event date","Multi-channel mix: email, content syndication and outreach","Registration pacing monitored, with volume adjusted mid-flight"]],
      "Registration landing page optimization advice": ["We review the page registrations actually land on and tell you what is costing you sign-ups — form length, the value proposition above the fold, speaker credibility, the mobile experience — with specific changes rather than general principles.",
        ["Form field audit — every field justified or cut","Above-the-fold value proposition and speaker framing","Mobile and load-speed review on the real page","Confirmation and calendar-invite flow checked end to end"]],
      "Audience targeting and list build": ["Registrants are drawn from a verified audience built to your ICP filters, not from a general opt-in pool. If the event only makes sense for a specific seniority or region, that is enforced at targeting rather than discovered on the attendee list.",
        ["Audience built to your ICP filters before promotion starts","Named-account targeting where you supply the list","Existing customer and competitor suppression applied","Segment-level reporting on which audiences registered"]],
      "Registration delivery and reporting": ["Registrations are delivered as they come in — not in a batch the day before — with the volume commitment tracked openly against the target so you always know whether you are on pace.",
        ["Registrations delivered continuously, CSV or CRM sync","Running totals against the committed volume target","Source and segment stamped on every registration","Shortfall made up or credited, agreed before launch"]],
      "Post-event attendee list with engagement data": ["Attendance is where the useful data starts. You get who showed up, how long they stayed, what they asked and how they answered your poll questions — so follow-up is prioritised by interest rather than sent to everyone equally.",
        ["Attended versus registered, with time-in-session per contact","Questions asked and poll responses attached per attendee","Engagement-ranked follow-up list for sales","No-show list segmented for on-demand re-engagement"]]
    },
    p: [
      ["Event and audience", "We agree the registration target, build the audience to your ICP filters and set the promotion runway against the event date."],
      ["Page and copy", "The landing page is reviewed against what actually converts, and promotion copy is written per channel and segment."],
      ["Promote", "Multi-channel promotion runs on a paced schedule, with registrations delivered live and volume adjusted if pacing slips."],
      ["Reminders and handover", "Reminder touches run before the event; afterwards you get the attendee list ranked by engagement, with no-shows segmented separately."]
    ],
    f: [
      { q: "How far ahead should promotion start?", a: "Four to six weeks is the usual runway. Under three weeks the audience does not have time to plan around it, and registration volume drops noticeably." },
      { q: "What happens if we miss the registration target?", a: "The shortfall is made up or credited on terms agreed before launch — the volume commitment is written into the order, not offered as a best effort." },
      { q: "Can you promote in-person events too?", a: "Yes, though targeting narrows to the travelable region and the runway usually needs to be longer. The mechanics are otherwise the same." },
      { q: "Do you handle the webinar platform itself?", a: "You keep your platform — we drive registration into it and pull the attendance and engagement data back out afterwards." }
    ],
    r: ["content-syndication","email-marketing"]
  },
  "appointment-generation": {
    e: "Service 08 · Appointment Generation", tl: "Qualified meetings, booked", ta: "into the calendar.",
    i: "SDR and telemarketing outreach that identifies in-market buyers, qualifies them against criteria you set, and puts confirmed meetings on your team's calendar — with the recording and the notes attached.",
    s: [["100%", "Meetings replaced if they fail criteria"], ["3", "Channels in every outreach sequence"], ["Recorded", "Every qualification call"], ["Weekly", "Appointment reporting with notes"]],
    d: {
      "Target account and contact list build": ["Nothing gets dialled until the list is right. Accounts are selected on fit and intent, contacts are named and verified, and direct dials are confirmed — because an SDR working a bad list is the most expensive way to learn the list was bad.",
        ["Accounts selected on fit and current intent signals","Named contacts with verified direct dials, not switchboards","Suppression against customers, open opportunities and opt-outs","List refreshed and revalidated between waves"]],
      "Outreach sequence (email + phone + LinkedIn)": ["Meetings come from coordinated pressure across channels, not from call volume alone. Each contact moves through a sequence where the email, the call and the LinkedIn touch reference each other and escalate.",
        ["Email, phone and LinkedIn touches on one shared timeline","Call attempts timed to when that persona actually answers","Sequence branches on open, reply and connect behaviour","Frequency capped per contact and per account"]],
      "Qualification script development": ["The script is built around your qualification criteria and your buyer's language, then refined weekly from what real calls surface. It is a working document — objections that come up twice get an answer written into it.",
        ["Discovery flow built around your BANT or custom criteria","Objection handling written from the calls, not invented","Persona-specific openers and value framing","Reviewed and updated weekly against call outcomes"]],
      "Appointment booking and calendar management": ["Meetings are booked directly into your reps' calendars against their real availability, with confirmation and reminders handled so the meeting actually happens. Reschedules are chased by us, not by your team.",
        ["Direct calendar integration against live rep availability","Confirmation email and reminder sequence per booking","Reschedules and no-shows chased and rebooked by us","Briefing note delivered to the rep before the call"]],
      "Weekly appointment report with notes": ["Every meeting arrives with the evidence behind it — the recording, the qualification notes, the answers to your criteria — so your reps walk in informed and your managers can audit quality rather than take it on trust.",
        ["Full call recording and written notes per appointment","Answers captured against each qualification criterion","Held, rescheduled and no-show tracked separately","Meetings that fail criteria replaced at no cost"]]
    },
    p: [
      ["Criteria and list", "We write down what counts as a qualified meeting, then build and verify the account and contact list the team will work."],
      ["Script and sequence", "The discovery flow and objection handling are built around your criteria, and the email, phone and LinkedIn sequence is set on one timeline."],
      ["Outreach", "The team works the sequence with calls timed to when your personas answer, recording every qualification conversation."],
      ["Book and report", "Meetings go straight into rep calendars with a briefing note; the weekly report carries recordings, notes and held-versus-booked."]
    ],
    f: [
      { q: "What counts as a qualified appointment?", a: "Whatever we agree in writing before we start — usually title, company size, budget authority and timing. Anything that fails those criteria is replaced at no cost." },
      { q: "Who does the calling?", a: "Our SDR and telemarketing team, trained on your product and script. You get the recordings, so you can audit quality rather than rely on a summary." },
      { q: "How do you handle no-shows?", a: "We chase the reschedule ourselves and rebook. Held-versus-booked is reported separately so the number you see is not inflated by meetings that never happened." },
      { q: "How long before meetings start landing?", a: "Usually two to three weeks — one for list build, script and calibration, then bookings from the first full week of outreach." }
    ],
    r: ["demand-generation","abm"]
  },
  "gtm-strategy": {
    e: "Service 09 · GTM Strategy", tl: "Launch with data,", ta: "not a hunch.",
    i: "A go-to-market strategy for a new market, product or persona — ICP, messaging, channel mix and a roadmap specific enough to execute from on the Monday after you receive it.",
    s: [["4–6 wks", "From kickoff to strategy handover"], ["90", "Day launch roadmap, week by week"], ["3", "Personas profiled as standard"], ["1", "Document your whole team works from"]],
    d: {
      "GTM strategy document": ["The strategy in one document rather than five decks that contradict each other — the opportunity, the audience, the positioning, the channel plan and the numbers it has to hit, written so a new hire could execute against it.",
        ["Market opportunity sized with the assumptions shown","Competitive positioning and the wedge you lead with","Channel plan with budget allocation and expected returns","Success metrics and review gates defined up front"]],
      "ICP and persona profiles": ["Who to sell to and who inside those accounts to convince. Built from evidence — your own win data where it exists, primary research where it does not — and specific enough to filter a target list with.",
        ["ICP defined as filters you can actually build a list against","Buying committee mapped by role, influence and concern","Per-persona priorities, triggers and objections","Anti-personas named, so the team stops chasing bad fits"]],
      "Messaging playbook": ["What to say to each persona at each stage, with the proof points attached. Written as usable language — subject lines, openers, objection responses — not as a positioning statement nobody can turn into an email.",
        ["Value proposition per persona with supporting proof points","Message progression from first touch to evaluation","Objection responses written in the buyer's own language","Ready-to-use copy blocks for email, ads and outreach"]],
      "Channel and campaign recommendations": ["Where this audience is reachable and what each channel is likely to cost, with a recommended split and expected volume. It includes the channels we think you should skip, and why — that is usually the more valuable half.",
        ["Channel mix recommended against cycle length and deal size","Budget split with expected volume and cost ranges","Sequencing — which channel opens, which converts","Explicit list of channels not worth running here"]],
      "90-day launch roadmap": ["The first ninety days broken into weeks, with owners, dependencies and decision gates. It is deliberately specific: the point is that execution starts immediately, not after another quarter of planning.",
        ["Week-by-week plan with named owners and dependencies","Pre-launch, launch and scale phases with entry criteria","Review gates where the plan is expected to change","Early indicators to watch before the lagging metrics move"]]
    },
    p: [
      ["Discovery", "We work through your win data, current pipeline and the team's own read of the market, and interview whoever knows why deals close."],
      ["Research", "Primary and secondary research fills in the segments you have no history in — competitors, buyer behaviour and reachable audience volume."],
      ["Strategy build", "ICP, positioning, messaging and channel plan are drafted, pressure-tested against your numbers and revised with your team in a working session."],
      ["Roadmap and handover", "The 90-day plan is built with owners and gates, then handed over in a session that leaves your team able to run it without us."]
    ],
    f: [
      { q: "Is this useful for an existing market?", a: "Yes — a repositioning or a new persona inside a market you already serve uses the same process, and usually moves faster because the win data is already there." },
      { q: "Do you execute the strategy as well?", a: "We can, but it is not a condition. The document, playbook and roadmap are built to be executable by your team or any agency you choose." },
      { q: "How much of our time does this take?", a: "Roughly a day in total across four to six weeks — a kickoff, a handful of interviews, one working session and the handover." },
      { q: "What if the research contradicts our plan?", a: "Then you have found that out for the cost of a strategy engagement rather than a launch. We show the evidence and the assumptions so you can judge it yourself." }
    ],
    r: ["audience-intelligence","demand-generation"]
  },
  "ai-visibility": {
    e: "Service 10 · AI Visibility", tl: "Be the answer when", ta: "buyers ask an AI.",
    i: "Buyers now shortlist through AI assistants and search summaries before they ever reach your site. We audit how your brand shows up in those answers, fix what is keeping you out, and track the change month over month.",
    s: [["5+", "Assistants and AI surfaces monitored"], ["Monthly", "Visibility tracking report"], ["SOV", "Measured against named competitors"], ["100%", "Recommendations tied to a tracked prompt"]],
    d: {
      "AI visibility audit report": ["We build the set of prompts your buyers actually use — category questions, comparison questions, problem statements — run them across the major assistants, and record whether you appear, how you are described, and who appears instead.",
        ["Buyer-intent prompt set built for your category","Presence and sentiment recorded across major assistants","The sources those answers cite, ranked by influence","Baseline captured so later movement is measurable"]],
      "Content optimization recommendations": ["Specific changes to specific pages, ordered by the difference they will make. AI answers favour content that states things plainly, structures them clearly and can be verified elsewhere — most B2B sites fail on all three.",
        ["Page-level changes prioritised by expected impact","Structured data and schema gaps identified per template","Claims made verifiable and attributable where they are not","Entity and terminology consistency fixed across the site"]],
      "AI-optimized content creation": ["Where the gap is missing content rather than weak content, we write it — the comparison pages, definitional explainers and specific answers that assistants draw on when someone asks about your category.",
        ["Answer-shaped content written for real buyer prompts","Comparison and alternatives pages that stand up to scrutiny","Structured markup applied at the point of publication","Written to serve the reader first, so it survives model changes"]],
      "Monthly AI visibility tracking report": ["The same prompt set, re-run every month, so you can see whether the work moved anything. Model behaviour shifts on its own — tracking against a fixed baseline is the only way to separate your progress from theirs.",
        ["Fixed prompt set re-run monthly for comparability","Presence, position and sentiment trended over time","Changes attributed to your work versus model updates","Next actions recommended from what actually moved"]],
      "Competitor AI share-of-voice analysis": ["Across your prompt set, who gets named and how often. Share of voice makes the gap concrete — and usually shows that the competitor winning the answers is not the one winning the market.",
        ["Share of voice per competitor across the full prompt set","The sources driving their visibility, named","Prompts where nobody wins yet — the reachable ground","Trend tracked monthly alongside your own movement"]]
    },
    p: [
      ["Prompt set and baseline", "We build the prompts your buyers actually use and run them across the major assistants to capture where you stand today."],
      ["Diagnosis", "The audit identifies why you are absent or misdescribed — missing content, unstructured pages, unverifiable claims or inconsistent entity signals."],
      ["Fix and publish", "Recommendations are applied and new answer-shaped content is written and published with structured markup in place."],
      ["Track", "The same prompt set re-runs monthly, separating your movement from model drift and setting the next month's priorities."]
    ],
    f: [
      { q: "Is this just SEO with a new name?", a: "There is overlap in the fundamentals, but the target differs: assistants synthesise an answer and cite a few sources rather than ranking ten links, so verifiability and structure matter more than position." },
      { q: "How long before visibility changes?", a: "Content and structure fixes typically show up within one to two monthly cycles. Establishing presence in a category where you have none takes longer." },
      { q: "Can you guarantee we appear in AI answers?", a: "No, and be wary of anyone who does — the systems are not deterministic and change without notice. What we guarantee is measurement against a fixed baseline and work aimed at the causes." },
      { q: "Which assistants do you track?", a: "The major consumer and enterprise assistants plus AI search summaries. The exact set is agreed at kickoff and held fixed so the monthly numbers stay comparable." }
    ],
    r: ["performance-marketing","gtm-strategy"]
  },
  "performance-marketing": {
    e: "Service 11 · Digital & Performance", tl: "Paid media measured on", ta: "pipeline, not clicks.",
    i: "Paid search, LinkedIn, programmatic and display run as a pipeline channel — optimised toward cost per opportunity rather than cost per click, and reported against the spend that produced it.",
    s: [["4", "Paid channels managed in-house"], ["CPO", "The cost we optimise toward"], ["100%", "Spend reported against pipeline"], ["Weekly", "Performance reporting"]],
    d: {
      "Campaign setup and management": ["Accounts built properly from the start — conversion tracking that fires on the right events, sensible campaign structure, and offline conversions fed back so the platforms optimise toward revenue instead of form fills.",
        ["Account structure built for clean signal, not for a screenshot","Conversion tracking verified end to end before spend starts","Offline conversions imported so platforms learn from real deals","Day-to-day management, budget pacing and anomaly checks"]],
      "Ad creative and copywriting": ["Creative written for a B2B buyer who is evaluating, not impulse-buying. We produce variants per persona and stage, and retire the ones that lose rather than leaving a whole account on a single tired concept.",
        ["Concepts and copy per persona and funnel stage","Static and motion variants sized for every placement","Structured testing with one variable at a time","Fatigued creative retired on a defined refresh cycle"]],
      "Audience targeting and bid strategy": ["Targeting built from your account list and ICP rather than from platform-suggested interests, with bidding set by segment value — a Tier 1 account is worth paying more for, and the bid strategy should say so.",
        ["Account-list and ICP-based audiences, not interest guesses","Bids weighted by account tier and segment value","Exclusions for customers, competitors and job seekers","Retargeting sequenced by stage, with frequency capped"]],
      "Weekly performance reporting": ["One report, weekly, in the language of pipeline — spend, qualified leads, opportunities and cost per opportunity by channel and campaign. Platform metrics are there if you want them, but they are not the headline.",
        ["Spend, leads, opportunities and CPO per channel","Campaign and creative-level breakdown of what is working","Pacing against budget and target for the period","Plain note on what changed this week and why"]],
      "Monthly strategy and optimization review": ["A working session each month to decide what scales, what gets fixed and what gets cut — with budget reallocated toward whatever is producing opportunities rather than left where last quarter's plan put it.",
        ["Budget reallocated across channels on the evidence","Landing page and conversion path recommendations","Audience and creative roadmap for the coming month","Channels that are not producing paused, not defended"]]
    },
    p: [
      ["Audit and tracking", "We audit existing accounts and fix conversion tracking first — until the signal is trustworthy, every optimisation after it is guesswork."],
      ["Build", "Campaign structure, ICP-based audiences and creative variants are built, with bids weighted by account tier."],
      ["Launch and learn", "Spend ramps deliberately while the platforms gather signal, with structured tests running one variable at a time."],
      ["Scale", "Weekly reporting drives in-flight adjustments; the monthly review reallocates budget toward whatever is producing opportunities."]
    ],
    f: [
      { q: "What budget do we need to make this work?", a: "Enough for the platforms to gather signal — usually a meaningful monthly floor per channel. We will tell you if your budget is better spent on one channel than split across three." },
      { q: "Why optimise to cost per opportunity, not cost per lead?", a: "Because CPL rewards cheap leads. Feeding real opportunity data back to the platforms makes them find people who look like buyers rather than people who fill in forms." },
      { q: "Do you work in our ad accounts or yours?", a: "Yours. You keep ownership of the accounts, the data and the history — including if you stop working with us." },
      { q: "How quickly will we see results?", a: "Expect four to six weeks before the data is worth drawing conclusions from, and a quarter before the optimisation compounds into a stable cost per opportunity." }
    ],
    r: ["demand-generation","website-design"], sc: "dashboard"
  },
  "digital-marketing": {
    e: "Service 12 · Digital Marketing", tl: "The channels that keep working", ta: "between campaigns.",
    i: "Paid spend stops the day the budget does. Search, content, organic social and nurture keep compounding — we run them as one programme so your brand is already familiar by the time a campaign reaches the same buyer.",
    s: [["4", "Owned channels run as one programme"], ["6–9 mo", "Before organic search compounds"], ["Monthly", "Reporting across every channel"], ["1", "Team, not four separate agencies"]],
    d: {
      "Digital channel audit and strategy": ["We start with what you already have — rankings, traffic, social reach, the automation platform nobody has opened in a year — and work out which channels are worth investing in for your buyer, rather than running all of them at half strength.",
        ["Search, social, content and automation audited against your ICP","Competitor share-of-voice benchmarked per channel","Channel priorities set against deal size and cycle length","12-month roadmap with owners, cadence and targets"]],
      "SEO and content programme": ["Content mapped to the questions your buyers actually search, published on a cadence that holds, and built on technical foundations that let it rank. Not a blog nobody asked for.",
        ["Keyword and topic clusters built from buyer search intent","Technical SEO fixes prioritised by traffic impact","Editorial calendar with a volume you can sustain","Internal linking and schema applied as content ships"]],
      "Organic social and LinkedIn management": ["LinkedIn is where B2B buyers form an opinion of you before any form gets filled. We run the company page and support your executives' presence with a cadence that survives a busy quarter.",
        ["Company page calendar and post production","Executive and founder post support and ghostwriting","Community management and comment response","Employee advocacy programme where you have the appetite"]],
      "Marketing automation and nurture journeys": ["Most B2B leads are not ready when they first raise a hand. Nurture keeps them warm on their timeline instead of your quarter, and hands sales a contact with a history attached.",
        ["Lifecycle stages and lead scoring defined with sales","Nurture journeys per persona and funnel stage","Platform build in HubSpot, Marketo or Pardot","Sales alerts triggered on real buying behaviour"]],
      "Monthly digital performance reporting": ["One report across every owned channel, tied to pipeline rather than vanity reach. It says what moved, what did not, and what we are changing next month.",
        ["Traffic, rankings, engagement and pipeline in one view","Channel-level contribution to opportunities created","What changed this month and what it produced","Next month's priorities agreed on the call"]]
    },
    p: [
      ["Audit", "We benchmark your current search, social, content and automation against your ICP and your competitors, and agree which channels earn investment."],
      ["Foundations", "Technical SEO, tracking, lifecycle stages and the content model are put right first, so everything published afterwards compounds instead of leaking."],
      ["Run", "Content, social and nurture ship on a published cadence, with the calendar visible to your team a month ahead."],
      ["Compound", "Monthly reporting drives the next month's priorities, and budget shifts toward whichever channel is producing opportunities."]
    ],
    f: [
      { q: "How is this different from your performance marketing service?", a: "Performance marketing is paid media — you buy attention and it stops when spend stops. This is the owned side: search, content, organic social and nurture, which take longer to build and keep working afterwards. Most clients run both." },
      { q: "How long before SEO shows results?", a: "Technical fixes can move things inside a quarter. New content ranking at scale is usually a six to nine month story. We will tell you up front if your timeline needs paid to bridge the gap." },
      { q: "Do you write the content or do we?", a: "We write it, working from interviews with your subject-matter experts. You approve everything before it publishes." },
      { q: "Which automation platforms do you work in?", a: "HubSpot, Marketo and Pardot most often. We work in your instance, and you keep the build and the data." }
    ],
    r: ["performance-marketing","content-syndication","ai-visibility"], sc: "dashboard"
  },
  "website-design": {
    e: "Service 13 · Technology Development", tl: "A B2B website built to", ta: "convert the visit.",
    i: "Conversion-focused B2B sites and landing pages — designed around how your buyers actually evaluate, built to load fast on a phone, and handed over on a CMS your marketing team can run without a developer.",
    s: [["6–10 wks", "Typical build timeline"], ["90+", "Lighthouse performance target"], ["Mobile", "First, on every template"], ["30", "Days of post-launch support included"]],
    d: {
      "Website discovery and wireframes": ["Structure before styling. We work out who the site is for, what they need to establish before they will talk to you, and what is currently getting in the way — then wireframe the pages against that, while changes still cost nothing.",
        ["Audience, objection and conversion-path mapping","Analytics and heatmap review of the existing site","Sitemap and page hierarchy agreed before design starts","Wireframes for every unique template, signed off up front"]],
      "UI/UX design (desktop + mobile)": ["Designed at both ends of the range rather than shrunk down afterwards, because most B2B first visits are on a phone. You get a component set, not a pile of one-off page mockups.",
        ["Desktop and mobile designed together, not adapted after","Reusable component library your team can build new pages from","Accessible colour contrast and type scale as standard","Interaction and motion specified, not left to the developer"]],
      "Front-end and back-end development": ["Built for speed and search from the first commit — semantic markup, optimised assets, clean structured data. Performance is a build constraint here, not something audited after launch and patched.",
        ["Semantic, accessible markup with SEO-ready architecture","Performance budgets enforced during the build","Forms wired to your CRM or marketing automation","Analytics and conversion tracking implemented and verified"]],
      "CMS setup and content migration": ["Content modelled so your marketing team can publish and restructure pages without a developer — and existing content migrated with redirects mapped, so the search equity you have already earned survives the move.",
        ["WordPress or Webflow, modelled for editors not developers","Existing content migrated and re-checked page by page","301 redirect map built and tested before cutover","Editor training session and written documentation"]],
      "QA, launch, and post-launch support": ["Tested across real browsers and devices, launched on a planned cutover rather than a hopeful one, and supported for thirty days afterwards — because the issues worth catching surface in the first fortnight of real traffic.",
        ["Cross-browser, cross-device and accessibility QA pass","Forms, tracking and redirects verified on production","Planned cutover with rollback ready","30 days of post-launch support and fixes included"]]
    },
    p: [
      ["Discovery", "We map the audience, the objections and the conversion paths, and review what the current site's analytics say is going wrong."],
      ["Design", "Wireframes are signed off before visual design begins, then desktop and mobile are designed together into a reusable component set."],
      ["Build", "Development runs against performance budgets, with forms, CRM integration and tracking wired in and verified as they are built."],
      ["Launch", "Content migrates with a tested redirect map, QA runs across real devices, and we support the site for thirty days after cutover."]
    ],
    f: [
      { q: "WordPress or Webflow?", a: "Webflow suits marketing sites your team wants to change constantly; WordPress suits heavier content operations and complex integrations. We will recommend one after discovery rather than before." },
      { q: "Will we lose search rankings?", a: "Not if the migration is done properly. The redirect map is built and tested before cutover, and URL structure is preserved wherever there is equity worth keeping." },
      { q: "Can you just do landing pages?", a: "Yes. Campaign landing pages are a common standalone engagement and run on a much shorter timeline than a full site." },
      { q: "What do you need from us?", a: "Content and brand assets, one decision-maker who can sign off, and access to your CRM and analytics. Content is usually what sets the real timeline." }
    ],
    r: ["performance-marketing","gtm-strategy"], sc: "browser"
  },
}

// site url
var SITE_URL_thing = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidespy.com").replace(/\/+$/, "")

function absUrl(path: any) {
  return `${SITE_URL_thing}${path.startsWith("/") ? path : `/${path}`}`;
}

function slugify(text: any) {
  return text
    .toLowerCase()
    .replace(/[’'"()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const isKey = (key: any) => !!key && KEYS_LIST.includes(key)

// get href
function serviceHref(key: any) {
  if (!key) {
    return "/services"
  } else {
    if (!isKey(key)) {
      return `/services#${key}`
    } else {
      return `/services/${key}`
    }
  }
}

// returns the number thing
function countable(value: any): any {
  const m = value.match(/^(\d+(?:\.\d+)?)([%+]*)$/);
  return m ? { n: parseFloat(m[1]), suffix: m[2] } : null;
}

/** loads the stuff */
function load(key: any) {
  const detail = DATA_FINAL.find((s: any) => s[1] === key);
  const page = isKey(key) ? stuff[key] : undefined
  if (detail && page) {
    return { detail, page }
  } else {
    return null
  }
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata> {
  const found = load((await params).service);
  let res: any = {}
  if (found) {
    const path = serviceHref(found.detail[1]);
    res = {
      title: `${found.detail[0]} Services · Lidespy`,
      description: found.page.i,
      alternates: { canonical: path },
      openGraph: {
        title: `${found.detail[0]} Services · Lidespy`,
        description: found.page.i,
        url: path,
      },
    };
  }
  return res
}

const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];
const WEEKS = [34, 42, 38, 51, 47, 58, 55, 66, 62, 74, 71, 83];
const OPPS = [18, 22, 25, 30, 33, 41, 44, 50, 55, 63, 67, 78];
// channels (name, share, cpo)
const CHANNELS = [["LinkedIn Ads", 38, "$690"], ["Google Search", 31, "$742"], ["Programmatic", 19, "$880"], ["Display retargeting", 12, "$915"]];

export default async function ServiceDetailPage({
  params,
}: any) {
  const found = load((await params).service);
  if (!found) notFound();
  const detail = found!.detail
  const page = found!.page

  // sections
  const sections = detail[4].map((name: any) => ({
    id: slugify(name),
    name,
    copy: page.d[name] ? { body: page.d[name][0], points: page.d[name][1] } : undefined,
  }));

  const position = DATA_FINAL.findIndex((s: any) => s[1] === detail[1]);
  const related = page.r
    .map((key: any) => DATA_FINAL.find((s: any) => s[1] === key))
    .filter((s: any) => s !== undefined);

  const url = absUrl(serviceHref(detail[1]));
  const nn = String(position + 1).padStart(2, "0")
  const of13 = String(DATA_FINAL.length).padStart(2, "0")
  // schema for google
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: detail[0],
      serviceType: detail[0],
      description: detail[3],
      url,
      provider: { "@id": `${absUrl("/")}#organization` },
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", name: "B2B marketing and sales teams" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${detail[0]} deliverables`,
        itemListElement: detail[4].map((d: any) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: d },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.f.map((f: any) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: "Services", item: absUrl("/services") },
        { "@type": "ListItem", position: 3, name: detail[0], item: url },
      ],
    },
  ];

  var isStudio = !!page.sc == true

  return (
    <div
      data-gsap-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Temp2Final t={3} />
      <Temp2Final t={4} />
      <Temp2Final t={1} a="solutions" />

      {isStudio ? (
        <>
          <section
            data-hero
            className="dc-rules relative overflow-hidden border-b border-ink/12 bg-cream text-ink"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-[20%] right-[-10%] h-[820px] w-[820px] rounded-full bg-[radial-gradient(circle,rgba(255,90,79,0.16),transparent_62%)]"
            />

            <div className="relative mx-auto max-w-[1280px] page-x">
              <div
                data-hero-fade
                className="flex items-center justify-between gap-4 border-b border-ink/12 py-5 text-[11px] font-semibold tracking-[0.14em] uppercase"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 text-muted-3 transition-colors hover:text-brand"
                >
                  <span className="text-brand">←</span>
                  {"All services"}
                </Link>
                <div className="flex items-center gap-3 text-muted-3">
                  <span className="hidden sm:inline">{"Service"}</span>
                  <span className="tabular-nums text-ink">
                    {nn}
                    <span className="text-ink/35"> / {of13}</span>
                  </span>
                </div>
              </div>

              <div className="grid items-center gap-[clamp(40px,5vw,80px)] pt-[clamp(36px,4.5vw,64px)] pb-[clamp(40px,5vw,72px)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                <div className="flex flex-col gap-[clamp(20px,2.4vw,32px)]">
                  <div data-hero-fade className="self-start">
                    <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
                      {page.e}
                    </div>
                  </div>

                  <h1
                    data-hero-title
                    className="m-0 text-[clamp(40px,5.4vw,82px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance"
                  >
                    <span className="block overflow-hidden pb-[0.08em]">
                      <span data-hero-line className="block text-balance">
                        {page.tl}
                      </span>
                    </span>
                    <span className="block overflow-hidden pb-[0.08em]">
                      <span data-hero-line className="block text-[#be1622] text-balance">
                        {page.ta}
                      </span>
                    </span>
                  </h1>

                  <p
                    data-hero-fade
                    className="m-0 max-w-[52ch] text-[clamp(16px,1.25vw,19px)] leading-[1.6] text-muted text-pretty"
                  >
                    {page.i}
                  </p>

                  <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
                    <Link
                      href="/contact"
                      data-btn="red"
                      className={"inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase py-2 pr-2 pl-7 text-[13px] bg-brand-cta text-white "}
                    >
                      {detail[2]}
                      <span
                        data-chip
                        className="inline-flex items-center justify-center rounded-ui bg-ink text-coral h-12 w-12 text-[17px]"
                      >
                        <span className="inline-block">→</span>
                      </span>
                    </Link>
                    <Link
                      href="/calculator"
                      data-textlink
                      className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-ink uppercase"
                    >
                      {"Estimate a campaign budget"}
                      <span data-arrow className="text-[16px] text-brand">
                        →
                      </span>
                    </Link>
                  </div>

                  <ul data-hero-fade className="m-0 flex list-none flex-wrap gap-2 p-0 pt-2">
                    {detail[5].map((b: any) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-2 rounded-full border border-ink/14 bg-white/70 px-3.5 py-[7px] text-[12.5px] leading-none text-muted"
                      >
                        <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="shrink-0 text-brand">
                          <path d="m4 12 6 6L20 6" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div data-hero-panel className="relative">
                  {page.sc === "dashboard" ? (
                    <div aria-hidden className="relative select-none">
                      <div className="overflow-hidden rounded-[10px] border border-ink/20 bg-ink text-cream shadow-[0_40px_80px_-30px_rgba(18,21,15,0.55)]">
                        <div className="flex items-center gap-3 border-b border-cream/10 px-4 py-3">
                          <div className="flex gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                          </div>
                          <div className="min-w-0 flex-1 truncate rounded-full bg-cream/[0.07] px-3 py-1 text-[11px] text-cream/55">
                            Pipeline report · Paid media · Last 12 weeks
                          </div>
                          <span className="hidden items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] text-coral uppercase sm:inline-flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                            Live
                          </span>
                        </div>

                        <div className="grid grid-cols-3 border-b border-cream/10">
                          {[
                            ["Spend", "$48.2k", "on budget"],
                            ["Opportunities", "63", "+24% vs plan"],
                            ["Cost / opp", "$765", "−18% QoQ"],
                          ].map((m: any, i: any) => (
                            <div key={m[0]} className={`px-4 py-3.5 ${i ? "border-l border-cream/10" : ""}`}>
                              <div className="text-[10px] tracking-[0.1em] text-cream/45 uppercase">{m[0]}</div>
                              <div className="mt-1.5 text-[clamp(18px,2vw,26px)] leading-none font-medium tracking-[-0.03em]">
                                {m[1]}
                              </div>
                              <div className={`mt-1.5 text-[10.5px] ${i ? "text-coral" : "text-cream/45"}`}>
                                {m[2]}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="px-4 pt-4 pb-3">
                          <div className="mb-3 flex items-center gap-4 text-[10px] tracking-[0.08em] text-cream/50 uppercase">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-[1px] bg-cream/25" /> Spend
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-[1px] bg-coral" /> Opportunities
                            </span>
                          </div>
                          <div className="flex h-[clamp(96px,11vw,140px)] items-end gap-[clamp(4px,0.6vw,8px)]">
                            {WEEKS.map((w, i) => (
                              <div key={i} className="flex h-full flex-1 items-end gap-[2px]">
                                <div className="flex-1 rounded-t-[2px] bg-cream/20" style={{ height: `${w}%` }} />
                                <div className="flex-1 rounded-t-[2px] bg-coral" style={{ height: `${OPPS[i]}%` }} />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-cream/10 px-4 pt-2 pb-3">
                          {CHANNELS.map((c: any) => (
                            <div
                              key={c[0]}
                              className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] items-center gap-3 border-b border-cream/[0.07] py-2 text-[11.5px] last:border-b-0"
                            >
                              <span className="truncate text-cream/80">{c[0]}</span>
                              <span className="h-1.5 overflow-hidden rounded-full bg-cream/10">
                                <span
                                  className="block h-full rounded-full bg-brand-cta"
                                  style={{ width: `${c[1] * 2.4}%` }}
                                />
                              </span>
                              <span className="w-12 text-right tabular-nums text-cream/60">{c[2]}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-[8px] border border-ink/12 bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(18,21,15,0.4)] sm:flex lg:-left-10">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden>
                            <path d="m4 12 6 6L20 6" />
                          </svg>
                        </span>
                        <div>
                          <div className="text-[12.5px] font-semibold text-ink">Offline conversions synced</div>
                          <div className="text-[11px] text-muted-3">14 closed-won deals fed back today</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div aria-hidden className="relative select-none sm:pr-10 sm:pb-8">
                      <div className="overflow-hidden rounded-[10px] border border-ink/20 bg-ink shadow-[0_40px_80px_-30px_rgba(18,21,15,0.55)]">
                        <div className="flex items-center gap-3 border-b border-cream/10 px-4 py-3">
                          <div className="flex gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                          </div>
                          <div className="min-w-0 flex-1 truncate rounded-full bg-cream/[0.07] px-3 py-1 text-[11px] text-cream/55">
                            https://yourbrand.com
                          </div>
                        </div>

                        <div className="bg-cream px-[clamp(14px,2vw,24px)] pt-4 pb-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="h-4 w-4 rounded-[3px] bg-brand" />
                              <span className="h-2 w-14 rounded-full bg-ink/70" />
                            </div>
                            <div className="hidden gap-3 sm:flex">
                              <span className="h-1.5 w-9 rounded-full bg-ink/20" />
                              <span className="h-1.5 w-9 rounded-full bg-ink/20" />
                              <span className="h-1.5 w-9 rounded-full bg-ink/20" />
                            </div>
                            <span className="h-5 w-16 rounded-[3px] bg-ink" />
                          </div>

                          <div className="mt-[clamp(18px,2.4vw,30px)] grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center gap-4">
                            <div className="flex flex-col gap-2">
                              <span className="h-1.5 w-16 rounded-full bg-brand/60" />
                              <span className="h-3.5 w-[92%] rounded-[3px] bg-ink/85" />
                              <span className="h-3.5 w-[70%] rounded-[3px] bg-ink/85" />
                              <span className="mt-1 h-1.5 w-full rounded-full bg-ink/15" />
                              <span className="h-1.5 w-[80%] rounded-full bg-ink/15" />
                              <div className="mt-2 flex gap-2">
                                <span className="h-6 w-20 rounded-[3px] bg-brand-cta" />
                                <span className="h-6 w-16 rounded-[3px] border border-ink/25" />
                              </div>
                            </div>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-ink">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,90,79,0.55),transparent_60%)]" />
                              <div className="absolute right-3 bottom-3 left-3 flex items-end gap-1.5">
                                {[40, 62, 50, 78, 66, 90].map((h, i) => (
                                  <span
                                    key={i}
                                    className="flex-1 rounded-t-[2px] bg-cream/70"
                                    style={{ height: `${h * 0.5}px` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 grid grid-cols-3 gap-2.5">
                            {[0, 1, 2].map((i) => (
                              <div key={i} className="rounded-[5px] border border-ink/10 bg-white p-2.5">
                                <span className="block h-4 w-4 rounded-[3px] bg-brand/15" />
                                <span className="mt-2.5 block h-1.5 w-[75%] rounded-full bg-ink/60" />
                                <span className="mt-1.5 block h-1 w-full rounded-full bg-ink/12" />
                                <span className="mt-1 block h-1 w-[60%] rounded-full bg-ink/12" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="absolute right-0 bottom-0 hidden w-[118px] overflow-hidden rounded-[18px] border-[5px] border-ink bg-cream shadow-[0_24px_50px_-20px_rgba(18,21,15,0.55)] sm:block">
                        <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-ink/25" />
                        <div className="px-2.5 pt-2.5 pb-4">
                          <div className="flex items-center justify-between">
                            <span className="h-2.5 w-2.5 rounded-[2px] bg-brand" />
                            <span className="h-1 w-4 rounded-full bg-ink/40" />
                          </div>
                          <span className="mt-3 block h-2 w-[90%] rounded-[2px] bg-ink/85" />
                          <span className="mt-1 block h-2 w-[65%] rounded-[2px] bg-ink/85" />
                          <span className="mt-2 block h-1 w-full rounded-full bg-ink/15" />
                          <span className="mt-1 block h-1 w-[80%] rounded-full bg-ink/15" />
                          <span className="mt-2.5 block h-4 w-full rounded-[3px] bg-brand-cta" />
                          <div className="relative mt-2.5 aspect-[4/3] overflow-hidden rounded-[4px] bg-ink">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,90,79,0.55),transparent_60%)]" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute -top-5 -left-4 hidden items-center gap-3 rounded-[8px] border border-ink/12 bg-white px-3.5 py-2.5 shadow-[0_18px_40px_-18px_rgba(18,21,15,0.4)] sm:flex lg:-left-10">
                        <span className="relative inline-flex h-10 w-10 items-center justify-center">
                          <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgb(190 22 34 / 0.14)" strokeWidth="3" />
                            <circle
                              cx="18"
                              cy="18"
                              r="15.5"
                              fill="none"
                              stroke="#be1622"
                              strokeWidth="3"
                              strokeDasharray="97.4"
                              strokeDashoffset="3.9"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="text-[12px] font-semibold tabular-nums text-ink">96</span>
                        </span>
                        <div>
                          <div className="text-[12.5px] font-semibold text-ink">Performance</div>
                          <div className="text-[11px] text-muted-3">Lighthouse, mobile</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative border-t border-ink/12 bg-white/55">
              <div className="mx-auto grid max-w-[1280px] grid-cols-2 page-x lg:grid-cols-4">
                {page.s.map((s: any, i: any) => {
                  const c = countable(s[0]);
                  return (
                    <div
                      key={s[1]}
                      data-hero-row
                      className={`flex flex-col gap-2 py-[clamp(20px,2.2vw,30px)] ${
                        i % 2 ? "pl-5 sm:pl-8" : "pr-5 sm:pr-8"
                      } ${i > 0 ? "lg:border-l lg:border-ink/12 lg:pl-8" : ""} ${
                        i < 2 ? "border-b border-ink/12 lg:border-b-0" : ""
                      } ${i % 2 ? "border-l border-ink/12" : ""}`}
                    >
                      <div
                        data-count={c ? c.n : undefined}
                        data-suffix={c ? c.suffix : undefined}
                        className="text-[clamp(26px,2.6vw,40px)] leading-none font-medium tracking-[-0.03em] tabular-nums text-brand"
                      >
                        {s[0]}
                      </div>
                      <div className="text-[13px] leading-[1.4] text-muted-2 text-pretty">
                        {s[1]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* deliverables bento thing */}
          <section className="mx-auto max-w-[1280px] page-x py-[clamp(48px,5vw,88px)]">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div className="max-w-[56ch]">
                <div className={"inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase " + "border-brand/45 text-brand"}>
                  {"What you get"}
                </div>
                <p className="mt-5 mb-0 text-[clamp(20px,2.1vw,32px)] leading-[1.2] font-medium tracking-[-0.025em] text-ink text-pretty">
                  {"Every deliverable below is part of the standard engagement."}
                </p>
              </div>
              <div className="text-[12px] font-semibold tracking-[0.12em] text-muted-3 uppercase tabular-nums">
                {String(sections.length).padStart(2, "0")} deliverables
              </div>
            </div>

            <div className="mt-[clamp(28px,3vw,44px)] grid gap-3.5 lg:grid-cols-12">
              {sections.map((s: any, i: any) => {
                const lead = i === 0;
                return (
                  <article
                    key={s.id}
                    id={s.id}
                    className={`group relative flex scroll-mt-24 flex-col overflow-hidden rounded-card border p-[clamp(22px,2.2vw,32px)] ${
                      SPANS[i % SPANS.length]
                    } ${
                      lead
                        ? "border-ink bg-ink text-cream"
                        : "border-ink/12 bg-white text-ink transition-colors hover:border-brand/40"
                    }`}
                  >
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute -top-4 right-4 leading-none font-medium tracking-[-0.06em] text-transparent select-none [font-size:clamp(88px,8vw,128px)] ${
                        lead
                          ? "[-webkit-text-stroke:1.5px_rgba(255,90,79,0.35)]"
                          : "[-webkit-text-stroke:1.5px_rgba(190,22,34,0.16)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <h2
                      className={`relative m-0 max-w-[20ch] pr-[clamp(84px,7.5vw,120px)] text-[clamp(21px,2vw,28px)] leading-[1.12] font-medium tracking-[-0.025em] text-pretty ${
                        lead ? "text-cream" : "text-ink"
                      }`}
                    >
                      {s.name}
                    </h2>
                    {s.copy && (
                      <>
                        <p
                          className={`relative mt-3.5 mb-0 max-w-[56ch] text-[14.5px] leading-[1.62] text-pretty ${
                            lead ? "text-cream/68" : "text-muted"
                          }`}
                        >
                          {s.copy.body}
                        </p>
                        <ul className="relative m-0 mt-auto flex list-none flex-col gap-2.5 p-0 pt-6">
                          {s.copy.points.map((pt: any) => (
                            <li
                              key={pt}
                              className={`flex items-start gap-2.5 border-t pt-2.5 text-[13.5px] leading-[1.45] ${
                                lead ? "border-cream/12 text-cream/85" : "border-ink/9 text-ink"
                              }`}
                            >
                              <svg
                                width={11}
                                height={11}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={3.5}
                                strokeLinecap="square"
                                aria-hidden
                                className={`mt-[3px] shrink-0 ${lead ? "text-coral" : "text-brand"}`}
                              >
                                <path d="m4 12 6 6L20 6" />
                              </svg>
                              <span className="text-pretty">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          <section className="border-y border-ink/12 bg-panel">
            <div className="mx-auto max-w-[1280px] page-x py-[clamp(48px,5vw,84px)]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-[#be1622]">
                How the engagement runs
              </div>
              <ol className="relative m-0 mt-[clamp(28px,3vw,44px)] grid list-none gap-y-8 p-0 lg:grid-cols-4 lg:gap-x-8">
                <span
                  aria-hidden
                  className="absolute top-5 right-0 left-0 hidden h-px bg-ink/18 lg:block"
                />
                <span aria-hidden className="absolute top-0 bottom-0 left-5 w-px bg-ink/18 lg:hidden" />
                {page.p.map((step: any, i: any) => (
                  <li key={step[0]} className="relative flex gap-5 lg:flex-col lg:gap-0">
                    <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-cream text-[12px] font-semibold tabular-nums text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="lg:mt-6">
                      <div className="text-[clamp(18px,1.6vw,21px)] leading-[1.2] font-medium tracking-[-0.02em] text-ink text-pretty">
                        {step[0]}
                      </div>
                      <div className="mt-2.5 max-w-[42ch] text-[14px] leading-[1.6] text-muted text-pretty">
                        {step[1]}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </>
      ) : (
        <>
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
                  href={"/services"}
                  className="inline-flex items-center gap-2.5 text-cream/55 transition-colors hover:text-coral"
                >
                  <span className="text-coral">←</span>
                  {"All services"}
                </Link>
                <div className="flex items-center gap-3 text-cream/45">
                  <span className="hidden sm:inline">{"Service"}</span>
                  <span className="tabular-nums text-cream">
                    {nn}
                    <span className="text-cream/35"> / {String(DATA_FINAL.length).padStart(2, "0")}</span>
                  </span>
                </div>
              </div>

              <div className="relative grid items-end gap-[clamp(40px,5vw,88px)] pt-[clamp(36px,4.5vw,68px)] pb-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
                <div className="flex flex-col gap-[clamp(22px,2.6vw,36px)]">
                  <div data-hero-fade className="self-start">
                    <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-coral/45 text-coral">
                      {page.e}
                    </div>
                  </div>

                  <h1
                    data-hero-title
                    className="m-0 text-[clamp(42px,6.2vw,96px)] leading-[0.98] font-normal tracking-[-0.04em] text-balance">
                    <span className="block overflow-hidden pb-[0.08em]">
                      <span data-hero-line className="block text-balance">
                        {page.tl}
                      </span>
                    </span>
                    <span className="block overflow-hidden pb-[0.08em]">
                      <span data-hero-line className="block text-coral text-balance">
                        {page.ta}
                      </span>
                    </span>
                  </h1>

                  <p
                    data-hero-fade
                    className="m-0 max-w-[54ch] text-[clamp(16px,1.3vw,19.5px)] leading-[1.6] text-cream/68 text-pretty"
                  >
                    {page.i}
                  </p>

                  <div data-hero-fade className="flex flex-wrap items-center gap-x-9 gap-y-5 pt-1">
                    <Link
                      href={"/contact"}
                      data-btn={"red"}
                      className={`inline-flex items-center gap-4 rounded-[2px] font-semibold tracking-[0.04em] uppercase ${"py-2 pr-2 pl-7 text-[13px]"} ${"bg-brand-cta text-white"} `}
                    >
                      {detail[2]}
                      <span
                        data-chip
                        className={`inline-flex items-center justify-center rounded-ui ${"bg-ink text-coral"} ${"h-12 w-12 text-[17px]"}`}
                      >
                        <span className="inline-block">→</span>
                      </span>
                    </Link>
                    <Link
                      href="/calculator"
                      data-textlink
                      className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-cream uppercase"
                    >
                      {"Estimate a campaign budget"}
                      <span data-arrow className="text-[16px] text-coral">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* ledger */}
                <div className="flex flex-col gap-4">
                  <div
                    data-hero-panel
                    className="rounded-card border border-cream/14 bg-cream/[0.04] px-[clamp(22px,2vw,30px)] pt-5 pb-2 backdrop-blur-[2px]"
                  >
                    <div className="flex items-center justify-between border-b border-cream/14 pb-4 text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                      <span className="text-cream/45">{"At a glance"}</span>
                      <span className="inline-flex items-center gap-2 text-coral">
                        <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                        Lidespy
                      </span>
                    </div>
                    {page.s.map((s: any) => {
                      const c = countable(s[0]);
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

                  {(() => {
                    // contents
                    let x = { label: "On this page", items: sections.map((sec: any) => ({ id: sec.id, name: sec.name })) }
                    if (x) {
                      return (
                        <div
                          data-hero-panel
                          className="rounded-card border border-cream/12 bg-cream/[0.025] px-[clamp(22px,2vw,30px)] pt-[18px] pb-2"
                        >
                          <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                            {x.label}
                          </div>
                          {x.items.map((it: any, i: any) => (
                            <a
                              key={it.id}
                              href={`#${it.id}`}
                              className="group flex items-baseline gap-3 border-b border-cream/10 py-[8px] text-[13.5px] text-cream/85 transition-colors last:border-b-0 hover:text-coral"
                            >
                              <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-coral/80">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="min-w-0 flex-1 leading-[1.3]">{it.name}</span>
                              <span className="translate-x-0 text-coral opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                                →
                              </span>
                            </a>
                          ))}
                        </div>
                      )
                    } else {
                      return null
                    }
                  })()}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border-t border-cream/12 py-3.5">
              <div className="ld-marquee ld-marquee-slow">
                {[...detail[4], ...detail[4]].map((t: any, i: any) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-[18px] px-[22px] text-[11.5px] tracking-[0.12em] whitespace-nowrap text-cream/50 uppercase"
                  >
                    {t}
                    <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
                  </span>
                ))}
              </div>
            </div>
          </section>


          {/* ═══ KEY BENEFITS ═══ */}
          <section className="border-b border-ink/12 bg-panel">
            <div className="mx-auto grid max-w-[1280px] items-start gap-[clamp(24px,3.5vw,60px)] page-x py-[clamp(36px,4vw,60px)] lg:grid-cols-[minmax(200px,280px)_minmax(0,1fr)]">
              <div>
                <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
                  Key benefits
                </div>
              </div>
              <div className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {detail[5].map((b: any) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 border-b border-ink/10 pb-3 text-[14.5px] leading-[1.5] text-ink"
                  >
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand">
                      <path d="m4 12 6 6L20 6" />
                    </svg>
                    <span className="text-pretty">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* deliverables */}
          <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,80px)]">
            <div className="max-w-[62ch]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
                What you get
              </div>
              <p className="mt-5 mb-0 text-[clamp(18px,1.8vw,26px)] leading-[1.32] font-medium tracking-[-0.022em] text-ink text-pretty">
                Every deliverable below is part of the standard engagement.
              </p>
            </div>

            <div className="mt-[clamp(28px,3vw,48px)] flex flex-col">
              {sections.map((s: any, i: any) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="grid scroll-mt-24 items-start gap-[clamp(20px,3.5vw,60px)] border-t border-ink/15 py-[clamp(30px,3.5vw,52px)] lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]"
                >
                  <div className="flex flex-col gap-4 lg:sticky lg:top-26">
                    <div className="flex items-center gap-3.5">
                      <span className="text-[12px] font-semibold tabular-nums text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
                    </div>
                    <h2 className="m-0 text-[clamp(22px,2.5vw,34px)] leading-[1.1] font-medium tracking-[-0.026em] text-pretty">
                      {s.name}
                    </h2>
                    {s.copy && (
                      <p className="m-0 max-w-[46ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
                        {s.copy.body}
                      </p>
                    )}
                  </div>

                  {!s.copy == false ? (
                    <div className="flex flex-col gap-3.5 rounded-ui border border-ink/12 bg-white px-[26px] py-[26px]">
                      <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                        Included
                      </div>
                      {s.copy.points.map((pt: any) => (
                        <div
                          key={pt}
                          className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-ink last:border-b-0 last:pb-0"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span className="text-pretty">{pt}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          {/* process */}
          <section className="bg-ink text-cream">
            <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-coral/45 text-coral">
                {"How the engagement runs"}
              </div>
              <div className="mt-8 grid gap-x-6 gap-y-8 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
                {page.p.map((step: any, i: any) => (
                  <div key={step[0]} className="border-t border-cream/18 pt-5">
                    <div className="text-[11px] font-semibold tabular-nums tracking-[0.12em] text-coral">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-3 text-[19px] leading-[1.2] font-medium tracking-[-0.02em] text-pretty">
                      {step[0]}
                    </div>
                    <div className="mt-2.5 text-[13.5px] leading-[1.6] text-cream/62 text-pretty">
                      {step[1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
        <div className="grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(200px,300px)_minmax(0,1fr)]">
          <div>
            <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
              {"Common questions"}
            </div>
          </div>
          <div className="flex flex-col">
            {page.f.map((f: any) => (
              <details
                key={f.q}
                className="group border-b border-ink/14 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[clamp(16px,1.4vw,20px)] leading-[1.35] font-medium tracking-[-0.015em] text-ink text-pretty">
                  {f.q}
                  <span className="mt-1 shrink-0 text-[18px] leading-none text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3.5 mb-0 max-w-[62ch] text-[14.5px] leading-[1.65] text-muted text-pretty">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* related */}
      <section className="bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(40px,4vw,68px)]">
          <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
            Pairs well with
          </div>
          <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {related.map((s: any) => (
              <Link
                key={s[1]}
                href={serviceHref(s[1])}
                className="flex flex-col gap-3 rounded-[3px] border border-ink/12 bg-white px-[26px] pt-6 pb-7 transition-colors hover:border-brand/45"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[clamp(19px,1.9vw,25px)] leading-[1.18] font-medium tracking-[-0.022em] text-ink text-pretty">
                    {s[0]}
                  </div>
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="mt-1.5 shrink-0 text-brand">
                    <path d="m9 5 7 7-7 7" />
                  </svg>
                </div>
                <div className="text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                  {s[3]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">
            Ready to start with {detail[0]}?{" "}
            <span className="text-coral">Let&apos;s scope it.</span>
          </h2>
          <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            We will review your goals, agree the qualification criteria and come
            back with a plan you can hold us to.
          </p>
          <Link
            href="/contact"
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            {detail[2]}
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* footer (copied from other page) */}
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
            <div className="text-[12px] font-semibold text-[#be1622]">
              Leads That Drive Growth
            </div>
            <p className="m-0 max-w-[280px] text-[12px] leading-[1.6] text-muted-2">
              {"B2B demand generation for technology, SaaS and enterprise revenue teams. Headquartered in Pune, India. Serving clients globally."}
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
            { title: "Services", links: [
              { label: "Demand Generation", href: "Services.dc.html#demand-generation" },
              { label: "Content Syndication", href: "Services.dc.html#content-syndication" },
              { label: "Account-Based Marketing", href: "Services.dc.html#abm" },
              { label: "Email Marketing", href: "Services.dc.html#email-marketing" },
              { label: "Audience Intelligence", href: "Services.dc.html#audience-intelligence" },
              { label: "High-Intent B2B Data", href: "Services.dc.html#b2b-data" },
              { label: "Appointment Generation", href: "Services.dc.html#appointment-generation" },
              { label: "All 13 services", href: "/services", accent: true },
            ] },
            { title: "Solutions", links: [
              { label: "Technology", href: "/industries" },
              { label: "SaaS", href: "/industries" },
              { label: "Cybersecurity", href: "/industries" },
              { label: "FinTech", href: "/industries" },
              { label: "Healthcare", href: "/industries" },
              { label: "Generate More Leads", href: "/solutions#objective" },
              { label: "Build Pipeline", href: "/solutions#objective" },
              { label: "Accelerate Sales", href: "/solutions#objective" },
            ] },
            { title: "Company", links: [
              { label: "About Us", href: "/about" },
              { label: "Why Lidespy", href: "/why-lidespy" },
              { label: "Resources", href: "/resources" },
              { label: "Blog", href: "/blog" },
              { label: "Campaign Budget Calculator", href: "/calculator" },
              { label: "Contact Us", href: "/contact" },
            ] },
            { title: "Compliance", links: [
              { label: "GDPR", href: "/compliance/gdpr" },
              { label: "CAN-SPAM", href: "/compliance/can-spam" },
              { label: "CASL", href: "/compliance/casl" },
            ] },
          ].map((col: any) => (
            <div key={col.title} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col.title}
              </div>
              {col.links.map((l: any) => {
                // resolve the href (FIXED)
                var h = l.href
                if (h.startsWith("Services.dc.html#")) {
                  h = serviceHref(h.split("#")[1])
                }
                return (
                  <Link
                    key={l.label}
                    href={h}
                    className={`text-[12.5px] transition-colors hover:text-brand ${
                      l.accent ? "font-semibold text-brand" : "text-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                )
              })}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="text-muted-2 transition-colors hover:text-brand">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-2 transition-colors hover:text-brand">Terms of Service</Link>
            <Link href="/cookies" className="text-muted-2 transition-colors hover:text-brand">Cookie Policy</Link>
            <Temp2Final t={2} />
          </div>
        </div>
      </footer>
    </div>
  );
}
