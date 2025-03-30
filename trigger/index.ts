import { mastra } from "@/mastra";
import { researchNetwork } from "@/mastra/network";
import {
  createApplication,
  createProject,
  createResearch,
  createReview,
  getApplication,
  getOrCreateProjectBySlug,
} from "@/supabase/actions";
import { task } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import {
  missionAlignmentAgent,
  technicalInnovationAndFeasibilityAgent,
  communityBenefitAndEthicalImpactAgent,
} from "@/mastra/agents/evaluators";

import crypto from "crypto";
export const openaiTask = task({
  id: "openai-task",
  // retry: {
  //   maxAttempts: 10,
  //   factor: 1.8,
  //   minTimeoutInMs: 500,
  //   maxTimeoutInMs: 90_000,
  //   randomize: false,
  // },
  run: async (payload: { prompt: string; application: string }) => {
    //if this fails, it will throw an error and retry
    console.log("Running Trigger.dev task", payload);

    const { object } = await mastra
      .getAgent("extractorAgent")
      .generate(`Extract project details from: ${payload.application}`, {
        output: z.object({
          name: z.string(),
          description: z.string(),
          website: z.string(),
        }),
      });

    console.log(object);

    // Hash the application content
    const hash = crypto
      .createHash("sha256")
      .update(payload.application)
      .digest("hex");

    console.log(hash);
    let application = await getApplication(hash);

    console.log(application);
    if (!application) {
      const { text: content } = await mastra
        .getAgent("extractorAgent")
        .generate(
          `Extract application details as markdown from: ${payload.application}`,
          {}
        );

      console.log(content);

      application = await createApplication({ hash, ...object, content });
    }

    const researchNetwork = mastra.getNetwork("Research_Network");
    if (!researchNetwork) return null;

    await researchNetwork.generate(payload.prompt, {
      maxSteps: 20, // Allow enough steps for the LLM router to determine the best agents to use
    });

    const research = researchNetwork.getAgentInteractionHistory();

    await createResearch({
      application_id: application.id,
      content: research,
    });

    const agents = [
      missionAlignmentAgent,
      technicalInnovationAndFeasibilityAgent,
      communityBenefitAndEthicalImpactAgent,
    ] as const;

    await Promise.all(
      agents.map(async (name) => {
        const result = await name.generate(
          `Evaluate the following application and write a final report on the topic using the learnings from research. Make it as as detailed as possible, aim for 3 or more pages (max 10 pages), include ALL the learnings from research.
          ${payload.application}            
                  
          Research:
          ${research}
`,
          { output: ReviewSchema }
        );

        await createReview({
          application_id: application.id,
          score: result.object.score,
          content: result.object,
          reviewer: name.name,
        });
      })
    );

    return { success: true };
  },
});

const ReviewSchema = z.object({
  summary: z.string(),
  review: z
    .string()
    .describe(
      "A review of the application with motivation and citations from the research"
    ),
  strengths: z
    .array(
      z.object({
        title: z.string(),
        description: z
          .string()
          .describe("A description of the strength with citations"),
      })
    )
    .min(1)
    .max(5),
  weaknesses: z
    .array(
      z.object({
        title: z.string(),
        description: z
          .string()
          .describe("A description of the weakness with citations"),
      })
    )
    .min(1)
    .max(5),
  changes: z
    .array(
      z.object({
        title: z.string(),
        description: z
          .string()
          .describe("A description of the requested change with citations"),
      })
    )
    .min(1)
    .max(5)
    .describe("Requested changes"),
  score: z.number().min(0).max(100).describe("Rate this from 0 to 100."),
});
