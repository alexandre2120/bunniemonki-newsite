# Histórico de Implementação

Este documento resume o trabalho feito no projeto até 2026-06-27.

## Fundação

- Criado projeto Next.js com TypeScript.
- Configurado Tailwind CSS.
- Adicionados componentes shadcn/ui.
- Adicionadas animações com Motion.
- Configurados tokens de cor, tipografia e base visual.
- Adicionado layout global, header, footer e estrutura de páginas.

## Conteúdo e Páginas

- Criado modelo de conteúdo em `src/lib/content.ts`.
- Implementadas páginas:
  - Home.
  - Soluções.
  - Detalhe de solução.
  - Departamentos.
  - Detalhe de departamento.
  - Blueprints.
  - Detalhe de blueprint.
  - Insights.
  - Artigos.
  - Sobre.
  - Automation Scan.
  - Políticas legais.
  - Páginas de sistema.
- Criadas relações entre soluções, departamentos e blueprints.

## Internacionalização

- Implementados locales `en` e `pt`.
- Criado mapa de slugs localizados.
- Implementada alternância de idioma por rota equivalente.
- Gerada metadata por rota.
- Criados testes para i18n.
- Corrigidos bugs onde textos PT mostravam labels EN.

## Automation Scan

- Criado formulário multi-step.
- Criada validação por passo.
- Criado copy localizado em `scan-copy.ts`.
- Criadas mensagens de validação EN/PT.
- Adicionados testes para copy e validação.
- Corrigido bug visual onde a rota `/pt/automation-scan` mostrava campos como `First name`, `Last name`, `Work email`, `Company size` e `Select`.

## Design e UI

- Ajustado header, logo, CTA e navegação mobile.
- Corrigidos problemas de overflow horizontal.
- Ajustados badges para quebrar texto corretamente.
- Criado `HandoffFlow` para substituir setas textuais `->`.
- Ajustado `ProcessLine` para passos responsivos.
- Localizados diagramas e tabelas de fluxo.
- Corrigidas etapas PT que herdavam conteúdo EN.
- Verificado layout desktop e mobile com Playwright.

## SEO e Sistema

- Criado sitemap.
- Criado robots.
- Adicionada metadata por página.
- Excluídas páginas de fallback do sitemap.
- Configurada raiz `/` para redirecionar para `/en`.

## Testes e Qualidade

Testes adicionados:

- `src/lib/i18n.test.ts`.
- `src/lib/scan-validation.test.ts`.
- `src/lib/scan-copy.test.ts`.

Comandos usados recorrentemente:

```bash
npm test
npm run lint
npm run build
```

QA visual executado com Playwright em:

- `/pt`.
- `/en`.
- `/pt/automation-scan`.
- `/en/automation-scan`.
- `/pt/departamentos`.
- `/pt/solucoes/lead-to-revenue`.
- `/pt/blueprints/hire-to-productivity`.

## Questões Já Identificadas Para Próximas Fases

- Automation Scan ainda é protótipo client-side.
- Legal ainda precisa revisão final.
- Root layout usa `html lang="en"`.
- 404 localizado ainda força locale EN.
- README continua com texto do scaffold.
- Assets padrão do scaffold ainda existem em `public/`.

