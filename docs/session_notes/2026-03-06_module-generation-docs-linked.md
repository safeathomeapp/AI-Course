# Session Note - 2026-03-06 - Module Generation Docs Linked

## Summary

Added module-generation support docs and linked them across orientation
and governance files so they are treated as required reading.

## Decisions

- Decision: Keep both new files under `docs/`.
- Reason: They are process standards and should sit with course
  governance and architecture docs.

## Changes Made

- Files updated:
  - `docs/MODULE_SCAFFOLDER_TEMPLATE.md` (added)
  - `docs/CODEX_MODULE_GENERATION_GUIDE.md` (added)
  - `README.md`
  - `PROJECT_CONTEXT.md`
  - `CONTRIBUTING.md`
  - `docs/AI_COURSE_ARCHITECTURE.md`
- Key additions/edits:
  - Added both docs to repository structure and core docs references.
  - Added explicit instruction to read/apply both docs during module
    generation.

## Risks or Open Questions

- Risk: Module authors may skip new docs and rely only on curriculum map.
- Mitigation or next action: Keep references in all core orientation
  files and enforce in generation prompts.

## Next Steps

1. Use the scaffolder and generation guide to create Tier 1 module
   drafts.
2. Review generated drafts against curriculum map and contribution
   standards.
