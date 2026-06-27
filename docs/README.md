# Bunniemonki Website Docs

Documentação criada em 2026-06-27 para registar o que foi desenvolvido no projeto Next.js da Bunniemonki, como o site está organizado e o que ainda falta antes de produção.

## Documentos

- [Resumo do Projeto](./project-overview.md) - objetivo, stack, estado atual e mapa de funcionalidades.
- [Arquitetura](./architecture.md) - estrutura de ficheiros, rotas, dados, componentes e renderização.
- [Design System](./design-system.md) - direção visual, tokens, componentes e ajustes de UI feitos.
- [Internacionalização e Rotas](./i18n-routing.md) - locales, slugs, alternância de idioma, metadata, sitemap e pontos pendentes.
- [Automation Scan](./automation-scan.md) - formulário, validação, copy localizada e lacunas para produção.
- [Histórico de Implementação](./implementation-history.md) - registo cronológico do trabalho feito.
- [QA e Checklist de Lançamento](./qa-and-launch.md) - verificações executadas, estado técnico e itens bloqueantes.

## Estado Rápido

O site está a compilar e a gerar páginas estáticas. A experiência visual principal, as páginas institucionais, as rotas PT/EN e o formulário local do Automation Scan estão implementados.

Para produção pública, os pontos mais importantes ainda são:

1. Ligar o Automation Scan a backend, base de dados/CRM e notificações reais.
2. Finalizar revisão legal das páginas de Privacidade, Termos, Cookies e Acessibilidade.
3. Corrigir detalhes finais de SEO/i18n técnico, especialmente `html lang` dinâmico.
4. Configurar domínio, ambiente de produção, monitorização e política de cookies/analytics.
5. Remover artefactos do scaffold inicial e substituir o README template.

