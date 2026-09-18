import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { InteractiveLeakCalculator } from "@/components/interactive-leak-calculator";
import { ReframeSection } from "@/components/sections/reframe-section";
import { SystemSection } from "@/components/sections/system-section";
import { AuditCtaSection } from "@/components/sections/audit-cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { SocialProofMarquee } from "@/components/ui/social-proof-marquee";
import { ClientAcquisitionJourney } from "@/components/sections/client-acquisition-journey";
import { WhatWeBuildSection } from "@/components/sections/what-we-build";
import { IntegrationLogos } from "@/components/sections/integration-logos";

const PAGE_URL = "https://duxio.com/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duxio | The Client Acquisition Operating System for Coaches" },
      {
        name: "description",
        content:
          "Duxio helps established coaches turn existing attention and inquiries into qualified conversations, booked discovery calls, and premium client revenue.",
      },
      { property: "og:title", content: "Duxio | Client Acquisition Systems for Coaches" },
      {
        property: "og:description",
        content:
          "Transform your existing attention and inquiries into predictable client revenue. Request your private pipeline diagnostic evaluation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Duxio",
          url: "https://duxio.com",
          description:
            "Duxio helps coaches turn existing attention and inquiries into qualified conversations and booked clients.",
          slogan: "We build the system around the business.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "The Client Acquisition Operating System for Coaches",
          description:
            "Strategic training: discover the 5 places coaches lose potential clients and how to build a system that turns attention into predictable client revenue.",
          thumbnailUrl: `${PAGE_URL}/vsl-thumbnail.jpg`,
          uploadDate: "2026-01-01",
          duration: "PT8M",
          contentUrl: PAGE_URL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do I need a larger audience before this infrastructure functions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. The system is engineered to help established practices capitalize on their current audience attention and inquiries.",
              },
            },
            {
              "@type": "Question",
              name: "Will I need to manage complicated technical software?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. We architect the connected backend so you can focus entirely on coaching and client delivery.",
              },
            },
            {
              "@type": "Question",
              name: "Is this merely a website or simple lead capture page?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Duxio builds the entire client acquisition journey across Attraction, Capture, Nurture, Qualification, and Automated Follow Up.",
              },
            },
            {
              "@type": "Question",
              name: "What occurs after submitting the diagnostic request?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You receive an analysis of your operational gaps. If there is strong alignment, we review the recommended system with you.",
              },
            },
            {
              "@type": "Question",
              name: "What are the acceptance criteria for a Diagnostic Evaluation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We evaluate practices with active coaching programs priced at $1,000 or more that receive regular audience engagement and inquiries.",
              },
            },
            {
              "@type": "Question",
              name: "Do you promise specific revenue guarantees?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. We demonstrate mathematical pipeline leverage and economic value without making exaggerated claims.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: CoachClientAcquisition,
});

function CoachClientAcquisition() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-accent/20 selection:text-accent">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <IntegrationLogos />
        <SocialProofMarquee />
        <ReframeSection />
        <InteractiveLeakCalculator />
        <ClientAcquisitionJourney />
        <WhatWeBuildSection />
        <BeforeAfterSection />
        <SystemSection />
        <TestimonialSection />
        <AuditCtaSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <ExitIntentPopup />
    </div>
  );
}
