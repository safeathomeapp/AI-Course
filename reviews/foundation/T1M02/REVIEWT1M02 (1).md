# Course Module Feedback - Linda Ramirez - R14

**Module:** T1M02 – How Large Language Models Actually Work

---

## Section 1: First Impression

**Rating: 3/5**

When I saw the title "How Large Language Models Actually Work," I confess my first reaction was to take a deep breath.  I am not an engineer.  I am not a computer scientist.  The word "models" in this context does not mean fashion models, which I knew, but it does not mean anything very specific to me either.

I read the first paragraph twice before I felt I understood it well enough to continue.

The diagram at the beginning — showing the steps from Input through to Human Verification — was actually quite helpful.  It reminded me of a customer service escalation flowchart, which is something I work with every day.  Each step has a purpose, each step feeds into the next.  Once I saw it as a process flow, I felt less intimidated.

I want to be honest that the words "tokenization" and "probability ranking" in the opening pages caused me genuine anxiety.  I wrote them both down on a notepad and told myself I would understand them by the end.  I am pleased to report that I did, mostly.

---

## Section 2: Concept Explanation Quality

**Rating: 2/5**

I will give this section my most honest feedback because I think it is important for the course designers to understand how this material reads to someone without a technical background.

**Tokenization:**  I read this section four times over two sittings.  On the fourth read, what I understood is this: the AI does not read words the way I read words.  It breaks text into smaller pieces first, and those pieces are not always complete words.  Whether or not I understood this correctly, I am not entirely certain.  I wish there had been a simple analogy at the beginning of the section — something like how a young child sounds out syllables before recognizing a full word.  That kind of everyday comparison would have helped me locate the concept before the explanation began.

**Probability Ranking and Hallucinations:**  This is the section I am most grateful for.  Our AI customer service tool has on two occasions given customers incorrect information about our return policy — stated a timeframe that does not match our actual policy.  I could not understand why this happened.  I raised it with our IT contact and he said the AI "should know" our policy because it was in the training documents.

After reading this section, I believe I understand what happened.  The AI was selecting the most likely response based on patterns in what it had learned, and the most likely response may have been based on industry averages or common return policies rather than our specific one.  It was not lying.  It was guessing in a very confident way.

That understanding is genuinely useful to me.  I feel less frustrated and more equipped to explain the risk to my team and to our IT contact.

**Context Window:**  This concept I found easier to grasp.  If the AI cannot see the whole document at once, it may miss important information toward the end of longer texts.  I thought immediately of the long customer service scripts and product guides we have loaded into our tool.  I am now concerned that sections near the end of those documents may not be reliably accessible to the AI.  This is something I will raise with our IT department.

---

## Section 3: Demonstrations/Examples

**Rating: 2/5**

I must be candid about the software development demonstration.  I do not write software.  I do not know what a codebase is in a practical sense.  I sat through this demonstration and followed the general shape of what was being illustrated — incomplete information leads to confident but incorrect output — but I could not connect it to anything in my own experience.

The finance demonstration was more accessible.  The idea of an AI completing a financial analysis with made-up information because some data was missing is something I could follow.  I thought about what it would mean if our AI were completing a refund analysis for a customer based on incomplete order history — that is a real scenario for my team.

What I would have found most useful: a customer service demonstration.  Something like: a customer calls with a complaint, the AI response tool drafts a reply, but it does not have complete information about the customer's order history or previous contacts with us.  Watch what the AI invents to fill the gaps.  That would have been directly relevant and I would have shared it with my entire team.

---

## Section 4: Guided Exercise

**Rating: 2/5**

I attempted this exercise.  I want to be transparent that I found it more difficult than Module 1's exercise.

The instructions asked me to write an "unconstrained prompt" and an "uncertainty-aware prompt" using incomplete context.  I understood what this meant intellectually — one prompt does not mention missing information, one does.  However, putting this into practice without a specific example to follow was challenging.

I used our AI customer service tool and wrote two prompts related to a hypothetical customer complaint where I left out key order details.  The first prompt produced a confident response that assumed details I had not provided.  The second prompt, where I told the AI I was missing some information, produced a more cautious response that asked me to confirm details before proceeding.  I believe this is what was supposed to happen.

I am not fully confident I did this correctly.  A completed example showing exactly what each type of prompt looked like and what each response looked like would have helped me significantly.  I learn best by seeing the finished product first, then attempting it myself.

---

## Section 5: Real-World Application

**Rating: 3/5**

This section was the most encouraging part of the module for me.  The guidance on how to write prompts that acknowledge incomplete information — being honest with the AI about what you do not know — is something I can apply immediately in my team's work.

We have a weekly team meeting on Fridays where I share updates and guidance.  I am planning to spend ten minutes at next Friday's meeting explaining what I learned in this section.  My team uses the AI tool every day.  If I can give them one piece of practical guidance — "tell the AI when you are not sure about something rather than hoping it will figure it out" — that may reduce the number of errors we see.

I would have appreciated more examples from customer service specifically.  The guidance was somewhat general, and customer service has some specific challenges: high volume, speed pressure, complex individual cases, and the consequences of an AI error are immediate and visible to the customer.

---

## Section 6: Portfolio Artefact

**Rating: 3/5**

The LLM Reliability Control Card.  When I first saw this, I had the same anxiety I felt at the beginning of the module.  "Another technical thing I have to fill out."

