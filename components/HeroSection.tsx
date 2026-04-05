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
        <div className="absolute inset-x-0 top-0 h-[72%] bg-[radial-gradient(circle_at_top,_rgba(115,168,255,0.14),_transparent_40%),radial-gradient(ellipse_at_20%_0%,rgba(194,75,43,0.07),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.5),rgba(246,241,232,0)_72%)]" />
        <div className="animate-pulse-soft absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-orange-200/45 blur-[90px]" />
        <div className="animate-blob absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-sky-100/70 blur-[120px]" />
        <div className="animation-delay-2000 animate-blob absolute bottom-10 left-[8%] h-64 w-64 rounded-full bg-amber-100/65 blur-[100px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={shouldReduceMotion ? undefined : { y: copyY }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-5 flex flex-col items-center justify-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-zinc-500 max-[419px]:text-[0.6rem] max-[419px]:tracking-[0.22em] sm:mb-6 sm:flex-row sm:gap-3 sm:text-[0.72rem]">
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-[0_16px_40px_rgba(15,23,42,0.06)] max-[419px]:px-3.5 max-[419px]:py-1.5 sm:w-auto">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Disponible pour freelance
            </span>
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200/90 bg-white/60 px-4 py-2 max-[419px]:px-3.5 max-[419px]:py-1.5 sm:w-auto">
              <Sparkles className="h-3.5 w-3.5 text-[#b84328]" />
              Accompagnement clair
            </span>
          </div>

          <p className="mb-4 text-xs font-medium uppercase tracking-[0.36em] text-zinc-500 max-[419px]:tracking-[0.28em] sm:mb-5 sm:text-sm">
            Antonin Grillet · Sites web clairs pour activités et projets concrets
          </p>
          <h1 className="text-balance font-display text-[clamp(2.15rem,5.5vw,4rem)] font-semibold leading-[1.08] max-[419px]:text-[clamp(2rem,10vw,2.6rem)] md:leading-[0.98]">
            <span className="text-gradient-hero">Je transforme des idées encore floues en </span>
            <span className="text-accent-editorial">sites web clairs et crédibles.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-balance text-sm leading-relaxed text-zinc-600 sm:mt-8 sm:text-base sm:leading-7 md:text-xl md:leading-8">
            Vous n&apos;avez pas besoin d&apos;arriver avec le bon vocabulaire
            technique. Si vous avez une activité, une idée ou un projet à mieux
            présenter en ligne, je vous aide à le rendre simple à comprendre,
            agréable à parcourir et rassurant pour vos visiteurs.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 max-[419px]:gap-2.5 sm:mt-10 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={onContactClick}
              className="btn-editorial-solid inline-flex w-full cursor-pointer items-center justify-center gap-2 px-7 py-3.5 text-sm max-[419px]:px-5 max-[419px]:py-3 sm:w-auto sm:py-4"
            >
              Parler de mon projet
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-zinc-800/90 bg-white/80 px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition-colors duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c24b2b] max-[419px]:px-5 max-[419px]:py-3 sm:w-auto sm:py-4"
            >
              Voir des exemples
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-zinc-500 sm:mt-6 sm:text-sm">
            <span className="rounded-full border border-zinc-200/80 bg-white/65 px-3 py-1.5">
              Pas besoin de brief technique
            </span>
            <span className="rounded-full border border-zinc-200/80 bg-white/65 px-3 py-1.5">
              On clarifie ensemble
            </span>
            <span className="rounded-full border border-zinc-200/80 bg-white/65 px-3 py-1.5">
              Du besoin à la mise en ligne
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-[419px]:grid max-[419px]:w-full max-[419px]:grid-cols-2 max-[419px]:gap-2 sm:mt-8 sm:gap-3">
            <a
              href="https://github.com/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub"
              className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors duration-200 hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#c24b2b] max-[419px]:w-full max-[419px]:px-2.5 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            >
              <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn"
              className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors duration-200 hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#c24b2b] max-[419px]:w-full max-[419px]:px-2.5 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            >
              <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:antoningrillet@asmix.fr"
              aria-label="Envoyer un email"
              className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors duration-200 hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#c24b2b] max-[419px]:col-span-2 max-[419px]:w-full max-[419px]:px-2.5 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-100/90 bg-orange-50/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b84328]">
                  À propos
                </div>
                <div className="space-y-4">
                  <h2 className="text-balance text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl">
                    Je vous aide à montrer clairement ce que vous faites.
                  </h2>
                  <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                    Mon rôle n&apos;est pas seulement de coder un site. Je vous
                    aide aussi à organiser le message, à mettre l&apos;essentiel
                    en avant et à créer une expérience simple pour les personnes
                    qui découvrent votre activité.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Projets en ligne", value: "9+" },
                    { label: "Accompagnement direct", value: "Freelance" },
                    { label: "Formation", value: "42 Paris" },
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
                <div className="absolute inset-6 rounded-[1.25rem] bg-[radial-gradient(circle_at_center,_rgba(253,186,116,0.35),_transparent_58%)] blur-3xl" />
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
                title: "Un message plus lisible",
                copy: "Une structure claire pour que vos visiteurs comprennent rapidement qui vous êtes, ce que vous proposez et quoi faire ensuite.",
              },
              {
                title: "Un parcours simple",
                copy: "Chaque page est pensée pour guider naturellement la lecture, sans surcharger ni perdre les personnes peu à l&apos;aise avec le web.",
              },
              {
                title: "Une présence plus crédible",
                copy: "Design, contenu et détails travaillent ensemble pour inspirer confiance dès les premières secondes.",
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
