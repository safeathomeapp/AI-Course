# Course Module Feedback - Jasmine Patel - R05

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 9/10**

OKAY. This is the module I didn't know I needed.

I'll be honest — I came in thinking "I already know how this works, this will be review." Reader, it was not entirely review. The pipeline visualization (Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification) laid it out in a way that made me realize my mental model had some gaps. I thought I knew the flow but I'd conflated "context weighting" and "probability ranking" into one fuzzy thing in my head. Having them as distinct, named stages was genuinely clarifying.

The opening does a good job of making this feel like relevant information rather than academic theory. Whoever wrote the intro understood that practitioners need a "why should I care" upfront and delivered it. That's strong content strategy, actually.

VERY engaged from the start. This is what an AI module should feel like.

---

## Section 2: Concept Explanation Quality

**Rating: 4/5**

Running through the key concepts:

**Tokenization:**
Okay so I knew that AI processes text in tokens but I did NOT know about the implications of where token boundaries fall on how the model reasons about terminology. That's new information. In marketing we use a lot of brand-specific language, niche industry terms, and product vocabulary that might not align cleanly with how a model tokenizes familiar language. I've noticed AI sometimes handles our product name and features inconsistently — I'm now pretty sure this is partly a tokenization effect. That connection wasn't explicit in the module but I made it myself and I'll be testing it.

**Probability Ranking / Hallucinations:**
I thought I understood this but the framing here was NEXT LEVEL. "AI selects the most statistically probable continuation, not the factually correct one" — I've been telling my team this for months, but I've been saying it as received wisdom without really understanding the mechanism. Understanding it mechanically changes how I advise them. When I tell them AI might make up a statistic, I can now explain exactly why — it's predicting the most probable token sequence given the context, and a citation-style number might be highly probable even when no actual fact exists in the training data.

This module just made me a better AI educator for my team.

**Context Window:**
I understood this conceptually but the module helped me articulate it better. The explanation of how attention weights degrade for content far from the current generation position — that's a more precise version of "it forgets earlier context" that I can actually use when explaining to non-technical stakeholders.

Overall: excellent concept coverage. My only note is that I wanted MORE technical depth, not less, especially on the probability distribution mechanics.

---

## Section 3: Demonstrations/Examples

**Rating: 4/5**

Both demonstrations were solid. Let me be specific:

**Software Development Demo:**
Excellent scenario. Partial codebase context leading to confident but wrong explanation — this is something that matters to me right now because we're using AI-assisted code review on our product team and I've been wondering about the reliability implications. The demo helped me understand exactly where the failure lives. Going to bring this directly to our engineering lead.

**Finance Demo (Incomplete P&L):**
Also strong. The scenario of AI completing financial analysis with fabricated figures for missing data is directly relevant for marketing — I generate ROI reports and performance analyses. The idea that AI would confidently invent a number to complete a pattern is something I've seen in practice but couldn't have explained mechanically before this.

What would've been amazing: a marketing-specific demo. Something like AI generating a competitive analysis with fabricated market share figures because the brief didn't include the relevant data sources. That would have been 100% my world. Still gave this a 4 because the existing demos were well-constructed and both had relevant takeaways for me.

---

## Section 4: Guided Exercise

**Rating: 4/5**

The comparative prompt exercise was excellent — this is the kind of active learning that actually changes behavior, not just knowledge.

I ran it on a real campaign brief: asked AI to develop messaging for a new product launch feature with intentionally incomplete competitive context in the first version, then explicitly flagged the missing competitive data in the second.

First version: AI invented confident competitive positioning claims. They were plausible. They were also fabricated.

Second version: AI flagged the missing competitive context, gave conditional messaging options tied to different possible competitive scenarios.

The second version was harder to use right away but was ACTUALLY USEFUL rather than confidently wrong. This is a real workflow shift for how I brief AI on competitive marketing work.

One piece of feedback: I wanted the module to go further with this exercise — specifically, to show how to build uncertainty-awareness into a recurring prompt template, not just into a single prompt. Something like how to write a reusable brief template that systematically prompts for "what's missing" before generating. That feels like the natural next step.

---

## Section 5: Real-World Application

**Rating: 4/5**

The application guidance was solid and I found it actionable. The reframe of "AI is not withholding information — it's generating from pattern" is one I'm going to use when explaining AI reliability to stakeholders who ask "why didn't it just say it didn't know?"

What I'm adding to my own practice immediately:
- Systematic "missing context" check before any significant AI generation task
- Explicit uncertainty prompting for data-dependent content (market claims, competitive positioning, statistics)
- Control Card protocol for high-stakes content review

I would have liked more specifically on MARKETING AI use cases — the examples skew toward general knowledge work. But the principles are clear enough that the application was straightforward.

One thing that was MISSING: guidance on how to scale these practices across a team. I'm not just a solo user — I'm responsible for how my whole marketing team uses AI. How do you build uncertainty-aware prompting practices into a team workflow? Into a content production process? Into a style guide? That organizational layer is absent.

