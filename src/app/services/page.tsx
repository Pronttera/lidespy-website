// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from 'next/image'
import { Fragment } from "react";
import C from "./_c";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "B2B Demand Generation Services · Lidespy",
  description:
    "Demand generation services that drive real revenue — from audience intelligence to appointment setting.",
};

// services data
const data = [
  ["demand-generation", "Demand Generation",
    "We build and execute full-funnel demand generation programs that identify in-market buyers, engage decision-makers across multiple channels, and deliver qualified leads ready for sales follow-up.",
    ["ICP-matched audience targeting","Intent data activation for in-market buyers","Multi-channel campaign orchestration","Qualified lead delivery with full reporting","Scalable from SMB to enterprise"],
    ["Target account list building","Campaign strategy and execution plan","Multi-channel outreach sequences","Weekly lead delivery reports","Pipeline contribution tracking"], "Start a demand generation campaign"],
  ["content-syndication", "Content Syndication",
    "Distribute your best content — whitepapers, eBooks, webinars, reports — to verified B2B audiences actively researching your category. Every content lead meets your ICP filters.",
    ["Reach buyers in active research phase","ICP-matched content distribution","BANT or custom lead qualification","Guaranteed lead volume delivery","GDPR and CAN-SPAM compliant"],
    ["Content campaign setup and management","Audience segmentation and filtering","Lead capture and qualification","CPL or flat-fee pricing options","Lead delivery in your preferred format (CSV, CRM sync)"], "Launch a content syndication campaign"],
  ["abm", "Account-Based Marketing (ABM)",
    "Target your most valuable accounts with precision. We build buying committee maps, identify key decision-makers, and orchestrate coordinated outreach across email, advertising, and human channels.",
    ["Named account targeting at scale","Buying committee mapping and multi-threading","Coordinated multi-channel ABM plays","Intent-driven account prioritization","Sales and marketing alignment built-in"],
    ["Target account list (TAL) build","Decision-maker identification and contact data","ABM campaign orchestration plan","Account engagement reporting","Buying committee coverage tracking"], "Build your ABM program"],
  ["email-marketing", "Email Marketing",
    "Precision B2B email campaigns reaching verified decision-makers at your target accounts. Every campaign is built for deliverability, compliance, and conversion — not just open rates.",
    ["Verified B2B contact database access","Deliverability-optimized campaign setup","Personalized messaging at scale","A/B testing and optimization","GDPR, CAN-SPAM, and CASL compliant"],
    ["List build and segmentation","Email copy and template creation","Campaign deployment and monitoring","Deliverability and performance reporting","Lead handoff and follow-up sequencing"], "Launch your email campaign"],
  ["audience-intelligence", "Audience Intelligence",
    "Before you spend a dollar on outreach, know exactly who to reach. We build verified audience profiles using business intelligence platforms, intent data, and human research to give your campaigns a targeting advantage.",
    ["ICP definition and refinement","Buying committee identification","Intent signal monitoring","Firmographic and technographic profiling","Competitor audience mapping"],
    ["Audience intelligence report","Verified contact database by segment","Intent data insights summary","ICP scoring model","Recommended channel strategy"], "Get your audience intelligence report"],
  ["b2b-data", "High-Intent B2B Data",
    "Access verified, permission-based B2B contact databases built for outreach. Every record is validated, enriched, and matched to your ICP — no recycled or low-quality lists.",
    ["Verified work emails and direct dials","Firmographic and technographic data","Intent-scored contact records","Custom list builds by industry, title, region","Regular refresh and validation"],
    ["Custom database build to your ICP","CSV or CRM-ready format","Data fields: Name, Title, Company, Email, Phone, LinkedIn, Tech Stack","Quality guarantee: verified deliverability rate","Suppression file application"], "Request a data sample"],
  ["webinar-promotion", "Webinar & Event Promotion",
    "Fill your webinars, virtual events, and in-person conferences with qualified registrants. We drive attendance from your ICP using email, content syndication, and targeted outreach.",
    ["Guaranteed registration targets","ICP-matched audience promotion","Multi-channel promotion (email, content, SDR)","Pre-event and reminder sequences","Post-event lead nurturing support"],
    ["Webinar promotion campaign setup","Registration landing page optimization advice","Audience targeting and list build","Registration delivery and reporting","Post-event attendee list with engagement data"], "Promote your next webinar"],
  ["appointment-generation", "Appointment Generation",
    "We book qualified sales meetings directly into your team’s calendars. Our SDR and telemarketing team identifies, qualifies, and converts in-market buyers into confirmed appointments.",
    ["Outbound prospecting and qualification","Multi-touch outreach (phone, email, LinkedIn)","BANT or custom qualification criteria","Calendar integration and booking","Full call recording and notes delivered"],
    ["Target account and contact list build","Outreach sequence (email + phone + LinkedIn)","Qualification script development","Appointment booking and calendar management","Weekly appointment report with notes"], "Start appointment generation"],
  ["gtm-strategy", "GTM Strategy",
    "Launch new markets, products, or personas with a data-driven go-to-market strategy built by B2B growth experts. We define your ICP, messaging, channel mix, and execution roadmap.",
    ["ICP and persona definition","Messaging framework development","Channel strategy and budget allocation","Competitive positioning","Launch timeline and execution plan"],
    ["GTM strategy document","ICP and persona profiles","Messaging playbook","Channel and campaign recommendations","90-day launch roadmap"], "Request a GTM strategy session"],
  ["ai-visibility", "AI Visibility",
    "Ensure your brand, products, and thought leadership appear in AI-generated answers, recommendations, and search summaries. We optimize your content and digital presence for LLM and AI search visibility.",
    ["AI search and LLM content optimization","Brand mention tracking in AI tools","Content strategy for AI discoverability","Schema and structured data optimization","Competitive AI visibility benchmarking"],
    ["AI visibility audit report","Content optimization recommendations","AI-optimized content creation","Monthly AI visibility tracking report","Competitor AI share-of-voice analysis"], "Improve your AI visibility"],
  ["performance-marketing", "Digital & Performance Marketing",
    "Paid search, display, programmatic, and social advertising campaigns managed for maximum ROI. We run performance marketing programs built around pipeline contribution, not impressions.",
    ["Google Ads and paid search management","LinkedIn and B2B social advertising","Programmatic and display campaigns","Landing page and conversion optimization","Full attribution and ROI reporting"],
    ["Campaign setup and management","Ad creative and copywriting","Audience targeting and bid strategy","Weekly performance reporting","Monthly strategy and optimization review"], "Launch a performance marketing campaign"],
  ["digital-marketing", "Digital Marketing",
    "Own the channels your buyers already search, read and scroll. We run organic search, social, content and marketing automation as one programme, so your brand keeps showing up between campaigns — not only while paid spend is live.",
    ["Always-on visibility between paid campaigns","SEO and content built around buyer search intent","Organic LinkedIn and social presence with a real cadence","Marketing automation and nurture that keeps leads warm","One reporting view across every owned channel"],
    ["Digital channel audit and strategy","SEO and content programme","Organic social and LinkedIn management","Marketing automation and nurture journeys","Monthly digital performance reporting"], "Build your digital marketing engine"],
  ["website-design", "Technology Development",
    "Modern, conversion-optimized B2B websites designed to generate leads and communicate your value proposition. From landing pages to full website builds.",
    ["Conversion-focused B2B website design","Lead capture and form optimization","CMS development (WordPress, Webflow)","SEO-ready architecture","Mobile-first, fast-loading builds"],
    ["Website discovery and wireframes","UI/UX design (desktop + mobile)","Front-end and back-end development","CMS setup and content migration","QA, launch, and post-launch support"], "Request a website quote"],
]

