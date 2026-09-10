import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ButtonMotion from "@/components/ButtonMotion";
import DetailHero from "@/components/DetailHero";
import DetailHeroMotion from "@/components/DetailHeroMotion";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { DetailCta, LinkCardGrid, SectionRun } from "@/components/detail";
import {
  OBJECTIVES,
  OBJECTIVES_COPY,
  objectiveByKey,
} from "@/i18n/dictionaries/en/objectives";
import { SERVICE_DETAILS } from "@/i18n/dictionaries/en/services";
import { objectiveHref, route, serviceHref } from "@/lib/routes";

export function generateStaticParams() {
  return OBJECTIVES.map((o) => ({ objective: o.key }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[objective]">): Promise<Metadata> {
  const objective = objectiveByKey((await params).objective);
  if (!objective) return {};
  return { title: `${objective.name} · Lidespy`, description: objective.intro };
}

export default async function ObjectivePage({
  params,
}: PageProps<"/solutions/[objective]">) {
  const objective = objectiveByKey((await params).objective);
  if (!objective) notFound();

  const position = OBJECTIVES.findIndex((o) => o.key === objective.key);
  const others = OBJECTIVES.filter((o) => o.key !== objective.key);
  const services = objective.services
    .map((key) => SERVICE_DETAILS.find((s) => s.key === key))
    .filter((s) => s !== undefined);

  return (
    <div
      data-gsap-root
      className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink"
    >
      <DetailHeroMotion />
      <ButtonMotion />
      <SiteNav active="enable" />

      <DetailHero
        back={{ label: OBJECTIVES_COPY.backLabel, href: route("Solutions.dc.html") }}
        index={{ n: position + 1, of: OBJECTIVES.length, label: OBJECTIVES_COPY.indexLabel }}
        eyebrow={objective.eyebrow}
        titleLead={objective.titleLead}
        titleAccent={objective.titleAccent}
        intro={objective.intro}
        primary={{ label: objective.cta.button, href: "Contact.dc.html" }}
        secondary={{ label: OBJECTIVES_COPY.sectionsLabel, href: "#how" }}
        stats={objective.stats}
        statsLabel={OBJECTIVES_COPY.statsLabel}
        contents={{
          label: OBJECTIVES_COPY.onThisPage,
          items: objective.sections.map((s) => ({ id: s.id, name: s.title })),
        }}
        ticker={objective.sections.map((s) => s.title)}
      />

      <SectionRun
        id="how"
        label={OBJECTIVES_COPY.sectionsLabel}
        sections={objective.sections}
      />

      <LinkCardGrid
        label={OBJECTIVES_COPY.servicesLabel}
        intro={OBJECTIVES_COPY.servicesIntro}
        cards={services.map((s) => ({
          href: serviceHref(s.key),
          title: s.name,
          body: s.overview,
        }))}
      />

      <LinkCardGrid
        label={OBJECTIVES_COPY.otherLabel}
        variant="feature"
        cards={others.map((o) => ({
          href: objectiveHref(o.key),
          title: o.name,
          body: o.summary,
        }))}
      />

      <DetailCta
        title={objective.cta.title}
        body={objective.cta.body}
        button={objective.cta.button}
      />

      <SiteFooter />
    </div>
  );
}
