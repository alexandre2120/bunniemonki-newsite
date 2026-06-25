import { getLocalizedPath, type Locale, type RouteKey } from "./i18n";

export type SolutionId =
  | "lead-to-revenue"
  | "customer-operations"
  | "quote-to-cash"
  | "hire-to-productivity";

export type DepartmentId =
  | "marketing-sales"
  | "customer-success-service"
  | "finance"
  | "hr"
  | "operations-it";

export type InsightCategory =
  | "Automation"
  | "Operations"
  | "AI & Governance"
  | "Integrations"
  | "Solution Blueprints";

export type JourneyStage = {
  label: string;
  owner: string;
  input: string;
  output: string;
  gate: string;
  exception: string;
};

export type Solution = {
  id: SolutionId;
  slug: string;
  title: string;
  promise: string;
  friction: string;
  outcome: string;
  stages: JourneyStage[];
  teams: string[];
  systems: string[];
  fit: string[];
  notFit: string[];
  modules: string[];
  metrics: string[];
  departmentIds: DepartmentId[];
};

export type Department = {
  id: DepartmentId;
  slug: string;
  title: string;
  mandate: string;
  outcome: string;
  signals: string[];
  systems: string[];
  metrics: string[];
  solutionIds: SolutionId[];
};

export type Blueprint = {
  id: "hire-to-productivity";
  slug: string;
  title: string;
  scenario: string;
  disclaimer: string;
  scope: string[];
  exclusions: string[];
  currentFlow: string[];
  targetFlow: JourneyStage[];
  layers: Array<{ title: string; responsibility: string; systems: string[] }>;
  roles: Array<{ role: string; owns: string; sourceOfTruth: string }>;
  aiAllowed: string[];
  humanRequired: string[];
  metrics: string[];
  phases: string[];
  solutionId: SolutionId;
  departmentIds: DepartmentId[];
};

export type Insight = {
  id: string;
  slug: string;
  category: InsightCategory;
  title: string;
  deck: string;
  readingTime: string;
  publishedAt: string;
  author: string;
  relatedSolutionId?: SolutionId;
  sections: Array<{ heading: string; body: string[] }>;
};

export type Policy = {
  key: Extract<RouteKey, "privacy" | "terms" | "cookies" | "accessibility">;
  title: string;
  summary: string;
  effectiveDate: string;
  updatedDate: string;
  sections: Array<{ heading: string; body: string[] }>;
};

export type SiteCopy = {
  localeName: string;
  category: string;
  tagline: string;
  ui: {
    skipToContent: string;
    primaryNav: string;
    mobilePrimaryNav: string;
    openMenu: string;
  };
  nav: Record<"solutions" | "departments" | "blueprints" | "insights" | "about", string>;
  cta: {
    scan: string;
    scanShort: string;
    exploreSolutions: string;
    viewBlueprint: string;
    readInsight: string;
    home: string;
    retry: string;
  };
  footer: {
    statement: string;
    explore: string;
    company: string;
    policies: string;
    legalLine: string;
  };
  home: {
    eyebrow: string;
    h1: string;
    body: string;
    problemHeading: string;
    problemClose: string;
    journeysHeading: string;
    journeysBody: string;
    blueprintHeading: string;
    methodHeading: string;
    managedHeading: string;
    managedBody: string;
    departmentsHeading: string;
    insightsHeading: string;
    finalHeading: string;
    finalBody: string;
  };
  index: {
    solutionsTitle: string;
    solutionsBody: string;
    departmentsTitle: string;
    departmentsBody: string;
    blueprintsTitle: string;
    blueprintsBody: string;
    insightsTitle: string;
    insightsBody: string;
  };
  scan: {
    title: string;
    body: string;
    expectation: string[];
    notSend: string;
    successTitle: string;
    successBody: string;
    unavailableTitle: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    whyTitle: string;
    whyBody: string;
    convictionTitle: string;
    founderTitle: string;
    operatingTitle: string;
  };
  system: {
    notFoundTitle: string;
    notFoundBody: string;
    errorTitle: string;
    errorBody: string;
    maintenanceTitle: string;
    formUnavailableBody: string;
    noResultsTitle: string;
  };
};

