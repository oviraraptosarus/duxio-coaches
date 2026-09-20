import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Play, Calculator, ShieldAlert, Layers, HelpCircle, ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { AuditForm } from "@/components/audit-form";

export function FloatingDock() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 transition-all duration-300 pointer-events-none ${scrolled ? "translate-y-0" : "translate-y-0"}`}
      >
        <div className="glass-pill pointer-events-auto flex h-[64px] sm:h-[68px] max-w-5xl w-full items-center justify-between gap-4 rounded-full px-5 sm:px-7">
          {/* Logo with Metallic Icon + DUXIO Wordmark */}
          <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="Duxio Home">
            <img
              src="/logo-icon.png"
              alt="Duxio Icon"
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform duration-200 group-hover:scale-105"
            />
            <img
              src="/logo-text.png"
              alt="DUXIO"
              className="h-4 sm:h-[18px] w-auto object-contain brightness-110 contrast-125"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-semibold text-white/70 tracking-wide uppercase">
            <a href="#vsl" className="hover:text-white transition-colors duration-150">
              Briefing
            </a>
            <a href="#calculator" className="hover:text-white transition-colors duration-150">
              Calculator
            </a>
            <a href="#leaks" className="hover:text-white transition-colors duration-150">
              5 Leaks
            </a>
            <a href="#system" className="hover:text-white transition-colors duration-150">
              Architecture
            </a>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-[12px] font-bold text-white shadow-[0_0_20px_rgba(255,85,0,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,85,0,0.45)] active:scale-95 tracking-wide uppercase">
                  <span>Diagnostic</span>
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

            {/* Hamburger Button Matching the Reference Squircle */}
            <button
              className="glass-button flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[14px] text-white/90 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <div className="flex flex-col items-center justify-center gap-1.5 w-5">
                  <span className="block h-[2px] w-full rounded-full bg-white/90" />
                  <span className="block h-[2px] w-full rounded-full bg-white/90" />
                  <span className="block h-[2px] w-full rounded-full bg-white/90" />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-24 z-50 rounded-3xl p-6 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-3 duration-200 glass-pill">
          <nav className="flex flex-col gap-4 text-xs font-bold text-foreground">
            <a
              href="#vsl"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <Play className="h-3.5 w-3.5 text-accent fill-current" /> Executive Briefing
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <Calculator className="h-3.5 w-3.5 text-accent" /> Pipeline Bleed Calculator
            </a>
            <a
              href="#leaks"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <ShieldAlert className="h-3.5 w-3.5 text-accent" /> The 5 Broken Handshakes
            </a>
            <a
              href="#system"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <Layers className="h-3.5 w-3.5 text-accent" /> The Duxio Architecture
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <HelpCircle className="h-3.5 w-3.5 text-accent" /> Frequently Asked Questions
            </a>

            <div className="pt-2 border-t border-white/10">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient py-3.5 text-xs font-bold text-white shadow-md">
                    <span>Request Pipeline Diagnostic</span>
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
          </nav>
        </div>
      )}
    </>
  );
}
