# Internacionalização e Rotas

## Locales

Locales suportados:

- `en`
- `pt`

Definição: [src/lib/i18n.ts](../src/lib/i18n.ts).

## Rotas Base

| Tipo | EN | PT |
| --- | --- | --- |
| Home | `/en` | `/pt` |
| Soluções | `/en/solutions` | `/pt/solucoes` |
| Departamentos | `/en/departments` | `/pt/departamentos` |
| Sobre | `/en/about` | `/pt/sobre` |
| Automation Scan | `/en/automation-scan` | `/pt/automation-scan` |
| Privacidade | `/en/privacy` | `/pt/privacidade` |

Landing pages:

- `/en/landing/*`
- `/pt/landing/*`

## Onde Está

- Slugs e alternância: [src/lib/i18n.ts](../src/lib/i18n.ts)
- Resolução de rota: [src/lib/routes.ts](../src/lib/routes.ts)
- Metadata: [src/app/[locale]/[[...segments]]/page.tsx](../src/app/%5Blocale%5D/%5B%5B...segments%5D%5D/page.tsx)
- Sitemap: [src/app/sitemap.ts](../src/app/sitemap.ts)
- Robots: [src/app/robots.ts](../src/app/robots.ts)

## Alternância de Idioma

`getAlternateLocalePath` preserva query string e hash.

Exemplo:

```txt
/en/landing/tourism-operations#cta
/pt/landing/turismo-operacional#cta
```

## Metadata

Cada rota gera:

- title.
- description.
- canonical.
- alternates PT/EN.
- Open Graph básico.

## Pendências

- Root layout ainda usa `html lang="en"`.
- 404 localizado ainda precisa respeitar o locale real.
- Confirmar domínio final em `metadataBase`, sitemap e robots.
