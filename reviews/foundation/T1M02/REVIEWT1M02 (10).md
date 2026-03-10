# Course Module Feedback - Jordan Martinez - R09

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 3/5**

First honest reaction: this looks like a detour.

"How Large Language Models Actually Work" is the kind of title that signals we're going to spend time understanding the car engine before we talk about how to get somewhere. As a solo operator, time is my most constrained resource. If this module doesn't have a clear and immediate payoff for how I work, I'm going to resent every minute I spend in it.

I'll give it this: the pipeline diagram (Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification) communicated the core value proposition faster than the text did. I looked at that and thought "okay so the Human Verification step is probably where I'm failing and that's what this module is going to be about." Close enough to keep me reading.

What I needed in the opening: one sentence that clearly states the business case. Something like: "Understanding how AI generates output will help you reduce the time you spend fixing AI mistakes and improve the reliability of client-facing deliverables." That would have bought my engagement immediately. Instead I had to infer it from context, which added unnecessary friction.

---

## Section 2: Concept Explanation Quality

**Rating: 3/5**

Alright, running through the big three:

**Tokenization:** This section went deeper than I needed. I get it — text gets processed in chunks, chunk boundaries matter, unusual vocabulary gets handled inconsistently. Understood. What I needed was a clearer connection to outputs I care about: why does AI sometimes handle brand names or specialized marketing terms inconsistently? Why do certain technical terms appear in weird forms in AI output? Those are the tokenization effects that show up in my deliverables. I could infer the connection, but it should have been made explicit.

**Probability Ranking / Hallucination:** This is where the module delivered. "AI selects the most statistically probable continuation, not the factually accurate one" — this is the thing I've been operating around without fully understanding. I know AI makes stuff up. I've had clients nearly send out content with fabricated statistics that looked authoritative. I've caught AI-invented case study details that weren't true. Understanding that this happens because AI is optimizing for probability rather than truth makes the failure mode feel like something I can manage systematically rather than just guard against randomly.

This is genuinely valuable insight that I'll use. But I want to flag: the value was in the application, not the mechanism. I didn't need the full probability distribution math. I needed "this is when and why it happens, and here's the systematic fix."

**Context Window:** Useful and immediately applicable. I regularly work with large briefs, long email threads, and extensive research docs. Understanding that AI's ability to maintain context degrades with document length explains a lot of variability I've seen in output quality.

---

## Section 3: Demonstrations/Examples

**Rating: 3/5**

Two demonstrations. One mostly relevant, one not.

**Software Dev Demo:** Not my world. I sat through it, understood the principle, and moved on. My clients include some tech companies, but I'm writing marketing copy, not explaining codebases. This demo was dead time for me.

**Finance Demo (Incomplete P&L Analysis):** More relevant. I work with clients on marketing ROI reporting and I've seen AI generate confident financial narratives from incomplete data. The specific mechanism — AI fills gaps with plausible-sounding fabrications because that's the most probable completion — is directly applicable to my content work.

What I actually needed: a marketing or content creation demo. Something like: AI generating a thought leadership piece based on an incomplete brief, and confidently inventing statistics, company details, or market claims to complete the narrative. That is my exact professional risk scenario. It's absent from the module.

The demonstrations are well-constructed for the scenarios they cover. The coverage is just incomplete for marketing and content professionals.

---

## Section 4: Guided Exercise

**Rating: 4/5**

Comparing unconstrained vs. uncertainty-aware prompts on incomplete context. I ran this with a real client scenario — an AI-assisted competitive analysis where I intentionally omitted the client's specific differentiators and target segment.

Unconstrained version: produced fluent, confident competitive analysis that invented specific competitive advantages and market position claims that weren't grounded in the brief. Would have needed significant fact-checking before it could be used.

Uncertainty-aware version: surfaced the gaps explicitly, noted that it was making assumptions about positioning, produced conditional analysis that was rougher but more honest about what was unknown.

The practical lesson landed: the second version takes a little more setup but saves time in the revision and fact-checking stage. For client deliverables, that tradeoff is clearly worth it.

Issue: the exercise instructions assumed a document scenario. I had to adapt for a briefing/research scenario. Would be helpful to have a marketing or consulting variant built into the exercise options.

---

## Section 5: Real-World Application

**Rating: 3/5**

The application guidance was fine for a general audience. For a solo operator doing client marketing work, it needed to go further.

What would have made this section valuable for my context:

1. **Client deliverable risk tiers.** What types of marketing outputs carry the highest hallucination risk and require the most rigorous verification? (Statistics and data claims = very high. Tone and messaging = lower. Factual company details = high.) A quick matrix would be immediately deployable.

2. **Efficiency tradeoffs.** I'm using AI because it makes me faster. The guidance correctly says "build in human verification" — but for a solo operator, human verification means me reviewing my own AI outputs, which has a time cost. When is that cost justified and when am I being overcautious? The module doesn't engage with this tradeoff.

3. **Client communication.** Do I disclose when AI was involved in generating client content? The module doesn't touch this question. For a consultant, it's actually a business decision, not just an ethical one.

---

## Section 6: Portfolio Artefact

**Rating: 4/5**

