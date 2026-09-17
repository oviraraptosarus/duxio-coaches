import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a larger audience before this infrastructure functions?",
    a: "No. The system is engineered to help established coaches capitalize on their current audience attention and inquiries.",
  },
  {
    q: "Will I need to manage complicated technical software?",
    a: "No. We architect the connected backend so you can focus entirely on coaching and client delivery.",
  },
  {
    q: "Is this merely a website or simple lead capture page?",
    a: "No. Duxio builds the entire client acquisition journey across Attraction, Capture, Nurture, Qualification, and Automated Follow Up.",
  },
  {
    q: "What occurs after submitting the audit request?",
    a: "You receive an analysis of your operational gaps. If there is strong alignment, we review the recommended system with you.",
  },
  {
    q: "Is the funnel audit completely complimentary?",
    a: "Yes. The audit provides clear strategic diagnostic insight prior to any advisory discussion.",
  },
  {
    q: "Do you promise specific revenue guarantees?",
    a: "No. We demonstrate mathematical pipeline leverage and economic value without making exaggerated claims.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-t border-black/[0.06] py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0071E3]/20 bg-[#0071E3]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0071E3] mb-3">
            Questions and Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D1D1F]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-black/[0.06] bg-gradient-to-b from-white to-[#FAFBFD] shadow-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-[#1D1D1F]">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0071E3]" : ""
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
