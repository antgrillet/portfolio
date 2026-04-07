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
  if (!date) return null;
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return null;
  }
}

function getGradientForTitle(title: string): string {
  const gradients = [
    "from-primary/20 to-primary/5",
    "from-purple-100 to-indigo-50",
    "from-zinc-100 to-white",
    "from-indigo-100 to-purple-50",
  ];
  const hash = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
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
  const gradient = getGradientForTitle(title);
  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

  const content = (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-sm transition-all hover:shadow-xl hover:border-primary/20 ${
        featured ? "min-h-[400px]" : "min-h-[320px]"
      }`}
    >
      <div className={`relative w-full overflow-hidden ${featured ? "h-64 sm:h-72 lg:h-80" : "h-48"}`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
            priority={priority}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
            <span className="text-5xl font-display font-medium text-zinc-300">{initials}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between p-6 md:p-8 flex-1 bg-white">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.slice(0, compact ? 3 : 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div>
            <h3 className={`font-medium text-zinc-950 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
              {title}
            </h3>
            <p className={`mt-2 text-zinc-600 ${compact ? "text-sm line-clamp-2" : "text-base line-clamp-3"}`}>
              {description}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
          <span className="text-sm text-zinc-500">
            {featured ? "Featured Work" : "Web App"}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </span>
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
      className="block h-full cursor-pointer rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
    >
      {content}
    </a>
  );
}
