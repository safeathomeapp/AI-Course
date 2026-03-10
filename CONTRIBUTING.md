
# CONTRIBUTING.md

## Purpose

This file defines the rules and expectations for contributing to the **AI-Course** repository.

This repository is used to build a structured course titled:

**“An AI's Guide for Humans: Understanding and Harnessing Artificial Intelligence.”**

Contributions may come from:
- human collaborators
- instructors
- subject matter experts
- AI tools such as Codex, Copilot, or other assistants

The purpose of this document is to ensure that **all contributions remain consistent with the philosophy and architecture of the course.**

---

# Core Principles

All contributions must align with the following principles.

### AI is a tool, not an authority
The course teaches learners how to **use AI deliberately and responsibly**. Contributions should reinforce this idea.

### Practical value over novelty
Content should prioritize **real-world usefulness**, not clever prompts or gimmicks.

### Structure over improvisation
All modules must follow the structure defined in:

`docs/COURSE_MODULE_TEMPLATE.md`

### Platform neutrality
Examples should work across:
- ChatGPT
- Claude
- Gemini
- local LLMs
- future models

Avoid writing content that depends heavily on one specific tool unless necessary.

### Career amplification
Course material should emphasize how AI can:
- improve professional output
- reduce repetitive work
- enhance thinking and decision-making
- create portfolio‑grade artefacts

---

# Contribution Workflow

Follow this workflow when adding or modifying material.

1. Create a branch from `main`.

2. Add or modify content in the appropriate folder.

3. Ensure the material follows:
   - `PROJECT_CONTEXT.md`
   - `docs/AI_COURSE_ARCHITECTURE.md`
   - `COURSE_MODULE_TEMPLATE.md`
   - `docs/MODULE_SCAFFOLDER_TEMPLATE.md` (for module drafting)
   - `docs/CODEX_MODULE_GENERATION_GUIDE.md` (for AI-assisted generation)
   - the curriculum defined in `COURSE_CURRICULUM_MAP.md`

4. Run the **module checklist** before committing.
   - For panel-tested modules, capture review against `docs/TEST_PANEL_GUIDELINES.md`.

5. Submit a pull request.

6. Review changes before merging into `main`.

---

# Writing Standards

Contributions should be:

- clear
- direct
- structured
- practical
- grounded in real professional use

Avoid:

- hype about AI replacing humans
- vague motivational writing
- overlong theoretical explanations
- vendor‑specific marketing language

The tone of the course should be **professional, practical, and intellectually honest.**

---

# Module Requirements

Every module must include the sections defined in:

`docs/COURSE_MODULE_TEMPLATE.md`

Required sections:

1. Module Overview  
2. Concept Explanation  
3. Demonstration  
4. Guided Exercise  
5. Real‑World Application  
6. Common Mistakes  
7. Portfolio Artefact  
8. Reflection Questions  
9. Optional Advanced Exploration  

Modules that do not follow this structure should not be merged.

---

# Use of Recurring Case Studies

Where possible, examples should reference the recurring domains defined in:

`docs/COURSE_CASE_STUDIES.md`

These include:

- finance and bookkeeping
- software development
- product management
- marketing and content creation
- operations and administration
- customer support

Using these domains consistently improves continuity across the course.

---

# AI‑Generated Contributions

AI tools may assist in writing content.

However:

- AI outputs must be reviewed by a human.
- AI must follow the guidance in `PROJECT_CONTEXT.md`.
- AI should **not invent new course structures**.

AI contributions should prioritize:

- clarity
- structure
- usefulness
- professional relevance

---

# Portfolio Artefacts

Most modules should produce a **portfolio artefact**.

Examples:

- prompt libraries
- workflow diagrams
- AI‑assisted analysis reports
- SOP documentation
- structured summaries
- decision frameworks

The goal is for learners to finish the course with **tangible outputs demonstrating capability.**

---

# Capstone Project Philosophy

The final project for the course will **not be a single rigid assignment**.

Instead, learners will choose from a list of project categories that best fit their professional interests.

Possible project categories may include:

- AI workflow system
- research assistant
- productivity assistant
- decision support tool
- knowledge organization system
- AI‑assisted reporting workflow

Throughout the course, learners will be encouraged to:

- identify problems in their own work
- experiment with AI workflows
- collect ideas for a final project

By the time they reach the capstone stage, they should have a **clear direction for a project relevant to their career or interests.**

The capstone should demonstrate:

- understanding of AI behaviour
- structured prompting
- workflow design
- validation of outputs
- practical real‑world usefulness

## Portfolio to Capstone Flow

All contributors should design modules and artefacts to support this
fixed progression:

1. Portfolio work through modules
2. Reflection checkpoints
3. Choose project category
4. Design personal AI workflow
5. Capstone build

---

# Repository Structure

The repository is organised as follows:

AI-Course/
│
├── README.md
├── PROJECT_CONTEXT.md
├── CONTRIBUTING.md
├── prompts/PROMPT_LIBRARY.md
│
├── docs/
│   ├── AI_COURSE_ARCHITECTURE.md
│   ├── AI_COURSE_ROADMAP.md
│   ├── AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md
│   ├── COURSE_MODULE_TEMPLATE.md
│   ├── COURSE_CASE_STUDIES.md
│   ├── COURSE_CURRICULUM_MAP.md
│   ├── MODULE_SCAFFOLDER_TEMPLATE.md
│   ├── CODEX_MODULE_GENERATION_GUIDE.md
│   ├── TEST_PANEL_GUIDELINES.md
│   ├── course_assets/
│   └── session_notes/
│
├── modules/
│   ├── foundation/
│   ├── applied/
│   └── systems/
│
├── prompts/
├── capstones/
├── analysis/
├── reviews/
└── drafts/

---

# Final Note

This course is intended to be **serious, useful, and durable.**

The goal is not to create another generic AI course, but to build a resource that helps learners genuinely understand and harness AI in their work.

When contributing, prioritize:

1. clarity
2. structure
3. usefulness
4. real‑world relevance
