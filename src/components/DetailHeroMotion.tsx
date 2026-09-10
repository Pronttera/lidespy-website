"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Load and scroll motion for `DetailHero`. Same contract as the other motion
 * layers: it runs against `data-hero-*` hooks, so the markup stays server
 * rendered and the page is complete without it.
 *
 * On load the headline lines rise out of their masks, the rest of the copy
 * settles in behind them, the ledger's rules draw across and its numbers count
 * up. On scroll the ghost numeral and the headline drift at different rates so
 * the hero has depth as it leaves.
 */
export default function DetailHeroMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    if (!hero) return;

    const ctx = gsap.context(() => {
      const lines = hero.querySelectorAll<HTMLElement>("[data-hero-line]");
      const fades = hero.querySelectorAll<HTMLElement>("[data-hero-fade]");
      const panels = hero.querySelectorAll<HTMLElement>("[data-hero-panel]");
      const rows = hero.querySelectorAll<HTMLElement>("[data-hero-row]");
      const rules = hero.querySelectorAll<HTMLElement>("[data-hero-rule]");
      const ghost = hero.querySelector<HTMLElement>("[data-hero-ghost]");
      const title = hero.querySelector<HTMLElement>("[data-hero-title]");
      const counts = hero.querySelectorAll<HTMLElement>("[data-count]");

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(lines, { yPercent: 110, opacity: 0 });
      intro.to(lines, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.11 }, 0.05);

      gsap.set(fades, { y: 22, opacity: 0 });
      intro.to(fades, { y: 0, opacity: 1, duration: 0.75, stagger: 0.09 }, 0.3);

      if (ghost) {
        gsap.set(ghost, { x: 80, opacity: 0 });
        intro.to(ghost, { x: 0, opacity: 1, duration: 1.4, ease: "expo.out" }, 0.2);
      }

      gsap.set(panels, { y: 34, opacity: 0 });
      intro.to(panels, { y: 0, opacity: 1, duration: 0.85, stagger: 0.12 }, 0.45);

      gsap.set(rows, { opacity: 0, x: 14 });
      intro.to(rows, { opacity: 1, x: 0, duration: 0.5, stagger: 0.09 }, 0.7);

      gsap.set(rules, { scaleX: 0, transformOrigin: "left center" });
      intro.to(rules, { scaleX: 1, duration: 0.7, ease: "expo.out", stagger: 0.09 }, 0.78);

      counts.forEach((el, i) => {
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const o = { v: 0 };
        intro.to(
          o,
          {
            v: target,
            duration: 1.3,
            ease: "power3.out",
            onUpdate: () => {
              el.textContent = Math.round(o.v).toLocaleString("en-US") + suffix;
            },
          },
          0.8 + i * 0.09,
        );
      });

      /* Scroll parallax — the numeral falls behind, the claim eases ahead. */
      if (ghost)
        gsap.to(ghost, {
          yPercent: 28,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
        });
      if (title)
        gsap.to(title, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
        });
    }, hero);

    return () => ctx.revert();
  }, []);

  return null;
}
