"use client";

import { useLang } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import Reveal from "./Reveal";

function Pillar({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-card-line-2 rounded-2xl px-4 py-[18px]">
      <div className="mb-2.5">{children}</div>
      <div className="font-bold text-[13.5px] text-ink mb-[3px]">{title}</div>
      <div className="text-[11.5px] leading-[1.5] text-clay">{desc}</div>
    </div>
  );
}

const stroke = { fill: "none", stroke: "#b15a2b", strokeWidth: 1.5 } as const;

export default function About() {
  const { lang } = useLang();
  const tr = t(lang);
  return (
    <section id="about" className="px-[26px] pt-14 pb-2" aria-labelledby="about-heading">
      <Reveal>
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-3.5">{tr.aboutLabel}</div>
        <h2 id="about-heading" className="font-display font-semibold text-[33px] leading-[1.12] text-ink m-0 mb-[18px]">
          {tr.aboutHead}
        </h2>
        <p className="text-[15px] leading-[1.72] text-ink-soft m-0 mb-4">{tr.aboutBody1}</p>
        <p className="text-[15px] leading-[1.72] text-ink-soft m-0 mb-7">{tr.aboutBody2}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="grid grid-cols-2 gap-3">
          <Pillar title={tr.pillar1t} desc={tr.pillar1d}>
            <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
              <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
            </svg>
          </Pillar>
          <Pillar title={tr.pillar2t} desc={tr.pillar2d}>
            <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
              <path d="M12 2c-1.5 4-5 5.5-5 10a5 5 0 0 0 10 0c0-4.5-3.5-6-5-10Z" />
              <path d="M12 12v8" />
            </svg>
          </Pillar>
          <Pillar title={tr.pillar3t} desc={tr.pillar3d}>
            <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
              <path d="m12 3 2.5 5.2L20 9l-4 4 1 6-5-2.8L7 19l1-6-4-4 5.5-.8Z" />
            </svg>
          </Pillar>
          <Pillar title={tr.pillar4t} desc={tr.pillar4d}>
            <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
            </svg>
          </Pillar>
        </div>
      </Reveal>
    </section>
  );
}
