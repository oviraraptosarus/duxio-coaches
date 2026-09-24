import { Check, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const niches = [
  "Business & Executive Coaches",
  "High Ticket Sales Mentors",
  "Health & Fitness Leaders",
  "Career & Leadership Guides",
  "Relationship Experts",
  "Life & Mindset Coaches",
  "Spiritual & Holistic Mentors",
  "Transformation Consultants",
];

const qualificationCriteria = [
  "You already have an established coaching or consulting offer",
  "You charge between $1,000 and $10,000+ per client",
  "You receive steady audience engagement or inbound inquiries",
  "You lack a predictable system to turn inquiries into booked calls",
  "You handle lead follow ups manually or inconsistently",
  "You want to focus on coaching rather than chasing leads",
];

export function SystemSection() {
  return (
    <section id="system" className="border-t border-line py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Coaching Niches */}
        <div className="pt-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <span className="section-label">Who This Is For</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Built For Coaches Who Have A Proven Offer And Need A Systematic Engine To Scale It.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 text-center">
            {niches.map((niche) => (
              <div key={niche} className="card-soft p-4 text-xs font-semibold text-foreground">
                {niche}
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Gate */}
        <div className="mt-16 card-elevated p-8 sm:p-10">
          <span className="section-label block mb-2">Strict Qualification Criteria</span>
          <h3 className="text-xl font-bold text-foreground mb-6">
            This Operating System Is Built Specifically For Coaches Who Match These Standards:
          </h3>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 text-xs font-medium text-foreground">
            {qualificationCriteria.map((crit, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-500">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>{crit}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 pt-5 border-t border-line text-[11px] font-bold text-destructive/80">
            DO NOT APPLY IF: You are a beginner without a real offer or an audience. We only scale
            established winners.
          </p>
        </div>
      </div>
    </section>
  );
}
