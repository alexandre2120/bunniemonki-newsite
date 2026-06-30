import { describe, expect, test } from "vitest";

import { getLandingPage, landingPages } from "./content";
import { getStaticRouteParams, resolveRoute } from "./routes";

const withoutAccents = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

describe("niche landing pages", () => {
  test("publishes four localized ad landing pages per locale", () => {
    expect(landingPages.pt).toHaveLength(4);
    expect(landingPages.en).toHaveLength(4);

    expect(landingPages.pt.map((page) => page.slug)).toEqual([
      "contabilidade-consultoria-fiscal",
      "turismo-operacional",
      "clinicas-privadas",
      "imobiliario-arrendamento",
    ]);

    expect(landingPages.en.map((page) => page.slug)).toEqual([
      "accounting-tax-consulting",
      "tourism-operations",
      "private-clinics",
      "real-estate-rentals",
    ]);
  });

  test("keeps reference blueprints honest and human governed", () => {
    for (const locale of ["en", "pt"] as const) {
      for (const page of landingPages[locale]) {
        expect(withoutAccents(page.blueprint.label.toLowerCase())).toContain(
          locale === "en" ? "reference" : "referencia",
        );
        expect(withoutAccents(page.guardrails.join(" ").toLowerCase())).toMatch(
          locale === "en" ? /human|approval/ : /humana|validacao/,
        );
        expect(page.proof.every((item) => !item.includes("%"))).toBe(true);
      }
    }
  });

  test("keeps ad landing copy short enough to scan", () => {
    for (const locale of ["en", "pt"] as const) {
      for (const page of landingPages[locale]) {
        expect(page.subheadline.length).toBeLessThanOrEqual(150);
        expect(page.painPoints).toHaveLength(3);
        expect(page.trust).toHaveLength(3);
        expect(page.proof).toHaveLength(3);
      }
    }
  });

  test("resolves landing routes and includes them in static params", () => {
    const ptRoute = resolveRoute("pt", ["landing", "turismo-operacional"]);
    const enRoute = resolveRoute("en", ["landing", "tourism-operations"]);

    expect(ptRoute?.kind).toBe("landing");
    expect(enRoute?.kind).toBe("landing");

    if (ptRoute?.kind === "landing") {
      expect(ptRoute.item.id).toBe("tourism-operations");
      expect(ptRoute.item.cta).toBe("Mapear a operação de hóspedes");
    }

    if (enRoute?.kind === "landing") {
      expect(enRoute.item.id).toBe("tourism-operations");
      expect(enRoute.item.cta).toBe("Map guest operations");
    }

    expect(getLandingPage("pt", "clinicas-privadas")?.id).toBe("private-clinics");
    expect(getStaticRouteParams()).toContainEqual({
      locale: "en",
      segments: ["landing", "real-estate-rentals"],
    });
  });

  test("rejects landing routes with extra path segments", () => {
    expect(resolveRoute("pt", ["landing", "turismo-operacional", "extra"])).toBeNull();
    expect(resolveRoute("en", ["landing", "tourism-operations", "extra"])).toBeNull();
  });
});
