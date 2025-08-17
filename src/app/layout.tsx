import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vercel Clone",
  description: "A vercel deployment like project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}
          bg-background
          text-foreground
          antialiased
          min-h-screen
          flex flex-col
        `}
      >
        <Navbar />
        <main className="flex-1 p-6">
          <div className="container mx-auto max-w-7xl">{children}</div>
        </main>
        <footer className="p-4 text-sm text-center text-muted-foreground border-t">
          <div className="container mx-auto max-w-7xl">
            © {new Date().getFullYear()} My App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
