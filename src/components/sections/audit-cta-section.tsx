import { AuditForm } from "@/components/audit-form";

const steps = [
  {
    n: "1",
    title: "Share your business details",
    body: "Provide your coaching offer, price point, and monthly inquiry volume in the form.",
  },
  {
    n: "2",
    title: "We analyze your acquisition journey",
    body: "We diagnose specific revenue leaks across traffic, capture, nurture, and booking.",
  },
  {
    n: "3",
    title: "Receive your diagnostic opportunities",
    body: "Receive an actionable breakdown. If there is strong alignment, we review the system together.",
  },
];

export function AuditCtaSection() {
  return (
    <section
      id="audit"
      className="scroll-mt-20 border-t border-black/[0.06] bg-surface py-20 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0071E3]/20 bg-[#0071E3]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0071E3] mb-4">
              Diagnostic Intake
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D1D1F] leading-tight">
              Identify Where Your Client Acquisition Journey Is Leaking
            </h2>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Submit your coaching details. We will map your complete acquisition flow, pinpoint
              where qualified inquiries evaporate, and show you the exact infrastructure required to
              fix it.
            </p>

            <div className="mt-10 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                Diagnostic Review Process
              </h3>
              <div className="space-y-5">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-3.5 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0071E3] text-xs font-bold text-white shadow-sm">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#1D1D1F]">{s.title}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-[11px] leading-relaxed text-muted-foreground border-t border-black/[0.05] pt-4">
              We do not make exaggerated or guaranteed revenue promises. The diagnostic provides
              clear strategic clarity prior to any advisory conversation.
            </p>
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
