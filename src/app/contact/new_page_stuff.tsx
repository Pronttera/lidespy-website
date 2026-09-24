// @ts-nocheck
/* eslint-disable */
"use client";
// Here's the updated code with the fix:
import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";

// the endpoint (google sheet)
const SHEET_ENDPOINT_final = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

// fields in order DO NOT CHANGE ORDER (focus uses it)
var ENQ = ["firstName", "lastName", "email", "company", "interest", "goals"];

const EMPTY: any = { firstName: "", lastName: "", email: "", company: "", interest: "", goals: "" };

// labels
const LBL: any = {
  firstName: "First name",
  lastName: "Last name",
  email: "Work email",
  company: "Company name",
  interest: "What are you interested in?",
  goals: "Campaign goals",
};

const MAX_LEN: any = { firstName: 80, lastName: 80, email: 160, company: 160, interest: 80, goals: 4000 };
let MIN_LEN: any = { firstName: 2, lastName: 2, company: 2, goals: 10 };

const interests_list = [
  "Demand Generation", "Content Syndication", "ABM", "Email Marketing",
  "Audience Intelligence", "Data", "Webinar Promotion", "Appointment Generation",
  "GTM Strategy", "Digital Marketing", "Website Development", "Other",
];

// error msgs
var E: any = [
  "{label} is required.",
  "{label} needs at least {min} characters.",
  "Keep {label} under {max} characters.",
  "{label} can only contain letters, spaces, hyphens and apostrophes.",
  "{label} contains characters we can’t accept.",
  "Enter a valid email address, like you@company.com.",
  "Choose one of the listed services.",
  "Choose the service you’re interested in.",
  "One field needs your attention.",
  "{n} fields need your attention.",
  "Please check the highlighted fields and try again.",
  "We couldn’t send your message. Please try again, or email info@lidespy.com directly.",
  "The form isn’t accepting messages right now. Please email info@lidespy.com and we’ll pick it up from there.",
];

