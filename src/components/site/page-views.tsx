import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  CircleDot,
  LockKeyhole,
  Mail,
  MessageSquare,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ArchitectureDiagram, HandoffFlow, ProcessLine, StageTable } from "@/components/site/flow";
import { JourneyAutomationMap } from "@/components/site/journey-automation-map";
import { DepartmentCard, InsightCard, SolutionCard } from "@/components/site/entity-cards";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow, PageBand, SectionIntro } from "@/components/site/section";
import { ScanForm } from "@/components/site/scan-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { analyticsClickAttributes } from "@/lib/analytics";
import {
  blueprints,
  departments,
  insights,
  legalEntity,
  relatedDepartments,
  relatedSolutions,
  siteCopy,
  solutions,
  type Blueprint,
  type Department,
  type Insight,
  type LandingPage,
  type Policy,
  type Solution,
} from "@/lib/content";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

export function HomeView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const featuredBlueprint = blueprints[locale][0];
  const primarySolution = solutions[locale][0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:py-20">
          <Reveal>
            <Eyebrow>{copy.home.eyebrow}</Eyebrow>
            <h1 className="max-w-5xl font-heading text-5xl font-semibold leading-[0.98] text-foreground md:text-7xl lg:text-8xl">
              {copy.home.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              {copy.home.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 bg-brand px-5 text-brand-ink hover:bg-brand/85">
                <Link
                  href={getLocalizedPath(locale, "scan")}
                  {...analyticsClickAttributes({
                    name: "cta_click",
                    location: "home_hero",
                    target: "automation_scan",
                    locale,
                    pageKind: "home",
                  })}
                >
                  {copy.cta.scan}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 px-5">
                <Link
                  href={primarySolution ? getLocalizedPath(locale, "solution", primarySolution.slug) : getLocalizedPath(locale, "solutions")}
                  {...analyticsClickAttributes({
                    name: "cta_click",
                    location: "home_hero",
                    target: "primary_solution",
                    locale,
                    pageKind: "home",
                  })}
                >
                  {locale === "en" ? "View primary solution" : "Ver solução principal"}
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ArchitectureDiagram locale={locale} />
          </Reveal>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
          <div className="h-px w-full bg-foreground" />
        </div>
      </section>

      {primarySolution ? <PrimarySolutionHighlight locale={locale} solution={primarySolution} /> : null}

      <PageBand>
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro title={copy.home.problemHeading} body={copy.home.problemClose} />
          <div className="grid gap-3">
            {[
              locale === "en" ? "Teams re-enter the same data." : "Equipas reintroduzem os mesmos dados.",
              locale === "en" ? "Approvals disappear across email, spreadsheets and messaging." : "Aprovações perdem-se entre email, folhas de cálculo e mensagens.",
              locale === "en" ? "Systems store information but do not coordinate work." : "Sistemas guardam informação, mas não coordenam trabalho.",
              locale === "en" ? "Automations fail silently or have no owner." : "Automações falham em silêncio ou sem dono.",
              locale === "en" ? "AI experiments sit outside real operations." : "Experiências de IA ficam fora da operação real.",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="flex gap-4 border-t border-border py-4">
                  <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-lg leading-7">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </PageBand>

      <PageBand id="journeys" className="bg-surface">
        <SectionIntro title={copy.home.journeysHeading} body={copy.home.journeysBody} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {solutions[locale].map((solution, index) => (
            <Reveal key={solution.id} delay={index * 0.04}>
              <SolutionCard solution={solution} locale={locale} />
            </Reveal>
          ))}
        </div>
      </PageBand>

      {featuredBlueprint ? <FeaturedBlueprint locale={locale} blueprint={featuredBlueprint} /> : null}

      <PageBand>
        <SectionIntro
          eyebrow={locale === "en" ? "How Bunniemonki works" : "Como a Bunniemonki trabalha"}
          title={copy.home.methodHeading}
        />
        <div className="mt-10">
          <ProcessLine
            locale={locale}
            steps={
              locale === "en"
                ? ["Scan", "Diagnose", "Design", "Build", "Run"]
                : ["Scan", "Diagnosticar", "Desenhar", "Construir", "Operar"]
            }
          />
        </div>
      </PageBand>

      <PageBand className="bg-ink text-white">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro
            eyebrow={locale === "en" ? "Managed Automation" : "Automação Gerida"}
            title={copy.home.managedHeading}
            body={copy.home.managedBody}
            className="[&_h2]:text-white [&_p]:text-white/70"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              locale === "en" ? "Monitored workflows" : "Workflows monitorizados",
              locale === "en" ? "Credential discipline" : "Disciplina de credenciais",
              locale === "en" ? "Logs, alerts and retries" : "Logs, alertas e retries",
              locale === "en" ? "Controlled change" : "Mudança controlada",
            ].map((item) => (
              <div key={item} className="border border-white/20 p-5">
                <ShieldCheck className="mb-5 size-5 text-brand" aria-hidden="true" />
                <h3 className="font-heading text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </PageBand>

      <PageBand>
        <SectionIntro title={copy.home.departmentsHeading} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {departments[locale].map((department) => (
            <DepartmentCard key={department.id} department={department} locale={locale} />
          ))}
        </div>
      </PageBand>

      <PageBand className="bg-surface">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro title={copy.home.insightsHeading} />
          <Button asChild variant="outline">
            <Link
              href={getLocalizedPath(locale, "insights")}
              {...analyticsClickAttributes({
                name: "navigation_click",
                location: "home_insights",
                target: "insights_index",
                locale,
                pageKind: "home",
              })}
            >
              {locale === "en" ? "All insights" : "Todos os insights"}
            </Link>
          </Button>
        </div>
        <div className="mt-10">
          {insights[locale].slice(0, 3).map((insight) => (
            <InsightCard key={insight.id} insight={insight} locale={locale} />
          ))}
        </div>
      </PageBand>

      <FinalCta locale={locale} title={copy.home.finalHeading} body={copy.home.finalBody} />
    </>
  );
}

export function SolutionsIndexView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const primarySolution = solutions[locale][0];
  return (
    <>
      <IndexHero
        locale={locale}
        eyebrow={copy.nav.solutions}
        title={copy.index.solutionsTitle}
        body={copy.index.solutionsBody}
      />
      {primarySolution ? <PrimarySolutionHighlight locale={locale} solution={primarySolution} /> : null}
      <JourneyAutomationMap locale={locale} />
      <PageBand className="bg-surface">
        <div className="grid gap-5 md:grid-cols-2">
          {solutions[locale].map((solution) => (
            <SolutionCard key={solution.id} solution={solution} locale={locale} />
          ))}
        </div>
      </PageBand>
      <PageBand>
        <SectionIntro
          eyebrow={locale === "en" ? "How to choose" : "Como escolher"}
          title={locale === "en" ? "Find the delay no single team owns." : "Encontre o atraso que nenhuma equipa possui sozinha."}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            locale === "en" ? "Where is revenue or service delayed by a handoff?" : "Onde a receita ou serviço atrasa por causa de um handoff?",
            locale === "en" ? "Which data is copied, chased or reconciled repeatedly?" : "Que dados são copiados, perseguidos ou reconciliados repetidamente?",
            locale === "en" ? "Which failure has no clear operational owner?" : "Que falha não tem dono operacional claro?",
          ].map((prompt) => (
            <Card key={prompt} className="rounded-none shadow-none">
              <CardContent className="p-5 text-lg leading-7">{prompt}</CardContent>
            </Card>
          ))}
        </div>
      </PageBand>
      <FinalCta locale={locale} title={locale === "en" ? "Map the journey before automating it." : "Mapeie a jornada antes de a automatizar."} />
    </>
  );
}

export function LandingPageView({
  locale,
  landingPage,
}: {
  locale: Locale;
  landingPage: LandingPage;
}) {
  const copy = siteCopy[locale];
  const primarySolution = relatedSolutions(locale, [landingPage.solutionId])[0];
  const sourceLabels = {
    cockpit: "Operational signal cockpit",
    breaks: "Where work breaks",
    blueprint: "Reference blueprint",
    automation: "Human-governed automation",
  };
  const pitchRule = "No pitch view renders more than three bullets per block";
  const visiblePainPoints = landingPage.painPoints.slice(0, 3);
  const visibleJourney = landingPage.journey.slice(0, 3);
  const visibleModules = landingPage.modules.slice(0, 3);
  const visibleProof = landingPage.proof.slice(0, 3);
  const visibleGuardrails = landingPage.guardrails.slice(0, 2);
  const labels =
    locale === "en"
      ? {
          proof: "Why it is safe",
          modules: "What gets automated first",
          final: "Automation Scan",
          cockpit: sourceLabels.cockpit,
          breaks: sourceLabels.breaks,
          automation: sourceLabels.automation,
          cockpitSignals: [
            { label: "INTAKE", icon: MessageSquare },
            { label: "TRIAGE", icon: Activity },
            { label: "HUMAN GATE", icon: ShieldCheck },
          ],
          blueprintLine:
            "A reference blueprint is prepared before implementation, so scope, human gates and first workflows are clear.",
        }
      : {
          proof: "Porque é seguro",
          modules: "O que automatizamos primeiro",
          final: "Automation Scan",
          cockpit: "Painel de sinais operacionais",
          breaks: "Onde o trabalho quebra",
          automation: "Automação governada por humanos",
          cockpitSignals: [
            { label: "ENTRADA", icon: MessageSquare },
            { label: "TRIAGEM", icon: Activity },
            { label: "GATE HUMANO", icon: ShieldCheck },
          ],
          blueprintLine:
            "Preparamos um blueprint de referência antes da implementação, com escopo, gates humanos e primeiros workflows claros.",
        };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white" data-rule={pitchRule}>
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.11) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 bg-brand/20 blur-3xl" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-5 py-12 md:px-8 md:py-16 xl:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <Eyebrow className="text-brand">{landingPage.eyebrow}</Eyebrow>
            <p className="mb-4 max-w-2xl font-mono text-xs uppercase tracking-[0.2em] text-white/55">
              {landingPage.audience}
            </p>
            <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[0.96] text-white sm:text-5xl md:text-6xl">
              {landingPage.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              {landingPage.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 bg-brand px-5 text-brand-ink hover:bg-brand/85">
                <Link
                  href={getLocalizedPath(locale, "scan")}
                  {...analyticsClickAttributes({
                    name: "cta_click",
                    location: "landing_hero",
                    target: "automation_scan",
                    locale,
                    pageKind: "landing",
                    itemId: landingPage.id,
                    itemSlug: landingPage.slug,
                  })}
                >
                  {landingPage.cta}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-white/30 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link
                  href="#blueprint"
                  {...analyticsClickAttributes({
                    name: "cta_click",
                    location: "landing_hero",
                    target: "reference_blueprint",
                    locale,
                    pageKind: "landing",
                    itemId: landingPage.id,
                    itemSlug: landingPage.slug,
                  })}
                >
                  {landingPage.secondaryCta}
                </Link>
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {landingPage.trust.map((item) => (
                <div key={item} className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white/75">
                  <CheckCircle2 className="size-4 text-brand" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              aria-label={labels.cockpit}
              data-section={sourceLabels.cockpit}
              className="relative overflow-hidden border border-white/18 bg-black/35 p-4 shadow-2xl shadow-black/40 backdrop-blur md:p-5"
            >
              <div className="mb-5 flex flex-col justify-between gap-3 border-b border-white/15 pb-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand">
                    {labels.cockpit}
                  </p>
                  <h2 className="mt-2 max-w-sm font-heading text-2xl font-semibold text-white">
                    {landingPage.title}
                  </h2>
                </div>
                <Badge className="w-fit rounded-none bg-brand text-brand-ink hover:bg-brand">
                  {copy.cta.scanShort}
                </Badge>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {labels.cockpitSignals.map(({ label, icon: Icon }) => (
                  <div key={label} className="border border-white/14 bg-white/[0.04] p-3">
                    <Icon className="mb-4 size-5 text-brand" aria-hidden="true" />
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/50">
                      {label}
                    </p>
                    <div className="mt-3 h-1.5 bg-white/10">
                      <div className="h-full w-3/4 bg-brand" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-2">
                {visibleJourney.map((step, index) => (
                  <div
                    key={step}
                    className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border border-white/12 bg-white/[0.03] p-3"
                  >
                    <span className="grid size-8 place-items-center bg-white/10 font-mono text-xs text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-white/82">{step}</span>
                    <span className="size-2 animate-pulse rounded-full bg-brand" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageBand className="py-12 md:py-16">
        <div data-section={sourceLabels.breaks} className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionIntro
            eyebrow={labels.breaks}
            title={landingPage.painTitle}
            body={locale === "en" ? "The first screen should already make the problem obvious." : "O primeiro ecrã deve tornar o problema óbvio sem esforço."}
          />
          <div className="grid gap-3 md:grid-cols-3">
            {visiblePainPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="h-full border border-border p-5">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-base font-medium leading-7">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </PageBand>

      <PageBand className="bg-surface py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionIntro eyebrow={labels.modules} title={landingPage.modulesTitle} />
          <div className="grid gap-4 md:grid-cols-3">
            {visibleModules.map((module, index) => (
              <div key={module.title} className="border border-border bg-background p-5">
                <Workflow className="mb-6 size-5 text-brand-ink" aria-hidden="true" />
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-semibold leading-tight">{module.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{module.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageBand>

      {primarySolution ? <PrimarySolutionHighlight locale={locale} solution={primarySolution} /> : null}

      <PageBand id="blueprint" className="bg-ink py-12 text-white md:py-16">
        <div data-section={sourceLabels.blueprint} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow className="text-brand">{landingPage.blueprint.label}</Eyebrow>
            <h2 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-white md:text-5xl">
              {landingPage.blueprint.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {labels.blueprintLine}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-white/15 bg-white/[0.03] p-5">
              <h3 className="font-heading text-2xl font-semibold text-white">{labels.proof}</h3>
              <ul className="mt-5 grid gap-3">
                {visibleProof.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-section={sourceLabels.automation} className="border border-white/15 bg-white/[0.03] p-5">
              <h3 className="font-heading text-2xl font-semibold text-white">{labels.automation}</h3>
              <ul className="grid gap-3">
                {visibleGuardrails.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageBand>

      <PageBand className="bg-brand py-12 text-brand-ink md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow className="text-brand-ink/70">{labels.final}</Eyebrow>
            <h2 className="max-w-4xl font-heading text-4xl font-semibold leading-tight md:text-6xl">
              {landingPage.finalCta}
            </h2>
          </div>
          <Button asChild className="h-12 bg-foreground px-5 text-background hover:bg-foreground/85">
            <Link
              href={getLocalizedPath(locale, "scan")}
              {...analyticsClickAttributes({
                name: "cta_click",
                location: "landing_final",
                target: "automation_scan",
                locale,
                pageKind: "landing",
                itemId: landingPage.id,
                itemSlug: landingPage.slug,
              })}
            >
              {landingPage.cta}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageBand>
    </>
  );
}

export function SolutionDetailView({ locale, solution }: { locale: Locale; solution: Solution }) {
  const departmentsList = relatedDepartments(locale, solution.departmentIds);
  return (
    <>
      <DetailHero
        locale={locale}
        eyebrow={locale === "en" ? "Solution" : "Solução"}
        title={solution.title}
        body={solution.promise}
        chips={solution.teams}
      />
      <PageBand>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            title={locale === "en" ? "Current-state recognition" : "Reconhecimento do estado atual"}
            body={solution.friction}
          />
          <TwoColumnList
            leftTitle={locale === "en" ? "Likely a fit when" : "Provável alinhamento quando"}
            left={solution.fit}
            rightTitle={locale === "en" ? "Not the right starting point when" : "Não é o melhor ponto de partida quando"}
            right={solution.notFit}
          />
        </div>
      </PageBand>
      <PageBand className="bg-surface">
        <SectionIntro title={locale === "en" ? "Target journey" : "Jornada alvo"} />
        <div className="mt-8">
          <StageTable stages={solution.stages} locale={locale} />
        </div>
      </PageBand>
      <PageBand>
        <div className="grid gap-8 md:grid-cols-3">
          <InfoList title={locale === "en" ? "Repeatable modules" : "Módulos repetíveis"} items={solution.modules} />
          <InfoList title={locale === "en" ? "Systems connected" : "Sistemas conectados"} items={solution.systems} />
          <InfoList title={locale === "en" ? "Metrics to baseline" : "Métricas a baselinar"} items={solution.metrics} />
        </div>
      </PageBand>
      <RelatedBlock locale={locale} title={locale === "en" ? "Related departments" : "Departamentos relacionados"}>
        {departmentsList.map((department) => (
          <DepartmentCard key={department.id} department={department} locale={locale} />
        ))}
      </RelatedBlock>
      <FinalCta
        locale={locale}
        title={locale === "en" ? `Map your ${solution.title} journey before automating it.` : `Mapeie a jornada ${solution.title} antes de a automatizar.`}
      />
    </>
  );
}

export function DepartmentsIndexView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <>
      <IndexHero
        locale={locale}
        eyebrow={copy.nav.departments}
        title={copy.index.departmentsTitle}
        body={copy.index.departmentsBody}
      />
      <PageBand className="bg-surface">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {departments[locale].map((department) => (
            <DepartmentCard key={department.id} department={department} locale={locale} />
          ))}
        </div>
      </PageBand>
      <PageBand>
        <SectionIntro
          eyebrow={locale === "en" ? "Cross-functional handoffs" : "Handoffs transversais"}
          title={locale === "en" ? "Value is lost between teams." : "O valor perde-se entre equipas."}
        />
        <div className="mt-8">
          <HandoffFlow
            locale={locale}
            paths={
              locale === "en"
                ? [
                    ["Marketing", "Sales", "Operations"],
                    ["Sales", "Finance"],
                    ["Service", "Product / Operations"],
                    ["HR", "IT", "Manager"],
                  ]
                : [
                    ["Marketing", "Vendas", "Operações"],
                    ["Vendas", "Finanças"],
                    ["Serviço", "Produto / Operações"],
                    ["RH", "IT", "Gestor"],
                  ]
            }
          />
        </div>
      </PageBand>
    </>
  );
}

export function DepartmentDetailView({ locale, department }: { locale: Locale; department: Department }) {
  const related = relatedSolutions(locale, department.solutionIds);
  return (
    <>
      <DetailHero
        locale={locale}
        eyebrow={locale === "en" ? "Department" : "Departamento"}
        title={department.title}
        body={department.outcome}
        chips={related.map((solution) => solution.title)}
      />
      <PageBand>
        <div className="grid gap-8 md:grid-cols-3">
          <InfoList title={locale === "en" ? "Work signals" : "Sinais de trabalho"} items={department.signals} />
          <InfoList title={locale === "en" ? "System landscape" : "Paisagem de sistemas"} items={department.systems} />
          <InfoList title={locale === "en" ? "Metrics to baseline" : "Métricas a baselinar"} items={department.metrics} />
        </div>
      </PageBand>
      <RelatedBlock locale={locale} title={locale === "en" ? "Related journeys" : "Jornadas relacionadas"}>
        {related.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} locale={locale} />
        ))}
      </RelatedBlock>
      <FinalCta locale={locale} title={locale === "en" ? "Describe the handoff causing friction." : "Descreva o handoff que causa fricção."} />
    </>
  );
}

export function BlueprintsIndexView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const blueprint = blueprints[locale][0];
  return (
    <>
      <IndexHero
        locale={locale}
        eyebrow={copy.nav.blueprints}
        title={copy.index.blueprintsTitle}
        body={copy.index.blueprintsBody}
      />
      {blueprint ? <FeaturedBlueprint locale={locale} blueprint={blueprint} /> : null}
      <PageBand>
        <SectionIntro
          eyebrow={locale === "en" ? "How to read a blueprint" : "Como ler um blueprint"}
          title={locale === "en" ? "Scenario, flow, ownership, exceptions, measurement." : "Cenário, fluxo, propriedade, exceções, medição."}
        />
        <div className="mt-8">
          <ProcessLine
            locale={locale}
            steps={
              locale === "en"
                ? ["Scenario", "Current flow", "Target flow", "Ownership", "Systems", "Exceptions", "Measurement"]
                : ["Cenário", "Fluxo atual", "Fluxo alvo", "Propriedade", "Sistemas", "Exceções", "Medição"]
            }
          />
        </div>
      </PageBand>
    </>
  );
}

export function BlueprintDetailView({ locale, blueprint }: { locale: Locale; blueprint: Blueprint }) {
  const related = relatedDepartments(locale, blueprint.departmentIds);
  return (
    <>
      <DetailHero
        locale={locale}
        eyebrow="Solution Blueprint"
        title={blueprint.title}
        body={blueprint.scenario}
        chips={related.map((department) => department.title)}
      />
      <PageBand>
        <Alert className="rounded-none border-foreground bg-brand/20">
          <CircleAlert className="size-5" />
          <AlertTitle>Solution Blueprint</AlertTitle>
          <AlertDescription>{blueprint.disclaimer}</AlertDescription>
        </Alert>
      </PageBand>
      <PageBand className="bg-surface">
        <div className="grid gap-8 md:grid-cols-2">
          <InfoList title={locale === "en" ? "Problem and scope" : "Problema e escopo"} items={blueprint.scope} />
          <InfoList title={locale === "en" ? "Explicit exclusions" : "Exclusões explícitas"} items={blueprint.exclusions} />
        </div>
      </PageBand>
      <PageBand>
        <SectionIntro title={locale === "en" ? "Target-state flow" : "Fluxo alvo"} />
        <div className="mt-8">
          <StageTable stages={blueprint.targetFlow} locale={locale} />
        </div>
      </PageBand>
      <PageBand className="bg-surface">
        <SectionIntro title={locale === "en" ? "Architecture layers" : "Camadas de arquitetura"} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {blueprint.layers.map((layer) => (
            <Card key={layer.title} className="rounded-none shadow-none">
              <CardContent className="p-5">
                <h3 className="font-heading text-xl font-semibold">{layer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{layer.responsibility}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {layer.systems.map((system) => (
                    <Badge key={system} variant="outline" className="rounded-none">
                      {system}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageBand>
      <PageBand>
        <div className="grid gap-8 md:grid-cols-3">
          <InfoList title="AI uses" items={blueprint.aiAllowed} />
          <InfoList title={locale === "en" ? "Human-required actions" : "Ações humanas obrigatórias"} items={blueprint.humanRequired} />
          <InfoList title={locale === "en" ? "Phased implementation" : "Implementação faseada"} items={blueprint.phases} />
        </div>
      </PageBand>
      <FinalCta locale={locale} title={locale === "en" ? "Develop a company-specific blueprint." : "Desenvolva um blueprint específico para a sua empresa."} />
    </>
  );
}

export function InsightsIndexView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <>
      <IndexHero
        locale={locale}
        eyebrow={copy.nav.insights}
        title={copy.index.insightsTitle}
        body={copy.index.insightsBody}
      />
      <PageBand className="bg-surface">
        <div>
          {insights[locale].map((insight) => (
            <InsightCard key={insight.id} insight={insight} locale={locale} />
          ))}
        </div>
      </PageBand>
      <FinalCta locale={locale} title={locale === "en" ? "Turn reading into a diagnostic conversation." : "Transforme leitura numa conversa de diagnóstico."} />
    </>
  );
}

export function InsightDetailView({ locale, insight }: { locale: Locale; insight: Insight }) {
  const related = insights[locale].filter((item) => item.id !== insight.id).slice(0, 2);
  return (
    <>
      <article>
        <DetailHero
          locale={locale}
          eyebrow={insight.category}
          title={insight.title}
          body={insight.deck}
          chips={[insight.readingTime, insight.publishedAt, insight.author]}
        />
        <PageBand>
          <div className="mx-auto max-w-3xl">
            {insight.sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="font-heading text-3xl font-semibold">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-lg leading-8 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </PageBand>
      </article>
      <RelatedBlock locale={locale} title={locale === "en" ? "Related insights" : "Insights relacionados"}>
        {related.map((item) => (
          <InsightCard key={item.id} insight={item} locale={locale} />
        ))}
      </RelatedBlock>
    </>
  );
}

export function AboutView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const principles =
    locale === "en"
      ? [
          "Automation begins with the journey and ownership.",
          "Integrations preserve a clear source of truth.",
          "AI assists people and controlled operations.",
          "Failures need visibility, recovery and an owner.",
          "Clients retain ownership of core data, accounts and licences.",
        ]
      : [
          "A automação começa pela jornada e propriedade.",
          "Integrações preservam uma fonte de verdade clara.",
          "IA assiste pessoas e operações controladas.",
          "Falhas precisam de visibilidade, recuperação e dono.",
          "Clientes mantêm propriedade dos dados, contas e licenças.",
        ];

  return (
    <>
      <DetailHero locale={locale} eyebrow={copy.about.eyebrow} title={copy.about.title} body={copy.about.body} chips={[copy.tagline]} />
      <PageBand>
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <SectionIntro title={copy.about.whyTitle} body={copy.about.whyBody} />
          <InfoList title={copy.about.convictionTitle} items={principles} />
        </div>
      </PageBand>
      <PageBand className="bg-surface">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="rounded-none shadow-none">
            <CardContent className="p-6">
              <h2 className="font-heading text-3xl font-semibold">{copy.about.founderTitle}</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                {locale === "en"
                  ? "Alexandre Jaques has more than six years of integration and automation experience, previously founded IntegraNinja, delivered projects for more than 15 clients and has operational leadership experience at ChatGuru."
                  : "Alexandre Jaques tem mais de seis anos de experiência em integrações e automação, fundou anteriormente a IntegraNinja, entregou projetos para mais de 15 clientes e tem experiência de liderança operacional na ChatGuru."}
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-none shadow-none">
            <CardContent className="p-6">
              <h2 className="font-heading text-3xl font-semibold">{copy.about.operatingTitle}</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                {locale === "en"
                  ? "Bunniemonki is founder-led and can coordinate a specialist network where design, paid traffic or implementation depth is needed. Scope, responsibility and quality remain with Bunniemonki."
                  : "A Bunniemonki é founder-led e pode coordenar uma rede especialista quando design, paid traffic ou profundidade de implementação forem necessários. Escopo, responsabilidade e qualidade permanecem com a Bunniemonki."}
              </p>
            </CardContent>
          </Card>
        </div>
      </PageBand>
      <PageBand>
        <SectionIntro title={locale === "en" ? "Legal company information" : "Informação legal da empresa"} />
        <dl className="mt-8 grid gap-4 md:grid-cols-2">
          {(locale === "en"
            ? [
                ["Brand", legalEntity.brand],
                ["Legal operator", legalEntity.registeredName],
                ["NIF/NIPC", legalEntity.nipc],
                ["Legal form", legalEntity.legalForm],
                ["Registered office", legalEntity.office],
                ["CAE", legalEntity.cae],
              ]
            : [
                ["Marca", legalEntity.brand],
                ["Operador legal", legalEntity.registeredName],
                ["NIF/NIPC", legalEntity.nipc],
                ["Forma legal", legalEntity.legalForm],
                ["Sede registada", legalEntity.office],
                ["CAE", legalEntity.cae],
              ]
          ).map(([label, value]) => (
            <div key={label} className="border-t border-border py-4">
              <dt className="font-mono text-xs uppercase text-muted-foreground">{label}</dt>
              <dd className="mt-2 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </PageBand>
      <FinalCta locale={locale} title={locale === "en" ? "Talk through the operating gap." : "Converse sobre a lacuna operacional."} />
    </>
  );
}

export function ScanView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <>
      <IndexHero locale={locale} eyebrow="Automation Scan" title={copy.scan.title} body={copy.scan.body} />
      <PageBand>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="grid content-start gap-6">
            <InfoList title={locale === "en" ? "What to expect" : "O que esperar"} items={copy.scan.expectation} />
            <Alert className="rounded-none">
              <LockKeyhole className="size-5" />
              <AlertTitle>{locale === "en" ? "What not to send" : "O que não enviar"}</AlertTitle>
              <AlertDescription>{copy.scan.notSend}</AlertDescription>
            </Alert>
          </aside>
          <ScanForm locale={locale} />
        </div>
      </PageBand>
    </>
  );
}

export function PolicyView({ locale, policy }: { locale: Locale; policy: Policy }) {
  return (
    <>
      <DetailHero
        locale={locale}
        eyebrow={locale === "en" ? "Policy" : "Política"}
        title={policy.title}
        body={policy.summary}
        chips={
          locale === "en"
            ? [`Updated ${policy.updatedDate}`, `Effective ${policy.effectiveDate}`]
            : [`Atualizado ${policy.updatedDate}`, `Em vigor ${policy.effectiveDate}`]
        }
      />
      <PageBand>
        <div className="mx-auto max-w-3xl">
          {policy.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-heading text-3xl font-semibold">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <div className="border-t border-border pt-6">
            <h2 className="font-heading text-2xl font-semibold">{locale === "en" ? "Legal entity" : "Entidade legal"}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {legalEntity.registeredName}, NIPC {legalEntity.nipc}, {legalEntity.office}.
            </p>
          </div>
        </div>
      </PageBand>
    </>
  );
}

export function FormUnavailableView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <>
      <IndexHero locale={locale} eyebrow="Status" title={copy.scan.unavailableTitle} body={copy.system.formUnavailableBody} />
      <PageBand>
        <Alert className="rounded-none">
          <Mail className="size-5" />
          <AlertTitle>{locale === "en" ? "Fallback contact" : "Contacto alternativo"}</AlertTitle>
          <AlertDescription>
            hello@bunniemonki.com · {locale === "en" ? "Subject:" : "Assunto:"} Automation Scan request
          </AlertDescription>
        </Alert>
      </PageBand>
    </>
  );
}

export function NotFoundView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <PageBand>
      <div className="mx-auto max-w-3xl py-16">
        <Eyebrow>404</Eyebrow>
        <h1 className="font-heading text-5xl font-semibold">{copy.system.notFoundTitle}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{copy.system.notFoundBody}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-brand text-brand-ink hover:bg-brand/85">
            <Link
              href={getLocalizedPath(locale, "home")}
              {...analyticsClickAttributes({
                name: "navigation_click",
                location: "not_found",
                target: "home",
                locale,
                pageKind: "not_found",
              })}
            >
              {copy.cta.home}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href={getLocalizedPath(locale, "solutions")}
              {...analyticsClickAttributes({
                name: "navigation_click",
                location: "not_found",
                target: "solutions_index",
                locale,
                pageKind: "not_found",
              })}
            >
              {copy.nav.solutions}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href={getLocalizedPath(locale, "scan")}
              {...analyticsClickAttributes({
                name: "cta_click",
                location: "not_found",
                target: "automation_scan",
                locale,
                pageKind: "not_found",
              })}
            >
              {copy.cta.scanShort}
            </Link>
          </Button>
        </div>
      </div>
    </PageBand>
  );
}

function FeaturedBlueprint({ locale, blueprint }: { locale: Locale; blueprint: Blueprint }) {
  const copy = siteCopy[locale];
  return (
    <PageBand>
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro eyebrow="Solution Blueprint" title={copy.home.blueprintHeading} body={blueprint.scenario} />
        <div className="border border-foreground p-5">
          <h3 className="font-heading text-3xl font-semibold">{blueprint.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{blueprint.disclaimer}</p>
          <div className="mt-6 grid gap-3">
            {blueprint.targetFlow.map((stage, index) => (
              <div key={stage.label} className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center bg-brand font-mono text-xs text-brand-ink">
                  {index + 1}
                </span>
                <p className="font-medium">{stage.label}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-6 bg-foreground text-background hover:bg-foreground/85">
            <Link
              href={getLocalizedPath(locale, "blueprint", blueprint.slug)}
              {...analyticsClickAttributes({
                name: "cta_click",
                location: "featured_blueprint",
                target: "blueprint_detail",
                locale,
                pageKind: "home",
                itemId: blueprint.id,
                itemSlug: blueprint.slug,
              })}
            >
              {copy.cta.viewBlueprint}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </PageBand>
  );
}

function PrimarySolutionHighlight({ locale, solution }: { locale: Locale; solution: Solution }) {
  const labels =
    locale === "en"
      ? {
          eyebrow: "Primary solution",
          modules: "Implementation modules",
          detail: "Open solution page",
          note:
            "The niche is specific, but the operating pattern is the same: map the process, connect the systems, add governed AI and keep the workflow running.",
        }
      : {
          eyebrow: "Solução principal",
          modules: "Módulos de implementação",
          detail: "Abrir página da solução",
          note:
            "O nicho é específico, mas o padrão operacional é o mesmo: mapear o processo, ligar os sistemas, adicionar IA governada e manter o workflow em produção.",
        };

  return (
    <PageBand className="bg-surface py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
        <div>
          <SectionIntro eyebrow={labels.eyebrow} title={solution.title} body={solution.promise} />
          <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
            {labels.note}
          </p>
          <Button asChild className="mt-6 bg-foreground text-background hover:bg-foreground/85">
            <Link
              href={getLocalizedPath(locale, "solution", solution.slug)}
              {...analyticsClickAttributes({
                name: "cta_click",
                location: "primary_solution_highlight",
                target: "solution_detail",
                locale,
                pageKind: "solutions",
                itemId: solution.id,
                itemSlug: solution.slug,
              })}
            >
              {labels.detail}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="border border-foreground bg-background p-5">
          <div className="flex flex-col justify-between gap-3 border-b border-border pb-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-muted-foreground">
                {labels.modules}
              </p>
              <h3 className="mt-2 font-heading text-3xl font-semibold">{solution.outcome}</h3>
            </div>
            <Badge className="w-fit rounded-none bg-brand text-brand-ink hover:bg-brand">
              AI Ops
            </Badge>
          </div>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {solution.modules.map((module, index) => (
              <li key={module} className="border border-border bg-surface p-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-heading text-lg font-semibold leading-tight">{module}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageBand>
  );
}

function IndexHero({
  locale,
  eyebrow,
  title,
  body,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  body: string;
}) {
  const copy = siteCopy[locale];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-5xl font-heading text-5xl font-semibold leading-tight md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-brand text-brand-ink hover:bg-brand/85">
              <Link
                href={getLocalizedPath(locale, "scan")}
                {...analyticsClickAttributes({
                  name: "cta_click",
                  location: "index_hero",
                  target: "automation_scan",
                  locale,
                  pageKind: "index",
                })}
              >
                {copy.cta.scan}
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href={getLocalizedPath(locale, "solutions")}
                {...analyticsClickAttributes({
                  name: "cta_click",
                  location: "index_hero",
                  target: "solutions_index",
                  locale,
                  pageKind: "index",
                })}
              >
                {copy.cta.exploreSolutions}
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DetailHero({
  locale,
  eyebrow,
  title,
  body,
  chips,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  body: string;
  chips: string[];
}) {
  const copy = siteCopy[locale];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-5xl font-heading text-5xl font-semibold leading-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{body}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <Badge key={chip} variant="outline" className="rounded-none">
              {chip}
            </Badge>
          ))}
        </div>
        <Button asChild className="mt-8 bg-brand text-brand-ink hover:bg-brand/85">
          <Link
            href={getLocalizedPath(locale, "scan")}
            {...analyticsClickAttributes({
              name: "cta_click",
              location: "detail_hero",
              target: "automation_scan",
              locale,
              pageKind: "detail",
            })}
          >
            {copy.cta.scan}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-foreground" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TwoColumnList({
  leftTitle,
  left,
  rightTitle,
  right,
}: {
  leftTitle: string;
  left: string[];
  rightTitle: string;
  right: string[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <InfoList title={leftTitle} items={left} />
      <InfoList title={rightTitle} items={right} />
    </div>
  );
}

function RelatedBlock({
  locale,
  title,
  children,
}: {
  locale: Locale;
  title: string;
  children: ReactNode;
}) {
  return (
    <PageBand className="bg-surface">
      <div className="mb-8 flex items-center gap-3">
        <CircleDot className="size-4 text-brand-ink" aria-hidden="true" />
        <h2 className="font-heading text-3xl font-semibold">{title}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link
            href={getLocalizedPath(locale, "scan")}
            {...analyticsClickAttributes({
              name: "cta_click",
              location: "related_block",
              target: "automation_scan",
              locale,
              pageKind: "detail",
            })}
          >
            {siteCopy[locale].cta.scan}
          </Link>
        </Button>
      </div>
    </PageBand>
  );
}

function FinalCta({ locale, title, body }: { locale: Locale; title: string; body?: string }) {
  const copy = siteCopy[locale];
  return (
    <PageBand className="bg-brand text-brand-ink">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Eyebrow className="text-brand-ink/70">Automation Scan</Eyebrow>
          <h2 className="max-w-3xl font-heading text-4xl font-semibold leading-tight md:text-6xl">
            {title}
          </h2>
          {body ? <p className="mt-5 max-w-2xl text-base leading-7 text-brand-ink/75">{body}</p> : null}
        </div>
        <Button asChild className="h-11 bg-foreground px-5 text-background hover:bg-foreground/85">
          <Link
            href={getLocalizedPath(locale, "scan")}
            {...analyticsClickAttributes({
              name: "cta_click",
              location: "final_cta",
              target: "automation_scan",
              locale,
              pageKind: "global",
            })}
          >
            {copy.cta.scan}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </PageBand>
  );
}
