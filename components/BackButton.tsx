"use client";

import { ArrowLeft } from "lucide-react";

export function BackButton() {
	return (
		<button
			onClick={() => window.history.back()}
			className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
		>
			<ArrowLeft className="h-5 w-5" />
			Page précédente
		</button>
	);
}
