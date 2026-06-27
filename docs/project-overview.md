# Resumo do Projeto

## Objetivo

Construir o website da Bunniemonki como uma aplicação Next.js em TypeScript, com Tailwind, shadcn/ui e animações via Motion. O site apresenta a Bunniemonki como uma marca de Business Automation & AI Operations focada em jornadas operacionais, integrações, handoffs e automação gerida.

## Stack

- Next.js App Router.
- TypeScript.
- React.
- Tailwind CSS v4.
- shadcn/ui com componentes Radix.
- Lucide React para ícones.
- Motion para animações de entrada e microinterações.
- Vitest para testes unitários de rotas, copy e validação do formulário.
- ESLint e `next build` para verificação técnica.

## Superfície Implementada

O site tem rotas localizadas em inglês e português:

- Home.
- Soluções.
- Detalhe de solução.
- Departamentos.
- Detalhe de departamento.
- Blueprints.
- Detalhe de blueprint.
- Insights.
- Artigos de insight.
- Sobre.
- Automation Scan.
- Páginas legais: Privacidade, Termos, Cookies, Acessibilidade.
- Páginas de sistema: 404 e formulário indisponível.
- `robots.txt`.
- `sitemap.xml`.

## Conteúdo

O conteúdo principal foi estruturado em [src/lib/content.ts](../src/lib/content.ts). Ele contém:

- Copy global por idioma.
- Entidade legal da empresa.
- Soluções.
- Departamentos.
- Blueprint de referência.
- Insights.
- Políticas.
- Funções auxiliares para relacionar soluções, departamentos e conteúdos.

## Estado Atual

O projeto está funcional como site estático com experiência local completa. O Automation Scan funciona como protótipo validado no cliente, mas ainda não envia dados para um backend.

Verificações recentes executadas durante o trabalho:

- `npm test`.
- `npm run lint`.
- `npm run build`.
- QA visual com Playwright em páginas PT/EN e desktop/mobile.

