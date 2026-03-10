# Course Module Feedback - Dr. Sarah Chen - R10

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Dr. Sarah Chen
Professional background: Director of Clinical Compliance at a regional hospital network, Chicago. JD and MHA. Oversee regulatory compliance, accreditation, policy documentation, incident reporting, and staff training across seven facilities. 18 years in healthcare administration.
Experience using AI tools: Beginner-to-moderate — exploring AI for policy drafting and compliance documentation, with significant caution
Primary reason for taking this course: Evaluate AI for compliance documentation support, understand risk boundaries

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Very clear. "Structured prompting is the main control mechanism for AI output quality in professional workflows." This is the thesis I needed. After Module 1.3 established that AI requires human oversight and governance structures, this module answers the operational question: what does that governance look like in practice?

For compliance work specifically: output quality control is not an option, it is a regulatory requirement. A mechanism that controls AI output quality is, therefore, a compliance mechanism. That framing is immediately relevant to my professional context.

**Do the learning objectives feel realistic?**

Yes. Apply the five-part structure, diagnose weak prompts, produce predictable and reviewable outputs. "Reviewable" is not quite in the stated objectives but it's implicit in "workflow-ready" — and reviewability is my professional requirement above all else. AI output in a compliance context must be reviewable, attributable, and verifiable against source material.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Professional and accessible. This module maintains the accessible standard established by Module 1.3. I was able to read it without encountering comprehension barriers, which is my threshold for professional training content.

Rating (1–5):
Clarity of purpose: 5
Tone and readability: 5

Comments:

This module's opening connects directly to Module 1.3's governance framework, which is exactly correct. Structured prompting is not just a productivity tool — it is an operational discipline that enables responsible AI use in high-stakes environments. The sequencing (Module 1.3: why governance → Module 1.4: how to govern through prompting) is well-constructed.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

Yes. The five elements and their failure-mode justifications are clearly explained and each failure mode has direct compliance relevance:

- Role → prevents tone/perspective drift. In compliance documentation, tone is not merely stylistic — it is legal. "Suggest" versus "require," "may" versus "must" — these distinctions have regulatory meaning. An AI writing from the wrong professional perspective can introduce regulatory risk through imprecise language.
- Context → prevents irrelevant assumptions. AI without context will draw on its training data, which may include outdated regulations, superseded guidelines, or standards from different jurisdictions. Providing accurate context is how you prevent the model from importing inapplicable regulatory information.
- Task → prevents ambiguity. Clear task specification is the difference between "write something about policy" and "draft a specific policy section with defined scope." The latter is the only acceptable deliverable in compliance contexts.
- Constraints → prevents hallucination and overreach. This is the most critical element for my work. I will expand below.
- Output Format → prevents downstream rework. Structured output means the document is review-ready, not draft-ready. In compliance, review time is not optional — reducing rework means reviewers spend their time on content quality, not document reconstruction.

**Did any terminology feel confusing?**

"Output schema" appears once in the weak-prompt patterns list; "Output Format" is used everywhere else. Inconsistency should be corrected.

"Downstream rework" is clear to healthcare administration professionals who work with documentation workflows.

"Probability space" is slightly technical but I understood it in context.

**Did the mental model make sense?**

Yes, and the Constraints element requires particular attention in my professional context.

The module states that "Constraints reduce hallucination and overreach." In compliance work, hallucination is not an acceptable quality failure — it is a potential legal and patient safety issue. An AI that invents a regulatory requirement, fabricates a citation, misquotes an accreditation standard, or invents a policy precedent has not produced a low-quality draft — it has produced a document with embedded errors that look authoritative and may not be caught in review.

Explicit constraints are the technical mechanism that prevents this. "Use only the regulatory text provided," "do not cite standards not included in the source material," "flag any requirement you cannot verify from the provided sources," "mark gaps for human review rather than inferring compliance requirements" — these constraints transform AI output from potentially dangerous to safely reviewable.

This is the element I came to this module most wanting to understand, and the module delivered.

**Was the explanation too long, too short, or appropriate?**

Appropriate. Well-calibrated and well-organized.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 4
Usefulness of mental model: 5

Comments:

The "common weak-prompt patterns" list was instructive as an audit of AI risks in compliance contexts:

- "No rules for uncertainty handling" — this is the highest-risk pattern for regulated industries. When AI is uncertain about a regulatory requirement but presents it with apparent confidence, the error becomes invisible in the output. Constraints requiring uncertainty flagging are not optional; they are the mechanism that keeps human review meaningful.

- "No output schema for downstream work" — in compliance, output structure is itself a regulatory matter. Policy documents, incident reports, and accreditation documentation have required formats and section structures. Specifying these in the prompt ensures AI output aligns with regulatory document standards from the first draft.

