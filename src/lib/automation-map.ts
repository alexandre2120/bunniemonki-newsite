import type { DepartmentId, SolutionId } from "./content";
import type { Locale } from "./i18n";

export type AutomationNicheId = "accounting" | "tourism" | "clinics" | "real-estate";

export type AutomationMapStage = "scan" | "blueprint" | "build" | "run";

export type AutomationSystemCategory =
  | "crm"
  | "whatsapp-api"
  | "email"
  | "calendar"
  | "documents"
  | "accounting-erp"
  | "payments"
  | "pms-booking"
  | "helpdesk"
  | "analytics"
  | "identity-access"
  | "hris"
  | "inventory"
  | "orchestration"
  | "ai-assistant";

export type AutomationMapItem = {
  id: string;
  nicheId: AutomationNicheId;
  title: Record<Locale, string>;
  outcome: Record<Locale, string>;
  description: Record<Locale, string>;
  journeyIds: SolutionId[];
  departmentIds: DepartmentId[];
  systems: AutomationSystemCategory[];
  trigger: Record<Locale, string>;
  typicalDelivery: Record<Locale, string>;
  stage: AutomationMapStage;
  priority: "primary" | "secondary" | "experimental";
};

export type AutomationNiche = {
  id: AutomationNicheId;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export type AutomationJourneyMeta = {
  id: SolutionId;
  title: Record<Locale, string>;
  promise: Record<Locale, string>;
  color: string;
  tint: string;
  textOnColor: string;
  role: Record<Locale, string>;
};

export type AutomationSystemMeta = {
  id: AutomationSystemCategory;
  label: Record<Locale, string>;
};

const journeyOrder: SolutionId[] = [
  "lead-to-revenue",
  "customer-operations",
  "quote-to-cash",
  "hire-to-productivity",
];

const priorityOrder: Record<AutomationMapItem["priority"], number> = {
  primary: 0,
  secondary: 1,
  experimental: 2,
};

const stageOrder: AutomationMapStage[] = ["scan", "blueprint", "build", "run"];

function localized(pt: string, en: string): Record<Locale, string> {
  return { pt, en };
}

function item(input: AutomationMapItem): AutomationMapItem {
  return input;
}

export const automationMapCopy = {
  pt: {
    eyebrow: "Mapa vivo de automações",
    title: "Escolha um nicho. Veja que jornadas acendem a operação.",
    body:
      "Selecione apenas o nicho. O mapa aponta o caminho inicial, mostra os fluxos mais prováveis e lista as integrações que normalmente entram no desenho.",
    primaryCta: "Mapear esta jornada",
    secondaryCta: "Ver todas as soluções",
    exploreSolutions: "Explorar soluções",
    disclaimer:
      "Os fluxos são arquiteturas de referência. A solução final depende do diagnóstico, ferramentas existentes, dados, equipa e restrições do negócio.",
    textualMap:
      "Mapa textual: o nicho selecionado mostra uma jornada recomendada, fluxos principais, integrações e departamentos relacionados.",
    activeAutomations: "Automações destacadas",
    relatedAutomations: "Relacionadas a outras jornadas",
    activeSystems: "Integrações acesas",
    activeDepartments: "Departamentos envolvidos",
    whereItAppears: "Onde normalmente aparece",
    orchestrationLayer: "Camada de orquestração gerida",
    maturity: "Maturidade",
    trigger: "Gatilho típico",
    delivery: "Entrega típica",
    systems: "Sistemas",
    automationsInNiche: "automações neste nicho",
    clinicSafety:
      "Em clínicas, o escopo público deve focar fluxos administrativos, atendimento, marcação e pagamentos. Decisões clínicas e dados sensíveis exigem desenho específico, permissões claras e validação legal.",
  },
  en: {
    eyebrow: "Live automation map",
    title: "Choose a niche. See which journeys light up the operation.",
    body:
      "Select only the niche. The map points to the starting path, shows the likely flows and lists the integrations that usually enter the design.",
    primaryCta: "Map this journey",
    secondaryCta: "View all solutions",
    exploreSolutions: "Explore solutions",
    disclaimer:
      "These flows are reference architectures. The final solution depends on diagnosis, existing tools, data, teams and business constraints.",
    textualMap:
      "Textual map: the selected niche shows a recommended journey, main flows, integrations and related departments.",
    activeAutomations: "Highlighted automations",
    relatedAutomations: "Related to other journeys",
    activeSystems: "Active integrations",
    activeDepartments: "Departments involved",
    whereItAppears: "Where it usually appears",
    orchestrationLayer: "Managed orchestration layer",
    maturity: "Maturity",
    trigger: "Typical trigger",
    delivery: "Typical delivery",
    systems: "Systems",
    automationsInNiche: "automations in this niche",
    clinicSafety:
      "For clinics, public scope should focus on admin, service, scheduling and payment workflows. Clinical decisions and sensitive data require specific design, clear permissions and legal validation.",
  },
} satisfies Record<Locale, Record<string, string>>;

export const automationNiches: AutomationNiche[] = [
  {
    id: "accounting",
    title: localized("Contabilidade", "Accounting"),
    description: localized(
      "Escritórios de contabilidade e consultoria fiscal com processos recorrentes, documentos mensais e muitos pedidos de clientes.",
      "Accounting and tax advisory firms with recurring processes, monthly documents and many client requests.",
    ),
  },
  {
    id: "tourism",
    title: localized("Turismo operacional", "Tourism operations"),
    description: localized(
      "Alojamento local, boutique hotels, tours, transfers e operadores com reservas, hóspedes, equipas e fornecedores.",
      "Short-term rentals, boutique hotels, tours, transfers and operators managing bookings, guests, teams and suppliers.",
    ),
  },
  {
    id: "clinics",
    title: localized("Clínicas privadas", "Private clinics"),
    description: localized(
      "Clínicas dentárias, estética, fisioterapia e saúde/beleza com foco em fluxos administrativos e atendimento.",
      "Dental, aesthetics, physiotherapy and health/beauty clinics focused on admin and service workflows.",
    ),
  },
  {
    id: "real-estate",
    title: localized("Imobiliário", "Real estate"),
    description: localized(
      "Mediação, gestão de imóveis e arrendamento com leads, visitas, documentos, propostas e proprietários.",
      "Brokerage, property management and rentals with leads, visits, documents, offers and owners.",
    ),
  },
];

export const automationJourneys: AutomationJourneyMeta[] = [
  {
    id: "lead-to-revenue",
    title: localized("Lead-to-Revenue", "Lead-to-Revenue"),
    promise: localized(
      "Transforma interesse disperso em procura qualificada, encaminhada e acompanhada até uma próxima ação comercial clara.",
      "Turns scattered demand into qualified, routed and followed-up opportunities with clear next actions.",
    ),
    color: "#FFC50D",
    tint: "#FFF4BF",
    textOnColor: "#0A0A0A",
    role: localized(
      "Receita, captação, qualificação e handoff comercial.",
      "Revenue, capture, qualification and commercial handoff.",
    ),
  },
  {
    id: "customer-operations",
    title: localized("Customer Operations", "Customer Operations"),
    promise: localized(
      "Coordena pedidos, tarefas, estados e exceções para que o serviço avance com dono, visibilidade e follow-up.",
      "Coordinates requests, tasks, statuses and exceptions so service moves with ownership, visibility and follow-up.",
    ),
    color: "#2F6F4E",
    tint: "#DCECDF",
    textOnColor: "#FFFFFF",
    role: localized(
      "Atendimento, execução, visibilidade, SLA e serviço.",
      "Service, execution, visibility, SLA and operations.",
    ),
  },
  {
    id: "quote-to-cash",
    title: localized("Quote-to-Cash", "Quote-to-Cash"),
    promise: localized(
      "Liga proposta, aprovação, faturação, pagamento e reconciliação para reduzir trabalho manual e perda de contexto financeiro.",
      "Connects proposal, approval, invoicing, payment and reconciliation to reduce manual work and financial context loss.",
    ),
    color: "#B85C38",
    tint: "#F3DED2",
    textOnColor: "#FFFFFF",
    role: localized(
      "Propostas, aprovações, faturação e cobrança.",
      "Proposals, approvals, invoicing and collection.",
    ),
  },
  {
    id: "hire-to-productivity",
    title: localized("Hire-to-Productivity", "Hire-to-Productivity"),
    promise: localized(
      "Organiza pessoas, acessos, documentos, equipamentos e formação para que novos colaboradores cheguem mais rápido à produtividade.",
      "Organizes people, access, documents, equipment and training so new employees reach productivity faster.",
    ),
    color: "#44546A",
    tint: "#DEE5EE",
    textOnColor: "#FFFFFF",
    role: localized(
      "Pessoas, onboarding, acessos e produtividade.",
      "People, onboarding, access and productivity.",
    ),
  },
];

export const automationSystems: AutomationSystemMeta[] = [
  { id: "crm", label: localized("CRM", "CRM") },
  { id: "whatsapp-api", label: localized("WhatsApp API oficial", "Official WhatsApp API") },
  { id: "email", label: localized("Email", "Email") },
  { id: "calendar", label: localized("Calendário", "Calendar") },
  { id: "documents", label: localized("Documentos", "Documents") },
  { id: "accounting-erp", label: localized("ERP / Contabilidade", "ERP / Accounting") },
  { id: "payments", label: localized("Pagamentos", "Payments") },
  { id: "pms-booking", label: localized("Reservas / PMS", "Booking / PMS") },
  { id: "helpdesk", label: localized("Helpdesk / tickets", "Helpdesk / tickets") },
  { id: "analytics", label: localized("Analytics / reporting", "Analytics / reporting") },
  { id: "identity-access", label: localized("Acessos / identidade", "Identity / access") },
  { id: "hris", label: localized("HRIS / RH", "HRIS / HR") },
  { id: "inventory", label: localized("Stock / inventário", "Stock / inventory") },
  { id: "orchestration", label: localized("Orquestração gerida", "Managed orchestration") },
  { id: "ai-assistant", label: localized("Assistente IA", "AI assistant") },
];

export const stageLabels: Record<AutomationMapStage, Record<Locale, string>> = {
  scan: localized("Scan", "Scan"),
  blueprint: localized("Blueprint", "Blueprint"),
  build: localized("Build", "Build"),
  run: localized("Run", "Run"),
};

export const automationMapItems: AutomationMapItem[] = [
  item({
    id: "accounting-client-onboarding",
    nicheId: "accounting",
    title: localized("Onboarding de novo cliente contábil", "New accounting client onboarding"),
    outcome: localized("Checklist, documentos e canais ficam alinhados antes do primeiro ciclo.", "Checklist, documents and channels are aligned before the first cycle."),
    description: localized("Estrutura a entrada do cliente, dados fiscais, documentos base e regras de comunicação.", "Structures client intake, fiscal data, base documents and communication rules."),
    journeyIds: ["lead-to-revenue", "customer-operations"],
    departmentIds: ["marketing-sales", "customer-success-service", "operations-it"],
    systems: ["crm", "documents", "email", "whatsapp-api", "orchestration"],
    trigger: localized("Contrato aceite ou cliente marcado como ganho.", "Contract accepted or client marked as won."),
    typicalDelivery: localized("Blueprint de onboarding, automações de pedido documental e fila de exceções.", "Onboarding blueprint, document request automations and exception queue."),
    stage: "blueprint",
    priority: "primary",
  }),
  item({
    id: "accounting-monthly-document-collection",
    nicheId: "accounting",
    title: localized("Recolha mensal automática de documentos", "Automated monthly document collection"),
    outcome: localized("Pedidos recorrentes deixam de depender de lembretes manuais.", "Recurring requests stop depending on manual reminders."),
    description: localized("Coordena pedidos mensais por cliente, canal e prazo, mantendo pendências visíveis.", "Coordinates monthly requests by client, channel and deadline, keeping pending work visible."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["whatsapp-api", "email", "documents", "orchestration"],
    trigger: localized("Início do ciclo mensal de fecho.", "Start of the monthly close cycle."),
    typicalDelivery: localized("Fluxo de recolha, regras de follow-up e painel de pendências.", "Collection flow, follow-up rules and pending-items dashboard."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "accounting-monthly-close-dashboard",
    nicheId: "accounting",
    title: localized("Fecho mensal com painel de pendências", "Monthly close with pending-items dashboard"),
    outcome: localized("O escritório vê documentos, exceções e fecho por cliente num só lugar.", "The firm sees documents, exceptions and close status by client in one place."),
    description: localized("Liga documentos, ERP e analytics para tornar o fecho mensal rastreável.", "Connects documents, ERP and analytics to make monthly close traceable."),
    journeyIds: ["customer-operations", "quote-to-cash"],
    departmentIds: ["customer-success-service", "finance", "operations-it"],
    systems: ["documents", "accounting-erp", "analytics", "orchestration"],
    trigger: localized("Janela de fecho aberta ou documento recebido.", "Close window opened or document received."),
    typicalDelivery: localized("Modelo de estados, alertas e reporting operacional.", "Status model, alerts and operational reporting."),
    stage: "run",
    priority: "primary",
  }),
  item({
    id: "accounting-tax-deadline-alerts",
    nicheId: "accounting",
    title: localized("Automação de prazos fiscais", "Tax deadline automation"),
    outcome: localized("Prazos críticos ganham dono, lembrete e escalonamento.", "Critical deadlines gain owner, reminder and escalation."),
    description: localized("Organiza calendário fiscal, comunicação e exceções antes do prazo vencer.", "Organizes tax calendar, communication and exceptions before deadlines expire."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["calendar", "email", "whatsapp-api", "orchestration"],
    trigger: localized("Prazo fiscal publicado ou data limite aproximada.", "Tax deadline published or due date approaching."),
    typicalDelivery: localized("Calendário operacional, mensagens controladas e regras de escalonamento.", "Operational calendar, controlled messages and escalation rules."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "accounting-whatsapp-service",
    nicheId: "accounting",
    title: localized("Atendimento contábil via WhatsApp oficial", "Accounting service via official WhatsApp"),
    outcome: localized("Pedidos deixam de ficar dispersos em conversas sem contexto.", "Requests stop being scattered in conversations without context."),
    description: localized("Conecta WhatsApp, helpdesk e CRM para organizar pedidos recorrentes e respostas permitidas.", "Connects WhatsApp, helpdesk and CRM to organize recurring requests and approved responses."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["whatsapp-api", "helpdesk", "crm", "ai-assistant"],
    trigger: localized("Cliente envia pedido por WhatsApp.", "Client sends a WhatsApp request."),
    typicalDelivery: localized("Intake, categorização, respostas assistidas e handoff humano.", "Intake, categorization, assisted replies and human handoff."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "accounting-monthly-client-report",
    nicheId: "accounting",
    title: localized("Relatórios mensais automáticos para clientes", "Automated monthly client reports"),
    outcome: localized("Clientes recebem resumo operacional sem montagem manual repetida.", "Clients receive operational summaries without repeated manual assembly."),
    description: localized("Compõe dados de ERP, documentos e indicadores num relatório controlado.", "Composes ERP, document and metric data into a controlled report."),
    journeyIds: ["quote-to-cash", "customer-operations"],
    departmentIds: ["finance", "customer-success-service", "operations-it"],
    systems: ["accounting-erp", "documents", "email", "analytics"],
    trigger: localized("Fecho mensal concluído.", "Monthly close completed."),
    typicalDelivery: localized("Template de relatório, validação humana e envio programado.", "Report template, human validation and scheduled delivery."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "accounting-new-client-pipeline",
    nicheId: "accounting",
    title: localized("Pipeline de novos clientes do escritório", "New client pipeline for the firm"),
    outcome: localized("Pedidos comerciais entram no CRM com próxima ação clara.", "Commercial requests enter the CRM with a clear next action."),
    description: localized("Estrutura formulários, qualificação inicial e tarefas comerciais.", "Structures forms, initial qualification and commercial tasks."),
    journeyIds: ["lead-to-revenue"],
    departmentIds: ["marketing-sales", "operations-it"],
    systems: ["crm", "email", "analytics"],
    trigger: localized("Lead recebido por formulário, email ou referência.", "Lead received by form, email or referral."),
    typicalDelivery: localized("Modelo de pipeline, intake e alertas de follow-up.", "Pipeline model, intake and follow-up alerts."),
    stage: "scan",
    priority: "secondary",
  }),
  item({
    id: "accounting-retainer-billing",
    nicheId: "accounting",
    title: localized("Cobrança e renovação de avenças", "Retainer billing and renewal"),
    outcome: localized("Cobranças recorrentes ficam visíveis antes de falharem.", "Recurring charges become visible before they fail."),
    description: localized("Liga pagamentos, ERP e comunicação para controlar cobranças e renovações.", "Connects payments, ERP and communication to control billing and renewals."),
    journeyIds: ["quote-to-cash"],
    departmentIds: ["finance", "operations-it"],
    systems: ["payments", "accounting-erp", "email", "orchestration"],
    trigger: localized("Renovação ou ciclo de cobrança aproximado.", "Renewal or billing cycle approaching."),
    typicalDelivery: localized("Regras de cobrança, lembretes e reconciliação de estado.", "Billing rules, reminders and status reconciliation."),
    stage: "build",
    priority: "secondary",
  }),
  item({
    id: "accounting-document-governance",
    nicheId: "accounting",
    title: localized("Gestão de documentos recorrentes por cliente", "Recurring document governance by client"),
    outcome: localized("Cada cliente tem matriz de documentos, estados e donos.", "Each client has a document matrix, statuses and owners."),
    description: localized("Cria uma camada de controlo sobre documentos recorrentes e exceções.", "Creates a control layer over recurring documents and exceptions."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["documents", "crm", "orchestration"],
    trigger: localized("Documento pedido, recebido, recusado ou em falta.", "Document requested, received, rejected or missing."),
    typicalDelivery: localized("Taxonomia documental, estados e rotinas de revisão.", "Document taxonomy, statuses and review routines."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "accounting-operational-audit",
    nicheId: "accounting",
    title: localized("Auditoria operacional do escritório contábil", "Operational audit for the accounting firm"),
    outcome: localized("A equipa vê onde o trabalho recorre, atrasa ou perde dono.", "The team sees where work repeats, slows or loses ownership."),
    description: localized("Mapeia canais, documentos, prazos, sistemas e exceções antes de automatizar.", "Maps channels, documents, deadlines, systems and exceptions before automation."),
    journeyIds: ["customer-operations"],
    departmentIds: ["operations-it", "customer-success-service"],
    systems: ["analytics", "documents", "orchestration"],
    trigger: localized("Pedido de diagnóstico ou expansão operacional.", "Diagnostic request or operational expansion."),
    typicalDelivery: localized("Automation Scan, mapa de fricções e backlog priorizado.", "Automation Scan, friction map and prioritized backlog."),
    stage: "scan",
    priority: "experimental",
  }),
  item({
    id: "tourism-booking-to-checkin",
    nicheId: "tourism",
    title: localized("Reserva até check-in", "Booking to check-in"),
    outcome: localized("O hóspede recebe instruções certas sem corridas manuais da equipa.", "The guest receives the right instructions without manual team chasing."),
    description: localized("Coordena reserva, mensagens, calendário e preparação de chegada.", "Coordinates booking, messages, calendar and arrival preparation."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["pms-booking", "whatsapp-api", "email", "calendar"],
    trigger: localized("Reserva confirmada ou check-in aproximado.", "Booking confirmed or check-in approaching."),
    typicalDelivery: localized("Sequência de comunicação, regras por unidade e exceções.", "Communication sequence, unit rules and exceptions."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "tourism-multilingual-service",
    nicheId: "tourism",
    title: localized("Atendimento multilíngue por WhatsApp/email", "Multilingual service by WhatsApp/email"),
    outcome: localized("Pedidos repetidos são organizados e encaminhados sem perder contexto.", "Repeated requests are organized and routed without losing context."),
    description: localized("Combina canais, assistente IA controlado e handoff humano para atendimento operacional.", "Combines channels, controlled AI assistant and human handoff for operational service."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["whatsapp-api", "email", "ai-assistant", "helpdesk"],
    trigger: localized("Mensagem de hóspede recebida.", "Guest message received."),
    typicalDelivery: localized("Base de respostas permitidas, triagem operacional e escalonamento.", "Approved response base, operational triage and escalation."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "tourism-cleaning-maintenance",
    nicheId: "tourism",
    title: localized("Coordenação de limpeza e manutenção", "Cleaning and maintenance coordination"),
    outcome: localized("Tarefas entre estadias ficam visíveis para equipa e fornecedores.", "Tasks between stays become visible to team and suppliers."),
    description: localized("Liga calendário, mensagens, documentos e orquestração de tarefas por unidade.", "Connects calendar, messages, documents and task orchestration by unit."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["calendar", "whatsapp-api", "documents", "orchestration"],
    trigger: localized("Check-out, incidente ou tarefa preventiva.", "Check-out, incident or preventive task."),
    typicalDelivery: localized("Fluxo de tarefas, confirmação e fila de exceções.", "Task flow, confirmation and exception queue."),
    stage: "run",
    priority: "primary",
  }),
  item({
    id: "tourism-upsell-experiences",
    nicheId: "tourism",
    title: localized("Upsell de experiências, transfers e extras", "Upsell of experiences, transfers and extras"),
    outcome: localized("Ofertas relevantes aparecem no momento certo da jornada.", "Relevant offers appear at the right moment in the journey."),
    description: localized("Conecta PMS, CRM, mensagens e pagamento para oportunidades complementares.", "Connects PMS, CRM, messaging and payment for complementary opportunities."),
    journeyIds: ["lead-to-revenue"],
    departmentIds: ["marketing-sales", "finance", "operations-it"],
    systems: ["pms-booking", "crm", "whatsapp-api", "payments"],
    trigger: localized("Reserva confirmada ou janela pré-chegada.", "Booking confirmed or pre-arrival window."),
    typicalDelivery: localized("Segmentação simples, mensagens e tracking de resposta.", "Simple segmentation, messages and response tracking."),
    stage: "blueprint",
    priority: "primary",
  }),
  item({
    id: "tourism-review-reputation",
    nicheId: "tourism",
    title: localized("Gestão de reviews e reputação", "Review and reputation management"),
    outcome: localized("Feedback vira aprendizagem operacional e follow-up comercial.", "Feedback becomes operational learning and commercial follow-up."),
    description: localized("Organiza pedidos de review, análise de padrões e respostas controladas.", "Organizes review requests, pattern analysis and controlled replies."),
    journeyIds: ["customer-operations", "lead-to-revenue"],
    departmentIds: ["customer-success-service", "marketing-sales", "operations-it"],
    systems: ["email", "whatsapp-api", "analytics", "ai-assistant"],
    trigger: localized("Check-out concluído ou review recebido.", "Check-out completed or review received."),
    typicalDelivery: localized("Fluxo de feedback, reporting e respostas assistidas.", "Feedback flow, reporting and assisted responses."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "tourism-guest-incident-flow",
    nicheId: "tourism",
    title: localized("Incidentes durante estadia", "Guest incident flow during stay"),
    outcome: localized("Problemas ganham dono, SLA e registo de resolução.", "Problems gain owner, SLA and resolution record."),
    description: localized("Cria um fluxo para incidentes sem substituir decisão humana.", "Creates a flow for incidents without replacing human decisions."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["whatsapp-api", "helpdesk", "calendar", "documents"],
    trigger: localized("Hóspede reporta incidente.", "Guest reports an incident."),
    typicalDelivery: localized("Categorias, escalonamento, documentação e encerramento.", "Categories, escalation, documentation and closure."),
    stage: "build",
    priority: "secondary",
  }),
  item({
    id: "tourism-booking-payment-reconciliation",
    nicheId: "tourism",
    title: localized("Reconciliação de reservas e pagamentos", "Booking and payment reconciliation"),
    outcome: localized("Reservas, pagamentos e contabilidade ficam comparáveis.", "Bookings, payments and accounting become comparable."),
    description: localized("Liga PMS, pagamentos, ERP e reporting para reduzir reconciliação manual.", "Connects PMS, payments, ERP and reporting to reduce manual reconciliation."),
    journeyIds: ["quote-to-cash"],
    departmentIds: ["finance", "operations-it"],
    systems: ["pms-booking", "payments", "accounting-erp", "analytics"],
    trigger: localized("Pagamento, cancelamento ou fecho financeiro.", "Payment, cancellation or financial close."),
    typicalDelivery: localized("Modelo de reconciliação, alertas e relatório de diferenças.", "Reconciliation model, alerts and difference report."),
    stage: "build",
    priority: "secondary",
  }),
  item({
    id: "tourism-owner-reporting",
    nicheId: "tourism",
    title: localized("Relatório para proprietários/investidores", "Owner/investor reporting"),
    outcome: localized("Proprietários recebem síntese recorrente com menos montagem manual.", "Owners receive recurring summaries with less manual assembly."),
    description: localized("Compõe dados de reservas, contabilidade, documentos e analytics.", "Composes booking, accounting, document and analytics data."),
    journeyIds: ["quote-to-cash", "customer-operations"],
    departmentIds: ["finance", "customer-success-service", "operations-it"],
    systems: ["pms-booking", "accounting-erp", "documents", "analytics"],
    trigger: localized("Fim de mês ou período de reporting.", "Month-end or reporting period."),
    typicalDelivery: localized("Template, validação humana e envio recorrente.", "Template, human validation and recurring delivery."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "tourism-new-unit-onboarding",
    nicheId: "tourism",
    title: localized("Onboarding de nova unidade turística", "New tourism unit onboarding"),
    outcome: localized("Nova unidade entra com documentos, tarefas e sistemas preparados.", "A new unit starts with documents, tasks and systems prepared."),
    description: localized("Coordena documentação, calendário, PMS e preparação operacional.", "Coordinates documentation, calendar, PMS and operational preparation."),
    journeyIds: ["hire-to-productivity", "customer-operations"],
    departmentIds: ["hr", "customer-success-service", "operations-it"],
    systems: ["documents", "calendar", "pms-booking", "orchestration"],
    trigger: localized("Nova unidade aprovada para operação.", "New unit approved for operation."),
    typicalDelivery: localized("Checklist de arranque, tarefas e matriz de responsáveis.", "Launch checklist, tasks and owner matrix."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "tourism-seasonal-team-management",
    nicheId: "tourism",
    title: localized("Gestão de equipa sazonal", "Seasonal team management"),
    outcome: localized("Acessos, horários e documentos de equipa ficam controlados.", "Team access, schedules and documents stay controlled."),
    description: localized("Organiza entrada, acessos e rotinas de equipas temporárias.", "Organizes intake, access and routines for temporary teams."),
    journeyIds: ["hire-to-productivity"],
    departmentIds: ["hr", "operations-it"],
    systems: ["calendar", "documents", "identity-access", "whatsapp-api"],
    trigger: localized("Contratação sazonal aprovada.", "Seasonal hire approved."),
    typicalDelivery: localized("Fluxo de documentos, acessos e comunicações operacionais.", "Document, access and operational communication flow."),
    stage: "scan",
    priority: "experimental",
  }),
  item({
    id: "clinic-lead-to-booking",
    nicheId: "clinics",
    title: localized("Pedido de marcação até consulta agendada", "Booking request to scheduled appointment"),
    outcome: localized("Pedidos administrativos viram marcações com follow-up claro.", "Admin requests become appointments with clear follow-up."),
    description: localized("Coordena interesse, disponibilidade, contacto e agendamento sem decisões clínicas.", "Coordinates interest, availability, contact and scheduling without clinical decisions."),
    journeyIds: ["lead-to-revenue", "customer-operations"],
    departmentIds: ["marketing-sales", "customer-success-service", "operations-it"],
    systems: ["crm", "calendar", "whatsapp-api", "email"],
    trigger: localized("Pedido de marcação recebido.", "Booking request received."),
    typicalDelivery: localized("Intake administrativo, regras de contacto e marcação.", "Admin intake, contact rules and scheduling."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "clinic-no-show-reduction",
    nicheId: "clinics",
    title: localized("Redução de no-show", "No-show reduction"),
    outcome: localized("Confirmações e lembretes reduzem silêncio operacional.", "Confirmations and reminders reduce operational silence."),
    description: localized("Organiza lembretes de consulta, confirmações e filas de reagendamento.", "Organizes appointment reminders, confirmations and rescheduling queues."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["calendar", "whatsapp-api", "email", "analytics"],
    trigger: localized("Consulta aproximada ou confirmação em falta.", "Appointment approaching or confirmation missing."),
    typicalDelivery: localized("Sequência de lembrete, confirmação e reporting de no-show.", "Reminder sequence, confirmation and no-show reporting."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "clinic-pre-visit-admin",
    nicheId: "clinics",
    title: localized("Pré-consulta administrativa", "Pre-visit administration"),
    outcome: localized("Dados administrativos chegam antes da visita, com permissões claras.", "Admin data arrives before the visit, with clear permissions."),
    description: localized("Recolhe documentos e consentimentos administrativos sem tratar diagnóstico.", "Collects administrative documents and consents without handling diagnosis."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["documents", "email", "whatsapp-api", "orchestration"],
    trigger: localized("Consulta marcada.", "Appointment scheduled."),
    typicalDelivery: localized("Checklist administrativo, consentimentos e fila de exceções.", "Admin checklist, consents and exception queue."),
    stage: "blueprint",
    priority: "primary",
  }),
  item({
    id: "clinic-post-visit-followup",
    nicheId: "clinics",
    title: localized("Follow-up pós-consulta", "Post-visit follow-up"),
    outcome: localized("Comunicações operacionais pós-visita não dependem de memória manual.", "Operational post-visit communications do not depend on manual memory."),
    description: localized("Agenda follow-ups administrativos e pedidos de feedback sem recomendação clínica.", "Schedules administrative follow-ups and feedback requests without clinical recommendation."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["email", "whatsapp-api", "crm"],
    trigger: localized("Consulta concluída.", "Appointment completed."),
    typicalDelivery: localized("Mensagens aprovadas, tarefas e visibilidade de resposta.", "Approved messages, tasks and response visibility."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "clinic-treatment-proposal",
    nicheId: "clinics",
    title: localized("Proposta de tratamento/orçamento", "Treatment proposal/quote"),
    outcome: localized("Orçamentos aprovados seguem para pagamento e acompanhamento.", "Approved quotes move to payment and follow-up."),
    description: localized("Organiza proposta comercial e pagamento sem automatizar decisão terapêutica.", "Organizes commercial proposal and payment without automating therapeutic decisions."),
    journeyIds: ["quote-to-cash", "lead-to-revenue"],
    departmentIds: ["marketing-sales", "finance", "operations-it"],
    systems: ["crm", "documents", "payments", "email"],
    trigger: localized("Profissional aprova envio de orçamento.", "Professional approves quote sending."),
    typicalDelivery: localized("Template, aprovação humana, envio e estado de pagamento.", "Template, human approval, delivery and payment status."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "clinic-reactivation",
    nicheId: "clinics",
    title: localized("Reativação de pacientes inativos", "Inactive patient reactivation"),
    outcome: localized("Contactos consentidos recebem follow-up comercial controlado.", "Consented contacts receive controlled commercial follow-up."),
    description: localized("Segmenta contactos por critérios administrativos e histórico permitido.", "Segments contacts by administrative criteria and permitted history."),
    journeyIds: ["lead-to-revenue"],
    departmentIds: ["marketing-sales", "operations-it"],
    systems: ["crm", "email", "whatsapp-api", "analytics"],
    trigger: localized("Período de inatividade ou campanha aprovada.", "Inactivity period or approved campaign."),
    typicalDelivery: localized("Critérios de elegibilidade, mensagens e métricas de resposta.", "Eligibility criteria, messages and response metrics."),
    stage: "scan",
    priority: "secondary",
  }),
  item({
    id: "clinic-whatsapp-frontdesk",
    nicheId: "clinics",
    title: localized("Atendimento via WhatsApp oficial", "Front desk via official WhatsApp"),
    outcome: localized("Receção organiza pedidos sem espalhar contexto por telemóveis.", "Front desk organizes requests without spreading context across phones."),
    description: localized("Liga WhatsApp, helpdesk, CRM e assistência controlada para receção administrativa.", "Connects WhatsApp, helpdesk, CRM and controlled assistance for admin front desk."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["whatsapp-api", "helpdesk", "ai-assistant", "crm"],
    trigger: localized("Mensagem administrativa recebida.", "Administrative message received."),
    typicalDelivery: localized("Categorias, respostas permitidas e handoff para equipa.", "Categories, approved replies and team handoff."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "clinic-stock-materials",
    nicheId: "clinics",
    title: localized("Gestão de stock e materiais", "Stock and materials management"),
    outcome: localized("Reposições e custos recorrentes ganham rastreio operacional.", "Replenishment and recurring costs gain operational tracking."),
    description: localized("Mapeia materiais administrativos e consumíveis com estados e alertas.", "Maps administrative materials and consumables with statuses and alerts."),
    journeyIds: ["customer-operations", "quote-to-cash"],
    departmentIds: ["finance", "operations-it"],
    systems: ["inventory", "documents", "accounting-erp"],
    trigger: localized("Stock mínimo, compra ou inventário periódico.", "Minimum stock, purchase or periodic inventory."),
    typicalDelivery: localized("Modelo de inventário, alertas e reconciliação financeira.", "Inventory model, alerts and financial reconciliation."),
    stage: "scan",
    priority: "secondary",
  }),
  item({
    id: "clinic-billing-payments",
    nicheId: "clinics",
    title: localized("Cobrança, faturas e pagamentos", "Billing, invoices and payments"),
    outcome: localized("Pagamentos e faturas ficam claros para receção e finanças.", "Payments and invoices become clear to front desk and finance."),
    description: localized("Conecta pagamento, faturação e comunicação operacional.", "Connects payment, invoicing and operational communication."),
    journeyIds: ["quote-to-cash"],
    departmentIds: ["finance", "customer-success-service", "operations-it"],
    systems: ["payments", "accounting-erp", "email"],
    trigger: localized("Consulta, orçamento ou pagamento pendente.", "Appointment, quote or pending payment."),
    typicalDelivery: localized("Estados de cobrança, lembretes e reporting.", "Billing statuses, reminders and reporting."),
    stage: "build",
    priority: "secondary",
  }),
  item({
    id: "clinic-feedback-reputation",
    nicheId: "clinics",
    title: localized("Feedback e reputação da clínica", "Clinic feedback and reputation"),
    outcome: localized("Feedback administrativo vira melhoria e prova social controlada.", "Administrative feedback becomes improvement and controlled social proof."),
    description: localized("Recolhe feedback permitido, identifica padrões e organiza resposta.", "Collects permitted feedback, identifies patterns and organizes response."),
    journeyIds: ["customer-operations", "lead-to-revenue"],
    departmentIds: ["customer-success-service", "marketing-sales", "operations-it"],
    systems: ["email", "whatsapp-api", "analytics"],
    trigger: localized("Visita concluída ou pedido de feedback aprovado.", "Visit completed or feedback request approved."),
    typicalDelivery: localized("Fluxo de feedback, dashboard e respostas assistidas.", "Feedback flow, dashboard and assisted replies."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "realestate-lead-qualification",
    nicheId: "real-estate",
    title: localized("Lead comprador/vendedor até qualificação", "Buyer/seller lead to qualification"),
    outcome: localized("Leads imobiliários chegam qualificados e com próxima ação.", "Real estate leads arrive qualified with a next action."),
    description: localized("Estrutura captação, perguntas, CRM e follow-up comercial.", "Structures capture, questions, CRM and commercial follow-up."),
    journeyIds: ["lead-to-revenue"],
    departmentIds: ["marketing-sales", "operations-it"],
    systems: ["crm", "whatsapp-api", "email"],
    trigger: localized("Lead recebido por portal, formulário ou mensagem.", "Lead received by portal, form or message."),
    typicalDelivery: localized("Intake, scoring simples e tarefas de contacto.", "Intake, simple scoring and contact tasks."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "realestate-property-valuation-request",
    nicheId: "real-estate",
    title: localized("Pedido de avaliação de imóvel", "Property valuation request"),
    outcome: localized("Pedidos de avaliação passam a ter dados, agenda e dono.", "Valuation requests gain data, schedule and owner."),
    description: localized("Coordena formulário, CRM, calendário e documentos iniciais.", "Coordinates form, CRM, calendar and initial documents."),
    journeyIds: ["lead-to-revenue"],
    departmentIds: ["marketing-sales", "operations-it"],
    systems: ["crm", "calendar", "documents", "email"],
    trigger: localized("Proprietário pede avaliação.", "Owner requests valuation."),
    typicalDelivery: localized("Formulário, tarefas de contacto e preparação documental.", "Form, contact tasks and document preparation."),
    stage: "blueprint",
    priority: "primary",
  }),
  item({
    id: "realestate-property-onboarding",
    nicheId: "real-estate",
    title: localized("Onboarding de novo imóvel", "New property onboarding"),
    outcome: localized("Documentos, visitas, fotos e publicação entram numa sequência clara.", "Documents, visits, photos and publication enter a clear sequence."),
    description: localized("Organiza a passagem de imóvel aceite para operação comercial.", "Organizes the handoff from accepted property to commercial operation."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["documents", "crm", "calendar", "orchestration"],
    trigger: localized("Imóvel aceite para mediação ou gestão.", "Property accepted for brokerage or management."),
    typicalDelivery: localized("Checklist, tarefas e exceções de preparação.", "Checklist, tasks and preparation exceptions."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "realestate-listing-publication",
    nicheId: "real-estate",
    title: localized("Publicação multicanal de anúncios", "Multichannel listing publication"),
    outcome: localized("Anúncios ganham consistência e controlo de estado.", "Listings gain consistency and status control."),
    description: localized("Coordena dados, documentos e reporting sem prometer suporte universal a portais.", "Coordinates data, documents and reporting without promising universal portal support."),
    journeyIds: ["customer-operations"],
    departmentIds: ["marketing-sales", "customer-success-service", "operations-it"],
    systems: ["crm", "documents", "analytics", "orchestration"],
    trigger: localized("Imóvel pronto para publicação.", "Property ready for publication."),
    typicalDelivery: localized("Taxonomia, checklist e painel de publicação.", "Taxonomy, checklist and publication dashboard."),
    stage: "scan",
    priority: "secondary",
  }),
  item({
    id: "realestate-visit-scheduling",
    nicheId: "real-estate",
    title: localized("Marcação de visitas", "Visit scheduling"),
    outcome: localized("Visitas deixam de depender de trocas manuais dispersas.", "Visits stop depending on scattered manual exchanges."),
    description: localized("Liga calendário, WhatsApp, CRM e email para coordenar visitas.", "Connects calendar, WhatsApp, CRM and email to coordinate visits."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "marketing-sales", "operations-it"],
    systems: ["calendar", "whatsapp-api", "crm", "email"],
    trigger: localized("Interessado pede visita.", "Interested party requests a visit."),
    typicalDelivery: localized("Fluxo de marcação, confirmação e remarcação.", "Scheduling, confirmation and rescheduling flow."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "realestate-interested-party-followup",
    nicheId: "real-estate",
    title: localized("Follow-up de interessados", "Interested-party follow-up"),
    outcome: localized("Interesse não arrefece por falta de próxima ação.", "Interest does not cool down for lack of next action."),
    description: localized("Cria tarefas e comunicações para interessados após contacto ou visita.", "Creates tasks and communications for interested parties after contact or visit."),
    journeyIds: ["lead-to-revenue"],
    departmentIds: ["marketing-sales", "operations-it"],
    systems: ["crm", "email", "whatsapp-api", "analytics"],
    trigger: localized("Visita realizada ou lead sem resposta.", "Visit completed or lead unanswered."),
    typicalDelivery: localized("Cadência de follow-up, estados e reporting.", "Follow-up cadence, statuses and reporting."),
    stage: "build",
    priority: "primary",
  }),
  item({
    id: "realestate-offer-negotiation",
    nicheId: "real-estate",
    title: localized("Gestão de propostas e negociação", "Offer and negotiation management"),
    outcome: localized("Propostas, documentos e contrapropostas ficam rastreáveis.", "Offers, documents and counteroffers become traceable."),
    description: localized("Organiza proposta, aprovação humana e comunicação comercial.", "Organizes offer, human approval and commercial communication."),
    journeyIds: ["quote-to-cash", "lead-to-revenue"],
    departmentIds: ["marketing-sales", "finance", "operations-it"],
    systems: ["crm", "documents", "email"],
    trigger: localized("Proposta recebida ou preparada.", "Offer received or prepared."),
    typicalDelivery: localized("Modelo de estados, documentação e tarefas de decisão.", "Status model, documentation and decision tasks."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "realestate-rental-onboarding",
    nicheId: "real-estate",
    title: localized("Arrendamento: entrada de novo inquilino", "Rental: new tenant onboarding"),
    outcome: localized("Contrato, pagamentos e documentos seguem um fluxo controlado.", "Contract, payments and documents follow a controlled flow."),
    description: localized("Coordena documentos, pagamentos, ERP e email para entrada de inquilino.", "Coordinates documents, payments, ERP and email for tenant move-in."),
    journeyIds: ["customer-operations", "quote-to-cash"],
    departmentIds: ["customer-success-service", "finance", "operations-it"],
    systems: ["documents", "payments", "accounting-erp", "email"],
    trigger: localized("Inquilino aprovado.", "Tenant approved."),
    typicalDelivery: localized("Checklist de entrada, cobrança inicial e confirmação documental.", "Move-in checklist, initial billing and document confirmation."),
    stage: "build",
    priority: "secondary",
  }),
  item({
    id: "realestate-maintenance-tickets",
    nicheId: "real-estate",
    title: localized("Manutenção de imóveis arrendados", "Rental property maintenance"),
    outcome: localized("Pedidos de manutenção têm dono, fornecedor e estado.", "Maintenance requests have owner, supplier and status."),
    description: localized("Organiza tickets, mensagens, documentos e calendário de intervenção.", "Organizes tickets, messages, documents and intervention calendar."),
    journeyIds: ["customer-operations"],
    departmentIds: ["customer-success-service", "operations-it"],
    systems: ["helpdesk", "whatsapp-api", "documents", "calendar"],
    trigger: localized("Inquilino ou proprietário reporta manutenção.", "Tenant or owner reports maintenance."),
    typicalDelivery: localized("Intake, triagem operacional, fornecedor e confirmação.", "Intake, operational triage, supplier and confirmation."),
    stage: "blueprint",
    priority: "secondary",
  }),
  item({
    id: "realestate-owner-reporting",
    nicheId: "real-estate",
    title: localized("Relatório para proprietário", "Owner reporting"),
    outcome: localized("Proprietários recebem estado financeiro e operacional sem montagem manual.", "Owners receive financial and operational status without manual assembly."),
    description: localized("Compõe dados de ERP, documentos, analytics e email em reporting recorrente.", "Composes ERP, document, analytics and email data into recurring reporting."),
    journeyIds: ["quote-to-cash", "customer-operations"],
    departmentIds: ["finance", "customer-success-service", "operations-it"],
    systems: ["accounting-erp", "documents", "analytics", "email"],
    trigger: localized("Fim de mês ou evento relevante do imóvel.", "Month-end or relevant property event."),
    typicalDelivery: localized("Template, validação e envio recorrente.", "Template, validation and recurring delivery."),
    stage: "blueprint",
    priority: "secondary",
  }),
];

export function getVisibleItems(nicheId: AutomationNicheId) {
  return automationMapItems.filter((item) => item.nicheId === nicheId);
}

export function getActiveItems(nicheId: AutomationNicheId, journeyId: SolutionId) {
  return getVisibleItems(nicheId).filter((item) => item.journeyIds.includes(journeyId));
}

export function getActiveSystems(items: AutomationMapItem[]) {
  return uniqueByOrder(items.flatMap((item) => item.systems), automationSystems.map((system) => system.id));
}

export function getActiveDepartments(items: AutomationMapItem[]) {
  const departmentOrder: DepartmentId[] = [
    "marketing-sales",
    "customer-success-service",
    "finance",
    "hr",
    "operations-it",
  ];

  return uniqueByOrder(items.flatMap((item) => item.departmentIds), departmentOrder);
}

export function getJourneyCounts(nicheId: AutomationNicheId) {
  const counts = Object.fromEntries(journeyOrder.map((journeyId) => [journeyId, 0])) as Record<
    SolutionId,
    number
  >;

  for (const item of getVisibleItems(nicheId)) {
    for (const journeyId of item.journeyIds) {
      counts[journeyId] += 1;
    }
  }

  return counts;
}

export function getResolvedJourneyId(nicheId: AutomationNicheId, selectedJourneyId: SolutionId) {
  const counts = getJourneyCounts(nicheId);

  if (counts[selectedJourneyId] > 0) {
    return selectedJourneyId;
  }

  return journeyOrder.reduce((bestJourneyId, journeyId) => {
    if (counts[journeyId] > counts[bestJourneyId]) {
      return journeyId;
    }

    return bestJourneyId;
  }, journeyOrder[0]);
}

export function getSortedVisibleItems(nicheId: AutomationNicheId, journeyId: SolutionId) {
  return [...getVisibleItems(nicheId)].sort((left, right) => {
    const leftActive = left.journeyIds.includes(journeyId);
    const rightActive = right.journeyIds.includes(journeyId);

    if (leftActive !== rightActive) {
      return leftActive ? -1 : 1;
    }

    const priorityDelta = priorityOrder[left.priority] - priorityOrder[right.priority];

    if (priorityDelta !== 0) {
      return priorityDelta;
    }

    return automationMapItems.indexOf(left) - automationMapItems.indexOf(right);
  });
}

export function getRecommendedJourneyIds(nicheId: AutomationNicheId, limit = 3) {
  const counts = getJourneyCounts(nicheId);

  return [...journeyOrder]
    .filter((journeyId) => counts[journeyId] > 0)
    .sort((left, right) => {
      const countDelta = counts[right] - counts[left];

      if (countDelta !== 0) {
        return countDelta;
      }

      return journeyOrder.indexOf(left) - journeyOrder.indexOf(right);
    })
    .slice(0, limit);
}

export function getFeaturedItems(nicheId: AutomationNicheId, limit = 6) {
  const recommendedJourneyIds = getRecommendedJourneyIds(nicheId);
  const selectedIds = new Set<string>();
  const featuredItems: AutomationMapItem[] = [];

  for (const journeyId of recommendedJourneyIds) {
    const itemForJourney = getSortedVisibleItems(nicheId, journeyId).find(
      (item) => item.journeyIds.includes(journeyId) && !selectedIds.has(item.id),
    );

    if (itemForJourney) {
      selectedIds.add(itemForJourney.id);
      featuredItems.push(itemForJourney);
    }
  }

  const primaryJourneyId = recommendedJourneyIds[0] ?? journeyOrder[0];

  for (const item of getSortedVisibleItems(nicheId, primaryJourneyId)) {
    if (featuredItems.length >= limit) {
      break;
    }

    if (!selectedIds.has(item.id)) {
      selectedIds.add(item.id);
      featuredItems.push(item);
    }
  }

  return featuredItems;
}

export function getJourneyMeta(journeyId: SolutionId) {
  return automationJourneys.find((journey) => journey.id === journeyId) ?? automationJourneys[0];
}

export function getSystemMeta(systemId: AutomationSystemCategory) {
  return automationSystems.find((system) => system.id === systemId) ?? automationSystems[0];
}

export function getStageIndex(stage: AutomationMapStage) {
  return stageOrder.indexOf(stage);
}

function uniqueByOrder<T extends string>(values: T[], order: readonly T[]) {
  const seen = new Set(values);

  return order.filter((value) => seen.has(value));
}
