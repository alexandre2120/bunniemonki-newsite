import { getLocalizedPath, type Locale, type RouteKey } from "./i18n";

export type SolutionId =
  | "ai-process-implementation"
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

export type LandingPageId =
  | "accounting-tax-consulting"
  | "tourism-operations"
  | "private-clinics"
  | "real-estate-rentals";

export type LandingPage = {
  id: LandingPageId;
  slug: string;
  title: string;
  audience: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  metaDescription: string;
  cta: string;
  secondaryCta: string;
  trust: string[];
  painTitle: string;
  painPoints: string[];
  journeyTitle: string;
  journey: string[];
  blueprint: {
    label: string;
    title: string;
    body: string;
    artifacts: string[];
  };
  modulesTitle: string;
  modules: Array<{ title: string; body: string }>;
  integrations: string[];
  proof: string[];
  guardrails: string[];
  faq: Array<{ question: string; answer: string }>;
  finalCta: string;
  solutionId: SolutionId;
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
    category: "Intelligent AI Implementation in Company Processes",
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
        "We design, build and run AI implementation inside real company processes, connected to tools, people and operations.",
      explore: "Explore",
      company: "Company",
      policies: "Policies",
      legalLine:
        "Bunniemonki is a commercial brand operated by DÍNAMOXIGENADO - UNIPESSOAL LDA, NIPC 518435067, registered in Portugal.",
    },
    home: {
      eyebrow: "AI Operations & Business Automation",
      h1: "Intelligent AI implementation inside company processes.",
      body:
        "We design and operate AI inside real business operations: integrated with the tools already in use, governed by human approval where decisions matter and managed after launch.",
      problemHeading:
        "The expensive gap is rarely another missing tool. It lives between tools.",
      problemClose:
        "Handoffs, copied data, invisible owners, exceptions and AI demos that never reach daily operations are where the work slows down.",
      journeysHeading: "A primary solution for AI in the process, then journeys by outcome.",
      journeysBody:
        "Implementation starts with one real process: scan, blueprint, connect systems, build the AI-assisted workflow and keep it running.",
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
      solutionsTitle: "AI applied to real processes, not around them.",
      solutionsBody:
        "The main solution is intelligent AI implementation in company processes. Specific journeys then show where to start: revenue, service, finance or people operations.",
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
    category: "Implantação inteligente de IA nos processos da empresa",
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
        "Desenhamos, implementamos e operamos IA dentro dos processos reais da empresa, conectada a ferramentas, pessoas e operações.",
      explore: "Explorar",
      company: "Empresa",
      policies: "Políticas",
      legalLine:
        "Bunniemonki é uma marca comercial operada por DÍNAMOXIGENADO - UNIPESSOAL LDA, NIPC 518435067, registada em Portugal.",
    },
    home: {
      eyebrow: "AI Operations & Business Automation",
      h1: "Implantação inteligente de IA nos processos da empresa.",
      body:
        "Desenhamos e operamos IA dentro da operação real: integrada às ferramentas que já existem, com aprovação humana onde a decisão importa e gestão depois da entrada em produção.",
      problemHeading:
        "A lacuna cara raramente é a falta de mais uma ferramenta. Ela vive entre ferramentas.",
      problemClose:
        "Handoffs, dados copiados, donos invisíveis, exceções e provas de conceito de IA que não chegam à operação diária travam o trabalho.",
      journeysHeading: "Uma solução principal para IA no processo, depois jornadas por resultado.",
      journeysBody:
        "A implementação começa por um processo real: scan, blueprint, integração aos sistemas, workflow com IA assistida e operação contínua.",
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
      solutionsTitle: "IA aplicada aos processos reais, não à volta deles.",
      solutionsBody:
        "A solução principal é a implantação inteligente de IA nos processos da empresa. As jornadas específicas mostram onde começar: receita, serviço, finanças ou pessoas.",
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
      id: "ai-process-implementation",
      slug: "ai-process-implementation",
      title: "AI Process Implementation",
      promise:
        "AI implemented inside real company processes, connected to existing systems and governed by human approval.",
      friction:
        "AI pilots stay outside operations while handoffs, copied data and invisible exceptions keep slowing the company down.",
      outcome:
        "One critical process becomes mapped, integrated, AI-assisted, monitored and owned after launch.",
      teams: ["Leadership", "Operations", "IT", "Process owners"],
      systems: ["CRM", "WhatsApp/API channels", "Email", "ERP/accounting", "Documents", "Automation environment"],
      departmentIds: ["operations-it", "marketing-sales", "customer-success-service", "finance", "hr"],
      fit: [
        "A repeated process crosses three or more disconnected tools.",
        "There is an accountable owner for the process, budget and change decisions.",
        "AI should classify, draft, summarise or route work without taking sensitive decisions alone.",
      ],
      notFit: [
        "You only want a standalone chatbot or prompt demo.",
        "The process has no repeated volume, owner or willingness to change.",
        "The goal is autonomous fiscal, clinical, legal, financial or employment decisions.",
      ],
      modules: [
        "Automation Scan",
        "Solution Blueprint",
        "Existing-system integrations",
        "AI automations",
        "Managed automation",
      ],
      metrics: [
        "Manual touches",
        "Exception volume",
        "Approval delay",
        "Time to recovery",
        "Workflow adoption",
      ],
      stages: [
        {
          label: "Scan",
          owner: "Leadership and operations",
          input: "Operational friction and current tools",
          output: "Fit decision and first process candidate",
          gate: "Human confirms owner, urgency and risk",
          exception: "Pain is vague or no accountable owner",
        },
        {
          label: "Blueprint",
          owner: "Bunniemonki and process owner",
          input: "Process map, systems, data and risks",
          output: "Modular AI architecture and roadmap",
          gate: "Scope and human approvals signed off",
          exception: "Data source, permission or compliance gap",
        },
        {
          label: "Build",
          owner: "Implementation team",
          input: "Approved blueprint and access plan",
          output: "Integrated AI-assisted workflow",
          gate: "Human approval before sensitive actions",
          exception: "Integration failure or low-confidence AI output",
        },
        {
          label: "Run",
          owner: "Operations and Bunniemonki",
          input: "Live executions, logs and exceptions",
          output: "Monitored workflow and improvement backlog",
          gate: "Incident and change review",
          exception: "Credential, model or process drift",
        },
      ],
    },
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
    title: "Implantação inteligente de IA nos processos da empresa",
    promise:
      "IA implementada dentro dos processos reais da empresa, conectada aos sistemas existentes e governada por aprovação humana.",
    friction:
      "Pilotos de IA ficam fora da operação enquanto handoffs, dados copiados e exceções invisíveis continuam a travar a empresa.",
    outcome:
      "Um processo crítico fica mapeado, integrado, assistido por IA, monitorizado e com dono depois do lançamento.",
    teams: ["Liderança", "Operações", "IT", "Donos de processo"],
    systems: ["CRM", "WhatsApp/canais API", "Email", "ERP/contabilidade", "Documentos", "Ambiente de automação"],
    fit: [
      "Um processo repetido atravessa três ou mais ferramentas desconectadas.",
      "Existe dono responsável pelo processo, budget e decisões de mudança.",
      "A IA deve classificar, rascunhar, resumir ou encaminhar trabalho sem tomar decisões sensíveis sozinha.",
    ],
    notFit: [
      "Só quer um chatbot solto ou demonstração de prompts.",
      "O processo não tem volume repetido, dono ou vontade de mudança.",
      "O objetivo é automatizar decisões fiscais, clínicas, legais, financeiras ou laborais sem validação humana.",
    ],
    modules: [
      "Automation Scan",
      "Solution Blueprint",
      "Integrações aos sistemas existentes",
      "Automações com IA",
      "Automação gerida",
    ],
    metrics: [
      "Toques manuais",
      "Volume de exceções",
      "Atraso de aprovação",
      "Tempo de recuperação",
      "Adoção do workflow",
    ],
    stages: [
      {
        label: "Scan",
        owner: "Liderança e operações",
        input: "Fricção operacional e ferramentas atuais",
        output: "Decisão de fit e primeiro processo candidato",
        gate: "Humano confirma dono, urgência e risco",
        exception: "Dor vaga ou sem dono responsável",
      },
      {
        label: "Blueprint",
        owner: "Bunniemonki e dono do processo",
        input: "Mapa do processo, sistemas, dados e riscos",
        output: "Arquitetura modular de IA e roadmap",
        gate: "Escopo e aprovações humanas validados",
        exception: "Falha de fonte de dados, permissão ou compliance",
      },
      {
        label: "Build",
        owner: "Equipa de implementação",
        input: "Blueprint aprovado e plano de acessos",
        output: "Workflow integrado e assistido por IA",
        gate: "Aprovação humana antes de ações sensíveis",
        exception: "Falha de integração ou saída de IA com baixa confiança",
      },
      {
        label: "Run",
        owner: "Operações e Bunniemonki",
        input: "Execuções, logs e exceções em produção",
        output: "Workflow monitorizado e backlog de melhoria",
        gate: "Revisão de incidentes e mudanças",
        exception: "Desvio de credencial, modelo ou processo",
      },
    ],
  },
  {
    ...baseSolutions.en[1],
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
    ...baseSolutions.en[2],
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
    ...baseSolutions.en[3],
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
    ...baseSolutions.en[4],
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
      solutionIds: ["ai-process-implementation", "lead-to-revenue", "quote-to-cash"],
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
      solutionIds: ["ai-process-implementation", "customer-operations"],
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
      solutionIds: ["ai-process-implementation", "quote-to-cash", "hire-to-productivity"],
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
      solutionIds: ["ai-process-implementation", "hire-to-productivity"],
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
      solutionIds: [
        "ai-process-implementation",
        "lead-to-revenue",
        "customer-operations",
        "quote-to-cash",
        "hire-to-productivity",
      ],
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
      targetFlow: baseSolutions.en[4].stages,
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
    targetFlow: baseSolutions.pt[4].stages,
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

export const landingPages: Record<Locale, LandingPage[]> = {
  en: [
    {
      id: "accounting-tax-consulting",
      slug: "accounting-tax-consulting",
      title: "Accounting & Tax Consulting",
      audience: "Accounting firms, tax consultants and small finance teams",
      eyebrow: "AI-assisted operations for accounting",
      headline: "Stop chasing documents. Keep tax work moving.",
      subheadline:
        "Automate document requests, reminders and handoffs while tax judgement stays with qualified people.",
      metaDescription:
        "AI-assisted automation for accounting and tax consulting firms: document collection, reminders, triage, task handoffs and governed human approval.",
      cta: "Map accounting operations",
      secondaryCta: "View reference blueprint",
      trust: [
        "No autonomous tax decisions",
        "Designed around the tools you already use",
        "Reference blueprint, not a client case claim",
      ],
      painTitle: "Where accounting work breaks",
      painPoints: [
        "Client documents arrive late, incomplete or split across channels.",
        "Teams chase the same information through email, WhatsApp and spreadsheets.",
        "Deadlines, exceptions and billing inputs depend on manual memory.",
      ],
      journeyTitle: "From client request to review-ready work",
      journey: [
        "Client request",
        "Document checklist",
        "Completeness triage",
        "Task preparation",
        "Human review",
        "Delivery and follow-up",
      ],
      blueprint: {
        label: "Reference blueprint",
        title: "Document intake and deadline control",
        body:
          "A governed flow that collects client inputs, normalises requests, flags missing evidence, routes exceptions and prepares the work package before a qualified person approves the fiscal decision.",
        artifacts: [
          "Client checklist and reminder logic",
          "Exception queue for missing or contradictory information",
          "Task handoff to accounting software or internal workspace",
          "Audit trail for approvals, overrides and follow-up",
        ],
      },
      modulesTitle: "Automations to launch first",
      modules: [
        {
          title: "Document intake desk",
          body: "Turn scattered messages into structured client requests with ownership and status.",
        },
        {
          title: "Deadline radar",
          body: "Create reminders, escalation paths and review queues before work becomes urgent.",
        },
        {
          title: "Billing signal",
          body: "Surface completed work, missing inputs and billing triggers without manual reconciliation.",
        },
      ],
      integrations: ["Email", "WhatsApp API", "Client forms", "CRM", "Accounting workspace", "Task management"],
      proof: [
        "Reference process map before build",
        "Human approval gates for fiscal judgement",
        "Monitoring, retry logic and exception ownership",
      ],
      guardrails: [
        "Tax judgement and client advice stay with qualified humans.",
        "The system should not request credentials or confidential records through public forms.",
        "Data retention, processor agreements and access controls must match the production architecture.",
      ],
      faq: [
        {
          question: "Will this replace our accounting software?",
          answer:
            "No. The landing offer is about the operating layer around your existing tools: intake, reminders, routing, checks and visibility.",
        },
        {
          question: "Can AI decide how a tax case should be handled?",
          answer:
            "No. AI can draft, classify or summarise. Fiscal decisions, advice and filings require human review and approval.",
        },
        {
          question: "What do we need before a scan?",
          answer:
            "A short description of the workflow that creates the most chasing, rework or deadline pressure is enough to start.",
        },
      ],
      finalCta: "Map the accounting workflow that costs your team the most attention.",
      solutionId: "ai-process-implementation",
    },
    {
      id: "tourism-operations",
      slug: "tourism-operations",
      title: "Tourism Operations, Local Accommodation & Tours",
      audience: "Local accommodation operators, tour companies and boutique hotels",
      eyebrow: "AI-assisted guest operations",
      headline: "Fewer missed messages. Smoother guest operations.",
      subheadline:
        "Connect guest messages, booking signals and operations tasks so fewer requests disappear between channels.",
      metaDescription:
        "Automation for tourism operations, local accommodation, tours and boutique hotels: guest messages, check-in tasks, routing, follow-up and operational visibility.",
      cta: "Map guest operations",
      secondaryCta: "View reference blueprint",
      trust: [
        "Human approval for sensitive guest issues",
        "Works around booking and messaging channels",
        "Reference blueprint, not a client case claim",
      ],
      painTitle: "Where guest operations break",
      painPoints: [
        "Bookings, messages and task updates arrive from different platforms.",
        "Check-in, cleaning, transfers and tour capacity depend on manual coordination.",
        "Guest questions repeat, but answers still require copy-paste work.",
      ],
      journeyTitle: "From booking signal to post-stay follow-up",
      journey: [
        "Booking or inquiry",
        "Guest profile",
        "Pre-arrival checklist",
        "Operational handoff",
        "Human escalation",
        "Review and next offer",
      ],
      blueprint: {
        label: "Reference blueprint",
        title: "Guest message and task orchestration",
        body:
          "A controlled flow that classifies guest needs, prepares approved responses, creates operational tasks and keeps exceptions visible for the person responsible for the stay, tour or property.",
        artifacts: [
          "Guest message triage by intent and urgency",
          "Check-in, cleaning, transfer and tour task routing",
          "Approved response library with human review",
          "Post-stay follow-up and review request flow",
        ],
      },
      modulesTitle: "Automations to launch first",
      modules: [
        {
          title: "Guest inbox triage",
          body: "Classify messages, prepare replies and route anything sensitive to a human owner.",
        },
        {
          title: "Operations board",
          body: "Turn booking changes into visible tasks for cleaning, check-in, guides and transfers.",
        },
        {
          title: "Follow-up engine",
          body: "Send approved post-stay messages, review prompts and next-offer sequences.",
        },
      ],
      integrations: ["Booking platforms", "WhatsApp API", "Email", "Calendar", "Task boards", "CRM"],
      proof: [
        "Reference operating map before build",
        "Exception queue for guest-impacting cases",
        "Monitoring for silent automation failures",
      ],
      guardrails: [
        "Human approval is required for complaints, refunds, safety issues and non-standard guest decisions.",
        "Guest data should be minimised and retained only for defined operational purposes.",
        "Automation should support the guest experience, not hide operational responsibility.",
      ],
      faq: [
        {
          question: "Can this work if we use several booking channels?",
          answer:
            "Yes. The scan starts by mapping where signals enter today, then defines what should be connected, watched or left manual.",
        },
        {
          question: "Will guests know they are speaking with AI?",
          answer:
            "The safest approach is approved messaging, clear escalation and human ownership for sensitive or unusual cases.",
        },
        {
          question: "Is this only for hotels?",
          answer:
            "No. The same operating pattern fits local accommodation, tours, small hospitality teams and boutique guest operations.",
        },
      ],
      finalCta: "Map the guest operation before the next busy season exposes the gaps.",
      solutionId: "ai-process-implementation",
    },
    {
      id: "private-clinics",
      slug: "private-clinics",
      title: "Private Clinics, Aesthetics, Physiotherapy & Health-Beauty",
      audience: "Private clinics, aesthetics studios, physiotherapy practices and health-beauty teams",
      eyebrow: "AI-assisted clinic operations",
      headline: "More confirmed appointments. Less reception work.",
      subheadline:
        "Automate bookings, reminders and aftercare handoffs while clinical decisions stay with qualified professionals.",
      metaDescription:
        "Automation for private clinics, aesthetics, physiotherapy and health-beauty teams: appointment intake, reminders, front-desk tasks and governed follow-up.",
      cta: "Map clinic operations",
      secondaryCta: "View reference blueprint",
      trust: [
        "No autonomous diagnosis or treatment decisions",
        "Designed for consent and sensitive-data discipline",
        "Reference blueprint, not a client case claim",
      ],
      painTitle: "Where clinic operations break",
      painPoints: [
        "Reception repeats the same appointment, reminder and follow-up tasks every day.",
        "No-shows and late cancellations are handled after the schedule is already damaged.",
        "Patient questions arrive through channels that do not connect to the appointment workflow.",
      ],
      journeyTitle: "From first request to confirmed follow-up",
      journey: [
        "Inquiry or booking",
        "Intake and consent",
        "Appointment confirmation",
        "Reception task",
        "Human clinical gate",
        "Aftercare follow-up",
      ],
      blueprint: {
        label: "Reference blueprint",
        title: "Appointment intake and aftercare control",
        body:
          "A governed workflow that structures inquiries, confirms appointments, prepares front-desk tasks and routes clinical or sensitive issues to qualified humans before any advice is given.",
        artifacts: [
          "Appointment request and confirmation flow",
          "Reminder and no-show recovery sequence",
          "Aftercare communication with approved templates",
          "Exception queue for clinical or sensitive requests",
        ],
      },
      modulesTitle: "Automations to launch first",
      modules: [
        {
          title: "Reception command queue",
          body: "Convert messages and forms into visible booking, confirmation and follow-up tasks.",
        },
        {
          title: "No-show recovery",
          body: "Prepare reminder, reschedule and waitlist flows without pushing clinical judgement into automation.",
        },
        {
          title: "Aftercare assistant",
          body: "Send approved care instructions and route anything outside protocol to the right person.",
        },
      ],
      integrations: ["Booking system", "WhatsApp API", "Email", "Forms", "CRM", "Calendar"],
      proof: [
        "Reference process map before build",
        "Human gate for clinical or sensitive decisions",
        "Clear distinction between admin automation and clinical responsibility",
      ],
      guardrails: [
        "Clinical judgement, diagnosis and treatment advice require qualified human approval.",
        "Health-related data needs strict minimisation, access control and processor review.",
        "Marketing follow-up should respect consent, opt-outs and the clinic's approved language.",
      ],
      faq: [
        {
          question: "Can AI answer patient medical questions?",
          answer:
            "No. AI can structure intake or prepare approved admin messages. Clinical advice and treatment decisions stay with qualified humans.",
        },
        {
          question: "What is the quickest operational win?",
          answer:
            "Usually appointment confirmations, reminders, rescheduling and clear reception task ownership.",
        },
        {
          question: "Does this fit aesthetics and physiotherapy?",
          answer:
            "Yes, as long as the workflow separates admin automation from clinical judgement and sensitive-data handling.",
        },
      ],
      finalCta: "Map the clinic workflow your reception team repeats every day.",
      solutionId: "ai-process-implementation",
    },
    {
      id: "real-estate-rentals",
      slug: "real-estate-rentals",
      title: "Real Estate, Brokerage & Rental Management",
      audience: "Estate agencies, property managers and rental-management teams",
      eyebrow: "AI-assisted real estate operations",
      headline: "Respond before property leads go cold.",
      subheadline:
        "Capture, qualify and follow up property leads before they disappear across portals, CRM and WhatsApp.",
      metaDescription:
        "Automation for real estate, brokerage and rental management: lead response, qualification, visit scheduling, owner updates and operational follow-up.",
      cta: "Map real estate operations",
      secondaryCta: "View reference blueprint",
      trust: [
        "Human approval for commercial and legal decisions",
        "Designed around CRM and portal workflows",
        "Reference blueprint, not a client case claim",
      ],
      painTitle: "Where real estate operations break",
      painPoints: [
        "Portal leads arrive fast, but response and qualification depend on manual follow-up.",
        "Visit scheduling, owner updates and rental tasks live in separate places.",
        "Agents cannot see which leads need attention without searching across channels.",
      ],
      journeyTitle: "From property lead to visible next action",
      journey: [
        "Portal or referral lead",
        "Qualification",
        "CRM update",
        "Visit scheduling",
        "Human commercial gate",
        "Owner or tenant follow-up",
      ],
      blueprint: {
        label: "Reference blueprint",
        title: "Lead qualification and rental-management visibility",
        body:
          "A controlled flow that captures property inquiries, normalises contact data, proposes next actions, creates CRM records and keeps commercial, legal and property-management exceptions in a human-owned queue.",
        artifacts: [
          "Lead capture and duplicate detection",
          "Qualification questions and CRM routing",
          "Visit scheduling and owner update tasks",
          "Rental-management exception queue",
        ],
      },
      modulesTitle: "Automations to launch first",
      modules: [
        {
          title: "Lead response desk",
          body: "Capture portal, form and message leads into a structured queue with owner and next action.",
        },
        {
          title: "Visit scheduler",
          body: "Coordinate availability, confirmations and reminders with clear handoff to the assigned agent.",
        },
        {
          title: "Rental operations tracker",
          body: "Surface tenant, owner and maintenance follow-ups before they disappear into chat history.",
        },
      ],
      integrations: ["Property portals", "WhatsApp API", "CRM", "Calendar", "Email", "Task boards"],
      proof: [
        "Reference lead-to-follow-up map before build",
        "Human approval for negotiation and compliance decisions",
        "Visible owner for every lead, visit and rental exception",
      ],
      guardrails: [
        "Pricing, negotiation, legal and compliance decisions require human approval.",
        "Lead data and tenant information should be minimised and access-controlled.",
        "Automation should log source, consent context and follow-up actions for review.",
      ],
      faq: [
        {
          question: "Can this replace our CRM?",
          answer:
            "No. It should strengthen the CRM by improving capture, routing, reminders and task visibility.",
        },
        {
          question: "Can it qualify leads automatically?",
          answer:
            "It can collect and structure qualification signals. Commercial judgement and next-step approval stay with humans.",
        },
        {
          question: "Does this include rental management?",
          answer:
            "Yes. The scan can include tenant requests, owner updates, maintenance handoffs and recurring follow-up tasks.",
        },
      ],
      finalCta: "Map the real estate workflow where leads and rental tasks go quiet.",
      solutionId: "ai-process-implementation",
    },
  ],
  pt: [
    {
      id: "accounting-tax-consulting",
      slug: "contabilidade-consultoria-fiscal",
      title: "Contabilidade & Consultoria Fiscal",
      audience: "Gabinetes contabilísticos, consultores fiscais e pequenas equipas financeiras",
      eyebrow: "Operações com IA para contabilidade",
      headline: "Menos chase. Mais prazos e documentos sob controlo.",
      subheadline:
        "Automatize pedidos de documentos, lembretes e handoffs enquanto o julgamento fiscal continua humano.",
      metaDescription:
        "Automação gerida para contabilidade e consultoria fiscal: recolha documental, lembretes, triagem, handoffs e validação humana governada.",
      cta: "Mapear operação contabilística",
      secondaryCta: "Ver blueprint de referência",
      trust: [
        "Sem decisões fiscais automáticas",
        "Desenhado em torno das ferramentas que já usa",
        "Blueprint de referência, não um caso de cliente",
      ],
      painTitle: "Onde o trabalho fiscal quebra",
      painPoints: [
        "Documentos de clientes chegam tarde, incompletos ou divididos por canais.",
        "A equipa persegue a mesma informação por email, WhatsApp e folhas de cálculo.",
        "Prazos, exceções e inputs de faturação dependem de memória manual.",
      ],
      journeyTitle: "Do pedido do cliente ao trabalho pronto para revisão",
      journey: [
        "Pedido do cliente",
        "Checklist documental",
        "Triagem de completude",
        "Preparação da tarefa",
        "Revisão humana",
        "Entrega e follow-up",
      ],
      blueprint: {
        label: "Blueprint de referência",
        title: "Intake documental e controlo de prazos",
        body:
          "Um fluxo governado que recolhe inputs de clientes, normaliza pedidos, sinaliza evidência em falta, encaminha exceções e prepara o dossier antes de uma pessoa qualificada aprovar a decisão fiscal.",
        artifacts: [
          "Checklist de cliente e lógica de lembretes",
          "Fila de exceções para informação em falta ou contraditória",
          "Handoff para software contabilístico ou workspace interno",
          "Auditoria de aprovações, overrides e follow-up",
        ],
      },
      modulesTitle: "Automações para lançar primeiro",
      modules: [
        {
          title: "Mesa de intake documental",
          body: "Transforma mensagens dispersas em pedidos estruturados com dono e estado.",
        },
        {
          title: "Radar de prazos",
          body: "Cria lembretes, escalonamentos e filas de revisão antes de o trabalho ficar urgente.",
        },
        {
          title: "Sinal de faturação",
          body: "Mostra trabalho concluído, inputs em falta e gatilhos de cobrança sem reconciliação manual.",
        },
      ],
      integrations: ["Email", "WhatsApp API", "Formulários", "CRM", "Workspace contabilístico", "Gestão de tarefas"],
      proof: [
        "Mapa de processo de referência antes da implementação",
        "Pontos de validação humana para julgamento fiscal",
        "Monitorização, retries e dono para exceções",
      ],
      guardrails: [
        "Julgamento fiscal e aconselhamento ao cliente continuam com validação humana qualificada.",
        "O sistema não deve pedir credenciais ou registos confidenciais em formulários públicos.",
        "Retenção de dados, subprocessadores e acessos têm de refletir a arquitetura de produção.",
      ],
      faq: [
        {
          question: "Isto substitui o software de contabilidade?",
          answer:
            "Não. A oferta atua na camada operacional à volta das ferramentas existentes: intake, lembretes, encaminhamento, checks e visibilidade.",
        },
        {
          question: "A IA pode decidir como tratar um caso fiscal?",
          answer:
            "Não. A IA pode rascunhar, classificar ou resumir. Decisões fiscais, aconselhamento e submissões exigem revisão e aprovação humana.",
        },
        {
          question: "O que precisamos antes do scan?",
          answer:
            "Basta uma descrição curta do fluxo que hoje cria mais chase, retrabalho ou pressão de prazos.",
        },
      ],
      finalCta: "Mapeie o workflow contabilístico que mais consome atenção da equipa.",
      solutionId: "ai-process-implementation",
    },
    {
      id: "tourism-operations",
      slug: "turismo-operacional",
      title: "Turismo Operacional, Alojamento Local & Tours",
      audience: "Operadores de alojamento local, tours e boutique hotels",
      eyebrow: "Operações de hóspedes com IA",
      headline: "Menos mensagens perdidas. Mais hóspedes acompanhados.",
      subheadline:
        "Ligue mensagens, reservas e tarefas para que menos pedidos desapareçam entre canais.",
      metaDescription:
        "Automação para turismo operacional, alojamento local, tours e boutique hotels: mensagens de hóspedes, check-in, routing, follow-up e visibilidade operacional.",
      cta: "Mapear a operação de hóspedes",
      secondaryCta: "Ver blueprint de referência",
      trust: [
        "Validação humana para temas sensíveis de hóspedes",
        "Funciona à volta de canais de reserva e mensagens",
        "Blueprint de referência, não um caso de cliente",
      ],
      painTitle: "Onde a operação de hóspedes quebra",
      painPoints: [
        "Reservas, mensagens e updates de tarefas chegam de plataformas diferentes.",
        "Check-in, limpeza, transfers e capacidade de tours dependem de coordenação manual.",
        "Perguntas de hóspedes repetem-se, mas as respostas continuam em copy-paste.",
      ],
      journeyTitle: "Do sinal de reserva ao follow-up pós-estadia",
      journey: [
        "Reserva ou pedido",
        "Perfil do hóspede",
        "Checklist pré-chegada",
        "Handoff operacional",
        "Escalonamento humano",
        "Review e próxima oferta",
      ],
      blueprint: {
        label: "Blueprint de referência",
        title: "Orquestração de mensagens e tarefas de hóspedes",
        body:
          "Um fluxo controlado que classifica necessidades de hóspedes, prepara respostas aprovadas, cria tarefas operacionais e mantém exceções visíveis para a pessoa responsável pela estadia, tour ou propriedade.",
        artifacts: [
          "Triagem de mensagens por intenção e urgência",
          "Routing de check-in, limpeza, transfers e tours",
          "Biblioteca de respostas aprovadas com revisão humana",
          "Follow-up pós-estadia e pedido de review",
        ],
      },
      modulesTitle: "Automações para lançar primeiro",
      modules: [
        {
          title: "Triagem da inbox de hóspedes",
          body: "Classifica mensagens, prepara respostas e encaminha temas sensíveis para um dono humano.",
        },
        {
          title: "Quadro operacional",
          body: "Transforma alterações de reservas em tarefas visíveis para limpeza, check-in, guias e transfers.",
        },
        {
          title: "Motor de follow-up",
          body: "Envia mensagens aprovadas pós-estadia, pedidos de review e sequências de próxima oferta.",
        },
      ],
      integrations: ["Plataformas de reserva", "WhatsApp API", "Email", "Calendário", "Task boards", "CRM"],
      proof: [
        "Mapa operacional de referência antes da implementação",
        "Fila de exceções para casos com impacto no hóspede",
        "Monitorização para falhas silenciosas de automação",
      ],
      guardrails: [
        "Reclamações, reembolsos, segurança e decisões fora do padrão exigem validação humana.",
        "Dados de hóspedes devem ser minimizados e retidos apenas para fins operacionais definidos.",
        "A automação deve suportar a experiência do hóspede, não esconder responsabilidade operacional.",
      ],
      faq: [
        {
          question: "Funciona se usamos vários canais de reserva?",
          answer:
            "Sim. O scan começa por mapear onde os sinais entram hoje e depois define o que deve ser conectado, monitorizado ou mantido manual.",
        },
        {
          question: "Os hóspedes vão falar com IA?",
          answer:
            "A abordagem mais segura é usar mensagens aprovadas, escalonamento claro e dono humano para casos sensíveis ou fora do padrão.",
        },
        {
          question: "Isto é só para hotéis?",
          answer:
            "Não. O mesmo padrão serve alojamento local, tours, pequenas equipas de hospitalidade e boutique guest operations.",
        },
      ],
      finalCta: "Mapeie a operação de hóspedes antes de a próxima época alta expor as falhas.",
      solutionId: "ai-process-implementation",
    },
    {
      id: "private-clinics",
      slug: "clinicas-privadas",
      title: "Clínicas Privadas, Estética, Fisioterapia & Saúde-Beleza",
      audience: "Clínicas privadas, estética, fisioterapia e equipas de saúde-beleza",
      eyebrow: "Operações clínicas com IA assistida",
      headline: "Mais consultas confirmadas. Menos carga na receção.",
      subheadline:
        "Automatize marcações, lembretes e aftercare enquanto decisões clínicas continuam humanas.",
      metaDescription:
        "Automação para clínicas privadas, estética, fisioterapia e saúde-beleza: marcações, lembretes, tarefas de receção e follow-up governado.",
      cta: "Mapear operação clínica",
      secondaryCta: "Ver blueprint de referência",
      trust: [
        "Sem diagnóstico ou tratamento automático",
        "Desenhado para consentimento e disciplina de dados sensíveis",
        "Blueprint de referência, não um caso de cliente",
      ],
      painTitle: "Onde a operação clínica quebra",
      painPoints: [
        "A receção repete as mesmas marcações, lembretes e follow-ups todos os dias.",
        "No-shows e cancelamentos tardios são tratados quando a agenda já foi afetada.",
        "Perguntas de pacientes chegam por canais que não ligam ao workflow de marcação.",
      ],
      journeyTitle: "Do primeiro pedido ao follow-up confirmado",
      journey: [
        "Pedido ou marcação",
        "Intake e consentimento",
        "Confirmação",
        "Tarefa de receção",
        "Gate clínico humano",
        "Follow-up aftercare",
      ],
      blueprint: {
        label: "Blueprint de referência",
        title: "Intake de marcações e controlo de aftercare",
        body:
          "Um workflow governado que estrutura pedidos, confirma marcações, prepara tarefas de receção e encaminha temas clínicos ou sensíveis para humanos qualificados antes de qualquer aconselhamento.",
        artifacts: [
          "Fluxo de pedido e confirmação de marcação",
          "Sequência de lembrete e recuperação de no-show",
          "Comunicação de aftercare com templates aprovados",
          "Fila de exceções para pedidos clínicos ou sensíveis",
        ],
      },
      modulesTitle: "Automações para lançar primeiro",
      modules: [
        {
          title: "Fila de comando da receção",
          body: "Converte mensagens e formulários em tarefas visíveis de marcação, confirmação e follow-up.",
        },
        {
          title: "Recuperação de no-shows",
          body: "Prepara lembretes, remarcações e lista de espera sem empurrar julgamento clínico para automação.",
        },
        {
          title: "Assistente de aftercare",
          body: "Envia instruções aprovadas e encaminha tudo o que sai do protocolo para a pessoa certa.",
        },
      ],
      integrations: ["Sistema de marcações", "WhatsApp API", "Email", "Formulários", "CRM", "Calendário"],
      proof: [
        "Mapa de processo de referência antes da implementação",
        "Gate humano para decisões clínicas ou sensíveis",
        "Separação clara entre automação administrativa e responsabilidade clínica",
      ],
      guardrails: [
        "Julgamento clínico, diagnóstico e aconselhamento de tratamento exigem validação humana qualificada.",
        "Dados de saúde exigem minimização, controlo de acessos e revisão de subprocessadores.",
        "Follow-up de marketing deve respeitar consentimento, opt-outs e linguagem aprovada pela clínica.",
      ],
      faq: [
        {
          question: "A IA pode responder a perguntas médicas de pacientes?",
          answer:
            "Não. A IA pode estruturar intake ou preparar mensagens administrativas aprovadas. Aconselhamento clínico e tratamento ficam com humanos qualificados.",
        },
        {
          question: "Qual é o ganho operacional mais rápido?",
          answer:
            "Normalmente confirmações, lembretes, remarcações e propriedade clara das tarefas de receção.",
        },
        {
          question: "Serve estética e fisioterapia?",
          answer:
            "Sim, desde que o workflow separe automação administrativa de julgamento clínico e tratamento de dados sensíveis.",
        },
      ],
      finalCta: "Mapeie o workflow clínico que a receção repete todos os dias.",
      solutionId: "ai-process-implementation",
    },
    {
      id: "real-estate-rentals",
      slug: "imobiliario-arrendamento",
      title: "Imobiliário, Mediação & Gestão de Arrendamento",
      audience: "Mediadoras, consultores imobiliários e equipas de gestão de arrendamento",
      eyebrow: "Operações imobiliárias com IA assistida",
      headline: "Leads respondidos antes de arrefecerem.",
      subheadline:
        "Capture, qualifique e acompanhe leads antes que desapareçam entre portais, CRM e WhatsApp.",
      metaDescription:
        "Automação para imobiliário, mediação e gestão de arrendamento: resposta a leads, qualificação, visitas, updates a proprietários e follow-up operacional.",
      cta: "Mapear operação imobiliária",
      secondaryCta: "Ver blueprint de referência",
      trust: [
        "Validação humana para decisões comerciais e legais",
        "Desenhado em torno de CRM e portais",
        "Blueprint de referência, não um caso de cliente",
      ],
      painTitle: "Onde a operação imobiliária quebra",
      painPoints: [
        "Leads de portais chegam rápido, mas resposta e qualificação dependem de follow-up manual.",
        "Agendamento de visitas, updates a proprietários e tarefas de arrendamento vivem em lugares diferentes.",
        "Consultores não veem quais leads exigem atenção sem procurar em vários canais.",
      ],
      journeyTitle: "Do lead imobiliário à próxima ação visível",
      journey: [
        "Lead de portal ou referência",
        "Qualificação",
        "Atualização de CRM",
        "Agendamento de visita",
        "Gate comercial humano",
        "Follow-up proprietário ou inquilino",
      ],
      blueprint: {
        label: "Blueprint de referência",
        title: "Qualificação de leads e visibilidade no arrendamento",
        body:
          "Um fluxo controlado que captura pedidos sobre imóveis, normaliza contactos, propõe próximas ações, cria registos no CRM e mantém exceções comerciais, legais e de gestão em fila com dono humano.",
        artifacts: [
          "Captura de lead e deteção de duplicados",
          "Perguntas de qualificação e routing para CRM",
          "Agendamento de visitas e tarefas de update a proprietários",
          "Fila de exceções de gestão de arrendamento",
        ],
      },
      modulesTitle: "Automações para lançar primeiro",
      modules: [
        {
          title: "Mesa de resposta a leads",
          body: "Captura leads de portais, formulários e mensagens numa fila estruturada com dono e próxima ação.",
        },
        {
          title: "Agendador de visitas",
          body: "Coordena disponibilidade, confirmações e lembretes com handoff claro para o consultor atribuído.",
        },
        {
          title: "Tracker de arrendamento",
          body: "Mostra follow-ups de inquilinos, proprietários e manutenção antes de desaparecerem no histórico de chat.",
        },
      ],
      integrations: ["Portais imobiliários", "WhatsApp API", "CRM", "Calendário", "Email", "Task boards"],
      proof: [
        "Mapa de referência lead-to-follow-up antes da implementação",
        "Validação humana para negociação e decisões de compliance",
        "Dono visível para cada lead, visita e exceção de arrendamento",
      ],
      guardrails: [
        "Preço, negociação, decisões legais e compliance exigem validação humana.",
        "Dados de leads, proprietários e inquilinos devem ser minimizados e controlados por acessos.",
        "A automação deve registar origem, contexto de consentimento e ações de follow-up para revisão.",
      ],
      faq: [
        {
          question: "Isto substitui o CRM imobiliário?",
          answer:
            "Não. Deve reforçar o CRM com melhor captura, routing, lembretes e visibilidade de tarefas.",
        },
        {
          question: "Pode qualificar leads automaticamente?",
          answer:
            "Pode recolher e estruturar sinais de qualificação. Julgamento comercial e aprovação da próxima ação ficam com humanos.",
        },
        {
          question: "Inclui gestão de arrendamento?",
          answer:
            "Sim. O scan pode incluir pedidos de inquilinos, updates a proprietários, handoffs de manutenção e follow-ups recorrentes.",
        },
      ],
      finalCta: "Mapeie o workflow imobiliário onde leads e tarefas de arrendamento ficam em silêncio.",
      solutionId: "ai-process-implementation",
    },
  ],
};

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

export function getLandingPage(locale: Locale, slug: string) {
  return landingPages[locale].find((page) => page.slug === slug);
}

export function getLandingPageById(locale: Locale, id: LandingPageId) {
  return landingPages[locale].find((page) => page.id === id);
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
