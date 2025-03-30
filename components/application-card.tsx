"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentReview } from "@/components/agent-review"
import type { Application } from "@/lib/types"
import { formatDate } from "@/lib/utils"
import { ChevronDown, ChevronUp, Globe, ThumbsUp } from "lucide-react"

interface ApplicationCardProps {
  application: Application
}

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false)

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    approved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{application.title}</CardTitle>
            <CardDescription>
              Submitted by {application.author} on {formatDate(application.submittedAt)}
            </CardDescription>

            {/* Display votes and website if available */}
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
            </div>
          </div>
          <Badge className={statusColors[application.status as keyof typeof statusColors]}>
            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Average Score: {application.averageScore.toFixed(1)}/10</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${(application.averageScore / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Abstract</h3>
          <p className="text-sm text-muted-foreground">
            {expanded ? application.abstract : `${application.abstract.substring(0, 200)}...`}
          </p>
          <Button variant="ghost" size="sm" className="mt-2 h-8 px-2" onClick={() => setExpanded(!expanded)}>
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

        {expanded && (
          <Tabs defaultValue="community">
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="equity">Equity</TabsTrigger>
              <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              <TabsTrigger value="innovation">Innovation</TabsTrigger>
            </TabsList>

            <TabsContent value="community">
              <AgentReview review={application.reviews.community} agentType="community" />
            </TabsContent>

            <TabsContent value="equity">
              <AgentReview review={application.reviews.equity} agentType="equity" />
            </TabsContent>

            <TabsContent value="efficiency">
              <AgentReview review={application.reviews.efficiency} agentType="efficiency" />
            </TabsContent>

            <TabsContent value="sustainability">
              <AgentReview review={application.reviews.sustainability} agentType="sustainability" />
            </TabsContent>

            <TabsContent value="innovation">
              <AgentReview review={application.reviews.innovation} agentType="innovation" />
            </TabsContent>
          </Tabs>
        )}
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Collapse Details" : "View AI Agent Reviews"}
        </Button>
      </CardFooter>
    </Card>
  )
}

