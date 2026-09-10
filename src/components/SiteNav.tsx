"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industryHref, objectiveHref, pillarHref, route, serviceHref } from "@/lib/routes";
import { GRIDS, MENUS, NAV_ITEMS, type GridCard, type MegaKey } from "@/i18n/dictionaries/en/nav";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight } from "./icons";

/** A grid card routes to its own detail page where it has one. */
function gridHref(c: GridCard): string {
  if (c.objective) return objectiveHref(c.objective);
  if (c.industry) return industryHref(c.industry);
  return route(c.href);
}

export default function SiteNav({ active }: { active?: MegaKey }) {
  const [mega, setMega] = useState<MegaKey | null>(null);
  const [activeSvc, setActiveSvc] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MegaKey | null>(null);

  // The drawer overlays the page, so the page behind it must not scroll.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  /** The links a mobile section expands to — the mega menu's contents, flattened. */
  const mobileLinks = (key: MegaKey) =>
    key === "solutions"
      ? [
          ...MENUS.solutions.rail.items
            .filter((p) => p.key)
            .map((p) => ({ name: p.name, href: pillarHref(p.key!) })),
          ...MENUS.solutions.items.map((s) => ({
            name: s.name,
            href: serviceHref(s.key),
          })),
        ]
      : GRIDS[key].map((c) => ({ name: c.name, href: gridHref(c) }));

  const open = (key: MegaKey) => () => {
    setMega(key);
    setActiveSvc(0);
  };

  // Every mega menu shares one shape: a dark rail of pillars beside a list of
  // items with a detail panel. "solutions" renders the rail variant; the rest
  // render the flat card grid.
  const menu = MENUS[mega ?? "solutions"];
  const svc = menu.items[Math.min(activeSvc, menu.items.length - 1)];

  return (
    <header
      onMouseLeave={() => setMega(null)}
      className="sticky top-0 z-60 bg-cream border-b border-ink/15"
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 page-x py-3.5 sm:gap-6 sm:py-[18px] lg:grid lg:grid-cols-[auto_1fr_auto]">
        <Link href={route("Lidespy Home.dc.html")} className="flex items-center">
          <Image
            src="/lidespy-logo.png"
            alt="Lidespy"
            width={997}
            height={304}
            priority
            className="h-[26px] w-auto sm:h-[34px]"
          />
        </Link>

        <div className="hidden flex-wrap items-center justify-center gap-[26px] text-[15px] lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={route(item.href)}
              onMouseEnter={open(item.key)}
              className={`inline-flex items-center gap-1.5 border-b-2 py-2.5 text-ink transition-colors hover:border-brand hover:text-brand ${
                active === item.key ? "border-brand" : "border-transparent"
              }`}
            >
              {item.label}
              <ChevronDown size={11} />
            </Link>
          ))}
        </div>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link
            href={route("Contact.dc.html")}
            className="rounded-ui bg-brand-cta px-3.5 py-3 text-[11px] font-semibold tracking-[0.04em] whitespace-nowrap text-white uppercase transition-colors hover:bg-ink hover:text-coral sm:px-7 sm:py-4 sm:text-[12px]"
          >
            Book a call
          </Link>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((v) => !v)}
            className="shrink-0 cursor-pointer rounded-ui border border-ink/20 px-3 py-3 lg:hidden"
          >
            <span className="block h-px w-5 bg-ink" />
            <span className="mt-1.5 block h-px w-5 bg-ink" />
            <span className="mt-1.5 block h-px w-5 bg-ink" />
          </button>
        </div>
      </nav>

      {/* Mobile/tablet: the hover mega-menus collapse into an accordion drawer.
          Each section expands to the same links its mega menu shows, so touch
          users reach the deep pages the desktop hover reveals. The drawer caps
          at the viewport and scrolls internally rather than pushing the page. */}
      {mobileOpen && (
        <div className="max-h-[calc(100dvh-56px)] overflow-y-auto overscroll-contain border-t border-ink/12 bg-cream page-x pt-2 pb-6 lg:hidden">
          {NAV_ITEMS.map((item) => {
            const expanded = mobileSection === item.key;
            return (
              <div key={item.key} className="border-b border-ink/10">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={route(item.href)}
                    onClick={closeMobile}
                    className={`flex-1 py-3.5 text-[16px] font-medium ${
                      active === item.key ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                    onClick={() => setMobileSection(expanded ? null : item.key)}
                    className="cursor-pointer p-3 text-ink"
                  >
                    <ChevronDown
                      size={12}
                      className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {expanded && (
                  <div className="pb-3">
                    {mobileLinks(item.key).map((l) => (
                      <Link
                        key={l.name + l.href}
                        href={l.href}
                        onClick={closeMobile}
                        className="flex items-center justify-between gap-3 border-t border-ink/8 py-2.5 pl-3 text-[14px] text-muted"
                      >
                        <span>{l.name}</span>
                        <ChevronRight className="shrink-0 text-brand" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href={route("Contact.dc.html")}
            onClick={closeMobile}
            className="mt-5 flex items-center justify-center gap-2.5 rounded-ui border border-ink/25 py-3.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase"
          >
            Contact us
            <ArrowRight size={12} className="text-brand" />
          </Link>
        </div>
      )}

      {mega && mega !== "solutions" && (
        <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
          <div className="pointer-events-auto mx-auto max-w-[1280px] rounded-card border border-ink/12 bg-cream p-[26px] shadow-[0_40px_80px_-20px_rgba(18,21,15,0.28)]">
            <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
              {GRIDS[mega].map((c) => (
                <Link
                  key={c.name}
                  href={gridHref(c)}
                  className="flex min-h-[104px] flex-col gap-2.5 rounded-card border border-transparent bg-panel px-[22px] pt-[22px] pb-6 text-ink transition-colors hover:border-brand/45 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-[17.5px] leading-[1.22] font-semibold tracking-[-0.018em] text-pretty">
                      {c.name}
                    </div>
                    <ArrowRight className="mt-1 shrink-0 text-brand opacity-75" />
                  </div>
                  <div className="text-[13.5px] leading-[1.55] text-muted-2 text-pretty">
                    {c.body}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {mega === "solutions" && (
        <div className="pointer-events-none absolute inset-x-0 top-full hidden px-8 pb-6 lg:block">
          <div className="pointer-events-auto mx-auto grid max-w-[1280px] grid-cols-[minmax(260px,340px)_minmax(0,1fr)] overflow-hidden rounded-card bg-ink shadow-[0_40px_80px_-20px_rgba(18,21,15,0.45)]">
            <div className="flex flex-col px-[34px] py-9">
              <div className="mb-[26px] text-[11px] font-semibold tracking-[0.14em] text-cream/45 uppercase">
                {menu.rail.label}
              </div>
              {menu.rail.items.map((p) => (
                <Link
                  key={p.name}
                  href={p.key ? pillarHref(p.key) : route("About.dc.html")}
                  className="block border-t border-cream/14 py-5 text-cream transition-colors hover:text-coral"
                >
                  <div className="mb-2.5 flex items-start justify-between gap-4">
                    <div className="text-[20px] leading-[1.15] font-medium tracking-[-0.015em]">
                      {p.name}
                    </div>
                    <ArrowUpRight className="mt-1 shrink-0 opacity-65" />
                  </div>
                  <div className="text-[13px] leading-[1.55] text-cream/60 text-pretty">
                    {p.body}
                  </div>
                </Link>
              ))}
            </div>

            <div className="my-3 mr-3 grid grid-cols-2 rounded-card bg-cream px-8 py-[30px]">
              <div className="border-r border-ink/12 pr-7">
                <div className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
                  {menu.listLabel}
                </div>
                <div className="grid gap-0.5">
                  {menu.items.map((s, i) => (
                    <Link
                      key={s.name}
                      href={serviceHref(s.key)}
                      onMouseEnter={() => setActiveSvc(i)}
                      className={`flex items-center gap-3 rounded-card px-3 py-[9px] text-[14.5px] leading-[1.2] transition-colors hover:bg-brand/10 hover:text-ink ${
                        i === activeSvc ? "bg-brand/10 text-ink" : "text-muted"
                      }`}
                    >
                      <span className="flex-1">{s.name}</span>
                      <ChevronRight className="shrink-0 text-brand" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-[26px] pl-7">
                <div className="rounded-card border border-ink/12 bg-white p-6">
                  <div className="mb-3 text-[22px] leading-[1.15] font-medium tracking-[-0.02em] text-ink">
                    {svc.name}
                  </div>
                  <div className="text-[14px] leading-[1.6] text-muted text-pretty">
                    {svc.overview}
                  </div>
                </div>
                <div>
                  <div className="mb-3.5 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
                    {[menu.browsePrefix, svc.name, menu.browseSuffix]
                      .filter(Boolean)
                      .join(" ")}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {svc.deliverables.map((d) => (
                      <Link
                        key={d}
                        href={serviceHref(svc.key, d)}
                        className="flex items-center justify-between gap-3.5 border-b border-ink/10 py-3 text-[15px] font-medium text-ink transition-colors hover:text-brand"
                      >
                        <span>{d}</span>
                        <ArrowRight className="shrink-0 text-brand" />
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href={route("Contact.dc.html")}
                  className="self-start rounded-ui bg-brand-cta px-6 py-3.5 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
