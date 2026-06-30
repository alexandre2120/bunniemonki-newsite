# Bunniemonki Website Docs

Documentação curta do site Bunniemonki em Next.js. Atualizada em 2026-06-29.

## Mapa

- [Resumo do Projeto](./project-overview.md): objetivo, stack e estado atual.
- [Arquitetura](./architecture.md): ficheiros principais, dados, rotas e renderização.
- [Landing Pages](./landing-pages.md): nichos, rotas, copy e estratégia de página.
- [Analytics](./analytics.md): Vercel Analytics, eventos e regras de privacidade.
- [Automation Scan](./automation-scan.md): formulário, validação e lacunas para produção.
- [Internacionalização e Rotas](./i18n-routing.md): locales, slugs, metadata e sitemap.
- [Design System](./design-system.md): direção visual e componentes de UI.
- [QA e Lançamento](./qa-and-launch.md): comandos, estado técnico e bloqueantes.
- [Histórico](./implementation-history.md): resumo cronológico do que foi feito.

## Estado Rápido

O site compila, passa testes e gera páginas estáticas para PT/EN. Foram adicionadas landing pages por nicho, mapa de automações, Vercel Analytics e tracking seguro de CTAs/eventos.

Ainda falta para produção com captação real:

1. Ligar o Automation Scan a backend/CRM/notificações.
2. Rever legal, cookies, analytics e retenção de dados.
3. Confirmar domínio final em metadata, sitemap e robots.
4. Rever `html lang` dinâmico e 404 localizado.
5. Limpar README/assets de scaffold antes do deploy final.
