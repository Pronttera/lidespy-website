/** Content for the Blog artboard. */
const U = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=70`;

export type Post = {
  topic: string;
  meta: string;
  title: string;
  body: string;
  author: string;
  img: string;
  credit: string;
  creditHref: string;
};

export const POSTS: Post[] = [
  { topic: "ABM", meta: "6 min read", title: "ABM vs demand gen: which should you run first?", body: "When account-based plays beat volume programs — and how to combine the two without doubling budget.", author: "Research team", img: U("photo-1553877522-43269d4ea984"), credit: "Photo by Austin Distel on Unsplash", creditHref: "https://unsplash.com/@austindistel" },
  { topic: "Intent data", meta: "8 min read", title: "How to use intent data without drowning in noise", body: "A practical framework for turning intent signals into prioritized account lists your SDRs will actually work.", author: "Research team", img: U("photo-1460925895917-afdab827c52f"), credit: "Photo by Carlos Muza on Unsplash", creditHref: "https://unsplash.com/@kmuza" },
  { topic: "Syndication", meta: "5 min read", title: "Content syndication best practices for 2026", body: "Qualification filters, asset selection and follow-up sequencing that keep syndicated leads out of the junk pile.", author: "Campaign team", img: U("photo-1499750310107-5fef28a66643"), credit: "Photo by Andrew Neel on Unsplash", creditHref: "https://unsplash.com/@andrewtneel" },
  { topic: "Email", meta: "7 min read", title: "Email deliverability for B2B: the 2026 checklist", body: "Domain warm-up, authentication, list hygiene and sending cadence — everything between you and the inbox.", author: "Campaign team", img: U("photo-1596526131083-e8c633c948d2"), credit: "Photo by Solen Feyissa on Unsplash", creditHref: "https://unsplash.com/@solenfeyissa" },
  { topic: "Data", meta: "9 min read", title: "What a verified B2B record actually costs to maintain", body: "Decay rates by seniority and region, and why an annual refresh is cheaper than a rebuild.", author: "Research team", img: U("photo-1551288049-bebda4e38f71"), credit: "Photo by Luke Chesser on Unsplash", creditHref: "https://unsplash.com/@lukechesser" },
  { topic: "ABM", meta: "6 min read", title: "Mapping a buying committee you have never met", body: "How we reconstruct a seven-person committee from org signals, hiring data and tech stack traces.", author: "Research team", img: U("photo-1573164574572-cb89e39749b4"), credit: "Photo by Christina @ wocintechchat.com on Unsplash", creditHref: "https://unsplash.com/@wocintechchat" },
  { topic: "Email", meta: "4 min read", title: "The follow-up window nobody measures", body: "Reply rates by hour-since-download across 500+ syndication campaigns. The curve is steeper than you think.", author: "Campaign team", img: U("photo-1552664730-d307ca884978"), credit: "Photo by Campaign Creators on Unsplash", creditHref: "https://unsplash.com/@campaign_creators" },
  { topic: "Compliance", meta: "10 min read", title: "GDPR outbound: documenting lawful basis per market", body: "What legitimate interest means in practice across the UK, DACH, Nordics and France — and what to keep on file.", author: "Compliance lead", img: U("photo-1450101499163-c8848c66ca85"), credit: "Photo by Green Chameleon on Unsplash", creditHref: "https://unsplash.com/@craftedbygc" },
  { topic: "Intent data", meta: "7 min read", title: "Why your MQL definition is costing you meetings", body: "Scoring models that reward form fills over buying signals, and a lighter alternative that sales trusts.", author: "Research team", img: U("photo-1543286386-713bdd548da4"), credit: "Photo by Isaac Smith on Unsplash", creditHref: "https://unsplash.com/@isaacmsmith" },
];

export const TOPICS = ["All", "ABM", "Intent data", "Syndication", "Email", "Data", "Compliance"];

export const FEATURED = {
  title: POSTS[0].title,
  body: "Most teams pick one and defend it for a year. The honest answer depends on deal size, committee width and how much of your ICP is already in-market — here is the decision tree we use with new clients.",
  meta: `${POSTS[0].meta} · ABM`,
  author: "Lidespy research team",
  role: "Audience intelligence",
};

/** Copy for the Blog page shell. */
export const BLOG_COPY = {
  meta: {
    title: "Blog · Lidespy",
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
    imageCredit: "Photo by Austin Distel on Unsplash",
    imageCreditHref: "https://unsplash.com/@austindistel",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=70",
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
    body: "We’ll audit a sample of your database and map a six-week program to your pipeline target.",
    button: "Book a strategy call",
  },
};
