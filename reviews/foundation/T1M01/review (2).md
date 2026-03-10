# Course Module Feedback - Riley Thompson

**Module Reviewed:** T1M01 - Introduction to AI as a Tool
**Date:** 2026-03-08

---

# Reviewer Background

**Name:** Riley Thompson

**Professional background:** junior full-stack dev at a Series A startup in Austin. been coding professionally for about 1.5 years (3 if you count bootcamp which... debatable lol). mostly frontend React but i do some Node stuff too. the kind of dev who can ship features but also definitely has "interesting" code in prod that no one has looked at in 6 months. ya know the vibe.

**Experience using AI tools:** Moderate (though "chaotic" might be more accurate)

ok so i use AI constantly. like embarrassingly constantly. Cursor AI editor all day, Copilot enabled, ChatGPT Pro for debugging explanations. probably interact with some kind of AI coding tool 20-30 times a day. the problem is i dont think im using it *well* - more like... aggressively? desperately? my success rate with AI suggestions is maybe 40% usable on first try which honestly feels low for how much i rely on it. thats kind of why im here.

**Primary reason for taking this course:**
- [ ] curiosity
- [x] career development
- [x] productivity improvement
- [ ] portfolio building
- [ ] other

basically: AI is half my workflow and its also responsible for some of my worst moments at work. need to fix that relationship. also lowkey worried about being "found out" as someone who doesnt really know what theyre doing. the course seemed like it might help with both?

**Additional context:** did this on a saturday night around 10:30pm. had two energy drinks. discord was open on the other monitor and i definitely got distracted a couple times. that said this is actually when my brain works best so take the timing with a grain of salt. reviewed it in one sitting which is unusual for me - usually i bounce between tabs and never finish things. this one held my attention mostly.

---

# 1. First Impression

**Does the purpose of the module feel clear?**

yeah, super clear actually. "AI is a tool not an authority" - ok that's just... the thing i needed someone to say to me six months ago when i started blindly accepting every Cursor suggestion like it was scripture lol. purpose is obvious from the first paragraph: learn to use AI deliberately, keep humans in the loop.

also ngl the phrase "fluency is not evidence" kind of stopped me in my tracks. thats SO the thing that happens with AI code generation. it generates beautiful looking code that is confidently and completely wrong. been there. many times. this framing immediately made me feel like the course gets the actual problem.

**Do the learning objectives feel realistic?**

yeah they look reasonable. "distinguish high-value AI assistance from high-risk AI misuse" is the one im most here for. i have a very unclear sense of when i should trust Cursor and when i should be skeptical and this is basically promising to help with that. seems achievable in one module.

**Does the tone feel:**

approachable and professional. doesnt talk down to me which i appreciate. doesnt feel like a corporate HR training thing. reads like someone who actually uses AI regularly wrote it, not someone who just read about it.

Rating (1-10): [i know it says 1-5 but like... 1-5 doesnt give me enough range, sorry]
Clarity of purpose: 9/10
Tone and readability: 8/10

**Comments:**

strong opening honestly. the framing immediately validates like... every bad experience ive had with AI tools going wrong while looking totally fine. the database incident i had last month (cursor rewrote a query that looked perfect and crashed staging) is LITERALLY the failure mode they're describing in the first paragraph. that resonance made me want to keep reading.

the one thing - and this comes up more later - is that from the first impression i couldn't tell if this was a course for devs or for business people. the language is professional-generic. which is fine but also slightly sets off my "this might not be for me" alarm. we'll see.

---

# 2. Concept Explanation

**Did the explanation help you understand the concept?**

yeah actually it did, more than i expected. the mental model:

Prompt → Context Window → Probability Engine → Output → Human Review → Decision

ok so as a dev i immediately read "probability engine" and thought "oh so it's basically doing weighted token prediction with softmax over the vocabulary" and then realized i was overcomplicating it. the simple version they give - you prompt, it processes, you get output, you check it, then you decide - is actually a really clean model that i can apply to my Cursor workflow specifically.

the human review step being *explicitly named* is the thing im gonna try to internalize. because currently my review process is "does it compile? ok ship it" which is. not great.

**Did any terminology feel confusing?**

nah not really, most of this was familiar. "context window" i know from using the tools. "tokens" i get. "hallucinations" in the AI sense - yeah that's just a thing i've experienced a lot.

