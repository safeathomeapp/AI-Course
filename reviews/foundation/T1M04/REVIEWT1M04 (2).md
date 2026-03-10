# Course Module Feedback - Marcus Chen - R01

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Marcus Chen
Professional background: Senior Operations Analyst, 14 years in supply chain and inventory management. Run monthly performance reporting, manage demand forecasting, coordinate with procurement. Excel is my primary tool. Use ChatGPT for formulas, data analysis support, and drafting operational narratives.
Experience using AI tools: Moderate — improving after this course
Primary reason for taking this course: Productivity improvement

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Yes, immediately. "Structured prompting is the main control mechanism for AI output quality in professional workflows." That's a direct, testable claim and it's right. I've had too many ChatGPT interactions where I asked a vague question and got a vague answer, and I didn't understand why. Now I do — I was underspecifying the prompt and the model was filling the gaps with generic language.

**Do the learning objectives feel realistic?**

Yes. Apply the five-part structure, diagnose weak prompts, produce more predictable outputs. All achievable. The third one — "workflow-ready" outputs — is specifically what I need. I need AI to give me tables and structured reports I can plug into my monthly ops deck, not narrative paragraphs I have to reformat.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Professional and practical. This is the module that feels most like it was written by someone who actually uses AI in real work, not just theorizes about it.

Rating (1–5):
Clarity of purpose: 5
Tone and readability: 9/10

Comments:

This module is the one I've been building toward since Module 1.1. Everything in the earlier modules — understanding how LLMs work, the allocation framework — has been setting up for this: here's how to actually control what the model gives you. The payoff is real.

The "prompt design as workflow design" section is a particularly good framing. Structured output isn't just aesthetically nicer — it's operationally necessary. If I'm going to use AI output in a management report, I need it in a format that can be reviewed and validated efficiently. A narrative paragraph is useless for that. A table with required fields is usable immediately.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

Yes. The five-part structure — Role, Context, Task, Constraints, Output Format — is clean, memorable, and immediately applicable. I've been roughly doing 2-3 of these elements intuitively, but not all five consistently, and not with explicit attention to what each one solves. Now I understand the mechanism behind each element.

**Did any terminology feel confusing?**

"Output schema" in the common weak-prompt patterns section — that phrase is slightly jargony. The rest of the module calls it "Output Format" which is clearer. Minor inconsistency worth fixing.

"Probability space" in the "why structure improves reliability" section — usable but slightly technical for non-technical readers.

**Did the mental model make sense?**

Yes. Each element solves a specific failure mode — that framing is exactly how I think about process controls in operations. Role → tone drift. Context → irrelevant assumptions. Task → ambiguity. Constraints → hallucination and overreach. Output Format → downstream rework. This is a root cause / control matrix. I love it.

**Was the explanation too long, too short, or appropriate?**

Appropriate. The concept section is well-scoped. I wanted slightly more on Constraints specifically — what makes a good constraint vs. a vague one? "Make it better" is given as a bad example, but I'd benefit from 2-3 examples of strong, specific constraints in a data/analytics context.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 4
Usefulness of mental model: 10/10

Comments:

The "common weak-prompt patterns" list is one of the most useful things in this module. "Multi-goal prompts with no priority" — yes, I do this. "No output schema" — yes. "Requests for everything in one pass" — guilty. Seeing my failure patterns listed explicitly made the concept personal before I even got to the exercise.

Bottom line: this is the most practically useful concept in the course so far and I'm already thinking about how to restructure five or six prompts I use regularly.

---

# 3. Demonstrations

**Did the examples feel realistic?**

Both demonstrations are directly relevant to my work. The finance P&L summary demo is exactly the kind of monthly reporting I do — "Review these numbers and tell me what matters" is a prompt I have essentially run verbatim. The improved version (structured, with explicit constraints not to invent figures, flagging missing data, output with executive summary + metrics table + anomalies + follow-up questions) is transformative.

The ops/SOP demo is also relevant — I occasionally need to convert meeting discussions into documented procedures. The improved version preserving controls, marking missing prerequisites, structured five-section output — that's clean process documentation I could use immediately.

**Did the improved prompt clearly outperform the weak prompt?**

Yes, dramatically. The before/after contrast is the clearest in the course so far. The weak examples are two-sentence requests that could mean almost anything. The improved examples are complete work specifications.

**Did the explanation help you understand why the improvement worked?**

