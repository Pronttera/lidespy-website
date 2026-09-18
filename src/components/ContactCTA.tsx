import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { route } from "@/lib/routes";
import { FaWhatsapp, FaPhone, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="border-t border-ink/12 bg-red-700">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 page-x py-[clamp(52px,5.5vw,84px)] text-center">
        
        <h2 className="m-0 text-[clamp(28px,3.2vw,46px)] leading-[1.05] font-medium tracking-[-0.03em] text-white text-pretty">
          Rather see it run on your data?
        </h2>

        <p className="m-0 max-w-[650px] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-white/80 text-pretty">
          Get a qualified intent database and map a six-week program to your
          pipeline target.
        </p>

        <div className="mt-4 grid w-full max-w-[1050px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/918329055225"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[72px] items-center justify-between rounded-ui border border-ink/15 bg-white px-6 text-ink shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cta"
          >
            <span className="flex items-center gap-4">
            <FaWhatsapp size={24} className="text-brand-cta" />
              <span className="text-[16px] font-semibold">WhatsApp</span>
            </span>

            <ArrowRight
              size={18}
              className="text-brand-cta transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* Call */}
          <a
            href="tel:+14082908489"
            className="group flex h-[72px] items-center justify-between rounded-ui border border-ink/15 bg-white px-6 text-ink shadow-[0_12px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cta"
          >
            <span className="flex items-center gap-4">
            <FaPhone size={22} className="text-brand-cta" />
              <span className="text-[16px] font-semibold">Call us</span>
            </span>

            <ArrowRight
              size={18}
              className="text-brand-cta transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* Email */}
          <a
            href="mailto:info@lidespy.com"
            className="group flex h-[72px] items-center justify-between rounded-ui border border-ink/15 bg-white px-6 text-ink shadow-[0_12px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cta"
          >
            <span className="flex items-center gap-4">
            <FaEnvelope size={22} className="text-brand-cta" />
              <span className="text-[16px] font-semibold">E-mail us</span>
            </span>

            <ArrowRight
              size={18}
              className="text-brand-cta transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* Book a Call */}
          <a
            href="https://calendly.com/your-name"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[72px] items-center justify-between rounded-ui border border-ink/15 bg-white px-6 text-ink shadow-[0_12px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cta"
>
            <span className="flex items-center gap-4">
            <FaCalendarCheck size={22} className="text-brand-cta" />
              <span className="text-[16px] font-semibold">Book a Call</span>
            </span>

            <ArrowRight
              size={18}
              className="text-brand-cta transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}