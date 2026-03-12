# Course Assets Audit

## Purpose

This report documents the consistency audit and normalization pass completed for `docs/course_assets/`.

The goal of the pass was to make the shared teaching asset layer internally consistent, non-contradictory, and easier to maintain without rewriting the library from scratch.

## Files Reviewed

### Authority and context files reviewed

- `README.md`
- `COURSE_PHILOSOPHY.md`
- `REPOSITORY_MAP.md`
- `AI_PROJECT_CONTEXT.md`
- `docs/AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md`
- `docs/AI_COURSE_ARCHITECTURE.md`
- `docs/COURSE_CURRICULUM_MAP.md`
- `docs/COURSE_MODULE_TEMPLATE.md`
- `docs/CODEX_MODULE_GENERATION_GUIDE.md`
- `docs/DOCUMENTATION_DEPENDENCY_MAP.md`

### `docs/course_assets/` files reviewed

- `docs/course_assets/AI_ARTEFACT_EXAMPLES.md`
- `docs/course_assets/AI_DIAGRAM_LIBRARY.md`
- `docs/course_assets/AI_EXERCISE_LIBRARY.md`
- `docs/course_assets/AI_GLOSSARY.md`
- `docs/course_assets/AI_MENTAL_MODELS_LIBRARY.md`
- `docs/course_assets/AI_OUTPUT_COMPARISON_LIBRARY.md`
- `docs/course_assets/AI_WORKED_EXAMPLES.md`
- `docs/course_assets/ASSET_LIBRARY_INDEX.md`
- `docs/course_assets/UX_CONTENT_MAPPING.md`

## Issues Found

### 1. Scope boundaries were weak

Several files described useful material but did not clearly state what they were for and what they were not for. This made overlap more likely, especially between:

- glossary vs mental models
- worked examples vs output comparisons
- exercise library vs worked examples
- artefact examples vs policy-like guidance
- UX content mapping vs the shared teaching asset layer

### 2. Terminology was not fully normalized

The library mostly aligned with the course philosophy, but a few terms drifted:

- `RCTCO` appeared in some places while the wider repository uses the explicit five-part prompt structure:
  - Role
  - Context
  - Task
  - Constraints
  - Output Format
- Some reminders used `Humans verify` where the course architecture and philosophy center `Human Review`.

### 3. Some files risked competing with neighboring assets

The most important overlap patterns were:

- `AI_GLOSSARY.md` and `AI_MENTAL_MODELS_LIBRARY.md`
- `AI_WORKED_EXAMPLES.md` and `AI_OUTPUT_COMPARISON_LIBRARY.md`
- `AI_EXERCISE_LIBRARY.md` and the demonstration assets

The content was not directly contradictory, but file roles were not explicit enough to prevent duplication over time.

### 4. One file had an awkward placement in the asset layer

`docs/course_assets/UX_CONTENT_MAPPING.md` is implementation-facing and contributor-facing, not a reusable teaching asset in the same sense as glossary, examples, diagrams, or exercises. It was retained, but its scope needed clarification so it does not read like a competing authority.

## Contradictions Found

### Prompt structure naming inconsistency

- `AI_DIAGRAM_LIBRARY.md` used `Structured Prompt Anatomy (RCTCO)`.
- The authority documents and active module materials consistently use the explicit five-part prompt structure.

Action taken:

- normalized the diagram title and exercise wording to `Five-Part Prompt Structure` and explicit component names

### Review terminology inconsistency

- `AI_EXERCISE_LIBRARY.md` ended with `AI drafts. Humans verify. Humans decide.`
- `AI_GLOSSARY.md` framed verification as the main workflow phrase in a way that drifted from the canonical `Human Review` language
- the course philosophy uses:
  - `AI drafts. Humans review. Humans decide.`

Action taken:

- normalized reminders and glossary wording so `verification` is treated as a part of human review, not a competing top-level workflow phrase

## Redundant Content Found

### Worked examples vs output comparisons

These files covered similar territory but in different levels of depth. The overlap was legitimate, but the distinction was under-documented.

Action taken:

- clarified that `AI_WORKED_EXAMPLES.md` is for full demonstration blocks
- clarified that `AI_OUTPUT_COMPARISON_LIBRARY.md` is for concise side-by-side contrasts

### Glossary vs mental models

