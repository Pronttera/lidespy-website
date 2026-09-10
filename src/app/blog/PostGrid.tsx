"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Slot } from "@/components/ui";
import { POSTS, TOPICS } from "@/i18n/dictionaries/en/blog";
import { route } from "@/lib/routes";

export default function PostGrid() {
  const [topic, setTopic] = useState("All");
  const posts = POSTS.filter((p) => topic === "All" || p.topic === topic);

  return (
    <section className="mx-auto max-w-[1280px] page-x pt-[clamp(36px,4vw,56px)] pb-[clamp(56px,6vw,88px)]">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-5 border-t border-ink/15 pt-[26px]">
        <div className="flex flex-wrap gap-1.5">
          {TOPICS.map((t) => {
            const on = t === topic;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setTopic(t)}
                className={`cursor-pointer rounded-ui border px-4 py-[11px] text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors ${
                  on
                    ? "border-ink bg-ink text-coral"
                    : "border-ink/20 text-ink hover:border-ink/50"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
        <div className="text-[12px] text-muted-2">
          {posts.length} {posts.length === 1 ? "article" : "articles"}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.title}
            href={route("Blog.dc.html")}
            className="flex flex-col overflow-hidden rounded-ui border border-ink/14 bg-white text-ink transition-colors hover:border-brand/55"
          >
            <Slot
              src={p.img}
              alt={p.title}
              credit={p.credit}
              creditHref={p.creditHref}
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
        ))}
      </div>
    </section>
  );
}
