# Course Module Feedback - Sam Kowalski - R13

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 3/5**

Ok so.

My first reaction to the title "How Large Language Models Actually Work" was something between dread and interest? Dread because technical modules are usually the ones that cause me to spiral into executive dysfunction and abandon courses. Interest because I've been using these tools for ten months and I genuinely don't understand why they do the things they do.

The pipeline diagram — Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification — was helpful to see upfront. I'm a visual thinker and having a structure to hang concepts on before diving into the text helps a LOT. I took a photo of it on my second monitor so I could reference it while reading (I use dual monitors — one for course, one for notes/the thing I'm actually doing).

But then the text started and there was a wall of paragraph about tokenization and I had to stop, take a breath, and remind myself I was allowed to come back to this in pieces.

(Took this module over 4 sessions. Session 1 was the first two sections. Sessions 2-3 were the middle sections plus the exercise. Session 4 was cleaning up and doing the portfolio artefact. Stated time is 75-120 min. I probably spent 3+ hours but time tracking is genuinely hard for me.)

---

## Section 2: Concept Explanation Quality

**Rating: 3/5**

Ok so this is where it gets complicated for me. The concepts are actually interesting. The explanations are — I think — pretty good? But the formatting made them really hard to absorb.

**Tokenization:** I had to read this section four times. Not because the concept is that complex — I eventually understood it — but because the paragraphs are long and dense and my ADHD brain just... slides off the text. By the time I get to the end of a four-sentence paragraph, I've lost the thread from the beginning. Short paragraphs with one idea each would help so much here.

What finally made it click for me: I thought about it like how my screen reader breaks text into chunks when I'm using text-to-speech (which I do sometimes when my reading focus is low). That analogy worked. It wasn't in the module — I invented it. A built-in analogy like that would help.

**Probability Ranking / Hallucinations:** This is the section I hyperfocused on and did not leave for like 45 minutes. I genuinely found this fascinating. The idea that AI is selecting probable words rather than accurate words explains SO much about my specific experience using it. I use AI to organize scattered thoughts, and I've noticed that the outputs sometimes drift toward generic, averaged-out language that sounds like "AI" rather than me. Now I understand why — it's selecting toward statistical patterns, not toward my actual voice. That's a real UX research insight actually.

(side note: this also explains why my "what are the themes in these interview quotes" AI outputs sometimes feel weirdly generic — the AI is finding the most statistically probable synthesis, not necessarily the most accurate one. Going to think more about implications for my work.)

**Context Window:** Clear and useful. Made sense quickly. I connected it to why ChatGPT seems to "forget" what I said earlier in a long conversation — it's not forgetting, it's running out of window. This makes me less frustrated and more strategic about how I structure long AI sessions.

---

## Section 3: Demonstrations/Examples

**Rating: 2/5**

The software development demo — not relevant to my work and the code context made it hard for me to follow. I don't code. I sat through it but it felt like I was watching something meant for someone else.

The finance demo was better. Incomplete P&L data leading to confident fabricated analysis. I could follow this one and understand what it was demonstrating.

But here's what I actually needed: a UX research demo. Something like: AI analyzing incomplete user research data and generating confident themes or insights that aren't actually supported by the missing data. That is DIRECTLY my professional risk scenario. I use AI to help analyze research findings. The possibility that it would generate confident-sounding themes from incomplete data is a real concern for my work.

Both demonstrations worked mechanically. Neither was designed for my use case.

Also — from an accessibility standpoint — the demonstrations were entirely text-based. I really learn better from visuals. A side-by-side comparison showing prompt A → output A versus prompt B → output B in a visual layout would be so much more effective than reading through a text scenario.

---

## Section 4: Guided Exercise

**Rating: 3/5**

The exercise — comparing unconstrained vs. uncertainty-aware prompts on incomplete context — was the right kind of activity for me. Active doing > passive reading, especially when my focus is variable.

I ran it with a research scenario: asked AI to identify themes in a set of user interview quotes where I intentionally left out half the interview data.

