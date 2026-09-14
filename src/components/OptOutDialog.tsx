"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Close } from "./icons";

/**
 * The opt-out / unsubscribe control in the footer.
 *
 * Same endpoint as the contact form — a Google Apps Script web app bound to the
 * enquiries spreadsheet (`scripts/apps-script/Code.gs`) — because the site is a
 * static export with no server of its own. The body goes out form-encoded so it
 * stays a "simple" request and avoids the CORS preflight Apps Script cannot
 * answer, and `action=optout` is what tells the script to delete rather than
 * append.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

const COPY = {
  trigger: "Opt-out / Unsubscribe",
  title: "Opt out of our database",
  intro:
    "Enter the name and email you gave us and we will remove every matching record from our contact database. Removal is immediate and permanent.",
  nameLabel: "Full name",
  namePlaceholder: "Jane Doe",
  emailLabel: "Email address",
  emailPlaceholder: "you@company.com",
  submit: "Remove my data",
  submitting: "Removing…",
  close: "Close",
  done: "You have been removed. Every record matching that email has been deleted from our database.",
  errors: {
    name: "Enter the full name on the record.",
    email: "Enter a valid email address.",
    notFound:
      "We could not find that email in our database — nothing to remove. Check the spelling, or email info@lidespy.com.",
    failed:
      "Something went wrong on our side. Please email info@lidespy.com and we will remove your data by hand.",
    notConfigured:
      "The opt-out form is not connected yet. Please email info@lidespy.com and we will remove your data by hand.",
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClass =
  "rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand";

export default function OptOutDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
  }>({});
  // Toasts outlive the dialog: success is reported after it has closed.
  const [toast, setToast] = useState<{
    tone: "success" | "error";
    text: string;
  } | null>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Esc closes, and the page behind must not scroll under the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  // A toast that never leaves is a banner; this one has ten seconds.
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 10000);
    return () => window.clearTimeout(t);
  }, [toast]);

  function close() {
    setOpen(false);
    setStatus("idle");
    setFieldErrors({});
    setName("");
    setEmail("");
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors: { name?: string; email?: string } = {};
    if (!name.trim()) errors.name = COPY.errors.name;
    if (!EMAIL_RE.test(email.trim())) errors.email = COPY.errors.email;
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (!ENDPOINT) {
      setToast({ tone: "error", text: COPY.errors.notConfigured });
      return;
    }

    setStatus("sending");
    setToast(null);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: new URLSearchParams({
          action: "optout",
          fullName: name.trim(),
          email: email.trim(),
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const result: { ok?: boolean; removed?: number } = await response.json();
      if (!result.ok) throw new Error("script reported a failure");

      // No matching row is the one outcome the visitor has to act on: their
      // data is under a different address than the one they just typed.
      if (!result.removed) {
        setStatus("idle");
        setToast({ tone: "error", text: COPY.errors.notFound });
        return;
      }

      close();
      setToast({ tone: "success", text: COPY.done });
    } catch (error) {
      console.error("[opt-out] failed to submit", error);
      setStatus("idle");
      setToast({ tone: "error", text: COPY.errors.failed });
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer text-[11px] text-muted-2 underline-offset-2 transition-colors hover:text-brand hover:underline"
      >
        {COPY.trigger}
      </button>

      {toast && (
        <div
          role={toast.tone === "error" ? "alert" : "status"}
          className={`fixed inset-x-4 bottom-5 z-80 mx-auto max-w-[420px] rounded-card border bg-ink px-4 py-3.5 text-[12.5px] leading-[1.55] text-cream shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:right-5 sm:left-auto sm:mx-0 ${
            toast.tone === "error" ? "border-brand-cta/50" : "border-brand/60"
          }`}
        >
          <div className="flex items-start gap-3">
            {toast.tone === "error" ? (
              <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-brand-cta" />
            ) : (
              <Check size={11} className="mt-[3px] shrink-0 text-brand" />
            )}
            <span className="flex-1">{toast.text}</span>
            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label={COPY.close}
              className="mt-[2px] cursor-pointer text-cream/55 transition-colors hover:text-cream"
            >
              <Close size={11} />
            </button>
          </div>
        </div>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="optout-title"
          className="fixed inset-0 z-70 flex items-end justify-center bg-ink/55 p-4 backdrop-blur-[2px] sm:items-center"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-[440px] rounded-card border border-ink/12 bg-white p-[clamp(22px,3vw,32px)]">
            <button
              type="button"
              onClick={close}
              aria-label={COPY.close}
              className="absolute top-4 right-4 cursor-pointer rounded-ui p-1.5 text-muted-3 transition-colors hover:bg-panel hover:text-ink"
            >
              <Close size={12} />
            </button>

              <form onSubmit={submit} noValidate className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 pr-8">
                  <h2
                    id="optout-title"
                    className="m-0 text-[20px] leading-[1.2] font-medium tracking-[-0.02em] text-ink"
                  >
                    {COPY.title}
                  </h2>
                  <p className="m-0 text-[13px] leading-[1.6] text-muted-2 text-pretty">
                    {COPY.intro}
                  </p>
                </div>

                <label className="flex flex-col gap-[7px]">
                  <span className="text-[12px] font-semibold text-ink">
                    {COPY.nameLabel}
                  </span>
                  <input
                    ref={firstFieldRef}
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    value={name}
                    placeholder={COPY.namePlaceholder}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={fieldErrors.name ? true : undefined}
                    className={`${inputClass} ${fieldErrors.name ? "border-brand-cta bg-brand-cta/5" : ""}`}
                  />
                  {fieldErrors.name && (
                    <span className="text-[11.5px] leading-[1.45] text-brand-cta">
                      {fieldErrors.name}
                    </span>
                  )}
                </label>

                <label className="flex flex-col gap-[7px]">
                  <span className="text-[12px] font-semibold text-ink">
                    {COPY.emailLabel}
                  </span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={160}
                    value={email}
                    placeholder={COPY.emailPlaceholder}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={fieldErrors.email ? true : undefined}
                    className={`${inputClass} ${fieldErrors.email ? "border-brand-cta bg-brand-cta/5" : ""}`}
                  />
                  {fieldErrors.email && (
                    <span className="text-[11.5px] leading-[1.45] text-brand-cta">
                      {fieldErrors.email}
                    </span>
                  )}
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 cursor-pointer rounded-ui bg-brand-cta px-6 py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? COPY.submitting : COPY.submit}
                </button>
              </form>
          </div>
        </div>
      )}
    </>
  );
}
