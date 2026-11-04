import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projectFilters, projects, type Project, type ProjectFilter } from "@/data/portfolio";
import { useLanguage } from "@/i18n/context";
import { useTranslatedData } from "@/hooks/use-translated-data";
import { Reveal, Section } from "./Section";
import { cn } from "@/lib/utils";
import { ProjectModal } from "./ProjectModal";

function FeaturedProject({
  project,
  onClick,
  t,
  translatedProject,
}: {
  project: Project;
  onClick: () => void;
  t: ReturnType<typeof useLanguage>["t"];
  translatedProject: Project;
}) {
  return (
    <Reveal>
      <article
        onClick={onClick}
        className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2 cursor-pointer transition-colors hover:border-accent/60"
      >
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
            {t.projects.featured}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{translatedProject.category}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {translatedProject.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          {translatedProject.features?.length ? (
            <div className="mt-6">
              <h4 className="text-sm font-medium text-foreground">{t.projects.functionalities}</h4>
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {translatedProject.features.map((f) => (
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
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> {t.projects.viewGithub}
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> {t.projects.viewProject}
                </a>
              ) : null}
            </div>
          ) : null}

          {translatedProject.status ? (
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t.projects.status}: {translatedProject.status}
            </p>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({
  project,
  delay,
  onClick,
  translatedProject,
}: {
  project: Project;
  delay: number;
  onClick: () => void;
  translatedProject: Project;
}) {
  return (
    <Reveal delay={delay}>
      <article
        onClick={onClick}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/60 cursor-pointer"
      >
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
          <p className="font-mono text-xs text-accent">{translatedProject.category}</p>
          <h3 className="mt-2 text-lg font-medium text-foreground">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {translatedProject.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {tech}
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
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();
  const { translateProject } = useTranslatedData();
  const featured = projects.find((p) => p.featured);

  const visible = useMemo(
    () =>
      projects.filter(
        (p) => (filter === "Todos" || p.filters.includes(filter as never)) && !p.featured,
      ),
    [filter],
  );

  const filterLabels: Record<string, string> = {
    Todos: t.projects.filters.all,
    "Full-Stack": t.projects.filters.fullstack,
    Backend: t.projects.filters.backend,
    Frontend: t.projects.filters.frontend,
    IA: t.projects.filters.ai,
    Dados: t.projects.filters.data,
    Automação: t.projects.filters.automation,
  };

  return (
    <Section
      id="projetos"
      eyebrow="03 — Trabalhos"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
    >
      {featured ? (
        <FeaturedProject
          project={featured}
          onClick={() => setSelectedProject(featured)}
          t={t}
          translatedProject={translateProject(featured)}
        />
      ) : null}

      <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos">
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
            {filterLabels[f] || f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard
            key={`${p.title}-${i}`}
            project={p}
            delay={i * 60}
            onClick={() => setSelectedProject(p)}
            translatedProject={translateProject(p)}
          />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">{t.projects.noProjects}</p>
      ) : null}

      <ProjectModal
        project={selectedProject}
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      />
    </Section>
  );
}
