# Course Module Feedback - Marcus Chen

**Module Reviewed:** T1M01 - Introduction to AI as a Tool
**Date:** 2026-03-08

---

# Reviewer Background

**Name:** Marcus Chen

**Professional background:** Senior Operations Analyst at a mid-size manufacturing company (~250 employees) in Chicago. Been in ops and supply chain analytics for 14 years, current role for 6. Spend most of my day in Excel building reports, dashboards, and financial models for leadership. Also train junior analysts on data processes and spreadsheet best practices.

**Experience using AI tools:** Moderate

Been using ChatGPT fairly regularly for the past 6-8 months - probably 3-5 times a week. Mainly for Excel formula debugging, writing VBA macros, and helping explain what complex formulas do. I also have Plus so I don't hit the rate limits as often. Tried Claude a couple of times. My company doesn't have Microsoft Copilot yet. I wouldn't call myself an expert but I use it more than most people I know at work.

**Primary reason for taking this course:**
- [x] career development
- [ ] curiosity
- [x] productivity improvement
- [ ] portfolio building
- [ ] other

I want to stop feeling like I'm winging it with AI. Right now I'm basically guessing at how to phrase prompts and hoping for the best - works about 70% of the time which is... ok but not good enough for work I'm putting in front of my manager. My boss has also mentioned looking into AI for reporting so I want to be ahead of that conversation, not scrambling to catch up.

**Additional context:** I took this on a Sunday morning (around 7:30am) which is my most focused time - coffee, family still asleep, no interruptions. Took notes in an Excel sheet I set up specifically for this course. Had ChatGPT open in a second tab while I went through it (I know, using AI to review an AI course - but it helped me test some of the prompts in real time which was actually useful).

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Yes, pretty immediately. The opening line - "AI is a tool, not an authority" - is a good framing and honestly lands because I've been burned by trusting AI output too quickly. About 3 months ago I had AI write a macro that looked completely fine, ran without errors, but was silently dropping rows with certain date formats. Didn't catch it for three weeks. So that framing hits differently when you've had that kind of experience.

The learning objectives are clear and I liked that they're written in plain language. "Apply a practical human-review process before acting on AI output" - that's exactly what I was hoping this course would cover.

**Do the learning objectives feel realistic?**

Yes. They're specific enough to feel achievable within one module, not vague aspirations like "understand AI" which doesn't tell you anything. My only flag is the third objective - "apply a practical human-review process" - is doing a lot of heavy lifting. It sounds like there's real substance there but I wanted to make sure the module actually delivered on it (it mostly does, more on that later).

**Does the tone feel:**

Approachable and professional. Not dumbed down, not overly technical. It felt like it was written for someone who uses data tools professionally and can follow structured logic. That fits me well. A few spots where I'd say it tips slightly academic but those are brief.

Rating (1–5):
Clarity of purpose: 5/5
Tone and readability: 4/5

**Comments:**

Strong opening. The "AI is a tool not an authority" principle is clean and memorable. I actually wrote that down in my notes sheet straight away because it's a useful framing I can use when talking to colleagues who either over-trust or completely dismiss AI. The tone is good - professional without being corporate jargon. Didn't feel like it was written for developers which I appreciated.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

Yes, mostly. The mental model - Prompt → Context Window → Probability Engine → Output → Human Review → Decision - is solid and I found it helpful to have it broken down step by step. It maps reasonably well onto how I already think about working with data: you put in inputs, something processes them, you get outputs, and you check those outputs before making a call. The parallel made sense.

The sections on what AI is strong at and weak at are genuinely useful. I found myself nodding at "guaranteed factual correctness without source checks" as a weakness because that's exactly what bit me with the macro incident.

**Did any terminology feel confusing?**

"Context Window" - this is mentioned in the mental model but the explanation is brief. I kind of understand it from the definition given (the model can only use what is in scope) but I'm not totally clear on what that means practically. Like, if I paste in a big spreadsheet description, does that fill the context window? Is there a limit I should know about? The course introduces the term but I wanted a bit more.

"Tokens" came up in the section on why hallucinations happen - "predicts likely next tokens" - and I wasn't sure if tokens = words or something different. Minor thing but for someone who's not a CS person, I had to pause there.

