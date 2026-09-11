import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight } from "@/components/icons";
import { HEADLINE_STATS, STUDIES } from "@/i18n/dictionaries/en/case-studies";
import { route } from "@/lib/routes";
import StudyList from "./StudyList";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "Case Studies · B2B Demand Generation Results · Lidespy",
  description:
    "Proven B2B demand generation campaigns that drove real pipeline — challenge, solution and the numbers.",
};

export default function CaseStudiesPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="resources" />

      {/* HERO */}
      <section className="mx-auto flex max-w-[1280px] flex-col gap-10 page-x pt-[clamp(52px,6vw,92px)]">
        <div className="grid items-end gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 self-start border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-brand" />
              Case studies · {STUDIES.length} programs
            </div>
            <h1 className="m-0 text-[clamp(40px,5.4vw,82px)] leading-[.99] font-normal tracking-[-0.036em] text-pretty">
              Proven campaigns that drove{" "}
              <span className="text-brand">real pipeline</span>.
            </h1>
          </div>
          <p className="m-0 text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
            Every study follows the same three beats: the challenge the client
            brought us, what we built, and the numbers it produced. No composite
            clients, no rounded-up results.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-card border border-ink/14 bg-ink/14 sm:grid-cols-2 xl:grid-cols-4">
          {HEADLINE_STATS.map((h) => (
            <div key={h.l} className="flex flex-col gap-[9px] bg-cream px-6 py-[26px]">
              <div className="text-[clamp(28px,3vw,42px)] leading-none font-medium tracking-[-0.035em] tabular-nums text-ink">
                {h.v}
              </div>
              <div className="text-[12px] text-muted-2 text-pretty">{h.l}</div>
            </div>
          ))}
        </div>
      </section>

      <StudyList />

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 page-x py-[clamp(52px,5.5vw,84px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,46px)] leading-[1.05] font-normal tracking-[-0.03em] text-pretty">
            Your program could be the <span className="text-coral">next one here</span>.
          </h2>
          <p className="m-0 max-w-[600px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
            Tell us the target and the quarter. We&apos;ll show you which of these
            programs maps closest to your situation.
          </p>
          <Link
            href={route("Contact.dc.html")}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Book a strategy call
            <ArrowRight />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