---

## Section 6: Portfolio Artefact

**Rating: 5/5**

The LLM Reliability Control Card is LEGITIMATELY GREAT.

Task Type / Known Context / Missing Context / Required Constraints / Human Verification Owner — this is a structured way to operationalize responsible AI use that I can actually deploy across a team.

I built this out into a Notion template within an hour of finishing the module. Added fields for: Source Documentation Required (yes/no), Risk Level (low/medium/high), and Final Review Owner (different from verification owner — the person who approves the output for external use vs. just checks it internally).

My team is going to use this. This is the artefact that makes the module worth taking for me — not because the concept is new, but because it's packaged in a way that I can actually deploy in a team process.

Giving this a 5 because it's exactly the kind of practical, professional tool this course should be producing.

---

## Section 7: Emotional/Learning Experience

**Rating: 5/5**

I love this module. I want to recommend it to every person on my team and also to my LinkedIn connections and possibly to my mom.

The emotional arc was: already-engaged → newly-engaged on specifics I didn't know → energized by the exercise → left the module feeling like a more sophisticated AI practitioner than when I entered.

The probability framing, specifically, was a "wait, I need to pause and actually think about this" moment in a way that modules rarely deliver. It didn't just give me new information — it gave me a better conceptual model that makes all my existing knowledge more precise.

The exercise was engaging in a way that felt like real work, not "course work." And the Control Card artefact is going into production immediately.

Honestly one of the strongest modules I've encountered in any professional training context, and I take a lot of professional training.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** ~80 minutes — I move fast through content when I'm engaged, and I was engaged throughout

**Difficulty:** 3/5 — accessible to a motivated learner with prior AI exposure; probably 5/10 for someone without. The concepts aren't hard if you're already using these tools and thinking critically about them.

---

## Section 9: Most Valuable Part

The probability ranking / hallucination mechanics, specifically the mechanistic explanation of WHY AI produces confident false information.

I've been explaining AI limitations to my team and to stakeholders for eighteen months using approximations. "It makes stuff up sometimes." "It doesn't actually know things, it predicts text." These are technically in the direction of right but they're imprecise. Now I have the precise version, and precise communication about AI behavior is going to be important as we build an AI feature into our product and have to explain its limitations to customers.

Secondary: the Control Card. That's going straight into production.

---

## Section 10: Weakest Part

The tokenization section could have gone deeper for technically-minded learners. I found it the right length but if I'm being constructive: the practical implications of tokenization for brand-specific vocabulary and domain terminology are not drawn out explicitly. That's the application that would matter most to marketing practitioners.

Also — this is a positive complaint — I wanted more. The module felt like it ended just as the really interesting material was getting going. A Part 2 that went deeper into model architecture, attention mechanisms, or RLHF would be a course I'd take.

---

## Section 11: Missing Content

1. **Team deployment guidance.** How do you scale these practices across a marketing team or a content production workflow? Individual prompting technique is covered well; team processes are completely absent.

2. **Marketing-specific application examples.** Competitive analysis, campaign briefs, content generation, market research synthesis — these are the high-stakes AI use cases in marketing and they're absent from the application section.

3. **Advanced probability discussion.** For technically-curious learners: more detail on how temperature and top-p sampling settings affect the probability-accuracy tradeoff would be fascinating. I know this gets into model configuration territory but it's directly relevant to AI behavior.

4. **What good uncertainty-aware prompting looks like at scale.** Not just one prompt but a prompt template or a system prompt that builds uncertainty-awareness in by default. This feels like the natural extension of what the exercise teaches.

---

## Section 12: Final Evaluation

**Overall Rating: 9/10**

This module exceeded expectations in the best way. It gave me mechanistic precision on concepts I was approximating, a genuinely useful exercise that produced a real workflow shift, and an artefact I'm deploying to my team immediately.

Docked one point because the marketing-specific examples are underdeveloped and the team/organizational deployment angle is absent. But the core content is excellent and the instructional design is strong.

This is what professional AI training should look like. More of this.

**Would I recommend this?** YES. ABSOLUTELY. Everyone on my team is getting a link to this.

---

## Reviewer Summary

**Overall Rating:** 9/10
**Completion Status:** Completed in full (~80 minutes)

**Standout Elements:**
- Probability ranking / hallucination mechanics: upgraded my mental model from approximation to precision
- Exercise: directly changed competitive marketing brief workflow
- Control Card: deployed to team as Notion template within 1 hour of module completion; added fields for Risk Level, Source Documentation Required, Final Review Owner

**Gaps for Marketing/Team Context:**
- No team deployment guidance for organizational AI practice
- Marketing-specific examples absent from application section
- No advanced material for high-engagement learners who want more depth

**Deployment Action:** Recommending to full marketing team. Briefing engineering lead on software dev demo findings for product team context. Using Control Card as standard template for high-stakes content generation.
