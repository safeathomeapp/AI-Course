# Course Module Feedback - David Okonkwo

**Module Reviewed:** T1M01 - Introduction to AI as a Tool
**Date:** 2026-03-08

---

# Reviewer Background

**Name:** David Okonkwo

**Professional background:** Operations Manager at a regional logistics company, 320 employees. Manage daily operations across 3 warehouse locations with 12 direct supervisors. Been in ops and supply chain for 19 years. Responsible for $8M annual operational budget, process improvement, safety compliance, and quarterly reporting to VP of Ops.

**Experience using AI tools:** Beginner — and skeptical about it.

Company required "AI Readiness" training 6 weeks ago. I have a chatgpt account. I've used it maybe 8-10 times total, mostly to test whether it knows anything useful about warehouse ops. It didn't impress me. Gave me textbook answers that any experienced supervisor already knows. Still "exploring" as directed by leadership, which in practice means taking this course.

**Primary reason for taking this course:**
- [ ] curiosity
- [x] career development (VP mandate — complete by Q2)
- [x] productivity improvement (TBD — need to see proof)
- [ ] portfolio building
- [ ] other

**Additional context:** Reviewing this Sunday evening. Had an ops incident last week (still dealing with fallout), Q4 budget variance conversation with CFO on Thursday, and one supervisor resignation in my inbox. Course is getting my attention but not my full attention. I'm evaluating this partly for myself and partly for whether it's worth recommending to my team of 12 supervisors. That's the real question. 96+ person-hours of team time is a serious investment. Need to see the ROI before I recommend anything.

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Yes. And I'll say this — the opening is better than I expected.

"AI is a tool, not an authority." That's the first sentence. Good. That's actually the correct framing and I appreciate that it leads with it rather than leading with hype. I've sat through vendor pitches that opened with "AI is going to revolutionize your operations" and I tune out immediately. This didn't do that.

The purpose is clear: learn to use AI deliberately with human review built in. I can work with that premise.

**Do the learning objectives feel realistic?**

Mostly. The third objective — "apply a practical human-review process before acting on AI output" — is the one that matters most to me as a manager. That's what I need my supervisors to do. Whether they can get there in one module is another question, but the objective itself is right.

**Does the tone feel:**

Professional and practical — for the first half. The section on "why this tool is suddenly everywhere" starts drifting toward the kind of AI-positive narrative I've heard before. Not hype exactly, but not as grounded as the opening.

Rating (1–10):
Clarity of purpose: 8/10
Tone and readability: 7/10

**Comments:**

Good opening. The "fluency is not evidence" line is one I'm going to use — that's exactly the problem I saw when I tested chatgpt on warehouse cost reduction questions. Fluent answers. Wrong answers. Or rather — generic answers that don't account for my actual operational constraints.

The tone mostly holds up. My one flag: a couple of places where it drifts toward enthusiasm about AI's potential without the equivalent weight on risk. For someone like me who's been burned by oversold tech before, that imbalance registers.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

Yes — the core concept is clear and I don't dispute it. The mental model lays it out logically:

Prompt → Context Window → Probability Engine → Output → Human Review → Decision

What I appreciate is that Human Review is an explicit step, not an afterthought. That's operationally correct. Any process that produces an output should have a verification stage before that output drives a decision. We do this in warehouse ops constantly — a system generates a count, a supervisor verifies before we act on it. Same principle.

The "what AI is weak at" section is the most useful part of this concept section for my purposes. "High-stakes policy, legal, or compliance final decisions" and "accountability for outcomes" — that's exactly where I need clear rules for my team.

**Did any terminology feel confusing?**

"Context window" is used without a plain definition. I figured it out from context but it shouldn't require guessing. One sentence would fix it.

The rest is fine. The language is accessible enough for a non-technical manager.

**Did the mental model make sense?**

Yes. Clean, logical, easy to remember. I can see using this as a framework when I talk to my supervisors about how AI fits into our SOPs. The six steps give you a structure to hang the conversation on.

**Was the explanation too long, too short, or appropriate?**

Some sections are tighter than others.

- The strengths/weaknesses lists: exactly right. Short, scannable, actionable.
- The "why this tool is suddenly everywhere" section: too long and too historical. Don't need the pre-LLM versus search engine comparison. Cut it.
- The hallucination explanation: appropriate length, and the point matters.

Rating (1–10):
Concept clarity: 8/10
Terminology accessibility: 7/10
Usefulness of mental model: 8/10

**Comments:**

The beginner failure pattern section is the strongest part of Section 2.