Both files touch foundational concepts such as prompting, review, and uncertainty. The content is still distinct, but the boundary needed to be explicit.

Action taken:

- added scope notes and related-file cross-references to both files

### Exercises vs demonstration assets

`AI_EXERCISE_LIBRARY.md` reused some of the same instructional patterns as the worked examples and comparison library, but without saying when it should defer to those files.

Action taken:

- added scope notes and related-file references to distinguish practice scaffolds from demonstrations

## Path / Reference Problems Found

### Verified as correct

The following references were checked and found to align with the current repository structure:

- `analysis/foundation/T1_FOUNDATION_ASSET_MAP.md`
- `learning/shared/t1m01_index.html`
- `learning/shared/t1m01_styles.css`
- `learning/shared/t1m01_script.js`
- `modules/foundation/T1M01_introduction_to_ai.md`

### Problems requiring direct correction

No broken internal paths were found inside `docs/course_assets/` during this pass.

The main issue was not broken paths but unclear file-role boundaries and inconsistent terminology.

## Actions Taken

### `ASSET_LIBRARY_INDEX.md`

- rewritten to clarify the purpose of the asset layer
- added explicit scope boundaries
- separated file roles by primary purpose
- clarified how each asset should defer to related files
- clarified that assets support modules but do not replace curriculum authority
- acknowledged `UX_CONTENT_MAPPING.md` as an implementation companion rather than a primary teaching asset

### `AI_GLOSSARY.md`

- added explicit scope note
- added related-file references
- reframed `verification` as part of `human review`
- aligned the practical workflow reminder to:
  - `Prompt -> Context -> Generation -> Human Review -> Decision`

### `AI_MENTAL_MODELS_LIBRARY.md`

- added explicit scope note
- added related-file references
- clarified alignment with the five-part prompt structure terminology

### `AI_DIAGRAM_LIBRARY.md`

- added explicit scope note
- added related-file references
- renamed the structured prompt diagram to `Five-Part Prompt Structure`
- normalized the core principle wording

### `AI_EXERCISE_LIBRARY.md`

- added explicit scope note
- added related-file references
- replaced `RCTCO` wording with the explicit five-part prompt structure
- normalized the closing reminder to `AI drafts. Humans review. Humans decide.`

### `AI_OUTPUT_COMPARISON_LIBRARY.md`

- added explicit boundary note deferring fuller walkthrough needs to `AI_WORKED_EXAMPLES.md`

### `AI_WORKED_EXAMPLES.md`

- added explicit boundary note distinguishing worked examples from the comparison library

### `AI_ARTEFACT_EXAMPLES.md`

- added explicit scope note that artefact examples are exemplars, not governance rules
- added related-file references
- normalized the closing principle wording

### `UX_CONTENT_MAPPING.md`

- added a scope note clarifying that it is an implementation companion and not a philosophy, architecture, or module-template authority

## Files Updated

- `docs/course_assets/ASSET_LIBRARY_INDEX.md`
- `docs/course_assets/AI_ARTEFACT_EXAMPLES.md`
- `docs/course_assets/AI_DIAGRAM_LIBRARY.md`
- `docs/course_assets/AI_EXERCISE_LIBRARY.md`
- `docs/course_assets/AI_GLOSSARY.md`
- `docs/course_assets/AI_MENTAL_MODELS_LIBRARY.md`
- `docs/course_assets/AI_OUTPUT_COMPARISON_LIBRARY.md`
- `docs/course_assets/AI_WORKED_EXAMPLES.md`
- `docs/course_assets/UX_CONTENT_MAPPING.md`
- `docs/course_assets/COURSE_ASSETS_AUDIT.md`

## Unresolved Issues Requiring Human Review

### Placement of `UX_CONTENT_MAPPING.md`

This file is useful, but it is more contributor-facing and implementation-facing than the rest of the shared teaching asset library.

Current status:

- retained in `docs/course_assets/`
- re-scoped so it does not compete with authority documents

Human review decision still recommended:

- keep it in `docs/course_assets/` as a companion reference, or
- move it to a contributor-focused documentation area in a future documentation-structure pass

## Outcome Summary

After this normalization pass:

- the asset library has clearer file boundaries
- terminology is better aligned with repository authority documents
- major overlap areas now defer to the more appropriate neighboring file
- path references checked during the audit are valid
- the directory reads more like one shared asset system and less like a loose collection of notes
