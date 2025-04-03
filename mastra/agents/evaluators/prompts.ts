export const createEvaluationPrompt = (
  application: string,
  research: string,
  agent: { constitution: string; style: string }
) => `

**Please analyze the following inputs:**

1. **Grant Application:**
   ${application}

2. **Research Information:**
   ${research}

3. **Model Specification:**
   ${agent.constitution}

4. **Style:**
   ${agent.style}

**Output:**
1. **Summary of the Application:** A brief overview of the project and its main objectives.
2. **Review:** A detailed review of the application with motivations and citations from the research.
3. **Strengths:** A list (between 1 and 5 items) of identified strengths, each with a title and description.
4. **Weaknesses:** A list (between 1 and 5 items) of identified weaknesses, each with a title and description.
5. **Requested Changes:** A list (between 1 and 5 items) of recommended changes or improvements, each with a title and description.
6. **Overall Score:** A final score between 0 and 100.

**Final Steps:**
- Summarize your evaluation clearly, linking the evidence from the application and research to your scores.
- Provide a final recommendation (e.g., "Highly Recommend Funding", "Recommend with Revisions", or "Do Not Recommend Funding") within your review.

Your output should be clear, structured, and fully compliant with the provided schema. This ensures transparency in your evaluation and facilitates further analysis of the review process.

`;
