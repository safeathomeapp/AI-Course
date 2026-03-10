# Course Module Feedback - Yuki Tanaka - R08

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Yuki Tanaka
Professional background: Product Manager at software company, Tokyo, Japan. 6 years experience. Write product requirements, manage roadmap planning, coordinate with development teams. English is second language — TOEFL 95/120.
Experience using AI tools: Moderate — ChatGPT and GitHub Copilot for 4 months
Primary reason for taking this course: Productivity improvement

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Yes. Very clear purpose: structured prompting is the main control tool for AI output quality. Simple statement. I understood immediately.

**Do the learning objectives feel realistic?**

Yes. Three objectives are specific and achievable. I believe I can do all three after this module.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Approachable and professional. Language is clearer than Module 1.2 and similar to Module 1.3 in accessibility. I did not need dictionary in this module.

Rating (1–5):
Clarity of purpose: 5
Tone and readability: 5

Comments:

This module continues the accessible style of Module 1.3 which I appreciated. Five-part structure is very visual and clear. This kind of list-based teaching works well for non-native English speakers because each point is separate and understandable without depending on previous complex sentence.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

Yes. Five elements are clear:
- Role — tells AI what perspective to use
- Context — gives AI the relevant situation
- Task — tells AI what to produce
- Constraints — tells AI what not to do
- Output Format — tells AI how to present results

Each element has reason. This is important for me — I want to know WHY I am doing something, not only WHAT.

**Did any terminology feel confusing?**

"Output schema" — I know this means output structure, but "schema" is technical word from database field. The module uses "Output Format" everywhere else. I think "Output Format" is better choice.

"Downstream rework" — I understood from context but this is idiomatic English phrase that may be difficult for some non-native speakers. Simpler: "extra work later to fix the output."

**Did the mental model make sense?**

Yes. The failure-mode mapping is very useful:
- Role → prevents tone/perspective drift. I understand this. Without role, AI writes for general audience which may not match my stakeholders.
- Context → prevents irrelevant assumptions. AI will use its own assumptions if I do not provide context. This is clear connection to Module 1.2 hallucination discussion.
- Task → prevents ambiguity. Specific task = specific result.
- Constraints → prevents hallucination and overreach. Most important for my work. I do not want AI to invent product requirements.
- Output Format → prevents downstream rework. Very practical benefit.

**Was the explanation too long, too short, or appropriate?**

Appropriate. This section is well-organized and not too long.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 4
Usefulness of mental model: 5

Comments:

The list of "common weak-prompt patterns" was personally recognizable:
- "Multi-goal prompts with no priority" — I have done this. Asked AI to summarize meeting AND identify action items AND suggest follow-up steps in one message.
- "Missing audience definition" — I did not know this was important before this module.
- "No output schema for downstream work" — I had not thought about specifying output format before.

These patterns describe my actual behavior. Now I can correct them.

"Prompt design as workflow design" — this phrase is important for product managers. In product management, we think about user experience and interface design. This module says prompt is a kind of interface — between human intention and AI capability. This is interesting parallel for my professional context.

---

# 3. Demonstrations

**Did the examples feel realistic?**

Finance P&L demonstration — not directly my daily work but I understand the scenario. Summarizing financial data with structured output is clear example.

Operations/SOP conversion demonstration — more interesting for me. Converting meeting notes into procedure document is task I sometimes do for product planning processes. The weak prompt "Turn these notes into a process document" is exactly how I would have asked before today.

**Did the improved prompt clearly outperform the weak prompt?**

Yes. Difference is very clear. Improved prompt has: defined role, specific context about inventory reconciliation, clear task, explicit constraints (especially "Do not invent compliance requirements"), and five-section output format. Result is review-ready document with gaps marked.

**Did the explanation help you understand why the improvement worked?**

Yes. Analysis sentences are clear and direct.

**Could you imagine applying this approach in your own work?**

