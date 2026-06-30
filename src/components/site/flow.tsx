import { ArrowRight, CheckCircle2, CircleDot, GitBranch, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { JourneyStage } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const stageTableCopy = {
  en: {
    label: "Journey stages",
    headers: ["Stage", "Owner", "Input", "Output", "Human gate", "Exception"],
  },
  pt: {
    label: "Etapas da jornada",
    headers: ["Etapa", "Responsável", "Entrada", "Saída", "Aprovação humana", "Exceção"],
  },
} satisfies Record<Locale, { label: string; headers: string[] }>;

const architectureCopy = {
  en: {
    label: "Governed AI implementation diagram",
    core: "Core",
    nodes: [
      { label: "Existing Tools & Data", icon: CircleDot },
      { label: "Mapped Process", icon: GitBranch },
      { label: "AI-Assisted Workflow", icon: ShieldCheck, active: true },
      { label: "Human Approval", icon: CheckCircle2 },
      { label: "Managed Run", icon: CircleDot },
    ],
    equivalent:
      "Text equivalent: existing tools and data are mapped into a process; AI assists the workflow; human approvals remain explicit; managed operations surface exceptions and improvements.",
  },
  pt: {
    label: "Diagrama de implantação de IA governada",
    core: "Núcleo",
    nodes: [
      { label: "Ferramentas & dados atuais", icon: CircleDot },
      { label: "Processo mapeado", icon: GitBranch },
      { label: "Workflow assistido por IA", icon: ShieldCheck, active: true },
      { label: "Aprovação humana", icon: CheckCircle2 },
      { label: "Operação gerida", icon: CircleDot },
    ],
    equivalent:
      "Equivalente textual: ferramentas e dados atuais são mapeados num processo; a IA assiste o workflow; aprovações humanas continuam explícitas; a operação gerida expõe exceções e melhorias.",
  },
} satisfies Record<
  Locale,
  {
    label: string;
    core: string;
    nodes: Array<{ label: string; icon: typeof CircleDot; active?: boolean }>;
    equivalent: string;
  }
>;

const handoffCopy = {
  en: {
    label: "Cross-functional handoff paths",
    handoff: "Handoff",
    teamCount: (count: number) => `${count} teams`,
  },
  pt: {
    label: "Percursos de handoff transversal",
    handoff: "Handoff",
    teamCount: (count: number) => `${count} equipas`,
  },
} satisfies Record<Locale, { label: string; handoff: string; teamCount: (count: number) => string }>;

export function ProcessLine({
  steps,
  locale = "en",
  ariaLabel,
}: {
  steps: string[];
  locale?: Locale;
  ariaLabel?: string;
}) {
  const label = ariaLabel ?? (locale === "en" ? "Process steps" : "Passos do processo");

  return (
    <ol
      aria-label={label}
      className="grid gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 9.5rem), 1fr))" }}
    >
      {steps.map((step, index) => (
        <li key={step} className="min-w-0 border border-border bg-background p-3">
          <div className="flex items-center gap-2">
            <span className="grid size-7 shrink-0 place-items-center rounded-sm bg-brand font-mono text-[11px] font-semibold text-brand-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            {index < steps.length - 1 ? (
              <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="size-4 text-muted-foreground" aria-hidden="true" />
            )}
          </div>
          <p className="mt-3 text-sm font-medium leading-5">{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function HandoffFlow({ paths, locale }: { paths: string[][]; locale: Locale }) {
  const copy = handoffCopy[locale];

  return (
    <div className="grid gap-3" aria-label={copy.label}>
      {paths.map((path, pathIndex) => (
        <Card key={path.join("-")} className="rounded-none border-border bg-background shadow-none">
          <CardContent className="grid gap-4 p-4 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex items-center gap-2">
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brand text-brand-ink">
                <GitBranch className="size-4" aria-hidden="true" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase text-muted-foreground">
                {copy.handoff} {String(pathIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <ol className="flex min-w-0 flex-wrap items-center gap-2" aria-label={path.join(" to ")}>
              {path.map((team, teamIndex) => (
                <li key={`${pathIndex}-${team}`} className="contents">
                  <Badge
                    variant="outline"
                    className="h-auto max-w-full rounded-md bg-surface px-3 py-2 text-left font-heading text-base font-semibold leading-5"
                  >
                    {team}
                  </Badge>
                  {teamIndex < path.length - 1 ? (
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ol>
            <Badge variant="secondary" className="w-fit rounded-md">
              {copy.teamCount(path.length)}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function StageTable({ stages, locale = "en" }: { stages: JourneyStage[]; locale?: Locale }) {
  const copy = stageTableCopy[locale];

  return (
    <div className="overflow-x-auto border border-border" role="region" aria-label={copy.label}>
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead className="bg-muted">
          <tr>
            {copy.headers.map((head) => (
              <th key={head} className="border-b border-border px-4 py-3 font-mono text-xs uppercase">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stages.map((stage) => (
            <tr key={stage.label} className="align-top">
              <th className="border-b border-border px-4 py-4 font-heading text-base">{stage.label}</th>
              <td className="border-b border-border px-4 py-4">{stage.owner}</td>
              <td className="border-b border-border px-4 py-4 text-muted-foreground">{stage.input}</td>
              <td className="border-b border-border px-4 py-4 text-muted-foreground">{stage.output}</td>
              <td className="border-b border-border px-4 py-4">{stage.gate}</td>
              <td className="border-b border-border px-4 py-4 text-muted-foreground">{stage.exception}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ArchitectureDiagram({ locale }: { locale: Locale }) {
  const copy = architectureCopy[locale];

  return (
    <div className="border border-foreground bg-background p-4 md:p-6" aria-label={copy.label}>
      <ol className="grid gap-3">
        {copy.nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <li key={node.label}>
              <div className="flex min-h-14 flex-1 items-center gap-3 border border-border bg-surface px-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="size-4" aria-hidden="true" />
                <span className="font-heading text-lg font-semibold">{node.label}</span>
                {node.active ? <Badge className="ml-auto bg-brand text-brand-ink">{copy.core}</Badge> : null}
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        {copy.equivalent}
      </p>
    </div>
  );
}
