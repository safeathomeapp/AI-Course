# Course Module Feedback - Riley Thompson - R02

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 7/10**

ok so the title "how large language models actually work" either means this is going to be a dry CS lecture i'll skim in 20 minutes or it's actually going to explain the stuff that matters for using these tools well. turns out it's more the second thing, which i respect.

the pipeline diagram (input → tokenization → context weighting → probability ranking → generated output → human verification) was immediately useful. like i've had a vague mental model of this for a while but having it spelled out with actual named steps was clarifying. especially the distinction between context weighting and probability ranking — i never really thought about those as separate stages.

ngl the "human verification" step at the end made me feel a little called out. i definitely skip that more than i should.

first impression overall: better than expected. thought this would be theory for theory's sake but it's actually building toward something practical.

---

## Section 2: Concept Explanation Quality

**Rating: 8/10**

ok running through these:

**tokenization:** already knew the basics but the explanation of how token boundaries affect model behavior was actually new to me. the point about how splitting a technical term or a variable name across token boundaries can degrade the model's ability to reason about it — i've seen this happen in cursor and never understood why. now i do.

honestly this section could go deeper for a dev audience and i'd be here for it. the token boundary stuff is directly relevant to prompt engineering for code generation. would've loved a section on how to structure prompts to keep relevant tokens together.

**probability ranking / hallucination mechanics:** this is the stuff. "AI selects the most statistically probable continuation, not the factually accurate one" — yeah this is why copilot confidently hallucinates library methods that don't exist. i've debugged so many errors that turned out to be fake API methods that sounded completely plausible. understanding this as a probability optimization problem rather than a knowledge retrieval problem changes how i think about when to trust autocomplete vs. when to actually check the docs.

**context window:** knew this already but the framing around what happens at the edges of the context window — the model's attention weights degrade for content far from the current position — that's something i hadn't thought about explicitly. explains why cursor sometimes seems to forget stuff from earlier in the file when i'm working near the end of a long component.

solid explanations overall. appropriately technical without being excessive.

---

## Section 3: Demonstrations/Examples

**Rating: 7/10**

two demos:

**software dev demo (code explanation with partial context):**
this one was obviously the most relevant to me. the scenario — AI explaining a codebase function with only partial file context, confidently describing behavior that the missing context would contradict — is something i've experienced repeatedly. the specific mechanism of why this happens (context window sees function signature and some call sites but not the implementation or the edge case handling elsewhere) clicked in a way that the abstract explanation didn't fully land.

one thing i wanted: more detail on what the "uncertainty-aware" version of the same scenario looks like in practice for code work. like, how do you prompt cursor or copilot to flag when it's reasoning from incomplete context? i know you can ask it to state its assumptions but it doesn't always do that unprompted. would've been helpful to see that operationalized.

**finance demo:**
less relevant to my daily work but i followed it. the general principle — incomplete context leads to confident fabrication — is the same regardless of domain. i was mostly waiting to get back to the dev scenario.

would've been cool to include a third demo specifically about code generation hallucinations — inventing method signatures, hallucinating library versions, generating plausible-but-wrong regex — because those are the specific failure modes that affect developers most.

---

## Section 4: Guided Exercise

**Rating: 6/10**

compare unconstrained vs. uncertainty-aware prompts with incomplete context. ran it in two ways:

1. asked chatgpt to explain what a function does based on just the function signature and no implementation
2. asked chatgpt to explain what a function does but explicitly told it i was only showing it the signature, not the body, and to tell me what it was assuming

first version: confident, plausible, partially wrong explanation.
second version: listed explicit assumptions, flagged what it couldn't determine without seeing the implementation.

the contrast was useful even though i'd kind of intuitively done versions of this before without thinking about it as a deliberate strategy.

my issues with the exercise:

1. it's generic — doesn't give a code-specific version for developers. the exercise described in the module used a document/report scenario. i had to translate it to a code context myself, which i could do, but not everyone will.

2. no success criteria. like, what distinguishes a GOOD uncertainty-aware prompt from a mediocre one? is asking AI to "be honest about what you don't know" sufficient? or does it need to be more specific? no guidance on this.

3. this feels like a good foundation for a prompt engineering deep dive that isn't in this course. maybe a module 1.5?

---

## Section 5: Real-World Application

**Rating: 6/10**

the principles are sound — use uncertainty-aware prompting when context is incomplete, build in human verification for high-stakes outputs, don't treat AI output as ground truth.

but the application guidance kind of assumes a world where you have time to craft careful prompts for every AI interaction. as someone who's using cursor for literally every line of code, the bottleneck isn't "do i know to verify AI outputs" — it's "how do i build verification into a workflow that's already optimized for speed?"

what i wanted: practical patterns for fast-moving dev work. something like:
- when to pause and write an uncertainty-aware prompt vs. when to just run and verify manually
- how to structure a `.cursorrules` or system prompt to build in uncertainty-awareness by default
- what kinds of code tasks have high vs. low hallucination risk (new library methods = high, standard CRUD patterns = low)

the guidance as written is correct but a bit abstract for the pace of actual dev workflow.

