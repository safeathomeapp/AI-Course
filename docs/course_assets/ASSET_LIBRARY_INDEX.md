# ASSET_LIBRARY_INDEX.md

## Purpose

This file provides a **single entry point for the shared instructional assets used throughout the AI-Course repository**.

These assets support module development by providing **reusable teaching components** such as diagrams, exercises, worked examples, and conceptual models.

The purpose of the asset library is to:

* ensure consistency across modules
* reduce duplication of teaching materials
* provide reliable references for both human authors and AI tools
* support controlled module revisions using shared instructional components

Modules should **reference these assets where appropriate rather than recreating similar material.**

---

# Asset Library Structure

All reusable teaching assets are stored in:

`docs/course_assets/`

Each file in this directory represents a **specific category of instructional resource**.

---

# Asset Files

## AI_ARTEFACT_EXAMPLES.md

### Purpose

Provides examples of **portfolio artefacts** learners may produce during the course.

These demonstrate the difference between simple outputs and **structured professional artefacts**.

### Typical Uses

* Portfolio artefact section of modules
* Demonstrating improved outputs
* Teaching learners how to produce reusable work assets

### Example Artefacts

* AI tool-use checklist
* reliability control card
* task-risk allocation matrix
* prompt library entry

---

## AI_DIAGRAM_LIBRARY.md

### Purpose

Defines the **standard diagrams used throughout the course**.

This file describes what each diagram should show and the key teaching point it supports.

### Typical Uses

* Visual explanation of concepts
* Supporting demonstrations in modules
* Instructor presentation material

### Example Diagrams

* AI Workflow Model: Draft → Decision
* Structured Prompt Anatomy
* Weak vs Strong Prompt Flow
* Task-Risk Allocation Grid
* Reliability Check Loop

---

## AI_EXERCISE_LIBRARY.md

### Purpose

Contains **reusable guided exercises** used across the course.

Exercises are organized by difficulty level to support learner progression.

### Exercise Levels

* Beginner-Safe
* Adaptation
* Independent

### Typical Uses

* Guided exercise sections of modules
* workshop activities
* practice material for learners

---

## AI_WORKED_EXAMPLES.md

### Purpose

Provides **complete worked examples** showing how structured prompting improves AI output quality.

These examples include:

* weak prompt
* improved prompt
* output comparison
* explanation of improvements

### Typical Uses

* Demonstrations in modules
* instructor teaching material
* examples of safe professional AI use

---

## AI_OUTPUT_COMPARISON_LIBRARY.md

### Purpose

Contains **side-by-side comparisons of weak vs improved AI outputs**.

These comparisons highlight how prompt structure, constraints, and output formatting affect results.

### Typical Uses

* demonstration sections
* teaching prompt improvement
* illustrating reliability and safety principles

---

## AI_GLOSSARY.md

### Purpose

Provides **clear, beginner-safe definitions of key AI terminology** used throughout the course.

### Typical Uses

* terminology reference for learners
* consistent definitions across modules
* support for new learners unfamiliar with AI vocabulary

### Example Terms

* prompt
* context
* hallucination
* token
* structured prompt
* verification
* decision readiness

---

## AI_MENTAL_MODELS_LIBRARY.md

### Purpose

Defines the **core conceptual models used to teach AI behaviour and safe usage**.

Mental models help learners understand how to reason about AI systems in professional contexts.

### Typical Uses

* concept explanation sections of modules
* reinforcing key course principles
* guiding learners in responsible AI use

### Example Mental Models

* AI Workflow Model (Draft → Review → Decision)
* Structured Prompting Model
* Facts vs Inference vs Unknowns
* Task Risk vs Review Depth
* AI Strengths vs Human Strengths
* Prompt Iteration Loop

---

# How Assets Should Be Used

When developing or revising modules:

1. **Prefer existing assets** from this library rather than creating new ones.
2. **Reference assets where relevant** to maintain teaching consistency.
3. Avoid duplicating examples already present in the library.
4. If a new reusable asset is created, it should be **added to the appropriate library file**.

---

# Relationship to Module Development

Shared assets are used during the **controlled revision process** to ensure consistent instructional quality.

The mapping between modules and assets is defined in:

`analysis/foundation/T1_FOUNDATION_ASSET_MAP.md`

This mapping ensures:

* appropriate asset selection for each module
* balanced instructional design
* progressive difficulty across modules

---

# Guidance for AI Tools

AI assistants working in this repository should:

* treat this directory as the **canonical source of reusable teaching assets**
* reuse assets where appropriate instead of generating duplicates
* maintain consistency with existing examples and terminology
* avoid modifying asset files unless explicitly instructed

---

# Summary

The asset library supports **consistent, reusable, and professional instructional design** across the AI-Course project.

Using shared assets ensures that:

* modules remain coherent
* teaching examples remain aligned
* learners encounter consistent conceptual frameworks

These assets form a **core component of the course development system**.
