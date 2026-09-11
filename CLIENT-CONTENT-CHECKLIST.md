# Lidespy website: what we need from the client

Everything below is placeholder or unverified content that is on the site right now.
Each item lists the file it lives in, so it can be swapped in as soon as it arrives.

**Priority key:** 🔴 Must have before launch · 🟠 Should have · 🟢 Nice to have

---

## 1. Team data 🔴
Currently: 4 stock Unsplash photos with job titles and no names.
File: `src/i18n/dictionaries/en/about.ts` → `team.members`

For **each** team member:
- [ ] Full name
- [ ] Job title / role (e.g. "Head of Research")
- [ ] Short focus line (e.g. "Audience intelligence & data")
- [ ] Location (city)
- [ ] Professional headshot: min 700×900px, portrait, same background/lighting across the team
- [ ] LinkedIn profile URL (optional)
- [ ] 1–2 line bio (optional)
- [ ] Confirm how many people to show (currently 4 slots)
- [ ] Group / office photo for the About hero (`hero.imageAlt: "The Lidespy team"`)
- [ ] Careers link or email for the "Join the team" button

## 2. Client testimonials 🔴
Currently: every quote says "Testimonial placeholder" with the name "Name".
Files: `src/i18n/dictionaries/en/home.ts` → `QUOTES`, `HOME_COPY.featuredQuote`; `src/i18n/dictionaries/en/why.ts` → `quote`

- [ ] **4 short testimonials** (1–2 sentences each), ideally covering these topics:
  - Data quality / low bounce rate (CRO, SaaS)
  - GDPR / legal sign-off (VP Marketing, Fintech)
  - Meeting quality and show rate (Head of Sales, Technology)
  - Reporting / named partner (RevOps Lead, B2B services)
- [ ] **1 featured client story** (2–3 sentences) plus 2 headline stats from that client
- [ ] **1 quote** about consolidating vendors into a Lidespy retainer (Why Lidespy page)
- For each: person's name, job title, company, headshot (square, min 300×300px)
- [ ] **Written permission** from each client to publish their name, photo and quote. If they won't allow names, tell us the anonymised format to use (e.g. "VP Marketing, Series B Fintech")

## 3. Client logos 🔴
Currently: "Client 01" … "Client 08" text placeholders.
File: `src/i18n/dictionaries/en/home.ts` → `LOGOS`

- [ ] 6–12 client logos, **SVG preferred** (or transparent PNG, min 400px wide)
- [ ] Written permission to display each logo

## 4. Case studies 🔴
Currently: 6 case studies with specific numbers. We need to confirm they are real.
File: `src/i18n/dictionaries/en/case-studies.ts`

The page says *"No composite clients, no rounded-up results"*, so every number has to be accurate.
For each of the 6 studies (SaaS database rebuild, EU GDPR outbound, APAC ABM, FinTech cleanse, webinar series, healthcare launch):
- [ ] Confirm it is a real engagement, or send a replacement
- [ ] Confirm or correct the 3 result metrics (e.g. "48k verified records", "$2.1M pipeline")
- [ ] Client name, or say whether it has to stay anonymous
- [ ] Challenge → what was built → outcome (a short paragraph each)
- [ ] Optional: a quote and a logo per study

## 5. Company stats & claims 🔴
These numbers appear across the site. Please confirm each one or send the correct figure.

| Claim | Where |
|---|---|
| 500+ campaigns executed | About, Why, Case studies |
| 50+ clients served | About |
| 12+ industries served | About, Case studies |
| 50+ countries covered | About, Why |
| 1,200k verified records delivered | Home |
| 4,800+ qualified meetings booked | Home |
| 1.8% average bounce rate | Home, Case studies |
| 98% contactable rate on delivered data | Why |
| 6 weeks to first booked meetings | Why |
| 312% average pipeline lift (first two quarters) | Why |
| 41% reduction in cost per qualified meeting | Why |
| $2.1M largest single-program pipeline | Case studies |

**Service guarantees** (Why page; these read as contractual promises, so they need sign-off):
- [ ] ≤2% hard bounce, or re-run at Lidespy's cost
- [ ] 100% ICP match, or the lead is replaced
- [ ] 48h lead delivery window
- [ ] 1:1 no-show replacement
- [ ] Weekly reporting
- [ ] 30-day notice on retainers, no annual lock-in

**Credentials** (Home hero):
- [ ] ISO 9001:2015 certificate: copy of the certificate plus certificate number
- [ ] "Est. 2023 · LLP": confirm the year and the legal entity type

## 6. Company & legal details 🔴
Files: `src/i18n/dictionaries/en/common.ts`, `src/app/privacy|terms|cookies/page.tsx`

