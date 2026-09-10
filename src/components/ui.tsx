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
}: {
  href: string;
  children: ReactNode;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-10 w-10 text-[16px]" : "h-12 w-12 text-[17px]";
  const pad = size === "sm" ? "py-1.5 pr-1.5 pl-[22px] text-[11px]" : "py-2 pr-2 pl-7 text-[13px]";
  return (
    <Link
      href={route(href)}
      data-btn="red"
      className={`inline-flex items-center gap-4 rounded-ui bg-brand-cta font-semibold tracking-[0.04em] text-white uppercase ${pad}`}
    >
      {children}
      <span
        data-chip
        className={`inline-flex items-center justify-center rounded-ui bg-ink text-coral ${box}`}
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
 * Stand-in for the design's `<image-slot>` element: a filled, credited photo.
 * Credits stay visible because the source images are Unsplash/Pexels demo art.
 */
export function Slot({
  src,
  alt,
  credit,
  creditHref,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  innerProps,
}: {
  src: string;
  alt: string;
  credit?: string;
  creditHref?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Extra attributes for the <img> itself — motion hooks target it directly. */
  innerProps?: Record<string, string>;
}) {
  return (
    <div className={`relative overflow-hidden bg-panel ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        {...innerProps}
      />
      {credit && creditHref && (
        <a
          href={creditHref}
          target="_blank"
          rel="noopener"
          className="absolute bottom-2 left-2.5 z-10 rounded-card bg-ink/55 px-[7px] py-[3px] text-[10px] text-white/85"
        >
          {credit}
        </a>
      )}
    </div>
  );
}
