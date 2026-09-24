// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import C from "./_c";
import NewPageStuff from "./new_page_stuff";

// ✅ metadata
export const metadata: Metadata = {
  alternates: { canonical: "/resources" },
  title: "Resources · B2B Marketing Guides, Reports & Webinars · Lidespy",
  description: "B2B demand generation insights, research and resources — guides, benchmarks and reports.",
};

const cta_stuff = ["Get it first", "New research, straight to your inbox.", "One email a month: fresh benchmarks and what actually worked in live B2B campaigns. No drip sequence.", "Talk to us"]

export default function ResourcesPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} a="resources" />

      {/* need suspense here or next complains */}
      <Suspense fallback={null}>
        <NewPageStuff />
      </Suspense>


      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-[clamp(28px,4vw,72px)] page-x py-[clamp(44px,5vw,72px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,.95fr)]">
          <div className="max-w-[560px]">
            <div className="mb-3.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              {cta_stuff[0]}
            </div>
            <h2 className="m-0 mb-3.5 text-[clamp(26px,3vw,44px)] leading-[1.06] font-medium tracking-[-0.03em] text-pretty">
              {cta_stuff[1]}
            </h2>
            <p className="m-0 text-[15px] leading-[1.6] text-cream/68 text-pretty">
              {cta_stuff[2]}
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-[3px] border border-cream/16 bg-cream/4 p-[clamp(20px,2.2vw,28px)]">
            <C t={6} />
            <div className="flex items-center gap-3 border-t border-cream/12 pt-3.5 text-[12.5px] text-cream/55">
              Prefer to talk it through?
              <Link
                href="/contact"
                data-textlink
                className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.04em] text-ink uppercase ${"text-[11px] !text-cream"}`}
              >
                {cta_stuff[3]}
                <span data-arrow className="text-[16px] text-brand">
                  →
                </span>
              </Link>
            </div>
          </div>
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

          {[["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", 1]]], ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]], ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]], ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]]].map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col[0]}
              </div>
              {col[1].map((l: any) => (
                <Link key={l[0]} href={l[1]} className={`text-[12.5px] transition-colors hover:text-brand ${l[2] == 1 ? "font-semibold text-brand" : "text-muted"}`}>
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
            <C t={2} />
            <C t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
