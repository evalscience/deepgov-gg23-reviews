import type { Metadata, ResolvingMetadata } from "next";
import { fetchApplicationById } from "@/lib/applications";

type Props = {
  params: { projectId: string; chainId: string; roundId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await fetchApplicationById({
    id: params.projectId,
    chainId: params.chainId,
    roundId: params.roundId,
  });

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: project.name,
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