Also "probability engine" is a useful metaphor but I kept thinking - ok so the AI is basically doing autocomplete on steroids? Is that actually right? I'd have liked one more sentence confirming or clarifying that interpretation because I wasn't 100% sure if I was simplifying too much.

**Did the mental model make sense?**

Yes. It's clean and simple enough that I immediately started thinking about how it applies to my work. The six-step model maps well onto how I should be structuring data analysis tasks. I sketched it out in my notes spreadsheet and also realized it applies to how I should be reviewing AI-generated Excel formulas specifically - which is my main use case.

**Was the explanation too long, too short, or appropriate?**

Appropriate overall. Some sections are denser than others. The "why hallucinations happen" paragraph is the most technical and I re-read it twice. Not saying it's wrong to include it - I actually think understanding this is important - but it's the part where a slightly slower explanation would help less technical readers. I'd maybe add one concrete example there.

The "what AI is strong/weak at" section is exactly the right length. Concise and scannable.

Rating (1–5):
Concept clarity: 8/10  [slipped to 10-scale here, that's probably my Excel brain wanting a bigger range]
Terminology accessibility: 6/10
Usefulness of mental model: 9/10

**Comments:**

Net-net, the concept explanation is solid. The framework is genuinely useful and I can see myself referencing it going forward. My two main callouts: (1) "context window" needs a bit more practical explanation for non-CS people, and (2) the hallucination explanation is good but could use one concrete example - not just theory about why it happens.

One thing that struck me: almost all the conceptual examples default to writing tasks - emails, reports, documentation. I kept mentally translating these to data tasks while I was reading. "What does this look like when my prompt is 'fix this VLOOKUP formula'?" would be a useful variation to include somewhere. I get that writing tasks are the most universally relatable, but for someone who primarily uses AI for data work, it creates a small disconnect.

---

# 3. Demonstrations

**Did the examples feel realistic?**

Yes - and I want to flag this as one of the strongest parts of the module. The two examples chosen are directly relevant to my work: operations/admin (onboarding documentation) and finance/bookkeeping (P&L summary). Those are not random - those are actual things I do or work adjacent to every week. Whoever chose these examples made a good call.

**Did the improved prompt clearly outperform the weak prompt?**

The contrast is very clear. "Write our onboarding process. Make it good." vs. the structured version with Role, Context, Task, Constraints, and Output Format - the difference is obvious even without seeing the actual AI outputs. You can just tell from looking at them which one gives the AI something to work with.

Same for the finance example. "Analyze this spreadsheet." gives me nothing. The structured version actually tells the AI what kind of analysis, what constraints (crucially: "do not invent numbers" - that's the one that matters most to me), and what format to output. That's immediately usable.

**Did the explanation help you understand why the improvement worked?**

Yes. The analysis paragraphs after each example are brief but land the key points. For the finance example especially, the three reasons given - blocks fabricated numbers, separates facts from interpretation, creates format suitable for decision meetings - those are exactly the things I care about when using AI for data work. That's not generic advice, that's specific and operational.

**Could you imagine applying this approach in your own work?**

Absolutely yes. The finance P&L example is almost exactly a prompt I could use for my monthly reporting. I actually stopped and drafted a version of it during the module for my own use case. The onboarding example also works for a process documentation task I've been putting off for months.

Rating (1–5):
Example realism: 5/5
Clarity of improvement: 5/5
Practical applicability: 9/10  [slipped again, sorry]

**Comments:**

Strongest section of the module for me personally. The examples are genuinely well-chosen and the analysis is tight. Quick question on this - is there a reason both examples are documentation-type tasks? I'm wondering if there's a version of this demonstration that shows AI being used for data analysis or formula generation, since that's probably a significant portion of how people in ops/finance roles actually use AI. The onboarding and P&L examples are great but they're both "write/summarize this document" - what about "analyze this data set" or "build me a formula that does X"?

Not a dealbreaker at all. But it would expand the relevance for the data-heavy crowd.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. "Turn one vague prompt from your actual work into a structured prompt, then evaluate output quality using explicit criteria." That's clear. I didn't need to re-read the instructions.

**Did the instructions feel clear?**

The step-by-step instructions are clear. The suggested structure (Role / Context / Task / Constraints / Output Format) is straightforward to follow. The example output at the end - the finance report one - is well-matched to the task.

I will say: I wasn't totally sure whether I was supposed to literally run both prompts in an AI tool or just write them out. The instructions say "Run both prompts in the same AI tool" which implies yes, actually run them. I did that, which is where the exercise expanded in time. Which is fine - running them is more valuable than just writing them. But worth flagging for learners who might be in a read-only context or don't have immediate AI access.

**Did the evaluation checklist help you compare outputs?**

Yes, actually more than I expected. The five criteria - Clarity, Structure, Assumptions, Missing Information, Usefulness for Decision Making - give you something concrete to look at instead of "well, this one just feels better." I found "Are assumptions explicit instead of hidden?" particularly useful because that's one I don't usually think to check explicitly. I tend to just scan for obvious errors rather than asking what the AI assumed but didn't say.

**How long did the exercise actually take?**

Longer than the module's estimated time block suggested. I spent probably 25-30 minutes on just the exercise, because I ran both prompts for a real task from my work (an inventory variance analysis request I use fairly regularly), compared the outputs, wrote up my evaluation notes in my tracking spreadsheet, and then also started drafting a second structured prompt because I got into it. The exercise is engaging - it just runs long if you do it properly.

Rating (1–5):
Instruction clarity: 5/5
Exercise usefulness: 4/5
Difficulty level: 3/5 (Easy - moderate, which feels right for a Module 1)

**Comments:**

The exercise is good and I completed it. My one note is that the example output is finance-focused, which is fine, but there's no variant or prompt for data analysis tasks (Excel formulas, data cleaning, pattern extraction). For someone like me, that's the primary use case and I had to adapt the framework myself to fit it. A second example using a data/formula task would make this exercise more immediately usable for the analytical crowd.

Also - the three follow-up questions at the end ("Which output is safer to use?", "What did structure improve most?", "What still needs human verification?") are good reflection prompts, but they're easy to skip over. I noticed them but I could see someone just doing the comparison table and moving on without answering them. Maybe make those more explicit or give them a box/field to fill in.

---

# 5. Real-World Application

**Did the scenario feel realistic?**

Mostly. The marketing campaign scenario is realistic as a business use case, but it's not directly my domain. I work in ops and finance, not marketing. The scenario works as a demonstration of the structured prompting principle, but it took me slightly out of my natural frame of reference compared to the finance and operations examples earlier.

That said - the structured vs. vague prompt comparison still lands clearly. "Give me a campaign for our spring offer" vs. the full structured version is an obvious contrast. And the human review process laid out at the end (validate claims, check audience assumptions, select and adapt, approve after stakeholder review) maps directly to the review discipline the module has been building. So the scenario delivers what it's supposed to.

**Did it show how AI should be used responsibly?**

Yes. The human review checklist at the end is explicit and practical. Step 1 being "Validate claims against actual offer and legal constraints" - that's the right first step and it's good that it's emphasized. I also noted the language "Approve only after stakeholder review" which is a useful framing for corporate environments where people need permission structures around AI use.

**Did it help connect the concept to real professional work?**

It does connect the concept, though the marketing domain means I had to do a bit of translation work. I found myself thinking "ok so in my context this would be: give me a variance analysis prompt, structure it the same way, and the review process would be: validate numbers, check formulas, confirm assumptions about what period we're measuring." The translation is not hard, but it's translation I had to do myself.

Rating (1–5):
Scenario realism: 4/5
Practical value: 3.5/5

**Comments:**

The scenario is solid but the marketing domain is now the third example context in the module - after ops (onboarding) and finance (P&L). I'd love to see an ops/data scenario here or rotate this out for something more analytically oriented. If I'm a marketing manager, this resonates perfectly. If I'm an ops analyst, I'm doing mental translation the whole time.

Minor note: The "typical results" comparison - generic slogans vs. structured output - would be more convincing with slightly more detail. "Clearer audience targeting" is a bit vague. What does that actually look like in the output? I know visuals aren't in this draft, but even one concrete example line from the improved output would help.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Yes, this one actually excited me. An "AI Tool-Use Operating Checklist" is something I've been building mentally in my head for months - when to use AI, what to verify, when to have a human double-check. Having a template for that is immediately practical.

I also think this is the kind of thing I could share with my team (3 junior analysts) and potentially bring to my manager as "here's how we should be using AI for our reporting work." That's not just portfolio value, that's actual team value.

**Could you realistically use this in your job or portfolio?**

Yes to both. For job use: I'm going to build this into an Excel table (obviously) and add columns for specific task types I actually do. For portfolio: if this course leads to a certification or credential, having a documented AI use framework alongside it is significantly better than just "I completed Module 1."

**Was the template sufficient to create the artefact?**

It's a good starting point. The five fields - Task Type, Risk Level, AI Role, Required Human Verification, Final Decision Owner - are the right fields. I'd probably add a "Prompt Template" column for my own use so I can store the structured prompts alongside the checklist. But the base template does its job.

Rating (1–5):
Practical usefulness: 5/5
Portfolio value: 4/5

**Comments:**

Best artefact choice for a Module 1. It's directly tied to the core lesson (human review, risk awareness) and it's immediately usable. I'd suggest making the starter template slightly more specific - right now the five fields are a bit abstract. Even one filled-in example row (e.g., "Task Type: Draft monthly report | Risk Level: Medium | AI Role: Drafting | Required Verification: Check all numbers against source data | Decision Owner: Senior Analyst") would make it easier for learners to understand what a complete entry looks like and then build their own.

Also worth noting for the final course: this artefact would benefit enormously from an Excel template download. Not a blocker - the template works as text - but for the Marcus Chens of the world, an Excel file they can immediately start filling in would be significantly more appealing.

---

# 7. Emotional Learning Experience

**At any point did you feel confused?**

Briefly, during the "why hallucinations happen" paragraph. The "smooth answer by filling gaps with likely language" description is technically accurate but I had to sit with it for a moment. It's not confusing, it's just dense. Read it twice.

Also when "context window" was introduced without a clear practical definition - I felt momentarily unmoored. "What's in scope" is not quite enough to tell me how this affects how I write prompts.

**Overwhelmed?**

No. The pacing is good and the module doesn't try to do too much. It's a solid introduction, not an attempt to teach everything.

**Bored?**

Honestly? Slightly, during the "Why this tool is suddenly everywhere" section. The comparison table (pre-LLM automation vs. search engines vs. generative models) is factually useful but felt like background context I already knew. I've seen this narrative in a lot of AI content. It's not wrong to include it, but if I'm being honest this is where my attention drifted slightly and I found myself skimming.

**Confident?**

Yes, by the end. The module successfully builds to a place where I feel like I have a framework to work with, not just a collection of facts about AI.

**Excited to try the idea?**

Yes - specifically during the demonstrations section and when I saw the artefact. The finance P&L demonstration almost exactly maps to something I can use Monday morning. I actually stopped partway through and drafted a real version of that prompt for my monthly reporting task. That's the mark of a useful module - when it makes you stop and start applying the content before you've even finished.

**Comments:**

Emotionally, the module arc works well. It starts by validating a real concern (AI isn't automatically right), gives you a framework to work with, shows you concrete examples, and ends with a practical artefact. The peak engagement point for me was the Demonstrations section - that's where I felt most connected to my actual work. The slight dip was during the historical context section. The exercise re-engaged me fully.

---

# 8. Time and Difficulty

**Actual time spent on the module:**

Reading: ~30 minutes (read most sections twice, skimmed the historical context section)
Exercise: ~28 minutes (ran both prompts for a real task, documented comparison)
Reflection: ~10 minutes (reviewed my notes, sketched the artefact structure)

Total: approximately 68 minutes

**Difficulty level:**

Easy to Moderate

The concepts are not difficult. The exercise requires a bit of genuine work if you do it properly.

**Was the estimated time accurate?**

The module says 60-90 minutes and I came in at around 68 minutes, so yes - that's accurate if you do the exercise properly. If you skim the exercise or just write prompts without running them, you'd probably finish in 45 minutes. If you run both prompts, document the comparison, and start building your artefact like I did, you might hit 90 minutes. The range is reasonable.

**Comments:**

The time estimate is honest. I appreciated that it breaks down the timing by section in the teaching flow - that helped me pace myself and know what was coming. Dont think you need to change anything here. The 20-30 minute exercise block is accurate if you're actually running prompts.

---

# 9. Most Valuable Part

**What was the single most useful idea in this module?**

The structured prompt framework: Role / Context / Task / Constraints / Output Format.

**Why:**

This is the thing I've been groping toward on my own for the past 6 months without having a name for it. When I look at my successful prompts - the ones that gave me good formula solutions or clean macro code - they almost all have this structure intuitively. When I look at my failures, they're usually missing Context or Constraints specifically.

Having it named and explicit means I can (a) apply it consistently instead of just getting lucky, (b) teach it to my junior analysts, and (c) use it as a diagnostic when prompts don't work - "which element am I missing?" That's genuinely valuable.

The finance P&L demonstration showing this framework in practice is also worth calling out - it's the demonstration that will stick with me longest because it's the most domain-relevant.

---

# 10. Weakest Part

**What section should be improved the most?**

"Why this tool is suddenly everywhere" - the historical context section.

**Why:**

It feels like table stakes content that people taking an AI course have already encountered in some form. The pre-LLM / search engine / generative model comparison is accurate but brief and doesn't add much for someone who's already been using ChatGPT for months. It feels like filler between the mental model (strong) and the strengths/weaknesses sections (strong).

If the goal is to explain why AI is worth taking seriously, there might be a more effective way to do that - like a brief case study of what went wrong when someone skipped the human review step, rather than a history of AI technology development. That would reinforce the module's core lesson rather than providing context that doesn't directly connect to it.

Alternatively, cut it shorter. The mental model already explains enough about how AI works for Module 1 purposes. The historical framing can wait.

---

# 11. Missing Content

**Did the module assume knowledge you did not have?**

Minor gaps:

1. "Context window" - used as if self-explanatory. For a non-CS professional, a brief practical definition would help. Something like: "The context window is the total amount of text the model can 'see' at once - including your prompt and any material you paste in. Think of it as the model's working memory for that conversation."

2. "Tokens" - mentioned in passing. Worth a one-line definition even if it's not a core concept in this module.

3. The module assumes your primary AI use case is writing or documentation. If you're using AI for data analysis, formula generation, or code writing (which is common among technical professionals), the examples don't fully transfer. Not a knowledge gap per se, but a context gap.

**What additional explanation would help?**

A brief note on context windows and tokens as practical terms would close the two terminology gaps without needing to go deep on technical detail. Even a simple glossary callout box (clearly this'll be formatted nicely in the final course) would do it.

For the data/Excel use case: one example in the exercise that shows a structured prompt for a data task rather than a writing task would make the module more immediately relevant for analytical roles.

---

# 12. Final Evaluation

**Overall usefulness of this module:**

1 2 3 **4** 5

Four out of five. It's a genuinely solid Module 1 and delivers real value. The half-point I'm holding back is because the examples skew toward writing/documentation tasks and away from data/analytical tasks, which is where a significant chunk of corporate AI use actually sits.

**Would you recommend this module to a colleague?**

- [x] Yes

**Why?**

I'd recommend this to my team without hesitation. The mental model is clean and memorable, the demonstrations are practical and well-chosen, and the artefact is immediately usable. For someone who's been using AI in an ad-hoc, trial-and-error way - which is most people I know at work - this module gives them a structured framework to work from. That's worth the time investment.

I might caveat it for my more analytically-focused colleagues (the "this is mostly writing examples, but the framework applies to data work too - you'll have to translate it yourself"). But the core content stands.

---

# Reviewer Summary

T1M01 is a strong foundation module that delivers on its core promise: it gives learners a practical, memorable framework for treating AI as a tool rather than an authority. The mental model is clean and well-structured, the demonstrations are the best part of the module (the finance P&L and operations onboarding examples directly relevant to my work), and the portfolio artefact is immediately useful rather than just a box-ticking exercise. What the module does well, it does genuinely well - the structured prompt framework (Role / Context / Task / Constraints / Output Format) is the kind of systematic approach I've been trying to build intuitively for months and having it named and explicit is the single most valuable takeaway. What should be improved: the historical context section ("why this tool is suddenly everywhere") is the weakest part and feels like filler compared to the stronger sections around it; a data analysis example in the exercise and demonstration sections would broaden relevance for analytical professionals who use AI primarily for formulas, data cleaning, and quantitative work rather than writing tasks; and two terminology gaps (context window, tokens) need brief practical definitions for non-CS readers. What should definitely stay unchanged: the mental model diagram, the finance P&L demonstration, the five-criteria evaluation checklist in the exercise, and the operating checklist artefact - these are all keepers.

---
