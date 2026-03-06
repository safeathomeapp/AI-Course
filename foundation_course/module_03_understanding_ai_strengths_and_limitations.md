# Module 1.3 Understanding AI Strengths and Limitations

## Module Overview

**Tier:** Foundations  
**Estimated Duration:** 60-90 minutes  
**Prerequisites:** Module 1.1 and Module 1.2

### Learning Objectives

By the end of this module, learners will be able to:

- identify where AI is strong and where it is weak in professional tasks
- assign correct human-review levels based on task risk
- design a task-allocation approach where AI supports, not governs, decisions

### Teaching Flow and Timing

- 12 minutes: concept framing and task-risk model
- 15 minutes: dual demonstrations across domains
- 20-30 minutes: guided task-allocation exercise
- 10-15 minutes: real-world scenario and reflection

---

## 1. Concept Explanation

Most AI mistakes in professional work are not caused by "bad prompts" alone. They are caused by bad task allocation.

If you assign AI to tasks it handles well, you gain speed. If you assign AI to tasks requiring high-stakes judgment or guaranteed correctness, you introduce risk.

### A practical allocation model

Use this decision frame:

Task Type + Risk of Error + Need for Judgment -> AI Role + Human Review Level

Interpretation:

- Task Type: drafting, summarizing, classification, analysis, final approval
- Risk of Error: low, medium, high
- Need for Judgment: low to high domain expertise and accountability

Output of this frame:

- AI Role: draft support, analysis support, formatting support
- Human Review Level: light, standard, strict, mandatory sign-off

### Where AI is usually strong

AI is often strong when the task is:

- language-heavy
- pattern-based
- iterative
- low-to-medium consequence if wrong

Examples:

- first-draft writing
- note summarization
- option generation
- structured output formatting

### Where AI is usually weak

AI is often weak when the task needs:

- guaranteed factual/legal correctness
- policy ownership
- nuanced contextual judgment not in prompt
- accountability for outcomes

Examples:

- final legal wording
- compliance commitments
- final financial sign-off
- irreversible operational decisions

### Why people misallocate

Common reasons:

- fluency creates false confidence
- urgency pushes teams toward "auto-accept"
- no explicit risk classification by task
- unclear ownership of final decisions

### The key principle

AI should support thought, speed, and structure. Humans should retain authority over correctness, risk, and final decisions.

This does not mean "use AI less." It means "use AI in the right place with the right controls."

### Risk tiers and review depth

A simple control model:

- Low risk: AI draft + quick human scan
- Medium risk: AI draft + structured human verification
- High risk: AI support only + strict human review + documented sign-off

This model is easy to apply and prevents casual misuse.

### Transfer to the rest of the course

Later modules will focus on prompt design and workflows. This module gives the allocation logic that those workflows depend on.

---

## 2. Demonstration

### Example Context
Product management: preparing a recommendation on feature rollout.

### Weak Example
"Should we launch this feature next month?"

### Improved Example
"You are a product analyst assistant.

Context:
We have interview themes, engineering effort estimates, and known launch risks.

Task:
Produce a decision-support draft, not a final decision.

Constraints:
- Separate evidence from assumptions
- Include risks, unknowns, and dependencies
- Do not provide authoritative go/no-go conclusion

Output Format:
1. Evidence summary
2. Benefits
3. Risks
4. Unknowns
5. Decision criteria for human review"

### Analysis
The improved prompt allocates AI to structured synthesis and keeps the decision with humans.

### Example Context
Customer support operations: updating refund response process.

### Weak Example
"Write a final refund policy we can use with customers."

### Improved Example
"You are a support process assistant.

Context:
Draft internal response guidance for refund inquiries.

Task:
Create a draft process note for review by policy owner.

Constraints:
- Do not create or modify official policy rules
- Mark any policy uncertainty explicitly
- Include escalation points for policy confirmation

Output Format:
1. Draft response workflow
2. Required policy checks
3. Escalation triggers"

### Analysis
The weak prompt gives AI authority it should not have. The improved prompt keeps AI in a drafting role and preserves policy accountability.

---

## 3. Guided Exercise

### Task
Build a task-allocation matrix for one real part of your job.

### Instructions
1. List 8-12 recurring tasks from your current role.
2. Assign risk level (low/medium/high) and required judgment level.
3. Define AI role and human review level for each task.

### Suggested Structure
| Task | Risk Level | Judgment Needed | AI Role | Human Review Level |
|---|---|---|---|---|
| | | | | |

### Example Output
| Task | Risk Level | Judgment Needed | AI Role | Human Review Level |
|---|---|---|---|---|
| Monthly report draft | Medium | Medium | Draft summary | Standard verification |
| Policy statement | High | High | Outline support | Strict sign-off |

### Evaluation Checklist

Score your matrix from 1-5:

- Risk alignment: Does review depth match risk?
- Role clarity: Is AI role clearly bounded?
- Accountability clarity: Is final owner explicit?
- Practical usability: Can this be used next week in real work?
- Error prevention strength: Would this reduce avoidable mistakes?

Then answer:

- Which task had the biggest role mismatch before this exercise?
- Where were you over-trusting AI?
- What is your new high-risk review rule?

---

## 4. Real-World Application

Scenario: operations manager rolling out AI in weekly reporting.

Initial approach:

- team uses AI to produce complete weekly reports end to end
- no task-risk mapping
- no verification ownership

Result:

- inconsistent numbers in one report
- management confusion
- trust in tool drops

Revised approach using this module:

1. Team maps each report stage by risk and judgment need.
2. AI is used for draft narrative and formatting.
3. Human analyst validates figures and claims.
4. Manager signs off final report.

Result:

- time saved in drafting
- error rate reduced through explicit checks
- confidence increases because accountability is clear

This same allocation logic applies in product decisions, support quality workflows, marketing planning, and software release communication.

---

## 5. Common Mistakes

- assigning AI to final approval tasks
- no explicit risk classification
- unclear ownership of final output
- using AI to fill missing source data gaps
- treating "faster" as the only success metric

These mistakes create both quality and governance failures.

---

## 6. Portfolio Artefact

### Artefact Title
AI Task-Risk Allocation Matrix

### What the Learner Produces
A matrix for at least 12 recurring tasks including:

- risk level
- judgment level
- AI role
- review level
- final decision owner

Starter template:

1. Task
2. Risk (Low/Medium/High)
3. AI Role (Draft/Analysis/Formatting)
4. Human Review Standard
5. Final Owner

### Why It Matters
This is a practical governance artifact that can be used immediately in workplace AI adoption.

---

## 7. Reflection Questions

- Which of your current AI uses are low value but high risk?
- Where can AI help more without compromising quality?
- What review discipline is now mandatory in your workflow?

---

## 8. Optional Advanced Exploration

- Add a "cost of error" column to your matrix.
- Compare your matrix with another reviewer and reconcile differences.
- Define escalation rules when AI output confidence is high but evidence is weak.

---

## 9. Suggested Further Practice

Apply your task-risk matrix to one live project this week and record one decision where tighter role allocation prevented an avoidable error.
