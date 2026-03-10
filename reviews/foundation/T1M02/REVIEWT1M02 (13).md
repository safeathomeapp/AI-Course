# Course Module Feedback - Rob Williams - R12

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 6/10**

I'll be direct: the title tells me this is a technical module. I almost delegated this to my Sales Ops Director and moved on.

I gave it ten minutes because the course has been useful so far. The pipeline overview — Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification — gave me a quick structural read in about 90 seconds. That's efficient. I could see where the module was going and make a judgment call about how deep to go.

The thing that kept me engaged: the promise of understanding why AI makes mistakes. My team is using AI for sales outreach, pipeline forecasting, and customer communication. I've had two instances in the last quarter where AI-generated content went to clients with errors — one factual, one tonal. I need to understand whether those were flukes or structural.

Turns out they're structural. That's important information.

---

## Section 2: Concept Explanation Quality

**Rating: 6/10**

I read the probability ranking section carefully. Skimmed the rest.

**Probability Ranking / Hallucination Mechanics:**
This is the executive-relevant insight. "AI selects the most statistically probable continuation, not the factually correct one" — this tells me that AI errors are predictable and systematic, not random. That changes my risk calculus. A random error rate is something you manage with sampling and quality checks. A structural tendency toward confident fabrication is something you need process controls around. Different risk management responses.

I'm going to bring this framing to my quarterly business review on AI deployment. The board wants to understand AI risk in the operations and sales functions. This gives me the language.

**Tokenization:**
Skimmed. Noted that the practical implication — AI may handle specialized vocabulary inconsistently — is relevant for sales collateral and technical documentation. Didn't go deeper.

**Context Window:**
Skimmed. The implication — AI loses context on long documents — is immediately relevant for how my team uses it to summarize lengthy RFPs and customer communications. Filed for follow-up with Sales Ops.

---

## Section 3: Demonstrations/Examples

**Rating: 5/10**

Two demonstrations. I reviewed the finance demo in detail and skimmed the software development demo.

**Finance Demo (Incomplete P&L Analysis):**
Directly relevant. AI completing financial analysis with fabricated figures when source data has gaps — this maps onto forecasting and pipeline analysis use cases in sales. My team uses AI to help model deal scenarios. If AI is filling gaps in deal data with plausible-sounding fabrications, that's a material risk to forecast accuracy.

Passed this section along to my Sales Ops Director with the note: "review how we're using AI for pipeline modeling and verify we have appropriate checks."

**Software Development Demo:**
Not my function. I understand the general principle from the finance demo.

What I wanted and didn't find: a sales-specific demonstration. AI generating a confident but wrong customer communication, or an AI-assisted proposal with a fabricated client reference. The client communication near-miss I mentioned above is exactly the scenario I needed to see illustrated.

---

## Section 4: Guided Exercise

**Rating: 4/10**

I did not complete this exercise personally.

I reviewed the instructions, understood the principle — comparing an unconstrained prompt versus an uncertainty-aware prompt — and delegated the exercise execution to my Sales Ops Director with a brief on the objective.

My honest feedback: this is a reasonable exercise for hands-on practitioners. For VP-level executives whose primary contribution is decision-making and governance, the value is in understanding the principle, not in running the prompts. A "leadership version" of the exercise — focused on policy implications and governance decisions rather than prompt construction — would be more appropriate for my level.

I acknowledge this may not represent the course's intended audience, and I'm not penalizing the module significantly for it.

---

## Section 5: Real-World Application

**Rating: 5/10**

The application guidance is correct but pitched at the individual contributor level.

What I need as a VP: guidance on organizational deployment of these principles. Specifically:

1. **How do I build uncertainty-aware prompting requirements into team AI use policy?** The module tells me individuals should use it. I need to know how to mandate it.

2. **What verification structures are appropriate for different risk levels of AI output?** Client-facing content requires higher verification than internal drafts. Forecast inputs require higher verification than meeting summaries. The module doesn't provide a risk-tiering framework.

3. **How do I evaluate whether my team is using AI appropriately?** As a manager, I need observable indicators of good AI practice, not just principles I apply myself.

The application section is useful for understanding the problem. It doesn't help me solve it at an organizational level.

---

## Section 6: Portfolio Artefact

**Rating: 6/10**

The LLM Reliability Control Card. Task Type, Known Context, Missing Context, Required Constraints, Human Verification Owner.

This artefact is the right idea in a format that needs scaling.

