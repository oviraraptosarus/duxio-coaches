import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Are you just another agency selling generic 'AI Hype'?",
    a: "Absolutely not. The market is flooded with 'AI Gurus' spamming your inbox with fake promises. We don't sell hype. We sell cold, hard operational outcomes: recovering your missed revenue, slashing your discovery time, and filtering out non buyers.",
  },
  {
    q: "My coaching is human to-human. Will this make me look like a bot?",
    a: "No. We automate the boring admin work, not the coaching. We use automation to handle the tedious follow ups and lead qualification. When you finally get on a call, it is 100% human to-human, and they are fully pre framed.",
  },
  {
    q: "Can AI really replace my judgment and empathy?",
    a: "Never. AI cannot replace human empathy or strategic judgment. We do not use AI to coach. We use it to protect your time, so you only apply your expert judgment to clients who actually have the budget to pay you.",
  },
  {
    q: "Is this going to be a tech nightmare for me to maintain?",
    a: "You won't touch a single piece of software. You are a coach, not a mechanic. We build the entire infrastructure, we monitor it to make sure it never breaks, and we improve it over time. You just focus on closing the qualified calls.",
  },
  {
    q: "How do I know this will actually make me money?",
    a: "Because we track hard math, not vanity metrics. We don't care about 'likes' or 'engagement.' We measure exactly how much time you save and exactly how much dead pipeline revenue we recover. Clients still want to see the numbers, and we deliver them.",
  },
  {
    q: "What happens after I request a diagnostic?",
    a: "You get a bespoke, interactive breakdown of exactly where your specific pipeline is leaking money. If the math makes sense for both of us, we'll show you how to fix it.",
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
