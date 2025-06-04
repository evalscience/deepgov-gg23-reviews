import { rounds } from "@/config";

export async function fetchApplicationById({
  id,
  chainId,
  roundId,
}: {
  id: string;
  chainId: string;
  roundId: string;
}) {
  console.log({ id, chainId, roundId });
  const rounds = await fetchRounds();
  const url = `https://raw.githubusercontent.com/evalscience/deepgov-gg23-advisors/refs/heads/main/applications/${chainId}/${roundId}/${id}/application.json`;
  console.log(url);
  return await fetch(url)
    .then((res) => res.json())
    .then(async (p) => mapProject(p, rounds));
}

export type Project = {
  id: string;
  chainId: string;
  name: string;
  description: string;
  logoImg: string;
  bannerImg: string;
  website: string;
  github?: string;
  twitter?: string;
  application: {};
  round: { id: string; name: string };
};

export function mapProject(
  row: any,
  rounds: { id: string; name: string }[]
): Project | null {
  const metadata = row.metadata;
  // Try to support both the old and new metadata shapes
  const project = metadata?.application?.project || metadata?.project;
  if (!project) return null;
  return {
    id: row.projectId || project.id,
    chainId: row.chainId,
    name: project?.title || project?.name,
    description: project?.description || "",
    logoImg: ipfsGateway(project?.logoImg || project?.logo),
    bannerImg: ipfsGateway(project?.bannerImg || project?.banner),
    website: project?.website || "",
    github: project?.projectGithub || project?.github,
    twitter: project?.projectTwitter || project?.twitter,
    application: metadata?.application || metadata,
    round: rounds?.find((r) => r.id === row.roundId) ?? { id: "?", name: "?" },
  };
}

const ipfsGateway = (hash?: string) =>
  hash ? `https://d16c97c2np8a2o.cloudfront.net/ipfs/${hash}` : "";

export async function fetchRounds() {
  const roundURL = `https://raw.githubusercontent.com/evalscience/deepgov-gg23-advisors/refs/heads/main/rounds`;

  return Promise.all(
    rounds.map((round) =>
      fetch(`${roundURL}/${round.chainId}/${round.roundId}/details.json`)
        .then((r) => r.json())
        .then((r) => ({
          id: round.roundId,
          name: r.roundMetadata.name,
          chainId: round.chainId,
        }))
    )
  );
}
