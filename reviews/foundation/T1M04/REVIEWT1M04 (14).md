# Course Module Feedback - Sam Kowalski - R13

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Sam Kowalski
Professional background: UX Researcher at a mid-size product company, Seattle. 5 years doing user interviews, usability studies, research synthesis, and translating messy data into design recommendations. Have ADHD (diagnosed) — executive function stuff is real for me, I thrive with structure and checklists.
Experience using AI tools: Moderate — use AI for research synthesis, pattern identification, interview transcription summaries, report drafting
Primary reason for taking this course: Productivity improvement — and honestly trying to figure out why AI sometimes gives me gold and sometimes gives me garbage

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Yes! Really immediately clear. "Structured prompting is the main control mechanism for AI output quality in professional workflows." That sentence answered a question I have literally been asking for months: WHY does AI sometimes produce exactly what I need and sometimes produce something I can't use at all? The answer is: the structure of the prompt. That's the variable I'm not controlling.

Okay I needed to sit with that for a second when I first read it. The answer is that I'M the variable? That felt slightly humbling but also extremely actionable. I can control a variable. I can't control AI behavior directly, but I can control my inputs.

**Do the learning objectives feel realistic?**

Yes. Apply the framework, diagnose weak prompts, produce predictable outputs. The word "predictable" is doing a lot of work here and it's the right word. Predictability is what I need. When I use AI for research synthesis, I need to know what I'm getting before I build my analysis around it.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Approachable and clear. Very much continues the quality of Module 1.3 in terms of language accessibility. No moments where I had to reread a sentence for comprehension. That matters a lot to me — when I'm reading for learning purposes, cognitive load from language comprehension competes with cognitive load from actual learning. This module keeps the language simple so I can focus on the concepts.

Rating (1–5):
Clarity of purpose: 5
Tone and readability: 5

Comments:

I want to say specifically: this module opens in a way that hooks me within two sentences. That doesn't happen often in training content. Usually I'm reading through an intro section trying to find where the actual learning begins. Here it begins immediately. Good.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

Yes — and specifically the failure-mode mapping is what made it stick for me.

This is something about how my brain works: I need to know WHY before I can remember WHAT. If you just give me a five-item list I will lose it by tomorrow. If you tell me each item in terms of the problem it solves, I have a hook. The RCTCO framework with failure-mode mapping per element is the difference between a forgettable checklist and a memorable problem-solving tool.

- Role prevents tone drift → I forget to define role constantly. I know now that when I get AI output in a generic "business writing" voice rather than a research-appropriate voice, that's the missing role.
- Context prevents irrelevant assumptions → When AI synthesizes my interview data and confidently includes things that weren't in the transcripts, that's missing context + no constraints. The model imported assumptions.
- Task prevents ambiguity → "Help me understand this data" is the worst task specification. Now I know.
- Constraints prevent hallucination and overreach → This is the element that directly addresses my biggest AI concern: the model confidently including things that weren't in my data. Explicit constraints ("use only information from provided transcripts," "flag anything that is an inference rather than a direct quotation") are the mechanism to prevent invented research findings.
- Output Format prevents rework → I have been accepting whatever format AI chose and then spending time restructuring it. That time is optional. I could have been specifying format from the start.

**Did any terminology feel confusing?**

"Output schema" vs "Output Format" — one appears in the weak-prompt patterns, the other everywhere else. Mild inconsistency.

"Downstream rework" is fine, I use this phrase.

"Probability space" — I understood it in context but it's slightly technical.

**Did the mental model make sense?**

Yes — and I want to specifically call out the "common weak-prompt patterns" as a gift. Reading that list was like reading a description of my own bad habits written by someone who had been watching me work. "Multi-goal prompts with no priority" — I have sent AI messages asking it to: synthesize the interview data AND identify key themes AND compare to previous round AND flag contradictions AND suggest design implications. That's five tasks. No wonder I get mediocre outputs across all five.

Knowing that this is a named pattern — and that it's fixable by prioritizing or separating tasks — is the kind of actionable insight that actually changes behavior.

**Was the explanation too long, too short, or appropriate?**

Appropriate. Each section earns its length. Nothing is padded, nothing important is missing.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 4
Usefulness of mental model: 5

