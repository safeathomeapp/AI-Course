# Course Module Feedback - Linda Ramirez - R14

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Linda Ramirez
Professional background:  Customer Service Manager at a regional utility company, Phoenix, Arizona.  Supervise 22 customer service representatives.  Responsible for team scheduling, performance reviews, training, complaint escalation, and regulatory correspondence.  32 years in customer service roles, the last 11 in management.
Experience using AI tools: Beginner — was asked by my director to evaluate this course; have never used an AI tool independently
Primary reason for taking this course: Departmental evaluation — my director asked me to assess whether this course is appropriate for our team

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Yes.  The opening sentence was very easy to understand: structured prompting is the main control mechanism for AI output quality.  I understood this to mean that if I learn to write prompts correctly, I will get better results from AI.  That is a straightforward claim and it held my attention.

I will admit that "structured prompting" sounded technical to me before I began reading.  By the end of the first section, I realized it simply means writing a well-organized request.  That is something I already know how to do in my work — writing clear instructions for my team is part of my daily job.

**Do the learning objectives feel realistic?**

Yes.  The three objectives are specific and clearly stated.  I believe they are achievable for someone in my position.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Approachable and professional.  This module continues the accessible quality of Module 1.3, which I had commented on favorably.  The language is clear without being condescending.

Rating (1–5):
Clarity of purpose: 5
Tone and readability: 5

Comments:

I want to note for the designers that this module opens in a way that is welcoming for readers who come to AI with apprehension.  The first sentence makes a clear and direct promise.  The language is plain.  I did not feel that I was being asked to learn something beyond my capability.  This is not always my experience with technology-related training content.

---

# 2. Concept Explanation

**Does the explanation help you understand the concept?**

Yes.  The five elements — Role, Context, Task, Constraints, Output Format — are each explained clearly with a reason for using them.  That reason-based explanation is what made this section work for me.

I copied the following into my notes:
- Role prevents tone and perspective drift
- Context prevents irrelevant assumptions
- Task prevents ambiguity
- Constraints prevent hallucination and overreach
- Output Format prevents downstream rework

Knowing what each element prevents helps me remember to include it.  If I only knew what each element was, I might forget it.  Knowing what breaks without it gives me a reason to remember.

**Did any terminology feel confusing?**

"Output schema" appears once in the weak-prompt patterns list.  The rest of the module uses "Output Format."  I paused on "schema" — it is not a word I use regularly — and then continued because the surrounding sentence made the meaning clear.  Using "Output Format" consistently would be an improvement.

"Downstream rework" — I understood this from context to mean having to fix the output before you can use it.  It is somewhat business-jargon-y but not confusing.

"Hallucination" — I had learned this term in Module 1.2 and I am glad the module uses it here, because it reinforces the connection between why AI invents things and how constraints prevent it.

**Did the mental model make sense?**

Yes.  I particularly appreciated the list of common weak-prompt patterns:

- "Multi-goal prompts with no priority" — I have not used AI tools yet, but I recognize this pattern from how I sometimes write unclear team communications.  Asking for too many things at once produces confusion.  This is the same problem.
- "Missing audience definition" — In customer service, knowing your audience is essential.  I train my team on this constantly.  I would not have thought to apply the same principle to AI requests.
- "No output schema for downstream work" — I had not considered specifying the format of a response.  This was a new idea for me.

**Was the explanation too long, too short, or appropriate?**

Appropriate.  I read more slowly than some reviewers and found the section well-paced throughout.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 4
Usefulness of mental model: 5

Comments:

The observation that "prompt design is workflow design" was meaningful to me from a management perspective.  In my work, I write scripts and templates for my customer service representatives so that their responses are consistent regardless of which representative handles a call.  Structured prompting is the same idea applied to AI — a clear template produces consistent results across uses.

If I eventually deploy AI tools on my team, standardized structured prompts would be the mechanism for ensuring consistent output.  That is a management principle I understand.

---

# 3. Demonstrations

**Did the examples feel realistic?**

