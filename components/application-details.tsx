"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AgentReviewTabs } from "@/components/agent-review";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  ThumbsUp,
  FileText,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getApplication } from "@/supabase/actions";
import { Markdown } from "./markdown";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ResearchDialog } from "./research-dialog";

interface ApplicationDetailsProps {
  hash: string;
}

export function ApplicationDetails({ hash }: ApplicationDetailsProps) {
  const { data: application = {} } = useQuery({
    queryKey: ["application", hash],
    queryFn: () => getApplication(hash),
  });

  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{application.name}</CardTitle>

            <div className="flex flex-wrap gap-3 mt-2">
              {application.votes && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {application.votes.toLocaleString()} votes
                </div>
              )}

              {application.website && (
                <a
                  href={application.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  Website
                </a>
              )}

              <ResearchDialog applicationId={application.id} />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Abstract</h3>
          <p className="text-lg leading-8 mb-8">{application.description}</p>
          <p className="text-sm text-muted-foreground">
            {expanded ? <Markdown>{application.content}</Markdown> : null}
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 h-8 px-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <span className="flex items-center">
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </span>
            ) : (
              <span className="flex items-center">
                Show More <ChevronDown className="ml-1 h-4 w-4" />
              </span>
            )}
          </Button>
        </div>
        <AgentReviewTabs applicationId={application.id} />
      </CardContent>
    </Card>
  );
}