Comments:

I need to specifically call out the "prompt design as workflow design" framing as important.

For someone with ADHD, blank-page paralysis is real. When I need to prompt an AI for a complex research synthesis task, I sometimes spend 15 minutes trying to figure out how to start. The RCTCO template completely solves this. Instead of staring at a blank text box trying to figure out what to write, I have five labeled fields to fill in. That's not a minor improvement — that's removing a major executive function barrier.

The template doesn't just make prompts better. For me, it makes prompting *possible* in a way it sometimes isn't when facing a blank page.

---

# 3. Demonstrations

**Did the examples feel realistic?**

The ops/SOP demo — converting meeting notes into a structured process document — is actually fairly close to some of my synthesis work. I often need to convert raw interview notes into a structured findings document. The principle translates.

The finance P&L demo — less directly applicable, but the data-handling constraints ("do not invent figures," "flag unclear data," "flag missing information") map directly to research contexts. In UX research, "do not invent participant responses" is the most important constraint I can write.

**Did the improved prompt clearly outperform the weak prompt?**

Yes. The contrast is dramatic and clear. The weak prompts are genuinely minimal — you can see immediately why they'd produce low-quality output. The improved prompts are complete work specifications.

**Did the explanation help you understand why the improvement worked?**

Yes. Analysis sentences are concise. "The improved prompt transforms unstructured notes into a review-ready process draft while exposing unknowns for human resolution" — that's a good description of what useful AI output looks like in a research context too: draft synthesis with gaps explicitly marked, not confident summaries with gaps hidden.

**Could you imagine applying this approach in your own work?**

Absolutely. During the exercise I rewrote my primary research synthesis prompt. The improvement was immediate and significant.

Rating (1–5):
Example realism: 4
Clarity of improvement: 5
Practical applicability: 4

Comments:

Neither demonstration is from a UX research, user research, or qualitative analysis context. For research professionals — a meaningful professional segment that uses AI heavily for synthesis and pattern-finding — seeing a demo with interview transcripts, theme identification, and research findings would be extremely direct.

I can translate from finance and ops, and the principles hold. But a research-context demo would have saved me the translation work and probably made the constraints element click even faster, because "do not invent participant voices" is the single most important research ethics constraint I can imagine.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. Select a real prompt, rewrite with five-part structure, run both, evaluate with the checklist.

**Did the instructions feel clear?**

Yes — and specifically the labeled template fields (Role / Context / Task / Constraints / Output Format) are exactly the structure I needed. This is a case where the scaffolding does real work. Without labeled fields I might have spent significant time figuring out the format. With them, I could focus on content.

The example output (product analyst for user interview summaries) is actually the closest thing to my work context in the entire module! User interview summaries are what I work with. Seeing that example made me want to immediately apply it to a real interview synthesis task, which I did.

**Did the evaluation checklist help you compare outputs?**

Yes. Five criteria gave me a systematic comparison framework. "Assumption transparency" is the criterion I cared most about — in research, the difference between an AI output that labels assumptions as assumptions and one that presents inferences as facts is the difference between useful analysis and misleading analysis.

What I did: rewrote my interview synthesis prompt. Old: "Here are my user interview transcripts. Summarize the key themes and what they mean for our design." New: role as UX research analyst synthesizing qualitative data, context about the product feature being researched and the user segment, task to identify three to five key themes with supporting evidence from transcripts, constraints to attribute all claims to specific transcripts and flag anything that is interpretation rather than direct evidence, output format with theme name / supporting quotes / interpretation / design implications sections.

The structured version gave me a themed analysis with transcript citations and explicit notes where I was making interpretive leaps. The unstructured version gave me a confident-sounding summary that mixed transcribed evidence with invented generalizations. In a research context, the second output is worse than useless — it looks authoritative but isn't.

**How long did the exercise actually take?**

Approximately 45 minutes. I spent extra time on Constraints because I wanted to get them right, and then I tested a second prompt because the first result was so good I wanted to see if the improvement was consistent.

Rating (1–5):
Instruction clarity: 5
Exercise usefulness: 5
Difficulty level: 2 for understanding / 4 for Constraints specifically

Comments:

