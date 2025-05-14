import { createClient } from "@/lib/graphql";
import { useQuery } from "@tanstack/react-query";
import { gql } from "urql";

const gitcoinAPI = `https://beta.indexer.gitcoin.co/v1/graphql`;

const ROUNDS_QUERY = gql`
  query Rounds($where: RoundsBoolExp!) {
    rounds(where: $where) {
      id
      chainId
      roundMetadata
      applicationsAggregate(where: { status: { _eq: "APPROVED" } }) {
        aggregate {
          count
        }
      }
    }
  }
`;
const ROUNDS_APPLICATIONS_QUERY = gql`
  query RoundsApplications($where: RoundsBoolExp!, $project: ProjectsBoolExp) {
    rounds(where: $where) {
      applications(where: { status: { _eq: "APPROVED" }, project: $project }) {
        projectId
        metadata
        status
        chainId
        roundId
        round {
          id
          chainId
          roundMetadata
        }
        project {
          id
          chainId
          metadata
        }
      }
    }
  }
`;
const APPLICATIONS_QUERY = gql`
  query Applications($where: ApplicationsBoolExp!) {
    applications(limit: 200, where: $where) {
      id
      chainId
      projectId
      metadata
      status
      project {
        metadata
      }
      round {
        id
        roundMetadata
      }
    }
  }
`;

export function useApplicationById({
  id,
  chainId,
}: {
  id: string;
  chainId: string;
}) {
  return useQuery({
    queryKey: ["applications", { id, chainId }],
    queryFn: async () => fetchApplicationById({ id, chainId }),
  });
}

export function fetchApplicationById({
  id,
  chainId,
}: {
  id: string;
  chainId: string;
}) {
  const client = createClient(gitcoinAPI);
  return client
    ?.query(APPLICATIONS_QUERY, {
      where: {
        projectId: { _eq: id },
        chainId: { _eq: chainId },
      },
    })
    .toPromise()
    .then((r) => {
      if (r.error) throw new Error(r.error.message);
      return mapProject(r.data.applications[0]);
    });
}

export function useApplications({
  roundId,
  chainId,
  filter,
}: {
  roundId?: string;
  chainId?: string;
  filter?: {
    search?: string;
  };
}) {
  const client = createClient(gitcoinAPI);

  return useQuery({
    queryKey: ["applications", { chainId, roundId, filter }],
    queryFn: async () => {
      return client
        ?.query(ROUNDS_APPLICATIONS_QUERY, {
          where: {
            _or: rounds.map((round) => ({
              id: { _eq: round.roundId },
              chainId: { _eq: round.chainId },
            })),
          },
          project: filter?.search
            ? {
                name: { _ilike: `%${filter.search}%` },
              }
            : {},
        })
        .toPromise()
        .then((r) => {
          const applications = r.data.rounds.flatMap((r) => r.applications);
          if (r.error) throw new Error(r.error.message);
          return applications.map(mapProject).filter(Boolean);
        });
    },
  });
}

const rounds = [
  {
    roundId: "35",
    chainId: "42220",
  },
  {
    roundId: "867",
    chainId: "42161",
  },
  {
    roundId: "865",
    chainId: "42161",
  },
  {
    roundId: "863",
    chainId: "42161",
  },
  {
    roundId: "31",
    chainId: "42220",
  },
];
export function useRounds() {
  const client = createClient(gitcoinAPI);

  return useQuery({
    queryKey: ["rounds"],
    queryFn: async () => {
      return client
        ?.query(ROUNDS_QUERY, {
          where: {
            _or: rounds.map((round) => ({
              id: { _eq: round.roundId },
              chainId: { _eq: round.chainId },
            })),
          },
        })
        .toPromise()
        .then((r) => {
          if (r.error) throw new Error(r.error.message);
          return r.data.rounds.map((round) => ({
            id: round.id,
            name: round.roundMetadata.name,
            chainId: round.chainId,
            description: round.roundMetadata.eligibility.description,
            applicationsCount: round.applicationsAggregate.aggregate.count,
          }));
        });
    },
  });
}

type Round = {
  id: string;
  name: string;
  description: string;
};
export type Project = {
  id: string;
  chainId: string;
  name: string;
  description: string;
  logoImg: string;
  bannerImg: string;
  website: string;
  github: string;
  twitter: string;
  application: {};
  round: {
    id: string;
    name: string;
    description: string;
  };
};
type RoundApplications = {
  rounds: Record<string, Round>;
  projects: Project[];
};

type GitcoinRound = {
  id: string;
  chainId: string;
  roundMetadata: {
    name: string;
    description: string;
  };
  applications: GitcoinApplication[];
};
type GitcoinApplication = {
  id: string;
  chainId: string;
  status: "APPROVED";
  round: GitcoinRound;
  metadata: {
    application: string;
    project: {
      id: string;
      chainId: string;
      metadata: {
        title: string;
        description: string;
        logoImg: string;
        bannerImg: string;
        website: string;
      };
    };
  };
};

export function mapProject({
  status,
  metadata,
  chainId,
  round,
}: GitcoinApplication): Project | null {
  const project = metadata?.application?.project;

  return {
    id: project.id,
    chainId,
    name: project?.title,
    description: project?.description,
    logoImg: ipfsGateway(project?.logoImg),
    bannerImg: ipfsGateway(project?.bannerImg),
    website: project?.website,
    github: project?.projectGithub,
    twitter: project?.projectTwitter,
    application: metadata?.application,
    round: { id: round.id, ...round.roundMetadata },
  };
}

const ipfsGateway = (hash: string) =>
  `https://d16c97c2np8a2o.cloudfront.net/ipfs/${hash}`;
