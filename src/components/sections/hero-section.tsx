import { useState } from "react";
import { Play, ArrowRight, ShieldCheck, Triangle, Hexagon, Circle, Square } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { AuditForm } from "@/components/audit-form";

const vslTakeaways = [
  "Why dropping links in DMs kills your sales",
  "How to stop wasting hours messaging cold leads",
  "The simple filter that keeps broke people off your calendar",
];

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="relative overflow-hidden mesh-hero-glow pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-chip mb-6 uppercase tracking-wider font-bold">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden />
            Only For Top Coaches Ready To Win
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight text-foreground">
            Turn Your Coaching Expertise Into a{"\u00A0"}
            <span className="text-muted-foreground">Predictable Client Acquisition System.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            Turn the attention and leads you're already generating into more qualified
            conversations, booked calls, and potential clients with a system that captures,
            nurtures, qualifies, books, and follows up automatically.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center">
            <a
              href="#vsl"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:opacity-95 sm:w-auto"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              See How The System Works
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <button className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-line bg-surface-2 px-8 py-3.5 text-xs font-bold text-foreground shadow-sm transition-colors hover:bg-surface sm:w-auto">
                  Claim My Diagnostic
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-xl border-none bg-transparent p-0 shadow-none">
                <DialogTitle className="sr-only">Pipeline Diagnostic Evaluation</DialogTitle>
                <DialogDescription className="sr-only">
                  Submit your details to request an architecture evaluation.
                </DialogDescription>
                <AuditForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-6 flex justify-center text-xs text-muted-foreground">
            <p className="inline-flex items-center gap-2 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Built specifically for coaching programs priced $1,000 to $10,000+
            </p>
          </div>
        </div>

        {/* VSL Stage */}
        <div id="vsl" className="scroll-mt-32 mt-12">
          <div className="card-elevated p-6 sm:p-8">
            <div className="mb-4 text-left">
              <span className="section-label">Strategic Walkthrough</span>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Where you are losing money right now
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                A short video showing exactly why your current setup is costing you clients.
              </p>
            </div>

            {/* Obsidian Theater / Video Player */}
            <div className="relative aspect-video overflow-hidden rounded-2xl liquid-glass-dark shadow-2xl border border-white/10 bg-black">
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.youtube-nocookie.com/embed/cpwY7WMkjkQ?autoplay=1&rel=0&modestbranding=1&playsinline=1"
                  title="Duxio Client Acquisition System Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Watch the video"
                  className="group relative flex h-full w-full cursor-pointer flex-col items-center justify-center p-6 text-center focus:outline-none"
                >
                  <img
                    src="/vsl-thumbnail.jpg"
                    alt="Video Preview"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 transition-colors duration-300 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/20" />

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient pl-1 shadow-lg text-white">
                      <Play className="h-5 w-5 fill-current" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md transition-colors group-hover:bg-black/80">
                    <Play className="h-3 w-3 fill-accent text-accent" />
                    <span>Watch the Video</span>
                  </div>
                </button>
              )}
            </div>

            {/* Takeaway Chips */}
            <div className="my-6 grid grid-cols-1 gap-3 text-xs font-medium text-foreground sm:grid-cols-3">
              {vslTakeaways.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl border border-line bg-surface p-3.5 text-left"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* VSL Diagnostic Callout */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-accent/20 bg-accent-soft p-5">
              <div className="text-left">
                <h4 className="text-sm font-bold text-foreground">
                  Want to see where your specific pipeline is leaking?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Submit your business metrics and we will map your exact customer journey.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-sm transition-all hover:opacity-95 whitespace-nowrap">
                    Claim My Diagnostic
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-xl border-none bg-transparent p-0 shadow-none">
                  <DialogTitle className="sr-only">Pipeline Diagnostic Evaluation</DialogTitle>
                  <DialogDescription className="sr-only">
                    Submit your details to request an architecture evaluation.
                  </DialogDescription>
                  <AuditForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
