import { mastra } from "@/mastra";
import {
  createApplication,
  createResearch,
  createReview,
  getApplication,
  getResearch,
} from "@/supabase/actions";
import { task } from "@trigger.dev/sdk/v3";
import { z } from "zod";

import crypto from "crypto";
import { createAgents, fetchModelSpecs } from "@/mastra/agents/evaluators";
import { createEvaluationPrompt } from "@/mastra/agents/evaluators/prompts";
import { evaluationAgent } from "@/mastra/agents";
import { ReviewSchema } from "@/schemas/review";
export const openaiTask = task({
  id: "openai-task",
  queue: {
    concurrencyLimit: 1,
  },
  // retry: {
  //   maxAttempts: 10,
  //   factor: 1.8,
  //   minTimeoutInMs: 500,
  //   maxTimeoutInMs: 90_000,
  //   randomize: true,
  // },
  run: async (payload: { prompt: string; application: string }) => {
    //if this fails, it will throw an error and retry

    console.log(
      "Running Trigger.dev task",
      JSON.stringify(payload.application, null, 2)
    );

    const applicationData = JSON.stringify(payload.application);
    const { object } = await mastra
      .getAgent("extractorAgent")
      .generate(`Extract project details from: ${applicationData}`, {
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
      .update(applicationData)
      .digest("hex");

    console.log("Loading application...", hash);
    let application = await getApplication(hash);

    console.log(application);
    if (!application) {
      const { text: content } = await mastra
        .getAgent("extractorAgent")
        .generate(
          `Extract application details as markdown from: ${applicationData}. Skip the markdown tags (\`\`\`markdown).`,
          {}
        );

      console.log(content);

      application = await createApplication({ hash, ...object, content });
    }

    const researchNetwork = mastra.getNetwork("Research_Network");
    if (!researchNetwork) return null;

    console.log("Loading previous research...", application.id);
    let research = await getResearch(application.id);
    console.log(research);
    if (!research) {
      console.log(
        "No existing research found, perform deep research on project:",
        application.name
      );
      await researchNetwork.generate(
        `Research this project. Follow links to learn more about it. ${applicationData}`,
        {
          maxSteps: 20, // Allow enough steps for the LLM router to determine the best agents to use
        }
      );

      research = researchNetwork.getAgentInteractionHistory();
      await createResearch({
        application_id: application.id,
        content: research,
      });
    }

    const modelSpecs = await fetchModelSpecs();
    console.log("Reviwing application with:", modelSpecs);
    await Promise.all(
      Object.values(modelSpecs).map(async (agent) => {
        const prompt = createEvaluationPrompt(
          applicationData,
          JSON.stringify(research),
          agent
        );
        console.log("Reviewing application with agent:", agent.name);
        const result = await evaluationAgent.generate(prompt, {
          output: ReviewSchema,
        });
        console.log(result.object);
        await createReview({
          application_id: application.id,
          score: result.object.score,
          content: result.object,
          reviewer: agent.name,
        });
      })
    );

    return { success: true };
  },
});