The "prompt design as workflow design" framing has direct compliance application: AI-assisted compliance documentation is a workflow, and each step in that workflow has quality and governance requirements. Treating the prompt as a workflow specification — not just a writing request — is the correct professional approach.

---

# 3. Demonstrations

**Did the examples feel realistic?**

The finance P&L demonstration — not directly applicable to my work, but the constraint design is highly relevant. "Do not invent figures," "flag unclear or missing data" — these are precisely the constraints needed for compliance data reporting. The principle transfers directly.

The operations/administration SOP demonstration — more directly applicable. Policy and procedure documentation is a significant portion of compliance work. Converting meeting notes or working group discussions into draft SOPs is a task I support regularly. The constraint "Do not invent compliance requirements" is the single most important constraint in my professional context. I noted this sentence specifically.

"The improved prompt transforms unstructured notes into a review-ready process draft while exposing unknowns for human resolution" — this is the correct description of useful AI output in a compliance context. Review-ready, gaps exposed, unknowns flagged. Not complete, not polished, not definitive — review-ready. That is the appropriate role for AI in regulated documentation.

**Did the improved prompt clearly outperform the weak prompt?**

Yes. The categorical difference between the two-sentence weak prompt and the full structured prompt is clear. In compliance terms: the weak prompt produces output that requires complete review for embedded errors; the improved prompt produces output where errors are explicitly flagged, making review more efficient and more reliable.

**Did the explanation help you understand why the improvement worked?**

Yes. The analysis sentences are appropriately concise. The vocabulary — "review-ready," "exposing unknowns for human resolution" — is precisely aligned with compliance documentation practice.

**Could you imagine applying this approach in your own work?**

Yes. The exercise confirmed this. I restructured a policy documentation prompt with immediate, visible improvement in output quality and verifiability.

Rating (1–5):
Example realism: 4
Clarity of improvement: 5
Practical applicability: 4

Comments:

Neither demonstration is from a healthcare, compliance, or regulated industry context. The finance demo is adjacent (financial controls, audit considerations) and the ops demo is applicable (procedure documentation). But a demonstration specifically showing AI-assisted policy drafting with regulatory source constraints would serve healthcare, legal, financial services, and other regulated industry professionals directly.

A healthcare-specific example might show: role as clinical policy analyst, context as CMS regulatory update with specific citation, task to draft a policy section consistent with new requirements, constraints to use only provided regulatory text and flag any requirement that requires legal interpretation, output format aligned with the organization's policy document template. That demonstration would be directly applicable to compliance work across regulated industries.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. Select a real prompt, rewrite with the five-part structure, run both, evaluate with the checklist.

**Did the instructions feel clear?**

Yes. The labeled template fields are clear. The example output (product analyst, user interview summaries) is not my domain but the format is instructive.

One compliance-specific observation: the exercise instructs learners to "run both versions in the same AI tool." For healthcare professionals, AI tool use for any patient-care-adjacent work requires organizational authorization and may require BAA (Business Associate Agreement) documentation. The exercise should note that learners should use appropriately authorized tools and non-sensitive, non-PHI content for the practice exercise.

**Did the evaluation checklist help you compare outputs?**

Yes. Five criteria provide systematic comparison. "Constraint compliance" is the most compliance-relevant criterion — did the AI output stay within the specified bounds, or did it generate content beyond what was authorized?

"Assumption transparency" is the second most important — in compliance, the reviewer needs to distinguish between AI content drawn from provided source material and AI content that reflects the model's training data. Structured prompts with appropriate constraints should make this distinction explicit.

What I tested: a policy documentation prompt for a new patient consent procedure. Old prompt: "Draft a policy section on patient consent for the new telehealth intake process." New prompt: role as clinical compliance policy analyst for a hospital network, context including specific regulatory references and organizational requirements, task to draft one policy section on patient consent, constraints to use only the provided regulatory references and flag any requirement that requires legal interpretation or clinical determination, output format aligned with our policy section template with purpose / applicability / requirements / documentation / references sections.

The structured version produced a draft with explicit flags on two requirements that needed legal review. The unstructured version produced a confident draft that appeared complete and contained one invented regulatory citation that I identified only because I knew the relevant regulation well. That invented citation would not have been caught by a less experienced reviewer.

**How long did the exercise actually take?**

Approximately 50 minutes. I was methodical and tested two prompts rather than one.

Rating (1–5):
Instruction clarity: 4
Exercise usefulness: 5
Difficulty level: 3

Comments:

