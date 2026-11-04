import { createContext, useContext, useState, type ReactNode } from "react";
import pt from "./pt.json";
import en from "./en.json";
import es from "./es.json";

export type Locale = "pt" | "en" | "es";

const translations = { pt, en, es } as const;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof pt;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-locale") as Locale | null;
      if (saved && ["pt", "en", "es"].includes(saved)) return saved;
    }
    return "pt";
  });

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
    document.documentElement.lang = newLocale === "pt" ? "pt-BR" : newLocale;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
