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
  title: "HVRBOR / Miami's Flotilla, One Day at a Time",
  description:
    "A new kind of day experience on the water. Curated flotillas of design-forward vessels running a single sunrise-to-sunset program across Biscayne Bay. A GHXSTSHIP brand. Launching June 2026.",
  keywords: [
    "hvrbor",
    "miami yacht",
    "miami flotilla",
    "day experience miami",
    "ghxstship",
    "biscayne bay",
  ],
  authors: [{ name: "GHXSTSHIP Industries" }],
  openGraph: {
    title: "HVRBOR / Miami's Flotilla, One Day at a Time",
    description:
      "A new kind of day experience on the water. Launching June 2026.",
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
