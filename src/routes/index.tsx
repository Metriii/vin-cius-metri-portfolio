import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Technologies } from "@/components/portfolio/Technologies";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { EducationCerts } from "@/components/portfolio/EducationCerts";
import { GithubSection, Contact, Footer } from "@/components/portfolio/GithubContact";

const title = "Vinícius Metri | Desenvolvedor Full-Stack";
const description =
  "Portfólio de Vinícius Metri, desenvolvedor Full-Stack em formação, com foco em C#, ASP.NET Core, Angular, PostgreSQL, Inteligência Artificial e desenvolvimento de software.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vinícius Metri",
          jobTitle: "Desenvolvedor Full-Stack",
          email: "mailto:vinicius.metri.dev@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Maceió",
            addressRegion: "AL",
            addressCountry: "BR",
          },
          alumniOf: "Centro Universitário CESMAC",
          sameAs: [
            "https://github.com/Metriii",
            "https://www.linkedin.com/in/vinicius-metri",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Timeline />
        <EducationCerts />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
