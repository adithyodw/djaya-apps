"use client";

import { useLang } from "./LanguageProvider";
import { t, wa, bookMsg } from "@/lib/i18n";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./icons";

export default function WhyDjaya() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="why-djaya" className="px-[26px] pt-12 pb-2" aria-labelledby="why-heading">
      <Reveal>
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-3.5">
          {tr.whyLabel}
        </div>
        <h2
          id="why-heading"
          className="font-display font-semibold text-[33px] leading-[1.12] text-ink m-0 mb-3"
        >
          {tr.whyHead}
        </h2>
        <p className="text-[15px] leading-[1.72] text-ink font-semibold m-0 mb-3">{tr.whyLead}</p>
        <p className="text-[14.5px] leading-[1.7] text-ink-soft m-0 mb-6">{tr.whyBody}</p>
      </Reveal>

      <Reveal delay={0.04}>
        <h3 className="font-display font-bold text-[20px] text-ink m-0 mb-3">{tr.whySub1}</h3>
        <ul className="m-0 mb-6 pl-5 text-[13.5px] leading-[1.7] text-ink-soft space-y-2">
          <li>{tr.whyPoint1}</li>
          <li>{tr.whyPoint2}</li>
          <li>{tr.whyPoint3}</li>
          <li>{tr.whyPoint4}</li>
        </ul>
      </Reveal>

      <Reveal delay={0.06}>
        <h3 className="font-display font-bold text-[20px] text-ink m-0 mb-3">{tr.whySub2}</h3>
        <div
          className="bg-white border border-card-line rounded-[18px] overflow-hidden mb-5"
          style={{ boxShadow: "0 6px 18px rgba(120,80,40,.05)" }}
        >
          <table className="w-full text-left border-collapse text-[12.5px]">
            <thead>
              <tr className="bg-[#f3ead9]">
                <th className="px-3.5 py-2.5 font-bold text-ink">{tr.whyColService}</th>
                <th className="px-3.5 py-2.5 font-bold text-ink whitespace-nowrap">{tr.whyColFrom}</th>
              </tr>
            </thead>
            <tbody className="text-ink-soft">
              <tr className="border-t border-[#f0e7d6]">
                <td className="px-3.5 py-2.5">{tr.whyRow1}</td>
                <td className="px-3.5 py-2.5 font-display font-bold text-terracotta whitespace-nowrap">
                  Rp 150.000
                </td>
              </tr>
              <tr className="border-t border-[#f0e7d6]">
                <td className="px-3.5 py-2.5">{tr.whyRow2}</td>
                <td className="px-3.5 py-2.5 font-display font-bold text-terracotta whitespace-nowrap">
                  Rp 170.000
                </td>
              </tr>
              <tr className="border-t border-[#f0e7d6]">
                <td className="px-3.5 py-2.5">{tr.whyRow3}</td>
                <td className="px-3.5 py-2.5 font-display font-bold text-terracotta whitespace-nowrap">
                  Rp 220.000
                </td>
              </tr>
              <tr className="border-t border-[#f0e7d6]">
                <td className="px-3.5 py-2.5">{tr.whyRow4}</td>
                <td className="px-3.5 py-2.5 font-display font-bold text-terracotta whitespace-nowrap">
                  Rp 340.000
                </td>
              </tr>
              <tr className="border-t border-[#f0e7d6]">
                <td className="px-3.5 py-2.5">{tr.whyRow5}</td>
                <td className="px-3.5 py-2.5 font-display font-bold text-terracotta whitespace-nowrap">
                  Rp 420.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <a
          href={wa(bookMsg(lang))}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 bg-[#23170f] text-cream no-underline p-[13px] rounded-[12px] font-bold text-[13.5px]"
        >
          <WhatsAppIcon size={15} />
          {tr.ctaBook}
        </a>
      </Reveal>
    </section>
  );
}
