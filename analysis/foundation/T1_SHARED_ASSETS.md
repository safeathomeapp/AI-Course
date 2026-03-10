# T1 Shared Assets

## 1. Scope
This document defines reusable assets that support multiple Foundation Tier modules and reduce repeated learner friction without duplicating explanations inside each module.

## 2. Recommended Shared Assets

### Asset Name
`AI_GLOSSARY.md`

Purpose
- Provide plain-language definitions for recurring AI terms used across T1.

Problems It Solves
- Terminology friction (`tokens`, `context window`, `hallucination`, `constraints`, `output format`).
- Inconsistent wording across modules.

Modules Supported
- T1M01, T1M02, T1M03, T1M04 (and reusable for later T1 modules).

Suggested File Location
- `docs/shared/AI_GLOSSARY.md`

---

### Asset Name
`AI_WORKED_EXAMPLES.md`

Purpose
- Provide end-to-end worked examples for common exercise types with annotated scoring.

Problems It Solves
- "What good looks like" uncertainty.
- Inconsistent self-scoring in exercise checklists.

Modules Supported
- T1M01, T1M02, T1M03, T1M04.

Suggested File Location
- `docs/shared/AI_WORKED_EXAMPLES.md`

---

### Asset Name
`AI_OUTPUT_COMPARISON_LIBRARY.md`

Purpose
- Curate weak vs improved prompt/output pairs across multiple domains.

Problems It Solves
- Role-relevance translation burden.
- Need for concrete before/after quality signals.

Modules Supported
- T1M01, T1M02, T1M03, T1M04 (especially demonstration sections).

Suggested File Location
- `docs/shared/AI_OUTPUT_COMPARISON_LIBRARY.md`

---

### Asset Name
`AI_EXERCISE_LIBRARY.md`

Purpose
- Provide beginner-safe exercise starters, fallback prompt sources, and readiness checks.

Problems It Solves
- Beginner startup friction.
- Tool-access assumption gaps.

Modules Supported
- Priority: T1M01, T1M02; secondary: T1M03, T1M04.

Suggested File Location
- `docs/shared/AI_EXERCISE_LIBRARY.md`

---

### Asset Name
`AI_ARTEFACT_EXAMPLES.md`

Purpose
- Provide completed artefact exemplars (checklists, control cards, matrices, prompt libraries) with annotations.

Problems It Solves
- Artefact calibration ambiguity.
- Need for reusable quality benchmarks and maintenance conventions.

Modules Supported
- T1M01, T1M02, T1M03, T1M04.

Suggested File Location
- `docs/shared/AI_ARTEFACT_EXAMPLES.md`

---

### Asset Name
`AI_DIAGRAM_LIBRARY.md`

Purpose
- Provide reusable visual models (pipeline, risk allocation flow, RCTCO anatomy, review loops).

Problems It Solves
- Dense text dependence.
- Accessibility and retention friction for visual learners.

Modules Supported
- T1M01, T1M02, T1M03, T1M04.

Suggested File Location
- `docs/shared/AI_DIAGRAM_LIBRARY.md`

---

### Asset Name
`AI_TEAM_DEPLOYMENT_MINI_GUIDE.md`

Purpose
- Provide concise guidance for team-scale use of artefacts (ownership, approval, update cadence, governance fields).

Problems It Solves
- Repeated manager/L&D need for team operationalization beyond individual usage.

Modules Supported
- Primarily T1M03 and T1M04; referenceable by T1M01-T1M02 artefacts as extension.

Suggested File Location
- `docs/shared/AI_TEAM_DEPLOYMENT_MINI_GUIDE.md`

---

### Asset Name
`AI_REGULATED_USE_NOTE.md`

Purpose
- Provide reusable safety guidance for regulated contexts (authorized tools, non-sensitive practice data, documentation obligations).

Problems It Solves
- Low-frequency/high-severity compliance caveat gap.

Modules Supported
- T1M01, T1M02, T1M03, T1M04 (optional callout placement).

Suggested File Location
- `docs/shared/AI_REGULATED_USE_NOTE.md`

## 3. Asset Priority

High Impact
- `AI_GLOSSARY.md`
- `AI_WORKED_EXAMPLES.md`
- `AI_OUTPUT_COMPARISON_LIBRARY.md`
- `AI_EXERCISE_LIBRARY.md`
- `AI_ARTEFACT_EXAMPLES.md`

Medium Impact
- `AI_TEAM_DEPLOYMENT_MINI_GUIDE.md`
- `AI_REGULATED_USE_NOTE.md`
- `AI_DIAGRAM_LIBRARY.md`

Optional
- Additional advanced add-ons for model variability, chaining depth, and role-specific deep dives (as separate optional assets, not core T1 requirements).

## 4. Implementation Notes
1. Modules should reference shared assets using short links at first-use points instead of duplicating full explanations.
2. Keep module body focused on core teaching flow; move repetitive definitions/examples to shared assets.
3. Use shared assets as canonical source: update once, propagate everywhere.
4. In exercises, link to worked examples and rubric anchors before independent task steps to improve novice performance.
5. In artefact sections, link to completed exemplars and maintenance patterns to reduce quality variance.
6. For regulated contexts, use optional callouts to shared safety note rather than embedding long compliance text in every module.
