import type { Locale } from "./i18n";

type Option = [string, string];

export type ScanFormCopy = {
  selectPlaceholder: string;
  stepOne: { title: string };
  stepTwo: { title: string; outcomeHelp: string };
  stepThree: { title: string; privacy: string; marketing: string };
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    role: string;
    companyUrl: string;
    market: string;
    companySize: string;
    primaryJourney: string;
    primaryDepartment: string;
    outcome: string;
    currentSignals: string;
    toolNames: string;
    impactFrequency: string;
    ownerIdentified: string;
    desiredTiming: string;
    investmentRange: string;
    decisionContext: string;
    additionalContext: string;
  };
  journeys: Option[];
  departments: Option[];
  signals: Option[];
  impactFrequencies: Option[];
  ownerOptions: Option[];
  timing: Option[];
  investmentRanges: Option[];
  decisionContext: Option[];
};

const sharedJourneys = {
  en: [
    ["lead-to-revenue", "Lead-to-Revenue"],
    ["customer-operations", "Customer Operations"],
    ["quote-to-cash", "Quote-to-Cash"],
    ["hire-to-productivity", "Hire-to-Productivity"],
    ["cross-functional", "Cross-functional / Not sure"],
  ],
  pt: [
    ["lead-to-revenue", "Lead-to-Revenue"],
    ["customer-operations", "Customer Operations"],
    ["quote-to-cash", "Quote-to-Cash"],
    ["hire-to-productivity", "Hire-to-Productivity"],
    ["cross-functional", "Transversal / Não sei"],
  ],
} satisfies Record<Locale, Option[]>;

