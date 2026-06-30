import { describe, expect, test } from "vitest";

import { landingPages, siteCopy, solutions } from "./content";
import { getStaticRouteParams, resolveRoute } from "./routes";

describe("AI process implementation solution", () => {
  test("publishes the new primary solution first in both locales", () => {
    expect(solutions.pt[0]).toMatchObject({
      id: "ai-process-implementation",
      slug: "ai-process-implementation",
      title: "Implantação inteligente de IA nos processos da empresa",
    });

    expect(solutions.en[0]).toMatchObject({
      id: "ai-process-implementation",
      slug: "ai-process-implementation",
      title: "AI Process Implementation",
    });
  });

  test("anchors the home and solutions index copy in the new positioning", () => {
    expect(siteCopy.pt.home.h1).toBe("Implantação inteligente de IA nos processos da empresa.");
    expect(siteCopy.pt.index.solutionsTitle).toBe(
      "IA aplicada aos processos reais, não à volta deles.",
    );
    expect(siteCopy.en.home.h1).toBe("Intelligent AI implementation inside company processes.");
    expect(siteCopy.en.index.solutionsTitle).toBe(
      "AI applied to real processes, not around them.",
    );
  });

  test("serves the primary solution on localized solution routes", () => {
    const ptRoute = resolveRoute("pt", ["solucoes", "ai-process-implementation"]);
    const enRoute = resolveRoute("en", ["solutions", "ai-process-implementation"]);

    expect(ptRoute?.kind).toBe("solution");
    expect(enRoute?.kind).toBe("solution");

    if (ptRoute?.kind === "solution") {
      expect(ptRoute.item.id).toBe("ai-process-implementation");
      expect(ptRoute.item.modules).toEqual([
        "Automation Scan",
        "Solution Blueprint",
        "Integrações aos sistemas existentes",
        "Automações com IA",
        "Automação gerida",
      ]);
    }

    expect(getStaticRouteParams()).toContainEqual({
      locale: "pt",
      segments: ["solucoes", "ai-process-implementation"],
    });
  });

  test("points every niche landing page at the primary solution", () => {
    for (const locale of ["en", "pt"] as const) {
      expect(landingPages[locale].every((page) => page.solutionId === "ai-process-implementation")).toBe(
        true,
      );
    }
  });
});
