"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "./LanguageProvider";
import { t, bookItem } from "@/lib/i18n";
import { categories, treatments, CategoryKey, Treatment } from "@/lib/content";
import { WhatsAppIcon, ClockIcon } from "./icons";

function ItemCard({ item, bookShort, lang }: { item: Treatment; bookShort: string; lang: "id" | "en" }) {
  return (
    <div
      className="bg-white border border-card-line rounded-[18px] p-4"
      style={{ boxShadow: "0 6px 20px rgba(120,80,40,.05)" }}
    >
      <div className="flex gap-3.5 items-start">
        <div className="relative flex-none w-[84px] h-[84px] rounded-[13px] overflow-hidden bg-card-line">
          <Image src={item.img} alt={item.name} fill sizes="84px" className="object-cover" />
        </div>
        <div className="flex-1 min-w-0 pt-px">
          <h3 className="font-display font-bold text-[20px] leading-[1.12] text-ink m-0 mb-1.5">{item.name}</h3>
          <p className="text-[12px] leading-[1.55] text-clay m-0">{item.desc}</p>
        </div>
      </div>
      <div className="mt-3.5 border-t border-[#f0e7d6] pt-1.5">
        {item.opts.map((o, i) => (
          <div key={i} className="flex items-center justify-between py-[7px]">
            <span className="flex items-center gap-[7px] text-[12.5px] text-[#6b5440] font-semibold">
              <ClockIcon size={13} />
              {o.dur}
            </span>
            <span className="font-display font-bold text-[16px] text-terracotta">{o.price}</span>
          </div>
        ))}
      </div>
      <a
        href={bookItem(lang, item.name)}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 mt-3 bg-[#23170f] text-cream no-underline p-[11px] rounded-[11px] font-bold text-[13px]"
      >
        <WhatsAppIcon size={15} />
        {bookShort}
      </a>
    </div>
  );
}

export default function Menu() {
  const { lang } = useLang();
  const tr = t(lang);
  const cats = categories(lang);
  const data = treatments(lang);
  const [cat, setCat] = useState<CategoryKey>("reflexology");

  return (
    <section id="menu" className="pt-[52px] pb-2">
      <div className="px-[26px]">
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-3.5">{tr.menuLabel}</div>
        <h2 className="font-display font-semibold text-[33px] leading-[1.1] text-ink m-0 mb-2">{tr.menuHead}</h2>
        <p className="text-[13px] leading-[1.6] text-clay m-0 mb-[22px]">{tr.menuSub}</p>
      </div>
      <div className="flex gap-[9px] overflow-x-auto no-scrollbar px-[26px] pb-[22px] pt-0.5">
        {cats.map((c) => {
          const active = c.key === cat;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setCat(c.key)}
              className={`flex-none whitespace-nowrap px-[18px] py-[9px] rounded-full font-body font-bold text-[13px] border transition-all ${
                active ? "bg-terracotta text-white border-terracotta" : "bg-transparent text-[#8a6f50] border-[#e2d3b8]"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-3.5 px-[22px]">
        {data[cat].map((item) => (
          <ItemCard key={item.slug} item={item} bookShort={tr.bookShort} lang={lang} />
        ))}
      </div>
    </section>
  );
}
