// @ts-nocheck
/* eslint-disable */
import type { Metadata } from "next";
import localFont from 'next/font/local'
import Stuff from "./layout_stuff_FINAL_v2";
import "./globals.css";
import React from "react"

// font (satoshi)
const f = localFont({ src: "./fonts/Satoshi-Variable.woff2", variable: "--font-satoshi", weight: "300 900", display: "swap" });

var u = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidespy.com").replace(/\/+$/, "")
const n = "Lidespy"
let desc = "Lidespy is a B2B demand generation agency delivering qualified leads, booked meetings and measurable pipeline through content syndication, ABM, intent data and appointment generation.";

// ✅ SEO optimized metadata
export const metadata: Metadata = {
  metadataBase: new URL(u),
  title: `${n} · B2B Demand Generation & Lead Generation Agency`,
  description: desc,
  applicationName: n,
  authors: [{ name: n, url: u }],
  creator: n, publisher: n,
  category: "Business",
  keywords: ["B2B demand generation", "B2B lead generation", "content syndication", "account-based marketing", "ABM", "intent data", "appointment setting", "MQL", "SQL", "pipeline generation"],
  openGraph: { type: "website", siteName: n, locale: "en_US", title: `${n} · B2B Demand Generation`, description: desc, images: [{ url: "/lidespy-logo.png", width: 997, height: 304, alt: n }] },
  twitter: { card: "summary_large_image", title: n + " · B2B Demand Generation", description: desc, images: ["/lidespy-logo.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
  formatDetection: { telephone: false, address: false, email: false },
};

// TODO: move this somewhere
const data = [
  {
    "@context": "https://schema.org", "@type": "Organization", "@id": `${u}/#organization`, name: n, url: u,
    logo: `${u}${"/lidespy-logo.png"}`,
    slogan: "Leads That Drive Growth", description: desc, email: "info@lidespy.com",
    sameAs: ["https://www.linkedin.com/company/lidespy/"],
    address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
    areaServed: "Worldwide",
    knowsAbout: ["B2B demand generation", "Content syndication", "Account-based marketing", "Intent data", "Email marketing", "Appointment generation", "Go-to-market strategy"],
    contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "info@lidespy.com", url: u + "/contact", availableLanguage: ["English"] },
  },
  { "@context": "https://schema.org", "@type": "WebSite", "@id": `${u}/#website`, name: n, url: u, inLanguage: "en", publisher: { "@id": `${u}/#organization` } },
]

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={`${f.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col bg-cream text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
        {children}
        <Stuff w={2} />
        <Stuff w={1} />
      </body>
    </html>
  );
}
