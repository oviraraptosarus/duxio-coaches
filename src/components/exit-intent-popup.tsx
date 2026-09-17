import { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (!sessionStorage.getItem("exit_intent_shown")) {
          setOpen(true);
          sessionStorage.setItem("exit_intent_shown", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[calc(100%-2rem)] sm:w-full max-w-md border-none bg-transparent p-0 shadow-none">
        <DialogTitle className="sr-only">Exit Intent Offer</DialogTitle>
        <DialogDescription className="sr-only">
          Get the free One Page Acquisition Checklist before you leave.
        </DialogDescription>

        <div className="relative z-10 w-full overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-6 sm:p-8 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#0071E3]/10 text-[#0071E3]">
              <Download className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h2 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F]">
              Leaving so soon?
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Before you depart, download the <strong>One Page Client Acquisition Checklist</strong>
              . It reveals the exact framework we use to patch operational revenue leaks in coaching
              businesses.
            </p>
          </div>

          <form
            className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
          >
            <div>
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 py-3 text-xs text-[#1D1D1F] outline-none transition focus:border-[#0071E3] focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1D1D1F] hover:bg-black px-4 py-3.5 text-xs font-bold text-white transition-all shadow-md"
            >
              <span>Send Me The Checklist</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-4 sm:mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Zero spam. Direct download access.</span>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full text-center text-xs text-muted-foreground hover:text-foreground hover:underline"
          >
            No thanks, I will manage it manually
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
