"use client";

import React from "react";
import { motion } from "motion/react";

export default function VibeTwo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F7F7F7] p-4 font-sans text-[#111111] antialiased selection:bg-[#E5E5E5] selection:text-black md:p-8 lg:p-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid w-full max-w-[1040px] grid-cols-1 gap-px border border-[#E5E5E5] bg-[#E5E5E5] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.06)] md:grid-cols-12"
      >
        <motion.div
          variants={itemVariants}
          className="col-span-1 flex items-center justify-between bg-white px-6 py-4 md:col-span-12"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#888888] sm:text-[11px]">
            Portfolio
          </span>
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-1.5 w-1.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-40" />
              <span className="relative inline-flex h-1 w-1 rounded-full bg-[#10B981]" />
            </div>
            <span className="text-[10px] tracking-wide text-[#666666] sm:text-[11px]">
              Disponible pour freelance
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-1 flex min-h-[160px] flex-col justify-end bg-white p-6 md:col-span-3 md:min-h-[400px] md:p-8"
        >
          <p className="max-w-[140px] text-[10px] leading-relaxed text-[#888888] sm:text-xs">
            Antonin Grillet · React / Next.js / Motion design
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-1 flex flex-col justify-center bg-white p-6 md:col-span-9 md:p-12 lg:p-16"
        >
          <div className="max-w-[540px]">
            <h1 className="mb-8 text-xl leading-[1.35] font-normal tracking-[-0.015em] text-[#111111] sm:text-2xl md:text-[26px]">
              Développeur front-end, orienté interface et mouvement.
            </h1>
            <p className="max-w-[420px] text-xs leading-[1.8] text-[#666666] sm:text-sm">
              Je conçois et développe des sites et applications web avec React,
              Next.js et TypeScript. Sensible au détail, au mouvement et à la
              clarté de l&apos;interface.
            </p>
          </div>
        </motion.div>

        <motion.a
          href="#"
          variants={itemVariants}
          className="group col-span-1 flex cursor-pointer items-center justify-between bg-white p-6 transition-colors hover:bg-[#FDFDFD] md:col-span-4 md:p-8"
        >
          <span className="text-xs font-medium text-[#111111]">Voir les réalisations</span>
          <span className="text-[10px] text-[#A0A0A0] transition-colors duration-300 group-hover:text-[#111111]">
            ↗
          </span>
        </motion.a>

        <motion.a
          href="#"
          variants={itemVariants}
          className="group col-span-1 flex cursor-pointer items-center justify-between bg-white p-6 transition-colors hover:bg-[#FDFDFD] md:col-span-4 md:p-8"
        >
          <span className="text-xs font-medium text-[#111111]">Me contacter</span>
          <span className="text-[10px] text-[#A0A0A0] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#111111]">
            →
          </span>
        </motion.a>

        <motion.div
          variants={itemVariants}
          className="col-span-1 flex flex-col justify-between gap-6 bg-white p-6 md:col-span-4 md:flex-row md:items-center md:gap-4 md:p-8"
        >
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#888888] transition-colors duration-200 hover:text-[#111111]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#888888] transition-colors duration-200 hover:text-[#111111]"
            >
              LinkedIn
            </a>
          </div>
          <a
            href="mailto:antoningrillet@asmix.fr"
            className="truncate text-[11px] text-[#888888] transition-colors duration-200 hover:text-[#111111]"
          >
            antoningrillet@asmix.fr
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
