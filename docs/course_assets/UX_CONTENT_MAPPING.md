# UX Content Mapping

## 1. Purpose of This Document

This guide helps junior UX designers understand how course pedagogy maps to the UI system used in the AI Course modules.

It explains:

- which UI components correspond to specific teaching functions
- how course pedagogy maps to layout
- how to maintain a consistent learning experience across modules

Course content is authored in Markdown, then rendered into structured HTML using the shared course shell and component system. UX components are not decorative. They communicate instructional meaning. The goal is consistency across the course so learners can recognize what each block means without re-learning the interface in every module.

Canonical references for this guide:

- HTML layout: `learning/shared/t1m01_index.html`
- CSS system: `learning/shared/t1m01_styles.css`
- Module source content: `modules/foundation/T1M01_introduction_to_ai.md`

Scope note:

- Use this file as an implementation companion for rendering approved teaching patterns in the shared UI.
- Do not use this file to redefine course philosophy, repository structure, or the canonical module template.

## 2. Layout Architecture

The course shell has two main layout regions.

### Sidebar (`.shell-sidebar`)

The sidebar is used for:

- course navigation
- progress tracking
- module path
- account and theme controls

Key sidebar components:

- `.sidebar-card`
- `.module-path-grid`
- `.path-chip`
- `.progress-track`

The sidebar never contains teaching content. It supports orientation, navigation, and workflow state only.

### Lesson Area (`.lesson-main`)

The main lesson column contains the learning content.

Primary container types:

| Component | Purpose |
| --- | --- |
| `.module-header` | Module metadata and title |
| `.hero-card` | Orientation to the module |
| `.content-card` | Main teaching sections |

Use these containers as follows:

- `.module-header` for module code, tier, and status metadata.
- `.hero-card` for the opening framing of the lesson, including the core premise and initial orientation.
- `.content-card` for each major teaching section such as concept explanation, demonstration, exercise, application, artefact, and reflection.

## 3. Core Content Components

The UI system is built from a small number of reusable component types. Each component corresponds to a specific teaching function.

### Typical Lesson Structure
| Teaching Purpose | Component |
|---|---|
| Module orientation | `.hero-card` |
| Learning objectives | `.objective-card` |
| Concept explanation | `.panel` |
| Key principle | `.callout-key` |
| Warning or misuse | `.callout-warning` |
| Workflow comparison | `.compare-card` |
| Prompt examples | `.example-card` |
| Practice exercise | `.exercise-card` |
| Real-world scenario | `.scenario-card` |
| Portfolio output | `.artefact-card` |
| Reflection | `.reflection-card` |

```
lesson-main
│
├── module-header
│
├── hero-card
│     ├── callout-key
│     ├── callout-warning
│     └── objective-strip
│
├── content-card (concept explanation)
│     ├── panel
│     ├── panel
│     └── two-column
│
├── content-card (demonstration)
│     └── example-grid
│
├── content-card (exercise)
│     ├── exercise-card
│     ├── prompt-structure-grid
│     └── exercise-drawer
│
├── content-card (application)
│     ├── scenario-card
│     └── review-process-panel
│
├── content-card (artefact)
│     └── artefact-card
│
└── content-card (reflection)
      └── reflection-card
```
	  
Designers should choose components based on instructional purpose, not visual preference.
These components represent the core instructional building blocks used throughout the course.

### Callouts

Callouts highlight teaching meaning. They should be used when content needs stronger semantic emphasis than a normal paragraph or panel.

#### Key Concept

- Class: `.callout-key`
- Use for:
  - core rules
  - essential takeaways
  - foundational principles

Example:

`AI drafts. Humans review. Humans decide.`

```html
<article class="callout callout-key">
  ...
</article>
```

#### Warning

- Class: `.callout-warning`
- Use for:
  - common mistakes
  - misconceptions
  - high-risk behavior

```html
<article class="callout callout-warning">
  ...
</article>
```

#### Neutral / Informational

- Class: `.callout-neutral`
- Use for:
  - clarifications
  - side notes
  - context explanations

```html
<article class="callout callout-neutral">
  ...
</article>
```

## 4. Cards Used for Teaching

These card types structure the main teaching flow.

### Objective Cards

- Class: `.objective-card`
- Used in: `.objective-strip`
- Purpose: show learning objectives at the start of the module

Each objective should represent a measurable learning outcome, not a vague topic heading.

```html
<article class="objective-card">
  ...
</article>
```

### Panel

- Class: `.panel`
- Purpose: standard explanatory text block
- Use for:
  - conceptual explanation
  - narrative instruction

