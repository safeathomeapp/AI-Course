# Course Module Feedback - Marcus Chen - R01

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 6/10**

Honest first reaction: "Do I really need to know how the engine works to drive the car?" Title felt like it was aimed at developers or tech people, not ops analysts. Almost skipped this one and moved ahead.

Glad I didn't.

About 10 minutes in, when the hallucination mechanics started coming up, I realized this was actually the module I'd been missing for two years of frustrated ChatGPT use. The pipeline diagram — Input → Tokenization → Context Weighting → Probability Ranking → Output → Human Verification — actually made sense to me. I think like process flows. That visual framing helped.

Still think the title is working against it. "Why AI Makes Confident Mistakes (And What To Do About It)" would get more ops people through the door. "How Large Language Models Actually Work" sounds like an IT certification prep course.

---

## Section 2: Concept Explanation Quality

**Rating: 3/5**

Tokenization: got it eventually but took too long to get to the "so what." I understand that text gets broken into tokens and tokens get processed. Fine. But I wanted the payoff in the first paragraph — why does this matter for someone pasting data into ChatGPT? The connection came, but it came late.

Probability ranking: this is where the module earned its keep. The explanation that AI selects the statistically most likely next word — not the factually correct one — was the insight I've needed for two years. Every time ChatGPT has given me an XLOOKUP formula with invented arguments, or a SUMPRODUCT structure that just doesn't work, it wasn't malfunctioning. It was doing exactly what it does: averaging across patterns in its training data. That reframe is genuinely useful.

Context window: clear and well-explained. The analogy about only being able to see part of a document at a time landed. I immediately thought about what happens when I paste a 500-row pivot table into ChatGPT — now I understand why the analysis sometimes goes sideways on larger files.

Net-net on concept quality: good material, sequencing needs work. The probability ranking section should come first. Lead with the hallucination explanation, then work backwards to why it happens mechanically.

---

## Section 3: Demonstrations/Examples

**Rating: 5/10**

Two demonstrations. One worked for me. One didn't.

**Software Development Demo (Code Review with Partial Context):**
Not my domain. I sat through it and understood the mechanics being illustrated, but I had zero emotional connection to the scenario. "AI explains partial codebase incorrectly" — okay, sure, I believe that. But it might as well have been written in another language for all the professional relevance it had to my day-to-day.

I get it — developers are a huge chunk of the AI user base. But if you're going to include a technical demo, include a note acknowledging that non-developers should see the finance example as the more relevant one. Don't leave ops/data people to sit through a code review wondering when they'll see something that applies to them.

**Finance Demo (Incomplete P&L Analysis):**
This one hit. AI confidently filling in P&L gaps with fabricated numbers is a real operational risk that I think about. I do monthly performance reports. I've had AI "helpfully" invent variance explanations when source data was ambiguous. Seeing that illustrated clearly — and seeing the fix (uncertainty-aware prompting that flags missing data instead of fabricating answers) — was directly applicable.

This demo should anchor the module. Lead with the finance scenario, use it to illustrate the probability ranking mechanics, then bring in the code example as supplementary.

Missing entirely: an Excel/data analysis demo. Something like: you paste an incomplete pivot table into ChatGPT and ask it to explain the trend. Context window gets the headers but not the row data. Watch what happens. That would be the most directly useful demonstration for ops/finance/data roles.

---

## Section 4: Guided Exercise

**Rating: 7/10**

Compare unconstrained vs. uncertainty-aware prompts using incomplete context. Good exercise. I adapted it on the fly to a real work scenario — pulled a headcount variance report with some columns redacted and ran both prompt versions against it.

Unconstrained version: ChatGPT invented a confident narrative. Completely made up the reason for the headcount change.
Uncertainty-aware version: flagged missing data, gave me conditional analysis.

That comparison was genuinely eye-opening. I've been running Version 1 prompts across the board without thinking about it.

Two issues:

1. The exercise instructions assumed a text-based scenario (writing a report or explaining a document). It took me a minute to adapt to a spreadsheet context. Would be better to offer a "data analyst" variant alongside the default scenario.

2. The success criteria weren't explicit enough. What does a "good" uncertainty-aware prompt look like versus a "mediocre" one? I completed the exercise but wasn't sure if my prompt was excellent or just okay. Some annotated examples of strong vs. weak versions would help.

---

## Section 5: Real-World Application

**Rating: 3/5**

The application guidance was solid in principle but generic in execution. The framing of "use uncertainty-aware prompting whenever context is incomplete" is correct, but the examples stayed at a surface level that required constant mental translation for me.

What I wanted:
- How does context window limitation apply specifically to spreadsheet data?
- What's the recommended approach when your data file is larger than the context window?
- How do you structure a prompt when you're working with structured data (tables, pivot reports) vs. free text?

What I got: general guidance that maps reasonably well to knowledge work but doesn't account for the specific challenges of data-heavy operational roles.

The callback to Module 1's Human Review framework was a nice structural touch. "AI outputs need verification, especially under incomplete context" — yes, understood, and now I understand mechanically why. That connection landed.

