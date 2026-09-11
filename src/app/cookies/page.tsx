import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/LegalDoc";

export const metadata: Metadata = {
  alternates: { canonical: "/cookies" },
  title: "Cookie Policy · Lidespy",
  description:
    "What cookies and similar technologies Lidespy uses on lidespy.com, why we use them, and how to control them.",
};

const SECTIONS: Section[] = [
  {
    id: "what",
    title: "What cookies are",
    blocks: [
      {
        p: "Cookies are small text files placed on your device when you visit a website. They let a site remember your actions and preferences, and they help the operator understand how the site is used. We also use similar technologies — local storage, pixels and tracking tags — and refer to all of them as “cookies” in this policy.",
      },
      {
        p: "Session cookies are deleted when you close your browser. Persistent cookies stay until they expire or you delete them. First-party cookies are set by lidespy.com; third-party cookies are set by a service we embed, such as an analytics or advertising provider.",
      },
    ],
  },
  {
    id: "categories",
    title: "The cookies we use",
    blocks: [
      {
        table: {
          head: ["Category", "Purpose", "Consent", "Typical lifetime"],
          rows: [
            [
              "Strictly necessary",
              "Page routing, load balancing, security, form submission and remembering your cookie choices. The site cannot work without these.",
              "Not required",
              "Session – 12 months",
            ],
            [
              "Preferences",
              "Remembering settings such as language and inputs you have entered into the campaign budget calculator.",
              "Required",
              "Up to 12 months",
            ],
            [
              "Analytics",
              "Understanding which pages and resources are used, how visitors arrive, and where journeys break down, in aggregate.",
              "Required",
              "Up to 26 months",
            ],
            [
              "Marketing",
              "Measuring campaign performance, attributing enquiries to a source, and showing relevant ads on third-party platforms.",
              "Required",
              "Up to 13 months",
            ],
          ],
        },
      },
      {
        p: "The exact cookies set can change as we add or remove tools. Your browser's developer tools will always show the current list for your session.",
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-party cookies",
    blocks: [
      {
        p: "Some cookies are set by providers we use to run and measure the site — for example web analytics, advertising and conversion measurement on business networks, embedded video, and form or scheduling tools. These providers may combine what they collect here with data they hold from other sites.",
      },
      {
        p: "We do not control third-party cookies, and their use of the data is governed by their own privacy notices. Blocking them through our consent banner or your browser prevents them from being set.",
      },
    ],
  },
  {
    id: "consent",
    title: "Your consent choices",
    blocks: [
      {
        p: "Where required by law, non-essential cookies are set only after you consent through our cookie banner. You can change or withdraw your choice at any time by reopening the banner from this page, or by clearing cookies for lidespy.com in your browser.",
      },
      {
        p: "Withdrawing consent does not affect processing already carried out on the basis of your earlier consent, and strictly necessary cookies remain in place because the site cannot function without them.",
      },
    ],
  },
  {
    id: "browser-controls",
    title: "Browser and device controls",
    blocks: [
      {
        p: "Every major browser lets you see which cookies are stored, delete them and block them:",
      },
      {
        ul: [
          "Chrome — Settings › Privacy and security › Third-party cookies.",
          "Safari — Settings › Privacy › Manage website data.",
          "Firefox — Settings › Privacy & Security › Cookies and Site Data.",
          "Edge — Settings › Cookies and site permissions.",
        ],
      },
      {
        p: "Blocking all cookies will break parts of the site, including form submission and the campaign budget calculator. You can also opt out of interest-based advertising through youradchoices.com or youronlinechoices.eu, and most browsers offer a Global Privacy Control or Do Not Track signal, which we honour where the law requires it.",
      },
    ],
  },
  {
    id: "related",
    title: "How this relates to our Privacy Policy",
    blocks: [
      {
        p: "Cookies can collect personal data such as an IP address or an online identifier. How we use that data, who we share it with, how long we keep it and what rights you have are set out in our Privacy Policy, which should be read alongside this page.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      {
        p: "We update this policy when the cookies we use change or when the law requires it. The date at the top of this page shows the last revision, and material changes will be surfaced through the cookie banner before they take effect.",
      },
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Cookie Policy"
      lead="What cookies and similar technologies we use on lidespy.com, why we use them, and how you can control them."
      updated="1 September 2026"
      sections={SECTIONS}
      current="/cookies"
    />
  );
}
