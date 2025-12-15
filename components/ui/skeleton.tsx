import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
	return (
		<div
			className={cn(
				"animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800",
				className
			)}
			{...props}
		/>
	);
}

export function ProjectCardSkeleton() {
	return (
		<div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
			{/* Image skeleton */}
			<Skeleton className="aspect-video w-full" />

			{/* Content skeleton */}
			<div className="p-6 space-y-4">
				{/* Title */}
				<Skeleton className="h-6 w-3/4" />

				{/* Description */}
				<div className="space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
				</div>

				{/* Tech badges */}
				<div className="flex flex-wrap gap-2">
					<Skeleton className="h-6 w-16 rounded-full" />
					<Skeleton className="h-6 w-20 rounded-full" />
					<Skeleton className="h-6 w-14 rounded-full" />
				</div>
			</div>
		</div>
	);
}

export function ProjectGridSkeleton() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{Array.from({ length: 6 }).map((_, i) => (
				<ProjectCardSkeleton key={i} />
			))}
		</div>
	);
}