Yes. I immediately thought of product requirements writing. When I ask AI to help write user stories, I can now structure: role as product requirements assistant, context about feature and target users, task to write user stories in standard format, constraints to use only information provided and not invent acceptance criteria, output format with numbered stories in "As a [user] / I want [action] / So that [benefit]" structure.

Rating (1–5):
Example realism: 4
Clarity of improvement: 5
Practical applicability: 4

Comments:

Both demonstrations are useful. However, neither is from technology product management, software development support, or technical documentation context — which are common use cases for AI tools in my industry.

I would find one demonstration from product or technical context very useful. For example: using AI to draft release notes from technical changelog (weak: "Write release notes for this update" — improved: full structured prompt with role as technical writer, context about product and audience, constraints on technical detail level, output format for release notes sections).

This is minor feedback. Principles from current demonstrations transfer well to my work.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. Instructions are clear. Select real prompt, rewrite with five-part structure, run both versions, evaluate with checklist.

**Did the instructions feel clear?**

Yes. The suggested template with labeled fields (Role / Context / Task / Constraints / Output Format) is very helpful. I can fill in each field without confusion about format.

Example output (product analyst for user interview summaries) is relevant to my work — more than I expected. I used similar scenario for my exercise.

**Did the evaluation checklist help you compare outputs?**

Yes. Five criteria are clear. "Assumption transparency" is the most interesting criterion for me — this directly connects to the hallucination discussion in Module 1.2. A structured prompt should produce output that is transparent about its assumptions, not hiding them in confident language.

The three follow-up questions helped me reflect. "Which constraint had biggest impact?" — for my exercise, it was "Separate evidence from assumptions" combined with "No invented quotes." These constraints made AI explicitly label what was evidence and what was interpretation. This is important for product research validity.

**How long did the exercise actually take?**

Approximately 35 minutes.

Rating (1–5):
Instruction clarity: 5
Exercise usefulness: 5
Difficulty level: 2

Comments:

I rewrote a prompt I use for synthesizing user interview notes. The structured version produced a theme table with explicit evidence and risk notes. The unstructured version produced narrative paragraph with mixed evidence and interpretation. The difference was immediately visible and significant.

Writing Constraints field was slightly more difficult than other fields. The module gives examples of good constraints in demonstrations (do not invent figures, flag unclear data, preserve required controls) but does not give guidance on how to identify what constraints to write for a new use case. This skill requires practice and some additional guidance would help.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

Yes. Marketing manager with generic AI output and team rewriting — this is familiar pattern. I have experienced similar situation with product documentation drafts.

**Did it show how AI should be used responsibly?**

Yes. The professional takeaway — "structured prompts reduce waste and improve decision readiness, but human review still owns final quality" — is correct and consistent with Module 1.3.

**Did it help connect the concept to real professional work?**

Yes. The five-step structured approach for marketing scenario demonstrates the complete framework in application. The outcomes (better first drafts, faster review, clearer assumptions) are clear benefits.

Rating (1–5):
Scenario realism: 4
Practical value: 5

Comments:

For non-native English readers: the Real-World Application section has slightly more complex sentences than earlier sections. "Assumptions are hidden" and "team spends time rewriting from scratch" are clear. Some phrases like "decision meetings" required brief inference for me.

Overall the section is accessible. A technology or product management scenario would be more directly relevant to my professional context, but I could understand and apply the marketing scenario.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes. Structured Prompt Library with eight or more prompts is professional tool I can use immediately. In my role, I have recurring tasks: user story writing, meeting notes to action items, release notes drafts, stakeholder update emails, product specification outlines. Structured prompts for these tasks would save significant time.

**Could you realistically use this in your job or portfolio?**

Yes. I started building during exercise. Will add prompts for: user story generation, user research synthesis, stakeholder update emails, product requirement review preparation, release notes drafts, competitive analysis summaries, sprint retrospective summaries, and roadmap presentation outlines.

**Was the template sufficient to create the artefact?**

Yes. Seven-field template is clear. "Review Notes" field is valuable — I can record what worked and what needed adjustment for each prompt.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 5

Comments:

