import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { BackButton } from "@/components/BackButton";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:from-zinc-950 dark:via-blue-950 dark:to-purple-950">
			<div className="text-center px-4">
				{/* Animated 404 */}
				<div className="relative mb-8">
					<h1 className="text-[150px] md:text-[200px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 leading-none select-none">
						404
					</h1>
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
				</div>

				{/* Message */}
				<h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
					Page introuvable
				</h2>
				<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
					Oups ! La page que vous recherchez semble avoir disparu dans le code.
					Peut-être qu&apos;elle est partie en vacances ? 🏖️
				</p>

				{/* Fun message */}
				<div className="mb-8 p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 max-w-md mx-auto">
					<code className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
						<span className="text-red-500">Error:</span> Page not found at{" "}
						<span className="text-blue-500">this.location</span>
						<br />
						<span className="text-green-500">Suggestion:</span> Return to
						homepage and try again
					</code>
				</div>

				{/* Actions */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						<Home className="h-5 w-5" />
						Retour à l&apos;accueil
					</Link>
					<BackButton />
				</div>

				{/* Easter egg */}
				<p className="mt-12 text-sm text-zinc-400 dark:text-zinc-600">
					💡 Tip: Si vous cherchez un développeur, vous êtes au bon endroit !
				</p>
			</div>
		</div>
	);
}
