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
    "slug": "in-house-appointment-generation",
    "topic": "Outbound",
    "author": "Campaign team",
    "readTime": "3 min read",
    "title": "In-House Appointment Generation: The Real 2026 Cost and How to Get It Right",
    "description": "The salary line item for an in-house SDR isn't the real cost. Here's the fuller picture B2B leaders are running in 2026 before building an in-house appointment generation team.",
    "img": "photo-1542744173-8e7e53415bb0",
    "alt": "A sales team meeting around a table",
    "intro": [
      "\"Should we hire an SDR team to book our meetings?\" gets answered too often by looking at a recruiter's salary estimate and nothing else — a number that leaves out most of what in-house appointment generation actually costs. Here's the fuller picture worth running before that decision."
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
        "id": "what-in-house-appointment-generation-gives-you",
        "title": "What in-house appointment generation gives you",
        "blocks": [
          {
            "type": "p",
            "text": "The return on that investment is control and product depth. A rep who sits in your Slack every day builds intuitive product knowledge, hears objections first-hand, and feeds what they learn straight back into messaging, positioning and the ICP itself."
          },
          {
            "type": "p",
            "text": "It also compounds. The playbooks, call recordings, sequences and qualification criteria an in-house team builds stay with the company, and become the foundation for a much larger sales development function later."
          }
        ]
      },
      {
        "id": "the-numbers-that-actually-matter",
        "title": "The numbers that actually matter",
        "blocks": [
          {
            "type": "p",
            "text": "Headcount and salary miss the point. The numbers worth tracking are:"
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
                "text": "How long ramp takes, weighed against how urgent the pipeline need actually is"
              },
              {
                "text": "Lead-to-opportunity conversion rate, tracked over each rep's first 90 days — this is where a slow ramp or a messaging gap shows up clearly"
              },
              {
                "lead": "What your AEs are actually spending time on",
                "text": "If closers are still doing their own prospecting, the team isn't solving the real problem yet"
              }
            ]
          }
        ]
      },
      {
        "id": "how-to-make-an-in-house-team-work",
        "title": "How to make an in-house team work",
        "blocks": [
          {
            "type": "p",
            "text": "In-house appointment generation works best when your ICP is still being discovered, your sales motion is complex enough that product depth matters more than volume, or you're building toward a long-term team that will eventually run a much larger function."
          },
          {
            "type": "p",
            "text": "Give it the conditions to succeed: verified contact data from day one, a documented qualification standard agreed with sales, realistic ramp targets, and a clear career path so the reps you train stay long enough to pay back that investment."
          },
          {
            "type": "p",
            "text": "The honest version of this decision isn't a one-off hire. It's a function you design, measure on qualified pipeline, and revisit as the pipeline need changes."
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
  },
  {
    "slug": "audience-intelligence-explained",
    "topic": "Intent data",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "Audience Intelligence Explained: Spotting High-Intent B2B Accounts Before the Form Fill",
    "description": "Most B2B teams only see intent after a form fill. Here's how audience intelligence surfaces buying signals earlier, and how to act on them without overreaching.",
    "img": "photo-1551288049-bebda4e38f71",
    "alt": "A dashboard showing account engagement signals across channels",
    "intro": [
      "By the time a prospect fills out a form, they've usually been researching for weeks. They've read comparison content, checked pricing pages, maybe asked a peer group for recommendations — and your CRM has none of it. The form fill is the last visible step in a buying journey that was mostly invisible to you. Audience intelligence exists to close that gap: not by predicting intent from a single data point, but by building a fuller picture of who's actually in-market before they raise a hand."
    ],
    "sections": [
      {
        "id": "how-its-different-from-intent-data-alone",
        "title": "How it's different from intent data alone",
        "blocks": [
          {
            "type": "p",
            "text": "Third-party intent data tells you a company is researching topics related to what you sell. That's useful, but it's also thin on its own — it tells you almost nothing about who at that company matters, what they've engaged with directly, or where they sit in a buying committee. Audience intelligence layers that signal with firmographic fit, engagement history across your own channels, and role-level detail, so \"this account is showing intent\" becomes \"these three people at this account, in these roles, have engaged with this specific topic twice this month.\""
          },
          {
            "type": "p",
            "text": "The distinction matters because intent data alone drives a lot of wasted outreach — teams buy an intent feed, get a list of \"surging\" accounts, and blast generic outreach at all of them with no sense of who to actually talk to."
          }
        ]
      },
      {
        "id": "what-good-audience-intelligence-actually-tracks",
        "title": "What good audience intelligence actually tracks",
        "blocks": [
          {
            "type": "list",
            "items": [
              {
                "text": "Content engagement patterns, not just visits — which specific assets someone came back to, and whether they moved from top-of-funnel content into something more evaluative."
              },
              {
                "text": "Role and seniority mapping, so a signal from a VP of Sales carries different weight than the same signal from an individual contributor researching for a report."
              },
              {
                "text": "Cross-channel corroboration — a webinar registration plus a pricing page visit plus a LinkedIn engagement from the same account is a materially stronger signal than any one of those alone."
              },
              {
                "text": "Recency and frequency, since intent decays. An account that showed a burst of activity six weeks ago and nothing since is a different priority than one that's been engaging steadily this week."
              }
            ]
          }
        ]
      },
      {
        "id": "using-it-without-over-investing",
        "title": "Using it without over-investing",
        "blocks": [
          {
            "type": "p",
            "text": "The trap most teams fall into is treating every \"high-intent\" flag as a reason to run full ABM outreach. That's expensive and it doesn't scale. A more workable tiering: accounts with strong, corroborated, recent signal get a personalized, multi-touch sequence; accounts with a single weak signal get added to a lighter nurture track; accounts with no signal stay in general demand gen. Audience intelligence is most valuable as a prioritization layer on top of a program you're already running, not a replacement for having one."
          }
        ]
      },
      {
        "id": "the-bottom-line",
        "title": "The bottom line",
        "blocks": [
          {
            "type": "p",
            "text": "Intent data tells you a company might be looking. Audience intelligence tells you who's looking, how seriously, and what they've actually engaged with — which is the difference between outreach that reads as coincidentally well-timed and outreach that reads as a cold guess. Build the layering before you build the volume."
          }
        ]
      }
    ]
  },
  {
    "slug": "b2b-cold-email-deliverability-2026",
    "topic": "Data",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "Email Deliverability in 2026: Why Your Cold Outbound Is Landing in Spam",
    "description": "Good copy doesn't matter if it never reaches the inbox. Here's what's actually driving B2B cold email deliverability problems in 2026, and the fixes that work.",
    "img": "photo-1557200134-90327ee9fafa",
    "alt": "An email inbox with several messages flagged as spam",
    "intro": [
      "Teams spend weeks on subject lines, sequencing, and personalization, then wonder why replies dried up — without checking whether the emails ever reached an inbox at all. Deliverability is the least glamorous part of outbound and the most common reason a genuinely good campaign underperforms. Mailbox providers got sharper in 2026, and a lot of B2B senders haven't caught up."
    ],
    "sections": [
      {
        "id": "the-infrastructure-problem-most-teams-ignore",
        "title": "The infrastructure problem most teams ignore",
        "blocks": [
          {
            "type": "p",
            "text": "Every sending domain has a reputation, and that reputation is built or damaged by every email sent from it — including ones sent years ago by someone who's no longer at the company. Common, avoidable causes of a damaged reputation:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Sending cold outbound from the primary company domain, so one bad sequence risks the same domain your invoices and support emails rely on."
              },
              {
                "text": "Skipping domain warm-up on a new sending domain — mailbox providers trust volume that ramps gradually, not a domain that goes from zero to a thousand sends a day in week one."
              },
              {
                "text": "Missing or misconfigured SPF, DKIM, and DMARC records, which mailbox providers increasingly treat as a baseline trust signal rather than a nice-to-have."
              },
              {
                "text": "High bounce rates from unverified lists, which is as much a deliverability issue as a data-quality one — every hard bounce tells the receiving server your sender is careless with its list."
              }
            ]
          }
        ]
      },
      {
        "id": "what-actually-restores-inbox-placement",
        "title": "What actually restores inbox placement",
        "blocks": [
          {
            "type": "p",
            "text": "Fixing deliverability is mostly about discipline, not a single silver-bullet setting:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Use dedicated sending domains for cold outbound, separate from your primary domain, so a reputation hit doesn't touch email your whole company depends on."
              },
              {
                "text": "Warm up every new domain and mailbox over 2–4 weeks with gradually increasing, genuinely varied send volume before running it at full campaign pace."
              },
              {
                "text": "Verify every record before it's sent to, not after a bounce report comes back — the point is to never send to a dead or invalid address in the first place."
              },
              {
                "text": "Rotate and monitor sending domains across a pool rather than running everything through one, so no single domain absorbs the full volume of an aggressive campaign."
              },
              {
                "text": "Watch spam complaint rates, not just opens, since open-rate tracking has gotten less reliable since major providers started pre-fetching images — complaint and bounce rates are the more honest signal."
              }
            ]
          }
        ]
      },
      {
        "id": "the-part-thats-easy-to-miss",
        "title": "The part that's easy to miss",
        "blocks": [
          {
            "type": "p",
            "text": "Deliverability isn't a one-time setup. A domain that was warmed up properly six months ago can still slide if send volume spikes suddenly, if list hygiene slips, or if a new team member starts a sequence without checking existing sender limits. Ongoing monitoring — checking blocklist status, complaint rates, and inbox placement on a rolling basis — matters as much as getting the initial setup right."
          }
        ]
      },
      {
        "id": "the-bottom-line",
        "title": "The bottom line",
        "blocks": [
          {
            "type": "p",
            "text": "No amount of copywriting fixes a deliverability problem, because the recipient never sees the copy. If reply rates have dropped and open rates look suspiciously flat across the board, check inbox placement before touching the sequence. The fix is almost always in the infrastructure, not the message."
          }
        ]
      }
    ]
  },
  {
    "slug": "b2b-lead-scoring-model",
    "topic": "Demand gen",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "Lead Scoring Models That Actually Predict Sales-Ready Accounts",
    "description": "Most B2B lead scoring models score activity, not intent to buy. Here's how to build one that actually predicts which accounts are sales-ready.",
    "img": "photo-1526628953301-3e589a6a8b74",
    "alt": "A lead scoring dashboard ranking accounts by readiness",
    "intro": [
      "Most lead scoring models measure the wrong thing well. They track form fills, email opens, and page visits with precision, then add them up into a number that's supposed to mean \"sales-ready\" — but activity isn't intent, and a model built only on activity tends to hand sales a pile of downloaded-the-ebook leads that go nowhere. Building a model that actually predicts readiness takes a different starting point."
    ],
    "sections": [
      {
        "id": "start-from-closed-won-not-from-the-funnel",
        "title": "Start from closed-won, not from the funnel",
        "blocks": [
          {
            "type": "p",
            "text": "The common mistake is designing a scoring model around the stages marketing thinks matter — visited pricing, downloaded a guide, attended a webinar — without ever checking whether those actions actually preceded the deals that closed. The better starting point is to pull your last 12–24 months of closed-won deals and reverse-engineer what those accounts actually did before they became opportunities. Sometimes the strongest predictor is a channel nobody weighted heavily, and sometimes an action everyone assumed mattered — like a whitepaper download — barely correlates with anything."
          }
        ]
      },
      {
        "id": "weight-fit-and-behavior-separately",
        "title": "Weight fit and behavior separately",
        "blocks": [
          {
            "type": "p",
            "text": "A lead score is really two different questions mashed into one number: does this account fit our ICP, and is this account behaving like it's ready to buy? Collapsing both into a single score hides useful information. A model that scores fit and behavior separately lets you route leads more precisely — a perfect-fit account showing early research behavior gets a different treatment than a poor-fit account with high activity, even if their combined scores land in the same range."
          }
        ]
      },
      {
        "id": "build-in-decay",
        "title": "Build in decay",
        "blocks": [
          {
            "type": "p",
            "text": "Intent isn't permanent. An account that engaged heavily two months ago and has gone quiet since is a worse bet than one that engaged moderately this week. Most static scoring models don't account for this — points accumulate and never disappear, so an account can sit at a \"hot\" score long after it's actually cooled off. Adding time decay to behavioral points, so older activity contributes less than recent activity, keeps the score closer to reality."
          }
        ]
      },
      {
        "id": "validate-against-what-sales-actually-says",
        "title": "Validate against what sales actually says",
        "blocks": [
          {
            "type": "p",
            "text": "The model isn't finished at launch. The fastest way to tell whether it's working is to sit with the sales team monthly and compare: which \"sales-ready\" leads did they actually want, and which ones did they immediately disqualify? Patterns show up quickly — certain firmographic combinations that score well but never convert, certain lower-scoring signals that sales says are actually strong indicators. Feed that back into the weighting rather than treating the initial model as fixed."
          }
        ]
      },
      {
        "id": "the-bottom-line",
        "title": "The bottom line",
        "blocks": [
          {
            "type": "p",
            "text": "A lead scoring model earns trust from sales by being right more often than it's wrong, and it stays right by being checked against real outcomes, not left running on assumptions from the day it launched. Score fit and intent separately, weight recent behavior over old behavior, and validate the whole thing against what closed — not just what happened along the way."
          }
        ]
      }
    ]
  },
  {
    "slug": "b2b-webinar-lead-generation-2026",
    "topic": "Demand gen",
    "author": "Research team",
    "readTime": "3 min read",
    "title": "B2B Webinars in 2026: Turning Registrants Into Pipeline",
    "description": "A packed registrant list means nothing if nobody shows up ready to buy. Here's how B2B teams are running webinars that actually produce pipeline in 2026.",
    "img": "photo-1540575467063-178a50c2df87",
    "alt": "A B2B webinar presentation with an engaged live audience panel",
    "intro": [
      "A webinar with 400 registrants sounds like a win right up until the show-up rate comes in under 20% and most of those attendees turn out to be existing customers who registered out of habit. Registrant count is the easiest webinar metric to report and the least connected to pipeline. The teams still getting real meetings out of webinars in 2026 have stopped optimizing for the number that looks good in a recap deck."
    ],
    "sections": [
      {
        "id": "promote-to-the-right-list-not-the-biggest-one",
        "title": "Promote to the right list, not the biggest one",
        "blocks": [
          {
            "type": "p",
            "text": "The instinct is to blast the invite to the whole database, because more registrants feels like more opportunity. In practice, a promotion list weighted toward your actual ICP — even if it's smaller — produces more usable pipeline than a broad blast padded with people who will never buy. If your registrant list looks a lot like your customer list plus a stack of students and job-seekers, the promotion targeting is the problem, not the topic."
          }
        ]
      },
      {
        "id": "design-the-content-for-buyers-not-for-attendance",
        "title": "Design the content for buyers, not for attendance",
        "blocks": [
          {
            "type": "p",
            "text": "Webinars that pull a wide, low-intent audience tend to have broad,101-level titles. Webinars that pull a narrower, higher-intent audience tend to get specific — a named problem, a named methodology, sometimes a customer walking through their own numbers. The narrower version will always register fewer people. It will also convert a meaningfully higher share of them into sales conversations, because the people who show up chose to be there for a reason that matches what you sell."
          }
        ]
      },
      {
        "id": "treat-no-shows-and-attendees-as-two-different-follow-up-tracks",
        "title": "Treat no-shows and attendees as two different follow-up tracks",
        "blocks": [
          {
            "type": "p",
            "text": "This is where most of the lost pipeline actually happens. Sending every registrant the same generic \"thanks for attending\" recap ignores that no-shows and attendees are different audiences with different next steps:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Attendees who stayed to the end are your highest-priority follow-up — a direct, personal outreach referencing what they specifically asked or reacted to, sent within a day or two."
              },
              {
                "text": "Attendees who dropped early registered enough interest to show up, but something didn't hold them — worth a lighter follow-up with the specific segment of content they saw."
              },
              {
                "text": "No-shows are not dead leads. Routing them into their own short sequence, with the recording and a specific reason to still engage, regularly recovers a meaningful share of registrants who had real intent but a scheduling conflict."
              }
            ]
          }
        ]
      },
      {
        "id": "measure-meetings-booked-not-registrant-count",
        "title": "Measure meetings booked, not registrant count",
        "blocks": [
          {
            "type": "p",
            "text": "If the only number reported after a webinar is registrants, the program will keep optimizing for registrants. Reporting meetings booked, opportunities created, and pipeline sourced — even if those numbers are smaller and less impressive in a slide — is what keeps the program pointed at revenue instead of vanity attendance."
          }
        ]
      },
      {
        "id": "the-bottom-line",
        "title": "The bottom line",
        "blocks": [
          {
            "type": "p",
            "text": "A webinar isn't a lead gen channel by itself — it's a moment that creates a reason to follow up, and the follow-up is where the pipeline actually gets built. Promote narrower, design for the buyer instead of the crowd, and split your follow-up by whether someone showed up, not just whether they registered."
          }
        ]
      }
    ]
  },
  {
    "slug": "linkedin-outbound-2026",
    "topic": "Outbound",
    "author": "Campaign team",
    "readTime": "3 min read",
    "title": "LinkedIn Outbound in 2026: Does Social Selling Actually Convert for B2B?",
    "description": "LinkedIn connection limits and algorithm changes shifted reply rates in 2026. Here's what's actually converting in B2B social selling, and how it pairs with email.",
    "img": "photo-1563986768609-322da13575f3",
    "alt": "A sales rep reviewing LinkedIn outreach on a laptop",
    "intro": [
      "Every SDR team has a LinkedIn Sales Navigator seat nobody's quite sure is earning its cost. Connection requests go out, a handful get accepted, fewer still turn into replies, and almost nobody can say what it actually produced last quarter. Meanwhile LinkedIn keeps tightening what an automated-feeling outbound motion can do on the platform. So does social selling still convert, or is it running on inertia?"
    ],
    "sections": [
      {
        "id": "what-actually-changed",
        "title": "What actually changed",
        "blocks": [
          {
            "type": "p",
            "text": "LinkedIn has steadily lowered tolerance for anything that looks like scripted volume: weekly connection caps are stricter, InMail response tracking is more visible to the recipient, and generic \"congrats on the new role\" openers get reported as spam more than they used to. The platforms that once let three-tool stacks run semi-automated sequences have been cut off one by one. The net effect is that LinkedIn in 2026 rewards fewer, better-targeted touches over high-volume campaigns — which is a real shift in what \"using LinkedIn for outbound\" actually means."
          }
        ]
      },
      {
        "id": "where-its-working",
        "title": "Where it's working",
        "blocks": [
          {
            "type": "p",
            "text": "The accounts still getting real pipeline from LinkedIn aren't running connection-request blasts. They're doing three specific things:"
          },
          {
            "type": "list",
            "items": [
              {
                "text": "Warm the account before the ask. A comment on a prospect's post, a share of something genuinely relevant to their role, or engagement with their company page — a week or two before the connection request — roughly doubles acceptance rates compared to cold requests with no prior signal."
              },
              {
                "text": "Personalize the reason, not the name. \"Saw your team is hiring three AEs — curious how you're ramping pipeline to match\" converts differently than a templated line with a mail-merge field swapped in. The bar for what reads as personalized has moved up."
              },
              {
                "text": "Use it as a research and warm-up layer, not the closer. Teams getting the best results treat LinkedIn as where a buyer notices you exist, and move the actual qualifying conversation to email or a call once there's a reason to."
              }
            ]
          }
        ]
      },
      {
        "id": "where-its-still-a-waste-of-budget",
        "title": "Where it's still a waste of budget",
        "blocks": [
          {
            "type": "p",
            "text": "Automated connection-request tools that spray hundreds of invites a week are increasingly getting accounts restricted, and the reply rates on that volume were already thin. Cold InMail with no context performs worse than a well-sequenced cold email, largely because recipients now expect LinkedIn messages to be even less personalized than their inbox — so the bar to stand out is lower, but so is the benefit of the doubt they'll give you."
          }
        ]
      },
      {
        "id": "the-multi-channel-case",
        "title": "The multi-channel case",
        "blocks": [
          {
            "type": "p",
            "text": "LinkedIn rarely wins on its own. The pattern that shows up in the data across mid-market B2B programs is a coordinated sequence: a relevant comment or connection on LinkedIn, followed by an email that references it directly, followed by a call if there's no response. Each channel covers for the others — someone who ignores your email might still notice a LinkedIn touch from the same name a few days later, and vice versa. Treating LinkedIn as one lane in that sequence, rather than a standalone channel with its own quota, is what separates the programs that produce meetings from the ones that produce vanity connection counts."
          }
        ]
      },
      {
        "id": "the-bottom-line",
        "title": "The bottom line",
        "blocks": [
          {
            "type": "p","text": "LinkedIn social selling isn't dead, but the version of it that worked in 2022 — volume connection requests plus a templated opener — is close to it. What still converts is a smaller number of genuinely researched touches, used to warm an account before email or a call does the actual qualifying. If your LinkedIn motion is measured only in connections sent, you're measuring the wrong thing."
          }
        ]
      }
    ]
  }
];

export function articleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
