import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";

// Type definitions
type VoteAction = "up" | "down";

interface VotePayload {
  action: VoteAction;
}

interface VoteResponse {
  message: string;
  score: number;
}

interface VoteCountResponse {
  applicationId: string;
  modelSpecName: string;
  score: number;
}

// POST: vote mutation
export function useVote(modelSpecName: string) {
  const queryClient = useQueryClient();
  const { chainId, roundId, projectId } = useParams();

  return useMutation({
    mutationFn: async (action: "up" | "down"): Promise<VoteResponse> => {
      const res = await fetch(`/${chainId}/${roundId}/${projectId}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationId: projectId,
          modelSpecName,
          action,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Vote failed");
      }

      return res.json();
    },
    onSuccess: (data, variables) => {
      // Invalidate related vote count query
      queryClient.invalidateQueries({
        queryKey: ["vote-count", { chainId, roundId, projectId }],
      });
    },
  });
}

// GET: vote count query
export function useVoteCount() {
  const { chainId, roundId, projectId } = useParams();

  return useQuery<VoteCountResponse>({
    queryKey: ["vote-count", { chainId, roundId, projectId }],
    queryFn: async () => {
      const url = `/${chainId}/${roundId}/${projectId}/vote?applicationId=${projectId}`;
      const res = await fetch(url);

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to fetch vote count");
      }

      return res.json();
    },
    enabled: !!projectId,
  });
}
