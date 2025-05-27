"use client";
import { useQuery } from "@tanstack/react-query";
import { rounds } from "@/config";
import { fetchApplicationById, mapProject } from "@/lib/applications";

export function useApplicationById({
  id,
  chainId,
  roundId,
}: {
  id: string;
  chainId: string;
  roundId: string;
}) {
  return useQuery({
    queryKey: ["applications", { id, chainId, roundId }],
    queryFn: () => fetchApplicationById({ id, chainId, roundId }),
  });
}

export function useApplications({
  filter,
}: {
  filter?: {
    search?: string;
    roundId?: string;
    chainId?: string;
  };
}) {
  return useQuery({
    queryKey: ["applications", { filter }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filter?.roundId) params.append("roundId", filter.roundId);
      if (filter?.chainId) params.append("chainId", filter.chainId);
      if (filter?.search) params.append("search", filter.search);

      const res = await fetch(`/api/applications?${params.toString()}`);
      const rows = await res.json();
      return rows.map(mapProject).filter(Boolean) as Project[];
    },
  });
}

export function useRounds() {
  return useQuery({
    queryKey: ["rounds"],
    queryFn: () => {
      return rounds.map((round) => ({
        id: round.roundId,
        name: `Round ${round.roundId}`,
        chainId: round.chainId,
      }));
    },
  });
}

type Round = {
  id: string;
  name: string;
  description?: string;
};
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
  round: {
    id: string;
    name: string;
    description?: string;
  };
};

type ApplicationRow = {
  id: string;
  chainId: string;
  roundId: string;
  projectId: string;
  metadata: any;
};
