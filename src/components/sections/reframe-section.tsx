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
    title: "TRAFFIC",
    question: "Are you getting enough qualified attention?",
    description: "Likes don't pay bills. You need people who can actually afford your coaching.",
  },
  {
    step: "02",
    title: "LEAD CAPTURE",
    question: "What happens when someone becomes interested?",
    description: "Without a smart system, interested buyers just ghost you the second you send a link.",
  },
  {
    step: "03",
    title: "NURTURE",
    question: "What happens to people who aren't ready today?",
    description: "Most big clients buy after 30 to 90 days. If you don't follow up automatically, they are gone forever.",
  },
  {
    step: "04",
    title: "BOOKING",
    question: "How easily can an interested prospect become a qualified call?",
    description: "A bad booking process scares away real buyers and lets broke people waste your time.",
  },
  {
    step: "05",
    title: "FOLLOW UP",
    question: "What happens to leads who don't book, missed call, or don't buy immediately?",
    description: "If you don't automatically follow up, you are leaving massive amounts of money on the table.",
  },
];

export function ReframeSection() {
  return (
    <section id="leaks" className="scroll-mt-24 border-t border-line py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="section-label">The Diagnosis</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Where Is Your Client Acquisition System Leaking?
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
          You can have all the followers in the world and still lose high ticket clients if your system is broken.
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
          <span>Most coaches don't have one giant problem. They have several small leaks across the client journey. That's what we fix with the DUXIO Client Acquisition System.</span>
        </div>

      </div>
    </section>
  );
}
