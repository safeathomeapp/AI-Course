# Course Module Feedback - David Okonkwo - R04

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: David Okonkwo
Professional background: Operations Manager, 19 years in logistics and supply chain. 47-person team at a regional distribution center in Atlanta. Responsible for shift operations, vendor compliance, safety reporting, inventory, and workforce scheduling.
Experience using AI tools: Beginner — use ChatGPT occasionally for email drafts and document summaries
Primary reason for taking this course: Career development — evaluating whether and how to deploy AI in team operations

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Yes. "Structured prompting is the main control mechanism for AI output quality in professional workflows." That's a plain statement with an implied ROI — better control, better output, less rework. I'm paying attention.

**Do the learning objectives feel realistic?**

Yes. Apply the structure, diagnose weak prompts, produce predictable outputs. These are learnable skills in the time stated.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Professional and direct. This module is the most practically written content in the course. It reads like it was written for someone who has operational problems to solve, not someone who wants to understand AI theoretically.

Rating (1–5):
Clarity of purpose: 9/10
Tone and readability: 9/10

Comments:

First four modules have been building to this — understanding what AI is, why it fails, where to use it, and now how to specify what you want. Module 1.4 is where the theory becomes tool. That's the right structure for a course like this.

The "prompt design as workflow design" framing is correct and important. I manage workflows. AI outputs feed into reports, decisions, and processes. If those outputs are unstructured, they create handling costs downstream. Structured output is an operational efficiency gain, not just an aesthetic preference.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

Yes. The five-part RCTCO structure is clear. The failure-mode mapping for each element is what makes it useful:

- Role → tone/perspective drift. Understood — without role definition, AI writes for a generic audience.
- Context → irrelevant assumptions. Understood — without context, AI imports assumptions from its training.
- Task → ambiguity. Understood — vague tasks produce vague outputs.
- Constraints → hallucination and overreach. Understood and prioritized for my use cases.
- Output Format → downstream rework. Understood — this is the operational efficiency element.

**Did any terminology feel confusing?**

"Output schema" — used once in the weak-prompt patterns list, not consistent with the "Output Format" used elsewhere. Minor but worth fixing.

"Probability space" — acceptable but slightly technical.

**Did the mental model make sense?**

Yes. This is essentially a specification template — the same discipline I apply when I write a vendor contract or a process procedure. Define the role, state the context, specify the deliverable, list the constraints, define the output format. That structure is not new to operations professionals; this module is applying it to AI prompting.

**Was the explanation too long, too short, or appropriate?**

Appropriate. Clear and efficient.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 4
Usefulness of mental model: 9/10

Comments:

The "common weak-prompt patterns" list deserves emphasis:
- Multi-goal prompts with no priority — yes.
- No rules for uncertainty handling — significant omission for high-stakes tasks.
- No output schema for downstream work — this is the efficiency gap I've been experiencing without being able to name it.

The observation that "Constraints reduce hallucination and overreach" is the most operationally important element for my context. In logistics, an AI output that invents a compliance requirement or fabricates a regulatory standard is not just wrong — it's a liability. Explicit constraints on what AI should not do are mandatory in high-risk operational contexts.

---

# 3. Demonstrations

**Did the examples feel realistic?**

The operations and administration demonstration — converting meeting notes into an SOP draft — is directly applicable to my function. I facilitate planning meetings that result in process changes. Converting those notes into documented procedures is recurring work. The weak prompt ("Turn these notes into a process document") is how I would have approached this before today.

The improved version — preserving all controls from notes, marking missing prerequisites explicitly, not inventing compliance requirements, structured five-section output — is exactly the right specification for an operations context. The constraint "Do not invent compliance requirements" is specifically important for any team operating in a regulated environment.

The finance demonstration is less directly applicable but the principle is clear.

**Did the improved prompt clearly outperform the weak prompt?**

Yes. The contrast is the clearest in the course. Two-word vague request versus a complete work specification — the difference in output quality is not marginal, it's categorical.

**Did the explanation help you understand why the improvement worked?**

Yes. Analysis sentences are appropriately concise. "The improved prompt transforms unstructured notes into a review-ready process draft while exposing unknowns for human resolution" — that's an accurate description of a professional-grade output.

