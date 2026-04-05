"use client";

import { motion, useReducedMotion } from "motion/react";
import { Briefcase, GraduationCap, Rocket, Trophy } from "lucide-react";

const timelineData = [
  {
    year: "2025",
    title: "GC Handball",
    subtitle: "Fondateur & développeur",
    description:
      "Développement d'une plateforme de coaching handball, de l'idée à la mise en production.",
    icon: Trophy,
    label: "Produit",
  },
  {
    year: "2024 - aujourd'hui",
    title: "Freelance",
    subtitle: "Création de sites web",
    description:
      "Conception et développement de sites web pour des indépendants et petites entreprises, avec une approche simple, concrète et orientée résultats.",
    icon: Briefcase,
    label: "Clients",
  },
  {
    year: "2022 - 2023",
    title: "École 42",
    subtitle: "Paris",
    description:
      "Formation intensive au développement, à la logique et à la résolution de problèmes, dans un environnement très pratique et autonome.",
    icon: Rocket,
    label: "Formation",
  },
  {
    year: "2021",
    title: "STAPS",
    subtitle: "Sciences du sport",
    description:
      "Première année en sciences du sport avant de me réorienter vers le développement.",
    icon: GraduationCap,
    label: "Formation",
  },
];

export function TimelineSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="parcours"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(245,245,247,0.9))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b84328]">
            Parcours
          </p>
          <h2 className="font-display text-balance text-[clamp(2rem,3.4vw,3.4rem)] leading-[0.98] font-semibold text-zinc-950">
            Un parcours construit sur le concret.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            Un chemin atypique, du sport au web, avec une même idée directrice :
            progresser, simplifier et aller à l&apos;essentiel.
          </p>
        </motion.div>

        <div className="relative pl-6 sm:pl-8">
          <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-orange-300 via-stone-300 to-transparent sm:left-3" />
          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <motion.article
                key={item.title}
                initial={shouldReduceMotion ? undefined : { opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.62,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-[1.25rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              >
                <div className="absolute left-[-2.15rem] top-7 flex h-10 w-10 items-center justify-center rounded-full border border-orange-200/90 bg-white shadow-[0_12px_30px_rgba(194,75,43,0.15)] sm:left-[-2.4rem]">
                  <item.icon className="h-[18px] w-[18px] text-[#b84328]" />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    {item.year}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    {item.label}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                  {item.subtitle}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
