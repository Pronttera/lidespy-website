import Link from "next/link";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import { ArrowUpRight } from "./icons";
import { route } from "@/lib/routes";

/** One piece of a legal section: a paragraph, a bulleted list, or a sub-heading. */
export type Block =
  | { p: string }
  | { ul: string[] }
  | { h: string }
  | { table: { head: string[]; rows: string[][] } };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

/** The legal and compliance pages, so each can point at the others. */
const LEGAL_PAGES = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "GDPR", href: "/compliance/gdpr" },
  { label: "CAN-SPAM", href: "/compliance/can-spam" },
  { label: "CASL", href: "/compliance/casl" },
];

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ("h" in b) {
          return (
            <h3
              key={i}
              className="m-0 mt-6 mb-2 text-[15px] font-semibold tracking-[-0.01em] text-ink"
            >
              {b.h}
            </h3>
          );
        }
        if ("table" in b) {
          return (
            <div key={i} className="mt-5 overflow-x-auto rounded-card border border-ink/12">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="bg-panel">
                    {b.table.head.map((h) => (
                      <th
                        key={h}
                        className="border-b border-ink/12 px-4 py-3 text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.table.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-ink/10 align-top first:border-t-0">
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className={`px-4 py-3.5 text-[13.5px] leading-[1.6] ${
                            c === 0 ? "font-semibold text-ink" : "text-muted"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if ("ul" in b) {
          return (
            <ul key={i} className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
              {b.ul.map((li) => (
                <li
                  key={li}
                  className="relative pl-5 text-[14.5px] leading-[1.7] text-muted before:absolute before:top-[10px] before:left-0 before:h-[5px] before:w-[5px] before:bg-brand/70"
                >
                  {li}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="m-0 mt-3 text-[14.5px] leading-[1.75] text-muted text-pretty">
            {b.p}
          </p>
        );
      })}
    </>
  );
}

export default function LegalDoc({
  eyebrow,
  title,
  lead,
  updated,
  sections,
  current,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  /** Human-readable effective date, e.g. "1 September 2026". */
  updated: string;
  sections: Section[];
  /** Href of this page, so it renders inert in the legal cross-links. */
  current: string;
}) {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav />

      {/* HERO */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-start gap-[18px] page-x pt-[clamp(48px,5vw,84px)] pb-[clamp(28px,3.5vw,44px)]">
        <div className="inline-block border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
          {eyebrow}
        </div>
        <h1 className="m-0 max-w-[900px] text-[clamp(36px,4.6vw,64px)] leading-none font-normal tracking-[-0.035em] text-pretty">
          {title}
        </h1>
        <p className="m-0 max-w-[660px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted text-pretty">
          {lead}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
          <span>Last updated · {updated}</span>
          <span className="hidden h-3 w-px bg-ink/15 sm:block" />
          <span>Lidespy · Pune, India</span>
        </div>
      </section>

      {/* BODY — contents rail beside the document */}
      <section className="mx-auto max-w-[1280px] page-x pb-[clamp(48px,5vw,80px)]">
        <div className="grid gap-[clamp(28px,4vw,56px)] border-t border-ink/12 pt-[clamp(28px,3vw,44px)] lg:grid-cols-[minmax(200px,260px)_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-[104px] lg:self-start">
            <div className="mb-3.5 text-[11px] font-semibold tracking-[0.12em] text-muted-3 uppercase">
              Contents
            </div>
            <nav className="flex flex-col gap-2">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex gap-2.5 text-[12.5px] leading-[1.5] text-muted transition-colors hover:text-brand"
                >
                  <span className="text-muted-3 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-[760px]">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-24 border-ink/10 pt-7 pb-7 not-first:border-t"
              >
                <div className="mb-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="m-0 text-[clamp(20px,2vw,27px)] leading-[1.15] font-medium tracking-[-0.025em] text-pretty">
                  {s.title}
                </h2>
                <Blocks blocks={s.blocks} />
              </section>
            ))}

            {/* CONTACT */}
            <div className="mt-6 rounded-card border border-ink/12 bg-panel p-[clamp(20px,2.5vw,32px)]">
              <div className="mb-2.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                Questions about this policy?
              </div>
              <p className="m-0 mb-4 text-[14.5px] leading-[1.7] text-muted text-pretty">
                Write to us and a member of the team will respond. For data
                requests, please include the email address the request relates to.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                <a
                  href="mailto:info@lidespy.com"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink transition-colors hover:text-brand"
                >
                  info@lidespy.com
                  <ArrowUpRight size={11} className="text-brand" />
                </a>
                <Link
                  href={route("Contact.dc.html")}
                  className="text-[13px] font-semibold text-muted transition-colors hover:text-brand"
                >
                  Contact form →
                </Link>
              </div>
            </div>

            {/* CROSS-LINKS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {LEGAL_PAGES.filter((p) => p.href !== current).map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="rounded-ui border border-ink/15 px-4 py-2.5 text-[12px] font-semibold text-muted transition-colors hover:border-brand/55 hover:text-brand"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
