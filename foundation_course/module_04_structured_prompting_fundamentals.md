# Module 1.4 Structured Prompting Fundamentals

## Module Overview

**Tier:** Foundations  
**Estimated Duration:** 75-120 minutes  
**Prerequisites:** Module 1.1 to Module 1.3

### Learning Objectives

By the end of this module, learners will be able to:

- use the full prompt structure: Role, Context, Task, Constraints, Output Format
- diagnose weak prompts and improve them
- generate more predictable output with less rework

---

## 1. Concept Explanation

Structured prompting is the core control mechanism for AI output quality.

Why this matters:
- unstructured prompts lead to vague responses
- structure improves consistency and reduces ambiguity
- better first outputs reduce editing time

How AI behavior relates to this concept:
- role sets perspective and level
- context sets boundaries and relevance
- task defines objective
- constraints prevent drift and error
- output format makes results usable in workflows

Where learners commonly go wrong:
- mixing multiple goals in one unclear instruction
- omitting constraints such as "no invented facts"
- not specifying format needed by downstream users

Short example: A finance summary prompt without output format gives prose; with format it gives decision-ready sections.

---

## 2. Demonstration

### Example Context
Finance and bookkeeping: monthly performance summary for an owner.

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
2. Key metrics
3. Anomalies
4. Questions for follow-up"

### Analysis
The improved prompt controls role, scope, and deliverable format, producing output that is actionable and reviewable.

---

## 3. Guided Exercise

### Task
Rewrite one real prompt from your current workflow using the full structure.

### Instructions
1. Pick a prompt that usually produces inconsistent output.
2. Rewrite it with all five components.
3. Compare outputs and note improvements in clarity and usefulness.

### Suggested Structure
- Role:
- Context:
- Task:
- Constraints:
- Output Format:

### Example Output
Role: Product analyst assistant  
Context: User interview notes from 15 customers  
Task: Extract top problems and feature requests  
Constraints: Distinguish frequency from severity; no invented quotes  
Output Format: Theme table, evidence snippets, product implications

---

## 4. Real-World Application

Structured prompting is useful in:
- product: decision briefs with explicit assumptions
- software: bug triage summaries in fixed format
- marketing: campaign plans with required sections
- operations: SOP drafts with compliance checkpoints
- support: categorized ticket analysis with escalation points

---

## 5. Common Mistakes

- skipping one or more core prompt components
- writing constraints that are too vague
- requesting "everything" in one prompt
- no output schema for downstream use

These mistakes create inconsistent quality and more manual cleanup.

---

## 6. Portfolio Artefact

### Artefact Title
Structured Prompt Library v1

### What the Learner Produces
A set of at least 8 structured prompts across two domains, each with:
- use case
- full five-part structure
- notes on output reliability

### Why It Matters
This becomes a reusable asset for work and a proof of practical prompting skill.

---

## 7. Reflection Questions

- Which prompt component do you skip most often?
- What changed when you defined constraints explicitly?
- How does output format affect collaboration with others?

---

## 8. Optional Advanced Exploration

- Build a template where constraints vary by risk level.
- Create prompt variants for beginner vs executive audiences.
- Add validation instructions and compare output quality.

---

## 9. Suggested Further Practice

Convert three existing unstructured prompts in your workflow into full structured prompts and track time saved.
