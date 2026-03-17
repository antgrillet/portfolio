"use client";

import React from "react";
import { motion } from "motion/react";

export default function VibeFive() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA] p-4 font-sans selection:bg-neutral-900 selection:text-white sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full max-w-[1000px] flex-col border border-neutral-200 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.02)]"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-400">
            Portfolio
          </span>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neutral-800" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-neutral-800">
              Disponible pour freelance
            </span>
          </div>
        </div>

        <div className="grid flex-grow grid-cols-1 md:grid-cols-12">
          <div className="flex flex-col justify-between border-b border-neutral-200 p-8 md:col-span-4 md:border-r md:border-b-0 md:p-10">
            <motion.div variants={containerVariants} initial="hidden" animate="show">
              <motion.h1
                variants={itemVariants}
                className="text-[13px] font-semibold tracking-tight text-neutral-900"
              >
                Antonin Grillet
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-1 text-[11px] font-medium tracking-wide text-neutral-500"
              >
                · React / Next.js / Motion design
              </motion.p>
            </motion.div>
          </div>

          <div className="flex min-h-[50vh] flex-col justify-center p-8 md:col-span-8 md:p-14 lg:p-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="max-w-lg"
            >
              <motion.h2
                variants={itemVariants}
                className="text-lg leading-snug font-normal tracking-[-0.02em] text-neutral-900 sm:text-xl"
              >
                Développeur front-end, orienté interface et mouvement.
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-[13px] leading-relaxed font-normal text-neutral-500"
              >
                Je conçois et développe des sites et applications web avec React,
                Next.js et TypeScript. Sensible au détail, au mouvement et à la
                clarté de l&apos;interface.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-12 flex flex-wrap items-center gap-4"
              >
                <button className="group flex items-center gap-2.5 bg-neutral-900 px-6 py-3 text-[11px] font-medium uppercase tracking-wider text-white transition-colors hover:bg-neutral-800">
                  Voir les réalisations
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 5H9M9 5L5 1M9 5L5 9"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </button>
                <button className="border border-neutral-200 bg-white px-6 py-3 text-[11px] font-medium uppercase tracking-wider text-neutral-900 transition-colors hover:border-neutral-300 hover:bg-neutral-50">
                  Me contacter
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-neutral-200 border-t border-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <a
            href="mailto:antoningrillet@asmix.fr"
            className="group flex items-center justify-between px-6 py-4 text-[11px] font-medium uppercase tracking-wider text-neutral-500 transition-colors hover:bg-[#FAFAFA] hover:text-neutral-900"
          >
            <span className="truncate pr-4">antoningrillet@asmix.fr</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="translate-y-1 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <path
                d="M1 9L9 1M9 1H2.5M9 1V7.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>
          <a
            href="https://github.com/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-4 text-[11px] font-medium uppercase tracking-wider text-neutral-500 transition-colors hover:bg-[#FAFAFA] hover:text-neutral-900"
          >
            GitHub
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="translate-y-1 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <path
                d="M1 9L9 1M9 1H2.5M9 1V7.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-4 text-[11px] font-medium uppercase tracking-wider text-neutral-500 transition-colors hover:bg-[#FAFAFA] hover:text-neutral-900"
          >
            LinkedIn
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="translate-y-1 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <path
                d="M1 9L9 1M9 1H2.5M9 1V7.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
