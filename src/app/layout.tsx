import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { satoshi } from "./fonts";
import "./globals.css";

const DESCRIPTION =
  "Lidespy is a B2B demand generation agency delivering qualified leads, booked meetings and measurable pipeline through content syndication, ABM, intent data and appointment generation.";

/**
 * Site-wide defaults. Each page sets its own title, description and canonical;
 * everything here is what a page inherits when it does not say otherwise.
 * The canonical is deliberately not set at this level — a layout canonical
 * would be inherited by every page that forgot its own and point them all
 * at the home page.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} · B2B Demand Generation & Lead Generation Agency`,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Business",
  keywords: [
    "B2B demand generation",
    "B2B lead generation",
    "content syndication",
    "account-based marketing",
    "ABM",
    "intent data",
    "appointment setting",
    "MQL",
    "SQL",
    "pipeline generation",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: `${SITE_NAME} · B2B Demand Generation`,
    description: DESCRIPTION,
    images: [{ url: "/lidespy-logo.png", width: 997, height: 304, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · B2B Demand Generation`,
    description: DESCRIPTION,
    images: ["/lidespy-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

/** Who Lidespy is — the entity answer engines attach every page to. */
const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/lidespy-logo.png"),
  slogan: "Leads That Drive Growth",
  description: DESCRIPTION,
  email: "info@lidespy.com",
  sameAs: ["https://www.linkedin.com/company/lidespy/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "B2B demand generation",
    "Content syndication",
    "Account-based marketing",
    "Intent data",
    "Email marketing",
    "Appointment generation",
    "Go-to-market strategy",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@lidespy.com",
    url: absoluteUrl("/contact"),
    availableLanguage: ["English"],
  },
};

const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col bg-cream text-ink">
        <JsonLd data={[ORGANIZATION, WEBSITE]} />
        {children}
      </body>
    </html>
  );
}