export const legalEntity = {
  brand: "Bunniemonki",
  registeredName: "DÍNAMOXIGENADO - UNIPESSOAL LDA",
  nipc: "518435067",
  legalForm: "Sociedade unipessoal por quotas",
  office: "Rua Diogo Dias, n.º 96, 2870-272 Montijo, Portugal",
  incorporated: "21 February 2025",
  cae: "63910 — Atividades de portais de pesquisa Web",
  verified: "23 June 2026",
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    localeName: "English",
    category: "Business Automation & AI Operations",
    tagline: "Move fast. Operate smart.",
    ui: {
      skipToContent: "Skip to content",
      primaryNav: "Primary",
      mobilePrimaryNav: "Mobile primary",
      openMenu: "Open menu",
    },
    nav: {
      solutions: "Solutions",
      departments: "Departments",
      blueprints: "Blueprints",
      insights: "Insights",
      about: "About",
    },
    cta: {
      scan: "Book an Automation Scan",
      scanShort: "Scan",
      exploreSolutions: "Explore solutions",
      viewBlueprint: "View blueprint",
      readInsight: "Read insight",
      home: "Home",
      retry: "Retry",
    },
    footer: {
      statement:
        "We design, build and run automation systems that connect tools, people and operations.",
      explore: "Explore",
      company: "Company",
      policies: "Policies",
      legalLine:
        "Bunniemonki is a commercial brand operated by DÍNAMOXIGENADO - UNIPESSOAL LDA, NIPC 518435067, registered in Portugal.",
    },
    home: {
      eyebrow: "Business Automation & AI Operations",
      h1: "Connect the systems. Accelerate the business.",
      body:
        "We redesign critical business journeys, integrate the tools behind them and manage the automations that keep work moving.",
      problemHeading:
        "Your business does not need more disconnected tools. It needs a system that works together.",
      problemClose:
        "The expensive gap is usually the journey between tools, not the absence of another tool.",
      journeysHeading: "Organized around business journeys, not tools.",
      journeysBody:
        "Each journey connects the systems, people and handoffs behind a measurable operational outcome.",
      blueprintHeading: "A concrete reference architecture, not a case-study claim.",
      methodHeading: "From an executive conversation to operations you can rely on.",
      managedHeading: "Built for reliability. Run with confidence.",
      managedBody:
        "Bunniemonki can operate an isolated automation environment for each client while your data, accounts and core licences remain under your ownership.",
      departmentsHeading: "A secondary path, by function.",
      insightsHeading: "Practical thinking for connected operations.",
      finalHeading: "Find the operational gap worth fixing first.",
      finalBody:
        "Requests are reviewed within one business day. Suitable businesses receive an invitation for a focused 30–45 minute conversation.",
    },
    index: {
      solutionsTitle: "Automation designed around the journey.",
      solutionsBody:
        "Start with how work and data move across teams and tools, then define the integrations, human gates and managed operations required.",
      departmentsTitle: "Start with the team. Design for the whole journey.",
      departmentsBody:
        "Each team view connects tools, responsibilities and handoffs to broader business outcomes.",
      blueprintsTitle: "Solution Blueprints",
      blueprintsBody:
        "Reference architectures showing how a business journey can be redesigned, integrated and operated. They are not client case studies or guaranteed results.",
      insightsTitle: "Practical thinking for connected operations.",
      insightsBody:
        "Research, patterns and operating guidance for business automation, integration and responsible AI.",
    },
    scan: {
      title: "Request an Automation Scan.",
      body:
        "Tell us where work is getting stuck. We review every request within one business day. If there is a likely fit, we will invite you to a focused 30–45 minute conversation.",
      expectation: [
        "Submit the request.",
        "Bunniemonki reviews fit within one business day.",
        "Suitable requests receive a scheduling invitation.",
        "If there is mutual fit, we may propose a paid diagnosis and Solution Blueprint.",
      ],
      notSend:
        "Do not send passwords, confidential records, customer datasets or candidate information.",
      successTitle: "Request received for review.",
      successBody:
        "This prototype validates the flow locally. Connect an approved request database, notification channel and email provider before launch.",
      unavailableTitle: "Automation Scan requests are temporarily unavailable.",
    },
    about: {
      eyebrow: "About Bunniemonki",
      title: "Fast movement, operational judgement.",
      body:
        "Bunniemonki helps teams connect tools and redesign the work between them, so speed does not come at the cost of control.",
      whyTitle: "Why Bunniemonki",
      whyBody:
        "The name points to speed and resourcefulness. The brand expresses that as pace, clarity and systems thinking, never as a mascot.",
      convictionTitle: "Operating conviction",
      founderTitle: "Founder/operator experience",
      operatingTitle: "How the company operates",
    },
    system: {
      notFoundTitle: "This path does not connect.",
      notFoundBody: "The route may have moved, or the content may not be published in this language.",
      errorTitle: "This page could not load.",
      errorBody: "Retry the request or return to a stable route.",
      maintenanceTitle: "This part of the system is under maintenance.",
      formUnavailableBody:
        "Use the approved contact channel and avoid sending credentials or confidential datasets.",
      noResultsTitle: "No matching content yet.",
    },
  },
  pt: {
    localeName: "Português",
    category: "Automação de Negócios & Operações com IA",
    tagline: "Move fast. Operate smart.",
    ui: {
      skipToContent: "Saltar para o conteúdo",
      primaryNav: "Principal",
      mobilePrimaryNav: "Principal mobile",
      openMenu: "Abrir menu",
    },
    nav: {
      solutions: "Soluções",
      departments: "Departamentos",
      blueprints: "Blueprints",
      insights: "Insights",
      about: "Sobre",
    },
    cta: {
      scan: "Pedir um Automation Scan",
      scanShort: "Scan",
      exploreSolutions: "Explorar soluções",
      viewBlueprint: "Ver blueprint",
      readInsight: "Ler insight",
      home: "Início",
      retry: "Tentar novamente",
    },
    footer: {
      statement:
        "Desenhamos, implementamos e operamos sistemas de automação que conectam ferramentas, pessoas e operações.",
      explore: "Explorar",
      company: "Empresa",
      policies: "Políticas",
      legalLine:
        "Bunniemonki é uma marca comercial operada por DÍNAMOXIGENADO - UNIPESSOAL LDA, NIPC 518435067, registada em Portugal.",
    },
    home: {
      eyebrow: "Automação de Negócios & Operações com IA",
      h1: "Conecte os sistemas. Acelere o negócio.",
      body:
        "Redesenhamos jornadas críticas do negócio, integramos as ferramentas por trás delas e gerimos as automações que mantêm o trabalho em movimento.",
      problemHeading:
        "O seu negócio não precisa de mais ferramentas desconectadas. Precisa de um sistema que funcione em conjunto.",
      problemClose:
        "A lacuna cara costuma estar na jornada entre ferramentas, não na ausência de mais uma ferramenta.",
      journeysHeading: "Organizadas por jornadas de negócio, não por ferramentas.",
      journeysBody:
        "Cada jornada conecta sistemas, pessoas e handoffs por trás de um resultado operacional mensurável.",
      blueprintHeading: "Uma arquitetura concreta de referência, não uma promessa de caso.",
      methodHeading: "De uma conversa executiva a operações em que pode confiar.",
      managedHeading: "Construído para fiabilidade. Operado com confiança.",
      managedBody:
        "A Bunniemonki pode operar um ambiente de automação isolado para cada cliente enquanto os seus dados, contas e licenças principais continuam sob a sua propriedade.",
      departmentsHeading: "Um caminho secundário, por função.",
      insightsHeading: "Pensamento prático para operações conectadas.",
      finalHeading: "Encontre a lacuna operacional que vale resolver primeiro.",
      finalBody:
        "Os pedidos são revistos num dia útil. Empresas com provável alinhamento recebem um convite para uma conversa focada de 30–45 minutos.",
    },
    index: {
      solutionsTitle: "Automação desenhada em torno da jornada.",
      solutionsBody:
        "Comece por como o trabalho e os dados se movem entre equipas e ferramentas, depois defina integrações, aprovações humanas e operação gerida.",
      departmentsTitle: "Comece pela equipa. Desenhe para a jornada inteira.",
      departmentsBody:
        "Cada visão por equipa conecta ferramentas, responsabilidades e handoffs a resultados de negócio mais amplos.",
      blueprintsTitle: "Solution Blueprints",
      blueprintsBody:
        "Arquiteturas de referência que mostram como uma jornada pode ser redesenhada, integrada e operada. Não são casos de clientes nem resultados garantidos.",
      insightsTitle: "Pensamento prático para operações conectadas.",
      insightsBody:
        "Pesquisa, padrões e orientação operacional para automação de negócios, integração e IA responsável.",
    },
    scan: {
      title: "Peça um Automation Scan.",
      body:
        "Diga-nos onde o trabalho está a ficar preso. Revemos cada pedido num dia útil. Se existir um provável alinhamento, enviaremos um convite para uma conversa focada de 30–45 minutos.",
      expectation: [
        "Submeta o pedido.",
        "A Bunniemonki revê o alinhamento num dia útil.",
        "Pedidos adequados recebem um convite de agendamento.",
        "Se houver alinhamento mútuo, podemos propor um diagnóstico pago e um Solution Blueprint.",
      ],
      notSend:
        "Não envie palavras-passe, registos confidenciais, dados de clientes ou informação de candidatos.",
      successTitle: "Pedido recebido para revisão.",
      successBody:
        "Este protótipo valida o fluxo localmente. Ligue uma base de pedidos, canal de notificação e fornecedor de email aprovados antes do lançamento.",
      unavailableTitle: "Os pedidos de Automation Scan estão temporariamente indisponíveis.",
    },
    about: {
      eyebrow: "Sobre a Bunniemonki",
      title: "Movimento rápido, julgamento operacional.",
      body:
        "A Bunniemonki ajuda equipas a conectar ferramentas e redesenhar o trabalho entre elas, para que velocidade não custe controlo.",
      whyTitle: "Porque Bunniemonki",
      whyBody:
        "O nome aponta para velocidade e engenho. A marca expressa isso como ritmo, clareza e pensamento sistémico, nunca como mascote.",
      convictionTitle: "Convicção operacional",
      founderTitle: "Experiência de fundador/operador",
      operatingTitle: "Como a empresa opera",
    },
    system: {
      notFoundTitle: "Este caminho não está ligado.",
      notFoundBody: "A rota pode ter mudado, ou o conteúdo pode não estar publicado neste idioma.",
      errorTitle: "Esta página não carregou.",
      errorBody: "Tente novamente ou volte a uma rota estável.",
      maintenanceTitle: "Esta parte do sistema está em manutenção.",
      formUnavailableBody:
        "Use o canal de contacto aprovado e evite enviar credenciais ou dados confidenciais.",
      noResultsTitle: "Ainda não há conteúdo correspondente.",
    },
  },
};

