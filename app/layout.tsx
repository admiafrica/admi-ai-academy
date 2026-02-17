import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADMI AI Academy | Build with AI. Create the Future.",
  description: "Master AI tools and technologies at Africa's leading creative media institute. Learn practical AI skills for creative professionals, marketers, and business analysts.",
  keywords: ["AI training", "AI courses", "machine learning", "AI Academy", "ADMI", "Africa", "creative AI", "AI for marketing"],
  icons: {
    icon: "/Logo admi 2.png",
    shortcut: "/Logo admi 2.png",
    apple: "/Logo admi 2.png",
  },
  openGraph: {
    title: "ADMI AI Academy | Build with AI. Create the Future.",
    description: "Master AI tools and technologies at Africa's leading creative media institute.",
    type: "website",
    locale: "en_US",
    siteName: "ADMI AI Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADMI AI Academy | Build with AI. Create the Future.",
    description: "Master AI tools and technologies at Africa's leading creative media institute.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
