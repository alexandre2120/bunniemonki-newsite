import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import { AnalyticsEvents } from "@/components/site/analytics-events";
import { VercelAnalytics } from "@/components/site/vercel-analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bunniemonki | Intelligent AI Implementation in Company Processes",
    template: "%s",
  },
  description:
    "Bunniemonki implements AI inside real company processes, integrated with existing systems, human approvals and managed operations.",
  metadataBase: new URL("https://bunniemonki.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full overflow-x-clip flex flex-col"
      >
        {children}
        <AnalyticsEvents />
        <VercelAnalytics />
      </body>
    </html>
  );
}