const baseSolutions: Record<Locale, Solution[]> = {
  en: [
    {
      id: "lead-to-revenue",
      slug: "lead-to-revenue",
      title: "Lead-to-Revenue",
      promise: "From qualified demand to a reliable sales handoff.",
      friction: "Leads scattered across forms, inboxes and spreadsheets.",
      outcome: "Every qualified lead is captured, routed, followed up and visible.",
      teams: ["Marketing", "Sales", "Operations"],
      systems: ["Forms and channels", "CRM", "Email", "Analytics", "Sales workspace"],
      departmentIds: ["marketing-sales", "operations-it"],
      fit: ["High-value leads cross more than one system.", "Sales handoff quality is hard to inspect."],
      notFit: ["You only need a new ad campaign.", "The CRM ownership model is intentionally manual."],
      modules: ["Structured intake", "Lead enrichment", "Routing rules", "Follow-up tasks", "Exception queue"],
      metrics: ["Response time", "Handoff delay", "Data completeness", "Manual touches", "Unowned leads"],
      stages: [
        {
          label: "Capture",
          owner: "Marketing",
          input: "Qualified demand enters",
          output: "Structured lead record",
          gate: "Marketing validates source and consent",
          exception: "Missing attribution or invalid contact",
        },
        {
          label: "Route",
          owner: "Revenue Operations",
          input: "Lead profile and rules",
          output: "Assigned owner and next action",
          gate: "Human override for strategic accounts",
          exception: "Duplicate or ambiguous ownership",
        },
        {
          label: "Follow up",
          owner: "Sales",
          input: "Assigned lead and context",
          output: "Visible opportunity or closed loop",
          gate: "Rep qualifies intent",
          exception: "No response or missing data",
        },
      ],
    },
    {
      id: "customer-operations",
      slug: "customer-operations",
      title: "Customer Operations",
      promise: "From incoming request to resolved, visible service.",
      friction: "Onboarding and service handled ad hoc across channels.",
      outcome: "Customer requests move through clear ownership, updates and closure.",
      teams: ["Customer Success", "Service", "Operations"],
      systems: ["Helpdesk", "CRM", "Messaging", "Knowledge base", "Reporting"],
      departmentIds: ["customer-success-service", "operations-it"],
      fit: ["Requests jump between inboxes and systems.", "Escalations lack an accountable owner."],
      notFit: ["You only need a helpdesk theme refresh.", "The service model is intentionally concierge-only."],
      modules: ["Request intake", "Ownership routing", "Status communication", "SLA alerts", "Resolution logging"],
      metrics: ["Time to ownership", "Reopen rate", "Unresolved exceptions", "Update delay"],
      stages: [
        {
          label: "Receive",
          owner: "Service",
          input: "Customer request or event",
          output: "Categorised case",
          gate: "Human review for high-impact cases",
          exception: "Incomplete context",
        },
        {
          label: "Resolve",
          owner: "Customer Operations",
          input: "Case, account and history",
          output: "Resolution and follow-up",
          gate: "Escalation approval",
          exception: "Product or finance dependency",
        },
        {
          label: "Learn",
          owner: "Operations",
          input: "Closed cases and exceptions",
          output: "Pattern and improvement backlog",
          gate: "Owner prioritises change",
          exception: "Repeated unknown cause",
        },
      ],
    },
    {
      id: "quote-to-cash",
      slug: "quote-to-cash",
      title: "Quote-to-Cash",
      promise: "From commercial agreement to correct, traceable payment.",
      friction: "Proposals, approvals and invoices stuck in manual steps.",
      outcome: "Commercial intent turns into approved documents, invoices and payment status.",
      teams: ["Sales", "Finance", "Operations"],
      systems: ["CRM", "Proposal tools", "E-signature", "ERP/accounting", "Payments"],
      departmentIds: ["finance", "marketing-sales", "operations-it"],
      fit: ["Approvals and payment state are reconciled by hand.", "Errors surface late in invoicing."],
      notFit: ["You only need a payment link.", "Contracting rules are not owned yet."],
      modules: ["Approval routing", "Document generation", "Invoice trigger", "Payment sync", "Audit trail"],
      metrics: ["Approval cycle", "Invoice exception rate", "Reconciliation effort", "Payment state delay"],
      stages: [
        {
          label: "Approve",
          owner: "Sales leadership",
          input: "Commercial intent",
          output: "Approved quote or contract",
          gate: "Margin/terms approval",
          exception: "Non-standard terms",
        },
        {
          label: "Issue",
          owner: "Finance",
          input: "Approved agreement",
          output: "Correct invoice and payment request",
          gate: "Finance validates billing details",
          exception: "Tax or entity mismatch",
        },
        {
          label: "Reconcile",
          owner: "Finance Operations",
          input: "Payment and invoice state",
          output: "Traceable collection status",
          gate: "Human review for disputes",
          exception: "Partial payment or failed charge",
        },
      ],
    },
    {
      id: "hire-to-productivity",
      slug: "hire-to-productivity",
      title: "Hire-to-Productivity",
      promise: "From approved role to a productive new employee.",
      friction: "New hires wait on accounts, equipment and training.",
      outcome: "People reach a defined productivity milestone with human decisions in control.",
      teams: ["HR", "IT", "Hiring manager", "Finance"],
      systems: ["ATS", "HRIS", "Identity", "Equipment", "Learning", "Calendar"],
      departmentIds: ["hr", "operations-it", "finance"],
      fit: ["ATS/HRIS exist but handoffs still rely on email.", "Provisioning and onboarding miss ownership."],
      notFit: ["You want autonomous hiring decisions.", "Employment criteria and owners are undefined."],
      modules: ["Offer workflow", "Document collection", "Access provisioning", "Equipment tasks", "Onboarding checks"],
      metrics: ["Ready-on-day-one completion", "Manual touches", "Offer/document cycle", "Exception volume"],
      stages: [
        {
          label: "Approve role",
          owner: "Hiring manager",
          input: "Role request and business need",
          output: "Approved hiring path",
          gate: "Human budget and role approval",
          exception: "Missing role owner",
        },
        {
          label: "Convert candidate",
          owner: "HR",
          input: "Accepted offer",
          output: "Employee record and documents",
          gate: "Human employment decision",
          exception: "Missing document or data mismatch",
        },
        {
          label: "Prepare start",
          owner: "IT and manager",
          input: "Employee record and start date",
          output: "Access, equipment and onboarding plan",
          gate: "Access owner approval",
          exception: "Provisioning or equipment delay",
        },
      ],
    },
  ],
  pt: [],
};

