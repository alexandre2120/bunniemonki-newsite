# QA e Lançamento

## Última Verificação

Executada em 2026-06-29:

```bash
npm test
npm run lint
npm run build
```

Resultado:

- 15 test files passaram.
- 40 testes passaram.
- ESLint passou.
- `next build` passou.
- Build gerou 65 páginas estáticas.

## QA Feito

- Landing de contabilidade verificada por HTTP em `localhost:3000`.
- HTML contém `data-analytics-*` em header, hero, final CTA e footer.
- Desktop/mobile das landings foram revistos durante o redesign.
- Build capturou e foi corrigido o problema de passar `beforeSend` do server layout para client component.

## Pronto Para Preview

Sim. Pode ir para deploy preview.

## Antes de Produção Pública

1. Ativar Web Analytics no dashboard Vercel.
2. Confirmar se custom events estão disponíveis no plano usado.
3. Ligar Automation Scan a backend/CRM.
4. Rever legal, privacidade, cookies e analytics.
5. Corrigir `html lang` dinâmico e 404 localizado.
6. Confirmar domínio final em metadata, sitemap e robots.
7. Limpar README/assets de scaffold.

## Comandos Antes de Deploy

```bash
npm test
npm run lint
npm run build
```

## Notas

- `npm i @vercel/analytics` reportou 2 vulnerabilidades moderadas na árvore; não foi usado `npm audit fix --force`.
- A Vercel CLI local está desatualizada. Atualizar antes de deploy real:

```bash
npm i -g vercel@latest
```
