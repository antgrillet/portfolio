"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

interface ContactSectionProps {
  onContactClick: () => void;
}

export function ContactSection({ onContactClick }: ContactSectionProps) {
  const t = useTranslations("Contact");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-violet-50/40 px-6 py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[500px] w-[800px] blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.606 0.198 277 / 0.12) 0%, oklch(0.85 0.07 277 / 0.1) 50%, transparent 70%)" }}
        />
      </div>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2.5rem] border border-violet-100/60 bg-gradient-to-br from-white via-violet-50/30 to-white p-8 shadow-sm shadow-violet-100/50 sm:p-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-zinc-950">
              {t("title")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
              Que votre idée soit bien définie ou encore très floue, racontez-moi votre projet. On en discute simplement, sans pression et sans jargon.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex cursor-pointer w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Mail className="h-5 w-5" />
                {t("submit")}
              </button>
              <a
                href="mailto:antoningrillet@asmix.fr"
                className="inline-flex cursor-pointer w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-base font-medium text-zinc-950 transition-colors duration-300 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Envoyer un e-mail
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