baseSolutions.pt = [
  {
    ...baseSolutions.en[0],
    promise: "Da procura qualificada a um handoff comercial fiável.",
    friction: "Leads dispersos por formulários, caixas de entrada e folhas de cálculo.",
    outcome: "Cada lead qualificado é capturado, encaminhado, acompanhado e visível.",
    teams: ["Marketing", "Vendas", "Operações"],
    systems: ["Formulários e canais", "CRM", "Email", "Analytics", "Workspace comercial"],
    fit: ["Leads de alto valor atravessam mais de um sistema.", "A qualidade do handoff comercial é difícil de inspecionar."],
    notFit: ["Só precisa de uma nova campanha de anúncios.", "O modelo de propriedade do CRM é intencionalmente manual."],
    modules: ["Intake estruturado", "Enriquecimento de lead", "Regras de encaminhamento", "Tarefas de follow-up", "Fila de exceções"],
    metrics: ["Tempo de resposta", "Atraso no handoff", "Completude dos dados", "Toques manuais", "Leads sem dono"],
    stages: [
      {
        label: "Captar",
        owner: "Marketing",
        input: "Procura qualificada recebida",
        output: "Registo de lead estruturado",
        gate: "Marketing valida fonte e consentimento",
        exception: "Atribuição em falta ou contacto inválido",
      },
      {
        label: "Encaminhar",
        owner: "Operações de receita",
        input: "Perfil do lead e regras",
        output: "Responsável atribuído e próxima ação",
        gate: "Override humano para contas estratégicas",
        exception: "Duplicado ou propriedade ambígua",
      },
      {
        label: "Acompanhar",
        owner: "Vendas",
        input: "Lead atribuído e contexto",
        output: "Oportunidade visível ou ciclo fechado",
        gate: "Representante qualifica intenção",
        exception: "Sem resposta ou dados em falta",
      },
    ],
  },
  {
    ...baseSolutions.en[1],
    promise: "Do pedido recebido ao serviço resolvido e visível.",
    friction: "Onboarding e serviço tratados de forma ad hoc entre canais.",
    outcome: "Pedidos de clientes avançam com propriedade, atualizações e fecho claros.",
    teams: ["Customer Success", "Serviço", "Operações"],
    systems: ["Helpdesk", "CRM", "Mensagens", "Base de conhecimento", "Reporting"],
    fit: ["Pedidos saltam entre inboxes e sistemas.", "Escalonamentos não têm responsável claro."],
    notFit: ["Só precisa de refrescar o tema do helpdesk.", "O modelo de serviço é intencionalmente concierge."],
    modules: ["Intake de pedidos", "Encaminhamento de propriedade", "Comunicação de estado", "Alertas SLA", "Registo de resolução"],
    metrics: ["Tempo até propriedade", "Taxa de reabertura", "Exceções por resolver", "Atraso de atualização"],
    stages: [
      {
        label: "Receber",
        owner: "Serviço",
        input: "Pedido ou evento do cliente",
        output: "Caso categorizado",
        gate: "Revisão humana para casos de alto impacto",
        exception: "Contexto incompleto",
      },
      {
        label: "Resolver",
        owner: "Customer Operations",
        input: "Caso, conta e histórico",
        output: "Resolução e follow-up",
        gate: "Aprovação de escalonamento",
        exception: "Dependência de produto ou finanças",
      },
      {
        label: "Aprender",
        owner: "Operações",
        input: "Casos fechados e exceções",
        output: "Padrão e backlog de melhoria",
        gate: "Responsável prioriza mudança",
        exception: "Causa repetida desconhecida",
      },
    ],
  },
  {
    ...baseSolutions.en[2],
    promise: "Do acordo comercial ao pagamento correto e rastreável.",
    friction: "Propostas, aprovações e faturas presas em passos manuais.",
    outcome: "Intenção comercial transforma-se em documentos aprovados, faturas e estado de pagamento.",
    teams: ["Vendas", "Finanças", "Operações"],
    systems: ["CRM", "Ferramentas de proposta", "Assinatura eletrónica", "ERP/contabilidade", "Pagamentos"],
    fit: ["Aprovações e estado de pagamento são reconciliados à mão.", "Erros aparecem tarde na faturação."],
    notFit: ["Só precisa de um link de pagamento.", "As regras contratuais ainda não têm dono."],
    modules: ["Encaminhamento de aprovação", "Geração documental", "Trigger de fatura", "Sincronização de pagamento", "Auditoria"],
    metrics: ["Ciclo de aprovação", "Taxa de exceção de fatura", "Esforço de reconciliação", "Atraso do estado de pagamento"],
    stages: [
      {
        label: "Aprovar",
        owner: "Liderança comercial",
        input: "Intenção comercial",
        output: "Proposta ou contrato aprovado",
        gate: "Aprovação de margem/termos",
        exception: "Termos fora do padrão",
      },
      {
        label: "Emitir",
        owner: "Finanças",
        input: "Acordo aprovado",
        output: "Fatura correta e pedido de pagamento",
        gate: "Finanças valida dados de faturação",
        exception: "Incompatibilidade fiscal ou de entidade",
      },
      {
        label: "Reconciliar",
        owner: "Operações financeiras",
        input: "Estado de pagamento e fatura",
        output: "Estado de cobrança rastreável",
        gate: "Revisão humana para disputas",
        exception: "Pagamento parcial ou cobrança falhada",
      },
    ],
  },
  {
    ...baseSolutions.en[3],
    promise: "Da função aprovada a uma pessoa produtiva.",
    friction: "Novos colaboradores esperam por acessos, equipamento e formação.",
    outcome: "Pessoas chegam a um marco de produtividade definido com decisões humanas sob controlo.",
    teams: ["HR", "IT", "Gestor de contratação", "Finanças"],
    systems: ["ATS", "HRIS", "Identidade", "Equipamento", "Learning", "Calendário"],
    fit: ["ATS/HRIS existem, mas handoffs ainda dependem de email.", "Provisioning e onboarding falham propriedade."],
    notFit: ["Quer decisões de contratação autónomas.", "Critérios de emprego e responsáveis não estão definidos."],
    modules: ["Workflow de oferta", "Recolha documental", "Provisioning de acesso", "Tarefas de equipamento", "Checks de onboarding"],
    metrics: ["Pronto no primeiro dia", "Toques manuais", "Ciclo oferta/documento", "Volume de exceções"],
    stages: [
      {
        label: "Aprovar função",
        owner: "Gestor de contratação",
        input: "Pedido de função e necessidade de negócio",
        output: "Percurso de contratação aprovado",
        gate: "Aprovação humana de orçamento e função",
        exception: "Responsável da função em falta",
      },
      {
        label: "Converter candidato",
        owner: "HR",
        input: "Oferta aceite",
        output: "Registo de colaborador e documentos",
        gate: "Decisão humana de contratação",
        exception: "Documento em falta ou dados incompatíveis",
      },
      {
        label: "Preparar início",
        owner: "IT e gestor",
        input: "Registo do colaborador e data de início",
        output: "Acessos, equipamento e plano de onboarding",
        gate: "Aprovação do responsável de acessos",
        exception: "Atraso de provisioning ou equipamento",
      },
    ],
  },
];

