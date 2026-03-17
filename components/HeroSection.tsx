"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { PhotoCarousel } from "@/components/PhotoCarousel";

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden px-4 pb-14 pt-24 sm:px-6 lg:px-8"
    >
      <motion.div
        style={shouldReduceMotion ? undefined : { y: backgroundY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-x-0 top-0 h-[72%] bg-[radial-gradient(circle_at_top,_rgba(115,168,255,0.18),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.58),rgba(245,245,247,0)_70%)]" />
        <div className="animate-pulse-soft absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-blue-200/60 blur-[90px]" />
        <div className="animate-blob absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-sky-100/80 blur-[120px]" />
        <div className="animation-delay-2000 animate-blob absolute bottom-10 left-[8%] h-64 w-64 rounded-full bg-indigo-100/70 blur-[100px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={shouldReduceMotion ? undefined : { y: copyY }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-zinc-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Disponible pour freelance
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/55 px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Portfolio
            </span>
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.36em] text-zinc-500">
            Antonin Grillet · React / Next.js / Motion design
          </p>
          <h1 className="text-gradient-hero text-balance text-[clamp(2.2rem,5.5vw,4rem)] leading-[0.94] font-semibold">
            Développeur front-end, orienté interface et mouvement.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-balance text-base leading-7 text-zinc-600 sm:text-lg md:text-xl md:leading-8">
            Je conçois et développe des sites et applications web avec React,
            Next.js et TypeScript. Sensible au détail, au mouvement et à la
            clarté de l&apos;interface.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onContactClick}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold text-white shadow-[0_24px_50px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={scrollToProjects}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-300/80 bg-white/70 px-7 py-4 text-sm font-semibold text-zinc-900 shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition-colors duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Voir les réalisations
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:antoningrillet@asmix.fr"
              aria-label="Envoyer un email"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Mail className="h-4 w-4" />
              antoningrillet@asmix.fr
            </a>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={shouldReduceMotion ? undefined : { y: mediaY }}
            className="glass-panel rounded-[1.5rem] p-4 sm:p-6"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-blue-700">
                  À propos
                </div>
                <div className="space-y-4">
                  <h2 className="text-balance text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl">
                    Je fais des sites qui vont droit au but.
                  </h2>
                  <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                    Architecture front-end, performance, accessibilité et
                    animations. J&apos;essaie de rendre chaque interface lisible
                    et agréable à utiliser.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Projets live", value: "9+" },
                    { label: "Focus", value: "UI / Motion" },
                    { label: "Base", value: "42 Paris" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.1rem] border border-zinc-200/80 bg-white/[0.78] px-4 py-5 text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
                    >
                      <div className="text-xl font-semibold text-zinc-950">
                        {item.value}
                      </div>
                      <div className="mt-1 text-sm text-zinc-500">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-6 rounded-[1.25rem] bg-[radial-gradient(circle_at_center,_rgba(147,197,253,0.38),_transparent_60%)] blur-3xl" />
                <PhotoCarousel
                  images={["/images/profile-1.jpg", "/images/profile-2.jpg"]}
                  alt="Portrait d'Antonin Grillet"
                  autoPlayInterval={5000}
                />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {[
              {
                title: "Composants cohérents",
                copy: "Des composants réutilisables qui gardent la même tenue du mobile au desktop.",
              },
              {
                title: "Animations mesurées",
                copy: "Du mouvement pour guider le regard et clarifier la navigation, sans en faire trop.",
              },
              {
                title: "Attention au détail",
                copy: "Rythme vertical, états de focus, densité de contenu et cohérence visuelle.",
              },
            ].map((card, index) => (
              <motion.article
                key={card.title}
                initial={shouldReduceMotion ? undefined : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel rounded-[1.25rem] p-5 text-left"
              >
                <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-semibold text-zinc-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">
                  {card.copy}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
