# T1 Shared Fixes

## 1. Scope
This document defines shared fixes to be applied across the Foundation Tier (T1) so repeated issues are solved once and reused, rather than re-fixed module by module.

## 2. Course-Level Fixes
1. Terminology Clarity Standard
- Apply first-use plain-language definitions for recurring core terms (for example: `token`, `context window`, `hallucination`, `constraint`, `output format`).
- Enforce single-term consistency (avoid concept drift like `output schema` vs `output format`).
- Link all first-use terms to one shared glossary asset instead of duplicating long definitions in each module.

2. Example Diversity Baseline
- Require each module to include at least one broadly non-technical/professional example and one technical/analytical example (or concise role-variant callouts).
- Use role-variant mini callouts to reduce translation burden for under-served personas (developers, support/admin, sales, research, regulated roles).

3. Human-Review Reinforcement Pattern
- Keep explicit accountability language consistent across modules: AI drafts, humans review, humans decide.
- Add a short repeated review checkpoint prompt in exercises: "What still requires human validation?"

4. Common Exercise Scaffolding Pattern
- Include a worked-example block and a minimal "what good looks like" rubric in each module exercise.
- Keep checklist criteria aligned to observable quality signals (clarity, structure, assumptions, constraint compliance, decision usefulness).

## 3. Tier-Level Fixes
1. Beginner Entry Protocol (priority in T1M01-T1M02, reusable elsewhere)
- Add explicit fallback path for learners with no existing prompts.
- Add pre-exercise readiness checks: tool access, safe practice dataset, expected setup time.

2. Shared Calibration Layer for Exercises and Artefacts
- Add scoring anchors for recurring 1-5 scales (1/3/5 exemplars).
- Add one full filled example for major artefacts where repeated uncertainty appears.

3. Team-Scale Operationalization Layer
- Where artefacts naturally scale (for example matrices, prompt libraries), include lightweight team notes: owner, approval, update cadence, and use boundaries.
- Keep this as a compact section to avoid bloating module core.

4. Readability and Accessibility Guardrails
- Preserve short-paragraph, clear-heading style proven in T1M03-T1M04.
- Reduce avoidable idiomatic phrases where simpler phrasing can carry the same meaning.

## 4. Structural Additions
1. Shared Glossary Integration
- Add a single foundation glossary and reference it from first-use terms in modules.

2. Worked-Example Pattern Library
- Add reusable worked examples that model strong exercise responses.

3. Output Comparison Bank
- Add structured before/after output pairs to illustrate quality improvements consistently.

4. Artefact Example Pack
- Add completed artefact exemplars with annotations showing why they are usable.

5. Regulated-Context Safety Overlay
- Add a short reusable safety callout for authorized tools, non-sensitive test data, and policy alignment.

## 5. Implementation Strategy
1. Modules
- Apply shared fixes via lightweight inserts (first-use term links, mini callouts, checklist anchors, pre-exercise readiness notes).
- Avoid rewriting module core narratives; use shared references to reduce duplication.

2. Shared Assets
- Centralize definitions, worked examples, output comparisons, and artefact exemplars in shared files.
- Reference shared assets from module sections where friction repeats.

3. Documentation
- Update course-level authoring guidance to require terminology consistency, example diversity baseline, and scaffold minimums for exercises.

4. Supporting Resources
- Provide optional overlays for specific contexts (regulated environments, team deployment) as reusable sidecar resources.
- Keep advanced-depth asks in optional resources, not in core foundation flow.
