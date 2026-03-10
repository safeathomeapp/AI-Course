# Course Module Feedback - Zara Ahmed - R11

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 6/10**

ok so my first thought reading "How Large Language Models Actually Work" was: is this necessary for what im trying to do? like i dont need to know how the engine works, i need to know how to drive, right?

but i stayed open to it because i knew coming in that my understanding of why ai does weird things is pretty surface level. ive had ai make up statistics in articles i was editing for my internship. ive had chatgpt write something that sounded completely factual and was just... wrong. i wanted to actually understand why that happens.

the pipeline diagram at the start was lowkey helpful. input → tokenization → context weighting → probability ranking → generated output → human verification. i actually screenshotted it because it gave me a framework i could reference. that format — simple visual, then explanation — is how i absorb things best.

first impression overall: cautiously optimistic. still not totally sure this is going to be resume-relevant but willing to see where it goes.

---

## Section 2: Concept Explanation Quality

**Rating: 7/10**

ok running through the main concepts:

**tokenization:** ngl this went a little over my head at first. the basic idea — ai breaks text into smaller pieces before processing — i got. the deeper stuff about how token boundaries affect reasoning felt like more detail than i needed right now. what i actually wanted to know: does this affect why ai sometimes handles brand names or abbreviations weirdly? (pretty sure the answer is yes but the module didnt make that connection explicitly)

**probability ranking / hallucinations:** THIS. this is the thing. "ai picks the most statistically probable continuation, not the correct one." i read that and had one of those moments where something that had been bothering me for months finally made sense. my supervisor at my internship asked me to fact-check an ai-generated competitor analysis and there were stats in there that just... werent real. they sounded credible. they fit the narrative. and now i understand why — the ai was optimizing for plausible, not accurate. that is a real skill to be able to articulate in a job interview actually.

**context window:** clear and useful. i knew ai had some kind of memory limit, i didnt fully understand the mechanism. now i do. practically this helps me understand why pasting a really long document into chatgpt and asking it to summarize sometimes gives a summary that seems to miss key parts.

---

## Section 3: Demonstrations/Examples

**Rating: 5/10**

two demos, and my reaction to them was very different:

**software dev demo:** honestly i just... moved through this. i dont code. i understand the concept it was demonstrating — incomplete context leads to confident wrong explanation — but i had zero professional connection to it. it felt like the course forgot that not everyone taking it works in tech. as a marketing student going into comms or content, i needed something more relevant.

**finance demo:** better. the scenario of ai filling in gaps in financial analysis with made-up data is something i can imagine applying to, like, marketing reports or research summaries. the core principle landed even if the specific scenario wasnt exactly my world.

what wouldve really worked for me: a marketing or content demo. something like, ai writes a "research-backed" article with fabricated statistics because the brief didnt include source material. that is a scenario i have literally lived and would have hit hard.

---

## Section 4: Guided Exercise

**Rating: 7/10**

ok the exercise was actually genuinely good. compare an unconstrained prompt vs an uncertainty-aware one using incomplete context.

i did mine on a marketing scenario — asked ai to write social media content for a brand where i left out the target audience and key brand values in the first version, then was explicit about what was missing in the second.

first version: content was fine but generic. made assumptions that were plausible but werent actually right for the brand.

second version: ai asked clarifying questions (or flagged assumptions, depending how i worded the prompt) and the output was more useful even if rougher.

this exercise is the kind of thing i can actually describe in a job interview. "i understand how to prompt ai with incomplete information in a way that reduces fabrication risk" — thats a concrete skill statement. ✓ going on the resume.

two notes:
1. clearer step by step instructions wouldve helped. the current instructions assumed i understood what "uncertainty-aware" meant well enough to construct the prompt myself. i kind of did but not totally.
2. a worked example comparing two actual prompts and their outputs would be SO helpful. seeing what good looks like first.

---

## Section 5: Real-World Application

**Rating: 6/10**

the application section was useful but kind of generic. "use uncertainty-aware prompting when context is incomplete" is a real principle but i needed it translated into the kinds of tasks i actually do.

like specifically: how does this apply when im writing content for a client where i dont have all their brand guidelines yet? or when im doing competitive research and the information available online is incomplete? or when im helping draft thought leadership content for an executive who gave me a three sentence brief?

those are my actual scenarios. the module gave me the principle, i had to do the translation work myself.

the connection back to module 1's human review framework was helpful — it reinforces the "always verify before the output goes anywhere" message which is clearly the throughline of this whole course.

---

## Section 6: Portfolio Artefact

**Rating: 7/10**

the llm reliability control card!! ok this is actually the piece of this module im most excited about.

task type / known context / missing context / required constraints / human verification owner.