**Could you imagine applying this approach in your own work?**

Immediately. I ran the exercise before finishing the module.

Rating (1–5):
Example realism: 5
Clarity of improvement: 5
Practical applicability: 5

Comments:

The SOP conversion demonstration is the most operationally applicable example in the course. I have a direct use case: we recently changed our inventory count procedure and I have meeting notes that describe the new process. Getting a structured first-draft SOP from those notes, with gaps marked for human completion, saves significant documentation time.

Gap: no logistics, transportation, or supply chain demonstration. The two domains covered (finance and admin/ops) are relevant but not specifically operational logistics. A demo showing something like a shift handoff summary or a vendor incident report would have landed directly rather than requiring translation. Minor — the principle is clear — but noted.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. Select a real prompt, rewrite it with the five-part structure, run both, evaluate.

**Did the instructions feel clear?**

Yes. The template fields (Role / Context / Task / Constraints / Output Format) are clear. The example output helps calibrate expectations.

**Did the evaluation checklist help you compare outputs?**

Yes. Five criteria plus three follow-up questions is the right scope. "What still requires human validation?" is the right closing question — it reinforces the governance principle from Module 1.3 in the context of prompt design.

My results: I rewrote a shift summary report prompt I've been using with ChatGPT. Structured version produced a table-based summary with explicit flags for missing data and variance explanations. Unstructured version produced a narrative paragraph. The table version is immediately usable in my management review process. The narrative is not.

**How long did the exercise actually take?**

About 35 minutes.

Rating (1–5):
Instruction clarity: 5
Exercise usefulness: 5
Difficulty level: 2 — straightforward for someone with process documentation experience

Comments:

The exercise is the right format — real prompt, real test, systematic evaluation. No hypotheticals. The result I got validates the module's claims and that's the appropriate outcome for a module like this.

The follow-up question "Which constraint had the biggest impact?" — for me it was "Flag unclear or missing data rather than assuming." That single constraint changed the output from confident narrative (hiding gaps) to flagged analysis (exposing gaps). That's the difference between a report that looks complete and a report that is complete.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

Yes. Marketing manager, broad prompt, generic output, team rework — this is the general AI adoption failure pattern I've seen in other departments and wanted to avoid on my own team.

**Did it show how AI should be used responsibly?**

Yes. The professional takeaway — "structured prompts reduce waste and improve decision readiness, but human review still owns final quality" — maintains the governance principle. Appreciated.

**Did it help connect the concept to real professional work?**

Yes. The outcome metrics (better first drafts, faster review cycles, clearer assumptions, less cleanup) are the operational benefits I'd present to my director when making the case for AI adoption with proper protocols.

Rating (1–5):
Scenario realism: 4
Practical value: 5

Comments:

The marketing scenario is fine but this module would benefit from an operations-specific Real-World Application scenario. Something like: an operations manager using structured prompting for weekly KPI reporting, incident analysis summaries, or vendor performance reviews. The principle is identical — but an ops scenario would serve the manufacturing, logistics, and field service audience that currently sees itself in the demonstrations but not in the application scenario.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes. A Structured Prompt Library is a team productivity asset. In operations, where recurring reports, compliance documentation, and process communications follow predictable patterns, a set of tested, structured prompts is a legitimate standard operating resource.

**Could you realistically use this in your job or portfolio?**

Yes. Building it this week. Starting with: shift summary report, vendor incident description, safety observation report, weekly KPI narrative, procedure document conversion, compliance checklist summary, workforce scheduling communication, and escalation report format.

**Was the template sufficient to create the artefact?**

Yes. The seven-field template is clean and the Review Notes field is the right addition for a professional context where prompt reliability matters.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 4

Comments:

For an operations team, a shared Structured Prompt Library as a standard tool resource makes AI deployment more consistent and governable. Individual team members don't need to figure out prompting from scratch — they can use tested templates as a starting point. This artefact has team value beyond individual use.

I'll add a "Last Updated" field and an "Approved By" field for compliance context.

---

# 7. Emotional Learning Experience

