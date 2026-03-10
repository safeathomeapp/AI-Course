# AI Glossary

## Purpose
Beginner-safe, professional definitions for recurring AI terms in Foundation modules.

| Term | Plain-Language Definition | Why It Matters In Practice | Simple Example |
|---|---|---|---|
| Prompt | The instruction you give an AI model. | Better prompts usually produce better first drafts. | "Summarize this report in 5 bullets for a manager." |
| Role | The professional perspective you ask AI to take. | Reduces generic tone and mismatched style. | "You are a customer support quality reviewer." |
| Context | Background information AI needs to stay relevant. | Prevents AI from guessing the wrong situation. | "This is for first-time customers in the UK market." |
| Task | The specific thing AI must do. | Vague tasks create vague outputs. | "Identify top 3 risks in this process." |
| Constraint | A rule about what AI must avoid or how it must behave. | Prevents overreach, fabricated claims, and unusable output. | "Do not invent figures; flag missing data." |
| Output Format | The structure you want the result in. | Reduces cleanup and makes review faster. | "Return: 1) Summary 2) Risks table 3) Questions." |
| Structured Prompt | A prompt that explicitly includes role, context, task, constraints, and format. | Makes output more predictable and reviewable. | A 5-part prompt for drafting an SOP from notes. |
| Token | A small unit of text AI processes (word pieces, words, punctuation). | Affects model limits and how much text fits in one request. | "Unbelievable" may be split into multiple tokens. |
| Tokenization | How text is split into tokens before processing. | Explains why long prompts/inputs can hit limits unexpectedly. | Two sentences with same word count can use different token counts. |
| Context Window | The maximum amount of text the model can actively consider at once. | If input is too long, details may be dropped or ignored. | Long transcripts may need chunking before analysis. |
| Probability (in LLMs) | AI predicts likely next words based on patterns, not true understanding. | Explains fluent but occasionally wrong outputs. | AI writes a confident sentence that "sounds right." |
| Hallucination | AI generates information that sounds plausible but is unsupported or false. | High-risk if used without verification in decisions or external outputs. | Invented statistic in a client report draft. |
| Inference | A conclusion drawn from available evidence, not a direct fact. | Useful when labeled clearly; risky when presented as certain fact. | "Users may prefer option A" based on interview patterns. |
| Verification | Human checking of claims, assumptions, and evidence before use. | Core safety step: AI drafts, humans verify, humans decide. | Cross-checking figures against source spreadsheet. |
| Human Review | The deliberate quality and risk check by a person before action. | Maintains accountability and prevents blind automation. | Manager validates summary before sharing with leadership. |
| Assumption | Something treated as true without direct proof in provided data. | Hidden assumptions cause error and misaligned decisions. | AI assumes budget approval because previous projects had it. |
| Unknown | A gap where needed information is missing. | Better to flag unknowns than let AI fill gaps silently. | "Customer segment not provided - cannot finalize recommendation." |
| Decision Readiness | How usable an AI output is for real decision-making after review. | Moves AI from draft generation to workflow value. | Output includes evidence, risks, unknowns, and next-step questions. |

## Practical Reminder
A strong workflow is: `Prompt -> AI Draft -> Human Verification -> Human Decision`.
