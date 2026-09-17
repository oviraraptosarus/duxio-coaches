import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Duxio mapped our client journey and identified twelve thousand dollars in monthly recurring revenue we were losing. The diagnostic breakdown alone provided immediate clarity.",
    author: "Sarah J.",
    role: "Fitness Business Coach",
  },
  {
    quote:
      "We were driving thousands of profile views but getting very few booked calls. We implemented the Duxio system and enrolled four premium clients the following month.",
    author: "Marcus T.",
    role: "Sales Advisor",
  },
  {
    quote:
      "The progressive intake architecture doubled our inquiry capture rate. It is the most frictionless acquisition infrastructure we have deployed.",
    author: "Elena R.",
    role: "Executive Leadership Coach",
  },
];

export function TestimonialSection() {
  return (
    <section className="border-t border-black/[0.06] bg-gradient-to-b from-[#FBFBFD] to-[#F5F5F7] py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0071E3]/20 bg-[#0071E3]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0071E3] mb-3">
            Real Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D1D1F]">
            Proven Experience from Established Coaches
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            See how coaches transform uncaptured attention into predictable revenue.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border border-black/[0.06] bg-white p-7 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-[#0071E3] text-[#0071E3]" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-xs leading-relaxed text-[#1D1D1F]">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3.5 border-t border-black/[0.05] pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0071E3]/10 font-bold text-xs text-[#0071E3]">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1D1D1F]">{t.author}</div>
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
