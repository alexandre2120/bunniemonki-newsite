# Histórico de Implementação

## Fundação

- Criado site Next.js com TypeScript, Tailwind, shadcn/ui, Motion e Lucide.
- Criado layout global, header, footer, tokens visuais e estrutura PT/EN.
- Criadas páginas institucionais, soluções, departamentos, blueprints, insights e políticas.

## Rotas e Conteúdo

- Centralizado conteúdo em `src/lib/content.ts`.
- Criado routing localizado em `src/lib/routes.ts` e `src/lib/i18n.ts`.
- Implementados sitemap, robots, canonical, alternates e metadata por rota.

## Automation Scan

- Criado formulário client-side em 3 passos.
- Adicionada copy PT/EN e validação por passo.
- Corrigidos labels e mensagens PT.
- Adicionado tracking seguro de eventos do formulário.

## Mapa de Automações

- Criado `src/lib/automation-map.ts`.
- Criado `JourneyAutomationMap` para cruzar nichos, jornadas, sistemas e automações.
- Adicionado CTA contextual para Automation Scan com `source`, `nicho` e `jornada`.

## Landing Pages

- Criadas 8 landing pages: 4 nichos em PT e 4 em EN.
- Nichos: contabilidade/fiscal, turismo, clínicas, imobiliário.
- Primeira versão tinha conteúdo longo; depois foi reduzida para formato de ads.
- Landing final usa hero curto, 3 trust chips, cockpit, 3 dores, 3 módulos, blueprint compacto e CTA final.

## Analytics

- Instalado `@vercel/analytics`.
- Adicionado wrapper client para Vercel Analytics.
- Adicionado tracker global por `data-analytics-*`.
- Instrumentados CTAs, nav, cards, mapa e formulário.
- Criada camada de redaction para evitar PII, texto livre e query strings sensíveis.

## Correções Técnicas

- Adicionado `suppressHydrationWarning` no body para evitar ruído causado por extensões de browser.
- Corrigido boundary server/client do `beforeSend` do Analytics, movendo a função para um client wrapper.
- Verificados testes, lint e build após alterações.

## Estado Atual

- `npm test`: 15 files, 40 testes.
- `npm run lint`: passa.
- `npm run build`: passa.
- Build gera 65 páginas estáticas.
