# Plano de modificações — Portfólio Vinícius Metri

> Documento de planejamento. Descreve todas as alterações acordadas antes da implementação.
> Última atualização: 04/11/2026
>
> **Status:** implementado em 04/11/2026 — `npm run build` executado com sucesso. Os itens opcionais da seção 7 continuam pendentes.

## Objetivo

1. Incluir **Java, Python e SQLite** no posicionamento do portfólio (Hero, Sobre e grade de Tecnologias).
2. Reforçar a menção a **Inteligência Artificial e automação** no objetivo profissional.
3. Adicionar o projeto **PontoFácil** (OCR + IA + automação de cartões de ponto).
4. Manter os **três idiomas** (PT-BR, EN, ES) e a documentação sincronizados.
5. Substituir o **favicon do Lovable** por um ícone próprio do portfólio.

## Decisões tomadas

| Tema | Decisão |
| --- | --- |
| Python na grade de Tecnologias | Aparece em **Backend** e também em **IA / Dados** |
| Chips do Hero (`specialties`) | As **6** tecnologias: ASP.NET Core, Java, Python, Angular, PostgreSQL, SQLite |
| Escopo | Site (`src/`) + SEO + documentação (`README.md`, `portfolio-development-skill.md`) |
| Descrição do PontoFácil | Usar a **descrição longa** ("Sistema inteligente de automação...") |
| Filtros do PontoFácil | **IA + Automação + Dados** |
| Imagens do PontoFácil | Sem mídia por enquanto — o modal exibe automaticamente "Imagens e vídeos em breve" |
| Favicon | Substituir o coração do Lovable por monograma **"V"** (fundo `#0B1015`, letra `#3AD2B7`), legível em 16px |

---

## 1. `src/data/portfolio.ts`

### 1.1 `personalInfo.specialties` (linha ~13)

```ts
specialties: ["ASP.NET Core", "Java", "Python", "Angular", "PostgreSQL", "SQLite"],
```

### 1.2 `personalInfo.heroDescription` (linha ~19)

> Desenvolvedor de software em formação, com foco em **ASP.NET Core, Java, Python, Angular, PostgreSQL e SQLite**, criando aplicações, APIs e soluções que combinam desenvolvimento de software, dados e novas tecnologias.

### 1.3 `about.paragraphs[0]` (linha ~46)

> Sou estudante de Sistemas de Informação no CESMAC e desenvolvedor Full-Stack em formação. Tenho foco no desenvolvimento de aplicações web utilizando tecnologias como **C#, ASP.NET Core, Java, Python, Angular, PostgreSQL e SQLite**.

### 1.4 `about.paragraphs[2]` — objetivo (linha ~48)

Antes:

> Meu objetivo é evoluir como desenvolvedor através da construção de soluções reais, mantendo uma rotina de aprendizado contínuo e experimentação com novas tecnologias.

Depois:

> Meu objetivo é evoluir como desenvolvedor através da construção de soluções reais **com Inteligência Artificial e automação**, mantendo uma rotina de aprendizado contínuo e experimentação com novas tecnologias.

### 1.5 `about.positioning` (linha ~21)

Já contempla backend, Inteligência Artificial, dados e automação — **sem alteração**:

> Desenvolvedor Full-Stack em formação, focado na construção de aplicações web, APIs e soluções utilizando tecnologias modernas, com especial interesse em backend, Inteligência Artificial, dados e automação.

### 1.6 `technologies` (linhas ~140-165)

Adicionar/reorganizar:

| Tecnologia | Categoria | Ícone |
| --- | --- | --- |
| Java | Backend | `openjdk` (já existe) |
| Python | **Backend** (novo) + IA / Dados (existente) | `python` |
| SQLite | **Banco de dados** (novo) | `sqlite` |
| React | Frontend | `react` |

Observação: Python duplicado entre categorias é seguro — `Technologies.tsx` renderiza uma lista por categoria, sem colisão de `key` nem repetição dentro do mesmo card.

---

## 2. Internacionalização — `src/i18n/pt.json`, `en.json`, `es.json`

Atualizar as mesmas três chaves nos três arquivos.

### 2.1 `hero.description`

- **PT:** Desenvolvedor de software em formação, com foco em ASP.NET Core, Java, Python, Angular, PostgreSQL e SQLite, criando aplicações, APIs e soluções que combinam desenvolvimento de software, dados e novas tecnologias.
- **EN:** Software developer in training, focused on ASP.NET Core, Java, Python, Angular, PostgreSQL and SQLite, creating applications, APIs and solutions that combine software development, data and new technologies.
- **ES:** Desarrollador de software en formación, con enfoque en ASP.NET Core, Java, Python, Angular, PostgreSQL y SQLite, creando aplicaciones, APIs y soluciones que combinan desarrollo de software, datos y nuevas tecnologías.

### 2.2 `about.paragraphs[0]`

