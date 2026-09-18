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
  websiteUrl: z.string().optional().or(z.literal("")),
  socialMediaLink: z.string().min(1, "Please enter your social profile handle."),
  coachingNiche: z.string().min(1, "Please specify your coaching niche."),
  offerDescription: z.string().min(1, "Please describe your main offer."),
  offerPrice: z.string().min(1, "Please provide the price for your offer."),
  monthlyInquiries: z.string().optional().or(z.literal("")),
  monthlyBookedCalls: z.string().optional().or(z.literal("")),
  primaryLeadSource: z.string().optional().or(z.literal("")),
  biggestChallenge: z.string().min(1, "Please select your biggest challenge."),
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
