import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ArrowRight } from "@/components/icons";
import { route } from "@/lib/routes";
import SolutionsBrowser from "./SolutionsBrowser";

export const metadata: Metadata = {
  title: "Solutions · Lidespy",
  description:
    "Demand generation solutions built around your business goals — by industry and by objective.",
};

export default function SolutionsPage() {
  return (
    <div className="dc-rules min-h-screen overflow-x-clip bg-cream text-ink">
      <SiteNav active="enable" />
      <SolutionsBrowser />

      <section className="border-t border-ink/12 bg-brand-cta">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] page-x py-[clamp(56px,6vw,88px)] text-center">
          <h2 className="m-0 text-[clamp(30px,3.4vw,50px)] leading-[1.05] font-normal tracking-[-0.03em] text-ink text-pretty">
            Don&apos;t see your goal? We&apos;ll build a solution around it.
          </h2>
          <Link
            href={route("Contact.dc.html")}
            className="mt-1.5 inline-flex items-center gap-3 rounded-ui bg-ink px-8 py-[18px] text-[12px] font-semibold tracking-[0.04em] text-coral uppercase transition-colors hover:bg-brand hover:text-cream"
          >
            Book a strategy call
            <ArrowRight />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
