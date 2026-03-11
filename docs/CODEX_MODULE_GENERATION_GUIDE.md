# CODEX_MODULE_GENERATION_GUIDE.md

## Purpose

This document defines the safe execution workflow for AI-assisted module generation and revision.

It is a process guide, not the canonical source of module structure.

The canonical authorities are:

- `docs/COURSE_CURRICULUM_MAP.md`
- `docs/COURSE_MODULE_TEMPLATE.md`
- `docs/MODULE_SCAFFOLDER_TEMPLATE.md`

---

## Naming Requirements

Modules must follow the project naming system:

- `T1M01`
- `T2M01`
- `T3M01`

Example filename:

`T1M01_introduction_to_ai.md`

Do not invent alternate naming patterns.

---

## Required Reading Order

Before generating or revising a module, read in this order:

1. `COURSE_INDEX.md`
2. `PROJECT_CONTEXT.md`
3. `docs/COURSE_CURRICULUM_MAP.md`
4. `docs/COURSE_MODULE_TEMPLATE.md`
5. `docs/MODULE_SCAFFOLDER_TEMPLATE.md`
6. `docs/course_assets/ASSET_LIBRARY_INDEX.md` or the specific asset files needed for the task

Read additional analysis or module-specific files when the task is a revision rather than a first draft.

---

## Dependency Rules

### Curriculum Dependency

The module being generated must align to its place in:

`docs/COURSE_CURRICULUM_MAP.md`

This controls:

- tier
- module topic
- sequence position
- scope expectations

### Template Dependency

The canonical structure of every module is defined in:

`docs/COURSE_MODULE_TEMPLATE.md`

The quick drafting scaffold is defined in:

`docs/MODULE_SCAFFOLDER_TEMPLATE.md`

Use the scaffold to draft quickly, but treat the canonical module template as the final structural authority.

### Shared Asset Dependency

Before generating or revising a module, review:

`docs/course_assets/`

Reuse shared instructional assets where appropriate instead of inventing duplicate teaching materials.

Do not recreate:

- glossary content
- worked examples
- output comparisons
- exercise starters
- mental models
- artefact examples

when an approved shared version already exists.

---

## Generation Workflow

### 1. Confirm the module target

Identify:

- module ID
- module title
- tier
- whether the task is a new draft or a revision

### 2. Load the governing documents

Read the required files in the order listed above.

Do not start drafting before the relevant authority files are loaded.

### 3. Review shared assets

Check whether reusable assets already exist for:

- examples
- diagrams
- exercises
- glossary terms
- comparison material
- portfolio artefacts

If they exist, reuse them or reference them rather than duplicating them.

### 4. Draft with the scaffold

Use `docs/MODULE_SCAFFOLDER_TEMPLATE.md` to create the initial draft shape.

This keeps drafting fast and consistent.

### 5. Validate against the canonical template

Before treating the draft as complete, check it against:

`docs/COURSE_MODULE_TEMPLATE.md`

Make sure all required sections are present and structurally aligned.

### 6. Preserve authority boundaries

Generated modules must defer to canonical authorities rather than restating them inconsistently.

In practice this means:

- do not invent alternate module structures
- do not redefine course philosophy inside modules
- do not create duplicate shared assets when reusable assets already exist
- do not conflict with the curriculum map or module naming rules

### 7. Apply task-specific revision context when relevant

If revising an existing module, also load the relevant analysis and review materials before editing.

Typical revision inputs may include:

- issue ledgers
- review synthesis
- revision plans
- shared fixes
- asset maps

---

## Safe Generation Rules

Modules generated with AI assistance must:

- remain aligned to the curriculum map
- follow the canonical module template
- use the scaffold as a helper, not as a competing authority
- remain platform-neutral unless the task explicitly requires otherwise
- preserve the principle that AI drafts, humans review, humans decide
- improve clarity, scaffolding, and instructional usefulness

Modules generated with AI assistance must not:

- bypass the canonical template
- duplicate approved shared assets without reason
- invent contradictory module requirements
- drift away from the module’s defined place in the curriculum

---

## Practical Rule

If there is a conflict between this guide and a canonical authority file, follow the canonical authority file.
