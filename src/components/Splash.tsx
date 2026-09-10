"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

/**
 * The design's opening curtain: three red columns, the logo and words fading
 * up, a counter running to 100, then the content lifting out and the columns
 * wiping up in sequence. Ported one-for-one from the artboard's GSAP timeline.
 *
 * Scroll is locked while it plays. A hard fallback releases it after 3.6s so a
 * killed timeline can never leave the page frozen.
 */
export default function Splash() {
  const [done, setDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const release = () => {
      document.documentElement.style.overflow = "";
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

    // Hard fallback — never blocked by a killed timeline.
    const kill = setTimeout(release, 3600);

    const counter = counterRef.current;
    const n = { v: 0 };
    const tl = gsap
      .timeline({ onComplete: release })
      .to(splash.querySelector("[data-splash-logo]"), { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.1)
      .fromTo(splash.querySelector("[data-splash-logo]"), { y: 18, scale: 0.94 }, { y: 0, scale: 1, duration: 0.8, ease: "expo.out" }, 0.1)
      .to(splash.querySelectorAll("[data-splash-word]"), { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" }, 0.4)
      .fromTo(splash.querySelectorAll("[data-splash-side]"), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" }, 0.55)
      .fromTo(splash.querySelectorAll("[data-splash-word]"), { y: 10 }, { y: 0, duration: 0.5, stagger: 0.12 }, 0.4)
      .to(n, {
        v: 100,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counter) counter.textContent = String(Math.round(n.v));
        },
      }, 0.2)
      .to(splash.querySelector("[data-splash-content]"), { y: -30, opacity: 0, duration: 0.45, ease: "power3.in" }, 1.75)
      .to(splash.querySelectorAll("[data-splash-col]"), { yPercent: -100, duration: 0.85, ease: "expo.inOut", stagger: 0.13 }, 1.95);

    return () => {
      clearTimeout(kill);
      tl.kill();
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
