# Course Module Feedback - Jasmine Patel - R05

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Jasmine Patel
Professional background: Digital Marketing Manager at a D2C e-commerce brand, Austin. 6 years in marketing. Run paid ads, email, social, influencer, and content strategy. Early AI adopter — have been using ChatGPT, Midjourney, and various AI tools since early 2023. Honestly considered myself pretty advanced with AI before this course.
Experience using AI tools: Heavy — use AI across almost every part of my workflow
Primary reason for taking this course: Skill building — want to move from "power user" to actual expert

---

# 1. First Impression

**Does the purpose of the module feel clear?**

YES. Crystal clear. And honestly? The first sentence hit different than I expected: "structured prompting is the main control mechanism for AI output quality in professional workflows."

Okay. So I thought I was good at this. I thought that "being good at prompting" meant knowing to be specific and give examples and try again if it doesn't work. But the module is framing it as a *control mechanism* — a systematic thing, not a vibe. That reframing happened immediately and I had a moment of "oh. I might be doing this less well than I thought."

That's an uncomfortable feeling at the start of a module. It's also the RIGHT feeling to have, because it means I'm about to learn something.

**Do the learning objectives feel realistic?**

Yes. Apply the structure, diagnose weak prompts, produce predictable outputs. "Predictable" is where I've been failing. My AI prompting has been high-effort and inconsistent. I get amazing results sometimes and terrible results other times and I haven't known why. The structure is apparently why.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Professional and direct. Very clear. This module reads like it was written by someone who has been in the trenches with AI tools, not someone theorizing.

Rating (1–5):
Clarity of purpose: 5
Tone and readability: 5

Comments:

I'll be honest — I came in overconfident and the module reset me in the first two paragraphs. That's actually impressive. Good training content should challenge your current mental model, not just confirm it. This one did.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

OH ABSOLUTELY. And here's the thing — I've been doing roughly 3 out of 5 elements intuitively. I usually give Context. I usually have a clear Task. I sometimes give a Role. What I've almost NEVER done systematically is:

1. Write explicit Constraints
2. Specify Output Format

And those are the two elements that directly prevent the failures I've been experiencing most often:
- AI outputs that include claims I can't verify (hallucination and overreach) → Constraints prevents this
- AI outputs in a format I have to completely restructure (downstream rework) → Output Format prevents this

The entire time I was reading the concept section I was doing a mental audit of my own practice and going "oh. oh NO. I've been doing this wrong."

**Did any terminology feel confusing?**

"Output schema" vs "Output Format" — uses one once, the other everywhere. Fix that.

"Downstream rework" — totally fine for marketing/business readers.

**Did the mental model make sense?**

100% and it hit hard. The common weak-prompt patterns list is basically a description of my average day:

- "Multi-goal prompts with no priority" — I ALWAYS do this. Ask AI to write an email subject line AND preview text AND email body AND CTA AND make it feel personal AND keep it under 200 words AND match our brand voice. Seven goals, zero priority order.
- "Missing audience definition" — I know my audience conceptually but I almost never specify it explicitly in my prompts. I've been assuming AI "knows" who my customers are because I work with them every day.
- "No output schema for downstream work" — This is the one that is making me cringe most. I produce AI content for email campaigns and social ads and I CONSTANTLY reformat it before it's usable. I have been treating reformatting as unavoidable overhead. It's not. It's a consequence of not specifying format.

**Was the explanation too long, too short, or appropriate?**

Appropriate. Efficient and well-organized.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 4
Usefulness of mental model: 5

Comments:

"Prompt design as workflow design" is THE insight in this section for me.

I manage a content workflow. AI fits into that workflow at the brief → draft stage. If the AI output doesn't fit my workflow format, I have a transformation step that costs time and introduces inconsistency. The prompt is the spec that eliminates that transformation step. I've been thinking about AI as a tool; I should be thinking about it as a workflow component that requires specification.

That reframe is going to change how I build AI into my processes. Not "use AI and then fix it" — "specify AI output so it fits where it needs to go."

---

# 3. Demonstrations

**Did the examples feel realistic?**

Okay I need to say something here. THE REAL-WORLD APPLICATION SECTION USES A MARKETING EXAMPLE. I didn't know this when I read the demonstrations. So I spent the demonstrations feeling like "finance and ops are fine but not my world" and then the Real-World Application absolutely landed.

As for the demonstrations themselves: the finance P&L demo is clear and well-constructed. The constraint "do not invent figures" maps directly to "do not invent engagement metrics" or "do not invent customer claims" in my world. The ops SOP demo shows how the constraint "mark gaps rather than fill them" produces more honest, useful output — directly applicable to campaign briefs where I need AI to flag missing information rather than invent it.

**Did the improved prompt clearly outperform the weak prompt?**

YES. Dramatically. The weak prompts are almost comically minimal. The improved ones are complete work specs. The difference in output quality isn't subtle — it's structural and obvious.

**Did the explanation help you understand why the improvement worked?**

Yes. Analysis sentences are concise and accurate.

**Could you imagine applying this approach in your own work?**

I was already adapting the framework during the concept section. By the time I got to the demonstrations I had a running list of six prompts I use regularly that I was mentally restructuring.

