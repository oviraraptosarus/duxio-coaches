import { createFileRoute, useParams } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ShieldCheck,
  ArrowRight,
  Copy,
  Check,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
  Calendar,
  TrendingUp,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/audits/$token")({
  head: () => ({
    meta: [
      { title: "DUXIO | Pipeline Diagnostic Report" },
      {
        name: "description",
        content:
          "Your personalized client acquisition system diagnostic and revenue recovery blueprint.",
      },
    ],
  }),
  component: AuditReportPage,
});

/* ── mock data lookup (server would hydrate via token) ── */
function useAuditData(token: string) {
  return {
    token,
    firstName: "Coach",
    niche: "Executive Leadership",
    offer: "12 Week Mastery Accelerator",
    offerPrice: 5000,
    monthlyInquiries: 60,
    monthlyBookedCalls: 8,
    biggestChallenge: "Prospects ghosting direct message booking links",
    socialProfile: "@coach",
    website: "",
    healthScore: 34,
    annualizedLeak: 156000,
  };
}

/* ── pipeline stages ── */
const stages = [
  {
    name: "Attraction",
    status: "ok" as const,
    summary: "Content drives consistent inbound visibility.",
    leak: 0,
  },
  {
    name: "Capture",
    status: "critical" as const,
    summary:
      "Zero automated capture mechanism. Prospects land on profile and leave without entering a pipeline.",
    leak: 38000,
  },
  {
    name: "Nurture",
    status: "critical" as const,
    summary:
      "No educational nurture sequence. Delayed buyers evaporate after initial inquiry.",
    leak: 52000,
  },
  {
    name: "Qualification",
    status: "critical" as const,
    summary:
      "Booking links sent raw without intake filtering. Unqualified callers consume fifty percent of sales capacity.",
    leak: 41000,
  },
  {
    name: "Conversion",
    status: "warning" as const,
    summary:
      "No pre-call framing assets or show-up sequences. Show rate estimated below sixty percent.",
    leak: 25000,
  },
];

/* ── repair toggles ── */
const repairs = [
  {
    id: "capture",
    label: "Instant DM Conversational Routing",
    desc: "Automated asset bridge that pre-sells prospects before they reach your calendar.",
    recoveryPct: 0.25,
  },
  {
    id: "nurture",
    label: "90 Day Automated Educational Nurture",
    desc: "Multi-touch email and SMS sequence that reactivates delayed buyers on autopilot.",
    recoveryPct: 0.33,
  },
  {
    id: "qualify",
    label: "Frictionless Dynamic Intake Filters",
    desc: "Two step qualification gate filtering non-buyers before they consume calendar slots.",
    recoveryPct: 0.22,
  },
  {
    id: "showup",
    label: "Show Up Pre-Framing Assets",
    desc: "Automated pre-call video, reminder sequence, and value anchoring to drive show rates above eighty five percent.",
    recoveryPct: 0.2,
  },
];

