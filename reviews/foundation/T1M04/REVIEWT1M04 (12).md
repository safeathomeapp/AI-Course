# Course Module Feedback - Zara Ahmed - R11

**Module Reviewed:** T1M04 – Structured Prompting Fundamentals

---

## Reviewer Background

Name: Zara Ahmed
Professional background: Marketing Intern at a mid-size tech company, Toronto. Recent grad, communications degree. Use AI constantly for social captions, blog drafts, brainstorming, email responses. Pretty much live in ChatGPT honestly.
Experience using AI tools: Moderate-to-heavy — basically daily across multiple platforms
Primary reason for taking this course: Career development — trying to stand out as an intern and actually know what im doing with AI

---

# 1. First Impression

**Does the purpose of the module feel clear?**

Yes!! Super clear from the first sentence. "Structured prompting is the main control mechanism for AI output quality." Okay so this module is literally going to teach me why my AI outputs are sometimes amazing and sometimes completely unusable and how to fix that. I'm in.

**Do the learning objectives feel realistic?**

Yes. Three things: apply the five-part structure, diagnose weak prompts, produce predictable outputs. These all feel achievable. "Predictable" is actually the word I needed — my whole problem is that I never know if I'm going to get something usable or something I have to completely rewrite.

**Does the tone feel approachable, professional, confusing, or overly technical?**

Very approachable! Probably the most approachable module in the course so far. It reads like someone actually wants you to understand it, not just check a box.

Rating (1–5):
Clarity of purpose: 5
Tone and readability: 5

Comments:

Im not gonna lie the earlier modules were kind of a slog sometimes (especially Module 1.2 with all the technical stuff) but this one pulled me in immediately. It felt like it was written for people who use AI for work, not for people who study AI, and thats exactly what I need.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

YES. Okay so the five elements (RCTCO — Role, Context, Task, Constraints, Output Format) are so much clearer when explained with what each one *prevents* rather than just what it is. Like:

- Role → prevents the AI from writing in a voice thats wrong for the audience
- Context → prevents the AI from guessing about stuff it doesnt know
- Task → prevents vague outputs that dont do what you need
- Constraints → prevents hallucination and overreach (this one is huge)
- Output Format → prevents having to completely reformat everything afterwards

The "prevents X" framing is so much more useful than "means Y." I copied this whole list into my notes.

**Did any terminology feel confusing?**

"Output schema" appears once but the module says "Output Format" everywhere else — a little confusing, I had to re-read that sentence.

"Downstream rework" — I got it from context but its kind of a jargony phrase. Just say "having to fix it later."

"Probability space" — okay this one went a bit over my head. Thats the only moment where I felt like the explanation was aimed at someone more technical than me.

**Did the mental model make sense?**

Yes! The list of "common weak-prompt patterns" was honestly kind of embarrassing to read because I do almost all of them:

- "Multi-goal prompts with no priority" — literally every day. I ask AI to write a caption AND make it funny AND make it short AND include the key message AND use the right hashtags all in one message. No wonder I get chaos.
- "Missing audience definition" — I never thought about this being important. I just describe the task.
- "No output schema for downstream work" — I didnt know I could even ask for a specific format. I just took whatever structure the AI chose.

Seeing my own habits described as "weak patterns" was actually motivating, not embarrassing. Because they're COMMON patterns. I'm not doing something uniquely bad, I'm doing what everyone does before they know better.

**Was the explanation too long, too short, or appropriate?**

Appropriate! Well-paced. I read faster than average and still felt like each section earned its length.

Rating (1–5):
Concept clarity: 5
Terminology accessibility: 4
Usefulness of mental model: 5

Comments:

The "prompt design as workflow design" section honestly changed how I think about prompting. I've been treating prompts like text messages — just fire off whatever feels right. But thinking about it as a workflow spec changes everything. If I'm going to use AI output in a social media calendar or a blog draft, it needs to fit the format. I should be specifying that in the prompt, not reformatting afterward.

This sounds so obvious in retrospect but I genuinely had not thought about it this way before.

---

# 3. Demonstrations

**Did the examples feel realistic?**

The finance P&L demo — not my work at all but I understood the principle. Summarizing financial data with constraints on not inventing numbers makes total sense.

The ops/SOP demo — more interesting. Converting meeting notes into a structured document is something I actually do sometimes when im taking notes in team meetings and then need to write up action items. The weak prompt ("turn these notes into a process document") is 100% what I would have written.

**Did the improved prompt clearly outperform the weak prompt?**

Yes! The contrast is really dramatic. The weak prompts are so short and vague. The improved ones are like... complete instructions. The difference in output quality makes obvious sense once you see it.

**Did the explanation help you understand why the improvement worked?**

Yes. The analysis sentences are short and clear. Easy to follow.

**Could you imagine applying this approach in your own work?**

IMMEDIATELY. The marketing Real-World Application in section 5 actually hit closer to home — but even from these demos I was already planning:

