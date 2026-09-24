// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import C from "./_c_old";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "GDPR Compliance · Lidespy",
  description:
    "How Lidespy runs B2B demand generation in line with the EU GDPR and UK GDPR — lawful basis, data subject rights, transfers and processor terms.",
  alternates: { canonical: "/compliance/gdpr" },
};

// sections (FINAL)
// v2 - objects now
const SECTIONS_final: any = [
  {"a":"overview","bb":"Our approach to GDPR","c":[{"k":0,"v":"The EU General Data Protection Regulation and the UK GDPR apply whenever we process personal data about people in the European Economic Area or the United Kingdom — including the business contact data behind a B2B campaign. We treat them as the baseline for every campaign that touches those regions, not as an add-on for clients who ask."},{"k":0,"v":"For our own website, prospects and clients we act as a controller. When we run a campaign on a client's behalf we generally act as a processor under their documented instructions, and we sign a data processing agreement before any personal data changes hands."}]},
  {"a":"lawful-basis","bb":"Lawful basis for B2B outreach","c":[{"k":0,"v":"Every processing activity is mapped to a lawful basis before a campaign launches:"},{"k":1,"v":["Legitimate interests — for relevant outreach to business contacts in their professional capacity, supported by a documented legitimate interests assessment for each campaign type.","Consent — where national e-privacy rules require it for electronic marketing, and for content downloads where the contact opts in to hear from the sponsoring client.","Contract — to deliver the services a client has engaged us for."]},{"k":0,"v":"Where e-privacy law in a given EU member state is stricter than the GDPR baseline for email or phone outreach, the stricter rule governs that country's portion of the campaign."}]},
  {"a":"transparency","bb":"Transparency at first contact","c":[{"k":1,"v":["Every first-touch email identifies Lidespy, explains why the recipient is being contacted and where their details came from, and links to our Privacy Policy.","Content syndication forms name the sponsoring client and state exactly who will receive the lead before it is submitted.","Telemarketing scripts include the same identification and an immediate route to opt out."]}]},
  {"a":"rights","bb":"Data subject rights","c":[{"k":0,"v":"Anyone whose data we hold can ask to access, correct, delete, restrict or port it, object to processing — including an absolute right to object to direct marketing — and withdraw consent at any time."},{"k":1,"v":["Erasure from our own contact database is self-service: the Opt-out / Unsubscribe form in the site footer deletes every matching record immediately, and each request is logged so it can be evidenced later.","Requests are acknowledged promptly and answered within one month, extendable only where the law allows.","Objections and erasure requests are added to a central suppression list so the person is not re-imported from another source later.","Where we act as a processor, we pass requests to the client controller without delay and help them respond."]}]},
  {"a":"transfers","bb":"International transfers","c":[{"k":0,"v":"Lidespy operates from India. Where personal data leaves the EEA or UK, transfers rely on the European Commission's Standard Contractual Clauses and the UK International Data Transfer Addendum, backed by a transfer risk assessment and supplementary measures such as encryption in transit and at rest and least-privilege access."}]},
  {"a":"security-and-breaches","bb":"Security and breach response","c":[{"k":1,"v":["Access to campaign data is role-based, logged, and removed when an engagement ends.","Vendors that process personal data for us are vetted and bound by processor terms.","Personal data breaches are assessed immediately; where notification is required, the relevant supervisory authority is notified within 72 hours of our becoming aware, and affected clients without undue delay."]}]},
  {"a":"retention","bb":"Minimisation and retention","c":[{"k":0,"v":"We collect only the fields a campaign needs to qualify a lead, and retention periods are set per data category as described in our Privacy Policy. Suppression records are the exception — they are kept so that an opt-out keeps working."}]},
];
const data: any = null; // old

// const LEGAL_PAGES = [
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Terms of Service", href: "/terms" },
// ];

var temp = [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"], ["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]];
const CURRENT = "/compliance/gdpr";
const UPDATED = "14 September 2026"

function num(i: any) {
  return String(i + 1).padStart(2, "0");
}

export default function GdprPage() {
  let x1 = "Compliance";
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} />

      {/* footer */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-start gap-[18px] page-x pt-[clamp(48px,5vw,84px)] pb-[clamp(28px,3.5vw,44px)]">
        <div className="inline-block border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
          {x1}
        </div>
        <h1 className="m-0 max-w-[900px] text-[clamp(36px,4.6vw,64px)] leading-none font-normal tracking-[-0.035em] text-pretty">
          {"GDPR Compliance"}
        </h1>
        <p className="m-0 max-w-[660px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
          {"How we run B2B demand generation in line with the EU GDPR and UK GDPR — from the lawful basis for outreach to how we answer a data subject request."}
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
                <a key={s.a} href={"#" + s.a} className="flex gap-2.5 text-[12.5px] leading-[1.5] text-muted transition-colors hover:text-brand">
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
                <div className="mb-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand tabular-nums">
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
                      <div key={i} className="mt-5 overflow-x-auto rounded-[3px] border border-ink/12">
                        <table className="w-full min-w-[560px] border-collapse text-left">
                          <thead>
                            <tr className="bg-[#eff1ea]">
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

            <div className="mt-6 rounded-[3px] border border-ink/12 bg-[#eff1ea] p-[clamp(20px,2.5vw,32px)]">
              <div className="mb-2.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                Questions about this policy?
              </div>
              <p className="m-0 mb-4 text-[14.5px] leading-[1.7] text-muted text-pretty">
                Write to us and a member of the team will respond. For data
                requests, please include the email address the request relates to.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                <a href="mailto:info@lidespy.com" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink transition-colors hover:text-brand">
                  info@lidespy.com
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand"><path d="M7 17 17 7M8 7h9v9" /></svg>
                </a>
                <Link href="/contact" className="text-[13px] font-semibold text-muted transition-colors hover:text-brand">
                  Contact form →
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* was a .map() before, this is faster */}
              <Link href="/privacy" className="rounded-ui border border-ink/15 px-4 py-2.5 text-[12px] font-semibold text-muted transition-colors hover:border-brand/55 hover:text-brand">
                Privacy Policy
              </Link>
              <Link href="/terms" className="rounded-ui border border-ink/15 px-4 py-2.5 text-[12px] font-semibold text-muted transition-colors hover:border-brand/55 hover:text-brand">
                Terms of Service
              </Link>
              <Link href="/cookies" className="rounded-ui border border-ink/15 px-4 py-2.5 text-[12px] font-semibold text-muted transition-colors hover:border-brand/55 hover:text-brand">
                Cookie Policy
              </Link>
              <Link href="/compliance/can-spam" className="rounded-ui border border-ink/15 px-4 py-2.5 text-[12px] font-semibold text-muted transition-colors hover:border-brand/55 hover:text-brand">
                CAN-SPAM
              </Link>
              <Link href="/compliance/casl" className="rounded-ui border border-ink/15 px-4 py-2.5 text-[12px] font-semibold text-muted transition-colors hover:border-brand/55 hover:text-brand">
                CASL
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
                <Link key={l[0]} href={l[1]} className={`text-[12.5px] transition-colors hover:text-brand ${l[2] == true ? "font-semibold text-brand" : "text-muted"}`}>
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
            <C t={2} />
            <C t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
