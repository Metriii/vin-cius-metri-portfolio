import alzheimerAssistCover from "@/assets/alzheimerassist.jpg";
import profilePhoto from "@/assets/vinicius-metri.jpg";

/**
 * ARQUIVO CENTRAL DE CONTEÚDO DO PORTFÓLIO
 * Edite apenas este arquivo para atualizar o site.
 */

export const personalInfo = {
  greeting: "Olá, eu sou",
  name: "Vinícius Metri",
  role: "Desenvolvedor Full-Stack",
  specialties: ["ASP.NET Core", "Java", "Python", "Angular", "PostgreSQL", "SQLite"],
  location: "Maceió, Alagoas, Brasil",
  email: "vinicius.metri.dev@gmail.com",
  whatsapp: "+55 (82) 994365455",
  whatsappNumber: "5582994365455",
  heroDescription:
    "Desenvolvedor de software em formação, com foco em ASP.NET Core, Java, Python, Angular, PostgreSQL e SQLite, criando aplicações, APIs e soluções que combinam desenvolvimento de software, dados e novas tecnologias.",
  positioning:
    "Desenvolvedor Full-Stack em formação, focado na construção de aplicações web, APIs e soluções utilizando tecnologias modernas, com especial interesse em backend, Inteligência Artificial, dados e automação.",
  photo: profilePhoto,
};

export const socialLinks = {
  github: "https://github.com/Metriii",
  linkedin: "https://www.linkedin.com/in/vinicius-metri",
  whatsapp: `https://wa.me/${personalInfo.whatsappNumber}`,
  email: `mailto:${personalInfo.email}`,
};

export const heroSnippet = `const developer = {
  name: "Vinícius Metri",
  role: "Full-Stack Developer",
  focus: [
    "Backend",
    "Frontend",
    "AI",
    "Data"
  ]
};`;

export const about = {
  title: "Sobre mim",
  paragraphs: [
    "Sou estudante de Sistemas de Informação no CESMAC e desenvolvedor Full-Stack em formação. Tenho foco no desenvolvimento de aplicações web utilizando tecnologias como C#, ASP.NET Core, Java, Python, Angular, PostgreSQL e SQLite.",
    "Busco constantemente transformar conhecimentos adquiridos nos estudos em projetos práticos, explorando também Inteligência Artificial, dados e automação.",
    "Meu objetivo é evoluir como desenvolvedor através da construção de soluções reais com Inteligência Artificial e automação, mantendo uma rotina de aprendizado contínuo e experimentação com novas tecnologias.",
  ],
  highlights: ["Full-Stack Development", "Backend & APIs", "Frontend", "AI & Data", "Automation"],
};

export type Education = {
  course: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
};

export const education: Education[] = [
  {
    course: "Sistemas de Informação",
    institution: "Centro Universitário CESMAC",
    period: "2024 — 2028",
    status: "Em andamento",
  },
  // Adicione aqui: pós-graduação, cursos, intercâmbios, especializações.
];

export type Certification = {
  title: string;
  institution: string;
  year: string;
  description?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Foundational C# with Microsoft",
    institution: "freeCodeCamp",
    year: "2026",
  },
  {
    title: "C# Completo — Programação Orientada a Objetos",
    institution: "Udemy",
    year: "2026",
  },
  {
    title: "C# para Web",
    institution: "OxeTech Academy",
    year: "2026",
  },
];

export type WorkExperience = {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
};

export const workExperiences: WorkExperience[] = [
  {
    role: "Suporte de TI",
    company: "Colégio Contato",
    period: "09/2024 — 01/2025",
    type: "Estágio",
    description:
      "Manutenção de hardware e suporte técnico. Acompanhamento de aulas com iPads. Coleta de dados e elaboração de relatórios.",
  },
  {
    role: "Desenvolvimento, Suporte e Infraestrutura",
    company: "ADCOL",
    period: "09/2026 — Atual",
    type: "Estágio",
    description: "Desenvolvimento, suporte e infraestrutura em empresa de consultoria contábil.",
  },
  {
    role: "Desenvolvedor FullStack",
    company: "Freelancer",
    period: "Contínuo",
    type: "Freelancer",
    description: "Desenvolvimento de sites e aplicações web para clientes.",
  },
];

