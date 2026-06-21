"use client";

import { useLang } from "./LanguageProvider";
import { t, wa, bookMsg } from "@/lib/i18n";
import { WhatsAppIcon } from "./icons";

export default function StickyBook() {
  const { lang } = useLang();
  const tr = t(lang);
  return (
    <a
      href={wa(bookMsg(lang))}
      target="_blank"
      rel="noopener"
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-app z-50 flex items-center justify-center gap-2.5 bg-wa text-white no-underline p-4 font-bold text-[15px]"
      style={{ boxShadow: "0 -6px 24px rgba(0,0,0,.22)" }}
    >
      <WhatsAppIcon size={20} />
      {tr.ctaBook}
    </a>
  );
}
