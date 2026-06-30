"use client";

import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { analyticsClickAttributes, safeAnalyticsProperties } from "@/lib/analytics";
import { siteCopy } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { getScanFormCopy } from "@/lib/scan-copy";
import {
  initialScanDraft,
  validateScanStep,
  type ScanDraft,
  type ScanStep,
} from "@/lib/scan-validation";

const WEBHOOK_URL = "https://hook.eu1.make.com/9app4texz5sl06nv2jphniyhjdlicw7i";
const WEBHOOK_API_KEY = "cYV_dv6eC5ZYM-T";

const companySizes = ["1-9", "10-29", "30-49", "50-99", "100-199", "200-499", "500+"];

export function ScanForm({ locale }: { locale: Locale }) {
  const pageCopy = siteCopy[locale];
  const [step, setStep] = useState<ScanStep>(1);
  const [draft, setDraft] = useState<ScanDraft>({ ...initialScanDraft, communicationLanguage: locale });
  const [errors, setErrors] = useState<Partial<Record<keyof ScanDraft, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof ScanDraft>(key: K, value: ScanDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function goNext() {
    const result = validateScanStep(step, draft, locale);
    setErrors(result.errors);
    if (!result.ok) {
      track("scan_form_validation_error", safeAnalyticsProperties({
        locale,
        location: "scan_form",
        pageKind: "scan",
        step,
        target: "validation",
      }));
      return;
    }
    if (step < 3) {
      track("scan_form_step_continue", safeAnalyticsProperties({
        locale,
        location: "scan_form",
        pageKind: "scan",
        step,
        target: "next_step",
      }));
      setStep((step + 1) as ScanStep);
      requestAnimationFrame(() => document.getElementById("scan-step-heading")?.focus());
      return;
    }
    // Step 3 — submit to webhook
    void submitToWebhook();
  }

  async function submitToWebhook() {
    setIsSubmitting(true);
    setSubmitError(null);
    const ref = `BM-${Date.now().toString(36).toUpperCase()}`;
    setReference(ref);

    track("scan_form_submit", safeAnalyticsProperties({
      locale,
      location: "scan_form",
      marketingConsent: draft.marketingConsent,
      pageKind: "scan",
      step,
      target: "request_submitted",
    }));

    try {
      const payload = {
        ...draft,
        reference: ref,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-make-apikey": WEBHOOK_API_KEY,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setSubmitError(errorMessage);
      track("scan_form_submit_error", safeAnalyticsProperties({
        locale,
        location: "scan_form",
        pageKind: "scan",
        step,
        target: "submit_error",
        error: errorMessage,
      }));
    } finally {
      setIsSubmitting(false);
    }
  }

  function goBack() {
    track("scan_form_back", safeAnalyticsProperties({
      locale,
      location: "scan_form",
      pageKind: "scan",
      step,
      target: "previous_step",
    }));
    setStep((Math.max(1, step - 1) as ScanStep));
  }

  if (submitted) {
    return (
      <Alert className="rounded-none border-foreground bg-brand/20">
        <CheckCircle2 className="size-5" />
        <AlertTitle className="font-heading text-2xl">{pageCopy.scan.successTitle}</AlertTitle>
        <AlertDescription className="mt-3 grid gap-3 text-sm leading-6">
          <span>{pageCopy.scan.successBody}</span>
          <span className="font-mono text-xs uppercase">
            {locale === "en" ? "Reference" : "Referência"}: {reference}
          </span>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="border border-foreground bg-background p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
        <p className="font-mono text-xs font-semibold uppercase text-muted-foreground">
          {locale === "en" ? "Step" : "Passo"} {step} / 3
        </p>
        <div className="flex gap-1" aria-hidden="true">
          {[1, 2, 3].map((item) => (
            <span
              key={item}
              className={item <= step ? "h-1.5 w-10 bg-brand" : "h-1.5 w-10 bg-border"}
            />
          ))}
        </div>
      </div>

      <form action={goNext} className="grid gap-6">
        {step === 1 ? (
          <StepOne draft={draft} errors={errors} update={update} locale={locale} />
        ) : null}
        {step === 2 ? (
          <StepTwo draft={draft} errors={errors} update={update} locale={locale} />
        ) : null}
        {step === 3 ? (
          <StepThree draft={draft} errors={errors} update={update} locale={locale} />
        ) : null}

        {Object.values(errors).some(Boolean) || submitError ? (
          <Alert variant="destructive" className="rounded-none">
            <AlertTitle>{locale === "en" ? "Check these fields" : "Revise estes campos"}</AlertTitle>
            <AlertDescription>
              {submitError
                ? (locale === "en"
                  ? `Submission failed: ${submitError}. Please try again.`
                  : `Envio falhou: ${submitError}. Por favor tente novamente.`)
                : (locale === "en"
                  ? "Fix the highlighted fields before continuing."
                  : "Corrija os campos assinalados antes de continuar.")}
            </AlertDescription>
          </Alert>
        ) : null}

        <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={goBack}
            disabled={step === 1 || isSubmitting}
            {...analyticsClickAttributes({
              name: "scan_form_button_click",
              location: "scan_form",
              target: "back",
              locale,
              pageKind: "scan",
              step,
            })}
          >
            <ArrowLeft aria-hidden="true" />
            {locale === "en" ? "Back" : "Voltar"}
          </Button>
          <Button
            type="submit"
            className="bg-brand text-brand-ink hover:bg-brand/85"
            disabled={isSubmitting}
            {...analyticsClickAttributes({
              name: "scan_form_button_click",
              location: "scan_form",
              target: step === 3 ? "submit_request" : "continue",
              locale,
              pageKind: "scan",
              step,
            })}
          >
            {isSubmitting
              ? (locale === "en" ? "Submitting..." : "A enviar...")
              : step === 3
                ? (locale === "en" ? "Submit request" : "Submeter pedido")
                : (locale === "en" ? "Continue" : "Continuar")}
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </form>
    </div>
  );
}

type StepProps = {
  draft: ScanDraft;
  errors: Partial<Record<keyof ScanDraft, string>>;
  update: <K extends keyof ScanDraft>(key: K, value: ScanDraft[K]) => void;
  locale: Locale;
};

function StepOne({ draft, errors, update, locale }: StepProps) {
  const copy = getScanFormCopy(locale);

  return (
    <fieldset className="grid gap-5">
      <legend
        id="scan-step-heading"
        tabIndex={-1}
        className="font-heading text-2xl font-semibold outline-none"
      >
        {copy.stepOne.title}
      </legend>
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label={copy.fields.firstName} value={draft.firstName} error={errors.firstName} onChange={(value) => update("firstName", value)} />
        <TextField label={copy.fields.lastName} value={draft.lastName} error={errors.lastName} onChange={(value) => update("lastName", value)} />
        <TextField label={copy.fields.email} type="email" value={draft.email} error={errors.email} onChange={(value) => update("email", value)} />
        <TextField label={copy.fields.company} value={draft.company} error={errors.company} onChange={(value) => update("company", value)} />
        <TextField label={copy.fields.role} value={draft.role} error={errors.role} onChange={(value) => update("role", value)} />
        <TextField label={copy.fields.companyUrl} value={draft.companyUrl} error={errors.companyUrl} onChange={(value) => update("companyUrl", value)} />
        <TextField label={copy.fields.market} value={draft.market} error={errors.market} onChange={(value) => update("market", value)} />
        <SelectField
          label={copy.fields.companySize}
          value={draft.companySize}
          error={errors.companySize}
          options={companySizes.map((size) => [size, size])}
          placeholder={copy.selectPlaceholder}
          onChange={(value) => update("companySize", value as ScanDraft["companySize"])}
        />
      </div>
    </fieldset>
  );
}

function StepTwo({ draft, errors, update, locale }: StepProps) {
  const copy = getScanFormCopy(locale);

  return (
    <fieldset className="grid gap-5">
      <legend
        id="scan-step-heading"
        tabIndex={-1}
        className="font-heading text-2xl font-semibold outline-none"
      >
        {copy.stepTwo.title}
      </legend>
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label={copy.fields.primaryJourney} value={draft.primaryJourney} error={errors.primaryJourney} options={copy.journeys} placeholder={copy.selectPlaceholder} onChange={(value) => update("primaryJourney", value)} />
        <SelectField label={copy.fields.primaryDepartment} value={draft.primaryDepartment} error={errors.primaryDepartment} options={copy.departments} placeholder={copy.selectPlaceholder} onChange={(value) => update("primaryDepartment", value)} />
      </div>
      <TextareaField
        label={copy.fields.outcome}
        value={draft.outcome}
        error={errors.outcome}
        help={copy.stepTwo.outcomeHelp}
        onChange={(value) => update("outcome", value)}
      />
      <div>
        <Label className="mb-3 block">{copy.fields.currentSignals}</Label>
        <div className="grid gap-3 sm:grid-cols-2">
          {copy.signals.map(([value, label]) => (
            <label key={value} className="flex items-start gap-3 border border-border p-3 text-sm">
              <Checkbox
                checked={draft.currentSignals.includes(value)}
                onCheckedChange={(checked) => {
                  const next = checked
                    ? [...draft.currentSignals, value]
                    : draft.currentSignals.filter((item) => item !== value);
                  update("currentSignals", next);
                }}
              />
              {label}
            </label>
          ))}
        </div>
        <ErrorMessage message={errors.currentSignals} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label={copy.fields.toolNames} value={draft.toolNames} error={errors.toolNames} onChange={(value) => update("toolNames", value)} />
        <SelectField
          label={copy.fields.impactFrequency}
          value={draft.impactFrequency}
          error={errors.impactFrequency}
          options={copy.impactFrequencies}
          placeholder={copy.selectPlaceholder}
          onChange={(value) => update("impactFrequency", value)}
        />
        <SelectField
          label={copy.fields.ownerIdentified}
          value={draft.ownerIdentified}
          error={errors.ownerIdentified}
          options={copy.ownerOptions}
          placeholder={copy.selectPlaceholder}
          onChange={(value) => update("ownerIdentified", value)}
        />
      </div>
    </fieldset>
  );
}

function StepThree({ draft, errors, update, locale }: StepProps) {
  const copy = getScanFormCopy(locale);

  return (
    <fieldset className="grid gap-5">
      <legend
        id="scan-step-heading"
        tabIndex={-1}
        className="font-heading text-2xl font-semibold outline-none"
      >
        {copy.stepThree.title}
      </legend>
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField
          label={copy.fields.desiredTiming}
          value={draft.desiredTiming}
          error={errors.desiredTiming}
          options={copy.timing}
          placeholder={copy.selectPlaceholder}
          onChange={(value) => update("desiredTiming", value)}
        />
        <SelectField
          label={copy.fields.investmentRange}
          value={draft.investmentRange}
          error={errors.investmentRange}
          options={copy.investmentRanges}
          placeholder={copy.selectPlaceholder}
          onChange={(value) => update("investmentRange", value)}
        />
        <SelectField
          label={copy.fields.decisionContext}
          value={draft.decisionContext}
          error={errors.decisionContext}
          options={copy.decisionContext}
          placeholder={copy.selectPlaceholder}
          onChange={(value) => update("decisionContext", value)}
        />
      </div>
      <TextareaField label={copy.fields.additionalContext} value={draft.additionalContext} error={errors.additionalContext} onChange={(value) => update("additionalContext", value)} />
      <div className="grid gap-3 border border-border p-4">
        <label className="flex items-start gap-3 text-sm leading-6">
          <Checkbox
            checked={draft.privacyAccepted}
            onCheckedChange={(checked) => update("privacyAccepted", Boolean(checked))}
            aria-invalid={Boolean(errors.privacyAccepted)}
          />
          {copy.stepThree.privacy}
        </label>
        <ErrorMessage message={errors.privacyAccepted} />
        <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
          <Checkbox
            checked={draft.marketingConsent}
            onCheckedChange={(checked) => update("marketingConsent", Boolean(checked))}
          />
          {copy.stepThree.marketing}
        </label>
      </div>
    </fieldset>
  );
}

function TextField({
  label,
  value,
  error,
  type = "text",
  onChange,
}: {
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} aria-invalid={Boolean(error)} onChange={(event) => onChange(event.target.value)} />
      <ErrorMessage message={error} />
    </div>
  );
}

function TextareaField({
  label,
  value,
  error,
  help,
  onChange,
}: {
  label: string;
  value: string;
  error?: string;
  help?: string;
  onChange: (value: string) => void;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {help ? <p className="text-xs leading-5 text-muted-foreground">{help}</p> : null}
      <Textarea id={id} value={value} aria-invalid={Boolean(error)} rows={5} onChange={(event) => onChange(event.target.value)} />
      <ErrorMessage message={error} />
    </div>
  );
}

function SelectField({
  label,
  value,
  error,
  options,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  error?: string;
  options: string[] | string[][];
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-10 w-full" aria-invalid={Boolean(error)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            const [optionValue, optionLabel] = Array.isArray(option) ? option : [option, option];
            return (
              <SelectItem key={optionValue} value={optionValue}>
                {optionLabel}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <ErrorMessage message={error} />
    </div>
  );
}

function ErrorMessage({ message }: { message?: string }) {
  return message ? <p className="text-xs font-medium text-destructive">{message}</p> : null;
}
