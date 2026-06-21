"use client";

import Logo from "./Logo";
import { useLang } from "./LanguageProvider";
import { Lang } from "@/lib/i18n";

export default function Header() {
  const { lang, setLang } = useLang();

  const pill = (active: boolean) =>
    `cursor-pointer border-0 rounded-full px-3.5 py-1.5 font-body font-extrabold text-[12px] tracking-[0.04em] transition-all ${
      active ? "bg-ink text-cream" : "bg-transparent text-[#9c8262]"
    }`;

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-5 py-3 bg-cream/90 backdrop-blur-[14px] border-b border-[rgba(194,151,75,0.2)]">
      <a href="#top" className="flex items-center gap-2.5 no-underline" aria-label="Djaya Massage & Reflexology">
        <Logo width={26} height={32} />
        <span className="leading-none">
          <span className="block font-display font-bold text-[19px] tracking-[0.14em] text-ink">DJAYA</span>
          <span className="block text-[7.5px] tracking-[0.32em] text-gold-ink font-bold mt-0.5">
            MASSAGE &amp; REFLEXOLOGY
          </span>
        </span>
      </a>
      <div className="flex items-center bg-[#ece0ca] rounded-full p-[3px]">
        <button type="button" className={pill(lang === "id")} onClick={() => setLang("id" as Lang)} aria-pressed={lang === "id"}>
          ID
        </button>
        <button type="button" className={pill(lang === "en")} onClick={() => setLang("en" as Lang)} aria-pressed={lang === "en"}>
          EN
        </button>
      </div>
    </header>
  );
}
