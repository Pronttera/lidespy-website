import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ButtonMotion from "@/components/ButtonMotion";
import DetailHero from "@/components/DetailHero";
import DetailHeroMotion from "@/components/DetailHeroMotion";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { DetailCta, LinkCardGrid, SectionRun } from "@/components/detail";
import { Eyebrow } from "@/components/ui";
import { INDUSTRIES_LIST } from "@/i18n/dictionaries/en/industries";
import {
  INDUSTRY_PAGES_COPY,
  industryPageByKey,
} from "@/i18n/dictionaries/en/industry-pages";
import { SERVICE_DETAILS } from "@/i18n/dictionaries/en/services";
import { industryHref, route, serviceHref } from "@/lib/routes";

export function generateStaticParams() {
  return INDUSTRIES_LIST.map((i) => ({ industry: i.key }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[industry]">): Promise<Metadata> {
  const key = (await params).industry;
  const industry = INDUSTRIES_LIST.find((i) => i.key === key);
  const page = industryPageByKey(key);
  if (!industry || !page) return {};
  return {
    title: `B2B Lead Generation for ${industry.name} · Lidespy`,
    description: page.intro,
    alternates: { canonical: industryHref(key) },
  };
}

export default async function IndustryPage({
  params,
}: PageProps<"/industries/[industry]">) {
  const key = (await params).industry;
  const industry = INDUSTRIES_LIST.find((i) => i.key === key);
  const page = industryPageByKey(key);
  if (!industry || !page) notFound();

  const position = INDUSTRIES_LIST.findIndex((i) => i.key === key);
  const others = INDUSTRIES_LIST.filter((i) => i.key !== key);
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
      <SiteNav active="enable" />

      <DetailHero
        back={{ label: INDUSTRY_PAGES_COPY.backLabel, href: route("Industries.dc.html") }}
        index={{
          n: position + 1,
          of: INDUSTRIES_LIST.length,
          label: INDUSTRY_PAGES_COPY.indexLabel,
        }}
        eyebrow={page.eyebrow}
        titleLead={page.titleLead}
        titleAccent={page.titleAccent}
        intro={page.intro}
        primary={{ label: page.cta.button, href: "Contact.dc.html" }}
        secondary={{ label: INDUSTRY_PAGES_COPY.sectionsLabel, href: "#how" }}
        stats={page.stats}
        statsLabel={INDUSTRY_PAGES_COPY.statsLabel}
        contents={{
          label: INDUSTRY_PAGES_COPY.onThisPage,
          items: page.sections.map((s) => ({ id: s.id, name: s.title })),
        }}
        ticker={page.sections.map((s) => s.title)}
      />

      {/* The personas already listed on the index page, kept here so the
          detail page answers "who do you actually reach" without a click. */}
      <section className="border-b border-ink/12 bg-panel">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[clamp(20px,3vw,56px)] page-x py-[clamp(28px,3vw,44px)] lg:grid-cols-[minmax(200px,280px)_minmax(0,1fr)]">
          <div>
            <Eyebrow>{INDUSTRY_PAGES_COPY.personasLabel}</Eyebrow>
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-wrap gap-2.5">
              {industry.personas.map((p) => (
                <span
                  key={p}
                  className="rounded-ui border border-ink/14 bg-white px-3.5 py-2 text-[13.5px] text-ink"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="m-0 max-w-[60ch] text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      <SectionRun
        id="how"
        label={INDUSTRY_PAGES_COPY.sectionsLabel}
        sections={page.sections}
      />

      <LinkCardGrid
        label={INDUSTRY_PAGES_COPY.servicesLabel}
        intro={INDUSTRY_PAGES_COPY.servicesIntro}
        cards={services.map((s) => ({
          href: serviceHref(s.key),
          title: s.name,
          body: s.overview,
        }))}
      />

      <LinkCardGrid
        label={INDUSTRY_PAGES_COPY.otherLabel}
        variant="feature"
        cards={others.map((i) => ({
          href: industryHref(i.key),
          title: i.name,
          body: industryPageByKey(i.key)?.summary ?? i.description,
        }))}
      />

      <DetailCta title={page.cta.title} body={page.cta.body} button={page.cta.button} />

      <SiteFooter />
    </div>
  );
}
