# Automation Scan

## Objetivo

O Automation Scan é o principal fluxo de conversão do site. A página pede contexto operacional para que a Bunniemonki avalie se existe alinhamento para uma conversa focada.

## Estado Atual

O formulário está implementado como componente client-side em [src/components/site/scan-form.tsx](../src/components/site/scan-form.tsx).

Funcionalidades atuais:

- Formulário em 3 passos.
- Copy localizada em EN/PT.
- Validação por passo.
- Mensagens de erro localizadas.
- Estados de erro por campo.
- Selects, checkboxes, inputs e textarea com shadcn/ui.
- Estado final de sucesso com referência local.

## Estrutura dos Passos

### Passo 1

Dados da pessoa e empresa:

- Nome.
- Apelido.
- Email profissional.
- Empresa.
- Função/cargo.
- Website ou LinkedIn.
- País/mercado.
- Tamanho da empresa.

### Passo 2

Jornada e lacuna operacional:

- Jornada principal.
- Departamento principal.
- Resultado pretendido.
- Sinais atuais.
- Sistemas/ferramentas.
- Frequência do impacto.
- Responsável executivo/operacional.

### Passo 3

Prontidão e consentimento:

- Prazo desejado.
- Faixa de investimento.
- Contexto de decisão.
- Contexto adicional.
- Consentimento de privacidade.
- Consentimento opcional de marketing.

## Copy e Validação

- Copy do formulário: [src/lib/scan-copy.ts](../src/lib/scan-copy.ts).
- Validação: [src/lib/scan-validation.ts](../src/lib/scan-validation.ts).
- Testes: [src/lib/scan-copy.test.ts](../src/lib/scan-copy.test.ts) e [src/lib/scan-validation.test.ts](../src/lib/scan-validation.test.ts).

Correções feitas:

- Labels PT deixaram de aparecer em inglês.
- Placeholder `Select` virou `Selecionar` em PT.
- Mensagens como `This field is required` viraram `Este campo é obrigatório`.
- Validação de URL/email tem mensagens PT/EN.

## O Que Ainda Falta Para Produção

O formulário ainda não envia dados reais. Antes de lançamento público com captação, falta:

1. Criar endpoint ou Server Action para submissão.
2. Revalidar dados no servidor.
3. Guardar submissões em base de dados, CRM ou ferramenta operacional aprovada.
4. Enviar notificação interna.
5. Enviar email de confirmação, se desejado.
6. Adicionar proteção anti-spam, rate limit e honeypot ou BotID.
7. Definir política de retenção dos dados.
8. Atualizar política de privacidade com processadores, retenção e finalidade real.
9. Substituir a mensagem de sucesso de protótipo por mensagem final.
10. Adicionar logging e monitorização de falhas.

## Recomendação Técnica

Manter a UI atual e adicionar uma camada server-side pequena:

- `POST /api/automation-scan` ou Server Action.
- Schema de validação partilhável com a lógica atual.
- Envio para destino operacional.
- Resposta normalizada para sucesso/erro.
- Testes unitários para validação e pelo menos um teste do fluxo de submissão.

