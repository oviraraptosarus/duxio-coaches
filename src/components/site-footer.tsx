import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface py-16 text-sm text-muted-foreground">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-12 border-b border-line">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" aria-label="Duxio Home">
              <div
                className="h-12 w-32 bg-brand-gradient"
                style={{
                  WebkitMaskImage: "url('/duxio-logo.png')",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url('/duxio-logo.png')",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </Link>
            <p className="mt-5 max-w-xs text-xs leading-relaxed">
              We build client acquisition systems for established practices. Stop DMing manually and
              start scaling.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-16 text-left w-full md:w-auto max-w-sm md:max-w-none mx-auto md:mx-0">
            <div className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              <a href="#vsl" className="hover:text-accent transition-colors">
                Briefing
              </a>
              <a href="#calculator" className="hover:text-accent transition-colors">
                Calculator
              </a>
              <a href="#leaks" className="hover:text-accent transition-colors">
                5 Leaks
              </a>
            </div>
            <div className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              <a href="#system" className="hover:text-accent transition-colors">
                Architecture
              </a>
              <a href="#faq" className="hover:text-accent transition-colors">
                FAQ
              </a>
              <a href="#audit" className="text-accent hover:underline transition-all">
                Practice Diagnostic
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-[11px] font-medium text-muted-foreground/60">
          <div className="flex flex-col gap-2 text-center sm:text-left max-w-xl">
            <p>© {new Date().getFullYear()} Duxio. All rights reserved.</p>
            <p className="opacity-70 leading-relaxed">
              All product names, logos, and brands are property of their respective owners. All
              company, product and service names used in this website are for identification
              purposes only. Use of these names, logos, and brands does not imply endorsement. Duxio
              is an independent service provider.
            </p>
          </div>
          <div className="flex gap-6 whitespace-nowrap">
            <a href="#" className="hover:text-muted-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-muted-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