- **PT:** Sou estudante de Sistemas de Informação no CESMAC e desenvolvedor Full-Stack em formação. Tenho foco no desenvolvimento de aplicações web utilizando tecnologias como C#, ASP.NET Core, Java, Python, Angular, PostgreSQL e SQLite.
- **EN:** I'm a Information Systems student at CESMAC and a Full-Stack developer in training. I focus on web application development using technologies like C#, ASP.NET Core, Java, Python, Angular, PostgreSQL and SQLite.
- **ES:** Soy estudiante de Sistemas de Información en CESMAC y desarrollador Full-Stack en formación. Me enfoco en el desarrollo de aplicaciones web utilizando tecnologías como C#, ASP.NET Core, Java, Python, Angular, PostgreSQL y SQLite.

### 2.3 `about.paragraphs[2]`

- **PT:** Meu objetivo é evoluir como desenvolvedor através da construção de soluções reais com Inteligência Artificial e automação, mantendo uma rotina de aprendizado contínuo e experimentação com novas tecnologias.
- **EN:** My goal is to evolve as a developer through building real solutions with Artificial Intelligence and automation, maintaining a routine of continuous learning and experimentation with new technologies.
- **ES:** Mi objetivo es evolucionar como desarrollador a través de la construcción de soluciones reales con Inteligencia Artificial y automatización, manteniendo una rutina de aprendizaje continuo y experimentación con nuevas tecnologías.

### 2.4 Nomes de tecnologias

`Java`, `Python` e `SQLite` são iguais nos três idiomas — **não** precisam entrar em `data.technologies`.

---

## 3. SEO — `src/routes/index.tsx` e `src/routes/__root.tsx`

Incluir as novas tecnologias nas meta descriptions, mantendo o padrão atual.

- **`src/routes/index.tsx` (linha ~13):**
  > Portfólio de Vinícius Metri, desenvolvedor Full-Stack em formação, com foco em C#, ASP.NET Core, Java, Python, Angular, PostgreSQL, SQLite, Inteligência Artificial e desenvolvimento de software.

- **`src/routes/__root.tsx` (linha ~85):**
  > Portfólio de Vinícius Metri, desenvolvedor Full-Stack em formação, com foco em C#, ASP.NET Core, Java, Python, Angular, PostgreSQL, SQLite e Inteligência Artificial.

---

## 4. Novo projeto — PontoFácil

### 4.1 Entrada em `src/data/portfolio.ts`

Inserir em `projects`, **entre `ModoTech` e `Gestão de Condomínio`**:

```ts
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
}
```

Notas:

- Sem `featured` — o projeto em destaque continua sendo o **AlzheimerAssist**.
- Sem `image` e sem `media` — o card aparece sem capa e o modal mostra automaticamente o texto **"Imagens e vídeos em breve"** (`modal.mediaComingSoon`).
- Sem `github`/`demo` por enquanto — a área de links não é renderizada. Informar o repositório quando disponível.

### 4.2 Traduções do projeto (`data.projects`)

| Idioma | `description` | `category` |
| --- | --- | --- |
| PT | Sistema inteligente de automação de controle de ponto que utiliza Inteligência Artificial e reconhecimento óptico de caracteres (OCR) para digitalizar cartões de ponto manuscritos, extrair registros de horários e gerar planilhas organizadas por funcionário e período. | OCR · IA · Automação |
| EN | Intelligent time-tracking automation system that uses Artificial Intelligence and optical character recognition (OCR) to digitize handwritten time cards, extract time records and generate spreadsheets organized by employee and period. | OCR · AI · Automation |
| ES | Sistema inteligente de automatización de control de asistencia que utiliza Inteligencia Artificial y reconocimiento óptico de caracteres (OCR) para digitalizar tarjetas de asistencia manuscritas, extraer registros de horarios y generar hojas de cálculo organizadas por empleado y período. | OCR · IA · Automatización |

### 4.3 Traduções das funcionalidades (`data.projectFeatures`)

| PT (chave) | EN | ES |
| --- | --- | --- |
| Leitura automatizada de cartões de ponto manuscritos | Automated reading of handwritten time cards | Lectura automatizada de tarjetas de asistencia manuscritas |
| Reconhecimento e extração de horários com OCR | Time recognition and extraction with OCR | Reconocimiento y extracción de horarios con OCR |
| Processamento inteligente dos registros | Intelligent processing of records | Procesamiento inteligente de los registros |
| Organização dos dados por funcionário e período | Data organization by employee and period | Organización de los datos por empleado y período |
| Geração automatizada de planilhas Excel | Automated Excel spreadsheet generation | Generación automatizada de hojas de cálculo Excel |

---

## 5. Documentação

### 5.1 `README.md`

Sincronizar com o site:

| Linha ~ | Conteúdo |
| --- | --- |
| 21 | Especialidades do Hero → `ASP.NET Core · Java · Python · Angular · PostgreSQL · SQLite` |
| 82 | Descrição do Hero atualizada |
| 140 | Primeiro parágrafo do "Sobre mim" atualizado |
| 233 | Lista de Tecnologias → incluir `Java`, `Python` e `SQLite` (SQLite em Banco de dados) |

