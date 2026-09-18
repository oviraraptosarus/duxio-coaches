import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I got the diagnostic evaluation and they showed me exactly where I was bleeding money. It was so revealing I literally paid them the next day to build my entire funnel. Best investment ever.",
    author: "Brett Silverman",
    role: "Fitness Coach",
  },
  {
    quote:
      "The diagnostic evaluation found $10k a month in deals I was losing because I wasn't following up properly. I hired Duxio to build the sales machine for me and it paid for itself in two weeks.",
    author: "Jessica Chen",
    role: "Sales Coach",
  },
  {
    quote:
      "I thought my setup was fine until they did the diagnostic and proved I was losing half my leads. I bought their full system and now I just wake up to booked calls from real buyers.",
    author: "Dr. Marcus Thorne",
    role: "Leadership Coach",
  },
];

export function TestimonialSection() {
  return (
    <section className="border-t border-line bg-surface-2 py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent mb-3">
            Real Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            What happens when you plug the leaks
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Real results from coaches who got the diagnostic evaluation and built the machine.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border border-line bg-card p-7 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-xs leading-relaxed text-card-foreground">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3.5 border-t border-line pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 font-bold text-xs text-accent">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-card-foreground">{t.author}</div>
                  <div className="text-[11px] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
