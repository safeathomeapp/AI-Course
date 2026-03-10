# AI Worked Examples

## Purpose
Complete worked examples that show how structured prompting improves output quality and safety.

---

## Worked Example 1: Admin / Coordination
### Title
Convert meeting notes into a clear action brief

### Learning Objective
Use role, constraints, and output format to produce a review-ready coordination document.

### Weak Prompt
"Turn these meeting notes into something useful."

### Improved Prompt
"You are an executive coordination assistant.

Context:
These notes are from a weekly cross-team planning meeting about onboarding delays.

Task:
Create an action brief for the team lead.

Constraints:
- Use only details from the notes
- Mark unknown owners or deadlines as 'Unassigned'
- Do not invent commitments

Output Format:
1. Summary (3 bullets)
2. Action table (Action, Owner, Deadline, Status)
3. Open questions"

### Sample Weak Output
"The team discussed onboarding delays and agreed to improve communication. Next steps include better coordination and process updates."

### Sample Improved Output
"Summary:
- Main delay source: missing handoff data between Sales and Ops
- Team agreed to a 48-hour handoff target
- Two actions still missing owners

Action Table:
| Action | Owner | Deadline | Status |
|---|---|---|---|
| Publish handoff checklist | Ops Manager | 2026-03-18 | In Progress |
| Add CRM required fields | RevOps | 2026-03-20 | Planned |
| Draft escalation protocol | Unassigned | Unassigned | Open |

Open Questions:
1. Who approves checklist changes?
2. Which team owns escalation routing?"

### What Changed
- Added specific role and business context.
- Converted vague task to explicit deliverable.
- Added constraints to prevent invented commitments.
- Required table format for immediate team use.

### Why Improved Version Is Safer / More Useful
- Unknowns are visible instead of hidden.
- Output is directly usable in follow-up meetings.
- Reduces risk of acting on invented details.

---

## Worked Example 2: Marketing / Content
### Title
Draft campaign concepts with evidence boundaries

### Learning Objective
Produce structured concept options while separating assumptions from evidence.

### Weak Prompt
"Give me campaign ideas for this product launch."

### Improved Prompt
"You are a growth marketing strategist.

Context:
Product: subscription meal planning app for busy professionals.
Audience: 25-45, time-constrained, health-focused.
Goal: increase trial signups in Q2.

Task:
Generate 3 distinct campaign concepts.

Constraints:
- Do not claim results not provided in context
- Label assumptions explicitly
- Avoid generic phrases ("game-changer", "revolutionary")

Output Format:
1. Concept name
2. Core message
3. Primary channel
4. Risks
5. Assumptions to validate"

### Sample Weak Output
"Campaign 1: Transform Your Life. Campaign 2: Healthy Made Easy. Campaign 3: Better You. Use social media and email marketing to drive conversions."

### Sample Improved Output
"Concept 1: 'Weeknight Rescue'
- Core message: Save planning time on busy weekdays
- Channel: Paid social short-form video
- Risks: May underperform for users cooking in batches
- Assumptions: Audience prioritizes time over recipe variety

Concept 2: 'No-Decision Dinners'
- Core message: Reduce daily meal-choice stress
- Channel: Email + onboarding sequence
- Risks: Message may overlap with productivity apps
- Assumptions: Decision fatigue is a top signup trigger

Concept 3: 'Plan Once, Eat Smarter'
- Core message: Weekly planning with flexible swaps
- Channel: Content + search landing pages
- Risks: Requires strong SEO alignment
- Assumptions: Users are willing to plan weekly"

### What Changed
- Added audience and business goal context.
- Added anti-hype constraints.
- Forced risk and assumption visibility.

### Why Improved Version Is Safer / More Useful
- Avoids unsupported claims in external messaging.
- Gives leadership review points, not just copy ideas.
- Easier to test and prioritize concepts.

---

## Worked Example 3: Operations / Reporting
### Title
Summarize KPI performance without inventing explanations

### Learning Objective
Use constraints and format to produce decision-ready reporting output.

### Weak Prompt
"Analyze these KPIs and tell me what matters."

### Improved Prompt
"You are an operations analyst.

Context:
Monthly KPI snapshot includes on-time delivery, defect rate, and overtime hours.

Task:
Summarize performance and flag anomalies.

Constraints:
- Do not invent root causes
- Separate facts from interpretation
- Flag missing data explicitly

Output Format:
1. Executive summary (max 5 bullets)
2. KPI table (Metric, Current, Prior, Delta, Status)
3. Anomalies requiring investigation
4. Questions for manager review"

### Sample Weak Output
"Performance was mixed. Delivery improved but quality concerns remain and overtime may indicate staffing issues."

### Sample Improved Output
"Executive Summary:
- On-time delivery improved from 91% to 94% (+3pp)
- Defect rate increased from 1.8% to 2.4% (+0.6pp)
- Overtime hours rose 22% month-over-month

KPI Table:
| Metric | Current | Prior | Delta | Status |
|---|---:|---:|---:|---|
| On-time delivery | 94% | 91% | +3pp | Improving |
| Defect rate | 2.4% | 1.8% | +0.6pp | Worsening |
| Overtime hours | 1,220 | 1,000 | +220 | Worsening |

Anomalies:
- Defect increase and overtime rise occurred in same period (correlation only; cause unknown)

Questions for Review:
1. Which lines contributed most defects?
2. Was overtime concentrated in one shift?"

### What Changed
- Added strict constraints against invented root cause.
- Required facts/interpretation separation.
- Enforced structured table output.

### Why Improved Version Is Safer / More Useful
- Prevents false certainty in operational decisions.
- Speeds manager review.
- Surfaces investigation priorities clearly.

---

## Worked Example 4: Customer Support / Service
### Title
Draft complaint response with policy-safe boundaries

### Learning Objective
Create customer-facing draft content that stays within authorized policy limits.

### Weak Prompt
"Write a response to this customer complaint."

### Improved Prompt
"You are a customer support response assistant.

Context:
Customer reports delayed installation and requests compensation.
Policy provided: can offer reschedule priority, cannot promise fee waivers without supervisor approval.

Task:
Draft a response for supervisor review.

Constraints:
- Use only policy details provided
- Do not promise compensation or waivers
- Mark any request needing supervisor approval

Output Format:
1. Acknowledgment
2. What we can do now
3. What requires approval
4. Next steps"

### Sample Weak Output
"We apologize for the inconvenience and will waive your setup fee immediately. We'll also provide a free month of service."

### Sample Improved Output
"Acknowledgment:
Thank you for raising this. We understand the delay has been frustrating.

What We Can Do Now:
- Offer priority rescheduling for the next available slot
- Confirm appointment window in writing today

What Requires Approval:
- Any fee waiver or monetary compensation requires supervisor review

Next Steps:
- Please confirm your preferred reschedule window
- A supervisor will review your compensation request within 1 business day"

### What Changed
- Added explicit policy context.
- Added constraints preventing unauthorized commitments.
- Structured output for review and compliance.

### Why Improved Version Is Safer / More Useful
- Reduces policy and compliance risk.
- Keeps customer communication clear and transparent.
- Gives supervisors a clean review artifact.

---

## Reusable Pattern
When quality is inconsistent, check whether your prompt clearly defines:
1. Role
2. Context
3. Task
4. Constraints
5. Output Format

If one is missing, output quality usually drops.
