import { Mastra } from "@mastra/core";
import { createLogger } from "@mastra/core/logger";
import { researchNetwork } from "./network";
import { webSearchAgent } from "./agents/research";
import {
  missionAlignmentAgent,
  technicalInnovationAndFeasibilityAgent,
  communityBenefitAndEthicalImpactAgent,
} from "./agents/evaluators";
import { extractorAgent } from "./agents";
export const mastra = new Mastra({
  agents: {
    webSearchAgent,
    extractorAgent,
    missionAlignmentAgent,
    technicalInnovationAndFeasibilityAgent,
    communityBenefitAndEthicalImpactAgent,
  },
  networks: {
    researchNetwork,
  },
  logger: createLogger({ name: "AI-Reviewer", level: "info" }),
  serverMiddleware: [
    {
      handler: (c, next) => {
        console.log("Middleware called");
        return next();
      },
    },
  ],
});