export const solutions = baseSolutions;

export const departments: Record<Locale, Department[]> = {
  en: [
    {
      id: "marketing-sales",
      slug: "marketing-sales",
      title: "Marketing & Sales",
      mandate: "Create qualified demand and turn it into accountable commercial action.",
      outcome: "Demand, qualification and handoff become visible across the revenue journey.",
      signals: ["Duplicate lead entry", "Slow response", "Unknown lead owner", "Manual campaign-to-CRM reconciliation"],
      systems: ["Forms", "Ads", "CRM", "Email", "Analytics"],
      metrics: ["Response time", "Handoff delay", "Lead data completeness", "Follow-up completion"],
      solutionIds: ["lead-to-revenue", "quote-to-cash"],
    },
    {
      id: "customer-success-service",
      slug: "customer-success-service",
      title: "Customer Success & Service",
      mandate: "Keep customer requests, onboarding and service recovery moving with clear ownership.",
      outcome: "Requests become visible work, not scattered messages.",
      signals: ["Requests split across channels", "Reopened cases", "Unclear escalation owner", "Manual status updates"],
      systems: ["Helpdesk", "CRM", "Messaging", "Knowledge base"],
      metrics: ["Time to ownership", "Reopen rate", "Unresolved exceptions", "Update delay"],
      solutionIds: ["customer-operations"],
    },
    {
      id: "finance",
      slug: "finance",
      title: "Finance",
      mandate: "Make approvals, billing and reconciliation traceable without slowing the business.",
      outcome: "Commercial operations can see what is approved, invoiced and paid.",
      signals: ["Manual approval chasing", "Invoice exceptions", "Payment-state reconciliation", "Unclear billing data source"],
      systems: ["ERP", "Accounting", "Payments", "Contracts", "CRM"],
      metrics: ["Approval cycle", "Reconciliation effort", "Invoice exception rate", "Payment state delay"],
      solutionIds: ["quote-to-cash", "hire-to-productivity"],
    },
    {
      id: "hr",
      slug: "hr",
      title: "HR",
      mandate: "Move people decisions, documents and onboarding through controlled handoffs.",
      outcome: "Hiring and onboarding remain human-led while operational steps become visible.",
      signals: ["Offer/document loops", "Delayed onboarding tasks", "HRIS updates copied by hand", "Unclear manager/IT handoff"],
      systems: ["ATS", "HRIS", "Identity", "Learning", "Documents"],
      metrics: ["Ready start rate", "Onboarding completeness", "Manual touches", "Document cycle time"],
      solutionIds: ["hire-to-productivity"],
    },
    {
      id: "operations-it",
      slug: "operations-it",
      title: "Operations & IT",
      mandate: "Own the operating layer where integrations, access, monitoring and recovery meet.",
      outcome: "Automation becomes observable, supportable and governed.",
      signals: ["Silent automation failures", "Unowned integrations", "Credential sprawl", "No exception queue"],
      systems: ["Automation platform", "Identity", "Monitoring", "Data stores", "Ticketing"],
      metrics: ["Automation failures", "Mean time to recovery", "Unowned workflows", "Exception volume"],
      solutionIds: ["lead-to-revenue", "customer-operations", "quote-to-cash", "hire-to-productivity"],
    },
  ],
  pt: [],
};

