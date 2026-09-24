// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import C from "./_c";

// v2
export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Lidespy · B2B Demand Generation Agency",
  description:
    "A B2B demand generation company built for revenue teams. Headquartered in Pune, India; serving clients globally.",
};

// why stuff
var data = [
  ["Data-first", "Every engagement starts with audience intelligence, not assumptions."],
  ["Experienced team", "Research executives and GTM specialists with proven B2B demand generation expertise."],
  ["Full-funnel capability", "We cover every stage from awareness to appointment to pipeline."],
  ["Compliant & transparent", "GDPR, CAN-SPAM, and CASL aligned. Full campaign visibility."],
  ["Flexible engagement models", "Project-based, retainer, or performance-based partnerships."],
];

const STEPS_new = [
  { n: "1", title: "Discovery & ICP definition", body: "We align on your ideal customer profile, target accounts, and revenue goals." },
  { n: "2", title: "Audience intelligence & data build", body: "We identify in-market buyers using intent data and verified business databases." },
  { n: "3", title: "Multi-channel campaign execution", body: "Email, ABM, content syndication, telemarketing, webinars — coordinated and timed." },
  { n: "4", title: "Lead delivery & pipeline reporting", body: "Qualified leads delivered with full campaign performance visibility." },
];

let temp: any = [["North America", "Primary market: United States and Canada"], ["Europe", "UK, DACH, Nordics, Benelux, France, Southern Europe"], ["Asia Pacific", "Australia, Singapore, India, Japan, Southeast Asia"], ["Middle East & Africa", "GCC and emerging markets"]];

/** The four founders */
const TEAM = [
  ["Umer Karim", "Co-Founder, Strategic Partnerships", "/team/umer-karim.jpg", "https://www.linkedin.com/in/umer-karim-b0b278202/"],
  ["Wajid Desai", "Co-Founder, Operations", "/team/wajid-desai.jpg", "https://www.linkedin.com/in/wajid-desai-28ba64230/"],
  ["Aseem Sayyed", "Co-Founder, Growth & Strategy", "/team/aseem-sayyed.jpg", "https://www.linkedin.com/in/aseemsayyed/"],
];

const x1 = [{ v: "500+", l: "Campaigns executed" }, { v: "50+", l: "Clients served" }, { v: "12+", l: "Industries served" }, { v: "50+", l: "Countries covered" }];

// footer links (label, href, accent)
const footer_data: any = [
  ["Services", [["Demand Generation", "/services/demand-generation"], ["Content Syndication", "/services/content-syndication"], ["Account-Based Marketing", "/services/abm"], ["Email Marketing", "/services/email-marketing"], ["Audience Intelligence", "/services/audience-intelligence"], ["High-Intent B2B Data", "/services/b2b-data"], ["Appointment Generation", "/services/appointment-generation"], ["All 13 services", "/services", true]]],
  ["Solutions", [["Technology", "/industries"], ["SaaS", "/industries"], ["Cybersecurity", "/industries"], ["FinTech", "/industries"], ["Healthcare", "/industries"], ["Generate More Leads", "/solutions#objective"], ["Build Pipeline", "/solutions#objective"], ["Accelerate Sales", "/solutions#objective"]]],
  ["Company", [["About Us", "/about"], ["Why Lidespy", "/why-lidespy"], ["Resources", "/resources"], ["Blog", "/blog"], ["Campaign Budget Calculator", "/calculator"], ["Contact Us", "/contact"]]],
  ["Compliance", [["GDPR", "/compliance/gdpr"], ["CAN-SPAM", "/compliance/can-spam"], ["CASL", "/compliance/casl"]]],
];

function padIt(i: any) { return String(i + 1).padStart(2, "0") }