the one thing i'll flag: "probability engine" is a slightly weird phrase if you're not technical AND also not fully accurate if you ARE technical. like it's a useful simplification but if someone tries to google it they're gonna get confused. maybe "pattern prediction system" or honestly just lean into "autocomplete on steroids" which is more evocative and more accurate for a beginner.

actually the hallucination section is where things clicked most for me - "the model is optimized to continue language coherently, not to guarantee truth." as someone who's had AI generate syntactically perfect code that does the completely wrong thing, this is exactly right. it's not lying to me on purpose, it's just... completing the pattern confidently even when the pattern leads off a cliff. that mental shift helped.

**Did the mental model make sense?**

yes. clean, memorable, good. i already use something like this intuitively but having it formalized helps. i'm gonna try to actually pause at "Human Review" before merging AI-generated code instead of just running the tests and hoping for the best.

**Was the explanation too long, too short, or appropriate?**

appropriate. maybe even slightly short in places? the strengths/weaknesses section is a bit list-heavy without much explanation of *why* AI is weak at certain things. like "guaranteed factual correctness without source checks" - yeah but why? would've liked another sentence per weakness explaining the mechanism.

the "why this tool is everywhere" section - im gonna be honest, skimmed it. already know AI is big. didn't add much for me.

Rating (1-10):
Concept clarity: 8/10
Terminology accessibility: 7/10
Usefulness of mental model: 9/10

**Comments:**

ok side tangent but the "common beginner failure pattern" section is LITERALLY my workflow with cursor rn:

1. ask vague question ✓
2. AI gives confident answer ✓
3. assume correctness ✓
4. use without verification ✓
5. error appears later in business workflow ✓

except in my case it's "error appears in staging during demo to the CTO" but same energy. anyway THIS IS EXACTLY THE PROBLEM IM HAVING and seeing it written out so cleanly is kind of vindicating and also slightly humbling.

the corrected pattern at the end is good too. "User defines role, context, task, constraints, and format" - yeah this is clearly the thing i'm not doing. i'm at step 1 and going straight to step 5 basically every time.

---

# 3. Demonstrations

**Did the examples feel realistic?**

ok here's where i start to have feelings.

the examples are realistic as *business* examples. onboarding documentation for a 12-person company. monthly P&L for a small business owner. both of these are... real things people do. theyre just not things i do. im a developer. my prompts are "fix this function" and "why is this error happening" and "rewrite this component to use TypeScript".

i can see the principle in the examples but i have to do mental translation the whole time. like, ok, "role: operations analyst, context: 12-person company, task: draft onboarding checklist" - i get it - but in my head im trying to map that to "role: frontend developer, context: React app using Redux, task: write a hook that does X". the translation isn't impossible but it adds friction.

**Did the improved prompt clearly outperform the weak prompt?**

yes, clearly. "Write our onboarding process. Make it good." vs the structured version - obvious improvement. the principle is very visible even in non-dev examples.

the finance example's constraints are the most useful part: "do not invent numbers" / "distinguish facts from interpretation." for coding this would be "do not assume what the codebase structure looks like" / "flag where you're making architectural decisions." the parallel exists even if it requires translation.

**Did the explanation help you understand why the improvement worked?**

yeah the analysis paragraphs after each example are good. brief but hit the key points. for the finance one - "blocks fabricated numbers, separates facts from interpretation, creates format suitable for decision meetings" - all three of those have direct coding analogues if you squint.

**Could you imagine applying this approach in your own work?**

yes, but i had to adapt everything mentally. i actually stopped during this section and rewrote one of my recent cursor prompts using the framework to test it. went from:

"make this api call more efficient"

to something like:
- Role: senior frontend developer
- Context: React app, this fetch call runs on every scroll event
- Task: optimize this API call to reduce unnecessary network requests
- Constraints: dont change the response shape, keep existing error handling
- Output Format: modified function with comments explaining what changed and why

that's... actually a much better prompt. and the output i got was way more targeted. so the framework works even when the examples aren't dev-focused. i just had to figure that out myself.

Rating (1-10):
Example realism: 4/10 [for my context specifically]
Clarity of improvement: 9/10
Practical applicability: 6/10 [with required mental translation]

**Comments:**

