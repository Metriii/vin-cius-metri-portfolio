import { useMemo, useState } from "react";
import { ExternalLink, Github, Plus } from "lucide-react";
import {
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from "@/data/portfolio";
import { Reveal, Section } from "./Section";
import { cn } from "@/lib/utils";

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
        {project.image ? (
          <img
            src={project.image}
            alt={`Capa do projeto ${project.title}`}
            width={1280}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="min-h-56 bg-secondary" aria-hidden="true" />
        )}

        <div className="p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Projeto em destaque
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
            {project.technologies.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          {project.features?.length ? (
            <div className="mt-6">
              <h4 className="text-sm font-medium text-foreground">
                Principais funcionalidades
              </h4>
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">
                    <span className="mr-2 text-accent">·</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.github || project.demo ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> Ver GitHub
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> Ver projeto
                </a>
              ) : null}
            </div>
          ) : null}

          {project.status ? (
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Status: {project.status}
            </p>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  if (project.placeholder) {
    return (
      <Reveal delay={delay}>
        <div className="flex h-full flex-col items-start justify-center rounded-xl border border-dashed border-border bg-card/40 p-6">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-dashed border-border text-muted-foreground">
            <Plus className="h-4 w-4" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-base font-medium text-muted-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
            {project.description}
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/60">
        {project.image ? (
          <img
            src={project.image}
            alt={`Capa do projeto ${project.title}`}
            width={1280}
            height={800}
            loading="lazy"
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : null}
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-xs text-accent">{project.category}</p>
          <h3 className="mt-2 text-lg font-medium text-foreground">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
          {project.github || project.demo ? (
            <div className="mt-5 flex gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`GitHub do projeto ${project.title}`}
                  className="text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Demo do projeto ${project.title}`}
                  className="text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("Todos");
  const featured = projects.find((p) => p.featured);

  const visible = useMemo(
    () =>
      projects.filter(
        (p) => filter === "Todos" || p.filters.includes(filter as never),
      ),
    [filter],
  );

  return (
    <Section
      id="projetos"
      eyebrow="03 — Trabalhos"
      title="Projetos"
      subtitle="Projetos que desenvolvi para transformar conhecimento em soluções práticas."
    >
      {featured ? <FeaturedProject project={featured} /> : null}

      <div
        className="mt-12 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar projetos"
      >
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              filter === f
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted-foreground hover:border-accent/60 hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} project={p} delay={i * 60} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">
          Nenhum projeto nesta categoria por enquanto.
        </p>
      ) : null}
    </Section>
  );
}
