"use client";

import { motion, useReducedMotion } from "motion/react";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { Github, Linkedin, Mail, ChevronDown, FileDown } from "lucide-react";

interface HeroSectionProps {
	onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	const scrollToProjects = () => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	};

	// Animation variants respectant prefers-reduced-motion
	const fadeIn = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
	};

	const slideInLeft = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 },
		animate: { opacity: 1, x: 0 },
	};

	const slideInRight = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 50 },
		animate: { opacity: 1, x: 0 },
	};

	const slideUp = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
		>
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:from-zinc-950 dark:via-blue-950 dark:to-purple-950" />

			{/* Animated blobs - disabled if reduced motion */}
			{!shouldReduceMotion && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.4 }}
					transition={{ duration: 2 }}
					className="absolute inset-0"
				>
					<div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob" />
					<div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
					<div className="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-400 dark:from-pink-600 dark:to-rose-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400 to-blue-400 dark:from-indigo-600 dark:to-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-3000" />
				</motion.div>
			)}

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				{/* Grid Photo + Bio */}
				<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
					{/* Photo Carousel */}
					<motion.div
						{...slideInLeft}
						transition={{ duration: 0.8 }}
						className="flex justify-center md:justify-end group"
					>
						<PhotoCarousel
							images={["/images/profile-1.jpg", "/images/profile-2.jpg"]}
							alt="Antonin Grillet"
							autoPlayInterval={4500}
						/>
					</motion.div>

					{/* Bio Section */}
					<motion.div
						{...slideInRight}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-center md:text-left space-y-6"
					>
						<div>
							{/* Status Badge - Disponibilité */}
							<motion.div
								{...fadeIn}
								transition={{ delay: 0.1 }}
								className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4"
							>
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
									<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
								</span>
								Disponible pour freelance
							</motion.div>

							<h1 className="text-5xl md:text-6xl font-bold mb-4">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
									Antonin Grillet
								</span>
							</h1>

							{/* Value Proposition Claire - Hook 5 secondes */}
							<p className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-300 mb-2 font-medium">
								Développeur Full-Stack React & Next.js
							</p>

							<p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
								Je crée des applications web{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">
									rapides
								</span>
								,{" "}
								<span className="font-semibold text-purple-600 dark:text-purple-400">
									accessibles
								</span>{" "}
								et{" "}
								<span className="font-semibold text-pink-600 dark:text-pink-400">
									scalables
								</span>
								. Fondateur de{" "}
								<span className="font-semibold text-pink-600 dark:text-pink-400">
									GC Handball
								</span>
								.
							</p>
						</div>

						{/* Social Links */}
						<motion.div
							{...fadeIn}
							transition={{ delay: 0.4 }}
							className="flex gap-4 justify-center md:justify-start"
						>
							<a
								href="https://github.com/antoningrillet"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Profil GitHub"
								className="p-3 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
							>
								<Github className="h-6 w-6" />
							</a>
							<a
								href="https://linkedin.com/in/antoningrillet"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Profil LinkedIn"
								className="p-3 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
							>
								<Linkedin className="h-6 w-6" />
							</a>
							<a
								href="mailto:contact@antoningrillet.dev"
								aria-label="Envoyer un email"
								className="p-3 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
							>
								<Mail className="h-6 w-6" />
							</a>
						</motion.div>

						{/* CTA Buttons */}
						<motion.div
							{...fadeIn}
							transition={{ delay: 0.5 }}
							className="flex flex-wrap gap-4 justify-center md:justify-start"
						>
							<button
								onClick={onContactClick}
								className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
							>
								<Mail className="h-5 w-5" />
								Me contacter
							</button>
							<button
								onClick={scrollToProjects}
								className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-600 dark:border-purple-600 text-blue-600 dark:text-purple-400 hover:bg-blue-50 dark:hover:bg-purple-950/20 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
							>
								Découvrir mes projets
								<ChevronDown className="h-5 w-5" />
							</button>
							<a
								href="/cv-antonin-grillet.pdf"
								download
								className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
							>
								<FileDown className="h-5 w-5" />
								CV
							</a>
						</motion.div>
					</motion.div>
				</div>

				{/* Timeline */}
				<TimelineSection shouldReduceMotion={shouldReduceMotion} />
			</div>
		</section>
	);
}

function TimelineSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
	const slideUp = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0 },
	};

	const timelineItems = [
		{
			year: "2022 - 2023",
			title: "École 42",
			description: "Formation intensive en programmation",
			gradient: "from-orange-500 to-red-500",
			delay: 0.7,
		},
		{
			year: "2024",
			title: "Freelance",
			description: "Développement web full-stack",
			gradient: "from-purple-500 to-blue-500",
			delay: 0.8,
		},
		{
			year: "2025",
			title: "GC Handball",
			description: "Création de la plateforme de coaching",
			gradient: "from-pink-500 to-rose-500",
			delay: 0.9,
		},
	];

	return (
		<motion.div
			{...slideUp}
			transition={{ duration: 0.8, delay: 0.6 }}
			className="max-w-5xl mx-auto"
		>
			<h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-12 text-center">
				Mon Parcours
			</h3>

			<div className="relative">
				{/* Ligne horizontale */}
				<div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500" />

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
					{timelineItems.map((item) => (
						<motion.div
							key={item.title}
							initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: item.delay }}
							className="relative flex flex-col items-center"
						>
							{/* Point sur la ligne */}
							<div
								className={`absolute top-10 w-6 h-6 rounded-full bg-gradient-to-r ${item.gradient} ring-4 ring-white dark:ring-zinc-950 z-10`}
							/>

							{/* Carte */}
							<div className="mt-20 bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-zinc-200 dark:border-zinc-700 w-full hover:-translate-y-1">
								<div className="flex flex-col items-center text-center">
									<span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-2">
										{item.year}
									</span>
									<h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
										{item.title}
									</h4>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">
										{item.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
