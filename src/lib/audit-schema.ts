import { z } from "zod";

export const biggestChallenges = [
  "No lead capture funnel or lead magnet to capture leads",
  "Converting inquiries into conversations",
  "Prospects ghosting direct message booking links",
  "Unqualified callers who cannot afford the offer",
  "Discovery call no shows",
  "Manual follow up inconsistency",
  "Lack of a unified acquisition system",
] as const;

export const auditSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  email: z.string().email("Please enter a valid email."),
  socialMediaLink: z.string().min(1, "Please enter your Instagram handle or profile link."),
  biggestChallenge: z.string().min(1, "Please select your biggest challenge."),
  websiteUrl: z.string().optional().or(z.literal("")),
  coachingNiche: z.string().optional().or(z.literal("")),
  offerDescription: z.string().optional().or(z.literal("")),
  offerPrice: z.string().optional().or(z.literal("")),
  monthlyInquiries: z.string().optional().or(z.literal("")),
  monthlyBookedCalls: z.string().optional().or(z.literal("")),
  primaryLeadSource: z.string().optional().or(z.literal("")),
});

export type AuditFormValues = z.input<typeof auditSchema>;
export type AuditSubmission = z.output<typeof auditSchema>;

export const leadSources = [
  "Instagram",
  "LinkedIn",
  "Referrals",
  "Organic content",
  "Cold outreach",
  "Paid ads",
  "Other",
] as const;
