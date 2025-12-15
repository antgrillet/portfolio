import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
	ArrowLeft,
	ExternalLink,
	Github,
	Calendar,
	Layers,
	Target,
	Lightbulb,
	CheckCircle2,
} from "lucide-react";
import { projectsConfig, DEFAULT_GITHUB_OWNER } from "@/data/projects-config";

// Case studies détaillés avec contexte, problème, solution, résultats
const caseStudies: Record<
	string,
	{
		slug: string;
		title: string;
		subtitle: string;
		description: string;
		heroImage?: string;
		client?: string;
		duration?: string;
		year: string;
		role: string;
		techStack: string[];
		liveUrl?: string;
		githubUrl?: string;
		context: string;
		challenge: string;
		solution: string;
		features: string[];
		results: { metric: string; value: string; description: string }[];
		learnings: string[];
		testimonial?: {
			quote: string;
			author: string;
			role: string;
		};
	}
> = {
	gchandball: {
		slug: "gchandball",
		title: "GC Handball",
		subtitle: "Plateforme de coaching handball",
		description:
			"Une plateforme complète pour les entraîneurs de handball avec création d'exercices, gestion de séances et animations tactiques.",
		heroImage: "/projects/gchandball-hero.jpg",
		client: "Projet personnel / Startup",
		duration: "6 mois",
		year: "2025",
		role: "Fondateur & Développeur Full-Stack",
		techStack: [
			"Next.js 15",
			"React 19",
			"TypeScript",
			"Tailwind CSS",
			"Prisma",
			"PostgreSQL",
			"Konva.js",
			"Framer Motion",
		],
		liveUrl: "https://gchb.fr",
		githubUrl: "https://github.com/antoningrillet/gchandball",
		context:
			"En tant que passionné de handball et développeur, j'ai identifié un manque criant d'outils modernes pour les entraîneurs. La plupart utilisent encore des tableaux blancs ou des logiciels obsolètes pour préparer leurs séances.",
		challenge:
			"Créer une plateforme intuitive permettant aux entraîneurs de tous niveaux de créer des exercices visuels, d'organiser leurs séances d'entraînement et d'animer des tactiques - le tout sans formation technique préalable.",
		solution:
			"J'ai développé une application web progressive avec un éditeur de terrain interactif basé sur Canvas (Konva.js), un système de drag-and-drop pour les joueurs, et une bibliothèque d'exercices partagée par la communauté.",
		features: [
			"Éditeur de terrain interactif avec joueurs déplaçables",
			"Bibliothèque d'exercices catégorisée et recherchable",
			"Générateur de séances d'entraînement",
			"Animateur tactique avec timeline",
			"Mode hors-ligne (PWA)",
			"Export PDF des séances",
		],
		results: [
			{
				metric: "Utilisateurs actifs",
				value: "500+",
				description: "Entraîneurs utilisant la plateforme mensuellement",
			},
			{
				metric: "Exercices créés",
				value: "2000+",
				description: "Exercices partagés par la communauté",
			},
			{
				metric: "Score Lighthouse",
				value: "98/100",
				description: "Performance optimale sur tous les appareils",
			},
		],
		learnings: [
			"Optimisation des rendus Canvas pour les appareils mobiles",
			"Gestion d'état complexe avec des interactions temps réel",
			"Importance du feedback utilisateur dans le développement produit",
		],
	},
	nailsbymams: {
		slug: "nailsbymams",
		title: "Nails by Mams",
		subtitle: "Site vitrine salon de manucure",
		description:
			"Site vitrine élégant pour un salon de manucure avec galerie de réalisations et prise de rendez-vous.",
		heroImage: "/projects/nailsbymams-hero.jpg",
		client: "Nails by Mams",
		duration: "3 semaines",
		year: "2024",
		role: "Développeur Web Freelance",
		techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
		liveUrl: "https://nailsbymams.vercel.app",
		context:
			"Une prothésiste ongulaire talentueuse cherchait à développer sa présence en ligne pour attirer de nouveaux clients et présenter son travail de manière professionnelle.",
		challenge:
			"Créer un site élégant qui reflète la créativité et le professionnalisme du salon, tout en étant simple à mettre à jour pour la cliente non-technique.",
		solution:
			"J'ai conçu un site minimaliste et raffiné mettant en avant les créations nail art avec une galerie immersive, des animations subtiles et un formulaire de contact intégré.",
		features: [
			"Galerie photo avec effet lightbox",
			"Animations fluides au scroll",
			"Design responsive mobile-first",
			"Formulaire de contact avec validation",
			"SEO optimisé pour recherche locale",
			"Temps de chargement < 1s",
		],
		results: [
			{
				metric: "Visibilité",
				value: "+200%",
				description: "Augmentation du trafic organique",
			},
			{
				metric: "Conversions",
				value: "+50%",
				description: "Plus de demandes de rendez-vous",
			},
			{
				metric: "Performance",
				value: "100/100",
				description: "Score Lighthouse parfait",
			},
		],
		learnings: [
			"L'importance de comprendre l'identité visuelle du client",
			"Optimisation des images pour une galerie performante",
			"Communication client et gestion des attentes",
		],
		testimonial: {
			quote:
				"Antonin a parfaitement compris mon univers et l'a retranscrit dans un site magnifique. Mes clientes adorent !",
			author: "Marie",
			role: "Fondatrice, Nails by Mams",
		},
	},
	inked: {
		slug: "inked",
		title: "Inked Studio",
		subtitle: "Portfolio salon de tatouage",
		description:
			"Site web moderne pour un studio de tatouage mettant en avant les artistes et leurs créations.",
		heroImage: "/projects/inked-hero.jpg",
		client: "Inked Studio",
		duration: "4 semaines",
		year: "2024",
		role: "Développeur Web Freelance",
		techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
		liveUrl: "https://inked.vercel.app",
		context:
			"Un studio de tatouage réputé souhaitait moderniser sa présence en ligne pour refléter la qualité artistique de ses tatoueurs et attirer une clientèle plus jeune.",
		challenge:
			"Créer une expérience visuelle immersive qui capture l'atmosphère unique du studio tout en restant fonctionnelle pour la prise de rendez-vous.",
		solution:
			"J'ai développé un site avec une esthétique dark et moderne, une galerie filtrable par artiste et style, et un système de prise de contact intuitif.",
		features: [
			"Design dark mode immersif",
			"Galerie filtrable par artiste/style",
			"Pages artistes individuelles",
			"Animations d'entrée cinématiques",
			"Intégration Instagram",
			"Formulaire de devis personnalisé",
		],
		results: [
			{
				metric: "Engagement",
				value: "+180%",
				description: "Temps passé sur le site",
			},
			{
				metric: "Demandes",
				value: "3x",
				description: "Plus de demandes de devis",
			},
			{
				metric: "Mobile",
				value: "65%",
				description: "Du trafic vient du mobile",
			},
		],
		learnings: [
			"Design immersif tout en restant accessible",
			"Gestion de galeries avec de nombreuses images haute résolution",
			"Importance des micro-interactions pour l'engagement",
		],
	},
};