LLM Reliability Control Card. Task Type / Known Context / Missing Context / Required Constraints / Human Verification Owner.

As a solo operator, I immediately adapted this. My version has: Client, Task Type, Brief Completeness (estimated %), Known Context, Missing Context, Verification Method (fact-check / stakeholder review / client sign-off), Time to Verify (estimate).

I've built this into my client onboarding process now. When I take on new AI-assisted work, I go through this card before starting. Two outcomes: it surfaces briefing gaps I can resolve before I start (reducing rework), and it gives me a structured log of what was and wasn't verified (useful for QA conversations with clients).

The core artefact design is right. The customization I needed was minor.

One suggestion: include a "Confidence Level" field — my subjective assessment of how confident I am in the AI output before verification. This helps prioritize where I spend verification time when I'm running tight on time.

---

## Section 7: Emotional/Learning Experience

**Rating: 3/5**

My relationship with this module was transactional, and I want to be upfront about that. I wasn't here for intellectual enrichment — I was here for operational improvement.

The module delivered on that more than I expected it to. The probability framing for AI hallucinations is a genuine insight that changes how I plan my verification workflow. The exercise produced a directly usable result. The Control Card is already in my process.

What the module didn't do: acknowledge the tension between knowing all this and still needing to use AI at speed to remain competitive as a solo operator. The guidance is epistemically correct — verify more, prompt more carefully — but it lives in a world where time isn't a constraint. For me, time is the whole constraint. I would have appreciated some acknowledgment that uncertainty-aware prompting is a higher time investment and that's a real tradeoff, not just a failure to do the right thing.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** ~65 minutes (skimmed the software dev demo, moved fast through the tokenization deep dive, spent more time on the exercise)

**Difficulty:** 3/5 — accessible. The concepts are clear if you're willing to engage with them.

For a solo operator running back-to-back client work: the 75-120 minute time investment is a real cost that should be acknowledged in the value proposition. This module is worth it. But the ROI case should be made upfront.

---

## Section 9: Most Valuable Part

The probability ranking / hallucination mechanics framing plus the exercise contrast.

I've been operating on a rough intuition that "AI makes stuff up sometimes" for eighteen months. Understanding the mechanism — AI optimizes for probable continuation rather than accurate continuation — makes the failure mode predictable rather than random. I can now think about which tasks have high hallucination probability (data claims, specific figures, unusual facts) versus low (formatting, structure, tone). That distinction changes my workflow.

The exercise contrast was the moment where the concept became operational. Seeing the difference between a prompt that invites fabrication and a prompt that invites epistemic honesty was worth the time investment by itself.

---

## Section 10: Weakest Part

The software development demonstration and the tokenization deep dive.

Both of these are appropriate for some audiences and not for mine. As someone doing marketing and consulting work, I don't need to understand tokenization mechanics at the level provided, and I don't have professional context for code review scenarios. Those sections were time I spent getting back to the useful parts.

---

## Section 11: Missing Content

1. **Marketing and content-specific examples throughout.** The module uses software development and finance as its reference scenarios. Marketing professionals, consultants, and communications specialists are a huge AI user segment. We need to see the failure modes in our own work contexts.

2. **Efficiency tradeoff guidance.** When does uncertainty-aware prompting cost more time than it saves? When is quick verification good enough versus when do you need full source-checking? The module advocates for rigor without acknowledging the time cost for solo operators.

3. **Client deliverable risk classification.** A quick guide to which content types carry the highest hallucination risk for marketing work specifically.

4. **Statistics and data claims specifically.** This is the single highest-risk hallucination scenario for my client work. AI invents statistics that look credible. The module mentions hallucination generally but doesn't give specific guidance for numerical claim verification.

---

## Section 12: Final Evaluation

**Overall Rating: 3/5**

The module delivered real value but took longer to get there than necessary for my context. The probability framing is a genuine insight. The exercise was directly useful. The Control Card is in my workflow.

But the module wasn't built for solo operators and it shows. The examples skew technical and finance-focused, the time investment isn't acknowledged as a real cost, and the guidance assumes you have the bandwidth to build in systematic verification at a level that doesn't fully account for the pace of client-facing consulting work.

Net assessment: worth completing, needed more marketing context, and the ROI case should be stated upfront rather than inferred.

**Would I recommend this to fellow consultants?** Yes, with a note: skim the software dev demo, go deep on probability ranking and the exercise, and adapt the Control Card for your client workflow.

---

## Reviewer Summary

**Overall Rating:** 3/5
**Completion Status:** Completed (selective depth)

**ROI Assessment for Solo Operators:**
- Probability framing → predictable failure mode → smarter verification allocation: high value
- Control Card in client onboarding process: operational improvement
- Exercise contrast: directly changed prompt writing approach for client deliverables

**Primary Gaps for Consulting/Marketing Audience:**
- No marketing-specific examples or demonstrations
- No efficiency tradeoff acknowledgment (uncertainty-aware prompting has a time cost)
- No guidance specific to statistics and data claim verification
- No client disclosure or professional responsibility dimension

**Artefact:** Control Card adapted with Client, Brief Completeness %, Verification Method, Time to Verify fields. Built into client onboarding process.
