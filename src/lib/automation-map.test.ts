import { describe, expect, test } from "vitest";

import {
  automationMapCopy,
  automationMapItems,
  automationNiches,
  getActiveDepartments,
  getActiveItems,
  getActiveSystems,
  getJourneyCounts,
  getRecommendedJourneyIds,
  getResolvedJourneyId,
  getFeaturedItems,
  getSortedVisibleItems,
  getVisibleItems,
} from "./automation-map";

describe("automation map data", () => {
  test("defines the four V1 niches with localized labels", () => {
    expect(automationNiches.map((niche) => niche.id)).toEqual([
      "accounting",
      "tourism",
      "clinics",
      "real-estate",
    ]);
    expect(automationNiches.find((niche) => niche.id === "accounting")?.title.pt).toBe(
      "Contabilidade",
    );
    expect(automationNiches.find((niche) => niche.id === "tourism")?.title.en).toBe(
      "Tourism operations",
    );
  });

  test("shows ten automation items per niche", () => {
    for (const niche of automationNiches) {
      const visibleItems = getVisibleItems(niche.id);

      expect(visibleItems).toHaveLength(10);
      expect(visibleItems.every((item) => item.nicheId === niche.id)).toBe(true);
    }
    expect(automationMapItems).toHaveLength(40);
  });

  test("filters active items, systems and departments by selected journey", () => {
    const activeItems = getActiveItems("accounting", "customer-operations");

    expect(activeItems.map((item) => item.id)).toContain(
      "accounting-monthly-document-collection",
    );
    expect(activeItems.every((item) => item.journeyIds.includes("customer-operations"))).toBe(
      true,
    );
    expect(getActiveSystems(activeItems)).toEqual(
      expect.arrayContaining(["whatsapp-api", "documents", "orchestration"]),
    );
    expect(getActiveDepartments(activeItems)).toEqual(
      expect.arrayContaining(["customer-success-service", "operations-it"]),
    );
  });

  test("falls back to the journey with the most automations in a niche", () => {
    expect(getResolvedJourneyId("accounting", "hire-to-productivity")).toBe(
      "customer-operations",
    );
    expect(getJourneyCounts("accounting")["customer-operations"]).toBeGreaterThan(
      getJourneyCounts("accounting")["lead-to-revenue"],
    );
  });

  test("returns a small recommended journey set for the simplified map", () => {
    expect(getRecommendedJourneyIds("accounting")).toEqual([
      "customer-operations",
      "quote-to-cash",
      "lead-to-revenue",
    ]);
  });

  test("limits featured automation cards for the simplified map", () => {
    const featuredItems = getFeaturedItems("accounting");

    expect(featuredItems).toHaveLength(6);
    expect(featuredItems[0].journeyIds).toContain("customer-operations");
    expect(featuredItems.some((item) => item.id === "accounting-new-client-pipeline")).toBe(
      true,
    );
  });

  test("sorts active items before related inactive items", () => {
    const sortedItems = getSortedVisibleItems("accounting", "quote-to-cash");
    const firstInactiveIndex = sortedItems.findIndex(
      (item) => !item.journeyIds.includes("quote-to-cash"),
    );
    const lastActiveIndex = sortedItems.findLastIndex((item) =>
      item.journeyIds.includes("quote-to-cash"),
    );

    expect(firstInactiveIndex).toBeGreaterThan(0);
    expect(lastActiveIndex).toBeLessThan(firstInactiveIndex);
  });

  test("keeps the public copy localized without outcome claims", () => {
    expect(automationMapCopy.pt.title).toBe(
      "Escolha um nicho. Veja que jornadas acendem a operação.",
    );
    expect(automationMapCopy.en.primaryCta).toBe("Map this journey");
    expect(automationMapCopy.pt.disclaimer).toContain("arquiteturas de referência");
    expect(automationMapCopy.en.clinicSafety).toContain("Clinical decisions");
  });
});
