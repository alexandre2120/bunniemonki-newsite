# Automation Scan

## Papel

Fluxo principal de conversão. Recebe contexto operacional para avaliar se faz sentido avançar para conversa.

## Estado Atual

Implementado em [scan-form.tsx](../src/components/site/scan-form.tsx):

- 3 passos.
- Copy PT/EN.
- Validação por passo.
- Erros localizados.
- Sucesso local com referência `BM-*`.
- Tracking seguro de avanço, erro, voltar e submissão local.

Ainda não envia dados para backend.

## Passos

1. Pessoa e empresa: nome, email, empresa, cargo, mercado e dimensão.
2. Lacuna operacional: jornada, departamento, resultado, sinais, ferramentas, frequência e owner.
3. Prontidão: timing, investimento, decisão, contexto adicional e consentimentos.

## Ficheiros

- UI: [src/components/site/scan-form.tsx](../src/components/site/scan-form.tsx)
- Copy: [src/lib/scan-copy.ts](../src/lib/scan-copy.ts)
- Validação: [src/lib/scan-validation.ts](../src/lib/scan-validation.ts)
- Testes: [src/lib/scan-copy.test.ts](../src/lib/scan-copy.test.ts), [src/lib/scan-validation.test.ts](../src/lib/scan-validation.test.ts)

## Para Produção

1. Criar route handler ou Server Action.
2. Revalidar dados no servidor.
3. Guardar em CRM/base de dados.
4. Notificar equipa.
5. Enviar confirmação, se necessário.
6. Adicionar anti-spam/rate limit.
7. Definir retenção.
8. Atualizar política de privacidade.
9. Trocar mensagem de sucesso de protótipo por mensagem final.
