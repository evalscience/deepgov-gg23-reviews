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
  const url = `https://raw.githubusercontent.com/evalscience/deepgov-gg23-advisors/refs/heads/main/applications/${chainId}/${roundId}/${id}/application.json`;
  console.log(url);
  return await fetch(url)
    .then((res) => res.json())
    .then((p) => mapProject(p));
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

export function mapProject(row: any): Project | null {
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
    round: { id: row.roundId, name: `Round ${row.roundId}` },
  };
}

const ipfsGateway = (hash?: string) =>
  hash ? `https://d16c97c2np8a2o.cloudfront.net/ipfs/${hash}` : "";
