import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

const components = {
  a: ({ children, href, ...props }: ComponentProps<"a">) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
};

export function Markdown({
  // className = "",
  ...props
}: ComponentProps<typeof ReactMarkdown>) {
  return (
    <div className="prose prose-sm max-w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        {...props}
        components={components}
      />
    </div>
  );
}
