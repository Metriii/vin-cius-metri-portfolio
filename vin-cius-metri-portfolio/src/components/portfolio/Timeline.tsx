import { timeline } from "@/data/portfolio";
import { useLanguage } from "@/i18n/context";
import { useTranslatedData } from "@/hooks/use-translated-data";
import { Reveal, Section } from "./Section";

export function Timeline() {
  const { t } = useLanguage();
  const { translateTimelineItem } = useTranslatedData();

  return (
    <Section
      id="trajetoria"
      eyebrow="04 — Evolução"
      title={t.timeline.title}
      subtitle={t.timeline.subtitle}
    >
      <ol className="relative border-l border-border pl-6">
        {timeline.map((item, i) => {
          const translated = translateTimelineItem(item, i);
          return (
            <li key={`${item.year}-${item.title}`} className="relative pb-10 last:pb-0">
              <Reveal delay={i * 80}>
                <span
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs tracking-[0.18em] text-accent">{item.year}</p>
                <h3 className="mt-2 text-lg font-medium text-foreground">{translated.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {translated.description}
                </p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
