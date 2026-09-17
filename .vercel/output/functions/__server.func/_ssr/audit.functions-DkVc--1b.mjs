import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as auditSchema } from "./audit-schema-D09ad8Nm.mjs";
import crypto from "crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/audit.functions-DkVc--1b.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitAudit_createServerFn_handler = createServerRpc({
	id: "52a5396c5d2944e5c1fe128fd1674a451fc86a9329305a259a54a82f8004b8d9",
	name: "submitAudit",
	filename: "src/lib/audit.functions.ts"
}, (opts) => submitAudit.__executeServer(opts));
var submitAudit = createServerFn({ method: "POST" }).validator((data) => auditSchema.parse(data)).handler(submitAudit_createServerFn_handler, async ({ data }) => {
	const secureToken = `dx_${crypto.randomBytes(8).toString("hex")}`;
	const record = {
		...data,
		receivedAt: (/* @__PURE__ */ new Date()).toISOString(),
		id: secureToken
	};
	console.log("[Duxio Lead Intake] Secure lead captured:", {
		id: secureToken,
		firstName: data.firstName,
		niche: data.coachingNiche,
		offerPrice: data.offerPrice
	});
	const webhookUrl = process.env.WEBHOOK_URL;
	if (webhookUrl) try {
		await fetch(webhookUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(record)
		});
		console.log("[Duxio Lead Intake] Successfully routed to automation webhook.");
	} catch (error) {
		console.error("[Duxio Lead Intake] Webhook automation failed:", error);
	}
	return {
		ok: true,
		id: secureToken
	};
});
//#endregion
export { submitAudit_createServerFn_handler };
