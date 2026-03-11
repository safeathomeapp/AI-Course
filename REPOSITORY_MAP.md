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

---

# Relationship to Other Documentation

This file defines repository structure and folder responsibilities.

Other important documents include:

* `README.md` – project overview
* `COURSE_INDEX.md` – course navigation and reading order
* `PROJECT_CONTEXT.md` – quick working context
* `AI_PROJECT_CONTEXT.md` – AI tool operating guidance
* `CONTRIBUTING.md` – contributor workflow

These documents may summarize the repository layout, but **this file remains the canonical structure reference.**

---

# Summary

The repository is structured to support a clear workflow:

```
reviews → analysis → modules → learning
```

This separation ensures that:

* raw feedback is preserved
* revisions are planned systematically
* curriculum content remains maintainable
* learner experiences can evolve independently of source modules
* historical versions are preserved for reference
* shared teaching assets are centralized in `docs/course_assets/`

Maintaining this structure helps both human contributors and AI tools work effectively within the project.
