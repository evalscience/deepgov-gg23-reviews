import { fetchModelSpecs } from "@/lib/model-specs";
import { openai } from "@ai-sdk/openai";

import { Agent } from "@mastra/core/agent";

export async function createAgents() {
  const modelSpecs = await fetchModelSpecs();

  return Object.fromEntries(
    modelSpecs.map((m) => [
      m.name,
      new Agent({
        name: m.name,
        instructions: m.constitution,
        model: openai("gpt-4o"),
      }),
    ])
  );
}
