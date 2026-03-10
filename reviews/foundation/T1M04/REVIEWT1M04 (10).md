# Course Module Feedback - Jordan Martinez - R09

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Jordan Martinez
Professional background: Independent management consultant, 11 years. Strategy, operations, and organizational design projects. Former Big 4, now solo. Billable hours are real money. Client deliverables must be professional-grade without a team behind me.
Experience using AI tools: Moderate-to-heavy — use Claude and GPT-4 for research synthesis, deliverable drafting, meeting prep, and client communication
Primary reason for taking this course: Productivity improvement — every hour saved is revenue or life

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Immediately. "Structured prompting is the main control mechanism for AI output quality in professional workflows." That's a thesis statement, not a preamble. I know what I'm getting from this module before the second sentence. Rare in training content.

**Do the learning objectives feel realistic?**

Yes. Apply the structure, diagnose weak prompts, produce workflow-ready outputs. Three objectives, achievable in the stated time, each with direct professional application. The third — "predictable, workflow-ready outputs" — is the commercial objective. If I can produce outputs I can put in front of clients without a complete rewrite, the module delivers value.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Professional and direct. Not academic. Reads like a consulting deliverable — structured, purposeful, no filler. I respect that.

Rating (1–5):
Clarity of purpose: 5
Tone and readability: 5

Comments:

Module 1.3 set the governance framework for AI use. Module 1.4 delivers the operating mechanism. That sequencing is right. This is the module that turns "careful AI use" into "productive AI use."

The "prompt design as workflow design" framing is exactly right for consultants. Every client deliverable has a production workflow. AI output that requires full restructuring before client delivery is not a workflow asset — it's a draft with additional handling cost. Structured output format is how you eliminate that cost.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

Yes. Five elements, each with a clear job and a specific failure mode it prevents:

- Role → prevents tone drift. Without role specification, AI writes for the generic professional, not the specific client context.
- Context → prevents irrelevant assumptions. No context = model imports assumptions I haven't validated.
- Task → prevents ambiguity. Vague ask = vague deliverable.
- Constraints → prevents hallucination and overreach. The commercial risk element.
- Output Format → prevents downstream rework. The efficiency element.

The failure-mode framing is the right approach. I don't need to know what each element *is* — I need to know what breaks if I omit it.

**Did any terminology feel confusing?**

"Output schema" appears once in the weak-prompt patterns list, "Output Format" everywhere else. Minor inconsistency — use one term throughout.

"Downstream rework" is natural for anyone with process or consulting experience.

**Did the mental model make sense?**

Yes. The five elements map to a specification template — same discipline I use when scoping a consulting engagement. Define the deliverable, establish the context, specify the constraints, define what "done" looks like. This module is applying project discipline to AI prompting.

**Was the explanation too long, too short, or appropriate?**

Appropriate and efficient. Concept section doesn't overexplain.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 5
Usefulness of mental model: 5

Comments:

The "common weak-prompt patterns" list was useful as an audit of my own practice:
- "Multi-goal prompts with no priority" — I have asked AI to summarize research AND identify key themes AND recommend frameworks AND draft an executive summary in a single prompt. The output was predictably mediocre across all four.
- "No rules for uncertainty handling" — significant gap. In consulting, the client needs to know what the analysis doesn't know. An AI output that presents uncertain conclusions with the same confidence as solid ones is a liability.
- "No output schema" — I've been producing structured output sometimes by luck, not design. Now I know to specify it explicitly.

The insight connecting constraints to hallucination prevention has direct commercial implications for consulting work. An AI output that invents a market statistic, cites a nonexistent precedent, or fabricates a regulatory requirement is not just wrong — it's a professional liability. Explicit constraints ("use only the research provided," "flag anything you cannot verify from the source material") are the mechanism to prevent this.

---

# 3. Demonstrations

**Did the examples feel realistic?**

The finance P&L summary demonstration is directly applicable to my work. I regularly need to synthesize financial data for client presentations — "review these numbers and tell me what matters" is almost verbatim how I've prompted for this. The improved version — explicit role, defined scope, don't-invent constraints, structured output with executive summary + metrics table + anomalies + follow-up questions — is exactly the output format I need for client deliverables.

The operations SOP demo is less directly applicable but the constraint mapping transfers: "preserve all controls from source notes, mark gaps rather than fill them, do not invent compliance requirements" = "use only provided research, flag gaps, do not fabricate supporting evidence." Same failure mode, different context.

**Did the improved prompt clearly outperform the weak prompt?**

Yes. The before/after contrast in both demonstrations is categorical, not marginal. The weak prompts are genuinely vague — "analyze these figures," "turn these notes into a process document." The improved prompts are complete work specifications. Any consulting project manager would recognize the structured prompts as appropriate scope documentation.

**Did the explanation help you understand why the improvement worked?**

Yes. The analysis sentences are appropriately brief. "The improved prompt defines role, scope, and format, producing output suitable for management review" — that's the correct characterization of what makes AI output client-ready.

**Could you imagine applying this approach in your own work?**

Already done it. During the exercise I restructured my standard research synthesis prompt. Client-facing deliverable quality improved on the first test.

