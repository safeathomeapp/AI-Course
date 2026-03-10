# Module 1.2 How Large Language Models Actually Work

## Module Overview

**Tier:** Foundations  
**Estimated Duration:** 75-120 minutes  
**Prerequisites:** Module 1.1 Introduction to AI as a Tool

### Learning Objectives

By the end of this module, learners will be able to:

- explain tokens, probability, and context windows in plain language
- describe why confident errors happen and how to surface uncertainty
- design prompts that improve reliability without pretending certainty

### Teaching Flow and Timing

- 15 minutes: core mechanics and mental model
- 15 minutes: dual demonstrations (software and finance)
- 25-35 minutes: guided exercise with output scoring
- 10-15 minutes: real-world workflow scenario and reflection

---

## 1. Concept Explanation

In Module 1.1, the core principle was "AI is a tool, not an authority." This module explains why that principle is true at a technical-behavior level.

### The practical mechanics

A large language model (LLM) generates text by predicting likely next tokens from:

- your prompt
- available context
- patterns learned during training

That process is probabilistic, not authoritative. The model is selecting likely continuations, not proving facts.

A useful mental model:

Input text -> tokenization -> context weighting -> probability ranking -> generated output -> human verification

What each stage means:

- Tokenization: text is broken into model-readable pieces.
- Context weighting: the model determines what in context appears relevant.
- Probability ranking: candidate next tokens are scored by likelihood.
- Generated output: the model emits a sequence that is coherent, not guaranteed correct.

### Tokens in plain language

Tokens are text fragments. A token might be a full word, part of a word, punctuation, or common phrase fragment. LLMs do not process human language as complete sentence-level meaning first; they process token sequences and statistical relationships.

Why this matters in practice:

- wording changes can alter model behavior significantly
- long prompts consume context budget
- small prompt edits can improve consistency

### Probability and confident error

Because generation is probabilistic, the model can produce confident language under uncertainty. This is why confident wording is never a substitute for evidence.

A common professional failure:

1. User asks a broad question.
2. Model generates plausible synthesis.
3. Output sounds authoritative.
4. User skips verification.
5. Error enters a business decision.

You do not fix this by "trusting less" in general. You fix it by changing workflow:

- constrain prompts
- request uncertainty reporting
- separate evidence from inference
- verify before use

### Context window limits

Context windows define how much text the model can use in a single pass. If key details are missing, compressed, or poorly structured, output quality drops.

Practical implications:

- missing context causes guessing
- noisy context dilutes relevant signals
- clear structure in prompt and source text improves retrieval from context

### Why hallucinations happen

Hallucinations are a predictable outcome when the model must continue text without sufficient grounded evidence. They are not moral failures by the model. They are system behavior under uncertainty.

Typical triggers:

- absent source context
- ambiguous instructions
- prompts that imply certainty is required
- requests for unsupported specifics (dates, citations, exact numbers)

Mitigation tactics:

- "State unknowns explicitly"
- "Do not invent facts"
- "Separate observed facts from inference"
- "Ask clarifying questions before answering"

### What this means for professionals

LLM mechanics are not academic trivia. They directly shape daily reliability. If you understand probability, context limits, and uncertainty behavior, you can design workflows that are faster and safer.

This module sets up later modules where you will convert these mechanics into repeatable practices for prompting, workflow design, and quality control.

---

## 2. Demonstration

### Example Context
Software development: explain unfamiliar code from partial repository context.

### Weak Example
"Explain this code and all side effects."

### Improved Example
"You are a senior software engineer.

Context:
This snippet is from an API handler. You only have this file. Related service and data-layer files are unavailable.

Task:
Explain what is directly observable and what is inferred.

Constraints:
- Do not claim certainty where context is missing
- Separate evidence from inference
- Identify missing files required for confirmation

Output Format:
1. Observable behavior
2. Inferred behavior
3. Unknowns
4. Next verification steps"

### Analysis
The improved prompt respects context-window limits and uncertainty. It treats AI as an analysis assistant, not as an all-knowing code authority.

### Example Context
Finance and bookkeeping: summarize monthly performance from an incomplete P&L extract.

### Weak Example
"Tell me exactly what caused profit decline this month."

### Improved Example
"You are a finance analysis assistant.

Context:
I have partial monthly P&L data. Marketing spend details are missing.

Task:
Summarize observed trends and possible drivers.

Constraints:
- Do not invent missing figures
- Mark assumptions clearly
- Distinguish facts from hypotheses

Output Format:
1. Observed facts
2. Probable drivers (with caveats)
3. Missing data needed for confirmation
4. Questions for finance review"

### Analysis
The weak prompt demands certainty the data cannot support. The improved prompt allows useful analysis while preserving decision integrity.

---

## 3. Guided Exercise

### Task
Run a controlled comparison between an unconstrained prompt and an uncertainty-aware prompt.

### Instructions
1. Select a task where source context is incomplete.
2. Write Prompt A (basic) and Prompt B (uncertainty-aware with explicit constraints).
3. Run both prompts in the same AI tool, then score output quality with the checklist.

### Suggested Structure
- Available context:
- Missing context:
- Prompt A:
- Prompt B:
- Output format requirement:

### Example Output
Prompt A result: concise but overconfident narrative.  
Prompt B result: separates observed facts, assumptions, and unknowns.

### Evaluation Checklist

Score each prompt output from 1-5:

- Clarity
- Evidence vs inference separation
- Uncertainty transparency
- Risk of misleading confidence
- Usefulness for real decision support

Then answer:

- Which prompt is safer to use in your role?
- What uncertainty did Prompt B surface that Prompt A hid?
- What human checks are still required?

---

## 4. Real-World Application

Scenario: product team preparing a feature decision brief.

A product manager has interview notes, usage metrics, and a partial experiment readout. The team asks AI for a recommendation.

Without LLM-mechanics awareness:

- prompt is vague
- AI outputs a strong recommendation tone
- unknowns are hidden
- team over-trusts confidence

With LLM-mechanics awareness:

1. Team defines known data and missing data.
2. Prompt asks for evidence, hypotheses, and unknowns separately.
3. AI provides a structured decision-support draft.
4. Humans verify assumptions before roadmap commitment.

Result: faster synthesis without pretending certainty.

This workflow is transferable to finance reporting, support issue analysis, operations reviews, and software debugging summaries.

---

## 5. Common Mistakes

- mistaking confidence for correctness
- ignoring missing context limitations
- asking for certainty when evidence is incomplete
- accepting synthesis without source checks
- using different tools during comparison exercises and blaming model quality

These mistakes create avoidable rework and decision risk.

---

## 6. Portfolio Artefact

### Artefact Title
LLM Reliability Control Card

### What the Learner Produces
A practical one-page reference including:

- plain-language mechanics (tokens, probability, context window)
- common hallucination triggers
- uncertainty-control prompt patterns
- verification checklist before use

Starter template:

1. Task Type
2. Known Context
3. Missing Context
4. Required Constraints
5. Human Verification Owner

### Why It Matters
This turns abstract model behavior into an operational reliability aid for daily work.

---

## 7. Reflection Questions

- Where have you mistaken fluent output for reliable output?
- Which of your tasks are most exposed to missing-context errors?
- What one prompt change improved reliability most in your exercise?

---

## 8. Optional Advanced Exploration

- Compare short-context and long-context runs for the same task.
- Add a "clarify before answering" rule and measure output changes.
- Test a two-stage workflow: extraction first, synthesis second.

---

## 9. Suggested Further Practice

Use a "Facts / Inferences / Unknowns" output format in three real tasks this week and track whether review time decreases.
