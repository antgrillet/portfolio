"use client";

import { motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
	{ label: "Accueil", href: "#hero" },
	{ label: "Parcours", href: "#parcours" },
	{ label: "Projets", href: "#projects" },
	{ label: "Technologies", href: "#tech" },
	{ label: "Contact", href: "#contact" },
];

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map((item) => item.href.slice(1));
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Skip to main content - Accessibilité */}
			<a
				href="#hero"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
			>
				Aller au contenu principal
			</a>

			<motion.nav
				initial={shouldReduceMotion ? { opacity: 0 } : { y: -100 }}
				animate={shouldReduceMotion ? { opacity: 1 } : { y: 0 }}
				className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
				role="navigation"
				aria-label="Navigation principale"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<motion.a
							href="#hero"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-xl font-bold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1"
							aria-label="Antonin Grillet - Retour à l'accueil"
						>
							AG.
						</motion.a>

						{/* Desktop Navigation */}
						<div className="hidden md:block">
							<div className="flex items-center space-x-1">
								{navItems.map((item, index) => {
									const isActive =
										activeSection === item.href.slice(1);
									return (
										<motion.a
											key={item.label}
											href={item.href}
											initial={
												shouldReduceMotion
													? { opacity: 0 }
													: { opacity: 0, y: -20 }
											}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.1 * (index + 1) }}
											className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
												isActive
													? "text-blue-600 dark:text-blue-400"
													: "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
											}`}
											aria-current={isActive ? "page" : undefined}
										>
											{item.label}
											{isActive && (
												<motion.div
													layoutId="activeSection"
													className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"
													transition={{
														type: "spring",
														bounce: 0.2,
														duration: 0.6,
													}}
												/>
											)}
										</motion.a>
									);
								})}
							</div>
						</div>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
							aria-expanded={isMenuOpen}
							aria-controls="mobile-menu"
							aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<motion.div
						id="mobile-menu"
						initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"
					>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => {
								const isActive = activeSection === item.href.slice(1);
								return (
									<a
										key={item.label}
										href={item.href}
										onClick={() => setIsMenuOpen(false)}
										className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
											isActive
												? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
												: "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800"
										}`}
										aria-current={isActive ? "page" : undefined}
									>
										{item.label}
									</a>
								);
							})}
						</div>
					</motion.div>
				)}
			</motion.nav>
		</>
	);
}
