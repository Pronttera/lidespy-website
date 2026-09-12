import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bold } from "@/components/Bold";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import Splash from "@/components/Splash";
import HomeMotion from "@/components/HomeMotion";
import ButtonMotion from "@/components/ButtonMotion";
import { ArrowCta, Eyebrow, Slot, TextArrowLink } from "@/components/ui";
import { ArrowUpRight, Check } from "@/components/icons";
import { absoluteUrl } from "@/lib/site";
import {
  CASES,
  CHALLENGE_CARDS,
  COMPARE_LABEL,
  COMPARE_ROWS,
  HOME_SERVICES,
  LOGOS,
  POSTS,
  QUOTES,
  STATS,
  STEPS,
} from "@/i18n/dictionaries/en/home";
import { route } from "@/lib/routes";

const COMPARE = "vendors" as const;

/** Absolute placements for the four floating Challenge cards (from the design). */
const CHALLENGE_POS = [
  { left: "6%", top: "33%" },
  { left: "1%", top: "65%" },
  { right: "3%", top: "46%" },
  { right: "12%", top: "78%" },
] as const;

const HOME_TITLE = "Lidespy · B2B Demand Generation & Lead Generation Agency";
const HOME_DESCRIPTION =
  "Qualified leads, booked meetings and measurable pipeline for B2B technology and SaaS teams — content syndication, ABM, intent data and appointment generation, run by one team.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: HOME_TITLE, description: HOME_DESCRIPTION, url: "/" },
};

/**
 * The home page as a speakable WebPage (voice assistants read the headline
 * and intro aloud) plus the hero film as a VideoObject, so video search and
 * AI answers can surface it.
 */
const HOME_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: absoluteUrl("/"),
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#organization` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h1 + p"] },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Lidespy — B2B demand generation",
    description: HOME_DESCRIPTION,
    thumbnailUrl:
      "https://images.pexels.com/videos/7147921/colleagues-computer-laptop-conference-room-corporate-7147921.jpeg?auto=compress&cs=tinysrgb&w=1260",
    contentUrl: "/hero.mp4",
    uploadDate: "2026-09-01",
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
  },
];