Rating (1–5):
Example realism: 5
Clarity of improvement: 5
Practical applicability: 5

Comments:

Both demonstrations are practically relevant for consulting-adjacent work. The finance demo is the more directly applicable one — financial data synthesis is a standard consulting deliverable.

One gap: no demonstration from a strategy or management consulting context specifically. Competitive analysis, market sizing, stakeholder communications, or executive summary drafting are common AI use cases for consultants that neither demo covers. Minor — the principles transfer — but a strategy context demonstration would have landed directly.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. Select a real prompt, rewrite with five-part structure, run both, evaluate with the checklist.

**Did the instructions feel clear?**

Yes. Labeled template fields, example output for calibration, clear evaluation criteria. The exercise is well-scoped.

One practical observation: the exercise assumes AI tool access. For a solo practitioner working in a client-supervised environment with AI use restrictions, the exercise may require planning. Recommending that learners confirm tool access and appropriate use policy before beginning would prevent a practical obstacle.

**Did the evaluation checklist help you compare outputs?**

Yes. Five criteria with numerical scoring gave me a systematic comparison:

My test case: a competitive landscape summary prompt for a client project. Old prompt: "summarize the competitive landscape for [company] based on this research." New prompt: role as strategy analyst for management consulting deliverable, context about the client company and target market, task to synthesize competitive positioning from provided research, constraints to use only provided research and flag gaps rather than infer market position, output format with overview / key competitors / positioning analysis / gaps and uncertainties.

The structured output was client-deliverable on first pass. The unstructured version required significant editing to remove inferred claims and restructure for client context. Structured version scored 5/5 on structural usability and 5/5 on assumption transparency. Unstructured version scored 2/5 on structural usability and 1/5 on assumption transparency.

"Assumption transparency" is the criterion that matters most in consulting deliverables. Clients need to know what the analysis knows versus what it infers.

**How long did the exercise actually take?**

Approximately 35 minutes. I moved efficiently — had a prompt ready and a clear use case in mind.

Rating (1–5):
Instruction clarity: 5
Exercise usefulness: 5
Difficulty level: 2

Comments:

The Constraints field is where the real skill development happens. I found myself asking "what would the model plausibly do wrong in this specific context?" — which is exactly the right question but not one the module explicitly teaches you to ask. That question should be in the constraint-writing guidance.

The exercise result validated the module's claim directly. I will not need to convince myself that structured prompting works — I observed it.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

Yes. Marketing manager with broad prompt, generic output, team rewriting from scratch — this is the AI adoption failure pattern I warn clients about in digital transformation projects. The pattern is universal: "adopt AI" without "adopt prompting discipline" = labor substitution, not productivity gain.

**Did it show how AI should be used responsibly?**

Yes. "Structured prompts reduce waste and improve decision readiness, but human review still owns final quality" — correct and important. In client delivery contexts, human review is not optional. This module's practical skill is compatible with that governance requirement.

**Did it help connect the concept to real professional work?**

Yes. The five-step structured prompt for marketing concepts is a clean application of the full framework. The outcomes — better first drafts, faster review cycles, clearer assumptions and risks, less cleanup before decision meetings — are the ROI metrics that justify AI investment in any professional context.

"Less cleanup before decision meetings" is exactly the value proposition I use with clients. If AI saves 2 hours of senior-person time per deliverable, and I produce 20 deliverables per engagement, that's 40 hours — a week of capacity. That's not marginal, that's transformative for a solo practitioner.

Rating (1–5):
Scenario realism: 5
Practical value: 5

Comments:

The marketing scenario is well-chosen as a cross-functional example — everyone in a professional role has worked with marketing outputs or similar content deliverables. The five-step structured prompt demonstrates the complete framework without needing a specialized domain.

The outcome framing — "better first drafts, faster review cycles, clearer assumptions" — is also the language I need when advising clients on AI adoption. This is the productivity case for structured prompting made in measurable terms.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes. A Structured Prompt Library with 8+ prompts, full five-part structure, and reliability notes is a professional AI workflow specification. For a solo consultant, this is a core operational tool — the difference between running each engagement with tested, predictable AI prompts versus starting from scratch each time.

**Could you realistically use this in your job or portfolio?**

Yes. Already building. Starting with: competitive analysis synthesis, stakeholder interview synthesis, executive summary drafting, client communication draft, project status report, meeting notes to action items, strategy memo structure, market sizing summary. That's eight.

Adding: scope definition document, issue analysis framework, engagement debrief summary.

**Was the template sufficient to create the artefact?**

Yes. Seven-field template is well-designed. "Review Notes" field is essential — prompts for consulting deliverables need ongoing calibration as project context evolves, and tracking what was adjusted and why is professional practice.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 5

Comments:

For a consultant, a well-documented, tested prompt library is a productivity infrastructure investment that compounds over time. A library covering my top 15 recurring deliverable types represents 15 workflow improvements that pay dividends on every engagement.

I'd add a "Client Context Sensitivity" field — some prompts are general (stakeholder synthesis), others need client-specific calibration (competitive analysis in a specific industry). Knowing which is which helps me maintain the library appropriately.

