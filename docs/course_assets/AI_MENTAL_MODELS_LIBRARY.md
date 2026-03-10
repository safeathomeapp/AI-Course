# AI Mental Models Library

## Purpose

This file defines the **core mental models used throughout the AI Course**.

Mental models are conceptual frameworks that help learners reason about how AI systems behave and how professionals should interact with them.

They are used across multiple modules to:

* simplify complex ideas
* reinforce consistent thinking patterns
* prevent misunderstanding of AI capabilities
* support safe real-world usage

These models should be referenced rather than re-explained in every module.

---

# Mental Model 1

## The AI Workflow Model

### Concept

AI should be treated as a **draft generator within a human decision workflow**.

### Model

Prompt → Context → Generation → Human Review → Decision

### Explanation

1. **Prompt**
   The instruction given to the AI.

2. **Context**
   Relevant information that constrains the task.

3. **Generation**
   The AI produces a draft response.

4. **Human Review**
   A person evaluates accuracy, relevance, and risk.

5. **Decision**
   A human makes the final judgment or action.

### Why This Matters

This model prevents the most common misuse of AI:

Treating AI output as a final authority.

### Key Principle

AI drafts.
Humans review.
Humans decide.

---

# Mental Model 2

## Weak vs Structured Prompting

### Concept

Prompt quality determines how predictable and usable the output will be.

### Weak Prompt Pattern

Instruction only.

Example:

"Summarize this report."

### Structured Prompt Pattern

Role → Context → Task → Constraints → Output Format

Example:

Role: Operations analyst
Context: Monthly KPI data for delivery and defect rates
Task: Summarize key changes
Constraints: Do not infer root causes
Output Format: Executive bullets + KPI table + anomalies

### Why This Matters

Structured prompts:

* reduce ambiguity
* improve first-draft quality
* reduce downstream editing

---

# Mental Model 3

## Facts vs Inference vs Unknowns

### Concept

AI outputs often mix **verified information, interpretation, and speculation**.

Professionals must separate these categories.

### Model

Facts
Evidence directly supported by source material.

Inference
Reasoned interpretation based on available evidence.

Unknowns
Information required for a reliable conclusion but not present.

### Example

Statement:
"Customer churn increased due to price changes."

Possible breakdown:

Fact:
Churn increased.

Inference:
Price change may have contributed.

Unknown:
Customer survey evidence confirming reason.

### Why This Matters

Failure to separate these categories leads to **overconfidence in AI outputs**.

---

# Mental Model 4

## Task Risk vs Review Depth

### Concept

Different AI tasks require different levels of human oversight.

### Model

Low Risk
Examples:

* formatting
* summarization
* note cleanup

Review: light verification

---

Medium Risk
Examples:

* internal reporting
* research synthesis
* operational summaries

Review: standard verification

---

High Risk
Examples:

* financial advice
* legal interpretation
* policy statements
* customer commitments

Review: strict verification + human sign-off

### Why This Matters

Not all AI tasks deserve the same review effort.

Risk determines oversight.

---

# Mental Model 5

## AI Strengths vs Human Strengths

### Concept

AI and humans are good at different types of tasks.

### AI Strengths

* pattern recognition in text
* rapid drafting
* summarization
* brainstorming
* reformatting information

### Human Strengths

* judgment
* domain expertise
* ethical reasoning
* contextual awareness
* accountability

### Practical Rule

Use AI to **accelerate thinking**, not replace it.

---

# Mental Model 6

## Prompt Iteration Loop

### Concept

Reliable AI outputs usually require **prompt refinement**.

### Model

Draft Prompt
↓
Generate Output
↓
Check Quality
↓
Revise Prompt
↓
Re-run

### Why This Matters

Professionals should treat prompts as **iterative tools**, not one-shot instructions.

---

# Mental Model 7

## AI as a Thinking Partner

### Concept

AI can be used to extend thinking rather than replace it.

### Example Uses

* exploring alternative explanations
* generating questions
* outlining arguments
* stress-testing ideas

### Example Prompt

"Challenge this reasoning. Identify weak assumptions."

### Why This Matters

Used correctly, AI becomes a **cognitive amplifier**, not a decision maker.

---

# How These Models Are Used in the Course

Tier 1 introduces these models.

Tier 2 applies them to workflows.

Tier 3 integrates them into system design.

Modules should reference these models when appropriate rather than redefining them.
