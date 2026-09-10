import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight } from "@/components/icons";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact · Lidespy",
  description:
    "Let's talk about your pipeline. Book a 30-minute discovery call with the Lidespy demand generation team.",
};

const DETAILS = [
  { k: "Company", v: "Lidespy" },
  { k: "Location", v: "Pune, India" },
  { k: "Website", v: "lidespy.com" },
];

export default function ContactPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav />

      <section className="mx-auto grid max-w-[1280px] items-start gap-[clamp(32px,5vw,80px)] page-x pt-[clamp(56px,6vw,96px)] pb-[clamp(56px,6vw,88px)] lg:grid-cols-[minmax(0,.9fr)_minmax(320px,1.1fr)]">
        <div className="flex flex-col gap-7 lg:sticky lg:top-26">
          <div className="inline-block self-start border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
            Contact us
          </div>
          <h1 className="m-0 text-[clamp(38px,5vw,72px)] leading-none font-normal tracking-[-0.035em] text-pretty">
            Let&apos;s talk about <span className="text-brand">your pipeline</span>.
          </h1>
          <p className="m-0 max-w-[520px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-muted text-pretty">
            Whether you&apos;re ready to launch a campaign or just exploring
            options — our team is happy to have a conversation about your goals.
          </p>

          <div
            id="booking"
            className="flex scroll-mt-24 flex-col gap-3.5 rounded-card bg-ink px-[26px] pt-[26px] pb-7 text-cream"
          >
            <div className="text-[11px] font-semibold tracking-[0.14em] text-coral uppercase">
              Prefer to talk? Book a call.
            </div>
            <p className="m-0 text-[14.5px] leading-[1.6] text-cream/75 text-pretty">
              Schedule a 30-minute discovery call with our demand generation
              team. We&apos;ll review your goals and share how Lidespy can help.
            </p>
            <a
              href="mailto:info@lidespy.com?subject=Discovery%20call"
              className="mt-1 inline-flex items-center gap-3 self-start rounded-ui bg-brand-cta px-6 py-[15px] text-[12px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
            >
              Book a discovery call
              <ArrowRight size={13} />
            </a>
          </div>

          <div className="grid gap-[18px] border-t border-ink/15 pt-[22px] sm:grid-cols-4">
            {DETAILS.map((d) => (
              <div key={d.k}>
                <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                  {d.k}
                </div>
                <div className="text-[14px]">{d.v}</div>
              </div>
            ))}
            <div>
              <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.1em] text-muted-3 uppercase">
                Email
              </div>
              <a
                href="mailto:info@lidespy.com"
                className="border-b border-ink/30 text-[14px] text-ink"
              >
                info@lidespy.com
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      <SiteFooter />
    </div>
  );
}