ngl this section is where i started feeling like the course was written for a different person and i was crashing the party a little. all the examples are business-document-generation type tasks and there are zero coding examples. not one.

the framework is genuinely useful - i tested it in real time and it worked - but having to constantly translate from "marketing campaign manager" to "developer with a broken React component" adds cognitive load and makes the content feel like it wasnt designed with me in mind.

would love even ONE example with code. something like: weak prompt = "fix this function", improved prompt = [structured version with Role: developer working in X stack, Context: this function handles Y, Task: optimize for Z, Constraints: maintain backward compatibility, Output: refactored function with explanation]. thats all i needed.

---

# 4. Guided Exercise

**Was the task easy to understand?**

yeah, clear. "take a vague work prompt, structure it, compare results." simple enough.

**Did the instructions feel clear?**

the instructions are fine. my one flag is the example output is again finance-focused. "summarize this monthly finance report" - for a dev this is like being shown how to use a hammer by someone demonstrating it on a screw. the tool works but the example doesn't match my use case.

that said the structure (Role / Context / Task / Constraints / Output Format) is universal enough that i could adapt it. which i did (see above).

**Did the evaluation checklist help you compare outputs?**

the checklist is decent. "Usefulness for Decision Making: Can a manager act on this safely?" - honestly the dev equivalent of this is "can i actually ship this without the senior dev rolling their eyes" which is a real bar i care about.

"Are assumptions explicit instead of hidden?" is the criterion i'm gonna try to internalize specifically. with Cursor i never think about what assumptions it's making about my codebase. it just makes them silently and i accept them. that's how i ended up with a query rewrite that violated our caching strategy.

**How long did the exercise actually take?**

about 35 minutes? i got sidetracked twice. once to actually test my improved prompt in cursor which is a good tangent. once to dm a dev friend on discord to tell them about the framework which is less productive but here we are.

Rating (1-10):
Instruction clarity: 8/10
Exercise usefulness: 7/10
Difficulty level: 3/10 [easy conceptually, the mental translation to dev context is the hard part]

**Comments:**

completed the exercise and it was genuinely useful. the structured version of my API optimization prompt gave way better results than my usual approach. so like... the thing works.

i will say: for a dev specifically, "which output is safer to use?" has a slightly different meaning than for a business user. safe-for-me means: will it break existing tests? does it follow our architecture patterns? does it introduce security vulnerabilities? is it going to work at scale or just on my machine? the general checklist doesnt surface these dev-specific concerns. not saying the exercise is wrong, just noting the translation required.

---

# 5. Real-World Application

**Did the scenario feel realistic?**

as a marketing scenario: sure, why not. as something i can relate to as a developer: not really.

i genuinely tried to engage with the marketing campaign example. i get it - they needed a relatable professional example and marketing campaigns are something most people understand. but by this point in the module we've had: onboarding documentation, P&L analysis, and now marketing campaigns. three examples and zero of them involve code, development, or anything in my domain.

im not mad. just noting that if youre a dev taking this course you will have to do ALL the translation work yourself.

**Did it show how AI should be used responsibly?**

yeah the human review checklist at the end is actually good and more universal than the scenario itself. "validate claims against actual offer and legal constraints" → for me that's "validate logic against actual codebase and existing tests." the structure transfers.

**Did it help connect the concept to real professional work?**

for a marketing person: probably yes directly. for me: yes with effort. the four-step review process is the most transferable part of the section. i wrote down my dev version in my notes:

1. validate code against existing architecture and patterns
2. check whether AI's assumptions about the codebase are accurate
3. adapt output to match our code style and conventions
4. approve only after tests pass and senior dev has eyeballed it

that's a real improvement to my current workflow ("does it compile? ship it") so mission accomplished i guess. i just did the work the course should have done for me.

Rating (1-10):
Scenario realism: 3/10 [for my context]
Practical value: 6/10 [framework extracts fine, domain is irrelevant to me]

**Comments:**

three sections in and i've mentally rewritten all the examples for a dev context. this is fine but it shouldnt be the learners job to do that translation.

a 30 second callout at the start of this section saying "if you work in a technical role, here's how this maps to your context" would do a lot. or an alternative scenario. something. anything with like a terminal or a github PR in it.

---

# 6. Portfolio Artefact

**Does the artefact feel useful outside the course?**

actually... yes? more than i expected.

