"use client";

import { motion, useReducedMotion } from "motion/react";
import { TechBadge } from "@/components/TechBadge";
import { Code2, Database, Palette, Cloud, Mail } from "lucide-react";

interface TechStackSectionProps {
	onContactClick: () => void;
}

const techStack = {
	frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
	backend: ["Node.js", "Python"],
	database: ["PostgreSQL", "Prisma"],
	cloud: ["Vercel", "CI/CD", "GitHub Actions"],
};

const categories = [
	{
		key: "frontend" as const,
		title: "Frontend",
		icon: Code2,
		color: "text-blue-600 dark:text-blue-400",
	},
	{
		key: "backend" as const,
		title: "Backend",
		icon: Database,
		color: "text-green-600 dark:text-green-400",
	},
	{
		key: "database" as const,
		title: "Database",
		icon: Palette,
		color: "text-purple-600 dark:text-purple-400",
	},
	{
		key: "cloud" as const,
		title: "Cloud & DevOps",
		icon: Cloud,
		color: "text-orange-600 dark:text-orange-400",
	},
];

export function TechStackSection({ onContactClick }: TechStackSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	const slideUp = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
	};

	const slideLeft = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 },
		whileInView: { opacity: 1, x: 0 },
	};

	return (
		<section
			id="tech"
			className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-zinc-900 dark:via-purple-950/20 dark:to-pink-950/20"
		>
			{!shouldReduceMotion && (
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 0.3 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="absolute inset-0"
				>
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob" />
					<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
				</motion.div>
			)}

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					{...slideUp}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
						Technologies & Stack
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						Les technologies que j&apos;utilise pour créer des applications
						web modernes et performantes.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{categories.map((category, index) => (
						<motion.div
							key={category.key}
							{...slideLeft}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="space-y-4"
						>
							<div className="flex items-center gap-2 mb-4">
								<category.icon className={`h-6 w-6 ${category.color}`} />
								<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
									{category.title}
								</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{techStack[category.key].map((tech) => (
									<TechBadge key={tech} name={tech} />
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA Button */}
				<motion.div
					{...slideUp}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<button
						onClick={onContactClick}
						className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
					>
						<Mail className="h-5 w-5" />
						Besoin d&apos;un développeur ?
					</button>
				</motion.div>
			</div>
		</section>
	);
}
