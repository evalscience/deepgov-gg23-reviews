"use client";

import type React from "react";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, CheckCircle2, LightbulbIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { listReviews } from "@/supabase/actions";
import Image from "next/image";
import { fetchReview } from "@/lib/review";

export function AgentReviewTabs({
  chainId,
  roundId,
  projectId,
}: {
  chainId: string;
  roundId: string;
  projectId: string;
}) {
  const {
    data: reviews,
    isPending,
    error,
  } = useQuery({
    queryKey: ["reviews", { chainId, roundId, projectId }],
    queryFn: () => fetchReview(chainId, roundId, projectId),
  });

  console.log("reviews", reviews);
  const [activeTab, setActiveTab] = useState<string>("");

  // Set the first tab as active when data loads
  if (isPending) {
    return <LoadingState />;
  }
  if (reviews?.length && !activeTab) {
    setActiveTab(reviews[0].name);
  }

  if (error || !reviews?.length) {
    return (
      <Card className="border-red-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-red-500">
            <AlertCircle className="h-5 w-5" />
            <p>Failed to load reviews. Please try again later.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="relative">
          {/* <div className="absolute bottom-0 w-full h-px bg-border" /> */}
          <TabsList>
            {reviews.map((review) => (
              <TabsTrigger key={review.name} value={review.name}>
                <div className="flex flex-1 items-center gap-2">
                  <span>{review.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {reviews.map((review) => (
          <TabsContent key={review.name} value={review.name} className="pt-6">
            <ReviewContent review={review} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function ReviewContent({ review }: { review: any }) {
  console.log("review", review);
  const imageSrc = `https://raw.githubusercontent.com/evalscience/deepgov-gg23/refs/heads/main/agents/${review.name}/visuals/profile.png`;
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex items-center gap-4">
          <Avatar className={`h-16 w-16 ${review.color} text-white`}>
            <AvatarFallback className="text-xl">
              {review.name.charAt(0).toUpperCase()}
            </AvatarFallback>
            <AvatarImage
              src={imageSrc}
              alt={review.name}
              width={100}
              height={100}
            />
          </Avatar>
          <div>
            <h3 className="text-xl font-bold">{review.name}</h3>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground">{review.review.review}</p>

      {/* Strengths, Weaknesses, Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalysisCard
          title="Strengths"
          items={review.review.strengths}
          icon={<CheckCircle2 className="h-5 w-5 text-green-500" />}
          color="border-green-100 bg-green-50 dark:bg-green-950/20"
        />

        <AnalysisCard
          title="Weaknesses"
          items={review.review.weaknesses}
          icon={<AlertCircle className="h-5 w-5 text-red-500" />}
          color="border-red-100 bg-red-50 dark:bg-red-950/20"
        />

        <AnalysisCard
          title="Recommendations"
          items={review.review.changes}
          icon={<LightbulbIcon className="h-5 w-5 text-amber-500" />}
          color="border-amber-100 bg-amber-50 dark:bg-amber-950/20"
        />
      </div>
    </div>
  );
}

function AnalysisCard({
  title,
  items,
  icon,
  color,
}: {
  title: string;
  items: Array<{ title: string; description: string }>;
  icon: React.ReactNode;
  color: string;
}) {
  if (!items || !items.length) {
    return null;
  }

  return (
    <Card className={color}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="font-semibold">{title}</h4>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="border-b pb-3 last:border-0 last:pb-0">
              <h5 className="font-medium text-sm">{item.title}</h5>
              <p className="text-sm text-muted-foreground mt-1">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ScoreIndicator({ score, color }: { score: number; color: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${
            i < score ? color : "bg-gray-200 dark:bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 border-b pb-2">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      <Skeleton className="h-24 w-full" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  );
}
