import { Target, MonitorPlay, Zap, Megaphone, LineChart } from "lucide-react";

const components = [
  {
    title: "STRATEGY",
    description: "Offer positioning, audience research, core problem research and funnel strategy.",
    icon: Target,
  },
  {
    title: "FUNNEL",
    description: "Landing page, lead magnet, application page, booking page, confirmation page and sales page where appropriate.",
    icon: MonitorPlay,
  },
  {
    title: "AUTOMATION",
    description: "Email follow up, SMS follow up, appointment reminders, missed call follow up, nurturing and reactivation.",
    icon: Zap,
  },
  {
    title: "CONVERSION",
    description: "Copywriting, CTA strategy, sales messaging, offer positioning and call booking optimization.",
    icon: Megaphone,
  },
  {
    title: "OPTIMIZATION",
    description: "Track leads, bookings, attendance rate, close rate and continuously improve the system.",
    icon: LineChart,
  },
];

export function WhatWeBuildSection() {
  return (
    <section className="py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground uppercase">
            What's Inside Your Client Acquisition System
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            This is not a generic menu of disconnected services. It is one unified product made of interconnected components engineered to turn attention into clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {components.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div key={idx} className="card-soft p-6 flex flex-col items-center text-center hover:border-accent/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-[11px] leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
