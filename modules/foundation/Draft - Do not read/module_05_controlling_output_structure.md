# Module 1.5 Controlling Output Structure

## Module Overview

**Tier:** Foundations  
**Estimated Duration:** 60-90 minutes  
**Prerequisites:** Module 1.4 Structured Prompting Fundamentals

### Learning Objectives

By the end of this module, learners will be able to:

- force AI output into usable structures such as tables, lists, and JSON
- choose output formats that match downstream workflows
- reduce ambiguity by defining schemas and field rules

---

## 1. Concept Explanation

Output structure is where AI output becomes operationally useful.

Why this matters:
- structured output is easier to review, compare, and reuse
- downstream systems need predictable formats
- structure reduces interpretation errors

How AI behavior relates to this concept:
- if no format is given, models often return prose
- with explicit schema, models align better to required shape
- field definitions help avoid ambiguous responses

Where learners commonly go wrong:
- asking for "structured" output without specifying structure
- mixing incompatible fields in one table
- trusting malformed JSON without validation

Short example: A customer-support triage process needs category, urgency, owner, and next action fields, not a paragraph.

---

## 2. Demonstration

### Example Context
Customer support: classify tickets for weekly review.

### Weak Example
"Analyze these support tickets and summarize them."

### Improved Example
"You are a support operations assistant.

Context:
I have 25 customer support ticket summaries.

Task:
Classify each ticket for triage.

Constraints:
- Do not invent ticket content
- Use only categories: billing, bug, account, feature request
- Mark uncertainty when classification is unclear

Output Format:
Return a markdown table with columns:
ticket_id | category | urgency (low/med/high) | probable_root_cause | recommended_next_action"

### Analysis
The improved prompt defines categories and output columns. The result is directly usable for triage meetings and human review.

---

## 3. Guided Exercise

### Task
Design a structure for one recurring report in your role.

### Instructions
1. Select a recurring output you currently produce as free text.
2. Define required fields and allowed values.
3. Prompt AI to produce output in that exact structure.

### Suggested Structure
- Output type: (table / list / JSON)
- Required fields:
- Allowed values:
- Validation checks:

### Example Output
JSON schema draft:
{
  "task_name": "string",
  "owner": "string",
  "risk_level": "low|med|high",
  "status": "not_started|in_progress|blocked|done",
  "next_step": "string"
}

---

## 4. Real-World Application

Structured outputs improve:
- finance: consistent monthly metric dashboards
- software: bug triage records and release checklists
- product: feature prioritization tables
- marketing: content calendar planning sheets
- operations: SOP step checklists
- support: ticket routing and escalation logs

---

## 5. Common Mistakes

- not specifying field names or allowed values
- requesting structured output but accepting invalid format
- using too many optional fields
- forgetting to define how to handle uncertainty

These mistakes break downstream workflows and increase manual cleanup.

---

## 6. Portfolio Artefact

### Artefact Title
Output Schema Pack

### What the Learner Produces
A pack of 5 reusable output schemas (table/list/JSON) for real work tasks, including validation notes.

### Why It Matters
This demonstrates practical AI integration skills beyond prompt writing.

---

## 7. Reflection Questions

- Which of your tasks fail most due to unstructured output?
- What minimum fields are truly required for each workflow?
- How will you validate structure before using results?

---

## 8. Optional Advanced Exploration

- Add machine-readable JSON schemas and validate with a parser.
- Compare table vs JSON output for the same task.
- Introduce confidence scores and escalation rules.

---

## 9. Suggested Further Practice

Take one recurring team update and redesign it as a structured output template that others can reuse.