- [ ] Registered legal entity name (e.g. "Lidespy XYZ LLP") and LLPIN / registration number
- [ ] Registered office address (Pune)
- [ ] Contact email: confirm `info@lidespy.com`, plus a separate privacy/DPO email if they have one
- [ ] Phone number (with country code), if it should be shown
- [ ] Business hours / time zone
- [ ] Social links: LinkedIn (currently `linkedin.com/company/lidespy/`) and any others (X, YouTube…)
- [ ] GST number, if it should be shown in the footer
- [ ] **Legal review of Privacy Policy, Terms and Cookie Policy.** Current effective date is 1 Sept 2026, and the Terms name Indian law and Pune courts. A lawyer should approve these.
- [ ] List of sub-processors / third-party tools they use (CRM, email platform, data vendors) for the Privacy Policy
- [ ] GDPR representative in the EU/UK, if they have one

## 7. Calculator pricing 🔴
File: `src/lib/calculator.ts`

The calculator shows live price estimates to prospects, so the client must approve every number:
- [ ] **Cost per lead** by campaign type: Content Syndication $65, ABM $190, Email $48, Webinar $95, Appointment $380
- [ ] **Region multipliers:** NA 1.0, Europe 1.1, APAC 0.85, Middle East 1.0, Global 1.05
- [ ] **Industry multipliers + average deal size** (e.g. Cybersecurity 1.2× / $45k)
- [ ] **Company-size multipliers** (0.85× for 1–10 employees up to 1.25× for 5,000+)
- [ ] **Lead-type multipliers + lead-to-opportunity rates:** HQL 1.0× / 10%, MQL 1.4× / 14%, SQL 2.4× / 30%
- [ ] The ±15% range shown on budgets. Is that the right spread?
- [ ] Should prices be shown at all, or only "from $X"?
- [ ] Currency: USD only, or also INR/EUR/GBP?

## 8. Contact form & integrations 🔴
File: `src/app/contact/ContactForm.tsx` (the form **does not send anywhere yet**)

- [ ] Where submissions should go: email address(es), CRM (HubSpot / Salesforce / Zoho…) or both
- [ ] CRM API access or form embed details, if CRM
- [ ] Booking link (Calendly / HubSpot Meetings) for "Book a free strategy call"
- [ ] Auto-reply email wording, if they want one
- [ ] Google Analytics 4 / Google Tag Manager IDs
- [ ] LinkedIn Insight Tag, Meta Pixel, or other tracking
- [ ] Cookie consent tool preference (needed once tracking is added)

## 9. Blog content 🟠
Files: `src/i18n/dictionaries/en/blog.ts`, `blog-articles.ts`, `home.ts` → `POSTS`

We have **12 blog drafts** (`12 Blogs/*.docx`). Current listing cards are placeholder titles by "Research team" with stock images.
- [ ] Confirm the 12 drafts are final and approved to publish
- [ ] Author name + photo per post (or approve "Lidespy research team")
- [ ] Publish date per post
- [ ] Featured / cover image per post, or approval to use stock images
- [ ] Categories/tags they want to use

## 10. Brand assets 🟠
Currently in `public/`: `lidespy-logo.png` only.

- [ ] Logo in **SVG** (full colour, white/reversed, and icon-only versions)
- [ ] Favicon / app icon (square, min 512×512px)
- [ ] Brand guidelines: colours, fonts (site currently uses Satoshi)
- [ ] Social share image (1200×630px) for link previews
- [ ] Office photos or real campaign/team photos to replace the stock photos on the Home hero video, Challenge section and service pages

## 11. Services, industries & resources copy review 🟢
Files: `services.ts`, `service-pages.ts`, `industries.ts`, `industry-pages.ts`, `objectives.ts`, `resources.ts`, `resource-pages.ts`

- [ ] Review the 12 service pages. Are all 12 services actually offered?
- [ ] Review the industry pages. Remove any industry they don't serve
- [ ] Downloadable resources (guides, checklists, templates): real PDF files for anything listed in the Resources library
- [ ] Engagement models (project / retainer / performance-based): confirm, plus any starting prices
- [ ] FAQ answers on the Why page: confirm timelines and processes are accurate

## 12. Domain & hosting 🟢
- [ ] Domain registrar access or DNS records for `lidespy.com`
- [ ] Hosting preference (Vercel recommended) and who owns the account
- [ ] Business email setup for form notifications (SPF/DKIM)
- [ ] Google Search Console access

---

### Quick summary to send the client
> To launch, we need: **team names, photos and roles**; **real testimonials and client logos (with permission)**; **confirmation of all stats and case study numbers**; **legal entity details and a legal review of the policies**; **approval of the calculator pricing**; **where contact form leads should go**; and **final blog content with authors and dates**.
