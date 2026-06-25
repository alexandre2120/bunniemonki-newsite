import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { relatedSolutions, type Department, type Insight, type Solution } from "@/lib/content";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

export function SolutionCard({ solution, locale }: { solution: Solution; locale: Locale }) {
  const copy =
    locale === "en"
      ? { problem: "Problem", outcome: "Outcome", explore: "Explore journey" }
      : { problem: "Problema", outcome: "Resultado", explore: "Explorar jornada" };

  return (
    <Card className="rounded-none border-border bg-surface shadow-none">
      <CardContent className="grid h-full gap-6 p-6">
        <div>
          <Badge variant="outline" className="h-auto max-w-full justify-start whitespace-normal rounded-none py-1 text-left font-mono leading-5">
            {solution.teams.join(" / ")}
          </Badge>
          <h3 className="mt-5 font-heading text-2xl font-semibold">{solution.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{solution.promise}</p>
        </div>
        <div className="grid gap-3 text-sm">
          <p>
            <span className="font-semibold">{copy.problem}:</span>{" "}
            <span className="text-muted-foreground">{solution.friction}</span>
          </p>
          <p>
            <span className="font-semibold">{copy.outcome}:</span>{" "}
            <span className="text-muted-foreground">{solution.outcome}</span>
          </p>
        </div>
        <ol className="flex flex-wrap gap-2">
          {solution.stages.map((stage) => (
            <li key={stage.label} className="border border-border px-2 py-1 font-mono text-xs">
              {stage.label}
            </li>
          ))}
        </ol>
        <Link
          href={getLocalizedPath(locale, "solution", solution.slug)}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          {copy.explore}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  );
}

export function DepartmentCard({ department, locale }: { department: Department; locale: Locale }) {
  const journeys = relatedSolutions(locale, department.solutionIds);

  return (
    <Link
      href={getLocalizedPath(locale, "department", department.slug)}
      className="group grid gap-4 border border-border bg-background p-5 transition-colors hover:bg-brand/15"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-xl font-semibold">{department.title}</h3>
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{department.mandate}</p>
      <div className="flex flex-wrap gap-2">
        {journeys.map((solution) => (
          <Badge key={solution.id} variant="outline" className="h-auto max-w-full whitespace-normal rounded-none py-1 text-left">
            {solution.title}
          </Badge>
        ))}
      </div>
    </Link>
  );
}

export function InsightCard({ insight, locale }: { insight: Insight; locale: Locale }) {
  return (
    <Link
      href={getLocalizedPath(locale, "insight", insight.slug)}
      className="grid gap-4 border-t border-border py-6 transition-colors hover:bg-muted/50 md:grid-cols-[180px_1fr_auto]"
    >
      <div>
        <Badge className="rounded-none bg-brand text-brand-ink">{insight.category}</Badge>
      </div>
      <div>
        <h3 className="font-heading text-2xl font-semibold">{insight.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{insight.deck}</p>
      </div>
      <p className="font-mono text-xs uppercase text-muted-foreground">{insight.readingTime}</p>
    </Link>
  );
}
