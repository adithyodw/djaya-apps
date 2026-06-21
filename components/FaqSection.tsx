"use client";

import { useLang } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { faqEn, faqId } from "@/lib/faq";
import Reveal from "./Reveal";

export default function FaqSection() {
  const { lang } = useLang();
  const tr = t(lang);
  const items = lang === "en" ? faqEn : faqId;

  return (
    <section id="faq" className="px-[26px] pb-[52px]" aria-labelledby="faq-heading">
      <Reveal>
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-3.5">{tr.faqLabel}</div>
        <h2 id="faq-heading" className="font-display font-semibold text-[33px] leading-[1.12] text-ink m-0 mb-5">
          {tr.faqHead}
        </h2>
      </Reveal>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <Reveal key={item.q} delay={0.03 * i}>
            <article
              className="bg-white border border-card-line rounded-[18px] p-[18px]"
              style={{ boxShadow: "0 6px 18px rgba(120,80,40,.05)" }}
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 className="font-display font-bold text-[17px] leading-[1.2] text-ink m-0 mb-2.5" itemProp="name">
                {item.q}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-[13.5px] leading-[1.65] text-ink-soft m-0" itemProp="text">
                  {item.a}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