Rating (1–5):
Example realism: 4
Clarity of improvement: 5
Practical applicability: 4

Comments:

Both demos are good. Neither is directly marketing/e-commerce. That's fine — the principles transfer clearly and the Real-World Application fixes this later.

What I would love: a demo showing structured prompting for email campaign copy or ad copy. Specifically: role as e-commerce copywriter for [brand segment], context about the product and target customer, task to write email subject line + preview text + body copy, constraints on brand voice and no unverifiable claims, output format with each element labeled and character counts included. THAT demo would have made me audibly gasp.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. Select a real prompt, rewrite with five-part structure, run both, evaluate with the checklist.

**Did the instructions feel clear?**

Yes. The template with labeled fields is exactly the scaffolding needed. I filled it in for an email subject line prompt immediately.

**Did the evaluation checklist help you compare outputs?**

YES AND THE RESULTS WERE HUMBLING. Okay so:

I tested my standard email subject line prompt. Old prompt: "Write 10 email subject lines for our [product] sale. Keep it catchy and on-brand." That's it. That's what I've been running for two years.

Structured prompt: role as e-commerce email strategist for a premium fitness accessories brand targeting health-conscious women 28-45, context about the specific sale (anniversary sale, 25% off bundles, three days only), task to write 10 subject line options with a range of emotional hooks, constraints to avoid generic phrases like "don't miss out" and "limited time," match our direct and motivating brand voice, no emoji spam, output format with each option numbered plus a one-word description of the emotional hook.

The structured version gave me 10 actually distinct subject lines with labeled approaches. The unstructured version gave me 10 lines that all said essentially the same thing with "🔥" at various positions.

I've been running my unstructured prompt for TWO YEARS. I did not know it was producing mediocre output because I had no comparison point.

**How long did the exercise actually take?**

About 40 minutes. I tested three prompts because the first result was so good I needed to verify it wasn't a fluke.

Rating (1–5):
Instruction clarity: 5
Exercise usefulness: 5
Difficulty level: 2 — easy overall, Constraints field required more thought

Comments:

The Constraints field was the hardest to write well. For marketing copy, the obvious bad constraints are things like "be creative" (too vague) or "match brand voice" (how?). I had to think carefully about WHAT specifically about our brand voice to capture in constraints. Eventually I wrote: "avoid generic urgency language; match our direct, aspirational, non-pushy tone; no emoji overuse; no unverifiable performance claims." Those constraints changed the output more than any other element.

Guidance on how to identify the right constraints would have been useful. I figured it out through iteration but I shouldn't have to.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

YES. THAT'S ME. Marketing manager, using AI for campaign concepts, getting generic output, team spending time rewriting — I have literally lived this scenario. We ran a campaign brief through AI six months ago and the output was so generic that we ended up not using any of it and writing everything from scratch. I now know exactly what went wrong: we gave AI a vague brief with no role, no audience specifics, no constraints, no output format.

**Did it show how AI should be used responsibly?**

Yes. The professional takeaway — "structured prompts reduce waste and improve decision readiness, but human review still owns final quality" — is exactly right. For marketing especially: AI output should be a first draft, not a final asset. Brand voice, accuracy, and message strategy all need human review.

**Did it help connect the concept to real professional work?**

THIS IS WHERE THE MODULE LANDS FOR ME. The five-step structured prompt for campaign concepts — role as strategic marketing analyst, specific audience and business goal, three distinct concept requests, constraints blocking unsupported claims, output format with concept name + rationale + channel fit + key messages — is a template I am going to use next week. This week. Possibly today.

The outcome statement: "better first drafts, faster review cycles, clearer assumptions and risks, less cleanup before decision meetings" — that's the ROI statement I needed.

Rating (1–5):
Scenario realism: 5
Practical value: 5

Comments:

I want to note that this section validated the entire module for me. If the Real-World Application had been in a different domain, I would have understood the principle but not felt the personal relevance. Marketing being the chosen scenario is the right choice for a large professional segment.

The five-step breakdown of the structured marketing prompt is the clearest illustration of the full RCTCO framework in the module. If someone skipped straight to this section they would still understand the framework. That's good design.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

YES. A structured prompt library for marketing and e-commerce is a TEAM ASSET. Tested, structured prompts for: email campaign copy, social ad copy, subject line variations, campaign concept briefs, competitive messaging analysis, product description drafts, influencer brief templates, content calendar planning — this is a workflow tool that would save our whole team time and produce more consistent output quality.

**Could you realistically use this in your job or portfolio?**

Already started. Going to present it to my team as a shared marketing prompt playbook. We're going to test, document, and maintain prompts as a team resource. This was my first thought when I read the artefact description.

**Was the template sufficient to create the artefact?**

Yes. Seven-field template is right. Review Notes is essential — prompt performance for marketing copy varies by campaign type, season, and audience, and tracking that variation is useful practice.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 5

Comments:

The prompt library is the most professionally useful thing I'll produce in this course. A marketing team with a tested, documented prompt playbook has a real competitive advantage in production speed and output consistency. That's a business case I can take to my director.

