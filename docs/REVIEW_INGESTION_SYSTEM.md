# REVIEW_INGESTION_SYSTEM.md

## Purpose

This document defines the **single standard process** for taking raw beta feedback and turning it into useful revision guidance for a course module.

It exists to prevent feedback review from becoming chaotic, inconsistent, or overly influenced by a small number of individual opinions.

Use this file as the **only required reference** when reviewing module feedback.

---

# What This System Is For

This system is used when a module has been drafted and reviewed by beta testers.

It helps convert:

- raw reviewer comments
- structured review forms
- mixed opinion quality
- repeated comments across multiple reviewers

into:

- clear issue patterns
- priority-ranked concerns
- a focused revision plan

---

# What This System Replaces

This file is designed to reduce the need to jump between multiple process documents during review.

If this system is followed, feedback analysis should not depend on remembering several separate workflows.

This document becomes the **working operating guide** for review intake.

---

# Scope

This applies to:

- Foundation modules
- Applied modules
- Systems modules

It is especially useful when reviewing multiple feedback files for the same module, for example:

- T1M01 reviews
- T1M02 reviews
- T2M04 reviews

---

# Core Rule

Do **not** revise the module while feedback is still being ingested.

First collect patterns.
Then decide what matters.
Then plan revisions.

---

# Review Processing Workflow

Use this exact sequence.

## Stage 1 — Load the Module

Confirm the module ID and tier using docs/COURSE_CURRICULUM_MAP.md.

Before reading any feedback, have the current version of the module available.

You need to know:

- what the module is trying to teach
- how it is structured
- where reviewers are responding to real problems versus personal preference

Required input:

- current module markdown file

---

## Stage 2 — Ingest Feedback in Small Batches

Do not process all feedback at once unless the feedback is already highly structured and consistent.

Recommended batch size:

- 2 to 3 feedback files at a time

This improves attention to detail and reduces shallow synthesis.

For each batch:

1. read each feedback file
2. extract concern points
3. note repeated praise
4. note repeated criticism
5. update the issue ledger

Do **not** decide fixes yet.

---

## Stage 3 — Maintain an Issue Ledger

As feedback is reviewed, keep a running list of issues.

Each issue should be logged with:

- Issue ID
- Description
- Frequency
- Severity
- Reviewer types affected
- Notes

### Example Ledger Format

| Issue ID | Description | Frequency | Severity | Reviewer Type | Notes |
|---|---|---:|---|---|---|
| T1M01-01 | Exercise lacks scaffolding | 4 | High | beginners, teachers | learners freeze before starting |
| T1M01-02 | Module 1.2 language too technical | 3 | Medium | beginners | terminology barrier |
| T1M01-03 | Demonstrations need real outputs | 5 | High | all | prompt comparison feels abstract |

### Severity Definitions

- **Low**: minor improvement, does not block learning
- **Medium**: causes friction, confusion, or lower quality learning
- **High**: repeatedly blocks understanding, completion, or confidence

---

## Stage 4 — Classify Every Feedback Point

Every major feedback point should be placed into one of four classes.

### 1. Confirmed Issue
Raised by multiple reviewers, or clearly supported by repeated evidence.

### 2. Possible Issue
Raised by one or two reviewers, plausible, but not yet strongly confirmed.

### 3. Opinion / Preference
A subjective preference that does not clearly indicate a problem.

### 4. Outlier
A suggestion or complaint that does not fit the broader pattern and should not drive revisions unless it reveals a critical flaw.

---

## Stage 5 — Group Issues Into Categories

Once enough feedback has been ingested, cluster issues by theme.

Recommended categories:

- Accessibility
- Terminology / Clarity
- Demonstrations
- Exercises
- Real-world relevance
- Portfolio artefacts
- Tone
- Timing / pacing
- Delivery / facilitation
- Structural design

This helps distinguish isolated comments from recurring design weaknesses.

---

## Stage 6 — Separate Frequency From Severity

Some issues are common but low impact.
Some issues are rare but important.

Track both.

### Example

An issue mentioned once may still matter if it reveals:

- factual inaccuracy
- contradictory teaching
- misleading instruction
- harmful professional advice

Do not rely on frequency alone.

---

## Stage 7 — Identify What Not To Change

Before proposing revisions, create a short list of things that should remain stable.

Examples:

- strong mental models
- useful portfolio artefacts
- good philosophical framing
- effective module sequence

This prevents overcorrection.

---

## Stage 8 — Create a Revision Plan

Only after all feedback has been reviewed should you create a revision plan.

The revision plan should include:

### High-priority changes
Changes that clearly improve learning quality or reduce friction.

### Medium-priority changes
Useful improvements, but not essential before next test cycle.

### Low-priority changes
Enhancements that can wait.

### Rejected suggestions
Feedback that will deliberately not be implemented, with a short reason.

---

# Routing Revision Changes

Not all feedback leads to the same type of change.

Before implementing revisions, determine where the change belongs in the repository.

Use:

`docs/FEEDBACK_CLASSIFICATION_MATRIX.md`

