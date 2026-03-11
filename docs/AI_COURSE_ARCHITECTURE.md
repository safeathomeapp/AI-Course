# AI_COURSE_ARCHITECTURE.md

## Purpose

This document defines the course design architecture of the AI-Course project.

It governs:

- how the course is structured as a learning system
- how core teaching documents relate to each other
- how shared teaching assets support module design
- how module work should connect to portfolio and capstone outcomes

It does not define repository structure. Repository organization is defined in:

`REPOSITORY_MAP.md`

---

## Architectural Scope

This file sits between philosophy and execution.

- `COURSE_PHILOSOPHY.md` defines the non-negotiable principles of the course.
- `docs/COURSE_CURRICULUM_MAP.md` defines the module inventory by tier.
- `docs/COURSE_MODULE_TEMPLATE.md` defines the canonical shape of a module.
- `AI_COURSE_ARCHITECTURE.md` defines how those pieces work together as one coherent course system.

---

## Course Design Layers

The course is designed as a layered learning system.

### 1. Philosophy Layer

Defined by:

- `COURSE_PHILOSOPHY.md`
- `docs/AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md`

This layer establishes the principles the course must consistently reinforce, including:

- AI is a tool, not an authority
- humans remain accountable
- verification is required
- workflow design matters more than prompt tricks

### 2. Curriculum Layer

Defined by:

- `docs/COURSE_CURRICULUM_MAP.md`

This layer defines what the course covers across the three tiers:

- Foundations
- Applied Workflows
- Systems and Architecture

Its role is scope control and sequencing.

### 3. Module Design Layer

Defined by:

- `docs/COURSE_MODULE_TEMPLATE.md`
- `docs/MODULE_SCAFFOLDER_TEMPLATE.md`
- `docs/CODEX_MODULE_GENERATION_GUIDE.md`

This layer defines how individual modules are built so that teaching quality and structure remain consistent.

Each module should reinforce a stable instructional pattern:

- concept explanation
- demonstration
- guided exercise
- real-world application
- common mistakes
- portfolio artefact
- reflection

### 4. Shared Asset Layer

Defined by:

- `docs/course_assets/`
- `docs/course_assets/ASSET_LIBRARY_INDEX.md`

This layer provides reusable teaching components that can be used across modules instead of being recreated repeatedly.

Key asset types include:

- worked examples
- diagrams
- exercise starters
- output comparisons
- glossary entries
- mental models
- artefact exemplars

### 5. Review and Improvement Layer

Supported by:

- `docs/TEST_PANEL_GUIDELINES.md`
- `docs/REVIEW_INGESTION_SYSTEM.md`
- `analysis/`

This layer ensures modules are improved through structured feedback rather than ad hoc rewriting.

---

## Role of Shared Teaching Assets

Shared teaching assets are a core part of the course architecture, not just an efficiency convenience.

They support module design by:

- improving consistency across modules
- reducing duplicate explanations
- providing stable learner reference points
- making revisions easier to propagate across the tier
- helping AI tools reuse approved instructional materials instead of inventing duplicates

Modules should use shared assets where they improve clarity, scaffolding, or consistency.

Modules should not become dependent on duplicated local versions of assets that already exist in `docs/course_assets/`.

---

## Portfolio-to-Capstone Architecture

The course is designed so that module outputs accumulate toward larger practical outcomes.

The intended progression is:

1. portfolio work through modules
2. reflection checkpoints
3. choice of project category
4. design of a personal AI workflow
5. capstone build

This means modules are not isolated lessons. They are building blocks in a cumulative learning journey.

Portfolio artefacts produced in modules should therefore:

- be usable outside the lesson itself
- reinforce responsible AI practice
- contribute to learner confidence and visible capability
- prepare learners for larger project-based work

---

## Documentation Architecture

The documentation system should support the course architecture with clear boundaries.

### Root documents

Root documents provide entry points and top-level authority context.

Examples:

- `README.md`
- `COURSE_PHILOSOPHY.md`
- `REPOSITORY_MAP.md`
- `AI_PROJECT_CONTEXT.md`

### `docs/` documents

The `docs/` directory holds deeper architecture, process, template, and reference material.

Examples:

- curriculum map
- module template
- generation workflow
- review system
- test panel framework
- shared teaching asset library

This split helps keep root documentation usable while allowing deeper guidance to remain structured and scalable.

---

## Design Principle

The course architecture should always make it easier to preserve the same principles across all tiers:

- clarity before complexity
- structured workflows over improvisation
- reusable assets over duplicate teaching materials
- human review over blind trust
- practical learner outcomes over abstract coverage

That is the function of this architecture: keeping the course coherent as it grows.
