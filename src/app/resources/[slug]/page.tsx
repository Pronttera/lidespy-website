import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ButtonMotion from "@/components/ButtonMotion";
import DetailHero from "@/components/DetailHero";
import DetailHeroMotion from "@/components/DetailHeroMotion";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { DetailCta, LinkCardGrid, SectionRun } from "@/components/detail";
import { Slot } from "@/components/ui";
import { RESOURCES } from "@/i18n/dictionaries/en/resources";
import {
  RESOURCE_PAGES,
  RESOURCE_PAGES_COPY,
  resourcePageBySlug,
} from "@/i18n/dictionaries/en/resource-pages";
import { SERVICE_DETAILS } from "@/i18n/dictionaries/en/services";
import { resourceHref, route, serviceHref } from "@/lib/routes";

/** Only reports and insights have pages; blog-category resources do not. */
const WITH_PAGES = RESOURCES.filter((r) => r.slug !== undefined);

export function generateStaticParams() {
  return Object.keys(RESOURCE_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const slug = (await params).slug;
  const page = resourcePageBySlug(slug);
  const resource = WITH_PAGES.find((r) => r.slug === slug);
  if (!page || !resource) return {};
  return { title: `${resource.title} · Lidespy`, description: page.intro };
}

export default async function ResourcePage({
  params,
}: PageProps<"/resources/[slug]">) {
  const slug = (await params).slug;
  const page = resourcePageBySlug(slug);
  const resource = WITH_PAGES.find((r) => r.slug === slug);
  if (!page || !resource) notFound();

  const position = WITH_PAGES.findIndex((r) => r.slug === slug);
  const others = WITH_PAGES.filter((r) => r.slug !== slug);
  const services = page.services
    .map((k) => SERVICE_DETAILS.find((s) => s.key === k))
    .filter((s) => s !== undefined);

  return (
    <div
      data-gsap-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <DetailHeroMotion />
      <ButtonMotion />
      <SiteNav active="resources" />

      <DetailHero
        back={{ label: RESOURCE_PAGES_COPY.backLabel, href: route("Resources.dc.html") }}
        index={{
          n: position + 1,
          of: WITH_PAGES.length,
          label: RESOURCE_PAGES_COPY.indexLabel,
        }}
        eyebrow={page.eyebrow}
        titleLead={page.titleLead}
        titleAccent={page.titleAccent}
        intro={page.intro}
        primary={{ label: page.cta.button, href: "Contact.dc.html" }}
        secondary={{ label: RESOURCE_PAGES_COPY.sectionsLabel, href: "#inside" }}
        stats={page.stats}
        statsLabel={RESOURCE_PAGES_COPY.statsLabel}
        contents={{
          label: RESOURCE_PAGES_COPY.onThisPage,
          items: page.sections.map((s) => ({ id: s.id, name: s.title })),
        }}
        ticker={page.sections.map((s) => s.title)}
      />

      {/* The cover, carried over from the library card so the piece is
          recognisable as the one the reader clicked. */}
      <section className="border-b border-ink/12 bg-panel">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[clamp(24px,3.5vw,56px)] page-x py-[clamp(32px,3.5vw,52px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Slot
            src={resource.img}
            alt={resource.title}
            credit={resource.credit}
            creditHref={resource.creditHref}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[16/10] rounded-ui"
          />
          <div className="flex flex-col gap-4">
            <div className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
              {page.meta}
            </div>
            <h2 className="m-0 text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-medium tracking-[-0.024em] text-ink text-pretty">
              {resource.title}
            </h2>
            <p className="m-0 max-w-[54ch] text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-muted text-pretty">
              {resource.body}
            </p>
          </div>
        </div>
      </section>

      <SectionRun
        id="inside"
        label={RESOURCE_PAGES_COPY.sectionsLabel}
        sections={page.sections}
      />

      <LinkCardGrid
        label={RESOURCE_PAGES_COPY.servicesLabel}
        intro={RESOURCE_PAGES_COPY.servicesIntro}
        cards={services.map((s) => ({
          href: serviceHref(s.key),
          title: s.name,
          body: s.overview,
        }))}
      />

      <LinkCardGrid
        label={RESOURCE_PAGES_COPY.otherLabel}
        variant="feature"
        cards={others.map((r) => ({
          href: resourceHref(r),
          title: r.title,
          body: resourcePageBySlug(r.slug!)?.summary ?? r.body,
        }))}
      />

      <DetailCta title={page.cta.title} body={page.cta.body} button={page.cta.button} />

      <SiteFooter />
    </div>
  );
}
