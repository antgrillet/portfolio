"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoCarouselProps {
	images: string[];
	alt: string;
	autoPlayInterval?: number;
}

export function PhotoCarousel({
	images,
	alt,
	autoPlayInterval = 4500,
}: PhotoCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	// Auto-play
	useEffect(() => {
		const timer = setInterval(() => {
			handleNext();
		}, autoPlayInterval);

		return () => clearInterval(timer);
	}, [currentIndex, autoPlayInterval]);

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % images.length);
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const handleDotClick = (index: number) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? "100%" : "-100%",
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction > 0 ? "-100%" : "100%",
			opacity: 0,
		}),
	};

	return (
		<div className="relative">
			{/* Glow effect animé */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse" />

			{/* Container de la photo */}
			<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						key={currentIndex}
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.3 },
						}}
						className="absolute inset-0"
					>
						{/* Placeholder ou vraie image */}
						{images[currentIndex] ? (
							<Image
								src={images[currentIndex]}
								alt={`${alt} ${currentIndex + 1}`}
								fill
								className="object-cover"
								priority={currentIndex === 0}
							/>
						) : (
							<div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
								<span className="text-8xl font-bold text-white">AG</span>
							</div>
						)}
					</motion.div>
				</AnimatePresence>

				{/* Navigation arrows - visible au hover */}
				{images.length > 1 && (
					<>
						<button
							onClick={handlePrev}
							className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-white dark:hover:bg-zinc-700 transition-all shadow-lg"
							aria-label="Photo précédente"
						>
							<ChevronLeft className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
						</button>

						<button
							onClick={handleNext}
							className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-white dark:hover:bg-zinc-700 transition-all shadow-lg"
							aria-label="Photo suivante"
						>
							<ChevronRight className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
						</button>
					</>
				)}
			</div>

			{/* Dots indicateurs */}
			{images.length > 1 && (
				<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => handleDotClick(index)}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								index === currentIndex
									? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
									: "bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
							}`}
							aria-label={`Voir photo ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