Engaged throughout. This is the first module where I felt that the course was delivering direct operational value rather than building toward it.

Felt **confirmed** in my skepticism being resolved — the five-part structure is the process control I was looking for. I've been hesitant to deploy AI on my team because I couldn't quantify the quality controls. This module gives me that framework.

Felt **purposeful** during the exercise — building something immediately deployable rather than completing a training task.

Felt **a small concern** during the Real-World Application section that the scenario didn't reflect an operations environment — I want to be sure the framework works in my specific context, and the marketing scenario doesn't fully answer that.

No confusion or boredom. Best-paced module in the course.

---

# 8. Time and Difficulty

Reading: 18 minutes
Exercise: 35 minutes
Reflection: 10 minutes

Difficulty level: Easy

Was the estimated time accurate?

Yes. 63 minutes total, just within the lower bound of the 75-120 minute range. The exercise could easily be extended by testing additional prompts.

Comments:

Efficient module. The concept section is appropriately lean. The exercise is the right scope. No sections that drag.

---

# 9. Most Valuable Part

The constraints element — specifically, the insight that well-designed constraints explicitly limit what AI should not do, and that this reduces hallucination and overreach.

In operations, the most dangerous AI outputs are not wrong answers — they're confident answers that invent details about regulations, compliance requirements, or operational facts that weren't in the source material. Explicit constraints ("Do not invent compliance requirements," "Flag missing data rather than assuming") are the technical mechanism that prevents this class of error.

Before this module, I had no systematic way to specify these guardrails. Now I do.

---

# 10. Weakest Part

The Real-World Application scenario. Marketing manager with generic AI output is a fine illustration but it's the third different professional domain in this module (finance, ops/admin in demonstrations, now marketing). For an operations audience, an ops-specific application scenario would reinforce the principle in the most directly relevant context.

The marketing scenario also implies that the primary benefit of structured prompting is better creative output (campaign concepts). The primary benefit for operations is more reliable, verifiable, structured data — a different value proposition that the scenario doesn't capture.

---

# 11. Missing Content

Module is well-scoped. No missing prerequisites.

What would add value:

1. **Logistics/operations-specific demonstration or application scenario.** Minor gap — the principles transfer — but direct representation matters for professional resonance.

2. **Constraint-quality guidance.** The module shows examples of good constraints but doesn't give systematic guidance on how to write effective ones. What makes "Do not invent compliance requirements" a good constraint while "Be accurate" is a bad one?

3. **Chaining preview.** The module mentions that prompts will be "chained into complete workflows" in later modules. A one-sentence description of what chaining means would help learners see the trajectory.

4. **Team deployment guidance.** How do you establish a team prompt library? How do you ensure consistency when multiple people are using AI? The individual prompt library is well-designed; the team governance layer is absent.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

This module provides the technical control mechanism that makes AI deployment in professional operations defensible — not just "use AI carefully" but "here is how to specify what you want and how to constrain what you don't want." The five-part structure is immediately applicable, the exercise validated the principle on real work, and the prompt library artefact converts individual learning into a team resource. Any operations manager considering AI deployment in reporting, documentation, or process communication workflows needs this module before deploying any tools.

---

# Reviewer Summary

Module 1.4 resolved my primary barrier to AI adoption on my operations team — the inability to specify quality controls for AI outputs in a systematic, repeatable way. The five-part RCTCO structure, particularly the constraints element with its explicit role in preventing hallucination and overreach, is the governance mechanism I've been looking for. The SOP conversion demonstration is directly applicable to my documentation workflows and the exercise produced a shift report output that is immediately usable. What should be improved: the Real-World Application scenario should have an operations variant — the marketing scenario illustrates the principle but doesn't address the specific value proposition for data-heavy operational reporting; constraint-quality guidance should be developed more explicitly; team deployment of a shared prompt library should be addressed. What should stay: the failure-mode mapping for each prompt element (this is the strongest teaching mechanism in the course), the SOP conversion demonstration, the constraint examples from both demos, the exercise format with real-prompt testing, and the seven-field prompt library template — this is a professional governance document that belongs in any team's AI deployment toolkit.
