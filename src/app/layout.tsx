import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhil-mishra-portfolio.vercel.app"),
  title: {
    default: "Resonance",
    template: "%s | Resonance",
  },
  description:
    "Resonance is a next-generation AI voice platform delivering ultra-realistic speech synthesis powered by advanced neural models.",
  keywords: [
    "AI voice",
    "text to speech",
    "speech synthesis",
    "voice cloning",
    "Resonance AI",
    "ElevenLabs alternative",
  ],
  authors: [{ name: "Resonance Team" }],
  creator: "Resonance",
  publisher: "Resonance",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Resonance – Ultra-Realistic AI Voice Platform",
    description:
      "Create lifelike AI voices with Resonance. High-quality speech synthesis for creators, developers, and enterprises.",
    url: "https://nikhil-mishra-portfolio.vercel.app",
    siteName: "Resonance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resonance – Ultra-Realistic AI Voice Platform",
    description:
      "Generate human-like AI voices instantly with Resonance.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
      </TRPCReactProvider>

    </ClerkProvider>  
  );
}