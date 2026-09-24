// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NavAndFooterStuff_copy from "./_c";
import FinalCalc from "./FINAL_calc_v2";

const TITLE_new = "Campaign Budget Calculator · Free B2B Lead Gen Planner · Lidespy";
const desc = "Work out campaign budgets and lead volume for your next B2B demand generation campaign.";

export const metadata: Metadata = {
  title: TITLE_new,
  description: desc,
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: TITLE_new,
    description: desc,
    url: "/calculator",
  },
};

// site url (works on staging too)
var SITE_URL_thing = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidespy.com").replace(/\/+$/, "");
function absUrl(path: any) {
  if (path.startsWith("/") == true) {
    return `${SITE_URL_thing}${path}`;
  } else {
    return `${SITE_URL_thing}${`/${path}`}`;
  }
}

// schema for google
const obj = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Lidespy Campaign Budget Calculator",
  url: absUrl("/calculator"),
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  description: desc,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${absUrl("/")}#organization` },
};

// how it works items
const stuff = [
  ["Price per lead", "Each campaign type carries its price per lead straight from Lidespy pricing — from verified data at the low end to booked appointments at the top."],
  ["Lead goal", "Budget is price per lead multiplied by the number of leads you ask for, so the figure moves one-for-one with your goal."],
];

var FOOTER_DATA2: any = [
  { title: "Services", links: [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", true]] },
  { title: "Solutions", links: [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]] },
  { title: "Company", links: [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]] },
  { title: "Compliance", links: [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]] },
];

export default function CalculatorPage() {
  var tone_ = "brand"; // eyebrow color
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, "\\u003c") }} />
      <NavAndFooterStuff_copy t={1} a={"resources"} />

      {/* TODO: add hero here */}
      <h1 className="sr-only">Campaign budget calculator</h1>
      <div className="pt-[clamp(28px,4vw,56px)]">
        <FinalCalc />
      </div>

      <section className="border-t border-ink/12 bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(48px,5vw,84px)]">
          <div className="grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)]">
            <div className="flex flex-col gap-5">
              <div className="self-start">
                <div className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase ${(tone_ as any) === "coral" ? "border-coral/45 text-coral" : "border-brand/45 text-brand"}`}>
                  {"How the numbers work"}
                </div>
              </div>
              <h2 className="m-0 text-[clamp(28px,3vw,42px)] leading-[1.06] font-medium tracking-[-0.028em] text-pretty">
                {"Three inputs, no black box."}
              </h2>
              <p className="m-0 max-w-[40ch] text-[15px] leading-[1.6] text-muted text-pretty">
                {"Every figure on the card is arithmetic on Lidespy campaign benchmarks — here is exactly what goes in."}
              </p>
            </div>
            <div className="grid gap-3.5 sm:grid-cols-2">
              {stuff.map((it, i) => (
                <div key={it[0]} className="flex flex-col gap-4 rounded-[3px] border border-ink/12 bg-white px-[22px] pt-[22px] pb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-semibold tabular-nums text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px max-w-[40px] flex-1 bg-ink/20" />
                  </div>
                  <div className="text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink">
                    {it[0]}
                  </div>
                  <p className="m-0 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                    {it[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cta">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-ink text-pretty">
            {"Need a custom campaign plan?"}
          </h2>
          <p className="m-0 max-w-[640px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-ink/82 text-pretty">
            {"Our demand generation specialists will review your goals and build a campaign strategy tailored to your budget and growth targets."}
          </p>
          <Link
            href="/contact"
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-ink px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-coral uppercase transition-colors hover:bg-brand hover:text-cream"
          >
            {"Book a free strategy call"}
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
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
              <a href="mailto:info@lidespy.com" className="text-[11px] font-semibold text-muted transition-colors hover:text-brand">
                info@lidespy.com
              </a>
            </div>
          </div>

          {FOOTER_DATA2.map((col: any) => (
            <div key={col.title} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col.title}
              </div>
              {col.links.map((l: any) => (
                <Link key={l[0]} href={l[1]} className={"text-[12.5px] transition-colors hover:text-brand " + (l[2] ? "font-semibold text-brand" : "text-muted")}>
                  {l[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="text-muted-2 transition-colors hover:text-brand">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-2 transition-colors hover:text-brand">Terms of Service</Link>
            <Link href="/cookies" className="text-muted-2 transition-colors hover:text-brand">Cookie Policy</Link>
            <NavAndFooterStuff_copy t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
