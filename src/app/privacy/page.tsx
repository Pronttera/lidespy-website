// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import C from "./FINAL_client_v2";
import { Fragment } from "react";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy · Lidespy",
  description:
    "How Lidespy collects, uses, shares and protects personal data across our website and B2B demand generation services.",
};

// sections (FINAL)
const data: any = [
  ["scope","Who we are and what this covers",[["p","Lidespy is a B2B demand generation company headquartered in Pune, India, serving clients globally. This policy explains how we handle personal data when you visit lidespy.com, contact us, download a resource, or when we process business contact data as part of a client campaign."],["p","We act as a data controller for our own website visitors, prospects and clients. When we run campaigns on behalf of a client, we generally act as a processor under that client's instructions, and their privacy notice applies alongside this one."]]],
  ["data-we-collect","The data we collect",[["h","Data you give us"],["ul",["Contact details — name, business email, phone number, job title, company and country, submitted through our contact form, calculator or resource downloads.","Campaign and enquiry details — budget ranges, target markets, objectives and anything else you choose to include in a message.","Correspondence — emails, call notes and meeting records relating to a current or prospective engagement."]],["h","Data we collect automatically"],["ul",["Device and usage data — IP address, browser type, operating system, referring page, pages viewed and time on page.","Cookie and similar identifiers, as described in our Cookie Policy."]],["h","Data from other sources"],["ul",["Verified business contact data from licensed data providers, public professional profiles and company websites.","Intent and firmographic signals from third-party intelligence providers, used to identify in-market accounts.","Enrichment data used to keep business records accurate and de-duplicated."]],["p","We do not seek to collect special category data, and we do not knowingly collect data from anyone under 18."]]],
  ["how-we-use","How we use personal data",[["ul",["To respond to enquiries, provide quotes and deliver the services you or your organisation have requested.","To plan, execute and report on demand generation, content syndication, ABM, email and appointment generation campaigns.","To verify and qualify leads before delivery to a client, including confirming consent and interest.","To send relevant B2B marketing communications, which you can stop at any time.","To operate, secure and improve our website and services, and to produce aggregate analytics and benchmarks.","To comply with legal, tax and contractual obligations, and to establish or defend legal claims."]]]],
  ["legal-basis","Legal bases for processing",[["p","Where the GDPR or UK GDPR applies, we rely on the following bases:"],["ul",["Consent — for marketing emails and telemarketing where consent is required, and for non-essential cookies. You may withdraw consent at any time.","Legitimate interests — for B2B outreach to relevant business contacts, lead verification, fraud prevention, analytics and business development, balanced against your rights.","Contract — to take steps at your request before entering a contract and to perform an agreed engagement.","Legal obligation — where retention or disclosure is required by law."]]]],
  ["sharing","When we share data",[["p","We do not sell personal data in the sense of trading it for money. We share it only as follows:"],["ul",["Clients — qualified leads generated under a campaign are delivered to the sponsoring client, who then contacts you directly as a controller in their own right.","Service providers — hosting, email delivery, CRM, analytics, telephony and data verification vendors, bound by contract to process data only on our instructions.","Professional advisers — lawyers, auditors and insurers where necessary.","Authorities — where disclosure is required by law or to protect our rights or the safety of others.","Corporate transactions — a buyer or successor in the event of a merger, acquisition or reorganisation."]]]],
  ["transfers","International transfers",[["p","We operate from India and work with clients and vendors across North America, Europe, Asia Pacific, and the Middle East and Africa. Where personal data moves out of the EEA or UK, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses together with the UK Addendum, plus supplementary technical and organisational measures where needed."]]],
  ["retention","How long we keep data",[["p","We retain personal data only as long as it serves the purpose it was collected for:"],["ul",["Enquiries that do not become engagements — up to 24 months from last contact.","Client and campaign records — for the term of the engagement and up to 7 years afterwards, to meet contractual, tax and audit obligations.","Marketing contact records — until you opt out, or after a period of sustained non-engagement.","Suppression lists — retained indefinitely, because we must remember not to contact you again.","Opt-out requests — the name and email you submit, the time of the request and how many records were removed, kept as evidence that we actioned it.","Website and analytics logs — typically up to 26 months."]]]],
  ["your-rights","Your rights",[["p","Depending on where you live, you may have the right to access, correct, delete, restrict or object to our processing of your personal data, to receive a portable copy, to withdraw consent, and to opt out of marketing. Residents of California and other US states with comprehensive privacy laws may also have rights to know, delete, correct, and to opt out of targeted advertising or the sharing of personal information."],["p","To have your contact details removed, use the Opt-out / Unsubscribe link in the footer of any page on this site. Enter the name and email you gave us and every matching record is deleted from our contact database immediately and permanently. We keep a minimal record of the request itself, as described under How long we keep data."],["p","To exercise any other right, or if the form cannot find your address, email info@lidespy.com. We respond within 30 days, or sooner where the law requires it, and we will not treat you differently for exercising a right. If you are unhappy with our response you may complain to your local data protection authority."]]],
  ["security","Security",[["p","We use encryption in transit, access controls on a least-privilege basis, vendor due diligence, staff confidentiality obligations and regular reviews of our systems. No method of transmission or storage is perfectly secure, so we cannot guarantee absolute security, but we notify affected people and regulators where a breach requires it."]]],
  ["compliance","Marketing compliance",[["p","Our outreach is designed to align with GDPR and UK GDPR, CAN-SPAM, CASL, and applicable telemarketing and do-not-call rules. Every marketing email identifies us, states why you are receiving it and carries a working unsubscribe link. Opt-out requests are honoured promptly and applied across our campaigns and to the client sponsoring them."]]],
  ["changes","Changes to this policy",[["p","We may update this policy as our services, vendors or legal obligations change. The date at the top of this page shows when it was last revised, and material changes will be highlighted on this page before they take effect."]]],
];