---

## Section 6: Portfolio Artefact

**Rating: 8/10**

LLM Reliability Control Card. This is my kind of deliverable.

Task Type / Known Context / Missing Context / Required Constraints / Human Verification Owner — five fields, structured, scalable. I built an actual Excel version of this within an hour of finishing the module. Added conditional formatting to flag "Missing Context" cells in red when populated, and a dropdown for "Human Verification Owner" tied to our team roster.

The artefact template is the right shape. Two additions I'd recommend for data-heavy roles:

1. **Data Completeness %** — a field to estimate what percentage of relevant context is actually available. Helps prioritize verification effort.
2. **Verification Method** — not just WHO verifies, but HOW. Source check against original data? Cross-reference with a second model? Manual calculation? Makes the card actionable rather than just tracking accountability.

This is something I'll put in front of my manager next week. Concrete, professional, defensible. Good artefact design.

---

## Section 7: Emotional/Learning Experience

**Rating: 3/5**

Started resistant, finished engaged. That arc is worth noting for course design purposes.

The shift happened specifically at the probability ranking section. Two years of frustrated AI interactions crystallized into a single reframe: this isn't random malfunction, it's predictable behavior I can manage. That moment of "oh, NOW I get it" is the feeling that makes a module worth taking.

The software dev demo knocked me back out of that flow state. Sitting through a code review scenario when I don't write code felt like the course was talking to someone else. It's a minor thing in isolation, but it's the kind of thing that accumulates — when examples consistently don't match your professional context, you start to feel like the course wasn't built for you.

Ended the module in a good place. The Control Card gave me something concrete to do with what I'd learned, which mattered.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** ~90 minutes (I took notes and ran the exercise with a real work scenario)

**Difficulty:** 6/10

The technical sections (tokenization mechanics, probability math) were the heaviest. Not impenetrable — if you read carefully, it tracks. But the density there is higher than it needs to be for practitioners who don't need to understand the mechanism at that level of detail.

The exercise was the most time-consuming component and the most valuable. That's the right tradeoff.

---

## Section 9: Most Valuable Part

Probability ranking / hallucination mechanics. No contest.

"AI selects the most statistically likely next word, not the correct one" — that sentence reframed two years of frustration into a manageable operational variable. I now understand why Excel function hallucinations happen, when they're more likely (low-training-data edge cases, obscure functions), and how to structure prompts to reduce them.

That insight alone is worth the 90 minutes.

---

## Section 10: Weakest Part

The tokenization deep dive. Too much mechanism, not enough "so what."

I understand that tokens are fundamental to how the model processes input. But for a practitioner course aimed at business users, the level of technical depth on tokenization was excessive. You could cut it to one-third of its current length — keep the core concept, skip the detailed mechanics — and lose nothing of practical value for this audience.

The software dev demo is a close second. It's well-constructed but irrelevant to a large segment of the audience.

---

## Section 11: Missing Content

1. **Excel and structured data examples throughout.** The entire module uses text-based or code-based scenarios. Ops analysts, finance teams, and data professionals are a major AI user demographic. We need to see AI behavior with spreadsheets, structured tables, and data files — not just documents and codebases.

2. **Context window limits in practice for data work.** At what point does a large spreadsheet exceed context window limits? What actually happens? What's the recommended workaround?

3. **Model comparison.** Does GPT-4 hallucinate differently than Claude or Gemini? The module treats "AI" as a single monolithic system. In practice I'm using multiple tools and they behave noticeably differently.

4. **High-risk vs. low-risk task classification for data analysis.** A quick matrix: which data analysis tasks are high-hallucination-risk and require strict verification, vs. which are low-risk and can run more autonomously?

---

## Section 12: Final Evaluation

**Overall Rating: 7/10**

Good module with a strong central insight that delivers real practical value. The hallucination mechanics explanation and the Control Card artefact are genuine wins. The tokenization section is overbuilt for a practitioner audience, and the software dev demo is a miss for non-technical roles.

Would score it 8/10 as a general AI literacy module. 6/10 on direct relevance to my specific ops/data analyst role.

I'll use what I learned. The uncertainty-aware prompting concept is going into my daily workflow starting now, and the Control Card is going onto my team SharePoint this week.

**Would I recommend this module to colleagues?** Yes — with a heads-up that the technical section in the middle is dense and they should push through it. The payoff is real.

---

## Reviewer Summary

**Overall Rating:** 7/10
**Completion Status:** Completed in full

**Key Takeaways:**
- Probability ranking / hallucination mechanics reframed two years of AI frustration as a manageable systems problem
- LLM Reliability Control Card immediately converted to Excel template; will deploy to team
- Uncertainty-aware prompting entering daily workflow

**Primary Gaps:**
- No Excel or structured data examples despite data professionals being a major user segment
- Software dev demo irrelevant to non-technical roles
- Tokenization section overbuilt for practitioner audience

**Deployment Recommendation:** Include with caveat — pair with supplemental data analysis examples for ops/finance audiences.
