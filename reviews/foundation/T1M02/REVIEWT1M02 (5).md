# Course Module Feedback - David Okonkwo - R04

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 4/10**

First reaction: another module that's going to tell me how impressive AI is before getting to anything useful.

Was pleasantly wrong — at least partially.

The pipeline structure (Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification) was presented clearly enough that I could track it. I think like process flows — years of running warehouse operations will do that. Each step feeds the next, there's accountability at each gate. That structure I respect.

What I didn't like: the opening could have been more direct about what was in it for operations managers. By the third paragraph, I was already wondering if I'd skip to Module 3. What held me was the hallucination mechanics section in the preview text. That promised to explain something I've actually experienced — AI giving me operationally confident nonsense — and that promise was worth following.

Lead with the operational risk angle. That's what will keep managers like me reading.

---

## Section 2: Concept Explanation Quality

**Rating: 6/10**

Three concepts. Variable quality across them.

**Tokenization:**
Too much detail, not enough operational relevance. I understand the concept — text gets chunked into processing units, the model works at token level, not word level. Understood. But the level of mechanical explanation felt like it was written for someone building these systems, not deploying them. I'm an operations manager. I don't need to know how the conveyor belt motor works. I need to know what happens when it breaks and what that costs.

Could be cut to a single paragraph without losing anything relevant to a practitioner audience.

**Probability Ranking / Hallucination Mechanics:**
This is why the module exists. This explanation — AI selects the most statistically likely response, not the factually accurate one — is operationally important. I've had colleagues forward me "AI-generated" supply chain analyses that were confidently, catastrophically wrong. Vendor lead times made up from patterns, not data. Inventory projections that sounded authoritative and were entirely fabricated.

Now I understand the mechanism. That doesn't make me trust AI more — but it tells me exactly where the failure mode lives. That's actionable.

**Context Window:**
Clear and directly relevant. The analogy of only being able to see part of a document maps well to operations: if I only give you half the shift report, your analysis is only as good as what I handed you. Understood. Will use.

Overall: the probability/hallucination section is strong enough to carry the module. The tokenization section is dead weight for this audience.

---

## Section 3: Demonstrations/Examples

**Rating: 5/10**

Two demonstrations. Mixed results.

**Software Development Demo:**
Not relevant to my work and I won't pretend otherwise. I sat through it because I was committed to completing the module. It illustrated the concept fine — partial context leads to confidently wrong AI output — but I had no professional connection to code review scenarios. The 10 minutes I spent on that demo were the least useful 10 minutes of the module.

**Finance Demo (Incomplete P&L Analysis):**
Better. The scenario — AI completing a P&L analysis with gaps in the source data and inventing convincing explanations for missing figures — is operationally credible. I've seen this happen with budget projections. The lesson about what "missing context" actually does to AI output is well-illustrated.

Still not a logistics scenario. I would have liked to see something from supply chain, operations, or workforce management — domains where AI hallucinations have direct safety or cost consequences, not just embarrassment consequences. A fabricated delivery time estimate, an invented inventory figure, a generated compliance status that doesn't reflect ground truth — those are the stakes in my world.

Rating would be higher with one operations-relevant demonstration.

---

## Section 4: Guided Exercise

**Rating: 7/10**

Comparing unconstrained vs. uncertainty-aware prompts with incomplete context. This exercise worked.

I ran it with a real scenario: asked ChatGPT to analyze a weekly fulfillment summary report with two key columns of data intentionally omitted.

Unconstrained version: gave me a confident analysis with fabricated figures for the missing columns. Read like an actual operations report. Was entirely wrong.

Uncertainty-aware version: flagged the missing data, listed what assumptions it was making, gave me conditional outputs with explicit caveats.

That comparison is the whole lesson in thirty minutes. If you do nothing else in this module, run this exercise with something from your actual work.

Minor issues:
- Instructions needed to be more explicit about what "incomplete context" means for non-document work scenarios. I adapted on the fly.
- No clear rubric for what a high-quality uncertainty-aware prompt looks like versus an adequate one. I completed the exercise without knowing if I'd done it well or just adequately.

---

## Section 5: Real-World Application

**Rating: 5/10**

Application guidance was solid in principle — use uncertainty-aware prompting whenever context is incomplete, build in human verification checkpoints, never treat AI output as ground truth when stakes are high.

In practice: these recommendations don't engage with the specific risk profile of operations work.

In logistics, a confidently wrong AI output doesn't create a bad report — it creates a delayed shipment, a missed compliance window, or a safety incident. The stakes are different. The verification requirements are different. The consequences of "AI said it was okay" are different.

I would have appreciated a section addressing: how do you integrate AI verification requirements into existing operational workflows? How do you build AI output review into a shift handoff process? How do you communicate to frontline staff that AI outputs need checking without undermining their willingness to use the tools?

The guidance as written is fine for knowledge workers. Operations managers need more.

---

## Section 6: Portfolio Artefact

**Rating: 7/10**

