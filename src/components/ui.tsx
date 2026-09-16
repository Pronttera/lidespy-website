import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { route } from "@/lib/routes";

/** The bordered uppercase section label used at the top of most sections. */
export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "coral";
}) {
  return (
    <div
      className={`inline-block border px-3 py-[5px] text-[11px] font-semibold tracking-[0.1em] uppercase ${
        tone === "coral" ? "border-coral/45 text-coral" : "border-brand/45 text-brand"
      }`}
    >
      {children}
    </div>
  );
}

/** Red pill CTA with the inset dark square holding the arrow. */
export function ArrowCta({
  href,
  children,
  size = "md",
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  size?: "sm" | "md";
  /** `ghost` is the outlined twin for sitting beside a solid one on ink. */
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const box = size === "sm" ? "h-10 w-10 text-[16px]" : "h-12 w-12 text-[17px]";
  const pad = size === "sm" ? "py-1.5 pr-1.5 pl-[22px] text-[11px]" : "py-2 pr-2 pl-7 text-[13px]";
  const ghost = variant === "ghost";
  return (
    <Link
      href={route(href)}
      data-btn={ghost ? "ghost" : "red"}
      className={`inline-flex items-center gap-4 rounded-ui font-semibold tracking-[0.04em] uppercase ${pad} ${
        ghost
          ? "bg-transparent text-cream shadow-[inset_0_0_0_1px_rgba(247,248,244,0.3)]"
          : "bg-brand-cta text-white"
      } ${className}`}
    >
      {children}
      <span
        data-chip
        className={`inline-flex items-center justify-center rounded-ui ${
          ghost ? "bg-cream/10 text-cream" : "bg-ink text-coral"
        } ${box}`}
      >
        <span className="inline-block">→</span>
      </span>
    </Link>
  );
}

/** Plain "See our work →" style link. */
export function TextArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={route(href)}
      data-textlink
      className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.04em] text-ink uppercase ${className}`}
    >
      {children}
      <span data-arrow className="text-[16px] text-brand">
        →
      </span>
    </Link>
  );
}

/**
 * Stand-in for the design's `<image-slot>` element: a filled photo.
 */
export function Slot({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  innerProps,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Extra attributes for the <img> itself — motion hooks target it directly. */
  innerProps?: Record<string, string>;
}) {
  // `fill` needs a positioned box. Callers that pin the slot with `absolute`
  // must not also get `relative`: both set `position`, the stylesheet order
  // decides the winner, and a relative box with `inset-0` collapses to 0px.
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className);
  return (
    <div
      className={`${positioned ? "" : "relative "}overflow-hidden bg-panel ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        {...innerProps}
      />
    </div>
  );
}