> User asks vague question → AI gives confident answer → User assumes correctness → Output used without verification → Error appears later in business workflow.

That's not a theoretical failure — that's a live risk in my operations right now. I have supervisors who are starting to use AI tools for shift reports and scheduling suggestions. I guarantee some of them are in that failure pattern already and don't know it.

The corrected pattern is equally useful:

> Define role, context, task, constraints, format → Get structured draft → Check facts, assumptions, and audience fit → Approve, edit, or reject → Human owns decision.

If I can get my team to operate the second pattern consistently, that's the actual value here. The question I still have — and the course hasn't answered yet — is what does that workflow look like specifically for warehouse operations? Inventory variance reports? Delivery exception summaries? Safety incident documentation? Generic examples only get you so far.

---

# 3. Demonstrations

**Did the examples feel realistic?**

Realistic as business use cases. Relevant to my role — not really.

Operations/admin onboarding documentation: adjacent to things my team does, but the company described (12-person company, customer support) is far removed from 3-warehouse logistics. Finance P&L summary: occasionally relevant, but I have finance staff for that.

Neither example is warehouse ops. Neither is logistics. Neither involves the kinds of decisions my supervisors actually make on the floor.

**Did the improved prompt clearly outperform the weak prompt?**

Yes — the contrast is obvious and the principle is sound. "Write our onboarding process. Make it good." versus the structured version with Role, Context, Task, Constraints, and Output Format — no contest.

The finance example is the stronger of the two for my purposes. "Do not invent numbers" and "distinguish facts from interpretation" are exactly the constraints I would need in any operations context. Those constraints are doing real work.

**Did the explanation help you understand why the improvement worked?**

The analysis after each example is brief but accurate. The three-point breakdown for the finance prompt — blocks fabricated numbers, separates facts from interpretation, creates format for decision meetings — is good concise analysis. That's the kind of framing I can actually use.

**Could you imagine applying this approach in your own work?**

Yes, with translation required. The framework clearly applies. The examples don't map directly.

Let me be specific: if I were using this for my work, I'd want to see a prompt for something like — "Summarize this week's inventory variance data and flag anything that needs investigation before the Monday morning ops meeting." That's a real task. I'd use that. The finance P&L example is the closest thing here but it's still a generic small business scenario.

Rating (1–10):
Example realism: 5/10
Clarity of improvement: 9/10
Practical applicability: 6/10

**Comments:**

The principle is solid. The examples are the problem. Two examples, both in office-based professional contexts, neither in operations, logistics, manufacturing, or any industry where the cost of error is physical — not just financial.

What's at stake when AI gets something wrong in an office is a bad email or a flawed report. What's at stake in my environment is incorrect inventory counts, unsafe procedures, or delivery failures that hit customers. The stakes are different. The examples should reflect that variation exists.

Not a fatal flaw — the framework transfers. But I'd be more confident recommending this to my supervisors if they saw themselves in at least one example.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Clear enough. "Turn one vague prompt into a structured prompt. Compare outputs. Evaluate."

**Did the instructions feel clear?**

Yes. The five-field structure (Role / Context / Task / Constraints / Output Format) is logical and the steps are numbered. No ambiguity.

**Did the evaluation checklist help you compare outputs?**

The five criteria are useful — Clarity, Structure, Assumptions, Missing Information, Usefulness for Decision Making. That last one is the right final question. "Can a manager act on this safely?" — yes, that's the bar.

I'd add a sixth criterion: Verification Required. What specifically needs to be checked before this output is used? That's the operational discipline question and it's missing from the checklist.

**How long did the exercise actually take?**

About 20 minutes. I didn't run both prompts in AI — I evaluated the principle from the module's own examples rather than generating new ones. I'll be honest about that. When I'm doing this between Sunday dinner and bedtime with a full inbox, I'm assessing the framework, not doing every step of the exercise.

Rating (1–10):
Instruction clarity: 8/10
Exercise usefulness: 6/10
Difficulty level: 3/10 (Easy — concept is straightforward)

**Comments:**

The exercise is fine for the individual learner. My concern is a management-level one: this exercise assumes the person completing it will be the one writing prompts. In my team structure, that may or may not be accurate. I need to know how to evaluate what my supervisors are doing with AI — not necessarily how to write prompts myself. The exercise is individual-contributor oriented.

Not a criticism of the exercise as designed. Just noting the audience gap. A manager version — "evaluate whether a subordinate's AI output is suitable for use" — would be more relevant for people at my level.

---

# 5. Real-World Application

