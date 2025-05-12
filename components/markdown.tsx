import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
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
  className = "",
  ...props
}: ComponentProps<typeof ReactMarkdown> & { className?: string }) {
  return (
    <div className={cn("prose max-w-full", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        {...props}
        components={components}
      />
    </div>
  );
}
