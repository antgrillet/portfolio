"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
	title: string;
	description: string;
	techStack: string[];
	liveUrl?: string;
	imageUrl?: string;
}

// Fonction pour générer un gradient unique basé sur le titre
function getGradientForTitle(title: string): string {
	const gradients = [
		"from-blue-500 via-cyan-500 to-teal-500",
		"from-purple-500 via-pink-500 to-rose-500",
		"from-orange-500 via-red-500 to-pink-500",
		"from-green-500 via-emerald-500 to-teal-500",
		"from-indigo-500 via-purple-500 to-pink-500",
		"from-yellow-500 via-orange-500 to-red-500",
		"from-cyan-500 via-blue-500 to-indigo-500",
	];

	const hash = title
		.split("")
		.reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return gradients[hash % gradients.length];
}

export function ProjectCard({
	title,
	description,
	techStack,
	liveUrl,
	imageUrl,
}: ProjectCardProps) {
	const gradient = getGradientForTitle(title);
	const initials = title
		.split(" ")
		.map((word) => word[0])
		.join("")
		.toUpperCase()
		.slice(0, 3);

	const CardContent = () => (
		<>
			<div
				className={`relative aspect-video overflow-hidden bg-gradient-to-br ${gradient}`}
			>
				{imageUrl ? (
					<>
						<Image
							src={imageUrl}
							alt={title}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-110"
							onError={(e) => {
								e.currentTarget.style.display = "none";
							}}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</>
				) : (
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center">
							<div className="text-6xl font-bold text-white/90 mb-2">
								{initials}
							</div>
							<div className="text-sm text-white/70 font-medium px-4">
								{title}
							</div>
						</div>
					</div>
				)}

				{/* Overlay actions */}
				{liveUrl && (
					<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-2">
						<div className="bg-white dark:bg-zinc-900 rounded-full p-3 shadow-lg">
							<ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
						</div>
					</div>
				)}
			</div>

			<div className="p-6">
				<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
					{title}
				</h3>
				<p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
					{description}
				</p>
				<div className="flex flex-wrap gap-2">
					{techStack.slice(0, 4).map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
						>
							{tech}
						</span>
					))}
					{techStack.length > 4 && (
						<span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
							+{techStack.length - 4}
						</span>
					)}
				</div>
			</div>
		</>
	);

	const cardClasses =
		"group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1";

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className={cardClasses}
		>
			{liveUrl ? (
				<a
					href={liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="block"
				>
					<CardContent />
				</a>
			) : (
				<CardContent />
			)}
		</motion.div>
	);
}