I want to note that the template fields solved blank-page paralysis for me completely. When I started the exercise I was fully prepared to struggle with where to begin. Instead I had five fields to fill in and each one had a clear definition. The difficulty was content (figuring out the right Constraints), not form (figuring out how to structure the prompt). That's exactly the right distribution of difficulty.

The Constraints field is genuinely harder than the other four. Not because the concept is unclear, but because identifying the right constraints for a specific task requires predicting how the model might fail in ways you haven't experienced yet. That's a skill that develops with practice. A brief guidance note — "ask yourself: what could the model plausibly do wrong here, and what's the worst version of that failure?" — would help learners develop this skill more quickly.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

Yes. Marketing manager with generic AI output and team rewriting from scratch — this pattern is familiar across professional contexts. I've seen the same dynamic in research: someone asks AI to synthesize research data, gets a confident-sounding output that is mostly generic "user insights" with little connection to the actual data, and then spends hours trying to extract actual findings from it.

**Did it show how AI should be used responsibly?**

Yes. "Human review still owns final quality" is especially important in research contexts. AI synthesis should surface themes and patterns; human researchers should validate those patterns against the actual data. The governance principle is exactly right.

**Did it help connect the concept to real professional work?**

Yes. The outcome statement — better first drafts, faster review cycles, clearer assumptions, less cleanup — accurately describes what structured prompting produces in research synthesis work too. "Clearer assumptions" is the most valuable outcome for research: I need to know which parts of the synthesis are grounded in direct evidence and which are analytical inference.

Rating (1–5):
Scenario realism: 4
Practical value: 5

Comments:

The marketing scenario is fine. For my specific work, a research or analysis scenario would be more directly applicable. But the principle is clear and the translation isn't hard.

I appreciate that the Real-World Application stays consistent with the governance message from Module 1.3. Cross-module consistency matters — it shows that these aren't disconnected lessons but a coherent framework.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes. A Structured Prompt Library for UX research would be extremely useful — interview synthesis, theme identification, competitive analysis, usability findings summaries, research report outlines, participant recruitment screener questions, data pattern analysis. All of these are recurring tasks that benefit from structured, tested prompts.

**Could you realistically use this in your job or portfolio?**

Yes. Started during the exercise. Current list: interview synthesis, usability session analysis, theme clustering from qualitative data, competitive research summary, participant screener draft, research report outline, stakeholder presentation summary, design recommendation rationale. Eight already.

**Was the template sufficient to create the artefact?**

Yes. Seven-field template with Review Notes is exactly the right structure. The Review Notes field is especially important for research prompts — because research contexts change (different user segments, different product areas, different research questions), tracking what adjustments are needed for which contexts is genuinely useful.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 4

Comments:

For a UX researcher, a documented prompt library is actually a research practice artifact — it shows systematic, methodical approach to AI-assisted research. That's a professional differentiator.

One addition I'd find useful: a "Validation Notes" field where I can note how I verified the AI output against source material. In research contexts, prompt quality isn't the only quality factor — validation of AI synthesis is always necessary, and tracking validation method is good practice.

---

# 7. Emotional Learning Experience

Felt **immediately hooked** — the opening answered a question I'd been carrying for months.

Felt **slightly self-conscious and then relieved** when I read the common weak-prompt patterns list — seeing my habits described as common and fixable was reassuring.

Felt **genuinely excited** when I realized the template fields completely solve my blank-page paralysis problem. I didn't expect a UX benefit from this module but I got one.

Felt **productively frustrated** during Constraints — this is the skill I need to develop, and the module doesn't quite give me enough to develop it fully. I wanted more.

Felt **satisfied and a little surprised** at the end. The exercise produced synthesis output that was immediately more useful than my previous approach. The improvement was real and significant, which is the experience the module promises.

One thing worth noting: I found myself taking longer breaks during this module than usual because I kept stopping to apply something I'd just learned. That's a good sign — it means the content was actionable enough to interrupt the reading.

---

# 8. Time and Difficulty

Reading: 20 minutes (with pauses to take notes and try things)
Exercise: 45 minutes (tested two prompts)
Reflection: 15 minutes

Difficulty level: Easy-to-Moderate — the template is easy to understand; writing good constraints is harder than the other four elements

