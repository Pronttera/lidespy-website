import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { DetailCta } from "@/components/detail";
import { ArrowRight, Check } from "@/components/icons";
import { Slot } from "@/components/ui";
import { BLOG_COPY, POSTS } from "@/i18n/dictionaries/en/blog";
import {
  ARTICLES,
  articleBySlug,
  type ArticleBlock,
} from "@/i18n/dictionaries/en/blog-articles";
import { route } from "@/lib/routes";
import PostCard from "../PostCard";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const article = articleBySlug((await params).slug);
  if (!article) return {};
  return {
    alternates: { canonical: `/blog/${article.slug}` },
    title: `${article.title} · Lidespy Blog`,
    description: article.description,
  };
}

function Lead({ lead }: { lead?: string }) {
  return lead ? <strong className="font-semibold text-ink">{lead}. </strong> : null;
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "p") {
    return (
      <p className="m-0 text-[clamp(16px,1.2vw,18px)] leading-[1.75] text-muted text-pretty">
        <Lead lead={block.lead} />
        {block.text}
      </p>
    );
  }
  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {block.items.map((it) => (
        <li
          key={it.text}
          className="flex items-start gap-3.5 rounded-ui border border-ink/10 bg-white px-[18px] py-[14px] text-[15.5px] leading-[1.6] text-muted text-pretty"
        >
          <Check size={13} className="mt-[7px] shrink-0 text-brand" />
          <span>
            <Lead lead={it.lead} />
            {it.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function BlogArticlePage({
  params,
}: PageProps<"/blog/[slug]">) {
  const article = articleBySlug((await params).slug);
  if (!article) notFound();

  const post = POSTS.find((p) => p.slug === article.slug)!;
  // Same topic first, then whatever follows this article in the run.
  const at = POSTS.indexOf(post);
  const rest = [...POSTS.slice(at + 1), ...POSTS.slice(0, at)];
  const related = [
    ...rest.filter((p) => p.topic === post.topic),
    ...rest.filter((p) => p.topic !== post.topic),
  ].slice(0, 3);

  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="resources" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto flex max-w-[1080px] flex-col gap-6 page-x pt-[clamp(40px,5vw,72px)] pb-[clamp(96px,11vw,168px)]">
          <Link
            href={route("Blog.dc.html")}
            className="inline-flex items-center gap-2.5 self-start text-[11.5px] font-semibold tracking-[0.1em] text-cream/60 uppercase transition-colors hover:text-coral"
          >
            <ArrowRight size={12} className="rotate-180" />
            All articles
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2.5 border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-brand-cta" />
              {article.topic}
            </span>
            <span className="text-[12px] text-cream/55">{article.readTime}</span>
          </div>
          <h1 className="m-0 max-w-[22ch] text-[clamp(34px,4.6vw,66px)] leading-[1.02] font-normal tracking-[-0.034em] text-pretty">
            {article.title}
          </h1>
          <p className="m-0 max-w-[62ch] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
            {article.description}
          </p>
          <div className="text-[12.5px] text-cream/55">
            By the Lidespy {article.author.toLowerCase()}
          </div>
        </div>
      </section>

      {/* COVER — pulled up into the hero */}
      <div className="relative mx-auto -mt-[clamp(64px,8vw,128px)] max-w-[1080px] page-x">
        <Slot
          src={post.img.replace("w=1100", "w=1800")}
          alt={article.alt}
          credit={post.credit}
          creditHref={post.creditHref}
          sizes="(max-width: 1080px) 100vw, 1080px"
          priority
          className="aspect-[16/9] rounded-card border border-ink/10 sm:aspect-[21/9]"
        />
      </div>

      {/* BODY */}
      <section className="mx-auto grid max-w-[1080px] gap-[clamp(28px,4vw,64px)] page-x py-[clamp(44px,5vw,80px)] lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav className="lg:sticky lg:top-26 lg:self-start" aria-label="On this page">
          <div className="text-[11px] font-semibold tracking-[0.12em] text-muted-2 uppercase">
            On this page
          </div>
          <div className="mt-4 flex flex-col">
            {article.sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-baseline gap-3 border-b border-ink/12 py-3 text-[13.5px] leading-[1.35] text-muted transition-colors hover:text-brand"
              >
                <span className="w-[18px] shrink-0 text-[10.5px] tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">{s.title}</span>
              </a>
            ))}
          </div>
        </nav>

        <article className="flex max-w-[68ch] flex-col">
          <div className="flex flex-col gap-5">
            {article.intro.map((p, i) => (
              <p
                key={p}
                className={
                  i === 0
                    ? "m-0 text-[clamp(18px,1.5vw,21px)] leading-[1.6] font-medium tracking-[-0.01em] text-ink text-pretty"
                    : "m-0 text-[clamp(16px,1.2vw,18px)] leading-[1.75] text-muted text-pretty"
                }
              >
                {p}
              </p>
            ))}
          </div>

          {article.sections.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="mt-[clamp(36px,4vw,56px)] flex scroll-mt-24 flex-col gap-5 border-t border-ink/15 pt-[clamp(28px,3vw,40px)]"
            >
              <span className="text-[12px] font-semibold tabular-nums text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="m-0 text-[clamp(24px,2.4vw,34px)] leading-[1.1] font-medium tracking-[-0.026em] text-pretty">
                {s.title}
              </h2>
              {s.blocks.map((b, j) => (
                <Block key={j} block={b} />
              ))}
            </div>
          ))}
        </article>
      </section>

      {/* KEEP READING */}
      <section className="border-t border-ink/12 bg-panel">
        <div className="mx-auto max-w-[1280px] page-x py-[clamp(44px,4.5vw,76px)]">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
            <h2 className="m-0 text-[clamp(26px,2.6vw,36px)] leading-[1.06] font-medium tracking-[-0.025em]">
              Keep reading
            </h2>
            <Link
              href={route("Blog.dc.html")}
              className="text-[12px] font-semibold text-muted transition-colors hover:text-brand"
            >
              All articles →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <DetailCta
        title={BLOG_COPY.cta.title}
        body={BLOG_COPY.cta.body}
        button={BLOG_COPY.cta.button}
      />

      <SiteFooter />
    </div>
  );
}
