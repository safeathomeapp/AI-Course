# REPOSITORY_MAP.md

## Purpose

This document defines the **canonical structure of the AI-Course repository**.

It explains:

* the purpose of each top-level directory
* where different types of content belong
* which folders represent the **source of truth**
* which folders are **reference or generated layers**
* how humans and AI tools should interact with the repository

Other documentation files may include simplified structure summaries, but **this file is the authoritative description of repository organization.**

---

# Top-Level Repository Structure

The repository is organized into functional layers that support course design, development, and delivery.

```
AI-Course/
│
├── reviews/
├── analysis/
├── modules/
├── learning/
├── docs/
├── drafts/
├── archive/
├── prompts/
└── capstones/
```

Each folder serves a specific role within the development workflow.

---

# Folder Descriptions

## modules/

**Active curriculum source files.**

This directory contains the authoritative Markdown versions of course modules.

Modules include:

* concept explanations
* demonstrations
* exercises
* real-world scenarios
* portfolio artefacts

Subfolders represent course tiers:

```
modules/
  foundation/
  applied/
  systems/
```

All curriculum edits should normally occur here first.

---

## learning/

**Learner-facing course delivery layer.**

This folder contains the HTML/CSS/JavaScript implementations used to present modules as rich interactive learning experiences.

Typical contents:

```
learning/
  foundation/
    T1M01/
      index.html
      styles.css
      script.js
      assets/
```

The learning layer is derived from the Markdown modules in `modules/`.

Changes to course content should normally be made in `modules/` before being reflected here.

---

## analysis/

**Review synthesis and revision planning.**

This folder contains structured analysis of reviewer feedback and module revision planning.

Examples include:

* issue ledgers
* review syntheses
* revision strategies
* shared fixes
* shared asset mappings

Subfolders are organized by course tier.

This layer contains **internal development artefacts** used to guide curriculum revisions and asset planning. It is not learner-facing content.

---

## reviews/

**Raw reviewer feedback.**

This directory contains unedited reviewer comments on modules.

Reviews are preserved exactly as received and should not be modified.

These files act as the **input layer** for the analysis process.

```
reviews/
  foundation/
  applied/
  systems/
```

---

## docs/

**Course architecture and development documentation.**

This folder contains documents that define how the course is designed and built.

Examples:

* course architecture
* module templates
* curriculum map
* review ingestion system
* testing guidelines

Important subdirectories include:

### docs/course_assets/

Reusable instructional assets used across modules.

Examples include:

* worked examples
* diagrams
* exercises
* glossary entries
* output comparison examples
* mental models

Modules should **reuse assets from this library where appropriate rather than duplicating them.**

---

### docs/session_notes/

Development notes documenting key design decisions, milestones, and architecture changes during the course build.

---

## drafts/

**Work-in-progress module development.**

This folder contains early drafts or experimental modules that are not yet part of the active curriculum.

Examples:

* early outlines
* incomplete modules
* exploratory teaching concepts

Once a draft reaches a stable state it should move to `modules/`.

---

## archive/

**Historical module snapshots.**

This directory preserves earlier versions of modules during major revision passes.

Example naming pattern:

```
T1M01_introduction_to_ai_v0.md
T1M01_introduction_to_ai_v1.md
```

Archived files are kept for reference only and are **not active curriculum**.

---

## prompts/

**Prompt templates used during development.**

This folder contains prompts used for AI-assisted workflows such as:

* analysis prompts
* revision prompts
* module generation prompts
* Codex workflow prompts

These prompts support the development process but are not part of learner content.

---

## capstones/

**Capstone project definitions.**

This folder will contain larger practical projects completed at the end of course tiers.

Examples may include:

* AI workflow design
* AI-assisted research exercises
* structured prompting projects

---

# Source-of-Truth Rules

To prevent confusion, each layer of the repository has a clearly defined role.

| Layer    | Purpose                                  | Source of Truth      |
| -------- | ---------------------------------------- | -------------------- |
| modules  | active course curriculum                 | YES                  |
| learning | learner-facing implementation            | derived from modules |
| analysis | review synthesis and revision planning   | supporting           |
| reviews  | raw reviewer feedback                    | reference only       |
| docs     | architecture and reusable teaching assets| reference            |
| drafts   | work-in-progress modules                 | development          |
| archive  | historical module snapshots              | reference only       |
| prompts  | AI workflow prompts                      | supporting           |

