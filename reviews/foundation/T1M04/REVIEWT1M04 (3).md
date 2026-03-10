# Course Module Feedback - Riley Thompson - R02

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Riley Thompson
Professional background: Junior software developer, 2 years post-bootcamp. mostly frontend react work, some node. use ai constantly — cursor is basically my IDE now, copilot for everything else. also use claude api directly for some personal projects.
Experience using AI tools: Heavy — daily use across multiple tools
Primary reason for taking this course: Skill building — want to level up beyond "just vibes" prompting

---

# 1. First Impression

**Does the purpose of the module feel clear?**

yeah immediately. "structured prompting is the main control mechanism for AI output quality" — that's just true. i've been doing something like this intuitively for months with cursor system prompts and still getting inconsistent results. finding out there's an actual framework for it is kind of a relief.

**Do the learning objectives feel realistic?**

yes. apply the five-part structure, diagnose weak prompts, produce predictable outputs. tbh the third one is the one i care about most — predictable is the word. i don't need perfect AI outputs, i need *consistent* ones that i can build workflows around.

**Does the tone feel approachable, professional, confusing, or overly technical?**

approachable and practical. it's not dumbed down but it's also not trying to be academic. reads like documentation written by someone who actually uses the tools they're documenting.

Rating (1–5):
Clarity of purpose: 9/10
Tone and readability: 8/10

Comments:

ngl i came in half-expecting this to be stuff i already knew repackaged with jargon. it wasn't. the failure-mode framing is new and useful — i've been doing role and task intuitively but basically ignoring constraints as a distinct element. that's been my bug.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

yes. the RCTCO breakdown is clean. each element has a clear job:

- Role — tells model what perspective/voice to use
- Context — gives the model accurate ground state instead of guessing
- Task — specific deliverable (not "help me with X")
- Constraints — explicitly bounds what the model should NOT do
- Output Format — structure that fits your downstream workflow

the failure-mode per element is the key insight. i've been thinking about prompts as "more information = better" but the real mechanism is "targeted constraints = predictable output." different mental model.

**Did any terminology feel confusing?**

"output schema" appears once in the weak-prompt patterns list but the module calls it "output format" everywhere else. schema is a database term, it's not wrong, but it's inconsistent. pick one.

"downstream rework" is fine, i use that phrase.

"probability space" is accurate and i knew what it meant but it's a little technical for non-dev readers.

**Did the mental model make sense?**

yes. constraints reduce hallucination and overreach — this maps directly to my experience. when i prompt for code without constraints, the model sometimes generates approaches that "work" but violate architectural decisions i made earlier that it doesn't know about. that's overreach. explicit constraints fix it.

**Was the explanation too long, too short, or appropriate?**

appropriate. concept section is well-paced. i read faster than average and it still felt calibrated, not padded.

Rating (1–5):
Concept clarity: 10/10
Terminology accessibility: 8/10
Usefulness of mental model: 10/10

Comments:

the "common weak-prompt patterns" list is really useful. "multi-goal prompts with no priority" — guilty. "no rules for uncertainty handling" — this is the one that bites me most. when i ask the model to explain a codebase section and it doesn't know something, i need it to say "i'm not sure about this part" not "here's a confident but wrong explanation." adding "flag anything you're uncertain about" as a constraint changes output quality significantly.

"prompt design as workflow design" is the framing that clicked for me. i build features. prompts feed into features. if my prompt output is unstructured, i have to write transformation code to make it usable. structured output format in the prompt = no transformation layer needed. that's real engineering efficiency.

---

# 3. Demonstrations

**Did the examples feel realistic?**

the finance P&L demo — less directly relevant to my work, but the principle is clear. summarizing structured data with explicit constraints on what to not invent is directly applicable to any data-heavy task.

the ops/SOP demo — more interesting. converting unstructured notes into a structured document is something i do when writing technical specs and sprint retrospectives. the constraint "do not invent compliance requirements" maps to "do not invent API behavior / do not invent business requirements" in my context. same failure mode.

**Did the improved prompt clearly outperform the weak prompt?**

yes. the before/after contrast is clear and dramatic — the weak prompts are genuinely bad (two words, no specification), the improved ones are complete work specs. the principle is obvious from the comparison.

**Did the explanation help you understand why the improvement worked?**

yes. analysis sentences are concise and accurate. "transforms unstructured notes into a review-ready process draft while exposing unknowns for human resolution" — that's the right description of a useful AI output vs a completed artifact that hides gaps.

**Could you imagine applying this approach in your own work?**

immediately. i rewrote my default "explain this code" prompt before finishing this section. old prompt: "explain what this function does." new prompt: role as senior code reviewer, context as the specific codebase and tech stack, task to explain the function's purpose and contract, constraints to flag anything uncertain rather than guess, output format with purpose / inputs-outputs / edge cases / potential issues sections.

