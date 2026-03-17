"use client";

import { useEffect, useState } from "react";
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

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (currentDirection: number) => ({
      x: currentDirection > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (currentDirection: number) => ({
      x: currentDirection > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="group relative w-full max-w-[420px]">
      <div className="absolute inset-0 -z-10 rounded-[1.5rem] bg-[radial-gradient(circle_at_center,_rgba(103,146,255,0.28),_transparent_68%)] blur-3xl" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/70 shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
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
            {images[currentIndex] ? (
              <Image
                src={images[currentIndex]}
                alt={`${alt} ${currentIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 420px"
                priority={currentIndex === 0}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-900">
                <span className="text-8xl font-bold text-white">AG</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_26%,rgba(0,0,0,0.24)_100%)]" />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-white/70 text-zinc-800 backdrop-blur-md transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-white/70 text-zinc-800 backdrop-blur-md transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Photo suivante"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentIndex
                  ? "h-2.5 w-10 bg-zinc-950"
                  : "h-2.5 w-2.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Voir photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
