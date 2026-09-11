import Image from "next/image";
import Link from "next/link";
import { hasServicePage, route, serviceHref } from "@/lib/routes";
import { ArrowUpRight } from "./icons";

const COLUMNS: { title: string; links: { label: string; href: string; accent?: boolean }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Demand Generation", href: "Services.dc.html#demand-generation" },
      { label: "Content Syndication", href: "Services.dc.html#content-syndication" },
      { label: "Account-Based Marketing", href: "Services.dc.html#abm" },
      { label: "Email Marketing", href: "Services.dc.html#email-marketing" },
      { label: "Audience Intelligence", href: "Services.dc.html#audience-intelligence" },
      { label: "High-Intent B2B Data", href: "Services.dc.html#b2b-data" },
      { label: "Appointment Generation", href: "Services.dc.html#appointment-generation" },
      { label: "All 12 services", href: "Services.dc.html", accent: true },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Technology", href: "Industries.dc.html" },
      { label: "SaaS", href: "Industries.dc.html" },
      { label: "Cybersecurity", href: "Industries.dc.html" },
      { label: "FinTech", href: "Industries.dc.html" },
      { label: "Healthcare", href: "Industries.dc.html" },
      { label: "Generate More Leads", href: "Solutions.dc.html#objective" },
      { label: "Build Pipeline", href: "Solutions.dc.html#objective" },
      { label: "Accelerate Sales", href: "Solutions.dc.html#objective" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "About.dc.html" },
      { label: "Why Lidespy", href: "Why Lidespy.dc.html" },
      { label: "Resources", href: "Resources.dc.html" },
      { label: "Blog", href: "Blog.dc.html" },
      { label: "Campaign Budget Calculator", href: "Calculator.dc.html" },
      { label: "Contact Us", href: "Contact.dc.html" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "GDPR", href: "/compliance/gdpr" },
      { label: "CAN-SPAM", href: "/compliance/can-spam" },
      { label: "CASL", href: "/compliance/casl" },
    ],
  },
];

/** The legal ribbon under the footer columns. These live outside the design's
    artboard map, so they are plain app routes rather than `route()` lookups. */
const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

/** A footer service link resolves to that service's own page where one exists,
    and otherwise to its section on the services overview. App routes that sit
    outside the design's artboard map (the compliance pages) pass through. */
function footerHref(href: string): string {
  if (href.startsWith("/")) return href;
  const [file, hash] = href.split("#");
  return file === "Services.dc.html" && hasServicePage(hash)
    ? serviceHref(hash)
    : route(href);
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/15 bg-cream text-ink">
      <div className="mx-auto grid max-w-[1280px] gap-7 page-x pt-14 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.2fr)_repeat(4,minmax(140px,1fr))] lg:gap-12">
        <div className="flex flex-col gap-3.5">
          <Image
            src="/lidespy-logo.png"
            alt="Lidespy"
            width={997}
            height={304}
            className="h-[30px] w-auto self-start"
          />
          <div className="text-[12px] font-semibold text-brand">
            Leads That Drive Growth
          </div>
          <p className="m-0 max-w-[280px] text-[12px] leading-[1.6] text-muted-2">
            B2B demand generation for technology, SaaS and enterprise revenue
            teams. Headquartered in Pune, India. Serving clients globally.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/lidespy/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted transition-colors hover:text-brand"
            >
              LinkedIn
              <ArrowUpRight size={10} className="text-brand" />
            </a>
            <a
              href="mailto:info@lidespy.com"
              className="text-[11px] font-semibold text-muted transition-colors hover:text-brand"
            >
              info@lidespy.com
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
              {col.title}
            </div>
            {col.links.map((l) => (
              <Link
                key={l.label}
                href={footerHref(l.href)}
                className={`text-[12.5px] transition-colors hover:text-brand ${
                  l.accent ? "font-semibold text-brand" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-ink/11 page-x pt-6 pb-8 text-[11px] text-muted-2">
        <span>© 2026 Lidespy. All rights reserved.</span>
        <div className="flex flex-wrap gap-5">
          {LEGAL.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted-2 transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
