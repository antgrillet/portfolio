import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./showcase.css";
import { BdpSiteFooter, BdpSiteHeader } from "@/components/showcases/bistrot-du-port/bdp-site-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export default function BistrotDuPortShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`bdp-showcase-root ${geistSans.variable} ${geistMono.variable} ${playfair.variable} flex min-h-full flex-col bg-[#fdfdfd]`}
    >
      <BdpSiteHeader />
      {children}
      <BdpSiteFooter />
    </div>
  );
}
