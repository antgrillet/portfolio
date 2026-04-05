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

function getGradientForTitle(title: string): string {
  const gradients = [
    "from-sky-500/90 via-blue-500/75 to-indigo-500/80",
    "from-zinc-800 via-zinc-900 to-blue-700/80",
    "from-cyan-500/80 via-sky-500/70 to-indigo-600/80",
    "from-blue-500/70 via-violet-500/70 to-zinc-900",
  ];

  const hash = title
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return gradients[hash % gradients.length];
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
}: ProjectCardProps) {
  const formattedDate = formatDate(updatedAt);
  const gradient = getGradientForTitle(title);
  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

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
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
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
