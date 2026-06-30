import { describe, expect, test } from "vitest";

import {
  analyticsClickAttributes,
  redactAnalyticsEvent,
  safeAnalyticsProperties,
} from "./analytics";

describe("analytics helpers", () => {
  test("builds stable CTA data attributes for delegated click tracking", () => {
    expect(
      analyticsClickAttributes({
        name: "cta_click",
        location: "landing_hero",
        target: "automation_scan",
        locale: "pt",
        pageKind: "landing",
        itemId: "accounting-tax-consulting",
      }),
    ).toEqual({
      "data-analytics-event": "cta_click",
      "data-analytics-location": "landing_hero",
      "data-analytics-target": "automation_scan",
      "data-analytics-locale": "pt",
      "data-analytics-page-kind": "landing",
      "data-analytics-item-id": "accounting-tax-consulting",
    });
  });

  test("keeps analytics properties useful without leaking form PII or free text", () => {
    expect(
      safeAnalyticsProperties({
        locale: "en",
        step: 3,
        marketingConsent: true,
        firstName: "Alex",
        email: "alex@example.com",
        company: "Private Company",
        companyUrl: "https://example.com",
        additionalContext: "Sensitive open text",
        toolNames: "Internal stack names",
      }),
    ).toEqual({
      locale: "en",
      step: 3,
      marketingConsent: true,
    });
  });

  test("redacts sensitive URL parameters while keeping safe campaign context", () => {
    expect(
      redactAnalyticsEvent({
        type: "pageview",
        url: "https://bunniemonki.com/pt/automation-scan?source=ad&utm_campaign=q1&email=alex@example.com&token=secret#details",
      }).url,
    ).toBe("https://bunniemonki.com/pt/automation-scan?source=ad&utm_campaign=q1");
  });
});
