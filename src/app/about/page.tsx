import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { Eyebrow, Slot } from "@/components/ui";
import { route } from "@/lib/routes";

export const metadata: Metadata = {
  title: "About · Lidespy",
  description:
    "A B2B demand generation company built for revenue teams. Headquartered in Pune, India; serving clients globally.",
};

const WHY = [
  { title: "Data-first", body: "Every engagement starts with audience intelligence, not assumptions." },
  { title: "Experienced team", body: "Research executives and GTM specialists with proven B2B demand generation expertise." },
  { title: "Full-funnel capability", body: "We cover every stage from awareness to appointment to pipeline." },
  { title: "Compliant & transparent", body: "GDPR, CAN-SPAM, and CASL aligned. Full campaign visibility." },
  { title: "Flexible engagement models", body: "Project-based, retainer, or performance-based partnerships." },
];

const STEPS = [
  { n: "1", title: "Discovery & ICP definition", body: "We align on your ideal customer profile, target accounts, and revenue goals." },
  { n: "2", title: "Audience intelligence & data build", body: "We identify in-market buyers using intent data and verified business databases." },
  { n: "3", title: "Multi-channel campaign execution", body: "Email, ABM, content syndication, telemarketing, webinars — coordinated and timed." },
  { n: "4", title: "Lead delivery & pipeline reporting", body: "Qualified leads delivered with full campaign performance visibility." },
];

const REGIONS = [
  { name: "North America", detail: "Primary market: United States and Canada" },
  { name: "Europe", detail: "UK, DACH, Nordics, Benelux, France, Southern Europe" },
  { name: "Asia Pacific", detail: "Australia, Singapore, India, Japan, Southeast Asia" },
  { name: "Middle East & Africa", detail: "GCC and emerging markets" },
];

/**
 * The About artboard left these image slots empty. The photos below are the
 * ones the design itself assigned to `team-1..4` in the Home artboard, so the
 * casting stays the designer's choice rather than a fresh guess.
 */
const TEAM = [
  {
    name: "Founder & CEO",
    role: "Leadership · Pune",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=70",
    credit: "Photo by Ali Morshedlou on Unsplash",
    creditHref: "https://unsplash.com/@alimorshedlou",
  },
  {
    name: "Head of Research",
    role: "Audience intelligence & data",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=70",
    credit: "Photo by Christina @ wocintechchat.com on Unsplash",
    creditHref: "https://unsplash.com/@wocintechchat",
  },
  {
    name: "Head of Campaigns",
    role: "Multi-channel execution",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=70",
    credit: "Photo by Jurica Koletić on Unsplash",
    creditHref: "https://unsplash.com/@juricakoletic",
  },
  {
    name: "GTM Advisor",
    role: "Strategy & positioning",
    img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=700&q=70",
    credit: "Photo by ThisisEngineering on Unsplash",
    creditHref: "https://unsplash.com/@thisisengineering",
  },
];

const HERO_STATS = [
  { v: "500+", l: "Campaigns executed" },
  { v: "50+", l: "Clients served" },
  { v: "12+", l: "Industries served" },
  { v: "50+", l: "Countries covered" },
];

