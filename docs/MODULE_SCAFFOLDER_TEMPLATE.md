# MODULE_SCAFFOLDER_TEMPLATE.md

## Purpose

This file defines the standard scaffold used to generate a new module in the AI course repository.

It is intended for:
- human authors
- AI tools such as Codex, Copilot, Cursor, or GPT-based agents
- instructors expanding the course

This template should be used together with:

- `README.md`
- `PROJECT_CONTEXT.md`
- `CONTRIBUTING.md`
- `docs/COURSE_MODULE_TEMPLATE.md`
- `docs/COURSE_CURRICULUM_MAP.md`
- `docs/COURSE_CASE_STUDIES.md`

The purpose of this file is to make module generation consistent, fast, and aligned with the project philosophy.

---

# How to Use This Template

When generating a module:

1. Read the project context files first.
2. Identify the target module from `docs/COURSE_CURRICULUM_MAP.md`.
3. Use this scaffold to create the module file.
4. Adapt the examples and exercises to one or more of the recurring case study domains.
5. Ensure the module produces a tangible portfolio artefact.
6. Keep the tone practical, direct, and professionally useful.

---

# File Naming Convention

Use a clear, predictable naming format.

Examples:

- `foundation_course/module_01_introduction_to_ai.md`
- `foundation_course/module_02_how_llms_work.md`
- `applied_course/module_03_ai_for_professional_communication.md`
- `systems_course/module_04_ai_agents_and_task_automation.md`

Use lowercase with underscores. Keep names descriptive.

---

# Required Module Scaffold

Copy the structure below when creating a module.

```md
# [Module Number and Title]

## Module Overview

**Tier:** [Foundations / Applied / Systems]  
**Estimated Duration:** [60–120 minutes or appropriate estimate]  
**Prerequisites:** [List prior modules if needed]

### Learning Objectives

By the end of this module, learners will be able to:

- [objective 1]
- [objective 2]
- [objective 3]

### Teaching Flow and Timing

- [time block 1]
- [time block 2]
- [time block 3]
- [time block 4]

---

## 1. Concept Explanation

Explain:

- what the concept is
- why it matters
- how AI systems behave in relation to it
- where learners commonly go wrong

Include short examples where useful.

---

## 2. Demonstration

### Example Context
[Choose a recurring case study domain]

### Weak Example
[Show a poor prompt, poor workflow, or poor instruction]

### Improved Example
[Show a better structured version]

### Analysis
Explain why the improved version works better.

Add a second demonstration from a different recurring case-study domain
where relevant.

---

## 3. Guided Exercise

### Task
[Set a clear task for the learner]

### Instructions
1. [step]
2. [step]
3. [step]

### Suggested Structure
[Give the learner a framework to use]

### Example Output
[Provide a short example answer or outline]

### Evaluation Checklist

- [clarity]
- [structure]
- [assumptions]
- [missing information]
- [decision usefulness]

---

## 4. Real-World Application

Explain how this concept could be applied in actual work.

Where possible, connect it to:
- finance and bookkeeping
- software development
- product management
- marketing and content
- operations and administration
- customer support

---

## 5. Common Mistakes

List common errors such as:
- vague prompting
- missing context
- blind trust in AI output
- poor workflow design

Explain why each mistake matters.

---

## 6. Portfolio Artefact

### Artefact Title
[Name of the artefact]

### What the Learner Produces
[Describe the tangible output]

### Why It Matters
[Explain why this would be useful in work or career development]

---

## 7. Reflection Questions

- [reflection question 1]
- [reflection question 2]
- [reflection question 3]

---

## 8. Optional Advanced Exploration

Provide one or more extensions for learners who want to go deeper.

Examples:
- a more complex prompt version
- an additional workflow variation
- a tool-specific implementation example
- a validation or QA extension

---

## 9. Suggested Further Practice

Give the learner one additional task to repeat or adapt the concept in a different context.
```

---

# Module Generation Rules

Any generated module must:

- follow the section order above
- align with the relevant entry in `docs/COURSE_CURRICULUM_MAP.md`
- reflect the course philosophy in `PROJECT_CONTEXT.md`
- use a direct, practical tone
- avoid hype and fluff
- avoid making AI sound magical or infallible
- include at least one real-world example
- include at least one exercise
- include a portfolio artefact
- reinforce that AI is a tool, not an authority
- include Teaching Flow and Timing in Module Overview
- include an evaluation checklist in Guided Exercise

---

# Quality Standard for Generated Modules

A good generated module is:

- clear
- structurally complete
- professionally relevant
- grounded in realistic use cases
- reusable in self-paced or instructor-led settings
- substantial enough to function as a teachable lesson (not just an
  outline)

A bad generated module is:

- generic
- repetitive
- overly theoretical
- tool-worshipping
- missing exercises or artefacts
- disconnected from real work

---

# Recommended Generation Process for AI Tools

Before generating a module, the AI tool should:

1. Read `PROJECT_CONTEXT.md`
2. Read `CONTRIBUTING.md`
3. Read `docs/COURSE_MODULE_TEMPLATE.md`
4. Read the relevant part of `docs/COURSE_CURRICULUM_MAP.md`
5. Check `docs/COURSE_CASE_STUDIES.md` for suitable examples
6. Generate the module using this scaffold
7. Review for consistency before saving

---

# Final Note

This scaffold exists to reduce drift and inconsistency.

The goal is not merely to generate text quickly. The goal is to generate modules that are:

- coherent
- useful
- career-relevant
- aligned with the project philosophy
