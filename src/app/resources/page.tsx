import type { Metadata } from "next";
import { Suspense } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import NewsletterForm from "@/components/NewsletterForm";
import { TextArrowLink } from "@/components/ui";
import { RESOURCES_COPY } from "@/i18n/dictionaries/en/resources";
import ResourceLibrary from "./ResourceLibrary";

const { meta, cta } = RESOURCES_COPY;

export const metadata: Metadata = {
  alternates: { canonical: "/resources" },
  title: meta.title,
  description: meta.description,
};

export default function ResourcesPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="resources" />

      {/* Hero, filter chips and the results grid share one piece of state, so
          they live together in a single client component. Its `useSearchParams`
          needs a boundary to fall back to while the client takes over. */}
      <Suspense fallback={null}>
        <ResourceLibrary />
      </Suspense>


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
