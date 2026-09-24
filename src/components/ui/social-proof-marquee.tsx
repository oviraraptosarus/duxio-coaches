import { CheckCircle2, TrendingUp, Zap, Clock } from "lucide-react";

const metrics = [
  { text: "No more stalled calls. We filter the non buyers out.", icon: TrendingUp },
  { text: "Stop sending 1,000 cold emails to get 1 reply. We use verified data.", icon: Zap },
  { text: "Clients buy when they're ready. We build the 90-day follow up.", icon: Clock },
  { text: "Stop managing spreadsheets. It's totally automated.", icon: CheckCircle2 },
  { text: "Don't depend on unpredictable referrals to survive.", icon: CheckCircle2 },
];

export function SocialProofMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-line bg-surface py-3 relative flex">
      <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-surface to-transparent sm:w-24"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-surface to-transparent sm:w-24"></div>

      {/* We render two identical marquee containers side by-side that each translate -100% */}
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className="flex shrink-0 items-center gap-2">
              <Icon className="h-4 w-4 text-accent" />
              <span className="whitespace-nowrap text-xs font-bold tracking-wide text-muted-foreground uppercase">
                {metric.text}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8" aria-hidden="true">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className="flex shrink-0 items-center gap-2">
              <Icon className="h-4 w-4 text-accent" />
              <span className="whitespace-nowrap text-xs font-bold tracking-wide text-muted-foreground uppercase">
                {metric.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
