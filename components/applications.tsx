"use client";

import { useState } from "react";
import { ApplicationCard } from "@/components/application-card";
import { Filter } from "@/components/filter";
import { mockApplications } from "@/lib/mock-data";
import { listApplications, listProjects } from "@/supabase/actions";
import { useQuery } from "@tanstack/react-query";
import { Project } from "next/dist/build/swc/types";
import { Application } from "@/supabase/types";
import Link from "next/link";

export function Applications() {
  const { data: applications = [] } = useQuery({
    queryKey: ["applications"],
    queryFn: () => listApplications(),
  });

  const [filter, setFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Filter applications based on selected filter
  // const filteredApplications = mockApplications.filter((app) => {
  //   if (filter === "all") return true;
  //   if (filter === "pending") return app.status === "pending";
  //   if (filter === "approved") return app.status === "approved";
  //   if (filter === "rejected") return app.status === "rejected";
  //   return true;
  // });

  // // Sort applications based on selected sort option
  // const sortedApplications = [...filteredApplications].sort((a, b) => {
  //   if (sortBy === "newest")
  //     return (
  //       new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  //     );
  //   if (sortBy === "oldest")
  //     return (
  //       new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime()
  //     );
  //   if (sortBy === "highest") return b.averageScore - a.averageScore;
  //   if (sortBy === "lowest") return a.averageScore - b.averageScore;
  //   return 0;
  // });
  console.log(applications);
  return (
    <div className="space-y-6">
      {/* <Filter
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      /> */}

      <div className="grid grid-cols-1 gap-6">
        {applications.map((application) => (
          <ApplicationItem key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
}

function ApplicationItem({ application }: { application: Application }) {
  return (
    <Link href={`/applications/${application.hash}`}>
      <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-bold">{application.name}</h3>
        <p className="text-sm line-clamp-3">{application.description}</p>
      </div>
    </Link>
  );
}
