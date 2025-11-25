# Unicorn Project Management (UPM)

**Dashboard de Consultoria em Next.js com foco em UX, Performance e Arquitetura Front-end**

Bem-vindo ao **Unicorn Project Management (UPM)** — um projeto desenvolvido como **prova de conceito** e peça central do meu **portfólio profissional**, demonstrando minha atuação de ponta-a-ponta:
desde **Design Thinking / UX/UI**, passando por **arquitetura front-end**, até **integração full stack** com uma API em .NET C# (COO).

Este Dashboard foi desenvolvido com **Next.js**, **TypeScript** e um **Design System modular**, reforçando minha capacidade de entregar produtos digitais **performáticos, intuitivos e escaláveis**.

---

## Objetivo do Projeto

O UPM demonstra como aplico princípios de **experiência do usuário**, **engenharia front-end moderna**, e **boas práticas de desenvolvimento** para transformar complexidade técnica em uma interface clara, performática e orientada a decisões estratégicas.

Este projeto evidencia:

* Capacidade de transformação de requisitos em **produto digital real**
* Excelente domínio de **Next.js (App Router)**
* Manutenção de **código limpo, tipado e escalável**
* Criação de experiência consistente via **Design System**
* Atenção rigorosa a **Core Web Vitals / SEO / Performance Web**

---

## Configuração Inicial do Projeto

O boilerplate do projeto foi criado com:

```
npx create-next-app@latest UPM-Frontend-NEXTJS --ts --app --tailwind --use-npm
```

Isso garante:

* **Next.js 14+ com App Router**
* **TypeScript** habilitado
* **Tailwind CSS** configurado
* ESLint padronizado
* Ambiente preparado para **SSR, SSG e Server Actions**

---

## Arquitetura de Pastas Sugerida

Uma arquitetura pensada para **escalabilidade**, **componentização** e **clareza**:

```
UPM-Frontend-NEXTJS/
│
├── app/                       # App Router: rotas, layouts e páginas
│   ├── (dashboard)/           # Módulo principal autenticado
│   ├── api/                   # Rotas internas (se necessário)
│   ├── layout.tsx
│   ├── page.tsx
│
├── components/
│   ├── ui/                    # Componentes do Design System (botões, inputs, cards)
│   ├── charts/                # Gráficos e visualizações
│   ├── project/               # Componentes específicos do domínio de projetos
│   └── feedback/              # Loaders, skeletons, mensagens, toasts
│
├── core/
│   ├── hooks/                 # React hooks customizados
│   ├── utils/                 # Funções auxiliares
│   ├── types/                 # Tipagens globais e modelos de API
│   └── services/              # Handlers de API (fetch/axios)
│
├── styles/
│   ├── globals.css
│   └── tailwind.css
│
├── public/                    # Ícones, imagens, manifest, etc.
│
├── .env.local                 # Variáveis de ambiente (ex: URL da API COO)
├── tsconfig.json
└── package.json
```

Essa organização facilita:

* Reutilização
* Escalabilidade
* Separação clara entre UI, lógica e dados
* Evolução futura para micro-frontends ou módulos isolados

---

## Destaques Técnicos e de Produto

| Habilidade                       | Feature e Implementação                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Next.js Performance**          | Uso de SSR/SSG, Server Components, Otimização Automática, Roteamento App Router.                |
| **Design System & UX/UI**        | Tailwind + tokens + componentes reutilizáveis, dark mode, acessibilidade e consistência visual. |
| **Código Robusto**               | Tipagem forte com TypeScript, modelos de API, padrões de limpeza, isolação de serviços.         |
| **Integração Full Stack**        | Consumo estruturado da API C# (COO) ou mock API durante o desenvolvimento.                      |
| **Componentização Reutilizável** | Charts, cards, tabelas, loaders e componentes orientados ao domínio do produto.                 |

---

## Como Executar

Instalar dependências:

```bash
npm install
```

Rodar o ambiente de desenvolvimento:

```bash
npm run dev
```

Acessar:

```
http://localhost:3000
```

Build para produção:

```bash
npm run build
npm start
```

---

## Por que este Projeto é Importante para o Meu Portfólio?

Ele demonstra **exatamente como trabalho ao criar produtos digitais reais**:

### Pensamento Estratégico

Tradução de requisitos complexos em dashboards simples e inteligentes.

### Performance como prioridade

Forte foco em **Core Web Vitals** e **fluidez de navegação**.

### Qualidade de Código

Arquitetura modular, escalável, documentada e fortemente tipada.

### UX/UI Profissional

Experiência consistente, responsiva, moderna e orientada ao usuário.

### Visão de Produto

O projeto demonstra minha capacidade completa:
**Design → Arquitetura → Front-end → Integração com API → Performance → Entrega.**

---

UPM é mais do que apenas um dashboard — é uma demonstração prática de como transformo boas ideias em produtos digitais reais, performáticos e prontos para o mercado.