The Constraints field required significant thought for compliance use cases, which is appropriate. In my context, writing effective constraints requires understanding both what the AI might plausibly do wrong and what the regulatory and legal implications of each failure mode would be. That's a domain-specific judgment that requires professional expertise — which is exactly why human review cannot be replaced by structured prompting, only improved.

The exercise confirmed the module's principle directly: structured prompts produce reviewable, transparently bounded output; unstructured prompts produce confident-appearing output that requires comprehensive review to identify errors that may not be obvious.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

Yes. The marketing manager pattern — vague prompt, generic output, team rewriting from scratch — is a recognizable AI adoption failure mode. The specific failure (hidden assumptions, "team now spends significant time rewriting") maps to a real organizational risk in compliance contexts: AI output that appears complete but requires complete rewriting wastes reviewer time on reconstruction rather than quality control.

**Did it show how AI should be used responsibly?**

Yes. The professional takeaway — "structured prompts reduce waste and improve decision readiness, but human review still owns final quality" — is the correct governance statement and directly consistent with Module 1.3's framework.

For compliance work specifically: "human review still owns final quality" is not merely a best practice recommendation — it is a regulatory requirement in most healthcare, financial, and legal compliance contexts. This module's practical skill (structured prompting) and Module 1.3's governance principle (human accountability) are complementary and both necessary.

**Did it help connect the concept to real professional work?**

Yes, with domain translation. The marketing scenario illustrates the principle; my work required translating from campaign concepts to compliance documentation. The translation is straightforward and the principle is identical.

Rating (1–5):
Scenario realism: 4
Practical value: 5

Comments:

A compliance, healthcare, or regulated industry Real-World Application scenario would serve a large and high-stakes professional segment directly. Something like: a compliance officer using AI to draft a policy update prompted by a regulatory change — with and without structured prompting — would show both the productivity benefit and the risk mitigation value of structured constraints in a regulated context.

The current marketing scenario is accessible and the principle is clear. Domain-specific supplemental scenarios for regulated industries would be a valuable addition.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes. A Structured Prompt Library for compliance documentation would be a governance asset — a documented, tested set of prompts with explicit constraints for each use case, maintained with reliability notes, provides organizational evidence of structured AI governance practice.

In regulated healthcare environments, documented AI use practices are themselves a compliance consideration. A maintained prompt library with version history and reliability documentation could be part of an AI governance framework.

**Could you realistically use this in your job or portfolio?**

Yes. Building a compliance-specific library: policy section drafting, regulatory update impact analysis, incident report narrative synthesis, audit response drafting, accreditation documentation support, staff training scenario development, policy gap analysis, risk assessment summaries. Eight use cases, all with carefully designed constraints.

I will add fields for: regulatory jurisdiction covered, last validation date (compliance prompts need review when regulations change), and authorized use scope (some prompts may be appropriate only for non-PHI, non-patient-care contexts).

**Was the template sufficient to create the artefact?**

Yes. Seven-field template is appropriate. The Review Notes field is essential — compliance prompts require ongoing calibration as regulatory requirements change, and tracking what was adjusted and why is part of responsible AI governance practice.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 4

Comments:

For regulated industries, the prompt library has governance value beyond individual productivity. A departmental prompt library — with documented constraints, validation dates, and authorized use scope — is a component of an organizational AI governance framework. I will extend the template with compliance-specific fields and present it to leadership as part of our AI adoption governance proposal.

---

# 7. Emotional Learning Experience

Felt **immediately oriented** — the module opens with a direct thesis that connected immediately to my compliance oversight role.

Felt **professionally engaged** during the concept explanation — the Constraints element is the compliance mechanism I needed to understand, and the module delivered a clear explanation.

Felt **heightened attention** when reading about "Constraints → prevents hallucination and overreach" — this is the element that separates AI-assisted compliance documentation from AI-risk-introduction-into-compliance-documentation. The distinction is not subtle.

Felt **confirmed in caution** during the exercise — finding an invented citation in the unstructured output was the most direct demonstration possible that my initial caution about AI in compliance work was justified, and that structured prompting with appropriate constraints is the mechanism that makes AI use responsible in this context.

Felt **constructively optimistic** at the end — the module gave me the operational tool I needed to evaluate AI use in compliance contexts responsibly. I came in uncertain about whether AI could be used safely for compliance documentation. I'm leaving with a clear framework for how it could be used safely.

---

# 8. Time and Difficulty

Reading: 22 minutes
Exercise: 50 minutes (two prompts, methodical testing)
Reflection: 15 minutes

Difficulty level: Moderate — Constraints field requires domain expertise to populate correctly in high-stakes contexts

Was the estimated time accurate?

