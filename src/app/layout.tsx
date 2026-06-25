import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
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
    default: "Bunniemonki | Business Automation & AI Operations",
    template: "%s",
  },
  description:
    "Bunniemonki connects systems, redesigns operational journeys and manages automations that keep business moving.",
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
      <body className="min-h-full w-full overflow-x-clip flex flex-col">{children}</body>
    </html>
  );
}
