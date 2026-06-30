import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";

import { JourneyAutomationMap } from "./journey-automation-map";

describe("JourneyAutomationMap", () => {
  test("renders a simplified localized map with one primary interaction and CTA context", () => {
    const html = renderToStaticMarkup(<JourneyAutomationMap locale="pt" />);

    expect(html).toContain("Mapa vivo de automações");
    expect(html).toContain('aria-label="Selecionar nicho"');
    expect(html).toContain('data-selected-niche="accounting"');
    expect(html).toContain('data-primary-journey="customer-operations"');
    expect(html).toContain('data-map-variant="guided-summary"');
    expect(html).toContain("Ponto de partida recomendado");
    expect(html).toContain("Também conectado");
    expect(html).toContain("6 fluxos principais");
    expect(html).not.toContain('role="tablist"');
    expect(html).not.toContain('aria-label="Selecionar jornada"');
    expect(html).toContain(
      "/pt/automation-scan?source=automation-map&amp;nicho=accounting&amp;jornada=customer-operations",
    );
  });
});
