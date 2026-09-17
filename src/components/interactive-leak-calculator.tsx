import { useState } from "react";
import { ArrowRight, Calculator, ChevronDown, ChevronUp, Info } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AuditForm } from "@/components/audit-form";

export function InteractiveLeakCalculator() {
  const [leads, setLeads] = useState(50);
  const [price, setPrice] = useState(3000);
  const [showMethodology, setShowMethodology] = useState(false);

  // Illustrative Additional Revenue Calculations
  const clampedLeads = Math.min(Math.max(leads, 10), 250);
  const clampedPrice = Math.min(Math.max(price, 1000), 15000);

  // We model a conservative scenario where fixing the leaks results in 2-5 additional clients depending on lead volume.
  // E.g. 50 leads * 0.06 conversion improvement = 3 additional clients.
  const additionalClients = Math.max(1, Math.round(clampedLeads * 0.06));
  const potentialRevenueMonthly = additionalClients * clampedPrice;
  const potentialRevenueAnnual = potentialRevenueMonthly * 12;

  return (
    <section id="calculator" className="scroll-mt-24 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-4xl card-elevated p-6 sm:p-10">
        
        <div className="mx-auto max-w-xl text-center mb-8">
          <span className="eyebrow-chip mb-3">
            <Calculator className="h-3.5 w-3.5" />
            Interactive Diagnostic
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-2">
            See What Your Existing Pipeline Could Be Worth
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Adjust your current inquiry volume below to estimate how much additional revenue you could generate by simply plugging the leaks in your system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-foreground">Monthly Inquiries and Profile Messages</span>
                <span className="font-mono text-sm font-bold text-accent">{clampedLeads} inquiries</span>
              </div>
              <input
                type="range"
                min={10}
                max={250}
                step={5}
                value={clampedLeads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-surface-2 accent-accent"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-foreground">Average Program Offer Price</span>
                <span className="font-mono text-sm font-bold text-accent">${clampedPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={15000}
                step={500}
                value={clampedPrice}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-surface-2 accent-accent"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-muted-foreground">Example: Additional Clients Captured</span>
                <span className="font-mono text-xs font-bold text-accent">+{additionalClients} Clients/mo</span>
              </div>
              <div className="w-full bg-surface-2 h-2 rounded-full overflow-hidden">
                <div className="bg-accent h-full w-[40%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Calculated Output Box */}
          <div className="relative overflow-hidden rounded-3xl liquid-glass-dark p-6 sm:p-8 text-white shadow-2xl border border-white/10 flex flex-col justify-between">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-accent/20 blur-2xl pointer-events-none" />
            
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                Potential Additional Revenue
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight mb-1">
                +${potentialRevenueMonthly.toLocaleString()} monthly
              </div>
              <div className="text-xs text-slate-400 font-medium mb-3">
                Annualized Impact: <span className="text-emerald-300 font-bold">+${potentialRevenueAnnual.toLocaleString()}</span> / year
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed italic opacity-80">
                Illustrative example only. Actual results depend on your offer, traffic, conversion rates, sales process and execution.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
              <span className="text-xs text-slate-300 font-medium">Ready to plug this leak?</span>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-brand-gradient text-white text-xs font-bold px-4 py-2 rounded-full transition-all hover:scale-[1.02] shadow-sm flex items-center gap-1">
                    <span>Request Diagnostic</span>
                    <ArrowRight className="h-3 w-3" />
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

        {/* Expandable Methodology & Assumptions Drawer */}
        <div className="mt-8 pt-4 border-t border-line text-left">
          <button
            onClick={() => setShowMethodology(!showMethodology)}
            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition"
          >
            <Info className="h-3.5 w-3.5 text-accent" />
            <span>Calculation Methodology and Benchmark Assumptions</span>
            {showMethodology ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          {showMethodology && (
            <div className="mt-3 p-4 rounded-2xl bg-surface text-xs leading-relaxed text-muted-foreground space-y-2 animate-in fade-in duration-200">
              <p>
                <strong>Conversion Improvement (6%):</strong> Represents a conservative bump in overall conversion when an automated, reliable qualification and follow-up system is installed.
              </p>
              <p>
                <strong>Formula:</strong> <code>Additional Clients = Inquiries × 0.06</code>.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