// const LEGAL_PAGES = [
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Terms of Service", href: "/terms" },
// ];

var temp = [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"], ["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]];
const CURRENT = "/privacy";
const UPDATED = "14 September 2026"

function num(i: any) {
  return String(i + 1).padStart(2, "0");
}

export default function PrivacyPage() {
  let x1 = "Legal";
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-[#f7f8f4] text-ink">
      <C t={1} />

      {/* footer */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-start gap-[18px] page-x pt-[clamp(48px,5vw,84px)] pb-[clamp(28px,3.5vw,44px)]">
        <div className="inline-block border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
          {x1}
        </div>
        <h1 className="m-0 max-w-[900px] text-[clamp(36px,4.6vw,64px)] leading-none font-normal tracking-[-0.035em] text-pretty">
          {"Privacy Policy"}
        </h1>
        <p className="m-0 max-w-[660px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
          {"How we collect, use, share and protect personal data across our website and our B2B demand generation services."}
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
              {data.map((s: any, i: any) => (
                <a key={s[0]} href={`#${s[0]}`} className="flex gap-2.5 text-[12.5px] leading-[1.5] text-muted transition-colors hover:text-brand">
                  <span className="text-muted-3 tabular-nums">
                    {num(i)}
                  </span>
                  {s[1]}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-[760px]">
            {data.map((s: any, i: any) => (
              <section key={s[0]} id={s[0]} className="scroll-mt-24 border-ink/10 pt-7 pb-7 not-first:border-t">
                <div className="mb-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="m-0 text-[clamp(20px,2vw,27px)] leading-[1.15] font-medium tracking-[-0.025em] text-pretty">
                  {s[1]}
                </h2>
                <>
                  {s[2].map((b: any, i: any) =>
                    b[0] == "h" ? (
                      <h3 key={i} className="m-0 mt-6 mb-2 text-[15px] font-semibold tracking-[-0.01em] text-ink">{b[1]}</h3>
                    ) : b[0] == "table" ? (
                      <div key={i} className="mt-5 overflow-x-auto rounded-card border border-ink/12">
                        <table className="w-full min-w-[560px] border-collapse text-left">
                          <thead>
                            <tr className="bg-panel">
                              {b[1].map((h: any) => (
                                <th key={h} className="border-b border-ink/12 px-4 py-3 text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b[2].map((row: any) => (
                              <tr key={row[0]} className="border-t border-ink/10 align-top first:border-t-0">
                                {row.map((cell: any, c: any) => (
                                  <td key={c} className={`px-4 py-3.5 text-[13.5px] leading-[1.6] ${c === 0 ? "font-semibold text-ink" : "text-muted"}`}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : b[0] == "ul" ? (
                      <ul key={i} className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
                        {b[1].map((li: any) => (
                          <li key={li} className="relative pl-5 text-[14.5px] leading-[1.7] text-muted before:absolute before:top-[10px] before:left-0 before:h-[5px] before:w-[5px] before:bg-brand/70">{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i} className="m-0 mt-3 text-[14.5px] leading-[1.75] text-muted text-pretty">{b[1]}</p>
                    )
                  )}
                </>
              </section>
            ))}

            <div className="mt-6 rounded-card border border-ink/12 bg-panel p-[clamp(20px,2.5vw,32px)]">
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
              {temp.filter((p: any) => p[1] != CURRENT).map((p: any) => (
                <Link key={p[1]} href={p[1]} className="rounded-ui border border-ink/15 px-4 py-2.5 text-[12px] font-semibold text-muted transition-colors hover:border-brand/55 hover:text-brand">
                  {p[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/15 bg-[#f7f8f4] text-ink">
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
