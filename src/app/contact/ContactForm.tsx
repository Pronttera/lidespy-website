"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "@/components/icons";
import { route } from "@/lib/routes";

const FIELDS = [
  { name: "firstName", label: "First name", type: "text" },
  { name: "lastName", label: "Last name", type: "text" },
  { name: "email", label: "Work email", type: "email", placeholder: "you@company.com" },
  { name: "company", label: "Company name", type: "text" },
  { name: "title", label: "Job title", type: "text" },
  { name: "country", label: "Country", type: "text" },
] as const;

const INTERESTS = [
  "Demand Generation", "Content Syndication", "ABM", "Email Marketing",
  "Audience Intelligence", "Data", "Webinar Promotion", "Appointment Generation",
  "GTM Strategy", "Digital Marketing", "Tech Development", "Other",
];

const inputClass =
  "rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none focus:outline-2 focus:-outline-offset-1 focus:outline-brand";

/**
 * The design has no backend — submitting only swaps in the confirmation panel.
 * Wire `onSubmit` to a real endpoint before launch.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center gap-4 rounded-ui bg-brand-cta p-[clamp(32px,4vw,56px)]">
        <div className="text-[11px] font-semibold tracking-[0.12em] text-ink/70 uppercase">
          Message sent
        </div>
        <h2 className="m-0 text-[clamp(26px,3vw,42px)] leading-[1.08] font-medium tracking-[-0.028em] text-ink text-pretty">
          Thanks, {firstName || "there"}. We&apos;ll be in touch within one
          business day.
        </h2>
        <p className="m-0 text-[15px] leading-[1.6] text-ink/80 text-pretty">
          In the meantime, you can estimate your campaign budget or browse recent
          case studies.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href={route("Calculator.dc.html")}
            className="inline-flex items-center gap-2.5 rounded-ui bg-ink px-[22px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-coral uppercase"
          >
            Budget calculator
          </Link>
          <Link
            href={route("Case Studies.dc.html")}
            className="inline-flex items-center gap-2.5 rounded-ui border border-ink/35 px-[18px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase"
          >
            Case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-5 rounded-ui border border-ink/14 bg-white p-[clamp(24px,3vw,40px)]"
    >
      <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
        Send us a message
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <label key={f.name} className="flex flex-col gap-[7px]">
            <span className="text-[12px] font-semibold">{f.label}</span>
            <input
              required
              name={f.name}
              type={f.type}
              placeholder={"placeholder" in f ? f.placeholder : undefined}
              onChange={
                f.name === "firstName"
                  ? (e) => setFirstName(e.target.value.trim())
                  : undefined
              }
              className={inputClass}
            />
          </label>
        ))}
      </div>

      <label className="flex flex-col gap-[7px]">
        <span className="text-[12px] font-semibold">
          What are you interested in?
        </span>
        <div className="relative">
          <select
            required
            name="interest"
            defaultValue=""
            className={`${inputClass} w-full appearance-none pr-10`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {INTERESTS.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
          <ChevronDown
            size={12}
            className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink"
          />
        </div>
      </label>

      <label className="flex flex-col gap-[7px]">
        <span className="text-[12px] font-semibold">
          Tell us about your campaign goals
        </span>
        <textarea
          name="goals"
          rows={5}
          placeholder="Target region, ICP, lead goal, timeline…"
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </label>

      <div className="mt-1 flex flex-wrap items-center justify-between gap-5">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center gap-3 rounded-ui bg-brand-cta px-7 py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
        >
          Send message
          <ArrowRight size={13} />
        </button>
        <p className="m-0 max-w-[360px] text-[11px] leading-[1.5] text-muted-3">
          By submitting this form, you agree to our{" "}
          <a href="#" className="border-b border-ink/30 text-muted">
            Privacy Policy
          </a>
          . We do not share your data with third parties.
        </p>
      </div>
    </form>
  );
}
