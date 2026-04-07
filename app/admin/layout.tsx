import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "../[locale]/globals.css";

const displayFont = Archivo({ variable: "--font-display", subsets: ["latin"] });
const bodyFont = Space_Grotesk({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panel Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
