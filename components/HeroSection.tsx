"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const t = useTranslations("Hero");
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden pb-0 pt-28 sm:pt-32 md:pt-36"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -right-32 h-[600px] w-[600px] blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.606 0.198 277 / 0.15) 0%, oklch(0.606 0.198 277 / 0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -left-48 h-[500px] w-[500px] blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.75 0.12 277 / 0.2) 0%, oklch(0.85 0.07 277 / 0.1) 50%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[900px] blur-2xl"
          style={{ background: "radial-gradient(circle, oklch(0.606 0.198 277 / 0.08) 0%, oklch(0.92 0.04 277 / 0.15) 50%, transparent 70%)" }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-0">

          {/* Left Column: Typography + badges */}
          <div className="relative z-10 lg:col-span-7 lg:pb-24">
            <motion.h1
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-tight text-zinc-950"
            >
              {t("greeting")}
              <br />
              <span className="font-serif italic text-primary">
                {t("title")}
              </span>
            </motion.h1>

            {/* Availability Badge */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 md:mt-10"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                {t("availability")}
              </span>
            </motion.div>

            {/* Trusted By - avatar stack */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-zinc-200 to-zinc-300 text-xs font-bold text-zinc-500 shadow-sm"
                  >
                    {["AG", "ML", "TR"][i]}
                  </div>
                ))}
              </div>
              <p className="max-w-[220px] text-sm leading-tight text-zinc-500">
                {t("trustedBy")}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Photo + description + CTA */}
          <div className="relative lg:col-span-5 lg:-mr-12 xl:-mr-24">
            {/* Photo area with gradient */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={shouldReduceMotion ? undefined : { y: photoY }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[3rem] bg-zinc-200 sm:rounded-t-[4rem]"
            >
              <Image
                src="/hero-portrait.jpg"
                alt={t("photoAlt")}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/70"
                aria-hidden
              />
            </motion.div>

            {/* Description + CTA overlapping bottom-right of photo */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative z-10 -mt-32 ml-auto flex max-w-sm flex-col gap-6 rounded-[2rem] border border-zinc-100 bg-white/90 p-6 shadow-xl backdrop-blur-md sm:p-8 lg:-ml-16 lg:max-w-xs"
            >
              <p className="text-base leading-relaxed text-zinc-600">
                {t("description")}
              </p>
              <button
                type="button"
                onClick={onContactClick}
                className="group inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <ArrowRight className="h-4 w-4" />
                {t("cta")}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee Logos */}
      <div className="mt-8 border-t border-zinc-100 bg-white/60 py-6 backdrop-blur-sm">
        <div className="relative flex w-full overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-16 px-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">{t("marquee.item1")}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">{t("marquee.item2")}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">{t("marquee.item3")}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">{t("marquee.item4")}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">{t("marquee.item5")}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