This matrix provides a quick way to classify whether a revision should be handled at module, tier, course, philosophy, or repository-workflow level.

Feedback may affect:

- a single module
- multiple modules within a tier
- the overall course design
- repository governance or workflow

## 1. Module-Level Changes

Feedback affecting only one module should be implemented directly in that module.

Typical examples:

- unclear explanation in one module
- weak demonstration in one module
- exercise difficulty in one module
- terminology confusion within one module

Changes go to:

```text
modules/{tier}/{module_id}.md
```

Supporting analysis remains in:

```text
analysis/{tier}/{module_id}/
```

Example files:

```text
analysis/foundation/T1M01/issue_ledger.md
analysis/foundation/T1M01/revision_plan.md
```

## 2. Tier-Level Changes

Feedback affecting several modules in the same tier should be recorded as a shared fix.

Typical examples:

- exercises are too difficult across a tier
- terminology confusion appears across several modules
- reviewers repeatedly request clearer examples across multiple modules

Record these patterns in:

```text
analysis/{tier}/T{tier}_SHARED_FIXES.md
analysis/{tier}/T{tier}_SHARED_ASSETS.md
```

Affected modules should then be updated individually.

## 3. Course-Wide Instructional Changes

If feedback reveals a pattern affecting the teaching design of many modules, update the canonical module template.

Typical examples:

- demonstrations need visible AI outputs
- exercises require clearer scaffolding
- portfolio artefacts require better explanation

Primary document to update:

```text
docs/COURSE_MODULE_TEMPLATE.md
```

Modules should then be updated gradually to align with the revised template.

## 4. Philosophy or AI-Use Issues

Rare feedback may reveal confusion about the role of AI itself.

Typical examples:

- learners over-trust AI output
- learners misunderstand human responsibility
- learners misuse AI tools in professional contexts

Update:

```text
COURSE_PHILOSOPHY.md
docs/AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md
```

Such changes should be deliberate and infrequent.

## 5. Repository Workflow Issues

If feedback exposes problems with how the project operates, update the relevant process documentation.

Typical examples:

- contributors edit the wrong repository layers
- the AI generation workflow is unclear
- review analysis responsibilities are confusing

Possible documents to update:

```text
CONTRIBUTING.md
docs/CODEX_MODULE_GENERATION_GUIDE.md
docs/REVIEW_INGESTION_SYSTEM.md
REPOSITORY_MAP.md
```

## Stability Rule

Authority documents should not be changed based on a single module review.

Architecture-level updates should only occur when clear patterns appear across multiple modules or review cycles.

---

# Standard Output Format for Review Analysis

When a module review cycle is complete, the analysis should produce the following sections.

## 1. Module Under Review
- Module ID
- Module title
- Current draft version

## 2. Review Sample
- number of feedback files reviewed
- reviewer types represented

## 3. Repeated Strengths
What reviewers consistently liked.

## 4. Repeated Concerns
What reviewers consistently struggled with.

## 5. High-Priority Confirmed Issues
The strongest concerns supported by evidence.

## 6. Possible Issues To Watch
Concerns not yet strong enough to drive major change.

## 7. Outliers / Low-Value Feedback
Suggestions that should not drive the revision.

## 8. Revision Priorities
Short list of proposed changes.

## 9. Stability Notes
What should remain unchanged.

---

# What Reviewers Often Reveal

Across course feedback, the most valuable signals usually come from:

- where learners get stuck
- where learners misinterpret a concept
- where exercises are unclear
- where examples feel irrelevant
- where confidence drops
- where motivation rises

The most dangerous mistake in feedback review is treating every comment as equally important.

It is not.

Patterns matter more than volume.

---

# Guidance for AI Assistants Supporting Review Analysis

An AI assistant helping with feedback intake should:

- read the current module first
- ingest feedback in batches
- maintain an issue ledger
- avoid proposing changes too early
- identify repeated themes
- distinguish evidence from preference
- help produce a revision plan only after the full review set is analyzed

An AI assistant must **not**:

- edit raw review files
- collapse all feedback into one vague summary
- overreact to one strong reviewer opinion
- rewrite the module before issue patterns are clear

---

# Suggested File Usage in the Repository

This document should live in:

`docs/REVIEW_INGESTION_SYSTEM.md`

Optional output files generated during a review cycle may live in:

`analysis/{tier}/{module_id}/`

Examples:

- `analysis/foundation/T1M01/issue_ledger.md`
- `analysis/foundation/T1M01/review_synthesis.md`
- `analysis/foundation/T1M01/revision_plan.md`

These output files are optional working files.
This document is the **single required process reference**.

---

# Practical Rule of Thumb

If you are unsure what to do next while processing feedback, do this:

1. read the module
2. read 2–3 feedback files
3. log issues
4. do not fix anything yet
5. repeat until all feedback is reviewed
6. then synthesize
7. then revise

That is the system.

---

# Final Principle

The purpose of review analysis is not to make everyone happy.

It is to improve the module in ways that are:

- evidence-based
- aligned with the course philosophy and curriculum design
- supportive of learning
- sustainable across the whole curriculum
