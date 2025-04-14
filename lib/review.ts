import { Review } from "@/schemas/review";
import { fetchModelSpecs } from "./model-specs";

export async function fetchReview(
  chainId: string,
  roundId: string,
  projectId: string
): Promise<{ name: string; review: Review }[]> {
  const agents = await fetchModelSpecs();

  const reviewURL = `https://raw.githubusercontent.com/evalscience/deepgov-gg23-advisors/refs/heads/main/applications/${chainId}/${roundId}/${projectId}`;
  return Promise.all(
    agents.map(async (agent) => {
      return {
        name: agent.name,
        review: await fetch(`${reviewURL}/review-${agent.name}.json`).then(
          (r) => r.json() as Promise<Review>
        ),
      };
    })
  );
}
