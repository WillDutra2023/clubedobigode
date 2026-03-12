# ✂️ Clube do Bigode 🧔

Mini aplicação **Fullstack com Next.js** desenvolvida como projeto de certificação.  
O sistema simula uma barbearia fictícia com CRUD de serviços, perfil de usuário e rotas dinâmicas.

---

## 🚀 Tecnologias Utilizadas

- **Next.js** (framework React para SSR/ISR/CSR)
- **TypeScript** (tipagem estática e segurança no código)
- **Styled Components** (estilização dinâmica e modular)
- **ESLint + Prettier** (qualidade e padronização do código)
- **Node.js** (execução backend)
- **React Hooks** (`useState`, `useEffect`)

---

## 📂 Estrutura do Projeto

clube-do-bigode/
├── public/
│   └── images/ (imagens dos serviços)
├── src/
│   ├── pages/
│   │   ├── index.tsx              # Home (SSG + CRUD)
│   │   ├── servicos/[slug].tsx    # Detalhe do serviço (ISR)
│   │   ├── perfil.tsx             # Perfil do usuário (CSR)
│   │   └── api/
│   │       ├── servicos/index.ts  # API listagem + criação
│   │       └── servicos/[id].ts   # API detalhe + edição + exclusão
│   ├── components/                # Components reutilizáveis
│   └── types/                     # Tipos TypeScript
├── package.json
├── tsconfig.json
├── README.md
├── .eslintrc.json
├── .prettierrc


---

## ⚙️ Como Rodar o Projeto

1. Clone o repositório:
    git clone https://github.com/seuusuario/clube-do-bigode.git
    cd clube-do-bigode

2. Instale as dependências:
    npm install

3. Rode o servidor de desenvolvimento:
    npm run dev

4. Acesse em:
    http://localhost:3000
    

## ⚙️ Funcionalidades

    Home (SSG):  
    Lista estática de serviços com CRUD (criar, editar, excluir).
    Renderizada via Static Site Generation.

    Detalhe do Serviço (ISR):  
    Página dinâmica via slug (/servicos/[slug]).
    Renderizada com Incremental Static Regeneration, atualizando a cada 60 segundos.

    Perfil do Usuário (CSR):  
    Simulação de login/logout com estado local.
    Permite edição de nome e email.

    API Routes:

    GET /api/servicos → lista serviços

    POST /api/servicos → cria serviço

    GET /api/servicos/:id → detalhe

    PUT /api/servicos/:id → edição

    DELETE /api/servicos/:id → exclusão

## 🎨 Decisões Técnicas

    SSR vs ISR:  
    Optamos por ISR na página de detalhe dos serviços.
    Isso garante performance de páginas estáticas com atualização periódica dos dados, sem rebuildar todo o projeto.

    Styled Components:  
    Escolhido por permitir:

    Escopo local de CSS (evita conflitos de estilos)

    Estilização dinâmica baseada em props

    Melhor integração com React

    Responsividade com Flexbox e Grid

 ## 📌 Extras Implementados
    Lazy loading de componentes não críticos

    Acessibilidade básica (alt em imagens, labels em inputs)

    Estrutura modularizada em components