import { NextResponse } from "next/server";
import { list } from "@vercel/blob";
import { Project, VercelProject } from "@/data/projects";
import {
	projectsConfig,
	DEFAULT_GITHUB_OWNER,
} from "@/data/projects-config";

// Type pour les blobs du Vercel Blob storage
interface BlobItem {
	url: string;
	pathname: string;
}

interface GitHubRepo {
	name: string;
	description: string | null;
	topics: string[];
	language: string | null;
	stargazers_count: number;
	html_url: string;
}

interface VercelDomain {
	name: string;
	verified: boolean;
}

async function fetchGitHubData(
	owner: string,
	repo: string
): Promise<GitHubRepo | null> {
	try {
		const response = await fetch(
			`https://api.github.com/repos/${owner}/${repo}`,
			{
				headers: {
					Accept: "application/vnd.github.v3+json",
					"User-Agent": "Portfolio-App",
				},
				next: { revalidate: 3600 }, // Cache 1 heure
			}
		);

		if (!response.ok) {
			console.warn(
				`Impossible de récupérer les données GitHub pour ${owner}/${repo}`
			);
			return null;
		}

		return await response.json();
	} catch (error) {
		console.error(`Erreur GitHub pour ${owner}/${repo}:`, error);
		return null;
	}
}

function buildTechStack(
	framework: string | null,
	language: string | null,
	topics: string[]
): string[] {
	const techStack = new Set<string>();

	// Ajouter le framework principal
	if (framework) {
		const frameworkMap: Record<string, string> = {
			nextjs: "Next.js",
			react: "React",
			vue: "Vue.js",
			nuxt: "Nuxt",
			gatsby: "Gatsby",
			svelte: "Svelte",
			astro: "Astro",
		};
		techStack.add(frameworkMap[framework.toLowerCase()] || framework);
	}

	// Ajouter le langage
	if (language) {
		techStack.add(language);
	}

	// Extraire les technologies depuis les topics GitHub
	const techTopics = [
		"typescript",
		"javascript",
		"react",
		"vue",
		"nextjs",
		"tailwindcss",
		"nodejs",
		"mongodb",
		"postgresql",
		"prisma",
		"supabase",
		"firebase",
		"graphql",
		"redux",
		"zustand",
	];

	topics.forEach((topic) => {
		if (techTopics.includes(topic.toLowerCase())) {
			const topicMap: Record<string, string> = {
				nextjs: "Next.js",
				tailwindcss: "Tailwind CSS",
				nodejs: "Node.js",
				mongodb: "MongoDB",
				postgresql: "PostgreSQL",
			};
			techStack.add(
				topicMap[topic.toLowerCase()] ||
					topic.charAt(0).toUpperCase() + topic.slice(1)
			);
		}
	});

	return Array.from(techStack).slice(0, 6); // Limiter à 6 technologies
}

