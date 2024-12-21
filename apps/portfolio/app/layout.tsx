import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import font from "next/font/local";
import { cn } from "@/utils/cn";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Bacsur",
  description:
    "I'm a student, a software engineer, and an entrepreneur. " +
    "In recent years, robotics, AI, and programming have become part of my everyday life. " +
    "Explore my journey, projects, and achievements.",
  authors: [{ name: "Daniel Bacsur", url: "https://danielbacsur.com" }],
  keywords: ["daniel bacsur", "bacsur daniel", "bacsur", "daniel", "dániel"],
};



const signatureFont = font({
  src: "../fonts/signature.ttf",
  variable: "--font-signature",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased bg-black text-white min-h-dvh",
          signatureFont.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
