"use client";

import { useState } from "react";
import { ChevronDown } from "./icons";

/**
 * Objection-handling accordion for the Why Lidespy page.
 *
 * One item open at a time — on a page whose job is answering doubts, an open
 * set turns into a wall of prose and nothing gets read. The answer stays in the
 * DOM and is hidden with `hidden` rather than unmounted so it remains
 * findable with the browser's in-page search.
 */
export default function WhyFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-t border-ink/14 last:border-b">
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`text-[clamp(17px,1.5vw,21px)] leading-[1.3] font-medium tracking-[-0.018em] text-pretty transition-colors ${
                    isOpen ? "text-brand" : "text-ink"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-ui border transition-colors ${
                    isOpen
                      ? "border-brand bg-brand-cta text-white"
                      : "border-ink/20 text-ink"
                  }`}
                >
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
            </h3>
            <div
              hidden={!isOpen}
              className="max-w-[68ch] pr-12 pb-7 text-[15px] leading-[1.7] text-muted text-pretty"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
