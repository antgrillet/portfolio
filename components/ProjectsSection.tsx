"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/ui/skeleton";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/data/projects";

interface ProjectsSectionProps {
  onContactClick: () => void;
}

const featuredLayout = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export function ProjectsSection({ onContactClick }: ProjectsSectionProps) {
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
          fetchError instanceof Error ? fetchError.message : "Erreur inconnue",
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
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05070b] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-[#f4f4f6] to-[#05070b]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-blue-500/[0.18] blur-[120px]" />
        <div className="absolute right-[-6%] top-10 h-96 w-96 rounded-full bg-cyan-400/12 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-blue-200/70">
              Projets
            </p>
            <h2 className="text-balance text-[clamp(2rem,3.6vw,3.6rem)] leading-[0.94] font-semibold">
              Quelques projets récents.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              Des sites et applications développés pour des clients ou des
              projets personnels.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: `${projects.length || 9}`, label: "Projets exposés" },
              { value: "100%", label: "Code sur mesure" },
              { value: "Next.js", label: "Stack principale" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.15rem] border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.1]"
              >
                <div className="text-xl font-semibold text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {loading ? (
          <ProjectGridSkeleton />
        ) : error ? (
          <div className="rounded-[1.25rem] border border-red-500/30 bg-red-500/8 p-8 text-center">
            <p className="text-red-200">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Recharger
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : curatedProjects.length === 0 ? (
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-10 text-center text-zinc-300">
            Aucun projet disponible pour le moment.
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-12 lg:auto-rows-[minmax(280px,auto)]">
            {curatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.62,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
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

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200/70">
              Un projet en tête ?
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
              N&apos;hésitez pas à me contacter si vous avez un projet.
            </h3>
          </div>
          <button
            onClick={onContactClick}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-zinc-950 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Mail className="h-4 w-4" />
            Me contacter
          </button>
        </motion.div>
      </div>
    </section>
  );
}
