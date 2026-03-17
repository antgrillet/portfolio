"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  BadgeCheck,
  Code2,
  Database,
  Globe,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import { TechBadge } from "@/components/TechBadge";

interface TechStackSectionProps {
  onContactClick: () => void;
}

const craftPillars = [
  {
    icon: Layers3,
    title: "Systèmes",
    copy: "Des composants réutilisables et une architecture front-end structurée.",
  },
  {
    icon: Sparkles,
    title: "Mouvement",
    copy: "Des animations avec Framer Motion pour rendre la navigation plus fluide.",
  },
  {
    icon: BadgeCheck,
    title: "Performance",
    copy: "Next.js, images optimisées, et attention à l'accessibilité.",
  },
];

const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  backend: ["Node.js", "Python", "REST APIs", "Validation"],
  database: ["PostgreSQL", "Prisma", "Schema design"],
  cloud: ["Vercel", "CI/CD", "GitHub Actions", "Resend"],
};

const categories = [
  {
    key: "frontend" as const,
    title: "Front-end",
    icon: Code2,
  },
  {
    key: "backend" as const,
    title: "Back-end",
    icon: Globe,
  },
  {
    key: "database" as const,
    title: "Data",
    icon: Database,
  },
  {
    key: "cloud" as const,
    title: "Delivery",
    icon: Layers3,
  },
];

export function TechStackSection({ onContactClick }: TechStackSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="tech"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(245,245,247,0.88))]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
            Stack technique
          </p>
          <h2 className="text-balance text-[clamp(1.8rem,3.2vw,3.2rem)] leading-[0.96] font-semibold text-zinc-950">
            Les outils que j&apos;utilise.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Les technologies avec lesquelles je travaille au quotidien.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {craftPillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel rounded-[1.25rem] p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-zinc-950">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                {pillar.copy}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.article
              key={category.key}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: 0.12 + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[1.25rem] border border-white/70 bg-white/[0.88] p-5 shadow-[0_24px_50px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  {category.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {techStack[category.key].map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={onContactClick}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Mail className="h-4 w-4" />
            Me contacter
          </button>
        </motion.div>
      </div>
    </section>
  );
}
