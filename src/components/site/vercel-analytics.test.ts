import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const vercelAnalyticsPath = join(process.cwd(), "src/components/site/vercel-analytics.tsx");

describe("VercelAnalytics", () => {
  test("wraps the official client component with URL redaction", () => {
    const source = readFileSync(vercelAnalyticsPath, "utf8");

    expect(source).toContain('"use client"');
    expect(source).toContain('import { Analytics } from "@vercel/analytics/next"');
    expect(source).toContain("beforeSend");
    expect(source).toContain("redactAnalyticsEvent");
  });
});
