import { Play, ArrowRight, ShieldCheck, Triangle, Hexagon, Circle, Square } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AuditForm } from "@/components/audit-form";

const vslTakeaways = [
  "Why sending booking links in direct messages destroys conversion",
  "How to capture interested buyers without manual messaging fatigue",
  "The automated qualification filter that eliminates bad fit Zoom calls",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden mesh-hero-glow pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          
          <span className="eyebrow-chip mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden />
            Private Strategic Briefing for Established Practices
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight text-foreground">
            You Do Not Have a Traffic Shortage.<br className="hidden sm:block" />
            <span className="text-muted-foreground">You Possess an Operational Void Between Attention and Cash.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            You maintain active social channels, daily inquiries, and regular audience engagement. Yet you lose hours typing manual replies while qualified prospects vanish before booking. Discover the proprietary architecture that transforms existing attention into predictable client revenue.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center">
            <a
              href="#vsl"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:opacity-95 sm:w-auto"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Watch Strategic Executive Briefing
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-line bg-white px-8 py-3.5 text-xs font-bold text-foreground shadow-sm transition-colors hover:bg-surface sm:w-auto"
                >
                  Request Pipeline Diagnostic Evaluation
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-xl border-none bg-transparent p-0 shadow-none">
                <DialogTitle className="sr-only">Pipeline Diagnostic Evaluation</DialogTitle>
                <DialogDescription className="sr-only">Submit your details to request an architecture evaluation.</DialogDescription>
                <AuditForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4 text-xs text-muted-foreground">
            <p className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              Rigorous diagnostic analysis. We isolate your exact operational leaks.
            </p>
            <span className="hidden h-3 w-px bg-line sm:block" aria-hidden />
            <p className="inline-flex items-center gap-1.5 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Engineered exclusively for coaching programs priced $1,000 to $10,000 or more
            </p>
          </div>
        </div>

        {/* VSL Stage */}
        <div id="vsl" className="scroll-mt-24 mt-12">
          <div className="card-elevated p-6 sm:p-8">
            <div className="mb-4 text-left">
              <span className="section-label">Executive Briefing</span>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Where Are You Losing Potential Clients?
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Watch this eight minute breakdown to discover why manual direct messaging destroys your conversion velocity.
              </p>
            </div>

            {/* Obsidian Theater */}
            <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl liquid-glass-dark flex flex-col items-center justify-center text-center p-6 shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient pl-1 shadow-lg text-white">
                  <Play className="h-5 w-5 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-md">
                Strategic Briefing · 8 Minutes
              </div>
            </div>

            {/* Takeaway Chips */}
            <div className="my-6 grid grid-cols-1 gap-3 text-xs font-medium text-foreground sm:grid-cols-3">
              {vslTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-xl border border-line bg-surface p-3.5 text-left">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Sub-VSL Diagnostic Callout */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-accent/20 bg-accent-soft p-5">
              <div className="text-left">
                <h4 className="text-sm font-bold text-foreground">After reviewing, request your private Pipeline Diagnostic.</h4>
                <p className="text-xs text-muted-foreground">We will map your complete client journey and reveal your biggest revenue opportunities.</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-sm transition-all hover:opacity-95 whitespace-nowrap">
                    Request Diagnostic
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-xl border-none bg-transparent p-0 shadow-none">
                  <DialogTitle className="sr-only">Pipeline Diagnostic Evaluation</DialogTitle>
                  <DialogDescription className="sr-only">Submit your details to request an architecture evaluation.</DialogDescription>
                  <AuditForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 border-t border-line pt-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Trusted by established practices scaling premium programs
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale sm:gap-14">
            <div className="flex items-center gap-2 text-base font-bold text-foreground">
              <Triangle className="h-5 w-5 fill-current" /> VERTEX
            </div>
            <div className="flex items-center gap-2 text-base font-bold text-foreground">
              <Hexagon className="h-5 w-5 fill-current" /> NEXUS
            </div>
            <div className="flex items-center gap-2 text-base font-bold text-foreground">
              <Circle className="h-5 w-5 fill-current" /> LUMEN
            </div>
            <div className="flex items-center gap-2 text-base font-bold text-foreground">
              <Square className="h-5 w-5 fill-current" /> QUARTZ
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
