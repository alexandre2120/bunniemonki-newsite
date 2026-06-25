import {
  blueprints,
  departments,
  getBlueprint,
  getDepartment,
  getInsight,
  getPolicy,
  getSolution,
  insights,
  policies,
  solutions,
  type Blueprint,
  type Department,
  type Insight,
  type Policy,
  type Solution,
} from "./content";
import { locales, type Locale } from "./i18n";

export type RouteParams = {
  locale: string;
  segments?: string[];
};

export type ResolvedRoute =
  | { kind: "home"; locale: Locale }
  | { kind: "solutions"; locale: Locale }
  | { kind: "solution"; locale: Locale; item: Solution }
  | { kind: "departments"; locale: Locale }
  | { kind: "department"; locale: Locale; item: Department }
  | { kind: "blueprints"; locale: Locale }
  | { kind: "blueprint"; locale: Locale; item: Blueprint }
  | { kind: "insights"; locale: Locale }
  | { kind: "insight"; locale: Locale; item: Insight }
  | { kind: "about"; locale: Locale }
  | { kind: "scan"; locale: Locale }
  | { kind: "policy"; locale: Locale; item: Policy }
  | { kind: "form-unavailable"; locale: Locale };

const segmentMap = {
  en: {
    solutions: "solutions",
    departments: "departments",
    blueprints: "blueprints",
    insights: "insights",
    about: "about",
    scan: "automation-scan",
    privacy: "privacy",
    terms: "terms",
    cookies: "cookies",
    accessibility: "accessibility",
    formUnavailable: "form-unavailable",
  },
  pt: {
    solutions: "solucoes",
    departments: "departamentos",
    blueprints: "blueprints",
    insights: "insights",
    about: "sobre",
    scan: "automation-scan",
    privacy: "privacidade",
    terms: "termos",
    cookies: "cookies",
    accessibility: "acessibilidade",
    formUnavailable: "formulario-indisponivel",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function resolveRoute(locale: Locale, segments: string[] = []): ResolvedRoute | null {
  const [section, slug] = segments;
  const map = segmentMap[locale];

  if (!section) return { kind: "home", locale };

  if (section === map.solutions) {
    if (!slug) return { kind: "solutions", locale };
    const item = getSolution(locale, slug);
    return item ? { kind: "solution", locale, item } : null;
  }

  if (section === map.departments) {
    if (!slug) return { kind: "departments", locale };
    const item = getDepartment(locale, slug);
    return item ? { kind: "department", locale, item } : null;
  }

  if (section === map.blueprints) {
    if (!slug) return { kind: "blueprints", locale };
    const item = getBlueprint(locale, slug);
    return item ? { kind: "blueprint", locale, item } : null;
  }

  if (section === map.insights) {
    if (!slug) return { kind: "insights", locale };
    const item = getInsight(locale, slug);
    return item ? { kind: "insight", locale, item } : null;
  }

  if (section === map.about) return { kind: "about", locale };
  if (section === map.scan) return { kind: "scan", locale };
  if (section === map.formUnavailable) return { kind: "form-unavailable", locale };

  const policyKey = (["privacy", "terms", "cookies", "accessibility"] as const).find(
    (key) => section === map[key],
  );

  if (policyKey) {
    const item = getPolicy(locale, policyKey);
    return item ? { kind: "policy", locale, item } : null;
  }

  return null;
}

export function getStaticRouteParams(): Array<{ locale: Locale; segments?: string[] }> {
  const params: Array<{ locale: Locale; segments?: string[] }> = [];

  for (const locale of locales) {
    const map = segmentMap[locale];
    params.push({ locale, segments: [] });
    params.push({ locale, segments: [map.solutions] });
    params.push({ locale, segments: [map.departments] });
    params.push({ locale, segments: [map.blueprints] });
    params.push({ locale, segments: [map.insights] });
    params.push({ locale, segments: [map.about] });
    params.push({ locale, segments: [map.scan] });
    params.push({ locale, segments: [map.formUnavailable] });

    for (const solution of solutions[locale]) {
      params.push({ locale, segments: [map.solutions, solution.slug] });
    }

    for (const department of departments[locale]) {
      params.push({ locale, segments: [map.departments, department.slug] });
    }

    for (const blueprint of blueprints[locale]) {
      params.push({ locale, segments: [map.blueprints, blueprint.slug] });
    }

    for (const insight of insights[locale]) {
      params.push({ locale, segments: [map.insights, insight.slug] });
    }

    for (const policy of policies[locale]) {
      params.push({ locale, segments: [map[policy.key]] });
    }
  }

  return params;
}