The operations and administration demonstration — converting meeting notes into an SOP draft — is directly relevant to my work.  I hold regular team meetings and afterward I write up meeting summaries and procedure changes.  Converting meeting notes into a documented procedure is something I do manually.  Seeing that an AI tool could assist with this was genuinely useful.

The weak prompt example ("Turn these notes into a process document") is exactly how I would have approached this before reading this module.  I recognize that phrasing as my own natural approach.

The finance and bookkeeping demonstration is less directly applicable to my daily work, though I do sometimes assist with financial reporting for our department budget.  I understood the principle.

**Did the improved prompt clearly outperform the weak prompt?**

Yes.  The difference between the two-sentence weak prompt and the full structured prompt is very clear.  I could see exactly why the structured version would produce a better result — it tells the AI what perspective to use, what the situation is, what to produce, what not to do, and what the document should look like.  That is simply more useful information.

**Did the explanation help you understand why the improvement worked?**

Yes.  The analysis sentences are brief and clear.

**Could you imagine applying this approach in your own work?**

Yes.  The SOP conversion demonstration is the most directly applicable to my role.  I wrote a draft structured prompt for a complaint escalation procedure document during the exercise.  I was satisfied with how it came out.

Rating (1–5):
Example realism: 5
Clarity of improvement: 5
Practical applicability: 4

Comments:

The two demonstrations are appropriate and well-chosen.  For customer service or call center management, a demonstration showing AI assistance with complaint response templates, escalation documentation, or shift handoff summaries would be even more directly relevant.  But the SOP conversion demonstration is close enough that I was able to translate it to my context without difficulty.

I want to note that the improved prompt in the SOP demonstration includes the constraint "Do not invent compliance requirements."  In a utility company context, regulatory compliance is significant and this constraint is exactly the kind of guardrail I would need to include for any AI-assisted documentation.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes.  The instructions are clear: select a real prompt, rewrite it with the five-part structure, run both versions in an AI tool, evaluate the results with the checklist.

I do need to note that I have not yet used an AI tool independently.  I was not certain which tool to use or how to access one for practice purposes.  The exercise assumes that learners have tool access, but for some participants in a corporate deployment, that access may require IT approval or setup.  A brief note about which tools are suitable for practice, and how to access them, would have helped me plan the exercise in advance.

I worked through the exercise using a tool that my director set up for me for this evaluation.

**Did the instructions feel clear?**

Yes.  The labeled template fields — Role, Context, Task, Constraints, Output Format — made the exercise very manageable.  I had been concerned about where to start, but having named fields to fill in removed that concern.

The example output for the product analyst prompt helped me understand what a complete structured prompt looks like.

**Did the evaluation checklist help you compare outputs?**

Yes.  Having five specific criteria to evaluate helped me compare the outputs systematically rather than relying entirely on my own impression.

I found "constraint compliance" to be the most important criterion for my purposes.  For customer service and regulatory correspondence, it matters very much that AI output stays within the information I provided and does not add claims or requirements I did not authorize.

My exercise: I wrote a structured prompt for drafting a complaint response letter.  Role as customer service correspondence specialist for a regulated utility, context about the type of complaint and the relevant service issue, task to draft a professional complaint response letter, constraints to use only the information provided and not to make commitments or service promises not included in my notes, output format with acknowledgment / explanation / resolution / next steps.  The structured version was nearly ready to send with minor editing.  The unstructured version ("Write a response to this customer complaint") produced a letter that made two specific service commitments I had not authorized and would not have been appropriate.

That comparison was instructive.

**How long did the exercise actually take?**

Approximately 55 minutes.  I am methodical by nature and I spent time on each field of the template.

Rating (1–5):
Instruction clarity: 4
Exercise usefulness: 5
Difficulty level: 3

Comments:

The exercise was more manageable than I had anticipated.  The template fields reduced my uncertainty about how to begin.  I was pleased with the result.

The Constraints field took the most time.  I had to think carefully about what the AI might include that I had not authorized and that could cause problems.  For regulatory correspondence, this is not a hypothetical concern — unauthorized service commitments in a utility complaint letter can have real consequences.

