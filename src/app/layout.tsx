import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scrapcord",
  description: "The ultimate Discord bot for managing your Rust servers",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}