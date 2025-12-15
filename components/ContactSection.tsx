"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mail, Linkedin } from "lucide-react";

interface ContactSectionProps {
	onContactClick: () => void;
}

export function ContactSection({ onContactClick }: ContactSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	const slideUp = {
		initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="contact"
			className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 dark:from-zinc-950 dark:via-blue-950/20 dark:to-indigo-950/20"
		>
			{!shouldReduceMotion && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 0.2, scale: 1 }}
					transition={{ duration: 1.5 }}
					viewport={{ once: true }}
					className="absolute inset-0 flex items-center justify-center"
				>
					<div className="w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 rounded-full filter blur-3xl opacity-20" />
				</motion.div>
			)}

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
				<motion.div
					{...slideUp}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
						Travaillons Ensemble
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
						Je suis disponible pour des missions freelance et des
						collaborations sur des projets innovants.
					</p>

					<div className="flex gap-4 justify-center">
						<button
							onClick={onContactClick}
							className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							<Mail className="h-5 w-5" />
							Me contacter
						</button>
						<a
							href="https://linkedin.com/in/antoningrillet"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							<Linkedin className="h-5 w-5" />
							LinkedIn
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
