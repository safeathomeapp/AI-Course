# AI Artefact Examples

## Purpose
Show practical examples of core Foundation artefacts and clarify what makes stronger artefacts more reliable and reusable.

---

## 1) AI Tool-Use Operating Checklist (T1M01)
### What It Is For
A personal or team checklist used before acting on AI output in real work.

### Basic Example
- Did I provide context?
- Did I check the output quickly?
- Did I make edits?

### Stronger Example
**AI Tool-Use Operating Checklist v1**
1. Task Risk Level: Low / Medium / High
2. Prompt Structure Present: Role / Context / Task / Constraints / Output Format
3. Evidence Handling: Claims linked to source material? Yes/No
4. Unknowns Flagged: Yes/No
5. Human Verification Step Completed: Light / Standard / Strict
6. Final Decision Owner: [Name/Role]
7. Safe-to-Share Status: Draft Only / Internal Reviewed / Approved External

### Why Stronger Is Better
- Adds risk and accountability, not just quality feel.
- Makes review depth explicit.
- Supports repeatable governance and auditability.

---

## 2) LLM Reliability Control Card (T1M02)
### What It Is For
A compact control card to reduce hallucination risk and improve reliability checks.

### Basic Example
- Ask AI clearly
- Verify facts
- Don't trust confident answers automatically

### Stronger Example
**LLM Reliability Control Card v1**
- Use Case: Draft quarterly market summary
- Known Inputs: Source docs A, B, C
- Uncertainty Rule: "If missing evidence, label Unknown"
- Prohibited Behavior: "No invented statistics or citations"
- Output Format: Summary / Evidence table / Gaps / Questions
- Verification Plan:
  - Fact check numeric claims against source docs
  - Confirm all citations exist and match source text
- Escalation Trigger: Any claim without source evidence

### Why Stronger Is Better
- Converts generic caution into enforceable controls.
- Defines clear stop conditions when reliability is uncertain.
- Improves consistency across repeated tasks.

---

## 3) Task-Risk Allocation Matrix (T1M03)
### What It Is For
Map where AI should assist and what review depth is required by task risk.

### Basic Example
| Task | Risk | AI Role | Review |
|---|---|---|---|
| Weekly report draft | Medium | Draft summary | Standard |
| Policy statement | High | Outline support | Strict |

### Stronger Example
| Task | Risk | Judgment Need | AI Role | Human Review | Final Owner | Update Cadence |
|---|---|---|---|---|---|---|
| Weekly KPI narrative | Medium | Medium | Draft summary | Standard verification | Ops Manager | Monthly |
| Customer complaint response | High | High | Draft options only | Strict + supervisor sign-off | Service Lead | Quarterly |
| Meeting note cleanup | Low | Low | Formatting + summary | Light scan | Coordinator | Quarterly |
| Compliance procedure update | High | High | Structure draft | Strict + documented sign-off | Compliance Officer | Per policy change |

### Why Stronger Is Better
- Distinguishes risk from judgment requirement.
- Names final accountability.
- Treats matrix as a living control document.

---

## 4) Structured Prompt Library (T1M04)
### What It Is For
A reusable library of tested prompts for recurring work tasks.

### Basic Example
Use Case: Weekly summary
Role: Analyst
Context: Team performance
Task: Summarize
Constraints: Be accurate
Output Format: Bullet points

### Stronger Example
**Prompt Library Entry: Weekly Ops Summary v2**
- Use Case: Weekly performance update for leadership
- Role: Operations analyst
- Context: KPI export includes delivery, defects, overtime
- Task: Produce review-ready weekly summary
- Constraints:
  - No invented causes
  - Separate facts from inference
  - Flag missing data as Unknown
- Output Format:
  1. 5-bullet executive summary
  2. KPI delta table
  3. Anomalies
  4. Questions for manager review
- Review Notes:
  - v1 over-inferred root cause
  - v2 added explicit no-inference constraint
  - Output now reusable without manual restructuring
- Metadata:
  - Last tested: 2026-03-10
  - Owner: Ops Lead
  - Status: Team approved

### Why Stronger Is Better
- Includes tested constraints and revision history.
- Adds governance metadata for team reuse.
- Demonstrates measurable quality improvement from iteration.

---

## Practical Pattern Across Artefacts
Stronger artefacts share these traits:
1. Explicit risk and review standards
2. Evidence and unknown-handling rules
3. Clear ownership and approval boundaries
4. Reuse and maintenance fields (version/last tested/review notes)

These traits support the course principle: AI drafts; humans review; humans decide.
