# AI Exercise Library

## Purpose
Reusable exercises across T1M01-T1M04 with beginner-safe entry points and increasing independence.

Use this file for practice tasks and scaffolds. Do not use it as the primary source for worked demonstrations or term definitions.

Related files:

- `docs/course_assets/AI_WORKED_EXAMPLES.md`
- `docs/course_assets/AI_OUTPUT_COMPARISON_LIBRARY.md`
- `docs/course_assets/AI_GLOSSARY.md`

---

## A. Beginner-Safe Exercises (5)

### 1) Exercise Type
Beginner-Safe

Task
Rewrite a vague email-drafting prompt using the five-part prompt structure: Role, Context, Task, Constraints, Output Format.

Prompt Starter
"You are an administrative assistant..."

What Success Looks Like
- Includes all 5 parts (Role, Context, Task, Constraints, Output Format)
- Output includes sections for subject, body, and next action

Optional Extension
Add a constraint for tone (professional but plain-language).

---

### 2) Exercise Type
Beginner-Safe

Task
Convert rough meeting notes into an action table prompt.

Prompt Starter
"Use these notes to create actions with owner and deadline..."

What Success Looks Like
- Output is tabular (Action, Owner, Deadline, Status)
- Unknown owners/deadlines are explicitly flagged

Optional Extension
Add a column for risk level.

---

### 3) Exercise Type
Beginner-Safe

Task
Draft a support response prompt with policy boundaries.

Prompt Starter
"You are a support response assistant. Use only this policy..."

What Success Looks Like
- Includes "do not promise" constraints
- Response format separates what can be done now vs what needs approval

Optional Extension
Add escalation rule for unresolved issues.

---

### 4) Exercise Type
Beginner-Safe

Task
Rewrite a generic KPI-summary prompt to force evidence visibility.

Prompt Starter
"You are an operations analyst. Summarize KPI changes..."

What Success Looks Like
- Requires deltas and anomalies
- Explicitly prevents invented root causes

Optional Extension
Add a "manager questions" output section.

---

### 5) Exercise Type
Beginner-Safe

Task
Take one existing prompt and only improve the Output Format section.

Prompt Starter
"Keep your current prompt, but add a clear output structure..."

What Success Looks Like
- Output is immediately reusable without reformatting
- Includes headings or fields aligned to workflow use

Optional Extension
Compare time saved in review with old format.

---

## B. Adaptation Exercises (5)

### 6) Exercise Type
Adaptation

Task
Take a provided marketing prompt and adapt it for your role.

Prompt Starter
"You are a [your role]. Context: [your audience]. Task: [your deliverable]..."

What Success Looks Like
- Same core structure, role-specific content
- At least 2 task-specific constraints

Optional Extension
Create two variants (low-risk and high-risk use case).

---

### 7) Exercise Type
Adaptation

Task
Convert a narrative output request into structured output fields.

Prompt Starter
"Return output in this format: Summary / Evidence / Risks / Unknowns / Next Steps"

What Success Looks Like
- Output can be reviewed line-by-line
- Evidence separated from assumptions

Optional Extension
Add confidence rating field for each claim.

---

### 8) Exercise Type
Adaptation

Task
Take a weak prompt and add uncertainty-handling rules.

Prompt Starter
"If information is missing, label as Unknown. Do not infer without evidence."

What Success Looks Like
- AI output explicitly marks unknowns
- Fewer overconfident statements

Optional Extension
Add follow-up questions AI should ask before finalizing.

---

### 9) Exercise Type
Adaptation

Task
Adapt a single prompt for two audiences (manager vs frontline).

Prompt Starter
"Create two versions of the output: one executive summary, one procedural checklist."

What Success Looks Like
- Same source content, different audience fit
- Tone and detail level appropriate per audience

Optional Extension
Add constraints for maximum length in each version.

---

### 10) Exercise Type
Adaptation

Task
Refactor a multi-goal prompt into a prioritized prompt.

Prompt Starter
"Primary task: ____. Secondary task: ____ only if primary is complete."

What Success Looks Like
- Priority order is explicit
- Primary output quality improves versus bundled request

Optional Extension
Split into two chained prompts and compare results.

---

## C. Independent Exercises (5)

### 11) Exercise Type
Independent

Task
Choose a recurring work task and build a full structured prompt from scratch.

Prompt Starter
None required.

What Success Looks Like
- All 5 components present
- Output usable with minimal editing
- Clear human review points

Optional Extension
Test in two tools and compare constraint compliance.

---

### 12) Exercise Type
Independent

Task
Create a high-risk prompt variant and define stricter review controls.

Prompt Starter
None required.

What Success Looks Like
- Constraints include explicit no-invention/no-commitment rules
- Output includes "requires human approval" section

Optional Extension
Add sign-off owner and escalation trigger fields.

---

### 13) Exercise Type
Independent

Task
Build a prompt for qualitative data synthesis with evidence separation.

Prompt Starter
None required.

What Success Looks Like
- Claims are evidence-linked
- Inference is labeled separately
- Unknowns are visible

Optional Extension
Add contradiction detection across sources.

---

### 14) Exercise Type
Independent

Task
Create a mini prompt library entry set (3 prompts) for one workflow.

Prompt Starter
None required.

What Success Looks Like
- Three prompts cover distinct workflow stages
- Each has review notes after testing

Optional Extension
Add version/date and last-tested fields.

---

### 15) Exercise Type
Independent

Task
Design and test one prompt that reduces downstream rework by forcing exact format.

Prompt Starter
None required.

What Success Looks Like
- Before/after comparison shows measurable cleanup reduction
- Team member can reuse output format without explanation

Optional Extension
Add a peer review and capture feedback in revision notes.

---

## Quick Use Guidance
- If new to AI prompting, start with Beginner-Safe.
- If you have working prompts but inconsistent quality, use Adaptation.
- If you already use structured prompts, use Independent for deeper transfer.

## Core Reminder
AI drafts. Humans review. Humans decide.
