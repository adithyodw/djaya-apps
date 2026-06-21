"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";
import { t, wa, bookMsg } from "@/lib/i18n";
import { WhatsAppIcon } from "./icons";

export default function Hero() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="top" className="relative min-h-[88vh] flex items-end overflow-hidden">
      <Image
        src="/img/hero.jpg"
        alt="Suasana ruang perawatan Djaya Massage & Reflexology Batam"
        fill
        priority
        sizes="480px"
        className="object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,16,10,.46) 0%, rgba(21,16,10,.1) 30%, rgba(21,16,10,.6) 76%, rgba(21,16,10,.94) 100%)",
        }}
      />
      <div className="relative z-[2] px-[26px] pb-[46px] pointer-events-none">
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-3 font-bold mb-[18px]">{tr.heroEyebrow}</div>
        <h1 className="font-display font-semibold text-[46px] leading-[1.04] text-cream-2 m-0 mb-4 tracking-[0.005em]">
          Djaya Massage
          <br />
          &amp; Reflexology
        </h1>
        <div className="w-[46px] h-0.5 bg-gold mb-4" />
        <p className="font-display italic text-[21px] leading-[1.36] text-[#f0e6d6] m-0 mb-7 max-w-[330px]">{tr.heroSub}</p>
        <div className="flex flex-col gap-[11px] pointer-events-auto max-w-[330px]">
          <a
            href={wa(bookMsg(lang))}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2.5 bg-terracotta text-white no-underline p-4 rounded-[14px] font-bold text-[15px]"
            style={{ boxShadow: "0 12px 30px rgba(110,48,18,.45)" }}
          >
            <WhatsAppIcon />
            {tr.ctaBook}
          </a>
          <a
            href="#menu"
            className="flex items-center justify-center gap-2 bg-cream/10 text-cream-2 no-underline p-[15px] rounded-[14px] font-semibold text-[14.5px] border-[1.4px] border-cream-2/50"
          >
            {tr.ctaMenu}
          </a>
        </div>
      </div>
    </section>
  );
}
