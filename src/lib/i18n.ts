export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export type RouteKey =
  | "home"
  | "solutions"
  | "solution"
  | "departments"
  | "department"
  | "blueprints"
  | "blueprint"
  | "insights"
  | "insight"
  | "about"
  | "scan"
  | "privacy"
  | "terms"
  | "cookies"
  | "accessibility";

const routeSegments: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: "",
    solutions: "solutions",
    solution: "solutions",
    departments: "departments",
    department: "departments",
    blueprints: "blueprints",
    blueprint: "blueprints",
    insights: "insights",
    insight: "insights",
    about: "about",
    scan: "automation-scan",
    privacy: "privacy",
    terms: "terms",
    cookies: "cookies",
    accessibility: "accessibility",
  },
  pt: {
    home: "",
    solutions: "solucoes",
    solution: "solucoes",
    departments: "departamentos",
    department: "departamentos",
    blueprints: "blueprints",
    blueprint: "blueprints",
    insights: "insights",
    insight: "insights",
    about: "sobre",
    scan: "automation-scan",
    privacy: "privacidade",
    terms: "termos",
    cookies: "cookies",
    accessibility: "acessibilidade",
  },
};

const indexRouteBySegment: Record<Locale, Record<string, RouteKey>> = {
  en: {
    solutions: "solutions",
    departments: "departments",
    blueprints: "blueprints",
    insights: "insights",
    about: "about",
    "automation-scan": "scan",
    privacy: "privacy",
    terms: "terms",
    cookies: "cookies",
    accessibility: "accessibility",
  },
  pt: {
    solucoes: "solutions",
    departamentos: "departments",
    blueprints: "blueprints",
    insights: "insights",
    sobre: "about",
    "automation-scan": "scan",
    privacidade: "privacy",
    termos: "terms",
    cookies: "cookies",
    acessibilidade: "accessibility",
  },
};

const detailRouteBySegment: Record<Locale, Record<string, RouteKey>> = {
  en: {
    solutions: "solution",
    departments: "department",
    blueprints: "blueprint",
    insights: "insight",
  },
  pt: {
    solucoes: "solution",
    departamentos: "department",
    blueprints: "blueprint",
    insights: "insight",
  },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocalizedPath(locale: Locale, route: RouteKey, slug?: string) {
  const segment = routeSegments[locale][route];
  const base = segment ? `/${locale}/${segment}` : `/${locale}`;

  if (slug && ["solution", "department", "blueprint", "insight"].includes(route)) {
    return `${base}/${slug}`;
  }

  return base;
}

export function isLocalizedRoute(pathname: string) {
  const [, maybeLocale] = pathname.split("/");
  return Boolean(maybeLocale && hasLocale(maybeLocale));
}

export function getAlternateLocalePath(path: string) {
  const url = new URL(path, "https://bunniemonki.local");
  const parts = url.pathname.split("/").filter(Boolean);
  const [locale, firstSegment, slug] = parts;

  if (!hasLocale(locale)) {
    return getLocalizedPath("en", "home");
  }

  const nextLocale: Locale = locale === "en" ? "pt" : "en";
  let nextPath = getLocalizedPath(nextLocale, "home");

  if (firstSegment) {
    const route =
      slug && detailRouteBySegment[locale][firstSegment]
        ? detailRouteBySegment[locale][firstSegment]
        : indexRouteBySegment[locale][firstSegment];

    nextPath = route ? getLocalizedPath(nextLocale, route, slug) : nextPath;
  }

  return `${nextPath}${url.search}${url.hash}`;
}
