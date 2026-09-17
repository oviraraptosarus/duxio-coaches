import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a massive audience for this to work?",
    a: "No. We help you make way more money from the audience you already have.",
  },
  {
    q: "Is this going to be a tech nightmare?",
    a: "No. We handle all the complicated tech for you so you can just focus on coaching.",
  },
  {
    q: "Is this just a website?",
    a: "No. It's a complete machine that gets you clients on autopilot.",
  },
  {
    q: "What happens after I request a checkup?",
    a: "You receive an objective analysis of where you are losing money. If we're a good fit, we'll show you exactly how to fix it.",
  },
  {
    q: "Who qualifies for this?",
    a: "We only work with coaches who have an active program priced at $1,000 or more, and who are already getting some attention online.",
  },
  {
    q: "Do you promise specific revenue guarantees?",
    a: "No. We show you exactly how to fix the math in your business without making fake promises.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-line py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-label block mb-3">
            Questions and Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="card-soft overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-xs leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
