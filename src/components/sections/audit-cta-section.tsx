import { AuditForm } from "@/components/audit-form";
import { ShieldCheck } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Share your business metrics",
    body: "Provide your coaching offer details, price point, and monthly inquiry volume in the form.",
  },
  {
    n: "2",
    title: "We analyze your acquisition journey",
    body: "We diagnose specific revenue leaks across traffic, capture, nurture, and booking.",
  },
  {
    n: "3",
    title: "Receive your diagnostic blueprint",
    body: "Receive an actionable architecture breakdown. If there is strong mutual fit, we review the system together.",
  },
];

export function AuditCtaSection() {
  return (
    <section id="audit" className="scroll-mt-24 border-t border-line bg-surface py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-2">
            <span className="section-label block mb-3">
              Free Coach Funnel / Client Acquisition Audit
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
              Find The Leaks In Your Client Acquisition System
            </h2>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Get a breakdown of where you're losing leads, bookings and sales across Traffic, Lead Capture, Nurturing, Booking and Follow-Up.
            </p>

            <div className="mt-10 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                How It Works
              </h3>
              <div className="space-y-5">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-3.5 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-sm">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{s.title}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 space-y-6 border-t border-line pt-8">
              {/* Scarcity */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                  <span className="text-[10px] font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Capacity Limit: 2 Spots Remaining</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                    Due to the bespoke nature of this architecture review, we only onboard 5 coaches per week for deep-dive diagnostics.
                  </p>
                </div>
              </div>

              {/* Risk Reversal */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-2 border border-line">
                <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-foreground">Zero Sales Pressure Guarantee</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                    This is a diagnostic architecture review, not a pitch fest. If we aren't a mutual fit, you walk away with the exact blueprint to fix your leaks yourself. No obligations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3">
            <AuditForm />
          </div>

        </div>
      </div>
    </section>
  );
}
