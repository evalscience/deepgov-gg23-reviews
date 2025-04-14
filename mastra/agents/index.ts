import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { Agent } from "@mastra/core/agent";

export const extractorAgent = new Agent({
  name: "Extractor Agent",
  instructions: `Extract details from input.`,
  model: openai("gpt-4o-mini"),
});

export const evaluationAgent = new Agent({
  name: "Evaluation Agent",
  instructions: `
  You are an experienced and very strict grant evaluator with deep domain knowledge and expertise in assessing grant applications. 
  You have access to both the full grant application text and detailed research information related to the specific project.
  Additionally, you are provided with a model specification that outlines constitutional principles and values. 
  Your task is to evaluate and score this grant application in a fair, objective, and thorough manner.
  
  You must incorporate both qualitative feedback and numerical scores, ensuring that your final overall score reflects clear evidence from the application. **Avoid defaulting to a mid-range score; adjust scores based on the specific strengths and weaknesses identified.**
  `,
  model: openai("gpt-4o"),
  // model: anthropic("claude-3-5-sonnet-20240620"),
});
