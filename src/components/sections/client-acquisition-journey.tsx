import { Eye, UserPlus, Sprout, Filter, CalendarCheck, RotateCcw, TrendingUp } from "lucide-react";

const journeySteps = [
  {
    step: "ATTENTION",
    description: "Content, outreach and existing traffic bring prospects into the journey.",
    icon: Eye,
  },
  {
    step: "CAPTURE",
    description: "Landing pages, forms and lead magnets capture interested prospects.",
    icon: UserPlus,
  },
  {
    step: "NURTURE",
    description: "Email/SMS follow up keeps prospects engaged when they aren't ready immediately.",
    icon: Sprout,
  },
  {
    step: "QUALIFY",
    description: "Forms and qualification identify serious prospects.",
    icon: Filter,
  },
  {
    step: "BOOK",
    description: "A streamlined booking experience turns interest into sales conversations.",
    icon: CalendarCheck,
  },
  {
    step: "FOLLOW UP",
    description: "Reminders, missed call follow up and reactivation prevent leads from disappearing.",
    icon: RotateCcw,
  },
  {
    step: "CONVERT",
    description: "Better messaging, CTAs and sales process optimization help turn more opportunities into clients.",
    icon: TrendingUp,
  },
];

export function ClientAcquisitionJourney() {
  return (
    <section className="border-t border-line bg-surface py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="section-label">The DUXIO Client Acquisition System</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            One system that moves prospects from first touch to sales conversation.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            Without relying on manual follow up or a patchwork of disconnected software.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-px bg-line sm:-translate-x-1/2"></div>

          <div className="space-y-6">
            {journeySteps.map((s, idx) => {
              const Icon = s.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={s.step} className={`relative flex items-center ${isEven ? "sm:flex-row-reverse" : "sm:flex-row"} flex-row group`}>
                  
                  {/* Content Box */}
                  <div className={`ml-16 sm:ml-0 sm:w-1/2 ${isEven ? "sm:pl-10" : "sm:pr-10"}`}>
                    <div className="card-elevated p-5 transition-transform group-hover:-translate-y-1">
                      <h3 className="text-sm font-bold text-foreground mb-1">{s.step}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">{s.description}</p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-4 sm:left-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface -translate-x-1/2 group-hover:border-accent group-hover:text-accent transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