export default function HomePage() {
  const rows = COMPARE_ROWS[COMPARE];

  return (
    <div data-gsap-root className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <JsonLd data={HOME_SCHEMA} />
      <Splash />
      <HomeMotion />
      <ButtonMotion />
      <SiteNav />

      {/* HERO */}
      <div className="bg-ink">
        <section className="relative mx-auto max-w-[1280px] page-x pt-12 pb-10 lg:pt-16">
          {/* The video is the layer behind: from the large screens up it runs
              off the right edge of the viewport, so the only edge of it you
              see is the one the copy column cuts across. */}
          <div className="relative mt-9 min-h-[300px] overflow-hidden rounded-card bg-ink lg:absolute lg:inset-y-0 lg:right-[calc(50%-50vw)] lg:left-[38%] lg:mt-0 lg:min-h-0 lg:rounded-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.pexels.com/videos/7147921/colleagues-computer-laptop-conference-room-corporate-7147921.jpeg?auto=compress&cs=tinysrgb&w=1260"
              src="/hero.mp4"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Darkens the edge the copy sits against, so the overlap reads as
                depth rather than a panel dropped on top. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(18,21,15,0.72),rgba(18,21,15,0.12)_42%,transparent_70%)]"
            />
          </div>

          {/* Column one — everything a visitor reads, over the video. */}
          <div className="relative z-1 flex flex-col gap-8 lg:w-[54%]">
            <h1 className="m-0 text-[clamp(38px,4.2vw,64px)] leading-[1.04] font-normal tracking-[-0.03em] text-cream text-pretty">
              Build a <span className="text-brand">verified B2B pipeline</span> your
              revenue team can actually trust
            </h1>

            <p className="m-0 max-w-[52ch] text-[clamp(15px,1.23vw,18px)] leading-[1.6] text-cream/75 text-pretty">
              Lidespy helps SaaS, technology and B2B services firms turn{" "}
              <span className="text-brand">
                verified contact data into qualified meetings
              </span>
              . Database building, cleansing, cold outbound, content syndication
              and ABM — GDPR-compliant across North America, the UK, the EU and
              APAC.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <ArrowCta href="#cta">Book a strategy call</ArrowCta>
              <TextArrowLink href="#work" className="text-[13px]">
                See our work
              </TextArrowLink>
            </div>

            <div className="border-t border-cream/15 pt-6">
              <a
                href="https://www.iafcertsearch.org/certification/yogvFoT2EVlCPpHm5Vj6rh7d"
                target="_blank"
                rel="noopener"
                className="text-[14px] text-coral underline decoration-coral/25 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
              >
                Certified <span className="text-muted-2">· verify on IAF CertSearch ↗</span>
              </a>
              <div className="mt-1 text-[13px] text-cream/60">
                GDPR framework · Est. 2023 · LLP
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* LOGO MARQUEE */}
      <section className="relative z-1 bg-cream shadow-[0_0_0_100vmax_var(--color-cream)] [clip-path:inset(0_-100vmax)]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 overflow-hidden page-x py-10 lg:grid-cols-[minmax(200px,320px)_minmax(0,1fr)]">
          <div className="flex flex-col items-start gap-2.5 lg:border-r-2 lg:border-brand lg:pr-10">
            <div className="text-[13px] leading-[1.35] font-bold tracking-[0.02em] uppercase">
              Trusted by revenue teams across North America, the UK, the EU &amp;
              APAC
            </div>
          </div>
          <div className="ld-fade-x overflow-hidden">
            <div className="ld-marquee">
              {[...LOGOS, ...LOGOS].map((t, i) => (
                <div
                  key={i}
                  className="flex h-11 shrink-0 items-center px-9 text-[22px] font-bold tracking-[-0.01em] text-muted-3"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section id="love" className="relative z-1 bg-cream shadow-[0_0_0_100vmax_var(--color-cream)] [clip-path:inset(0_-100vmax)]">
        <div className="mx-auto max-w-[1280px] page-x pt-10 pb-8">
          <div className="relative grid items-center gap-[clamp(24px,5vw,72px)] overflow-hidden rounded-card bg-ink p-[clamp(28px,4.5vw,56px)] text-cream md:grid-cols-[minmax(160px,300px)_minmax(0,1fr)]">
            <div className="pointer-events-none absolute -top-8 right-6 text-[clamp(180px,22vw,320px)] leading-none font-bold text-coral/7 select-none">
              ”
            </div>
            <Slot
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=70"
              alt="Client photo"
              credit="Photo by LinkedIn Sales Solutions on Unsplash"
              creditHref="https://unsplash.com/@linkedinsalesnavigator"
              sizes="(max-width: 768px) 240px, 300px"
              className="relative aspect-square w-full max-w-[240px] rounded-card outline-1 outline-offset-8 outline-cream/14 md:max-w-none"
            />
            <div className="relative flex flex-col gap-[26px]">
              <div className="flex items-center gap-3.5">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-coral uppercase">
                  Client story
                </span>
                <span className="h-px w-10 bg-coral/50" />
              </div>
              <p className="m-0 text-[clamp(20px,2.1vw,32px)] leading-[1.3] font-normal tracking-[-0.015em] text-cream text-pretty">
                Featured client quote —{" "}
                <strong className="font-semibold text-coral">
                  two to three sentences
                </strong>{" "}
                on data quality, compliance and the meetings that actually{" "}
                <strong className="font-semibold text-coral">showed up</strong>.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-cream/14 pt-[22px]">
                <div className="flex flex-col gap-[5px]">
                  <div className="text-[16px] font-semibold tracking-[-0.01em]">
                    Client name
                  </div>
                  <div className="text-[13px] text-cream/60">
                    Title, Company
                  </div>
                </div>
                <div className="flex gap-7">
                  {[
                    { v: "1.8%", l: "Bounce rate" },
                    { v: "37", l: "Meetings / month" },
                  ].map((s) => (
                    <div key={s.l} className="flex flex-col gap-1">
                      <span className="text-[22px] leading-none font-medium tracking-[-0.03em] tabular-nums text-coral">
                        {s.v}
                      </span>
                      <span className="text-[11px] text-cream/55">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE — pinned stage; the four cards fly in on scroll (HomeMotion) */}
      <section
        id="challenge"
        data-challenge
        className="relative border-y border-ink/12 bg-cream lg:h-screen lg:min-h-[640px]"
      >
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col gap-12 overflow-hidden page-x py-16 lg:block lg:py-0">
          <div className="flex flex-col items-center gap-[22px] text-center lg:absolute lg:top-[9vh] lg:right-0 lg:left-0 lg:px-8">
            <div data-ch-item="pill">
              <Eyebrow>Challenge</Eyebrow>
            </div>
            <h2
              data-ch-item="title"
              className="m-0 max-w-[720px] text-[clamp(30px,3.6vw,56px)] leading-[1.08] font-medium tracking-[-0.025em] text-pretty"
            >
              Your pipeline targets grew.
              <br />
              But your data has not caught up
            </h2>
          </div>

          <div
            data-ch-item="hero"
            className="relative mx-auto aspect-[15/16] w-full max-w-[320px] lg:absolute lg:right-0 lg:bottom-[8vh] lg:left-0 lg:max-h-[46vh] lg:w-[clamp(300px,28vw,440px)] lg:max-w-none"
          >
            <Image
              src="/challenge-figure.png"
              alt="Marketer in an armchair working on a laptop"
              fill
              sizes="(max-width: 1024px) 380px, 34vw"
              className="object-contain object-bottom"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:contents">
              {CHALLENGE_CARDS.map((c, i) => (
              <div
                key={c.index}
                data-ch-item="card"
                style={CHALLENGE_POS[i]}
                className="grid w-full grid-cols-[30px_minmax(0,1fr)] border border-ink bg-white shadow-[8px_10px_0_-1px_rgba(18,21,15,0.10)] lg:absolute lg:w-[clamp(216px,21.5vw,320px)]"
              >
                <div className="flex items-center justify-center border-r border-ink/14 bg-[#F2F3EE] py-3">
                  <span className="text-[9.5px] font-semibold tracking-[0.18em] whitespace-nowrap text-brand uppercase [writing-mode:vertical-rl] [transform:rotate(180deg)]">
                    {c.rail}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col">
                  <div className="flex flex-col gap-[11px] px-[17px] pt-[15px] pb-3.5">
                    <div className="flex items-baseline justify-between gap-2.5">
                      <span className="text-[clamp(32px,3.1vw,48px)] leading-[.86] font-medium tracking-[-0.045em] tabular-nums text-ink">
                        {c.n}
                        {c.unit && (
                          <span className="ml-0.5 text-[.44em] tracking-[-0.01em]">
                            {c.unit}
                          </span>
                        )}
                      </span>
                      <span className="text-[10px] font-semibold tabular-nums text-[#A2A49F]">
                        {c.index}
                      </span>
                    </div>
                    <div className="text-[clamp(12.5px,.98vw,15px)] leading-[1.42] text-muted text-pretty">
                      <Bold text={c.body} />
                    </div>
                  </div>
                  <div className="mt-auto h-1 bg-ink/9">
                    <div className="h-full bg-brand-cta" style={{ width: `${c.bar}%` }} />
                  </div>
                </div>
              </div>
              ))}
          </div>
        </div>
      </section>

      {/* PROCESS — pinned; the rail scrubs horizontally (HomeMotion) */}
      <section id="process" data-process className="relative bg-cream">
        <div
          data-process-pin
          className="flex flex-col justify-center py-16 pl-5 sm:pl-8 lg:h-screen lg:min-h-[640px] lg:overflow-hidden lg:py-0 lg:pl-[max(24px,calc((100vw-1280px)/2+24px))]"
        >
          <div className="mb-10 flex flex-col gap-6 pr-5 sm:pr-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pr-[max(24px,calc((100vw-1280px)/2+24px))]">
            <div>
              <div className="mb-[18px]">
                <Eyebrow>Process</Eyebrow>
              </div>
              <h2 className="m-0 max-w-[640px] text-[clamp(30px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
                From ICP to booked meetings{" "}
                <span className="text-brand">in six weeks.</span>
              </h2>
            </div>
            <div className="hidden shrink-0 flex-col items-end gap-3 lg:flex">
              <div className="flex items-baseline gap-1.5 text-[clamp(44px,5vw,72px)] leading-none font-medium tracking-[-0.04em] tabular-nums text-ink">
                <span data-process-num>01</span>
                <span className="text-[18px] tracking-normal text-muted-2">/ 05</span>
              </div>
              <div className="relative h-0.5 w-[200px] overflow-hidden bg-ink/12">
                <div
                  data-process-bar
                  className="absolute inset-y-0 left-0 w-full origin-left scale-x-20 bg-brand"
                />
              </div>
            </div>
          </div>

          <div className="relative ld-swipe-x snap-x snap-mandatory pr-5 sm:pr-8 lg:pr-0">
            <div className="absolute top-[27px] right-0 left-0 hidden h-px bg-ink/14 lg:block" />
            <div data-process-track className="flex w-max gap-5 will-change-transform">
              {STEPS.map((p) => (
                <div
                  key={p.n}
                  data-process-card
                  className="flex w-[78vw] max-w-[420px] snap-start flex-col gap-[22px] sm:w-[clamp(300px,30vw,420px)]"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      data-process-dot
                      className="relative z-1 inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-ink/20 bg-cream text-[13px] font-semibold text-ink"
                    >
                      {p.n}
                    </span>
                    <span className="relative z-1 bg-cream py-1 pr-2.5 pl-1.5 text-[11px] font-semibold tracking-[0.1em] text-brand uppercase">
                      {p.week}
                    </span>
                  </div>
                  <div className="flex min-h-[280px] flex-col gap-4 rounded-card border border-ink/14 bg-white px-[26px] py-7">
                    <div className="text-[clamp(20px,1.8vw,26px)] leading-[1.15] font-medium tracking-[-0.02em] text-pretty">
                      {p.title}
                    </div>
                    <p className="m-0 flex-1 text-[14px] leading-[1.6] text-muted-2 text-pretty">
                      {p.out}
                    </p>
                    <div className="flex items-center gap-2 border-t border-ink/10 pt-3.5 text-[11px] font-semibold tracking-[0.08em] uppercase">
                      <Check size={11} className="text-brand" />
                      Reviewable output
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex w-[78vw] max-w-[380px] shrink-0 snap-start flex-col justify-center gap-[18px] pt-[76px] pr-6 pl-2 sm:w-[clamp(260px,26vw,380px)]">
                <div className="text-[clamp(22px,2vw,30px)] leading-[1.15] font-medium tracking-[-0.02em] text-pretty">
                  Ready to start week&nbsp;one?
                </div>
                <div>
                  <ArrowCta href="#cta" size="sm">
                    Book a strategy call
                  </ArrowCta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="services" className="mx-auto max-w-[1280px] page-x py-[76px]">
        <div className="mb-[18px]">
          <Eyebrow>Solution</Eyebrow>
        </div>
        <div className="mb-10 grid items-end gap-10 lg:grid-cols-2">
          <h2 className="m-0 text-[clamp(28px,2.95vw,38px)] leading-[1.1] font-medium tracking-[-0.025em] text-pretty">
            We bridge the gap between the data you have and the pipeline you need.
          </h2>
          <p className="m-0 text-[15px] leading-[1.6] text-[#4E554C] text-pretty">
            From building and verifying the database to running demand gen,
            syndication and appointment setting — we do what most teams split
            across three vendors.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {HOME_SERVICES.map((s) => (
            <Link
              key={s.title}
              href={route("Services.dc.html")}
              data-lift
              className="flex flex-col gap-3.5 rounded-ui border border-ink/14 bg-white px-6 pb-7 text-ink transition-colors hover:border-brand/45"
            >
              <div className="relative -mx-6 mb-2 aspect-4/3">
                <Slot
                  src={s.img}
                  alt={s.title}
                  credit={s.credit}
                  creditHref={s.creditHref}
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="absolute inset-0"
                />
                <span className="pointer-events-none absolute top-3.5 left-3.5 rounded-ui border border-[#c8c8c8]/60 bg-ink/86 px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-[#C8C8CC] uppercase">
                  {s.tag}
                </span>
              </div>
              <h3 className="m-0 text-[19px] leading-[1.2] font-semibold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="m-0 flex-1 text-[12px] leading-[1.55] text-muted-2">
                {s.body}
              </p>
              <span className="text-[11px] font-semibold text-muted">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-7">
          <ArrowCta href="#cta" size="sm">
            Book a strategy call
          </ArrowCta>
          <TextArrowLink href="#work">See our work</TextArrowLink>
        </div>
      </section>

      {/* WORK GRID */}
      <section id="work" className="border-y border-ink/11 bg-panel py-[76px]">
        <div className="mx-auto max-w-[1280px] page-x">
          <div className="mb-11 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-[18px]">
                <Eyebrow>Proof of work</Eyebrow>
              </div>
              <h2 className="m-0 text-[clamp(28px,2.95vw,38px)] leading-[1.1] font-medium tracking-[-0.025em] text-pretty">
                Programs that shipped pipeline, not just leads.
              </h2>
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#4E554C] text-pretty">
              Four recent engagements across SaaS, technology, B2B services and
              fintech. Hover any card for the numbers behind it.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-12">
            {CASES.map((c) => (
              <Link
                key={c.title}
                href={route("Case Studies.dc.html")}
                style={{ minHeight: c.minH }}
                data-case-card
                className={`relative flex flex-col overflow-hidden rounded-ui border border-ink/14 bg-white text-ink transition-colors hover:border-brand/55 ${
                  c.span === 7 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="relative min-h-[220px] flex-1 overflow-hidden">
                  <Slot
                    src={c.img}
                    alt={c.title}
                    credit={c.credit}
                    creditHref={c.creditHref}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="absolute inset-0"
                    innerProps={{ "data-case-img": "" }}
                  />
                  <div className="absolute top-3.5 left-3.5 flex gap-1.5">
                    <span className="rounded-ui bg-ink/86 px-2.5 py-[5px] text-[10px] font-semibold tracking-[0.1em] text-cream uppercase">
                      {c.segment}
                    </span>
                    <span className="rounded-ui bg-cream/92 px-2.5 py-[5px] text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                      {c.region}
                    </span>
                  </div>
                  <div
                    data-case-veil
                    className="absolute inset-0 grid grid-cols-2 content-end gap-4 bg-ink/88 p-6 text-cream opacity-0"
                  >
                    {[
                      { v: c.v1, m: c.m1 },
                      { v: c.v2, m: c.m2 },
                    ].map((s) => (
                      <div key={s.m}>
                        <div className="text-[clamp(28px,2.6vw,40px)] leading-none font-medium tracking-[-0.03em] text-coral">
                          {s.v}
                        </div>
                        <div className="mt-1.5 text-[11px] text-cream/70">
                          {s.m}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 border-t border-ink/14 px-[22px] py-[18px]">
                  <div>
                    <div className="text-[17px] font-medium tracking-[-0.01em]">
                      {c.title}
                    </div>
                    <div className="mt-1 text-[11.5px] text-muted-2">{c.sub}</div>
                  </div>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/18">
                    <ArrowUpRight size={12} className="text-brand" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href={route("Case Studies.dc.html")}
              className="inline-flex items-center gap-3.5 rounded-ui border border-brand/45 py-1.5 pr-1.5 pl-[22px] text-[11px] font-semibold tracking-[0.04em] text-ink uppercase"
            >
              View more projects
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-ui bg-brand-cta text-[16px] text-white">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="relative overflow-hidden border-t border-ink/11 bg-ink py-[88px] text-cream">
        <div className="mx-auto max-w-[1280px] page-x">
          <div className="mb-13 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-[18px]">
                <Eyebrow tone="coral">Why us</Eyebrow>
              </div>
              <h2 className="m-0 text-[clamp(30px,3.4vw,48px)] leading-[1.05] font-medium tracking-[-0.028em] text-pretty">
                <span className="text-coral">Why Lidespy</span> — and why not{" "}
                {COMPARE_LABEL[COMPARE]}?
              </h2>
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-cream/68 text-pretty">
              Same six things every buyer asks about. Left column is what we put
              in the contract; right column is what you usually get.
            </p>
          </div>

          <div className="mb-14 grid gap-px overflow-hidden rounded-card border border-cream/14 bg-cream/14 sm:grid-cols-3">
            {STATS.map((st) => (
              <div key={st.l} className="flex flex-col gap-2.5 bg-ink px-7 py-[30px]">
                <div
                  data-count={st.n}
                  data-suffix={st.suffix}
                  className="text-[clamp(40px,4vw,60px)] leading-none font-medium tracking-[-0.035em] tabular-nums text-coral"
                >
                  {st.v}
                </div>
                <div className="text-[12.5px] text-cream/68">{st.l}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="hidden grid-cols-[minmax(100px,.7fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] gap-6 pb-3.5 text-[11px] font-semibold tracking-[0.1em] text-cream/50 uppercase md:grid">
              <div />
              <div className="flex items-center gap-2.5 text-coral">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-cta" />
                Lidespy
              </div>
              <div>{COMPARE_LABEL[COMPARE]}</div>
            </div>
            {rows.map((row) => (
              <div
                key={row.k}
                data-why-row
                className="grid items-start gap-3 border-t border-cream/14 py-[22px] md:grid-cols-[minmax(100px,.7fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] md:gap-6"
              >
                <div className="text-[17px] font-medium tracking-[-0.01em] text-cream">
                  {row.k}
                </div>
                <div className="flex items-start gap-3 text-[14px] leading-[1.55] text-cream">
                  <Check size={14} className="mt-1 shrink-0 text-coral" />
                  <span>
                    <span className="mr-1.5 text-[11px] font-semibold tracking-[0.1em] text-coral uppercase md:hidden">
                      Lidespy ·
                    </span>
                    {row.us}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[14px] leading-[1.55] text-cream/55">
                  <span className="mt-2.5 h-px w-3.5 shrink-0 bg-muted-3" />
                  <span>
                    <span className="mr-1.5 text-[11px] font-semibold tracking-[0.1em] text-cream/45 uppercase md:hidden">
                      {COMPARE_LABEL[COMPARE]} ·
                    </span>
                    {row.them}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL WALL */}
      <section className="overflow-hidden border-y border-ink/11 bg-panel py-[76px]">
        <div className="mx-auto mb-10 max-w-[1280px] page-x">
          <h2 className="m-0 text-[clamp(28px,2.95vw,38px)] leading-[1.06] font-medium tracking-[-0.025em]">
            What buyers say.
          </h2>
        </div>
        <div data-quote-rail className="ld-fade-x">
          <div data-quote-track className="flex w-max gap-4 px-2 will-change-transform">
            {[...QUOTES, ...QUOTES].map((q, i) => (
              <div
                key={i}
                className="flex w-[78vw] max-w-[360px] shrink-0 flex-col gap-[18px] rounded-card border border-ink/14 bg-white p-[26px] sm:w-[clamp(280px,26vw,360px)]"
              >
                <div className="text-[28px] leading-[.5] text-brand">“</div>
                <p className="m-0 flex-1 text-[14px] leading-[1.55] text-muted text-pretty">
                  {q.text}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={q.img}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[12px] font-semibold">{q.name}</div>
                    <div className="text-[11px] text-muted-2">{q.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="insights" className="mx-auto max-w-[1280px] page-x py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="m-0 text-[clamp(28px,2.95vw,38px)] leading-[1.06] font-medium tracking-[-0.025em]">
            Blogs
          </h2>
          <Link
            href={route("Blog.dc.html")}
            className="text-[12px] font-semibold text-muted transition-colors hover:text-brand"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {POSTS.map((a) => (
            <Link key={a.title} href={a.href} data-lift className="group flex flex-col gap-4 text-ink">
              <Slot
                src={a.img}
                alt={a.alt}
                credit={a.credit}
                creditHref={a.creditHref}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-[190px] rounded-card"
              />
              <div className="text-[11px] font-semibold tracking-[0.08em] text-brand uppercase">
                {a.tag}
              </div>
              <h3 className="m-0 text-[17px] leading-[1.3] font-semibold text-pretty group-hover:text-brand">
                {a.title}
              </h3>
              <div className="text-[11px] text-muted-2">
                {a.read}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="mx-auto max-w-[1280px] page-x pt-6 pb-24">
        <div className="relative grid items-center gap-[clamp(32px,5vw,72px)] overflow-hidden rounded-card bg-brand-cta bg-[linear-gradient(rgba(247,248,244,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(247,248,244,.16)_1px,transparent_1px)] bg-[length:56px_56px] p-[clamp(34px,5.5vw,64px)] text-ink lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,.85fr)]">
          <div className="pointer-events-none absolute -right-10 -bottom-[90px] aspect-square w-[clamp(260px,30vw,420px)] rounded-full border border-white/28" />
          <div className="pointer-events-none absolute right-10 -bottom-10 aspect-square w-[clamp(180px,20vw,300px)] rounded-full border border-white/28" />
          <div className="relative flex flex-col gap-[22px]">
            <div className="inline-flex items-center gap-2.5 self-start rounded-ui border border-white/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-white" />
              Free 30-minute data audit
            </div>
            <h2 className="m-0 max-w-[640px] text-[clamp(30px,3.6vw,52px)] leading-[1.02] font-medium tracking-[-0.032em] text-white text-pretty">
              Let&apos;s turn your database into your most reliable pipeline
              source.
            </h2>
            <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-white/86 text-pretty">
              We audit a sample of your current data, show you the bounce and
              compliance risk, and map a program to your Q-target.
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {["ISO 9001:2015", "GDPR-compliant outreach", "No list resale"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-ui border border-white/60 bg-white px-[11px] py-[7px] text-[11.5px] font-medium text-ink"
                  >
                    <Check size={10} className="text-brand" />
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative flex flex-col gap-5 rounded-card bg-ink p-[clamp(24px,2.6vw,34px)] text-cream shadow-[0_30px_60px_-30px_rgba(18,21,15,0.5)]">
            <div className="text-[11px] font-semibold tracking-[0.14em] text-coral uppercase">
              What you get on the call
            </div>
            <div className="flex flex-col">
              {[
                "A scored sample of your current data: accuracy, bounce and consent risk",
                "Reachable audience size for your ICP and target regions",
                "A six-week program mapped to your quarter's pipeline target",
              ].map((t, i, arr) => (
                <div
                  key={t}
                  className={`flex items-start gap-3.5 border-t border-cream/14 py-3 ${
                    i === arr.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="pt-[3px] text-[11px] font-semibold tabular-nums text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-[1.5] text-cream">{t}</span>
                </div>
              ))}
            </div>
            <Link
              href={route("Contact.dc.html")}
              data-btn="light"
              className="inline-flex items-center justify-between gap-3.5 rounded-ui bg-white py-2 pr-2 pl-6 text-[12px] font-semibold tracking-[0.04em] text-brand uppercase"
            >
              Book a strategy call
              <span
                data-chip
                className="inline-flex h-11 w-11 items-center justify-center rounded-ui bg-ink text-[16px] text-coral"
              >
                <span className="inline-block">→</span>
              </span>
            </Link>
            <div className="text-[12px] text-cream/60">
              Or email{" "}
              <a
                href="mailto:info@lidespy.com"
                className="border-b border-cream/35 text-cream"
              >
                info@lidespy.com
              </a>{" "}
              · replies within one business day
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
