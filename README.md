# Unicorn Project Management (UPM)

**Dashboard de Consultoria em Next.js — Gestão de Projetos, Métricas e KPIs**

> Projeto desenvolvido como **prova de conceito** e peça central do portfólio profissional, demonstrando atuação de ponta-a-ponta: desde **Design Thinking / UX/UI**, passando por **arquitetura front-end**, até **integração full stack** com uma API em .NET C# (em produção).

---

## ✦ Preview

[https://upm-frontend-nextjs.vercel.app/](https://upm-frontend-nextjs.vercel.app/)

---

## Stack

| Tecnologia | Uso |
|---|---|
| **Next.js 14** (App Router) | Framework principal — SSR, Server Components |
| **TypeScript** | Tipagem forte em toda a base de código |
| **Tailwind CSS** | Estilização utilitária |
| **Recharts** | Visualizações e gráficos interativos |
| **JSON Server** | API fake para desenvolvimento local |
| **Lucide React** | Ícones consistentes |
| **clsx + tailwind-merge** | Utilitários para classes condicionais |

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
│   │       ├── projects/page.tsx    # Lista de Projetos
│   │       ├── metrics/page.tsx     # Métricas & KPIs
│   │       └── team/page.tsx        # Time e Utilização
│   │
│   ├── components/
│   │   ├── ui/                      # Design System base
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── KpiCard.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── charts/                  # Componentes de visualização
│   │   │   ├── RevenueChart.tsx
│   │   │   └── SatisfactionChart.tsx
│   │   ├── project/                 # Componentes de domínio
│   │   │   └── ProjectCard.tsx
│   │   └── feedback/                # Loaders e estados de UI
│   │       └── Skeleton.tsx
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

Acesse: http://localhost:3000 — sem necessidade de servidor externo.

---

## Deploy na Vercel (1 clique)

O projeto está pronto para Vercel — **nenhuma variável de ambiente necessária** para o portfólio com mock data.

1. Suba o código no GitHub
2. Acesse [vercel.com](https://vercel.com) → **Add New Project**
3. Selecione o repositório → **Deploy**

Pronto. A Vercel detecta Next.js automaticamente e o build funciona sem configuração adicional.

### Integrando a API .NET C# no futuro

Quando a API real estiver disponível, basta editar `src/core/services/api.ts` substituindo as chamadas diretas ao módulo por `fetch` apontando para sua API:

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Visão geral — KPIs, gráficos, projetos recentes, utilização do time |
| `/projects` | Portfólio completo de projetos com status, progresso e orçamento |
| `/metrics` | Desempenho financeiro — receita, custos, margem, satisfação |
| `/team` | Time e taxa de utilização por colaborador |

---

## Integração com API .NET C#

Em desenvolvimento, o projeto usa **JSON Server** na porta `3001`. Para produção, basta alterar a variável `NEXT_PUBLIC_API_URL` no `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://sua-api.com/api
```

A camada de serviço (`src/core/services/api.ts`) é o único ponto que precisa ser ajustado para consumir a API real.

---

## CI/CD

GitHub Actions configurado com pipeline de **lint + typecheck + build** em cada push para `main` e `develop`.

---

## Design Decisions

- **Dark theme** com paleta `zinc` + acento `violet` — elegante e legível
- **Server Components** por padrão — dados carregados no servidor, zero client-side waterfall
- **Tipagem forte** — todos os modelos de API tipados em `core/types`
- **Camada de serviço isolada** — fácil troca de JSON Server para API real

---

*UPM é mais do que um dashboard — é uma demonstração prática de como boas ideias se transformam em produtos digitais reais, performáticos e prontos para o mercado.*