Unconstrained: AI generated confident themes. Sounded totally reasonable. Was probably a distorted synthesis missing important nuance.

Uncertainty-aware: AI flagged that it only had partial data, listed what it was assuming, gave more conditional findings.

The comparison was genuinely useful. This is the kind of thing I need to do in my actual work.

Issues for me specifically:

1. The instructions were ambiguous enough that I spent 10 minutes figuring out what "uncertainty-aware prompt" meant in practice before I could start. Executive dysfunction plus ambiguous instructions = hard to initiate. A step-by-step numbered instruction format would help a lot. Like actually numbered. Step 1: do this. Step 2: do this. Not "consider doing X in this way."

2. No example of what the exercise outputs should look like. I finished it and wasn't sure if I'd done it right. Seeing a completed example would reduce that uncertainty significantly.

3. This probably isn't feedback on the module but I should note: I lost my place between sessions 2 and 3. Came back to the exercise and spent 8 minutes figuring out where I was. Some kind of bookmarking or "you were here" indicator in the platform would help so much.

---

## Section 5: Real-World Application

**Rating: 3/5**

The application section made sense in principle. Use uncertainty-aware prompting when context is incomplete. Build in human verification. Don't treat AI output as ground truth.

For my specific work context — UX research — I needed more. The examples were knowledge worker generic. How does this apply to someone using AI to:
- Synthesize qualitative research data where some participant data is missing
- Identify patterns across incomplete interview notes
- Structure findings from research where the sample size is smaller than ideal

Those are my actual scenarios. The uncertainty about incomplete context isn't abstract for me — it's about whether my research synthesis is actually valid or whether AI has filled gaps with plausible-sounding invented themes.

I got the principles. I had to do the translation work myself.

---

## Section 6: Portfolio Artefact

**Rating: 4/5**

Ok so I was kind of dreading the portfolio artefact because in my experience "portfolio artefact" usually means an open-ended thing I stare at for twenty minutes unable to start.

This one was actually structured enough that I could initiate. Task Type, Known Context, Missing Context, Required Constraints, Human Verification Owner — the fields told me exactly what to fill in. Structured templates are the ADHD-friendly version of portfolio work.

I completed one for a research synthesis task. The process of filling in "Missing Context" specifically made me realize I often start prompting without actually thinking through what data I'm missing. That's a behavior change worth having.

A few things that would help:

1. A completed example artefact to look at first (I know I keep saying this but it really matters — seeing a finished version before attempting my own helps me so much)

2. The field "Required Constraints" confused me. Had to re-read the definition three times. "What this AI must not do" or "Guardrails" would be clearer.

3. I made myself a little checkbox reminder on a post-it note: "DID YOU FILL OUT THE CONTROL CARD BEFORE PROMPTING." Putting this where I can see it. Probably won't do it consistently but having the reminder helps.

---

## Section 7: Emotional/Learning Experience

**Rating: 3/5**

This is hard to rate because the experience was genuinely variable.

