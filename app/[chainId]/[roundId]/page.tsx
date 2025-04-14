import { Applications } from "@/components/applications";
import { Page } from "@/components/page";

export default async function RoundsPage({
  params,
}: {
  params: { roundId: string; chainId: string };
}) {
  const { roundId, chainId } = await params;

  return (
    <Page title="Rounds" backLink={`/`}>
      <Applications roundId={roundId} chainId={chainId} />
    </Page>
  );
}
