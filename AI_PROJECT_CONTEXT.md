# AI_PROJECT_CONTEXT.md

## Purpose of This File

This document provides operational guidance for AI systems working inside this repository.

It is not the general project overview and it is not the canonical repository-structure document.

AI tools should use this file to understand:

- how to behave in this repository
- which files and layers to treat as authoritative
- which repository areas are editable versus protected
- how review and revision work should flow

For broader context, AI tools should defer to:

- `README.md` for project overview
- `COURSE_PHILOSOPHY.md` for course philosophy
- `REPOSITORY_MAP.md` for repository structure
- `docs/AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md` for AI usage principles

---

## Core Operating Principle

The repository follows this principle:

AI drafts. Humans review. Humans decide.

AI systems are collaborators in the workflow, not final decision-makers.

---

## Authority Documents AI Tools Must Defer To

When there is any ambiguity, use these documents as the source of truth:

1. `COURSE_PHILOSOPHY.md`
2. `REPOSITORY_MAP.md`
3. `docs/AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md`
4. `docs/COURSE_CURRICULUM_MAP.md`
5. `docs/COURSE_MODULE_TEMPLATE.md`
6. `docs/MODULE_SCAFFOLDER_TEMPLATE.md`

Supporting entry documents:

- `README.md`
- `PROJECT_CONTEXT.md`
- `COURSE_INDEX.md`

---

## Repository Layer Rules

AI tools must respect the repository layer model defined in `REPOSITORY_MAP.md`.

The most important operating boundaries are:

- `modules/` contains the active curriculum source
- `learning/` contains learner-facing implementations derived from modules
- `analysis/` contains review synthesis and revision planning
- `reviews/` contains raw reviewer feedback and must not be edited
- `drafts/` contains work-in-progress modules and must not be treated as active curriculum
- `archive/` contains historical module snapshots and must not be treated as active curriculum
- `docs/course_assets/` contains reusable teaching assets that should be reused instead of duplicated

---

## AI Editing Rules

AI tools operating in this repository should follow these rules:

1. Treat `modules/` as the primary source of curriculum content.
2. Do not modify files in `reviews/`.
3. Do not treat `drafts/` as active course modules.
4. Do not treat `archive/` as active curriculum.
5. Reuse assets from `docs/course_assets/` whenever possible instead of generating duplicates.
6. Use `analysis/` outputs to guide revision tasks.
7. Modify `learning/` only when working on learner-facing implementation.
8. Do not alter course philosophy without explicit instruction.
9. Do not rename module IDs without explicit instruction.

These rules align with:

- `REPOSITORY_MAP.md`
- `COURSE_PHILOSOPHY.md`
- `docs/AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md`

---

## Development Workflow

Modules are developed through a structured process:

1. Draft or maintain the module source in `modules/` or `drafts/`, depending on maturity.
2. Collect review feedback in `reviews/{tier}/{module}/`.
3. Analyze review patterns in `analysis/{tier}/{module}/`.
4. Create or update a revision plan.
5. Revise the active module in `modules/`.
6. Reflect approved curriculum changes in `learning/` when relevant.

AI tools should support this flow without collapsing the boundaries between raw feedback, analysis, source curriculum, and delivery layers.

---

## AI May

- summarize review feedback
- identify repeated issues and strengths
- assist with revision planning
- revise modules using approved analysis outputs
- update architecture and process documentation
- help maintain learner-facing delivery files when the task is implementation-focused

## AI Must Not

- edit raw reviewer feedback in `reviews/`
- treat drafts or archives as active curriculum unless explicitly instructed
- bypass human review on curriculum or governance decisions
- invent duplicate shared assets when a reusable asset already exists

---

## Practical Reading Order for AI Tools

When starting work in this repository, use this order:

1. `README.md`
2. `COURSE_PHILOSOPHY.md`
3. `REPOSITORY_MAP.md`
4. `AI_PROJECT_CONTEXT.md`
5. `docs/AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md`

Then read task-specific authority files as needed, for example:

- `docs/COURSE_CURRICULUM_MAP.md`
- `docs/COURSE_MODULE_TEMPLATE.md`
- `docs/MODULE_SCAFFOLDER_TEMPLATE.md`
- `docs/REVIEW_INGESTION_SYSTEM.md`
- `docs/CODEX_MODULE_GENERATION_GUIDE.md`

---

## Final Note

This file defines how AI tools should operate inside the repository.

It should remain operational, concise, and aligned to the authority documents rather than duplicating them.