For social content: Role as social media strategist for [brand], Context about the brand voice and target audience, Task to write three caption options for a product post, Constraints to match the brand tone and avoid generic phrases like "game-changer," Output Format as three numbered options each under 150 characters.

That structure would eliminate SO much back-and-forth with my manager when I ask for AI help with copy.

Rating (1–5):
Example realism: 4
Clarity of improvement: 5
Practical applicability: 4

Comments:

Both demos are useful but neither is from a marketing or content context until the Real-World Application. For marketing interns or social media professionals this means doing some translation work. The principle is clear enough that it transfers, but a social media or content demo would have landed way more directly.

I kept thinking — what does a structured prompt for social captions look like? For email campaigns? For content calendars? Those are my daily tasks and they're not covered in the demonstrations.

---

# 4. Guided Exercise

**Was the task easy to understand?**

Yes. Take a real prompt you use, rewrite it with the five-part structure, run both versions, compare with the checklist.

**Did the instructions feel clear?**

Yes! The labeled template was really helpful. Having Role / Context / Task / Constraints / Output Format as labeled fields meant I didn't have to figure out the format — I just had to fill in the boxes.

The example output (product analyst for user interviews) wasn't my domain but it gave me a clear idea of what a complete structured prompt looks like.

**Did the evaluation checklist help you compare outputs?**

Yes. Having five specific criteria to score meant I was comparing systematically instead of just "I like this one better."

"Assumption transparency" was interesting — it means the AI should tell you when it's guessing rather than hiding its uncertainty in confident language. That's actually really important for marketing work where you might use AI copy in real campaigns. You need to know what it's certain about.

What I did: rewrote my weekly social caption prompt. Old: "Write 5 captions for our product post about [feature]." New: role as social media strategist for our brand (described voice), context about the feature and who our customers are, task to write 5 caption options for Instagram, constraints to avoid generic marketing language and match our specific tone, output format with each caption numbered + character count + suggested hashtag set. The structured version gave me captions that actually sounded like us. The unstructured version gave me captions that sounded like every other tech company.

**How long did the exercise actually take?**

About 40 minutes. The constraints field took me longer than expected.

Rating (1–5):
Instruction clarity: 5
Exercise usefulness: 5
Difficulty level: 3

Comments:

Writing Constraints was harder than I expected. The other four fields were pretty intuitive. But what constraints should I put for a social caption prompt? "Dont use generic language" — is that a constraint? It's kind of vague. "Dont use the words 'game-changer,' 'innovative,' or 'revolutionary'" — that's more specific and the module says specific is better. But figuring out *what* to make specific is its own skill that the module doesn't fully teach.

More guidance on how to identify and write good constraints would have helped a lot here.

---

# 5. Real‑World Application

**Did the scenario feel realistic?**

YES. Okay this one hit. Marketing manager getting generic AI output and the team having to rewrite it from scratch — this is my life. This is exactly what happens when I give AI a vague prompt for campaign copy and get back something that sounds like ChatGPT wrote it (because it did, badly). My manager has to tell me "this isn't us" and I have to redo it.

**Did it show how AI should be used responsibly?**

Yes. The reminder that "human review still owns final quality" is important. For marketing and brand content especially you can't just publish AI output without review. The brand voice and accuracy have to be checked.

**Did it help connect the concept to real professional work?**

Yes!! This was the most directly applicable scenario in the whole module for me. The structured prompt for campaign concepts with role, audience, brand goal, concept format, and constraints on unsupported claims — that's a template I can use for pretty much any creative brief.

Rating (1–5):
Scenario realism: 5
Practical value: 5

Comments:

I genuinely wish this scenario came earlier — like right after the demonstrations — because it would have made the whole concept click faster for me. The finance and ops demos were useful but the marketing scenario is where I went "OH. That's what this is for."

The outcome statement — "better first drafts, faster review cycles, clearer assumptions, less cleanup before decision meetings" — is exactly what I want. Less "this isn't us, redo it" from my manager.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

Honestly YES and this is one of the things Im most excited about from this whole course. A structured prompt library with eight or more prompts, organized by use case — this is a real portfolio piece. When I'm applying for full-time roles and someone asks "how do you use AI in your work," I can show them a documented, tested prompt library. That's not just "I use ChatGPT." That's structured, professional AI practice.

**Could you realistically use this in your job or portfolio?**

Yes. Starting my list: social media captions, blog post outline, email newsletter intro, content brief, competitor research summary, campaign concept options, engagement response drafts, content calendar planning. That's eight. Going to keep building.

**Was the template sufficient to create the artefact?**

Yes! Seven fields, clear labels, Review Notes to track what worked. It's clean and accessible. I didn't need any additional explanation to understand what to do.

Rating (1–5):
Practical usefulness: 5
Portfolio value: 5

Comments:

The prompt library is THE artefact from this course for me. Way more useful than anything I've been asked to produce in earlier modules. This is something I can show in a job interview and talk about as an example of systematic, professional AI use. That's huge for an early-career person trying to differentiate.

