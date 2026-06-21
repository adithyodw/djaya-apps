"use client";

import { useLang } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import Logo from "./Logo";

const IG = "https://www.instagram.com/djayamassage/";
const WA = "https://wa.me/6285278355590";

export default function Footer() {
  const { lang } = useLang();
  const tr = t(lang);
  return (
    <footer className="bg-dark-card text-[#cdbda6] px-[26px] pt-10 pb-9">
      <div className="flex items-center gap-[11px] mb-5">
        <Logo width={28} height={35} variant="gold" />
        <div>
          <div className="font-display font-bold text-[20px] tracking-[0.14em] text-[#f3e7d4]">DJAYA</div>
          <div className="text-[7.5px] tracking-[0.32em] text-gold-ink font-bold mt-0.5">MASSAGE &amp; REFLEXOLOGY</div>
        </div>
      </div>
      <div className="text-[13px] leading-[1.7] text-[#a89478] mb-1.5">
        Jl. Komp. Penuin Centre No. 14, Blok A
        <br />
        Batu Selicin, Kec. Lubuk Baja,
        <br />
        Kota Batam, Kepulauan Riau 29411, Indonesia
      </div>
      <div className="text-[13px] text-[#a89478] mb-5">{tr.hours}</div>
      <div className="flex gap-2.5 mb-6">
        <a
          href={WA}
          target="_blank"
          rel="noopener"
          className="flex-1 flex items-center justify-center gap-[7px] bg-[rgba(212,175,97,0.12)] text-gold-3 no-underline p-[11px] rounded-[11px] font-bold text-[12.5px] border border-[rgba(212,175,97,0.25)]"
        >
          WhatsApp
        </a>
        <a
          href={IG}
          target="_blank"
          rel="noopener"
          className="flex-1 flex items-center justify-center gap-[7px] bg-[rgba(212,175,97,0.12)] text-gold-3 no-underline p-[11px] rounded-[11px] font-bold text-[12.5px] border border-[rgba(212,175,97,0.25)]"
        >
          Instagram
        </a>
      </div>
      <div className="text-[11px] text-[#6b5a44] border-t border-[rgba(212,175,97,0.16)] pt-[18px]">
        © 2026 Djaya Massage &amp; Reflexology Batam
      </div>
    </footer>
  );
}
