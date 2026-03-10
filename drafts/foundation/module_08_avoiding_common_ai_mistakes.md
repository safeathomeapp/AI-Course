# Module 1.8 Avoiding Common AI Mistakes

## Module Overview

**Tier:** Foundations  
**Estimated Duration:** 60-90 minutes  
**Prerequisites:** Module 1.1 to Module 1.7

### Learning Objectives

By the end of this module, learners will be able to:

- identify common failure modes in everyday AI use
- apply practical safeguards to reduce output risk
- implement a simple quality-control checklist before using output

---

## 1. Concept Explanation

Most AI failures come from process mistakes, not model capability alone.

Why this matters:
- repeated mistakes create bad habits and weak trust
- simple controls prevent most avoidable errors
- disciplined workflows outperform casual usage

How AI behavior relates to this concept:
- vague prompts produce vague output
- missing context causes plausible guessing
- no constraints increase drift and hallucination risk

Where learners commonly go wrong:
- blind trust in fluent responses
- skipping verification on factual claims
- using one-shot prompts for multi-step tasks
- no human review before external use

Short example: A support team used AI-generated replies without policy check and sent incorrect refund guidance.

---

## 2. Demonstration

### Example Context
Customer support: drafting responses for account access issues.

### Weak Example
"Reply to this customer quickly and politely."

### Improved Example
"You are a customer support assistant.

Context:
Draft a response to an account lockout request.

Task:
Create a response draft for agent review.

Constraints:
- Do not invent policy details
- Use only approved resolution paths
- Include a note where human verification is required

Output Format:
1. Draft customer response
2. Policy checks required before sending
3. Escalation trigger if issue is unresolved"

### Analysis
The improved prompt introduces safety checks and review requirements. It prevents AI from acting as final policy authority.

---

## 3. Guided Exercise

### Task
Run a quality-control pass on one AI output from your normal workflow.

### Instructions
1. Generate output from a prompt you already use.
2. Apply a checklist: facts, assumptions, missing context, risk level.
3. Rewrite the prompt to reduce one identified failure mode.

### Suggested Structure
- Original prompt:
- Output risks found:
- Revised prompt:
- Verification steps:

### Example Output
Risk found: AI stated refund timeframe not present in policy.  
Fix: Added constraint "use only policy text provided" and "mark unknowns."

---

## 4. Real-World Application

Mistake prevention is critical in:
- finance: avoid invented numbers or misread trends
- software: avoid incorrect code explanations becoming implementation changes
- product: avoid conclusions from weak sample sizes
- marketing: avoid unsupported market claims
- operations: avoid incomplete SOP steps
- support: avoid policy or compliance errors

---

## 5. Common Mistakes

- vague prompting
- missing context
- no output constraints
- no verification checkpoints
- no escalation path for uncertainty

Each mistake increases operational risk and rework.

---

## 6. Portfolio Artefact

### Artefact Title
AI Quality-Control Checklist v1

### What the Learner Produces
A reusable pre-use checklist with:
- factual validation items
- risk classification
- required human review level
- escalation triggers

### Why It Matters
This artefact shows responsible implementation discipline, not just prompt skill.

---

## 7. Reflection Questions

- Which AI mistake appears most often in your own work?
- What checks can you automate, and what must remain human?
- Where should you slow down even if AI output looks good?

---

## 8. Optional Advanced Exploration

- Build two checklists: one for low-risk tasks, one for high-risk tasks.
- Add peer review to compare detected risks.
- Track error rates before and after checklist adoption.

---

## 9. Suggested Further Practice

Use your checklist for five AI-assisted tasks this week and document how many issues were caught before final use.
