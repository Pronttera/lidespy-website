import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Slot } from "@/components/ui";
import type { Post } from "@/i18n/dictionaries/en/blog";
import { blogHref } from "@/lib/routes";

/** One article card — the blog grid and an article's "keep reading" row. */
export default function PostCard({ post: p }: { post: Post }) {
  return (
    <Link
      href={blogHref(p.slug)}
      className="flex flex-col overflow-hidden rounded-ui border border-ink/14 bg-white text-ink transition-colors hover:border-brand/55"
    >
      <Slot
        src={p.img}
        alt={p.alt}
        // No credit link here: an <a> inside the card's <a> is invalid, and the
        // parser splits the card apart. The article cover carries the credit.
        sizes="(max-width: 640px) 100vw, 33vw"
        className="aspect-video"
      />
      <div className="flex flex-1 flex-col gap-[11px] px-[22px] pt-[22px] pb-6">
        <div className="flex justify-between gap-2.5">
          <span className="text-[11px] font-semibold tracking-[0.1em] text-brand uppercase">
            {p.topic}
          </span>
          <span className="text-[11px] text-muted-3">{p.meta}</span>
        </div>
        <h3 className="m-0 text-[18.5px] leading-[1.2] font-semibold tracking-[-0.018em] text-pretty">
          {p.title}
        </h3>
        <p className="m-0 flex-1 text-[13.5px] leading-[1.6] text-muted-2 text-pretty">
          {p.body}
        </p>
        <div className="mt-1 flex items-center justify-between gap-3 border-t border-ink/10 pt-3.5">
          <span className="text-[11.5px] text-muted-2">{p.author}</span>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.05em] text-brand uppercase">
            Read
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
