# Course Module Feedback - Yuki Tanaka - R08

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 3/5**

When I first opened this module, title gave me some concern. "How Large Language Models Actually Work" — word "actually" suggests content will be technical explanation, not practical guidance. In Japan, we say "jissenteki" (practical) versus "rironteki" (theoretical). I was worried this module would be too theoretical.

First few paragraphs confirmed this concern. Words like "tokenization," "probability distribution," "stochastic" appeared quickly. I needed dictionary for "stochastic." Definition: "randomly determined; having a random probability distribution or pattern that may be analyzed statistically but may not be predicted precisely." This did not help me understand the module better.

Pipeline diagram — Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification — was very helpful. Visual information is easier for me to process than dense English paragraph. I immediately understood the flow from this diagram.

Suggestion for first impression: begin with visual diagram, then explain each step. This order works better for learners who process visually, including many international learners.

---

## Section 2: Concept Explanation Quality

**Rating: 3/5**

**Tokenization:**

Explanation was accurate but difficult to read for non-native English speaker. Long sentences with multiple clauses are hard to parse when English is second language. Example:

"The tokenization process, which varies across different model architectures and has implications for both processing efficiency and the model's ability to handle unusual or domain-specific vocabulary, represents the first transformation of your input before any semantic processing occurs."

This sentence has four separate ideas. In Japanese technical writing, each idea would be separate sentence. I needed to read this sentence many times.

Good news: concept itself is not difficult. AI breaks text into small pieces called tokens. Pieces are processed one by one. This could be explained in three short sentences.

**Probability Ranking / Hallucination:**

This section was clearest in module. Explanation of why AI gives confident wrong answer was helpful. I have experienced this in my work — asked ChatGPT to summarize product meeting and it invented feature discussion that never happened. Now I understand mechanism. AI is selecting most likely words based on pattern, not based on truth. Very important concept, well explained.

Diagram showing probability ranking process would help here. For me, seeing numbers next to word choices — "Option A: 67%, Option B: 21%, Option C: 12%" — would make the concept concrete.

**Context Window:**

Clear and useful. The concept that AI cannot see entire document at once is easy to understand. I immediately connected to my own experience: when I paste long requirements document into ChatGPT, summary sometimes misses important sections. Now I understand why.

---

## Section 3: Demonstrations/Examples

**Rating: 2/5**

Two demonstrations were provided. I want to give honest feedback.

**Software Development Demo:**

I am product manager, not developer. I work closely with development team but do not write code myself. Code examples in this demonstration were not accessible to me. I understand purpose of demonstration — showing AI giving wrong explanation of code because context is incomplete — but I could not evaluate whether AI response was correct or incorrect because I do not have sufficient coding knowledge.

This is problem for many product professionals, business analysts, and non-technical managers who use AI tools but do not write code.

**Finance Demo (P&L Analysis):**

This demonstration was more accessible. Incomplete financial data leading to confident fabricated analysis — this I could understand and relate to. In product management, I sometimes review financial metrics. Concept that AI would invent numbers to fill gaps is very concerning and practically relevant.

However, I wish there was third demonstration relevant to product management or knowledge work. For example: AI generating user story based on incomplete product requirements and inventing acceptance criteria that were never specified. This would be directly relevant to my professional context.

Both demonstrations were in English that assumed high vocabulary level. Some business terminology required inference.

---

## Section 4: Guided Exercise

**Rating: 3/5**

Exercise asking learner to compare unconstrained versus uncertainty-aware prompt was good learning activity. I completed exercise using real scenario from my work — product requirements document with missing user research data.

Unconstrained version: ChatGPT invented user research findings. Stated specific user preferences with high confidence. These were completely fabricated.

Uncertainty-aware version: ChatGPT acknowledged missing user research data and listed assumptions it was making. Much more useful output.

I found exercise instructions somewhat difficult to follow on first reading. Instructions assumed learner already knows what "uncertainty-aware prompt" means and how to construct one. For me, clearer step-by-step instructions would help. Something like:

Step 1: Choose a work task where you have incomplete information.
Step 2: Write a prompt WITHOUT mentioning the missing information. Run it.
Step 3: Write new prompt that tells AI what information is missing. Run it.
Step 4: Compare results.

This format would be clearer than current instructions.

---

## Section 5: Real-World Application

**Rating: 3/5**

Application guidance was practical and I could understand most of it. The concept of telling AI what you know AND what you do not know — being explicit about limitations — is immediately useful for my work.

In product management, I often ask AI to help write requirements or analyze feedback when I have incomplete information. Now I have specific strategy for these situations.

Some application examples used business vocabulary that required inference. I recommend using simple, common English vocabulary in examples. Not all learners have high English proficiency.

One area I wanted more guidance: how to verify AI outputs in non-English languages? I sometimes work with documents in Japanese. Context window and hallucination behavior may be different for Japanese language content. This was not addressed.

---

## Section 6: Portfolio Artefact

**Rating: 3/5**

LLM Reliability Control Card — Task Type, Known Context, Missing Context, Required Constraints, Human Verification Owner.

I completed artefact for product requirements writing task. This was useful exercise. Having structured template forces clear thinking about what context AI has versus what is missing.

Two feedback points:

