import Link from "next/link";
import ButtonMotion from "./ButtonMotion";
import DetailHero from "./DetailHero";
import DetailHeroMotion from "./DetailHeroMotion";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import { DetailCta, LinkCardGrid } from "./detail";
import { ArrowRight, Check } from "./icons";
import { Eyebrow } from "./ui";
import {
  HUBS,
  LIBRARY_HUBS,
  type HubItem,
  type HubKey,
} from "@/i18n/dictionaries/en/resource-hubs";
import { route } from "@/lib/routes";

/** The hero's "03 / 03" position, shared by all three hub pages. */
export function hubIndex(key: HubKey) {
  return {
    n: LIBRARY_HUBS.findIndex((h) => h.key === key) + 1,
    of: LIBRARY_HUBS.length,
    label: "Library",
  };
}

/** The other two hubs plus the library itself, for the closing cross-links. */
export function hubCrossLinks(key: HubKey) {
  return [
    ...LIBRARY_HUBS.filter((h) => h.key !== key).map((h) => ({
      href: h.href,
      title: h.title,
      body: h.body,
    })),
    {
      href: "/resources",
      title: "Resource library",
      body: "Industry reports, insights and articles from the team running the campaigns.",
    },
  ];
}

/**
 * The hub's items as a two-column run of cards. Each is anchored so the
 * hero's contents list can jump to it, and each asks through the contact
 * form rather than pointing at a file that does not exist.
 */
function HubItems({
  label,
  intro,
  items,
  action,
}: {
  label: string;
  intro: string;
  items: HubItem[];
  action: string;
}) {
  return (
    <section
      id="items"
      className="mx-auto max-w-[1280px] scroll-mt-24 page-x py-[clamp(48px,5vw,84px)]"
    >
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="max-w-[56ch]">
          <Eyebrow>{label}</Eyebrow>
          <p className="mt-5 mb-0 text-[clamp(18px,1.8vw,26px)] leading-[1.3] font-medium tracking-[-0.022em] text-ink text-pretty">
            {intro}
          </p>
        </div>
        <div className="text-[12px] font-semibold tracking-[0.12em] text-muted-3 uppercase tabular-nums">
          {String(items.length).padStart(2, "0")} in the series
        </div>
      </div>

      <div className="mt-[clamp(28px,3vw,44px)] grid gap-3.5 lg:grid-cols-2">
        {items.map((item, i) => (
          <article
            key={item.id}
            id={item.id}
            className="flex scroll-mt-24 flex-col rounded-card border border-ink/12 bg-white p-[clamp(22px,2.2vw,32px)] transition-colors hover:border-brand/40"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-[12px] font-semibold tabular-nums text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                {item.meta}
              </span>
            </div>
            <h2 className="mt-4 mb-0 text-[clamp(21px,2vw,27px)] leading-[1.14] font-medium tracking-[-0.024em] text-ink text-pretty">
              {item.title}
            </h2>
            <p className="mt-3 mb-0 text-[14.5px] leading-[1.62] text-muted text-pretty">
              {item.summary}
            </p>
            <ul className="m-0 mt-5 flex list-none flex-col gap-2.5 p-0">
              {item.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2.5 border-t border-ink/9 pt-2.5 text-[13.5px] leading-[1.45] text-ink"
                >
                  <Check size={11} className="mt-[3px] shrink-0 text-brand" />
                  <span className="text-pretty">{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-x-7 gap-y-3 pt-7">
              <Link
                href={route("Contact.dc.html")}
                className="inline-flex items-center gap-2.5 rounded-ui bg-ink px-5 py-3 text-[11.5px] font-semibold tracking-[0.05em] text-cream uppercase transition-colors hover:bg-brand-cta"
              >
                {action}
                <ArrowRight size={12} className="text-coral" />
              </Link>
              {item.related && (
                <Link
                  href={item.related.href}
                  className="text-[12.5px] font-semibold text-muted transition-colors hover:text-brand"
                >
                  {item.related.label} →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** A complete Webinars or Whitepapers page. */
export default function ResourceHubPage({ hubKey }: { hubKey: "webinars" | "whitepapers" }) {
  const hub = HUBS[hubKey];

  return (
    <div data-gsap-root className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <DetailHeroMotion />
      <ButtonMotion />
      <SiteNav active="resources" />

      <DetailHero
        back={{ label: "Resource library", href: "/resources" }}
        index={hubIndex(hubKey)}
        eyebrow={hub.eyebrow}
        titleLead={hub.titleLead}
        titleAccent={hub.titleAccent}
        intro={hub.intro}
        primary={{ label: hub.cta.button, href: "Contact.dc.html" }}
        secondary={{ label: hub.itemsLabel, href: "#items" }}
        stats={hub.stats}
        statsLabel="At a glance"
        contents={{
          label: "In the series",
          items: hub.items.map((it) => ({ id: it.id, name: it.title })),
        }}
        ticker={hub.items.map((it) => it.title)}
      />

      <HubItems
        label={hub.itemsLabel}
        intro={hub.itemsIntro}
        items={hub.items}
        action={hub.action}
      />

      <LinkCardGrid label="More from the library" cards={hubCrossLinks(hubKey)} />

      <DetailCta title={hub.cta.title} body={hub.cta.body} button={hub.cta.button} />

      <SiteFooter />
    </div>
  );
}
