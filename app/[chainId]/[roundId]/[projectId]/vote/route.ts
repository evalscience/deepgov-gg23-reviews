import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { createHash } from "crypto";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

function getIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : req.ip ?? "0.0.0.0";
}

function hashIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex");
}

// POST: Handle vote submission
export async function POST(req: NextRequest) {
  try {
    const { applicationId, modelSpecName, action } = await req.json();

    console.log("applicationId", { applicationId, modelSpecName, action });
    if (!applicationId || !modelSpecName || !["up", "down"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid request data." },
        { status: 400 }
      );
    }

    const ip = getIp(req);
    const userId = hashIp(ip);
    const normalizedAction = action === "up" ? "up" : "down";

    const voterKey = `vote:${applicationId}:${modelSpecName}:voters`;
    const upvoteKey = `vote:${applicationId}:${modelSpecName}:upvotes`;
    const downvoteKey = `vote:${applicationId}:${modelSpecName}:downvotes`;

    const existingVote = await redis.hget<string>(voterKey, userId);

    const pipeline = redis.multi();

    if (existingVote === normalizedAction) {
      // 👉 Remove vote if same button clicked again
      if (normalizedAction === "up") pipeline.decr(upvoteKey);
      if (normalizedAction === "down") pipeline.decr(downvoteKey);

      pipeline.hdel(voterKey, userId);

      await pipeline.exec();

      const [upvotes, downvotes] = await redis.mget<number[]>(
        upvoteKey,
        downvoteKey
      );

      return NextResponse.json({
        message: `Removed your ${normalizedAction}.`,
        upvotes: upvotes ?? 0,
        downvotes: downvotes ?? 0,
      });
    }

    // 👉 If previously voted differently, reverse that first
    if (existingVote) {
      if (existingVote === "up") pipeline.decr(upvoteKey);
      if (existingVote === "down") pipeline.decr(downvoteKey);
    }

    // 👉 Apply new vote
    if (normalizedAction === "up") pipeline.incr(upvoteKey);
    if (normalizedAction === "down") pipeline.incr(downvoteKey);

    // 👉 Update user's vote record
    pipeline.hset(voterKey, { [userId]: normalizedAction });

    await pipeline.exec();

    const [upvotes, downvotes] = await redis.mget<number[]>(
      upvoteKey,
      downvoteKey
    );

    return NextResponse.json({
      message: `Successfully ${normalizedAction}d.`,
      upvotes: upvotes ?? 0,
      downvotes: downvotes ?? 0,
    });
  } catch (error) {
    console.error("Vote API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// GET: Fetch vote count for applicationId and modelSpecName
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const applicationId = searchParams.get("applicationId");

    if (!applicationId) {
      return NextResponse.json(
        { error: "Missing applicationId." },
        { status: 400 }
      );
    }

    const ip = getIp(req);
    const userId = hashIp(ip);
    const keys = await redis.keys(`vote:${applicationId}:*`);

    const modelSpecNames = Array.from(
      new Set(
        keys
          .filter(
            (key) => key.includes(":upvotes") || key.includes(":downvotes")
          )
          .map((key) => key.split(":")[2])
      )
    );

    const result: Record<
      string,
      {
        upvotes: number;
        downvotes: number;
        userVote: "up" | "down" | null;
      }
    > = {};

    for (const modelSpecName of modelSpecNames) {
      const [upvotes, downvotes, userVote] = await Promise.all([
        redis.get<number>(`vote:${applicationId}:${modelSpecName}:upvotes`),
        redis.get<number>(`vote:${applicationId}:${modelSpecName}:downvotes`),
        redis.hget<string>(
          `vote:${applicationId}:${modelSpecName}:voters`,
          userId
        ),
      ]);
      console.log("upvotes", upvotes, downvotes);

      result[modelSpecName] = {
        upvotes: upvotes ?? 0,
        downvotes: downvotes ?? 0,
        userVote: (userVote as "up" | "down") || null,
      };
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Vote GET API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
