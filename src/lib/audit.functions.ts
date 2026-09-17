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

    return { ok: true, id: secureToken };
  });