```html
<article class="panel">
  ...
</article>
```

### Comparison Cards

- Class: `.compare-card`
- Used in: `.process-compare`
- Purpose: compare bad workflow and good workflow

Example:

`Beginner AI usage vs professional workflow`

```html
<article class="compare-card bad-flow">
  ...
</article>
```

```html
<article class="compare-card good-flow">
  ...
</article>
```

### Example Cards

- Class: `.example-card`
- Used for:
  - prompt examples
  - weak vs improved outputs

Variants:

- `.example-card.weak`
- `.example-card.improved`

```html
<article class="example-card weak">
  ...
</article>
```

```html
<article class="example-card improved">
  ...
</article>
```

## 5. Grid Layout Rules

Multi-column layouts are used to support comparison and cognitive chunking. Use existing grid systems before inventing any new arrangement.

### Two-column layout

- Class: `.two-column`
- Use for:
  - concept comparison
  - strengths vs weaknesses

```html
<div class="two-column">
  <article class="panel">...</article>
  <article class="panel">...</article>
</div>
```

### Example grids

- Class: `.example-grid`
- Use for:
  - prompt comparison
  - before vs after examples

```html
<div class="example-grid two-up">
  <article class="example-card weak">...</article>
  <article class="example-card improved">...</article>
</div>
```

### Three-column layout

- Classes:
  - `.objective-strip`
  - `.reflection-grid`
- Use for:
  - objectives
  - reflection questions

Use three-column grids when items are parallel and lightweight. Do not use them for long-form explanatory content.

## 6. Exercise Components

These components structure learner practice and scaffolded activity.

### Exercise container

- Class: `.exercise-card`
- Used for:
  - instructions
  - readiness checks
  - scaffolding

```html
<article class="exercise-card">
  ...
</article>
```

### Prompt structure grid

- Class: `.prompt-structure-grid`
- Used for teaching the five-part prompting model:
  - Role
  - Context
  - Task
  - Constraints
  - Output Format

This grid is for showing the model structure itself, not for arbitrary feature lists.

```html
<div class="prompt-structure-grid">
  <div class="structure-item">...</div>
</div>
```

### Exercise drawers

- Class: `.exercise-drawer`
- Used for:
  - checklists
  - worked examples

Behavior is controlled by JavaScript toggles in `learning/shared/t1m01_script.js`.

```html
<div class="exercise-drawer hidden">
  ...
</div>
```

## 7. Scenario and Application Components

These components help move learners from explanation to applied judgment.

### Scenario cards

- Class: `.scenario-card`
- Used for:
  - real-world examples
  - applied learning

Variant:

- `.scenario-card-good`

Use the variant to show the correct or preferred approach.

```html
<article class="scenario-card">
  ...
</article>
```

```html
<article class="scenario-card scenario-card-good">
  ...
</article>
```

### Review process panel

- Class: `.review-process-panel`
- Used for:
  - human verification steps
  - workflow checklists

This component reinforces that AI output still requires review before use.

```html
<article class="review-process-panel">
  ...
</article>
```

## 8. Portfolio Artefact Components

Artefact sections describe what the learner produces as evidence of capability.

- Class: `.artefact-card`
- Purpose: describe the portfolio artefact produced by the learner

Variant:

- `.artefact-card-highlight`

Use the highlight variant to explain why the artefact matters professionally, not just academically.

```html
<article class="artefact-card">
  ...
</article>
```

```html
<article class="artefact-card artefact-card-highlight">
  ...
</article>
```

## 9. Reflection Components

Reflection blocks support metacognition and transfer.

- Class: `.reflection-card`
- Used for:
  - reflection questions
  - extended practice ideas

```html
<article class="reflection-card">
  ...
</article>
```

## 10. Terminology Tooltips

Glossary interactions provide lightweight definition support without breaking reading flow.

Classes:

- `.term`
- `.term-help`
- `.term-tooltip`

Behavior is controlled by JavaScript in `learning/shared/t1m01_script.js`.

Use for:

- inline glossary definitions
- quick concept clarification

```html
<span class="term" data-definition="...">
  hallucination
  <span class="term-help" tabindex="0" role="button" aria-label="Show definition">?</span>
</span>
```

Use tooltips for short conceptual clarification. If the learner needs a full explanation, use a panel or callout instead.

## 11. Icon System

Icons provide quick visual cues that reinforce teaching meaning. Icons are not decorative elements. Each icon should correspond to a specific instructional function so learners can quickly interpret the intent of a block.

Icons should be:

monochrome

SVG-based

consistent in stroke style

sized consistently within UI containers

The course uses a standardized icon wrapper:

