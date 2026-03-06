# CODEX_MODULE_GENERATION_GUIDE.md

## Purpose

This document explains how to use Codex or another AI coding agent to generate course modules inside the repository while keeping the output aligned with the project's structure and standards.

This is not a promise that AI-generated modules are ready to publish without review. Generated modules must still be checked by a human.

---

# Prerequisites

Before using Codex to generate modules, ensure the repository contains at least:

## Root files
- `README.md`
- `PROJECT_CONTEXT.md`
- `CONTRIBUTING.md`
- `PROMPT_LIBRARY.md`

## Documentation files in `docs/`
- `AI_COURSE_ROADMAP.md`
- `AI_BEHAVIOUR_AND_USAGE_GUIDELINES.md`
- `COURSE_MODULE_TEMPLATE.md`
- `COURSE_CASE_STUDIES.md`
- `COURSE_CURRICULUM_MAP.md`
- `MODULE_SCAFFOLDER_TEMPLATE.md`

These files together give Codex enough context to produce useful structured output.

---

# What Codex Should Do

Codex should:

1. read the core repo files
2. identify the module list from the curriculum map
3. generate one markdown file per module
4. place each file in the correct course directory
5. follow the structure in `MODULE_SCAFFOLDER_TEMPLATE.md`
6. keep the tone direct, practical, and professionally relevant

Codex should not:

- invent new course tiers
- replace the fixed module structure
- generate marketing fluff
- make the course tool-dependent
- treat AI as inherently trustworthy

---

# Recommended Folder Targets

Use these target folders:

- `foundation_course/`
- `applied_course/`
- `systems_course/`

Examples:

- `foundation_course/module_01_introduction_to_ai.md`
- `applied_course/module_04_ai_for_analysis_and_decision_support.md`
- `systems_course/module_06_ai_system_reliability.md`

---

# Recommended Codex Workflow

## Option 1 — Generate One Module at a Time

Best when quality control matters most.

Example handoff:

```text
Read the following files before writing anything:
README.md
PROJECT_CONTEXT.md
CONTRIBUTING.md
docs/COURSE_MODULE_TEMPLATE.md
docs/COURSE_CURRICULUM_MAP.md
docs/COURSE_CASE_STUDIES.md
docs/MODULE_SCAFFOLDER_TEMPLATE.md

Now generate the file:
foundation_course/module_01_introduction_to_ai.md

Use the curriculum map entry for Module 1.1.
Follow the exact scaffold in MODULE_SCAFFOLDER_TEMPLATE.md.
Use a direct, practical tone.
Include at least one recurring case study example.
Include one guided exercise and one portfolio artefact.
Do not write marketing copy.
```

This approach gives the best control.

---

## Option 2 — Generate a Whole Tier

Best when you want speed and are willing to review heavily afterwards.

Example handoff:

```text
Read the following files before writing anything:
README.md
PROJECT_CONTEXT.md
CONTRIBUTING.md
docs/COURSE_MODULE_TEMPLATE.md
docs/COURSE_CURRICULUM_MAP.md
docs/COURSE_CASE_STUDIES.md
docs/MODULE_SCAFFOLDER_TEMPLATE.md

Generate all Tier 1 modules listed in docs/COURSE_CURRICULUM_MAP.md.

Create one markdown file per module in foundation_course/.

Requirements:
- follow MODULE_SCAFFOLDER_TEMPLATE.md
- keep tone practical and direct
- no hype
- use recurring case study domains where appropriate
- include a guided exercise in every module
- include a portfolio artefact in every module
- align each module to its curriculum map topic
```

This is fast, but review is mandatory.

---

## Option 3 — Generate All Course Modules

Best only after the structure is stable.

Example handoff:

```text
Read the repository orientation files and the docs folder first.

Then generate all modules listed in docs/COURSE_CURRICULUM_MAP.md.

Create one markdown file per module in the correct course directory:
- foundation_course/
- applied_course/
- systems_course/

Each file must follow docs/MODULE_SCAFFOLDER_TEMPLATE.md and remain consistent with:
- README.md
- PROJECT_CONTEXT.md
- CONTRIBUTING.md
- docs/COURSE_MODULE_TEMPLATE.md
- docs/COURSE_CASE_STUDIES.md

Do not create extra modules.
Do not change the three-tier structure.
Do not use hype language.
Do not write shallow “prompt tricks” content.
Every module must include:
- concept explanation
- demonstration
- guided exercise
- real-world application
- common mistakes
- portfolio artefact
- reflection questions
- optional advanced exploration
```

This is the highest-speed option and the highest-review option.

---

# Suggested Review Process After Generation

After Codex generates files:

1. check file names
2. check module order
3. verify each module matches the curriculum map
4. confirm the scaffold sections are present
5. remove repetitive filler language
6. strengthen weak examples
7. improve any generic exercises
8. commit only after review

---

# Recommended Git Workflow

A safe pattern is:

```bash
git checkout -b generate-foundation-modules
# run Codex generation
git status
git diff
git add .
git commit -m "Generate foundation course module drafts"
git push origin generate-foundation-modules
```

Then review before merging.

Repeat for other tiers.

---

# Recommended Prompt for Codex in Git Bash / CLI

Use this as a starting point:

```text
You are working inside the AI-Course repository.

Before generating any files, read:
README.md
PROJECT_CONTEXT.md
CONTRIBUTING.md
docs/AI_COURSE_ROADMAP.md
docs/COURSE_MODULE_TEMPLATE.md
docs/COURSE_CASE_STUDIES.md
docs/COURSE_CURRICULUM_MAP.md
docs/MODULE_SCAFFOLDER_TEMPLATE.md

Task:
Generate markdown lesson files for the modules listed in the curriculum map.

Rules:
- Put each file in the correct course directory
- Follow MODULE_SCAFFOLDER_TEMPLATE.md exactly
- Keep the tone practical, direct, and no-nonsense
- Do not write marketing copy
- Do not invent extra course structure
- Use recurring case study domains where relevant
- Include exercises and portfolio artefacts in every module
- Reinforce that AI is a tool, not an authority

Start with Tier 1 only unless instructed otherwise.
```

That is the safest general starting instruction.

---

# Practical Advice

Do not generate all 30 modules and trust them blindly.

A better sequence is:

1. generate Tier 1
2. review and refine
3. improve the scaffold if needed
4. generate Tier 2
5. review and refine
6. generate Tier 3

That produces far better results than one giant generation run.

---

# Final Note

Codex becomes much more effective when the repository already contains:
- clear philosophy
- fixed templates
- curriculum mapping
- contribution rules
- example domains

That is why these infrastructure files matter.

The AI is not becoming smarter in that moment. It is being given a better operating environment.