Yes. The analysis sentences are appropriately brief. "The improved prompt defines role, scope, and format, producing output suitable for management review" — accurate and direct.

**Could you imagine applying this approach in your own work?**

Already did it. Before finishing the module I rewrote my monthly variance report prompt and tested it. The structured version gave me a metrics table with explicit data gaps flagged — exactly what I needed and had never gotten from the unstructured version.

Rating (1–5):
Example realism: 5
Clarity of improvement: 5
Practical applicability: 5

Comments:

Both demos hit for me. The finance demo is probably the most directly applicable example I've seen in this course. The ops/SOP demo adds a second domain that's also relevant.

One gap: there is no data analysis or Excel-specific demo. Given that I and many people like me use AI primarily for structured data work — pivot table analysis, formula generation, demand forecasting narrative — a demonstration showing the structured prompt for data analysis would have been directly applicable rather than requiring translation. I constructed my own parallel, but I shouldn't have to.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. Select a prompt that gives inconsistent results, rewrite it with the five-part structure, run both versions, evaluate with the checklist. Clear and well-scoped.

**Did the instructions feel clear?**

Yes. The suggested structure template (Role/Context/Task/Constraints/Output Format as labeled fields) is exactly the scaffolding I needed. The example output (product analyst assistant, 15 user interview summaries) was a helpful reference, though not in my domain.

**Did the evaluation checklist help you compare outputs?**

Yes. Scoring each output on clarity, structural usability, assumption transparency, constraint compliance, and decision usefulness gave me a systematic way to compare the two versions rather than just a subjective "this one seemed better."

The three follow-up questions were also valuable: "What improved most after structuring?" — structural usability, by a significant margin. "Which constraint had the biggest impact?" — "Do not invent figures" combined with "Flag unclear or missing data." "What still requires human validation?" — the interpretation of anomalies and the root cause analysis.

**How long did the exercise actually take?**

About 40 minutes. I tested two prompts rather than one — a monthly variance report prompt and a supplier performance summary prompt. Both benefited significantly from the structured approach.

Rating (1–5):
Instruction clarity: 5
Exercise usefulness: 5
Difficulty level: 3

Comments:

The exercise is excellent because it's not hypothetical — you're working with a real prompt from your real workflow. The comparison is immediate and concrete. I've recommended this format to my team as a quick way to audit their AI use.

One addition that would help: guidance on how to write constraints that are specific enough to be effective. "Make it better" is flagged as a bad example, but for someone new to this framework, writing a good constraint requires practice. Two or three annotated examples of weak vs. strong constraints would accelerate the learning.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

Yes. Marketing manager using AI for campaign concepts — broad prompt, generic output, team rewrites from scratch. I've seen this exact pattern in my own work (different function, same dynamic).

**Did it show how AI should be used responsibly?**

Yes. The five-part structured prompt for marketing concepts — role as strategic analyst, defined audience and business goal, three distinct concept request, constraints blocking unsupported claims, required output format — is a clean application.

**Did it help connect the concept to real professional work?**

Yes, though it's a marketing scenario rather than ops/finance. The principle is identical. The outcome statement — "better first drafts, faster review cycles, clearer assumptions and risks, less cleanup before decision meetings" — is the language I need to use when I explain this to my manager.

Rating (1–5):
Scenario realism: 4
Practical value: 5

Comments:

The professional takeaway — "structured prompts reduce waste and improve decision readiness, but human review still owns final quality" — is the correct closing statement for this module. It maintains the governance principle from Module 1.3 while adding the productivity value that Module 1.4 introduces.

Would have preferred an ops or finance scenario here to match the module's own demonstrations. The marketing scenario works as a principle illustration but adds a third domain without landing specifically in my work context.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes. A Structured Prompt Library with 8+ prompts across two domains, with use case, full five-part structure, example output format, and reliability notes — this is a legitimate professional productivity asset. It's the kind of thing I'd have in my SharePoint as a reusable reference.

**Could you realistically use this in your job or portfolio?**

Already building it. Started during the exercise with my variance report and supplier performance prompts. Adding 6 more this week.

**Was the template sufficient to create the artefact?**

Yes. Seven-field template (Use Case / Role / Context / Task / Constraints / Output Format / Review Notes) is the right structure. The "Review Notes" field for reliability notes after testing is a particularly smart addition — it makes the library a living document rather than a one-time exercise.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 5

Comments:

