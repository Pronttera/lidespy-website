import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight } from "@/components/icons";
import { Slot } from "@/components/ui";
import { FEATURED, POSTS } from "@/i18n/dictionaries/en/blog";
import { blogHref, route } from "@/lib/routes";
import NewsletterForm from "@/components/NewsletterForm";
import PostGrid from "./PostGrid";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog · B2B Demand Generation Insights · Lidespy",
  description:
    "Practical writing on ABM, intent data, content syndication and deliverability from the team running the campaigns.",
};

export default function BlogPage() {
  const ticker = [...POSTS, ...POSTS].map((p) => p.title);

  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="resources" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="dc-rules-dark absolute inset-0" />
        <div className="relative mx-auto grid max-w-[1280px] items-end gap-[clamp(32px,5vw,72px)] page-x pt-[clamp(56px,6.5vw,96px)] pb-[clamp(40px,5vw,64px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,.85fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 self-start border border-coral/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-brand-cta" />
              Blog · new every week
            </div>
            <h1 className="m-0 text-[clamp(40px,5.4vw,82px)] leading-[.99] font-normal tracking-[-0.036em] text-pretty">
              Learn how to upgrade your{" "}
              <span className="text-coral">demand generation</span>.
            </h1>
            <p className="m-0 max-w-[620px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-cream/72 text-pretty">
              Practical writing on ABM, intent data, content syndication and
              deliverability — from the team running the campaigns, not the
              marketing department.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 rounded-card border border-cream/16 bg-cream/4 px-6 pt-6 pb-[26px]">
            <div className="text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
              Get it in your inbox
            </div>
            <p className="m-0 text-[13.5px] leading-[1.55] text-cream/68">
              One email a month: what worked in live B2B campaigns, with the
              numbers. No drip sequence.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-cream/12 py-[13px]">
          <div className="ld-marquee [animation-duration:42s]">
            {ticker.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-[18px] px-5 text-[11.5px] tracking-[0.1em] whitespace-nowrap text-cream/50 uppercase"
              >
                {t}
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-brand-cta" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1280px] page-x pt-[clamp(36px,4vw,56px)]">
        <Link
          href={blogHref(FEATURED.slug)}
          className="grid overflow-hidden rounded-card border border-ink/15 bg-white text-ink transition-colors hover:border-brand/55 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]"
        >
          <Slot
            src={FEATURED.img}
            alt={FEATURED.alt}
            className="min-h-[300px]"
          />
          <div className="flex flex-col justify-center gap-[18px] p-[clamp(28px,3.5vw,48px)]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                Editor&apos;s pick
              </span>
              <span className="h-px w-8 bg-brand/50" />
              <span className="text-[11.5px] text-muted-3">{FEATURED.meta}</span>
            </div>
            <h2 className="m-0 text-[clamp(26px,2.9vw,42px)] leading-[1.06] font-medium tracking-[-0.028em] text-pretty">
              {FEATURED.title}
            </h2>
            <p className="m-0 text-[15px] leading-[1.6] text-muted text-pretty">
              {FEATURED.body}
            </p>
            <div className="mt-1 flex items-center gap-3 border-t border-ink/12 pt-[18px]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=70"
                alt=""
                width={38}
                height={38}
                className="h-[38px] w-[38px] rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-[13px] font-semibold">{FEATURED.author}</div>
                <div className="text-[11.5px] text-muted-2">{FEATURED.role}</div>
              </div>
              <span className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-ink/18">
                <ArrowRight size={13} className="text-brand" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      <PostGrid />

      {/* CTA */}
      <section className="border-t border-ink/12 bg-brand-cta">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 page-x py-[clamp(52px,5.5vw,84px)] text-center">
          <h2 className="m-0 text-[clamp(28px,3.2vw,46px)] leading-[1.05] font-normal tracking-[-0.03em] text-ink text-pretty">
            Rather see it run on your data?
          </h2>
          <p className="m-0 max-w-[600px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-ink/82 text-pretty">
            Get a qualified intent database and map a six-week program to your
            pipeline target.
          </p>
          <Link
            href={route("Contact.dc.html")}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-ink px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-coral uppercase transition-colors hover:bg-brand hover:text-white"
          >
            Book a strategy call
            <ArrowRight />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
