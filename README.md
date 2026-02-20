# Frontend - Sujeito Pizza

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000)] https://pizzaria-web-teal.vercel.app/

Dashboard administrativo web para gerenciamento de pizzaria.

## Repositórios

- **Backend**: [Pizzaria Backend](https://github.com/alangt22/Pizzaria-Backend)
- **Mobile**: [Pizzaria Mobile](https://github.com/alangt22/Pizzaria-mobile)

## Stack

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **UI**: React 19 + SCSS
- **HTTP Client**: Axios
- **Ícones**: Lucide React
- **Notificações**: Sonner
- **Gerenciamento de Estado**: Context API + Cookies
- **Deploy**: Vercel

## Funcionalidades

### Autenticação
- Login de usuários
- Cadastro de novos usuários
- Sessão persistida com cookies

### Dashboard
- Visão geral do sistema
- Gerenciamento de pedidos em tempo real
- Lista de pedidos ativos

### Gerenciamento de Produtos
- Listar produtos por categoria
- Criar novos produtos
- Formulário com upload de imagem

### Gerenciamento de Categorias
- Criar novas categorias
- Listar categorias existentes

### Pedidos
- Visualização de pedidos em aberto
- Acompanhamento de status
- Atualização em tempo real


## Variáveis de Ambiente

```env
NEXT_PUBLIC_API_URL=
```

## Páginas

| Rota | Descrição |
|------|------------|
| / | Login |
| /signup | Cadastro |
| /dashboard | Dashboard principal |
| /dashboard/category | Gerenciar categorias |
| /dashboard/product | Gerenciar produtos |

## Estrutura

```
src/
├── app/                    # Páginas Next.js App Router
│   ├── dashboard/         # Dashboard administrativo
│   ├── signup/           # Página de cadastro
│   └── page.tsx          # Login
├── components/           # Componentes reutilizáveis
├── contexts/             # Contextos React
├── lib/                  # Utilitários
├── providers/            # Providers
└── services/             # Configuração da API
```
