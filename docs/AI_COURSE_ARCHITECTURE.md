# AI_COURSE_ARCHITECTURE.md

Repository organization is defined in `REPOSITORY_MAP.md`.

## Purpose

Defines the structural architecture for course delivery, learner
progression, and capstone preparation.

## Course Layers

### Orientation

- `README.md` for repository and course overview.
- `PROJECT_CONTEXT.md` for AI/editor operating context.

### Governance

- `CONTRIBUTING.md` for contribution standards and workflow.
- `AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md` for AI usage rules.

### Architecture and Planning

- `AI_COURSE_ROADMAP.md` for strategy and directional outcomes.
- `COURSE_CURRICULUM_MAP.md` for module-level structure by tier.
- `COURSE_MODULE_TEMPLATE.md` for standard module composition.
- `MODULE_SCAFFOLDER_TEMPLATE.md` for generated module scaffolding.
- `CODEX_MODULE_GENERATION_GUIDE.md` for AI-assisted generation workflow.

### Shared Teaching Assets

Reusable instructional assets are stored in:

docs/course_assets/

These include:

- AI_ARTEFACT_EXAMPLES.md
- AI_DIAGRAM_LIBRARY.md
- AI_EXERCISE_LIBRARY.md
- AI_OUTPUT_COMPARISON_LIBRARY.md
- AI_WORKED_EXAMPLES.md
- AI_GLOSSARY.md
- AI_MENTAL_MODELS_LIBRARY.md
- ASSET_LIBRARY_INDEX.md

## Learning and Delivery Flow

The progression model across the program is:

1. Portfolio work through modules
2. Reflection checkpoints
3. Choose project category
4. Design personal AI workflow
5. Capstone build

## Capstone and Portfolio Design Principle

Portfolio artefacts produced throughout modules should feed directly into
capstone planning and execution.

The capstone is the integration point where learners demonstrate:

- structured prompting
- workflow design
- verification and quality control
- practical professional value

## Future Enhancement: Module Metadata Schema

As the course grows, it may become useful to introduce a structured metadata schema for modules.

Possible metadata fields could include:

* module_id
* tier
* estimated_duration
* prerequisites
* learning_objectives
* assets_used
* assessment_type

A metadata schema would support future automation such as:

* automatic course navigation generation
* LMS export
* module dependency mapping
* learner progress tracking
* automated learning page generation

This schema is **not currently required** because modules are still being authored manually.

If automation becomes necessary in the future, a `MODULE_METADATA_SCHEMA.md` document should be created in the `docs/` directory to define the structure.

