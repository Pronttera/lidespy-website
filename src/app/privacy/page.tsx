import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy · Lidespy",
  description:
    "How Lidespy collects, uses, shares and protects personal data across our website and B2B demand generation services.",
};

const SECTIONS: Section[] = [
  {
    id: "scope",
    title: "Who we are and what this covers",
    blocks: [
      {
        p: "Lidespy is a B2B demand generation company headquartered in Pune, India, serving clients globally. This policy explains how we handle personal data when you visit lidespy.com, contact us, download a resource, or when we process business contact data as part of a client campaign.",
      },
      {
        p: "We act as a data controller for our own website visitors, prospects and clients. When we run campaigns on behalf of a client, we generally act as a processor under that client's instructions, and their privacy notice applies alongside this one.",
      },
    ],
  },
  {
    id: "data-we-collect",
    title: "The data we collect",
    blocks: [
      { h: "Data you give us" },
      {
        ul: [
          "Contact details — name, business email, phone number, job title, company and country, submitted through our contact form, calculator or resource downloads.",
          "Campaign and enquiry details — budget ranges, target markets, objectives and anything else you choose to include in a message.",
          "Correspondence — emails, call notes and meeting records relating to a current or prospective engagement.",
        ],
      },
      { h: "Data we collect automatically" },
      {
        ul: [
          "Device and usage data — IP address, browser type, operating system, referring page, pages viewed and time on page.",
          "Cookie and similar identifiers, as described in our Cookie Policy.",
        ],
      },
      { h: "Data from other sources" },
      {
        ul: [
          "Verified business contact data from licensed data providers, public professional profiles and company websites.",
          "Intent and firmographic signals from third-party intelligence providers, used to identify in-market accounts.",
          "Enrichment data used to keep business records accurate and de-duplicated.",
        ],
      },
      {
        p: "We do not seek to collect special category data, and we do not knowingly collect data from anyone under 18.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How we use personal data",
    blocks: [
      {
        ul: [
          "To respond to enquiries, provide quotes and deliver the services you or your organisation have requested.",
          "To plan, execute and report on demand generation, content syndication, ABM, email and appointment generation campaigns.",
          "To verify and qualify leads before delivery to a client, including confirming consent and interest.",
          "To send relevant B2B marketing communications, which you can stop at any time.",
          "To operate, secure and improve our website and services, and to produce aggregate analytics and benchmarks.",
          "To comply with legal, tax and contractual obligations, and to establish or defend legal claims.",
        ],
      },
    ],
  },
  {
    id: "legal-basis",
    title: "Legal bases for processing",
    blocks: [
      {
        p: "Where the GDPR or UK GDPR applies, we rely on the following bases:",
      },
      {
        ul: [
          "Consent — for marketing emails and telemarketing where consent is required, and for non-essential cookies. You may withdraw consent at any time.",
          "Legitimate interests — for B2B outreach to relevant business contacts, lead verification, fraud prevention, analytics and business development, balanced against your rights.",
          "Contract — to take steps at your request before entering a contract and to perform an agreed engagement.",
          "Legal obligation — where retention or disclosure is required by law.",
        ],
      },
    ],
  },
  {
    id: "sharing",
    title: "When we share data",
    blocks: [
      {
        p: "We do not sell personal data in the sense of trading it for money. We share it only as follows:",
      },
      {
        ul: [
          "Clients — qualified leads generated under a campaign are delivered to the sponsoring client, who then contacts you directly as a controller in their own right.",
          "Service providers — hosting, email delivery, CRM, analytics, telephony and data verification vendors, bound by contract to process data only on our instructions.",
          "Professional advisers — lawyers, auditors and insurers where necessary.",
          "Authorities — where disclosure is required by law or to protect our rights or the safety of others.",
          "Corporate transactions — a buyer or successor in the event of a merger, acquisition or reorganisation.",
        ],
      },
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    blocks: [
      {
        p: "We operate from India and work with clients and vendors across North America, Europe, Asia Pacific, and the Middle East and Africa. Where personal data moves out of the EEA or UK, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses together with the UK Addendum, plus supplementary technical and organisational measures where needed.",
      },
    ],
  },
  {
    id: "retention",
    title: "How long we keep data",
    blocks: [
      {
        p: "We retain personal data only as long as it serves the purpose it was collected for:",
      },
      {
        ul: [
          "Enquiries that do not become engagements — up to 24 months from last contact.",
          "Client and campaign records — for the term of the engagement and up to 7 years afterwards, to meet contractual, tax and audit obligations.",
          "Marketing contact records — until you opt out, or after a period of sustained non-engagement.",
          "Suppression lists — retained indefinitely, because we must remember not to contact you again.",
          "Website and analytics logs — typically up to 26 months.",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    blocks: [
      {
        p: "Depending on where you live, you may have the right to access, correct, delete, restrict or object to our processing of your personal data, to receive a portable copy, to withdraw consent, and to opt out of marketing. Residents of California and other US states with comprehensive privacy laws may also have rights to know, delete, correct, and to opt out of targeted advertising or the sharing of personal information.",
      },
      {
        p: "To exercise any right, email info@lidespy.com. We respond within 30 days, or sooner where the law requires it, and we will not treat you differently for exercising a right. If you are unhappy with our response you may complain to your local data protection authority.",
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    blocks: [
      {
        p: "We use encryption in transit, access controls on a least-privilege basis, vendor due diligence, staff confidentiality obligations and regular reviews of our systems. No method of transmission or storage is perfectly secure, so we cannot guarantee absolute security, but we notify affected people and regulators where a breach requires it.",
      },
    ],
  },
  {
    id: "compliance",
    title: "Marketing compliance",
    blocks: [
      {
        p: "Our outreach is designed to align with GDPR and UK GDPR, CAN-SPAM, CASL, and applicable telemarketing and do-not-call rules. Every marketing email identifies us, states why you are receiving it and carries a working unsubscribe link. Opt-out requests are honoured promptly and applied across our campaigns and to the client sponsoring them.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      {
        p: "We may update this policy as our services, vendors or legal obligations change. The date at the top of this page shows when it was last revised, and material changes will be highlighted on this page before they take effect.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      lead="How we collect, use, share and protect personal data across our website and our B2B demand generation services."
      updated="1 September 2026"
      sections={SECTIONS}
      current="/privacy"
    />
  );
}
