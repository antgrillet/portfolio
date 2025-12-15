"use client";

import { motion, useReducedMotion } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGridSkeleton } from "@/components/ui/skeleton";
import { Project } from "@/data/projects";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectsSectionProps {
	onContactClick: () => void;
}

export function ProjectsSection({ onContactClick }: ProjectsSectionProps) {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch("/api/projects");
				if (!response.ok) {
					throw new Error("Erreur lors du chargement des projets");
				}
				const data = await response.json();
				setProjects(data.projects);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Erreur inconnue");
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	const fadeIn = {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
	};

	const slideUp = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="projects"
			className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-zinc-950 dark:via-blue-950/20 dark:to-purple-950/20"
		>
			<div
				className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0.6))]"
				style={{ backgroundSize: "30px 30px" }}
			/>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					{...slideUp}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
						Projets Hébergés sur Vercel
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						Une sélection de mes projets récents, tous déployés et accessibles
						en ligne sur Vercel.
					</p>
				</motion.div>

				{loading ? (
					<ProjectGridSkeleton />
				) : error ? (
					<div className="text-center py-12">
						<p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
						<button
							onClick={() => window.location.reload()}
							className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Réessayer
						</button>
					</div>
				) : projects.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-zinc-600 dark:text-zinc-400">
							Aucun projet disponible pour le moment.
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={
									shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
								}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<ProjectCard {...project} />
							</motion.div>
						))}
					</div>
				)}

				{/* CTA Button */}
				<motion.div
					{...slideUp}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<button
						onClick={onContactClick}
						className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						<Mail className="h-5 w-5" />
						Discutons de votre projet
					</button>
				</motion.div>
			</div>
		</section>
	);
}
