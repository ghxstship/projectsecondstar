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
  title: "HVRBOR.CLUB / Saturdays are for the sea.",
  description:
    "A year-round Miami membership built on a flotilla. Eight Episodes per SEAson on Biscayne Bay. Priority access across seven networks — Entertainment, Sports, Health & Wellness, Hospitality, Travel, Retail, Nightlife. Captain casting opens at Art Basel.",
  keywords: [
    "hvrbor.club",
    "hvrbor",
    "miami membership",
    "miami flotilla",
    "biscayne bay",
    "miami beach marina",
    "ghxstship",
    "season 1",
    "miami saturday",
    "members club miami",
  ],
  authors: [{ name: "GHXSTSHIP Industries" }],
  openGraph: {
    title: "HVRBOR.CLUB / Saturdays are for the sea.",
    description:
      "A year-round Miami membership built on a flotilla. Eight Episodes. Seven networks. One Harbor. Captain casting opens at Art Basel.",
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
