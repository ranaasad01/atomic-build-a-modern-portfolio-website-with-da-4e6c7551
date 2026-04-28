import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan — Full-Stack Developer",
    template: "%s | Alex Morgan",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and TypeScript. Building modern web applications with clean code and great user experiences.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "web developer",
    "portfolio",
  ],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and TypeScript.",
    siteName: "Alex Morgan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and TypeScript.",
    creator: "@alexmorgan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = [GeistSans.variable, GeistMono.variable].join(" ");
  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
