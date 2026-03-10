# Course Module Feedback - Dr. Sarah Chen - R10

**Module:** T1M02 – How Large Language Models Actually Work

## Reviewer Background

Chief Compliance Officer at a regional healthcare system in Boston, Massachusetts. Responsible for HIPAA compliance, regulatory strategy, and increasingly, AI governance as our organization deploys clinical decision support tools. JD and MPH. Sixteen years in healthcare compliance. I came to this course at the strong suggestion of our CISO after we had two near-misses with AI-generated clinical documentation containing inaccurate information that almost reached patient records. I need to understand these tools well enough to develop governance policy, not just use them personally. My assessment throughout this course is institutional and policy-focused.

---

## Section 1: First Impression

**Rating: 4/5**

The module title is adequate but understates the risk-management relevance of its content. "How Large Language Models Actually Work" is a technical framing. For a healthcare compliance audience, this module could more accurately be titled "Why AI Makes Confident Errors and What That Means for Patient Safety and Regulatory Compliance."

The pipeline diagram — Input → Tokenization → Context Weighting → Probability Ranking → Generated Output → Human Verification — is a useful structural representation. I note with interest that Human Verification appears as the final stage. In healthcare, human verification isn't the last step in a process — it's a regulatory obligation with documentation requirements. The course consistently positions verification as a best practice, which is accurate for general professional contexts but understates its character in regulated clinical settings.

The opening engages appropriately with the importance of understanding AI failure modes. I continued with the expectation that the module would provide mechanistic clarity I need for policy development.

---

## Section 2: Concept Explanation Quality

**Rating: 4/5**

**Tokenization:**
The explanation is technically sound. For compliance policy purposes, the most relevant implication — that unusual or domain-specific vocabulary (including medical terminology, drug names, and diagnostic codes) may be handled inconsistently due to token boundary effects — is not explicitly drawn out. This is a material compliance gap. If AI systems handling clinical documentation apply inconsistent tokenization to standardized medical terminology, that affects documentation accuracy and potentially billing compliance. I would recommend an explicit callout for healthcare and regulated-industry contexts.

**Probability Ranking / Hallucination Mechanics:**
This is the section that most directly informs the governance policies I am developing.

"AI generates the most statistically probable continuation, not the factually accurate one" is, from a risk management perspective, one of the most important sentences in this course. The specific failure mode — confident generation of plausible but false content — is precisely what produced our two near-misses. Understanding that this behavior is structural, not incidental, is critical for policy design.

Key policy implication, which the module does not draw out explicitly: because AI hallucination is a design characteristic rather than a failure mode, it cannot be mitigated by training or configuration alone. It requires process controls — specifically, mandatory human verification by qualified reviewers before AI output enters any regulated workflow. This is a compliance architecture conclusion that the module's explanation supports but does not articulate.

**Context Window:**
The explanation is clear. The regulatory implication — that AI systems may generate clinically incomplete summaries of long patient records because content outside the context window is not processed — is not addressed. For healthcare compliance, this is a patient safety concern that warrants explicit treatment.

---

## Section 3: Demonstrations/Examples

**Rating: 2/5**

The demonstrations are technically competent but represent a critical domain gap for healthcare compliance purposes.

**Software Development Demo:**
Not directly relevant to my regulatory context, though I understand it for the general audience.

**Finance Demo (Incomplete P&L Analysis):**
The finance example is the closer analogy to regulated industry scenarios and the failure mechanism is clear. However, finance errors in this context are primarily organizational. Healthcare AI errors may involve patient harm, adverse events, and regulatory violations with criminal liability implications. The demonstration's stakes are categorically different from those I need to communicate to clinical leadership and governance committees.

What is missing and what I consider a significant curriculum gap: a healthcare-specific demonstration. The scenario writes itself — AI generates a clinical note summary from incomplete EHR data, confidently includes a medication that the patient is allergic to but whose allergy record was outside the context window, and the output would pass a cursory review without flagging the error. That demonstration, or equivalent, is what I need to make the case to clinical staff about why verification protocols are non-optional.