export default function AboutPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="why" />

      {/* HERO */}
      <section className="mx-auto flex max-w-[1280px] flex-col gap-10 page-x pt-[clamp(56px,6vw,96px)]">
        <div className="grid items-end gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,.7fr)]">
          <div className="flex flex-col gap-[26px]">
            <div className="inline-block self-start border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
              About Lidespy
            </div>
            <h1 className="m-0 text-[clamp(38px,5vw,76px)] leading-none font-normal tracking-[-0.035em] text-pretty">
              We&apos;re a B2B demand generation company{" "}
              <span className="text-brand">built for revenue teams</span>.
            </h1>
          </div>
          <p className="m-0 text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
            Lidespy helps B2B organizations — from fast-growing SaaS startups to
            global enterprise brands — accelerate pipeline and revenue through
            data-driven demand generation and go-to-market execution.
          </p>
        </div>

        <div className="grid border-y border-ink/15 lg:grid-cols-2">
          <Slot
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70"
            alt="The Lidespy team"
            credit="Photo by Annie Spratt on Unsplash"
            creditHref="https://unsplash.com/@anniespratt"
            className="min-h-[360px]"
          />
          <div className="flex flex-col justify-between gap-7 bg-ink p-[clamp(28px,4vw,52px)] text-cream">
            <p className="m-0 text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/78 text-pretty">
              We combine audience intelligence, verified B2B data, and
              multi-channel campaign expertise to deliver qualified leads, booked
              meetings, and measurable pipeline contribution. Our team of research
              executives and GTM specialists work as an extension of your
              marketing and sales function — focused on outcomes, not activity.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-cream/14 pt-[22px] sm:grid-cols-4">
              {HERO_STATS.map((s) => (
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
        <div className="flex min-h-[260px] flex-col gap-[18px] rounded-ui bg-brand-cta p-[clamp(28px,3.5vw,44px)]">
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
              <Eyebrow>Why choose Lidespy</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
              A demand generation partner that thinks like a revenue team.
            </h2>
          </div>
          <div className="flex flex-col">
            {WHY.map((w, i) => (
              <div
                key={w.title}
                className="grid grid-cols-[28px_minmax(0,1fr)] gap-4 border-t border-ink/14 py-6 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-5"
              >
                <span className="pt-[5px] text-[12px] font-semibold tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <div className="text-[20px] leading-[1.2] font-medium tracking-[-0.018em]">
                    {w.title}
                  </div>
                  <p className="m-0 text-[14.5px] leading-[1.6] text-muted text-pretty">
                    {w.body}
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
            <Eyebrow>How we work</Eyebrow>
          </div>
          <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
            From brief to pipeline in four steps.
          </h2>
        </div>
        <div className="relative grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="absolute top-[19px] right-0 left-0 hidden h-px bg-ink/16 xl:block" />
          {STEPS.map((st) => (
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
            {REGIONS.map((rg) => (
              <div
                key={rg.name}
                className="grid gap-1.5 border-t border-cream/14 py-[18px] sm:grid-cols-[minmax(140px,auto)_minmax(0,1fr)] sm:gap-5"
              >
                <div className="text-[15px] font-medium text-cream">{rg.name}</div>
                <div className="text-[13.5px] leading-[1.55] text-cream/62 text-pretty">
                  {rg.detail}
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
              <Eyebrow>Team &amp; expertise</Eyebrow>
            </div>
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
              Specialists, researchers and GTM advisors.
            </h2>
          </div>
          <p className="m-0 text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
            Our team brings together B2B demand generation specialists, data
            researchers, campaign managers, content strategists, and GTM advisors
            with experience across technology, SaaS, cybersecurity, and
            enterprise markets.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="flex flex-col overflow-hidden rounded-ui border border-ink/14 bg-white"
            >
              <Slot
                src={m.img}
                alt={m.name}
                credit={m.credit}
                creditHref={m.creditHref}
                sizes="(max-width: 640px) 100vw, 25vw"
                className="aspect-square"
              />
              <div className="flex flex-col gap-1.5 px-5 pt-[18px] pb-5">
                <div className="text-[16px] font-semibold tracking-[-0.01em]">
                  {m.name}
                </div>
                <div className="text-[12.5px] text-muted-2">{m.role}</div>
                <a
                  href="https://www.linkedin.com/company/lidespy/"
                  target="_blank"
                  rel="noopener"
                  className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted transition-colors hover:text-brand"
                >
                  LinkedIn
                  <ArrowUpRight size={10} className="text-brand" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-7">
          <Link
            href={route("Contact.dc.html")}
            className="inline-flex items-center gap-3 rounded-ui bg-brand-cta px-[26px] py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
          >
            Work with us
            <ArrowRight size={13} />
          </Link>
          <a
            href="mailto:info@lidespy.com"
            className="border-b border-ink/30 pb-1 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase transition-colors hover:border-brand hover:text-brand"
          >
            Join the team
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
