import type { Metadata } from "next";
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

export const metadata: Metadata = {
	title: "Antonin Grillet - Développeur Full-Stack",
	description:
		"Portfolio de développeur web full-stack spécialisé en React, Next.js et TypeScript. Découvrez mes projets déployés sur Vercel.",
	keywords:
		"développeur, full-stack, React, Next.js, TypeScript, Vercel, portfolio, web",
	authors: [{ name: "Antonin Grillet" }],
	openGraph: {
		title: "Antonin Grillet - Développeur Full-Stack",
		description: "Portfolio de développeur web full-stack",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