Suggestion: a section on how to organize the library as it grows would be helpful. Like — do I organize by function? By frequency of use? By AI tool? When I have 30+ prompts, how do I find the one I need quickly?

---

# 7. Emotional Learning Experience

Felt **immediately engaged** — the opening connected directly to my actual frustration with inconsistent AI outputs. I didn't have to imagine why this matters; I already knew.

Felt **mild embarrassment turning into relief** when I read the common weak-prompt patterns. I do all of these. But the relief was realizing they're common and fixable, not personal failures.

Felt **genuinely excited** during the Real-World Application — the marketing scenario made me go "this is exactly my problem and here is the solution."

Felt **frustrated in a productive way** during the Constraints field — it was harder than expected and I wanted more guidance.

Felt **proud** at the end of the exercise. My revised caption prompt actually worked. That's the feeling.

---

# 8. Time and Difficulty

Reading: 20 minutes
Exercise: 40 minutes
Reflection: 10 minutes

Difficulty level: Moderate — concept is clear but writing good constraints is genuinely harder than the other four elements

Was the estimated time accurate?

Yes. 70 minutes total, within the 75-120 minute range. I was slightly under. If I'd spent more time building out the prompt library I would have been in the middle of the range.

Comments:

Time estimate is accurate. I'd add: the exercise gets longer if you really commit to building the prompt library, which you should. Don't rush the library — it's the thing you'll actually use.

---

# 9. Most Valuable Part

The Real-World Application scenario combined with the failure-mode mapping for the five elements.

The failure-mode mapping is the theoretical anchor — knowing that Constraints prevent hallucination and overreach makes the element meaningful, not just a checklist item. The marketing scenario is the practical proof — seeing the structured campaign concept prompt produce distinct, actionable, brand-aligned options is the demonstration I needed for my specific work context.

Together: theory + domain-specific application = I know why this works and I've seen it work in my context.

---

# 10. Weakest Part

Constraint-writing guidance.

The module shows great constraints in the demos ("do not invent figures," "do not use generic marketing language," etc.) and correctly says vague constraints ("make it better") are bad. But it doesn't explain HOW to figure out what constraints to write for a new situation.

For me, writing Constraints for my caption prompt took three tries. First I wrote "be creative" (bad, vague). Then "match our brand voice" (better but still vague). Then "avoid the words 'game-changer,' 'innovative,' 'revolutionary' — these aren't in our brand language; match conversational tone consistent with previous examples provided" (good, specific). I figured this out through trial and error, not because the module taught me the approach.

A framework — "ask yourself: what would the model plausibly do wrong here?" — would have gotten me there faster.

---

# 11. Missing Content

Module is really well-structured and I don't have many gaps to flag.

Suggestions:

1. **Marketing or content creation demonstration.** A demo showing structured prompting for social content, blog drafts, or campaign copy would serve a huge chunk of AI tool users (probably the majority) without them having to translate from finance and ops examples.

2. **Constraint-writing guidance.** As described above — a brief framework for identifying what constraints to write, not just examples.

3. **Prompt library organization tips.** As the library grows, how do you organize and find prompts efficiently? Simple tagging or categorization guidance would help.

4. **A note on AI tool variation.** Do structured prompts work differently in ChatGPT vs Claude vs Copilot? A brief note would help multi-tool users.

---

# 12. Final Evaluation

Overall usefulness of this module:

1 2 3 4 **5**

Would you recommend this module to a colleague?

Yes

Why?

This module is the one that makes AI actually useful for work instead of just interesting to play with. The five-part structure is easy to remember, the failure-mode framing makes each element meaningful, and the prompt library is a real portfolio piece for early-career people trying to demonstrate professional AI skills. If you work in marketing, content, or any kind of communications and you use AI tools, this module will directly improve your output quality. The exercise alone is worth it — testing a real prompt and seeing the difference is more convincing than any explanation.

---

# Reviewer Summary

Module 1.4 was the moment this course went from "interesting" to "immediately useful" — the five-part RCTCO framework with failure-mode justification finally explained why my AI outputs were inconsistent (I was doing 2-3 elements intuitively and skipping the rest, especially Constraints) and the exercise validated this by producing social captions that actually sounded like my company's brand instead of generic AI copy. The Real-World Application marketing scenario was the most directly relevant content in the module and honestly in the course for my role. The prompt library is the artefact Im most excited to develop and show in job applications. What should be improved: constraint-writing guidance needs a framework not just examples — writing good constraints is harder than writing good roles or tasks and the module doesn't equip learners to figure out what constraints to include for new situations; a marketing or content creation demonstration would have made the whole concept click faster for my professional context; prompt library organization tips would improve long-term usability. What should stay: the failure-mode mapping per element (this is why the framework is memorable not just memorable as a checklist), the Real-World Application marketing scenario, the labeled template fields for the exercise (blank-page paralysis is real and labeled fields fix it), the seven-field prompt library template, and the accessible language throughout — this module should feel like every module feels.
