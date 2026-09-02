import { timeline } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function Timeline() {
  return (
    <Section
      id="trajetoria"
      eyebrow="04 — Evolução"
      title="Minha trajetória"
      subtitle="Marcos da minha formação e do meu desenvolvimento técnico."
    >
      <ol className="relative border-l border-border pl-6">
        {timeline.map((item, i) => (
          <li key={`${item.year}-${item.title}`} className="pb-10 last:pb-0">
            <Reveal delay={i * 80}>
              <span
                className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <p className="font-mono text-xs tracking-[0.18em] text-accent">{item.year}</p>
              <h3 className="mt-2 text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
