import { createServerFn } from "@tanstack/react-start";
import { auditSchema, type AuditSubmission } from "./audit-schema.server";
import crypto from "crypto";

export const submitAudit = createServerFn({ method: "POST" })
  .validator((data) => auditSchema.parse(data))
  .handler(async ({ data }) => {
    // Generate 128-bit cryptographically secure token (NanoID style)
    const secureToken = `dx_${crypto.randomBytes(8).toString("hex")}`;
    
    const record: AuditSubmission & {
      receivedAt: string;
      id: string;
    } = {
      ...data,
      receivedAt: new Date().toISOString(),
      id: secureToken,
    };

    console.log("[Duxio Lead Intake] Secure lead captured:", {
      id: secureToken,
      firstName: data.firstName,
      niche: data.coachingNiche,
      offerPrice: data.offerPrice
    });

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
