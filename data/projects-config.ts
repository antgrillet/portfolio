/**
 * Configuration optionnelle pour enrichir les projets Vercel
 * Si vos projets ne sont pas liés à GitHub dans Vercel,
 * vous pouvez manuellement spécifier les informations ici.
 */

export interface ProjectConfig {
	/** Nom du projet dans Vercel (doit correspondre exactement) */
	vercelName: string;
	/** Username GitHub (si différent de celui configuré dans Vercel) */
	githubOwner?: string;
	/** Nom du repo GitHub (par défaut: vercelName) */
	githubRepo?: string;
	/** Description personnalisée (si différente de celle de GitHub) */
	description?: string;
	/** Description longue pour la page de détails */
	longDescription?: string;
	/** Technologies à afficher (en plus de celles détectées) */
	additionalTech?: string[];
	/** Marquer comme projet featured */
	featured?: boolean;
}

/**
 * Configuration des projets
 * Ajoutez ici les projets que vous voulez enrichir manuellement
 *
 * Pour personnaliser vos projets:
 * 1. Visitez chaque site depuis Vercel
 * 2. Ajoutez une description qui explique ce que fait le projet
 * 3. Listez les technologies utilisées
 * 4. Marquez comme "featured" vos meilleurs projets
 */
export const projectsConfig: ProjectConfig[] = [
	{
		vercelName: "gchandball",
		description: "Plateforme de coaching handball - gchb.fr - pour améliorer vos performances et développer vos compétences",
		longDescription: "Plateforme complète de coaching handball avec programmes d'entraînement personnalisés, vidéos techniques, suivi de progression et conseils d'experts pour joueurs de tous niveaux.",
		additionalTech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
		featured: true,
	},
	{
		vercelName: "nailsbymams",
		description: "Site vitrine pour un salon de manucure professionnel avec galerie de réalisations et système de prise de rendez-vous",
		longDescription: "Plateforme élégante présentant les services de manucure, avec galerie photo des créations, tarifs détaillés et formulaire de contact pour les réservations.",
		additionalTech: ["Next.js", "TypeScript", "Tailwind CSS"],
		featured: true,
	},
	{
		vercelName: "inked",
		description: "Portfolio pour un salon de tatouage mettant en avant les artistes et leurs créations",
		longDescription: "Site web moderne pour studio de tatouage avec galerie des réalisations, présentation des artistes, formulaire de contact et informations pratiques.",
		additionalTech: ["Next.js", "React", "Tailwind CSS"],
		featured: true,
	},
	{
		vercelName: "the-hub",
		description: "Site de location de matériel de ski et magazine sportif en ligne",
		longDescription: "Plateforme complète proposant la location d'équipements de ski et un magazine en ligne avec actualités, tests matériels et conseils pour les passionnés de sports d'hiver.",
		additionalTech: ["React", "TypeScript"],
		featured: false,
	},
	{
		vercelName: "aix-en-savoie",
		description: "Site de présentation dédié au handball avec actualités, équipes et résultats",
		longDescription: "Plateforme d'information sur le handball présentant les équipes, calendriers de matchs, résultats et actualités du monde du handball.",
		additionalTech: ["Next.js", "React", "TypeScript"],
		featured: false,
	},
	{
		vercelName: "handle",
		description: "Site web spécialisé dans l'univers du handball avec actualités et ressources",
		longDescription: "Plateforme dédiée au handball proposant actualités, analyses, interviews et ressources pour les joueurs et passionnés de ce sport.",
		additionalTech: ["React", "TypeScript"],
		featured: false,
	},
	{
		vercelName: "portfolio",
		description: "Portfolio personnel présentant mes projets et compétences en développement web",
		additionalTech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
		featured: false,
	},
];

/**
 * Username GitHub par défaut
 * Utilisé si aucun owner n'est spécifié dans la config
 */
export const DEFAULT_GITHUB_OWNER = "antoningrillet";
