import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Play, Calculator, ShieldAlert, Layers, HelpCircle, ArrowRight, Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AuditForm } from "@/components/audit-form";

export function FloatingDock() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-3 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? "translate-y-0" : "translate-y-0"}`}>
        <div className="liquid-glass flex h-14 max-w-4xl w-full items-center justify-between gap-2 sm:gap-6 rounded-full px-4 sm:px-6 shadow-xl border border-white/60">
          
          <Link to="/" className="flex items-center gap-2 text-base font-extrabold tracking-tight text-foreground pl-1">
            <img src="/duxio-logo.png" alt="Duxio" className="h-6 w-auto" />
            DUXIO <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-muted-foreground">
            <a href="#vsl" className="hover:text-foreground transition flex items-center gap-1.5">
              <Play className="h-3 w-3 text-accent fill-current" /> Executive Briefing
            </a>
            <a href="#calculator" className="hover:text-foreground transition flex items-center gap-1.5">
              <Calculator className="h-3 w-3 text-accent" /> Leak Calculator
            </a>
            <a href="#leaks" className="hover:text-foreground transition flex items-center gap-1.5">
              <ShieldAlert className="h-3 w-3 text-accent" /> The 5 Leaks
            </a>
            <a href="#system" className="hover:text-foreground transition flex items-center gap-1.5">
              <Layers className="h-3 w-3 text-accent" /> The Architecture
            </a>
            <a href="#faq" className="hover:text-foreground transition flex items-center gap-1.5">
              <HelpCircle className="h-3 w-3 text-accent" /> Questions
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-xs font-bold text-white shadow-[0_0_15px_rgba(var(--accent),0.3)] transition-all hover:scale-[1.02] hover:opacity-95">
                  <span>Request Diagnostic</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-xl border-none bg-transparent p-0 shadow-none">
                <DialogTitle className="sr-only">Pipeline Diagnostic Evaluation</DialogTitle>
                <DialogDescription className="sr-only">Submit your details to request an architecture evaluation.</DialogDescription>
                <AuditForm />
              </DialogContent>
            </Dialog>

            {/* Mobile Toggle */}
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-surface text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-3xl liquid-glass p-6 shadow-2xl border border-white/60 md:hidden animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-4 text-xs font-bold text-foreground">
            <a href="#vsl" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface">
              <Play className="h-3.5 w-3.5 text-accent fill-current" /> Executive Briefing
            </a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface">
              <Calculator className="h-3.5 w-3.5 text-accent" /> Pipeline Bleed Calculator
            </a>
            <a href="#leaks" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface">
              <ShieldAlert className="h-3.5 w-3.5 text-accent" /> The 5 Broken Handshakes
            </a>
            <a href="#system" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface">
              <Layers className="h-3.5 w-3.5 text-accent" /> The Duxio Architecture
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface">
              <HelpCircle className="h-3.5 w-3.5 text-accent" /> Frequently Asked Questions
            </a>

            <div className="pt-2 border-t border-line">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient py-3.5 text-xs font-bold text-white shadow-md">
                    <span>Request Pipeline Diagnostic</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-xl border-none bg-transparent p-0 shadow-none">
                  <DialogTitle className="sr-only">Pipeline Diagnostic Evaluation</DialogTitle>
                  <DialogDescription className="sr-only">Submit your details to request an architecture evaluation.</DialogDescription>
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
