import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AuditForm } from "@/components/audit-form";

const chaosPills = [
  "Social Followers",
  "Content Views",
  "Profile Visitors",
  "Direct Messages",
  "Opt In Leads",
  "People Inquiring About Your Program",
];

const leakCards = [
  {
    step: "01",
    title: "Traffic Leak",
    question: "Are qualified buyers reaching you?",
    description: "Attention is only profitable when it originates from prospects who can afford your premium offer.",
  },
  {
    step: "02",
    title: "Capture Leak",
    question: "What happens after someone asks a question?",
    description: "Without an asset based conversion bridge, interested buyers disappear the moment you drop a calendar link.",
  },
  {
    step: "03",
    title: "Nurture Leak",
    question: "What happens to people not buying today?",
    description: "Over eighty percent of premium clients purchase between day 30 and 90. Unnurtured inquiries vanish forever.",
  },
  {
    step: "04",
    title: "Booking Leak",
    question: "How easily do they transition to a call?",
    description: "Friction between initial interest and booking filters out serious buyers while letting unqualified callers waste your time.",
  },
  {
    step: "05",
    title: "Follow Up Leak",
    question: "What happens when someone goes silent?",
    description: "Without an automated re-engagement mechanism, recoverable high ticket deals simply evaporate from your pipeline.",
  },
];

export function ReframeSection() {
  return (
    <section id="leaks" className="scroll-mt-24 border-t border-line py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="section-label">The Core Problem</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            You Might Not Have a Lead Shortage.<br />
            You Have 5 Broken Handshakes in Your Client Journey.
          </h2>
        </div>

        {/* Tag Cloud of Attention */}
        <div className="mx-auto mb-6 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          {chaosPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm"
            >
              {pill}
            </span>
          ))}
        </div>

        <p className="mx-auto mb-12 max-w-xl text-center text-xs text-muted-foreground">
          An established coach can possess all of these assets and still lose dozens of high ticket clients because there is no connected operating system behind the attention.
        </p>

        {/* 5 Leak Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {leakCards.map((card) => (
            <div
              key={card.step}
              className="card-soft p-5 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between font-mono text-xs font-bold text-accent">
                <span>{card.step}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
              <h3 className="mb-1 text-sm font-bold text-foreground">{card.title}</h3>
              <p className="mb-2 text-xs font-medium text-muted-foreground">{card.question}</p>
              <p className="text-[11px] leading-relaxed text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mx-auto flex max-w-2xl flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl border border-accent/20 bg-accent-soft p-4 text-center text-xs font-medium text-foreground">
          <span>The gap between attention and booked clients is five compounding leaks.</span>
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-1 font-bold text-accent hover:underline whitespace-nowrap">
                Map your leaks
                <ArrowRight className="h-3 w-3" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-xl border-none bg-transparent p-0 shadow-none">
              <DialogTitle className="sr-only">Free Coach Funnel Audit</DialogTitle>
              <DialogDescription className="sr-only">Submit your details to get a free funnel audit.</DialogDescription>
              <AuditForm />
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </section>
  );
}
