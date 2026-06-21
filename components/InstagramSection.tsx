"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { reels, igPhotos } from "@/lib/content";
import Reveal from "./Reveal";

const IG = "https://www.instagram.com/djayamassage/";
const IG_REELS = "https://www.instagram.com/djayamassage/reels/";

export default function InstagramSection() {
  const { lang } = useLang();
  const tr = t(lang);
  return (
    <section className="px-[26px] pb-[50px]">
      <Reveal>
        <div className="flex items-end justify-between mb-[18px]">
          <div>
            <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-2">{tr.igHead}</div>
            <a href={IG} target="_blank" rel="noopener" className="font-display font-bold text-[23px] text-ink no-underline">
              @djayamassage
            </a>
          </div>
          <a
            href={IG}
            target="_blank"
            rel="noopener"
            className="flex-none bg-terracotta text-white no-underline px-[18px] py-[9px] rounded-[10px] font-bold text-[12.5px]"
          >
            {tr.igFollow}
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="text-[11.5px] font-bold text-clay mb-2.5 flex items-center gap-[7px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b15a2b" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <path d="m10 9 5 3-5 3V9Z" fill="#b15a2b" />
          </svg>
          {tr.igReels}
        </div>
        <div className="grid grid-cols-3 gap-2 mb-[18px]">
          {reels.map((reel) => (
            <a
              key={reel.n}
              href={IG_REELS}
              target="_blank"
              rel="noopener"
              className="relative block rounded-[13px] overflow-hidden no-underline"
              style={{ aspectRatio: "9 / 16" }}
            >
              <Image src={reel.img} alt={reel.cap(lang)} fill sizes="150px" className="object-cover" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(0,0,0,.55))" }}
              />
              <div className="absolute top-[7px] right-[7px] pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                  <path d="m9 8 8 4-8 4V8Z" />
                </svg>
              </div>
              <div className="absolute left-2 bottom-[7px] text-white text-[9.5px] font-bold pointer-events-none">
                {reel.cap(lang)}
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid grid-cols-3 gap-2">
          {igPhotos.map((src, i) => (
            <a
              key={src}
              href={IG}
              target="_blank"
              rel="noopener"
              className="relative block rounded-[13px] overflow-hidden"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image src={src} alt={`Djaya Massage Batam — galeri ${i + 1}`} fill sizes="150px" className="object-cover" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
