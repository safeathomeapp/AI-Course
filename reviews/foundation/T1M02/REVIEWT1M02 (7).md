# Course Module Feedback - Alex Rivera - R06

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 4/5**

I want to describe what happened when I read the module title: a quiet internal brace for impact.

"How Large Language Models Actually Work" could easily be one of two things — either a technology lecture that assumes I want to become a machine learning practitioner, or something genuinely clarifying about a tool that has become central to my professional life in ways I haven't fully reckoned with. I was prepared for the first and hoping for the second.

The pipeline diagram — Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification — was immediately interesting to me. Not because of the technical detail, but because of the shape of it. I write for a living, and I've been trying to understand why AI writing feels different in a way I can sense but have struggled to articulate. Seeing the generation process laid out as a sequence of probabilistic transformations rather than a cognitive act gave me a new conceptual frame before I'd read a paragraph of explanation.

I noticed I was slightly anxious going in. I'm not sure I wanted to understand this too well.

---

## Section 2: Concept Explanation Quality

**Rating: 4/5**

The conceptual heart of this module is the probability ranking section, and I want to engage with it seriously because it's doing something important.

The explanation that AI generates text by selecting statistically probable continuations — not by retrieving or reasoning about truth — is not a new idea to me in the abstract. But this module articulated it in a way that landed differently. "AI is not searching for the right answer. It is searching for the probable answer." That formulation, or something close to it, is the axis around which my professional relationship with AI should probably turn, and I'm not sure I'd fully accepted it before this module.

What does it mean that AI writing is fundamentally probabilistic? It means that AI text that sounds authoritative is doing so because authority is statistically common in certain textual contexts, not because the underlying claims have been verified. The confidence is structural, not epistemic. I find this both clarifying and quietly disturbing in roughly equal measure.

The tokenization section was less resonant for me — mechanically clear, but I'm not sure what I'm supposed to do with the information. I understand that text is broken into tokens. I understand that token boundaries affect processing. What I wanted was more connection between this mechanism and observable effects on writing quality and coherence.

The context window explanation was useful. I've experienced the way AI seems to "forget" earlier context in long documents. Understanding that this is a structural limit rather than something that could be fixed with better prompting changes how I plan longer content projects.

---

## Section 3: Demonstrations/Examples

**Rating: 3/5**

I'm conflicted about the demonstrations.

The software development demo is clearly not aimed at me. I don't write code. I can follow the logic — partial context leads to confidently wrong explanation — but I have no emotional connection to the scenario. I understand why it's included. I would have appreciated a note acknowledging that non-technical learners should focus on the finance example as the more universally relevant illustration.

The finance demo worked better. The scenario of AI completing an analysis with fabricated details for missing data is directly transferable to content work. I've been asked to use AI to summarize research reports, synthesize interview findings, draft content based on incomplete briefs. The question of what AI does when the source material doesn't contain enough information to actually answer the question — whether it flags the gap or invents a plausible answer — is one I care about deeply.

What I wanted: a demonstration drawn from content or editorial work. Something like: AI is given a brief with missing information about the target audience and asks it to generate a thought leadership piece. Watch what happens. That demonstration would have connected the concepts to my actual practice in a way neither of these did fully.

---

## Section 4: Guided Exercise

**Rating: 4/5**

I ran the comparative prompt exercise with a real content scenario: I gave an AI model an incomplete content brief — missing the target audience definition and the specific outcome we wanted readers to reach — and compared the output to one where I explicitly noted those gaps and asked the model to flag its assumptions.

The contrast was striking.

Unconstrained version: the AI wrote confident, polished content that reflected generic assumptions about audience and purpose. It was competent in the way that generic content is competent. It was also, on close inspection, not the content I needed.

Uncertainty-aware version: the AI surfaced the gaps explicitly, described what assumptions it was making to proceed, and noted where the output might need to be revisited when I had the missing information.

The second version took more time and produced rougher draft content. But it gave me something I could actually work with and revise. The first version gave me something polished that was going to mislead me into thinking I was closer to done than I was.

This is, I think, one of the more important things I've learned from any module in this course. I've been choosing efficiency over clarity and not fully understanding the cost.

---

## Section 5: Real-World Application

**Rating: 4/5**

The application guidance connected to my work in ways I didn't entirely expect.

The framing of uncertainty-aware prompting — being explicit about what information you have, what you're missing, and what you need the AI to flag rather than fill in — maps directly onto the content development process. A brief is almost always incomplete. Sources are almost always partial. The question is whether I want AI to pretend otherwise or to be explicit about the limitations.

I also found the Human Verification framework more useful than I did in Module 1, now that I understand the mechanism. Knowing that AI's confidence is structural rather than epistemic makes the verification requirement feel less like a disclaimer and more like a design principle.

Where I'm still wrestling: the application guidance talks about "when context is incomplete" as a condition to manage. But in content work, context is almost always incomplete. Every brief has gaps. Every research source leaves something out. I'm not sure there's a mode of content work where I have sufficient context that I don't need to use uncertainty-aware prompting. The module helped me understand the problem; I'm still working out what it means for my practice.

---

## Section 6: Portfolio Artefact

**Rating: 4/5**

The LLM Reliability Control Card. Task Type, Known Context, Missing Context, Required Constraints, Human Verification Owner.

