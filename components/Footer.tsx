export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-8 bg-gradient-to-r from-zinc-900 via-blue-900 to-purple-900 dark:from-zinc-950 dark:via-blue-950 dark:to-purple-950 border-t border-zinc-800 dark:border-zinc-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<p className="text-zinc-300 dark:text-zinc-400">
					© {currentYear} Antonin Grillet. Tous droits réservés. Déployé avec
					💜 sur Vercel.
				</p>
			</div>
		</footer>
	);
}
