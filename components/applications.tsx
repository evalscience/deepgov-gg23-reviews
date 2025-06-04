"use client";

import * as chains from "viem/chains";
import Link from "next/link";
import { Project, useApplications, useRounds } from "@/hooks/useApplications";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Filter, useFilter } from "./filter";
import { Grid } from "./grid";

export function Applications() {
  const [filter, setFilter] = useFilter();
  const { data: applications, isPending, error } = useApplications({ filter });

  console.log(applications);
  const { data: rounds } = useRounds();
  return (
    <div className="space-y-6">
      <Filter
        filter={filter}
        onChange={(filter) => {
          console.log("filter", filter);
          setFilter(filter);
        }}
      />

      <Grid
        columns={[1, 1, 2, 3]}
        data={applications}
        error={error}
        isPending={isPending}
        renderItem={(project) => (
          <ApplicationItem
            isLoading={isPending}
            project={project}
            // round={rounds?.find()}
            key={[project.id, project.chainId, project.round?.id].join("-")}
          />
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
  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 truncate">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="h-5 w-20 bg-gray-200 rounded" />
          </div>
          <div className="mt-2 space-y-2">
            <div className="h-3 w-full bg-gray-200 rounded" />
            <div className="h-3 w-4/5 bg-gray-200 rounded" />
            <div className="h-3 w-3/5 bg-gray-200 rounded" />
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Link href={`/${project?.chainId}/${project?.round?.id}/${project?.id}`}>
      <Card className="bg-white">
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
