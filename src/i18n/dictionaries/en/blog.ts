/** Content for the Blog artboard. */
import { ARTICLES } from "./blog-articles";

const U = (id: string, w = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export type Post = {
  slug: string;
  topic: string;
  meta: string;
  title: string;
  body: string;
  author: string;
  img: string;
  alt: string;
  credit: string;
  creditHref: string;
};

/** Index cards, derived from the articles so the two never drift apart. */
export const POSTS: Post[] = ARTICLES.map((a) => ({
  slug: a.slug,
  topic: a.topic,
  meta: a.readTime,
  title: a.title,
  body: a.description,
  author: a.author,
  img: U(a.img),
  alt: a.alt,
  credit: "Photo on Unsplash",
  creditHref: "https://unsplash.com",
}));

export const TOPICS = [
  "All",
  ...Array.from(new Set(POSTS.map((p) => p.topic))),
];

const lead = POSTS[0];

export const FEATURED = {
  slug: lead.slug,
  title: lead.title,
  body: lead.body,
  meta: `${lead.meta} · ${lead.topic}`,
  author: `Lidespy ${lead.author.toLowerCase()}`,
  role: "Outbound campaigns",
  img: U(ARTICLES[0].img, 1400),
  alt: lead.alt,
};

/** Copy for the Blog page shell. */
export const BLOG_COPY = {
  meta: {
    title: "Blog · B2B Demand Generation Insights · Lidespy",
    description:
      "Practical writing on ABM, intent data, content syndication and deliverability from the team running the campaigns.",
  },
  hero: {
    eyebrow: "Blog · new every week",
    titleLead: "Learn how to upgrade your",
    titleAccent: "demand generation",
    intro:
      "Practical writing on ABM, intent data, content syndication and deliverability — from the team running the campaigns, not the marketing department.",
  },
  newsletter: {
    heading: "Get it in your inbox",
    body: "One email a month: what worked in live B2B campaigns, with the numbers. No drip sequence.",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    submit: "Subscribe",
    confirmation: "You’re on the list.",
  },
  featured: {
    label: "Editor’s pick",
    imageCredit: "Photo on Unsplash",
    imageCreditHref: "https://unsplash.com",
    authorImg:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=70",
  },
  grid: {
    countOne: "{count} article",
    countOther: "{count} articles",
    read: "Read",
  },
  cta: {
    title: "Rather see it run on your data?",
    body: "Get a qualified intent database and map a six-week program to your pipeline target.",
    button: "Book a strategy call",
  },
};
