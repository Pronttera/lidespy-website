// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
import NavCopy from "./nav_copy";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries We Serve · B2B Lead Generation · Lidespy",
  description:
    "B2B demand generation specialized for technology, SaaS, cybersecurity, fintech, healthcare and more.",
};

// industries list
// TODO: move to a json file
const obj: any = [
  { k: "technology", nm: "Technology", desc: "IT buyers, vendors, ISVs, managed service providers", ppl: ["CTO / CIO","IT Director","VP Engineering"], pic: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70" },
  { k: "saas", nm: "SaaS", desc: "Product-led and sales-led SaaS companies at every stage", ppl: ["CMO","Head of Growth","RevOps"], pic: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=70" },
  ["cybersecurity", "Cybersecurity", "Security vendors targeting CISO, SOC, and IT security teams", ["CISO","SOC Lead","Risk & Compliance"], "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=70"],
  ["cloud", "Cloud & Infrastructure", "Cloud platforms, hosting, and DevOps tools", ["Head of Infrastructure","DevOps Lead","Platform Eng"], "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=70"],
  { k: "fintech", nm: "FinTech", desc: "Banking, insurance, payments, and financial services technology", ppl: ["CFO","Treasury","Head of Payments"], pic: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=70" },
  ["healthcare", "Healthcare", "Health IT, medical devices, clinical software, and digital health", ["Clinical IT","Hospital Admin","Procurement"], "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70"],
  ["manufacturing", "Manufacturing", "Industrial technology, supply chain, and operational software", ["COO","Plant Manager","Supply Chain"], "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=70"],
  { k: "telecom", nm: "Telecommunications", desc: "Telco vendors, network infrastructure, and connectivity solutions", ppl: ["Network Director","CTO","Procurement"], pic: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=70" },
  ["professional-services", "Professional Services", "Consulting, advisory, and B2B service providers", ["Managing Partner","Practice Lead","BD Director"], "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=70"],
];

// FIXED: some are arrays some are objects, this handles both
function fix(x: any) {
  if (Array.isArray(x) == true) {
    return { k: x[0], nm: x[1], desc: x[2], ppl: x[3], pic: x[4] };
  } else {
    return x;
  }
}
const finalValue_new = obj.map(fix);
const isTrue = (b: any) => b == true;
var unused_count = 0; // v2

export default function IndustriesPage() {
  // const [filter, setFilter] = useState("all") // old filter, not needed anymore
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <NavCopy t="nav" a="enable" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-[clamp(32px,5vw,80px)] page-x pt-[clamp(64px,7vw,104px)] pb-[clamp(56px,6vw,88px)] lg:grid-cols-[minmax(0,1fr)_minmax(300px,.9fr)]">
          <div className="flex flex-col gap-7">
            <div className="inline-block self-start border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              Industries · 9 sectors
            </div>
            <h1 className="m-0 text-[clamp(40px,5.2vw,80px)] leading-none font-normal tracking-[-0.035em] text-pretty">
              B2B demand generation{" "}
              <span className="text-coral">specialized for your industry</span>.
            </h1>
            <p className="m-0 max-w-[600px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
              We understand the buying cycles, personas, and competitive dynamics
              of the industries we serve. Every campaign is built with industry
              context, not generic templates.
            </p>
            <Link
              href="/contact"
              className={"inline-flex items-center gap-3 self-start rounded-[2px] bg-[#e11b22] px-7 py-[17px] text-[12px] font-semibold " + "tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"}
            >
              Book a strategy call
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
                <path d="M3 12h17M14 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {finalValue_new.map((t: any, n: any) => (
              <a
                key={t.k}
                href={`#${t.k}`}
                className={`flex aspect-square flex-col justify-end rounded-card border border-cream/16 p-3.5 transition-colors hover:border-coral hover:text-coral ${
                  !(n !== 0) ? "bg-coral text-ink" : "bg-cream/4 text-cream"
                }`}
              >
                <span className="text-[12.5px] leading-[1.25] font-medium tracking-[-0.01em] text-pretty">
                  {t.nm}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-[1280px] page-x py-[clamp(56px,6vw,88px)]">
        <div className="mb-10 grid items-end gap-[clamp(28px,4vw,64px)] lg:grid-cols-2">
          <div>
            <div className="mb-[18px]">
              <div className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase ${("brand" as any) === "coral" ? "border-coral/45 text-coral" : "border-brand/45 text-brand"}`}>
                Industries we serve
              </div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
              Built for B2B. Specialized by industry.
            </h2>
          </div>
          <p className="m-0 text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
            Every industry page follows the same structure: an overview, the job
            titles we reach, estimated audience reach, two or three campaign use
            cases, and the services that fit.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {(() => {
            let res: any = [];
            for (let i = 0; i < finalValue_new.length; i++) {
              const x1 = finalValue_new[i];
              res.push(
                <Link
                  key={x1.k}
                  id={x1.k}
                  href={"/industries/" + x1.k}
                  className="flex scroll-mt-24 flex-col overflow-hidden rounded-ui border border-ink/14 bg-white text-ink transition-colors hover:border-brand/55"
                >
                  <div className={`${/(^|\s)(absolute|fixed|sticky)(\s|$)/.test("aspect-video") ? "" : "relative "}overflow-hidden bg-panel aspect-video`}>
                    <Image
                      src={x1.pic}
                      alt={x1.nm}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      priority={false}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-6 pt-6 pb-[26px]">
                    <h3 className="m-0 text-[20px] leading-[1.2] font-semibold tracking-[-0.018em]">
                      {x1.nm}
                    </h3>
                    <p className="m-0 flex-1 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
                      {x1.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {x1.ppl.map((p: any) => (
                        <span
                          key={p}
                          className="rounded-ui border border-ink/10 bg-panel px-2 py-1 text-[11px] text-ink"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <span className="mt-1 inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.05em] text-brand uppercase">
                      Explore
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
                        <path d="M3 12h17M14 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            }
            return res;
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-pretty">
            Your industry, <span className="text-coral">your buyers</span>, our
            campaigns.
          </h2>
          <p className="m-0 max-w-[600px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            Tell us who you sell to. We&apos;ll show you the audience we can reach
            and the campaigns that have worked in your sector.
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

          {/* Services column */}
          <div key="Services" className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">Services</div>
            {[["Demand Generation", "demand-generation"], ["Content Syndication", "content-syndication"], ["Account-Based Marketing", "abm"], ["Email Marketing", "email-marketing"], ["Audience Intelligence", "audience-intelligence"], ["High-Intent B2B Data", "b2b-data"], ["Appointment Generation", "appointment-generation"]].map((l: any) => (
              <Link key={l[0]} href={`/services/${l[1]}`} className={`text-[12.5px] transition-colors hover:text-brand ${false ? "font-semibold text-brand" : "text-muted"}`}>
                {l[0]}
              </Link>
            ))}
            <Link key="All 13 services" href="/services" className={`text-[12.5px] transition-colors hover:text-brand ${isTrue(true) ? "font-semibold text-brand" : "text-muted"}`}>
              All 13 services
            </Link>
          </div>
          {/* Solutions column */}
          <div key="Solutions" className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">Solutions</div>
            {["Technology", "SaaS", "Cybersecurity", "FinTech", "Healthcare", "Generate More Leads", "Build Pipeline", "Accelerate Sales"].map((lbl: any, idx: any) => (
              <Link key={lbl} href={idx < 5 ? "/industries" : "/solutions#objective"} className="text-[12.5px] transition-colors hover:text-brand text-muted">
                {lbl}
              </Link>
            ))}
          </div>
          {[
            { title: "Company", links: [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]] },
            { title: "Compliance", links: [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]] },
          ].map((col: any) => (
            <div key={col.title} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col.title}
              </div>
              {col.links.map((l: any) => (
                <Link key={l[0]} href={l[1]} className={"text-[12.5px] transition-colors hover:text-brand " + "text-muted"}>
                  {l[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"]].map((l: any) => (
              <Link key={l[1]} href={l[1]} className="text-muted-2 transition-colors hover:text-brand">
                {l[0]}
              </Link>
            ))}
            <NavCopy t={7} cls="cursor-pointer text-muted-2 transition-colors hover:text-brand" />
            <NavCopy t="x" />
          </div>
        </div>
      </footer>
    </div>
  );
}