departments.pt = [
  {
    ...departments.en[0],
    title: "Marketing & Vendas",
    mandate: "Criar procura qualificada e transformá-la em ação comercial responsável.",
    outcome: "Procura, qualificação e handoff tornam-se visíveis na jornada de receita.",
    signals: ["Duplicação de leads", "Resposta lenta", "Dono do lead desconhecido", "Reconciliação campanha-CRM manual"],
    systems: ["Formulários", "Anúncios", "CRM", "Email", "Analytics"],
    metrics: ["Tempo de resposta", "Atraso no handoff", "Completude do lead", "Follow-up concluído"],
  },
  {
    ...departments.en[1],
    title: "Customer Success & Serviço",
    mandate: "Manter pedidos, onboarding e recuperação de serviço com propriedade clara.",
    outcome: "Pedidos tornam-se trabalho visível, não mensagens dispersas.",
    signals: ["Pedidos divididos por canais", "Casos reabertos", "Dono do escalonamento incerto", "Atualizações manuais"],
    systems: ["Helpdesk", "CRM", "Mensagens", "Base de conhecimento"],
    metrics: ["Tempo até propriedade", "Taxa de reabertura", "Exceções por resolver", "Atraso de atualização"],
  },
  {
    ...departments.en[2],
    title: "Finanças",
    mandate: "Tornar aprovações, faturação e reconciliação rastreáveis sem travar o negócio.",
    outcome: "Operações comerciais veem o que está aprovado, faturado e pago.",
    signals: ["Aprovações perseguidas manualmente", "Exceções de fatura", "Reconciliação de estado de pagamento", "Fonte de dados de faturação incerta"],
    systems: ["ERP", "Contabilidade", "Pagamentos", "Contratos", "CRM"],
    metrics: ["Ciclo de aprovação", "Esforço de reconciliação", "Taxa de exceção de fatura", "Atraso do estado de pagamento"],
  },
  {
    ...departments.en[3],
    title: "HR",
    mandate: "Mover decisões, documentos e onboarding por handoffs controlados.",
    outcome: "Contratação e onboarding continuam human-led enquanto os passos operacionais ficam visíveis.",
    signals: ["Loops de oferta/documentos", "Tarefas de onboarding atrasadas", "HRIS atualizado à mão", "Handoff manager/IT incerto"],
    systems: ["ATS", "HRIS", "Identidade", "Learning", "Documentos"],
    metrics: ["Pronto para começar", "Completude do onboarding", "Toques manuais", "Ciclo documental"],
  },
  {
    ...departments.en[4],
    title: "Operações & IT",
    mandate: "Assumir a camada operacional onde integrações, acessos, monitorização e recuperação se encontram.",
    outcome: "A automação torna-se observável, suportável e governada.",
    signals: ["Falhas silenciosas", "Integrações sem dono", "Credenciais dispersas", "Sem fila de exceções"],
    systems: ["Plataforma de automação", "Identidade", "Monitorização", "Dados", "Ticketing"],
    metrics: ["Falhas de automação", "Tempo médio de recuperação", "Workflows sem dono", "Volume de exceções"],
  },
];

export const blueprints: Record<Locale, Blueprint[]> = {
  en: [
    {
      id: "hire-to-productivity",
      slug: "hire-to-productivity",
      title: "Hire-to-Productivity",
      scenario:
        "For organisations that already use ATS and HRIS tools, but still run critical recruitment and onboarding handoffs through email, spreadsheets or messaging.",
      disclaimer:
        "Solution Blueprint — a reference architecture, not a client case study or guaranteed outcome. Final scope, controls and targets depend on the organisation, systems and jurisdiction.",
      scope: ["Recruitment tracks", "Offer and documentation", "HRIS transition", "Provisioning", "Onboarding check-ins"],
      exclusions: ["Replacing the ATS/HRIS", "Autonomous employment decisions", "Emotion recognition", "Sensitive-trait inference"],
      currentFlow: ["Role approved", "Candidate data copied", "Offer chased", "Access requested manually", "Onboarding status unclear"],
      solutionId: "hire-to-productivity",
      departmentIds: ["hr", "operations-it", "finance"],
      targetFlow: baseSolutions.en[3].stages,
      layers: [
        {
          title: "Channels and intake",
          responsibility: "Collect structured triggers and candidate/new-hire information.",
          systems: ["Forms", "Messaging", "Email"],
        },
        {
          title: "ATS/HRIS records",
          responsibility: "Preserve candidate and employee systems of record.",
          systems: ["ATS", "HRIS"],
        },
        {
          title: "Managed orchestration",
          responsibility: "Coordinate events, validation, retries and exception routing.",
          systems: ["Automation environment", "Workflow logs", "Exception queue"],
        },
        {
          title: "Provisioning services",
          responsibility: "Prepare identity, equipment, training and calendar steps.",
          systems: ["Identity", "Equipment", "Learning", "Calendar"],
        },
      ],
      roles: [
        { role: "HR", owns: "Candidate-to-employee transition", sourceOfTruth: "ATS then HRIS" },
        { role: "Hiring manager", owns: "Role need, assessment and productivity milestone", sourceOfTruth: "Approved role record" },
        { role: "IT", owns: "Access, devices and recovery", sourceOfTruth: "Identity and ticketing" },
        { role: "Finance/payroll", owns: "Payroll and compensation checks", sourceOfTruth: "Payroll/accounting" },
      ],
      aiAllowed: ["Draft approved job descriptions", "Summarise candidate-provided information", "Prepare controlled communications"],
      humanRequired: ["Validate assessments", "Approve offers", "Make hiring/rejection decisions", "Review AI flags"],
      metrics: ["Approval time", "Manual touches", "Data completeness", "Ready-on-day-one completion", "Exception volume"],
      phases: ["Diagnose and baseline", "Stabilise sources of truth", "Implement highest-value flow", "Expand onboarding modules", "Monitor and improve"],
    },
  ],
  pt: [],
};

