import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";

import { ArchitectureDiagram } from "./flow";

describe("ArchitectureDiagram", () => {
  test("does not render decorative right-side arrows that look clickable", () => {
    const markup = renderToStaticMarkup(<ArchitectureDiagram locale="pt" />);

    expect(markup).toContain("Diagrama de implantação de IA governada");
    expect(markup).toContain("Workflow assistido por IA");
    expect(markup).not.toContain("lucide-arrow-right");
    expect(markup).not.toContain("<button");
    expect(markup).not.toContain("<a ");
  });
});
