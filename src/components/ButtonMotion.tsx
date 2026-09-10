"use client";

import { useEffect } from "react";
import gsap from "gsap";

/**
 * Port of the design's button motion: a circle wipe from the cursor, the label
 * rolling to a second copy in the hover ink, the arrow chip flicking out and
 * back, and a magnetic pull toward the pointer. Text links get an underline
 * wipe plus the same label roll.
 *
 * The design sniffed computed styles to find buttons; here the markup opts in
 * with `data-btn` / `data-textlink`, which is stable across React re-renders.
 */
export default function ButtonMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.querySelector<HTMLElement>("[data-gsap-root]");
    if (!root) return;

    const ctx = gsap.context(() => {
      /* --- Text links: label roll + underline wipe + arrow nudge --- */
      root.querySelectorAll<HTMLElement>("[data-textlink]").forEach((btn) => {
        if (btn.dataset.btnfx) return;
        btn.dataset.btnfx = "1";
        const arrowEl = btn.querySelector<HTMLElement>("[data-arrow]");
        const label = [...btn.childNodes].find(
          (n) => n.nodeType === 3 && n.textContent?.trim(),
        );
        let innerT: HTMLElement | null = null;
        if (label) {
          const txt = label.textContent!.trim();
          const mask = document.createElement("span");
          mask.style.cssText =
            "display:inline-block;overflow:hidden;vertical-align:middle;height:1.2em;line-height:1.2";
          innerT = document.createElement("span");
          innerT.style.cssText = "display:flex;flex-direction:column";
          const t1 = document.createElement("span");
          const t2 = document.createElement("span");
          t1.textContent = txt;
          t2.textContent = txt;
          t1.style.cssText = "display:block;height:1.2em;line-height:1.2;white-space:nowrap";
          t2.style.cssText =
            "display:block;height:1.2em;line-height:1.2;white-space:nowrap;color:#BE1622";
          innerT.append(t1, t2);
          mask.appendChild(innerT);
          label.replaceWith(mask);
        }
        const line = document.createElement("span");
        line.style.cssText =
          "position:absolute;left:0;bottom:-6px;height:2px;width:100%;background:#BE1622;transform:scaleX(0);transform-origin:left center";
        btn.style.position = "relative";
        btn.appendChild(line);

        btn.addEventListener("mouseenter", () => {
          gsap
            .timeline({ defaults: { overwrite: "auto" } })
            .to(innerT, { yPercent: -50, duration: 0.45, ease: "back.out(1.6)" }, 0)
            .to(line, { scaleX: 1, duration: 0.45, ease: "expo.out" }, 0)
            .to(arrowEl, { x: 10, duration: 0.4, ease: "back.out(3)" }, 0);
        });
        btn.addEventListener("mouseleave", () => {
          gsap
            .timeline({ defaults: { overwrite: "auto" } })
            .to(innerT, { yPercent: 0, duration: 0.4, ease: "power3.inOut" }, 0)
            .set(line, { transformOrigin: "right center" }, 0)
            .to(line, { scaleX: 0, duration: 0.35, ease: "expo.out" }, 0)
            .set(line, { transformOrigin: "left center" })
            .to(arrowEl, { x: 0, duration: 0.4, ease: "power3.out" }, 0);
        });
      });

      /* --- Solid buttons: circle wipe + label swap + chip flick + magnetism --- */
      root.querySelectorAll<HTMLElement>("[data-btn]").forEach((btn) => {
        if (btn.dataset.btnfx) return;
        btn.dataset.btnfx = "1";
        const chip = btn.querySelector<HTMLElement>("[data-chip]");
        const label = [...btn.childNodes].find(
          (n) => n.nodeType === 3 && n.textContent?.trim(),
        );
        // "onRed" means the button already sits on a red fill, so the hover
        // ground has to land on ink-dark instead for contrast.
        const onRed = btn.dataset.btn === "red";
        const fillColor = onRed ? "#12150F" : "#BE1622";
        const fillInk = "#FFFFFF";
        const chipBg = "#FFFFFF";
        const chipInk = onRed ? "#12150F" : "#BE1622";
        const chipCs = chip ? getComputedStyle(chip) : null;
        const chipBg0 = chipCs?.backgroundColor ?? "";
        const chipInk0 = chipCs?.color ?? "";

        btn.style.position = "relative";
        btn.style.overflow = "hidden";
        btn.style.isolation = "isolate";
        btn.style.transformOrigin = "50% 50%";
        btn.style.willChange = "transform";
        btn.style.transition = "none";

        const circle = document.createElement("span");
        circle.style.cssText =
          "position:absolute;left:0;top:0;width:170%;padding-bottom:170%;border-radius:50%;background:" +
          fillColor +
          ";z-index:0;pointer-events:none;transform:translate(-50%,-50%) scale(0);will-change:transform";
        btn.appendChild(circle);
        [...btn.children].forEach((ch) => {
          if (ch !== circle) {
            (ch as HTMLElement).style.position = "relative";
            (ch as HTMLElement).style.zIndex = "1";
          }
        });

        let inner: HTMLElement | null = null;
        if (label) {
          const txt = label.textContent!.trim();
          const mask = document.createElement("span");
          mask.style.cssText =
            "display:inline-block;overflow:hidden;vertical-align:middle;height:1.2em;line-height:1.2";
          inner = document.createElement("span");
          inner.style.cssText = "display:flex;flex-direction:column";
          const a1 = document.createElement("span");
          const a2 = document.createElement("span");
          a1.textContent = txt;
          a2.textContent = txt;
          a2.style.color = fillInk;
          a1.style.cssText = "display:block;height:1.2em;line-height:1.2;white-space:nowrap";
          a2.style.cssText += ";display:block;height:1.2em;line-height:1.2;white-space:nowrap";
          inner.append(a1, a2);
          mask.appendChild(inner);
          mask.style.position = "relative";
          mask.style.zIndex = "1";
          label.replaceWith(mask);
        }

        const arrow = chip ? chip.firstElementChild || chip : null;

        const enter = (ev: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          gsap.set(circle, {
            x: (ev.clientX || r.left + r.width / 2) - r.left,
            y: (ev.clientY || r.top + r.height / 2) - r.top,
          });
          const tl = gsap
            .timeline({ defaults: { overwrite: "auto" } })
            .to(circle, { scale: 1, duration: 0.5, ease: "expo.out" }, 0)
            .to(btn, { scale: 1.025, duration: 0.45, ease: "back.out(2)" }, 0)
            .to(btn, { color: fillInk, duration: 0.01 }, 0.12)
            .to(inner, { yPercent: -50, duration: 0.5, ease: "back.out(1.6)" }, 0.04);
          if (chip)
            tl
              .to(chip, { backgroundColor: chipBg, color: chipInk, duration: 0.01 }, 0.12)
              .to(chip, { scale: 0.82, duration: 0.14, ease: "power2.in" }, 0)
              .to(chip, { scale: 1, duration: 0.45, ease: "elastic.out(1, .5)" }, 0.14)
              .to(arrow, { x: 22, opacity: 0, duration: 0.16, ease: "power3.in" }, 0)
              .fromTo(
                arrow,
                { x: -22, opacity: 0, rotate: -45 },
                { x: 0, opacity: 1, rotate: 0, duration: 0.4, ease: "back.out(2.5)" },
                0.16,
              );
        };
        const move = (ev: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const dx = (ev.clientX - (r.left + r.width / 2)) / r.width;
          const dy = (ev.clientY - (r.top + r.height / 2)) / r.height;
          gsap.to(btn, { x: dx * 10, y: dy * 8, duration: 0.35, ease: "power2.out", overwrite: "auto" });
          if (chip) gsap.to(chip, { x: dx * 6, y: dy * 5, duration: 0.35, ease: "power2.out" });
        };
        const leave = () => {
          const tl = gsap
            .timeline({ defaults: { overwrite: "auto" } })
            .to(circle, { scale: 0, duration: 0.4, ease: "expo.inOut" }, 0)
            .to(btn, { x: 0, y: 0, scale: 1, duration: 0.6, ease: "elastic.out(1, .45)" }, 0)
            .to(btn, { clearProps: "color", duration: 0.01 }, 0.18)
            .to(inner, { yPercent: 0, duration: 0.42, ease: "power3.inOut" }, 0);
          if (chip)
            tl
              .to(chip, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, .5)" }, 0)
              .to(chip, { backgroundColor: chipBg0, color: chipInk0, duration: 0.01 }, 0.18)
              .to(arrow, { x: 0, opacity: 1, rotate: 0, duration: 0.3, ease: "power3.out" }, 0);
        };

        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseenter", enter);
        btn.addEventListener("mouseleave", leave);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return null;
}
