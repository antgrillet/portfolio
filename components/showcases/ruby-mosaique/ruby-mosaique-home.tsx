"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { C, IMGS } from "./constants";
import { RubyInfiniteMarquee } from "./ruby-infinite-marquee";
import { liveHref } from "./live-site";

// ─── Gallery data ───────────────────────────────────────────────────────────
const gallery = [
  { img: IMGS.heroAccueil1, rot: -14, x: -34, y: 12, w: "22vw" },
  { img: IMGS.hero2,         rot:   9, x:  32, y:  8, w: "18vw" },
  { img: IMGS.mosaic3,       rot:  -6, x: -22, y: 58, w: "20vw" },
  { img: IMGS.mosaic1,       rot:  16, x:  26, y: 62, w: "16vw" },
  { img: IMGS.portrait,      rot:  -9, x:   0, y: 42, w: "15vw" },
  { img: IMGS.cours,         rot:  13, x: -10, y: 78, w: "17vw" },
  { img: IMGS.heroAccueil2,  rot:  -7, x:  14, y: 80, w: "19vw" },
];

// ─── Stagger variants ────────────────────────────────────────────────────────
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};
const slideIn = {
  hidden: { opacity: 0, x: -50 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

export function RubyMosaiqueHome() {
  const galleryRef   = useRef<HTMLDivElement>(null);
  const imagesRef    = useRef<(HTMLDivElement | null)[]>([]);
  const aboutRef     = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  // ── Parallax for hero section ──────────────────────────────────────────────
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  // ── About parallax ────────────────────────────────────────────────────────
  const { scrollYProgress: aboutScroll } = useScroll({ target: aboutRef, offset: ["start end", "end start"] });
  const aboutImgY = useTransform(aboutScroll, [0, 1], ["-10%", "10%"]);

  // ── GSAP Gallery Fly-in ───────────────────────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!galleryRef.current) return;

      // Staggered initial entry animation
      gsap.fromTo(
        imagesRef.current.filter(Boolean),
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1, scale: 1,
          duration: 1, stagger: 0.1, ease: "back.out(1.4)",
          scrollTrigger: { trigger: galleryRef.current, start: "top 80%", once: true }
        }
      );

      // The hero fly-in: scattered → grid (the signature animation)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        }
      });

      imagesRef.current.forEach((el, i) => {
        if (!el) return;
        const col = i % 3;
        const row = Math.floor(i / 3);
        const targetX = (col - 1) * 26; // vw
        const targetY = (row - 1) * 38; // vh
        tl.to(el, {
          x: `${targetX}vw`,
          y: `${targetY}vh`,
          rotation: 0,
          scale: 1,
          ease: "power3.inOut",
        }, 0);
      });

      // Stats counter
      if (statsRef.current) {
        const nums = statsRef.current.querySelectorAll("[data-count]");
        nums.forEach((el) => {
          const target = parseInt(el.getAttribute("data-count") || "0");
          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: target,
              duration: 2,
              snap: { innerText: 1 },
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 80%", once: true }
            }
          );
        });
      }

    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#f0f0f0] pt-24 pb-16 px-6">

        {/* Ambient background shape */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(153,20,34,0.06)_0%,transparent_55%)]" />
        </div>

        {/* Animated floating eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16,1,0.3,1] }}
          className="text-[#991422] text-[10px] uppercase tracking-[0.55em] font-bold mb-8 z-10"
        >
          {C.name} · Mosaïste · {C.city}
        </motion.p>

        {/* Main title – word-by-word reveal */}
        <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="z-10">
          <h1 className="text-[clamp(2.5rem,6vw,6rem)] leading-[1.05] max-w-5xl mx-auto">
            {["L'atelier", "créatif", "de"].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.85, ease: [0.16,1,0.3,1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
            <br />
            {["mosaïque", "&", "d'encadrement."].map((w, i) => (
              <span key={i} className={`inline-block overflow-hidden mr-[0.3em] ${w === "mosaïque" ? "italic text-[#991422]" : ""}`}>
                <motion.span
                  className="inline-block"
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.85, ease: [0.16,1,0.3,1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.9 }}
            className="mt-8 text-[#666] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {C.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
          >
            <Link href={liveHref("/mosaiques")}>
              <motion.span
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                className="inline-block bg-[#1a1a1a] hover:bg-[#991422] text-white px-10 py-4 text-[11px] uppercase tracking-widest font-bold transition-colors duration-300"
              >
                Voir les créations
              </motion.span>
            </Link>
            <Link href={liveHref("/contact")} className="text-[#1a1a1a]/60 hover:text-[#991422] text-[11px] uppercase tracking-widest font-bold border-b border-current transition-colors pb-0.5">
              {C.cta}
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-[#1a1a1a]/30 text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
          <motion.div
            animate={{ scaleY: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[#991422] to-transparent origin-top"
          />
        </motion.div>
      </section>

      {/* ─── MARQUEE 1 ─────────────────────────────────────────────────────── */}
      <RubyInfiniteMarquee
        text="Mosaïque · Encadrement · Créations Uniques · Aix-les-Bains · Fait à la Main · Sur Commande"
        className="bg-[#991422] py-4 text-white/80 text-[11px] uppercase tracking-[0.25em] font-bold"
        speed="normal"
      />

      {/* ─── GALLERY WALL FLY-IN ───────────────────────────────────────────── */}
      <section ref={galleryRef} className="bg-[#0a0a0a] relative">
        <div className="h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Giant ambient text */}
          <p className="absolute text-[18vw] italic font-bold text-white/[0.03] select-none pointer-events-none leading-none" style={{ fontFamily: "var(--font-fraunces)" }}>
            CRÉATIONS
          </p>

          {/* Label */}
          <div className="absolute top-10 left-10 z-10">
            <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">Galerie / Pièces uniques</p>
          </div>
          <div className="absolute bottom-10 right-10 z-10 text-right">
            <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">Faites défiler</p>
          </div>

          {/* Scattered photos */}
          {gallery.map((g, i) => (
            <div
              key={i}
              ref={(el) => { imagesRef.current[i] = el; }}
              className="absolute aspect-[3/4] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden border-[5px] border-[#f0f0f0] group cursor-pointer"
              style={{
                width: g.w,
                transform: `translate(${g.x}vw, ${g.y}vh) rotate(${g.rot}deg) scale(1.3)`,
                opacity: 0,
                zIndex: i + 1,
              }}
            >
              <Image src={g.img} alt={`Création ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#991422]/0 group-hover:bg-[#991422]/15 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES — Animated hover accordion ──────────────────────────── */}
      <section className="bg-[#f0f0f0] py-32 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20"
          >
            <div>
              <p className="text-[#991422] text-[10px] uppercase tracking-[0.45em] font-bold mb-5">Mes savoir-faire</p>
              <h2 className="text-4xl md:text-6xl leading-tight max-w-xl">Créations qui <em className="italic text-[#991422]">parlent</em> d'elles-mêmes.</h2>
            </div>
            <Link href={liveHref("/mosaiques")} className="text-[11px] uppercase tracking-widest font-bold border-b border-[#1a1a1a]/30 hover:border-[#991422] hover:text-[#991422] transition-colors pb-0.5 whitespace-nowrap">
              Voir tout →
            </Link>
          </motion.div>

          <div className="space-y-0 divide-y divide-[#1a1a1a]/10">
            {C.services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16,1,0.3,1] }}
                className="group py-8 cursor-pointer"
                onMouseEnter={() => setActiveService(i)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <motion.span
                      animate={{ color: activeService === i ? "#991422" : "rgba(26,26,26,0.2)" }}
                      className="text-3xl font-bold"
                    >
                      0{i + 1}.
                    </motion.span>
                    <div>
                      <h3 className="text-2xl md:text-3xl group-hover:text-[#991422] transition-colors duration-300">{s.title}</h3>
                      <AnimatePresence mode="wait">
                        {activeService === i && (
                          <motion.p
                            key={i}
                            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="text-[#666] text-sm leading-relaxed mt-2 max-w-xl overflow-hidden"
                          >
                            {s.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <motion.span
                    animate={{ x: activeService === i ? 0 : -10, opacity: activeService === i ? 1 : 0 }}
                    className="text-[#991422] text-2xl"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE 2 ─────────────────────────────────────────────────────── */}
      <RubyInfiniteMarquee
        text="La passion avant le métier · Expérimenter · Improviser · Réaliser"
        className="bg-[#1a1a1a] py-5 text-white/30 text-xs uppercase tracking-[0.2em] italic"
        speed="slow"
        direction="right"
      />

      {/* ─── ABOUT — Split with deep parallax ─────────────────────────────── */}
      <section ref={aboutRef} className="bg-[#f5eee0] py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-14 flex flex-col md:flex-row gap-16 items-center">

          {/* Portrait with parallax */}
          <motion.div
            style={{ y: aboutImgY }}
            className="relative w-full md:w-5/12 flex-shrink-0"
          >
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="aspect-[3/4] relative overflow-hidden rounded-t-full shadow-2xl"
            >
              <Image src={IMGS.portrait} alt={C.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </motion.div>
            {/* Decorative bordeaux accent */}
            <motion.div
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute -bottom-8 -right-8 w-24 h-48 bg-[#991422]/15 -z-10 origin-bottom"
            />
          </motion.div>

          {/* Text content staggered */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1"
          >
            <motion.p variants={fadeUp} className="text-[#991422] text-[10px] uppercase tracking-[0.45em] font-bold mb-6">
              À propos
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl leading-tight mb-8">
              La passion avant <em className="italic">le métier</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#555] text-lg leading-relaxed mb-6">
              {C.bio}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] leading-relaxed mb-6">
              {C.bio2}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] leading-relaxed italic border-l-4 border-[#991422] pl-5">
              {C.bio3}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10">
              <Link href={liveHref("/a-propos")}>
                <motion.span
                  whileHover={{ x: 6 }} className="inline-flex items-center gap-3 text-[#991422] font-bold text-[11px] uppercase tracking-widest"
                >
                  En savoir plus
                  <span className="w-6 h-px bg-[#991422] transition-all duration-300" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="bg-[#991422] text-white py-24 px-8 md:px-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { n: 10, suffix: "+", label: "Années de passion" },
            { n: 100, suffix: "+", label: "Créations réalisées" },
            { n: 4,  suffix: "",  label: "Types de créations" },
            { n: 1,  suffix: "",  label: "Atelier à Aix-les-Bains" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <span data-count={stat.n}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-white/70 text-[11px] uppercase tracking-[0.25em] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── GALLERY PREVIEW with hover zoom ─────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {[
              { img: IMGS.heroAccueil1, title: "Fresques murales",   span: "col-span-2" },
              { img: IMGS.mosaic2,      title: "Statues & Bustes",    span: "" },
              { img: IMGS.hero2,        title: "Atelier & Process",   span: "" },
              { img: IMGS.mosaic1,      title: "Créations 2024–2025", span: "" },
              { img: IMGS.heroAccueil2, title: "Mosaïques classiques", span: "col-span-2" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative aspect-square overflow-hidden group cursor-pointer ${item.span}`}
              >
                <Image src={item.img} alt={item.title} fill className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <motion.span
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-white font-bold text-sm uppercase tracking-widest"
                  >
                    {item.title}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 text-center"
          >
            <Link href={liveHref("/mosaiques")}>
              <motion.span
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                className="inline-block border border-white/30 text-white hover:bg-white hover:text-[#0a0a0a] px-12 py-4 text-[11px] uppercase tracking-widest font-bold transition-all duration-300"
              >
                Toute la galerie
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── QUOTE CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#f0f0f0] py-40 px-8 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 border border-[#991422]/15 rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 border border-[#991422]/10 rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16,1,0.3,1] }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <p className="text-[#991422] text-[10px] uppercase tracking-[0.45em] font-bold mb-10">
            Sylvie Rubaud
          </p>
          <blockquote className="text-3xl md:text-5xl leading-tight italic mb-16">
            "{C.quote}"
          </blockquote>
          <Link href={liveHref("/contact")}>
            <motion.span
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="inline-block bg-[#991422] hover:bg-[#1a1a1a] text-white px-14 py-5 text-[11px] uppercase tracking-widest font-bold transition-colors duration-300"
            >
              Démarrer votre projet
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* ─── ATELIERS ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] text-white py-32 px-8 md:px-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="relative w-full md:w-1/2 aspect-video overflow-hidden">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <Image src={IMGS.cours} alt="Cours de mosaïque" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#991422]/20" />
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-100px" }} className="flex-1"
          >
            <motion.p variants={fadeUp} className="text-[#991422] text-[10px] uppercase tracking-[0.45em] font-bold mb-6">
              Cours & Ateliers
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl leading-snug mb-6">
              Apprendre l'art de la <em className="italic text-[#991422]">mosaïque</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-base leading-relaxed mb-10">
              J'aime partager mon temps entre la création de mosaïque artistique ou décorative et ma seconde passion l'encadrement. Des stages pour tous niveaux, à {C.city}.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href={liveHref("/actualites")}>
                <motion.span
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="inline-block bg-white text-[#1a1a1a] hover:bg-[#991422] hover:text-white px-10 py-4 text-[11px] uppercase tracking-widest font-bold transition-all duration-300"
                >
                  Les prochains ateliers
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
