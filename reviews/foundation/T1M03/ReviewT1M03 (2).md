# Course Module Feedback - Riley Thompson - R02

**Module Reviewed:** T1M03 – Understanding AI Strengths and Limitations

---

# 1. First Impression

**Does the purpose of the module feel clear?**

yeah, immediately. "bad task allocation" rather than "bad prompts" is a useful reframe. i've thought about it as "am i prompting correctly" but the allocation framing feels more fundamental — like, some tasks shouldn't be AI'd at all regardless of how well you prompt.

**Do the learning objectives feel realistic?**

yeah. all three are achievable. "design a task-allocation approach" is the one i'm actually here for.

**Does the tone feel approachable, professional, confusing, or overly technical?**

approachable. probably the least technical module so far which is fine — this one's about process, not mechanism. no complaints.

Rating (1–5):
Clarity of purpose: 8/10
Tone and readability: 7/10

Comments:

ngl, coming off module 1.2 which i actually found pretty interesting mechanically, this one felt a bit slow at first. like "yeah yeah, use AI for the right stuff" seemed like obvious advice. stayed with it tho and the framework is actually more specific than i expected. the matrix exercise in particular is more useful than i thought it would be.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

yeah. the allocation framework — Task Type + Risk of Error + Need for Judgment → AI Role + Human Review Level — is clean and immediately applicable. i've been doing an implicit version of this for 18 months without ever formalizing it. seeing it written out as a decision model is useful.

**Did any terminology feel confusing?**

no. this module has the lowest technical barrier of the three so far. "low/medium/high risk" and "light, standard, strict, mandatory sign-off" are self-explanatory.

**Did the mental model make sense?**

yes. and it maps well to how i already think about code review — low-risk boilerplate gets a quick scan, anything security-adjacent or touching production gets strict review. the same logic applies to AI outputs. i just hadn't thought about it systematically.

**Was the explanation too long, too short, or appropriate?**

appropriate. maybe could have gone a bit shorter on the "where AI is strong/weak" lists — those feel a bit textbooky. the framework itself is the valuable part.

Rating (1–5):
Concept clarity: 4
Terminology accessibility: 5
Usefulness of mental model: 4

Comments:

the "fluency creates false confidence" point is the best thing in this section. i've shipped bugs because of this. AI generates clean, readable code, i assume clean and readable = correct, push to staging, something breaks. the code LOOKED right. that's a different failure mode than "obviously wrong code" and the module names it correctly.

"urgency pushes teams toward auto-accept" — also accurate. at a startup the default is move fast. if AI gives you a plausible answer under time pressure you're going to use it. this needs explicit countermeasures, not just good intentions.

---

# 3. Demonstrations

**Did the examples feel realistic?**

the product management demo is fine but not directly applicable to me. feature rollout decisions aren't my day-to-day.

the customer support demo is even less relevant. i don't write policies.

both examples illustrate the principle correctly — the weak prompts hand authority to AI, the improved prompts restrict AI to decision support. but neither example lands in dev territory.

**Did the improved prompt clearly outperform the weak prompt?**

yes, obviously. "should we launch this feature?" vs. a structured prompt with explicit output format and constraint that AI doesn't produce a go/no-go conclusion — the improvement is clear and the reasoning is explained adequately.

**Did the explanation help you understand why the improvement worked?**

yes. "the improved prompt allocates AI to structured synthesis and keeps the decision with humans" — that's the principle in one sentence. clear.

**Could you imagine applying this approach in your own work?**

i had to construct the dev parallel myself:
- weak: "review this PR and tell me if it's safe to merge"
- improved: "review this PR for potential issues in the authentication logic. List concerns and unknowns. Do not provide a merge recommendation — that's my call after review."

that distinction matters. code review is medium-to-high risk depending on what's being changed. i've been running weak-version code reviews in cursor without thinking about it.

Rating (1–5):
Example realism: 3 — correct in principle, irrelevant to dev context
Clarity of improvement: 9/10
Practical applicability: 3 — had to manually translate to dev work

Comments:

where is the dev demo? this course is presumably aware that a large chunk of its audience is developers or developer-adjacent. product management and customer support are fine but at least one demonstration from a coding context would have hit differently. something like: using AI for preliminary security review of a new authentication endpoint (weak: "check if this is secure" vs. improved: "identify potential vulnerabilities for my review, flag any assumptions, do not make a deployment decision").

---

# 4. Guided Exercise

**Was the task easy to understand?**

yeah. build a task-allocation matrix for 8-12 recurring tasks. clear instructions.

**Did the instructions feel clear?**

yeah. the example output (monthly report draft, policy statement) is minimal but sufficient to understand the format. the evaluation checklist is well-structured — 5 criteria + 3 follow-up questions is the right scope.

**Did the evaluation checklist help you compare outputs?**

yes. the three follow-up questions were the most useful part of the exercise for me: "where were you over-trusting AI?" — answer: PR code reviews, especially anything touching auth or database queries. i've been treating those as low-risk because AI code review feels like a helpful second opinion, but the stakes are actually medium-to-high. fixing that.

**How long did the exercise actually take?**

like 25 minutes. went fast once i started — i have a pretty clear sense of my recurring tasks.

Rating (1–5):
Instruction clarity: 4
Exercise usefulness: 8/10
Difficulty level: 2 — easy if you know your job well

Comments:

built my matrix focused on dev tasks: PR reviews, code refactoring, writing tests, drafting technical docs, architectural decisions, debugging, writing commit messages, estimating story points, reviewing infrastructure changes, updating dependencies, writing internal API docs, and responding to incident reports.

biggest insight: i had been treating "writing tests" as low-risk. it's medium-risk. AI-generated tests often look correct but have subtle coverage gaps or incorrect assertions that pass but don't actually validate the behavior you care about. human review of AI-generated tests should be standard, not light.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

