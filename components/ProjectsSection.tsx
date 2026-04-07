"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/ui/skeleton";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/data/projects";
import { useTranslations } from "next-intl";

interface ProjectsSectionProps {
  onContactClick: () => void;
}

const featuredLayout = [
  "lg:col-span-8",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-6",
];

export function ProjectsSection({ onContactClick }: ProjectsSectionProps) {
  const t = useTranslations("Projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des projets");
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (fetchError) {
        setError(
          fetchError instanceof Error ? fetchError.message : "Erreur inconnue"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const curatedProjects = [...projects]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 6);

  return (
    <section id="projects" className="relative bg-gradient-to-b from-zinc-50/80 to-white px-6 py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -right-48 top-16 h-[500px] w-[500px] blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.606 0.198 277 / 0.08) 0%, oklch(0.92 0.04 277 / 0.08) 50%, transparent 70%)" }}
        />
        <div
          className="absolute -left-32 bottom-0 h-[400px] w-[400px] blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.8 0.1 277 / 0.12) 0%, transparent 70%)" }}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <p className="mb-4 text-sm font-serif italic text-zinc-500">/ {t("badge")}</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-tight text-zinc-950">
            {t("title")}
          </h2>
        </motion.div>

        {loading ? (
          <ProjectGridSkeleton />
        ) : error ? (
          <div className="rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
            <p className="text-red-600">{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-600 shadow-sm border border-red-100"
            >
              Recharger
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : curatedProjects.length === 0 ? (
          <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-10 text-center text-zinc-500">
            Aucun projet disponible pour le moment.
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-12 lg:auto-rows-[minmax(320px,auto)]">
            {curatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={featuredLayout[index] ?? "lg:col-span-4"}
              >
                <ProjectCard
                  {...project}
                  featured={index === 0 || project.featured}
                  compact={index > 1}
                  priority={index < 2}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
