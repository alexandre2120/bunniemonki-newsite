import { describe, expect, test } from "vitest";

import {
  initialScanDraft,
  validateScanStep,
  type ScanDraft,
} from "./scan-validation";

const validDraft: ScanDraft = {
  ...initialScanDraft,
  firstName: "Alexandre",
  lastName: "Jaques",
  email: "alex@example.com",
  company: "Bunniemonki",
  role: "Founder",
  companyUrl: "https://bunniemonki.com",
  market: "Portugal",
  companySize: "30-49",
  communicationLanguage: "en",
  primaryJourney: "lead-to-revenue",
  primaryDepartment: "marketing-sales",
  outcome: "We need to reduce duplicated lead handoff work between marketing and sales.",
  currentSignals: ["duplicate-entry", "manual-approvals"],
  impactFrequency: "weekly",
  ownerIdentified: "yes",
  desiredTiming: "1-3-months",
  investmentRange: "5000-15000",
  decisionContext: "decision-maker",
  privacyAccepted: true,
};

describe("Automation Scan validation", () => {
  test("accepts complete data for each step", () => {
    expect(validateScanStep(1, validDraft).ok).toBe(true);
    expect(validateScanStep(2, validDraft).ok).toBe(true);
    expect(validateScanStep(3, validDraft).ok).toBe(true);
  });

  test("requires a work email shape and company identity on step 1", () => {
    const result = validateScanStep(1, {
      ...validDraft,
      email: "not-an-email",
      companyUrl: "",
    });

    expect(result.ok).toBe(false);
    expect(result.errors.email).toContain("valid work email");
    expect(result.errors.companyUrl).toContain("company website or LinkedIn");
  });

  test("requires journey context without forcing confidential details", () => {
    const result = validateScanStep(2, {
      ...validDraft,
      outcome: "Too short",
      currentSignals: [],
    });

    expect(result.ok).toBe(false);
    expect(result.errors.outcome).toContain("at least 40 characters");
    expect(result.errors.currentSignals).toContain("Select at least one signal");
  });

  test("keeps operational response consent separate from optional marketing consent", () => {
    const result = validateScanStep(3, {
      ...validDraft,
      privacyAccepted: false,
      marketingConsent: true,
    });

    expect(result.ok).toBe(false);
    expect(result.errors.privacyAccepted).toContain("permission to respond");
    expect(result.errors.marketingConsent).toBeUndefined();
  });

  test("returns Portuguese validation messages when validating a Portuguese form", () => {
    const result = validateScanStep(
      1,
      {
        ...validDraft,
        firstName: "",
        email: "not-an-email",
        companyUrl: "",
      },
      "pt",
    );

    expect(result.ok).toBe(false);
    expect(result.errors.firstName).toBe("Este campo é obrigatório.");
    expect(result.errors.email).toContain("email profissional válido");
    expect(result.errors.companyUrl).toContain("website ou LinkedIn");
  });
});
