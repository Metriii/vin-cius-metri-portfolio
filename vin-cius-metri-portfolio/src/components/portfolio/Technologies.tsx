import { techCategories, technologies } from "@/data/portfolio";
import { useLanguage } from "@/i18n/context";
import { useTranslatedData } from "@/hooks/use-translated-data";
import { Reveal, Section } from "./Section";

export function Technologies() {
  const { t } = useLanguage();
  const { translateTechCategory, translateTechName } = useTranslatedData();

  return (
    <Section
      id="tecnologias"
      eyebrow="02 — Stack"
      title={t.technologies.title}
      subtitle={t.technologies.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category, i) => {
          const items = technologies.filter((t) => t.category === category);
          if (items.length === 0) return null;
          return (
            <Reveal key={category} delay={i * 60}>
              <div className="h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {translateTechCategory(category)}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((t) => (
                    <li
                      key={t.name}
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                    >
                      {t.icon ? (
                        <img
                          src={`https://cdn.simpleicons.org/${t.icon}/9aa4b2`}
                          alt=""
                          aria-hidden="true"
                          width={14}
                          height={14}
                          loading="lazy"
                          className="h-3.5 w-3.5"
                        />
                      ) : null}
                      {translateTechName(t.name)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