The prompt library is most useful artefact in course so far. A tested collection of structured prompts for product management tasks is professional productivity tool with immediate value.

One suggestion: include guidance on how to name and organize prompts in library for easy retrieval. When library grows to 20-30 prompts, organization becomes important. A simple tagging system by function or frequency of use would help.

---

# 7. Emotional Learning Experience

This module was positive and practical experience.

Felt **confident** throughout — clear language, visual structure, no vocabulary barriers.

Felt **immediately applicable** — unlike Module 1.2 which required some delay between learning and application, this module is directly usable today.

Felt **engaged** during exercise — testing real prompt from my work and seeing clear improvement was satisfying.

Felt **satisfied** at end — I have a skill I did not have before starting this module, and I can verify this by looking at my exercise output.

No confusion or anxiety. This module maintains the accessibility quality of Module 1.3.

---

# 8. Time and Difficulty

Reading: 18 minutes
Exercise: 35 minutes
Reflection: 10 minutes

Difficulty level: Easy

Was the estimated time accurate?

Yes. 63 minutes total. Within stated 75-120 minute range. Good estimate.

Comments:

Module 1.4 is another example where accessible language and clear structure produces accurate time estimates for non-native English learners. I did not need extra time for dictionary use or re-reading for language comprehension. This is correct design.

---

# 9. Most Valuable Part

The five-element structure with each element mapped to specific failure mode.

Understanding that Constraints → prevents hallucination and overreach is the most practically important insight for my product management work. When I ask AI to help write product requirements or user stories, the risk of AI inventing acceptance criteria or fabricating user research findings is real. Explicit constraints ("use only information provided," "do not invent acceptance criteria," "separate evidence from assumptions") are the mechanism to prevent this.

---

# 10. Weakest Part

Constraints field guidance is weakest element of module. The module shows examples of good constraints in demonstrations and lists vague constraints ("make it better") as a mistake. However, there is no systematic guidance on HOW to write good constraints.

For a learner approaching a new task type, identifying what constraints are relevant requires experience that beginners do not have. A brief framework — "ask yourself: what could AI plausibly add that would be wrong? What would damage this output most if invented?" — would help learners develop the skill, not only see examples.

---

# 11. Missing Content

Module is well-scoped and accessible.

Suggested additions:

1. **Technology or product management demonstration.** User story writing, product specification drafts, technical documentation — these are major AI use cases in software industry that current demonstrations do not cover.

2. **Constraints guidance.** As described above.

3. **Prompt library organization tips.** When library grows, organization matters. Brief guidance on naming and tagging prompts would improve long-term usability.

4. **Cross-language note.** For international users: does prompt structure work as well in non-English languages? I use AI in both English and Japanese. Brief guidance on structured prompting in non-English contexts would be valuable.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

This module provides clearest practical skill in course — how to write prompts that consistently produce usable professional output. Five-part structure is memorable, failure-mode justification makes each element meaningful, and exercise validates the principle with immediate personal evidence. I will recommend to all product management colleagues who use AI tools. The accessible language makes it suitable for non-native English speakers and for learners without technical background.

---

# Reviewer Summary

Module 1.4 delivers the practical skill that makes earlier modules' conceptual content actionable — the five-element RCTCO structure with failure-mode justification for each element is the clearest and most immediately applicable framework in the course, and the exercise produced direct personal evidence of the concept's value by comparing structured and unstructured outputs from a real work prompt. The prompt library artefact is the most professionally useful deliverable so far. What should be improved: constraints guidance needs development — the module shows examples but does not give learners tools for identifying what constraints to write for unfamiliar task types; a technology or product management demonstration would serve the large software industry audience; guidance on prompt library organization would improve the artefact's long-term usability. What should stay: the failure-mode mapping for each element (this is the strongest teaching in the module), the accessible language quality that continues from Module 1.3, the labeled template fields in the exercise, the seven-field prompt library template, and the professional takeaway integrating the governance principle from Module 1.3 — this cross-module consistency is exactly the right approach for building cumulative professional competence.
