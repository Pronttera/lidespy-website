"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { loadHeroVideo, revealHeroVideo, subscribeHeroVideo } from "@/lib/hero-video";

/**
 * The design's opening curtain: three red columns, the logo and words fading
 * up, a counter tracking the hero video's download to 100, then the content
 * lifting out and the columns wiping up in sequence.
 *
 * Scroll is locked while it plays. A hard fallback releases it after 15s so a
 * killed timeline or stalled download can never leave the page frozen.
 */
export default function Splash() {
  const [done, setDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const release = () => {
      document.documentElement.style.overflow = "";
      revealHeroVideo();
      setDone(true);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(release, 0);
      return () => clearTimeout(t);
    }

    document.documentElement.style.overflow = "hidden";
    const splash = rootRef.current;
    if (!splash) {
      release();
      return;
    }

    // Hard fallback — never blocked by a killed timeline or a stalled
    // download. The hero keeps loading behind the page if this fires.
    const kill = setTimeout(release, 15000);

    loadHeroVideo();

    const intro = gsap
      .timeline()
      .to(splash.querySelector("[data-splash-logo]"), { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.1)
      .fromTo(splash.querySelector("[data-splash-logo]"), { y: 18, scale: 0.94 }, { y: 0, scale: 1, duration: 0.8, ease: "expo.out" }, 0.1)
      .to(splash.querySelectorAll("[data-splash-word]"), { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" }, 0.4)
      .fromTo(splash.querySelectorAll("[data-splash-side]"), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" }, 0.55)
      .fromTo(splash.querySelectorAll("[data-splash-word]"), { y: 10 }, { y: 0, duration: 0.5, stagger: 0.12 }, 0.4);

    const exit = gsap
      .timeline({ paused: true, onComplete: release })
      .to(splash.querySelector("[data-splash-content]"), { y: -30, opacity: 0, duration: 0.45, ease: "power3.in" }, 0)
      .to(splash.querySelectorAll("[data-splash-col]"), { yPercent: -100, duration: 0.85, ease: "expo.inOut", stagger: 0.13 }, 0.2);

    // The counter chases the real download rather than a fixed tween, eased
    // so a cached clip still counts up instead of snapping to 100. The
    // curtain lifts once it reads 100 and the intro has finished.
    const counter = counterRef.current;
    let target = 0;
    let shown = 0;
    const unsubscribe = subscribeHeroVideo((s) => {
      target = s.progress * 100;
    });
    const tick = () => {
      shown += Math.max((target - shown) * 0.08, Math.min(0.4, target - shown));
      if (target >= 100 && shown > 99.5) shown = 100;
      if (counter) counter.textContent = String(Math.floor(shown));
      if (shown === 100 && intro.progress() === 1) {
        gsap.ticker.remove(tick);
        revealHeroVideo();
        exit.play();
      }
    };
    gsap.ticker.add(tick);

    return () => {
      clearTimeout(kill);
      gsap.ticker.remove(tick);
      unsubscribe();
      intro.kill();
      exit.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div ref={rootRef} className="pointer-events-auto fixed inset-0 z-200 grid grid-cols-3">
      <div
        data-splash-col
        className="relative flex flex-col justify-between border-r border-white/22 bg-brand-cta px-5 py-6 sm:px-8 sm:py-7"
      >
        <div data-splash-side className="hidden text-[11px] font-semibold tracking-[0.14em] text-white uppercase opacity-0 sm:block">
          B2B Lead Generation
        </div>
        <div data-splash-side className="hidden text-[clamp(20px,2vw,30px)] leading-[1.1] font-medium tracking-[-0.02em] text-white text-pretty opacity-0 md:block">
          Verified contacts.
          <br />
          Consent on file.
        </div>
      </div>
      <div data-splash-col className="relative border-r border-white/22 bg-brand-cta" />
      <div
        data-splash-col
        className="relative flex flex-col items-end justify-between bg-brand-cta px-5 py-6 text-right sm:px-8 sm:py-7"
      >
        <div data-splash-side className="hidden text-[11px] font-semibold tracking-[0.14em] text-white uppercase opacity-0 sm:block">
          Est. 2026 · Remote-first
        </div>
        <div data-splash-side className="hidden text-[clamp(20px,2vw,30px)] leading-[1.1] font-medium tracking-[-0.02em] text-white text-pretty opacity-0 md:block">
          Pipeline you can
          <br />
          actually forecast.
        </div>
      </div>

      <div
        data-splash-content
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-[22px]"
      >
        <div data-splash-logo className="flex w-[clamp(180px,20vw,280px)] items-center justify-center opacity-0">
          <Image
            src="/lidespy-logo.png"
            alt="Lidespy"
            width={997}
            height={304}
            priority
            className="h-auto w-full brightness-0 invert"
          />
        </div>
        <div className="flex items-center gap-3.5 text-[12px] font-semibold tracking-[0.12em] text-white uppercase">
          <span data-splash-word className="inline-block opacity-0">Verified data</span>
          <span className="inline-block h-px w-8 bg-white" />
          <span data-splash-word className="inline-block opacity-0">Real pipeline</span>
        </div>
        <div
          ref={counterRef}
          className="text-[clamp(40px,6vw,84px)] leading-none font-medium tracking-[-0.04em] tabular-nums text-white"
        >
          0
        </div>
      </div>
    </div>
  );
}