Was the estimated time accurate?

Yes. 80 minutes total, within the 75-120 minute range. If I'd spent more time with the prompt library I could have gone longer, which is appropriate.

Comments:

Time estimate is accurate. I was slightly slower than average because I was stopping to apply things in real time, which is the point. Learners who engage with this as a practical module rather than a reading module will be at the upper end of the time range.

---

# 9. Most Valuable Part

The labeled template fields in the exercise.

This is specific to my experience as someone with ADHD, but I suspect it generalizes to anyone who experiences blank-page paralysis. The template transforms "write a structured prompt" from an open-ended intimidating task into a form-filling exercise. Five fields with clear definitions. Fill them in. That's it.

The failure-mode mapping is the theoretical insight that makes the framework memorable. But the template is the practical tool that makes it usable. Both are necessary and both are excellent.

---

# 10. Weakest Part

Constraint-writing guidance.

The Constraints element is the most complex of the five to apply well, and it gets the least guidance. The module shows good constraint examples in both demonstrations and correctly flags vague constraints as problematic. But it doesn't give learners a method for generating constraints appropriate to a new task.

The question I had to figure out on my own: "What would the model plausibly do wrong in this specific context?" For a research synthesis task, the plausible failures are: inventing participant quotes, generalizing beyond what the data supports, conflating different participant segments, presenting interpretation as fact. Once I identified those, I could write constraints targeting each one.

That thinking process — "identify plausible failure modes → write constraints that prevent them" — should be in the module. It would significantly accelerate constraint development for learners approaching new task types.

---

# 11. Missing Content

Module is well-scoped. Specific additions:

1. **Constraint-writing framework.** As described above — the principle underlying good constraints, not just examples.

2. **UX research or qualitative analysis demonstration.** The exercise example (product analyst, user interview summaries) is close but not quite there. A full demonstration with research data synthesis as the task would serve research and analysis professionals directly.

3. **Prompt iteration guidance.** When the first structured prompt still doesn't produce the right output, what's the systematic approach? Random adjustment versus targeted diagnosis is the difference between iteration and luck.

4. **Chaining note.** One sentence on what prompt chaining is would help learners see where this is going.

5. **Note on AI tool variation.** Do structured prompts work differently across AI tools? A brief acknowledgment would help multi-tool users.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

This module gave me three things I didn't have before: a vocabulary for why AI outputs are inconsistent (missing structural elements), a template that solves blank-page paralysis (the labeled fields are a genuine accessibility win), and a clear understanding of why Constraints are the element that prevents the failure mode I care most about — invented research findings. For UX researchers using AI for synthesis, this module is essential. The exercise format — testing a real prompt, evaluating with a structured checklist — is the most effective learning activity in the course. I left with a prompt I'll use tomorrow and a library I'm actively building.

---

# Reviewer Summary

Module 1.4 answered the question I came into this course with — why is AI output inconsistent, and what's the variable I'm not controlling — and the answer is structural: without the five-part RCTCO framework, I'm leaving AI to fill in role, context, and constraints from its own training data, which produces generic and sometimes fabricated outputs. The Constraints element is the most critical for research contexts: "use only information from provided transcripts," "attribute all claims to specific sources," "flag any inference as interpretation rather than evidence" — these constraints are the difference between synthesis that supports valid design decisions and synthesis that looks authoritative but isn't grounded in the data. An unexpected benefit: the labeled template fields completely solved my blank-page paralysis around prompting, which I hadn't anticipated as a benefit and which may generalize to other learners with executive function challenges. What should be improved: constraint-writing guidance needs a principle stated explicitly ("identify plausible failure modes → write constraints that prevent them") because the Constraints field is the hardest element to populate for new tasks and the current guidance is examples-only; a UX research or qualitative analysis demonstration would reduce translation work for a large research/analysis professional segment. What should stay: the failure-mode mapping per element (this is why the framework is memorable, not just another checklist), the labeled template fields (accessibility win), the example output for the exercise (product analyst with user interview summaries is the closest thing to my context in the whole module), the seven-field prompt library template, and the cross-module consistency of the governance message — "human review still owns final quality" is exactly right for research contexts.
