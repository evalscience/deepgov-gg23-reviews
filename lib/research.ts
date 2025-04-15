import { Review } from "@/schemas/review";

export async function fetchResearch(
  chainId: string,
  roundId: string,
  projectId: string
): Promise<{}> {
  const reviewURL = `https://raw.githubusercontent.com/evalscience/deepgov-gg23-advisors/refs/heads/main/applications/${chainId}/${roundId}/${projectId}/research.json`;
  return fetch(reviewURL).then((r) => r.json() as Promise<Review>);
}
