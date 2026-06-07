# UPM — Unicorn Project Management
### Dashboard de Consultoria: Gestão de Projetos, Métricas e KPIs

> De Design Thinking ao deploy automatizado — um painel de consultoria construído de ponta a ponta com Next.js 14, TypeScript e CI/CD.

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)
[![CI](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)](https://github.com/features/actions)

🔗 **[Demo ao vivo → upm-frontend-nextjs.vercel.app](https://upm-frontend-nextjs.vercel.app)**

---

## O Problema

Consultores e gestores precisam de visibilidade em tempo real sobre projetos, equipes e finanças. Ferramentas genéricas não entregam a inteligência visual necessária para decisões rápidas. O UPM centraliza tudo em um painel com arquitetura preparada para escalar.

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Visão geral — KPIs, gráficos, projetos recentes, utilização do time |
| `/projects` | Portfólio completo de projetos com status, progresso e orçamento |
| `/metrics` | Desempenho financeiro — receita, custos, margem, satisfação |
| `/team` | Time e taxa de utilização por colaborador |

---

## Stack

| Tecnologia | Uso |
|---|---|
| **Next.js 14** (App Router) | Framework — SSR, Server Components |
| **TypeScript** | Tipagem forte em toda a base de código |
| **Tailwind CSS** | Estilização utilitária |
| **Recharts** | Gráficos e visualizações interativas |
| **JSON Server** | Mock API para desenvolvimento local  |
| **GitHub Actions** | CI: lint + typecheck + build |

---

## Estrutura de Pastas

```
UPM-Frontend-NEXTJS/
│
├── src/
│   ├── app/                         # App Router (Next.js 14)
│   │   ├── layout.tsx               # Layout raiz com Sidebar
│   │   ├── page.tsx                 # Dashboard — Visão Geral
│   │   └── (dashboard)/
│   │       ├── projects/            # Lista de Projetos
│   │       ├── metrics/             # Métricas & KPIs
│   │       └── team/                # Time e Utilização
│   │
│   ├── components/
│   │   ├── ui/                      # Design System base
│   │   ├── charts/                  # Componentes de visualização
│   │   ├── project/                 # Componentes de domínio
│   │   └── feedback/                # Loaders e estados de UI
│   │
│   └── core/
│       ├── types/index.ts           # Tipagens globais (Project, KPI, Task...)
│       ├── services/api.ts          # Camada de serviço — fetch centralizado
│       └── utils/index.ts           # Formatadores e helpers
│
├── db/
│   └── db.json                      # Mock data (JSON Server)
│
├── .env.local.example               # Variáveis de ambiente necessárias
├── .github/workflows/ci.yml         # Pipeline CI: lint + typecheck + build
└── package.json
```

---

## Como Rodar Localmente

**1. Instalar dependências**
```bash
npm install
```

**2. Rodar em desenvolvimento**
```bash
npm run dev
```

Acesse: `http://localhost:3000` — sem configuração adicional necessária.

---

## Integrando com API Real (.NET C#)

O projeto usa JSON Server como mock. Para conectar a uma API real, edite apenas uma variável:

```env
# .env.local
NEXT_PUBLIC_API_URL=https://sua-api.com/api
```

A camada `src/core/services/api.ts` é o único ponto que muda — sem refatoração de componentes.

---

## Deploy (1 clique na Vercel)

1. Faça o fork ou suba o código no GitHub
2. Acesse [vercel.com](https://vercel.com) → **Add New Project**
3. Selecione o repositório → **Deploy**

Nenhuma variável de ambiente necessária para o portfólio com mock data.

---

## Decisões de Design

- **Dark theme** com paleta `zinc` + acento `violet` — elegante e legível
- **Server Components** por padrão — dados carregados no servidor, zero client-side waterfall
- **Tipagem forte** — todos os modelos de API tipados em `core/types`
- **Camada de serviço isolada** — fácil troca de JSON Server para API real

---

## Contexto

Este repositório faz parte do portfólio técnico de [William Bueno](https://williambueno.com.br) — Full Stack Developer & UX/UI Designer com +15 anos de experiência. Veja o case completo no portfólio.