**Did the scenario feel realistic?**

As a scenario, yes. As a scenario relevant to my role — no. Marketing campaign development is about as far from warehouse operations as you can get.

I understand the choice. Marketing is widely relatable. But the human review process described — validate claims, check audience assumptions, select concept, stakeholder review — is generic enough that I could translate it. The translation effort is real though.

**Did it show how AI should be used responsibly?**

The human review checklist at the end is the strongest part of this section. Four specific steps, starting with validation against real constraints and ending with stakeholder approval. That's the right structure.

"Approve only after stakeholder review" — good. That's how it should work.

**Did it help connect the concept to real professional work?**

Partially. It connects the concept to real professional work in a marketing context. For my context — operations management, warehouse supervision, logistics — it's theoretical until I do the translation myself.

Rating (1–10):
Scenario realism: 4/10
Practical value: 6/10

**Comments:**

Let's be realistic: Module 1 gives you one real-world scenario. It chose marketing. Marketing is not where the risk is highest when AI gets something wrong. A scenario involving inventory analysis, safety documentation, or compliance reporting would demonstrate higher stakes and different risk management considerations.

Not asking for a logistics-specific course. But if you have one scenario to show, picking the domain where consequences of AI errors are highest would make the point about human review more compellingly than a campaign brief scenario.

That said — the structure of the scenario itself is good. Before/after comparison, explicit review checklist, clear lesson. Solid approach, wrong domain for my audience.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes — and this is the section I was most pleasantly surprised by.

An "AI Tool-Use Operating Checklist" is essentially a risk assessment framework for AI use. That's something I actually need — not just for my own use, but for team deployment. If I can give my supervisors a clear checklist for when AI is appropriate and what must be verified before output is used, I can manage AI adoption as a controlled process rather than a free-for-all.

**Could you realistically use this in your job or portfolio?**

Yes. I'd adapt the template to cover specific task types my supervisors deal with — shift handover summaries, inventory discrepancy reports, customer exception documentation. The five fields in the template are the right fields for that purpose.

This is the artefact I'd present to my VP as evidence that AI adoption on my team is structured and risk-managed. That has real value in my situation.

**Was the template sufficient to create the artefact?**

Sufficient as a starting point. Risk Level (Low / Medium / High) needs more guidance — what makes an ops task "High" risk? Is anything safety-adjacent automatically High? Is anything customer-facing at least Medium? A brief note on risk classification would strengthen the template.

Rating (1–10):
Practical usefulness: 8/10
Portfolio value: 7/10

**Comments:**

Best section of the module for a manager audience. The checklist is an immediately deployable governance tool, not just a personal learning exercise. I can see building a team version of this as part of how I introduce AI to my supervisors — here's the process, here's the checklist, here's what requires sign-off.

One addition I'd suggest: a "Red Line" field. Tasks that should never be delegated to AI under any circumstances. Making that explicit in the artefact gives it real operational teeth.

---

# 7. Emotional Learning Experience

**At any point did you feel confused?**

No. The content is clear and well-structured.

**At any point did you feel overwhelmed?**

No.

**At any point did you feel bored?**

Yes — "Why this tool is suddenly everywhere." I don't need the history of automation to use AI better. Pre-LLM versus search engines versus generative models — I already know AI is new and different. That section adds time without adding value for me.

**At any point did you feel confident?**

Cautiously. The opening section earned my respect, which is not a given. I came in with my skepticism on high, and the tone of the module didn't trigger it the way a lot of AI content does. It doesn't oversell. That matters.

**At any point did you feel excited to try the idea?**

The portfolio artefact section — yes. I can see a concrete application for my specific situation. That's the first moment in the module where I thought "okay, this is worth my Sunday evening."

**Comments:**

Came in skeptical, left cautiously positive. That's about the best outcome you could get from me on a first module. The module earned it mostly by doing what the opening promised — treating AI as a tool with limits, not a solution to everything. If that tone holds through the rest of the course, I'll keep going.

---

# 8. Time and Difficulty

**Actual time spent on the module:**

Reading: ~22 minutes (skimmed the historical context section)
Exercise: ~20 minutes (evaluated framework without running prompts)
Reflection: ~8 minutes

Total: approximately 50 minutes

**Difficulty level:**

Easy

Content is accessible. Concepts are not difficult. Framework is logical.

**Was the estimated time accurate?**

The 60-90 minute estimate is accurate for someone doing the exercise fully. I came in under by doing a manager-level evaluation rather than a hands-on prompt-writing exercise. If I were training a team, I'd want them to do the full exercise — so the estimate is right for that purpose.

