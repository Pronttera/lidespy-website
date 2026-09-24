// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import C from "./temp2";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "CAN-SPAM Compliance · Lidespy",
  description:
    "How Lidespy's B2B email campaigns meet the US CAN-SPAM Act — honest headers and subject lines, sender identification and opt-outs honoured within 10 business days.",
  alternates: { canonical: "/compliance/can-spam" },
};

// sections (FINAL)
// v2 - objects now
const SECTIONS_final: any = [
  {"a":"overview","bb":"What CAN-SPAM covers","c":[{"k":0,"v":"The US CAN-SPAM Act sets the rules for commercial email, and it applies to business-to-business messages as fully as to consumer ones. Every campaign we send into the United States — for ourselves or on a client's behalf — is built to meet it."},{"k":0,"v":"Because the law holds both the company whose product is promoted and the company that sends the message responsible, we agree with each client, in writing, who owns which obligation before a campaign launches."}]},
  {"a":"requirements","bb":"How every email complies","c":[{"k":3,"v":["Requirement","What we do"],"v2":[["Accurate header information","From, To, Reply-To and routing information identify the real sender. We never spoof a domain or a person."],["Honest subject lines","Subject lines reflect the content of the message. No false urgency, fake replies or misleading prefixes."],["Identified as commercial","Promotional messages are clearly recognisable as promotional."],["Physical postal address","Every message carries a valid physical postal address for the sender."],["Clear opt-out","Every message includes a working, plainly worded unsubscribe mechanism that needs nothing more than a reply or a single page visit."],["Opt-outs honoured fast","Opt-out requests are processed within 10 business days — in practice, far sooner — and the mechanism works for at least 30 days after sending."]]}]},
  {"a":"suppression","bb":"Suppression and list hygiene","c":[{"k":1,"v":["Opt-outs are added to a global suppression list that applies across every campaign we run, not only the one the person replied to.","Client suppression files are applied before every send, alongside our own.","Opted-out addresses are never sold, rented or transferred, except to a service provider helping us honour the opt-out.","Lists are verified before sending, and harvested or dictionary-generated addresses are never used."]}]},
  {"a":"monitoring","bb":"Monitoring and accountability","c":[{"k":0,"v":"Sending infrastructure is authenticated with SPF, DKIM and DMARC, complaint and bounce rates are monitored on every campaign, and any campaign drifting above threshold is paused for review. Anyone we engage to send on our behalf is held to the same standard, because the obligation cannot be contracted away."}]},
];
const data: any = null; // old

// const LEGAL_PAGES = [
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Terms of Service", href: "/terms" },
// ];

var temp = [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"], ["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]];
const CURRENT = "/compliance/can-spam";
const UPDATED = "11 September 2026"

function num(i: any) {
  return String(i + 1).padStart(2, "0");
}