I sat with it for a while and then I decided to try filling it out for one specific task: using our AI tool to draft initial responses to customer complaints about delayed shipments.  Once I had a specific, familiar task in mind, the fields made sense to me.

Task Type: drafting customer complaint response
Known Context: customer name, order number, stated complaint
Missing Context: actual shipment tracking status, cause of delay, customer history
Required Constraints: do not make promises about resolution timeframes without confirming with operations
Human Verification Owner: team supervisor before sending to customer

Completing that card made me realize something I had not fully articulated before: we are regularly sending AI-assisted responses without a consistent verification step.  That is a process gap I can address.

I wish there had been a completed example to look at first.  I would have felt more confident about my own version if I had seen one.

---

## Section 7: Emotional/Learning Experience

**Rating: 3/5**

I want to be honest about this section because I think the emotional experience of non-technical learners is important information.

The beginning of this module was discouraging.  The vocabulary was unfamiliar and the technical explanations required more patience than I felt I had during my first session on a Tuesday afternoon after a difficult customer escalation.  I set the module aside and came back to it Wednesday morning, which helped.

The shift came in the probability ranking section.  Reading that AI selects the most likely response rather than the correct one — and connecting that immediately to the return policy errors we have experienced — was one of those moments where something clicks.  I felt less frustrated with the tool and more equipped to manage it.

I ended the module feeling more informed than when I started.  I also felt, if I am honest, a little overwhelmed by how much I did not know before.  Not in a bad way, exactly.  More like the feeling of learning something important that I wish I had known sooner.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** Approximately two and a half hours, spread across two sessions.

**Difficulty:** 4 out of 5.  This is the most technically challenging material I have worked through in a professional training context in several years.  I am not proud of finding it difficult, but I want to be transparent about my experience in case it is useful.

I want to note that the stated time estimates in this course consistently underestimate how long the material takes for someone without a technical background who is reading carefully and taking notes.

---

## Section 9: Most Valuable Part

Understanding why our AI tool gives incorrect information about our return policy.

Before this module, I thought there might be something wrong with how we set up the tool, or that it was a malfunction of some kind.  Now I understand that the tool is behaving exactly as designed — selecting the most statistically probable response — and that the appropriate response is not to fix the tool but to put better verification processes in place around it.

That reframe is practically important.  It changes the conversation I will have with our IT contact and with my Director of Operations about how to manage AI-related errors.

---

## Section 10: Weakest Part

The software development demonstration and the opening tokenization section.

The software demonstration felt like material from a different course.  It was not cruel or exclusionary — I simply had no way to connect with it professionally.

The tokenization section needed more accessible entry points.  By the time I understood what tokenization meant, I had read it enough times that the early part of the section was a memory rather than learning.  An analogy at the start — something drawn from everyday life — would have made a significant difference.

---

## Section 11: Missing Content

I offer these suggestions respectfully and with the acknowledgment that I may not be the primary audience for this course.

1. **Customer service and frontline staff examples.**  Our AI tool is used by frontline staff who are not technology professionals.  A demonstration showing AI behavior in a customer service context — drafting a response, handling a complaint, summarizing a customer's contact history — would have immediate practical relevance for a large population of AI users.

2. **A plain language glossary.**  Terms like tokenization, context window, and probability distribution should be defined in simple language at the start of the module.  I spent significant time looking up definitions that could have been provided within the course.

3. **A completed exercise example.**  Seeing a finished example before attempting the exercise would have given me more confidence and probably produced better results.

4. **A note acknowledging that this is challenging material.**  Somewhere in the module, an acknowledgment that these concepts are new and complex for many learners, and that taking extra time is acceptable, would have helped me feel less inadequate during the difficult sections.

---

## Section 12: Final Evaluation

**Overall Rating: 3/5**

This module is more technically demanding than Module 1, and I found it more difficult.  However, I also found it more directly relevant to a specific problem I have been trying to solve at work.

Understanding why our AI customer service tool generates confident errors has changed how I think about our processes and what I will recommend to my leadership.  That is a meaningful outcome from a challenging module.

I want to acknowledge that my 3 out of 5 rating reflects both genuine value and genuine difficulty.  The value came from the probability ranking explanation and the real-world application section.  The difficulty came from technical vocabulary, dense explanations in the early sections, and examples that were not designed for my professional context.

I completed the module.  I feel cautiously more equipped to manage AI tools in my team.  I will continue with the course.

---

## Reviewer Summary

**Overall Rating:** 3/5
**Completion Status:** Completed in full (two sessions, approximately two and a half hours total)

**Key Takeaways:**
- AI return policy errors now understood as structural behavior, not malfunction — changes the IT conversation and the process response
- Context window limits raise concern about long policy documents loaded into our AI tool — will raise with IT department
- Verification gap identified through Control Card exercise — team process improvement in progress

**Accessibility Concerns:**
- Technical vocabulary without accessible entry points created early anxiety and risk of abandonment
- Software development demonstration entirely inaccessible for non-technical audience
- No customer service or frontline staff examples anywhere in module
- Time estimates significantly understate time needed for non-technical learners
- Missing completed exercise example and plain language glossary

**Planned Actions:**
- Friday team meeting: brief team on uncertainty-aware prompting and when to flag missing information to the AI tool
- IT meeting: raise context window concerns about long policy documents; request verification protocol discussion
- Process review: establish consistent supervisor verification step before AI-assisted customer responses are sent
