"use client";

import { useState } from "react";
import { FEATURED, POSTS, TOPICS } from "@/i18n/dictionaries/en/blog";
import PostCard from "./PostCard";

/** The featured article already leads the page, so the grid skips it. */
const GRID = POSTS.filter((p) => p.slug !== FEATURED.slug);

export default function PostGrid() {
  const [topic, setTopic] = useState("All");
  const posts = GRID.filter((p) => topic === "All" || p.topic === topic);

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
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
