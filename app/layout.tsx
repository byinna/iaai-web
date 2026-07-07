import type { Metadata, Viewport } from "next";
import { Rubik_Mono_One, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://ia-ai.pro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ingrid Ashida — AI Consultant & Builder",
  description:
    "Ingrid Ashida is an AI builder who helps founders, small businesses, and creative professionals put AI to work — rapid prototyping, RAG & knowledge management, and bespoke web applications.",
  keywords: [
    "AI consultant",
    "AI builder",
    "RAG",
    "rapid prototyping",
    "web applications",
    "Ingrid Ashida",
  ],
  authors: [{ name: "Ingrid Ashida" }],
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: "Ingrid Ashida — AI Consultant & Builder",
    description:
      "Selected AI-powered projects — practical AI, shipped faster than you think.",
    siteName: "Ingrid Ashida",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ingrid Ashida — AI Consultant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingrid Ashida — AI Consultant & Builder",
    description:
      "Selected AI-powered projects — practical AI, shipped faster than you think.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#3e88b4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
