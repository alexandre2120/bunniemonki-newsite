import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  CircleDot,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ArchitectureDiagram, HandoffFlow, ProcessLine, StageTable } from "@/components/site/flow";
import { DepartmentCard, InsightCard, SolutionCard } from "@/components/site/entity-cards";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow, PageBand, SectionIntro } from "@/components/site/section";
import { ScanForm } from "@/components/site/scan-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  type Policy,
  type Solution,
} from "@/lib/content";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

export function HomeView({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const featuredBlueprint = blueprints[locale][0];

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
                <Link href={getLocalizedPath(locale, "scan")}>
                  {copy.cta.scan}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 px-5">
                <Link href={getLocalizedPath(locale, "solutions")}>{copy.cta.exploreSolutions}</Link>
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
            <Link href={getLocalizedPath(locale, "insights")}>
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
  return (
    <>
      <IndexHero
        locale={locale}
        eyebrow={copy.nav.solutions}
        title={copy.index.solutionsTitle}
        body={copy.index.solutionsBody}
      />
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
            <Link href={getLocalizedPath(locale, "home")}>{copy.cta.home}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={getLocalizedPath(locale, "solutions")}>{copy.nav.solutions}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={getLocalizedPath(locale, "scan")}>{copy.cta.scanShort}</Link>
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
            <Link href={getLocalizedPath(locale, "blueprint", blueprint.slug)}>
              {copy.cta.viewBlueprint}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
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
              <Link href={getLocalizedPath(locale, "scan")}>{copy.cta.scan}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={getLocalizedPath(locale, "solutions")}>{copy.cta.exploreSolutions}</Link>
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
          <Link href={getLocalizedPath(locale, "scan")}>
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
          <Link href={getLocalizedPath(locale, "scan")}>{siteCopy[locale].cta.scan}</Link>
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
          <Link href={getLocalizedPath(locale, "scan")}>
            {copy.cta.scan}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </PageBand>
  );
}
