"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Close } from "./icons";
import { postToSheet } from "@/lib/sheet-endpoint";

/**
 * Gated download of the pitch deck. Mounted once in the root layout; any
 * trigger calls `openMediaKit()`. Posts to the same Apps Script endpoint as the
 * contact form (form-encoded to avoid a CORS preflight) with `action=mediakit`.
 */
const OPEN_EVENT = "lidespy:open-media-kit";
const FILE_URL = "/lidespy-pitch-deck.pdf";
const FILE_NAME = "Lidespy Pitch Deck.pdf";

export function openMediaKit() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const COPY = {
  title: "Download the media kit",
  intro:
    "Tell us who you are and the Lidespy pitch deck is yours — company overview, services, key numbers and client results in one PDF.",
  nameLabel: "Full name",
  namePlaceholder: "Jane Doe",
  emailLabel: "Work email",
  emailPlaceholder: "you@company.com",
  submit: "Download the PDF",
  submitting: "Preparing…",
  close: "Close",
  doneTitle: "Your download has started",
  doneBody: "If it didn't, use the button below.",
  doneButton: "Download again",
  errors: {
    name: "Enter your full name.",
    email: "Enter a valid email address.",
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClass =
  "rounded-ui border border-ink/20 bg-cream px-3.5 py-[13px] text-[14px] text-ink outline-none transition-colors focus:outline-2 focus:-outline-offset-1 focus:outline-brand";

function download() {
  const link = document.createElement("a");
  link.href = FILE_URL;
  link.download = FILE_NAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function MediaKitDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // A request in flight has to finish before the popup can be dismissed.
  useEffect(() => {
    if (!open || status === "sending") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, status]);

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

    setStatus("sending");
    await record();
    setStatus("done");
    download();
  }

  /** Logs the lead, best effort: the gate never blocks the download. */
  async function record() {
    try {
      await postToSheet({
        action: "mediakit",
        fullName: name.trim(),
        email: email.trim(),
        source: "Media kit",
      });
    } catch (error) {
      console.error("[media-kit] could not confirm the lead was recorded", error);
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mediakit-title"
      className="fixed inset-0 z-70 flex items-end justify-center bg-ink/55 p-4 backdrop-blur-[2px] sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && status !== "sending") close();
      }}
    >
      <div className="relative w-full max-w-[440px] rounded-card border border-ink/12 bg-white p-[clamp(22px,3vw,32px)]">
        <button
          type="button"
          onClick={close}
          disabled={status === "sending"}
          aria-label={COPY.close}
          className="absolute top-4 right-4 cursor-pointer rounded-ui p-1.5 text-muted-3 transition-colors hover:bg-panel hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
        >
          <Close size={12} />
        </button>

        {status === "done" ? (
          <div className="flex flex-col gap-4" role="status">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Check size={14} />
            </span>
            <div className="flex flex-col gap-2 pr-8">
              <h2 id="mediakit-title" className="m-0 text-[20px] leading-[1.2] font-medium tracking-[-0.02em] text-ink">
                {COPY.doneTitle}
              </h2>
              <p className="m-0 text-[13px] leading-[1.6] text-muted-2">{COPY.doneBody}</p>
            </div>
            <a
              href={FILE_URL}
              download={FILE_NAME}
              className="mt-1 inline-flex items-center justify-center gap-3 rounded-ui bg-brand-cta px-6 py-4 text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:text-coral"
            >
              {COPY.doneButton}
              <ArrowRight size={12} />
            </a>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 pr-8">
              <h2 id="mediakit-title" className="m-0 text-[20px] leading-[1.2] font-medium tracking-[-0.02em] text-ink">
                {COPY.title}
              </h2>
              <p className="m-0 text-[13px] leading-[1.6] text-muted-2 text-pretty">{COPY.intro}</p>
            </div>

            <label className="flex flex-col gap-[7px]">
              <span className="text-[12px] font-semibold text-ink">{COPY.nameLabel}</span>
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
                <span className="text-[11.5px] leading-[1.45] text-brand-cta">{fieldErrors.name}</span>
              )}
            </label>

            <label className="flex flex-col gap-[7px]">
              <span className="text-[12px] font-semibold text-ink">{COPY.emailLabel}</span>
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
                <span className="text-[11.5px] leading-[1.45] text-brand-cta">{fieldErrors.email}</span>
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
        )}
      </div>
    </div>
  );
}
