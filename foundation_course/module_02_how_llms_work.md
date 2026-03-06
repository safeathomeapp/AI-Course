# Module 1.2 How Large Language Models Actually Work

## Module Overview

**Tier:** Foundations  
**Estimated Duration:** 75-120 minutes  
**Prerequisites:** Module 1.1 Introduction to AI as a Tool

### Learning Objectives

By the end of this module, learners will be able to:

- explain tokens, probability, and context windows in plain language
- describe why confident errors happen
- write prompts that reduce ambiguity and improve reliability

---

## 1. Concept Explanation

A large language model predicts likely next tokens based on patterns from training data and current prompt context.

Why this matters:
- AI output is a probability-based prediction, not guaranteed truth
- knowing this helps you design better prompts and checks
- reliability comes from process design, not model confidence

How AI behavior relates to this concept:
- tokens are chunks of text used by the model to process input/output
- probability determines which words appear next
- context windows limit how much information the model can use at once

Where learners commonly go wrong:
- assuming the model "understands" like a subject matter expert
- overloading prompts with unstructured text
- ignoring missing context and then trusting output anyway

Short example: In software documentation, a model may guess function behavior if a key file is missing from context.

---

## 2. Demonstration

### Example Context
Software development: explain an unfamiliar function from a partial code snippet.

### Weak Example
"Explain this code and all side effects."

### Improved Example
"You are a senior software engineer.

Context:
This snippet is from an API handler. You only have the code below; other files are unavailable.

Task:
Explain what this function appears to do and list uncertainties caused by missing context.

Constraints:
- Do not claim certainty where context is missing
- Separate evidence from inference

Output Format:
1. What is directly observable
2. Inferred behavior
3. Missing context required for confirmation"

### Analysis
The improved prompt acknowledges context limits and asks the model to separate evidence from inference. This reduces false certainty and reinforces that AI is a tool for analysis support, not final authority.

---

## 3. Guided Exercise

### Task
Practice writing prompts that make uncertainty explicit.

### Instructions
1. Choose a short text or data sample where context is incomplete.
2. Write a prompt that asks AI to separate known facts from inferred points.
3. Review output and identify one area needing human verification.

### Suggested Structure
- Available context:
- Missing context:
- Task:
- Constraints:
- Output Format: Facts / Inferences / Unknowns

### Example Output
Facts: Revenue increased 8% month over month.  
Inferences: Marketing campaign likely contributed.  
Unknowns: No campaign spend data provided; effect cannot be confirmed.

---

## 4. Real-World Application

Understanding LLM mechanics improves quality in:
- finance: separate observed metrics from speculative causes
- software: identify missing dependencies before trusting explanations
- product: avoid overclaiming from limited feedback samples
- marketing: distinguish trend signals from guesses
- operations: validate process steps against real constraints
- support: avoid fabricated policy details

---

## 5. Common Mistakes

- mistaking confidence for accuracy
- ignoring context limits
- treating AI explanations as ground truth
- failing to request uncertainty reporting

These mistakes create avoidable rework and risk.

---

## 6. Portfolio Artefact

### Artefact Title
LLM Reliability Cheat Sheet

### What the Learner Produces
A concise reference covering:
- token and context basics
- common hallucination triggers
- prompt patterns for uncertainty control

### Why It Matters
This gives a practical guide learners can use to improve AI reliability on real tasks.

---

## 7. Reflection Questions

- Where have you confused AI confidence with AI correctness?
- Which of your common tasks suffer most from missing context?
- How can you redesign prompts to expose uncertainty earlier?

---

## 8. Optional Advanced Exploration

- Test the same prompt with short vs long context and compare errors.
- Add explicit "cite source text lines" constraints and evaluate changes.
- Measure output quality before and after adding a strict output schema.

---

## 9. Suggested Further Practice

Create a reusable prompt block titled "Knowns, Unknowns, Assumptions" and use it in three different tasks this week.
