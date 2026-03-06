# Module 1.9 Building Your First AI Workflow

## Module Overview

**Tier:** Foundations  
**Estimated Duration:** 90-120 minutes  
**Prerequisites:** Module 1.1 to Module 1.8

### Learning Objectives

By the end of this module, learners will be able to:

- break one real task into a practical AI-assisted workflow
- define handoff points between AI output and human review
- document a repeatable process with clear controls

---

## 1. Concept Explanation

A workflow is a sequence of stages, not a single prompt. Strong workflows define when AI assists and when humans verify.

Why this matters:
- one-shot prompts are hard to control for complex tasks
- stage-based design improves reliability and reuse
- review checkpoints reduce risk

How AI behavior relates to this concept:
- AI works best with narrow stage-specific prompts
- each stage can have tailored output format and constraints
- chained outputs must be checked before reuse

Where learners commonly go wrong:
- trying to solve end-to-end tasks in one prompt
- missing review gates between stages
- no documentation of process assumptions

Short example: For monthly reporting, split into data summary, anomaly analysis, narrative draft, and final human approval.

---

## 2. Demonstration

### Example Context
Finance and bookkeeping: monthly management report workflow.

### Weak Example
"Create my full monthly report from these numbers."

### Improved Example
"You are a finance workflow assistant.

Context:
I need a monthly management report from P&L and cash-flow data.

Task:
Support a 4-stage workflow.

Constraints:
- Do not invent numbers
- Add uncertainty notes where data is incomplete
- Require human verification before final summary

Output Format:
1. Stage 1: metric extraction table
2. Stage 2: anomaly list with possible drivers
3. Stage 3: draft management narrative
4. Stage 4: human review checklist"

### Analysis
The improved version turns a vague request into a staged process with validation points. AI supports each stage, but final accountability remains human.

---

## 3. Guided Exercise

### Task
Design your first AI workflow for one recurring professional task.

### Instructions
1. Choose a task you perform at least monthly.
2. Break it into 3-5 stages with clear outputs.
3. Define AI role, human role, and review checks at each stage.

### Suggested Structure
| Stage | Objective | AI Output | Human Review | Risk if Wrong |
|---|---|---|---|---|
| | | | | |

### Example Output
| Stage | Objective | AI Output | Human Review | Risk if Wrong |
|---|---|---|---|---|
| 1 | Summarize ticket volume | Table by category | Verify source counts | Medium |
| 2 | Identify trends | Trend summary | Check against dashboard | Medium |
| 3 | Draft recommendations | Action plan draft | Manager approval | High |

---

## 4. Real-World Application

Workflow design is central to:
- support operations reporting
- product discovery synthesis
- software bug triage and communication
- finance monthly reporting cycles
- marketing planning and post-campaign review
- operations process documentation

---

## 5. Common Mistakes

- no clear stage boundaries
- no ownership assignment per stage
- no validation before chaining output
- trying to automate judgment-heavy decisions

These mistakes reduce consistency and increase risk.

---

## 6. Portfolio Artefact

### Artefact Title
First AI Workflow Blueprint

### What the Learner Produces
A documented workflow with:
- stage map
- prompt snippets per stage
- review checkpoints
- risk notes

### Why It Matters
This is a practical, portfolio-ready asset showing applied AI process design capability.

---

## 7. Reflection Questions

- Which stage in your workflow has the highest risk?
- Where does AI save the most time without reducing quality?
- What human review point is non-negotiable?

---

## 8. Optional Advanced Exploration

- Add fallback branches for missing data scenarios.
- Create role-based workflow variants (analyst vs manager view).
- Measure cycle time and error rate across two runs.

---

## 9. Suggested Further Practice

Run your workflow once on a real task this week and record what broke, what worked, and what to improve.
