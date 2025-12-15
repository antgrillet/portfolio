import { NextResponse } from "next/server";
import { put, del, list } from "@vercel/blob";

interface VercelProject {
	id: string;
	name: string;
	framework: string | null;
	targets?: {
		production?: {
			alias?: string[];
		};
	};
}

interface VercelDomain {
	name: string;
	verified: boolean;
}

// Récupère l'URL de production d'un projet Vercel
async function getProductionUrl(
	project: VercelProject,
	token: string
): Promise<string | null> {
	try {
		const domainsResponse = await fetch(
			`https://api.vercel.com/v9/projects/${project.id}/domains`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);

		if (domainsResponse.ok) {
			const domainsData = await domainsResponse.json();
			const domains: VercelDomain[] = domainsData.domains || [];

			// Prioriser les domaines personnalisés
			const customDomain = domains.find(
				(d) =>
					d.verified &&
					!d.name.includes("antgrillets-projects") &&
					!d.name.includes("-git-")
			);

			if (customDomain) {
				return `https://${customDomain.name}`;
			}

			// Sinon utiliser un domaine .vercel.app public
			const vercelDomain = domains.find(
				(d) =>
					d.verified &&
					d.name.endsWith(".vercel.app") &&
					!d.name.includes("antgrillets-projects")
			);

			if (vercelDomain) {
				return `https://${vercelDomain.name}`;
			}
		}

		// Fallback: utiliser les alias du projet
		if (project.targets?.production?.alias) {
			const publicAlias = project.targets.production.alias.find(
				(alias: string) =>
					!alias.includes("antgrillets-projects") && !alias.includes("-git-")
			);

			if (publicAlias) {
				return `https://${publicAlias}`;
			}
		}
	} catch (error) {
		console.error(
			`Erreur lors de la récupération des domaines pour ${project.name}:`,
			error
		);
	}

	return null;
}

// Prend un screenshot via ApiFlash
async function takeScreenshot(url: string): Promise<ArrayBuffer | null> {
	const apiKey = process.env.APIFLASH_ACCESS_KEY;

	if (!apiKey) {
		console.error("APIFLASH_ACCESS_KEY non configuré");
		return null;
	}

	const screenshotUrl = new URL("https://api.apiflash.com/v1/urltoimage");
	screenshotUrl.searchParams.set("access_key", apiKey);
	screenshotUrl.searchParams.set("url", url);
	screenshotUrl.searchParams.set("delay", "5"); // Attendre 5 secondes
	screenshotUrl.searchParams.set("format", "png");
	screenshotUrl.searchParams.set("width", "1920");
	screenshotUrl.searchParams.set("height", "1080");
	screenshotUrl.searchParams.set("fresh", "true"); // Toujours générer un nouveau screenshot

	console.log(`[ApiFlash] Capture de ${url}...`);

	try {
		const response = await fetch(screenshotUrl.toString());

		console.log(`[ApiFlash] Réponse: ${response.status} ${response.statusText}`);
		console.log(`[ApiFlash] Content-Type: ${response.headers.get("content-type")}`);

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`Erreur ApiFlash pour ${url}: ${response.status} - ${errorText}`);
			return null;
		}

		const buffer = await response.arrayBuffer();
		console.log(`[ApiFlash] Taille image: ${buffer.byteLength} bytes`);
		return buffer;
	} catch (error) {
		console.error(`Erreur lors du screenshot de ${url}:`, error);
		return null;
	}
}

export async function GET(request: Request) {
	// Vérifier l'authentification pour le cron job
	const authHeader = request.headers.get("authorization");

	// En production, Vercel envoie le header avec CRON_SECRET
	// En local, on peut tester sans auth
	if (process.env.CRON_SECRET) {
		if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}
	}

	const vercelToken = process.env.VERCEL_TOKEN;

	if (!vercelToken) {
		return NextResponse.json(
			{ error: "VERCEL_TOKEN non configuré" },
			{ status: 500 }
		);
	}

	try {
		// 1. Récupérer tous les projets Vercel
		const projectsResponse = await fetch(
			"https://api.vercel.com/v9/projects",
			{
				headers: { Authorization: `Bearer ${vercelToken}` },
			}
		);

		if (!projectsResponse.ok) {
			throw new Error(`Erreur API Vercel: ${projectsResponse.status}`);
		}

		const projectsData = await projectsResponse.json();
		const projects: VercelProject[] = projectsData.projects;

		// 2. Récupérer les screenshots existants
		const { blobs: existingBlobs } = await list({
			prefix: "screenshots/",
			token: process.env.BLOB_READ_WRITE_TOKEN,
		});

		const results: {
			project: string;
			status: "success" | "skipped" | "error";
			url?: string;
			error?: string;
		}[] = [];

		// 3. Pour chaque projet, générer un screenshot
		for (const project of projects) {
			const productionUrl = await getProductionUrl(project, vercelToken);
			console.log(`[Cron] Projet ${project.name}: URL = ${productionUrl || "AUCUNE"}`);

			if (!productionUrl) {
				results.push({
					project: project.name,
					status: "skipped",
					error: "Pas d'URL de production",
				});
				continue;
			}

			try {
				// Prendre le screenshot
				const imageBuffer = await takeScreenshot(productionUrl);

				if (!imageBuffer) {
					results.push({
						project: project.name,
						status: "error",
						error: "Échec de la capture",
					});
					continue;
				}

				// Supprimer l'ancien screenshot s'il existe
				const existingBlob = existingBlobs.find(
					(b) => b.pathname === `screenshots/${project.name}.png`
				);

				if (existingBlob) {
					await del(existingBlob.url, {
						token: process.env.BLOB_READ_WRITE_TOKEN,
					});
				}

				// Upload le nouveau screenshot
				const blob = await put(
					`screenshots/${project.name}.png`,
					imageBuffer,
					{
						access: "public",
						contentType: "image/png",
						token: process.env.BLOB_READ_WRITE_TOKEN,
					}
				);

				results.push({
					project: project.name,
					status: "success",
					url: blob.url,
				});
			} catch (error) {
				results.push({
					project: project.name,
					status: "error",
					error: error instanceof Error ? error.message : "Erreur inconnue",
				});
			}
		}

		const successCount = results.filter((r) => r.status === "success").length;
		const errorCount = results.filter((r) => r.status === "error").length;
		const skippedCount = results.filter((r) => r.status === "skipped").length;

		return NextResponse.json({
			message: `Screenshots générés: ${successCount} succès, ${errorCount} erreurs, ${skippedCount} ignorés`,
			results,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error("Erreur lors de l'exécution du cron:", error);
		return NextResponse.json(
			{
				error: "Erreur lors de la génération des screenshots",
				details: error instanceof Error ? error.message : "Erreur inconnue",
			},
			{ status: 500 }
		);
	}
}
