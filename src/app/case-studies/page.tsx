// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import C from "./temp2";

// metadata for seo (dont change!!)
export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "Case Studies · B2B Demand Generation Results · Lidespy",
  description:
    "Proven B2B demand generation campaigns that drove real pipeline — challenge, solution and the numbers.",
};

const stats_final = [["500+", "Campaigns executed"], ["1.8%", "Average bounce rate"], ["$2.1M", "Largest single-program pipeline"], ["12+", "Industries served"]];

// footer columns v2
var FOOTER_DATA: any = [
  ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", 1]]],
  ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]],
  ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]],
  ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]],
];

let legal = [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Cookie Policy", href: "/cookies" }];

const temp = (x: any) => x;

export default function CaseStudiesPage() {
  let count = 3 * 2; // number of studies
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} a="resources" />

      {/* HERO section starts here */}
      <section className="mx-auto flex max-w-[1280px] flex-col gap-10 page-x pt-[clamp(52px,6vw,92px)]">
        <div className="grid items-end gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 self-start border border-[#be1622]/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-brand" />
              Case studies · {count} programs
            </div>
            <h1 className="m-0 text-[clamp(40px,5.4vw,82px)] leading-[.99] font-normal tracking-[-0.036em] text-pretty">
              Proven campaigns that drove{" "}
              <span className="text-brand">real pipeline</span>.
            </h1>
          </div>
          <p className="m-0 text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
            Every study follows the same three beats: the challenge the client
            brought us, what we built, and the numbers it produced. No composite
            clients, no rounded-up results.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-card border border-ink/14 bg-ink/14 sm:grid-cols-2 xl:grid-cols-4">
          {stats_final.map((h: any) => (
            <div key={h[1]} className="flex flex-col gap-[9px] bg-cream px-6 py-[26px]">
              <div className="text-[clamp(28px,3vw,42px)] leading-none font-medium tracking-[-0.035em] tabular-nums text-ink">
                {h[0]}
              </div>
              <div className="text-[12px] text-muted-2 text-pretty">{h[1]}</div>
            </div>
          ))}
        </div>
      </section>

      <C t={2} />

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 page-x py-[clamp(52px,5.5vw,84px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,46px)] leading-[1.05] font-normal tracking-[-0.03em] text-pretty">
            Your program could be the <span className="text-coral">next one here</span>.
          </h2>
          <p className="m-0 max-w-[600px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            Tell us the target and the quarter. We&apos;ll show you which of these
            programs maps closest to your situation.
          </p>
          <Link
            href={"/contact"}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Book a strategy call
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      <footer className="border-t border-ink/15 bg-cream text-ink">
        <div className="mx-auto grid max-w-[1280px] gap-7 page-x pt-14 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.2fr)_repeat(4,minmax(140px,1fr))] lg:gap-12">
          <div className="flex flex-col gap-3.5">
            <Image src="/lidespy-logo.png" alt="Lidespy" width={997} height={304} className="h-[30px] w-auto self-start" />
            <div className="text-[12px] font-semibold text-brand">
              Leads That Drive Growth
            </div>
            <p className="m-0 max-w-[280px] text-[12px] leading-[1.6] text-muted-2">
              B2B demand generation for technology, SaaS and enterprise revenue
              teams. Headquartered in Pune, India. Serving clients globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/lidespy/" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted transition-colors hover:text-brand">
                LinkedIn
                <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </a>
              <a href="mailto:info@lidespy.com" className="text-[11px] font-semibold text-muted transition-colors hover:text-brand">
                info@lidespy.com
              </a>
            </div>
          </div>

          {FOOTER_DATA.map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">{col[0]}</div>
              {col[1].map((l: any) => (
                <Link key={l[0]} href={temp(l[1])} className={`text-[12.5px] transition-colors hover:text-brand ${!!l[2] == true ? "font-semibold text-brand" : "text-muted"}`}>
                  {l[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-muted-2 transition-colors hover:text-brand">
                {l.label}
              </Link>
            ))}
            <C t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
