"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Motion layer for the Why Lidespy page. Same contract as `HomeMotion`: it runs
 * imperatively against `data-*` hooks so the markup stays declarative and
 * server-rendered, and with JS off or reduced motion on the page is complete
 * and static — nothing here is load-bearing for content.
 */
export default function WhyMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const root = document.querySelector<HTMLElement>("[data-why-root]");
    if (!root) return;

    const ctx = gsap.context(() => {
      /* --- Hero: headline lines rise, then the verification receipt ticks
         through its checks and the release figure counts up. The receipt is the
         page's argument in miniature, so it plays on load rather than on
         scroll. --- */
      const heroLines = root.querySelectorAll<HTMLElement>("[data-hero-line]");
      const heroAside = root.querySelectorAll<HTMLElement>("[data-hero-aside]");
      const rows = [...root.querySelectorAll<HTMLElement>("[data-receipt-row]")];

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (heroLines.length) {
        gsap.set(heroLines, { yPercent: 108, opacity: 0 });
        intro.to(heroLines, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.09 }, 0);
      }
      if (heroAside.length) {
        gsap.set(heroAside, { y: 24, opacity: 0 });
        intro.to(heroAside, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.35);
      }

      if (rows.length) {
        const panel = root.querySelector<HTMLElement>("[data-receipt]");
        const bar = root.querySelector<HTMLElement>("[data-receipt-bar]");
        const out = root.querySelector<HTMLElement>("[data-receipt-value]");

        if (panel) {
          gsap.set(panel, { y: 30, opacity: 0 });
          intro.to(panel, { y: 0, opacity: 1, duration: 0.8 }, 0.25);
        }
        rows.forEach((r) => {
          const tick = r.querySelector<HTMLElement>("[data-receipt-tick]");
          gsap.set(r, { opacity: 0.25 });
          if (tick) gsap.set(tick, { scale: 0, opacity: 0 });
        });
        if (bar) gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

        rows.forEach((r, i) => {
          const tick = r.querySelector<HTMLElement>("[data-receipt-tick]");
          intro.to(r, { opacity: 1, duration: 0.3 }, 0.75 + i * 0.22);
          if (tick)
            intro.to(
              tick,
              { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2.4)" },
              0.82 + i * 0.22,
            );
        });

        const end = 0.75 + rows.length * 0.22;
        if (bar) intro.to(bar, { scaleX: 1, duration: rows.length * 0.22, ease: "none" }, 0.75);
        if (out) {
          const target = parseFloat(out.dataset.receiptValue || "0");
          const o = { v: 0 };
          intro.to(
            o,
            {
              v: target,
              duration: 0.9,
              ease: "power3.out",
              onUpdate: () => {
                out.textContent = o.v.toFixed(1) + "%";
              },
            },
            end,
          );
        }
      }

      /* --- Counters. Shared by the hero stat strip, the operating standard and
         the outcome figures; the suffix rides along on the element so the
         formatting stays with the content. --- */
      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const decimals = (el.dataset.count || "").includes(".") ? 1 : 0;
        const o = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(o, {
              v: target,
              duration: 1.5,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent =
                  o.v.toLocaleString("en-US", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                  }) + suffix;
              },
            }),
        });
      });

      /* --- Generic scroll reveal. Anything marked `data-reveal` fades up; items
         sharing a `data-reveal-group` parent stagger together. --- */
      root.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = [...group.querySelectorAll<HTMLElement>("[data-reveal]")];
        if (!items.length) return;
        gsap.set(items, { opacity: 0, y: 26 });
        ScrollTrigger.create({
          trigger: group,
          start: "top 82%",
          once: true,
          onEnter: () =>
            gsap.to(items, {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.08,
            }),
        });
      });

      /* --- The compliance pipeline draws its connecting rule as it enters, so
         the five steps read as one continuous process rather than five cards. */
      const pipeRule = root.querySelector<HTMLElement>("[data-pipe-rule]");
      if (pipeRule) {
        gsap.fromTo(
          pipeRule,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: pipeRule.parentElement ?? pipeRule,
              start: "top 78%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          },
        );
      }

      /* --- Bento tiles and model cards lift on hover. --- */
      root.querySelectorAll<HTMLElement>("[data-lift]").forEach((card) => {
        card.addEventListener("mouseenter", () =>
          gsap.to(card, { y: -6, duration: 0.4, ease: "power2.out", overwrite: "auto" }),
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" }),
        );
      });

      /* --- Nav gains a shadow once the page scrolls (matches Home). --- */
      const header = document.querySelector("header");
      if (header) {
        ScrollTrigger.create({
          start: 20,
          end: "max",
          onToggle: (s) =>
            gsap.to(header, {
              boxShadow: s.isActive
                ? "0 12px 30px -18px rgba(18,21,15,0.35)"
                : "0 0 0 0 rgba(18,21,15,0)",
              duration: 0.3,
              ease: "power2.out",
              overwrite: true,
            }),
        });
      }

      const refresh = () => ScrollTrigger.refresh();
      const t1 = setTimeout(refresh, 800);
      const t2 = setTimeout(refresh, 2500);
      window.addEventListener("load", refresh);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        window.removeEventListener("load", refresh);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return null;
}
