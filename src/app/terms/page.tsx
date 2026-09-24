// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import C from "./_c";
import { Fragment } from "react";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service · Lidespy",
  description:
    "The terms governing use of the Lidespy website and the delivery of our B2B demand generation services.",
};

// sections (FINAL)
const data: any = [
  ["agreement","Agreement to these terms",[["p","These terms govern your use of lidespy.com and any tools, calculators, downloads or content we make available on it. By using the site you accept these terms. If you are accepting on behalf of an organisation, you confirm you have authority to bind it."],["p","Paid services are governed by a separate signed agreement, statement of work or insertion order. Where that document conflicts with these terms, the signed document takes precedence for the services it covers."]]],
  ["services","Our services",[["p","Lidespy provides B2B demand generation services including demand generation, content syndication, account-based marketing, email marketing, audience intelligence, high-intent B2B data and appointment generation. Scope, volumes, qualification criteria, delivery schedule and pricing are set out in the applicable statement of work."],["p","We may improve or change our methods, vendors and tooling, provided the agreed deliverables and qualification criteria are met."]]],
  ["acceptable-use","Acceptable use of the site",[["p","When using the site, you agree not to:"],["ul",["Scrape, harvest or systematically extract content, data or contact details.","Attempt to gain unauthorised access to any part of the site, its systems or its underlying infrastructure.","Interfere with the site's operation, including by introducing malware or overloading it with automated requests.","Submit false, misleading or third-party contact details without authority.","Use the site or our content to build or train a competing product or dataset."]]]],
  ["leads","Leads, delivery and qualification",[["p","Leads are delivered against the qualification criteria agreed in the statement of work — for example title, company size, geography, technology or intent signal. Leads are verified before delivery, and clients may raise a replacement request within the review window stated in the statement of work, typically ten business days."],["p","Where a lead is found not to meet the agreed criteria, our remedy is replacement of that lead. We do not guarantee that any lead will convert to an opportunity, a meeting or revenue, because outcomes depend on your own follow-up, offer and sales process."]]],
  ["client-obligations","Client obligations",[["ul",["Provide accurate campaign inputs, target criteria, approved assets and brand guidance in a timely way.","Hold all rights necessary in any content, trademarks or data you supply to us for use in a campaign.","Use delivered leads only for the purpose agreed, and in compliance with applicable privacy and marketing law, including honouring opt-out requests.","Do not resell, sublicense or redistribute delivered lead data to third parties without our written consent."]]]],
  ["fees","Fees and payment",[["p","Fees, currency, billing cadence and payment terms are set out in the applicable statement of work or insertion order. Unless stated otherwise, invoices are payable within 30 days of the invoice date, and fees are exclusive of taxes, withholding and bank charges, which are your responsibility."],["p","Late payments may accrue interest at the lower of 1.5% per month or the maximum permitted by law, and we may suspend delivery on undisputed overdue amounts after written notice."]]],
  ["calculator","Calculator and estimates",[["p","The campaign budget calculator, benchmarks, reports and any figures shown on this site are illustrative estimates based on historical campaign data. They are not a quote, a forecast or a guarantee of results. Actual pricing and performance depend on your market, targeting criteria, offer and campaign scope, and are confirmed only in a written proposal."]]],
  ["ip","Intellectual property",[["p","The site, its design, text, graphics, reports and the Lidespy name and logo are owned by Lidespy or its licensors and are protected by intellectual property law. You may view and download material for your own internal business use, with attribution retained; any other reproduction, distribution or commercial use requires our written permission."],["p","You keep ownership of the content and trademarks you supply to us, and you grant us a licence to use them for the duration of the engagement solely to deliver the agreed services."]]],
  ["confidentiality","Confidentiality",[["p","Each party will protect the other's non-public information disclosed in connection with an engagement, use it only for that engagement, and disclose it only to personnel and advisers who need it and are bound by equivalent obligations. These duties continue for three years after the engagement ends, and indefinitely for trade secrets."]]],
  ["third-party","Third-party links and services",[["p","The site links to third-party sites and embeds third-party tools. We do not control them, do not endorse their content, and are not responsible for their practices. Your use of a third-party service is governed by that provider's own terms and privacy notice."]]],
  ["disclaimers","Disclaimers",[["p","The site and its content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim all implied warranties, including merchantability, fitness for a particular purpose and non-infringement, and we do not warrant that the site will be uninterrupted, error-free or secure. Nothing on this site is legal, tax or financial advice."]]],
  ["liability","Limitation of liability",[["p","To the fullest extent permitted by law, neither party is liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue, pipeline or data, even if advised of the possibility. Our total aggregate liability arising out of or relating to the services is limited to the fees paid to us for the services giving rise to the claim in the twelve months before the event."],["p","These limits do not apply to a party's confidentiality breach, indemnity obligations, or to liability that cannot be excluded by law."]]],
  ["term","Term, suspension and termination",[["p","Either party may terminate an engagement for material breach that stays uncured 30 days after written notice, or as otherwise set out in the statement of work. On termination you remain liable for fees for services delivered and for work irrevocably committed before the termination date. We may suspend or withdraw access to the site at any time without notice."]]],
  ["law","Governing law and disputes",[["p","These terms are governed by the laws of India, without regard to conflict-of-law rules. The courts of Pune, Maharashtra have exclusive jurisdiction, save that either party may seek injunctive relief in any competent court to protect its intellectual property or confidential information. Before filing, the parties will attempt to resolve any dispute in good faith for 30 days."]]],
  ["changes","Changes to these terms",[["p","We may revise these terms from time to time. The date at the top of this page shows when they were last updated, and continued use of the site after a change takes effect means you accept the revised terms."]]],
];

// const LEGAL_PAGES = [
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Terms of Service", href: "/terms" },
// ];

var temp = [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"], ["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]];
const CURRENT = "/terms";
const UPDATED = "1 September 2026"

function num(i: any) {
  return String(i + 1).padStart(2, "0");
}

export default function TermsPage() {
  let x1 = "Legal";
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} />

      {/* footer */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-start gap-[18px] page-x pt-[clamp(48px,5vw,84px)] pb-[clamp(28px,3.5vw,44px)]">
        <div className="inline-block border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
          {x1}
        </div>
        <h1 className="m-0 max-w-[900px] text-[clamp(36px,4.6vw,64px)] leading-none font-normal tracking-[-0.035em] text-pretty">
          {"Terms of Service"}
        </h1>
        <p className="m-0 max-w-[660px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
          {"The terms that govern your use of this website and the delivery of our B2B demand generation services."}
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
