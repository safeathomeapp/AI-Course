
# AI_PROJECT_CONTEXT.md

## Purpose of This File

This document provides **high‑level context for AI systems** interacting with this repository.

Its purpose is to allow an AI assistant (ChatGPT, Codex, Claude, etc.) to quickly understand:

- what this project is
- how the repository is structured
- how course materials are organized
- what files may or may not be modified
- how review feedback should be processed

This file is not primarily for humans; it exists to help AI tools work safely and effectively inside the project.

---

# Project Overview

Project Name:

**AI-Course — An AI's Guide for Humans: Understanding and Harnessing Artificial Intelligence**

The goal of this repository is to develop a **professional training course** that teaches people how to use AI and LLM tools responsibly and effectively in real work environments.

The course focuses on:

- practical AI usage
- workflow integration
- responsible decision-making
- AI‑assisted systems thinking

Core operating principle:

AI drafts. Humans review. Humans decide.

---

# Course Structure

The course is divided into three tiers.

## Tier 1 – Foundations

Purpose:
Teach fundamental understanding of how AI behaves and how to use it safely.

Module IDs:

T1M01 – T1M10

Example:

T1M01_introduction_to_ai.md

Approximate duration: ~20 hours.

---

## Tier 2 – Applied Workflows

Purpose:
Teach how AI can be integrated into professional work processes.

Module IDs:

T2M01 – T2M10

Duration: ~20–30 hours.

---

## Tier 3 – Systems and Architecture

Purpose:
Teach how to design systems and tools that incorporate AI.

Module IDs:

T3M01 – T3M10

Duration: ~30–40 hours.

---

# Module Naming Convention

All modules follow the format:

T[CourseTier]M[ModuleNumber]

Examples:

T1M01  
T1M02  
T2M01  
T3M05

Example filename:

T1M01_introduction_to_ai.md

This naming system ensures correct sorting and avoids confusion between tiers.

---

# Repository Structure

Root folders have specific purposes.

modules/
    Contains the **actual course content modules**.

modules/foundation/
modules/applied/
modules/systems/

reviews/
    Contains **raw feedback from beta testers**.

    These files should NEVER be edited by AI systems.

analysis/
    Contains **analysis of review feedback**.

    AI tools may summarize reviews and generate insights here.

docs/
    Contains **course design documentation** such as:

    - curriculum maps
    - course architecture
    - module templates
    - roadmap documents

prompts/
    Contains prompt templates used throughout the course.

capstones/
    Contains capstone project descriptions and materials.

drafts/
    work-in-progress module drafts not yet included in the curriculum

docs/course_assets/
    shared teaching assets used across multiple modules
	
The authoritative repository map is defined in:

REPOSITORY_MAP.md
	
---

# Development Workflow

Modules are developed through a structured process.

1. Module Draft

Course author writes initial module content.

2. Beta Testing

Testers review the module and provide feedback.

3. Review Collection

Feedback documents are stored in:

reviews/{tier}/{module}/

4. Review Analysis

AI tools summarize feedback and identify patterns.

Output stored in:

analysis/{tier}/{module}/

5. Revision Plan

Improvements are proposed based on feedback.

6. Module Revision

The module is updated.

---

# Rules for AI Systems

AI assistants interacting with this repository should follow these rules.
AI tools should not treat drafts/ as active course modules.
AI tools should reuse examples from docs/course_assets/ where appropriate rather than generating new ones.

## AI May

- summarize review feedback
- identify patterns in tester responses
- suggest module improvements
- generate teaching examples
- assist with documentation updates

## AI Must NOT

- modify files inside the reviews directory
- delete course modules
- rename module IDs
- alter course philosophy without explicit instruction

---

# Key Reference Documents

AI tools should read the following files for additional context.

Recommended reading order:

1. README.md
2. COURSE_INDEX.md
3. COURSE_PHILOSOPHY.md
4. PROJECT_CONTEXT.md
5. docs/COURSE_CURRICULUM_MAP.md
6. docs/MODULE_SCAFFOLDER_TEMPLATE.md

These files define how the course is structured and how modules should be written.

---

# Final Principle

AI tools are collaborators in this project, not authors.

Their role is to assist with:

analysis,
synthesis,
structure,
and refinement.

Final editorial and instructional decisions always belong to human course designers.
