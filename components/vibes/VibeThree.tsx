"use client";

import React from "react";
import { motion } from "motion/react";

const customEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: customEase },
  },
};

export default function VibeThree() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3F3F3] p-4 font-sans text-[#111111] selection:bg-[#E50000] selection:text-white md:p-8 lg:p-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex w-full max-w-[1200px] flex-col overflow-hidden border border-[#111111] bg-[#FAFAFA] shadow-2xl shadow-black/5"
      >
        <div className="grid grid-cols-2 border-b border-[#111111] md:grid-cols-12">
          <motion.div
            variants={itemVariants}
            className="col-span-1 flex items-center border-r border-[#111111] p-3 md:col-span-3 md:p-4"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#111111] md:text-xs">
              Portfolio
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 flex items-center justify-end gap-3 bg-white p-3 md:col-span-9 md:justify-start md:p-4"
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E50000] opacity-30" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E50000]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.1em] text-[#555555] md:text-xs">
              Disponible pour freelance
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 border-b border-[#111111] md:grid-cols-12">
          <motion.div
            variants={itemVariants}
            className="relative flex min-h-[45vh] flex-col justify-between overflow-hidden border-b border-[#111111] bg-white p-6 md:col-span-8 md:border-r md:border-b-0 md:p-10 lg:p-14"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              <span className="mb-12 block text-[10px] uppercase tracking-[0.15em] text-[#888888] md:text-xs">
                Antonin Grillet · React / Next.js / Motion design
              </span>
            </div>

            <h1 className="relative z-10 max-w-[90%] text-2xl leading-[1.2] font-medium tracking-tight text-[#111111] md:max-w-[80%] md:text-3xl lg:text-4xl">
              Développeur front-end, orienté interface et mouvement.
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-end bg-[#FAFAFA] p-6 md:col-span-4 md:p-10 lg:p-14"
          >
            <p className="text-[13px] leading-[1.6] font-normal tracking-[-0.01em] text-[#444444] md:text-[14px]">
              Je conçois et développe des sites et applications web avec React,
              Next.js et TypeScript. Sensible au détail, au mouvement et à la
              clarté de l&apos;interface.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 text-[10px] font-medium uppercase tracking-[0.15em] md:grid-cols-12 md:text-xs">
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 border-b border-[#111111] md:col-span-4 md:border-r md:border-b-0"
          >
            <a
              href="#contact"
              className="group flex items-center justify-between border-r border-[#111111] p-4 transition-colors duration-300 hover:bg-[#111111] hover:text-white"
            >
              <span>Me contacter</span>
              <svg
                className="h-3 w-3 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#work"
              className="flex items-center justify-center bg-white p-4 text-center transition-colors duration-300 hover:bg-[#111111] hover:text-white"
            >
              Voir les réalisations
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 md:col-span-8">
            <a
              href="https://github.com/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-r border-[#111111] p-4 transition-colors duration-300 hover:bg-white hover:text-[#E50000]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/antoningrillet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-r border-[#111111] p-4 transition-colors duration-300 hover:bg-white hover:text-[#E50000]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:antoningrillet@asmix.fr"
              className="truncate px-2 text-center text-[9px] transition-colors duration-300 hover:bg-white hover:text-[#E50000] sm:text-[10px] md:p-4 md:text-xs"
            >
              antoningrillet@asmix.fr
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