an "AI Tool-Use Operating Checklist" for my work would look like: when to use Cursor for new features vs. when to write code manually. what to check before accepting any AI suggestion. when to ask senior devs to review AI-generated code vs. when to trust my own judgment. i dont have this documented anywhere right now. it's all vibes-based. having it written down would actually be useful.

**Could you realistically use this in your job or portfolio?**

for my job: yeah i'll probably build a version of this for my Cursor workflow specifically. the "Risk Level" field is the one thats gonna do work for me - low risk = autocomplete and style fixes, medium risk = logic changes, high risk = architecture decisions and anything touching the database (learned that one the hard way).

for portfolio: not really relevant for me rn but i could see putting it in a "professional practices" section of a readme or something if it's good enough.

**Was the template sufficient to create the artefact?**

the template is fine as a starting structure. the fields make sense. my main note: for developers the "AI Role" options (Drafting / Summarizing / Analysis) dont cover our main use cases which are more like: Code Generation / Bug Fixing / Refactoring / Architecture Advice / Code Review. would be nice if the template was a bit more flexible or had domain-specific variants.

Rating (1-10):
Practical usefulness: 7/10
Portfolio value: 4/10

**Comments:**

started sketching my dev version of the checklist while reading. it's gonna look different from the template but the bones are there. this is probably the most immediately applicable thing in the module for me personally, weirdly. like all the examples missed my context but this artifact i can actually make mine.

Risk level for my dev checklist will be:
- Low: autocomplete, variable naming, comments
- Medium: function rewrites, UI components, simple API calls
- High: database queries, auth logic, state management architecture, anything that touches other services

the fact that i just wrote that tells me the module did its job even if the route was indirect.

---

# 7. Emotional Learning Experience

**At any point did you feel confused?**

not really confused. the concepts are clear. more... periodically frustrated that none of the examples landed in my world.

**At any point did you feel overwhelmed?**

nah. content is well-paced. nothing is too dense.

**At any point did you feel bored?**

lowkey during the "why AI is everywhere" section. i know why AI is everywhere. everyone knows why AI is everywhere. felt like filler to pad the module length. could've spent that time on a coding example instead.

also slightly tuned out during the marketing scenario because i physically could not make myself care about campaign concepts for a local services business. sorry.

**At any point did you feel confident?**

yeah when i applied the framework to my own cursor prompt in real time and got noticeably better results. that was the "ok this works" moment. also when the beginner failure pattern was described and i recognized my exact behavior pattern without prompting (pun intended). weirdly validating to see your failures described accurately.

**At any point did you feel excited to try the idea?**

yes - the structured prompt framework. immediately tested it during the demonstrations section and it worked. im gonna use this for the rest of my Cursor sessions going forward and see if my success rate improves. would like to stop being the guy who broke staging with an AI-optimized database query.

**Comments:**

emotional arc of this module for me:
- opening: "YES this is my problem exactly"
- concept section: "ok i actually understand this and it applies to my stuff"
- demonstrations: "hmm these examples dont really fit my work"
- real-world scenario: "ok im kind of on autopilot rn, nobody here is using React"
- exercise: "oh wait this framework actually works when i apply it to real code prompts"
- artefact: "ok i can use this"

so overall positive arc. the dip in the middle (examples section) is the main issue. if the examples hit closer to home the emotional experience would have been more consistently engaged.

---

# 8. Time and Difficulty

**Actual time spent on the module:**

Reading: ~25 min (skimmed a couple bits)
Exercise: ~35 min (including tangents and actually testing prompts in Cursor)
Reflection: ~15 min

Total: ~75 minutes including distraction time. probably 55-60 if i was locked in.

**Difficulty level:**

Easy

concepts are clear. the challenge is the translation work for devs, not the difficulty of the concepts themselves.

**Was the estimated time accurate?**

60-90 min is accurate. i came in at the lower end partly because i skimmed sections that felt less relevant and partly because the concepts arent hard once you get them.

**Comments:**

taking this at 10:30pm on a saturday was probably fine for me but would have been rough for someone who needs quiet focused time. i naturally get more alert in the evening so this is genuinely my best learning window. the section timing breakdown in the module overview is helpful - i used it to pace myself and know how much was left.

---

# 9. Most Valuable Part

**What was the single most useful idea in this module?**

the beginner failure pattern (and its corrected version).