export type TechCategory =
  "Backend" | "Frontend" | "Banco de dados" | "IA / Dados" | "Ferramentas e infraestrutura";

export type Technology = {
  name: string;
  category: TechCategory;
  /** Slug do simpleicons.org (opcional). */
  icon?: string;
};

export const technologies: Technology[] = [
  { name: "C#", category: "Backend", icon: "dotnet" },
  { name: ".NET", category: "Backend", icon: "dotnet" },
  { name: "ASP.NET Core", category: "Backend", icon: "dotnet" },
  { name: "ASP.NET MVC", category: "Backend", icon: "dotnet" },
  { name: "APIs REST", category: "Backend" },
  { name: "Java", category: "Backend", icon: "openjdk" },
  { name: "Python", category: "Backend", icon: "python" },

  { name: "Angular", category: "Frontend", icon: "angular" },
  { name: "React", category: "Frontend", icon: "react" },
  { name: "JavaScript", category: "Frontend", icon: "javascript" },
  { name: "HTML", category: "Frontend", icon: "html5" },
  { name: "CSS", category: "Frontend", icon: "css" },

  { name: "PostgreSQL", category: "Banco de dados", icon: "postgresql" },
  { name: "SQLite", category: "Banco de dados", icon: "sqlite" },

  { name: "Python", category: "IA / Dados", icon: "python" },
  { name: "Inteligência Artificial", category: "IA / Dados" },
  { name: "APIs de IA", category: "IA / Dados" },
  { name: "Machine Learning", category: "IA / Dados" },

  { name: "Git", category: "Ferramentas e infraestrutura", icon: "git" },
  { name: "GitHub", category: "Ferramentas e infraestrutura", icon: "github" },
  { name: "Docker", category: "Ferramentas e infraestrutura", icon: "docker" },
  { name: "Supabase", category: "Ferramentas e infraestrutura", icon: "supabase" },
  { name: "n8n", category: "Ferramentas e infraestrutura", icon: "n8n" },
];

export const techCategories: TechCategory[] = [
  "Backend",
  "Frontend",
  "Banco de dados",
  "IA / Dados",
  "Ferramentas e infraestrutura",
];

