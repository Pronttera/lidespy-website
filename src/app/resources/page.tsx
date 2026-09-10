import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import NewsletterForm from "@/components/NewsletterForm";
import { ArrowUpRight } from "@/components/icons";
import { TextArrowLink } from "@/components/ui";
import { route } from "@/lib/routes";
import { RESOURCES_COPY } from "@/i18n/dictionaries/en/resources";
import ResourceLibrary from "./ResourceLibrary";

const { meta, mediaKit, cta } = RESOURCES_COPY;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default async function ResourcesPage({
  searchParams,
}: PageProps<"/resources">) {
  // Reading the param here — rather than `useSearchParams` in the client
  // component — means the Resources menu re-renders this page with the new
  // value on every click, including clicks made from this page itself.
  const { type } = await searchParams;

  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="resources" />

      {/* Hero, search/filter command bar and the results grid share one piece
          of state, so they live together in a single client component. */}
      <ResourceLibrary type={typeof type === "string" ? type : undefined} />

      {/* MEDIA KIT */}
      <section
        id="media-kit"
        className="scroll-mt-24 border-t border-ink/10 bg-panel"
      >
        <div className="mx-auto grid max-w-[1280px] items-center gap-[clamp(28px,4vw,64px)] page-x py-[clamp(48px,5vw,72px)] lg:grid-cols-2">
          <div>
            <div className="mb-4 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
              {mediaKit.label}
            </div>
            <h2 className="m-0 mb-3.5 text-[clamp(26px,2.8vw,38px)] leading-[1.08] font-medium tracking-[-0.025em] text-pretty">
              {mediaKit.title}
            </h2>
            <p className="m-0 text-[15px] leading-[1.6] text-muted text-pretty">
              {mediaKit.body}
            </p>
          </div>
          {/* One bordered list rather than three small boxes: the rows fill the
              column beside the heading and the labels stop wrapping mid-word. */}
          <ul className="m-0 list-none divide-y divide-ink/10 rounded-ui border border-ink/12 bg-white p-0">
            {mediaKit.items.map((m) => (
              <li key={m.title}>
                <Link
                  href={route("Resources.dc.html#media-kit")}
                  className="group flex items-center justify-between gap-5 px-[22px] py-[18px] text-ink transition-colors hover:bg-panel/70"
                >
                  <span className="flex flex-col gap-1">
                    <span className="text-[15px] font-semibold tracking-[-0.01em]">
                      {m.title}
                    </span>
                    <span className="text-[12.5px] leading-[1.5] text-muted-2">
                      {m.sub}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-[clamp(28px,4vw,72px)] page-x py-[clamp(44px,5vw,72px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,.95fr)]">
          <div className="max-w-[560px]">
            <div className="mb-3.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              {cta.label}
            </div>
            <h2 className="m-0 mb-3.5 text-[clamp(26px,3vw,44px)] leading-[1.06] font-medium tracking-[-0.03em] text-pretty">
              {cta.title}
            </h2>
            <p className="m-0 text-[15px] leading-[1.6] text-cream/68 text-pretty">
              {cta.body}
            </p>
          </div>
          {/* The headline promises an inbox, so the band captures one — the
              contact route stays available as the secondary action. */}
          <div className="flex flex-col gap-4 rounded-card border border-cream/16 bg-cream/4 p-[clamp(20px,2.2vw,28px)]">
            <NewsletterForm />
            <div className="flex items-center gap-3 border-t border-cream/12 pt-3.5 text-[12.5px] text-cream/55">
              Prefer to talk it through?
              <TextArrowLink
                href="Contact.dc.html"
                className="text-[11px] !text-cream"
              >
                {cta.action}
              </TextArrowLink>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
