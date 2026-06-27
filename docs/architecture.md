# Arquitetura

## Estrutura Principal

```txt
src/
  app/
    page.tsx
    layout.tsx
    robots.ts
    sitemap.ts
    [locale]/
      layout.tsx
      not-found.tsx
      [[...segments]]/page.tsx
  components/
    site/
    ui/
  lib/
    content.ts
    i18n.ts
    routes.ts
    scan-copy.ts
    scan-validation.ts
```

## App Router

A raiz `/` redireciona para `/en` em [src/app/page.tsx](../src/app/page.tsx). As páginas públicas vivem sob `/:locale/...`, com `locale` limitado a `en` e `pt`.

A rota catch-all [src/app/[locale]/[[...segments]]/page.tsx](../src/app/%5Blocale%5D/%5B%5B...segments%5D%5D/page.tsx) resolve o tipo de página via `resolveRoute` e renderiza a view correta:

- `HomeView`
- `SolutionsIndexView`
- `SolutionDetailView`
- `DepartmentsIndexView`
- `DepartmentDetailView`
- `BlueprintsIndexView`
- `BlueprintDetailView`
- `InsightsIndexView`
- `InsightDetailView`
- `AboutView`
- `ScanView`
- `PolicyView`
- `FormUnavailableView`

## Dados e Rotas

As rotas estão centralizadas em [src/lib/routes.ts](../src/lib/routes.ts). O ficheiro:

- Define o mapa de segmentos por idioma.
- Resolve rotas index e detalhe.
- Gera os parâmetros estáticos para build.
- Inclui rotas legais e de sistema.

As regras de idioma e paths localizados ficam em [src/lib/i18n.ts](../src/lib/i18n.ts):

- `locales`.
- `getLocalizedPath`.
- `getAlternateLocalePath`.
- `hasLocale`.
- `isLocalizedRoute`.

## Componentes de Site

Componentes principais em `src/components/site`:

- `site-header.tsx`: header, navegação, troca de idioma e menu mobile.
- `site-footer.tsx`: footer localizado.
- `page-views.tsx`: composição das páginas.
- `entity-cards.tsx`: cards de soluções, departamentos e insights.
- `flow.tsx`: diagramas, processos, tabelas de jornada e handoff flows.
- `scan-form.tsx`: formulário multi-step do Automation Scan.
- `section.tsx`: primitives de secção, eyebrow e intro.
- `reveal.tsx`: animação Motion com respeito a reduced motion.

## Componentes UI

Os componentes shadcn/ui ficam em `src/components/ui`. Foram usados principalmente:

- Button.
- Card.
- Badge.
- Alert.
- Select.
- Checkbox.
- Input.
- Textarea.
- Sheet.
- Tooltip.
- Separator.

## Renderização

O build atual gera páginas estáticas via `generateStaticParams`. Isto é adequado para a camada editorial e institucional do site.

Quando o Automation Scan passar a enviar dados reais, será necessário adicionar uma ação server-side ou route handler para receber e processar submissões.

