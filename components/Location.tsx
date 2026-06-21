"use client";

import { useLang } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { PinIcon } from "./icons";
import Reveal from "./Reveal";

const MAP_EMBED =
  "https://www.google.com/maps?q=Djaya%20Massage%20Reflexology%20Penuin%20Centre%20Blok%20A%20No%2014%20Batam&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Djaya+Massage+Reflexology+Penuin+Centre+Blok+A+No+14+Batam";

export default function Location() {
  const { lang } = useLang();
  const tr = t(lang);
  return (
    <section className="px-[22px] pb-[52px]">
      <Reveal>
        <div
          className="bg-white border border-card-line rounded-[22px] overflow-hidden"
          style={{ boxShadow: "0 6px 20px rgba(120,80,40,.06)" }}
        >
          <iframe
            title="Djaya Massage location"
            src={MAP_EMBED}
            className="w-full block"
            style={{ height: 190, border: 0, filter: "saturate(.92)" }}
            loading="lazy"
          />
          <div className="px-6 py-[22px]">
            <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-2.5">{tr.locLabel}</div>
            <h3 className="font-display font-semibold text-[25px] text-ink m-0 mb-3">{tr.locHead}</h3>
            <div className="flex gap-[11px] mb-2">
              <span className="flex-none mt-0.5">
                <PinIcon />
              </span>
              <div className="text-[14px] leading-[1.55] text-[#4a3728] font-semibold">
                Jl. Komp. Penuin Centre No. 14, Blok A
                <br />
                <span className="font-normal text-clay">
                  Batu Selicin, Kec. Lubuk Baja,
                  <br />
                  Kota Batam, Kepulauan Riau 29411
                </span>
              </div>
            </div>
            <div className="text-[12.5px] text-clay m-0 mb-[18px] pl-[29px]">{tr.locNear}</div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 bg-[#f3ead9] text-ink no-underline p-[13px] rounded-[12px] font-bold text-[13.5px] border border-[#e6d6b8]"
            >
              <PinIcon size={15} stroke="currentColor" />
              {tr.locBtn}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