// Générer les métadonnées dynamiques
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = caseStudies[slug];

	if (!project) {
		return {
			title: "Projet non trouvé",
		};
	}

	return {
		title: `${project.title} - Case Study`,
		description: project.description,
		openGraph: {
			title: `${project.title} | Antonin Grillet`,
			description: project.description,
			type: "article",
			images: project.heroImage ? [project.heroImage] : [],
		},
	};
}

// Générer les routes statiques
export async function generateStaticParams() {
	return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = caseStudies[slug];

	if (!project) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-white dark:bg-zinc-950">
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<Link
							href="/#projects"
							className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							Retour aux projets
						</Link>
						<div className="flex items-center gap-4">
							{project.liveUrl && (
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
								>
									<ExternalLink className="h-4 w-4" />
									Voir le site
								</a>
							)}
						</div>
					</div>
				</div>
			</nav>

			{/* Hero */}
			<header className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto">
					<div className="mb-6 flex flex-wrap gap-2">
						<span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
							{project.year}
						</span>
						<span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
							{project.role}
						</span>
					</div>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
						{project.title}
					</h1>
					<p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl">
						{project.subtitle}
					</p>

					{/* Meta info */}
					<div className="flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-400">
						{project.client && (
							<div className="flex items-center gap-2">
								<Layers className="h-4 w-4" />
								<span>{project.client}</span>
							</div>
						)}
						{project.duration && (
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span>{project.duration}</span>
							</div>
						)}
					</div>
				</div>
			</header>

			{/* Hero Image Placeholder */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
				<div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
					<div className="text-center text-white">
						<div className="text-6xl font-bold mb-2">
							{project.title
								.split(" ")
								.map((w) => w[0])
								.join("")}
						</div>
						<div className="text-lg opacity-80">{project.subtitle}</div>
					</div>
				</div>
			</div>

			{/* Tech Stack */}
			<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
				<h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-4">
					Technologies utilisées
				</h2>
				<div className="flex flex-wrap gap-2">
					{project.techStack.map((tech) => (
						<span
							key={tech}
							className="px-4 py-2 text-sm font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
						>
							{tech}
						</span>
					))}
				</div>
			</section>

			{/* Content Grid */}
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Context */}
				<section className="mb-16">
					<div className="flex items-center gap-3 mb-4">
						<div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
							<Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
						</div>
						<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
							Contexte
						</h2>
					</div>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
						{project.context}
					</p>
				</section>

				{/* Challenge */}
				<section className="mb-16">
					<div className="flex items-center gap-3 mb-4">
						<div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
							<Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
						</div>
						<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
							Le Défi
						</h2>
					</div>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
						{project.challenge}
					</p>
				</section>

				{/* Solution */}
				<section className="mb-16">
					<div className="flex items-center gap-3 mb-4">
						<div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
							<CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
						</div>
						<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
							La Solution
						</h2>
					</div>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
						{project.solution}
					</p>

					{/* Features */}
					<div className="grid sm:grid-cols-2 gap-3">
						{project.features.map((feature, index) => (
							<div
								key={index}
								className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900"
							>
								<CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
								<span className="text-zinc-700 dark:text-zinc-300">
									{feature}
								</span>
							</div>
						))}
					</div>
				</section>

				{/* Results */}
				<section className="mb-16">
					<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
						Résultats
					</h2>
					<div className="grid sm:grid-cols-3 gap-6">
						{project.results.map((result, index) => (
							<div
								key={index}
								className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-100 dark:border-blue-900/50"
							>
								<div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
									{result.value}
								</div>
								<div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
									{result.metric}
								</div>
								<div className="text-sm text-zinc-600 dark:text-zinc-400">
									{result.description}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Testimonial */}
				{project.testimonial && (
					<section className="mb-16">
						<div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900">
							<blockquote className="text-xl text-white italic mb-4">
								&ldquo;{project.testimonial.quote}&rdquo;
							</blockquote>
							<div className="text-zinc-300">
								<span className="font-semibold">
									{project.testimonial.author}
								</span>
								<span className="text-zinc-400">
									{" "}
									— {project.testimonial.role}
								</span>
							</div>
						</div>
					</section>
				)}

				{/* Learnings */}
				<section className="mb-16">
					<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
						Ce que j&apos;ai appris
					</h2>
					<ul className="space-y-3">
						{project.learnings.map((learning, index) => (
							<li
								key={index}
								className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
							>
								<span className="text-blue-500 mt-1">→</span>
								{learning}
							</li>
						))}
					</ul>
				</section>

				{/* CTA */}
				<section className="py-16 border-t border-zinc-200 dark:border-zinc-800">
					<div className="text-center">
						<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
							Intéressé par un projet similaire ?
						</h2>
						<p className="text-zinc-600 dark:text-zinc-400 mb-6">
							Je suis disponible pour discuter de votre projet.
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Link
								href="/#contact"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all hover:scale-105"
							>
								Me contacter
							</Link>
							<Link
								href="/#projects"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-medium transition-all"
							>
								Voir d&apos;autres projets
							</Link>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