const copy: Record<Locale, ScanFormCopy> = {
  en: {
    selectPlaceholder: "Select",
    stepOne: { title: "You and the company" },
    stepTwo: {
      title: "Journey and operating gap",
      outcomeHelp: "Recommended 300–800 characters. Do not include confidential records.",
    },
    stepThree: {
      title: "Readiness and contact consent",
      privacy:
        "I have read the privacy notice and give permission for Bunniemonki to respond to this request.",
      marketing:
        "Optional: send occasional Bunniemonki operating insights when a real programme exists.",
    },
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Work email",
      company: "Company",
      role: "Role/title",
      companyUrl: "Website or LinkedIn",
      market: "Country / market",
      companySize: "Company size",
      primaryJourney: "Primary journey",
      primaryDepartment: "Primary department",
      outcome: "Outcome sought",
      currentSignals: "What is happening today?",
      toolNames: "Key system/tool names (optional)",
      impactFrequency: "Impact frequency",
      ownerIdentified: "Executive/operational owner",
      desiredTiming: "Desired timing",
      investmentRange: "Indicative investment range",
      decisionContext: "Decision context",
      additionalContext: "Additional context (optional)",
    },
    journeys: sharedJourneys.en,
    departments: [
      ["marketing-sales", "Marketing & Sales"],
      ["customer-success-service", "Customer Success & Service"],
      ["finance", "Finance"],
      ["hr", "HR"],
      ["operations-it", "Operations & IT"],
      ["multiple", "Multiple / Not sure"],
    ],
    signals: [
      ["duplicate-entry", "Duplicate data entry"],
      ["manual-approvals", "Manual approvals/follow-up"],
      ["disconnected-systems", "Disconnected systems"],
      ["reporting-reconciliation", "Reporting/reconciliation"],
      ["communication", "Customer/candidate communication"],
      ["automation-failures", "Automation failures"],
      ["unclear-ownership", "Unclear ownership"],
    ],
    impactFrequencies: [
      ["daily", "Daily"],
      ["weekly", "Weekly"],
      ["monthly", "Monthly"],
      ["unknown", "Occasional / unknown"],
    ],
    ownerOptions: [
      ["yes", "Yes"],
      ["no", "No"],
      ["not-sure", "Not sure"],
    ],
    timing: [
      ["within-30-days", "Within 30 days"],
      ["1-3-months", "1–3 months"],
      ["3-6-months", "3–6 months"],
      ["exploring", "Exploring"],
    ],
    investmentRanges: [
      ["up-to-2500", "Up to EUR 2,500"],
      ["2500-5000", "EUR 2,500–5,000"],
      ["5000-15000", "EUR 5,000–15,000"],
      ["15000-30000", "EUR 15,000–30,000"],
      ["30000-plus", "EUR 30,000+"],
      ["guidance", "Need guidance"],
    ],
    decisionContext: [
      ["decision-maker", "Decision-maker"],
      ["project-owner", "Project owner"],
      ["evaluator", "Evaluator/adviser"],
      ["other", "Other"],
    ],
  },
  pt: {
    selectPlaceholder: "Selecionar",
    stepOne: { title: "Você e a empresa" },
    stepTwo: {
      title: "Jornada e lacuna operacional",
      outcomeHelp:
        "Recomendado 300–800 caracteres. Não inclua registos confidenciais.",
    },
    stepThree: {
      title: "Prontidão e consentimento",
      privacy:
        "Li a política de privacidade e autorizo a Bunniemonki a responder a este pedido.",
      marketing:
        "Opcional: enviar insights operacionais da Bunniemonki quando existir um programa real.",
    },
    fields: {
      firstName: "Nome",
      lastName: "Apelido",
      email: "Email profissional",
      company: "Empresa",
      role: "Função/cargo",
      companyUrl: "Website ou LinkedIn",
      market: "País / mercado",
      companySize: "Tamanho da empresa",
      primaryJourney: "Jornada principal",
      primaryDepartment: "Departamento principal",
      outcome: "Resultado pretendido",
      currentSignals: "O que acontece hoje?",
      toolNames: "Sistemas/ferramentas principais (opcional)",
      impactFrequency: "Frequência do impacto",
      ownerIdentified: "Responsável executivo/operacional",
      desiredTiming: "Prazo desejado",
      investmentRange: "Faixa de investimento indicativa",
      decisionContext: "Contexto de decisão",
      additionalContext: "Contexto adicional (opcional)",
    },
    journeys: sharedJourneys.pt,
    departments: [
      ["marketing-sales", "Marketing & Vendas"],
      ["customer-success-service", "Customer Success & Serviço"],
      ["finance", "Finanças"],
      ["hr", "HR"],
      ["operations-it", "Operações & IT"],
      ["multiple", "Múltiplos / Não sei"],
    ],
    signals: [
      ["duplicate-entry", "Dados duplicados"],
      ["manual-approvals", "Aprovações/follow-up manuais"],
      ["disconnected-systems", "Sistemas desconectados"],
      ["reporting-reconciliation", "Reporting/reconciliação"],
      ["communication", "Comunicação com cliente/candidato"],
      ["automation-failures", "Falhas de automação"],
      ["unclear-ownership", "Propriedade pouco clara"],
    ],
    impactFrequencies: [
      ["daily", "Diária"],
      ["weekly", "Semanal"],
      ["monthly", "Mensal"],
      ["unknown", "Ocasional / não sei"],
    ],
    ownerOptions: [
      ["yes", "Sim"],
      ["no", "Não"],
      ["not-sure", "Não sei"],
    ],
    timing: [
      ["within-30-days", "Nos próximos 30 dias"],
      ["1-3-months", "1–3 meses"],
      ["3-6-months", "3–6 meses"],
      ["exploring", "A explorar"],
    ],
    investmentRanges: [
      ["up-to-2500", "Até EUR 2.500"],
      ["2500-5000", "EUR 2.500–5.000"],
      ["5000-15000", "EUR 5.000–15.000"],
      ["15000-30000", "EUR 15.000–30.000"],
      ["30000-plus", "EUR 30.000+"],
      ["guidance", "Preciso de orientação"],
    ],
    decisionContext: [
      ["decision-maker", "Decisor"],
      ["project-owner", "Responsável pelo projeto"],
      ["evaluator", "Avaliador/consultor"],
      ["other", "Outro"],
    ],
  },
};

export function getScanFormCopy(locale: Locale) {
  return copy[locale];
}
