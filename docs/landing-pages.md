# Landing Pages

## Objetivo

Criar páginas simples para ads, com leitura rápida e CTA direto para o Automation Scan.

## Nichos

Foram implementados 4 nichos em PT/EN:

1. Contabilidade / consultoria fiscal.
2. Turismo operacional / alojamento local / tours / boutique hotels.
3. Clínicas privadas / estética / fisioterapia / saúde-beleza.
4. Imobiliário / mediação / gestão de arrendamento.

## Rotas

PT:

- `/pt/landing/contabilidade-consultoria-fiscal`
- `/pt/landing/turismo-operacional`
- `/pt/landing/clinicas-privadas`
- `/pt/landing/imobiliario-arrendamento`

EN:

- `/en/landing/accounting-tax-consulting`
- `/en/landing/tourism-operations`
- `/en/landing/private-clinics`
- `/en/landing/real-estate-rentals`

## Estrutura da Página

Cada landing usa:

- Hero curto: eyebrow, audiência, headline, subheadline e CTA.
- 3 chips de confiança.
- Cockpit visual com 3 sinais.
- 3 dores principais.
- 3 módulos de automação.
- Blueprint compacto.
- Prova/guardrails com validação humana.
- CTA final.

Não renderiza FAQ nem listas longas. A regra é: nenhum bloco de pitch mostra mais de 3 bullets.

## Conteúdo e Código

- Dados: [src/lib/content.ts](../src/lib/content.ts), export `landingPages`.
- Render: [LandingPageView](../src/components/site/page-views.tsx).
- Rotas: [src/lib/routes.ts](../src/lib/routes.ts).
- Slugs alternados: [src/lib/i18n.ts](../src/lib/i18n.ts).
- Testes: [src/lib/landing-pages.test.ts](../src/lib/landing-pages.test.ts) e [src/components/site/landing-page-view.test.ts](../src/components/site/landing-page-view.test.ts).

## Decisões

- Copy curta para tráfego pago.
- Design mais agressivo no hero: fundo escuro, grid técnico, amarelo de ação.
- Claims conservadoras: blueprint de referência, sem casos/percentagens inventadas.
- IA sempre governada por humanos em áreas fiscais, clínicas, legais e sensíveis.
