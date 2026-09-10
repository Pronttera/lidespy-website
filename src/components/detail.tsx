import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, ChevronRight } from "./icons";
import { Eyebrow } from "./ui";
import { route } from "@/lib/routes";

export type DetailSection = {
  id: string;
  title: string;
  body: string;
  points: string[];
};

/**
 * The numbered argument that forms the body of every detail page: a sticky
 * index on the left against the sections on the right. Extracted from the
 * pillar page, which is where the pattern started — the service, industry,
 * objective and resource pages all run the same rhythm.
 */
export function SectionRun({
  id,
  label,
  sections,
}: {
  /** Anchor for the hero's "how it works" jump link. */
  id: string;
  label: string;
  sections: DetailSection[];
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(48px,5vw,84px)]"
    >
      <div className="grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-26 lg:self-start">
          <Eyebrow>{label}</Eyebrow>
          <div className="mt-6 flex flex-col">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-baseline gap-3 border-b border-ink/12 py-3 text-[14px] leading-[1.35] text-muted transition-colors hover:text-brand"
              >
                <span className="w-[20px] shrink-0 text-[10.5px] tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">{s.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {sections.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 border-b border-ink/15 py-[clamp(32px,3.5vw,52px)] first:pt-0"
            >
              <div className="mb-5 flex items-center gap-3.5">
                <span className="text-[12px] font-semibold tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px max-w-[60px] flex-1 bg-ink/20" />
              </div>
              <h2 className="m-0 text-[clamp(24px,2.8vw,38px)] leading-[1.08] font-medium tracking-[-0.028em] text-pretty">
                {s.title}
              </h2>
              <p className="mt-4 mb-0 max-w-[62ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
                {s.body}
              </p>
              <div className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {s.points.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-start gap-3 border-b border-ink/9 pb-3 text-[14px] leading-[1.5] text-ink"
                  >
                    <Check size={13} className="mt-1 shrink-0 text-brand" />
                    <span className="text-pretty">{pt}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export type DetailCard = { href: string; title: string; body: string };

/**
 * A grid of link cards, in the two weights the detail pages use: `compact` for
 * a run of related services on the panel ground, `feature` for the larger
 * "the others in this set" pair on cream.
 */
export function LinkCardGrid({
  label,
  intro,
  cards,
  variant = "compact",
}: {
  label: string;
  intro?: ReactNode;
  cards: DetailCard[];
  variant?: "compact" | "feature";
}) {
  const feature = variant === "feature";

  const grid = (
    <>
      <Eyebrow>{label}</Eyebrow>
      {intro && (
        <p className="mt-5 mb-8 max-w-[52ch] text-[clamp(17px,1.6vw,24px)] leading-[1.35] font-medium tracking-[-0.02em] text-ink text-pretty">
          {intro}
        </p>
      )}
      <div
        className={
          feature
            ? "mt-7 grid gap-3.5 sm:grid-cols-2"
            : `grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] ${intro ? "" : "mt-7"}`
        }
      >
        {cards.map((c) => (
          <Link
            key={c.href + c.title}
            href={c.href}
            className={
              feature
                ? "flex flex-col gap-3 rounded-card border border-ink/14 px-[26px] pt-6 pb-7 transition-colors hover:border-brand/45 hover:bg-white"
                : "flex flex-col gap-3 rounded-card border border-ink/12 bg-white px-[22px] pt-[22px] pb-6 transition-colors hover:border-brand/45"
            }
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className={
                  feature
                    ? "text-[clamp(20px,2vw,26px)] leading-[1.15] font-medium tracking-[-0.022em] text-ink text-pretty"
                    : "text-[18px] leading-[1.2] font-semibold tracking-[-0.018em] text-ink text-pretty"
                }
              >
                {c.title}
              </div>
              {feature ? (
                <ChevronRight className="mt-1.5 shrink-0 text-brand" />
              ) : (
                <ArrowRight className="mt-1 shrink-0 text-brand opacity-75" />
              )}
            </div>
            <div
              className={
                feature
                  ? "text-[14px] leading-[1.6] text-muted text-pretty"
                  : "text-[13.5px] leading-[1.55] text-muted-2 text-pretty"
              }
            >
              {c.body}
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return feature ? (
    <section className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,72px)]">
      {grid}
    </section>
  ) : (
    <section className="bg-panel">
      <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
        {grid}
      </div>
    </section>
  );
}

/** The dark closing CTA every detail page ends on. */
export function DetailCta({
  title,
  body,
  button,
}: {
  title: string;
  body: string;
  button: string;
}) {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(52px,5.5vw,88px)] text-center">
        <h2 className="m-0 text-[clamp(28px,3.2vw,48px)] leading-[1.06] font-normal tracking-[-0.03em] text-balance">
          {title}
        </h2>
        <p className="m-0 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-cream/70 text-pretty">
          {body}
        </p>
        <Link
          href={route("Contact.dc.html")}
          className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
        >
          {button}
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
