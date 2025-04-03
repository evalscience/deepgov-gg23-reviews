export const createEvaluationPrompt = (
  application: string,
  research: string,
  agent: { spec: string; style: string }
) => `

Evaluate the following grant application based on the provided model specification.

Review the application and use the research information as a reference to provide a fair and objective evaluation.

Please analyze the following:

1. **Grant Application:**  
${application}

2. **Research Information:**  
${research}

**Model Specification:**  
${agent.spec}

Reply in the style of:
${agent.style}
`;
