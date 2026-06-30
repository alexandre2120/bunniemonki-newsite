# Analytics

## Objetivo

Medir page context, CTAs e interações principais sem recolher PII ou texto livre.

## Integração

Pacote instalado:

```bash
@vercel/analytics
```

Componentes:

- [src/components/site/vercel-analytics.tsx](../src/components/site/vercel-analytics.tsx): monta o componente oficial da Vercel.
- [src/components/site/analytics-events.tsx](../src/components/site/analytics-events.tsx): captura cliques em elementos com `data-analytics-event`.
- [src/lib/analytics.ts](../src/lib/analytics.ts): helpers, normalização e redaction.

O root layout monta:

- `<AnalyticsEvents />`
- `<VercelAnalytics />`

## Eventos

Eventos principais:

- `page_context`: rota, locale, tipo de página e parâmetros seguros.
- `cta_click`: CTAs de header, hero, landing, final CTA, footer e mapa.
- `navigation_click`: navegação, logo, idioma e links institucionais.
- `card_click`: cards de soluções, departamentos e insights.
- `map_niche_select`: seleção de nicho no mapa de automações.
- `scan_form_button_click`: botões do formulário.
- `scan_form_step_continue`: avanço de passo válido.
- `scan_form_validation_error`: erro de validação.
- `scan_form_back`: voltar no formulário.
- `scan_form_submit`: submissão local do protótipo.

## Propriedades Permitidas

Permitidas:

- `locale`
- `pageKind`
- `location`
- `target`
- `itemId`
- `itemSlug`
- `journey`
- `niche`
- `source`
- `step`
- `marketingConsent`
- `utmSource`, `utmMedium`, `utmCampaign`
- `currentPath`, `destinationPath`
- `pageDepth`

## Dados Bloqueados

Não enviar:

- Nome, email, telefone, empresa ou cargo.
- Texto livre do formulário.
- URL completa enviada pelo utilizador.
- Tokens, IDs privados, invoice/order IDs.
- Ferramentas internas descritas pelo lead.

URLs são redigidas em `redactAnalyticsEvent`. Só ficam parâmetros seguros: `source`, `nicho`, `jornada` e `utm_*`.

## Notas de Produto

- Pageviews aparecem quando Web Analytics estiver ativo na Vercel e o site estiver deployado.
- Custom events podem depender do plano Vercel Pro/Enterprise.
- O dashboard deve ser lido por `event`, `location`, `target`, `pageKind`, `itemId` e `locale`.
