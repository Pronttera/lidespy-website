import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import ButtonMotion from "@/components/ButtonMotion";
import DetailHero from "@/components/DetailHero";
import DetailHeroMotion from "@/components/DetailHeroMotion";
import { hubCrossLinks, hubIndex } from "@/components/ResourceHub";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { DetailCta, LinkCardGrid } from "@/components/detail";
import { ArrowRight, ArrowUpRight, Check, Close } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import { MEDIA_KIT_PAGE as KIT } from "@/i18n/dictionaries/en/resource-hubs";

export const metadata: Metadata = {
  title: KIT.meta.title,
  description: KIT.meta.description,
  alternates: { canonical: "/resources/media-kit" },
};

/** One numbered row of the kit: the label rail on the left, the asset on the right. */
function KitRow({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="grid scroll-mt-24 gap-[clamp(20px,3.5vw,60px)] border-t border-ink/15 py-[clamp(32px,3.5vw,52px)] lg:grid-cols-[minmax(200px,280px)_minmax(0,1fr)]"
    >
      <div className="flex flex-col gap-3">
        <span className="text-[12px] font-semibold tabular-nums text-brand">
          {String(n).padStart(2, "0")}
        </span>
        <h2 className="m-0 text-[clamp(22px,2.3vw,30px)] leading-[1.1] font-medium tracking-[-0.025em] text-pretty">
          {title}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function MediaKitPage() {
  const title = (id: string) => KIT.sections.find((s) => s.id === id)!.name;
  const n = (id: string) => KIT.sections.findIndex((s) => s.id === id) + 1;

  return (
    <div data-gsap-root className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <DetailHeroMotion />
      <ButtonMotion />
      <SiteNav active="resources" />

      <DetailHero
        back={{ label: "Resource library", href: "/resources" }}
        index={hubIndex("media-kit")}
        eyebrow={KIT.eyebrow}
        titleLead={KIT.titleLead}
        titleAccent={KIT.titleAccent}
        intro={KIT.intro}
        primary={{ label: KIT.cta.button, href: "Contact.dc.html" }}
        secondary={{ label: KIT.logo.download, href: "#logo" }}
        stats={KIT.stats}
        statsLabel="Key numbers"
        contents={{ label: "In the kit", items: KIT.sections }}
        ticker={KIT.sections.map((s) => s.name)}
      />

      <div className="mx-auto max-w-[1280px] page-x pt-[clamp(20px,2vw,32px)] pb-[clamp(48px,5vw,84px)]">
        {/* LOGO */}
        <KitRow id="logo" n={n("logo")} title={title("logo")}>
          <p className="m-0 max-w-[60ch] text-[15px] leading-[1.65] text-muted text-pretty">
            {KIT.logo.body}
          </p>
          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            <figure className="m-0 flex flex-col gap-2.5">
              <div className="flex aspect-[16/9] items-center justify-center rounded-card border border-ink/12 bg-white">
                <Image src="/lidespy-logo.png" alt="Lidespy logo on a light background" width={997} height={304} className="h-auto w-[56%]" />
              </div>
              <figcaption className="text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {KIT.logo.onLight}
              </figcaption>
            </figure>
            <figure className="m-0 flex flex-col gap-2.5">
              <div className="flex aspect-[16/9] items-center justify-center rounded-card bg-ink">
                <Image src="/lidespy-logo.png" alt="Lidespy logo reversed on a dark background" width={997} height={304} className="h-auto w-[56%] brightness-0 invert" />
              </div>
              <figcaption className="text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                {KIT.logo.onDark}
              </figcaption>
            </figure>
          </div>
          <a
            href="/lidespy-logo.png"
            download="lidespy-logo.png"
            className="mt-6 inline-flex items-center gap-3 rounded-ui bg-brand-cta px-6 py-3.5 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
          >
            {KIT.logo.download}
            <ArrowRight size={13} />
          </a>
        </KitRow>

        {/* COLOURS */}
        <KitRow id="colours" n={n("colours")} title={title("colours")}>
          <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(170px,1fr))]">
            {KIT.colours.map((c) => (
              <div key={c.hex} className="overflow-hidden rounded-card border border-ink/12 bg-white">
                <div className="h-[92px] border-b border-ink/10" style={{ background: c.hex }} />
                <div className="flex flex-col gap-1 px-4 pt-3 pb-4">
                  <span className="text-[14px] font-semibold text-ink">{c.name}</span>
                  <span className="text-[12px] tabular-nums tracking-[0.04em] text-muted-2">{c.hex}</span>
                  <span className="mt-1 text-[12px] leading-[1.45] text-muted-3 text-pretty">{c.use}</span>
                </div>
              </div>
            ))}
          </div>
        </KitRow>

        {/* TYPOGRAPHY */}
        <KitRow id="typography" n={n("typography")} title={title("typography")}>
          <div className="rounded-card border border-ink/12 bg-white p-[clamp(22px,2.5vw,34px)]">
            <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
              {KIT.typography.family}
            </div>
            <div className="mt-3 text-[clamp(44px,6vw,88px)] leading-none font-normal tracking-[-0.04em] text-ink">
              Aa <span className="text-brand">Bb</span> 123
            </div>
            <div className="mt-4 text-[clamp(18px,1.8vw,24px)] leading-[1.3] font-medium tracking-[-0.02em] text-ink">
              Leads That Drive Growth
            </div>
          </div>
          <p className="mt-5 mb-0 max-w-[60ch] text-[15px] leading-[1.65] text-muted text-pretty">
            {KIT.typography.body}
          </p>
        </KitRow>

        {/* BOILERPLATE */}
        <KitRow id="boilerplate" n={n("boilerplate")} title={title("boilerplate")}>
          <div className="flex flex-col gap-3.5">
            {[
              { label: KIT.boilerplate.shortLabel, text: KIT.boilerplate.short },
              { label: KIT.boilerplate.longLabel, text: KIT.boilerplate.long },
            ].map((b) => (
              <div key={b.label} className="rounded-card border border-ink/12 bg-white p-[clamp(20px,2.2vw,28px)]">
                <div className="mb-2.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                  {b.label}
                </div>
                <p className="m-0 max-w-[70ch] text-[15px] leading-[1.7] text-ink text-pretty select-all">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </KitRow>

        {/* FACTS */}
        <KitRow id="facts" n={n("facts")} title={title("facts")}>
          <dl className="m-0 grid rounded-card border border-ink/12 bg-white">
            {KIT.facts.map(([k, v]) => (
              <div
                key={k}
                className="grid gap-1 border-b border-ink/10 px-[clamp(18px,2vw,26px)] py-3.5 last:border-b-0 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="text-[12px] font-semibold tracking-[0.06em] text-muted-3 uppercase">{k}</dt>
                <dd className="m-0 text-[14.5px] leading-[1.5] text-ink text-pretty">{v}</dd>
              </div>
            ))}
          </dl>
        </KitRow>

        {/* USAGE */}
        <KitRow id="usage" n={n("usage")} title={title("usage")}>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {[
              { label: KIT.usage.doLabel, items: KIT.usage.do, ok: true },
              { label: KIT.usage.dontLabel, items: KIT.usage.dont, ok: false },
            ].map((g) => (
              <div key={g.label} className="rounded-card border border-ink/12 bg-white p-[clamp(20px,2.2vw,28px)]">
                <div className={`mb-3 text-[11px] font-semibold tracking-[0.12em] uppercase ${g.ok ? "text-brand" : "text-muted-3"}`}>
                  {g.label}
                </div>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 border-t border-ink/9 pt-2.5 text-[13.5px] leading-[1.5] text-ink">
                      {g.ok ? (
                        <Check size={11} className="mt-[4px] shrink-0 text-brand" />
                      ) : (
                        <Close size={10} className="mt-[5px] shrink-0 text-muted-3" />
                      )}
                      <span className="text-pretty">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </KitRow>

        {/* PRESS CONTACT */}
        <div className="mt-2 flex flex-col justify-between gap-5 rounded-card border border-ink/12 bg-panel p-[clamp(22px,2.5vw,34px)] md:flex-row md:items-center">
          <div className="max-w-[60ch]">
            <Eyebrow>{KIT.press.title}</Eyebrow>
            <p className="mt-4 mb-0 text-[15px] leading-[1.65] text-muted text-pretty">{KIT.press.body}</p>
          </div>
          <a
            href="mailto:info@lidespy.com"
            className="inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-ink transition-colors hover:text-brand"
          >
            info@lidespy.com
            <ArrowUpRight size={13} className="text-brand" />
          </a>
        </div>
      </div>

      <LinkCardGrid label="More from the library" cards={hubCrossLinks("media-kit")} />

      <DetailCta title={KIT.cta.title} body={KIT.cta.body} button={KIT.cta.button} />

      <SiteFooter />
    </div>
  );
}
