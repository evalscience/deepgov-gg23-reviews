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

export async function fetchModelSpecs(): Promise<
  { name: string; profileUrl: string; style: string; constitution: string }[]
> {
  const baseURL = `https://api.github.com/repos/evalscience/deepgov-gg23/contents/agents`;
  const contentURL = `https://raw.githubusercontent.com/evalscience/deepgov-gg23/refs/heads/main/agents`;

  const folders = await fetch(baseURL)
    .then((r) => r.json() as Promise<{ name: string; type: "dir" }[]>)
    .then((r) => r.filter((r) => r.type === "dir").map((r) => r.name));

  return Promise.all(
    folders.map(async (name: string) => ({
      name,
      profileUrl: `${contentURL}/${name}/visuals/profile.png`,
      style: await fetch(`${contentURL}/${name}/modelspec/style.md`).then((r) =>
        r.text()
      ),
      constitution: await fetch(
        `${contentURL}/${name}/modelspec/constitution.md`
      ).then((r) => r.text()),
    }))
  );
}
