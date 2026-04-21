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
  title: "HVRBOR.CLUB / SEAson 1 Premieres June 20, 2026",
  description:
    "A curated Miami Flotilla Episode. Eight Saturdays across Biscayne Bay, 12 seats per Episode, one SEAson at a time. Launching June 20, 2026. A GHXSTSHIP brand.",
  keywords: [
    "hvrbor.club",
    "hvrbor",
    "miami flotilla",
    "biscayne bay",
    "miami beach marina",
    "ghxstship",
    "season 1",
    "miami saturday",
  ],
  authors: [{ name: "GHXSTSHIP Industries" }],
  openGraph: {
    title: "HVRBOR.CLUB / SEAson 1 Premieres June 20, 2026",
    description:
      "A curated Miami Flotilla Episode. Eight Saturdays across Biscayne Bay, 12 seats per Episode. Launching June 20, 2026.",
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
