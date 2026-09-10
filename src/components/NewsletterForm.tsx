"use client";

import { useState } from "react";
import { Check } from "@/components/icons";

/**
 * The design's inline subscribe box. There is no backend in the design, so this
 * only flips to the confirmation state — wire it to a real list before launch.
 */
export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <div className="flex items-center gap-2.5 rounded-ui bg-brand-cta px-3.5 py-[13px] text-[13px] font-semibold text-white">
        <Check size={13} />
        You&apos;re on the list.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
      className="flex flex-wrap gap-2"
    >
      <input
        required
        type="email"
        name="email"
        placeholder="you@company.com"
        aria-label="Email address"
        className="min-w-[150px] flex-1 rounded-ui border border-cream/24 bg-cream/6 px-3.5 py-[13px] text-[13.5px] text-cream outline-none placeholder:text-cream/40 focus:border-coral"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-ui bg-brand-cta px-5 py-3.5 text-[11.5px] font-semibold tracking-[0.05em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
      >
        Subscribe
      </button>
    </form>
  );
}
