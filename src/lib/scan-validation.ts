import type { Locale } from "./i18n";

export type CompanySize =
  | "1-9"
  | "10-29"
  | "30-49"
  | "50-99"
  | "100-199"
  | "200-499"
  | "500+";

export type ScanDraft = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  companyUrl: string;
  market: string;
  companySize: CompanySize | "";
  communicationLanguage: Locale;
  primaryJourney: string;
  primaryDepartment: string;
  outcome: string;
  currentSignals: string[];
  toolNames: string;
  impactFrequency: string;
  ownerIdentified: string;
  desiredTiming: string;
  investmentRange: string;
  decisionContext: string;
  additionalContext: string;
  privacyAccepted: boolean;
  marketingConsent: boolean;
};

export type ScanStep = 1 | 2 | 3;

export type ValidationResult = {
  ok: boolean;
  errors: Partial<Record<keyof ScanDraft, string>>;
};

const validationCopy: Record<
  Locale,
  {
    required: string;
    email: string;
    companyUrlRequired: string;
    companyUrlInvalid: string;
    outcomeLength: string;
    currentSignals: string;
    privacyAccepted: string;
  }
> = {
  en: {
    required: "This field is required.",
    email: "Enter a valid work email.",
    companyUrlRequired: "Add a company website or LinkedIn company URL.",
    companyUrlInvalid: "Use a valid company website or LinkedIn URL.",
    outcomeLength: "Describe the outcome in at least 40 characters.",
    currentSignals: "Select at least one signal.",
    privacyAccepted:
      "Confirm the privacy notice and permission to respond to this request.",
  },
  pt: {
    required: "Este campo é obrigatório.",
    email: "Introduza um email profissional válido.",
    companyUrlRequired: "Adicione o website ou LinkedIn da empresa.",
    companyUrlInvalid: "Use um website ou LinkedIn válido.",
    outcomeLength: "Descreva o resultado com pelo menos 40 caracteres.",
    currentSignals: "Selecione pelo menos um sinal.",
    privacyAccepted:
      "Confirme a política de privacidade e a autorização para responder a este pedido.",
  },
};

export const initialScanDraft: ScanDraft = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  companyUrl: "",
  market: "",
  companySize: "",
  communicationLanguage: "en",
  primaryJourney: "",
  primaryDepartment: "",
  outcome: "",
  currentSignals: [],
  toolNames: "",
  impactFrequency: "",
  ownerIdentified: "",
  desiredTiming: "",
  investmentRange: "",
  decisionContext: "",
  additionalContext: "",
  privacyAccepted: false,
  marketingConsent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;

function addRequired(
  errors: ValidationResult["errors"],
  draft: ScanDraft,
  fields: Array<keyof ScanDraft>,
  locale: Locale,
) {
  for (const field of fields) {
    const value = draft[field];
    if (typeof value === "string" && !value.trim()) {
      errors[field] = validationCopy[locale].required;
    }
  }
}

export function validateScanStep(
  step: ScanStep,
  draft: ScanDraft,
  locale: Locale = "en",
): ValidationResult {
  const errors: ValidationResult["errors"] = {};
  const messages = validationCopy[locale];

  if (step === 1) {
    addRequired(errors, draft, [
      "firstName",
      "lastName",
      "email",
      "company",
      "role",
      "market",
      "companySize",
    ], locale);

    if (draft.email && !emailPattern.test(draft.email.trim())) {
      errors.email = messages.email;
    }

    if (!draft.companyUrl.trim()) {
      errors.companyUrl = messages.companyUrlRequired;
    } else if (!urlPattern.test(draft.companyUrl.trim())) {
      errors.companyUrl = messages.companyUrlInvalid;
    }
  }

  if (step === 2) {
    addRequired(errors, draft, [
      "primaryJourney",
      "primaryDepartment",
      "outcome",
      "impactFrequency",
      "ownerIdentified",
    ], locale);

    if (draft.outcome.trim() && draft.outcome.trim().length < 40) {
      errors.outcome = messages.outcomeLength;
    }

    if (draft.currentSignals.length === 0) {
      errors.currentSignals = messages.currentSignals;
    }
  }

  if (step === 3) {
    addRequired(errors, draft, ["desiredTiming", "investmentRange", "decisionContext"], locale);

    if (!draft.privacyAccepted) {
      errors.privacyAccepted = messages.privacyAccepted;
    }
  }

  return { ok: Object.keys(errors).length === 0, errors };
}
