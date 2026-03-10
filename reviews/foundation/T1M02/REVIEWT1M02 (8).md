# Course Module Feedback - Michelle Santos - R07

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 4/5**

From an instructional design standpoint, this module opens with appropriate scaffolding. The pipeline model (Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification) is a well-constructed advance organizer — it provides learners with a conceptual architecture before introducing component concepts, which aligns with Ausubel's assimilation theory and is consistent with best practices in cognitive load management.

The visual pipeline is particularly useful. Adult learners benefit from concrete structural representations before engaging with abstract concepts, and this pipeline serves that function well.

My concern at the opening stage: this module has a significant cognitive load risk for the non-technical learner population that constitutes the majority of my deployment target. In a firm with 2,800 employees, I estimate roughly 60–65% of our workforce falls into the "limited technical background" category (branch staff, administrative professionals, operations coordinators, client services representatives). The vocabulary density in the first two pages — tokenization, probability distribution, context windows, stochastic generation — will create immediate disengagement in that population.

The module needs either a tiered entry point (technical vs. non-technical learner tracks) or a more graduated vocabulary introduction strategy before I can recommend it for broad deployment.

---

## Section 2: Concept Explanation Quality

**Rating: 4/5**

Evaluating against Bloom's Revised Taxonomy, this module targets primarily the Understand and Apply levels, with some Analyze. That is appropriate for a practitioner-level AI literacy course. The concepts are sequenced logically and build on one another.

**Tokenization:**
The concept is explained accurately but with unnecessary technical depth for a practitioner audience. From an instructional design perspective, the principle of "minimum necessary complexity" applies here — learners need to understand that text is processed in chunks and that chunk boundaries affect context, but they do not need to understand tokenization mechanics at the level provided. I would recommend condensing this section to one conceptual paragraph plus one applied example, eliminating approximately 40% of current content.

**Probability Ranking / Hallucination Mechanics:**
This is the module's strongest instructional moment. The explanation is clear, accurate, and connected to observable learner experience (most learners have experienced an AI hallucination by the time they reach this module). The move from mechanism to implication — "this is why AI is confidently wrong" — is pedagogically sound. Learners can connect new knowledge to prior experience, which supports retention and transfer.

Recommendation: This section should anchor the module. Consider restructuring so the hallucination mechanics come earlier, with tokenization and probability ranking introduced as supporting explanation rather than front matter.

**Context Window:**
Explained clearly with an appropriate analogy. Directly applicable to common enterprise AI use cases (document summarization, email drafting, report analysis). Learners will recognize this from their own experience.

Overall: strong conceptual coverage, sequencing and density require revision before enterprise deployment.

---

## Section 3: Demonstrations/Examples

**Rating: 3/5**

The module includes two demonstrations. From an instructional design standpoint, demonstrations are critical for bridging conceptual understanding to application — they answer the adult learner's core question: "What does this look like in practice?"

**Software Development Demo (Code Review with Partial Context):**
This demonstration is instructionally sound for a developer audience. For an enterprise deployment serving a financially services firm, it is inappropriate as a primary example. The majority of our workforce has no professional context for code review scenarios. This demonstration will produce confusion or disengagement in the non-technical learner population.

Recommendation: Reposition as an optional supplementary example or move to an appendix. Replace with a workplace-relevant demonstration drawn from a non-technical professional context.

**Finance Demo (Incomplete P&L Analysis):**
This is more appropriate for a financial services deployment, though it will still create some distance for non-finance staff. The scenario — AI confidently completing a P&L with fabricated figures for missing data — is directly relevant to compliance and financial reporting risks in our industry.

From a Bloom's Taxonomy standpoint, this demonstration effectively moves learners from Understand to Analyze: they're not just seeing the concept, they're seeing its consequences. That's good instructional design.

What's missing: a demonstration from a clerical, administrative, or client-facing context. In my deployment environment, branch tellers, client service representatives, and operations coordinators are a major user population. They need to see the failure mode in a scenario that looks like their work — not a P&L they may never directly handle.

---

## Section 4: Guided Exercise

**Rating: 4/5**

The comparative prompt exercise — running unconstrained versus uncertainty-aware prompts against incomplete context — is an excellent instructional design choice. Active learning with immediate comparison of outcomes is one of the most effective methods for behavioral change in adult learners. This moves beyond declarative knowledge (knowing about hallucination) to procedural knowledge (knowing what to do about it).

