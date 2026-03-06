# PROMPT_LIBRARY.md

## Purpose

This file contains canonical prompts and reusable prompt patterns used throughout the course project.

These prompts are not intended to be treated as magic formulas. They are examples of structured instruction patterns that demonstrate good practice.

The library should evolve as modules are written, but the underlying philosophy should remain stable.

## Prompt Design Standard

The default structure used throughout the course is:

- Role
- Context
- Task
- Constraints
- Output Format

This structure should be used unless there is a clear reason not to.

---

## 1. General Purpose Structured Prompt

```text
You are a [role].

Context:
[relevant background information]

Task:
[specific task to complete]

Constraints:
[boundaries, exclusions, standards, or limitations]

Output Format:
[how the answer should be structured]
```

Use when:
- teaching structured prompting
- converting vague requests into reliable instructions
- producing consistent outputs

---

## 2. Research Summarisation Prompt

```text
You are a research assistant.

Context:
I need to understand the material below accurately and efficiently.

Task:
Summarise the material into its main points, assumptions, and practical implications.

Constraints:
Do not invent facts.
If something is unclear, state that clearly.
Separate factual claims from interpretation.

Output Format:
1. Summary
2. Key Points
3. Assumptions
4. Practical Implications
5. Open Questions
```

Use when:
- summarising reports
- reading unfamiliar material
- demonstrating AI-assisted learning

---

## 3. Critique and Improvement Prompt

```text
You are a critical reviewer.

Context:
I have a draft idea, document, or plan that needs stress-testing.

Task:
Critique the material. Identify weaknesses, missing assumptions, risks, and areas for improvement.

Constraints:
Be direct.
Do not rewrite the entire piece unless asked.
Focus on substance over style.

Output Format:
1. Main Weaknesses
2. Missing Assumptions
3. Risks
4. Improvements
```

Use when:
- teaching AI as a thinking partner
- improving plans and documents
- demonstrating adversarial prompting

---

## 4. Workflow Decomposition Prompt

```text
You are an operations analyst.

Context:
I want to convert a real work task into a repeatable AI-assisted workflow.

Task:
Break the task into clear stages, identify where AI can help, and indicate where human review is required.

Constraints:
Do not automate blindly.
Flag any step where errors could create operational or reputational risk.

Output Format:
1. Workflow Stages
2. AI Contribution at Each Stage
3. Human Review Points
4. Risks
5. Suggested Process Notes
```

Use when:
- designing workflows
- creating SOP-linked AI processes
- moving from prompt use to process design

---

## 5. Executive Summary Prompt

```text
You are a senior analyst writing for a time-poor executive audience.

Context:
I need a short, clear executive summary based on the material provided.

Task:
Produce a concise executive summary highlighting the most important facts, risks, and required actions.

Constraints:
Keep the language plain.
Avoid jargon unless essential.
Do not bury the conclusion.

Output Format:
- Situation
- Key Findings
- Risks
- Recommended Next Actions
```

Use when:
- teaching business communication
- creating leadership updates
- converting detail into decision-ready summaries

---

## 6. Decision Support Prompt

```text
You are a decision-support analyst.

Context:
I need help evaluating a course of action.

Task:
Analyse the proposal and identify potential benefits, risks, trade-offs, and decision criteria.

Constraints:
Do not assume the proposal is good.
Surface uncertainty clearly.
Separate evidence from inference.

Output Format:
1. Proposal Summary
2. Benefits
3. Risks
4. Trade-Offs
5. Decision Criteria
6. Recommendation with Caveats
```

Use when:
- teaching analytical thinking
- exploring AI for planning and evaluation
- building management-facing outputs

---

## 7. SOP Generation Prompt

```text
You are a process documentation specialist.

Context:
I need to convert rough notes or a loose description of a task into a standard operating procedure.

Task:
Create a structured SOP from the material provided.

Constraints:
Do not skip prerequisite steps.
Identify points where human judgment is required.
Keep the process realistic and easy to follow.

Output Format:
1. Purpose
2. Scope
3. Inputs Required
4. Step-by-Step Procedure
5. Quality Checks
6. Risks / Escalation Points
```

Use when:
- teaching operational use of AI
- documenting internal processes
- building workflow assets for portfolios

---

## 8. Code Explanation Prompt

```text
You are a senior software engineer mentoring a developer.

Context:
I need to understand unfamiliar code accurately.

Task:
Explain what the code is doing, identify any likely risks or weak points, and suggest next areas to inspect.

Constraints:
Do not pretend the code is correct if it is not.
If something depends on unseen files or context, state that clearly.

Output Format:
1. What the Code Does
2. Key Components
3. Potential Issues
4. Questions / Missing Context
5. Suggested Next Checks
```

Use when:
- teaching AI for software development
- explaining codebases
- showing responsible use of AI in technical work

---

## 9. Customer Feedback Analysis Prompt

```text
You are a product and support analyst.

Context:
I have a set of customer feedback items and need to identify patterns.

Task:
Analyse the feedback, group it into themes, and identify the most important signals.

Constraints:
Do not overstate isolated comments as major trends.
Distinguish between repeated complaints and one-off observations.

Output Format:
1. Main Themes
2. Frequency / Strength of Signal
3. Likely Underlying Issues
4. Recommended Follow-Up Actions
```

Use when:
- teaching support analysis
- product insight generation
- recurring case study work

---

## 10. Prompt Improvement Prompt

```text
You are an expert in prompt design.

Context:
I have written a prompt that is not producing reliable results.

Task:
Diagnose why the prompt is weak and rewrite it to improve clarity, control, and output reliability.

Constraints:
Explain the issues before rewriting.
Preserve the original intent of the prompt.

Output Format:
1. Problems with the Original Prompt
2. Why Those Problems Matter
3. Improved Prompt
4. Explanation of Improvements
```

Use when:
- teaching prompt debugging
- refining student prompts
- demonstrating quality control in AI use

---

## Maintenance Rules for This File

When adding prompts to this library:

- include a clear purpose
- explain when the prompt should be used
- preserve consistency with the course philosophy
- avoid gimmicky prompt styles
- prefer prompts that transfer across tools and domains

This file should remain practical, readable, and reusable.
