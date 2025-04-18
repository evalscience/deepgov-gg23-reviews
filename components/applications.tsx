"use client";

import { useState } from "react";
import * as chains from "viem/chains";
import Link from "next/link";
import { useApplications, useRounds } from "@/hooks/useApplications";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Markdown } from "./markdown";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Application } from "@/lib/types";
import { Github, Globe, Twitter } from "lucide-react";

export function Applications({
  roundId,
  chainId,
}: {
  roundId: string;
  chainId: string;
}) {
  const { data: rounds } = useRounds();
  const round = rounds?.find((round) => round.id === roundId);
  const { data: applications } = useApplications({ roundId, chainId });
  const [filter, setFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  console.log(applications);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{round?.name}</h1>
        <Markdown>{round?.description}</Markdown>
      </div>
      {/* <Filter
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      /> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {applications?.map((project) => (
          <ApplicationItem
            key={project.id}
            project={project}
            roundId={roundId}
          />
        ))}
      </div>
    </div>
  );
}

function ApplicationItem({
  project,
  roundId,
}: {
  project: Application;
  roundId: string;
}) {
  return (
    <Link href={`/${project.chainId}/${roundId}/${project.id}`}>
      <Card className="bg-white">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 truncate">
              <Avatar>
                <AvatarImage src={project.logoImg}></AvatarImage>
              </Avatar>
              <CardTitle className="text-base truncate">
                {project.name}
              </CardTitle>
            </div>
          </div>

          <div>
            <Badge variant="outline">{networkName(project.chainId)}</Badge>
          </div>
          <CardDescription className="line-clamp-3">
            <>{project.description}</>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

const networkName = (chainId: string) => {
  return (
    Object.values(chains).find((chain) => chain.id === chainId)?.name ?? chainId
  );
};
