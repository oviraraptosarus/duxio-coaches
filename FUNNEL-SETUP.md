# Duxio VSL Funnel — Funnel, CRM & Automation Setup Guide

This document describes the **funnel, CRM pipeline, and automation logic** that
surround the Duxio VSL landing page built in this project.

The landing page itself (the VSL page, all 13 sections, and the Free Coach
Funnel Audit form) is fully built and live in this codebase. The form submits
through a server function (`src/lib/audit.functions.ts`) and shows a success
state.

The **marketing-platform funnel, CRM pipeline, and email/SMS automation
sequences** live in your marketing automation / CRM platform (the "platform")
and must be configured there. This guide lists exactly what to build and which
parts cannot be created automatically from this codebase.

---

## 1. Funnel Flow

Build this funnel in the platform, in this order:

```
Traffic
  ↓
Duxio VSL Landing Page  ← this codebase (route "/coach-client-acquisition")
  ↓
Watch Free Training  (VSL video, 7–10 min)
  ↓
Free Coach Funnel Audit  (the form on this page, section 8)
  ↓
Qualification Form  (the audit form fields below)
  ↓
Audit / Analysis  (manual review by Duxio)
  ↓
Strategy Call  (booked after audit, only if there's a fit)
  ↓
Duxio Client Acquisition System  (becoming a client)
```

> The landing page is hosted by this app. The VSL video, audit delivery,
> strategy-call booking, and nurture automations are configured in the
> platform.

---

## 2. CRM Pipeline — "Coach Audit Leads"

Create a pipeline named **Coach Audit Leads** with these stages, in order:

1. **New Lead**
2. **Audit Requested**
3. **Audit Delivered**
4. **Engaged**
5. **Strategy Call Invited**
6. **Call Booked**
7. **Call Completed**
8. **Proposal / Offer**
9. **Won**
10. **Lost**
11. **Nurture**

### Custom fields to record on each contact

Every audit submission should create/update a contact and store:

| Field                            | Notes                                                                                                                                                                              |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| First Name                       | required                                                                                                                                                                           |
| Email                            | required                                                                                                                                                                           |
| Website                          | URL                                                                                                                                                                                |
| Instagram / Social Profile       | text                                                                                                                                                                               |
| Coaching Niche                   | text                                                                                                                                                                               |
| Main Offer                       | text                                                                                                                                                                               |
| Offer Price                      | text/currency                                                                                                                                                                      |
| Approximate Monthly Leads        | text/number                                                                                                                                                                        |
| Approximate Monthly Booked Calls | text/number                                                                                                                                                                        |
| Primary Lead Source              | dropdown: Instagram, LinkedIn, Referrals, Organic content, Cold outreach, Paid ads, Other                                                                                          |
| Biggest Challenge                | dropdown: Getting enough qualified leads, Turning leads into conversations, Getting people to book calls, Follow-up, No-shows, Sales conversion, I don't know where the problem is |

These fields mirror the audit form in `src/lib/audit-schema.ts` so the data
maps 1:1 into the CRM.

---

## 3. Automation — Audit Nurture Sequence

Trigger: **when a contact submits the audit form** (i.e. enters the
"Audit Requested" stage).

| Day       | Action                                                                        |
| --------- | ----------------------------------------------------------------------------- |
| **Day 0** | Send audit confirmation / delivery email.                                     |
| **Day 1** | Send educational content: why coaches lose leads after the first interaction. |
| **Day 3** | Send an example showing how a client acquisition journey can be improved.     |
| **Day 5** | Teach the value of systematic follow-up.                                      |
| **Day 7** | Invite them to book a strategy call.                                          |

### Branching logic

- **If they book a strategy call:**
  Stop the normal lead-nurture invitation sequence and move them into the
  appointment-reminder automation (below). Move the opportunity to
  **Call Booked**.

- **If they do not book:**
  Continue appropriate nurture. Keep the opportunity in **Engaged** or move
  to **Nurture**.

---

## 4. Automation — Appointment Reminders

Trigger: **when a strategy call is booked**.

- Send a confirmation email/SMS immediately.
- Send a reminder ~24 hours before the call.
- Send a reminder ~1 hour before the call.
- On no-show: trigger a no-show follow-up sequence and move the opportunity
  back toward re-booking or **Nurture**.
- On call completed: move to **Call Completed**, then **Proposal / Offer** or
  **Won / Lost**.

---

## 5. What is built automatically (this codebase)

- ✅ The full VSL landing page with all 13 sections.
- ✅ The Free Coach Funnel Audit form with all 11 fields + validation.
- ✅ Server-side submission handling (`submitAudit` server function).
- ✅ Success state after submission.
- ✅ SEO metadata (title, description, OG tags, canonical, JSON-LD) on the route.
- ✅ Canonical slug `/coach-client-acquisition` with `/` redirecting to it.

## 6. What requires manual configuration in the platform

These cannot be created automatically from this codebase and must be set up
manually in your marketing/CRM platform:

- ⚙️ The CRM pipeline **Coach Audit Leads** with the 11 stages above.
- ⚙️ The 11 custom contact fields listed in section 2.
- ⚙️ Connecting the audit form submission to create/update a contact in the
  CRM and move it to **Audit Requested** (form webhook / integration).
- ⚙️ The Day 0 / 1 / 3 / 5 / 7 nurture email sequence + branching logic.
- ⚙️ The appointment-reminder automation (confirmation, 24h, 1h, no-show).
- ⚙️ Embedding the actual VSL video (the page has a prominent placeholder
  player ready to receive a video embed).
- ⚙️ The strategy-call booking calendar integration.
- ⚙️ Replacing the case-study placeholders with verified real client data
  (Duxio does not fabricate proof).

> **Important:** Duxio never promises guaranteed revenue or guaranteed client
> results. All automation copy and sales messaging must reflect this.