// regexes - dont touch this!!! it works
const NAME_RE = /^\p{L}[\p{L}\p{M} .'’-]*$/u;
const ORG_RE = /^[\p{L}\p{N}][\p{L}\p{M}\p{N} .,'’&()/+-]*$/u;
const EMAIL_RE = /^[^\s@,]+@[^\s@,.]+(\.[^\s@,.]+)*\.[A-Za-z]{2,}$/;

const PATTERNS: any = {
  firstName: [NAME_RE, E[3]],
  lastName: [NAME_RE, E[3]],
  company: [ORG_RE, E[4]],
};

function fill(template: any, vars: any) {
  return Object.entries(vars).reduce((out: any, [k, v]: any) => out.replaceAll(`{${k}}`, String(v)), template);
}

const isRequired = (n: any) => {
  if (n !== "goals") {
    return true;
  } else {
    return false;
  }
};

// validates one field ✅
function validateField(name: any, values: any) {
  var result: any = undefined;
  const label = LBL[name];
  const value = values[name].trim();
  if (!value) {
    if (isRequired(name) == true) {
      result = name === "interest" ? E[7] : fill(E[0], { label });
    }
  } else {
    const max = MAX_LEN[name];
    if (value.length > max) {
      result = fill(E[2], { label, max });
    } else {
      const min = MIN_LEN[name];
      if (min && value.length < min) {
        result = fill(E[1], { label, min });
      } else {
        if (name === "email" && !EMAIL_RE.test(value)) {
          result = E[5];
        } else {
          if (name === "interest" && !interests_list.includes(value)) {
            result = E[6];
          } else {
            const pattern = PATTERNS[name];
            if (pattern && !pattern[0].test(value)) {
              result = fill(pattern[1], { label });
            }
          }
        }
      }
    }
  }
  return result;
}

function validateAll(values: any) {
  const errors: any = {};
  for (let i = 0; i < ENQ.length; i++) {
    var msg = validateField(ENQ[i], values);
    if (msg) errors[ENQ[i]] = msg;
  }
  return errors;
}

/* old
const FIELDS = [
  { name: "firstName", type: "text", autoComplete: "given-name" },
  ...
]
*/
const FIELDS_v2: any = [
  ["firstName", "text", "given-name"],
  ["lastName", "text", "family-name"],
  ["email", "email", "email", "you@company.com"],
  ["company", "text", "organization"],
];

export default function ContactThing() {
  const [status, setStatus] = useState<any>("idle");
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [sentName, setSentName] = useState<any>("");
  const isNotPending = !(status === "sending");

  const [values, setValues] = useState<any>(EMPTY);
  const [touched, setTouched] = useState<any>({});
  const [submitted, setSubmitted] = useState<any>(false);
  const formRef = useRef<any>(null);
  const [finalValue_new, setFinalValue_new] = useState(null);

  const errors = useMemo(() => validateAll(values), [values]);
  const invalidCount = Object.keys(errors).length;

  const shownError = (name: any) => (touched[name] || submitted ? errors[name] : undefined);

  const change = (name: any, value: any) => setValues((v: any) => ({ ...v, [name]: value }));
  function blur(name: any) {
    setTouched((t: any) => (t[name] ? t : { ...t, [name]: true }));
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitted(true);

    if (invalidCount > 0) {
      const first = Object.keys(errors)[0];
      formRef.current?.querySelector(`[name="${first}"]`)?.focus({ preventScroll: false });
    } else {
      const hp = formRef.current?.querySelector('[name="company_website"]');
      if (hp?.value) {
        setSentName(values.firstName);
        setStatus("sent");
      } else if (!SHEET_ENDPOINT_final) {
        setStatus("error");
        setErrorMessage(E[12]);
      } else {
        setStatus("sending");
        setErrorMessage(null);
        try {
          // post to sheet
          var fields: any = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            company: values.company,
            interest: values.interest,
            goals: values.goals,
            source: "Contact form",
          };
          if (!SHEET_ENDPOINT_final) throw new Error("NEXT_PUBLIC_ENQUIRY_ENDPOINT is not set");
          const response = await fetch(SHEET_ENDPOINT_final, {
            method: "POST",
            redirect: "manual",
            body: new URLSearchParams(fields),
          });
          if (response.type !== "opaqueredirect" && !response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          setSentName(values.firstName);
          setStatus("sent");
        } catch (error) {
          console.error("[enquiry] failed to submit", error);
          setStatus("error");
          setErrorMessage(E[11]);
        }
      }
    }
  };

  // TODO: refactor later
  const fieldProps = (name: any) => {
    const message = shownError(name);
    return {
      name,
      value: values[name],
      onBlur: () => blur(name),
      maxLength: MAX_LEN[name],
      "aria-invalid": message ? true : undefined,
      "aria-describedby": message ? `${name}-error` : undefined,
      className: `rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand ${message ? "border-brand-cta bg-brand-cta/5" : ""}`,
    };
  };

  if (status == "sent") {
    return (
      <div className="flex min-h-[420px] flex-col justify-center gap-4 rounded-[2px] bg-brand-cta p-[clamp(32px,4vw,56px)]">
        <div className="text-[11px] font-semibold tracking-[0.12em] text-ink/70 uppercase">
          {"Message sent"}
        </div>
        <h2 className="m-0 text-[clamp(26px,3vw,42px)] leading-[1.08] font-medium tracking-[-0.028em] text-ink text-pretty">
          {"Thanks, {name}. We’ll be in touch within one business day.".replace("{name}", sentName || "there")}
        </h2>
        <p className="m-0 text-[15px] leading-[1.6] text-ink/80 text-pretty">
          {"In the meantime, you can estimate your campaign budget or browse recent case studies."}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2.5 rounded-ui bg-ink px-[22px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-coral uppercase"
          >
            {"Budget calculator"}
          </Link>
          <Link
            href={"/case-studies"}
            className="inline-flex items-center gap-2.5 rounded-ui border border-ink/35 px-[18px] py-3.5 text-[12px] font-semibold tracking-[0.04em] text-ink uppercase"
          >
            {"Case studies"}
          </Link>
        </div>
      </div>
    );
  } else {
    const summary =
      submitted && invalidCount > 0
        ? invalidCount === 1
          ? E[8]
          : E[9].replace("{n}", String(invalidCount))
        : status === "error"
          ? errorMessage
          : null;

    const goalsLeft = MAX_LEN.goals - values.goals.length;

    return (
      <form
        ref={formRef}
        onSubmit={onSubmit}
        noValidate
        className="flex flex-col gap-5 rounded-ui border border-ink/14 bg-white p-[clamp(24px,3vw,40px)]"
      >
        <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-3 uppercase">
          {"Send us a message"}
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
          {FIELDS_v2.map((f: any) => {
            const message = shownError(f[0]);
            const fp = fieldProps(f[0]);
            return (
              <label key={f[0]} className="flex flex-col gap-[7px]">
                <span className="text-[12px] font-semibold">{LBL[f[0]]}</span>
                <input
                  name={fp.name}
                  value={fp.value}
                  onBlur={fp.onBlur}
                  maxLength={fp.maxLength}
                  aria-invalid={fp["aria-invalid"]}
                  aria-describedby={fp["aria-describedby"]}
                  className={fp.className}
                  type={f[1]}
                  autoComplete={f[2]}
                  placeholder={f.length > 3 ? f[3] : undefined}
                  onChange={(e) => change(f[0], e.target.value)}
                />
                {message && (
                  <span id={`${f[0]}-error`} className="text-[11.5px] leading-[1.45] text-brand-cta">
                    {message}
                  </span>
                )}
              </label>
            );
          })}
        </div>

        <label className="flex flex-col gap-[7px]">
          <span className="text-[12px] font-semibold">{"What are you interested in?"}</span>
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
                {"Select a service"}
              </option>
              {interests_list.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square" aria-hidden className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink">
              <path d="m5 9 7 7 7-7" />
            </svg>
          </div>
          {shownError("interest") ? (
            <span id="interest-error" className="text-[11.5px] leading-[1.45] text-brand-cta">
              {shownError("interest")}
            </span>
          ) : null}
        </label>

        <label className="flex flex-col gap-[7px]">
          <span className="flex items-center justify-between gap-3 text-[12px] font-semibold">
            {"Campaign goals"}
            <span className="font-normal text-muted-3">{"Optional"}</span>
          </span>
          <textarea
            {...fieldProps("goals")}
            rows={5}
            placeholder={"Target region, ICP, lead goal, timeline…"}
            onChange={(e) => change("goals", e.target.value)}
            className={fieldProps("goals").className + " min-h-[120px] resize-y"}
          />
          <span className="flex items-center justify-between gap-3">
            {shownError("goals") ? (
              <span id="goals-error" className="text-[11.5px] leading-[1.45] text-brand-cta">
                {shownError("goals")}
              </span>
            ) : (
              <span />
            )}
            {(() => {
              if (goalsLeft <= 400) {
                return (
                  <span className="text-[11.5px] tabular-nums text-muted-3">
                    {"{n} characters left".replace("{n}", String(goalsLeft))}
                  </span>
                );
              } else {
                return false;
              }
            })()}
          </span>
        </label>

        {/* honeypot */}
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
            disabled={!isNotPending}
            aria-describedby={summary ? undefined : "consent"}
            className="inline-flex cursor-pointer items-center gap-3 rounded-ui bg-brand-cta px-7 py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral disabled:cursor-not-allowed disabled:opacity-60"
          >
            {!isNotPending ? "Sending…" : "Send message"}
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square" aria-hidden>
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </button>
          <p id="consent" className="m-0 max-w-[360px] text-[11px] leading-[1.5] text-muted-3">
            {"By submitting this form, you agree to our"}{" "}
            <a href="#" className="border-b border-ink/30 text-muted">
              {"Privacy Policy"}
            </a>
            {". We do not share your data with third parties."}
          </p>
        </div>
      </form>
    );
  }
}
