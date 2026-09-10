import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service · Lidespy",
  description:
    "The terms governing use of the Lidespy website and the delivery of our B2B demand generation services.",
};

const SECTIONS: Section[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    blocks: [
      {
        p: "These terms govern your use of lidespy.com and any tools, calculators, downloads or content we make available on it. By using the site you accept these terms. If you are accepting on behalf of an organisation, you confirm you have authority to bind it.",
      },
      {
        p: "Paid services are governed by a separate signed agreement, statement of work or insertion order. Where that document conflicts with these terms, the signed document takes precedence for the services it covers.",
      },
    ],
  },
  {
    id: "services",
    title: "Our services",
    blocks: [
      {
        p: "Lidespy provides B2B demand generation services including demand generation, content syndication, account-based marketing, email marketing, audience intelligence, high-intent B2B data and appointment generation. Scope, volumes, qualification criteria, delivery schedule and pricing are set out in the applicable statement of work.",
      },
      {
        p: "We may improve or change our methods, vendors and tooling, provided the agreed deliverables and qualification criteria are met.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use of the site",
    blocks: [
      { p: "When using the site, you agree not to:" },
      {
        ul: [
          "Scrape, harvest or systematically extract content, data or contact details.",
          "Attempt to gain unauthorised access to any part of the site, its systems or its underlying infrastructure.",
          "Interfere with the site's operation, including by introducing malware or overloading it with automated requests.",
          "Submit false, misleading or third-party contact details without authority.",
          "Use the site or our content to build or train a competing product or dataset.",
        ],
      },
    ],
  },
  {
    id: "leads",
    title: "Leads, delivery and qualification",
    blocks: [
      {
        p: "Leads are delivered against the qualification criteria agreed in the statement of work — for example title, company size, geography, technology or intent signal. Leads are verified before delivery, and clients may raise a replacement request within the review window stated in the statement of work, typically ten business days.",
      },
      {
        p: "Where a lead is found not to meet the agreed criteria, our remedy is replacement of that lead. We do not guarantee that any lead will convert to an opportunity, a meeting or revenue, because outcomes depend on your own follow-up, offer and sales process.",
      },
    ],
  },
  {
    id: "client-obligations",
    title: "Client obligations",
    blocks: [
      {
        ul: [
          "Provide accurate campaign inputs, target criteria, approved assets and brand guidance in a timely way.",
          "Hold all rights necessary in any content, trademarks or data you supply to us for use in a campaign.",
          "Use delivered leads only for the purpose agreed, and in compliance with applicable privacy and marketing law, including honouring opt-out requests.",
          "Do not resell, sublicense or redistribute delivered lead data to third parties without our written consent.",
        ],
      },
    ],
  },
  {
    id: "fees",
    title: "Fees and payment",
    blocks: [
      {
        p: "Fees, currency, billing cadence and payment terms are set out in the applicable statement of work or insertion order. Unless stated otherwise, invoices are payable within 30 days of the invoice date, and fees are exclusive of taxes, withholding and bank charges, which are your responsibility.",
      },
      {
        p: "Late payments may accrue interest at the lower of 1.5% per month or the maximum permitted by law, and we may suspend delivery on undisputed overdue amounts after written notice.",
      },
    ],
  },
  {
    id: "calculator",
    title: "Calculator and estimates",
    blocks: [
      {
        p: "The campaign budget calculator, benchmarks, reports and any figures shown on this site are illustrative estimates based on historical campaign data. They are not a quote, a forecast or a guarantee of results. Actual pricing and performance depend on your market, targeting criteria, offer and campaign scope, and are confirmed only in a written proposal.",
      },
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    blocks: [
      {
        p: "The site, its design, text, graphics, reports and the Lidespy name and logo are owned by Lidespy or its licensors and are protected by intellectual property law. You may view and download material for your own internal business use, with attribution retained; any other reproduction, distribution or commercial use requires our written permission.",
      },
      {
        p: "You keep ownership of the content and trademarks you supply to us, and you grant us a licence to use them for the duration of the engagement solely to deliver the agreed services.",
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    blocks: [
      {
        p: "Each party will protect the other's non-public information disclosed in connection with an engagement, use it only for that engagement, and disclose it only to personnel and advisers who need it and are bound by equivalent obligations. These duties continue for three years after the engagement ends, and indefinitely for trade secrets.",
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-party links and services",
    blocks: [
      {
        p: "The site links to third-party sites and embeds third-party tools. We do not control them, do not endorse their content, and are not responsible for their practices. Your use of a third-party service is governed by that provider's own terms and privacy notice.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    blocks: [
      {
        p: "The site and its content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim all implied warranties, including merchantability, fitness for a particular purpose and non-infringement, and we do not warrant that the site will be uninterrupted, error-free or secure. Nothing on this site is legal, tax or financial advice.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    blocks: [
      {
        p: "To the fullest extent permitted by law, neither party is liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue, pipeline or data, even if advised of the possibility. Our total aggregate liability arising out of or relating to the services is limited to the fees paid to us for the services giving rise to the claim in the twelve months before the event.",
      },
      {
        p: "These limits do not apply to a party's confidentiality breach, indemnity obligations, or to liability that cannot be excluded by law.",
      },
    ],
  },
  {
    id: "term",
    title: "Term, suspension and termination",
    blocks: [
      {
        p: "Either party may terminate an engagement for material breach that stays uncured 30 days after written notice, or as otherwise set out in the statement of work. On termination you remain liable for fees for services delivered and for work irrevocably committed before the termination date. We may suspend or withdraw access to the site at any time without notice.",
      },
    ],
  },
  {
    id: "law",
    title: "Governing law and disputes",
    blocks: [
      {
        p: "These terms are governed by the laws of India, without regard to conflict-of-law rules. The courts of Pune, Maharashtra have exclusive jurisdiction, save that either party may seek injunctive relief in any competent court to protect its intellectual property or confidential information. Before filing, the parties will attempt to resolve any dispute in good faith for 30 days.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    blocks: [
      {
        p: "We may revise these terms from time to time. The date at the top of this page shows when they were last updated, and continued use of the site after a change takes effect means you accept the revised terms.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms of Service"
      lead="The terms that govern your use of this website and the delivery of our B2B demand generation services."
      updated="1 September 2026"
      sections={SECTIONS}
      current="/terms"
    />
  );
}
