import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const pageViewsPath = join(process.cwd(), "src/components/site/page-views.tsx");
const localizedPagePath = join(process.cwd(), "src/app/[locale]/[[...segments]]/page.tsx");

describe("LandingPageView source", () => {
  test("renders the operational cockpit sections and final CTA", () => {
    const source = readFileSync(pageViewsPath, "utf8");

    expect(source).toContain("export function LandingPageView");
    expect(source).toContain("Operational signal cockpit");
    expect(source).toContain("Where work breaks");
    expect(source).toContain("Reference blueprint");
    expect(source).toContain("Human-governed automation");
    expect(source).toContain("landingPage.finalCta");
    expect(source).toContain("landingPage.solutionId");
    expect(source).toContain("Primary solution");
    expect(source).toContain("Solução principal");
    expect(source).toContain("Painel de sinais operacionais");
    expect(source).toContain("Onde o trabalho quebra");
    expect(source).toContain("GATE HUMANO");
    expect(source).toContain("No pitch view renders more than three bullets per block");
    expect(source).toContain("landingPage.painPoints.slice(0, 3)");
    expect(source).toContain("landingPage.journey.slice(0, 3)");
    expect(source).not.toContain("landingPage.blueprint.artifacts.map");
    expect(source).not.toContain("landingPage.faq.map");
    expect(source).not.toContain("Use this section as the ad-message match");
    expect(source).not.toContain("The campaign can be direct");
  });

  test("localized catch-all page handles landing routes and metadata", () => {
    const source = readFileSync(localizedPagePath, "utf8");

    expect(source).toContain("LandingPageView");
    expect(source).toContain('case "landing"');
    expect(source).toContain('route?.kind === "landing"');
    expect(source).toContain("route.item.metaDescription");
  });
});
