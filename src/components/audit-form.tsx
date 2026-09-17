import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { submitAudit } from "@/lib/audit.functions";
import {
  auditSchema,
  biggestChallenges,
  type AuditFormValues,
} from "@/lib/audit-schema";

export function AuditForm() {
  const submit = useServerFn(submitAudit);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [reportUrl, setReportUrl] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      const res = await submit({ data: values });
      if (res && res.id) {
        setReportUrl(`/audits/${res.id}`);
      }
      setDone(true);
    } catch {
      setDone(true);
    }
  });

  if (done) {
    return <SuccessCard reportUrl={reportUrl} />;
  }

  return (
    <form 
      onSubmit={onSubmit} 
      noValidate 
      className="relative z-10 w-full overflow-hidden card-elevated p-6 sm:p-9 text-left"
    >
      <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
        <div>
          <span className="eyebrow-chip mb-1">
            Diagnostic Step {step} of 2
          </span>
          <h3 className="text-base font-bold text-foreground mt-1">
            {step === 1 ? "Identify Your Primary Bottleneck" : "Coaching Business Details"}
          </h3>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-bold text-accent">
          {step}/2
        </div>
      </div>

      {step === 1 ? (
        <div className="space-y-5">
          <Field
            label="What is your biggest acquisition bottleneck right now?"
            required
            error={errors.biggestChallenge?.message}
          >
            <select
              className={inputCls(!!errors.biggestChallenge)}
              defaultValue=""
              {...register("biggestChallenge")}
            >
              <option value="" disabled>
                Select your primary challenge
              </option>
              {biggestChallenges.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>
          
          <button
            type="button"
            onClick={async () => {
              const isValid = await trigger("biggestChallenge");
              if (isValid) setStep(2);
            }}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01] hover:opacity-95"
          >
            <span>Proceed to Step 2</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
          
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            <span>Confidential diagnostic. No spam.</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in duration-300 text-xs">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First Name" required error={errors.firstName?.message}>
              <input
                type="text"
                autoComplete="given-name"
                placeholder="Alex"
                className={inputCls(!!errors.firstName)}
                {...register("firstName")}
              />
            </Field>

            <Field label="Email Address" required error={errors.email?.message}>
              <input
                type="email"
                autoComplete="email"
                placeholder="alex@coaching.com"
                className={inputCls(!!errors.email)}
                {...register("email")}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Website URL" error={errors.websiteUrl?.message}>
              <input
                type="url"
                placeholder="https://..."
                className={inputCls(!!errors.websiteUrl)}
                {...register("websiteUrl")}
              />
            </Field>

            <Field
              label="Instagram or Social Profile"
              required
              error={errors.socialMediaLink?.message}
            >
              <input
                type="text"
                placeholder="@handle or profile URL"
                className={inputCls(!!errors.socialMediaLink)}
                {...register("socialMediaLink")}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Coaching Niche" required error={errors.coachingNiche?.message}>
              <input
                type="text"
                placeholder="Executive or Fitness"
                className={inputCls(!!errors.coachingNiche)}
                {...register("coachingNiche")}
              />
            </Field>

            <Field label="Main Program Offer" required error={errors.offerDescription?.message}>
              <input
                type="text"
                placeholder="12 Week Mastery"
                className={inputCls(!!errors.offerDescription)}
                {...register("offerDescription")}
              />
            </Field>

            <Field label="Offer Price" required error={errors.offerPrice?.message}>
              <input
                type="text"
                placeholder="$3,000"
                className={inputCls(!!errors.offerPrice)}
                {...register("offerPrice")}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Approx Monthly Inquiries" error={errors.monthlyInquiries?.message}>
              <input
                type="text"
                placeholder="30 to 50 inquiries"
                className={inputCls(!!errors.monthlyInquiries)}
                {...register("monthlyInquiries")}
              />
            </Field>

            <Field label="Monthly Booked Calls" error={errors.monthlyBookedCalls?.message}>
              <input
                type="text"
                placeholder="5 to 10 calls"
                className={inputCls(!!errors.monthlyBookedCalls)}
                {...register("monthlyBookedCalls")}
              />
            </Field>

            <Field label="Primary Traffic Source" error={errors.primaryLeadSource?.message}>
              <input
                type="text"
                placeholder="Instagram or Referrals"
                className={inputCls(!!errors.primaryLeadSource)}
                {...register("primaryLeadSource")}
              />
            </Field>
          </div>

          {serverError && (
            <div className="flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive border border-destructive/20">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-line bg-surface px-5 py-3.5 text-xs font-semibold text-foreground hover:bg-surface-2 transition"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01] hover:opacity-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating Audit...
                </>
              ) : (
                <>
                  <span>REQUEST MY FREE COACH FUNNEL AUDIT</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

function SuccessCard({ reportUrl }: { reportUrl: string | null }) {
  return (
    <div className="card-elevated p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-bold text-foreground">
        Diagnostic Audit Generated
      </h3>
      <p className="mx-auto mt-2 max-w-md text-xs text-muted-foreground leading-relaxed">
        We have mapped your complete client journey and identified your primary revenue leakage points.
      </p>

      <div className="mt-6">
        <a
          href={reportUrl || "/coach-client-acquisition"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02]"
        >
          <span>View Your Personalized Diagnostic Report</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-[11px] text-destructive font-medium">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full rounded-xl border bg-surface px-3.5 py-2.5 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white ${
    hasError ? "border-destructive focus:border-destructive" : "border-line"
  }`;
}
