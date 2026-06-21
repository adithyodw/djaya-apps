"use client";

import { useLang } from "./LanguageProvider";
import { t, bookItem } from "@/lib/i18n";
import Logo from "./Logo";
import Reveal from "./Reveal";

export default function Signature() {
  const { lang } = useLang();
  const tr = t(lang);
  const waSig = bookItem(lang, lang === "en" ? "Djaya Signature 3-in-1 (150 min)" : "Djaya Signature 3-in-1 (150 menit)");

  return (
    <section className="px-[22px] py-[46px]">
      <Reveal>
        <div className="relative rounded-[22px] overflow-hidden bg-dark-card text-[#f3e7d4] px-[26px] py-[34px]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 80% 0%, rgba(194,151,75,.28), transparent 55%)" }}
          />
          <div className="relative">
            <div className="mb-4">
              <Logo width={34} height={42} variant="neon" />
            </div>
            <div className="text-[10.5px] tracking-[0.26em] uppercase text-gold-2 font-bold mb-2.5">{tr.sigEyebrow}</div>
            <h3 className="font-display font-semibold text-[30px] leading-[1.12] m-0 mb-3">{tr.sigTitle}</h3>
            <p className="text-[14px] leading-[1.7] text-[#cdbda6] m-0 mb-[22px]">{tr.sigDesc}</p>
            <div className="flex items-center justify-between border-t border-[rgba(212,175,97,0.28)] pt-[18px]">
              <div>
                <div className="text-[11px] text-[#a89478]">{tr.sig150}</div>
                <div className="font-display font-bold text-[26px] text-[#f3e7d4]">Rp 420.000</div>
              </div>
              <a
                href={waSig}
                target="_blank"
                rel="noopener"
                className="bg-gold-2 text-dark-card no-underline px-[22px] py-3 rounded-[12px] font-extrabold text-[13px]"
              >
                {tr.bookShort}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
