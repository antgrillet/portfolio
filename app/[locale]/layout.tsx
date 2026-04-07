import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Space_Grotesk, Instrument_Serif } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import "./globals.css";

const displayFont = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antoningrillet.dev"),
  title: {
    default: "Antonin Grillet | Product Designer",
    template: "%s | Antonin Grillet",
  },
  description:
    "Je conçois des produits digitaux, des sites et des solutions qui connectent les utilisateurs à la valeur.",
  keywords: [
    "product designer",
    "développeur",
    "designer d'interfaces",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "Antonin Grillet",
  ],
  authors: [{ name: "Antonin Grillet", url: "https://antoningrillet.dev" }],
  creator: "Antonin Grillet",
  publisher: "Antonin Grillet",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://antoningrillet.dev",
    siteName: "Antonin Grillet - Portfolio",
    title: "Antonin Grillet | Product Designer",
    description: "Je conçois des produits digitaux, des sites et des solutions qui connectent les utilisateurs à la valeur.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Antonin Grillet - Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonin Grillet | Product Designer",
    description: "Je conçois des produits digitaux, des sites et des solutions qui connectent les utilisateurs à la valeur.",
    images: ["/opengraph-image"],
    creator: "@antoningrillet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://antoningrillet.dev",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#05070b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  setRequestLocale(locale);
  
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
