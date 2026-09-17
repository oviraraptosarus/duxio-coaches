import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CheckCircle2, ShieldCheck, ArrowRight, Loader2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "DUXIO | Client Onboarding Portal" },
      {
        name: "description",
        content: "Client acquisition operating system deployment intake for established coaching practices.",
      },
    ],
  }),
  component: ClientOnboardingPage,
});

function ClientOnboardingPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-accent selection:text-white">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-20 px-5 sm:px-8 mesh-hero-glow">
        <div className="mx-auto max-w-3xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <span className="eyebrow-chip mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Client Infrastructure Deployment
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
              DUXIO Client Onboarding Portal
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              Welcome to your client acquisition operating system installation. Please submit your practice parameters and calendar credentials below to initiate deployment.
            </p>
          </div>

          {submitted ? (
            <div className="card-elevated p-8 sm:p-12 text-center animate-in fade-in duration-300">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">
                Onboarding Parameters Received
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Your practice profile has been queued for infrastructure installation. Our systems engineering team will configure your client acquisition ecosystem within seventy two hours.
              </p>
              <div className="mt-8 pt-6 border-t border-line">
                <a
                  href="/coach-client-acquisition"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Return to Practice Dashboard</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-elevated p-6 sm:p-10 text-left space-y-6">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent block">
                    Deployment Stage {step} of 2
                  </span>
                  <h3 className="text-base font-bold text-foreground mt-0.5">
                    {step === 1 ? "Program and Pricing Structure" : "Calendar Credentials and Brand Parameters"}
                  </h3>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-bold text-accent">
                  {step}/2
                </div>
              </div>

              {step === 1 ? (
                <div className="space-y-4 text-xs">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Principal Consultant Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@vancecoaching.com"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Coaching Niche *</label>
                      <input
                        type="text"
                        required
                        placeholder="Executive Leadership"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Flagship Offer Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="12 Week Mastery Accelerator"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Offer Price Point *</label>
                      <input
                        type="text"
                        required
                        placeholder="$5,000"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block font-semibold text-foreground">Primary Audience Transformation Statement *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="We help corporate directors transition into executive roles without burnout."
                      className="w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient py-4 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01]"
                  >
                    <span>Proceed to Technical Integrations</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4 text-xs animate-in fade-in duration-200">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Scheduling Calendar URL *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://calendly.com/alex/discovery"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Official Website or Landing Page URL</label>
                      <input
                        type="url"
                        placeholder="https://vancecoaching.com"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Primary Social Profile Handle *</label>
                      <input
                        type="text"
                        required
                        placeholder="@alexvancecoach"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block font-semibold text-foreground">Target Monthly Client Enrollments *</label>
                      <input
                        type="text"
                        required
                        placeholder="4 to 6 clients monthly"
                        className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block font-semibold text-foreground">Asset Drive or Brand Folder Link</label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/..."
                      className="w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
                    />
                  </div>

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
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient py-3.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01] disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting Deployment Parameters...
                        </>
                      ) : (
                        <>
                          <span>INITIALIZE INFRASTRUCTURE DEPLOYMENT</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-2 border-t border-line">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>Enterprise encryption. Your credentials remain strictly confidential.</span>
              </div>
            </form>
          )}

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
