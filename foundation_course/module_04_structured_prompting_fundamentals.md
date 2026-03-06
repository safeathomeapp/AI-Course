# Module 1.4 Structured Prompting Fundamentals

## Module Overview

**Tier:** Foundations  
**Estimated Duration:** 75-120 minutes  
**Prerequisites:** Module 1.1 to Module 1.3

### Learning Objectives

By the end of this module, learners will be able to:

- apply the full prompt structure: Role, Context, Task, Constraints, Output Format
- diagnose weak prompts and improve them systematically
- produce outputs that are more predictable, reviewable, and workflow-ready

### Teaching Flow and Timing

- 15 minutes: concept model and prompt anatomy
- 15 minutes: two domain demonstrations
- 25-35 minutes: guided rewrite and scoring exercise
- 10-15 minutes: workflow scenario and reflection

---

## 1. Concept Explanation

Structured prompting is the main control mechanism for AI output quality in professional workflows.

When prompts are vague, models default to generic language. When prompts are structured, models have clearer boundaries and produce more usable output.

### Prompt anatomy

Use this structure consistently:

- Role: who the model should act as
- Context: what situation and constraints define relevance
- Task: what specific output is needed
- Constraints: what to avoid and what rules to follow
- Output Format: how results should be structured

Each element solves a different failure mode:

- Role reduces tone and perspective drift
- Context reduces irrelevant assumptions
- Task reduces ambiguity
- Constraints reduce hallucination and overreach
- Output format reduces downstream rework

### Why structure improves reliability

LLMs are probability engines. If the prompt is underspecified, the model fills gaps with likely language. That often looks polished but may not match your intent.

Structured prompting improves reliability because it narrows the probability space. You are not asking the model to "guess what you mean." You are defining what success looks like.

### Common weak-prompt patterns

- multi-goal prompts with no priority
- missing audience definition
- no rules for uncertainty handling
- no output schema
- requests for "everything" in one pass

### Prompt design as workflow design

A strong prompt is not just a writing trick. It is a workflow interface. Downstream users need output they can inspect, validate, and act on.

Example:

- Unstructured output: narrative paragraph, hard to compare and review
- Structured output: table with required fields, easy to verify and reuse

### What this module is and is not

This module is about practical control of output behavior. It is not about clever hacks or prompt gimmicks. The objective is repeatability and professional usefulness.

This principle continues through later modules where prompts are chained into complete workflows.

---

## 2. Demonstration

### Example Context
Finance and bookkeeping: monthly performance summary for business owner review.

### Weak Example
"Review these numbers and tell me what matters."

### Improved Example
"You are a financial analysis assistant.

Context:
I am reviewing monthly P&L and cash flow for a small business.

Task:
Summarize performance and highlight anomalies.

Constraints:
- Do not invent figures
- Flag unclear or missing data
- Keep language plain for non-finance stakeholders

Output Format:
1. Executive summary
2. Key metrics table
3. Anomalies
4. Follow-up questions"

### Analysis
The improved prompt defines role, scope, and format, producing output suitable for management review.

### Example Context
Operations and administration: convert meeting notes into SOP draft.

### Weak Example
"Turn these notes into a process document."

### Improved Example
"You are an operations documentation specialist.

Context:
These notes describe a weekly inventory reconciliation process.

Task:
Create a first-pass SOP draft.

Constraints:
- Preserve all required controls from notes
- Mark missing prerequisites explicitly
- Do not invent compliance requirements

Output Format:
1. Purpose
2. Inputs required
3. Step-by-step procedure
4. Quality checks
5. Escalation points"

### Analysis
The improved prompt transforms unstructured notes into a review-ready process draft while exposing unknowns for human resolution.

---

## 3. Guided Exercise

### Task
Rewrite one real prompt from your workflow and test the difference in output quality.

### Instructions
1. Select a prompt that frequently gives inconsistent results.
2. Rewrite it with Role, Context, Task, Constraints, and Output Format.
3. Run both versions in the same AI tool and evaluate with the checklist below.

### Suggested Structure
- Role:
- Context:
- Task:
- Constraints:
- Output Format:

### Example Output
Role: Product analyst assistant  
Context: 15 user interview summaries about onboarding friction  
Task: Extract top problems and opportunity themes  
Constraints: Separate evidence from assumptions; no invented quotes  
Output Format: Theme table, evidence snippets, risk notes

### Evaluation Checklist

Score each output from 1-5:

- Clarity for intended audience
- Structural usability (can you use it immediately?)
- Assumption transparency
- Constraint compliance
- Decision usefulness

Then answer:

- What improved most after structuring?
- Which constraint had the biggest impact?
- What still requires human validation?

---

## 4. Real-World Application

Scenario: marketing manager preparing campaign options for leadership.

Before structured prompting:

- prompt is broad
- output is generic and repetitive
- assumptions are hidden
- team spends time rewriting from scratch

After structured prompting:

1. Role is set to strategic marketing analyst.
2. Context defines audience and business goal.
3. Task requests three distinct concepts.
4. Constraints block unsupported claims.
5. Output format requires concept summary, channel plan, risk notes.

Result:

- better first drafts
- faster review cycles
- clearer assumptions and risks
- less cleanup before decision meetings

Professional takeaway: structured prompts reduce waste and improve decision readiness, but human review still owns final quality.

---

## 5. Common Mistakes

- skipping one or more prompt components
- vague constraints such as "make it better"
- no audience definition
- no output schema for downstream work
- using one prompt for tasks that need staged workflow

These mistakes cause inconsistency and increase manual rework.

---

## 6. Portfolio Artefact

### Artefact Title
Structured Prompt Library v1

### What the Learner Produces
A set of at least 8 structured prompts across two domains, each including:

- use case
- full five-part structure
- example output format
- reliability notes after testing

Starter template:

1. Use Case
2. Role
3. Context
4. Task
5. Constraints
6. Output Format
7. Review Notes

### Why It Matters
This creates a reusable asset that demonstrates practical AI operating skill, not just isolated prompt writing.

---

## 7. Reflection Questions

- Which prompt component do you skip most often under time pressure?
- How did output format change team usability?
- Where should you add stronger constraints in your current workflow?

---

## 8. Optional Advanced Exploration

- Build risk-tier prompt variants (low/medium/high stakes).
- Test one prompt across two tools and compare structural compliance.
- Convert one prompt into a two-step chain for higher reliability.

---

## 9. Suggested Further Practice

Convert three recurring unstructured prompts into structured versions this week, then track rework reduction and review speed.
