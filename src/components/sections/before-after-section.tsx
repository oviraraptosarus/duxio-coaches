import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AuditForm } from "@/components/audit-form";

const beforePoints = [
  "Traffic",
  "Direct Message",
  "Manual Follow-Up",
  "Maybe Booking",
  "Forgotten Lead",
];

const afterPoints = [
  "Attention",
  "Capture & Nurture",
  "Qualify & Book",
  "Automated Follow-Up",
  "Sales Conversation",
];

export function BeforeAfterSection() {
  return (
    <section className="border-t border-line py-20 px-5 sm:px-8 bg-background">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="section-label">The Transformation</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Stop Managing Prospects.<br />Build The System That Manages The Journey.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            A fragmented process leaks money. A connected system prints it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Before Column */}
          <div className="card-soft border-destructive/20 bg-destructive/5 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <XCircle className="w-24 h-24 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                <XCircle className="w-4 h-4" />
              </span>
              The Old Way
            </h3>
            <ul className="space-y-4">
              {beforePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                  <span className="mt-0.5 text-destructive/70 shrink-0">✕</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Column */}
          <div className="card-elevated border-emerald-500/20 bg-emerald-500/5 p-8 relative overflow-hidden ring-1 ring-emerald-500/10">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle2 className="w-24 h-24 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-emerald-500 mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              The Duxio System
            </h3>
            <ul className="space-y-4">
              {afterPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:opacity-95">
                <span>Request Your Infrastructure Diagnostic</span>
                <ArrowRight className="h-4 w-4" />
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
    </section>
  );
}