blueprints.pt = [
  {
    ...blueprints.en[0],
    scenario:
      "Para organizações que já usam ATS e HRIS, mas ainda gerem handoffs críticos de recrutamento e onboarding por email, folhas de cálculo ou mensagens.",
    disclaimer:
      "Solution Blueprint — uma arquitetura de referência, não um caso de cliente nem um resultado garantido. O escopo, os controlos e as metas finais dependem da organização, dos sistemas e da jurisdição.",
    scope: ["Tracks de recrutamento", "Oferta e documentação", "Transição para HRIS", "Provisioning", "Check-ins de onboarding"],
    exclusions: ["Substituir ATS/HRIS", "Decisões autónomas de emprego", "Reconhecimento emocional", "Inferência de atributos sensíveis"],
    currentFlow: ["Função aprovada", "Dados do candidato copiados", "Oferta perseguida", "Acesso pedido manualmente", "Estado do onboarding incerto"],
    targetFlow: baseSolutions.pt[3].stages,
    layers: [
      {
        title: "Canais e intake",
        responsibility: "Recolher triggers e informação de candidato/novo colaborador de forma estruturada.",
        systems: ["Formulários", "Mensagens", "Email"],
      },
      {
        title: "Registos ATS/HRIS",
        responsibility: "Preservar sistemas de registo de candidato e colaborador.",
        systems: ["ATS", "HRIS"],
      },
      {
        title: "Orquestração gerida",
        responsibility: "Coordenar eventos, validação, retries e encaminhamento de exceções.",
        systems: ["Ambiente de automação", "Logs", "Fila de exceções"],
      },
      {
        title: "Serviços de provisioning",
        responsibility: "Preparar identidade, equipamento, formação e calendário.",
        systems: ["Identidade", "Equipamento", "Learning", "Calendário"],
      },
    ],
    roles: [
      { role: "HR", owns: "Transição candidato-colaborador", sourceOfTruth: "ATS depois HRIS" },
      { role: "Gestor de contratação", owns: "Necessidade, avaliação e marco de produtividade", sourceOfTruth: "Registo de função aprovada" },
      { role: "IT", owns: "Acessos, dispositivos e recuperação", sourceOfTruth: "Identidade e ticketing" },
      { role: "Finanças/payroll", owns: "Checks de payroll e compensação", sourceOfTruth: "Payroll/contabilidade" },
    ],
    aiAllowed: ["Rascunhar descrições aprovadas", "Resumir informação fornecida pelo candidato", "Preparar comunicações controladas"],
    humanRequired: ["Validar avaliações", "Aprovar ofertas", "Tomar decisões de contratação/rejeição", "Rever flags de IA"],
    metrics: ["Tempo de aprovação", "Toques manuais", "Completude dos dados", "Pronto no primeiro dia", "Volume de exceções"],
    phases: ["Diagnosticar e baselinar", "Estabilizar fontes de verdade", "Implementar fluxo de maior valor", "Expandir módulos de onboarding", "Monitorizar e melhorar"],
  },
];

export const insights: Record<Locale, Insight[]> = {
  en: [
    {
      id: "integration-before-automation",
      slug: "integration-before-automation",
      category: "Integrations",
      title: "Why integration should come before automation",
      deck: "Automation compounds whatever operating model it finds. Integration makes the handoff visible first.",
      readingTime: "6 min read",
      publishedAt: "2026-06-23",
      author: "Bunniemonki",
      relatedSolutionId: "lead-to-revenue",
      sections: [
        {
          heading: "Start with ownership",
          body: [
            "A tool connection is only useful when the source of truth, decision owner and exception owner are clear.",
            "Before automating the visible task, map the journey and the records that must stay authoritative.",
          ],
        },
        {
          heading: "Make the exception first-class",
          body: [
            "Most operational risk hides in edge cases. A reliable automation layer needs validation, retries, alerting and a human route for what cannot be resolved automatically.",
          ],
        },
      ],
    },
    {
      id: "human-approval",
      slug: "human-approval-automated-workflows",
      category: "AI & Governance",
      title: "Designing human approval into automated workflows",
      deck: "Human gates are not a weakness. They are how high-impact automation stays accountable.",
      readingTime: "5 min read",
      publishedAt: "2026-06-22",
      author: "Bunniemonki",
      relatedSolutionId: "hire-to-productivity",
      sections: [
        {
          heading: "Separate assistance from authority",
          body: [
            "AI can draft, summarise and structure information, but employment, financial and legal decisions need named human owners.",
          ],
        },
        {
          heading: "Record the decision",
          body: [
            "The workflow should make approvals, rejections, overrides and missing information visible in the system of record.",
          ],
        },
      ],
    },
    {
      id: "map-before-tool",
      slug: "map-the-journey-before-you-choose-a-tool",
      category: "Operations",
      title: "Map the business journey before you choose a tool",
      deck: "A new tool can help. It can also move the bottleneck somewhere harder to see.",
      readingTime: "7 min read",
      publishedAt: "2026-06-20",
      author: "Bunniemonki",
      relatedSolutionId: "customer-operations",
      sections: [
        {
          heading: "The journey is the unit of design",
          body: [
            "Departments experience pain locally, but customers and employees experience the end-to-end journey.",
          ],
        },
        {
          heading: "Measure before promising",
          body: [
            "Cycle time, manual touches and exception volume should be baselined before any target is presented as credible.",
          ],
        },
      ],
    },
  ],
  pt: [],
};

insights.pt = [
  {
    ...insights.en[0],
    title: "Porque a integração deve vir antes da automação",
    deck: "A automação amplifica o modelo operacional que encontra. A integração torna o handoff visível primeiro.",
    readingTime: "6 min de leitura",
    sections: [
      {
        heading: "Comece pela propriedade",
        body: [
          "Uma ligação entre ferramentas só é útil quando a fonte de verdade, o dono da decisão e o dono da exceção estão claros.",
          "Antes de automatizar a tarefa visível, mapeie a jornada e os registos que devem continuar autoritativos.",
        ],
      },
      {
        heading: "Trate a exceção como primeira-classe",
        body: [
          "Grande parte do risco operacional esconde-se nos casos limite. Uma camada de automação fiável precisa de validação, retries, alertas e uma rota humana.",
        ],
      },
    ],
  },
  {
    ...insights.en[1],
    title: "Desenhar aprovação humana em fluxos automatizados",
    deck: "Pontos de decisão humana não são fraqueza. São como a automação de alto impacto permanece responsável.",
    readingTime: "5 min de leitura",
    sections: [
      {
        heading: "Separe assistência de autoridade",
        body: [
          "IA pode rascunhar, resumir e estruturar informação, mas decisões de emprego, finanças e legais precisam de donos humanos nomeados.",
        ],
      },
      {
        heading: "Registe a decisão",
        body: [
          "O workflow deve tornar aprovações, rejeições, overrides e informação em falta visíveis no sistema de registo.",
        ],
      },
    ],
  },
  {
    ...insights.en[2],
    title: "Mapeie a jornada de negócio antes de escolher uma ferramenta",
    deck: "Uma nova ferramenta pode ajudar. Também pode mover o bottleneck para um lugar mais difícil de ver.",
    readingTime: "7 min de leitura",
    sections: [
      {
        heading: "A jornada é a unidade de desenho",
        body: [
          "Departamentos sentem dor localmente, mas clientes e colaboradores vivem a jornada de ponta a ponta.",
        ],
      },
      {
        heading: "Meça antes de prometer",
        body: [
          "Cycle time, toques manuais e volume de exceções devem ser baselinados antes de qualquer meta ser apresentada como credível.",
        ],
      },
    ],
  },
];

