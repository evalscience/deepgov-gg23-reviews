"use client";

import * as chains from "viem/chains";
import { Application } from "@/supabase/types";
import Link from "next/link";
import { useRounds } from "@/hooks/useApplications";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Rounds() {
  const { data: rounds } = useRounds();
  console.log(rounds);
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1  gap-6">
        {rounds?.map((round) => (
          <RoundItem key={round.id} round={round} />
        ))}
      </div>
    </div>
  );
}

function RoundItem({ round }: { round: Application }) {
  return (
    <Link href={`/${round.chainId}/${round.id}`}>
      <Card className="bg-white hover:shadow-xl">
        <CardHeader>
          <CardTitle className="truncate">{round.name}</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline">{networkName(round.chainId)}</Badge>
            <Badge variant="secondary">
              {round.applicationsCount} Applications
            </Badge>
          </div>
          <CardDescription className="text-base">
            <>{round.description}</>
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
