"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  Linkedin,
  Mail,
  Server,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { ContactModal } from "@/components/ContactModal";

interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl?: string;
  techStack?: string[];
}

const navItems = [
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#parcours" },
  { label: "Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

const parcoursItems = [
  {
    year: "2025",
    title: "GC Handball",
    role: "Fondateur & développeur",
    desc: "Développement d'une plateforme de coaching handball, de l'idée à la mise en production.",
    tag: "Produit",
  },
  {
    year: "2024 - aujourd'hui",
    title: "Freelance",
    role: "Développeur full-stack",
    desc: "Conception et développement de sites web pour des indépendants et petites entreprises.",
    tag: "Clients",
  },
  {
    year: "2022 - 2023",
    title: "École 42",
    role: "Paris",
    desc: "Formation en algorithmique, systèmes et résolution de problèmes. Peer-to-peer, pas de cours magistraux.",
    tag: "Formation",
  },
  {
    year: "2021",
    title: "STAPS",
    role: "Sciences du sport",
    desc: "Première année en sciences du sport avant de me réorienter vers le développement.",
    tag: "Formation",
  },
];

const pillars = [
  {
    title: "Composants cohérents",
    desc: "Des composants réutilisables qui gardent la même tenue du mobile au desktop.",
    icon: Layers,
  },
  {
    title: "Animations mesurées",
    desc: "Du mouvement pour guider le regard et clarifier la navigation, sans en faire trop.",
    icon: Sparkles,
  },
  {
    title: "Attention au détail",
    desc: "Rythme vertical, états de focus, densité de contenu et cohérence visuelle.",
    icon: Zap,
  },
];

const craftPillars = [
  {
    title: "Systèmes",
    desc: "Des composants réutilisables et une architecture front-end structurée.",
    icon: Code2,
  },
  {
    title: "Mouvement",
    desc: "Des animations avec Framer Motion pour rendre la navigation plus fluide.",
    icon: Workflow,
  },
  {
    title: "Performance",
    desc: "Next.js, images optimisées, et attention à l'accessibilité.",
    icon: Zap,
  },
];

const techCategories = [
  {
    cat: "Front-end",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    icon: Code2,
  },
  {
    cat: "Back-end",
    stack: ["Node.js", "Python", "REST APIs", "Validation"],
    icon: Server,
  },
  {
    cat: "Data",
    stack: ["PostgreSQL", "Prisma", "Schema design"],
    icon: Database,
  },
  {
    cat: "Delivery",
    stack: ["Vercel", "CI/CD", "GitHub Actions", "Resend"],
    icon: Workflow,
  },
];

export default function MinimalPortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des projets");
        }

        return response.json();
      })
      .then((data) => {
        if (!active) {
          return;
        }

        setProjects(Array.isArray(data?.projects) ? data.projects.slice(0, 6) : []);
        setLoading(false);
      })
      .catch(() => {
        if (!active) {
          return;
        }

        setHasError(true);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#1F4FD7] focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu principal
      </a>

      <section className="flex min-h-screen justify-center bg-[#F6F8FC] p-4 font-sans text-[#111111] antialiased selection:bg-[#D7E5FF] selection:text-[#0F172A] md:p-8 lg:p-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid w-full max-w-[1040px] grid-cols-1 gap-px border border-[#DCE5F6] bg-[#DCE5F6] shadow-[0_30px_60px_-20px_rgba(31,79,215,0.08)] md:grid-cols-12"
        >
          <motion.nav
            variants={itemVariants}
            className="sticky top-4 z-40 col-span-1 flex items-center justify-between bg-white/95 px-6 py-4 backdrop-blur-sm md:col-span-12"
          >
            <button
              onClick={() => scrollTo("hero")}
              className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#6A7CA1] transition-colors hover:text-[#1F4FD7] sm:text-[11px]"
            >
              Antonin Grillet
            </button>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href.slice(1))}
                  className="text-[10px] tracking-wide text-[#5F6F92] transition-colors hover:text-[#1F4FD7] sm:text-[11px]"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={openModal}
              className="text-[10px] font-medium text-[#1F4FD7] md:hidden"
            >
              Contact
            </button>
          </motion.nav>

          <motion.div
            id="hero"
            variants={itemVariants}
            className="col-span-1 flex min-h-[160px] flex-col justify-between bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 md:col-span-3 md:min-h-[400px] md:p-8"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-1.5 w-1.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8FB1FF] opacity-50" />
                <span className="relative inline-flex h-1 w-1 rounded-full bg-[#1F4FD7]" />
              </div>
              <span className="text-[10px] tracking-wide text-[#5F6F92] sm:text-[11px]">
                Disponible pour freelance
              </span>
            </div>

            <p className="mt-8 max-w-[140px] text-[10px] leading-relaxed text-[#6A7CA1] sm:text-xs md:mt-0">
              Portfolio
              <br />
              Antonin Grillet · React / Next.js / Motion design
            </p>
          </motion.div>

          <motion.div
            id="main-content"
            variants={itemVariants}
            className="col-span-1 flex flex-col justify-center bg-[linear-gradient(135deg,#FFFFFF_0%,#F7FAFF_65%,#EEF4FF_100%)] p-6 md:col-span-9 md:p-12 lg:p-16"
          >
            <div className="max-w-[540px]">
              <h1 className="mb-8 text-xl leading-[1.35] font-normal tracking-[-0.015em] text-[#111111] sm:text-2xl md:text-[26px]">
                Développeur front-end, orienté interface et mouvement.
              </h1>
              <p className="max-w-[420px] text-xs leading-[1.8] text-[#5C6578] sm:text-sm">
                Je conçois et développe des sites et applications web avec React,
                Next.js et TypeScript. Sensible au détail, au mouvement et à la
                clarté de l&apos;interface.
              </p>
            </div>
          </motion.div>

          <motion.button
            onClick={openModal}
            variants={itemVariants}
            className="group col-span-1 flex cursor-pointer items-center justify-between bg-[#1F4FD7] p-6 text-white transition-colors hover:bg-[#1238A5] md:col-span-6 md:p-8"
          >
            <span className="text-xs font-medium">Me contacter</span>
            <span className="text-[10px] text-white/75 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white">
              →
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollTo("projects")}
            variants={itemVariants}
            className="group col-span-1 flex cursor-pointer items-center justify-between bg-white p-6 transition-colors hover:bg-[#F6F9FF] md:col-span-6 md:p-8"
          >
            <span className="text-xs font-medium text-[#111111]">
              Voir les réalisations
            </span>
            <span className="text-[10px] text-[#8CA2CE] transition-colors duration-300 group-hover:text-[#1F4FD7]">
              ↗
            </span>
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="col-span-1 flex flex-col justify-center bg-white p-6 md:col-span-12 md:p-12"
          >
            <span className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#6A7CA1]">
              À propos
            </span>
            <div className="max-w-[540px]">
              <h2 className="mb-4 text-lg leading-[1.35] font-normal text-[#111111] md:text-xl">
                Je fais des sites qui vont droit au but.
              </h2>
              <p className="text-xs leading-[1.8] text-[#5C6578]">
                Architecture front-end, performance, accessibilité et animations.
                J&apos;essaie de rendre chaque interface lisible et agréable à
                utiliser.
              </p>
            </div>
          </motion.div>

          {[
            { value: "9+", label: "Projets live" },
            { value: "UI / Motion", label: "Focus" },
            { value: "42 Paris", label: "Base" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="col-span-1 flex flex-col justify-center border-t border-[#DCE5F6] bg-white p-6 md:col-span-4 md:border-t-0 md:p-8"
            >
              <span className="mb-1 text-xl font-normal text-[#1F4FD7] md:text-2xl">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#6A7CA1]">
                {stat.label}
              </span>
            </motion.div>
          ))}

          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="col-span-1 flex flex-col bg-[#F8FAFF] p-6 md:col-span-4 md:p-8"
            >
              <pillar.icon className="mb-6 h-4 w-4 text-[#8CA2CE]" strokeWidth={1.5} />
              <h3 className="mb-3 text-xs font-medium text-[#111111]">
                {pillar.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-[#6A7CA1]">
                {pillar.desc}
              </p>
            </motion.div>
          ))}

          <motion.div
            id="projects"
            variants={itemVariants}
            className="col-span-1 flex flex-col justify-center bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 md:col-span-12 md:p-12"
          >
            <span className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#6A7CA1]">
              Projets
            </span>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-[480px]">
                <h2 className="mb-4 text-lg leading-[1.35] font-normal text-[#111111] md:text-xl">
                  Quelques projets récents.
                </h2>
                <p className="text-xs leading-[1.8] text-[#5C6578]">
                  Des sites et applications développés pour des clients ou des
                  projets personnels.
                </p>
              </div>
            </div>
          </motion.div>

          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="col-span-1 animate-pulse bg-white p-6 md:col-span-6 md:p-8"
              >
                <div className="mb-6 h-3 w-1/3 rounded-sm bg-[#EEF4FF]" />
                <div className="mb-3 h-2 w-full rounded-sm bg-[#F6F8FC]" />
                <div className="mb-8 h-2 w-4/5 rounded-sm bg-[#F6F8FC]" />
                <div className="mt-auto h-2 w-1/4 rounded-sm bg-[#EEF4FF]" />
              </motion.div>
            ))
          ) : hasError ? (
            <motion.div
              variants={itemVariants}
              className="col-span-1 flex items-center justify-center bg-white p-12 text-center text-xs text-[#6A7CA1] md:col-span-12"
            >
              Impossible de charger les projets pour le moment.
            </motion.div>
          ) : projects.length > 0 ? (
            projects.map((project) => (
              <motion.a
                key={project.id}
                href={project.liveUrl || "#projects"}
                target={project.liveUrl ? "_blank" : undefined}
                rel={project.liveUrl ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group col-span-1 flex min-h-[200px] flex-col justify-between bg-white p-6 transition-colors hover:bg-[#F6F9FF] md:col-span-6 md:p-8"
              >
                <div>
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xs font-medium text-[#111111] transition-colors group-hover:text-[#1F4FD7]">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="h-3 w-3 text-[#8CA2CE] transition-colors group-hover:text-[#1F4FD7]"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#6A7CA1]">
                    {project.description}
                  </p>
                </div>
                {project.techStack && project.techStack.length > 0 ? (
                  <span className="mt-8 text-[9px] uppercase tracking-wider text-[#8CA2CE]">
                    {project.techStack.slice(0, 4).join(" · ")}
                  </span>
                ) : null}
              </motion.a>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="col-span-1 flex items-center justify-center bg-white p-12 text-xs text-[#6A7CA1] md:col-span-12"
            >
              Aucun projet à afficher pour le moment.
            </motion.div>
          )}

          <motion.div
            id="parcours"
            variants={itemVariants}
            className="col-span-1 flex flex-col bg-white p-6 md:col-span-4 md:p-12"
          >
            <span className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#6A7CA1]">
              Parcours
            </span>
            <h2 className="mb-4 text-lg leading-[1.35] font-normal text-[#111111]">
              Mon parcours.
            </h2>
            <p className="text-[11px] leading-[1.8] text-[#5C6578]">
              Un chemin atypique, du sport au développement web.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 grid grid-cols-1 gap-px bg-[#DCE5F6] md:col-span-8 md:grid-cols-2"
          >
            {parcoursItems.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="col-span-1 flex flex-col justify-between bg-white p-6 md:p-8"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-sm bg-[#EEF4FF] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-[#1F4FD7]">
                      {item.year}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#8CA2CE]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mb-1 text-xs font-medium text-[#111111]">
                    {item.title}
                  </h3>
                  <span className="mb-4 block text-[10px] text-[#6A7CA1]">
                    {item.role}
                  </span>
                  <p className="text-[11px] leading-relaxed text-[#5C6578]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            id="tech"
            variants={itemVariants}
            className="col-span-1 flex flex-col justify-center bg-[linear-gradient(135deg,#FFFFFF_0%,#F7FAFF_65%,#EEF4FF_100%)] p-6 md:col-span-12 md:p-12"
          >
            <span className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#6A7CA1]">
              Stack technique
            </span>
            <div className="max-w-[480px]">
              <h2 className="mb-4 text-lg leading-[1.35] font-normal text-[#111111] md:text-xl">
                Les outils que j&apos;utilise.
              </h2>
              <p className="text-xs leading-[1.8] text-[#5C6578]">
                Les technologies avec lesquelles je travaille au quotidien.
              </p>
            </div>
          </motion.div>

          {craftPillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="col-span-1 flex flex-col border-t border-[#DCE5F6] bg-white p-6 md:col-span-4 md:border-t-0 md:p-8"
            >
              <pillar.icon className="mb-6 h-4 w-4 text-[#1F4FD7]" strokeWidth={1.5} />
              <h3 className="mb-3 text-xs font-medium text-[#111111]">
                {pillar.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-[#6A7CA1]">
                {pillar.desc}
              </p>
            </motion.div>
          ))}

          {techCategories.map((tech) => (
            <motion.div
              key={tech.cat}
              variants={itemVariants}
              className="col-span-1 flex flex-col bg-[#F8FAFF] p-6 md:col-span-3 md:p-8"
            >
              <tech.icon className="mb-4 h-4 w-4 text-[#8CA2CE]" strokeWidth={1.5} />
              <span className="mb-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#6A7CA1]">
                {tech.cat}
              </span>
              <div className="flex flex-wrap gap-2">
                {tech.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#DCE5F6] bg-white px-3 py-1 text-[10px] text-[#111111]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            id="contact"
            variants={itemVariants}
            className="col-span-1 flex flex-col justify-center bg-white p-6 md:col-span-8 md:p-12"
          >
            <span className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#6A7CA1]">
              Contact
            </span>
            <div className="max-w-[420px]">
              <h2 className="mb-4 text-lg leading-[1.35] font-normal text-[#111111] md:text-xl">
                Un projet ? Parlons-en.
              </h2>
              <p className="mb-8 text-xs leading-[1.8] text-[#5C6578]">
                Vous avez un projet web en tête ? Contactez-moi, je vous réponds
                rapidement.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={openModal}
                  className="flex items-center gap-2 bg-[#1F4FD7] px-5 py-3 text-[11px] font-medium text-white transition-colors hover:bg-[#1238A5]"
                >
                  Envoyer un message
                  <ArrowRight className="h-3 w-3" />
                </button>
                <a
                  href="mailto:antoningrillet@asmix.fr"
                  className="flex items-center gap-2 bg-[#F6F8FC] px-5 py-3 text-[11px] font-medium text-[#111111] transition-colors hover:bg-[#EEF4FF] hover:text-[#1F4FD7]"
                >
                  Écrire directement
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 grid grid-cols-1 gap-px bg-[#DCE5F6] md:col-span-4"
          >
            {[
              {
                label: "Email",
                value: "antoningrillet@asmix.fr",
                icon: Mail,
                href: "mailto:antoningrillet@asmix.fr",
              },
              {
                label: "Disponibilité",
                value: "Freelance / collaborations",
                icon: Zap,
              },
              {
                label: "LinkedIn",
                value: "Continuer la conversation",
                icon: Linkedin,
                href: "https://linkedin.com/in/antoningrillet",
              },
            ].map((info) => (
              <div
                key={info.label}
                className="flex flex-col justify-center bg-[#F8FAFF] p-6 transition-colors hover:bg-white"
              >
                <div className="mb-2 flex items-center gap-3">
                  <info.icon className="h-3.5 w-3.5 text-[#8CA2CE]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#6A7CA1]">
                    {info.label}
                  </span>
                </div>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noreferrer" : undefined}
                    className="truncate text-xs text-[#111111] transition-colors hover:text-[#1F4FD7]"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-xs text-[#111111]">{info.value}</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 flex flex-col items-center justify-center bg-[linear-gradient(135deg,#FFFFFF_0%,#F7FAFF_65%,#EEF4FF_100%)] p-12 text-center md:col-span-12 lg:p-16"
          >
            <h2 className="mb-4 text-lg font-normal text-[#111111]">
              Un projet en tête ?
            </h2>
            <p className="mb-8 text-xs text-[#5C6578]">
              N&apos;hésitez pas à me contacter si vous avez un projet.
            </p>
            <button
              onClick={openModal}
              className="group flex items-center gap-2 border border-[#DCE5F6] bg-white px-6 py-3 text-[11px] font-medium text-[#111111] transition-all hover:border-[#1F4FD7] hover:text-[#1F4FD7]"
            >
              Me contacter
              <ArrowRight className="h-3 w-3 text-[#8CA2CE] transition-transform group-hover:translate-x-1 group-hover:text-[#1F4FD7]" />
            </button>
          </motion.div>

          <motion.footer
            variants={itemVariants}
            className="col-span-1 flex flex-col justify-between gap-6 bg-white p-6 md:col-span-12 md:flex-row md:items-center md:p-8"
          >
            <span className="text-[10px] text-[#6A7CA1]">
              © {currentYear} Antonin Grillet. Portfolio React / Next.js.
            </span>
            <div className="flex items-center gap-6">
              <a
                href="mailto:antoningrillet@asmix.fr"
                className="text-[10px] text-[#6A7CA1] transition-colors duration-200 hover:text-[#1F4FD7]"
              >
                Email
              </a>
              <a
                href="https://github.com/antoningrillet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#6A7CA1] transition-colors duration-200 hover:text-[#1F4FD7]"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/antoningrillet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#6A7CA1] transition-colors duration-200 hover:text-[#1F4FD7]"
              >
                LinkedIn
              </a>
            </div>
          </motion.footer>
        </motion.div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
