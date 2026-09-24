// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import C from "./nav_copy";
import { Fragment } from "react";

export const metadata: Metadata = {
  alternates: { canonical: "/cookies" },
  title: "Cookie Policy · Lidespy",
  description:
    "What cookies and similar technologies Lidespy uses on lidespy.com, why we use them, and how to control them.",
};

// sections (FINAL)
// v2 - objects now
const SECTIONS_final: any = [
  {"a":"what","bb":"What cookies are","c":[{"k":0,"v":"Cookies are small text files placed on your device when you visit a website. They let a site remember your actions and preferences, and they help the operator understand how the site is used. We also use similar technologies — local storage, pixels and tracking tags — and refer to all of them as “cookies” in this policy."},{"k":0,"v":"Session cookies are deleted when you close your browser. Persistent cookies stay until they expire or you delete them. First-party cookies are set by lidespy.com; third-party cookies are set by a service we embed, such as an analytics or advertising provider."}]},
  {"a":"categories","bb":"The cookies we use","c":[{"k":3,"v":["Category","Purpose","Consent","Typical lifetime"],"v2":[["Strictly necessary","Page routing, load balancing, security, form submission and remembering your cookie choices. The site cannot work without these.","Not required","Session – 12 months"],["Preferences","Remembering settings such as language and inputs you have entered into the campaign budget calculator.","Required","Up to 12 months"],["Analytics","Understanding which pages and resources are used, how visitors arrive, and where journeys break down, in aggregate.","Required","Up to 26 months"],["Marketing","Measuring campaign performance, attributing enquiries to a source, and showing relevant ads on third-party platforms.","Required","Up to 13 months"]]},{"k":0,"v":"The exact cookies set can change as we add or remove tools. Your browser's developer tools will always show the current list for your session."}]},
  {"a":"third-party","bb":"Third-party cookies","c":[{"k":0,"v":"Some cookies are set by providers we use to run and measure the site — for example web analytics, advertising and conversion measurement on business networks, embedded video, and form or scheduling tools. These providers may combine what they collect here with data they hold from other sites."},{"k":0,"v":"We do not control third-party cookies, and their use of the data is governed by their own privacy notices. Blocking them through our consent banner or your browser prevents them from being set."}]},
  {"a":"consent","bb":"Your consent choices","c":[{"k":0,"v":"Where required by law, non-essential cookies are set only after you consent through our cookie banner. You can change or withdraw your choice at any time by reopening the banner from this page, or by clearing cookies for lidespy.com in your browser."},{"k":0,"v":"Withdrawing consent does not affect processing already carried out on the basis of your earlier consent, and strictly necessary cookies remain in place because the site cannot function without them."}]},
  {"a":"browser-controls","bb":"Browser and device controls","c":[{"k":0,"v":"Every major browser lets you see which cookies are stored, delete them and block them:"},{"k":1,"v":["Chrome — Settings › Privacy and security › Third-party cookies.","Safari — Settings › Privacy › Manage website data.","Firefox — Settings › Privacy & Security › Cookies and Site Data.","Edge — Settings › Cookies and site permissions."]},{"k":0,"v":"Blocking all cookies will break parts of the site, including form submission and the campaign budget calculator. You can also opt out of interest-based advertising through youradchoices.com or youronlinechoices.eu, and most browsers offer a Global Privacy Control or Do Not Track signal, which we honour where the law requires it."}]},
  {"a":"related","bb":"How this relates to our Privacy Policy","c":[{"k":0,"v":"Cookies can collect personal data such as an IP address or an online identifier. How we use that data, who we share it with, how long we keep it and what rights you have are set out in our Privacy Policy, which should be read alongside this page."}]},
  {"a":"changes","bb":"Changes to this policy","c":[{"k":0,"v":"We update this policy when the cookies we use change or when the law requires it. The date at the top of this page shows the last revision, and material changes will be surfaced through the cookie banner before they take effect."}]},
];
const data: any = null; // old

// const LEGAL_PAGES = [
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Terms of Service", href: "/terms" },
// ];

var temp = [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"], ["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]];
const CURRENT = "/cookies";
const UPDATED = "1 September 2026"

function num(i: any) {
  return String(i + 1).padStart(2, "0");
}

export default function CookiesPage() {
  let x1 = "Legal";
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-[#12150f]">
      <C t={1} />

      {/* footer */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-start gap-[18px] page-x pt-[clamp(48px,5vw,84px)] pb-[clamp(28px,3.5vw,44px)]">
        <div className="inline-block border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
          {x1}
        </div>
        <h1 className="m-0 max-w-[900px] text-[clamp(36px,4.6vw,64px)] leading-none font-normal tracking-[-0.035em] text-pretty">
          {"Cookie Policy"}
        </h1>
        <p className="m-0 max-w-[660px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
          {"What cookies and similar technologies we use on lidespy.com, why we use them, and how you can control them."}
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
                      <h3 key={i} className="m-0 mt-6 mb-2 text-[15px] font-semibold tracking-[-0.01em] text-[#12150f]">{b.v}</h3>
                    ) : !(b.k != 3) ? (
                      <div key={i} className="mt-5 overflow-x-auto rounded-[3px] border border-ink/12">
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
                                  <td key={c} className={`px-4 py-3.5 text-[13.5px] leading-[1.6] ${c === 0 ? "font-semibold text-[#12150f]" : "text-muted"}`}>{cell}</td>
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

            <div className="mt-6 rounded-[3px] border border-ink/12 bg-panel p-[clamp(20px,2.5vw,32px)]">
              <div className="mb-2.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                Questions about this policy?
              </div>
              <p className="m-0 mb-4 text-[14.5px] leading-[1.7] text-muted text-pretty">
                Write to us and a member of the team will respond. For data
                requests, please include the email address the request relates to.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                <a href="mailto:info@lidespy.com" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#12150f] transition-colors hover:text-brand">
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

      <footer className="border-t border-ink/15 bg-cream text-[#12150f]">
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
