"use server";

import { supabase } from "./client";
import type { Database } from "./types";

// Project actions
export async function createProject(
  data: Database["public"]["Tables"]["projects"]["Insert"]
) {
  const { data: project, error } = await supabase
    .from("projects")
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return project;
}

export async function getProject(id: string) {
  const { data: project, error } = await supabase
    .from("projects")
    .select()
    .eq("id", id)
    .single();

  if (error) throw error;
  return project;
}

export async function listProjects() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select()
    .order("created_at", { ascending: false });

  if (error) throw error;
  return projects;
}

// Application actions
export async function createApplication(
  data: Database["public"]["Tables"]["applications"]["Insert"]
) {
  const { data: application, error } = await supabase
    .from("applications")
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return application;
}

export async function getApplication(hash: string) {
  const { data: application, error } = await supabase
    .from("applications")
    .select()
    .eq("hash", hash)
    .single();
  if (error?.code === "PGRST116") {
    return null;
  }

  if (error) throw error;
  return application;
}

export async function listApplications(projectId?: string) {
  const { data: applications, error } = await supabase
    .from("applications")
    .select()
    // .eq("project_id", projectId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return applications;
}

export async function listResearch(applicationId: string) {
  const { data: applications, error } = await supabase
    .from("research")
    .select()
    .eq("application_id", applicationId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return applications;
}

// Review actions
export async function createReview(
  data: Database["public"]["Tables"]["reviews"]["Insert"]
) {
  const { data: review, error } = await supabase
    .from("reviews")
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return review;
}

export async function getReview(id: string) {
  const { data: review, error } = await supabase
    .from("reviews")
    .select()
    .eq("id", id)
    .single();

  if (error) throw error;
  return review;
}

export async function listReviews(applicationId: string) {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select()
    .eq("application_id", applicationId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return reviews;
}

export async function createResearch(
  data: Database["public"]["Tables"]["research"]["Insert"]
) {
  const { data: review, error } = await supabase
    .from("research")
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return review;
}

export async function getOrCreateProjectBySlug(
  data: Database["public"]["Tables"]["projects"]["Insert"]
) {
  // First try to get the project by slug
  const { data: existingProject, error: fetchError } = await supabase
    .from("projects")
    .select()
    .eq("slug", data.slug)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    throw fetchError;
  }

  // If project exists, return it
  if (existingProject) {
    return existingProject;
  }

  // If project doesn't exist, create it using the existing createProject function
  return createProject(data);
}
