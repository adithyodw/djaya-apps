"use client";

import { useLang } from "./LanguageProvider";
import { t, wa, bookMsg } from "@/lib/i18n";
import { WhatsAppIcon, ClockIcon } from "./icons";
import Reveal from "./Reveal";

export default function Booking() {
  const { lang } = useLang();
  const tr = t(lang);
  return (
    <section id="booking" className="px-[26px] pt-[18px] pb-[52px] text-center" aria-labelledby="booking-heading">
      <Reveal>
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-3.5">{tr.bookLabel}</div>
        <h2 id="booking-heading" className="font-display font-semibold text-[33px] leading-[1.12] text-ink m-0 mb-3.5">
          {tr.bookHead}
        </h2>
        <p className="text-[14.5px] leading-[1.7] text-ink-soft mx-auto mb-6 max-w-[330px]">{tr.bookBody}</p>
        <a
          href={wa(bookMsg(lang))}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2.5 bg-wa text-white no-underline px-[30px] py-4 rounded-[14px] font-bold text-[15px]"
          style={{ boxShadow: "0 12px 28px rgba(37,128,58,.32)" }}
        >
          <WhatsAppIcon />
          {tr.ctaBook}
        </a>
        <div className="inline-flex items-center gap-2 mt-[18px] text-[12.5px] text-clay">
          <ClockIcon />
          {tr.hours}
        </div>
      </Reveal>
    </section>
  );
}