### 5.2 `portfolio-development-skill.md`

| Linha ~ | Alteração |
| --- | --- |
| 43, 207 | Lista de tecnologias Backend → incluir Python |
| 58, 305 | Mensagem recomendada do Hero atualizada |
| 335 | "Sobre mim" atualizado |
| 792 | Resumo "Quais tecnologias utiliza?" → incluir Java, Python e SQLite |
| 181 | "Outros projetos conhecidos" → adicionar `- PontoFácil` |

---

## 6. Favicon — remover o ícone do Lovable

### 6.1 Diagnóstico

- O arquivo `public/favicon.ico` (256×256) é o **coração colorido do Lovable** — é ele que aparece na aba do navegador.
- Está referenciado em `src/routes/__root.tsx` (linha ~108):

```tsx
{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
```

- Só substituir o `public/favicon.ico` já resolve; adicionar um SVG melhora a nitidez em telas de alta densidade.

### 6.2 Proposta

1. Criar `public/favicon.svg` com **monograma "V"**, usando as cores do próprio site:
   - fundo: `#0B1015` (`--background`)
   - letra: `#3AD2B7` (`--accent`)
   - cantos arredondados e traço grosso, legível até em 16px
   > Testes realizados: "VM" lado a lado vira um borrão em 16px e o monograma empilhado "M" sobre "V" fica pequeno demais; por isso foi adotada apenas a inicial "V".
2. Gerar um novo `public/favicon.ico` (16×16, 24×24, 32×32, 48×48, 64×64, 128×128 e 256×256) a partir do mesmo desenho, **substituindo** o arquivo atual, além de `public/apple-touch-icon.png` (180×180).
3. Atualizar o `<head>` em `src/routes/__root.tsx`:

```tsx
{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
{ rel: "icon", href: "/favicon.ico", sizes: "32x32" },
{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" }, // opcional, 180×180
```

4. Favicons ficam em cache agressivo: validar em **aba anônima** ou com hard reload, e não estranhar se a aba antiga continuar com o coração por alguns minutos.

### 6.3 Alternativas consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| Monograma "V" (recomendado) | Identidade própria, legível em 16px, combina com o tema | Precisa gerar o arquivo |
| Foto de perfil recortada | Rosto reconhecível | Fica ilegível em 16px |
| Ícone genérico de código (`</>`) | Neutro e rápido | Pouco pessoal |

---

## 7. Pontos opcionais (pendentes de confirmação)

1. **OCR na grade de Tecnologias** — adicionar `{ name: "OCR", category: "IA / Dados" }`, já que virou competência demonstrada em projeto.
2. **Tradução dos chips de tecnologia dos projetos** — hoje `Projects.tsx` e `ProjectModal.tsx` usam `project.technologies` cru, então "Inteligência Artificial" aparece em português mesmo com o site em inglês/espanhol. Correção: aplicar `translateTechName` nos dois componentes.
3. **Mídia do PontoFácil** — quando houver imagens/vídeos, adicionar `src/assets/pontofacil.*` e o campo `media` (ou `image`).

---

## 8. Verificação

```bash
npm run build
npm run lint
```

Checklist manual:

- [ ] Hero em PT/EN/ES com os 6 chips e a descrição atualizada
- [ ] "Sobre mim" com as novas tecnologias e o objetivo citando IA e automação
- [ ] Grade de Tecnologias com SQLite em Banco de dados e Python em Backend + IA / Dados
- [ ] PontoFácil listado na seção Projetos (sem capa, com placeholder no modal)
- [ ] Filtros IA, Automação e Dados retornando o PontoFácil
- [ ] Modal do PontoFácil com descrição, 5 funcionalidades e tecnologias traduzidas
- [ ] Meta tags com Java, Python e SQLite
- [ ] Aba do navegador com o novo ícone (sem o coração do Lovable)
- [ ] README e skill sincronizados

---

## 9. Resumo dos arquivos afetados

| Arquivo | Alteração |
| --- | --- |
| `src/data/portfolio.ts` | Textos, especialidades, tecnologias e projeto PontoFácil |
| `src/i18n/pt.json` | Hero, Sobre, projeto e funcionalidades |
| `src/i18n/en.json` | Idem (inglês) |
| `src/i18n/es.json` | Idem (espanhol) |
| `src/routes/index.tsx` | Meta description |
| `src/routes/__root.tsx` | Meta description e links de favicon |
| `public/favicon.ico` | Substituir o ícone do Lovable |
| `public/favicon.svg` | Novo ícone (monograma "V") |
| `public/apple-touch-icon.png` | Ícone para iOS (180×180) |
| `README.md` | Textos e lista de tecnologias |
| `portfolio-development-skill.md` | Textos, tecnologias e projetos conhecidos |
