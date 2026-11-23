import { createServerFn } from "@tanstack/react-start";
import { auditSchema, type AuditSubmission } from "./audit-schema.server";
import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

export const submitAudit = createServerFn({ method: "POST" })
  .validator(auditSchema)
  .handler(async ({ data }) => {
    // Generate 128-bit cryptographically secure token (NanoID style)
    const secureToken = `dx_${globalThis.crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;

    // Server-only logic
    console.log("[Duxio Server] Received Audit Submission:", data);

    const record: AuditSubmission & { id: string; timestamp: string; reportUrl: string } = {
      id: secureToken,
      timestamp: new Date().toISOString(),
      reportUrl: `/audits/${secureToken}`,
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
      offerPrice: data.offerPrice,
    };

    // 📁 Local file storage (Only in local dev; Vercel serverless has a read-only filesystem)
    if (!process.env["VERCEL"]) {
      try {
        const rootDir = process.cwd();
        const csvPath = path.resolve(rootDir, "leads.csv");
        const jsonPath = path.resolve(rootDir, "leads.json");

        // Save to leads.csv
        const isNew = !fs.existsSync(csvPath);
        const csvHeader = "Timestamp,Lead_ID,First_Name,Email,Social_Handle,Bottleneck,Report_URL\n";
        const reportUrl = `/audits/${secureToken}`;
        const csvRow = `"${new Date().toLocaleString()}","${secureToken}","${(data.firstName || "").replace(/"/g, '""')}","${(data.email || "").replace(/"/g, '""')}","${(data.socialMediaLink || "").replace(/"/g, '""')}","${(data.biggestChallenge || "").replace(/"/g, '""')}","${reportUrl}"\n`;
        if (isNew) {
          fs.writeFileSync(csvPath, csvHeader + csvRow, "utf-8");
        } else {
          fs.appendFileSync(csvPath, csvRow, "utf-8");
        }

        // Save to leads.json
        let jsonLeads: unknown[] = [];
        if (fs.existsSync(jsonPath)) {
          try {
            jsonLeads = JSON.parse(fs.readFileSync(jsonPath, "utf-8") || "[]");
          } catch {
            jsonLeads = [];
          }
        }
        jsonLeads.unshift({ ...record, reportUrl });
        fs.writeFileSync(jsonPath, JSON.stringify(jsonLeads, null, 2), "utf-8");
        console.log("[Duxio Lead Intake] Saved lead locally to leads.csv and leads.json");
      } catch (fsErr) {
        console.error("[Duxio Lead Intake] Local file write error:", fsErr);
      }
    }

    // 🗄️ Supabase Database Storage (Option A)
    const supabaseUrl = process.env["SUPABASE_URL"];
    const supabaseKey =
      process.env["SUPABASE_SERVICE_ROLE_KEY"] || process.env["SUPABASE_ANON_KEY"];

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { error } = await supabase.from("coach_audit_leads").insert([record]);
        if (error) {
          console.error("[Duxio DB] Failed to insert into Supabase:", error.message);
        } else {
          console.log("[Duxio DB] Successfully saved lead to Supabase.");
        }
      } catch (err) {
        console.error("[Duxio DB] Supabase client error:", err);
      }
    }

    // 🚀 Automation Webhook (Discord / Google Sheets / Make / Zapier)
    // If you set a WEBHOOK_URL in .env, it will automatically blast this lead data to your automation flow.
    const webhookUrl = process.env["WEBHOOK_URL"];
    if (webhookUrl) {
      try {
        let payload: unknown = record;

        // Auto-format for Discord Webhooks
        if (webhookUrl.includes("discord.com/api/webhooks")) {
          payload = {
            username: "Duxio Lead Bot",
            avatar_url: "https://duxio.com/favicon.png",
            embeds: [
              {
                title: "🎯 New Diagnostic Lead Received!",
                color: 0xff5500, // Duxio accent orange
                fields: [
                  { name: "👤 Name", value: data.firstName || "N/A", inline: true },
                  { name: "📧 Email", value: data.email || "N/A", inline: true },
                  { name: "📱 Instagram / Social", value: data.socialMediaLink || "N/A", inline: true },
                  { name: "⚡ Primary Bottleneck", value: data.biggestChallenge || "N/A", inline: false },
                  { name: "🔗 Lead ID", value: secureToken, inline: true },
                ],
                footer: { text: "Duxio Client Acquisition OS" },
                timestamp: new Date().toISOString(),
              },
            ],
          };
        }

        const resp = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (resp.ok) {
          console.log("[Duxio Lead Intake] Successfully routed to automation webhook.");
        } else {
          const errText = await resp.text();
          console.error(`[Duxio Lead Intake] Webhook returned status ${resp.status}:`, errText);
        }
      } catch (error) {
        console.error("[Duxio Lead Intake] Webhook automation failed:", error);
      }
    }

    return { ok: true, id: secureToken };
  });
