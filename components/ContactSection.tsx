"use client";

import Image from "next/image";
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
      className="relative overflow-hidden border-t border-stone-200/80 bg-[linear-gradient(180deg,#f6f1e8_0%,#f0ebe3_100%)] px-4 py-16 text-stone-900 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[5%] top-10 h-64 w-64 rounded-full bg-orange-200/30 blur-[100px]" />
        <div className="absolute bottom-0 left-[10%] h-56 w-56 rounded-full bg-sky-200/25 blur-[90px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
        <motion.figure
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-md lg:sticky lg:top-28 lg:mx-0 lg:block lg:max-w-none"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-200/90 bg-white shadow-[0_28px_70px_rgba(28,27,25,0.1)]">
            <Image
              src="/images/profile-1.jpg"
              alt="Portrait d'Antonin Grillet"
              width={900}
              height={1125}
              className="h-auto w-full object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
          </div>
        </motion.figure>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.5rem] border border-stone-200/90 bg-white/90 p-6 shadow-[0_24px_60px_rgba(28,27,25,0.07)] backdrop-blur-md md:p-8"
        >
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b84328]">
              Contact
            </p>
            <h2 className="font-display text-balance text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.02] font-semibold text-stone-900">
              Et si on en parlait ?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl">
              Vous n&apos;avez pas de cahier des charges précis ou le bon
              vocabulaire technique ? Aucun problème. Que votre idée soit bien
              définie ou encore très floue, racontez-moi votre projet avec vos
              mots. On en discute simplement, sans pression.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                type="button"
                onClick={onContactClick}
                className="btn-editorial-solid inline-flex cursor-pointer items-center gap-2 px-7 py-4 text-sm transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Démarrer l&apos;échange
              </button>
              <a
                href="mailto:antoningrillet@asmix.fr"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-stone-800/90 bg-white/90 px-7 py-4 text-sm font-semibold text-stone-900 transition-colors duration-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b2b]"
              >
                Envoyer un e-mail
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:antoningrillet@asmix.fr"
                className="block cursor-pointer rounded-[1.15rem] border border-stone-200/90 bg-[#faf7f2] px-5 py-5 text-left transition-colors duration-300 hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b2b]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Email
                </div>
                <div className="mt-2 text-base font-medium text-stone-900">
                  antoningrillet@asmix.fr
                </div>
              </a>
              <div className="rounded-[1.15rem] border border-stone-200/90 bg-[#faf7f2] px-5 py-5 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Premier échange
                </div>
                <div className="mt-2 text-base font-medium text-stone-900">
                  Simple, direct et sans jargon
                </div>
              </div>
              <a
                href="https://linkedin.com/in/antoningrillet"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer rounded-[1.15rem] border border-stone-200/90 bg-[#faf7f2] px-5 py-5 text-left transition-colors duration-300 hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b2b]"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </div>
                <div className="mt-2 text-base font-medium text-stone-900">
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
