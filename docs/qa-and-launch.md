# QA e Checklist de Lançamento

## Estado Técnico Verificado

Última leitura técnica feita em 2026-06-27:

```bash
npm test
npm run lint
npm run build
```

Resultado observado:

- Testes Vitest passaram.
- ESLint passou.
- Build Next.js passou.
- O build gera 56 páginas estáticas.

## QA Visual Realizado

Foram feitas verificações com browser/Playwright em desktop e mobile, incluindo:

- Header e navegação.
- Troca de idioma.
- Automation Scan PT/EN.
- Mensagens de validação PT.
- Handoff flow em desktop e mobile.
- Tabelas de jornada PT.
- Blueprint PT.
- Console sem erros nas rotas verificadas.

## Pronto Para Preview?

Sim. O projeto está pronto para deploy preview e revisão visual em ambiente hospedado.

## Pronto Para Produção Pública?

Ainda não completamente. O site institucional pode ser publicado como preview, mas produção pública com captação de leads exige fechar os pontos abaixo.

## Bloqueantes Recomendados Para Produção

### 1. Automation Scan Real

- Criar backend de submissão.
- Validar dados no servidor.
- Armazenar pedidos.
- Notificar equipa.
- Definir fluxo de erro.
- Atualizar mensagem de sucesso final.
- Proteger contra spam e abuso.

### 2. Legal

- Aprovar textos finais de Privacidade, Termos, Cookies e Acessibilidade.
- Definir contacto de acessibilidade.
- Confirmar processadores, retenção e base legal de tratamento.
- Confirmar se haverá analytics/cookies não essenciais.

### 3. SEO/i18n Técnico

- Tornar `html lang` compatível com a rota atual.
- Corrigir 404 localizado para usar locale correto.
- Confirmar canonical e alternates em deploy real.
- Confirmar domínio final em `metadataBase`, sitemap e robots.

### 4. Deploy e Operação

- Configurar projeto na Vercel.
- Definir domínio principal.
- Configurar variáveis de ambiente, se houver integrações.
- Definir monitorização de erros e logs.
- Criar procedimento de rollback.

### 5. Limpeza de Projeto

- Substituir README template.
- Remover assets padrão não usados em `public/`.
- Confirmar favicon final.
- Confirmar que imagens de marca finais estão otimizadas.

## Comandos de Verificação Antes de Cada Deploy

```bash
npm test
npm run lint
npm run build
```

## Nota Sobre Vercel CLI

A Vercel CLI local reportada na sessão está desatualizada. Antes de deploy real, atualizar:

```bash
npm i -g vercel@latest
```

ou:

```bash
pnpm add -g vercel@latest
```

