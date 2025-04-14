import { ApplicationDetails } from "@/components/application-details";

export default async function ApplicationPage({
  params,
}: {
  params: { projectId: string; chainId: string; roundId: string };
}) {
  const { projectId, chainId, roundId } = await params;

  return (
    <ApplicationDetails id={projectId} chainId={chainId} roundId={roundId} />
  );
}
