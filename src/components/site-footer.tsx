import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-white py-12 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-medium">
          © 2026 Duxio. Client Acquisition Systems for Established Coaches. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