I would benefit from more guidance on how to identify the right constraints for a specific task.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

Yes.  A manager receiving generic AI output and having to rewrite it before it is usable — this is a pattern I can recognize and want to avoid.  In customer service, output consistency matters.  Generic AI responses that do not match our standards would cause more work for my supervisors, not less.

**Did it show how AI should be used responsibly?**

Yes.  The professional takeaway — "structured prompts reduce waste and improve decision readiness, but human review still owns final quality" — is exactly the governance principle I will need to apply if my department adopts AI tools.  AI outputs will need human review before any customer-facing use.  This is not optional in a regulated utility environment.

**Did it help connect the concept to real professional work?**

Yes.  The five-step structured approach for the marketing scenario demonstrates the complete framework in a professional context that I could follow clearly.

Rating (1–5):
Scenario realism: 4
Practical value: 5

Comments:

The marketing scenario is accessible and the principle translates to customer service without difficulty.  I would find a customer service or regulatory correspondence scenario more directly applicable, but this did not present a comprehension barrier.

The outcome statement — better first drafts, faster review cycles, clearer assumptions, less cleanup — accurately describes the benefit I experienced in my exercise.  The structured complaint response was significantly closer to ready than the unstructured one.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes.  A Structured Prompt Library for customer service management would be a practical reference tool.  If I am going to use AI to assist with complaint response letters, escalation procedure documents, shift handoff summaries, performance review drafts, or regulatory correspondence templates, having tested, structured prompts ready for each task would save significant preparation time.

**Could you realistically use this in your job or portfolio?**

Yes.  I am planning to begin my library with: complaint response letter, escalation procedure document, team meeting summary, performance review narrative, schedule communication, regulatory correspondence draft, training materials outline, and monthly reporting summary.  That is eight.

**Was the template sufficient to create the artefact?**

Yes.  The seven-field template — Use Case, Role, Context, Task, Constraints, Output Format, Review Notes — is clear and complete.  I particularly appreciate the Review Notes field because prompts may need adjustment for different types of complaints or different regulatory situations, and tracking those adjustments will be useful.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 4

Comments:

For a department manager evaluating AI for team deployment, the prompt library has value beyond individual use.  If I eventually deploy AI tools to my customer service representatives, standardized structured prompts would help ensure consistent output quality across the team.  The individual library I am building now could become a department resource later.

I would add a field for "Approved for Team Use" to distinguish prompts that have been reviewed and approved for representative use from those that are still in development or manager-only.

---

# 7. Emotional Learning Experience

Felt **cautious but curious** at the beginning — the word "structured" made this sound technical, but the opening section quickly made clear it was about writing clear instructions, which is something I already do.

Felt **recognition** when reading the common weak-prompt patterns — I recognized the pattern of asking for too many things at once, even though I have not yet used AI tools.  This is a communication principle I already know.

Felt **settled** when I saw the labeled template fields for the exercise — having a form to fill in rather than a blank page to approach was the right scaffolding for me.

Felt **genuinely concerned** at first when the exercise produced a letter with unauthorized service commitments in the unstructured version.  That was a clear demonstration of why constraints are important, and it reinforced my instinct to proceed carefully with AI in regulated contexts.

Felt **satisfied** when my structured prompt produced a complaint response letter that was nearly ready to use.  That was the practical proof I needed.

Felt **cautiously optimistic** about AI deployment at the end of this module.  I came in skeptical.  I am leaving with a clear mechanism for governing AI use responsibly.  That is a meaningful shift.

---

# 8. Time and Difficulty

Reading: 25 minutes
Exercise: 55 minutes (methodical, two prompts tested)
Reflection: 15 minutes

Difficulty level: Moderate — the concept is accessible; the Constraints field and the tool access setup required more time and thought

Was the estimated time accurate?

Yes, at the upper end.  95 minutes total.  The exercise took longer because I set up my tool access and tested two prompts rather than one.

Comments:

The time estimate is accurate for a careful, methodical reader approaching this module as a formal evaluation.  Learners who already have AI tool access and move more quickly through reading may complete it toward the lower end of the range.