/* ── roadmap phases ── */
const roadmap = [
  {
    phase: "Phase 1",
    title: "Intake and Capture Infrastructure",
    timeline: "Days 1 through 14",
    deliverables: [
      "Conversational DM routing engine",
      "Automated lead capture landing architecture",
      "CRM pipeline configuration and tagging logic",
    ],
  },
  {
    phase: "Phase 2",
    title: "Autonomous Nurture and Dynamic Qualification",
    timeline: "Days 15 through 30",
    deliverables: [
      "90 day educational email and SMS nurture sequences",
      "Dynamic intake qualification filters",
      "Calendar integration with pre-call framing assets",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scaling and Conversion Calibration",
    timeline: "Days 31 through 60",
    deliverables: [
      "Show rate optimization and reminder automation",
      "Pipeline analytics dashboard deployment",
      "Conversion velocity tuning and A/B split testing",
    ],
  },
];

function AuditReportPage() {
  const { token } = useParams({ from: "/audits/$token" });
  const data = useAuditData(token);
  const [copied, setCopied] = useState(false);
  const [activeRepairs, setActiveRepairs] = useState<Set<string>>(new Set());
  const [inquirySlider, setInquirySlider] = useState(data.monthlyInquiries);
  const [priceSlider, setPriceSlider] = useState(data.offerPrice);

  const totalLeak = stages.reduce((s, st) => s + st.leak, 0);

  const recoveredRevenue = useMemo(() => {
    let recovered = 0;
    repairs.forEach((r) => {
      if (activeRepairs.has(r.id)) {
        recovered += inquirySlider * priceSlider * r.recoveryPct * 0.12;
      }
    });
    return Math.round(recovered);
  }, [activeRepairs, inquirySlider, priceSlider]);

  const toggleRepair = (id: string) => {
    setActiveRepairs((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const copyToken = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const statusIcon = (s: "ok" | "critical" | "warning") =>
    s === "ok" ? (
      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
    ) : s === "critical" ? (
      <XCircle className="h-4 w-4 text-rose-500" />
    ) : (
      <AlertTriangle className="h-4 w-4 text-amber-500" />
    );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans antialiased selection:bg-accent/15 selection:text-accent">
      <SiteHeader />

      {/* ── STICKY REPORT HEADER ── */}
      <div className="sticky top-4 z-50 mx-auto mt-24 w-[calc(100%-2rem)] max-w-5xl">
        <div className="flex items-center justify-between rounded-2xl border border-line bg-surface/75 px-5 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold tracking-[-0.03em]">DUXIO</span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
              DIAGNOSTIC COMPLETE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[10px] tracking-wide text-muted-foreground">
              {token}
            </span>
            <button
              onClick={copyToken}
              className="rounded-lg border border-line bg-card p-1.5 text-muted-foreground transition hover:bg-surface-2"
              title="Copy token"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-5xl space-y-10 px-4 pt-8 pb-20 sm:px-6">

        {/* ── 1. HERO SCORECARD ── */}
        <section className="relative overflow-hidden rounded-3xl border border-line bg-card p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_12px_32px_-8px_rgba(0,0,0,0.05)] sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,85,0,0.05),transparent_60%)]" />
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                <Sparkles className="h-3 w-3" />
                Pipeline Diagnostic Report
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                {data.firstName}, your acquisition system is operating at{" "}
                <span className="text-rose-500">{data.healthScore}%</span> capacity.
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Based on your submitted parameters, we identified critical infrastructure gaps across
                your {data.niche} practice pipeline. Your current system is estimated to leave{" "}
                <strong className="text-foreground">
                  ${totalLeak.toLocaleString()} per year
                </strong>{" "}
                in unrealized revenue on the table.
              </p>
            </div>

            {/* Health Score Ring */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative h-36 w-36">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" opacity="0.1" strokeWidth="10" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke={data.healthScore < 50 ? "#EF4444" : "#FF5500"}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(data.healthScore / 100) * 314} 314`}
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold">{data.healthScore}</span>
                  <span className="text-[10px] font-semibold text-muted-foreground">of 100</span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                Critical Infrastructure Gaps
              </span>
            </div>
          </div>
        </section>

        {/* ── 2. PIPELINE LEAK DIAGNOSTIC ── */}
        <section>
          <h2 className="mb-4 text-lg font-bold tracking-[-0.03em]">
            Pipeline Leak Diagnostic
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            {stages.map((stage) => (
              <div
                key={stage.name}
                className={`rounded-2xl border p-4 text-xs ${
                  stage.status === "critical"
                    ? "border-destructive/30 bg-destructive/10"
                    : stage.status === "warning"
                      ? "border-amber-500/30 bg-amber-500/10"
                      : "border-line bg-card"
                }`}
              >
                <div className="mb-2 flex items-center gap-1.5">
                  {statusIcon(stage.status)}
                  <span className="font-bold text-[11px] uppercase tracking-wider">
                    {stage.name}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground">{stage.summary}</p>
                {stage.leak > 0 && (
                  <div className="mt-2 rounded-lg bg-rose-100/60 px-2 py-1 text-center">
                    <span className="text-[10px] font-bold text-rose-600">
                      ${stage.leak.toLocaleString()}/yr leaked
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. INTERACTIVE PIPELINE REPAIR SANDBOX ── */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12141A] to-[#1D1D1F] p-8 text-white shadow-2xl backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,85,0,0.12),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="mb-1 text-lg font-bold tracking-[-0.03em]">
              Interactive Pipeline Repair Sandbox
            </h2>
            <p className="mb-6 text-xs text-white/50">
              Toggle system upgrades to simulate your recovered pipeline revenue.
            </p>

            {/* Sliders */}
            <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  Monthly Inquiries: {inquirySlider}
                </label>
                <input
                  type="range"
                  min={10}
                  max={200}
                  value={inquirySlider}
                  onChange={(e) => setInquirySlider(+e.target.value)}
                  className="w-full accent-accent"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  Offer Price: ${priceSlider.toLocaleString()}
                </label>
                <input
                  type="range"
                  min={500}
                  max={15000}
                  step={250}
                  value={priceSlider}
                  onChange={(e) => setPriceSlider(+e.target.value)}
                  className="w-full accent-accent"
                />
              </div>
            </div>

            {/* Repair Toggles */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {repairs.map((r) => {
                const active = activeRepairs.has(r.id);
                return (
                  <button
                    key={r.id}
                    onClick={() => toggleRepair(r.id)}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                      active
                        ? "border-accent/40 bg-accent/10"
                        : "border-white/10 bg-card/5 hover:bg-card/8"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                        active
                          ? "border-accent bg-accent"
                          : "border-white/20 bg-card/5"
                      }`}
                    >
                      {active && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <div>
                      <span className="block text-xs font-bold">{r.label}</span>
                      <span className="mt-0.5 block text-[10px] text-white/50">{r.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Recovery Result */}
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-accent/80">
                Estimated Recovered Annual Revenue
              </span>
              <span className="mt-1 block text-4xl font-extrabold tracking-[-0.04em] text-accent">
                ${recoveredRevenue.toLocaleString()}
                <span className="text-lg text-white/40">/yr</span>
              </span>
              {activeRepairs.size === 0 && (
                <span className="mt-1 block text-[10px] text-white/40">
                  Toggle system upgrades above to simulate recovery.
                </span>
              )}
            </div>
          </div>
        </section>

        {/* ── 4. ARCHITECTURE COMPARE ── */}
        <section className="rounded-3xl border border-line bg-card p-8 shadow-sm sm:p-10">
          <h2 className="mb-6 text-lg font-bold tracking-[-0.03em]">
            System Architecture Comparison
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Current */}
            <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                <XCircle className="h-4 w-4" />
                Current Fragile Process
              </h3>
              <div className="space-y-2">
                {[
                  "Manual direct messages",
                  "Raw Calendly link drops",
                  "Zero pre-call qualification",
                  "No automated follow up",
                  "Unqualified no-shows",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11px] text-rose-700">
                    <XCircle className="h-3 w-3 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* DUXIO */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Zap className="h-4 w-4" />
                DUXIO Client Acquisition OS
              </h3>
              <div className="space-y-2">
                {[
                  "Unified conversational lead capture",
                  "Autonomous logic qualifier engine",
                  "Omnichannel 90 day nurture sequences",
                  "Pre-call framing and show-up assets",
                  "Qualified high-ticket conversion pipeline",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11px] text-accent">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. IMPLEMENTATION ROADMAP ── */}
        <section className="rounded-3xl border border-line bg-background p-6 sm:p-8">
          <h2 className="mb-5 text-lg font-bold tracking-[-0.03em]">
            Implementation Roadmap
          </h2>
          <div className="space-y-4">
            {roadmap.map((p) => (
              <div key={p.phase} className="rounded-2xl border border-line bg-card p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold text-accent">
                    {p.phase}
                  </span>
                  <span className="text-[10px] font-semibold text-muted-foreground">{p.timeline}</span>
                </div>
                <h3 className="mb-2 text-sm font-bold tracking-[-0.02em]">{p.title}</h3>
                <ul className="space-y-1">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. BOOKING CTA ── */}
        <section className="mx-auto max-w-3xl rounded-3xl border border-white/90 bg-card/85 p-8 text-center shadow-[0_20px_50px_rgba(255,85,0,0.12)] ring-1 ring-accent/20 backdrop-blur-2xl sm:p-12">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <Calendar className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-2xl font-extrabold tracking-[-0.04em]">
            Schedule Your System Architecture Strategy Review
          </h2>
          <p className="mx-auto mt-2 max-w-md text-xs text-muted-foreground leading-relaxed">
            In a focused ten minute walkthrough, our solutions team will present your custom
            implementation blueprint and deployment timeline based on the diagnostic findings above.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold text-amber-600">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>2 Consultations Available for Current Sprint</span>
          </div>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-xs font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
            <span>BOOK MY STRATEGY REVIEW</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
            <ShieldCheck className="h-3 w-3 text-emerald-500" />
            <span>Confidential. Your diagnostic data is encrypted end to end.</span>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
