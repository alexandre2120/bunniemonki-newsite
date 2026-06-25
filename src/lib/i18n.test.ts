import { describe, expect, test } from "vitest";

import { siteCopy } from "./content";
import {
  getAlternateLocalePath,
  getLocalizedPath,
  hasLocale,
  isLocalizedRoute,
} from "./i18n";

describe("i18n routing", () => {
  test("accepts only supported public locales", () => {
    expect(hasLocale("en")).toBe(true);
    expect(hasLocale("pt")).toBe(true);
    expect(hasLocale("es")).toBe(false);
    expect(hasLocale("en-US")).toBe(false);
  });

  test("builds locale-specific canonical routes", () => {
    expect(getLocalizedPath("en", "solutions")).toBe("/en/solutions");
    expect(getLocalizedPath("pt", "solutions")).toBe("/pt/solucoes");
    expect(getLocalizedPath("pt", "about")).toBe("/pt/sobre");
    expect(getLocalizedPath("en", "solution", "lead-to-revenue")).toBe(
      "/en/solutions/lead-to-revenue",
    );
    expect(getLocalizedPath("pt", "department", "operations-it")).toBe(
      "/pt/departamentos/operations-it",
    );
  });

  test("maps the current route to the equivalent alternate locale route", () => {
    expect(getAlternateLocalePath("/en/solutions/quote-to-cash?from=nav#fit")).toBe(
      "/pt/solucoes/quote-to-cash?from=nav#fit",
    );
    expect(getAlternateLocalePath("/pt/sobre")).toBe("/en/about");
    expect(getAlternateLocalePath("/pt/privacidade")).toBe("/en/privacy");
  });

  test("identifies localized routes", () => {
    expect(isLocalizedRoute("/en/blueprints/hire-to-productivity")).toBe(true);
    expect(isLocalizedRoute("/pt/automation-scan")).toBe(true);
    expect(isLocalizedRoute("/solutions")).toBe(false);
  });

  test("keeps global interface copy localized", () => {
    expect(siteCopy.en.ui.skipToContent).toBe("Skip to content");
    expect(siteCopy.pt.ui.skipToContent).toBe("Saltar para o conteúdo");
    expect(siteCopy.pt.ui.openMenu).toBe("Abrir menu");
  });
});
