"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageCircle,
  Layers,
  Rocket,
  Quote,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote:
      "Antonin a parfaitement compris mon univers et l'a retranscrit dans un site magnifique. Mes clientes adorent le résultat.",
    author: "Marie L.",
    role: "Fondatrice, Nails by Mams",
  },
  {
    id: 2,
    quote:
      "Travail rapide et professionnel. Le site a boosté notre visibilité et nous recevons maintenant beaucoup plus de demandes.",
    author: "Thomas R.",
    role: "Gérant, Inked Studio",
  },
];

const stepIcons = [MessageCircle, Layers, Rocket] as const;

const stepColors = [
  { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
  { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
  { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
];

export function ProcessSection() {
  const t = useTranslations("Process");
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const steps = [
    { num: "01", title: t("step1.title"), desc: t("step1.description"), deliverable: t("step1.deliverable") },
    { num: "02", title: t("step2.title"), desc: t("step2.description"), deliverable: t("step2.deliverable") },
    { num: "03", title: t("step3.title"), desc: t("step3.description"), deliverable: t("step3.deliverable") },
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const progress = progressRef.current;
      if (!track || !section || !progress) return;

      const totalScroll = track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, { x: -totalScroll, ease: "none" }, 0);
      tl.to(progress, { scaleX: 1, ease: "none" }, 0);
    });

    return () => mm.revert();
  }, [shouldReduceMotion]);

  return (
    <>
      <section ref={sectionRef} id="process" className="relative overflow-hidden">
        {/* Progress bar (desktop only, animated by GSAP) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden h-[3px] bg-zinc-100 lg:block">
          <div
            ref={progressRef}
            className="h-full origin-left bg-primary"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Track: flex row on desktop, stacked on mobile */}
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row lg:flex-nowrap"
        >
          {/* Intro panel */}
          <div className="flex w-full shrink-0 flex-col items-center justify-center px-6 py-16 lg:h-screen lg:w-screen lg:py-0">
            <p className="mb-4 font-serif text-sm italic text-zinc-500">
              / {t("badge")}
            </p>
            <h2 className="mx-auto max-w-2xl text-balance text-center font-display text-[clamp(2rem,5vw,4.5rem)] font-medium tracking-tight text-zinc-950">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-md text-center text-base text-zinc-500">
              {t("subtitle")}
            </p>
            <div className="mt-10 hidden animate-bounce flex-col items-center gap-2 text-zinc-400 lg:flex">
              <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
              <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
                <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="2" className="text-zinc-300" />
                <circle cx="10" cy="10" r="3" fill="currentColor" className="text-zinc-400" />
              </svg>
            </div>
          </div>

          {/* Step panels */}
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            const colors = stepColors[index];

            return (
              <div
                key={step.num}
                className="w-full shrink-0 px-6 py-12 lg:flex lg:h-screen lg:w-screen lg:items-center lg:px-12 lg:py-0 xl:px-20"
              >
                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  {/* Left */}
                  <motion.div
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="space-y-5 lg:space-y-6"
                  >
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl lg:h-12 lg:w-12 lg:rounded-2xl ${colors.bg} ${colors.text}`}>
                        <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-zinc-400">Étape</span>
                        <span className={`font-display font-bold ${colors.text}`}>{step.num}</span>
                        <span className="text-zinc-300">
                          / {String(steps.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-zinc-950">
                      {step.title}
                    </h3>

                    <p className="max-w-md text-base leading-relaxed text-zinc-600 lg:text-lg">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Right: Deliverable card */}
                  <motion.div
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`relative overflow-hidden rounded-2xl border p-6 lg:rounded-[2rem] lg:p-10 xl:p-14 ${colors.border} ${colors.bg}`}
                  >
                    <span className={`absolute right-4 top-2 font-display text-[5rem] font-bold leading-none lg:right-8 lg:top-4 lg:text-[8rem] ${colors.text} opacity-[0.06]`}>
                      {step.num}
                    </span>
                    <div className="relative space-y-3 lg:space-y-5">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 lg:text-xs">
                        {t("deliverableLabel")}
                      </p>
                      <p className={`font-display text-base font-medium leading-snug lg:text-xl ${colors.text}`}>
                        {step.deliverable}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-50/50 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm"
              >
                <Quote className="mb-6 h-7 w-7 text-primary/30" />
                <p className="mb-8 text-base leading-relaxed text-zinc-800">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-950">{testimonial.author}</div>
                    <div className="text-xs text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
