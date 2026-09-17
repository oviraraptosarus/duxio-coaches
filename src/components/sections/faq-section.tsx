import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a larger audience before this infrastructure functions?",
    a: "No. The system is engineered to help established practices capitalize on their existing audience attention and inquiry volume.",
  },
  {
    q: "Will I need to manage complicated technical software?",
    a: "No. We architect the entire connected backend so you can focus exclusively on coaching and client delivery.",
  },
  {
    q: "Is this merely a website or simple lead capture page?",
    a: "No. DUXIO builds the entire client acquisition journey across Attraction, Capture, Nurture, Qualification, and Automated Follow Up.",
  },
  {
    q: "What occurs after submitting the diagnostic request?",
    a: "You receive an objective analysis of your operational gaps. If there is strong strategic alignment, we review the recommended system blueprint with you.",
  },
  {
    q: "What are the criteria for receiving a Diagnostic Evaluation?",
    a: "We evaluate practices with active coaching programs priced at $1,000 or more that receive regular audience engagement and inquiries.",
  },
  {
    q: "Do you promise specific revenue guarantees?",
    a: "No. We demonstrate mathematical pipeline leverage and economic value without making exaggerated claims.",
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