I'm going to add a "Campaign Type" field so I can filter prompts by whether they're for acquisition, retention, product launch, or seasonal campaigns. Structure within the library matters when it grows.

---

# 7. Emotional Learning Experience

Felt **overconfident at start** — I thought I knew how to use AI. I use it constantly! I'm a power user!

Felt **genuinely humbled** reading the first two sections — I've been doing this without two of the five elements consistently, and those are the ones that prevent my most common failures.

Felt **recognition and discomfort** in the common weak-prompt patterns list — seeing my actual habits described as "common weak patterns" was uncomfortable but clarifying.

Felt **immediate applicability** from the "prompt design as workflow design" framing — this reframe had practical implications I started acting on before finishing the module.

Felt **genuine excitement** in the Real-World Application — the marketing scenario is my world and it showed the complete framework in a context I could immediately apply.

Felt **satisfaction and a little sheepishness** at the exercise results — seeing how much better my structured email prompt performed versus my two-year-old unstructured one was the clearest possible proof that I needed this module more than I thought I did.

This module delivered the most personally impactful learning moment in the course. Not because it was the most educational — because it challenged an assumption I had about my own competence and proved that assumption wrong in a way I could immediately test.

---

# 8. Time and Difficulty

Reading: 20 minutes
Exercise: 40 minutes (tested three prompts because the first result was too good not to verify)
Reflection: 15 minutes

Difficulty level: Easy overall — familiar with AI tools; the learning was conceptual, not technical

Was the estimated time accurate?

Yes. 75 minutes total, just within the lower bound of the range. If I'd been slower with the exercise I'd be in the middle.

Comments:

Well-calibrated time estimate. The exercise extended slightly because I tested multiple prompts — which is appropriate since that's how you build confidence in the framework.

---

# 9. Most Valuable Part

The complete structure — specifically, discovering that I was systematically missing two of the five elements (Constraints and Output Format) and that those are the elements directly responsible for my two most common failures.

But if I had to pick one insight: Output Format prevents downstream rework. I have been treating reformatting as a fixed cost of AI-assisted work. It's not. It's the consequence of not specifying the format I need. That single insight will save me significant time on every campaign.

---

# 10. Weakest Part

Constraint-writing guidance.

The module shows excellent constraints in demonstrations and correctly calls out vague constraints as a failure mode. But for a marketer approaching a new prompt type — a new campaign category, a new content format, a new channel — figuring out what constraints to write is its own challenge that the module doesn't address directly.

What makes "avoid generic urgency language" a better constraint than "be engaging"? The answer is specificity — and that specificity comes from knowing what the model might plausibly do wrong. That reasoning process should be stated explicitly: "to write good constraints, ask: what would this model likely do if I didn't constrain it, and what's the worst version of that?"

---

# 11. Missing Content

Module is excellent overall.

What would make it stronger:

1. **Marketing/e-commerce demonstration.** Email copy, ad copy, or campaign brief — one demo from a content/marketing context would serve a huge professional segment directly.

2. **Constraint-writing method.** The principle underlying good constraints, not just examples.

3. **Iteration guidance.** When a structured prompt still doesn't produce the right output, what's the systematic approach to diagnose and adjust?

4. **Team prompt library guidance.** The individual library is great. How do you build and maintain a team-level library? Version control, review cycles, contribution guidelines — brief guidance on this would add significant organizational value.

5. **Chaining preview.** One sentence on what prompt chaining is. I'm curious and the mention without explanation is a tease.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

I came in thinking I was a power user. I'm leaving knowing exactly where my practice had systematic gaps — Constraints and Output Format — and how to fix them. The exercise provided direct, personal evidence: my structured email subject line prompt dramatically outperformed my two-year-old default. For anyone in marketing, content, or e-commerce who uses AI for campaign production, this module identifies the specific structural gaps that explain inconsistent output quality and gives you the tools to fix them permanently. The prompt library artefact is a team asset, not just an individual one. Essential module.

---

# Reviewer Summary

Module 1.4 delivered a deeply personal learning moment — I came in as a self-described AI power user and left with specific, testable evidence that I'd been missing two of the five RCTCO elements (Constraints and Output Format) in my daily practice, which explains every inconsistency, reformatting overhead, and mediocre output I've experienced in two years of heavy AI use. The exercise result was the most impactful proof of concept in the course: my structured email subject line prompt produced ten distinct, emotionally specific options while my two-year default produced ten variations of the same generic line. The Real-World Application marketing scenario was the most directly relevant content in the module and validated the full framework in my professional context. What should be improved: constraint-writing needs an explicit method, not just examples — knowing that vague constraints are bad doesn't teach you how to identify good ones for a new task; a marketing or e-commerce demonstration would have landed the framework immediately without requiring translation from finance and ops; team prompt library guidance should be added since shared prompt playbooks are the natural organizational extension of individual libraries. What should stay: the failure-mode mapping (especially Output Format → downstream rework, which reframed my understanding of a "fixed cost" as an avoidable one), the Real-World Application marketing scenario, the full five-step structured prompt example in that section, the exercise format with real-prompt testing, and the seven-field prompt library template — this is going to be a team asset, not just a personal one.