Yes. 87 minutes, within the 75-120 minute range.

Comments:

For compliance and regulated industry professionals, the exercise will tend toward the upper end of the time range because Constraints require careful domain-specific thought. The exercise should note that the time estimate assumes general professional application; high-stakes regulatory contexts may require additional constraint development time.

---

# 9. Most Valuable Part

The Constraints element with its explicit connection to hallucination and overreach prevention.

This is the technical mechanism that makes AI use defensible in regulated environments. "Do not invent compliance requirements," "do not cite standards not provided in source material," "flag any requirement that requires legal interpretation" — these constraints convert AI from a liability risk into a cautious first-draft tool that exposes its own limitations for human review.

Before this module, I had been thinking about AI caution primarily in terms of human review volume — review everything more carefully. After this module, I understand that structured constraints change the character of review — instead of reviewing for embedded errors hidden in confident language, reviewers can focus on explicitly flagged gaps and uncertainties. That's a qualitative improvement in how human review time is used.

---

# 10. Weakest Part

Constraint-writing guidance for high-stakes contexts.

The module correctly identifies Constraints as the element preventing hallucination and overreach. It shows good constraint examples. It flags vague constraints as ineffective. But it does not provide systematic guidance on how to develop constraints for new task types.

For compliance work, this gap is significant because the consequences of inadequate constraints are not limited to wasted time — they include regulatory risk, potential patient safety implications, and legal exposure. A domain-specific note or even general guidance on constraint development methodology would be valuable.

The question "what might the AI plausibly do wrong in this specific context, and what would the worst-case version of that failure look like?" is the right approach to constraint development. That question should be stated explicitly.

---

# 11. Missing Content

Module is well-scoped. Additions for regulated industry contexts:

1. **Compliance, healthcare, or regulated industry demonstration.** Policy drafting, regulatory impact analysis, or incident reporting with appropriate source constraints — one demonstration from a regulated context would directly serve healthcare, legal, financial services, and government professionals.

2. **Constraint development methodology.** A brief framework for identifying appropriate constraints for new task types, not just examples.

3. **Regulated use context note.** A brief acknowledgment that AI use for compliance, legal, or patient-care-adjacent tasks requires organizational authorization and appropriate data governance — learners should consult their organizational AI use policies before applying structured prompting to regulated work.

4. **Tool access and data governance note for the exercise.** Learners should be advised to use non-sensitive content for practice and to confirm that their AI tool use complies with organizational data governance requirements.

5. **Team prompt library governance guidance.** For enterprise and regulated industry deployment: prompt library maintenance, version control, periodic revalidation when regulations change, and authorized use scope documentation.

6. **Chaining preview.** What is prompt chaining and when will it be covered?

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

This module provides the operational mechanism that makes responsible AI use possible in compliance and regulated industry contexts — structured prompting with explicit constraints is the technical discipline that converts AI from a liability risk into a carefully bounded documentation support tool. The Constraints element alone justifies the module for anyone in healthcare, legal, financial compliance, or other regulated environments: the ability to specify what AI should not do is the compliance officer's primary control over AI output risk. The exercise provided direct evidence that unstructured prompting conceals errors that structured prompting exposes — which is the most important operational difference between "using AI" and "governing AI use responsibly."

---

# Reviewer Summary

Module 1.4 delivered the operational mechanism I needed to evaluate AI use in compliance documentation responsibly — the RCTCO framework with explicit Constraints as the hallucination-prevention mechanism is the technical basis for governed AI use in regulated environments, not just a productivity tool. The exercise confirmed this directly: the unstructured policy documentation prompt produced confident output containing an invented regulatory citation; the structured prompt produced review-ready output with two requirements explicitly flagged for legal review. That contrast is the difference between AI that introduces regulatory risk and AI that supports responsible compliance practice. The prompt library is being extended with compliance-specific fields (regulatory jurisdiction, last validation date, authorized use scope) and will be presented as part of our organizational AI governance framework. What should be improved: constraint-writing guidance needs systematic methodology, not just examples — in regulated contexts, inadequate constraints have consequences beyond wasted time; demonstrations from healthcare, legal, or compliance contexts are needed to serve regulated industry professionals without requiring complete domain translation; exercise and library guidance should include data governance notes for regulated environment deployment. What should stay: the failure-mode mapping per element — especially Constraints → hallucination and overreach prevention, which is the compliance mechanism in the framework; both demonstrations for their constraint design (the SOP demo's "do not invent compliance requirements" is exactly right); the professional takeaway that human review owns final quality; the exercise format with real-prompt testing; and the seven-field prompt library template, which is being extended for compliance-specific governance purposes.
