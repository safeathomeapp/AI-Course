# AI Output Comparison Library

## Purpose
Short, scannable weak-vs-improved prompt/output sets that make quality differences obvious.

Use this file for concise side-by-side contrasts. Do not use it when the lesson needs the fuller explanation and teaching narration found in `docs/course_assets/AI_WORKED_EXAMPLES.md`.

---

## Comparison 1
### Scenario
Meeting notes to action items

### Weak Prompt
"Summarize these notes."

### Weak Output
"The team discussed delays and agreed to improve handoffs."

### Improved Prompt
"You are a project coordinator. Convert these notes into an action log. Use columns: Action, Owner, Deadline, Status. Mark unknowns as Unassigned."

### Improved Output
"| Action | Owner | Deadline | Status |
|---|---|---|---|
| Publish handoff checklist | Ops Lead | 2026-03-18 | In Progress |
| Escalation protocol draft | Unassigned | Unassigned | Open |"

### Key Differences
- Structured table vs generic narrative
- Unknowns made explicit
- Immediately usable for follow-up

### Lesson
Specify output format and unknown-handling rules.

---

## Comparison 2
### Scenario
Marketing concept generation

### Weak Prompt
"Give me campaign ideas."

### Weak Output
"Campaign 1: Innovate your life. Campaign 2: Better every day."

### Improved Prompt
"You are a marketing strategist. Create 3 campaign concepts for a productivity app for remote teams. Include concept name, core message, channel, risk. Avoid unsupported claims."

### Improved Output
"1) 'Focus Window' - Message: protect deep work time - Channel: LinkedIn video - Risk: niche appeal.
2) 'Meeting Reset' - Message: reduce status-meeting overload - Channel: email sequence - Risk: weak hook if teams already asynchronous.
3) 'Done by 5' - Message: finish priority work earlier - Channel: paid social - Risk: may imply guaranteed outcomes."

### Key Differences
- Distinct concepts with reviewable risks
- Less generic language
- Safer claim boundaries

### Lesson
Constraints + required fields improve decision quality.

---

## Comparison 3
### Scenario
KPI summary for leadership

### Weak Prompt
"Analyze this KPI data."

### Weak Output
"Performance appears positive overall, though some areas need improvement."

### Improved Prompt
"You are an operations analyst. Summarize KPI changes. Provide: executive bullets, KPI delta table, anomalies, and manager questions. Do not infer root cause without evidence."

### Improved Output
"- On-time delivery +3pp; defect rate +0.6pp; overtime +22%.
- Anomaly: defect rise coincides with overtime increase (cause unknown).
- Question: Which shift contributed most defects?"

### Key Differences
- Concrete deltas, not vague statements
- Clear distinction between facts and unknown causes
- Action-oriented review prompts

### Lesson
Prevent false certainty with explicit evidence constraints.

---

## Comparison 4
### Scenario
Customer complaint response

### Weak Prompt
"Write a reply to this complaint."

### Weak Output
"We will waive your fee and provide free service next month."

### Improved Prompt
"You are a support assistant. Draft response using provided policy. Do not promise waivers without supervisor approval. Format: acknowledgment, what we can do now, what needs approval, next steps."

### Improved Output
"We can prioritize your reschedule today. Any compensation request requires supervisor review within 1 business day."

### Key Differences
- Policy-safe language
- No unauthorized commitments
- Clear escalation path

### Lesson
Constraints protect against operational/compliance risk.

---

## Comparison 5
### Scenario
Research transcript synthesis

### Weak Prompt
"Summarize these interviews and tell me what users want."

### Weak Output
"Users want simplicity and speed; they dislike complexity."

### Improved Prompt
"You are a UX research analyst. Identify 3-5 themes using only provided transcripts. For each theme, include evidence quotes and mark interpretations separately."

### Improved Output
"Theme: Onboarding confusion.
Evidence: 'I wasn't sure what to do after sign-up' (P03, P07).
Interpretation: Initial path clarity likely impacts early retention."

### Key Differences
- Evidence-linked claims
- Interpretation separated from facts
- Higher trust for stakeholder review

### Lesson
Require evidence attribution when synthesizing qualitative data.

---

## Comparison 6
### Scenario
Drafting a process document

### Weak Prompt
"Turn this into an SOP."

### Weak Output
"Follow standard steps and maintain quality control throughout the process."

### Improved Prompt
"You are an operations documentation specialist. Draft SOP from notes. Include: purpose, inputs, steps, quality checks, escalation points. Preserve controls; flag missing prerequisites; do not invent compliance requirements."

### Improved Output
"Purpose: Weekly inventory reconciliation.
Inputs: cycle count sheet, variance log, scanner export.
Quality checks: reconcile >2% variance before close.
Escalation: notify Ops Manager for unresolved variance >24h.
Missing prerequisite: scanner export handoff owner not specified."

### Key Differences
- Full procedure structure
- Explicit controls and escalation
- Missing information surfaced

### Lesson
A good format plus compliance constraints turns vague drafts into review-ready documents.
