"use client";

import { useLang } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { reviews } from "@/lib/content";
import { BUSINESS } from "@/lib/seo";
import Reveal from "./Reveal";

const GOOGLE_REVIEW = BUSINESS.googleReview;
const TRIPADVISOR =
  "https://www.tripadvisor.com.sg/Attraction_Review-g2270770-d32888084-Reviews-Djaya_Massage_Reflexology_Batam-Nagoya_Batam_Riau_Archipelago_Riau_Islands_Prov.html";

function GoogleGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.6Z" />
      <path fill="#34A853" d="M12 23c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v2.9A11.5 11.5 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.6 13.7a6.9 6.9 0 0 1 0-4.4V6.4H1.8a11.5 11.5 0 0 0 0 10.2l3.8-2.9Z" />
      <path fill="#EA4335" d="M12 4.6c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.5 11.5 0 0 0 1.8 6.4l3.8 2.9C6.5 6.6 9 4.6 12 4.6Z" />
    </svg>
  );
}

export default function Reviews() {
  const { lang } = useLang();
  const tr = t(lang);
  return (
    <section className="px-[26px] pt-2 pb-[52px]">
      <Reveal>
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-3.5">{tr.revLabel}</div>
        <h2 className="font-display font-semibold text-[33px] leading-[1.12] text-ink m-0 mb-5">{tr.revHead}</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex gap-[11px] mb-[22px]">
          <a
            href={GOOGLE_REVIEW}
            target="_blank"
            rel="noopener"
            className="flex-1 no-underline bg-white border border-card-line rounded-[16px] px-3.5 py-[15px] flex flex-col gap-[5px]"
            style={{ boxShadow: "0 6px 18px rgba(120,80,40,.05)" }}
          >
            <div className="flex items-center gap-[7px]">
              <GoogleGlyph />
              <span className="text-[12px] font-bold text-[#4a3728]">Google</span>
            </div>
            <div className="font-display font-bold text-[27px] text-ink leading-none">4.9</div>
            <div className="flex gap-px text-[#e2a93a]">★★★★★</div>
            <div className="text-[10.5px] text-[#9c8262] font-semibold">{tr.revGoogleCta}</div>
          </a>
          <a
            href={TRIPADVISOR}
            target="_blank"
            rel="noopener"
            className="flex-1 no-underline bg-white border border-card-line rounded-[16px] px-3.5 py-[15px] flex flex-col gap-[5px]"
            style={{ boxShadow: "0 6px 18px rgba(120,80,40,.05)" }}
          >
            <div className="flex items-center gap-[7px]">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="#34E0A1" />
                <circle cx="8" cy="12" r="2.4" fill="#000" />
                <circle cx="16" cy="12" r="2.4" fill="#000" />
              </svg>
              <span className="text-[12px] font-bold text-[#4a3728]">Tripadvisor</span>
            </div>
            <div className="font-display font-bold text-[27px] text-ink leading-none">5.0</div>
            <div className="flex gap-0.5 items-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="w-[9px] h-[9px] rounded-full bg-[#34E0A1] inline-block" />
              ))}
            </div>
            <div className="text-[10.5px] text-[#9c8262] font-semibold">{tr.revTripCta}</div>
          </a>
        </div>
      </Reveal>

      <div className="flex flex-col gap-3">
        {reviews.map((rev, i) => (
          <Reveal key={rev.name} delay={0.04 * i}>
            <div
              className="bg-white border border-card-line rounded-[18px] p-[18px]"
              style={{ boxShadow: "0 6px 18px rgba(120,80,40,.05)" }}
            >
              <div className="flex items-center gap-[11px] mb-3">
                <div
                  className="flex-none w-[38px] h-[38px] rounded-full text-white flex items-center justify-center font-extrabold text-[15px]"
                  style={{ background: rev.color }}
                >
                  {rev.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[13.5px] text-ink">{rev.name}</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#e2a93a] text-[11px] tracking-[1px]">★★★★★</span>
                    <span className="text-[10.5px] text-[#9c8262]">{rev.via(lang)}</span>
                  </div>
                </div>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#efe6d4" aria-hidden="true">
                  <path d="M7 7h4v6c0 2.2-1.5 3.7-4 4v-2c1.2-.2 2-.9 2-2H7V7Zm8 0h4v6c0 2.2-1.5 3.7-4 4v-2c1.2-.2 2-.9 2-2h-2V7Z" />
                </svg>
              </div>
              <p className="text-[13.5px] leading-[1.65] text-ink-soft m-0">{rev.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <a
        href={GOOGLE_REVIEW}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 mt-3.5 bg-[#f3ead9] text-ink no-underline p-[13px] rounded-[12px] font-bold text-[13.5px] border border-[#e6d6b8]"
      >
        {tr.revAll}
      </a>
    </section>
  );
}