LLM Reliability Control Card. Task Type, Known Context, Missing Context, Required Constraints, Human Verification Owner.

This is the kind of structured accountability framework that operations runs on. I built one for three use cases within my team: drafting vendor communication, summarizing shift reports, and generating preliminary root cause analysis for incident reports.

The framework is right. A few things I'd add for operations contexts:

- **Consequence Level** (low / medium / high) — helps prioritize verification effort proportional to operational risk
- **Verification SLA** — how quickly must a human verify before the output can be acted on?
- **Escalation Trigger** — what conditions require escalating from AI output to human analysis from scratch?

Without those fields, the Control Card is a good starting template that needs customization for any serious operational deployment.

---

## Section 7: Emotional/Learning Experience

**Rating: 5/10**

Started skeptical. Ended cautiously informed — not converted.

The probability ranking / hallucination mechanics section moved me more than I expected. I've had strong opinions about AI unreliability for two years, but those opinions were based on observed behavior without mechanical understanding. Now I understand why AI fails in the specific way it fails. That's more useful than just "don't trust it."

What this module didn't do: convince me that AI is ready for meaningful integration into operations workflows without significant process engineering around it. If anything, understanding the failure mode more clearly reinforces my position that AI deployment in ops requires more infrastructure than most organizations are willing to build.

I'm at maybe 4/10 on AI favorability now versus 3/10 before this module. Marginal movement, genuine movement.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** ~85 minutes

Probably spent 15 of those minutes on the tokenization section that I didn't need at that depth. The exercise was the best use of time — 25 minutes that produced a genuinely useful output I plan to use.

**Difficulty:** 5/10 overall. The concepts are accessible if you're willing to engage with them. The technical depth in tokenization is higher than necessary for this audience.

---

## Section 9: Most Valuable Part

The probability ranking / hallucination mechanics — specifically the insight that AI failure is predictable rather than random.

Before this module: I knew AI made things up and I didn't trust it. After this module: I know exactly where the failure mode lives, what conditions increase the risk, and what prompting practices reduce it. That's a different relationship with the tool. Not a warmer one, but a more informed one.

In operations, understanding your equipment's failure mode is how you build maintenance processes. Same principle applies here.

---

## Section 10: Weakest Part

Tokenization section. Too much technical depth for practitioners who don't need to understand the mechanism at that level.

Also: the consistent absence of operations, logistics, or supply chain examples. This module uses software development and finance as its reference domains throughout. Those are legitimate domains, but they're not universal. Operations managers, logistics professionals, manufacturing and field service roles represent a substantial AI user population that sees nothing of themselves in these examples.

---

## Section 11: Missing Content

1. **Operations and logistics examples.** Fabricated delivery estimates, invented inventory counts, AI-generated compliance statuses that don't reflect ground truth — these are the hallucination scenarios that matter in my world. They're absent entirely.

2. **AI failure consequences tiering.** There's a meaningful difference between AI getting a marketing email tone wrong and AI generating a confident but wrong shipment compliance assessment. The module treats all hallucination equally. It isn't equal.

3. **Workflow integration guidance.** How do you build human verification into an existing operational workflow without creating a new bottleneck? The module recommends verification without addressing the process engineering required to make it practical.

4. **Team management implications.** I manage 47 people. If I'm going to introduce AI tools into this team's workflow, I need guidance on oversight, training, and accountability that goes beyond individual prompting technique.

---

## Section 12: Final Evaluation

**Overall Rating: 5/10**

The core material is sound. The hallucination mechanics explanation is genuinely valuable and I'll carry it forward. The Control Card artefact is a usable framework.

But this module is built for knowledge workers — specifically developers, analysts, and finance professionals — and it shows throughout. Operations managers and logistics professionals need different examples, different failure scenarios, and different guidance on workflow integration.

I came in at 3/10 on AI favorability. I'm leaving at about 4/10. The module earned that movement by giving me a mechanical understanding of AI failure that my previous skepticism was missing. But it didn't earn more than that, because it didn't engage with the specific risk profile and workflow context of operational roles.

**Would I recommend this to my team?** Not in its current form. If they modified the examples and added operational risk guidance, yes. As-is, I'd point ops managers to the probability ranking section and the exercise, and tell them to skip the rest.

---

## Reviewer Summary

**Overall Rating:** 5/10
**Completion Status:** Completed in full

**Shifts in Position:**
- AI favorability: 3/10 → 4/10
- Key shift: understanding hallucination as predictable, not random — changes risk management approach

**Key Gaps:**
- Zero operations/logistics/supply chain examples despite being a major AI user segment
- No guidance on workflow integration for team-level deployment
- No consequence tiering — all hallucinations treated as equivalent risk level

**Artefact Status:** Control Card built for three ops use cases; enhanced with Consequence Level and Verification SLA fields.

**Deployment Recommendation:** Not as-is for operations audiences. Requires supplemental examples and risk-tiering framework for logistics/manufacturing/field service roles.
