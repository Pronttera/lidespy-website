/** Brand strings, shared CTA labels and the site chrome (nav + footer). */

export const BRAND = {
  name: "Lidespy",
  tagline: "Leads That Drive Growth",
  email: "info@lidespy.com",
  linkedin: "LinkedIn",
  linkedinHref: "https://www.linkedin.com/company/lidespy/",
  logoAlt: "Lidespy",
};

/** CTA and micro-copy repeated across several pages. */
export const ACTIONS = {
  bookStrategyCall: "Book a strategy call",
  bookCall: "Book a call",
  contactUs: "Contact us",
  learnMore: "Learn more →",
  viewAll: "View all →",
  seeOurWork: "See our work",
  explore: "Explore",
  read: "Read",
};

export const NAV_UI = {
  toggle: "Toggle navigation",
  expand: "Expand",
  collapse: "Collapse",
  bookCall: ACTIONS.bookCall,
  contactUs: ACTIONS.contactUs,
  bookStrategyCall: ACTIONS.bookStrategyCall,
};

export const FOOTER = {
  blurb:
    "B2B demand generation for technology, SaaS and enterprise revenue teams. Headquartered in Pune, India. Serving clients globally.",
  copyright: "© 2026 Lidespy. All rights reserved.",
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  columns: [
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
        { label: "Case Studies", href: "Case Studies.dc.html" },
        { label: "Campaign Budget Calculator", href: "Calculator.dc.html" },
        { label: "Contact Us", href: "Contact.dc.html" },
      ],
    },
  ] as {
    title: string;
    links: { label: string; href: string; accent?: boolean }[];
  }[],
};
