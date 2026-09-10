"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Motion layer for the Home artboard — a port of the GSAP setup in
 * `Lidespy Home.dc.html`. It runs imperatively against the same `data-*` hooks
 * the design used, so the markup stays declarative and server-rendered.
 *
 * Everything here is progressive enhancement: with JS off or reduced motion on,
 * the page renders complete and static.
 */
export default function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const root = document.querySelector<HTMLElement>("[data-gsap-root]");
    if (!root) return;

    const ctx = gsap.context(() => {
      /* Pinned, viewport-height stages only exist from `lg` up. Below that the
         two sections render as ordinary stacked/swipeable flow (see page.tsx),
         so their setup lives inside a matchMedia scope — when the query stops
         matching, GSAP reverts every `set()` and the static layout is correct. */
      const mm = gsap.matchMedia();
      const DESKTOP = "(min-width: 1024px)";

      mm.add(DESKTOP, () => {
      /* --- Challenge: section pins, the four cards fly in from their outer
         edges on a staggered scrub and lock into place. --- */
      const chSection = root.querySelector("[data-challenge]");
      const chCards = chSection
        ? [...chSection.querySelectorAll<HTMLElement>('[data-ch-item="card"]')]
        : [];
      if (chCards.length) {
        const from = [
          { x: -140, y: 120 },
          { x: -120, y: 160 },
          { x: 140, y: 120 },
          { x: 120, y: 160 },
        ];
        chCards.forEach((c, i) =>
          gsap.set(c, {
            opacity: 0,
            x: from[i % 4].x,
            y: from[i % 4].y,
            scale: 0.92,
            rotate: i % 2 ? 3 : -3,
          }),
        );
        const chTl = gsap.timeline({
          scrollTrigger: {
            trigger: chSection,
            start: "top top",
            end: "+=140%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });
        chCards.forEach((c, i) =>
          chTl.to(
            c,
            { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, duration: 1, ease: "power2.out" },
            i * 0.55,
          ),
        );
        chTl.to({}, { duration: 0.4 });
      }
      });

      /* --- Proof of work: hover veil with staggered stat reveal --- */
      root.querySelectorAll<HTMLElement>("[data-case-card]").forEach((card) => {
        const veil = card.querySelector<HTMLElement>("[data-case-veil]");
        const stats = veil ? [...veil.children] : [];
        const img = card.querySelector<HTMLElement>("[data-case-img]");
        gsap.set(stats, { y: 18, opacity: 0 });
        card.addEventListener("mouseenter", () => {
          gsap
            .timeline({ defaults: { overwrite: "auto" } })
            .to(veil, { opacity: 1, duration: 0.35, ease: "power2.out" }, 0)
            .to(img, { scale: 1.06, duration: 0.8, ease: "power2.out" }, 0)
            .to(stats, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.08 }, 0.08);
        });
        card.addEventListener("mouseleave", () => {
          gsap
            .timeline({ defaults: { overwrite: "auto" } })
            .to(veil, { opacity: 0, duration: 0.3, ease: "power2.in" }, 0)
            .to(img, { scale: 1, duration: 0.6, ease: "power2.out" }, 0)
            .to(stats, { y: 18, opacity: 0, duration: 0.25 }, 0);
        });
      });

      /* --- Why us: counters + row reveal --- */
      const fmtCount = (n: number, suffix: string) => {
        if (suffix === "k") return Math.round(n / 1000).toLocaleString("en-US") + "k";
        if (suffix === "%") return n.toFixed(1) + "%";
        return Math.round(n).toLocaleString("en-US") + suffix;
      };
      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const o = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(o, {
              v: target,
              duration: 1.6,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent = fmtCount(o.v, suffix);
              },
            }),
        });
      });
      const whyRows = root.querySelectorAll<HTMLElement>("[data-why-row]");
      if (whyRows.length) {
        gsap.set(whyRows, { opacity: 0, y: 22 });
        ScrollTrigger.create({
          trigger: whyRows[0],
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(whyRows, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.09,
            }),
        });
      }

      /* --- Process: pinned horizontal scroll timeline (desktop only — on touch
         the same rail is a native horizontal swipe deck). --- */
      mm.add(DESKTOP, () => {
      const proc = root.querySelector<HTMLElement>("[data-process]");
      const track = proc?.querySelector<HTMLElement>("[data-process-track]");
      const pin = proc?.querySelector<HTMLElement>("[data-process-pin]");
      if (proc && track && pin) {
        const cards = [...proc.querySelectorAll<HTMLElement>("[data-process-card]")];
        const dots = [...proc.querySelectorAll<HTMLElement>("[data-process-dot]")];
        const numEl = proc.querySelector<HTMLElement>("[data-process-num]");
        const bar = proc.querySelector<HTMLElement>("[data-process-bar]");
        const padL = () =>
          track.getBoundingClientRect().left - (gsap.getProperty(track, "x") as number);
        const dist = () => Math.max(0, padL() + track.scrollWidth - window.innerWidth + 32);

        gsap.set(cards, { opacity: 0.35, y: 24 });
        gsap.set(cards[0], { opacity: 1, y: 0 });
        gsap.set(dots[0], {
          backgroundColor: "#12150F",
          color: "#FF5A4F",
          borderColor: "#12150F",
        });

        let current = 0;
        const setActive = (i: number) => {
          if (i === current) return;
          current = i;
          cards.forEach((c, k) =>
            gsap.to(c, {
              opacity: k <= i ? 1 : 0.35,
              y: k <= i ? 0 : 24,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto",
            }),
          );
          dots.forEach((d, k) =>
            gsap.to(d, {
              backgroundColor: k <= i ? "#12150F" : "#F7F8F4",
              color: k <= i ? "#FF5A4F" : "#12150F",
              borderColor: k <= i ? "#12150F" : "rgba(18,21,15,0.2)",
              duration: 0.35,
              overwrite: "auto",
            }),
          );
          if (numEl) {
            gsap
              .timeline()
              .to(numEl, { yPercent: -60, opacity: 0, duration: 0.18, ease: "power2.in" })
              .set(numEl, { textContent: String(i + 1).padStart(2, "0"), yPercent: 60 })
              .to(numEl, { yPercent: 0, opacity: 1, duration: 0.32, ease: "power3.out" });
          }
        };

        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: proc,
            start: "top top",
            end: () => "+=" + (dist() + window.innerHeight * 0.4),
            pin,
            pinSpacing: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              if (bar) gsap.set(bar, { scaleX: 0.2 + p * 0.8 });
              setActive(Math.min(cards.length - 1, Math.floor(p * cards.length + 0.15)));
            },
          },
        });
      }
      });

      /* --- Testimonials: infinite rail that slows on hover --- */
      const qRail = root.querySelector<HTMLElement>("[data-quote-rail]");
      const qTrack = qRail?.querySelector<HTMLElement>("[data-quote-track]");
      let quoteLoop: gsap.core.Tween | null = null;
      let retry: ReturnType<typeof setTimeout>;
      let resizeT: ReturnType<typeof setTimeout>;
      const build = () => {
        if (!qTrack) return;
        const half = qTrack.scrollWidth / 2;
        if (!half) {
          retry = setTimeout(build, 250);
          return;
        }
        quoteLoop?.kill();
        gsap.set(qTrack, { x: 0 });
        quoteLoop = gsap.to(qTrack, { x: -half, duration: half / 55, ease: "none", repeat: -1 });
      };
      const setSpeed = (v: number) => {
        if (quoteLoop)
          gsap.to(quoteLoop, { timeScale: v, duration: 0.6, ease: "power2.out", overwrite: true });
      };
      const onResize = () => {
        clearTimeout(resizeT);
        resizeT = setTimeout(build, 200);
      };
      if (qTrack && qRail) {
        build();
        qRail.addEventListener("mouseenter", () => setSpeed(0.2));
        qRail.addEventListener("mouseleave", () => setSpeed(1));
        window.addEventListener("resize", onResize);
      }

      /* --- Nav gains a shadow once the page scrolls --- */
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

      /* --- Card hover lift --- */
      root.querySelectorAll<HTMLElement>("[data-lift]").forEach((card) => {
        const img = card.querySelector<HTMLElement>("[data-lift-img]");
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -6, duration: 0.4, ease: "power2.out" });
          if (img) gsap.to(img, { scale: 1.04, duration: 0.6, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
          if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
        });
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const t1 = setTimeout(refresh, 800);
      const t2 = setTimeout(refresh, 2500);
      root.querySelectorAll("video, img").forEach((m) =>
        m.addEventListener("load", refresh, { once: true }),
      );

      return () => {
        clearTimeout(retry);
        clearTimeout(resizeT);
        clearTimeout(t1);
        clearTimeout(t2);
        quoteLoop?.kill();
        mm.revert();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("load", refresh);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return null;
}
