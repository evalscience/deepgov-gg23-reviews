import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "AI Reviewer",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="bg-background mx-auto max-w-screen-xl mb-24">
            <header className="py-4 flex gap-4 items-center">
              <Link href="/" className="text-sm p-4 font-bold">
                AI-Reviewer
              </Link>
              <div className="flex gap-4">
                <Link href="/" className="text-sm p-4">
                  Applications
                </Link>
              </div>
            </header>
            <div className="flex-1 px-4">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
