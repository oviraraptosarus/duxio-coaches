import { CreditCard, Calendar, Video, Mail, MessageSquare } from "lucide-react";

const integrations = [
  { name: "Stripe", icon: CreditCard },
  { name: "Calendly", icon: Calendar },
  { name: "Zoom", icon: Video },
  { name: "GoHighLevel", icon: MessageSquare },
  { name: "ActiveCampaign", icon: Mail },
];

export function IntegrationLogos() {
  return (
    <section className="border-t border-line bg-surface/50 py-10 px-5 text-center">
      <div className="mx-auto max-w-4xl">
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">
          Engineered to integrate seamlessly with your existing stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          {integrations.map((Integration, idx) => {
            const Icon = Integration.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm font-bold tracking-tight">{Integration.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
