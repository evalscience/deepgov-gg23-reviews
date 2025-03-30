"use client";

import { useState } from "react";
import { ApplicationCard } from "@/components/project-card";
import { Filter } from "@/components/filter";
import { mockApplications } from "@/lib/mock-data";
import { listApplications, listProjects } from "@/supabase/actions";
import { useQuery } from "@tanstack/react-query";
import { Application, Project } from "@/supabase/types";

export function Projects() {
  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: () => listProjects(),
  });

  console.log(projects);
  return (
    <div className="space-y-6">
      {/* <Filter
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      /> */}

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return <div>{project.name}</div>;
}
