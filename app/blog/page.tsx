import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Articles sur le développement web, React, Next.js, TypeScript et les bonnes pratiques.",
};

// Articles de blog (à remplacer par un CMS ou MDX plus tard)
const articles = [
	{
		slug: "pourquoi-nextjs-2025",
		title: "Pourquoi Next.js est le meilleur choix en 2025",
		excerpt:
			"Découvrez pourquoi Next.js continue de dominer l'écosystème React avec les Server Components, le streaming, et les optimisations automatiques.",
		date: "2025-01-10",
		readTime: "5 min",
		category: "Next.js",
		featured: true,
	},
	{
		slug: "react-server-components-guide",
		title: "Guide complet des React Server Components",
		excerpt:
			"Tout ce que vous devez savoir sur les RSC : quand les utiliser, comment les combiner avec les Client Components, et les pièges à éviter.",
		date: "2025-01-05",
		readTime: "8 min",
		category: "React",
		featured: true,
	},
	{
		slug: "tailwind-css-tips",
		title: "10 astuces Tailwind CSS pour un code plus propre",
		excerpt:
			"Des patterns et astuces pour écrire du Tailwind CSS maintenable et éviter les classes à rallonge.",
		date: "2024-12-20",
		readTime: "4 min",
		category: "CSS",
		featured: false,
	},
	{
		slug: "typescript-generics",
		title: "Maîtriser les Generics TypeScript",
		excerpt:
			"Les generics TypeScript démystifiés avec des exemples concrets et des patterns réutilisables.",
		date: "2024-12-15",
		readTime: "6 min",
		category: "TypeScript",
		featured: false,
	},
];

export default function BlogPage() {
	const featuredArticles = articles.filter((a) => a.featured);
	const otherArticles = articles.filter((a) => !a.featured);

	return (
		<main className="min-h-screen bg-white dark:bg-zinc-950">
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							Retour au portfolio
						</Link>
						<span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
							Blog
						</span>
					</div>
				</div>
			</nav>

			{/* Header */}
			<header className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
						Blog
					</h1>
					<p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						Réflexions sur le développement web, tutoriels et retours
						d&apos;expérience.
					</p>
				</div>
			</header>

			{/* Featured Articles */}
			<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
				<h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-6">
					Articles à la une
				</h2>
				<div className="grid md:grid-cols-2 gap-6">
					{featuredArticles.map((article) => (
						<article
							key={article.slug}
							className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 hover:shadow-xl transition-all"
						>
							<div className="mb-4">
								<span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
									{article.category}
								</span>
							</div>
							<h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
								{article.title}
							</h3>
							<p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
								{article.excerpt}
							</p>
							<div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
								<span className="flex items-center gap-1">
									<Calendar className="h-4 w-4" />
									{new Date(article.date).toLocaleDateString("fr-FR", {
										day: "numeric",
										month: "short",
										year: "numeric",
									})}
								</span>
								<span className="flex items-center gap-1">
									<Clock className="h-4 w-4" />
									{article.readTime}
								</span>
							</div>
							<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
								<ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
							</div>
						</article>
					))}
				</div>
			</section>

			{/* All Articles */}
			<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
				<h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-6">
					Tous les articles
				</h2>
				<div className="space-y-4">
					{otherArticles.map((article) => (
						<article
							key={article.slug}
							className="group flex items-center gap-6 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
						>
							<div className="flex-1">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-xs font-medium text-blue-600 dark:text-blue-400">
										{article.category}
									</span>
									<span className="text-zinc-300 dark:text-zinc-700">•</span>
									<span className="text-xs text-zinc-500">
										{article.readTime}
									</span>
								</div>
								<h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									{article.title}
								</h3>
							</div>
							<div className="text-sm text-zinc-500 dark:text-zinc-500 whitespace-nowrap">
								{new Date(article.date).toLocaleDateString("fr-FR", {
									day: "numeric",
									month: "short",
								})}
							</div>
							<ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
						</article>
					))}
				</div>
			</section>

			{/* Coming Soon Notice */}
			<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
				<div className="text-center p-8 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800">
					<p className="text-zinc-600 dark:text-zinc-400 mb-2">
						🚧 Blog en cours de construction
					</p>
					<p className="text-sm text-zinc-500 dark:text-zinc-500">
						Les articles arrivent bientôt ! En attendant, retrouvez-moi sur{" "}
						<a
							href="https://linkedin.com/in/antoningrillet"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 dark:text-blue-400 hover:underline"
						>
							LinkedIn
						</a>
						.
					</p>
				</div>
			</section>
		</main>
	);
}
