import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/components/react-query-provider";
import { validateRequest } from "@/auth";
import { redirect, unauthorized } from "next/navigation";
import SessionProvider from "./session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LCC Markets",
  description: "A Next.js application for managing markets and users.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {user,session } = await validateRequest()
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                  <ReactQueryProvider><SessionProvider value={{session,user}}>{children}</SessionProvider></ReactQueryProvider>

            <Toaster richColors />
          </ThemeProvider>
      </body>
    </html>
  );
}
