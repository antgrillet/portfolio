"use client";

import { motion, useReducedMotion } from "motion/react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
	{
		id: 1,
		quote:
			"Antonin a parfaitement compris mon univers et l'a retranscrit dans un site magnifique. Mes clientes adorent le résultat !",
		author: "Marie L.",
		role: "Fondatrice, Nails by Mams",
		avatar: "/testimonials/marie.jpg",
		rating: 5,
		project: "Site vitrine",
	},
	{
		id: 2,
		quote:
			"Travail rapide et professionnel. Le site a boosté notre visibilité et nous recevons maintenant beaucoup plus de demandes.",
		author: "Thomas R.",
		role: "Gérant, Inked Studio",
		avatar: "/testimonials/thomas.jpg",
		rating: 5,
		project: "Portfolio tattoo",
	},
	{
		id: 3,
		quote:
			"La plateforme GC Handball a révolutionné ma façon de préparer les entraînements. Un outil indispensable pour tout coach !",
		author: "Julien M.",
		role: "Entraîneur, Club Handball",
		avatar: "/testimonials/julien.jpg",
		rating: 5,
		project: "GC Handball",
	},
];

export function TestimonialsSection() {
	const shouldReduceMotion = useReducedMotion();

	const slideUp = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
	};

	return (
		<section className="py-20 relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					{...slideUp}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
						Ce que disent mes clients
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						La satisfaction de mes clients est ma priorité. Voici quelques
						retours sur nos collaborations.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={
								shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }
							}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative group"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							<div className="relative bg-white dark:bg-zinc-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-zinc-200 dark:border-zinc-700">
								{/* Quote icon */}
								<div className="absolute -top-3 -left-3 p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
									<Quote className="h-4 w-4 text-white" />
								</div>

								{/* Rating */}
								<div className="flex gap-1 mb-4">
									{Array.from({ length: testimonial.rating }).map((_, i) => (
										<Star
											key={i}
											className="h-4 w-4 text-yellow-400 fill-yellow-400"
										/>
									))}
								</div>

								{/* Quote */}
								<blockquote className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
									&ldquo;{testimonial.quote}&rdquo;
								</blockquote>

								{/* Author */}
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
										{testimonial.author
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
									<div>
										<div className="font-semibold text-zinc-900 dark:text-zinc-100">
											{testimonial.author}
										</div>
										<div className="text-sm text-zinc-600 dark:text-zinc-400">
											{testimonial.role}
										</div>
									</div>
								</div>

								{/* Project tag */}
								<div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
									<span className="text-xs font-medium text-blue-600 dark:text-blue-400">
										Projet : {testimonial.project}
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<motion.div
					{...slideUp}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<p className="text-zinc-600 dark:text-zinc-400 mb-2">
						Vous souhaitez rejoindre ces clients satisfaits ?
					</p>
					<a
						href="#contact"
						className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
					>
						Discutons de votre projet →
					</a>
				</motion.div>
			</div>
		</section>
	);
}
