# Internacionalização e Rotas

## Idiomas

Idiomas suportados:

- `en`
- `pt`

Definição em [src/lib/i18n.ts](../src/lib/i18n.ts).

## Slugs Localizados

Exemplos:

| Tipo | EN | PT |
| --- | --- | --- |
| Home | `/en` | `/pt` |
| Soluções | `/en/solutions` | `/pt/solucoes` |
| Departamentos | `/en/departments` | `/pt/departamentos` |
| Sobre | `/en/about` | `/pt/sobre` |
| Privacidade | `/en/privacy` | `/pt/privacidade` |
| Termos | `/en/terms` | `/pt/termos` |
| Acessibilidade | `/en/accessibility` | `/pt/acessibilidade` |
| Automation Scan | `/en/automation-scan` | `/pt/automation-scan` |

Alguns termos de marca foram mantidos em inglês nos dois idiomas, como `Automation Scan`, `Blueprints`, `Insights` e nomes de jornadas como `Lead-to-Revenue`.

## Alternância de Idioma

`getAlternateLocalePath` calcula a rota equivalente no outro idioma, preservando query string e hash.

Exemplo:

```txt
/en/solutions/quote-to-cash?from=nav#fit
/pt/solucoes/quote-to-cash?from=nav#fit
```

## Metadata

A rota catch-all gera metadata por página:

- Title.
- Description.
- Canonical.
- Alternates por idioma.
- Open Graph básico.

Implementação em [src/app/[locale]/[[...segments]]/page.tsx](../src/app/%5Blocale%5D/%5B%5B...segments%5D%5D/page.tsx).

## Sitemap e Robots

- [src/app/sitemap.ts](../src/app/sitemap.ts) gera URLs estáticas e exclui páginas de formulário indisponível.
- [src/app/robots.ts](../src/app/robots.ts) permite o site e bloqueia queries e páginas de fallback.

## Correções Feitas

- Copy do formulário do Automation Scan foi separada por idioma.
- Mensagens de validação passaram a receber `locale`.
- Header passou a usar skip link e labels acessíveis localizados.
- Tabelas de jornada e diagramas passaram a ter cabeçalhos PT/EN.
- Etapas das soluções PT deixaram de herdar labels EN.

## Pendências de Produção

- O `<html lang>` ainda está definido como `en` no root layout. Para produção, deve refletir o locale da página ou ser tratado numa estrutura que permita `lang` dinâmico.
- O `not-found` em `src/app/[locale]/not-found.tsx` ainda renderiza `locale="en"`. Idealmente deve respeitar o locale da rota.
- Confirmar domínio final usado em `metadataBase`, sitemap e robots.

