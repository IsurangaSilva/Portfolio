import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppThemeProvider } from "@/contexts/ThemeProvider";
import "./globals.css";

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
  title: "Isuranga's Portfolio",
  description: "Professional portfolio showcasing Isuranga's projects and skills",
  keywords: ["portfolio", "web developer", "frontend", "developer", "Isuranga"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-dark-100 dark:text-white`}
      >
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