export async function GET() {
	const token = process.env.VERCEL_TOKEN;

	if (!token) {
		return NextResponse.json(
			{ error: "VERCEL_TOKEN non configuré" },
			{ status: 500 }
		);
	}

	try {
		// Récupérer les screenshots depuis Vercel Blob
		let screenshotBlobs: BlobItem[] = [];
		try {
			const blobResult = await list({
				prefix: "screenshots/",
				token: process.env.BLOB_READ_WRITE_TOKEN,
			});
			screenshotBlobs = blobResult.blobs;
		} catch {
			console.warn("Impossible de récupérer les screenshots depuis Blob");
		}

		const response = await fetch("https://api.vercel.com/v9/projects", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			next: { revalidate: 300 },
		});

		if (!response.ok) {
			throw new Error(`Erreur API Vercel: ${response.status}`);
		}

		const data = await response.json();
		const projects: VercelProject[] = data.projects;

		// Enrichir chaque projet avec les données GitHub
		const enrichedProjects = await Promise.all(
			projects.map(async (project) => {
				// Chercher une config personnalisée pour ce projet
				const config = projectsConfig.find(
					(c) => c.vercelName === project.name
				);

				// Récupérer l'URL publique du projet
				let productionUrl: string | undefined;

				try {
					// 1. Essayer de récupérer les domaines personnalisés
					const domainsResponse = await fetch(
						`https://api.vercel.com/v9/projects/${project.id}/domains`,
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
							next: { revalidate: 300 },
						}
					);

					if (domainsResponse.ok) {
						const domainsData = await domainsResponse.json();
						const domains: VercelDomain[] = domainsData.domains || [];

						// Prioriser les domaines personnalisés (non-vercel)
						const customDomain = domains.find(
							(d) =>
								d.verified &&
								!d.name.includes("antgrillets-projects") &&
								!d.name.includes("-git-")
						);

						if (customDomain) {
							productionUrl = customDomain.name;
						} else {
							// Sinon, utiliser un domaine .vercel.app public
							const vercelDomain = domains.find(
								(d) =>
									d.verified &&
									d.name.endsWith(".vercel.app") &&
									!d.name.includes("antgrillets-projects")
							);

							if (vercelDomain) {
								productionUrl = vercelDomain.name;
							}
						}
					}

					// 2. Si pas de domaine trouvé, utiliser les alias du projet
					if (!productionUrl && project.targets?.production?.alias) {
						const aliases = project.targets.production.alias;
						// Chercher un alias public (sans -antgrillets-projects)
						const publicAlias = aliases.find(
							(alias: string) =>
								!alias.includes("antgrillets-projects") &&
								!alias.includes("-git-")
						);

						if (publicAlias) {
							productionUrl = publicAlias;
						}
					}
				} catch {
					console.warn(
						`Impossible de récupérer les domaines pour ${project.name}`
					);
				}

				let githubUrl: string | undefined;
				let owner: string | undefined;
				let repoName: string | undefined;

				// 1. Essayer d'obtenir le repo depuis la config personnalisée
				if (config?.githubOwner) {
					owner = config.githubOwner;
					repoName = config.githubRepo || project.name;
					githubUrl = `https://github.com/${owner}/${repoName}`;
				}
				// 2. Essayer d'obtenir le repo depuis le link Vercel
				else if (project.link?.repo) {
					owner = project.link.org || project.link.repo.split("/")[0];
					repoName = project.name;
					githubUrl = `https://github.com/${owner}/${repoName}`;
				}
				// 3. Utiliser le owner par défaut
				else {
					owner = DEFAULT_GITHUB_OWNER;
					repoName = project.name;
					githubUrl = `https://github.com/${owner}/${repoName}`;
				}

				// Récupérer les données GitHub automatiquement
				let githubData: GitHubRepo | null = null;
				if (owner && repoName) {
					githubData = await fetchGitHubData(owner, repoName);
				}

				// Construire la description automatiquement
				const description =
					config?.description ||
					githubData?.description ||
					`Application ${project.framework || "web"} déployée sur Vercel`;

				// Construire le tech stack automatiquement
				let techStack = buildTechStack(
					project.framework,
					githubData?.language || null,
					githubData?.topics || []
				);

				// Ajouter les technologies additionnelles de la config
				if (config?.additionalTech) {
					techStack = [
						...new Set([...techStack, ...config.additionalTech]),
					].slice(0, 6);
				}

				// Générer automatiquement l'URL du screenshot
				const liveUrl = productionUrl ? `https://${productionUrl}` : undefined;

				// Chercher le screenshot dans Vercel Blob, sinon fallback sur Thum.io
				const blobScreenshot = screenshotBlobs.find(
					(b) => b.pathname === `screenshots/${project.name}.png`
				);
				const imageUrl = blobScreenshot?.url
					? blobScreenshot.url
					: liveUrl
					? `https://image.thum.io/get/width/1920/crop/1080/noanimate/${liveUrl}`
					: undefined;

				return {
					id: project.id,
					title: project.name
						.split("-")
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" "),
					description,
					longDescription: config?.longDescription,
					techStack,
					liveUrl,
					githubUrl,
					imageUrl,
					framework: project.framework || undefined,
					updatedAt: new Date(project.updatedAt).toISOString(),
					featured:
						config?.featured !== undefined
							? config.featured
							: (githubData?.stargazers_count || 0) > 5,
				} as Project;
			})
		);

		// Trier par date de mise à jour (plus récents en premier)
		enrichedProjects.sort(
			(a, b) =>
				new Date(b.updatedAt || 0).getTime() -
				new Date(a.updatedAt || 0).getTime()
		);

		return NextResponse.json({
			projects: enrichedProjects,
			count: enrichedProjects.length,
		});
	} catch (error) {
		console.error("Erreur lors de la récupération des projets:", error);
		return NextResponse.json(
			{
				error: "Impossible de récupérer les projets",
				details: error instanceof Error ? error.message : "Erreur inconnue",
			},
			{ status: 500 }
		);
	}
}
