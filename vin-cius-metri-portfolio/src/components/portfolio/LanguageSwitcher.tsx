import { useLanguage, type Locale } from "@/i18n/context";

function BrFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect width="36" height="36" rx="4" fill="#009739" />
      <path d="M18 5L33 18L18 31L3 18Z" fill="#FEDD00" />
      <circle cx="18" cy="18" r="7" fill="#002776" />
      <path d="M11 18.5C11 18.5 14.5 21 18 21C21.5 21 25 18.5 25 18.5" stroke="#fff" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function UsFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect width="36" height="36" rx="4" fill="#B22234" />
      <rect y="2.77" width="36" height="2.77" fill="#fff" />
      <rect y="8.31" width="36" height="2.77" fill="#fff" />
      <rect y="13.85" width="36" height="2.77" fill="#fff" />
      <rect y="19.38" width="36" height="2.77" fill="#fff" />
      <rect y="24.92" width="36" height="2.77" fill="#fff" />
      <rect y="30.46" width="36" height="2.77" fill="#fff" />
      <rect width="16" height="19.38" fill="#3C3B6E" />
    </svg>
  );
}

function EsFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect width="36" height="36" rx="4" fill="#AA151B" />
      <rect y="9" width="36" height="18" fill="#F1BF00" />
      <rect width="36" height="9" rx="4" fill="#AA151B" />
      <rect y="27" width="36" height="9" rx="4" fill="#AA151B" />
    </svg>
  );
}

const languages: { locale: Locale; label: string; Flag: React.FC<{ className?: string }> }[] = [
  { locale: "pt", label: "Português", Flag: BrFlag },
  { locale: "en", label: "English", Flag: UsFlag },
  { locale: "es", label: "Español", Flag: EsFlag },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => {
        const isActive = locale === lang.locale;
        return (
          <button
            key={lang.locale}
            type="button"
            onClick={() => setLocale(lang.locale)}
            aria-label={lang.label}
            title={lang.label}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isActive
                ? "bg-accent/10 ring-1 ring-accent/40"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <lang.Flag className="h-5 w-5 rounded-sm" />
          </button>
        );
      })}
    </div>
  );
}