export const projectFilters = [
  "Todos",
  "Full-Stack",
  "Backend",
  "Frontend",
  "IA",
  "Dados",
  "Automação",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  title: string;
  description: string;
  image?: string;
  media?: { type: "image" | "video"; url: string; alt?: string }[];
  technologies: string[];
  category: string;
  /** Usado pelos filtros da seção de projetos. */
  filters: Exclude<ProjectFilter, "Todos">[];
  features?: string[];
  problem?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "AlzheimerAssist",
    description:
      "Aplicação desenvolvida para auxiliar pessoas com Alzheimer e seus cuidadores, oferecendo recursos para organização da rotina, acompanhamento de atividades e maior autonomia do paciente.",
    image: alzheimerAssistCover,
    technologies: ["Angular", "C#", ".NET", "PostgreSQL", "APIs REST"],
    category: "Software · Inteligência Artificial",
    filters: ["Full-Stack", "Backend", "Frontend", "IA"],
    features: [
      "Autenticação",
      "Reconhecimento facial",
      "Vínculo entre paciente e cuidador",
      "Agenda diária",
      "Controle de medicações",
      "Agenda anual",
      "Atividades cognitivas",
      "Jogo da memória",
      "Quebra-cabeça",
      "Associação",
      "Atividades com animais",
    ],
    featured: true,
    status: "Em desenvolvimento",
  },
  {
    title: "LaudoPro",
    description:
      "Solução de automação de processos e documentos técnicos, otimizando a criação e organização de laudos técnicos de forma padronizada e eficiente.",
    technologies: ["C#", ".NET", "ASP.NET", "PostgreSQL"],
    category: "Automação · Documentos",
    filters: ["Backend", "Automação"],
    features: [
      "Ceração automatizada de laudos técnicos",
      "Estruturação de informações técnicas",
      "Padronização de documentos",
      "Contextos NR-15 e NR-16",
      "Organização e consulta de laudos",
    ],
  },
  {
    title: "ModoTech",
    description:
      "Plataforma voltada para utilização de automações e Inteligência Artificial para tornar processos digitais mais inteligentes e eficientes.",
    technologies: ["Inteligência Artificial", "Agentes de IA", "Automação", "APIs", "Docker"],
    category: "IA · Automação",
    filters: ["IA", "Automação"],
    features: [
      "Fluxos automatizados inteligentes",
      "Integração entre diferentes serviços",
      "Agentes de IA para execução de tarefas",
      "Redução de processos manuais",
    ],
  },
  {
    title: "PontoFácil",
    description:
      "Sistema inteligente de automação de controle de ponto que utiliza Inteligência Artificial e reconhecimento óptico de caracteres (OCR) para digitalizar cartões de ponto manuscritos, extrair registros de horários e gerar planilhas organizadas por funcionário e período.",
    technologies: ["Inteligência Artificial", "OCR", "Python", "Automação", "JSON", "Excel"],
    category: "OCR · IA · Automação",
    filters: ["IA", "Automação", "Dados"],
    features: [
      "Leitura automatizada de cartões de ponto manuscritos",
      "Reconhecimento e extração de horários com OCR",
      "Processamento inteligente dos registros",
      "Organização dos dados por funcionário e período",
      "Geração automatizada de planilhas Excel",
    ],
  },
  {
    title: "Gestão de Condomínio",
    description:
      "Plataforma desenvolvida para facilitar a administração e organização de condomínios, centralizando informações e processos administrativos em um único sistema.",
    technologies: ["Desenvolvimento Web", "Banco de Dados", "APIs", "Sistemas de Gestão"],
    category: "Software · Gestão",
    filters: ["Full-Stack", "Backend"],
    features: [
      "Gestão de moradores e unidades",
      "Centralização de informações",
      "Processos administrativos otimizados",
      "Acesso facilitado a dados do condomínio",
    ],
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Início da graduação em Sistemas de Informação",
    description: "CESMAC",
  },
  {
    year: "2024",
    title: "Estágio de Suporte de TI",
    description:
      "Colégio Contato — manutenção de hardware, suporte a iPads, coleta de dados e elaboração de relatórios.",
  },
  {
    year: "2025",
    title: "Curso de extensão na Argentina",
    description: "UNOBA — aprendizado de novo idioma.",
  },
  {
    year: "2026",
    title: "Aprofundamento em desenvolvimento Full-Stack",
    description: "C#, .NET, Angular, PostgreSQL e desenvolvimento de APIs.",
  },
  {
    year: "2026",
    title: "Freelancer em desenvolvimento",
    description: "Sites e aplicações web para clientes.",
  },
  {
    year: "2026",
    title: "Estágio em Desenvolvimento, Suporte e Infraestrutura",
    description: "ADCOL — desenvolvimento, suporte e infraestrutura.",
  },
  {
    year: "2026",
    title: "Expansão para Inteligência Artificial e automação",
    description: "Projetos envolvendo IA, automação e integração de tecnologias.",
  },
];

export const githubSection = {
  title: "Código aberto e projetos",
  text: "Confira meus projetos, estudos e experimentos no GitHub.",
  buttonLabel: "Visitar GitHub",
  url: socialLinks.github,
  /** Futuro: preencher com repositórios da API pública do GitHub. */
  username: "Metriii",
};

export const contact = {
  title: "Vamos construir algo juntos?",
  text: "Estou aberto a oportunidades, projetos e conexões na área de tecnologia.",
};

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];
