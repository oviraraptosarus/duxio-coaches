import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-schema-D09ad8Nm.js
var biggestChallenges = [
	"No free funnel or lead magnet to capture leads",
	"Converting inquiries into conversations",
	"Prospects ghosting direct message booking links",
	"Unqualified callers who cannot afford the offer",
	"Discovery call no shows",
	"Manual follow up inconsistency",
	"Lack of a unified acquisition system"
];
var auditSchema = objectType({
	firstName: stringType().min(1, "Please enter your first name."),
	email: stringType().email("Please enter a valid email."),
	websiteUrl: stringType().optional().or(literalType("")),
	socialMediaLink: stringType().min(1, "Please enter your social profile handle."),
	coachingNiche: stringType().min(1, "Please specify your coaching niche."),
	offerDescription: stringType().min(1, "Please describe your main offer."),
	offerPrice: stringType().min(1, "Please provide the price for your offer."),
	monthlyInquiries: stringType().optional().or(literalType("")),
	monthlyBookedCalls: stringType().optional().or(literalType("")),
	primaryLeadSource: stringType().optional().or(literalType("")),
	biggestChallenge: stringType().min(1, "Please select your biggest challenge.")
});
//#endregion
export { biggestChallenges as n, auditSchema as t };
