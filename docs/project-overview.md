# Resumo do Projeto

## Objetivo

Site PT/EN da Bunniemonki para vender Business Automation & AI Operations. A proposta é mostrar jornadas, handoffs, automação gerida e capturar leads para um Automation Scan.

## Stack

- Next.js 16 App Router.
- React 19 e TypeScript.
- Tailwind CSS v4.
- shadcn/ui e Radix.
- Lucide React.
- Motion.
- Vitest, ESLint e `next build`.
- Vercel Analytics.

## O Que Existe

- Site institucional PT/EN.
- Home, soluções, departamentos, blueprints, insights, sobre e páginas legais.
- Landing pages separadas para 4 nichos em PT/EN.
- Mapa interativo de automações por nicho/jornada.
- Automation Scan em 3 passos, ainda client-side.
- Metadata, canonicals, alternates, sitemap e robots.
- Analytics de page context, CTAs, cards, mapa e formulário.

## Fonte de Conteúdo

O conteúdo vive principalmente em [src/lib/content.ts](../src/lib/content.ts):

- `siteCopy`: copy global por locale.
- `solutions`, `departments`, `blueprints`, `insights`, `policies`.
- `landingPages`: landings por nicho.
- helpers de relação e lookup.

## Estado Atual

Pronto para deploy preview. Para produção pública com captação real, o ponto principal ainda é ligar o Automation Scan a backend/CRM e fechar revisão legal/privacidade.