---

# Editable vs Reference Content

The following matrix clarifies where editing normally occurs.

| Folder    | Editable | Purpose                          |
| --------- | -------- | -------------------------------- |
| modules   | Yes      | Active curriculum content        |
| learning  | Yes      | Interactive learning experience  |
| analysis  | Yes      | Review analysis and planning     |
| reviews   | No       | Raw reviewer feedback            |
| docs      | Yes      | Architecture and teaching assets |
| drafts    | Yes      | Work-in-progress modules         |
| archive   | No       | Historical module snapshots      |
| prompts   | Yes      | Development workflow prompts     |
| capstones | Yes      | Project definitions              |

## Editing Governance

The table above defines where edits normally occur. The following rules clarify how repository layers should be used during development.

### Primary Editing Layer

The **`modules/` directory is the authoritative source for curriculum content.**

All instructional improvements should normally begin in `modules/`.

Changes may include:

* improving explanations
* refining exercises
* adding examples
* adjusting lesson flow

### Learning Experience Layer

The `learning/` directory contains the learner-facing HTML implementation.

Edits here typically include:

* layout and presentation
* styling and UI components
* JavaScript behaviour
* interactive exercises

Content changes should normally be made in `modules/` first and then reflected in `learning/`.

### Analysis Layer

The `analysis/` directory contains structured planning artefacts derived from reviewer feedback.

Examples include:

* issue ledgers
* review syntheses
* revision strategies
* shared fixes and asset mapping

These documents guide revisions but are not learner-facing material.

### Raw Review Data

Files stored in `reviews/` must remain **unaltered**.

These documents represent the original reviewer feedback and serve as the input layer for analysis.

### Historical Snapshots

The `archive/` directory contains previous module versions preserved for reference.

Archived files should not be edited.

### Development Drafts

The `drafts/` directory contains early or incomplete modules that are not yet part of the active curriculum.

Once stable, drafts should be moved into `modules/`.

### Asset Libraries

Reusable teaching assets are stored in:

```
docs/course_assets/
```

Modules should reference assets from this library rather than duplicating material across modules.

### AI Editing Rules

AI tools operating within this repository should follow these constraints:

1. Treat `modules/` as the primary curriculum source.
2. Do not modify files in `reviews/`.
3. Do not modify files in `archive/`.
4. Modify `learning/` only when working on the learner interface.
5. Reuse assets from `docs/course_assets/` whenever possible.
6. Use `analysis/` outputs to guide curriculum revisions.
7. Do not generate duplicate assets that already exist in `docs/course_assets/`.

---

# Guidance for AI Tools

The following operational guidance explains how AI assistants should work within the repository structure.
AI assistants working in this repository should follow these rules:

* Treat `modules/` as the **primary source of curriculum content**.
* Do not treat files in `archive/` as active modules.
* Do not modify files in `reviews/`.
* Reuse assets from `docs/course_assets/` instead of generating duplicates.
* Only modify files in `learning/` when working on learner experience implementations.
* Use `analysis/` outputs to guide revision tasks.

---

# Guidance for Contributors

When adding or modifying content:

1. **Edit curriculum in `modules/` first.**
2. Update `learning/` only after source modules are finalized.
3. Preserve reviewer feedback in `reviews/` exactly as received.
4. Store analysis outputs in `analysis/`.
5. Move earlier module versions to `archive/` when performing major revisions.
6. Use reusable assets from `docs/course_assets/` whenever possible.

---

# Relationship to Other Documentation

This file defines the repository structure.

Other important documents include:

* `README.md` – project overview
* `COURSE_INDEX.md` – course navigation
* `PROJECT_CONTEXT.md` – development context
* `AI_PROJECT_CONTEXT.md` – AI tool behavior guidance
* `CONTRIBUTING.md` – contributor workflow

These documents may summarize the repository layout, but **this file remains the canonical reference.**

---

# Summary

The repository is structured to support a clear workflow:

```
reviews → analysis → modules → learning experience
```

This separation ensures that:

* raw feedback is preserved
* revisions are planned systematically
* curriculum content remains maintainable
* learner experiences can evolve independently of source modules
* historical versions are preserved for reference
* shared teaching assets are centralized in `docs/course_assets/`

Maintaining this structure helps both human contributors and AI tools work effectively within the project.
