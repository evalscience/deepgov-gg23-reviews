"use client";

import * as chains from "viem/chains";
import Link from "next/link";
import { Project, useApplications } from "@/hooks/useApplications";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Application } from "@/lib/types";
import { Filter, useFilter } from "./filter";
import { cn } from "@/lib/utils";
import { Grid } from "./grid";

export function Applications({
  roundId,
  chainId,
}: {
  roundId?: string;
  chainId?: string;
}) {
  const [filter, setFilter] = useFilter();
  const {
    data: applications,
    isPending,
    error,
  } = useApplications({
    roundId,
    chainId,
    filter,
  });

  // if (!isPending && !applications?.length) {
  //   return (
  //     <div className="space-y-6">
  //       <Filter filter={filter} onChange={(filter) => setFilter(filter)} />
  //       <div className="flex flex-col items-center justify-center py-12">
  //         <div className="text-center space-y-2">
  //           <h3 className="text-lg font-medium">No applications found</h3>
  //           <p className="text-sm text-gray-500">
  //             Try adjusting your filters or check back later
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  console.log(applications);
  return (
    <div className="space-y-6">
      <Filter filter={filter} onChange={(filter) => setFilter(filter)} />

      <Grid
        columns={[1, 1, 2, 3]}
        data={applications}
        error={error}
        isPending={isPending}
        renderItem={(project) => (
          <ApplicationItem project={project} key={project.id} />
        )}
      />
    </div>
  );
}

function ApplicationItem({
  project,
  isLoading,
}: {
  project: Project;
  isLoading?: boolean;
}) {
  return (
    <Link href={`/${project?.chainId}/${project?.round?.id}/${project?.id}`}>
      <Card className={cn("bg-white", { ["animate-pulse"]: isLoading })}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 truncate">
              <Avatar>
                <AvatarImage src={project?.logoImg}></AvatarImage>
              </Avatar>
              <div>
                <CardTitle className="text-base truncate">
                  {project?.name}
                </CardTitle>
                <div className="text-sm text-gray-500">
                  {project?.round?.name}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Badge variant="outline">{networkName(project?.chainId)}</Badge>
          </div>
          <CardDescription className="line-clamp-3">
            <>{project?.description}</>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

const networkName = (chainId: string) => {
  const chain = Object.values(chains).find(
    (chain) => chain.id === parseInt(chainId)
  );
  return chain?.name ?? chainId;
};
