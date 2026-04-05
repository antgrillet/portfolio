import type { Metadata, Viewport } from "next";
import { Fraunces, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Fraunces({
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

export const metadata: Metadata = {
  metadataBase: new URL("https://antoningrillet.dev"),
  title: {
    default:
      "Antonin Grillet | Designer d'interfaces et développeur React / Next.js",
    template: "%s | Antonin Grillet",
  },
  description:
    "Portfolio d'Antonin Grillet. J'imagine et développe des expériences web haut de gamme, rapides, accessibles et animées avec précision en React, Next.js et TypeScript.",
  keywords: [
    "développeur",
    "designer d'interfaces",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "motion design",
    "freelance",
    "France",
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
    locale: "fr_FR",
    url: "https://antoningrillet.dev",
    siteName: "Antonin Grillet - Portfolio",
    title:
      "Antonin Grillet | Designer d'interfaces et développeur React / Next.js",
    description:
      "Des expériences web nettes, performantes et soigneusement animées pour marques, studios et startups.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Antonin Grillet - Portfolio premium React et Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Antonin Grillet | Designer d'interfaces et développeur React / Next.js",
    description:
      "Des expériences web nettes, performantes et soigneusement animées pour marques, studios et startups.",
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
    { media: "(prefers-color-scheme: light)", color: "#f6f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#05070b" },
  ],
  width: "device-width",
  initialScale: 1,
};

function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Antonin Grillet",
    url: "https://antoningrillet.dev",
    image: "https://antoningrillet.dev/images/profile-1.jpg",
    jobTitle: "Designer d'interfaces et développeur full-stack",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://github.com/antoningrillet",
      "https://linkedin.com/in/antoningrillet",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Motion design",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "École 42",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Antonin Grillet - Portfolio",
    url: "https://antoningrillet.dev",
    description:
      "Portfolio premium de designer d'interfaces et développeur React / Next.js",
    author: {
      "@type": "Person",
      name: "Antonin Grillet",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
