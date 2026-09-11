import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "GDPR Compliance · Lidespy",
  description:
    "How Lidespy runs B2B demand generation in line with the EU GDPR and UK GDPR — lawful basis, data subject rights, transfers and processor terms.",
  alternates: { canonical: "/compliance/gdpr" },
};

const SECTIONS: Section[] = [
  {
    id: "overview",
    title: "Our approach to GDPR",
    blocks: [
      {
        p: "The EU General Data Protection Regulation and the UK GDPR apply whenever we process personal data about people in the European Economic Area or the United Kingdom — including the business contact data behind a B2B campaign. We treat them as the baseline for every campaign that touches those regions, not as an add-on for clients who ask.",
      },
      {
        p: "For our own website, prospects and clients we act as a controller. When we run a campaign on a client's behalf we generally act as a processor under their documented instructions, and we sign a data processing agreement before any personal data changes hands.",
      },
    ],
  },
  {
    id: "lawful-basis",
    title: "Lawful basis for B2B outreach",
    blocks: [
      {
        p: "Every processing activity is mapped to a lawful basis before a campaign launches:",
      },
      {
        ul: [
          "Legitimate interests — for relevant outreach to business contacts in their professional capacity, supported by a documented legitimate interests assessment for each campaign type.",
          "Consent — where national e-privacy rules require it for electronic marketing, and for content downloads where the contact opts in to hear from the sponsoring client.",
          "Contract — to deliver the services a client has engaged us for.",
        ],
      },
      {
        p: "Where e-privacy law in a given EU member state is stricter than the GDPR baseline for email or phone outreach, the stricter rule governs that country's portion of the campaign.",
      },
    ],
  },
  {
    id: "transparency",
    title: "Transparency at first contact",
    blocks: [
      {
        ul: [
          "Every first-touch email identifies Lidespy, explains why the recipient is being contacted and where their details came from, and links to our Privacy Policy.",
          "Content syndication forms name the sponsoring client and state exactly who will receive the lead before it is submitted.",
          "Telemarketing scripts include the same identification and an immediate route to opt out.",
        ],
      },
    ],
  },
  {
    id: "rights",
    title: "Data subject rights",
    blocks: [
      {
        p: "Anyone whose data we hold can ask to access, correct, delete, restrict or port it, object to processing — including an absolute right to object to direct marketing — and withdraw consent at any time.",
      },
      {
        ul: [
          "Requests are acknowledged promptly and answered within one month, extendable only where the law allows.",
          "Objections and erasure requests are added to a central suppression list so the person is not re-imported from another source later.",
          "Where we act as a processor, we pass requests to the client controller without delay and help them respond.",
        ],
      },
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    blocks: [
      {
        p: "Lidespy operates from India. Where personal data leaves the EEA or UK, transfers rely on the European Commission's Standard Contractual Clauses and the UK International Data Transfer Addendum, backed by a transfer risk assessment and supplementary measures such as encryption in transit and at rest and least-privilege access.",
      },
    ],
  },
  {
    id: "security-and-breaches",
    title: "Security and breach response",
    blocks: [
      {
        ul: [
          "Access to campaign data is role-based, logged, and removed when an engagement ends.",
          "Vendors that process personal data for us are vetted and bound by processor terms.",
          "Personal data breaches are assessed immediately; where notification is required, the relevant supervisory authority is notified within 72 hours of our becoming aware, and affected clients without undue delay.",
        ],
      },
    ],
  },
  {
    id: "retention",
    title: "Minimisation and retention",
    blocks: [
      {
        p: "We collect only the fields a campaign needs to qualify a lead, and retention periods are set per data category as described in our Privacy Policy. Suppression records are the exception — they are kept so that an opt-out keeps working.",
      },
    ],
  },
];

export default function GdprPage() {
  return (
    <LegalDoc
      eyebrow="Compliance"
      title="GDPR Compliance"
      lead="How we run B2B demand generation in line with the EU GDPR and UK GDPR — from the lawful basis for outreach to how we answer a data subject request."
      updated="11 September 2026"
      sections={SECTIONS}
      current="/compliance/gdpr"
    />
  );
}