The absence of healthcare, clinical, or regulated-industry demonstrations in a course that many compliance and clinical professionals will take represents a design choice I believe should be reconsidered.

---

## Section 4: Guided Exercise

**Rating: 3/5**

The comparative prompt exercise — unconstrained versus uncertainty-aware prompting with incomplete context — is the correct pedagogical approach for building practical skill. I completed it using a compliance scenario: AI summarizing a complex policy document where several key regulatory citations were intentionally omitted.

The contrast between outputs was instructive. The unconstrained version generated confident policy language that cited regulatory requirements not present in the source document. The uncertainty-aware version flagged missing citations and gave conditional guidance.

From a compliance policy standpoint, this exercise demonstrates exactly why uncertainty-aware prompting should be a required element of any organizational AI use policy — it provides some (not complete) mitigation against the confident-fabrication failure mode.

Limitations for policy purposes:

1. The exercise addresses individual prompting behavior. Organizational compliance requires systemic controls, not just individual best practices. An exercise demonstrating how uncertainty-aware prompting requirements get embedded into workflow tools, templates, or approval processes would be more directly applicable for compliance program design.

2. No success criteria for what constitutes a policy-grade uncertainty-aware prompt. For individual use cases this may be acceptable; for organizational deployment, standardized criteria are necessary.

---

## Section 5: Real-World Application

**Rating: 3/5**

The application guidance is sound for individual practitioners. It is insufficient for institutional compliance program development.

The guidance correctly identifies that uncertainty-aware prompting and human verification are the primary behavioral mitigations for AI hallucination risk. However, it treats these as personal workflow practices rather than organizational process requirements.

For a healthcare compliance context, the application section would need to address:

1. **Verification standards.** What qualifications must a human verifier have for different types of AI-assisted clinical documentation? This is not a generic "someone should check this" question — it's a credentialing and scope-of-practice question.

2. **Documentation requirements.** HIPAA and CMS have requirements around documentation of clinical decisions. If AI is involved in generating documentation, what records must be kept? The module is silent on this.

3. **Incident reporting.** When an AI hallucination results in or nearly results in a clinical error, what are the reporting obligations? How does this interact with existing adverse event reporting frameworks?

4. **Liability allocation.** If an AI-generated error reaches a patient, who bears liability — the clinician, the organization, the AI vendor? The module appropriately does not address this but a compliance-focused resource or supplemental module should.

---

## Section 6: Portfolio Artefact

**Rating: 3/5**

The LLM Reliability Control Card has the correct structural logic: Task Type, Known Context, Missing Context, Required Constraints, Human Verification Owner.

For a healthcare governance application, I have substantially extended this template:

