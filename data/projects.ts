export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  framework?: string;
  updatedAt?: string;
}

export interface VercelProject {
	id: string;
	name: string;
	accountId: string;
	updatedAt: number;
	createdAt: number;
	framework: string | null;
	link?: {
		type: string;
		repo: string;
		repoId: number;
		org?: string;
		gitCredentialId?: string;
		productionBranch?: string;
	};
	latestDeployments?: Array<{
		uid: string;
		url: string;
		name: string;
		createdAt: number;
		state: string;
		ready: number;
	}>;
	targets?: {
		production?: {
			alias?: string[];
			url?: string;
			readyState?: string;
		};
	};
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce moderne avec paiement intégré et gestion des stocks en temps réel.",
    longDescription: "Application e-commerce complète développée avec Next.js et Stripe. Inclut un tableau de bord admin, gestion des produits, panier persistant et système de paiement sécurisé.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/antoningrillet/ecommerce",
    imageUrl: "/projects/ecommerce.jpg",
    featured: true,
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "Dashboard analytique pour SaaS avec visualisation de données en temps réel et rapports personnalisés.",
    longDescription: "Solution complète de business intelligence pour entreprises SaaS. Intégration avec multiples sources de données, visualisations interactives et exports automatisés.",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB", "Redis"],
    liveUrl: "https://saas-analytics.vercel.app",
    githubUrl: "https://github.com/antoningrillet/saas-dashboard",
    imageUrl: "/projects/saas.jpg",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec synchronisation en temps réel.",
    longDescription: "Outil de productivité complet avec gestion d'équipes, tableaux Kanban, calendrier intégré et notifications push.",
    techStack: ["Vue.js", "Nuxt", "Supabase", "Tailwind CSS", "WebSockets"],
    liveUrl: "https://taskflow.vercel.app",
    githubUrl: "https://github.com/antoningrillet/taskflow",
    imageUrl: "/projects/taskflow.jpg",
    featured: false,
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    description: "Générateur de portfolios personnalisables avec thèmes et animations.",
    longDescription: "Outil no-code permettant de créer des portfolios professionnels en quelques clics. Multiples templates, éditeur visuel et déploiement automatique.",
    techStack: ["Next.js", "Framer Motion", "MDX", "Vercel", "TypeScript"],
    liveUrl: "https://portfolio-gen.vercel.app",
    githubUrl: "https://github.com/antoningrillet/portfolio-generator",
    imageUrl: "/projects/portfolio.jpg",
    featured: false,
  },
  {
    id: "blog-platform",
    title: "Modern Blog Platform",
    description: "Plateforme de blog avec CMS headless, SEO optimisé et performance maximale.",
    longDescription: "Solution de blogging moderne avec éditeur Markdown, gestion des médias, commentaires et système de newsletter intégré.",
    techStack: ["Astro", "React", "Contentful", "Tailwind CSS", "Cloudflare"],
    liveUrl: "https://blog-platform.vercel.app",
    githubUrl: "https://github.com/antoningrillet/blog-platform",
    imageUrl: "/projects/blog.jpg",
    featured: false,
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support",
    description: "Chatbot IA pour support client avec intégration multi-canal et apprentissage continu.",
    longDescription: "Assistant virtuel intelligent capable de gérer les requêtes clients, avec intégration CRM et escalade automatique vers agents humains.",
    techStack: ["Python", "FastAPI", "OpenAI", "Redis", "PostgreSQL", "Docker"],
    liveUrl: "https://ai-support.vercel.app",
    githubUrl: "https://github.com/antoningrillet/ai-support",
    imageUrl: "/projects/ai-chat.jpg",
    featured: true,
  },
];
