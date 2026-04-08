"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bdpImg } from "./assets";
import { liveHref } from "./live-site";

gsap.registerPlugin(ScrollTrigger);

export function BdpHomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgRef.current || !heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: 600 }}
    >
      <div
        ref={imgRef}
        className="absolute inset-0"
        style={{ transform: "scale(1.15)" }}
      >
        <img
          src={bdpImg("/images/page1/DSCF9150-scaled-e1764749808148.jpg")}
          alt="Le Bistrot du Port, bord du lac d'Aix-les-Bains"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,18,34,0.55) 0%, rgba(0,53,72,0.7) 60%, rgba(2,18,34,0.92) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontFamily: "system-ui",
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.65)",
            marginBottom: "1.5rem",
          }}
        >
          Bord du lac d&apos;Aix-les-Bains
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontWeight: 400,
            color: "#f5f0e8",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            maxWidth: "700px",
          }}
        >
          Le Bistrot du Port
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            fontFamily: "system-ui",
            fontSize: "1rem",
            color: "rgba(245,240,232,0.7)",
            marginTop: "1.5rem",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          Cuisine authentique, produits frais et de saison,
          <br />
          dans un cadre privilégié face au lac.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href={liveHref("/la-carte")}
            style={{
              background: "rgba(245,240,232,0.12)",
              border: "1px solid rgba(245,240,232,0.4)",
              color: "#f5f0e8",
              padding: "0.75rem 2rem",
              fontFamily: "system-ui",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              backdropFilter: "blur(4px)",
            }}
          >
            La Carte
          </a>
          <a
            href={liveHref("/contact")}
            style={{
              background: "transparent",
              border: "1px solid rgba(245,240,232,0.2)",
              color: "rgba(245,240,232,0.7)",
              padding: "0.75rem 2rem",
              fontFamily: "system-ui",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Réserver
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <p
          style={{
            fontFamily: "system-ui",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.5)",
            textAlign: "center",
          }}
        >
          Ouvert tous les jours de 9h à 00h&nbsp;&nbsp;·&nbsp;&nbsp;04 79 63 42 05
        </p>
      </motion.div>
    </div>
  );
}
