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
        <div className="flex h-[72px] max-w-5xl w-full items-center justify-between gap-4 rounded-[36px] px-6 sm:px-8 shadow-xl border border-white/40 bg-white/65 backdrop-blur-xl backdrop-saturate-150">
          
          <Link to="/" className="flex items-center -ml-1" aria-label="Duxio">
            <div 
              className="h-11 w-32 bg-brand-gradient" 
              style={{ 
                WebkitMaskImage: "url('/duxio-logo.png')", 
                WebkitMaskSize: "contain", 
                WebkitMaskRepeat: "no-repeat", 
                WebkitMaskPosition: "left center",
                maskImage: "url('/duxio-logo.png')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "left center"
              }} 
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-10 text-[13px] font-semibold text-muted-foreground/80 tracking-wide uppercase">
            <a href="#vsl" className="hover:text-foreground transition flex items-center gap-2">
              Briefing
            </a>
            <a href="#calculator" className="hover:text-foreground transition flex items-center gap-2">
              Calculator
            </a>
            <a href="#leaks" className="hover:text-foreground transition flex items-center gap-2">
              5 Leaks
            </a>
            <a href="#system" className="hover:text-foreground transition flex items-center gap-2">
              Architecture
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-[13px] font-bold text-white shadow-[0_0_20px_rgba(10,25,47,0.25)] transition-all hover:scale-[1.02] hover:opacity-95 tracking-wide uppercase">
                  <span>Diagnostic</span>
                  <ArrowRight className="h-3.5 w-3.5" />
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
        <div className="fixed inset-x-4 top-24 z-40 rounded-3xl bg-white/65 backdrop-blur-xl backdrop-saturate-150 p-6 shadow-2xl border border-white/40 md:hidden animate-in fade-in slide-in-from-top-3 duration-200">
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