export default function CanSpamPage() {
  let x1 = "Compliance";
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} />

      {/* footer */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-start gap-[18px] page-x pt-[clamp(48px,5vw,84px)] pb-[clamp(28px,3.5vw,44px)]">
        <div className="inline-block border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#be1622] uppercase">
          {x1}
        </div>
        <h1 className="m-0 max-w-[900px] text-[clamp(36px,4.6vw,64px)] leading-none font-normal tracking-[-0.035em] text-pretty">
          {"CAN-SPAM Compliance"}
        </h1>
        <p className="m-0 max-w-[660px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
          {"How our B2B email campaigns meet the US CAN-SPAM Act — honest headers and subject lines, clear sender identification, and opt-outs that are honoured quickly and permanently."}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
          <span>Last updated · {UPDATED}</span>
          <span className="hidden h-3 w-px bg-ink/15 sm:block" />
          <span>Lidespy · Pune, India</span>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] page-x pb-[clamp(48px,5vw,80px)]">
        <div className="grid gap-[clamp(28px,4vw,56px)] border-t border-ink/12 pt-[clamp(28px,3vw,44px)] lg:grid-cols-[minmax(200px,260px)_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-[104px] lg:self-start">
            <div className="mb-3.5 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
              Contents
            </div>
            <nav className="flex flex-col gap-2">
              {SECTIONS_final.map((s: any, i: any) => (
                <a key={s.a} href={"#" + s.a} className="flex gap-2.5 text-[12.5px] leading-[1.5] text-muted transition-colors hover:text-[#be1622]">
                  <span className="text-muted-3 tabular-nums">
                    {num(i)}
                  </span>
                  {s.bb}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-[760px]">
            {SECTIONS_final.map((s: any, i: any) => (
              <section key={s.a} id={s.a} className="scroll-mt-24 border-ink/10 pt-7 pb-7 not-first:border-t">
                <div className="mb-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#be1622] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="m-0 text-[clamp(20px,2vw,27px)] leading-[1.15] font-medium tracking-[-0.025em] text-pretty">
                  {s.bb}
                </h2>
                <>
                  {s.c.map((b: any, i: any) =>
                    b.k === 2 ? (
                      <h3 key={i} className="m-0 mt-6 mb-2 text-[15px] font-semibold tracking-[-0.01em] text-ink">{b.v}</h3>
                    ) : !(b.k != 3) ? (
                      <div key={i} className="mt-5 overflow-x-auto rounded-card border border-ink/12">
                        <table className="w-full min-w-[560px] border-collapse text-left">
                          <thead>
                            <tr className="bg-panel">
                              {b.v.map((h: any) => (
                                <th key={h} className="border-b border-ink/12 px-4 py-3 text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.v2.map((row: any) => (
                              <tr key={row[0]} className="border-t border-ink/10 align-top first:border-t-0">
                                {row.map((cell: any, c: any) => (
                                  <td key={c} className={`px-4 py-3.5 text-[13.5px] leading-[1.6] ${c === 0 ? "font-semibold text-ink" : "text-muted"}`}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : b.k == 1 ? (
                      <ul key={i} className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
                        {b.v.map((li: any) => (
                          <li key={li} className="relative pl-5 text-[14.5px] leading-[1.7] text-muted before:absolute before:top-[10px] before:left-0 before:h-[5px] before:w-[5px] before:bg-brand/70">{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i} className="m-0 mt-3 text-[14.5px] leading-[1.75] text-muted text-pretty">{(() => { const res = b.v; return res; })()}</p>
                    )
                  )}
                </>
              </section>
            ))}

            <div className="mt-6 rounded-card border border-ink/12 bg-panel p-[clamp(20px,2.5vw,32px)]">
              <div className="mb-2.5 text-[11px] font-semibold tracking-[0.12em] text-[#be1622] uppercase">
                Questions about this policy?
              </div>
              <p className="m-0 mb-4 text-[14.5px] leading-[1.7] text-muted text-pretty">
                Write to us and a member of the team will respond. For data
                requests, please include the email address the request relates to.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                <a href="mailto:info@lidespy.com" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink transition-colors hover:text-[#be1622]">
                  info@lidespy.com
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-[#be1622]"><path d="M7 17 17 7M8 7h9v9" /></svg>
                </a>
                <Link href="/contact" className="text-[13px] font-semibold text-muted transition-colors hover:text-[#be1622]">
                  Contact form →
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {temp.filter((p: any) => p[1] != CURRENT).map((p: any) => (
                <Link key={p[1]} href={p[1]} className="rounded-[2px] border border-ink/15 px-4 py-2.5 text-[12px] font-semibold text-muted transition-colors hover:border-brand/55 hover:text-[#be1622]">
                  {p[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>
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
              <a href="https://www.linkedin.com/company/lidespy/" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted transition-colors hover:text-[#be1622]">
                LinkedIn
                <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-[#be1622]"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </a>
              <a href="mailto:info@lidespy.com" className="text-[11px] font-semibold text-muted transition-colors hover:text-[#be1622]">
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
                <Link key={l[0]} href={l[1]} className={`text-[12.5px] transition-colors hover:text-[#be1622] ${l[2] == true ? "font-semibold text-[#be1622]" : "text-muted"}`}>
                  {l[0]}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
          <span>© 2026 Lidespy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="text-muted-2 transition-colors hover:text-[#be1622]">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-2 transition-colors hover:text-[#be1622]">Terms of Service</Link>
            <Link href="/cookies" className="text-muted-2 transition-colors hover:text-[#be1622]">Cookie Policy</Link>
            <C t={2} />
            <C t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