**Why:**

because it's literally a diagram of what happened to me with the Cursor database incident. vague prompt → confident-looking output → assume correctness → use without verification → error in production. that's the exact sequence. the fact that this is a *predictable* failure pattern rather than random bad luck is actually kind of useful to know. it means i can fix it systematically instead of just hoping to get lucky.

the corrected version (define role/context/task/constraints/format → get structured draft → check facts and assumptions → approve/edit/reject → human owns decision) is now my target workflow. i'm not there yet but now i have a name for where i'm going.

second most valuable: the framework itself (Role / Context / Task / Constraints / Output Format). tested it in real time, it works. going to apply this to my Cursor prompts specifically.

---

# 10. Weakest Part

**What section should be improved the most?**

the demonstrations section - specifically the choice of examples.

**Why:**

two examples both from non-developer domains (admin documentation and financial analysis) means the entire demonstrations section requires mental translation for anyone in a technical role. the framework being demonstrated is genuinely useful but the distance between "onboarding checklist for customer support" and "React hook with TypeScript" is significant and the course doesnt bridge it.

this isnt just a dev problem. the course has marketing examples, operations examples, finance examples, and admin examples. if you work in healthcare, education, engineering, law, design - you're also doing translation work. the framework is universal but the examples are narrow.

adding even one example in a clearly different domain would help a lot. even a brief note like "here's how the same framework applies in a technical role" would've been enough.

---

# 11. Missing Content

**Did the module assume knowledge you did not have?**

no - the concepts are accessible. the terminology was familiar to me.

what it assumed was that my work context involves document drafting, financial analysis, or marketing. it didn't assume knowledge, it assumed context - and for a developer that context is pretty far off.

**If yes, what additional explanation would help?**

three things that would make this module substantially better for the developer segment:

1. **at least one coding example in the demonstrations.** something like: weak = "fix this function", strong = structured version with Role (senior dev in this stack), Context (what the function does and where it lives), Task (the specific change), Constraints (maintain backward compatibility / dont change the API surface), Output (modified code with explanation of changes). this exists. it should be in the course.

2. **a note about how the structured prompt framework applies to coding contexts specifically.** the five fields translate but require interpretation. a single callout paragraph would save developers significant mental effort.

3. **some acknowledgment that code review is a different kind of human review than document review.** "verify facts and assumptions" means something different when you're reviewing a SQL query vs. a marketing copy. what am i actually checking when i review AI-generated code? tests passing? architecture fit? security? performance? a brief note here would have been immediately useful for my specific situation.

---

# 12. Final Evaluation

**Overall usefulness of this module:**

1 2 3 4 5 ... 6 **7** [going out of bounds on the scale, framework is useful but the non-dev examples drag the score for me personally]

framework and principles: 9/10. example relevance for developers: 3/10. averaging to roughly 7 which feels right.

**Would you recommend this module to a colleague?**

- [x] Maybe

**Why:**

depends entirely on who the colleague is. for a dev: i'd say "the framework is great and you'll use it, but prepare to do all your own translation - none of the examples are about code. worth it but slightly frustrating." for someone in ops, finance, or admin: i'd say "yes actually, this is pretty directly applicable to your work."

the course is good. it's just not specifically designed for developers. the framework works for us but the course doesn't know it does, if that makes sense.

if there were coding examples in the demonstrations and exercise, i'd change this to a yes without hesitation.

---

# Reviewer Summary

ok so: the core framework this module teaches is actually genuinely useful and i tested it in real time on my own cursor workflow and got better results, so that's a win. the mental model is clean, the beginner failure pattern is something i'm going to print out and tape to my monitor, and the structured prompt format (Role / Context / Task / Constraints / Output Format) is now part of my workflow. what should be improved is the example selection - three examples, zero of them from a technical or development context, means developers and technical practitioners spend the entire module doing mental translation work that the course should be doing for them; even one coding demonstration would fix this and probably increase the relevance score for 15-20% of your learner base significantly. what should stay unchanged is literally everything about the framing and tone - "fluency is not evidence" and the failure pattern section are exactly what someone who's been trusting Cursor too much and breaking things in prod needs to hear, and the fact that the module doesn't talk down to AI users or make them feel stupid for relying on tools is genuinely appreciated, because i have enough imposter syndrome already without the course piling on.

---
