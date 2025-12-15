import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// SEO Metadata complet
export const metadata: Metadata = {
	metadataBase: new URL("https://antoningrillet.dev"),
	title: {
		default: "Antonin Grillet | Développeur Full-Stack React & Next.js",
		template: "%s | Antonin Grillet",
	},
	description:
		"Développeur Full-Stack spécialisé en React, Next.js et TypeScript. Je crée des applications web rapides, accessibles et scalables. Disponible pour missions freelance.",
	keywords: [
		"développeur",
		"full-stack",
		"React",
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"freelance",
		"portfolio",
		"web",
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
		title: "Antonin Grillet | Développeur Full-Stack React & Next.js",
		description:
			"Développeur Full-Stack spécialisé en React, Next.js et TypeScript. Je crée des applications web rapides, accessibles et scalables.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Antonin Grillet - Développeur Full-Stack",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Antonin Grillet | Développeur Full-Stack React & Next.js",
		description:
			"Développeur Full-Stack spécialisé en React, Next.js et TypeScript. Disponible pour missions freelance.",
		images: ["/og-image.png"],
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
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#09090b" },
	],
	width: "device-width",
	initialScale: 1,
};

// Schema.org JSON-LD pour SEO structuré
function JsonLd() {
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Antonin Grillet",
		url: "https://antoningrillet.dev",
		image: "https://antoningrillet.dev/images/profile-1.jpg",
		jobTitle: "Développeur Full-Stack",
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
			"Node.js",
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
			"Portfolio de développeur Full-Stack spécialisé en React, Next.js et TypeScript",
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
