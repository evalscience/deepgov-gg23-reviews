import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details",
  description: "View project details and reviews",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
