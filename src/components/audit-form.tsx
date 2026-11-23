import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Instagram,
  Facebook,
} from "lucide-react";
import { submitAudit } from "@/lib/audit.functions";
import { auditSchema, biggestChallenges, type AuditFormValues } from "@/lib/audit-schema";

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
          <span className="eyebrow-chip mb-1">Diagnostic Step {step} of 2</span>
          <h3 className="text-base font-bold text-foreground mt-1">
            {step === 1 ? "Identify Your Primary Bottleneck" : "Where Should We Send Your Diagnostic?"}
          </h3>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-bold text-accent">
          {step}/2
        </div>
      </div>

      {/* Progress Bar (Zeigarnik Effect) */}
      <div className="mb-8 h-1.5 w-full rounded-full bg-surface-2 overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-500 ease-in-out"
          style={{ width: step === 1 ? "50%" : "100%" }}
        />
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
              <option value="" disabled className="bg-surface text-muted-foreground">
                Select your primary challenge
              </option>
              {biggestChallenges.map((c) => (
                <option key={c} value={c} className="bg-surface text-foreground py-2">
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
                placeholder="e.g. Alex"
                className={inputCls(!!errors.firstName)}
                {...register("firstName")}
              />
            </Field>

            <Field label="Email Address" required error={errors.email?.message}>
              <input
                type="email"
                autoComplete="email"
                placeholder="e.g. alex@gmail.com"
                className={inputCls(!!errors.email)}
                {...register("email")}
              />
            </Field>
          </div>

          <Field
            label="Instagram Profile / Handle"
            required
            error={errors.socialMediaLink?.message}
          >
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                @
              </span>
              <input
                type="text"
                placeholder="yourhandle (or profile URL)"
                className={`${inputCls(!!errors.socialMediaLink)} pl-8`}
                {...register("socialMediaLink")}
              />
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              We&apos;ll send your personalized diagnostic breakdown here.
            </p>
          </Field>

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
                  Analyzing Architecture...
                </>
              ) : (
                <>
                  <span>CLAIM MY PIPELINE DIAGNOSTIC</span>
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
    <div className="card-elevated p-6 sm:p-9 text-center animate-in fade-in duration-300">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-8 ring-emerald-500/5 shadow-inner">
        <CheckCircle2 className="h-7 w-7" />
      </div>

      <span className="eyebrow-chip mt-4 uppercase tracking-wider font-bold">
        Submission Received
      </span>

      <h3 className="mt-2 text-xl sm:text-2xl font-bold text-foreground tracking-tight">
        Your Diagnostic is on the Way
      </h3>

      <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
        We&apos;re reviewing your bottleneck right now. For the fastest response or to send us screenshots of your current DM setup, connect directly with our team:
      </p>

      {/* Social Action Cards */}
      <div className="mt-6 flex flex-col gap-3">
        <a
          href="https://www.instagram.com/duxio.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/15 via-accent/5 to-transparent p-4 text-left transition-all hover:scale-[1.01] hover:border-accent hover:shadow-lg"
        >
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md">
              <Instagram className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xs font-bold text-foreground">Message Us on Instagram</h4>
                <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">
                  Fastest
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                DM <span className="font-semibold text-foreground">@duxio.ai</span> &quot;AUDIT&quot; for instant priority review
              </p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61590379213702"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-4 text-left transition-all hover:scale-[1.01] hover:bg-surface-2"
        >
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-md">
              <Facebook className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground">Connect on Facebook</h4>
              <p className="text-[11px] text-muted-foreground">
                Follow Duxio on Facebook for coaching system breakdowns
              </p>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Secondary Link to Auto-Generated Report */}
      {reportUrl && (
        <div className="mt-6 pt-4 border-t border-line/60">
          <a
            href={reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>View preliminary automated report</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      )}
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
  return `w-full rounded-xl border bg-surface px-3.5 py-2.5 text-xs text-foreground outline-none transition focus:border-accent focus:bg-surface-2 ${
    hasError ? "border-destructive focus:border-destructive" : "border-line"
  }`;
}
