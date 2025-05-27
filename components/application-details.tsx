"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AgentReviewTabs } from "@/components/agent-review";
import { Globe, Github, Twitter } from "lucide-react";
import { Markdown } from "./markdown";
import { Research } from "./research";
import { useApplicationById } from "@/hooks/useApplications";
import { BackgroundImage } from "./background-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useQueryState } from "nuqs";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface ApplicationDetailsProps {
  id: string;
  chainId: string;
  roundId: string;
}

export function ApplicationDetails({
  id,
  chainId,
  roundId,
}: ApplicationDetailsProps) {
  const [tab, setTab] = useQueryState("tab", { defaultValue: "reviews" });
  const { data: application = {}, error } = useApplicationById({
    id,
    chainId,
    roundId,
  });
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex justify-between  items-center gap-2">
              <CardTitle className="text-xl">{application.name}</CardTitle>
            </div>

            <ProjectSocials {...application} />
          </div>
        </div>
        <BackgroundImage className="h-64 w-full" src={application?.bannerImg} />
      </CardHeader>

      <CardContent>
        <div className="mb-4 rounded-lg">
          <Tabs value={tab}>
            <TabsList>
              <TabsTrigger onClick={() => setTab("project")} value="project">
                Project
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setTab("application")}
                value="application"
              >
                Application
              </TabsTrigger>
              <TabsTrigger onClick={() => setTab("reviews")} value="reviews">
                Reviews
              </TabsTrigger>{" "}
              <TabsTrigger onClick={() => setTab("research")} value="research">
                Research
              </TabsTrigger>
            </TabsList>
            <TabsContent value="project">
              <Markdown>{application?.description}</Markdown>
            </TabsContent>
            <TabsContent value="application">
              {application?.application?.answers?.length ? null : (
                <div>No application found</div>
              )}
              <div className="space-y-8 ">
                {application?.application?.answers.map((answer, i) => (
                  <div key={i}>
                    <div className="font-bold">{answer.question}</div>
                    {answer.encryptedAnswer ? (
                      <pre>&lt;hidden&gt;</pre>
                    ) : typeof answer.answer === "string" ? (
                      <Markdown className="">{answer.answer}</Markdown>
                    ) : (
                      <pre className="">
                        {JSON.stringify(answer.answer, null, 2)}
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              {application ? (
                <AgentReviewTabs
                  chainId={application.chainId}
                  roundId={roundId}
                  projectId={id}
                />
              ) : null}
            </TabsContent>
            <TabsContent value="research">
              {application ? (
                <Research
                  chainId={application.chainId}
                  roundId={roundId}
                  applicationId={id}
                />
              ) : null}
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectSocials({
  github,
  website,
  twitter,
}: {
  github: string;
  twitter: string;
  website: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 my-1">
      {github && (
        <Link
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <Badge variant="outline" className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            {github}
          </Badge>
        </Link>
      )}
      {twitter && (
        <Link
          href={`https://x.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <Badge variant="outline" className="flex items-center gap-1">
            <Twitter className="h-4 w-4" />
            {twitter}
          </Badge>
        </Link>
      )}
      {website && (
        <Link
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <Badge variant="outline" className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            Website
          </Badge>
        </Link>
      )}
    </div>
  );
}
