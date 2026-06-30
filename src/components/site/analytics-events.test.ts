import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const analyticsEventsPath = join(process.cwd(), "src/components/site/analytics-events.tsx");

describe("AnalyticsEvents", () => {
  test("delegates safe click tracking from annotated CTAs", () => {
    const source = readFileSync(analyticsEventsPath, "utf8");

    expect(source).toContain('"use client"');
    expect(source).toContain('import { track } from "@vercel/analytics"');
    expect(source).toContain('closest("[data-analytics-event]")');
    expect(source).toContain('document.addEventListener("click"');
    expect(source).toContain("safeAnalyticsProperties");
    expect(source).not.toContain("textContent");
    expect(source).not.toContain("innerText");
  });
});
