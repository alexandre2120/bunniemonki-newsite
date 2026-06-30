import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const rootLayoutPath = join(process.cwd(), "src/app/layout.tsx");

describe("RootLayout", () => {
  test("suppresses unavoidable body hydration warnings from browser extensions", () => {
    const source = readFileSync(rootLayoutPath, "utf8");

    expect(source).toContain("<body");
    expect(source).toContain("suppressHydrationWarning");
  });

  test("installs Vercel Analytics globally for all localized pages", () => {
    const source = readFileSync(rootLayoutPath, "utf8");

    expect(source).toContain('import { AnalyticsEvents } from "@/components/site/analytics-events"');
    expect(source).toContain('import { VercelAnalytics } from "@/components/site/vercel-analytics"');
    expect(source).toContain("<AnalyticsEvents />");
    expect(source).toContain("<VercelAnalytics />");
  });
});
