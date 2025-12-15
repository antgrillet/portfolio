"use client";

import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, Briefcase, Code, Trophy } from "lucide-react";

interface TimelineItem {
	year: string;
	title: string;
	subtitle?: string;
	description: string;
	type: "education" | "work" | "project";
	gradient: string;
	icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
	{
		year: "2021",
		title: "STAPS",
		subtitle: "Sciences et Techniques des Activités Physiques et Sportives",
		description: "Année universitaire en sciences du sport",
		type: "education",
		gradient: "from-green-500 to-emerald-500",
		icon: <GraduationCap className="h-5 w-5" />,
	},
	{
		year: "2022 - 2023",
		title: "École 42",
		subtitle: "Paris",
		description: "Formation intensive en programmation et algorithmique",
		type: "education",
		gradient: "from-orange-500 to-red-500",
		icon: <Code className="h-5 w-5" />,
	},
	{
		year: "2024",
		title: "Freelance",
		subtitle: "Développeur Full-Stack",
		description: "Création de sites web et applications pour des clients variés",
		type: "work",
		gradient: "from-purple-500 to-blue-500",
		icon: <Briefcase className="h-5 w-5" />,
	},
	{
		year: "2025",
		title: "GC Handball",
		subtitle: "Fondateur & Développeur",
		description: "Création de la plateforme de coaching sportif",
		type: "project",
		gradient: "from-pink-500 to-rose-500",
		icon: <Trophy className="h-5 w-5" />,
	},
];

function TimelineCard({
	item,
	index,
	shouldReduceMotion,
}: {
	item: TimelineItem;
	index: number;
	shouldReduceMotion: boolean | null;
}) {
	const isLeft = index % 2 === 0;

	return (
		<div className="relative flex items-center justify-center">
			{/* Desktop: Alternating layout */}
			<div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full max-w-4xl">
				{/* Left side */}
				<div className={`flex ${isLeft ? "justify-end" : "justify-end opacity-0"}`}>
					{isLeft && (
						<motion.div
							initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="group"
						>
							<div className="relative bg-white dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-sm">
								{/* Connector line */}
								<div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-zinc-300 dark:from-zinc-600 to-transparent" />

								<div className="flex items-center gap-3 mb-3">
									<div className={`p-2 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
										{item.icon}
									</div>
									<span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
										{item.year}
									</span>
								</div>

								<h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									{item.title}
								</h3>

								{item.subtitle && (
									<p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
										{item.subtitle}
									</p>
								)}

								<p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
									{item.description}
								</p>
							</div>
						</motion.div>
					)}
				</div>

				{/* Center dot */}
				<div className="relative flex items-center justify-center">
					<motion.div
						initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
						className={`relative z-10 w-5 h-5 rounded-full bg-gradient-to-br ${item.gradient} ring-4 ring-white dark:ring-zinc-900 shadow-lg`}
					>
						<div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} animate-ping opacity-20`} />
					</motion.div>
				</div>

				{/* Right side */}
				<div className={`flex ${!isLeft ? "justify-start" : "justify-start opacity-0"}`}>
					{!isLeft && (
						<motion.div
							initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="group"
						>
							<div className="relative bg-white dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-sm">
								{/* Connector line */}
								<div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-l from-zinc-300 dark:from-zinc-600 to-transparent" />

								<div className="flex items-center gap-3 mb-3">
									<div className={`p-2 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
										{item.icon}
									</div>
									<span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
										{item.year}
									</span>
								</div>

								<h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									{item.title}
								</h3>

								{item.subtitle && (
									<p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
										{item.subtitle}
									</p>
								)}

								<p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
									{item.description}
								</p>
							</div>
						</motion.div>
					)}
				</div>
			</div>

			{/* Mobile: Single column */}
			<div className="md:hidden flex gap-6 w-full max-w-md">
				{/* Timeline dot and line */}
				<div className="relative flex flex-col items-center">
					<motion.div
						initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
						className={`relative z-10 w-4 h-4 rounded-full bg-gradient-to-br ${item.gradient} ring-4 ring-white dark:ring-zinc-900 shadow-lg flex-shrink-0`}
					/>
				</div>

				{/* Card */}
				<motion.div
					initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="flex-1 group pb-8"
				>
					<div className="bg-white dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300">
						<div className="flex items-center gap-3 mb-3">
							<div className={`p-2 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
								{item.icon}
							</div>
							<span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
								{item.year}
							</span>
						</div>

						<h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
							{item.title}
						</h3>

						{item.subtitle && (
							<p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
								{item.subtitle}
							</p>
						)}

						<p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
							{item.description}
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export function TimelineSection() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section id="parcours" className="py-24 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-4">
						Mon Parcours
					</span>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
							Formation & Expérience
						</span>
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						Du sport à la tech, mon parcours atypique m&apos;a permis de développer des compétences variées
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Vertical line - Desktop */}
					<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
						<motion.div
							initial={{ scaleY: 0 }}
							whileInView={{ scaleY: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1.5, ease: "easeOut" }}
							className="h-full w-full bg-gradient-to-b from-green-500 via-purple-500 to-pink-500 origin-top rounded-full"
						/>
					</div>

					{/* Vertical line - Mobile */}
					<div className="md:hidden absolute left-[7px] top-0 bottom-0 w-0.5">
						<motion.div
							initial={{ scaleY: 0 }}
							whileInView={{ scaleY: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1.5, ease: "easeOut" }}
							className="h-full w-full bg-gradient-to-b from-green-500 via-purple-500 to-pink-500 origin-top rounded-full"
						/>
					</div>

					{/* Timeline items */}
					<div className="relative space-y-12 md:space-y-16">
						{timelineData.map((item, index) => (
							<TimelineCard
								key={item.title}
								item={item}
								index={index}
								shouldReduceMotion={shouldReduceMotion}
							/>
						))}
					</div>

					{/* End dot */}
					<motion.div
						initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center shadow-lg"
					>
						<div className="w-3 h-3 rounded-full bg-white" />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
