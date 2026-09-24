// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import C from "./_c";
import { Fragment } from "react";

// blog page (v3 FINAL)
export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog · B2B Demand Generation Insights · Lidespy",
  description:
    "Practical writing on ABM, intent data, content syndication and deliverability from the team running the campaigns.",
};

// posts data (copied from dictionary, DO NOT EDIT the dictionary it wont update here)
const data2: any = [["is-cold-email-still-worth-it-2026","Outbound","3 min read","Is Cold Email Still Worth It in 2026? What the Data Actually Shows","Cold email reply rates have dropped hard since 2022, but it hasn't stopped working — it's stopped working the old way. Here's what actually moves the needle in 2026.","Campaign team","photo-1557200134-90327ee9fafa","A Gmail inbox open on a laptop"],
  ["why-your-mqls-arent-converting","Demand gen","3 min read","Why Your MQLs Aren't Turning Into Sales Conversations (And How to Fix It)","MQL-to-SQL conversion rates are stubbornly low across most B2B pipelines. The problem usually isn't sales follow-up — it's how the lead got labeled an MQL in the first place.","Research team","photo-1526628953301-3e589a6a8b74","A marketing dashboard showing conversion metrics"],
  ["ai-sdrs-vs-human-appointment-setters","Outbound","3 min read","AI SDRs vs. Human Appointment Setters: What's Actually Working in 2026","AI SDR adoption tripled in a year, but the \"replace your whole team\" pitch doesn't hold up for most B2B companies. Here's where AI helps, where humans still win, and how most teams are actually structured.","Campaign team","photo-1531746790731-6c087fecd65a","A white robotic hand"],
  ["b2b-content-syndication-worth-it-2026","Syndication","3 min read","B2B Content Syndication in 2026: Is It Still Worth the Spend?","Content syndication remains one of the highest-volume B2B lead channels, but the \"publish everywhere, capture every form fill\" version of it is producing worse leads than ever. Here's what's changed.","Campaign team","photo-1533750349088-cd871a92f312","Marketing strategy notes and books on a desk"],
  ["real-cost-of-bad-b2b-data","Data","3 min read","The Real Cost of Bad B2B Data (And How to Actually Fix Your List)","The average B2B data provider delivers roughly 50% accuracy. Here's what that actually costs a growing sales team, and the practical framework for evaluating a provider before you buy.","Research team","photo-1504868584819-f8e8b4b6d7e3","A laptop showing data reports"],
  ["abm-guide-mid-market-2026","ABM","3 min read","Account-Based Marketing in 2026: A Practical Guide for Mid-Market B2B Teams","ABM isn't just an enterprise tactic anymore, but most mid-market teams still run it like a slightly-more-personalized version of mass marketing. Here's what a lean, practical ABM program actually looks like.","Research team","photo-1557804506-669a67965ba0","A team planning at a whiteboard"],
  ["does-cold-calling-still-work-b2b-2026","Outbound","3 min read","Does Cold Calling Still Work in B2B? Here's What the 2026 Numbers Say","\"Cold calling is dead\" has been said every year since 2015. The 2026 data says otherwise — as long as you're calling the right people, the right way.","Campaign team","photo-1423666639041-f56000c27a9a","Hands holding a phone beside a laptop"],
  ["tofu-mofu-bofu-funnel-guide","Demand gen","3 min read","TOFU, MOFU, BOFU: Building a Multi-Funnel Lead Gen Strategy That Actually Converts","Most B2B teams have a funnel diagram on a slide somewhere and a lead gen program that ignores it completely. Here's how to actually build campaigns around each stage instead of running one generic motion for everyone.","Research team","photo-1543286386-713bdd548da4","A hand-drawn growth chart on a desk"],
  ["buyer-intent-data-explained","Intent data","3 min read","Buyer Intent Data Explained: How to Use It Without Wasting Your Budget","Intent data has gone from a nice-to-have to something most high-performing B2B teams use, but it's also easy to buy and never actually act on. Here's what it is, what it isn't, and how to use it well.","Research team","photo-1560472354-b33ff0c44a43","An analytics graph of clicks and impressions"],
  ["in-house-appointment-generation","Outbound","3 min read","In-House Appointment Generation: The Real 2026 Cost and How to Get It Right","The salary line item for an in-house SDR isn't the real cost. Here's the fuller picture B2B leaders are running in 2026 before building an in-house appointment generation team.","Campaign team","photo-1542744173-8e7e53415bb0","A sales team meeting around a table"],
  ["b2b-data-compliance-checklist-2026","Compliance","3 min read","GDPR, CCPA, and Your B2B Contact Data: A 2026 Compliance Checklist","\"It's business contact data, not personal data\" stopped being a valid excuse years ago. Here's what actually applies to your outbound list in 2026, and how to check whether your current data source holds up.","Compliance lead","photo-1589829545856-d10d557cf95f","A statue of Lady Justice holding scales"],
  ["multi-channel-outbound-2026","Outbound","3 min read","Why Email-Only Outbound Is Dying in 2026 (And What to Do Instead)","A single-channel outbound sequence is competing against a full inbox, a distracted LinkedIn feed, and a phone that almost nobody calls anymore. Here's why coordinating channels is outperforming any one of them alone.","Campaign team","photo-1563986768609-322da13575f3","Someone working across a laptop and a phone"],
  ["audience-intelligence-explained","Intent data","3 min read","Audience Intelligence Explained: Spotting High-Intent B2B Accounts Before the Form Fill","Most B2B teams only see intent after a form fill. Here's how audience intelligence surfaces buying signals earlier, and how to act on them without overreaching.","Research team","photo-1551288049-bebda4e38f71","A dashboard showing account engagement signals across channels"],
  ["b2b-cold-email-deliverability-2026","Data","3 min read","Email Deliverability in 2026: Why Your Cold Outbound Is Landing in Spam","Good copy doesn't matter if it never reaches the inbox. Here's what's actually driving B2B cold email deliverability problems in 2026, and the fixes that work.","Research team","photo-1557200134-90327ee9fafa","An email inbox with several messages flagged as spam"],
  ["b2b-lead-scoring-model","Demand gen","3 min read","Lead Scoring Models That Actually Predict Sales-Ready Accounts","Most B2B lead scoring models score activity, not intent to buy. Here's how to build one that actually predicts which accounts are sales-ready.","Research team","photo-1526628953301-3e589a6a8b74","A lead scoring dashboard ranking accounts by readiness"],
  ["b2b-webinar-lead-generation-2026","Demand gen","3 min read","B2B Webinars in 2026: Turning Registrants Into Pipeline","A packed registrant list means nothing if nobody shows up ready to buy. Here's how B2B teams are running webinars that actually produce pipeline in 2026.","Research team","photo-1540575467063-178a50c2df87","A B2B webinar presentation with an engaged live audience panel"],
  ["linkedin-outbound-2026","Outbound","3 min read","LinkedIn Outbound in 2026: Does Social Selling Actually Convert for B2B?","LinkedIn connection limits and algorithm changes shifted reply rates in 2026. Here's what's actually converting in B2B social selling, and how it pairs with email.","Campaign team","photo-1563986768609-322da13575f3","A sales rep reviewing LinkedIn outreach on a laptop"]];