the difference in output quality was immediate.

Rating (1–5):
Example realism: 7/10
Clarity of improvement: 9/10
Practical applicability: 8/10

Comments:

the gap i want to flag: neither demonstration is from a software development context. finance and ops/admin are fine for illustrating the principle but there's no code-focused demo showing:

- structured prompt for code review / refactoring
- structured prompt for debugging (context = error + stack trace + relevant code, constraints = don't refactor unless asked, output format = root cause / fix / explanation)
- structured prompt for technical documentation

this isn't a blocker — i can translate the principle — but dev/technical users have to do extra work to see the direct application. given that devs are a major AI tool user segment, a technical demo would serve a lot of learners.

---

# 4. Guided Exercise

**Was the task easy to understand?**

yes. select a real prompt that gives inconsistent results, rewrite with the five-part structure, run both, evaluate with the checklist. clear.

**Did the instructions feel clear?**

yes. the labeled template fields (Role / Context / Task / Constraints / Output Format) are useful scaffolding. the example output (product analyst with user interview summaries) isn't my domain but the format is clear enough to adapt.

**Did the evaluation checklist help you compare outputs?**

yes. five criteria — clarity for intended audience, structural usability, assumption transparency, constraint compliance, decision usefulness — gave me a systematic way to compare rather than just a gut feel.

"assumption transparency" is my favorite criterion. the model should surface its assumptions, not hide them in confident language. this is the constraint i most often forget to include.

what actually happened: i rewrote my "debug this error" prompt. old: paste error message, ask for fix. new: role as senior backend developer familiar with node/express, context including the specific error, stack trace, and what i was trying to do, task to identify root cause and provide fix, constraints to flag if the fix requires changes outside the error location, output format with root cause / fix / explanation / potential side effects. the structured version caught a case where the obvious fix would have broken an unrelated route — it flagged this explicitly. the unstructured version just gave me the fix.

**How long did the exercise actually take?**

about 30 minutes. moved fast, i had prompts ready to rewrite and a clear workflow for testing.

Rating (1–5):
Instruction clarity: 9/10
Exercise usefulness: 10/10
Difficulty level: 2

Comments:

exercise was straightforward for someone who already uses AI heavily. the friction was in writing good constraints — not in understanding the structure. identifying what the model might plausibly do wrong for a specific task is a skill that takes practice. the module gives examples but not a framework for developing this skill.

one thing i added to my evaluation: i noted which part of the output would break my downstream workflow if it was wrong. that's the constraint i missed. "what breaks if the model gets this wrong" → write constraint preventing that.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

yes. marketing manager, vague prompt, generic output, team rewrites from scratch. this is the standard enterprise AI failure mode. i've seen this in my own team when people use AI for tickets and specs without structured prompts — you get generic language that the PM has to completely rewrite.

**Did it show how AI should be used responsibly?**

yes. "structured prompts reduce waste and improve decision readiness, but human review still owns final quality" — correct and appropriately placed after a module that could easily oversell AI capability.

**Did it help connect the concept to real professional work?**

yes. the five-step structured prompt for the marketing scenario shows the complete framework in application. outcome statement — better first drafts, faster review cycles, clearer assumptions, less cleanup — translates directly to dev workflows (better PR descriptions, clearer ticket acceptance criteria, faster code review cycles).

Rating (1–5):
Scenario realism: 8/10
Practical value: 9/10

Comments:

the marketing scenario works as an illustration. it's not my domain but the failure mode is universal — vague prompt → generic output → rework. that pattern exists everywhere.

would have been stronger to show a technical scenario. "software engineer using AI for documentation with an unstructured vs structured prompt" — same principle, more direct for a significant chunk of the learner audience. minor note.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

yes. structured prompt library with 8+ prompts across two domains, with full five-part structure and reliability notes — this is essentially a personal AI workflow specification. for devs this is a goldmine: code review prompts, debugging prompts, documentation prompts, refactoring prompts, PR description prompts, all tested and ready.

**Could you realistically use this in your job or portfolio?**

already doing it. started during exercise. current list: debug this error, explain this codebase section, write PR description from git diff, refactor this function, generate unit test cases, write technical documentation, summarize meeting notes to tickets, draft sprint retrospective summary.

that's eight. going to add: convert acceptance criteria to implementation tasks, write changelog entry from commits.

**Was the template sufficient to create the artefact?**

yes. seven-field template is clean. "review notes" field is the right addition — it means i can track when a prompt needed adjustment after testing, which is useful maintenance info.

Rating (1–5):
Practical usefulness: 10/10
Portfolio value: 9/10

Comments:

for a developer the prompt library is immediately useful as a team resource — shared prompts for common dev tasks means consistent output quality across the team, which is exactly what you want when AI is generating PR descriptions and documentation that other developers review.

one addition i'll make: a "model-specific" field noting whether the prompt was tested on GPT-4, Claude, Copilot, etc. prompt behavior varies across models and knowing where a prompt was validated matters.

---

# 7. Emotional Learning Experience

felt **validated** immediately — the RCTCO framework is basically what i've been trying to do with system prompts, just without the explicit structure or vocabulary for it. having a named framework makes it easier to think about and communicate.

felt **genuinely surprised** by the failure-mode framing — i knew each element was useful but hadn't mapped each one to the specific problem it prevents. that mapping is more useful than i expected.

felt **practical focus** throughout — this module is about doing things, not understanding things, and i'm a doer. no part dragged.

felt **minor frustration** at the demo domain mismatch — neither demo is from software/dev context and i had to do translation work. not a big deal but noticeable.

felt **immediately productive** during exercise — this is the first module where i was building something for actual work use while completing the training activity. that's the right kind of engagement.

---

# 8. Time and Difficulty

Reading: 15 minutes
Exercise: 30 minutes
Reflection: 10 minutes

Difficulty level: Easy — i had relevant background that made everything click fast

Was the estimated time accurate?

yes, within range. i was on the fast end (55 minutes total) because i move quickly through concept sections and had clear prompts ready to test.

Comments:

the time estimate probably assumes readers who are newer to AI tools. for daily heavy users the concept section will be faster. the exercise is the right length for everyone — you get out what you put in, and building a real prompt library takes as long as it takes.

---

# 9. Most Valuable Part

the failure-mode mapping per element.

specifically: constraints → prevents hallucination and overreach. this gave me the vocabulary for a failure mode i'd been experiencing but couldn't articulate. when i ask the model to implement a feature and it invents an approach that conflicts with existing architecture — that's overreach. explicit constraints prevent it. now i know how to fix it systematically, not just by being lucky with prompt phrasing.

---

# 10. Weakest Part

no systematic guidance on how to write good constraints.

the module identifies "make it better" as a bad constraint (vague). it shows good constraints in both demos — "do not invent figures," "flag unclear data," "preserve all controls from notes." but there's no conceptual explanation of what makes a constraint effective.

the underlying principle seems to be: good constraints are specific about what the model should NOT do, grounded in plausible failure modes for that task type. "don't invent" is good because hallucination is a plausible failure. "be accurate" is bad because it doesn't identify a specific failure mode to prevent.

that principle isn't stated anywhere in the module. it needs to be.

---

# 11. Missing Content

module is solid. what would add value:

1. **software development / technical demonstration.** code review, debugging, or documentation prompt — one example from a dev context would serve a large portion of AI tool users without them having to translate from finance/ops.

2. **constraint-writing framework.** as above — conceptual basis for identifying good constraints, not just examples.

3. **prompt iteration guidance.** first draft of a structured prompt is often not final. what's the systematic approach when the structured prompt still doesn't produce the right output? the module covers zero-to-structured but not structured-to-better. a brief note on prompt iteration would help.

4. **model variability note.** prompt behavior varies across AI tools. a brief note that prompts may need adjustment when switching between models (GPT-4, Claude, Copilot, etc.) would be useful for multi-tool users.

5. **chaining preview.** "chained into complete workflows" is mentioned but not explained. what does chaining mean? one sentence would help.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

this is the module where "using AI" becomes "engineering AI workflows." the five-part structure is the tool i've been missing for converting ad hoc prompting into reproducible process. for devs specifically: every prompt you write for code review, debugging, documentation, or spec generation is a workflow spec — structured prompting is just software engineering applied to AI interactions. the exercise produces real artifacts you use the next day. that's the standard all training should meet.

---

# Reviewer Summary

Module 1.4 formalized what i'd been doing intuitively with cursor system prompts into a clean, nameable framework — the RCTCO structure with failure-mode justification for each element is exactly the conceptual scaffolding missing from my prompting practice, and the constraints element in particular identified a specific gap (i was writing role, context, and task but underspecifying constraints, which is why i kept getting overreach in code generation). the exercise produced a real debugging prompt rewrite i deployed immediately and the prompt library is already up to eight entries covering core dev workflows. what should be improved: a software development or technical demonstration would serve dev users without requiring translation from finance/ops examples; constraint-writing needs a conceptual framework not just examples — the principle that good constraints target specific plausible failure modes is never stated; prompt iteration guidance would help users whose structured prompt still needs refinement; model variability should be flagged. what should stay: the failure-mode mapping per element (this is the core teaching and it's tight), the "prompt design as workflow design" framing, the exercise format requiring real prompt testing, the seven-field prompt library template with review notes, and the terminology consistency except for the one "output schema" slip in the weak-prompt list that should be fixed.
