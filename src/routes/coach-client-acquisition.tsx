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
import { ExitIntentPopup } from "@/components/exit-intent-popup";

const PAGE_URL = "https://duxio.com/coach-client-acquisition";

export const Route = createFileRoute("/coach-client-acquisition")({
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
          "Transform your existing attention and inquiries into predictable client revenue. Request your free coach funnel audit.",
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
                text: "No. The system is engineered to help established coaches capitalize on their current audience attention and inquiries.",
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
              name: "What occurs after submitting the audit request?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You receive an analysis of your operational gaps. If there is strong alignment, we review the recommended system with you.",
              },
            },
            {
              "@type": "Question",
              name: "Is the funnel audit completely complimentary?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The audit provides clear strategic diagnostic insight prior to any advisory discussion.",
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
    <div className="flex min-h-screen flex-col bg-background selection:bg-[#0071E3] selection:text-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <InteractiveLeakCalculator />
        <ReframeSection />
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