I would recommend that learners confirm AI tool access before beginning this module.  The exercise requires live testing and tool setup time is not included in the estimate.

---

# 9. Most Valuable Part

The failure-mode mapping for each element — specifically, learning that Constraints prevent hallucination and overreach.

In my exercise, the unstructured prompt produced a complaint response letter with unauthorized service commitments.  That is exactly the overreach the module describes.  The model did not have constraints telling it not to make commitments I had not authorized, so it made them.  Adding that constraint prevented the problem completely.

Understanding this connection — constraint → prevents overreach → protects my department from unauthorized commitments — is the most directly useful thing I have learned in this course for my professional context.

---

# 10. Weakest Part

The guidance on writing effective constraints.

The module shows good constraint examples in both demonstrations and correctly identifies vague constraints as a problem.  But it does not give enough guidance on how to identify the right constraints for a new task.

When I wrote constraints for my complaint response prompt, I had to think carefully about what the AI might include that I had not authorized.  I arrived at the right constraints, but it took more time and uncertainty than I would have liked.  Some guidance — even a simple checklist of questions to ask ("What could the AI add that I have not authorized? What would cause problems if it appeared in the output?") — would have made this process easier.

---

# 11. Missing Content

The module is well-organized and accessible.  I have a few suggestions:

1. **Customer service or regulated industry demonstration.**  The SOP conversion is the closest to my work, but a demonstration specifically showing AI assistance with complaint response letters, escalation documentation, or regulatory correspondence would be directly applicable to customer service and utility industry professionals.

2. **Tool access guidance for the exercise.**  As noted, confirming that learners have AI tool access before beginning the exercise would prevent a practical obstacle.

3. **Constraint-writing guidance.**  A simple set of questions to ask when identifying constraints for a new task type would be very helpful for beginners.

4. **Prompt library guidance for team deployment.**  The individual library is well-designed.  Brief guidance on how to adapt it for team use — governance, approval process, maintenance — would be useful for managers evaluating department-level deployment.

5. **Non-English prompt note.**  My customer service team includes representatives who speak Spanish as a first language and sometimes assist Spanish-speaking customers.  Brief guidance on whether structured prompting works effectively in languages other than English would be relevant for diverse workforces.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

This module provides the practical control mechanism that resolves my primary concern about AI in my department: how do I ensure that AI output stays within authorized boundaries?  The Constraints element — specifically the ability to tell AI what not to do — is the governance tool I needed.  My exercise demonstrated that unauthorized service commitments appear in unstructured AI output and disappear when appropriate constraints are added.  That is a direct operational benefit with clear compliance implications.  The accessible language and labeled template fields made this approachable for someone with no prior AI experience.  I will recommend this module to my director and to colleagues in other customer service departments.

---

# Reviewer Summary

Module 1.4 resolved my primary concern about AI adoption in a regulated customer service environment: the Constraints element, which prevents hallucination and overreach, is the governance mechanism that keeps AI output within authorized boundaries.  My exercise produced direct evidence of this — the unstructured complaint response prompt generated unauthorized service commitments; the structured prompt with explicit constraints did not.  That comparison is the most persuasive argument I have seen for structured prompting as a compliance discipline rather than just a productivity technique.  The SOP conversion demonstration was the most directly applicable content in the module for my work context, and the labeled template fields completely eliminated the blank-page difficulty I had anticipated for the exercise.  What should be improved: constraint-writing guidance needs practical tools, not just examples — even a simple set of diagnostic questions would help beginners like me identify the right constraints for new tasks; a customer service or regulated industry demonstration would reduce the translation work for a large professional audience; tool access guidance should be added before the exercise; and team deployment guidance for the prompt library would serve managers evaluating department-level AI adoption.  What should stay: the failure-mode mapping per element, which makes each element meaningful rather than arbitrary; the labeled template fields, which solved blank-page paralysis completely; the SOP conversion demonstration with its "do not invent compliance requirements" constraint; the professional takeaway that human review owns final quality; and the seven-field prompt library template, which I am extending with an "Approved for Team Use" field for future department deployment.