First: field labels use business English vocabulary that may be unclear for non-native speakers. "Required Constraints" especially — constraint is technical word. Simple alternative: "Rules AI must follow" or "What AI should NOT do."

Second: I would find example of completed artefact very helpful before attempting my own. When I am unsure of correct format, seeing completed example reduces uncertainty and helps me write better version. This is common Japanese learning approach — see model first, then practice.

---

## Section 7: Emotional/Learning Experience

**Rating: 3/5**

Emotionally, this module had two distinct phases for me.

First phase (opening sections): anxiety. Dense technical vocabulary, long complex sentences, concepts that required multiple re-readings. I felt worried I was missing important information because of language barrier. This feeling is common for non-native English learners in technical training.

Second phase (hallucination mechanics and application): relief and engagement. When concepts became clearer and connected to my direct work experience, I felt more confident. The moment I understood why AI invents confident wrong information — because it is selecting probable words, not true words — was genuinely useful insight.

Key emotional factor for international learners: feeling that language itself is obstacle is discouraging. When module uses unnecessarily complex sentence structure, it creates doubt about whether confusion is from concept or from language. Simpler sentence structure removes this doubt.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** Approximately 150 minutes, including dictionary lookups and re-reading difficult sections

**Difficulty:** 4/5 for me

For native English speaker with technical background, I estimate difficulty would be 2 or 3 out of 5. For non-native English speaker, difficulty is higher because of language barrier in addition to conceptual content.

Course should consider international learners in time estimates. 75–120 minutes is not realistic for learner who must pause for dictionary lookups or re-read sentences for language comprehension.

---

## Section 9: Most Valuable Part

Probability ranking section explaining why AI gives confident wrong answer.

Before this module, I experienced AI hallucinations as random and unpredictable. Now I understand mechanism: AI is optimizing for most probable output, not most accurate output. This reframe is very useful.

In product management, I can now predict when hallucination risk is higher — when asking about specific proprietary information, unusual domain vocabulary, or recent events not in training data. This helps me allocate verification effort more appropriately.

---

## Section 10: Weakest Part

Tokenization section at beginning of module.

Section is too long, too technically detailed, and too early. For learner who does not yet understand why this module is valuable, starting with dense technical explanation of tokenization creates high risk of disengagement.

Also: software development demonstration. For non-developer professional audience, this demonstration is not accessible. It signals that module was designed primarily for technical users.

---

## Section 11: Missing Content

1. **Visual diagrams throughout.** Pipeline diagram at beginning was excellent. Similar diagrams for tokenization process, probability ranking process, and context window concept would greatly reduce cognitive load for visual learners and non-native English speakers.

2. **Simpler vocabulary options.** Not glossary with complex definitions, but simpler word choices in original text. For example: "stochastic" → "random," "probabilistic selection" → "choosing based on likelihood," "semantic processing" → "understanding meaning."

3. **International context.** How does AI behavior differ across languages? Are English-language models reliable for non-English input? This is important question for global organizations.

4. **Shorter sentences throughout.** Many sentences in module have 40 or more words. Maximum 20-25 words per sentence would improve accessibility for international learners without reducing content quality.

5. **Step-by-step exercise instructions.** Current exercise instructions assume learner already knows how to construct certain prompt types. Numbered step-by-step format would help all learners, not only non-native speakers.

---

## Section 12: Final Evaluation

**Overall Rating: 3/5**

Module content is valuable and concepts are important. Hallucination mechanics explanation and uncertainty-aware prompting strategy are immediately applicable to my work.

However, module has significant accessibility challenges for non-native English speakers and for learners without technical background. Complex sentence structure, advanced vocabulary, and absence of visual diagrams create unnecessary difficulty.

I completed module and found practical value. But I am product manager with moderate technical background and above-average English proficiency. Learners with less English proficiency or less technical comfort may not complete module.

Recommendation: add visual diagrams, simplify sentence structure, provide step-by-step exercise instructions, and include completed artefact example. These changes would significantly improve accessibility without reducing content quality.

For global organization deploying this course: current version is suitable only for high-English-proficiency learners. Accessibility improvements are necessary for international deployment.

---

## Reviewer Summary

**Overall Rating:** 3/5
**Completion Status:** Completed in full (approximately 150 minutes including language support)

**Key Takeaways:**
- Probability ranking and hallucination mechanics: genuinely valuable insight applicable to product management work
- Uncertainty-aware prompting strategy: immediately useful, applying to product requirements work now
- Context window concept clarified existing experience with long document handling

**Accessibility Concerns for International Learners:**
- Complex sentence structure creates significant language barrier
- Advanced vocabulary ("stochastic," "probabilistic") adds unnecessary cognitive load
- No visual diagrams for key concepts (only pipeline overview at start)
- Time estimates do not account for non-native English learners

**Primary Recommendations:**
1. Add visual diagrams for tokenization, probability ranking, and context window concepts
2. Simplify sentence structure throughout (target 20–25 words maximum per sentence)
3. Replace advanced vocabulary with accessible alternatives
4. Provide step-by-step exercise instructions with numbered format
5. Include completed artefact example before independent practice

**International Deployment Assessment:** Requires language accessibility improvements before deployment to non-native English speaking learner populations.
