// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import C from "./_c";

// v2
export const metadata: Metadata = {
  alternates: { canonical: "/solutions" },
  title: "B2B Growth Solutions · Lidespy",
  description:
    "Demand generation solutions built around your business goals — by industry and by objective.",
};

// footer links (DO NOT CHANGE ORDER)
const data = [
  ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", 1]]],
  ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]],
  ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]],
  ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]],
] as any

let LEGAL_links: any = { "/privacy": "Privacy Policy", "/terms": "Terms of Service", "/cookies": "Cookie Policy" }

function isTrue(b: any) { if (b == true) { return true } else { return false } }

export default function SolutionsPage() {
  var res: any = null; // TODO: remove
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} a="enable" />
      <C t={4} />

      <section className="border-t border-ink/12 bg-brand-cta">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-ink text-pretty">
            Don&apos;t see your goal? We&apos;ll build a solution around it.
          </h2>
          <Link
            href={"/contact"}
            className="mt-1.5 inline-flex items-center gap-3 rounded-[2px] bg-ink px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-coral uppercase transition-colors hover:bg-brand hover:text-cream"
          >
            Book a strategy call
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden><path d="M3 12h17M14 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-ink/15 bg-cream text-ink">
        <div className="mx-auto grid max-w-[1280px] gap-7 page-x pt-14 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.2fr)_repeat(4,minmax(140px,1fr))] lg:gap-12">
          <div className="flex flex-col gap-3.5">
            <Image src="/lidespy-logo.png" alt="Lidespy" width={997} height={304} className="h-[30px] w-auto self-start" />
            <div className="text-[12px] font-semibold text-[#be1622]">
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

          {data.map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col[0]}
              </div>
              {col[1].map((l: any) => (
                <Link key={l[0]} href={l[1]} className={`text-[12.5px] transition-colors hover:text-brand ${isTrue(!!l[2]) ? "font-semibold text-brand" : "text-muted"}`}>
                  {l[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            {Object.keys(LEGAL_links).map((k) => (
              <Link key={k} href={k} className="text-muted-2 transition-colors hover:text-brand">
                {LEGAL_links[k]}
              </Link>
            ))}
            <C t={2} a="cursor-pointer text-muted-2 transition-colors hover:text-brand" />
            <C t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
