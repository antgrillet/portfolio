"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

interface ContactSectionProps {
  onContactClick: () => void;
}

export function ContactSection({ onContactClick }: ContactSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#040507] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-[#040507]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(76,127,255,0.2),transparent)]" />
        <div className="absolute left-[12%] top-14 h-60 w-60 rounded-full bg-blue-500/[0.14] blur-[120px]" />
        <div className="absolute right-[8%] bottom-[-2rem] h-72 w-72 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md md:p-8"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-blue-200/70">
              Contact
            </p>
            <h2 className="text-balance text-[clamp(2rem,3.8vw,4rem)] leading-[0.94] font-semibold">
              Et si on en parlait ?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              Vous n&apos;avez pas de cahier des charges précis ou le bon
              vocabulaire technique ? Aucun problème. Que votre idée soit bien
              définie ou encore très floue, racontez-moi votre projet avec vos
              mots. On en discute simplement, sans pression.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-zinc-950 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Mail className="h-4 w-4" />
                Démarrer l&apos;échange
              </button>
              <a
                href="mailto:antoningrillet@asmix.fr"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/16 bg-white/8 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Envoyer un e-mail
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:antoningrillet@asmix.fr"
                className="block cursor-pointer rounded-[1.15rem] border border-white/10 bg-black/10 px-5 py-5 text-left transition-colors duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Email
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  antoningrillet@asmix.fr
                </div>
              </a>
              <div className="rounded-[1.15rem] border border-white/10 bg-black/10 px-5 py-5 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Premier échange
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  Simple, direct et sans jargon
                </div>
              </div>
              <a
                href="https://linkedin.com/in/antoningrillet"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer rounded-[1.15rem] border border-white/10 bg-black/10 px-5 py-5 text-left transition-colors duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  Continuer la discussion
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
