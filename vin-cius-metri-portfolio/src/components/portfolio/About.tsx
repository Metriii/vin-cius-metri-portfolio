import { about, personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/context";
import { Reveal, Section } from "./Section";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="sobre" eyebrow="01 — Perfil" title={t.about.title}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5">
            {t.about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <p className="border-l-2 border-accent pl-4 text-base leading-relaxed text-foreground">
              {t.about.positioning}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid gap-3">
            {t.about.highlights.map((h) => (
              <li
                key={h}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/60"
              >
                <span className="mr-2 font-mono text-accent">/</span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
