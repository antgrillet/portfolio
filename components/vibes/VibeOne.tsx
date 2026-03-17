"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function VibeOne() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F7F7F6] font-sans text-[#1A1A1A] selection:bg-[#E2E2E2] selection:text-black">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E")',
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center px-6 md:px-12">
        <div className="flex h-full w-full max-w-4xl justify-between">
          <div className="h-full w-px bg-black/[0.03]" />
          <div className="hidden h-full w-px bg-black/[0.03] sm:block" />
          <div className="h-full w-px bg-black/[0.03]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 md:px-12">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border-b border-black/[0.06] py-8"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]">
            Portfolio
          </span>

          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#666666]">
              Disponible pour freelance
            </span>
          </div>
        </motion.header>

        <main className="flex flex-1 flex-col justify-center py-24 md:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.p
              variants={itemVariants}
              className="mb-8 text-[10px] uppercase tracking-[0.1em] text-[#888888]"
            >
              Antonin Grillet · React / Next.js / Motion design
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mb-8 max-w-[540px] text-2xl leading-[1.25] font-light tracking-tight text-[#111111] md:text-3xl"
            >
              Développeur front-end, orienté interface et mouvement.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-12 max-w-[420px] text-[13px] leading-[1.8] font-light text-[#666666]"
            >
              Je conçois et développe des sites et applications web avec React,
              Next.js et TypeScript. Sensible au détail, au mouvement et à la
              clarté de l&apos;interface.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8">
              <button className="group relative flex items-center gap-2 overflow-hidden bg-[#1A1A1A] px-5 py-3 text-[11px] uppercase tracking-[0.1em] text-[#F7F7F6] transition-transform active:scale-[0.98]">
                <span className="relative z-10">Me contacter</span>
                <ArrowUpRight className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <div className="absolute inset-0 z-0 translate-y-full bg-[#333333] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              </button>

              <button className="group relative flex items-center gap-2 text-[12px] text-[#666666] transition-colors duration-300 hover:text-[#1A1A1A]">
                Voir les réalisations
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1A1A1A] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </button>
            </motion.div>
          </motion.div>
        </main>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-start justify-between gap-4 border-t border-black/[0.06] py-8 text-[10px] uppercase tracking-[0.15em] text-[#888888] sm:flex-row sm:items-center"
        >
          <div className="flex gap-8">
            <a
              href="https://github.com/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-colors duration-300 hover:text-[#1A1A1A]"
            >
              <span>GitHub</span>
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[#1A1A1A] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </a>
            <a
              href="https://linkedin.com/in/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-colors duration-300 hover:text-[#1A1A1A]"
            >
              <span>LinkedIn</span>
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[#1A1A1A] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          </div>
          <a
            href="mailto:antoningrillet@asmix.fr"
            className="text-[11px] lowercase tracking-normal transition-colors duration-300 hover:text-[#1A1A1A]"
          >
            antoningrillet@asmix.fr
          </a>
        </motion.footer>
      </div>
    </div>
  );
}
