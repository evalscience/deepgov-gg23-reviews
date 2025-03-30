import { openai } from "@ai-sdk/openai";

import { Agent } from "@mastra/core/agent";

export const extractorAgent = new Agent({
  name: "Extractor Agent",
  instructions: `Extract details from input.`,
  model: openai("gpt-4o-mini"),
});