This is the most operationally valuable artefact in the course. A well-populated Structured Prompt Library across my key work domains — variance reporting, supplier performance analysis, demand forecasting narrative, ops procedure conversion — is something I can hand to a new team member as part of onboarding. That's genuine organizational value.

One suggestion: add a "Date Created / Last Tested" field. Prompts sometimes need revision as AI tools update. A date field enables maintenance discipline.

---

# 7. Emotional Learning Experience

Best module in the course. No hesitation.

Felt **immediately engaged** — the first two paragraphs connected directly to frustrations I've had with AI outputs for the past year and a half.

Felt **validated** during the concept explanation — I've been doing parts of this intuitively without knowing why some prompts worked better than others. Now I understand the mechanism.

Felt **genuinely useful** during the exercise — I was building something I'll actually use, not practicing a skill in isolation.

Felt **satisfied** at the end in a way that earlier modules didn't quite deliver. This is the module where everything clicks.

Minor moment of **wanting more** on constraints specifically — that's the element I feel I understood least well by the end, and I wanted more guidance on constraint quality.

---

# 8. Time and Difficulty

Reading: 22 minutes
Exercise: 40 minutes (tested two prompts)
Reflection: 10 minutes

Difficulty level: Easy to Moderate — the concepts are accessible; writing good constraints for the exercise is slightly harder than it looks.

Was the estimated time accurate?

Yes. 72 minutes total, within the 75-120 minute range. Could easily spend more time building the prompt library, which is appropriate since that's the ongoing deliverable.

Comments:

Well-paced module. The exercise is the right level of effort — substantial enough to produce a real result, focused enough that it doesn't become a two-hour project within the module.

---

# 9. Most Valuable Part

The five-element structure with each element mapped to the failure mode it solves.

Specifically: Output Format → reduces downstream rework. That insight changed how I think about every AI interaction. I've been accepting whatever structure the AI chose to give me. Now I know that specifying the output format in the prompt is how I get output I can use in a workflow rather than output I have to reformat.

---

# 10. Weakest Part

The constraint-writing guidance. The module correctly identifies "vague constraints such as 'make it better'" as a common mistake, but the positive guidance on what makes a strong constraint is thin. The finance demo shows three good constraints ("Do not invent figures," "Flag unclear or missing data," "Keep language plain"). The ops demo shows three more. But the conceptual guidance on what makes a constraint effective vs. vague is underdeveloped.

A dedicated half-page on constraint quality — with three or four annotated examples of weak constraints rewritten as strong ones — would significantly strengthen this element.

---

# 11. Missing Content

Module is well-scoped. No missing prerequisites.

What would add significant value:

1. **Data analysis and Excel-specific demonstration.** AI for formula debugging, structured data analysis, or tabular reporting is a major use case that neither demonstration addresses.

2. **Constraint quality guidance.** As above — more depth on what makes constraints effective.

3. **Prompt iteration guidance.** The exercise focuses on one rewrite. In practice, you often need 2-3 iterations. Brief guidance on systematic prompt iteration — rather than just random adjustment — would be useful.

4. **Chaining note.** The module mentions that prompts can be "chained into complete workflows" in later modules but doesn't say what chaining is. A one-sentence preview would help learners understand where this is going.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

This is the module where the course delivers its core value proposition. The five-part RCTCO structure is the practical skill that every AI user in professional work needs, and the exercise forces you to apply it to your actual workflow rather than a hypothetical example. The prompt library artefact is a genuine professional asset. Any analyst, manager, or professional who uses AI tools for work outputs would benefit directly and immediately from this module.

---

# Reviewer Summary

Module 1.4 is the strongest in the course — the five-part structure with each element explicitly mapped to the failure mode it solves is the clearest and most actionable framework in four modules, the finance and ops demonstrations are directly relevant to my work, and the exercise produced two real prompt rewrites I'm already using in my monthly reporting workflow. The prompt library artefact is the most professionally valuable deliverable in the course. What should be improved: constraint-writing guidance is underdeveloped — the module correctly flags vague constraints as a failure mode but doesn't give enough positive guidance on what makes a constraint effective; a data analysis or Excel-specific demonstration would serve the large analytics/ops professional audience that is currently underrepresented in the module's examples. What should stay: the failure-mode mapping for each prompt element (this is the conceptual core of the module and it's excellent), the "prompt design as workflow design" framing, both demonstrations, the exercise format, and the seven-field prompt library template — particularly the "Review Notes" field, which transforms the library from a static document into a living professional tool.
