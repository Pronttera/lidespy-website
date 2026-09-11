import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "CASL Compliance · Lidespy",
  description:
    "How Lidespy handles Canada's Anti-Spam Legislation — consent before sending, sender identification and unsubscribes processed within 10 business days.",
  alternates: { canonical: "/compliance/casl" },
};

const SECTIONS: Section[] = [
  {
    id: "overview",
    title: "What CASL requires",
    blocks: [
      {
        p: "Canada's Anti-Spam Legislation is a consent-first law: a commercial electronic message may be sent to a Canadian recipient only with their express or implied consent, and it must identify the sender and carry a working unsubscribe. It applies to B2B email just as it does to consumer marketing, so every campaign reaching Canada is scoped against it before launch.",
      },
    ],
  },
  {
    id: "consent",
    title: "Consent before we send",
    blocks: [
      { h: "Express consent" },
      {
        p: "Where we rely on express consent it is collected with a clear, unticked opt-in that states the purpose and names who is asking, and we keep a record of when and how it was given.",
      },
      { h: "Implied consent" },
      {
        p: "We rely on implied consent only where CASL recognises it, and we track its expiry:",
      },
      {
        ul: [
          "An existing business relationship — such as a purchase or contract within the past two years, or an inquiry within the past six months.",
          "Conspicuous publication — where a person's business email address is published without a statement that they do not want messages, and our message is relevant to their role.",
          "A business card or address disclosed directly to us, with no indication that messages are unwelcome, and outreach relevant to the person's business role.",
        ],
      },
      {
        p: "Contacts without a documented basis are excluded from Canadian sends rather than risked.",
      },
    ],
  },
  {
    id: "identification",
    title: "Identification in every message",
    blocks: [
      {
        ul: [
          "The name of the sender, and of the client on whose behalf a message is sent where that differs.",
          "A mailing address plus a phone number, email address or web address, valid for at least 60 days after sending.",
          "A clear statement of why the recipient is receiving the message.",
        ],
      },
    ],
  },
  {
    id: "unsubscribe",
    title: "Unsubscribe",
    blocks: [
      {
        p: "Every message includes an unsubscribe mechanism that can be used at no cost, is readily performed, and remains valid for at least 60 days after sending. Requests are given effect within 10 business days and applied across all of our campaigns and the sponsoring client's suppression file.",
      },
    ],
  },
  {
    id: "records",
    title: "Records we keep",
    blocks: [
      {
        p: "Because the burden of proving consent sits with the sender, we keep consent source, date and method for every Canadian contact, along with unsubscribe timestamps, for as long as the contact remains on any list and for a reasonable period afterwards.",
      },
    ],
  },
];

export default function CaslPage() {
  return (
    <LegalDoc
      eyebrow="Compliance"
      title="CASL Compliance"
      lead="How we handle Canada's Anti-Spam Legislation — consent before a message is sent, clear sender identification, and unsubscribes that take effect within 10 business days."
      updated="11 September 2026"
      sections={SECTIONS}
      current="/compliance/casl"
    />
  );
}