// footer links (v2)
const footer_cols: any = [
  ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", 1]]],
  ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]],
  ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]],
  ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]],
]

let LEGAL_links = [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Cookie Policy", href: "/cookies" }]

function pad(n: any) {
  if (n < 10) {
    return "0" + n
  } else {
    return String(n).padStart(2, "0")
  }
}

const isServicePage = (k: any) => {
  if (["demand-generation", "content-syndication", "abm", "email-marketing", "audience-intelligence", "b2b-data", "webinar-promotion", "appointment-generation", "gtm-strategy", "ai-visibility", "performance-marketing", "digital-marketing", "website-design"].includes(k)) {
    return true
  } else {
    return false
  }
}

// TODO: refactor later
export default function ServicesPage() {
  var ticker = [...data, ...data].map((s: any) => s[1]);
  let temp = data.length // 12 services

  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} a="solutions" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-start gap-[clamp(32px,5vw,80px)] page-x pt-[clamp(64px,7vw,104px)] pb-[clamp(48px,5vw,72px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)]">
          <div className="flex flex-col gap-7">
            <div className="inline-block self-start border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#ff5a4f] uppercase">
              Services · 13 ways to fill your pipeline
            </div>
            <h1 className="m-0 text-[clamp(40px,5.2vw,80px)] leading-none font-normal tracking-[-0.035em] text-pretty">
              Demand generation services that drive{" "}
              <span className="text-coral">real revenue</span>.
            </h1>
            <p className="m-0 max-w-[640px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
              From audience intelligence to appointment setting — every service
              we offer is designed to accelerate your pipeline and contribute
              measurably to revenue.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-[2px] bg-brand-cta px-7 py-[17px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
              >
                Book a strategy call
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
                  <path d="M3 12h17M14 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                href={"/calculator"}
                className={"inline-flex items-center gap-3 rounded-ui border border-cream/30 px-[22px] py-[17px] " + "text-[12px] font-semibold tracking-[0.04em] text-cream uppercase transition-colors hover:border-coral hover:text-coral"}
              >
                Estimate a campaign budget
              </Link>
            </div>
          </div>

          <div className="rounded-card border border-cream/16 bg-cream/4 px-[22px] pt-[22px] pb-3">
            <div className="mb-2.5 text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
              Index
            </div>
            {data.map((s: any, i: any) => {
              return (
                <a
                  key={s[0]}
                  href={"#" + s[0]}
                  className="flex items-baseline gap-2.5 border-b border-cream/10 py-[7px] text-[13.5px] text-cream transition-colors hover:text-coral"
                >
                  <span className="w-[22px] shrink-0 text-[10.5px] tabular-nums text-coral">
                    {pad(i + 1)}
                  </span>
                  <span className="min-w-0 flex-1 leading-[1.3]">{s[1]}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-cream/12 py-3.5">
          <div className="ld-marquee [animation-duration:48s]">
            {ticker.map((t: any, i: any) => (
              <span
                key={i}
                className="inline-flex items-center gap-[18px] px-[22px] text-[12px] tracking-[0.1em] whitespace-nowrap text-cream/55 uppercase"
              >
                {t}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      <div className="mx-auto max-w-[1280px] page-x pt-4 pb-16">
        {data.map((s: any, i: any) => (
          <section
            key={s[0]}
            id={s[0]}
            className="grid scroll-mt-24 items-start gap-[clamp(28px,5vw,80px)] border-b border-ink/15 py-[clamp(48px,5vw,72px)] lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]"
          >
            <div className="flex flex-col gap-5 lg:sticky lg:top-26">
              <div className="flex items-center gap-3.5">
                <span className="text-[12px] font-semibold tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
              </div>
              <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
                {s[1]}
              </h2>
              <p className="m-0 text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
                {s[2]}
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href={"/contact"}
                  className="inline-flex items-center gap-3 rounded-ui bg-brand-cta px-6 py-[15px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
                >
                  {s[5]}
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
                    <path d="M3 12h17M14 6l6 6-6 6" />
                  </svg>
                </Link>
                {/* only some services get this */}
                {isServicePage(s[0]) == true ? (
                  <Link
                    href={isServicePage(s[0]) ? `/services/${s[0]}` : `/services#${s[0]}`}
                    className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase transition-colors hover:text-brand"
                  >
                    Full service detail
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand">
                      <path d="M3 12h17M14 6l6 6-6 6" />
                    </svg>
                  </Link>
                ) : false}
              </div>
            </div>

            {(() => {
              // benefits + deliverables
              const x1 = s[3]
              const x2 = s[4]
              return (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-3.5 rounded-ui border border-ink/14 bg-white px-6 py-[26px]">
                    <div className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                      Key benefits
                    </div>
                    {x1.map((b: any) => (
                      <div
                        key={b}
                        className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-ink"
                      >
                        <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="square" aria-hidden className="mt-1 shrink-0 text-brand">
                          <path d="m4 12 6 6L20 6" />
                        </svg>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3.5 rounded-ui border border-ink/10 bg-[#eff1ea] px-6 py-[26px]">
                    <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                      Deliverables
                    </div>
                    {x2.map((d: any) => (
                      <div
                        key={d}
                        className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-muted"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-pretty">
            Not sure which service fits?{" "}
            <span className="text-coral">Start with a conversation.</span>
          </h2>
          <p className="m-0 max-w-[600px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            Our team will review your goals and recommend the right mix of
            channels for your budget and timeline.
          </p>
          <Link
            href="/contact"
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Book a strategy call
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

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

          {footer_cols.map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col[0]}
              </div>
              {col[1].map((l: any) => (
                <Link
                  key={l[0]}
                  href={l[1]}
                  className={`text-[12.5px] transition-colors hover:text-brand ${
                    !!l[2] ? "font-semibold text-brand" : "text-muted"
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
            {LEGAL_links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted-2 transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
            <C t={2} />
          </div>
        </div>
      </footer>
    </div>
  );
}
