import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  AboutView,
  BlueprintDetailView,
  BlueprintsIndexView,
  DepartmentDetailView,
  DepartmentsIndexView,
  FormUnavailableView,
  HomeView,
  InsightDetailView,
  InsightsIndexView,
  LandingPageView,
  PolicyView,
  ScanView,
  SolutionDetailView,
  SolutionsIndexView,
} from "@/components/site/page-views";
import { siteCopy } from "@/lib/content";
import { getAlternateLocalePath, hasLocale } from "@/lib/i18n";
import { getStaticRouteParams, resolveRoute, type RouteParams } from "@/lib/routes";

export function generateStaticParams() {
  return getStaticRouteParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { locale, segments } = await params;

  if (!hasLocale(locale)) {
    return {};
  }

  const route = resolveRoute(locale, segments);
  const copy = siteCopy[locale];
  const pathname = `/${locale}${segments?.length ? `/${segments.join("/")}` : ""}`;
  const alternate = getAlternateLocalePath(pathname);
  const title =
    route?.kind === "home"
      ? `Bunniemonki | ${copy.category}`
      : route?.kind === "solution" ||
          route?.kind === "department" ||
          route?.kind === "blueprint" ||
          route?.kind === "insight" ||
          route?.kind === "landing" ||
          route?.kind === "policy"
        ? `${route.item.title} | Bunniemonki`
        : route
          ? `${titleForKind(route.kind, locale)} | Bunniemonki`
          : `Bunniemonki | ${copy.category}`;

  const description = route ? descriptionForRoute(route, copy.home.body) : copy.home.body;

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: {
        [locale]: pathname,
        [locale === "en" ? "pt" : "en"]: alternate,
        "x-default": "/en",
      },
    },
    openGraph: {
      title,
      description,
      siteName: "Bunniemonki",
      locale,
      type: "website",
    },
  };
}

export default async function LocalizedPage({ params }: { params: Promise<RouteParams> }) {
  const { locale, segments } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const route = resolveRoute(locale, segments);

  if (!route) {
    notFound();
  }

  switch (route.kind) {
    case "home":
      return <HomeView locale={locale} />;
    case "solutions":
      return <SolutionsIndexView locale={locale} />;
    case "solution":
      return <SolutionDetailView locale={locale} solution={route.item} />;
    case "departments":
      return <DepartmentsIndexView locale={locale} />;
    case "department":
      return <DepartmentDetailView locale={locale} department={route.item} />;
    case "blueprints":
      return <BlueprintsIndexView locale={locale} />;
    case "blueprint":
      return <BlueprintDetailView locale={locale} blueprint={route.item} />;
    case "insights":
      return <InsightsIndexView locale={locale} />;
    case "insight":
      return <InsightDetailView locale={locale} insight={route.item} />;
    case "landing":
      return <LandingPageView locale={locale} landingPage={route.item} />;
    case "about":
      return <AboutView locale={locale} />;
    case "scan":
      return <ScanView locale={locale} />;
    case "policy":
      return <PolicyView locale={locale} policy={route.item} />;
    case "form-unavailable":
      return <FormUnavailableView locale={locale} />;
  }
}

function titleForKind(kind: string, locale: "en" | "pt") {
  const copy = siteCopy[locale];
  const titles: Record<string, string> = {
    solutions: copy.nav.solutions,
    departments: copy.nav.departments,
    blueprints: copy.nav.blueprints,
    insights: copy.nav.insights,
    about: copy.nav.about,
    scan: "Automation Scan",
    "form-unavailable": copy.scan.unavailableTitle,
  };

  return titles[kind] ?? "Bunniemonki";
}

function descriptionForRoute(
  route: NonNullable<ReturnType<typeof resolveRoute>>,
  fallback: string,
) {
  switch (route.kind) {
    case "solution":
      return route.item.promise;
    case "department":
      return route.item.outcome;
    case "blueprint":
      return route.item.scenario;
    case "insight":
      return route.item.deck;
    case "landing":
      return route.item.metaDescription;
    case "policy":
      return route.item.summary;
    default:
      return fallback;
  }
}