export default function AboutPage() {
  const unused = 42;
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <C t={1} a="why" />

      {/* HERO */}
      <section className="mx-auto flex max-w-[1280px] flex-col gap-10 page-x pt-[clamp(56px,6vw,96px)]">
        <div className="grid items-end gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,.7fr)]">
          <div className="flex flex-col gap-[26px]">
            <div className="inline-block self-start border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
              About Lidespy
            </div>
            <h1 className="m-0 text-[clamp(38px,5vw,76px)] leading-none font-normal tracking-[-0.035em] text-pretty">
              We&apos;re a B2B demand generation company{" "}
              <span className="text-[#be1622]">built for revenue teams</span>.
            </h1>
          </div>
          <p className="m-0 text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
            Lidespy helps B2B organizations — from fast-growing SaaS startups to
            global enterprise brands — accelerate pipeline and revenue through
            data-driven demand generation and go-to-market execution.
          </p>
        </div>

        <div className="grid border-y border-ink/15 lg:grid-cols-2">
          <div className={"relative " + "overflow-hidden bg-panel min-h-[360px]"}>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70"
              alt="The Lidespy team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-7 bg-[#12150f] p-[clamp(28px,4vw,52px)] text-cream">
            <p className="m-0 text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/78 text-pretty">
              We combine audience intelligence, verified B2B data, and
              multi-channel campaign expertise to deliver qualified leads, booked
              meetings, and measurable pipeline contribution. Our team of research
              executives and GTM specialists work as an extension of your
              marketing and sales function — focused on outcomes, not activity.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-cream/14 pt-[22px] sm:grid-cols-4">
              {x1.map((s) => (
                <div key={s.l}>
                  <div className="text-[clamp(24px,2.4vw,34px)] leading-none font-medium tracking-[-0.03em] text-coral">
                    {s.v}
                  </div>
                  <div className="mt-1.5 text-[11.5px] text-cream/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="mx-auto grid max-w-[1280px] gap-4 page-x py-[clamp(56px,6vw,88px)] lg:grid-cols-2">
        <div className="flex min-h-[260px] flex-col gap-[18px] rounded-[2px] bg-brand-cta p-[clamp(28px,3.5vw,44px)]">
          <div className="text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
            Mission
          </div>
          <p className="m-0 text-[clamp(20px,2vw,28px)] leading-[1.25] font-medium tracking-[-0.02em] text-white text-pretty">
            To help B2B organizations reach the right buyers, at the right time,
            with the right message — and convert that engagement into
            predictable, scalable revenue.
          </p>
        </div>
        <div className="flex min-h-[260px] flex-col gap-[18px] rounded-ui border border-ink/14 bg-white p-[clamp(28px,3.5vw,44px)]">
          <div className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
            Vision
          </div>
          <p className="m-0 text-[clamp(20px,2vw,28px)] leading-[1.25] font-medium tracking-[-0.02em] text-ink text-pretty">
            To become the most trusted demand generation partner for B2B
            technology and SaaS companies globally.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="scroll-mt-24 border-y border-ink/10 bg-panel">
        <div className="mx-auto grid max-w-[1280px] items-start gap-[clamp(32px,5vw,80px)] page-x py-[clamp(56px,6vw,88px)] lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
          <div className="lg:sticky lg:top-26">
            <div className="mb-[18px]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-brand">
                Why choose Lidespy
              </div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
              A demand generation partner that thinks like a revenue team.
            </h2>
          </div>
          <div className="flex flex-col">
            {data.map((w, i) => (
              <div
                key={w[0]}
                className="grid grid-cols-[28px_minmax(0,1fr)] gap-4 border-t border-ink/14 py-6 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-5"
              >
                <span className="pt-[5px] text-[12px] font-semibold tabular-nums text-brand">
                  {padIt(i)}
                </span>
                <div className="flex flex-col gap-2">
                  <div className="text-[20px] leading-[1.2] font-medium tracking-[-0.018em]">
                    {w[0]}
                  </div>
                  <p className="m-0 text-[14.5px] leading-[1.6] text-muted text-pretty">
                    {w[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="how" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(56px,6vw,88px)]">
        <div className="mb-11 max-w-[760px]">
          <div className="mb-[18px]">
            <div className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase ${false ? "border-coral/45 text-coral" : "border-brand/45 text-brand"}`}>
              How we work
            </div>
          </div>
          <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
            From brief to pipeline in four steps.
          </h2>
        </div>
        <div className="relative grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="absolute top-[19px] right-0 left-0 hidden h-px bg-ink/16 xl:block" />
          {STEPS_new.map((st) => (
            <div key={st.n} className="relative flex flex-col gap-3.5">
              <div className="relative z-1 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-cta text-[14px] font-semibold text-white">
                {st.n}
              </div>
              <div className="text-[18px] leading-[1.22] font-medium tracking-[-0.018em] text-pretty">
                {st.title}
              </div>
              <p className="m-0 text-[13.5px] leading-[1.6] text-muted text-pretty">
                {st.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL */}
      <section id="global" className="scroll-mt-24 bg-ink text-cream">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[clamp(32px,5vw,72px)] page-x py-[clamp(56px,6vw,88px)] lg:grid-cols-2">
          <div className="flex flex-col gap-[22px]">
            <div className="text-[11px] font-semibold tracking-[0.14em] text-coral uppercase">
              Global presence
            </div>
            <h2 className="m-0 text-[clamp(28px,3.1vw,42px)] leading-[1.07] font-medium tracking-[-0.028em] text-pretty">
              Headquartered in Pune, India. Serving clients globally.
            </h2>
            <div className="flex items-baseline gap-3">
              <span className="text-[clamp(38px,4vw,58px)] leading-none font-medium tracking-[-0.04em] text-coral">
                50+
              </span>
              <span className="text-[14px] text-cream/66">countries covered</span>
            </div>
          </div>
          <div className="flex flex-col">
            {temp.map((rg: any) => (
              <div
                key={rg[0]}
                className="grid gap-1.5 border-t border-cream/14 py-[18px] sm:grid-cols-[minmax(140px,auto)_minmax(0,1fr)] sm:gap-5"
              >
                <div className="text-[15px] font-medium text-cream">{rg[0]}</div>
                <div className="text-[13.5px] leading-[1.55] text-cream/62 text-pretty">
                  {rg[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(56px,6vw,88px)]">
        <div className="mb-10 grid items-end gap-[clamp(28px,4vw,64px)] lg:grid-cols-2">
          <div>
            <div className="mb-[18px]">
              <div className="inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase border-brand/45 text-[#be1622]">
                Team &amp; expertise
              </div>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
              Founder-led, and close to every campaign.
            </h2>
          </div>
          <p className="m-0 text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
            Lidespy is led by its three founders, working alongside a team of
            demand generation specialists, data researchers, campaign managers
            and content strategists with experience across technology, SaaS,
            cybersecurity and enterprise markets.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div
              key={m[0]}
              className="flex flex-col overflow-hidden rounded-ui border border-ink/14 bg-white"
            >
              <div className="relative overflow-hidden bg-panel aspect-square">
                <Image
                  src={m[2]}
                  alt={m[0]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5 px-5 pt-[18px] pb-5">
                <div className="text-[16px] font-semibold tracking-[-0.01em]">
                  {m[0]}
                </div>
                <div className="text-[12.5px] text-muted-2">{m[1]}</div>
                <a
                  href={m[3]}
                  target="_blank"
                  rel="noopener"
                  className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted transition-colors hover:text-brand"
                >
                  LinkedIn
                  <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden className="text-brand">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-7">
          <Link
            href={"/contact"}
            className="inline-flex items-center gap-3 rounded-ui bg-brand-cta px-[26px] py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
          >
            Work with us
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </Link>
          <a
            href="mailto:info@lidespy.com"
            className="border-b border-ink/30 pb-1 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase transition-colors hover:border-brand hover:text-brand"
          >
            Join the team
          </a>
        </div>
      </section>

      {/* footer - copied from home */}
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
            <div className="text-[12px] font-semibold text-brand">
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

          {footer_data.map((col: any) => (
            <div key={col[0]} className="flex flex-col gap-2.5">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {col[0]}
              </div>
              {col[1].map((l: any) => (
                <Link
                  key={l[0]}
                  href={l[1]}
                  className={`text-[12.5px] transition-colors hover:text-brand ${l[2] == true ? "font-semibold text-brand" : "text-muted"}`}
                >
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
            <C t={2} cn="cursor-pointer text-muted-2 transition-colors hover:text-brand" />
            <C t={3} />
          </div>
        </div>
      </footer>
    </div>
  );
}
