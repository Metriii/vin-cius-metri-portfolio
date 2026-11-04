import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { useLanguage } from "@/i18n/context";
import { Reveal, Section } from "./Section";

export function GithubSection() {
  const { t } = useLanguage();

  return (
    <Section id="github" eyebrow="06 — Open source" title={t.github.title}>
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <Github className="mt-1 h-8 w-8 text-accent" aria-hidden="true" />
            <div>
              <p className="text-base text-foreground">{t.github.text}</p>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                github.com/vin-metri
              </p>
            </div>
          </div>
          <a
            href="https://github.com/vin-metri"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.github.button}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contato" eyebrow="07 — Contato" title={t.contact.title} subtitle={t.contact.text}>
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <ul className="grid gap-4">
            <li>
              <a
                href={socialLinks.email}
                className="group flex items-center gap-3 text-base text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                {personalInfo.email}
              </a>
            </li>
            <li>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-base text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MessageCircle className="h-5 w-5 text-accent" aria-hidden="true" />
                {personalInfo.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-base text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin className="h-5 w-5 text-accent" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-base text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github className="h-5 w-5 text-accent" aria-hidden="true" />
                GitHub
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3">
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> {t.contact.email}
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> {t.contact.whatsapp}
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" /> {t.contact.linkedin}
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Github className="h-4 w-4" aria-hidden="true" /> {t.contact.github}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="font-mono text-xs">{t.footer.location}</p>
      </div>
    </footer>
  );
}
