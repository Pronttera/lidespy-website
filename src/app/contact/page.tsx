// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav_copy from "./FINAL_client_v2";
import ContactThing from "./new_page_stuff";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Lidespy · Book a Free Strategy Call",
  description:
    "Let's talk about your pipeline. Book a 30-minute discovery call with the Lidespy demand generation team.",
};

// details
const obj = [
  { k: "Company", v: "Lidespy" },
  { k: "Location", v: "Pune, India" },
  { k: "Website", v: "lidespy.com" },
];

// footer cols (label, href, accent) - dont touch
var FOOTER_STUFF: any = [
  ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", true]]],
  ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]],
  ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]],
  ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]],
];
const legal_links = [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"]];

export default function ContactPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <Nav_copy t={1} />

      <section className="mx-auto grid max-w-[1280px] items-start gap-[clamp(32px,5vw,80px)] page-x pt-[clamp(56px,6vw,96px)] pb-[clamp(56px,6vw,88px)] lg:grid-cols-[minmax(0,.9fr)_minmax(320px,1.1fr)]">
        <div className="flex flex-col gap-7 lg:sticky lg:top-26">
          <div className="inline-block self-start border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
            Contact us
          </div>
          <h1 className="m-0 text-[clamp(38px,5vw,72px)] leading-none font-normal tracking-[-0.035em] text-pretty">
            Let&apos;s talk about <span className="text-brand">your pipeline</span>.
          </h1>
          <p className="m-0 max-w-[520px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-muted text-pretty">
            Whether you&apos;re ready to launch a campaign or just exploring
            options — our team is happy to have a conversation about your goals.
          </p>

          <div
            id="booking"
            className="flex scroll-mt-24 flex-col gap-3.5 rounded-[3px] bg-[#12150f] px-[26px] pt-[26px] pb-7 text-cream"
          >
            <div className="text-[11px] font-semibold tracking-[0.14em] text-coral uppercase">
              Prefer to talk? Book a call.
            </div>
            <p className="m-0 text-[14.5px] leading-[1.6] text-cream/75 text-pretty">
              Schedule a 30-minute discovery call with our demand generation
              team. We&apos;ll review your goals and share how Lidespy can help.
            </p>
            <a
              href="mailto:info@lidespy.com?subject=Discovery%20call"
              className="mt-1 inline-flex items-center gap-3 self-start rounded-ui bg-brand-cta px-6 py-[15px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
            >
              Book a discovery call
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
                <path d="M3 12h17M14 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="grid gap-[18px] border-t border-ink/15 pt-[22px] sm:grid-cols-4">
            {obj.map((dd) => (
              <div key={dd.k}>
                <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                  {dd.k}
                </div>
                <div className="text-[14px]">{dd.v}</div>
              </div>
            ))}
            <div>
              <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                Email
              </div>
              <a
                href="mailto:info@lidespy.com"
                className="border-b border-ink/30 text-[14px] text-ink"
              >
                info@lidespy.com
              </a>
            </div>
          </div>
        </div>

        <ContactThing />
      </section>

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
              <a href="mailto:info@lidespy.com" className="text-[11px] font-semibold text-muted transition-colors hover:text-brand">
                info@lidespy.com
              </a>
            </div>
          </div>

          {(() => {
            let out: any = [];
            for (var i = 0; i < FOOTER_STUFF.length; i++) {
              var col = FOOTER_STUFF[i];
              out.push(
                <div key={col[0]} className="flex flex-col gap-2.5">
                  <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                    {col[0]}
                  </div>
                  {col[1].map((l: any) => (
                    <Link
                      key={l[0]}
                      href={l[1]}
                      className={"text-[12.5px] transition-colors hover:text-brand " + (!l[2] == false ? "font-semibold text-brand" : "text-muted")}
                    >
                      {l[0]}
                    </Link>
                  ))}
                </div>
              );
            }
            return out;
          })()}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            {legal_links.map((l) => (
              <Link key={l[1]} href={l[1]} className="text-muted-2 transition-colors hover:text-brand">
                {l[0]}
              </Link>
            ))}
            <Nav_copy t={2} cn="cursor-pointer text-muted-2 transition-colors hover:text-brand" />
            <Nav_copy t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
