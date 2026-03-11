```diff
diff --git a/modules/foundation/T1M01_introduction_to_ai.md b/modules/foundation/T1M01_introduction_to_ai.md
--- a/modules/foundation/T1M01_introduction_to_ai.md
+++ b/modules/foundation/T1M01_introduction_to_ai.md
@@ -1,29 +1,42 @@
 # Module 1.1 Introduction to AI as a Tool
 
+**Module ID:** T1M01  
+
 ## Module Overview
 
 **Tier:** Foundations  
 **Estimated Duration:** 60-90 minutes  
 **Prerequisites:** None
+
+### Shared Assets Used
+
+- `docs/course_assets/AI_GLOSSARY.md`
+- `docs/course_assets/AI_WORKED_EXAMPLES.md` (Worked Example 1: Admin / Coordination)
+- `docs/course_assets/AI_OUTPUT_COMPARISON_LIBRARY.md` (Comparison 1: Meeting notes to action items)
+- `docs/course_assets/AI_EXERCISE_LIBRARY.md` (Beginner-Safe Exercise 1)
+- `docs/course_assets/AI_ARTEFACT_EXAMPLES.md` (AI Tool-Use Operating Checklist)
+- `docs/course_assets/AI_DIAGRAM_LIBRARY.md` (Diagram 1: AI Workflow Model: Draft to Decision)
 
 ### Learning Objectives
 
 By the end of this module, learners will be able to:
 
 - explain why AI should be treated as a tool, not an authority
-- distinguish high-value AI assistance from high-risk AI misuse
+- distinguish useful AI drafting support from high-risk AI misuse
 - apply a practical human-review process before acting on AI output
 
 ### Teaching Flow and Timing
 
 - 10 minutes: concept orientation and mental model
-- 15 minutes: demonstration review (operations and finance examples)
-- 20-30 minutes: guided exercise and output comparison
+- 15 minutes: demonstration review using shared worked example and output comparison
+- 20-30 minutes: guided exercise with beginner-safe scaffold
 - 10-15 minutes: real-world scenario walkthrough and reflection
 
 ---
 
 ## 1. Concept Explanation
 
+This module introduces the core operating rule for the entire course: AI drafts. Humans review. Humans decide.
+
 The core idea of this course is simple and non-negotiable: AI is a tool, not an authority.
 
 That statement sounds obvious, but in practice many people treat AI output like a final answer. They do this because AI output often sounds fluent, confident, and complete. Fluency is helpful, but fluency is not evidence.
@@ -31,24 +44,30 @@
 ### A practical mental model
 
 Use this mental model whenever you work with AI:
 
 Prompt -> Context Window -> Probability Engine -> Output -> Human Review -> Decision
+
+Reference asset: `docs/course_assets/AI_DIAGRAM_LIBRARY.md`  
+Diagram: `AI Workflow Model: Draft to Decision`
 
 What this means in plain language:
 
-- Prompt: you provide instructions, goals, constraints, and format.
-- Context Window: the model can only use what is in scope (your prompt plus available context).
+- Prompt: you provide instructions, goals, constraints, and format. See `docs/course_assets/AI_GLOSSARY.md`.
+- Context Window: the model can only use what is in scope (your prompt plus available context). See `docs/course_assets/AI_GLOSSARY.md`.
 - Probability Engine: the model predicts likely next tokens based on patterns.
 - Output: you get a response that can be useful, wrong, or mixed.
-- Human Review: you verify facts, assumptions, and fitness for purpose.
-- Decision: a person remains accountable for what is used.
+- Human Review: you verify facts, assumptions, and fitness for purpose. See `docs/course_assets/AI_GLOSSARY.md`.
+- Decision: a person remains accountable for what is used. This is decision readiness, not automatic trust.
 
 If you skip the review step, you are effectively delegating authority to a probability engine. That is the exact behavior this module is designed to prevent.
 
 ### Why hallucinations happen
 
 A model generates text from learned statistical patterns. If a prompt is under-specified, or if the needed facts are not present in context, the model may still produce a smooth answer by filling gaps with likely language. That can look convincing even when it is incorrect.
 
+This course uses the term hallucination consistently: unsupported or false information that sounds plausible. See `docs/course_assets/AI_GLOSSARY.md`.
+
 Hallucinations are not random "bugs" in the way many beginners assume. They are a predictable result of how language models operate under uncertainty. The model is optimized to continue language coherently, not to guarantee truth.
 
 This is why instruction quality matters so much. Better instructions do not make AI infallible, but they reduce ambiguity and expose uncertainty earlier.
 
 ### Why this tool is suddenly everywhere
@@ -87,12 +106,14 @@
 Weak prompts produce broad, generic output. Structured prompts create controllable output.
 
 A practical structure used throughout this course:
 
-- Role
-- Context
-- Task
-- Constraints
-- Output Format
+- Role
+- Context
+- Task
+- Constraints
+- Output Format
+
+This five-part structure is the foundation of structured prompting used throughout the course.
 
 This structure does three jobs at once:
 
 1. It narrows scope.
@@ -116,81 +137,108 @@
 
 ---
 
 ## 2. Demonstration
 
 -### Example Context
 -Operations and administration: documenting a new-hire onboarding process.
+This module reuses two shared assets:
+
+- `docs/course_assets/AI_WORKED_EXAMPLES.md` -> Worked Example 1: Admin / Coordination
+- `docs/course_assets/AI_OUTPUT_COMPARISON_LIBRARY.md` -> Comparison 1: Meeting notes to action items
+
+### Worked Example
+
+Use the shared worked example:
+
+**Worked Example 1: Admin / Coordination**  
+Convert meeting notes into a clear action brief.
+
+Key lesson:
+
+- weak prompts produce generic summaries
+- structured prompts surface owners, deadlines, and unknowns
+- review-ready output is more useful than fluent but vague output
 
 -### Weak Example
 -"Write our onboarding process. Make it good."
+Suggested prompt pattern:
 
 -### Improved Example
 -"You are an operations analyst.
+- Role
+- Context
+- Task
+- Constraints
+- Output Format
 
 -Context:
 -We are a 12-person company onboarding customer support hires.
+### Output Comparison
 
 -Task:
 -Draft a first-pass onboarding process for week 1.
+Use the shared comparison:
 
 -Constraints:
 -- Keep it practical
 -- Include human review checkpoints
 -- Do not invent legal compliance steps
+**Comparison 1: Meeting notes to action items**
 
 -Output Format:
 -1. Day-by-day checklist
 -2. Required manager approvals
 -3. Risks and open questions"
+Weak prompt:
 
 -### Analysis
 -The weak prompt has no scope boundaries, no role, no constraints, and no output format. The improved prompt constrains the model and makes review possible. The output is a draft for human approval, not a final authority document.
+"Summarize these notes."
 
 -### Example Context
 -Finance and bookkeeping: summarizing monthly P&L for an owner update.
+Improved prompt:
 
 -### Weak Example
 -"Analyze this spreadsheet."
+"You are a project coordinator. Convert these notes into an action log. Use columns: Action, Owner, Deadline, Status. Mark unknowns as Unassigned."
 
 -### Improved Example
 -"You are a financial analyst assistant.
+Why the improved version is better:
 
 -Context:
 -This is a small business monthly P&L and cash-flow snapshot.
+- it creates a usable structure, not just a narrative
+- it makes unknowns visible
+- it reduces downstream rework during review
 
 -Task:
 -Summarize performance, identify anomalies, and list follow-up questions.
+### Role Variant Callouts
 
 -Constraints:
 -- Do not invent numbers
 -- Distinguish facts from interpretation
 -- Mark uncertainty if data is missing
+The same principle applies across roles:
 
 -Output Format:
 -1. Executive summary
 -2. Key metrics table
 -3. Variance/anomaly notes
 -4. Questions for owner review"
+- Non-technical/professional example: turn rough meeting notes into an action brief
+- Analytical example: turn KPI or finance notes into a fact/unknown summary with explicit review questions
 
 -### Analysis
 -The improved finance prompt improves reliability in three ways: it blocks fabricated numbers, separates facts from interpretation, and creates a format suitable for decision meetings. Human validation of figures is still required before any action.
+In both cases, the rule remains the same: AI drafts. Humans review. Humans decide.
 
 ---
 
 ## 3. Guided Exercise
 
 ### Task
 -Turn one vague prompt from your actual work into a structured prompt, then evaluate output quality using explicit criteria.
+Turn one vague prompt into a structured prompt, then compare the output quality.
+
+If you are completely new to AI tools, use the beginner-safe fallback below instead of inventing your own prompt from scratch.
+
+### Readiness Check
+
+Before starting, confirm:
+
+- you have access to an approved AI tool
+- you are using non-sensitive practice material
+- you have 15-20 minutes available for one draft, one revision, and one review
+
+### Beginner-Safe Fallback
+
+Use `docs/course_assets/AI_EXERCISE_LIBRARY.md` -> Beginner-Safe Exercise 1:
+
+Rewrite a vague email-drafting prompt using Role, Context, Task, Constraints, and Output Format.
 
 ### Instructions
 -1. Write one vague prompt you currently use.
 -2. Rewrite it using Role, Context, Task, Constraints, and Output Format.
 -3. Run both prompts in the same AI tool, then compare outputs using the evaluation checklist below.
+
+1. Choose one vague prompt from your work, or use the fallback exercise.
+2. Rewrite it using Role, Context, Task, Constraints, and Output Format.
+3. Run both prompts in the same AI tool.
+4. Compare the outputs using the checklist below.
+5. Answer the review question: What still requires human validation?
 
 ### Suggested Structure
++
 - Role:
 - Context:
 - Task:
 - Constraints:
 - Output Format:
 
 -### Example Output
 -Vague prompt: "Summarize this monthly finance report."
+### Worked Example Reference
+
+If you are unsure what a strong answer looks like, review:
+
+- `docs/course_assets/AI_WORKED_EXAMPLES.md`
+
+### Example Prompt Pair
+
+Vague prompt: "Write a follow-up email after this meeting."
 
 Structured version:
-- Role: Finance analyst assistant
-- Context: Small business monthly P&L and cash flow
-- Task: Summarize performance and anomalies
-- Constraints: No invented numbers; flag uncertainty
-- Output Format: Key metrics, anomalies, follow-up questions
+- Role: Administrative assistant
+- Context: This is a follow-up email after an internal project meeting about onboarding delays
+- Task: Draft a clear follow-up email with actions and next steps
+- Constraints: Do not invent owners or deadlines; mark missing details as unknown
+- Output Format: Subject line, email body, action list, open questions
 
 ### Evaluation Checklist
 
 Evaluate both outputs on a 1-5 scale:
@@ -199,54 +247,86 @@
 - Assumptions: Are assumptions explicit instead of hidden?
 - Missing Information: Does it identify unknowns or gaps?
 - Usefulness for Decision Making: Can a manager act on this safely?
 
+Scoring anchors:
+
+- 1 = weak or unsafe for real use without major rewriting
+- 3 = partly usable but still missing important structure or review signals
+- 5 = review-ready draft with clear structure, visible unknowns, and useful next steps
+
 Then answer:
 
 - Which output is safer to use?
 - What did structure improve most?
 - What still needs human verification?
 
+### What Good Looks Like
+
+A stronger exercise result usually:
+
+- includes all five prompt parts
+- makes unknowns visible instead of hiding them
+- produces output that is easier to review line by line
+- leaves the final decision with a human
+
 ---
 
 ## 4. Real-World Application
 
 -A detailed scenario: marketing campaign ideation with human controls.
+A realistic workplace scenario: turning internal notes into a usable decision-support draft.
 
 -A marketing manager needs three campaign concepts for a seasonal launch. Under time pressure, they use AI.
+An operations lead has rough notes from a cross-team meeting and needs a clean action brief before the end of the day.
 
 -Version A (vague prompt):
 -"Give me a campaign for our spring offer."
+Version A (vague prompt):
+"Summarize this meeting."
 
 Typical result:
-- generic slogans
-- weak audience specificity
-- no channel assumptions
-- no risk notes
+
+- generic narrative summary
+- missing owners
+- missing deadlines
+- hidden unknowns
 
 Version B (structured prompt):
 
-- Role: Senior marketing strategist assistant
-- Context: Local services business targeting first-time buyers
-- Task: Draft three campaign concepts with messaging angle and channel mix
-- Constraints: Keep claims realistic; no invented customer data; include risks
-- Output Format: Concept summary, audience, channels, key message, risks
+- Role: Project coordination assistant
+- Context: Weekly internal meeting notes covering onboarding delays and handoff issues
+- Task: Convert notes into a review-ready action brief
+- Constraints: Use only the notes provided; do not invent commitments; mark unknown owners and deadlines as Unassigned
+- Output Format: 3-bullet summary, action table, open questions
 
 Typical result:
-- clearer audience targeting
-- more usable channel plans
-- explicit assumptions and risks
-- easier review discussion with team
+
+- clearer follow-up actions
+- explicit unknowns
+- easier manager review
+- faster decision readiness
 
 Human review process (required):
 
-1. Validate claims against actual offer and legal constraints.
-2. Check whether audience assumptions match known customer data.
-3. Select one concept and adapt wording to brand voice.
-4. Approve only after stakeholder review.
+1. Check that every action is grounded in the original notes.
+2. Confirm owners and deadlines before distribution.
+3. Remove or rewrite anything the AI inferred without evidence.
+4. Approve only after a human reviewer confirms the draft is fit for use.
 
 Practical lesson:
 
-AI improves speed and option generation. Human review protects quality, compliance, and accountability. The workflow advantage comes from combining both.
+AI is valuable because it speeds up drafting and structuring. Human review is valuable because it protects accuracy, accountability, and real-world judgment.
 
 ---
 
 ## 5. Common Mistakes
 
@@ -265,26 +345,35 @@
 
 ### Artefact Title
 AI Tool-Use Operating Checklist
 
 ### What the Learner Produces
-A one-page checklist covering:
+
+A one-page checklist covering:
 
 - when AI is appropriate for a task
 - what must be verified before using output
 - review depth by risk level
 - what requires mandatory human sign-off
 
 Starter template:
 
 1. Task Type
 2. Risk Level (Low / Medium / High)
 3. AI Role (Drafting / Summarizing / Analysis)
 4. Required Human Verification
 5. Final Decision Owner
+6. Unknowns Flagged (Yes / No)
+7. Safe-to-Share Status (Draft Only / Internal Reviewed / Approved External)
+
+Reference example:
+
+- `docs/course_assets/AI_ARTEFACT_EXAMPLES.md` -> AI Tool-Use Operating Checklist (T1M01)
 
 ### Why It Matters
-This artefact is immediately usable in real work. It demonstrates not just prompting skill, but responsible AI operating discipline.
+
+This artefact is immediately usable in real work. It demonstrates not just prompting skill, but responsible AI operating discipline.
 
 ---
 
 ## 7. Reflection Questions
 
@@ -300,5 +389,5 @@
 ## 9. Suggested Further Practice
 
 Pick one recurring weekly task and build a repeatable AI draft-plus-review workflow. Run it once, record what failed, and update your checklist.
```