export const policies: Record<Locale, Policy[]> = {
  en: [
    {
      key: "privacy",
      title: "Privacy Policy",
      summary:
        "This page explains the structure required for production privacy terms. Final legal text must be supplied or reviewed before launch.",
      effectiveDate: "To be approved",
      updatedDate: "2026-06-23",
      sections: [
        { heading: "Controller", body: [`${legalEntity.registeredName} operates the Bunniemonki brand.`] },
        { heading: "Data collected", body: ["The Automation Scan collects business contact and operational context only. Credentials, confidential records and special-category data are not requested."] },
        { heading: "Legal review", body: ["Processors, retention periods, transfer safeguards and rights-handling must match the implemented production architecture."] },
      ],
    },
    {
      key: "terms",
      title: "Terms",
      summary:
        "Public content and Solution Blueprints are informational. Browsing or requesting a scan does not create a client relationship.",
      effectiveDate: "To be approved",
      updatedDate: "2026-06-23",
      sections: [
        { heading: "Operator", body: [`The site is operated by ${legalEntity.registeredName}.`] },
        { heading: "No guarantee", body: ["Submitting an Automation Scan request does not guarantee acceptance, scheduling or a proposal."] },
        { heading: "Client work", body: ["Commercial project terms, SLA, DPA and proposal conditions belong in signed client contracts."] },
      ],
    },
    {
      key: "cookies",
      title: "Cookie Settings",
      summary:
        "If only strictly necessary storage is used, no decorative consent banner is required. Optional analytics or marketing storage must wait for valid consent.",
      effectiveDate: "To be approved",
      updatedDate: "2026-06-23",
      sections: [
        { heading: "Necessary storage", body: ["Essential storage may support language preference, security and session integrity."] },
        { heading: "Optional storage", body: ["Accept, reject and configure choices must be equally clear when non-essential tools are added."] },
      ],
    },
    {
      key: "accessibility",
      title: "Accessibility",
      summary:
        "Bunniemonki targets WCAG 2.2 AA. Do not claim conformance until testing supports it.",
      effectiveDate: "To be approved",
      updatedDate: "2026-06-23",
      sections: [
        { heading: "Target", body: ["The production site should support semantic landmarks, keyboard access, visible focus and reduced motion."] },
        { heading: "Feedback", body: ["A final contact method for accessibility barriers must be supplied before launch."] },
      ],
    },
  ],
  pt: [],
};

policies.pt = [
  {
    ...policies.en[0],
    title: "Política de Privacidade",
    summary:
      "Esta página explica a estrutura necessária para os termos de privacidade de produção. O texto legal final deve ser fornecido ou revisto antes do lançamento.",
    sections: [
      { heading: "Responsável", body: [`${legalEntity.registeredName} opera a marca Bunniemonki.`] },
      { heading: "Dados recolhidos", body: ["O Automation Scan recolhe apenas contacto de negócio e contexto operacional. Credenciais, registos confidenciais e dados de categoria especial não são pedidos."] },
      { heading: "Revisão legal", body: ["Subprocessadores, períodos de retenção, transferências e direitos devem refletir a arquitetura de produção implementada."] },
    ],
  },
  {
    ...policies.en[1],
    title: "Termos",
    summary:
      "O conteúdo público e os Solution Blueprints são informativos. Navegar ou pedir um scan não cria uma relação de cliente.",
    sections: [
      { heading: "Operador", body: [`O site é operado por ${legalEntity.registeredName}.`] },
      { heading: "Sem garantia", body: ["Submeter um Automation Scan não garante aceitação, agendamento ou proposta."] },
      { heading: "Trabalho com clientes", body: ["Termos comerciais, SLA, DPA e condições de proposta pertencem a contratos assinados."] },
    ],
  },
  {
    ...policies.en[2],
    title: "Cookies",
    summary:
      "Se apenas armazenamento estritamente necessário for usado, não é necessário banner decorativo. Analytics ou marketing opcionais exigem consentimento válido.",
    sections: [
      { heading: "Armazenamento necessário", body: ["Armazenamento essencial pode suportar preferência de idioma, segurança e integridade de sessão."] },
      { heading: "Armazenamento opcional", body: ["Aceitar, rejeitar e configurar devem ter clareza equivalente quando ferramentas não essenciais forem adicionadas."] },
    ],
  },
  {
    ...policies.en[3],
    title: "Acessibilidade",
    summary:
      "A Bunniemonki aponta para WCAG 2.2 AA. Não afirme conformidade até que os testes a suportem.",
    sections: [
      { heading: "Objetivo", body: ["O site de produção deve suportar landmarks semânticos, teclado, foco visível e redução de movimento."] },
      { heading: "Feedback", body: ["Um contacto final para barreiras de acessibilidade deve ser fornecido antes do lançamento."] },
    ],
  },
];

export function getSolution(locale: Locale, slug: string) {
  return solutions[locale].find((solution) => solution.slug === slug);
}

export function getDepartment(locale: Locale, slug: string) {
  return departments[locale].find((department) => department.slug === slug);
}

export function getBlueprint(locale: Locale, slug: string) {
  return blueprints[locale].find((blueprint) => blueprint.slug === slug);
}

export function getInsight(locale: Locale, slug: string) {
  return insights[locale].find((insight) => insight.slug === slug);
}

export function getPolicy(locale: Locale, key: Policy["key"]) {
  return policies[locale].find((policy) => policy.key === key);
}

export function relatedSolutions(locale: Locale, ids: SolutionId[]) {
  return solutions[locale].filter((solution) => ids.includes(solution.id));
}

export function relatedDepartments(locale: Locale, ids: DepartmentId[]) {
  return departments[locale].filter((department) => ids.includes(department.id));
}

export function getNavItems(locale: Locale) {
  const copy = siteCopy[locale];
  return [
    { label: copy.nav.solutions, href: getLocalizedPath(locale, "solutions") },
    { label: copy.nav.departments, href: getLocalizedPath(locale, "departments") },
    { label: copy.nav.blueprints, href: getLocalizedPath(locale, "blueprints") },
    { label: copy.nav.insights, href: getLocalizedPath(locale, "insights") },
    { label: copy.nav.about, href: getLocalizedPath(locale, "about") },
  ];
}