---

# 7. Emotional Learning Experience

Felt **immediately engaged** — this module answered the question I've been sitting with since Module 1.1: how do I actually control AI output quality at a level that makes the output usable for client work?

Felt **commercially motivated** during concept explanation — the failure-mode per element is not academic. Constraints preventing hallucination is not a theoretical concern; it's a professional liability consideration that I need to manage on every engagement.

Felt **productive** during the exercise — I was building something I'll use tomorrow, not practicing a skill I might use eventually. That's the right kind of exercise.

Felt **validated** at the conclusion — the module confirms that the discipline I've been trying to impose on AI interactions intuitively has a systematic basis. I've been approximately right, but without the framework to be consistently right. Now I have the framework.

No confusion or frustration with the content itself. My only moment of friction was with the Constraints field, which required more careful thought than the other four elements — appropriate difficulty.

---

# 8. Time and Difficulty

Reading: 18 minutes
Exercise: 35 minutes
Reflection: 10 minutes

Difficulty level: Easy — the framework is intuitive for someone with project management or process documentation background

Was the estimated time accurate?

Yes. 63 minutes total, within the lower end of the 75-120 minute range. I read quickly and had prompts ready to test. Learners who need to find a suitable prompt to rewrite may take longer.

Comments:

Efficient module. The concept section earns its length, the exercise is exactly the right scope. No sections that should be shorter or longer.

For a solo practitioner evaluating time investment: this module has an immediate positive ROI. The exercise alone produced one improved prompt that will save time on my next engagement. That payback is faster than any formal training I've done.

---

# 9. Most Valuable Part

The failure-mode mapping, specifically Constraints → prevents hallucination and overreach.

For consulting work, the most dangerous AI output is not wrong — it's confidently wrong. An AI that invents a market statistic, misquotes a regulation, or fabricates a case study precedent is a professional liability. Explicit constraints ("use only the research provided," "flag any claim you cannot verify from source material," "do not invent precedents") are the technical mechanism to prevent this.

Before this module I was using general AI awareness to manage this risk. Now I have a specific structural tool.

---

# 10. Weakest Part

Constraint-writing guidance.

The module shows excellent constraint examples in both demonstrations and correctly identifies vague constraints as a failure mode. But it doesn't explain the principle behind effective constraints.

What I worked out through the exercise: good constraints target specific plausible failure modes for the task type. "Do not invent figures" targets hallucination in data contexts. "Flag unclear or missing data" targets overreach in analysis contexts. "Preserve all controls from notes" targets omission in documentation contexts. The principle is: identify what the model might plausibly do wrong in *this specific task type*, and write a constraint that explicitly prevents it.

That principle should be stated in the module. Without it, learners are copying examples rather than developing a transferable skill.

---

# 11. Missing Content

Module is well-scoped.

Additions that would add direct value:

1. **Strategy or management consulting demonstration.** Competitive analysis, stakeholder synthesis, or executive summary drafting — high-frequency AI use cases for a significant professional segment not covered by finance and ops demos.

2. **Constraint-writing principle.** The underlying mechanism ("target specific plausible failure modes") needs to be stated explicitly.

3. **Prompt iteration note.** First structured prompt is often not final. Brief guidance on systematic prompt iteration — what to adjust when output is still off — would help.

4. **Chaining preview.** One sentence on what prompt chaining means in the later modules.

5. **Tool and access note for enterprise contexts.** For consultants working in client environments with AI use restrictions, a note about confirming appropriate tool access would be professionally responsible.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

This is the module that converts "AI awareness" into "AI productivity." The five-part RCTCO structure with failure-mode justification per element is the operating framework for professional AI use — not a vague principle but a specific technical discipline with measurable output quality implications. For solo practitioners and consultants specifically: the prompt library artefact converts individual learning into a compounding productivity asset across engagements. The exercise produces immediate, personally validated evidence that structured prompting works. The module delivers commercial ROI on first application.

---

# Reviewer Summary

Module 1.4 resolved my core operational challenge with AI for client deliverables — the RCTCO framework with failure-mode justification per element gave me the systematic discipline I'd been trying to impose intuitively, and the Constraints element in particular is the professional liability mechanism I needed: explicit constraints preventing hallucination and overreach are how you make AI output defensible in a client-facing context, not just adequate. The exercise produced a competitive analysis prompt rewrite that was client-deliverable on first pass — the most direct measure of module success possible. The prompt library is already at eight entries and growing into a core operational tool. What should be improved: constraint-writing needs its underlying principle stated explicitly — the module shows examples but doesn't articulate that good constraints target specific plausible failure modes for the task type; a strategy or consulting-context demonstration would reduce the translation work for a large professional segment; a prompt iteration note would address the case where the first structured prompt still needs refinement; and tool access guidance for enterprise/client-supervised environments should be added. What should stay: the failure-mode mapping per element (the module's core teaching and it's excellent), both demonstrations, the professional takeaway that preserves Module 1.3's governance principle, the exercise format requiring real-prompt testing, and the seven-field prompt library template with Review Notes — this is a professional productivity infrastructure investment, not just a training artefact.
