"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang } from "@/lib/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LanguageContext = createContext<Ctx>({ lang: "id", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  // Pick up stored preference, then browser language, on the client only.
  useEffect(() => {
    let initial: Lang | null = null;
    try {
      const stored = localStorage.getItem("djaya-lang");
      if (stored === "id" || stored === "en") initial = stored;
    } catch {}
    if (!initial) {
      initial = (navigator.language || "id").toLowerCase().startsWith("en") ? "en" : "id";
    }
    if (initial !== "id") setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("djaya-lang", l);
    } catch {}
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