sort of. operations team using AI end-to-end for weekly reports without verification structure — i get the principle but it's not a dev scenario. i can translate it (team using AI-generated code without review, errors reach production, trust drops) but i had to do that translation myself.

**Did it show how AI should be used responsibly?**

yes. the revised approach — stage-by-stage allocation, AI for drafting, human validates the consequential parts, manager/lead signs off final — is the right model. the specific application is reporting, the principle applies to code.

**Did it help connect the concept to real professional work?**

yes in principle, not directly in dev practice.

Rating (1–5):
Scenario realism: 3 — for me specifically; probably higher for non-dev audiences
Practical value: 4 — principle is clear even if the scenario isn't my world

Comments:

the note at the end — "this same allocation logic applies in product decisions, support quality workflows, marketing planning, and software release communication" — mentions software release communication but doesn't illustrate it. that's the dev-adjacent use case i needed. even a one-sentence example there would help.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

yes. a task-allocation matrix as a living document in a dev team's confluence or notion is a legitimate engineering practice artifact. "what AI tasks require what review level" belongs in a team's AI use guidelines.

**Could you realistically use this in your job or portfolio?**

yeah. going to add mine to our team's internal docs as a starting point for AI use guidelines on our project.

**Was the template sufficient to create the artefact?**

yeah. five columns is minimal but workable. i added "Review Type" (self-review / pair review / lead review / security review) to map more specifically to our team's actual code review practices.

Rating (1–5):
Practical usefulness: 4
Portfolio value: 3 — good internal team artifact, less obvious as a standalone portfolio piece for a dev role

Comments:

for dev-specific portfolio use: the matrix needs to be framed in terms of engineering practices (code review standards, security review triggers, deployment gates) to be meaningful to an engineering hiring manager. as designed it's a general professional artifact. useful for internal team governance, less immediately compelling as a portfolio piece for a developer without contextualizing it in engineering process terms.

---

# 7. Emotional Learning Experience

started slightly skeptical — "bad task allocation" felt like it was going to be basic advice dressed up in a framework. stayed more engaged than expected.

felt **mildly bored** during the where-AI-is-strong/weak lists — those could be cut in half without losing anything.

felt **more engaged** when the framework clicked as something i've been doing intuitively but never formalized. there's a real value in making implicit practices explicit and auditable.

felt **called out** at the matrix exercise when i realized i've been treating AI-generated tests as low-risk. thats a genuine oversight, not just theoretical.

felt **useful** at the end — the matrix is something i'm actually going to use, which is the right feeling to leave with.

---

# 8. Time and Difficulty

Reading: 18 minutes
Exercise: 25 minutes
Reflection: 10 minutes

Difficulty level: Easy

Was the estimated time accurate?

yes, came in at ~53 minutes. slightly under the stated range.

Comments:

efficient module. no dead weight sections. the reading is appropriately concise. the exercise is well-scoped.

---

# 9. Most Valuable Part

the "fluency creates false confidence" principle plus its application to the matrix exercise.

specifically: forcing myself to classify AI-generated test coverage as medium-risk rather than low-risk is a genuine behavior change with real quality implications. before this exercise i wasn't thinking about review levels for AI coding outputs systematically — i was doing it by feel. feel is unreliable under time pressure. a matrix is reliable under time pressure.

---

# 10. Weakest Part

the demonstrations. both scenarios (product management and customer support) are from non-technical roles. at minimum, the note at the end of Real-World Application ("this logic applies to software release communication") should be expanded into a brief dev example. ideally, one of the two demonstrations should be swapped for a developer-context scenario.

also: the where-AI-is-strong/weak lists feel like filler. "first-draft writing, note summarization, option generation, structured output formatting" — yes, obviously. those could be condensed to a single sentence and the freed space used for something with more specificity.

---

# 11. Missing Content

module is well-scoped. no missing prerequisite knowledge.

what would add value:

1. **a dev or technical role demonstration.** as above — code review, security analysis, architectural decision support. this is missing and the audience gap is significant.

2. **guidance on how to handle ai tools that don't have explicit "draft mode."** cursor and copilot autocomplete inline — you can't always say "this is a draft, don't use it yet." how do you apply the allocation framework when the tool's interface doesn't have clear draft/final states?

3. **team enforcement mechanisms.** how do you get your team to actually follow the matrix? good intentions aren't process controls. what workflow tooling or review gates make the allocation framework enforceable rather than aspirational?

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 **4** 5

Would you recommend this module to a colleague?

Yes

Why?

the task-allocation framework is genuinely useful even for developers who've been using AI tools heavily — it formalizes implicit practices in a way that makes them auditable and communicable. the matrix exercise produces something you'll actually use. rating it a 4 rather than a 5 because the demonstrations don't land for dev audiences and the course should fix that. but the core framework and exercise are worth the time.

---

# Reviewer Summary

module 1.3 is the most immediately applicable module in the course despite being the least technically interesting — the allocation framework formalizes intuitive practices in a way that makes them consistent and auditable, and the matrix exercise produced a real artifact i'm using in our team's internal docs. the fluency-creates-false-confidence and urgency-auto-accept insights are genuinely useful behavioral warnings. what should be improved: the demonstrations are off-target for technical audiences — at minimum one dev or engineering scenario should replace or supplement the product management example, and the software release communication note at the end of the application section is a missed opportunity to serve the developer segment explicitly; the AI-is-strong/weak lists are generic and could be condensed. what should stay: the allocation framework formula (clean and memorable), the matrix exercise with evaluation checklist (right scope, right depth), and the three-tier risk model — it's the right level of simplicity and it translates directly to engineering code review standards without modification.