why im excited: this is the kind of structured, professional-looking artefact i can put in a portfolio. "look, i dont just use ai, i have a framework for responsible ai use." that is a differentiator in a job search, im not kidding.

i completed one for a content project scenario and it took maybe 20 minutes. the process of filling it out made me realize how often i launch into prompting without actually thinking through what context im missing.

small feedback:
- would've helped to see a completed example first
- the field names are a little formal/corporate — "required constraints" reads like legal language to an entry-level candidate. could be "things ai shouldnt do" or "guardrails."
- i want to make this look good in a portfolio doc — some design guidance or a template would help

---

## Section 7: Emotional/Learning Experience

**Rating: 6/10**

real talk: this module was more valuable than i expected going in, but getting to the valuable parts required pushing through some content that wasnt really for me.

the software dev demo was a low point — i felt like the course was speaking to someone else. the tokenization deep dive was another moment where i was like "...is this going somewhere i care about?"

but the hallucination explanation and the exercise were genuine wins. those are the parts where i was engaged, learning, and already thinking about how to apply what i was learning.

emotionally: i ended this module feeling more prepared and more articulate about ai limitations than i started it. and for someone actively job-searching, feeling more articulate about something is genuinely valuable.

---

## Section 8: Time and Difficulty

**stated time:** 75–120 minutes
**actual time:** like 85-90 minutes? i moved fast through the sections that werent relevant to me and slowed down on the parts that were

**difficulty:** honestly 5/10? the concepts arent that hard once the jargon gets out of the way. the vocabulary was the main barrier — especially at the start. once i knew what tokenization and probability ranking meant in plain terms the rest followed.

---

## Section 9: Most Valuable Part

the hallucination mechanics explanation. full stop.

i can now explain, clearly and specifically, why ai makes up confident-sounding false information. thats not just useful for doing the job — its useful for talking about ai intelligently in interviews and with colleagues.

being able to say "ai optimizes for probable continuation rather than accurate continuation, which is why it generates false statistics that fit the narrative" is a way more impressive answer to "what do you know about ai limitations" than "sometimes it makes stuff up." this module gave me that vocabulary.

---

## Section 10: Weakest Part

the software development demo, combined with how much of the application content is aimed at technical or finance-specific roles.

i get why developers and analysts are core to the audience. but comms students, marketing people, content creators — were out here using ai A LOT and the course keeps directing examples at roles that arent us. even one demo aimed at content or marketing work would fix this substantially.

also the tokenization section was longer than it needed to be for a non-technical audience.

---

## Section 11: Missing Content

1. **a marketing / content / comms demo.** please. one demonstration showing ai confidently fabricating research findings or statistics in a content context would be immediately applicable to a huge chunk of the learner population.

2. **resume and portfolio framing for the artefact.** how do you present the control card to a potential employer? what does this demonstrate about your ai skills? as an entry-level candidate this is actually important context.

3. **plain language glossary.** tokenization, stochastic, probabilistic, context window — all of these need plain language definitions in the module itself, not just concepts that get explained and then used with assumption of retention.

4. **a "quick reference" version.** like a one-page summary of the key concepts and practices from this module that i can actually use as reference. when im in the middle of a project and i want to remember "what was the uncertainty-aware prompting principle again" i dont want to rewatch 90 minutes of content.

---

## Section 12: Final Evaluation

**Overall Rating: 6/10**

the module has real content — the hallucination mechanics and the exercise in particular are genuinely useful. the artefact is something i can use in a portfolio. the uncertainty-aware prompting principle is a concrete skill i can talk about.

but the module spent meaningful time on content that wasnt relevant to my professional context (software dev demo, deep tokenization mechanics), and the application guidance was generic in a way that required me to do translation work myself.

if the examples were better diversified across professional roles, this would be a 8/10 easy. as is it's a solid 6 that required some patience to get the value out of.

**would i recommend this to other students / entry-level folks?** yeah but with the note that you'll need to mentally translate the examples to your own context. the principles are solid even when the examples miss.

---

## Reviewer Summary

**Overall Rating:** 6/10
**Completion Status:** Completed in full (variable depth by section)

**Resume/Portfolio Value Assessment:**
- ✓ Can articulate why AI hallucinates with mechanical specificity (interview ready)
- ✓ LLM Reliability Control Card as portfolio artefact demonstrating structured AI practice
- ✓ Uncertainty-aware prompting as named, explainable skill

**Key Gaps for Student/Early-Career Audience:**
- No marketing, content, or comms examples — forced constant mental translation
- No portfolio presentation guidance for artefact
- No plain-language glossary for technical terms
- Missing "quick reference" summary for ongoing practical use

**Recommendation:** Deploy with added marketing/content demonstration and entry-level career framing for the artefact section. Strong foundation, needs audience diversification.