- **Patient Data Involved:** (yes/no — determines HIPAA implications)
- **Clinical Consequence Level:** (administrative / clinical decision support / direct patient care documentation)
- **Verification Standard:** (clerical review / clinical review / physician sign-off)
- **Documentation Requirement:** (internal only / patient record / regulatory submission)
- **Audit Trail Requirement:** (yes/no, with retention period)
- **Incident Report Trigger:** (conditions under which this task's AI output must be reported if erroneous)

The base artefact is a reasonable starting point. For regulated industries, it requires significant extension to be policy-grade.

I would recommend the course include a note that the Control Card template should be adapted to the compliance requirements of the user's specific regulatory context.

---

## Section 7: Emotional/Learning Experience

**Rating: 3/5**

The module delivered on its stated objective: I now have a more precise mechanistic understanding of why AI produces confident false content, which directly informs the governance policies I am developing.

The emotional experience was one of confirmed concern rather than relief. Understanding that AI hallucination is structural — that it emerges from the design of probability optimization systems — means that the risk cannot be engineered away. It must be managed through process controls. For a compliance officer who has been trying to develop proportionate AI governance policy, that clarity is useful even if the conclusion is sobering.

I note that the module's framing positions AI hallucination as manageable with the right practices. From a healthcare compliance perspective, I would describe it as manageable only within specific, well-defined use cases with appropriate verification controls — and actively contraindicated for use cases where the verification requirements cannot be reliably met.

---

## Section 8: Time and Difficulty

**Stated time:** 75–120 minutes
**Actual time:** ~95 minutes, including notes for policy development purposes

**Difficulty:** 3/5 — the concepts are accessible. The difficulty for my purposes was not intellectual but applied: translating general AI literacy content into healthcare-specific compliance implications required significant independent inference.

---

## Section 9: Most Valuable Part

The probability ranking / hallucination mechanics explanation, specifically the mechanistic grounding of what "confident false content" means at a system design level.

This gave me the technical vocabulary to write governance policy language that is precise rather than approximate. "AI systems generate statistically probable outputs rather than factually verified outputs, which creates structural hallucination risk that cannot be mitigated through user training alone and requires process-level verification controls" — that is now a sentence I can write with confidence in a compliance policy document.

---

## Section 10: Weakest Part

The absence of regulated-industry demonstrations and application content.

Healthcare, clinical practice, and financial services regulation represent major deployment contexts for the AI tools this course addresses. The consistent use of software development and generic knowledge work examples throughout the module creates a gap that practitioners in regulated industries must bridge entirely through their own inference.

---

## Section 11: Missing Content

1. **Healthcare and regulated-industry demonstrations.** At minimum, a callout sidebar acknowledging that the same failure mechanisms apply in clinical, financial services, and legal contexts with different consequence profiles.

2. **Institutional compliance layer.** A section addressing what AI governance looks like at an organizational level — not just individual prompting practices but policy frameworks, verification standards, audit trail requirements, and incident reporting protocols.

3. **Documentation and audit requirements.** For any organization in a regulated industry, the question of what records must be kept when AI is used in decision-making processes is a compliance question, not just a quality question. The module does not address this dimension.

4. **Liability and responsibility framework.** This is outside the course scope but warrants a reference to additional resources for compliance professionals.

5. **Risk tiering by use case and consequence.** Not all AI use cases carry equivalent risk. A framework for classifying AI tasks by consequence level (administrative / clinical / regulatory) and mapping required verification levels to those tiers would be directly applicable for compliance program design.

---

## Section 12: Final Evaluation

**Overall Rating: 3/5**

The module is technically sound and provides genuinely useful mechanistic clarity on AI failure modes. The probability ranking explanation is the most policy-relevant content I have encountered in this course, and it directly informs governance work I am doing now.

However, the module is designed for individual practitioners in general knowledge work roles. Healthcare, legal, financial services, and other regulated-industry professionals require additional content to apply these concepts to compliance program design. The absence of regulated-industry examples and institutional governance guidance is a significant gap for this audience.

For deployment within my organization: I would use selected sections from this module — specifically the hallucination mechanics and the exercise — as components of a more comprehensive AI governance training curriculum. I would not deploy this module as standalone compliance training.

**Recommendation:** Valuable as a component of a broader curriculum for regulated-industry professionals. Requires supplementation with sector-specific compliance content before serving as compliance training.

---

## Reviewer Summary

**Overall Rating:** 3/5
**Completion Status:** Completed in full

**Policy Value Assessment:**
- Hallucination mechanics: provides technical grounding for governance policy language around structural AI risk
- Exercise: demonstrates necessity of uncertainty-aware prompting as organizational requirement, not just individual best practice
- Control Card: extended with healthcare-specific fields (Patient Data Involved, Clinical Consequence Level, Verification Standard, Audit Trail Requirement, Incident Report Trigger)

**Critical Gaps for Healthcare Compliance:**
- No healthcare or clinical demonstrations despite patient safety implications
- No institutional compliance layer — module addresses individual practice only
- No documentation or audit trail guidance
- No risk tiering by clinical consequence level
- Context window implications for patient record completeness not addressed

**Deployment Decision:** Selective use within broader AI governance curriculum. Not suitable as standalone compliance training for regulated healthcare settings without substantial supplementation.
