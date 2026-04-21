import type { Metadata } from "next";
import { Anton, Bebas_Neue, Share_Tech_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const shareMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HVRBR.CLUB / Miami's Flotilla, One Day at a Time",
  description:
    "A curated Saturday flotilla across Biscayne Bay. Eight hours, one horizon, zero ordinary. Sailing from Miami Beach Marina, June 2026. A GHXSTSHIP brand.",
  keywords: [
    "hvrbr.club",
    "hvrbr",
    "miami yacht",
    "miami flotilla",
    "day experience miami",
    "ghxstship",
    "biscayne bay",
  ],
  authors: [{ name: "GHXSTSHIP Industries" }],
  openGraph: {
    title: "HVRBR.CLUB / Miami's Flotilla, One Day at a Time",
    description:
      "A curated Saturday flotilla across Biscayne Bay. Sailing June 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebas.variable} ${shareMono.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
