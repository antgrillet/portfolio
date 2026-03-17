"use client";

import { motion, useReducedMotion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Antonin a parfaitement compris mon univers et l'a retranscrit dans un site magnifique. Mes clientes adorent le résultat.",
    author: "Marie L.",
    role: "Fondatrice, Nails by Mams",
    project: "Site vitrine",
  },
  {
    id: 2,
    quote:
      "Travail rapide et professionnel. Le site a boosté notre visibilité et nous recevons maintenant beaucoup plus de demandes.",
    author: "Thomas R.",
    role: "Gérant, Inked Studio",
    project: "Portfolio tattoo",
  },
  {
    id: 3,
    quote:
      "La plateforme GC Handball a révolutionné ma façon de préparer les entraînements. Un outil indispensable pour tout coach.",
    author: "Julien M.",
    role: "Entraîneur, Club Handball",
    project: "Produit coaching",
  },
];

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-[#0a0d14] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-[#0a0d14]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(65,131,255,0.22),transparent)]" />
        <div className="absolute left-[-8%] top-1/3 h-72 w-72 rounded-full bg-blue-500/12 blur-[140px]" />
        <div className="absolute right-[-12%] bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-blue-200/70">
            Social proof
          </p>
          <h2 className="text-balance text-[clamp(1.9rem,3.4vw,3.4rem)] leading-[0.96] font-semibold">
            Des retours qui parlent
            <br />
            de clarté, pas seulement de code.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Quand une interface est juste, la perception change tout de suite :
            plus de confiance, plus de lisibilité, plus de désirabilité.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr_0.95fr]">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                duration: 0.64,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md ${
                index === 0 ? "lg:min-h-[380px]" : "lg:min-h-[320px]"
              }`}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Quote className="h-5 w-5" />
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-white text-white/90"
                    />
                  ))}
                </div>
              </div>

              <blockquote
                className={`text-balance font-medium text-white/92 ${
                  index === 0 ? "text-2xl leading-9" : "text-lg leading-8"
                }`}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-950">
                    {testimonial.author
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="mt-4 inline-flex rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/70">
                  {testimonial.project}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
