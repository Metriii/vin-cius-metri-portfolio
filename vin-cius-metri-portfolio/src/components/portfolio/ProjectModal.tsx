import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { useTranslatedData } from "@/hooks/use-translated-data";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const { translateProject, translateProjectFeature, modal } = useTranslatedData();
  if (!project) return null;

  const p = translateProject(project);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl pr-8">{p.title}</DialogTitle>
          <DialogDescription>{p.category}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-2">
          {p.image ? (
            <img
              src={p.image}
              alt={`Capa do projeto ${p.title}`}
              width={1280}
              height={720}
              className="w-full rounded-xl object-cover"
              style={{ maxHeight: "360px" }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-secondary/50 py-16">
              <ImageIcon className="h-10 w-10 text-muted-foreground/40" aria-hidden="true" />
              <p className="text-sm text-muted-foreground/60">{modal.mediaComingSoon}</p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">{modal.aboutProject}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          </div>

          {project.problem ? (
            <div className="border-l-2 border-accent bg-accent/5 pl-4 py-3 rounded-r-lg">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-1">
                {modal.problem}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
            </div>
          ) : null}

          {p.features?.length ? (
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">{modal.functionalities}</h4>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">
                    <span className="mr-2 text-accent">·</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div>
            <h4 className="text-sm font-medium text-foreground mb-3">{modal.technologies}</h4>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {p.status ? (
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {modal.status}: {p.status}
            </p>
          ) : null}

          {project.github || project.demo ? (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {modal.viewGithub}
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {modal.viewProject}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
