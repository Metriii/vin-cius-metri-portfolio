import { Github, Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";
import { heroSnippet, personalInfo, socialLinks } from "@/data/portfolio";
import { Reveal } from "./Section";

const links = [
  { label: "GitHub", href: socialLinks.github, icon: Github, external: true },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin, external: true },
  { label: "WhatsApp", href: socialLinks.whatsapp, icon: MessageCircle, external: true },
  { label: "E-mail", href: socialLinks.email, icon: Mail, external: false },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-32">
        <Reveal>
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-accent">
              {personalInfo.greeting}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-muted-foreground md:text-2xl">
              {personalInfo.role}
            </p>

            <ul className="mt-5 flex flex-wrap items-center gap-2" aria-label="Especialidades">
              {personalInfo.specialties.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {personalInfo.heroDescription}
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {personalInfo.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Ver meus projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Entre em contato
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-3">
              {links.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-card shadow-elevated">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                developer.ts
              </span>
            </div>
            <pre
              aria-hidden="true"
              className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground"
            >
              <code>{heroSnippet}</code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
