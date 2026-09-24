// @ts-nocheck
/* eslint-disable */
export const dynamic = "force-static";

// robots
export default function robots(): any {
  var x = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidespy.com").replace(/\/+$/, "")
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/_next/", "/api/"] }], sitemap: x + "/sitemap.xml", host: x }
}
