import { Magnet, UserPlus, Sprout, CalendarCheck, Clock, Check, Play } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "ATTRACT",
    body: "Transform organic content, referrals, and outreach into qualified buyer attention.",
    icon: Magnet,
  },
  {
    n: "02",
    title: "CAPTURE",
    body: "Provide interested prospects an asset based next step instead of relying on manual direct messaging.",
    icon: UserPlus,
  },
  {
    n: "03",
    title: "NURTURE",
    body: "Automatically educate and follow up with prospective clients who are not ready to purchase on day one.",
    icon: Sprout,
  },
  {
    n: "04",
    title: "QUALIFY AND BOOK",
    body: "Filter out tire kickers before they reach your calendar and ensure high show up rates.",
    icon: CalendarCheck,
  },
  {
    n: "05",
    title: "FOLLOW UP AND CONVERT",
    body: "Deploy an automated re-engagement engine for prospects who miss calls or need extended evaluation.",
    icon: Clock,
  },
];

const niches = [
  "Business Coaches",
  "Executive Coaches",
  "Health and Wellness",
  "Fitness Coaches",
  "Relationship Coaches",
  "Career Mentors",
  "Transformation Coaches",
  "Sales Coaches",
];

const qualificationCriteria = [
  "You already possess an active premium coaching program",
  "Your offer price ranges from $1,000 to $10,000 or more",
  "You receive organic audience attention via social channels or referrals",
  "Interested prospects inquire but frequently fail to book discovery calls",
  "You manage follow up manually across direct messages and text",
  "You know high value clients are slipping through operational gaps",
  "You want a predictable asset instead of constant manual outreach",
];

export function SystemSection() {
  return (
    <section id="system" className="scroll-mt-24 border-t border-line bg-surface py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="section-label">The Solution</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            The Duxio Acquisition Architecture
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            A unified infrastructure from the initial moment of discovery to the closed high ticket enrollment.
          </p>
        </div>

        {/* 5-Step Connected Flow */}
        <div className="mx-auto max-w-2xl space-y-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={s.n}>
                <div className="flex items-start gap-4 card-soft p-5 transition-all hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-accent/10 px-2 py-0.5 font-mono text-[11px] font-bold text-accent">
                        {s.n}
                      </span>
                      <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="py-1 text-center font-mono text-xs font-bold text-line">↓</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#vsl"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:opacity-95"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Watch the Free Strategic Training
          </a>
          <p className="mt-4 text-xs font-medium text-muted-foreground">
            We do not sell software tools. We architect the client acquisition infrastructure around your business.
          </p>
        </div>

        {/* Coaching Niches */}
        <div className="mt-20 border-t border-line pt-16">
          <div className="mx-auto max-w-xl text-center mb-8">
            <span className="section-label">Audience Focus</span>
            <h3 className="mt-2 text-xl font-bold text-foreground">Coaching Niches We Specialize In</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 text-center">
            {niches.map((niche) => (
              <div
                key={niche}
                className="card-soft p-4 text-xs font-semibold text-foreground"
              >
                {niche}
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Gate */}
        <div className="mt-16 card-elevated p-8 sm:p-10">
          <span className="section-label block mb-2">
            Strict Qualification Criteria
          </span>
          <h3 className="text-xl font-bold text-foreground mb-6">
            This Operating System Is Built Specifically For Coaches Who Match These Standards:
          </h3>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 text-xs font-medium text-foreground">
            {qualificationCriteria.map((crit, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-700">
                  <Check className="h-3 w-3" />
                </span>
                <span>{crit}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 pt-5 border-t border-line text-[11px] text-muted-foreground">
            Important Disqualification Notice: This infrastructure is not intended for beginners starting without an existing program offer or audience demand.
          </p>
        </div>

      </div>
    </section>
  );
}
