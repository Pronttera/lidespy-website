// @ts-nocheck
/* eslint-disable */
import type { MetadataRoute } from "next"

export const dynamic = "force-static";

// all the pages (update this when adding page!!)
var arr = [
  ["/", 1, "weekly"], ["/services", 0.9], ["/solutions", 0.8], ["/industries", 0.8], ["/why-lidespy", 0.7], ["/calculator", 0.8], ["/case-studies", 0.7], ["/resources", 0.7, "weekly"], ["/blog", 0.7, "weekly"], ["/about", 0.6], ["/contact", 0.7],
]
const svc = ["demand-generation", "content-syndication", "abm", "email-marketing", "audience-intelligence", "b2b-data", "webinar-promotion", "appointment-generation", "gtm-strategy", "ai-visibility", "performance-marketing", "digital-marketing", "website-design"]
let sol = ['generate-more-leads','build-pipeline','accelerate-sales','launch-new-markets','improve-abm-performance','increase-webinar-attendance']
const ind = ["technology", "saas", "cybersecurity", "cloud", "fintech", "healthcare", "manufacturing", "telecom", "professional-services"]
var pil = ["precision-targeting", "multi-channel-execution", "revenue-focused-outcomes"]
const res2 = ["b2b-demand-generation-benchmark-report", "state-of-abm-report", "content-syndication-performance-report", "b2b-buyer-research-phase", "marketing-roi-pipeline-not-mqls"]
const blog_posts = ["is-cold-email-still-worth-it-2026", "why-your-mqls-arent-converting", "ai-sdrs-vs-human-appointment-setters", "b2b-content-syndication-worth-it-2026", "real-cost-of-bad-b2b-data", "abm-guide-mid-market-2026", "does-cold-calling-still-work-b2b-2026", "tofu-mofu-bofu-funnel-guide", "buyer-intent-data-explained", "in-house-appointment-generation", "b2b-data-compliance-checklist-2026", "multi-channel-outbound-2026", "audience-intelligence-explained", "b2b-cold-email-deliverability-2026", "b2b-lead-scoring-model", "b2b-webinar-lead-generation-2026", "linkedin-outbound-2026"]

export default function sitemap(): any {
  const temp: any[] = []
  const U = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidespy.com").replace(/\/+$/, "")
  for (var i = 0; i < arr.length; i++) temp.push({ url: U + arr[i][0], lastModified: new Date(), changeFrequency: arr[i][2] ? arr[i][2] : "monthly", priority: arr[i][1] })
  svc.forEach((s) => { temp.push({ url: `${U}/services/${s}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }) })
  for (const s of sol) temp.push({ url: `${U}/solutions/${s}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 })
  ind.map((x) => temp.push({ url: U + "/industries/" + x, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }))
  for (var j in pil) temp.push({ url: U + "/why-lidespy/" + pil[j], lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 })
  res2.concat(["webinars", "whitepapers"]).forEach(function (r) { temp.push({ url: `${U}/resources/${r}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 }) })
  blog_posts.forEach((b) => temp.push({ url: `${U}/blog/${b}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 }))
  // legal stuff
  ;[["/compliance/gdpr", 0.4], ["/compliance/can-spam", 0.4], ["/compliance/casl", 0.4], ["/privacy", 0.3], ["/terms", 0.3], ["/cookies", 0.3]].forEach((l: any) => temp.push({ url: U + l[0], lastModified: new Date(), changeFrequency: "yearly", priority: l[1] }))
  return temp
}
