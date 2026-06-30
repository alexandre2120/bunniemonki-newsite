# Design System

## Direção

Visual operacional, com cara de sistema de trabalho. Menos decoração, mais fluxo, estado e responsabilidade.

Princípios:

- Amarelo da marca para ação.
- Preto/ink para áreas de decisão e landing hero.
- Grids, linhas e labels mono para linguagem operacional.
- Cards apenas para entidades repetidas ou blocos com função clara.
- Motion discreto via `Reveal`.
- Landing pages com copy curta e CTAs evidentes.

## Tokens

Definidos em [globals.css](../src/app/globals.css):

- `--background`, `--foreground`, `--surface`.
- `--brand`, `--brand-ink`.
- `--ink`.
- `--border`, `--muted`.

Tipografia:

- Inter: corpo.
- Space Grotesk: headings.
- Geist Mono: labels, números e dados.

## Componentes Visuais

- [flow.tsx](../src/components/site/flow.tsx): processos, handoffs, tabelas e diagrama.
- [journey-automation-map.tsx](../src/components/site/journey-automation-map.tsx): mapa vivo de automações por nicho.
- [entity-cards.tsx](../src/components/site/entity-cards.tsx): cards de soluções, departamentos e insights.
- [page-views.tsx](../src/components/site/page-views.tsx): layouts de página e landings.

## Mudanças Feitas

- Landing pages reduzidas para leitura rápida.
- Hero das landings com grid escuro, CTA forte e cockpit visual.
- Blocos de pitch limitados a 3 itens.
- Removidas FAQs e listas longas das landings.
- Handoff textuais substituídos por UI de fluxo.
- Header, nav mobile e badges ajustados para PT/EN e mobile.

## Cuidado

Antes de produção, validar em deploy preview, Safari e mobile real.
