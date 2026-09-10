import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ButtonMotion from "@/components/ButtonMotion";
import DetailHero from "@/components/DetailHero";
import DetailHeroMotion from "@/components/DetailHeroMotion";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { DetailCta, LinkCardGrid, SectionRun } from "@/components/detail";
import { PILLARS, PILLARS_COPY, pillarByKey } from "@/i18n/dictionaries/en/pillars";
import { SERVICE_DETAILS } from "@/i18n/dictionaries/en/services";
import { pillarHref, route, serviceHref } from "@/lib/routes";

export function generateStaticParams() {
  return PILLARS.map((p) => ({ pillar: p.key }));
}

export async function generateMetadata({
  params,
}: PageProps<"/why-lidespy/[pillar]">): Promise<Metadata> {
  const pillar = pillarByKey((await params).pillar);
  if (!pillar) return {};
  return {
    title: `${pillar.name} · Lidespy`,
    description: pillar.intro,
  };
}

export default async function PillarPage({
  params,
}: PageProps<"/why-lidespy/[pillar]">) {
  const pillar = pillarByKey((await params).pillar);
  if (!pillar) notFound();

  const position = PILLARS.findIndex((p) => p.key === pillar.key);
  const others = PILLARS.filter((p) => p.key !== pillar.key);
  const services = pillar.services
    .map((key) => SERVICE_DETAILS.find((s) => s.key === key))
    .filter((s) => s !== undefined);

  return (
    <div
      data-gsap-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <DetailHeroMotion />
      <ButtonMotion />
      <SiteNav active="solutions" />

      <DetailHero
        back={{ label: PILLARS_COPY.backLabel, href: route("Why Lidespy.dc.html") }}
        index={{ n: position + 1, of: PILLARS.length, label: "Pillar" }}
        eyebrow={pillar.eyebrow}
        titleLead={pillar.titleLead}
        titleAccent={pillar.titleAccent}
        intro={pillar.intro}
        primary={{ label: pillar.cta.button, href: "Contact.dc.html" }}
        secondary={{ label: PILLARS_COPY.sectionsLabel, href: "#how" }}
        stats={pillar.stats}
        statsLabel={PILLARS_COPY.statsLabel}
        contents={{
          label: PILLARS_COPY.onThisPage,
          items: pillar.sections.map((sec) => ({ id: sec.id, name: sec.title })),
        }}
        ticker={pillar.sections.map((sec) => sec.title)}
      />

      <SectionRun
        id="how"
        label={PILLARS_COPY.sectionsLabel}
        sections={pillar.sections}
      />

      <LinkCardGrid
        label={PILLARS_COPY.servicesLabel}
        intro={PILLARS_COPY.servicesIntro}
        cards={services.map((s) => ({
          href: serviceHref(s.key),
          title: s.name,
          body: s.overview,
        }))}
      />

      <LinkCardGrid
        label={PILLARS_COPY.otherLabel}
        variant="feature"
        cards={others.map((p) => ({
          href: pillarHref(p.key),
          title: p.name,
          body: p.intro,
        }))}
      />

      <DetailCta
        title={pillar.cta.title}
        body={pillar.cta.body}
        button={pillar.cta.button}
      />

      <SiteFooter />
    </div>
  );
}
