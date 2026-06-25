import { describe, expect, test } from "vitest";

import { getScanFormCopy } from "./scan-copy";

describe("Automation Scan localized form copy", () => {
  test("uses Portuguese labels and options on the Portuguese route", () => {
    const copy = getScanFormCopy("pt");

    expect(copy.stepOne.title).toBe("Você e a empresa");
    expect(copy.fields.firstName).toBe("Nome");
    expect(copy.fields.lastName).toBe("Apelido");
    expect(copy.fields.email).toBe("Email profissional");
    expect(copy.fields.company).toBe("Empresa");
    expect(copy.fields.role).toBe("Função/cargo");
    expect(copy.fields.companyUrl).toBe("Website ou LinkedIn");
    expect(copy.fields.market).toBe("País / mercado");
    expect(copy.fields.companySize).toBe("Tamanho da empresa");
    expect(copy.selectPlaceholder).toBe("Selecionar");
    expect(copy.journeys.at(-1)?.[1]).toBe("Transversal / Não sei");
    expect(copy.signals[0][1]).toBe("Dados duplicados");
    expect(copy.timing[0][1]).toBe("Nos próximos 30 dias");
    expect(copy.decisionContext[0][1]).toBe("Decisor");
  });

  test("keeps English labels on the English route", () => {
    const copy = getScanFormCopy("en");

    expect(copy.fields.firstName).toBe("First name");
    expect(copy.selectPlaceholder).toBe("Select");
    expect(copy.journeys.at(-1)?.[1]).toBe("Cross-functional / Not sure");
  });
});
