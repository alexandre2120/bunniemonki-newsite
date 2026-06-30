"use client";

import { ArrowUpRight, Workflow } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  automationMapCopy,
  automationNiches,
  getActiveSystems,
  getFeaturedItems,
  getJourneyCounts,
  getJourneyMeta,
  getRecommendedJourneyIds,
  getSystemMeta,
  stageLabels,
  type AutomationMapItem,
  type AutomationNicheId,
} from "@/lib/automation-map";
import { analyticsClickAttributes } from "@/lib/analytics";
import type { SolutionId } from "@/lib/content";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type JourneyAutomationMapProps = {
  locale: Locale;
  initialNicheId?: AutomationNicheId;
  initialJourneyId?: SolutionId;
  compact?: boolean;
};

export function JourneyAutomationMap({
  locale,
  initialNicheId = "accounting",
  initialJourneyId,
  compact = false,
}: JourneyAutomationMapProps) {
  const copy = automationMapCopy[locale];
  const [selectedNicheId, setSelectedNicheId] = useState<AutomationNicheId>(initialNicheId);
  const recommendedJourneyIds = useMemo(
    () => getRecommendedJourneyIds(selectedNicheId),
    [selectedNicheId],
  );
  const primaryJourneyId = recommendedJourneyIds.includes(initialJourneyId ?? recommendedJourneyIds[0])
    ? initialJourneyId ?? recommendedJourneyIds[0]
    : recommendedJourneyIds[0];
  const primaryJourney = getJourneyMeta(primaryJourneyId);
  const featuredItems = useMemo(() => getFeaturedItems(selectedNicheId, compact ? 4 : 6), [compact, selectedNicheId]);
  const activeSystems = useMemo(() => getActiveSystems(featuredItems), [featuredItems]);
  const journeyCounts = useMemo(() => getJourneyCounts(selectedNicheId), [selectedNicheId]);
  const relatedJourneyIds = recommendedJourneyIds.filter((journeyId) => journeyId !== primaryJourneyId);
  const selectedNiche = automationNiches.find((niche) => niche.id === selectedNicheId) ?? automationNiches[0];
  const ctaHref = `${getLocalizedPath(locale, "scan")}?source=automation-map&nicho=${selectedNicheId}&jornada=${primaryJourneyId}`;
  const flowCountLabel =
    locale === "en" ? `${featuredItems.length} main flows` : `${featuredItems.length} fluxos principais`;

  return (
    <section
      className="border-t border-border bg-surface py-12 md:py-16"
      data-map-variant="guided-summary"
      data-selected-niche={selectedNicheId}
      data-primary-journey={primaryJourneyId}
      style={
        {
          "--journey-color": primaryJourney.color,
          "--journey-tint": primaryJourney.tint,
          "--journey-ink": primaryJourney.textOnColor,
        } as CSSProperties
      }
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase text-muted-foreground">
              {copy.eyebrow}
            </p>
            <h2 className="max-w-4xl font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
              {copy.body}
            </p>
          </div>
          <div className="border border-border bg-background p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase text-muted-foreground">
                  {locale === "en" ? "Selected niche" : "Nicho selecionado"}
                </p>
                <p className="mt-2 font-heading text-2xl font-semibold">{selectedNiche.title[locale]}</p>
              </div>
              <span className="shrink-0 border border-foreground px-2 py-1 font-mono text-[10px] uppercase">
                {locale === "en" ? "1 choice" : "1 escolha"}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{selectedNiche.description[locale]}</p>
          </div>
        </div>

        <p className="sr-only">{copy.textualMap}</p>

        <div
          className="mt-7 flex flex-wrap gap-2"
          aria-label={locale === "en" ? "Select niche" : "Selecionar nicho"}
        >
          {automationNiches.map((niche) => {
            const isSelected = niche.id === selectedNicheId;

            return (
              <button
                key={niche.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedNicheId(niche.id)}
                {...analyticsClickAttributes({
                  name: "map_niche_select",
                  location: "automation_map",
                  target: "niche_button",
                  locale,
                  pageKind: "solutions",
                  niche: niche.id,
                })}
                className={cn(
                  "min-h-11 border px-3.5 py-2 text-left font-heading text-base font-semibold transition duration-200 hover:border-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
                  isSelected
                    ? "border-foreground bg-background text-foreground shadow-[inset_0_-3px_0_var(--brand)]"
                    : "border-border bg-background/70 text-muted-foreground",
                )}
              >
                {niche.title[locale]}
              </button>
            );
          })}
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="border border-foreground bg-background p-5">
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center bg-[var(--journey-color)] text-[var(--journey-ink)]">
                <Workflow className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase text-muted-foreground">
                  {locale === "en" ? "Recommended starting point" : "Ponto de partida recomendado"}
                </p>
                <h3 className="mt-2 font-heading text-3xl font-semibold leading-tight">
                  {primaryJourney.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{primaryJourney.promise[locale]}</p>
              </div>
            </div>

            <div className="mt-5 border-y border-border py-4">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                {journeyCounts[primaryJourneyId]} {copy.automationsInNiche}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{primaryJourney.role[locale]}</p>
            </div>

            <div className="mt-5">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                {locale === "en" ? "Also connected" : "Também conectado"}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedJourneyIds.map((journeyId) => {
                  const journey = getJourneyMeta(journeyId);

                  return (
                    <span
                      key={journeyId}
                      className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-2 text-sm font-medium"
                    >
                      <span className="size-2.5" style={{ backgroundColor: journey.color }} aria-hidden="true" />
                      {journey.title[locale]}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-sm leading-6 text-muted-foreground">{copy.disclaimer}</p>
            </div>
          </aside>

          <div className="grid gap-5">
            <div className="border border-foreground bg-background p-5">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono text-xs uppercase text-muted-foreground">
                    {flowCountLabel}
                  </p>
                  <h3 className="mt-2 font-heading text-3xl font-semibold">
                    {locale === "en" ? "Flows to inspect first" : "Fluxos para observar primeiro"}
                  </h3>
                </div>
                <span className="h-1.5 w-full bg-[var(--journey-color)] sm:w-24" aria-hidden="true" />
              </div>

              <ol className="mt-4 divide-y divide-border">
                {featuredItems.map((item, index) => (
                  <FeaturedAutomationRow
                    key={item.id}
                    item={item}
                    index={index}
                    locale={locale}
                    primaryJourneyId={primaryJourneyId}
                  />
                ))}
              </ol>
            </div>

            <div className="border border-border bg-background p-4">
              <p className="font-mono text-xs uppercase text-muted-foreground">{copy.activeSystems}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeSystems.map((systemId) => (
                  <Badge
                    key={systemId}
                    variant="outline"
                    className="h-auto rounded-none border-[var(--journey-color)] bg-[var(--journey-tint)] px-2.5 py-1.5 text-xs"
                  >
                    {getSystemMeta(systemId).label[locale]}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedNicheId === "clinics" ? (
          <p className="mt-5 border-l-2 border-foreground/30 pl-4 text-sm leading-6 text-muted-foreground">
            {copy.clinicSafety}
          </p>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row">
          <Button asChild className="h-11 bg-brand px-5 text-brand-ink hover:bg-brand/85">
            <Link
              href={ctaHref}
              {...analyticsClickAttributes({
                name: "cta_click",
                location: "automation_map",
                target: "automation_scan",
                locale,
                pageKind: "solutions",
                journey: primaryJourneyId,
                niche: selectedNicheId,
                source: "automation-map",
              })}
            >
              {locale === "en" ? `Map ${primaryJourney.title[locale]}` : `Mapear ${primaryJourney.title[locale]}`}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-5">
            <Link
              href={getLocalizedPath(locale, "solutions")}
              {...analyticsClickAttributes({
                name: "navigation_click",
                location: "automation_map",
                target: "solutions_index",
                locale,
                pageKind: "solutions",
                journey: primaryJourneyId,
                niche: selectedNicheId,
              })}
            >
              {copy.exploreSolutions}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturedAutomationRow({
  item,
  index,
  locale,
  primaryJourneyId,
}: {
  item: AutomationMapItem;
  index: number;
  locale: Locale;
  primaryJourneyId: SolutionId;
}) {
  const isPrimary = item.journeyIds.includes(primaryJourneyId);

  return (
    <li className="grid gap-3 py-3 first:pt-0 last:pb-0 sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:items-start">
      <span
        className={cn(
          "flex size-8 items-center justify-center border font-mono text-xs",
          isPrimary
            ? "border-[var(--journey-color)] bg-[var(--journey-tint)] text-foreground"
            : "border-border text-muted-foreground",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <h4 className="font-heading text-lg font-semibold leading-tight">{item.title[locale]}</h4>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.outcome[locale]}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:justify-end">
        <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase text-muted-foreground">
          {stageLabels[item.stage][locale]}
        </span>
        <span
          className={cn(
            "border px-2 py-0.5 font-mono text-[10px] uppercase",
            isPrimary
              ? "border-foreground bg-[var(--journey-tint)] text-foreground"
              : "border-border text-muted-foreground",
          )}
        >
          {isPrimary
            ? locale === "en"
              ? "primary"
              : "principal"
            : locale === "en"
              ? "connected"
              : "conectado"}
        </span>
      </div>
    </li>
  );
}
