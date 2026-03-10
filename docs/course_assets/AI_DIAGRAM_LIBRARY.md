# AI Diagram Library (Specifications)

## Purpose
Define diagram specifications that support Foundation modules. This file specifies what to draw and why; it does not include generated images.

---

## Diagram 1
### Diagram Title
AI Workflow Model: Draft to Decision

### Module(s) Supported
T1M01, T1M02, T1M03, T1M04

### Purpose
Reinforce the core workflow and accountability chain.

### Components
- Prompt
- Context
- AI Generation
- Human Review
- Human Decision
- Optional: Feedback loop to Prompt revision

### Suggested Layout
Left-to-right flow with arrows. Human-owned steps visually distinct (different color/border style).

### Key Teaching Point
AI output is an input to human judgment, not the final authority.

---

## Diagram 2
### Diagram Title
Structured Prompt Anatomy (RCTCO)

### Module(s) Supported
T1M01, T1M04

### Purpose
Show the five prompt components and what each controls.

### Components
- Role
- Context
- Task
- Constraints
- Output Format
- Optional side labels: failure mode prevented by each

### Suggested Layout
Five connected blocks in sequence; each block includes a short "prevents" label.

### Key Teaching Point
Prompt quality improves when each component is explicit and purposeful.

---

## Diagram 3
### Diagram Title
Weak vs Strong Prompt Flow

### Module(s) Supported
T1M01, T1M04

### Purpose
Visually compare consequences of underspecified vs structured prompts.

### Components
Branch A (Weak): vague prompt -> generic output -> heavy rework -> decision delay
Branch B (Strong): structured prompt -> review-ready output -> faster validation -> decision readiness

### Suggested Layout
Two-lane comparison (top: weak, bottom: strong) with mirrored stages.

### Key Teaching Point
Structured prompting reduces downstream rework and improves reliability.

---

## Diagram 4
### Diagram Title
Task-Risk Allocation Grid

### Module(s) Supported
T1M03

### Purpose
Help learners map AI role and human review depth by risk and judgment.

### Components
- Axes: Risk of error (low-high), judgment required (low-high)
- Quadrants with suggested AI role and review level
- Legend: light/standard/strict review

### Suggested Layout
2x2 matrix with quadrant labels and short examples per quadrant.

### Key Teaching Point
Not all AI tasks deserve the same review intensity.

---

## Diagram 5
### Diagram Title
Facts vs Inference vs Unknowns

### Module(s) Supported
T1M02, T1M03, T1M04

### Purpose
Teach evidence discipline and uncertainty transparency.

### Components
- Facts (source-supported)
- Inferences (reasoned but not confirmed)
- Unknowns (missing information)
- Review actions for each category

### Suggested Layout
Three-column classification table with arrows from AI output statements into category buckets.

### Key Teaching Point
Clear separation prevents overconfidence and supports safer decisions.

---

## Diagram 6
### Diagram Title
Reliability Check Loop

### Module(s) Supported
T1M02, T1M04

### Purpose
Show iterative quality control cycle for prompts and outputs.

### Components
1. Draft prompt
2. Generate output
3. Check constraints/evidence/format
4. Revise prompt
5. Re-test
6. Approve for use

### Suggested Layout
Circular loop with gate at "Approve for use" and fallback arrow to prompt revision.

### Key Teaching Point
Reliable outputs usually require controlled iteration, not one-shot prompting.

---

## Diagram 7
### Diagram Title
Exercise Progression Ladder

### Module(s) Supported
T1M01-T1M04 exercise support

### Purpose
Show progression from scaffolded to independent practice.

### Components
- Beginner-safe exercise
- Adaptation exercise
- Independent exercise
- Expected outputs at each stage

### Suggested Layout
Vertical ladder with three levels and brief success criteria per level.

### Key Teaching Point
Scaffolding should fade gradually as learner control improves.

---

## Diagram 8
### Diagram Title
Prompt Library Lifecycle

### Module(s) Supported
T1M04 (and artefact references from T1M01-T1M03)

### Purpose
Define how prompt libraries are maintained as living assets.

### Components
- Create entry
- Test output
- Capture review notes
- Approve for use
- Revalidate on cadence
- Retire/update outdated prompts

### Suggested Layout
Lifecycle loop with ownership checkpoints (individual/team) marked.

### Key Teaching Point
A prompt library is a maintained workflow asset, not a one-time checklist.

---

## Usage Note
All diagrams should visually reinforce the same principle: AI drafts; humans review; humans decide.
