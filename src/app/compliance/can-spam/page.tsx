import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "CAN-SPAM Compliance · Lidespy",
  description:
    "How Lidespy's B2B email campaigns meet the US CAN-SPAM Act — honest headers and subject lines, sender identification and opt-outs honoured within 10 business days.",
  alternates: { canonical: "/compliance/can-spam" },
};

const SECTIONS: Section[] = [
  {
    id: "overview",
    title: "What CAN-SPAM covers",
    blocks: [
      {
        p: "The US CAN-SPAM Act sets the rules for commercial email, and it applies to business-to-business messages as fully as to consumer ones. Every campaign we send into the United States — for ourselves or on a client's behalf — is built to meet it.",
      },
      {
        p: "Because the law holds both the company whose product is promoted and the company that sends the message responsible, we agree with each client, in writing, who owns which obligation before a campaign launches.",
      },
    ],
  },
  {
    id: "requirements",
    title: "How every email complies",
    blocks: [
      {
        table: {
          head: ["Requirement", "What we do"],
          rows: [
            ["Accurate header information", "From, To, Reply-To and routing information identify the real sender. We never spoof a domain or a person."],
            ["Honest subject lines", "Subject lines reflect the content of the message. No false urgency, fake replies or misleading prefixes."],
            ["Identified as commercial", "Promotional messages are clearly recognisable as promotional."],
            ["Physical postal address", "Every message carries a valid physical postal address for the sender."],
            ["Clear opt-out", "Every message includes a working, plainly worded unsubscribe mechanism that needs nothing more than a reply or a single page visit."],
            ["Opt-outs honoured fast", "Opt-out requests are processed within 10 business days — in practice, far sooner — and the mechanism works for at least 30 days after sending."],
          ],
        },
      },
    ],
  },
  {
    id: "suppression",
    title: "Suppression and list hygiene",
    blocks: [
      {
        ul: [
          "Opt-outs are added to a global suppression list that applies across every campaign we run, not only the one the person replied to.",
          "Client suppression files are applied before every send, alongside our own.",
          "Opted-out addresses are never sold, rented or transferred, except to a service provider helping us honour the opt-out.",
          "Lists are verified before sending, and harvested or dictionary-generated addresses are never used.",
        ],
      },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring and accountability",
    blocks: [
      {
        p: "Sending infrastructure is authenticated with SPF, DKIM and DMARC, complaint and bounce rates are monitored on every campaign, and any campaign drifting above threshold is paused for review. Anyone we engage to send on our behalf is held to the same standard, because the obligation cannot be contracted away.",
      },
    ],
  },
];

export default function CanSpamPage() {
  return (
    <LegalDoc
      eyebrow="Compliance"
      title="CAN-SPAM Compliance"
      lead="How our B2B email campaigns meet the US CAN-SPAM Act — honest headers and subject lines, clear sender identification, and opt-outs that are honoured quickly and permanently."
      updated="11 September 2026"
      sections={SECTIONS}
      current="/compliance/can-spam"
    />
  );
}