I built one for content strategy work and found it genuinely useful as a forcing function. The "Missing Context" field in particular made me enumerate things I usually leave implicit — target audience definition, content purpose, success criteria, constraints on tone or claims. Making those explicit before prompting has changed how I write briefs.

My one piece of feedback: the "Human Verification Owner" field assumes a team context where verification can be delegated. As a senior strategist, I often work with clients directly, and the verification is mine. It might be worth having a field for "Verification Method" — not just who verifies, but how. In content work, verification looks different for factual claims (source check), for tone (stakeholder review), and for strategic alignment (client sign-off). Those are different processes.

---

## Section 7: Emotional/Learning Experience

**Rating: 3/5**

I want to be honest here. This module gave me something useful and also something uncomfortable in roughly equal measure, and I'm not sure whether to rate that high or low.

The probability framing for AI writing has clarified something that's been sitting at the edge of my professional anxiety for two years. AI writing sounds authoritative because authority is a textual pattern it has learned, not because the content has been tested against reality. That is, in a precise sense, what I've been worrying about without being able to articulate it.

There's a part of me that is relieved to have a clear framework for this. There's another part of me that finds the implications for my field quite unsettling. Content strategy has always been about the gap between what can be said compellingly and what is actually true. AI widens that gap in ways I think the industry hasn't fully reckoned with.

The module gives me tools. It also gives me more to worry about. I'm not sure that's a criticism — it might just be the honest outcome of engaging seriously with this material.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** ~110 minutes (took my time with the probability ranking section and the exercise; sat with the application section longer than necessary because I was working through implications)

**Difficulty:** 3/5 — accessible if you're willing to engage with abstract concepts. The exercise required genuine thought for me and produced something I'll actually use.

---

## Section 9: Most Valuable Part

The probability ranking / hallucination mechanics section, and specifically the formulation of AI confidence as structural rather than epistemic.

I've been working with AI tools for eighteen months. I've developed intuitions about when to trust outputs and when to verify. But I hadn't had a clear conceptual framework for why confident AI output can be deeply wrong in ways that are harder to detect than obvious errors.

Understanding that AI is optimizing for probable continuation rather than accurate continuation explains a specific failure mode I've observed: outputs that are subtly wrong in the middle of long sections, where the probabilistic pressure from surrounding text is strong enough to produce plausible-sounding claims that don't hold up to scrutiny. I've caught these. I now understand what I was catching.

---

## Section 10: Weakest Part

The software development demonstration, for the audience mismatch it represents.

I understand why it's there. Developers are a major AI user segment and the code context example is a clean illustration of partial-context hallucination. But it creates a moment early in the module where non-technical learners feel like the module was designed for someone else.

The tokenization section also ran longer than it needed to for a practitioner audience. The mechanism is interesting but the practical implications could have been surfaced faster.

---

## Section 11: Missing Content

1. **A content and editorial demonstration.** AI completing a piece of thought leadership or a feature article based on incomplete briefing, fabricating specific claims or quotes to fill gaps. That demonstration would land for the large population of content professionals, marketers, and communicators taking this course.

2. **The ethical dimension of probabilistic confidence.** The module explains the mechanism but doesn't engage with the implications for fields where the distinction between "sounds authoritative" and "is accurate" carries real weight — journalism, medical communication, legal writing, policy work. A brief acknowledgment of this dimension would make the module more complete.

3. **Hallucination in long-form content specifically.** How does the probability optimization failure mode manifest differently in a 200-word email versus a 3,000-word report? Long-form content generation has different risk profiles than short-form, and content professionals need to understand this.

4. **What "sufficient context" looks like in practice for different content tasks.** Not just "provide context" as a principle, but practical guidance on what adequate context actually consists of for different types of content work.

---

## Section 12: Final Evaluation

**Overall Rating: 4/5**

This is the module that gave me the most to think about. Not because it answered all my questions, but because it gave me a more precise framework for the questions I was already holding.

The probability framing for AI generation is genuinely illuminating. The exercise produced something I'm still using. The Control Card is in my workflow.

The module doesn't engage fully with the professional and ethical dimensions of what it's explaining — but that's probably not within scope, and a separate module or resource on that would be appropriate. What this module does, it does well.

I came in at 5/10 on AI favorability. I'm leaving at roughly the same number, but for clearer reasons. The ambivalence hasn't resolved. It's just better informed now.

---

## Reviewer Summary

**Overall Rating:** 4/5
**Completion Status:** Completed in full

**Key Conceptual Shifts:**
- AI confidence is structural (probabilistic) not epistemic — reframes how I evaluate authoritative-sounding outputs
- Uncertainty-aware prompting changed my brief-writing workflow immediately
- Context window as structural limit (not a fixable behavior) changes how I plan long-form content projects

**Ongoing Tensions:**
- Implications for content strategy as a field: the gap between "sounds authoritative" and "is accurate" is structurally wider with AI; industry hasn't reckoned with this fully
- Module gives tools but also surfaces larger questions it doesn't fully engage with

**Artefact Usage:** LLM Reliability Control Card in workflow for content projects; "Missing Context" field has changed how I write briefs; added "Verification Method" field for content-specific verification types.

**Recommendation:** Valuable for content and communications professionals, with addition of editorial demonstration and optional section on professional responsibility implications.
