"use client";

import { useLang } from "./LanguageProvider";
import { t, wa, bookMsg } from "@/lib/i18n";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./icons";

const PRICES = [
  { key: "whyRow1" as const, price: "Rp 150.000" },
  { key: "whyRow2" as const, price: "Rp 170.000" },
  { key: "whyRow3" as const, price: "Rp 220.000" },
  { key: "whyRow4" as const, price: "Rp 340.000" },
  { key: "whyRow5" as const, price: "Rp 420.000" },
];

export default function WhyDjaya() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="why-djaya" className="px-[26px] pt-14 pb-2" aria-labelledby="why-heading">
      <Reveal>
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-3.5">
          {tr.whyLabel}
        </div>
        <h2
          id="why-heading"
          className="font-display font-semibold text-[32px] leading-[1.12] text-ink m-0 mb-4"
        >
          {tr.whyHead}
        </h2>
        <p className="text-[14.5px] leading-[1.75] text-ink-soft m-0 mb-3">{tr.whyLead}</p>
        <p className="text-[14.5px] leading-[1.75] text-ink-soft m-0 mb-9">{tr.whyBody}</p>
      </Reveal>

      <Reveal delay={0.04}>
        <h3 className="font-display font-semibold text-[22px] text-ink m-0 mb-5">{tr.whySub1}</h3>
        <div className="flex flex-col gap-0 mb-10 border-t border-card-line">
          {[tr.whyPoint1, tr.whyPoint2, tr.whyPoint3, tr.whyPoint4].map((point, i) => (
            <div key={i} className="flex gap-4 py-4 border-b border-card-line">
              <span className="flex-none font-display text-[18px] text-gold-ink leading-none pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="m-0 text-[13.5px] leading-[1.65] text-ink-soft">{point}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h3 className="font-display font-semibold text-[22px] text-ink m-0 mb-5">{tr.whySub2}</h3>
        <div className="mb-6 border-t border-card-line">
          <div className="flex justify-between py-2.5 text-[10px] tracking-[0.18em] uppercase text-gold-ink font-bold border-b border-card-line">
            <span>{tr.whyColService}</span>
            <span>{tr.whyColFrom}</span>
          </div>
          {PRICES.map((row) => (
            <div
              key={row.key}
              className="flex items-baseline justify-between gap-3 py-3.5 border-b border-card-line"
            >
              <span className="text-[13.5px] text-ink-soft leading-[1.4]">{tr[row.key]}</span>
              <span className="flex-none font-display font-bold text-[17px] text-terracotta">
                {row.price}
              </span>
            </div>
          ))}
        </div>
        <a
          href={wa(bookMsg(lang))}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 bg-ink text-cream no-underline p-[14px] rounded-[12px] font-bold text-[13.5px] transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon size={15} />
          {tr.ctaBook}
        </a>
      </Reveal>
    </section>
  );
}
