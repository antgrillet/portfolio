"use client";

import React from "react";
import { motion } from "motion/react";

export default function VibeFour() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#EBE9E4] p-4 font-sans selection:bg-[#D4D2C9] selection:text-[#1A1A1A] sm:p-8 md:p-12">
      <div className="relative flex w-full max-w-[1024px] flex-col overflow-hidden bg-[#F4F3EF] shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)]">
        <div
          className="pointer-events-none absolute inset-0 z-50 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E")',
          }}
        />

        <header className="relative z-10 flex items-center justify-between border-b border-[#E2DFD8] px-5 py-4 sm:px-8">
          <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A] sm:text-xs">
            Portfolio
          </div>
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-1.5 w-1.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5A6349] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5A6349]" />
            </div>
            <span className="text-[10px] tracking-wide text-[#6B6A65] sm:text-xs">
              Disponible pour freelance
            </span>
          </div>
        </header>

        <div className="relative z-10 flex flex-col md:flex-row">
          <div className="flex flex-col justify-between border-b border-[#E2DFD8] bg-[#EFEFEA]/50 backdrop-blur-sm md:w-[280px] md:border-r md:border-b-0">
            <div className="border-b border-[#E2DFD8] p-6 sm:p-8 md:border-none">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-[11px] leading-[1.8] tracking-wide text-[#5C5B56] sm:text-xs"
              >
                Antonin Grillet ·
                <br />
                React / Next.js /
                <br />
                Motion design
              </motion.div>
            </div>

            <div className="hidden flex-col gap-3 p-8 md:flex">
              <motion.a
                href="https://github.com/antoningrillet"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-fit text-[11px] text-[#8C8B85] transition-colors duration-300 hover:text-[#1A1A1A]"
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/antoningrillet"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="w-fit text-[11px] text-[#8C8B85] transition-colors duration-300 hover:text-[#1A1A1A]"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:antoningrillet@asmix.fr"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-2 w-fit text-[11px] text-[#8C8B85] transition-colors duration-300 hover:text-[#1A1A1A]"
              >
                antoningrillet@asmix.fr
              </motion.a>
            </div>
          </div>

          <div className="flex min-h-[50vh] flex-1 flex-col justify-center p-6 sm:p-10 md:min-h-[65vh] md:p-16 lg:p-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                },
              }}
              className="max-w-[480px]"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="mb-8 text-2xl leading-[1.2] font-serif tracking-tight text-[#1C1B1A] sm:text-3xl lg:text-[2rem]"
              >
                Développeur front-end, orienté interface et mouvement.
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="mb-12 text-xs leading-[1.8] tracking-wide text-[#63625D] sm:text-[13px]"
              >
                Je conçois et développe des sites et applications web avec React,
                Next.js et TypeScript. Sensible au détail, au mouvement et à la
                clarté de l&apos;interface.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="flex flex-wrap items-center gap-4"
              >
                <button className="group relative overflow-hidden bg-[#1C1B1A] px-6 py-3.5 text-[11px] uppercase tracking-[0.15em] text-[#F4F3EF] transition-transform active:scale-[0.98]">
                  <span className="relative z-10">Voir les réalisations</span>
                  <div className="absolute inset-0 translate-y-full bg-[#363533] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                </button>

                <button className="border border-[#D4D2C9] px-6 py-3.5 text-[11px] uppercase tracking-[0.15em] text-[#1C1B1A] transition-all duration-300 hover:border-[#C4C2B9] hover:bg-[#EAE8E1] active:scale-[0.98]">
                  Me contacter
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E2DFD8] bg-[#EFEFEA]/50 p-6 md:hidden">
          <a
            href="https://github.com/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#8C8B85] transition-colors hover:text-[#1A1A1A]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#8C8B85] transition-colors hover:text-[#1A1A1A]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:antoningrillet@asmix.fr"
            className="mt-1 basis-full text-[11px] text-[#8C8B85] transition-colors hover:text-[#1A1A1A]"
          >
            antoningrillet@asmix.fr
          </a>
        </div>
      </div>
    </section>
  );
}
