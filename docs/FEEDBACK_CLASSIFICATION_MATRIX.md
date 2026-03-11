# Feedback Classification Matrix

## Purpose

This matrix helps determine **where a piece of feedback should be applied in the repository**.

When processing review feedback, classify the issue by its **impact scope** before making changes.

This prevents unnecessary edits to architecture or governance documents.

---

## Feedback Impact Matrix

| Impact Level | Description | Typical Examples | Where Changes Go |
|---|---|---|---|
| **Module-Level** | Issue affects only one module | unclear explanation, weak exercise, confusing example | `modules/{tier}/{module}.md` |
| **Tier-Level** | Issue appears across several modules in the same tier | terminology confusion, pacing problems, exercise difficulty | `analysis/{tier}/T{tier}_SHARED_FIXES.md` |
| **Course-Level** | Issue affects the structure or design of modules | exercise scaffolding, demonstration format, portfolio guidance | `docs/COURSE_MODULE_TEMPLATE.md` |
| **Philosophy-Level** | Issue relates to the philosophy of AI usage | AI trust, human responsibility, workflow thinking | `COURSE_PHILOSOPHY.md`, `docs/AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md` |
| **System-Level** | Issue affects repository operation or workflows | review process confusion, AI generation rules, contributor workflow | `CONTRIBUTING.md`, `docs/CODEX_MODULE_GENERATION_GUIDE.md`, `REPOSITORY_MAP.md` |

---

## Practical Use

When reviewing feedback:

1. Identify the issue.
2. Classify its **impact level**.
3. Route the change to the correct document or repository layer.
4. Record the reasoning in the review analysis.

---

## Guiding Principle

Most feedback should result in **module-level changes**.

Higher-level documents should only change when **clear patterns emerge across multiple modules or review cycles**.