```html
<span class="ui-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" focusable="false">
    <use href="#icon-lightbulb"></use>
  </svg>
</span>
```

Icons inherit text color and should not introduce their own colors. This ensures compatibility with light and dark themes.

Approved Icon Library

Use Lucide Icons (MIT licensed): https://lucide.dev

Lucide provides a consistent line-style icon set suitable for monochrome UI systems. The course standard is a shared SVG sprite, not ad hoc inline SVG copied into each module.

Do not mix icon libraries.

Shared Sprite Standard

Use the shared sprite at:

`learning/shared/icons/sprite.svg`

This is the standard icon source for current and future learning projects. The shared shell/runtime injects this sprite into the page, and module markup references only fragment IDs through the `.ui-icon` wrapper.

For module markup, the standard reference pattern is:

```html
<span class="ui-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" focusable="false">
    <use href="#icon-alert-triangle"></use>
  </svg>
</span>
```

Modules must not use relative sprite file paths in `<use>` references.

New icons require review before they are added to the shared sprite.

Core Icon Vocabulary

Designers should use the following icons consistently across modules.

| Meaning | Icon | Lucide Name |
|---|---|---|
| Human / reviewer | user | `user` |
| AI system | bot | `bot` |
| Warning / risk | alert triangle | `alert-triangle` |
| Key concept | lightbulb | `lightbulb` |
| Example | file text | `file-text` |
| Exercise / writing task | pencil | `pencil` |
| Checklist / completion | circle check | `circle-check` |
| Question | question mark circle | `circle-question-mark` |
| Workflow | repeat | `repeat` |
| Decision / confirmation | circle check | `circle-check` |

These icons cover the majority of instructional UI needs.

Icon Usage Rules

Icons should reinforce meaning.

Examples:

| UI Component | Icon |
|---|---|
| Key rule callout | lightbulb |
| Warning callout | alert triangle |
| AI workflow diagram | bot |
| Human review step | user |
| Exercise section | pencil |
| Reflection question | circle-question-mark |
| Save notes action | bookmark |
| Mark section complete | circle-check |
| Leave feedback | message-square |

Icons should not be used purely for decoration.

Icon Size and Alignment

Icons should remain within the .ui-icon container defined in the shared styles.

Typical size:

width: 1rem
height: 1rem

Do not scale icons beyond the surrounding text size unless part of a diagram.

Implementation note:

- Use the centrally managed shared sprite for standard UI icons.
- Do not create per-module icon folders unless a reviewed exception is required.
- Do not paste ad hoc inline SVGs or invent local icon systems.
- Modules should use fragment references only.
- See [ICON_SYSTEM_IMPLEMENTATION.md](./ICON_SYSTEM_IMPLEMENTATION.md) for runtime and integration details.

## 12. Design Philosophy

The UX system is designed so visual hierarchy reflects teaching flow.

Key principles:

- visual hierarchy reflects teaching flow
- grids support cognitive chunking
- card systems isolate concept units
- warnings and highlights prevent misinterpretation

The UI is intentionally:

- structured
- consistent
- pedagogically aligned

This means component choice should reflect instructional intent. A warning card should always mean risk or misuse. A highlight card should always signal importance. A comparison layout should always support contrast. Consistency helps learners spend attention on the lesson, not on decoding the interface.

## 13. Contribution Guidelines for Designers

Follow these rules when contributing module UI:

- Do not invent new card types without review.
- Reuse existing layout classes whenever possible.
- Teaching meaning must remain visually consistent.
- Avoid stylistic variation that changes instructional meaning.
- Use the standardized icon vocabulary. Do not introduce new icons without review.
- Component classes are part of the course design system.
- Do not modify or override these classes inside individual modules.
- Changes to component styling must occur in the shared stylesheets.

Practical rule:

- Start with the source Markdown to understand the teaching function.
- Then choose the existing component that matches that teaching function.
- Only propose a new pattern if the pedagogy cannot be expressed clearly with the current system.

# Component Decision Tree

Is this introducing the module?
→ use .hero-card

Is it a learning objective?
→ use .objective-card

Is it explaining a concept?
→ use .panel

Is it highlighting a core rule?
→ use .callout-key

Is it warning about a mistake or risk?
→ use .callout-warning

Is it comparing two workflows?
→ use .compare-card

Is it demonstrating prompt examples?
→ use .example-card

Is it a learner activity?
→ use .exercise-card

Is it a workplace scenario?
→ use .scenario-card

Is it describing a portfolio deliverable?
→ use .artefact-card

Is it encouraging reflection?
→ use .reflection-card