I passed this to my Sales Ops Director with instructions to build a team-level version. She came back with a version that maps our AI use cases to specific verification requirements and escalation paths. That's actually useful as an organizational governance tool.

For an individual practitioner, the five-field card is the right scope. For an executive looking to deploy AI governance across a team, it needs to be a policy template, not a personal workflow tool.

One question I raised with our CISO: should the "Human Verification Owner" field be tied to role definitions? When AI-assisted content goes to a client, who is accountable? We're working that out separately, but this module surfaced the right questions.

---

## Section 7: Emotional/Learning Experience

**Rating: 5/10**

The module confirmed something I suspected: the AI errors my team has experienced are not flukes. They are structural features of how these systems work. That's sobering but useful information — I'd rather know than not know.

The emotional experience was one of controlled concern. I came in at about 6/10 on AI enthusiasm. I'm leaving at roughly the same number but with a more precise risk model. That's the outcome I wanted from this module.

I'll flag: the module is longer than it needs to be for executives. The key insight — AI hallucinates structurally, here's why, here's the mitigation — could be delivered in 20 minutes. The remaining 60–80 minutes is appropriate for practitioners who need depth. An executive summary track would serve leaders better.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** ~45 minutes (selective depth — full engagement on probability ranking and finance demo, skimmed the rest)

**Difficulty:** Not a relevant metric at my level. The concepts are accessible. The issue is relevance and appropriate depth for different roles.

---

## Section 9: Most Valuable Part

The hallucination mechanics framing — specifically that confident false content is structural rather than incidental.

This reframes AI risk from "quality problem we can solve with better tools or prompting" to "design characteristic we must manage with process controls." That distinction has direct implications for how we structure AI governance in sales and operations.

Second most valuable: the finance demonstration's illustration of confident gap-filling. Direct parallel to sales forecasting scenarios.

---

## Section 10: Weakest Part

The tokenization section and the software development demonstration.

Both are appropriate for their intended audience. Neither is the appropriate use of a VP's time in a module of this length.

A modular structure — with sections clearly labeled for depth of engagement (overview / practitioner / technical) — would allow executives to move efficiently through the relevant content without skimming through sections designed for other roles.

---

## Section 11: Missing Content

1. **Sales and revenue operations examples.** The module uses developer and finance scenarios. Sales pipeline, customer communication, forecast modeling, and account management are major AI use cases that warrant representation.

2. **Executive governance layer.** How do organizational leaders deploy these principles? Policy requirements, oversight structures, verification mandates, accountability frameworks.

3. **Risk tiering for business decisions.** A framework mapping AI task types to appropriate verification levels based on business consequence — from low-stakes internal drafts to high-stakes client-facing outputs to forecast-impacting analyses.

4. **Executive summary track.** A 20-minute version of this module covering only the governance-relevant insights for senior leaders who need the conclusion without the mechanism.

---

## Section 12: Final Evaluation

**Overall Rating: 6/10**

The module delivers one genuinely important insight for organizational AI governance: hallucination is structural and requires process controls, not just individual best practices. That insight is worth the time I spent.

The rest of the module is well-constructed for practitioners and not optimized for executive consumption. That's a reasonable design choice for a course primarily aimed at individual contributors. My recommendation is to add a leadership track or executive summary option for senior decision-makers who need the governance implications without the technical depth.

Delegating full technical engagement to my Sales Ops Director. Will take the governance framing and Control Card concept to our AI deployment review.

**Would I recommend to peers?** To direct reports and individual contributors, yes. To other VPs and C-suite: point them to the hallucination mechanics section and the Control Card concept. Skip the rest.

---

## Reviewer Summary

**Overall Rating:** 6/10
**Completion Status:** Selective — full engagement on probability ranking/hallucination and finance demo; delegated exercise to Sales Ops Director

**Executive-Level Takeaways:**
- Hallucination is structural, not incidental → requires process controls, not just training
- Finance demo maps directly to sales forecasting AI use cases → passed to Sales Ops Director
- Control Card escalated to organizational governance level → team policy development in progress

**Gaps for Executive/Leadership Audience:**
- No sales or revenue operations examples
- No organizational governance or deployment guidance
- No risk-tiering framework for business decisions
- No executive summary track — module assumes full practitioner engagement

**Organizational Actions:**
- Sales Ops Director reviewing pipeline modeling AI use for verification gaps
- CISO briefed on Human Verification Owner question and accountability framework
- Control Card being developed as team governance template