I completed the exercise using a scenario relevant to my own work: asked an AI to summarize a training needs analysis report with a section of survey data omitted.

The contrast was striking and immediately useful for my own deployment planning.

Instructional design concerns:

1. **Missing success criteria.** The exercise does not define what a high-quality uncertainty-aware prompt looks like. Without clear success criteria, learners cannot self-assess whether they've met the learning objective. I would recommend a model answer, an annotated example, or a rubric.

2. **Role-differentiated scenarios.** The exercise should offer 2–3 scenario options representing different professional contexts (technical, analytical, administrative). This would increase transfer to diverse learner populations and is essential for enterprise deployment.

3. **Missing debrief structure.** Adult learning theory (Kolb's Experiential Learning Cycle) emphasizes the importance of structured reflection following active experience. There is no guided debrief prompt following the exercise. Adding 3–4 reflection questions would significantly improve learning consolidation.

---

## Section 5: Real-World Application

**Rating: 3/5**

The application guidance is directionally correct but underspecified for enterprise deployment purposes.

The principle — use uncertainty-aware prompting when context is incomplete — is sound. The guidance on human verification checkpoints is aligned with what I would recommend for a compliance-sensitive environment.

What's missing for my deployment context:

1. **Role-differentiated application examples.** Guidance on what uncertainty-aware prompting looks like for a loan officer vs. a customer service representative vs. a compliance analyst vs. a branch manager. These roles have meaningfully different AI use cases and risk profiles.

2. **Escalation guidance.** When does an uncertain AI output require escalation to a human expert vs. being handled by the frontline user? This is a critical gap for financial services, where escalation protocols are often regulatory requirements.

3. **Documentation requirements.** In regulated industries, there may be record-keeping requirements around AI-assisted decisions. The application section does not address this dimension.

The application section reads as though it was written for an individual knowledge worker making personal workflow decisions. It needs a team and organizational layer for enterprise deployment.

---

## Section 6: Portfolio Artefact

**Rating: 4/5**

LLM Reliability Control Card. This artefact is a strong instructional design choice: it creates a tangible, transferable tool that learners can use immediately in their work context. This is exactly the kind of performance support artefact that supports skill transfer beyond the learning event.

The fields — Task Type, Known Context, Missing Context, Required Constraints, Human Verification Owner — represent the essential dimensions of responsible AI deployment at a task level.

From a deployment standpoint, I see this artefact as potentially serving two functions in our firm:
1. An individual performance support tool (as designed)
2. A team-level governance artifact that could be standardized across departments

Recommendations for enterprise deployment:

1. Provide a completed example. Learning to use a new template requires a worked example before independent practice. This is a fundamental instructional design principle that the module currently skips.

2. Add a **Risk Level** field (Low / Medium / High) to enable proportional verification effort. In a financial services environment, the verification requirements for an AI-assisted compliance analysis are categorically different from an AI-assisted meeting summary.

3. Consider whether the "Human Verification Owner" field should be linked to role definitions in a financial services context — specific job roles may need to be designated as AI output verifiers for certain task types.

---

## Section 7: Emotional/Learning Experience

**Rating: 3/5**

My own learning experience was positive — the concepts built logically, the exercise was engaging, and I left with a clear framework I can apply.

However, I am not my target learner population. My concern is for the 60–65% of the workforce I would be deploying this to who do not have my educational background or comfort with conceptual frameworks.

From a learner experience standpoint, the module has a cognitive load problem in its opening third. The vocabulary density and technical depth will trigger Sweller's cognitive overload for lower-literacy learners before they reach the sections that would actually help them. Dropout risk is high for that population.

The emotional arc of the module — from "this is technical and overwhelming" to "this explains my actual experience with AI" — is the right shape. The problem is that many learners won't survive the opening third to reach the payoff.

Recommendation: front-load the relatable content (the hallucination examples, the "have you ever experienced AI being confidently wrong?" framing) and move the technical explanation to follow, rather than lead.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** ~100 minutes (including notes and exercise)

**Difficulty:** 3/5 for me personally.

For my deployment population, I would estimate:
- Technical staff and analysts: 2/5 difficulty, 75–90 minutes
- Knowledge workers and managers: 3/5 difficulty, 90–120 minutes
- Administrative and frontline staff: 4–5/5 difficulty, 120–180 minutes (with high dropout risk before completion)

This variability is a deployment planning problem. A single-track module that takes 120 minutes for a knowledge worker and 180 minutes for an administrative professional — with higher dropout risk for the administrative professional — creates equity and completion rate challenges in enterprise rollout.

---

## Section 9: Most Valuable Part

The probability ranking / hallucination mechanics section, both for its own content and for its instructional design quality.

This section demonstrates what the entire module should aspire to: a mechanism explanation that is immediately connected to observable learner experience, with clear implications for behavior change. The move from "here's why it happens" to "here's what you do about it" is executed well here.

From a deployment standpoint, this section alone could serve as a standalone micro-learning module (12–15 minutes) targeted at frontline staff who don't need the full technical context.

---

## Section 10: Weakest Part

The tokenization section, combined with the software development demonstration.

These two elements create a difficult opening for non-technical learners. The tokenization section is too technically detailed for a practitioner audience, and placing it early in the module — before learners have been given a compelling "why should I care about this?" — is an instructional sequencing error.

The software development demonstration compounds the problem by signaling to non-developer learners that this course may not be designed for people like them.

---

## Section 11: Missing Content

1. **Learner differentiation / tiered tracks.** A single-track module serving both technical and non-technical learners simultaneously will either be too technical for the non-technical learner or insufficiently deep for the technical one. I recommend at minimum offering a "core path" and an "extended path" with optional deep-dive sections flagged for technical audiences.

2. **Compliance and regulatory dimension.** For financial services, healthcare, legal, and other regulated industries, AI hallucinations aren't just embarrassing — they can be material to regulatory obligations. The module needs a section or callout addressing high-stakes professional contexts.

3. **Organizational deployment guidance.** How do teams implement what they've learned? The current guidance is entirely individually-focused. A section on team-level implementation — how to establish verification protocols, how to designate verification owners, how to create shared uncertainty-aware prompting standards — is essential for enterprise deployment.

4. **Role-differentiated examples throughout.** The module's examples should represent the full spectrum of professional roles likely to be in the learner audience, not just developers and analysts.

5. **Completed artefact example.** This is a pedagogical non-negotiable.

---

## Section 12: Final Evaluation

**Overall Rating: 3/5**

This module contains strong instructional content, particularly the hallucination mechanics explanation and the Control Card artefact. The comparative prompt exercise is well-designed. The pipeline advance organizer is appropriate.

However, the module has significant accessibility and deployment challenges for a diverse enterprise audience. The vocabulary density, the software development demonstration, the absence of role-differentiated examples, and the missing scaffolding for non-technical learners create an unacceptable dropout risk for approximately 60% of my target deployment population.

I cannot recommend this module for broad firm-wide deployment in its current form. I would recommend it without modification only for technical and professional staff with post-secondary education and some prior exposure to AI concepts.

For full enterprise deployment, I would require:
- A non-technical learner variant or companion guide
- Role-differentiated examples and scenarios
- Completed artefact example
- A structured exercise debrief
- A compliance and regulatory considerations callout for financial services contexts

**Potential as deployed:** High, conditional on revisions. The core curriculum is sound. The instructional design work needed is primarily about accessibility and differentiation, not content accuracy.

---

## Reviewer Summary

**Overall Rating:** 3/5 (institutional deployment assessment, not personal learning outcome)
**Completion Status:** Completed in full

**Deployment Assessment Summary:**

| Audience Segment | Readiness | Dropout Risk | Recommended Action |
|---|---|---|---|
| Technical staff / developers | Deploy-ready | Low | Use as-is |
| Knowledge workers / analysts | Deploy with support | Medium | Add role-differentiated examples |
| Administrative / frontline staff | Not deploy-ready | High | Requires non-technical track |
| Compliance / regulated-role staff | Deploy with modification | Medium | Add regulatory callout section |

**Critical Prerequisites for Full Deployment:**
1. Non-technical learner companion guide or tiered module track
2. Role-differentiated scenarios (at minimum: administrative, clinical/compliance, operational)
3. Completed artefact example with annotation
4. Structured exercise debrief questions
5. Compliance considerations callout

**Timeline Recommendation:** Module is suitable for pilot with technical staff cohort. Full deployment contingent on revisions above. Estimated revision scope: 15–20 hours of instructional design work.