Low points: the opening tokenization wall of text (took three sittings to get through), the code demo (felt like the course wasn't designed for people like me), the ambiguous exercise instructions (executive dysfunction triggered, sat staring at the screen for ten minutes before I could start).

High points: the hallucination section (hyperfocused for 45 minutes, made real connections to my UX research work, felt genuinely intellectually engaged), the portfolio artefact (structured enough that I could start it without paralysis), the overall sense at the end that I actually understand something important about how these tools work.

Net emotional arc: started anxious, hit a few walls that made me want to quit, found the parts that engaged me and hyperfocused through them, ended feeling like I learned something real.

I cried a little at the end of session 1 actually. Not because of anything specific in the content — just the combination of technical vocabulary I didn't immediately understand + the feeling that I'm slower at this than I "should" be. I want to mention that because I think it's real information for course designers about how this material lands for neurodivergent learners.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** Probably 3+ hours across 4 sessions, including breaks. Hard to track exactly because time blindness is real.

**Difficulty:** 4/5 for me. (This is partly the content, partly the formatting, partly executive function challenges — hard to separate.)

I want to flag that the 75-120 minute estimate will be significantly underestimated for learners with ADHD or processing differences. A note in the module that it's fine to take this in multiple shorter sessions would genuinely help.

---

## Section 9: Most Valuable Part

The hallucination mechanics explanation — specifically the connection between probability optimization and why AI outputs drift toward generic, averaged-out language.

This is professionally meaningful for me. I use AI to help synthesize qualitative research. Understanding that AI is optimizing for probable synthesis rather than accurate synthesis should make me more careful about when AI-assisted analysis is appropriate vs. when I need to do the interpretation work myself.

Also: the hyperfocus I experienced on this section was a good sign. When my ADHD brain hyperfocuses on something, it usually means it's genuinely interesting and relevant, not just novel. I trust that signal.

---

## Section 10: Weakest Part

The tokenization section — too dense, too long, paragraphs too long, no visual aids, too early before the module has established why I should care.

Also: the software dev demo, which had no connection to my professional context.

And the exercise instructions, which were just ambiguous enough to trigger initiation paralysis.

---

## Section 11: Missing Content

1. **Visual aids throughout.** The pipeline diagram was great. I needed similar visuals for tokenization, probability distribution, context window. Even simple diagrams would reduce cognitive load significantly.

2. **Short paragraphs.** This is a formatting note but it matters. 3-4 sentences maximum per paragraph. My brain slides off long paragraphs.

3. **Step-by-step exercise instructions.** Numbered. Unambiguous. What to do, then what to do next. Not open-ended.

4. **A completed artefact example.** Before I try my own. Every time.

5. **An explicit permission to take breaks.** Somewhere in the module, just a note: "This is technical content. It's fine to take this in multiple shorter sessions." That permission structure matters for neurodivergent learners.

6. **UX / research examples.** I know I'm probably a small part of the audience but there are more UX researchers and qualitative researchers using AI than people think, and the specific hallucination risks in research synthesis are real and worth addressing.

---

## Section 12: Final Evaluation

**Overall Rating: 3/5**

The content is valuable. The hallucination mechanics explanation is something I'll actually apply in my work. The portfolio artefact is structured enough that I could complete it without paralysis.

But the module has real accessibility barriers for neurodivergent learners: dense paragraphs, ambiguous exercise instructions, no visual aids for key concepts, no explicit permission to take breaks, a software dev demo that signals "this isn't designed for you" early on.

I finished. I learned something real. But it was harder than it needed to be, and I think a meaningful portion of neurodivergent learners who start this module won't make it to the good parts.

The good news is that most of these are formatting and structure issues, not content issues. The content itself is fine. The delivery needs accessibility work.

---

## Reviewer Summary

**Overall Rating:** 3/5
**Completion Status:** Completed in full (4 sessions, approximately 3+ hours)

**High Points:**
- Hallucination mechanics section: genuine hyperfocus engagement; real professional implications identified for research synthesis work
- Portfolio artefact: structured enough to initiate without paralysis; behavior-changing insight from "Missing Context" field
- Overall: learned something real that will change AI use in research workflow

**Accessibility Barriers Identified:**
- Dense paragraphs in tokenization section → executive dysfunction/paralysis risk
- Ambiguous exercise instructions → initiation failure for learners with ADHD
- No visual aids beyond the opening pipeline → high cognitive load for visual learners
- No explicit permission to take breaks → shame/pressure for neurodivergent learners
- Software dev demo → early "this isn't for you" signal

**Recommendations for Accessibility:**
1. Max 3-4 sentences per paragraph throughout
2. Visual diagrams for tokenization, probability ranking, context window
3. Numbered step-by-step exercise instructions with no ambiguity
4. Completed artefact example before independent practice
5. Explicit break permission and multi-session framing in module introduction
6. Remove or reframe the software dev demo for non-developer audiences
