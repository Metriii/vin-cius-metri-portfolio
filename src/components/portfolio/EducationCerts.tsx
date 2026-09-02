import { ExternalLink, GraduationCap, Award } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function EducationCerts() {
  return (
    <Section
      id="formacao"
      eyebrow="05 — Base"
      title="Formação e certificações"
      subtitle="Formação acadêmica e cursos concluídos ao longo da minha evolução técnica."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-medium text-foreground">
            <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
            Formação
          </h3>
          <ul className="mt-5 grid gap-4">
            {education.map((e, i) => (
              <li key={e.course}>
                <Reveal delay={i * 60}>
                  <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/60">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h4 className="text-base font-medium text-foreground">{e.course}</h4>
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-0.5 font-mono text-xs text-accent">
                        {e.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">{e.period}</p>
                    {e.description ? (
                      <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-lg font-medium text-foreground">
            <Award className="h-5 w-5 text-accent" aria-hidden="true" />
            Certificações
          </h3>
          <ul className="mt-5 grid gap-4">
            {certifications.map((c, i) => (
              <li key={c.title}>
                <Reveal delay={i * 60}>
                  <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/60">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h4 className="text-base font-medium text-foreground">{c.title}</h4>
                      <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{c.institution}</p>
                    {c.description ? (
                      <p className="mt-3 text-sm text-muted-foreground">{c.description}</p>
                    ) : null}
                    {c.credentialUrl ? (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        Ver credencial
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
