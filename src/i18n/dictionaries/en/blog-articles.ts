/**
 * The twelve long-form articles behind the blog. Generated from the source
 * documents in "12 Blogs/" — edit the copy here, not in the index cards,
 * which derive their title, topic and summary from these entries.
 */
export type ArticleBlock =
  | { type: "p"; text: string; lead?: string }
  | { type: "list"; items: { text: string; lead?: string }[] };

export type ArticleSection = { id: string; title: string; blocks: ArticleBlock[] };

export type Article = {
  slug: string;
  topic: string;
  author: string;
  readTime: string;
  title: string;
  /** The meta description; doubles as the card summary. */
  description: string;
  /** Unsplash photo id. */
  img: string;
  alt: string;
  intro: string[];
  sections: ArticleSection[];
};

export const ARTICLES: Article[] = [
  {
    "slug": "is-cold-email-still-worth-it-2026",
    "topic": "Outbound",
    "author": "Campaign team",
    "readTime": "3 min read",
    "title": "Is Cold Email Still Worth It in 2026? What the Data Actually Shows",
    "description": "Cold email reply rates have dropped hard since 2022, but it hasn't stopped working — it's stopped working the old way. Here's what actually moves the needle in 2026.",
    "img": "photo-1557200134-90327ee9fafa",
    "alt": "A Gmail inbox open on a laptop",
    "intro": [
      "If you've been running the same cold email playbook since 2022, you've probably noticed the numbers slipping. You're not imagining it. Open rates that used to sit in the 35–45% range are now closer to 15–25%, and a lot of that is inflated by inbox providers pre-fetching emails. Reply rates on generic sequences have fallen into the 1–3% range. Meeting rates on the same lists are often under 1%.",
      "That's the bad news. The good news is that cold email hasn't died — it's just stopped rewarding lazy execution. Teams running signal-based, well-personalized outbound are still pulling reply rates of 5–12% and meeting rates several times higher than the industry average. The gap between \"cold email doesn't work anymore\" and \"cold email is our best channel\" almost entirely comes down to three things: infrastructure, timing, and message quality."
    ],
    "sections": [
      {
        "id": "why-deliverability-got-so-much-harder",
        "title": "Why deliverability got so much harder",
        "blocks": [
          {
            "type": "p",
            "text": "Gmail, Outlook, and every major inbox provider tightened sender requirements between 2024 and 2026. Authentication (SPF, DKIM, DMARC) is no longer optional — it's the baseline for reaching an inbox at all. On top of that, spam filters have gotten much better at pattern-matching the structure of a cold email: new sender, no prior interaction, a calendar ask in the first message. That combination gets flagged even when the copy itself looks fine."
          },
          {
            "type": "p",
            "text": "The practical fix is infrastructure most founders underestimate: separate sending domains from your primary brand domain, a proper warm-up period of several weeks, and ongoing monitoring of bounce and spam-complaint rates. Skip this step and no amount of clever copywriting will save the campaign — it never reaches the inbox to be read."
          }
        ]
      },
      {
        "id": "why-generic-sequences-stopped-converting",
        "title": "Why generic sequences stopped converting",
        "blocks": [
          {
            "type": "p",
            "text": "The second shift is about relevance. A cold email that only references someone's job title and company name reads as spam to filters and to humans now. What's replacing it is signal-based outbound: reaching out because a company just raised funding, posted five SDR roles, launched a product, or showed up on your website. That context turns \"another cold email\" into \"this person clearly did their homework,\" and it's the single biggest lever behind the reply-rate gap between average and top-performing teams."
          }
        ]
      },
      {
        "id": "what-a-modern-cold-email-program-actually-looks-like",
        "title": "What a modern cold email program actually looks like",
        "blocks": [
          {
            "type": "p",
            "text": "Programs that are still working in 2026 share a few traits:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Small, verified lists built around a specific trigger, not a scraped database of \"companies with 50–500 employees\""
              },
              {
                "lead": "Short, plain emails",
                "text": "A few sentences, one clear ask, no attachments or heavy formatting"
              },
              {
                "text": "A real reason for the outreach tied to something happening at the account right now"
              },
              {
                "lead": "Multi-channel follow-up",
                "text": "Email paired with LinkedIn and, increasingly, a phone call — rather than a six-email sequence with nothing else behind it"
              },
              {
                "lead": "Tracking on replies and meetings booked, not opens",
                "text": "Open tracking has been unreliable for years and shouldn't drive decisions anymore"
              }
            ]
          }
        ]
      },
      {
        "id": "the-real-question-isnt-does-cold-email-work",
        "title": "The real question isn't \"does cold email work\"",
        "blocks": [
          {
            "type": "p",
            "text": "It's whether your team has the infrastructure to land in the inbox, the data to know who to contact and why, and the discipline to keep the list small and the message specific. Companies that treat cold email as a system that needs ongoing management are still building predictable pipeline from it. Companies treating it as a one-time setup are the ones writing \"cold email is dead\" posts."
          },
          {
            "type": "p",
            "text": "If your outbound has gone quiet and you're not sure whether it's a deliverability problem, a targeting problem, or a message problem, that diagnosis is usually the fastest fix available — often faster than switching channels entirely."
          }
        ]
      }
    ]
  },
  {
    "slug": "why-your-mqls-arent-converting",
    "topic": "Demand gen",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "Why Your MQLs Aren't Turning Into Sales Conversations (And How to Fix It)",
    "description": "MQL-to-SQL conversion rates are stubbornly low across most B2B pipelines. The problem usually isn't sales follow-up — it's how the lead got labeled an MQL in the first place.",
    "img": "photo-1526628953301-3e589a6a8b74",
    "alt": "A marketing dashboard showing conversion metrics",
    "intro": [
      "Every revenue team has had this conversation: marketing hits its MQL target, sales complains the leads are junk, and nobody can agree on who's wrong. Usually, both sides are half right. The number is real — marketing did generate that many leads that technically matched the scoring rules. But \"matched the rules\" and \"ready to talk to sales\" turned out to be two different things."
    ],
    "sections": [
      {
        "id": "the-core-problem-engagement-isnt-the-same-as-intent",
        "title": "The core problem: engagement isn't the same as intent",
        "blocks": [
          {
            "type": "p",
            "text": "A marketing-qualified lead is supposed to signal that someone fits your ideal customer profile and has shown enough interest to be worth a sales conversation. In practice, a lot of scoring models still lean almost entirely on engagement — downloaded a whitepaper, clicked three emails, visited the pricing page once. Engagement is easy to track, so it's easy to over-weight. But a competitor's analyst can download your whitepaper and click every nurture email without ever intending to buy anything."
          },
          {
            "type": "p",
            "text": "The MQL definitions that actually hold up in 2026 blend three separate signals:"
          },
          {
            "type": "list",
            "items": [
              {
                "lead": "Fit",
                "text": "Does this person and company match your ICP on firmographics (industry, size, role, seniority)?"
              },
              {
                "lead": "Intent",
                "text": "Are they actively researching a problem you solve, right now, based on behavior that suggests urgency?"
              },
              {
                "lead": "Engagement",
                "text": "Are they interacting in ways that have historically correlated with becoming pipeline, not just interacting at all?"
              }
            ]
          },
          {
            "type": "p",
            "text": "When only one or two of those show up, you have a nurture lead, not an MQL. Labeling it an MQL anyway is what fills your sales team's calendar with calls that go nowhere — and quietly teaches them to stop trusting the MQL label altogether."
          }
        ]
      },
      {
        "id": "why-ai-assisted-scoring-is-closing-the-gap",
        "title": "Why AI-assisted scoring is closing the gap",
        "blocks": [
          {
            "type": "p",
            "text": "This is one area where the tooling genuinely caught up with the problem. AI-driven lead scoring models are now hitting noticeably higher predictive accuracy than traditional rule-based threshold scoring, because they can weigh dozens of fit, intent, and behavioral signals simultaneously instead of a handful of hard-coded rules. Teams that have shifted to this kind of scoring are seeing meaningfully better MQL-to-SQL conversion and are saving real time per rep by not chasing leads that were never going anywhere."
          },
          {
            "type": "p",
            "text": "The bigger shift underneath the tooling, though, is moving from person-level scoring to account-level scoring. B2B purchases are made by committees, not individuals — a single enthusiastic mid-level employee is often a poor proxy for whether the company is actually ready to buy. That's why many teams are supplementing (or replacing) the classic MQL with a marketing-qualified account view that rolls signal up to the whole buying group."
          }
        ]
      },
      {
        "id": "what-to-check-before-you-blame-sales",
        "title": "What to check before you blame sales",
        "blocks": [
          {
            "type": "p",
            "text": "If MQL-to-SQL conversion is stuck, walk through this before assuming the leads are fine and sales is the problem:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Recalibrate your threshold against actual closed revenue, not last year's assumptions"
              },
              {
                "text": "Separate fit scoring from intent scoring so a high-fit, low-intent lead doesn't get routed the same way as a high-fit, high-intent one"
              },
              {
                "text": "Set a clear SLA for how fast sales responds once a lead crosses the threshold — intent windows are short, and a lead that goes three days without a touch has often gone cold"
              },
              {
                "text": "Build a feedback loop where sales can flag bad MQLs and that feedback actually retrains the scoring, not just gets logged and ignored"
              }
            ]
          },
          {
            "type": "p",
            "text": "Fixing the definition is almost always cheaper than fixing the argument between marketing and sales that happens every quarter without it."
          }
        ]
      }
    ]
  },
  {
    "slug": "ai-sdrs-vs-human-appointment-setters",
    "topic": "Outbound",
    "author": "Campaign team",
    "readTime": "3 min read",
    "title": "AI SDRs vs. Human Appointment Setters: What's Actually Working in 2026",
    "description": "AI SDR adoption tripled in a year, but the \"replace your whole team\" pitch doesn't hold up for most B2B companies. Here's where AI helps, where humans still win, and how most teams are actually structured.",
    "img": "photo-1531746790731-6c087fecd65a",
    "alt": "A white robotic hand",
    "intro": [
      "AI SDRs went from a niche experiment to real production infrastructure faster than almost any other part of the sales stack. A large share of enterprise B2B teams now run at least part of their outbound through an AI SDR, up sharply from just a year or two ago. That's a genuine shift, not hype — but the \"fire your SDR team\" framing that comes with it is mostly wrong for the companies reading this."
    ],
    "sections": [
      {
        "id": "where-ai-sdrs-genuinely-win",
        "title": "Where AI SDRs genuinely win",
        "blocks": [
          {
            "type": "p",
            "text": "AI-run outbound makes the most sense when a few things are true at once:"
          },
          {
            "type": "list",
            "items": [
              {
                "lead": "Deal sizes are small to mid-size",
                "text": "High volume matters more than a perfect first impression"
              },
              {
                "lead": "The motion is high-signal",
                "text": "You have decent intent data or product-led signals to work from, so the AI isn't cold-dialing a random list"
              },
              {
                "lead": "You need volume, not precision",
                "text": "The funnel needs 500 conversations, not 50 perfect ones"
              }
            ]
          },
          {
            "type": "p",
            "text": "In that setup, an AI SDR can run sequences around the clock, personalize at a scale no human team could match, and free up a smaller human team to focus only on the conversations that show real promise."
          }
        ]
      },
      {
        "id": "where-human-appointment-setters-still-win",
        "title": "Where human appointment setters still win",
        "blocks": [
          {
            "type": "p",
            "text": "The tradeoff shows up fast once you move outside that pattern:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Larger deal sizes, where a single burned first impression costs more than a year of tooling"
              },
              {
                "text": "Regulated or complex industries, where compliance nuance and trust-building don't compress well into a scripted flow"
              },
              {
                "lead": "Early-stage companies still discovering their ICP",
                "text": "AI scales whatever pattern you feed it, including a pattern that's still wrong"
              },
              {
                "lead": "Any conversation that needs real-time judgment",
                "text": "Handling an unexpected objection, reading tone, adjusting the pitch mid-call. That's still a distinctly human skill."
              }
            ]
          }
        ]
      },
      {
        "id": "what-most-teams-are-actually-doing",
        "title": "What most teams are actually doing",
        "blocks": [
          {
            "type": "p",
            "text": "The reality on the ground isn't \"AI or human\" — it's a hybrid. A common structure now pairs one human appointment setter with AI-assisted tooling handling research, list-building, and first-touch sequencing, with the human stepping in once a prospect engages. This setup tends to land solidly on cost-per-qualified-meeting while keeping conversion rates close to what a fully human team would produce — which matters, because a cheap meeting that never converts to pipeline isn't actually cheap."
          }
        ]
      },
      {
        "id": "the-metric-that-actually-matters",
        "title": "The metric that actually matters",
        "blocks": [
          {
            "type": "p",
            "text": "Cost per meeting booked is the vanity number. Cost per qualified meeting — one that a rep would actually take, and that has a real shot at becoming an opportunity — is the number worth tracking. A fully automated setup can look great on the first metric and mediocre on the second if conversion quality drops. Before deciding how much of your appointment setting to automate, it's worth pressure-testing against your actual deal size, sales cycle, and how much of your ICP is still a moving target. Those three answers tend to make the AI-vs-human decision obvious."
          }
        ]
      }
    ]
  },
  {
    "slug": "b2b-content-syndication-worth-it-2026",
    "topic": "Syndication",
    "author": "Campaign team",
    "readTime": "3 min read",
    "title": "B2B Content Syndication in 2026: Is It Still Worth the Spend?",
    "description": "Content syndication remains one of the highest-volume B2B lead channels, but the \"publish everywhere, capture every form fill\" version of it is producing worse leads than ever. Here's what's changed.",
    "img": "photo-1533750349088-cd871a92f312",
    "alt": "Marketing strategy notes and books on a desk",
    "intro": [
      "Content syndication has been a demand-gen staple for years for a simple reason: your website only reaches people who already know to visit it. Syndicating a whitepaper, research report, or webinar through third-party platforms puts it in front of people actively researching your category who've never heard of you. Done well, it's still one of the highest-volume lead channels available to a B2B team. Done the old way, it's become one of the easiest ways to burn budget on leads that never convert."
    ],
    "sections": [
      {
        "id": "why-the-old-model-is-breaking-down",
        "title": "Why the old model is breaking down",
        "blocks": [
          {
            "type": "p",
            "text": "The traditional playbook — publish a gated asset broadly, capture every form fill, hand the list to sales — is producing weaker results than it used to. Buying committees have gotten larger, buyers consume more content before ever talking to a vendor, and only a small fraction of anyone who fills out a syndication form is actually ready to buy. Mass distribution without targeting just means sales gets handed a bigger pile of leads that mostly go nowhere, which is exactly the kind of volume-over-value tradeoff B2B marketing has been actively moving away from."
          }
        ]
      },
      {
        "id": "whats-replacing-mass-syndication",
        "title": "What's replacing mass syndication",
        "blocks": [
          {
            "type": "p",
            "text": "Three shifts define syndication that's actually working right now:"
          },
          {
            "type": "p",
            "text": "Instead of distributing to everyone in a broad job-title list, syndication is increasingly matched to accounts already showing research behavior in your category — visiting comparison pages, reading competitor content, searching relevant terms. Marketers report this alone measurably improves lead quality by filtering out people who were never going to convert.",
            "lead": "Intent-based targeting"
          },
          {
            "type": "p",
            "text": "A CFO evaluating your category cares about ROI. A technical buyer cares about implementation. Syndicating the same generic asset to both wastes the reach. Segmenting by role and buying stage, and matching the actual asset (whitepaper vs. case study vs. webinar) to where someone is in their journey, consistently outperforms one-size-fits-all distribution.",
            "lead": "Content matched to buying stage"
          },
          {
            "type": "p",
            "text": "For higher-value targets, syndication is being scoped down deliberately — distributing content only to a defined list of target accounts rather than a broad audience, mirroring the same logic as account-based marketing. Fewer leads, but leads that are actually the accounts you wanted in the first place.",
            "lead": "Account-based syndication"
          }
        ]
      },
      {
        "id": "how-to-tell-if-your-syndication-program-is-actually-working",
        "title": "How to tell if your syndication program is actually working",
        "blocks": [
          {
            "type": "p",
            "text": "Volume of leads captured is the wrong scoreboard. Track instead:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Lead-to-MQL rate from syndicated sources specifically, compared to other channels"
              },
              {
                "text": "Cost per qualified lead, not cost per form fill"
              },
              {
                "text": "How many syndicated leads show up again later in the funnel through other channels — a sign the content actually built awareness, not just captured an email address"
              },
              {
                "text": "Sales feedback on lead quality, tracked over time, not anecdotally after one bad batch"
              }
            ]
          }
        ]
      },
      {
        "id": "the-bottom-line",
        "title": "The bottom line",
        "blocks": [
          {
            "type": "p",
            "text": "Content syndication isn't losing effectiveness because the channel is dying — it's losing effectiveness for teams still running it like it's 2019. The version that works in 2026 treats syndication as a targeting exercise first and a distribution exercise second: pick the accounts, match the content, then find the platforms that reach exactly those people. That's a smaller, more deliberate program than the old \"syndicate broadly and let sales sort it out\" approach — and it's the version that still generates real pipeline instead of just leads."
          }
        ]
      }
    ]
  },
  {
    "slug": "real-cost-of-bad-b2b-data",
    "topic": "Data",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "The Real Cost of Bad B2B Data (And How to Actually Fix Your List)",
    "description": "The average B2B data provider delivers roughly 50% accuracy. Here's what that actually costs a growing sales team, and the practical framework for evaluating a provider before you buy.",
    "img": "photo-1504868584819-f8e8b4b6d7e3",
    "alt": "A laptop showing data reports",
    "intro": [
      "Here's a number worth sitting with: the industry-average accuracy for B2B contact data providers is around 50%. That means, on average, half the contacts in a purchased list are wrong — bounced emails, outdated titles, people who left the company two years ago. Top-tier providers claim 90–95%+ accuracy on verified emails and direct dials, which tells you the gap between an average list and a good one isn't small. It's the difference between a campaign that works and one that quietly wastes a quarter's budget."
    ],
    "sections": [
      {
        "id": "what-bad-data-actually-costs-you",
        "title": "What bad data actually costs you",
        "blocks": [
          {
            "type": "p",
            "text": "It's tempting to think of a bad contact list as a minor annoyance — a few bounces, a few wasted calls. The actual cost compounds:"
          },
          {
            "type": "list",
            "items": [
              {
                "lead": "Deliverability damage",
                "text": "High bounce rates from bad data don't just fail individual sends — they damage your sending domain's reputation, which then hurts every future campaign, including the good leads mixed in with the bad ones."
              },
              {
                "lead": "Wasted rep time",
                "text": "A sales rep calling a disconnected number or emailing someone who left the company isn't just failing that touch — they're not spending that time on a contact that could actually convert."
              },
              {
                "lead": "Bad targeting decisions downstream",
                "text": "If your CRM is full of duplicate, stale, or mismatched records, every report built on top of it — funnel conversion, campaign ROI, territory planning — is quietly wrong too."
              }
            ]
          }
        ]
      },
      {
        "id": "a-practical-framework-for-evaluating-a-data-provider",
        "title": "A practical framework for evaluating a data provider",
        "blocks": [
          {
            "type": "p",
            "text": "Before choosing (or sticking with) a B2B data source, run it through five checks:"
          },
          {
            "type": "list",
            "items": [
              {
                "lead": "Accuracy",
                "text": "What's the actual bounce rate on their contacts, tested against your specific market? A provider's advertised accuracy and your real-world experience are often different numbers."
              },
              {
                "lead": "Freshness",
                "text": "How often are records re-verified? A massive database refreshed quarterly is often worse than a smaller one refreshed weekly, because stale records rot fast in B2B — people change jobs constantly."
              },
              {
                "lead": "Coverage for your actual ICP",
                "text": "A provider might be excellent for US enterprise SaaS contacts and weak for your specific vertical or region. Test on your real target list, not a generic sample."
              },
              {
                "lead": "Compliance",
                "text": "GDPR, CCPA, and a growing list of regional privacy laws apply to business contact data now, not just consumer data. A provider that can't clearly explain how they source and process data is a liability, not a shortcut."
              },
              {
                "lead": "Enrichment depth",
                "text": "Firmographic, technographic, and intent signals layered on top of basic contact info are what actually make a list usable for targeting, not just for sending."
              }
            ]
          }
        ]
      },
      {
        "id": "why-waterfall-enrichment-is-becoming-standard",
        "title": "Why \"waterfall\" enrichment is becoming standard",
        "blocks": [
          {
            "type": "p",
            "text": "No single provider finds everyone. Individual data sources typically locate a meaningful minority of the contacts you're actually looking for, which is why more teams are stacking multiple providers in a \"waterfall\" — checking one source, then falling back to a second and third for the contacts the first one missed. It's more setup work, but it consistently outperforms relying on one database, however large it claims to be."
          }
        ]
      },
      {
        "id": "the-takeaway",
        "title": "The takeaway",
        "blocks": [
          {
            "type": "p",
            "text": "Bad data isn't a rounding error in your outbound program — it's often the single biggest lever on whether your campaigns work at all. Before optimizing subject lines or call scripts, it's worth auditing the list underneath them. A clean, verified, well-targeted list of 500 contacts will consistently outperform a stale list of 5,000 — and it's usually cheaper to fix than to keep sending against."
          }
        ]
      }
    ]
  },
  {
    "slug": "abm-guide-mid-market-2026",
    "topic": "ABM",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "Account-Based Marketing in 2026: A Practical Guide for Mid-Market B2B Teams",
    "description": "ABM isn't just an enterprise tactic anymore, but most mid-market teams still run it like a slightly-more-personalized version of mass marketing. Here's what a lean, practical ABM program actually looks like.",
    "img": "photo-1557804506-669a67965ba0",
    "alt": "A team planning at a whiteboard",
    "intro": [
      "Account-based marketing has been talked about as \"the future of B2B marketing\" for long enough that the phrase itself has started to feel tired. But the underlying shift it describes is real and still accelerating: B2B teams are moving away from generating as many leads as possible and toward identifying a smaller list of high-value accounts and going deep on each one. Fewer leads, better conversion, and a much clearer line from marketing activity to actual revenue."
    ],
    "sections": [
      {
        "id": "why-this-shift-is-happening-now",
        "title": "Why this shift is happening now",
        "blocks": [
          {
            "type": "p",
            "text": "Traditional demand generation optimizes for lead volume and lets sales sort out quality afterward. The problem is that this approach spends most of its budget on leads that were never going to convert — generic messaging aimed at a broad audience creates noise, not signal. Teams that have shifted to an account-based model are narrowing target lists from thousands of contacts down to hundreds, or even dozens for higher-ticket deals, and investing far more per account in research and personalization. The tradeoff is fewer total leads — but a much higher share of them turn into real pipeline."
          }
        ]
      },
      {
        "id": "the-mistake-most-mid-market-teams-make",
        "title": "The mistake most mid-market teams make",
        "blocks": [
          {
            "type": "p",
            "text": "ABM doesn't require an enterprise budget or a dedicated ops team, but a lot of mid-market programs fail because they try to run ABM with mass-marketing habits: broad target lists dressed up with a first-name merge field, generic content sent to \"target accounts\" with no real customization, and success measured by lead count instead of account engagement or pipeline. That's not ABM — it's segmented email marketing wearing an ABM label."
          }
        ]
      },
      {
        "id": "what-an-actually-lean-abm-program-looks-like",
        "title": "What an actually lean ABM program looks like",
        "blocks": [
          {
            "type": "list",
            "items": [
              {
                "lead": "Start with a short, deliberately narrow account list",
                "text": "Pick accounts based on real fit signals — firmographic match, technographic fit, and ideally some intent signal showing they're already in-market — not just \"companies that could theoretically buy.\""
              },
              {
                "lead": "Map the buying committee, not just one contact",
                "text": "B2B purchases are made by groups. Identify the 3–6 roles likely involved in a decision and build a plan to reach each of them, not just the most senior title."
              },
              {
                "lead": "Use intent and behavioral signals to time outreach",
                "text": "Windows of buying intent are narrow. An account showing active research signals today needs outreach this week, not whenever the next campaign happens to launch."
              },
              {
                "lead": "Coordinate channels instead of running them separately",
                "text": "The accounts that convert best are usually touched by more than one channel in a coordinated way — a piece of relevant content, a direct outreach sequence, and a sales touch that references the same specific context, not three disconnected campaigns."
              },
              {
                "lead": "Measure pipeline and revenue contribution, not lead volume",
                "text": "If your ABM dashboard still leads with \"leads generated,\" it's measuring the wrong thing. Account engagement, meetings booked with the right people, and pipeline value are the numbers that actually reflect whether it's working."
              }
            ]
          }
        ]
      },
      {
        "id": "where-to-start-if-youre-not-running-abm-yet",
        "title": "Where to start if you're not running ABM yet",
        "blocks": [
          {
            "type": "p",
            "text": "You don't need every account on a full 5-channel program on day one. Pick 20–50 accounts that represent your best-fit customer profile, build one genuinely personalized campaign for that list, and measure it against your normal lead-gen baseline. If it outperforms — and for most B2B companies selling anything with real deal value, it will — that's the case for expanding the program, built on your own numbers instead of someone else's benchmark."
          }
        ]
      }
    ]
  },
  {
    "slug": "does-cold-calling-still-work-b2b-2026",
    "topic": "Outbound",
    "author": "Campaign team",
    "readTime": "3 min read",
    "title": "Does Cold Calling Still Work in B2B? Here's What the 2026 Numbers Say",
    "description": "\"Cold calling is dead\" has been said every year since 2015. The 2026 data says otherwise — as long as you're calling the right people, the right way.",
    "img": "photo-1423666639041-f56000c27a9a",
    "alt": "Hands holding a phone beside a laptop",
    "intro": [
      "Cold calling gets declared dead on a fairly reliable annual cycle, and the data keeps refusing to cooperate with the obituary. Across recent industry research, more than half of B2B leads still originate from cold outreach, and companies that drop calling from their sales mix tend to grow meaningfully slower than the ones that keep it in the channel mix. The phone isn't going anywhere. What's changed is what it takes to make it work."
    ],
    "sections": [
      {
        "id": "why-buyers-still-pick-up",
        "title": "Why buyers still pick up",
        "blocks": [
          {
            "type": "p",
            "text": "Buyer behavior data consistently shows that a majority of B2B decision-makers are willing to take a call from a seller they don't know yet, and a striking share will accept a meeting when the outreach is relevant. Executives specifically tend to prefer being contacted by phone over email for exactly the reason you'd expect: it's faster, it's a real conversation, and it lets both sides qualify and adjust in real time instead of waiting days for an email reply."
          },
          {
            "type": "p",
            "text": "There's also a competitive angle that's easy to miss: as more teams shifted budget toward email and LinkedIn automation over the last few years, fewer companies are actually calling. That's made the phone a less crowded channel than it's been in a decade — the teams still calling well are standing out simply because most competitors stopped."
          }
        ]
      },
      {
        "id": "what-separates-cold-calling-that-works-from-cold-calling-that-fails",
        "title": "What separates cold calling that works from cold calling that fails",
        "blocks": [
          {
            "type": "p",
            "text": "The gap between a 2% success rate and a 10%+ success rate almost never comes down to script quality alone. It comes down to:"
          },
          {
            "type": "list",
            "items": [
              {
                "lead": "List quality",
                "text": "Calling switchboards and outdated numbers versus calling verified direct dials produces dramatically different pickup rates. Data quality is consistently the single largest variable in call program performance."
              },
              {
                "lead": "Targeting",
                "text": "A focused list of accounts that actually match your ICP beats a bigger, unqualified list every time. Volume without targeting is just noise with a dial tone."
              },
              {
                "lead": "Persistence",
                "text": "The majority of conversions happen after multiple follow-up attempts, not the first call. Most reps quit after one or two tries and conclude the list — or the channel — doesn't work."
              },
              {
                "lead": "A real reason for the call",
                "text": "Opening with a generic pitch gets a hang-up. Opening with a specific, relevant reason for calling that account, right now, gets a hearing."
              }
            ]
          }
        ]
      },
      {
        "id": "cold-calling-works-best-as-part-of-a-system-not-a-solo-channel",
        "title": "Cold calling works best as part of a system, not a solo channel",
        "blocks": [
          {
            "type": "p",
            "text": "The strongest results come from pairing calls with email and LinkedIn in a coordinated sequence rather than running any one channel alone — a combined approach can produce two to three times the meetings of a single-channel effort. Compared to cold email, which can take a couple of weeks to generate a first reply, a well-targeted call can produce a first appointment within days, which makes it one of the fastest channels available for building near-term pipeline, even if it's not the highest-volume one."
          }
        ]
      },
      {
        "id": "one-more-thing-worth-knowing",
        "title": "One more thing worth knowing",
        "blocks": [
          {
            "type": "p",
            "text": "Compliance isn't optional background noise here. TCPA, GDPR, and local do-not-call regulations do apply to B2B calling, and violations carry real financial penalties — not just a reputational risk. Any calling program worth running needs a clean, compliant contact source behind it, not just a big list."
          }
        ]
      },
      {
        "id": "the-honest-answer",
        "title": "The honest answer",
        "blocks": [
          {
            "type": "p",
            "text": "Cold calling in B2B isn't dead, and it isn't a silver bullet either. It's a channel that rewards the same discipline every other outbound channel does — good data, real targeting, and follow-through — and punishes the same shortcuts. Teams asking \"does cold calling still work\" are usually really asking whether it's worth fixing the process behind it. For most B2B companies with a real ICP and decent contact data, it is."
          }
        ]
      }
    ]
  },
  {
    "slug": "tofu-mofu-bofu-funnel-guide",
    "topic": "Demand gen",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "TOFU, MOFU, BOFU: Building a Multi-Funnel Lead Gen Strategy That Actually Converts",
    "description": "Most B2B teams have a funnel diagram on a slide somewhere and a lead gen program that ignores it completely. Here's how to actually build campaigns around each stage instead of running one generic motion for everyone.",
    "img": "photo-1543286386-713bdd548da4",
    "alt": "A hand-drawn growth chart on a desk",
    "intro": [
      "Every B2B marketer has seen the TOFU/MOFU/BOFU funnel diagram — top, middle, and bottom of funnel, neatly labeled with a different content type at each stage. Fewer teams actually build their lead generation around it. In practice, a lot of B2B programs run one generic motion — a newsletter signup, a demo request form, a standard nurture sequence — and apply it to everyone regardless of where they actually are in the buying process. That mismatch is a big part of why so many leads go quiet after the first touch."
    ],
    "sections": [
      {
        "id": "why-stage-mismatched-content-kills-conversion",
        "title": "Why stage-mismatched content kills conversion",
        "blocks": [
          {
            "type": "p",
            "text": "Buyers now consume several pieces of content before ever engaging with a vendor, and buying committees have grown to include more stakeholders than they used to — which means more people, at more different stages, touching your content at any given time. Sending a bottom-of-funnel \"book a demo\" CTA to someone who just discovered your category for the first time is asking them to skip several steps they haven't taken yet. Sending a generic educational article to someone who's already compared three competitors and is ready to talk pricing wastes the moment they were actually ready to convert."
          }
        ]
      },
      {
        "id": "what-belongs-at-each-stage",
        "title": "What belongs at each stage",
        "blocks": [
          {
            "type": "p",
            "text": "The goal is awareness, not conversion. Someone here has a problem but may not know it has a name yet, let alone that your company solves it. Educational content — guides, explainers, original research — earns attention without asking for anything in return except an email address, and sometimes not even that.",
            "lead": "Top of funnel (TOFU)"
          },
          {
            "type": "p",
            "text": "The prospect knows the problem and is actively evaluating solutions. This is where comparison content, case studies, webinars, and more detailed guides do the work — content that helps them build the internal case for solving the problem and starts differentiating your approach from alternatives.",
            "lead": "Middle of funnel (MOFU)"
          },
          {
            "type": "p",
            "text": "The prospect is close to a decision. Pricing guides, ROI calculators, customer proof, and direct sales conversation are what this stage actually needs. This is also where personalized outreach — email, LinkedIn, a phone call — earns its place, because the prospect is receptive to a direct ask in a way they weren't two stages earlier.",
            "lead": "Bottom of funnel (BOFU)"
          }
        ]
      },
      {
        "id": "where-most-multi-funnel-programs-actually-break",
        "title": "Where most multi-funnel programs actually break",
        "blocks": [
          {
            "type": "p",
            "text": "The content usually exists somewhere. The breakdown is almost always in routing — matching the right content and channel to the right stage for each specific lead, instead of running one blanket sequence for the whole list. A few fixes that consistently help:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Score leads by stage signal, not just engagement volume. Someone who read one bottom-of-funnel pricing page is further along than someone who's opened ten top-of-funnel newsletters."
              },
              {
                "text": "Build separate nurture tracks per stage, not one long sequence everyone gets regardless of where they entered."
              },
              {
                "lead": "Coordinate channels by stage, not just by contact",
                "text": "Cold email and content syndication tend to do more of the top-of-funnel work; direct outreach and sales conversations carry more weight further down."
              },
              {
                "lead": "Re-score continuously",
                "text": "A TOFU lead today can become a BOFU lead in three weeks after visiting your pricing page twice. If your system only scores once, at capture, you're missing the moment they actually became ready."
              }
            ]
          }
        ]
      },
      {
        "id": "the-takeaway",
        "title": "The takeaway",
        "blocks": [
          {
            "type": "p",
            "text": "A funnel diagram on a slide doesn't generate pipeline. A program that actually routes different content, different channels, and different messaging to leads based on where they really are does. That's a heavier lift than one generic campaign — but it's usually the difference between a funnel that leaks at every stage and one that steadily moves people toward a real sales conversation."
          }
        ]
      }
    ]
  },
  {
    "slug": "buyer-intent-data-explained",
    "topic": "Intent data",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "Buyer Intent Data Explained: How to Use It Without Wasting Your Budget",
    "description": "Intent data has gone from a nice-to-have to something most high-performing B2B teams use, but it's also easy to buy and never actually act on. Here's what it is, what it isn't, and how to use it well.",
    "img": "photo-1560472354-b33ff0c44a43",
    "alt": "An analytics graph of clicks and impressions",
    "intro": [
      "Intent data has crossed from \"interesting emerging category\" to something close to standard practice for serious B2B go-to-market teams. Roughly three-quarters of high-performing sales and marketing organizations now use some form of intent data in their process. That's a real shift — but it's also created a gap between teams that buy intent data and teams that actually get value from it, and that gap is bigger than most vendors will admit."
    ],
    "sections": [
      {
        "id": "what-intent-data-actually-is",
        "title": "What intent data actually is",
        "blocks": [
          {
            "type": "p",
            "text": "Intent data is behavioral evidence that a person or company is actively researching a problem or solution category — before they've filled out a form or raised their hand in any obvious way. It generally comes from three sources:"
          },
          {
            "type": "list",
            "items": [
              {
                "lead": "First-party intent",
                "text": "Activity on your own properties: website visits, pricing page views, content downloads, product trial usage. This is the highest-quality signal because the person chose to interact with you directly, but it's also the sparsest — most of your future buyers haven't visited your site yet."
              },
              {
                "lead": "Third-party intent",
                "text": "Research behavior happening elsewhere that intent providers can observe at scale, like content consumption on industry sites or review platforms."
              },
              {
                "lead": "AI-inferred signals",
                "text": "Patterns pulled from a combination of sources, including things like hiring activity (a company posting several SDR roles is a signal they're investing in outbound, and might need related tools) or job changes (a champion who advocated for your product moving to a new company)."
              }
            ]
          }
        ]
      },
      {
        "id": "where-it-actually-helps",
        "title": "Where it actually helps",
        "blocks": [
          {
            "type": "p",
            "text": "The core value of intent data isn't finding new companies to target — it's knowing when to reach an account you already had on a list. Contacting an account while they're actively researching, instead of on a random quarterly cadence, is the difference between a call that lands and one that doesn't.",
            "lead": "Timing outreach"
          },
          {
            "type": "p",
            "text": "Not every account on your ICP list is in-market right now. Intent signals help separate \"fits our profile\" from \"fits our profile and is actually looking,\" which is a much more useful list to work from.",
            "lead": "Prioritizing your target list"
          },
          {
            "type": "p",
            "text": "Activating personalized, higher-effort campaigns only for accounts already showing intent signals improves the return on that effort, instead of spending the same personalization budget evenly across accounts that are and aren't ready.",
            "lead": "Sharpening ABM campaigns"
          }
        ]
      },
      {
        "id": "where-teams-waste-money-on-it",
        "title": "Where teams waste money on it",
        "blocks": [
          {
            "type": "p",
            "text": "Not all buying signals predict an actual purchase. A company researching your category broadly isn't the same as a company that just visited your pricing page three times this week. Vendors sell aggregate intent scores that blur this distinction — it's worth asking exactly what behaviors are behind any score before acting on it.",
            "lead": "Treating every signal as equal"
          },
          {
            "type": "p",
            "text": "Intent data that sits in a dashboard nobody checks daily isn't a signal — it's a subscription fee. The teams getting real value have built a workflow where a qualifying signal automatically triggers a specific next action: an alert to a rep, a campaign activation, a change in ad targeting.",
            "lead": "Buying it and never operationalizing it"
          },
          {
            "type": "p",
            "text": "Even with good intent data, tying revenue directly back to \"we acted on this signal\" remains genuinely hard. Don't expect a clean ROI number in month one — expect a gradual improvement in conversion rates and outreach efficiency instead.",
            "lead": "Ignoring attribution difficulty"
          }
        ]
      },
      {
        "id": "the-practical-starting-point",
        "title": "The practical starting point",
        "blocks": [
          {
            "type": "p",
            "text": "You don't need an enterprise intent platform to start. Even simple first-party signals — who's visiting your pricing page repeatedly, who's opened every email in a sequence, who suddenly went quiet after months of engagement — are intent data you likely already have and aren't using systematically. Start there, build the habit of acting on signals fast, and layer in third-party or AI-inferred data once the workflow around it actually works."
          }
        ]
      }
    ]
  },
  {
    "slug": "in-house-vs-outsourced-appointment-setting",
    "topic": "Outbound",
    "author": "Campaign team",
    "readTime": "3 min read",
    "title": "In-House vs. Outsourced Appointment Setting: The Real 2026 Cost Comparison",
    "description": "The salary line item for an in-house SDR isn't the real cost. Here's the fuller comparison B2B leaders are actually running in 2026 before deciding whether to build or outsource pipeline generation.",
    "img": "photo-1542744173-8e7e53415bb0",
    "alt": "A sales team meeting around a table",
    "intro": [
      "\"Should we hire an SDR or outsource appointment setting?\" gets answered too often by comparing a recruiter's salary estimate to an agency's monthly retainer, which is a comparison that leaves out most of the actual cost on both sides. Here's the fuller picture worth running before that decision."
    ],
    "sections": [
      {
        "id": "what-an-in-house-sdr-really-costs",
        "title": "What an in-house SDR really costs",
        "blocks": [
          {
            "type": "p",
            "text": "The salary line is the smallest piece of the real number. Once you load in tools (dialer, data provider, sales engagement platform), ramp time before the rep produces consistent meetings, management overhead, and recruiting cost, the fully-loaded cost of one SDR typically lands well above the base salary most budgets assume — often close to double it once everything is counted. On top of that, sales development has one of the highest turnover rates of any role in a revenue org, meaning a chunk of that ramp-up investment tends to walk out the door and restart with the next hire."
          },
          {
            "type": "p",
            "text": "Ramp time itself is a real cost most budgets underweight. An in-house SDR team usually needs several months to start producing consistent meetings — learning the product, refining messaging, building a rhythm — before it's operating at full output."
          }
        ]
      },
      {
        "id": "what-outsourced-appointment-setting-actually-costs",
        "title": "What outsourced appointment setting actually costs",
        "blocks": [
          {
            "type": "p",
            "text": "A managed appointment setting program typically costs meaningfully less than the fully-loaded cost of an equivalent in-house function, largely because the infrastructure — data, dialers, sequencing tools, trained callers — is already built and running across multiple clients instead of being stood up from zero for one team. Programs can also go live in a matter of weeks rather than the months an in-house hire needs to ramp, which matters most when there's a near-term pipeline gap to fill."
          },
          {
            "type": "p",
            "text": "The tradeoff is control and product depth. An outsourced team won't develop the same intuitive product knowledge as someone who sits in your Slack every day, and results depend heavily on how well the provider actually understands your ICP and message — not just how many dials they make."
          }
        ]
      },
      {
        "id": "the-comparison-that-actually-matters",
        "title": "The comparison that actually matters",
        "blocks": [
          {
            "type": "p",
            "text": "Cost per hire vs. cost per retainer misses the point. The real comparison is:"
          },
          {
            "type": "list",
            "items": [
              {
                "lead": "Cost per qualified meeting",
                "text": "Not cost per meeting booked. A cheap meeting that never becomes an opportunity isn't actually cheap."
              },
              {
                "lead": "Time to first meaningful pipeline",
                "text": "In-house ramp time vs. outsourced go-live time, weighed against how urgent the pipeline need actually is"
              },
              {
                "text": "Lead-to-opportunity conversion rate, tracked over the first 90 days for either option — this is where a mismatched provider or a slow-ramping hire both show up clearly"
              },
              {
                "lead": "What your AEs are actually spending time on",
                "text": "If closers are still doing their own prospecting, neither option is solving the real problem"
              }
            ]
          }
        ]
      },
      {
        "id": "when-each-option-actually-makes-sense",
        "title": "When each option actually makes sense",
        "blocks": [
          {
            "type": "p",
            "text": "In-house tends to win when your ICP is still being discovered, your sales motion is complex enough that product depth matters more than volume, or you're building toward a long-term team that will eventually run a much larger function."
          },
          {
            "type": "p",
            "text": "Outsourcing tends to win when you need pipeline moving faster than a hire-and-ramp cycle allows, when appointment setting is a clearly defined, repeatable motion rather than something evolving weekly, or when the true fully-loaded cost of building the function in-house doesn't pencil out yet at your current pipeline needs."
          },
          {
            "type": "p",
            "text": "Plenty of companies land on a hybrid — a lean in-house team handling the accounts that need real product depth, with an outsourced partner running volume on the rest. The honest version of this decision isn't \"build vs. buy\" as a permanent choice. It's \"which one fits where we are right now,\" revisited as the pipeline need changes."
          }
        ]
      }
    ]
  },
  {
    "slug": "b2b-data-compliance-checklist-2026",
    "topic": "Compliance",
    "author": "Compliance lead",
    "readTime": "3 min read",
    "title": "GDPR, CCPA, and Your B2B Contact Data: A 2026 Compliance Checklist",
    "description": "\"It's business contact data, not personal data\" stopped being a valid excuse years ago. Here's what actually applies to your outbound list in 2026, and how to check whether your current data source holds up.",
    "img": "photo-1589829545856-d10d557cf95f",
    "alt": "A statue of Lady Justice holding scales",
    "intro": [
      "There's a myth that's cost more than one B2B company a painful compliance letter: the belief that business contact information — a work email, a job title, a company phone number — isn't covered by data privacy law the way consumer data is. That exemption, where it ever existed, has been closing for years. Business contact data tied to an identifiable person is personal data under GDPR, and California's B2B exemption expired back in 2023. If your outbound program is still operating on the old assumption, it's worth a proper look now rather than after a complaint."
    ],
    "sections": [
      {
        "id": "what-actually-counts-as-regulated-here",
        "title": "What actually counts as regulated here",
        "blocks": [
          {
            "type": "p",
            "text": "If a record includes a name, a direct email, or anything that identifies a specific individual — even in a clearly professional context — it's covered. A generic sales@company.com address is a different category than firstname.lastname@company.com, and most modern outbound runs entirely on the second kind."
          },
          {
            "type": "p",
            "text": "The regulatory list has also gotten longer, not shorter. Beyond GDPR and CCPA, depending on where your prospects and your company operate, you may also need to consider region-specific rules — Brazil's LGPD, India's DPDPA, Japan's APPI, South Africa's POPIA, and others. If you sell across multiple regions, \"we're GDPR compliant\" doesn't automatically mean you're covered everywhere your list reaches."
          }
        ]
      },
      {
        "id": "a-practical-checklist-for-your-data-source",
        "title": "A practical checklist for your data source",
        "blocks": [
          {
            "type": "p",
            "text": "Before you send another campaign against a purchased or scraped list, check:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Where did this data come from, specifically? A provider that can't clearly explain their sourcing methodology is a liability wearing a database."
              },
              {
                "text": "Is there a Data Processing Agreement available? Legitimate providers can produce one without a fight. If that request gets stonewalled, treat it as a red flag."
              },
              {
                "text": "Is there a working opt-out mechanism, both from the provider and reflected in your own outreach? An unsubscribe link that doesn't actually update a suppression list is worse than not having one, because it creates a paper trail of ignored requests."
              },
              {
                "text": "Does the provider maintain do-not-call and do-not-contact list compliance for the regions you're targeting, not just a generic global list?"
              },
              {
                "text": "Is the data being re-verified regularly, or is it a static snapshot that gets staler — and riskier — the longer you hold it?"
              }
            ]
          }
        ]
      },
      {
        "id": "the-cost-of-getting-this-wrong",
        "title": "The cost of getting this wrong",
        "blocks": [
          {
            "type": "p",
            "text": "Regulatory penalties under GDPR can reach a meaningful percentage of global revenue for serious violations, and enforcement isn't purely theoretical — companies buying contact lists without a proper legal basis have received real complaints through regulators after running what looked like a completely normal outbound campaign. Beyond the fine itself, a compliance complaint against a specific campaign tends to trigger a broader review of everything else you're running, which is a much more expensive problem than the original list purchase."
          }
        ]
      },
      {
        "id": "what-this-means-day-to-day",
        "title": "What this means day to day",
        "blocks": [
          {
            "type": "p",
            "text": "Compliance isn't a policy document you write once — it's infrastructure that has to sit underneath every list you buy and every campaign you send. That means treating your data provider selection with the same scrutiny you'd apply to any other vendor holding sensitive information, keeping your own suppression and opt-out lists current across every channel you use, and staying aware that \"it's just business contact data\" hasn't been a safe assumption for a while now. The teams that build this in from the start spend far less time firefighting it later than the teams that bolt it on after the first complaint."
          }
        ]
      }
    ]
  },
  {
    "slug": "multi-channel-outbound-2026",
    "topic": "Outbound",
    "author": "Campaign team",
    "readTime": "3 min read",
    "title": "Why Email-Only Outbound Is Dying in 2026 (And What to Do Instead)",
    "description": "A single-channel outbound sequence is competing against a full inbox, a distracted LinkedIn feed, and a phone that almost nobody calls anymore. Here's why coordinating channels is outperforming any one of them alone.",
    "img": "photo-1563986768609-322da13575f3",
    "alt": "Someone working across a laptop and a phone",
    "intro": [
      "If your outbound program is one email sequence and nothing else, you're not just missing extra reach — you're leaving a well-documented performance gap on the table. Across recent B2B outbound research, coordinating multiple channels toward the same prospect consistently produces two to three times more meetings than running any single channel by itself. That's not a marginal optimization. It's close to the difference between a program that works and one that doesn't."
    ],
    "sections": [
      {
        "id": "why-one-channel-alone-keeps-underperforming",
        "title": "Why one channel alone keeps underperforming",
        "blocks": [
          {
            "type": "p",
            "text": "Each individual outbound channel has gotten harder on its own. Cold email deliverability has tightened significantly — authentication requirements, stricter spam filtering, and buyer fatigue with generic sequences have pushed reply rates on email-only outreach down hard compared to a few years ago. Cold calling alone still converts, but reachability rates vary a lot by list quality and industry, and it takes real volume to produce consistent results from calling by itself. LinkedIn outreach alone competes with an increasingly noisy feed where connection requests and cold DMs blend into the background."
          },
          {
            "type": "p",
            "text": "Run any one of these alone and you're relying entirely on that one channel landing at exactly the right moment. Coordinate them, and you're giving the same prospect several different, lower-friction ways to notice you and respond on their own terms."
          }
        ]
      },
      {
        "id": "what-a-coordinated-sequence-actually-looks-like",
        "title": "What a coordinated sequence actually looks like",
        "blocks": [
          {
            "type": "p",
            "text": "The specifics vary by team, but the pattern that keeps showing up in effective programs is straightforward: a short cadence across email, LinkedIn, and phone, spaced a few days apart, all referencing the same context so it reads as one coordinated outreach rather than three unrelated interruptions. A rough shape that works well for a lot of B2B teams: an email opens the sequence with a specific, relevant reason for reaching out; a LinkedIn touch follows a couple of days later, often just a connection request or light engagement rather than a pitch; a call closes the loop toward the end of the week, referencing the same reason from the original email."
          },
          {
            "type": "p",
            "text": "The point isn't to hit every channel for its own sake — it's that a prospect who ignores an email might notice a LinkedIn touch, and a prospect who ignores both might actually pick up a call that references something specific instead of opening cold."
          }
        ]
      },
      {
        "id": "why-this-also-fixes-a-personalization-problem",
        "title": "Why this also fixes a personalization problem",
        "blocks": [
          {
            "type": "p",
            "text": "Multi-channel outreach forces a kind of discipline that single-channel sequences often skip: if the same reason for reaching out has to work across an email subject line, a LinkedIn note, and an opening line on a call, it has to be genuinely specific to that account — not a generic template with a merge field. Programs built around a real trigger (funding, hiring, a product launch, an intent signal) naturally translate well across channels. Programs built around \"we sell to companies like yours\" don't survive being said out loud on a phone call, which is often the moment that exposes how generic the outreach really was."
          }
        ]
      },
      {
        "id": "getting-started-without-overbuilding",
        "title": "Getting started without overbuilding",
        "blocks": [
          {
            "type": "p",
            "text": "You don't need every channel running from day one. Add channels in the order that matches where your team already has strength — if you have a rep comfortable on the phone, add calling to an existing email sequence before adding a fourth channel nobody's staffed to run well. The failure mode to avoid isn't under-investing in channels; it's spreading a small team across too many channels at once and running all of them poorly instead of two or three well."
          },
          {
            "type": "p",
            "text": "The honest read on \"email-only outbound is dying\" isn't that email stopped working. It's that email stopped being enough to carry a program by itself, and the teams still winning outbound in 2026 are the ones that noticed early."
          }
        ]
      }
    ]
  }
];

export function articleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
