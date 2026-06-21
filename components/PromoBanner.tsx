"use client";

import { useLang } from "./LanguageProvider";
import { t, localPromoMsg } from "@/lib/i18n";

export default function PromoBanner() {
  const { lang } = useLang();
  const tr = t(lang);
  return (
    <a
      href={localPromoMsg(lang)}
      target="_blank"
      rel="noopener"
      className="flex items-center gap-3.5 no-underline px-6 py-4 text-white"
      style={{ background: "linear-gradient(100deg,#b15a2b 0%,#8a4420 100%)" }}
    >
      <div className="flex-none w-[46px] h-[46px] rounded-full border-[1.6px] border-[rgba(255,235,205,0.55)] flex items-center justify-center font-display font-bold text-[18px] text-[#ffe7c4]">
        30%
      </div>
      <div className="flex-1 leading-[1.32]">
        <div className="font-extrabold text-[14px] tracking-[0.01em]">{tr.promoTitle}</div>
        <div className="text-[11.5px] text-[rgba(255,240,224,0.82)] mt-0.5">{tr.promoSub}</div>
      </div>
      <span className="flex-none text-[#ffe7c4]">→</span>
    </a>
  );
}
