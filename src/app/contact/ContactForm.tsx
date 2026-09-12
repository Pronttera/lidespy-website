"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "@/components/icons";
import { route } from "@/lib/routes";
import DIAL_CODES from "@/data/dial-codes.json";
import CountryCombobox, { type Country } from "./CountryCombobox";
import { flag } from "./flag";
import { CONTACT } from "@/i18n/dictionaries/en/contact";
import {
  EMPTY_ENQUIRY,
  FIELD_LABELS,
  MAX_LENGTHS,
  validateEnquiry,
  type EnquiryField,
  type EnquiryValues,
} from "./validation";

const T = CONTACT.form;

/**
 * Where the enquiry goes. The site is a static export, so there is no server
 * of ours to post to — this is a Google Apps Script web app bound to the
 * enquiries spreadsheet (see `scripts/apps-script/Code.gs`). The body is sent
 * as form-encoded values, which keeps it a "simple" request and so avoids the
 * CORS preflight Apps Script cannot answer.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

const FIELDS = [
  { name: "firstName", type: "text", autoComplete: "given-name" },
  { name: "lastName", type: "text", autoComplete: "family-name" },
  {
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: T.emailPlaceholder,
  },
  { name: "company", type: "text", autoComplete: "organization" },
  { name: "title", type: "text", autoComplete: "organization-title" },
] as const satisfies readonly {
  name: EnquiryField;
  type: string;
  autoComplete: string;
  placeholder?: string;
}[];

const inputClass =
  "rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand";
const errorClass = "border-brand-cta bg-brand-cta/5";

function ErrorText({ id, children }: { id: string; children: string }) {
  return (
    <span id={id} className="text-[11.5px] leading-[1.45] text-brand-cta">
      {children}
    </span>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sentName, setSentName] = useState("");
  const pending = status === "sending";

  const [values, setValues] = useState<EnquiryValues>(EMPTY_ENQUIRY);
  // A field's message stays hidden until the visitor has left it once, so the
  // form never scolds someone halfway through typing their first name.
  const [touched, setTouched] = useState<Partial<Record<EnquiryField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = useMemo(() => validateEnquiry(values), [values]);
  const invalidCount = Object.keys(errors).length;

  const shownError = (name: EnquiryField) =>
    touched[name] || submitted ? errors[name] : undefined;

  const change = (name: EnquiryField, value: string) =>
    setValues((v) => ({ ...v, [name]: value }));
  const blur = (name: EnquiryField) =>
    setTouched((t) => (t[name] ? t : { ...t, [name]: true }));

  // Choosing a country is a strong enough signal to move the dial code with it.
  const pickCountry = (country: Country) => {
    const dial = DIAL_CODES.find((d) => d.iso === country.iso)?.dial;
    setValues((v) => ({
      ...v,
      country: country.name,
      dialCode: dial ?? v.dialCode,
    }));
    blur("country");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (invalidCount > 0) {
      // Show every outstanding message at once, and go to the first.
      const first = Object.keys(errors)[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus({ preventScroll: false });
      return;
    }

    // Bots fill every field they find; a real visitor never sees this one.
    const honeypot = formRef.current?.querySelector<HTMLInputElement>(
      '[name="company_website"]',
    );
    if (honeypot?.value) {
      setSentName(values.firstName);
      setStatus("sent");
      return;
    }

    if (!ENDPOINT) {
      setStatus("error");
      setErrorMessage(T.errors.notConfigured);
      return;
    }

    setStatus("sending");
    setErrorMessage(null);
    try {
      // Field order is the Apps Script's business; it maps names to columns.
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: new URLSearchParams({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: `${values.dialCode} ${values.phone}`,
          company: values.company,
          title: values.title,
          country: values.country,
          interest: values.interest,
          goals: values.goals,
          source: "Contact form",
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setSentName(values.firstName);
      setStatus("sent");
    } catch (error) {
      // A dropped enquiry is a lost lead: say so and offer the mailto.
      console.error("[enquiry] failed to submit", error);
      setStatus("error");
      setErrorMessage(T.errors.submitFailed);
    }
  };

  const fieldProps = (name: EnquiryField) => {
    const message = shownError(name);
    return {
      name,
      value: values[name],
      onBlur: () => blur(name),
      maxLength: MAX_LENGTHS[name],
      "aria-invalid": message ? (true as const) : undefined,
      "aria-describedby": message ? `${name}-error` : undefined,
      className: `${inputClass} ${message ? errorClass : ""}`,
    };
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col justify-center gap-4 rounded-ui bg-brand-cta p-[clamp(32px,4vw,56px)]">
        <div className="text-[11px] font-semibold tracking-[0.12em] text-ink/70 uppercase">
          {CONTACT.sent.label}
        </div>
        <h2 className="m-0 text-[clamp(26px,3vw,42px)] leading-[1.08] font-medium tracking-[-0.028em] text-ink text-pretty">
          {CONTACT.sent.heading.replace(
            "{name}",
            sentName || CONTACT.sent.fallbackName,
          )}
        </h2>
        <p className="m-0 text-[15px] leading-[1.6] text-ink/80 text-pretty">
          {CONTACT.sent.body}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href={route("Calculator.dc.html")}
            className="inline-flex items-center gap-2.5 rounded-ui bg-ink px-[22px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-coral uppercase"
          >
            {CONTACT.sent.calculatorCta}
          </Link>
          <Link
            href={route("Case Studies.dc.html")}
            className="inline-flex items-center gap-2.5 rounded-ui border border-ink/35 px-[18px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase"
          >
            {CONTACT.sent.caseStudiesCta}
          </Link>
        </div>
      </div>
    );
  }

  const summary =
    submitted && invalidCount > 0
      ? invalidCount === 1
        ? T.errors.summaryOne
        : T.errors.summaryMany.replace("{n}", String(invalidCount))
      : status === "error"
        ? errorMessage
        : null;

  const goalsLeft = MAX_LENGTHS.goals - values.goals.length;
  const dialCountry =
    DIAL_CODES.find((c) => c.dial === values.dialCode) ?? DIAL_CODES[0];

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-ui border border-ink/14 bg-white p-[clamp(24px,3vw,40px)]"
    >
      <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
        {T.heading}
      </div>

      {summary && (
        <p
          role="alert"
          className="m-0 rounded-ui border border-brand-cta/40 bg-brand-cta/8 px-3.5 py-3 text-[13px] leading-[1.5] text-ink"
        >
          {summary}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((f) => {
          const message = shownError(f.name);
          return (
            <label key={f.name} className="flex flex-col gap-[7px]">
              <span className="text-[12px] font-semibold">
                {FIELD_LABELS[f.name]}
              </span>
              <input
                {...fieldProps(f.name)}
                type={f.type}
                autoComplete={f.autoComplete}
                placeholder={"placeholder" in f ? f.placeholder : undefined}
                onChange={(e) => change(f.name, e.target.value)}
              />
              {message && <ErrorText id={`${f.name}-error`}>{message}</ErrorText>}
            </label>
          );
        })}

        <label className="flex flex-col gap-[7px]">
          <span className="text-[12px] font-semibold">
            {FIELD_LABELS.country}
          </span>
          <CountryCombobox
            value={values.country}
            error={shownError("country")}
            className={`${inputClass} ${shownError("country") ? errorClass : ""}`}
            onChange={(v) => change("country", v)}
            onPick={pickCountry}
            onBlur={() => blur("country")}
          />
          {shownError("country") && (
            <ErrorText id="country-error">{shownError("country")!}</ErrorText>
          )}
        </label>

        {/* Country code and number are one control: the code is a native
            select (so phones get their own picker) sitting under a label we
            draw ourselves, which keeps the closed state to "🇮🇳 +91". */}
        <label className="flex flex-col gap-[7px] sm:col-span-2">
          <span className="text-[12px] font-semibold">
            {FIELD_LABELS.phone}
          </span>
          <div
            className={`flex items-stretch overflow-hidden rounded-ui border bg-cream focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-brand ${
              shownError("phone") || shownError("dialCode")
                ? "border-brand-cta bg-brand-cta/5"
                : "border-ink/20"
            }`}
          >
            <div className="relative flex shrink-0 items-center gap-1.5 border-r border-ink/15 px-3.5 text-[14px] text-ink">
              <span aria-hidden className="text-[15px] leading-none">
                {flag(dialCountry.iso)}
              </span>
              <span aria-hidden className="tabular-nums">
                {values.dialCode}
              </span>
              <ChevronDown size={10} aria-hidden className="text-muted-3" />
              <select
                name="dialCode"
                value={values.dialCode}
                aria-label={FIELD_LABELS.dialCode}
                onChange={(e) => change("dialCode", e.target.value)}
                className="absolute inset-0 cursor-pointer opacity-0"
              >
                {DIAL_CODES.map((c) => (
                  <option key={c.iso} value={c.dial}>
                    {`${flag(c.iso)}  ${c.name} (${c.dial})`}
                  </option>
                ))}
              </select>
            </div>
            <input
              {...fieldProps("phone")}
              type="tel"
              autoComplete="tel-national"
              inputMode="tel"
              placeholder={T.phonePlaceholder}
              onChange={(e) => change("phone", e.target.value)}
              className="min-w-0 flex-1 bg-transparent px-3.5 py-[13px] text-[14px] text-ink outline-none"
            />
          </div>
          {shownError("phone") && (
            <ErrorText id="phone-error">{shownError("phone")!}</ErrorText>
          )}
        </label>
      </div>

      <label className="flex flex-col gap-[7px]">
        <span className="text-[12px] font-semibold">{T.interestLabel}</span>
        <div className="relative">
          <select
            {...fieldProps("interest")}
            onChange={(e) => {
              change("interest", e.target.value);
              blur("interest");
            }}
            className={`${fieldProps("interest").className} w-full appearance-none pr-10`}
          >
            <option value="" disabled>
              {T.interestPlaceholder}
            </option>
            {T.interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
          <ChevronDown
            size={12}
            className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink"
          />
        </div>
        {shownError("interest") && (
          <ErrorText id="interest-error">{shownError("interest")!}</ErrorText>
        )}
      </label>

      <label className="flex flex-col gap-[7px]">
        <span className="flex items-center justify-between gap-3 text-[12px] font-semibold">
          {T.goalsLabel}
          <span className="font-normal text-muted-3">{T.goalsOptional}</span>
        </span>
        <textarea
          {...fieldProps("goals")}
          rows={5}
          placeholder={T.goalsPlaceholder}
          onChange={(e) => change("goals", e.target.value)}
          className={`${fieldProps("goals").className} min-h-[120px] resize-y`}
        />
        <span className="flex items-center justify-between gap-3">
          {shownError("goals") ? (
            <ErrorText id="goals-error">{shownError("goals")!}</ErrorText>
          ) : (
            <span />
          )}
          {/* The counter only earns its place near the ceiling. */}
          {goalsLeft <= 400 && (
            <span className="text-[11.5px] tabular-nums text-muted-3">
              {T.goalsCounter.replace("{n}", String(goalsLeft))}
            </span>
          )}
        </span>
      </label>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="mt-1 flex flex-wrap items-center justify-between gap-5">
        <button
          type="submit"
          disabled={pending}
          aria-describedby={summary ? undefined : "consent"}
          className="inline-flex cursor-pointer items-center gap-3 rounded-ui bg-brand-cta px-7 py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? T.submitting : T.submit}
          <ArrowRight size={13} />
        </button>
        <p
          id="consent"
          className="m-0 max-w-[360px] text-[11px] leading-[1.5] text-muted-3"
        >
          {T.consentLead}{" "}
          <a href="#" className="border-b border-ink/30 text-muted">
            {T.consentLinkLabel}
          </a>
          {T.consentTail}
        </p>
      </div>
    </form>
  );
}
