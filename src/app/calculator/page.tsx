import Link from "next/link";
import Calculator from "@/components/Calculator";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight } from "@/components/icons";
import { route } from "@/lib/routes";

export default function CalculatorPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="resources" />

      <section className="mx-auto flex max-w-[1280px] flex-col items-start gap-[22px] page-x pt-[clamp(48px,5vw,80px)] pb-[clamp(24px,3vw,40px)]">
        <div className="inline-block border border-brand/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
          Campaign budget calculator · Free
        </div>
        <h1 className="m-0 max-w-[1000px] text-[clamp(38px,5vw,76px)] leading-none font-normal tracking-[-0.035em] text-pretty">
          Plan your next{" "}
          <span className="text-brand">demand generation campaign</span>.
        </h1>
        <p className="m-0 max-w-[620px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-muted text-pretty">
          Estimate campaign budgets, expected lead volume, and pipeline
          potential in minutes. No commitment required.
        </p>
      </section>

      <Calculator />

      <section className="border-t border-ink/12 bg-brand-cta">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-ink text-pretty">
            Need a custom campaign plan?
          </h2>
          <p className="m-0 max-w-[640px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-ink/82 text-pretty">
            Our demand generation specialists will review your goals and build a
            campaign strategy tailored to your budget and growth targets.
          </p>
          <Link
            href={route("Contact.dc.html")}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-ink px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-coral uppercase transition-colors hover:bg-brand hover:text-cream"
          >
            Book a free strategy call
            <ArrowRight />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
