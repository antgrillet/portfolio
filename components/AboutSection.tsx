"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const skillPositions = [
  { top: "8%", right: "2%" },
  { top: "28%", right: "5%" },
  { bottom: "35%", right: "0%" },
  { top: "12%", left: "0%" },
  { bottom: "42%", left: "3%" },
];

export function AboutSection() {
  const t = useTranslations("About");
  const shouldReduceMotion = useReducedMotion();

  const skills = [
    t("skills.s1"),
    t("skills.s2"),
    t("skills.s3"),
    t("skills.s4"),
    t("skills.s5"),
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white px-6 py-28 lg:px-8 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.606 0.198 277 / 0.1) 0%, oklch(0.85 0.07 277 / 0.08) 50%, transparent 70%)" }}
        />
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="relative flex flex-col items-center">

          {/* Floating Skill Pills (desktop only) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="pointer-events-auto absolute"
                style={skillPositions[i]}
              >
                <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 shadow-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="whitespace-nowrap text-sm font-medium text-zinc-600">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Badge */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 font-serif text-sm italic text-zinc-500"
          >
            Hello!
          </motion.p>

          {/* Main Headline */}
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mx-auto max-w-3xl text-balance text-center font-display text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.3] tracking-tight text-zinc-950"
          >
            {t("headline")}{" "}
            <span className="font-serif italic text-primary">
              {t("highlightedText")}
            </span>
          </motion.h2>

          {/* Mobile-only pills */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-3 lg:hidden"
          >
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 shadow-sm"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-sm font-medium text-zinc-600">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

