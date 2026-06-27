# Design System

## Direção Visual

A direção visual construída para a Bunniemonki é operacional, clara e orientada a sistemas. A interface deve parecer uma camada de trabalho que mostra fluxos, responsabilidades e handoffs, não uma landing page decorativa.

Princípios usados:

- Handoffs e jornadas devem ser representados como fluxo visual.
- Ícones aparecem quando ajudam a reconhecer ação, estado ou estrutura.
- Cards são usados para entidades repetidas ou blocos claramente enquadrados.
- Secções mantêm largura controlada e ritmo editorial.
- O amarelo da marca é usado como sinal de ação e destaque operacional.
- Motion é discreto, com reveals e pequenas interações, sem competir com o conteúdo.

## Tokens e Base Visual

Tokens principais em [src/app/globals.css](../src/app/globals.css):

- `--background`: fundo claro quente.
- `--foreground`: texto quase preto.
- `--surface`: plano secundário.
- `--brand`: amarelo Bunniemonki.
- `--brand-ink`: texto sobre amarelo.
- `--ink`: área escura.
- `--rule`: linhas e bordas.

Tipografia:

- Inter para texto base.
- Space Grotesk para headings.
- Geist Mono para labels, números e informação utilitária.

## Componentes Visuais Criados ou Ajustados

### Flow

[src/components/site/flow.tsx](../src/components/site/flow.tsx) concentra os elementos de fluxo:

- `ProcessLine`: lista visual de passos, responsiva e com números.
- `HandoffFlow`: substitui textos como `Marketing -> Sales -> Operations` por nós, conectores, ícones e contagem de equipas.
- `StageTable`: tabela de etapas com cabeçalhos localizados.
- `ArchitectureDiagram`: diagrama da camada de automação, localizado em PT/EN.

### Cards

[src/components/site/entity-cards.tsx](../src/components/site/entity-cards.tsx) foi ajustado para:

- Localizar labels como `Problem` e `Outcome`.
- Usar títulos das jornadas nos badges de departamento, evitando ids técnicos como `lead-to-revenue`.
- Garantir que badges longos quebram bem no mobile.

### Header

[src/components/site/site-header.tsx](../src/components/site/site-header.tsx) foi ajustado para:

- Usar copy localizada no skip link.
- Localizar labels acessíveis de navegação e menu mobile.
- Preservar troca de idioma por rota equivalente.

## Correções de Design Feitas

- Remoção de setas textuais `->` em secções de handoff.
- Substituição por UI de fluxo com ícones e conectores.
- Ajuste do `ProcessLine` para suportar 5 e 7 passos sem grid rígido.
- Correção de overflow e quebras em mobile.
- Correção de logo/crop e legibilidade em header.
- Correção de labels e etapas PT que ainda vinham do conteúdo EN.
- Substituição de texto bruto por estruturas visuais quando o conteúdo representa processo ou relação.

## Cuidados Pendentes

- Fazer mais uma revisão visual completa em deploy preview, especialmente em Safari e mobile real.
- Remover assets padrão do scaffold que não são usados.
- Validar contrastes finais caso sejam adicionados analytics/cookie banner ou novos CTAs.

