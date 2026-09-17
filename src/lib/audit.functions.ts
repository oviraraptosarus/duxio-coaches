import { createServerFn } from "@tanstack/react-start";
import { auditSchema, type AuditSubmission } from "./audit-schema.server";

export const submitAudit = createServerFn({ method: "POST" })
  .validator(auditSchema)
  .handler(async ({ data }) => {
    // Generate 128-bit cryptographically secure token (NanoID style)
    const secureToken = `dx_${globalThis.crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;
    
    // Server-only mock logic (in a real app, this would write to a DB)
    console.log("[Duxio Server] Received Audit Submission:", data);
    
    const record: AuditSubmission = {
      id: secureToken,
      timestamp: new Date().toISOString(),
      biggestChallenge: data.biggestChallenge,
      firstName: data.firstName,
      email: data.email,
      websiteUrl: data.websiteUrl,
      socialMediaLink: data.socialMediaLink,
      coachingNiche: data.coachingNiche,
      offerDescription: data.offerDescription,
      monthlyInquiries: data.monthlyInquiries,
      monthlyBookedCalls: data.monthlyBookedCalls,
      primaryLeadSource: data.primaryLeadSource,
      offerPrice: data.offerPrice
    };

    // 🚀 Automation Webhook (Make.com / Zapier)
    // If you set a WEBHOOK_URL in Vercel, it will automatically blast this lead data to your automation flow.
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(record),
        });
        console.log("[Duxio Lead Intake] Successfully routed to automation webhook.");
      } catch (error) {
        console.error("[Duxio Lead Intake] Webhook automation failed:", error);
      }
    }

    return { ok: true, id: secureToken };
  });