**Comments:**

50 minutes of focused time on a Sunday evening is acceptable. If the content holds up and delivers on the artefact promise, I can justify recommending this for my team. Each of my 12 supervisors at 60-90 minutes = 12-18 hours total. Need to be confident that's a good investment before I make that call.

Module 1 is a reasonable preview. Withholding full judgment until I've seen what the rest of the course does.

---

# 9. Most Valuable Part

**What was the single most useful idea in this module?**

The beginner failure pattern — and its contrast with the correct pattern.

**Why:**

It describes exactly what I'm watching happen in my team right now without my having put clear language to it. Supervisors asking vague questions, getting confident-sounding answers, and acting on them without verification. That's a live operational risk, not a theoretical one.

Having the failure pattern and the corrected pattern written out explicitly gives me a framework I can use immediately — in a Monday morning team briefing, in a new SOP for AI use, in a conversation with my VP about why we need governance around AI deployment rather than just individual adoption.

This is the kind of thing I can actually use. Most of the module builds toward it. Worth including.

---

# 10. Weakest Part

**What section should be improved the most?**

"Why this tool is suddenly everywhere."

**Why:**

Doesn't serve the module's stated purpose. The module's job is to help me use AI deliberately with human review built in. Explaining the history of automation doesn't contribute to that goal. The comparison between pre-LLM automation, search engines, and generative models adds context that I don't need to apply the framework.

This section is aimed at someone who needs to be convinced that AI matters. For a manager who's been told to complete AI training by Q2, that case is already made. What I need is not the justification — I need the operating model.

Cut this section or move it to optional reading. Put the time back into the demonstration section and add an operations use case.

---

# 11. Missing Content

**Did the module assume knowledge you did not have?**

No — but it assumed context I don't share.

The examples are office-based: onboarding documentation, financial analysis, marketing campaigns. I manage warehouse operations. The gap isn't about knowledge — it's about domain relevance. The module doesn't assume I know supply chain logistics, but it also never acknowledges that my context exists.

**If yes, what additional explanation would help?**

Three specific gaps:

1. **Operations/logistics examples.** Even one worked example in a warehouse, manufacturing, or supply chain context would significantly increase relevance for the 20-30% of potential course participants in operational roles.

2. **Manager-level guidance.** There's nothing here about how to think about AI adoption at a team or department level. How do I evaluate whether a tool is suitable for my team? How do I build governance around AI use? How do I protect my operation from errors introduced by AI output my supervisors don't verify? These are manager questions and the module doesn't answer them.

3. **Vendor evaluation framework.** I've been pitched three AI tools in the last 6 months and had no framework to assess any of them. This course teaches me how to use AI well — but doesn't give me tools to evaluate whether an AI tool is worth implementing. That's a real gap for someone in my role.

---

# 12. Final Evaluation

**Overall usefulness of this module:**

1 2 3 **4** 5

Four — for individual use. Solid foundation, good framework, appropriate tone. The artefact is genuinely useful.

If the question is whether I'd deploy this to my team: need to see more of the course first. Module 1 earns a conditional yes. It's a stronger start than I expected.

**Would you recommend this module to a colleague?**

- [x] Maybe

**Why:**

Depends on the colleague. For a peer manager in operations or logistics, I'd say "worth looking at, but the examples don't match your domain — you'll need to translate." For someone in a more office-based analytical role, I'd say it's probably more directly applicable.

I'd recommend it to my supervisors with the caveat that they'll need to apply the framework to their specific context, because the module doesn't do that for them.

The conditional here is the examples. If there were one worked scenario in an operations or warehouse context, I'd move from "maybe" to "yes" for my team without hesitation.

---

# Reviewer Summary

T1M01 starts with the right principle — AI is a tool that requires human verification, not an authority to be trusted without review — and largely holds that line throughout, which is more than I expected. The mental model is clean, the failure pattern analysis is immediately applicable to my situation, and the portfolio artefact is the first thing in this module I can use directly in my management role as a governance tool for team AI deployment. What should be improved is straightforward: the "why AI is everywhere" historical section is wasted time for a working manager who doesn't need to be sold on AI's relevance; the examples are all office-based and none are in operations, logistics, or any context where AI errors have physical or safety consequences; and there is no content addressing how a manager evaluates, deploys, or governs AI adoption for a team, which is the actual decision most managers in this course are facing. What should stay unchanged is the tone — it is pragmatic without being dismissive, and it doesn't treat AI as a magic solution, which is the main reason I kept reading.

---
