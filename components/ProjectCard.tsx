"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  imageUrl?: string;
  updatedAt?: string;
  featured?: boolean;
  compact?: boolean;
  priority?: boolean;
  /** Carte claire type « atelier » (bento) */
  editorial?: boolean;
}

function formatDate(date?: string) {
  if (!date) {
    return null;
  }

  try {
    return new Intl.DateTimeFormat("fr-FR", {
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return null;
  }
}

function hashTitle(title: string) {
  return title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function getWarmGradientForTitle(title: string): string {
  const gradients = [
    "from-amber-100/95 via-orange-100/90 to-stone-200/90",
    "from-stone-200/95 via-orange-50/90 to-amber-100/90",
    "from-sky-100/90 via-stone-100/95 to-orange-50/85",
    "from-orange-50/95 via-amber-100/90 to-sky-50/90",
  ];
  return gradients[hashTitle(title) % gradients.length];
}

function getDarkGradientForTitle(title: string): string {
  const gradients = [
    "from-sky-500/90 via-blue-500/75 to-indigo-500/80",
    "from-zinc-800 via-zinc-900 to-blue-700/80",
    "from-cyan-500/80 via-sky-500/70 to-indigo-600/80",
    "from-blue-500/70 via-violet-500/70 to-zinc-900",
  ];
  return gradients[hashTitle(title) % gradients.length];
}

export function ProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  imageUrl,
  updatedAt,
  featured = false,
  compact = false,
  priority = false,
  editorial = false,
}: ProjectCardProps) {
  const formattedDate = formatDate(updatedAt);
  const warmGradient = getWarmGradientForTitle(title);
  const darkGradient = getDarkGradientForTitle(title);
  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

  if (editorial) {
    const aspectClass = featured
      ? "aspect-[16/11] min-h-[200px] sm:min-h-[240px]"
      : compact
        ? "aspect-[16/10] min-h-[160px]"
        : "aspect-[16/10] min-h-[180px]";

    const article = (
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-stone-200/90 bg-white shadow-[0_6px_0_rgba(28,27,25,0.04),0_24px_50px_rgba(28,27,25,0.07)]"
      >
        <div className={`relative w-full overflow-hidden ${aspectClass}`}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes={
                featured
                  ? "(max-width: 1024px) 100vw, 58vw"
                  : "(max-width: 1024px) 100vw, 33vw"
              }
              priority={priority}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${warmGradient}`}
            >
              <span className="font-display text-4xl font-semibold text-stone-700/90 sm:text-5xl">
                {initials}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-stone-200/90 bg-stone-50/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-stone-600">
              {featured ? "Mis en avant" : "Site en ligne"}
            </span>
            {liveUrl ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#b84328]">
                Ouvrir
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, compact ? 3 : 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-stone-200/80 bg-[#faf7f2] px-2.5 py-1 text-xs font-medium text-stone-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3
            className={`font-display mt-4 text-balance font-semibold text-stone-900 ${
              featured ? "text-2xl leading-tight sm:text-3xl" : "text-xl"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 flex-1 text-pretty text-stone-600 ${
              compact ? "text-sm leading-6" : "text-base leading-7"
            }`}
          >
            {description}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-200/80 pt-4 text-sm text-stone-500">
            <span>
              {formattedDate ? `Mis à jour ${formattedDate}` : "En ligne"}
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-[#b84328]">
              Voir le projet
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </motion.article>
    );

    if (!liveUrl) {
      return article;
    }

    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full cursor-pointer rounded-[1.25rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b2b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0ebe3]"
      >
        {article}
      </a>
    );
  }

  const content = (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative h-full overflow-hidden rounded-[1.25rem] border border-white/12 bg-white/8 shadow-[0_30px_70px_rgba(0,0,0,0.22)] backdrop-blur-md ${
        featured ? "min-h-[420px]" : compact ? "min-h-[240px]" : "min-h-[300px]"
      }`}
    >
      <div className="absolute inset-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 60vw"
                : "(max-width: 1024px) 100vw, 33vw"
            }
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${darkGradient}`}
          >
            <span className="text-6xl font-semibold text-white/92">
              {initials}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.28)_34%,rgba(2,6,23,0.84)_100%)]" />
      </div>

      <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex rounded-full border border-white/[0.18] bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/90">
            {featured ? "Projet mis en avant" : "Site en ligne"}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-black/10 px-3 py-1 text-xs font-medium text-white/70">
            Ouvrir
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, compact ? 3 : 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.14] bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div>
            <h3
              className={`max-w-xl text-balance font-semibold text-white ${
                featured ? "text-3xl leading-tight md:text-4xl" : "text-xl"
              }`}
            >
              {title}
            </h3>
            <p
              className={`mt-3 max-w-xl text-white/75 ${
                compact ? "text-sm leading-6" : "text-base leading-7"
              }`}
            >
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 text-sm text-white/64">
            <span>
              {formattedDate ? `Mis à jour ${formattedDate}` : "En ligne"}
            </span>
            <span className="inline-flex items-center gap-1 font-medium text-white">
              Voir le projet
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );

  if (!liveUrl) {
    return content;
  }

  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full cursor-pointer rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#05070b]"
    >
      {content}
    </a>
  );
}