---

## Section 6: Portfolio Artefact

**Rating: 5/10**

LLM Reliability Control Card. task type, known context, missing context, required constraints, human verification owner.

tbh this artefact feels more suited to a business analyst or project manager workflow than a developer workflow. as a dev my "tasks" are usually short, iterative, and fast — filling out a control card for each prompt would add overhead that defeats the purpose of using AI for speed.

that said, i can see the value for higher-stakes coding tasks — architecture decisions, security-sensitive code, anything touching production systems. for those cases, a lightweight version of this control card built into my planning process makes sense.

what i actually did: built a shorter version with just three fields (task, missing context, verification method) and added it to my notion templates for architecture planning sessions. probably won't use it for routine coding but it's a useful frame for the stuff that matters.

the artefact as designed is well-structured — just not optimized for dev use cases.

---

## Section 7: Emotional/Learning Experience

**Rating: 7/10**

honestly more engaged than i expected to be going in. the module earns attention because it's explaining the mechanics behind things i've actually experienced and been confused by — cursor forgetting earlier context, copilot inventing methods, chatgpt explaining code in a way that sounds right but isn't.

the "you've been shipping AI mistakes because you didn't understand this" energy is a little uncomfortable but also correct. i've definitely caused bugs by trusting AI-generated code that was confidently wrong because i understood why it was confident but didn't understand why confidence ≠ correctness.

the software dev demo helped land the concepts emotionally in a way that abstract explanation wouldn't have. seeing the specific mechanism of a coding hallucination explained rather than just observed is the thing that makes it actionable.

---

## Section 8: Time and Difficulty

**stated time:** 75–120 minutes
**actual time:** ~70 minutes (skimmed the finance demo and some of the generic application guidance, went deeper on the tokenization and probability sections)

**difficulty:** 4/10 for someone with my background. probably 6-7/10 for someone without a technical background or heavy AI experience.

the module is well-paced for people who engage with technical content regularly. for people who don't, the opening tokenization sections might be a wall.

---

## Section 9: Most Valuable Part

the probability ranking / hallucination mechanics explanation plus the specific application to code generation.

"AI is optimizing for probable continuation, not accurate continuation" is something i intellectually knew but hadn't internalized in a way that changed behavior. framing it as a probability optimization problem rather than a knowledge gap problem — AI isn't failing to know the right answer, it's succeeding at predicting a plausible answer — makes the failure mode feel predictable and manageable.

will be thinking about this every time copilot autocompletes a method call.

---

## Section 10: Weakest Part

the finance demo and generic knowledge worker application guidance.

not because they're bad — they're fine — but because they don't apply to me and i was waiting to get past them. the module would benefit from a developer-specific track or at minimum a signal that lets technical learners skip to the relevant examples.

also the portfolio artefact is underoptimized for developer use cases. the control card design makes sense for business/analytical work but doesn't map naturally onto iterative development workflows.

---

## Section 11: Missing Content

1. **developer-specific hallucination patterns.** a breakdown of which types of code generation tasks have high vs. low hallucination risk would be extremely useful. new library methods = high risk. standard patterns = low risk. what's the full taxonomy?

2. **prompt engineering for uncertainty in code context.** how do you actually get cursor/copilot to flag incomplete context in a coding workflow? practical prompting patterns, not just principles.

3. **context window management for codebases.** when you're working with a large codebase, how do you structure your prompts to keep relevant context in the window? this is a real practical problem that falls directly out of the context window concepts in this module.

4. **model-specific behavior.** gpt-4 vs. claude vs. copilot (github) vs. cursor — do they hallucinate differently? under what conditions does each model's probability optimization lead to different failure modes?

---

## Section 12: Final Evaluation

**Overall Rating: 7/10**

better than i expected. the core concepts are explained well, the software dev demo is directly relevant, and the probability optimization framing is a genuine insight that changes how i think about AI reliability.

docked points for: underdeveloped developer-specific content, application guidance that's too generic for fast-moving dev workflows, and an artefact that doesn't map well onto iterative development.

would recommend to other devs with the note: go deep on the tokenization and probability ranking sections, skim the finance demo, and be aware that the artefact needs customization for your workflow.

**would i recommend this?** yeah, to devs who think they already know how AI works — this module will find the gaps in your mental model. it found some in mine.

---

## Reviewer Summary

**Overall Rating:** 7/10
**Completion Status:** Completed (selective depth — went deeper on technical sections, lighter on generic application content)

**Key Insights:**
- Probability optimization framing (not knowledge retrieval) changes how i reason about when to trust autocomplete
- Token boundary effects on code reasoning — new understanding of a recurring cursor behavior
- Context window attention degradation explains end-of-file behavior in long components

**Developer-Specific Gaps:**
- No prompt engineering guidance for uncertainty in code workflows
- No context window management strategies for large codebases
- No high/low hallucination risk taxonomy for code generation tasks
- Finance demo irrelevant; no pure code-generation hallucination demo

**Artefact Status:** Simplified control card (3 fields) added to notion template for architecture planning. Won't use for routine dev work.
