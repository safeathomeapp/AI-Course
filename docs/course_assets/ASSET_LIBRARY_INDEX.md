# ASSET_LIBRARY_INDEX.md

## Purpose

This file is the entry point for the shared teaching asset library in `docs/course_assets/`.

Use this directory for reusable instructional material that supports modules, not for course policy, architecture, or repository governance. The authoritative module content still lives in `modules/`, and the course-level authority documents still live at the repository root and in `docs/`.

The asset library exists to:

- ensure consistency across modules
- reduce duplication of teaching materials
- provide reusable examples, models, diagrams, exercises, and artefact exemplars
- give both human authors and AI tools a reliable reference layer for module support

## Scope Boundary

Use `docs/course_assets/` for:

- reusable teaching assets
- shared examples
- stable definitions
- reusable exercise prompts
- renderable diagram specifications
- portfolio artefact exemplars

Do not use `docs/course_assets/` to redefine:

- course philosophy
- repository structure
- module template requirements
- contributor workflow rules

Those boundaries are defined in:

- `COURSE_PHILOSOPHY.md`
- `REPOSITORY_MAP.md`
- `docs/AI_COURSE_ARCHITECTURE.md`
- `docs/COURSE_MODULE_TEMPLATE.md`

## Asset Library Structure

All files in this directory should have a clear reusable role inside the shared teaching asset layer. The library works best when each file has a distinct job and defers to neighboring files instead of duplicating them.

## Asset Files

### `AI_GLOSSARY.md`

Primary role:

- canonical term definitions for recurring AI vocabulary used in modules

Use this file for:

- definitions of terms such as prompt, context, hallucination, token, verification, and decision readiness

Do not use this file for:

- worked demonstrations
- mental models
- exercise design

Related files:

- `AI_MENTAL_MODELS_LIBRARY.md`
- `AI_WORKED_EXAMPLES.md`

### `AI_MENTAL_MODELS_LIBRARY.md`

Primary role:

- canonical conceptual models used to teach safe and effective AI use

Use this file for:

- workflow models
- reasoning models
- review-depth models

Do not use this file for:

- term definitions
- diagram rendering specs
- full worked demonstrations

Related files:

- `AI_GLOSSARY.md`
- `AI_DIAGRAM_LIBRARY.md`

### `AI_DIAGRAM_LIBRARY.md`

Primary role:

- specifications for diagrams that visualize approved course models

Use this file for:

- what a diagram should show
- which module(s) it supports
- the teaching point it reinforces

Do not use this file for:

- replacing the underlying model explanation
- long-form content writing

Related files:

- `AI_MENTAL_MODELS_LIBRARY.md`

### `AI_WORKED_EXAMPLES.md`

Primary role:

- full demonstration-ready examples with weak prompt, improved prompt, outputs, and explanation

Use this file for:

- demonstration sections
- instructor walkthroughs
- module examples that need richer narrative explanation

Do not use this file for:

- short comparison snippets
- glossary-style explanation

Related files:

- `AI_OUTPUT_COMPARISON_LIBRARY.md`
- `AI_EXERCISE_LIBRARY.md`

### `AI_OUTPUT_COMPARISON_LIBRARY.md`

Primary role:

- short, scannable weak-vs-improved prompt/output comparisons

Use this file for:

- side-by-side comparison blocks
- quick demonstrations of prompt improvement

Do not use this file for:

- full worked-example walkthroughs
- complete teaching scripts

Related files:

- `AI_WORKED_EXAMPLES.md`

### `AI_EXERCISE_LIBRARY.md`

Primary role:

- reusable guided practice tasks

Use this file for:

- guided exercise sections
- workshop activities
- scaffolded learner practice

Do not use this file for:

- glossary definitions
- fully worked demonstrations

Related files:

- `AI_WORKED_EXAMPLES.md`
- `AI_OUTPUT_COMPARISON_LIBRARY.md`

### `AI_ARTEFACT_EXAMPLES.md`

Primary role:

- examples of portfolio artefacts learners can produce

Use this file for:

- portfolio artefact sections
- showing the difference between weak outputs and reusable professional artefacts

Do not use this file for:

- policy documents
- governance standards

Related files:

- `AI_MENTAL_MODELS_LIBRARY.md`

### `UX_CONTENT_MAPPING.md`

Primary role:

- implementation companion showing how approved teaching patterns map into shared UI components

Use this file for:

- translating teaching structure into the shared lesson UI
- keeping component meaning consistent across modules

Do not use this file for:

- course philosophy
- repository governance
- replacing the module template

## How Assets Should Be Used

When developing or revising modules:

1. Prefer existing assets from this library rather than creating duplicates.
2. Reuse the primary file for the relevant task type.
3. If files overlap, use the one with the narrower and more appropriate role.
4. Add cross-references rather than repeating the same explanation in multiple files.
5. If a new reusable asset is created, add it to the correct library file instead of scattering similar material across modules.

## Relationship to Module Development

These assets support module development. They do not replace module authorship in `modules/`.

The current asset-to-module planning reference is:

`analysis/foundation/T1_FOUNDATION_ASSET_MAP.md`

Use that file as planning support for Foundation modules, not as a replacement for the source curriculum in `modules/`.

## Guidance for AI Tools

AI assistants working in this repository should:

- treat this directory as the reusable teaching asset layer
- reuse approved assets where appropriate instead of generating duplicates
- keep terminology and examples aligned with existing files
- avoid turning asset files into policy or architecture documents

## Summary

`docs/course_assets/` should feel like one coherent support library:

- glossary for terms
- mental models for concepts
- diagrams for visuals
- worked examples for full demonstrations
- comparison library for scannable contrasts
- exercise library for practice
- artefact examples for portfolio outputs
- UX mapping for implementation consistency