var temp = data2[0]
// featured post = the newest one
const FEATURED_obj = {
  s: temp[0],
  title: temp[3],
  b: temp[4],
  meta: `${temp[2]} · ${temp[1]}`,
  author: `Lidespy ${temp[5].toLowerCase()}`,
  role: 'Outbound campaigns',
  img: `https://images.unsplash.com/${temp[6]}?auto=format&fit=crop&w=${1400}&q=70`,
  alt: temp[7]
}

function stuff(x: any) {
  let res: any = []
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < x.length; j++) {
      res.push(x[j][3])
    }
  }
  return res
}

export default function BlogPage() {
  const ticker = stuff(data2);
  const unused_var = 42;

  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} a="resources" />

      {/* HERO section */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-end gap-[clamp(32px,5vw,72px)] page-x pt-[clamp(56px,6.5vw,96px)] pb-[clamp(40px,5vw,64px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,.85fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 self-start border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#e11b22]" />
              Blog · new every week
            </div>
            <h1 className="m-0 text-[clamp(40px,5.4vw,82px)] leading-[.99] font-normal tracking-[-0.036em] text-pretty">
              Learn how to upgrade your{" "}
              <span className="text-coral">demand generation</span>.
            </h1>
            <p className="m-0 max-w-[620px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
              {"Practical writing on ABM, intent data, content syndication and deliverability — from the team running the campaigns, not the marketing department."}
            </p>
          </div>

          <div className={"flex flex-col gap-3.5 rounded-[3px] border border-cream/16 bg-cream/4 " + "px-6 pt-6 pb-[26px]"}>
            <div className="text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
              Get it in your inbox
            </div>
            <p className="m-0 text-[13.5px] leading-[1.55] text-cream/68">
              One email a month: what worked in live B2B campaigns, with the
              numbers. No drip sequence.
            </p>
            <C t={2} />
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-cream/12 py-[13px]">
          <div className="ld-marquee [animation-duration:42s]">
            {ticker.map((x1: any, idx: any) => (
              <span
                key={idx}
                className="inline-flex items-center gap-[18px] px-5 text-[11.5px] tracking-[0.1em] whitespace-nowrap text-cream/50 uppercase"
              >
                {x1}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1280px] page-x pt-[clamp(36px,4vw,56px)]">
        <Link
          href={"/blog/" + FEATURED_obj.s}
          className="grid overflow-hidden rounded-card border border-ink/15 bg-white text-ink transition-colors hover:border-brand/55 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]"
        >
          {(() => {
            // slot (image with bg)
            var positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test("min-h-[300px]");
            return (
              <div className={`${positioned ? "" : "relative "}overflow-hidden bg-panel ${"min-h-[300px]"}`}>
                <Image
                  src={FEATURED_obj.img}
                  alt={FEATURED_obj.alt}
                  fill
                  sizes={"(max-width: 768px) 100vw, 50vw"}
                  priority={false}
                  className="object-cover"
                />
              </div>
            );
          })()}
          <div className="flex flex-col justify-center gap-[18px] p-[clamp(28px,3.5vw,48px)]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                Editor&apos;s pick
              </span>
              <span className="h-px w-8 bg-brand/50" />
              <span className="text-[11.5px] text-muted-3">{FEATURED_obj.meta}</span>
            </div>
            <h2 className="m-0 text-[clamp(26px,2.9vw,42px)] leading-[1.06] font-medium tracking-[-0.028em] text-pretty">
              {FEATURED_obj.title}
            </h2>
            <p className="m-0 text-[15px] leading-[1.6] text-muted text-pretty">
              {FEATURED_obj.b}
            </p>
            <div className="mt-1 flex items-center gap-3 border-t border-ink/12 pt-[18px]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=70"
                alt=""
                width={38}
                height={38}
                className="h-[38px] w-[38px] rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-[13px] font-semibold">{FEATURED_obj.author}</div>
                <div className="text-[11.5px] text-muted-2">{FEATURED_obj.role}</div>
              </div>
              <span className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-ink/18">
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
              </span>
            </div>
          </div>
        </Link>
      </section>

      <C t={3} />

      {/* contact cta - copied */}
      <section className="border-t border-ink/12 bg-red-700">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 page-x py-[clamp(52px,5.5vw,84px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,46px)] leading-[1.05] font-medium tracking-[-0.03em] text-white text-pretty">
            Rather see it run on your data?
          </h2>

          <p className="m-0 max-w-[650px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-white/80 text-pretty">
            Get a qualified intent database and map a six-week program to your
            pipeline target.
          </p>

          <div className="mt-4 grid w-full max-w-[1050px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["https://wa.me/918329055225", 1, "shadow-[0_12px_30px_rgba(0,0,0,0.15)]", "https://img.icons8.com/color/96/whatsapp.png", "WhatsApp"],
              ["tel:+14082908489", 0, "shadow-[0_12px_28px_rgba(0,0,0,0.10)]", "https://img.icons8.com/fluency/96/phone.png", "Call us"],
              ["mailto:info@lidespy.com", 0, "shadow-[0_12px_28px_rgba(0,0,0,0.10)]", "https://img.icons8.com/fluency/96/mail.png", "E-mail us"],
              ["https://calendly.com/your-name", 1, "shadow-[0_12px_28px_rgba(0,0,0,0.10)]", "https://img.icons8.com/fluency/96/calendar.png", "Book a Call"],
            ].map((arr: any, i: any) => (
              <a
                key={i}
                href={arr[0]}
                target={arr[1] == 1 ? "_blank" : undefined}
                rel={arr[1] == 1 ? "noopener noreferrer" : undefined}
                className={"group flex h-[72px] items-center justify-between rounded-[2px] border border-ink/15 bg-white px-6 text-ink " + arr[2] + " transition-all duration-300 hover:-translate-y-1 hover:border-brand-cta"}
              >
                <span className="flex items-center gap-4">
                  <Image
                    src={arr[3]}
                    alt=""
                    aria-hidden
                    width={24}
                    height={24}
                    className="h-6 w-6"
                    unoptimized
                  />
                  <span className="text-[16px] font-semibold">{arr[4]}</span>
                </span>

                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand-cta transition-transform group-hover:translate-x-1"><path d="M3 12h17M14 6l6 6-6 6" /></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
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
                <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand"><path d="M7 17 17 7M8 7h9v9" /></svg>
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
            ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", true]]],
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
            <Link key="/privacy" href="/privacy" className="text-muted-2 transition-colors hover:text-brand">
              Privacy Policy
            </Link>
            <Link key="/terms" href="/terms" className="text-muted-2 transition-colors hover:text-brand">
              Terms of Service
            </Link>
            <Link key="/cookies" href="/cookies" className="text-muted-2 transition-colors hover:text-brand">
              Cookie Policy
            </Link>
            <C t={4} cls="cursor-pointer text-muted-2 transition-colors hover:text-brand" />
            <C t={5} />
          </div>
        </div>
      </footer>
    </div>
  );
}