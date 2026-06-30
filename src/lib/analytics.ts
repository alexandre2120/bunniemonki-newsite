import type { BeforeSendEvent } from "@vercel/analytics";

type AnalyticsValue = string | number | boolean | null | undefined;

export type AnalyticsProperties = Record<string, AnalyticsValue>;

export type AnalyticsClickInput = {
  name: string;
  location: string;
  target: string;
  locale?: string;
  pageKind?: string;
  itemId?: string;
  itemSlug?: string;
  journey?: string;
  niche?: string;
  source?: string;
  step?: string | number;
};

const allowedPropertyKeys = new Set([
  "currentPath",
  "destinationPath",
  "eventType",
  "itemId",
  "itemSlug",
  "journey",
  "locale",
  "location",
  "marketingConsent",
  "niche",
  "pageDepth",
  "pageKind",
  "source",
  "step",
  "target",
  "utmCampaign",
  "utmMedium",
  "utmSource",
]);

const blockedPropertyKeyPattern =
  /address|company|context|email|first|free|invoice|last|message|name|notes|order|phone|token|tool|url|user/i;

export function analyticsClickAttributes(input: AnalyticsClickInput) {
  const attrs: Record<string, string> = {
    "data-analytics-event": input.name,
    "data-analytics-location": input.location,
    "data-analytics-target": input.target,
  };

  if (input.locale) attrs["data-analytics-locale"] = input.locale;
  if (input.pageKind) attrs["data-analytics-page-kind"] = input.pageKind;
  if (input.itemId) attrs["data-analytics-item-id"] = input.itemId;
  if (input.itemSlug) attrs["data-analytics-item-slug"] = input.itemSlug;
  if (input.journey) attrs["data-analytics-journey"] = input.journey;
  if (input.niche) attrs["data-analytics-niche"] = input.niche;
  if (input.source) attrs["data-analytics-source"] = input.source;
  if (input.step) attrs["data-analytics-step"] = String(input.step);

  return attrs;
}

export function safeAnalyticsProperties(properties: AnalyticsProperties) {
  const safe: Record<string, string | number | boolean | null> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (!allowedPropertyKeys.has(key) || blockedPropertyKeyPattern.test(key)) {
      continue;
    }

    const normalized = normalizeAnalyticsValue(value);
    if (normalized !== undefined) {
      safe[key] = normalized;
    }
  }

  return safe;
}

export function classifyAnalyticsPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const [locale, first, second] = segments;
  const pageKind = first ? pageKindFromSegment(first) : "home";

  return safeAnalyticsProperties({
    currentPath: sanitizePath(pathname),
    itemSlug: second,
    locale,
    pageDepth: segments.length,
    pageKind,
  });
}

export function analyticsPropertiesFromElement(element: HTMLElement, currentPath: string) {
  const link = element.closest("a");
  const destinationPath = link instanceof HTMLAnchorElement ? destinationPathFromHref(link.href) : undefined;

  return safeAnalyticsProperties({
    currentPath: sanitizePath(currentPath),
    destinationPath,
    itemId: element.dataset.analyticsItemId,
    itemSlug: element.dataset.analyticsItemSlug,
    journey: element.dataset.analyticsJourney,
    locale: element.dataset.analyticsLocale,
    location: element.dataset.analyticsLocation,
    niche: element.dataset.analyticsNiche,
    pageKind: element.dataset.analyticsPageKind,
    source: element.dataset.analyticsSource,
    step: element.dataset.analyticsStep,
    target: element.dataset.analyticsTarget,
  });
}

export function redactAnalyticsEvent(event: BeforeSendEvent) {
  return {
    ...event,
    url: redactUrl(event.url),
  };
}

export function extractSafeSearchProperties(search: string) {
  const params = new URLSearchParams(search);

  return safeAnalyticsProperties({
    journey: params.get("jornada") ?? params.get("journey"),
    niche: params.get("nicho") ?? params.get("niche"),
    source: params.get("source"),
    utmCampaign: params.get("utm_campaign"),
    utmMedium: params.get("utm_medium"),
    utmSource: params.get("utm_source"),
  });
}

function normalizeAnalyticsValue(value: AnalyticsValue) {
  if (value === undefined) return undefined;
  if (value === null || typeof value === "boolean" || typeof value === "number") {
    return value;
  }

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  return trimmed.length > 255 ? trimmed.slice(0, 255) : trimmed;
}

function pageKindFromSegment(segment?: string) {
  if (!segment) return "home";
  if (segment === "landing") return "landing";
  if (segment === "automation-scan") return "scan";
  if (segment === "automation-scan-unavailable") return "form-unavailable";
  return segment;
}

function sanitizePath(pathname: string) {
  const path = pathname.split("?")[0]?.split("#")[0] ?? "/";
  return path.length > 255 ? path.slice(0, 255) : path;
}

function destinationPathFromHref(href: string) {
  try {
    return sanitizePath(new URL(href).pathname);
  } catch {
    return undefined;
  }
}

function redactUrl(url: string) {
  try {
    const parsed = new URL(url);
    const safeParams = new URLSearchParams();

    for (const key of ["source", "nicho", "jornada", "utm_campaign", "utm_medium", "utm_source"]) {
      const value = parsed.searchParams.get(key);
      if (value) {
        safeParams.set(key, value);
      }
    }

    parsed.search = safeParams.toString();
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return url.split("?")[0]?.split("#")[0] ?? url;
  }
}
