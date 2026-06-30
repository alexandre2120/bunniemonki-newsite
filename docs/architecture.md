# Arquitetura

## Estrutura

```txt
src/
  app/
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
    [locale]/
      layout.tsx
      not-found.tsx
      [[...segments]]/page.tsx
  components/
    site/
      analytics-events.tsx
      vercel-analytics.tsx
      journey-automation-map.tsx
      page-views.tsx
      scan-form.tsx
      site-header.tsx
      site-footer.tsx
    ui/
  lib/
    analytics.ts
    automation-map.ts
    content.ts
    i18n.ts
    routes.ts
    scan-copy.ts
    scan-validation.ts
```

## Rotas

A raiz `/` redireciona para `/en`. As páginas públicas vivem em `/:locale/...`, com `locale` limitado a `en` e `pt`.

A catch-all [page.tsx](../src/app/%5Blocale%5D/%5B%5B...segments%5D%5D/page.tsx) chama `resolveRoute` e renderiza a view certa em [page-views.tsx](../src/components/site/page-views.tsx).

Tipos de rota atuais:

- home, soluções, detalhe de solução.
- departamentos, detalhe de departamento.
- blueprints, detalhe de blueprint.
- insights, detalhe de insight.
- landing pages.
- about, scan, policies, form unavailable.

## Dados

- [content.ts](../src/lib/content.ts): copy, entidades, políticas e landings.
- [automation-map.ts](../src/lib/automation-map.ts): nichos, jornadas, sistemas e automações do mapa.
- [routes.ts](../src/lib/routes.ts): resolução de rotas e `generateStaticParams`.
- [i18n.ts](../src/lib/i18n.ts): locale, slugs e alternância de idioma.

## Componentes

- [site-header.tsx](../src/components/site/site-header.tsx): nav, idioma, menu mobile e CTA.
- [site-footer.tsx](../src/components/site/site-footer.tsx): links institucionais e legais.
- [page-views.tsx](../src/components/site/page-views.tsx): composição das páginas.
- [journey-automation-map.tsx](../src/components/site/journey-automation-map.tsx): mapa interativo de nicho/jornada.
- [entity-cards.tsx](../src/components/site/entity-cards.tsx): cards de soluções, departamentos e insights.
- [scan-form.tsx](../src/components/site/scan-form.tsx): formulário multi-step.
- [analytics-events.tsx](../src/components/site/analytics-events.tsx): delegação global de cliques trackados.
- [vercel-analytics.tsx](../src/components/site/vercel-analytics.tsx): wrapper client para `<Analytics />`.

## Renderização

O site é gerado estaticamente via `generateStaticParams`. O build atual gera 65 páginas estáticas. O Automation Scan ainda não tem route handler/server action.
