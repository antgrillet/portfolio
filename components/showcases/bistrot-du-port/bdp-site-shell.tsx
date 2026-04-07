"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ChefHat } from "lucide-react";
import { alt, siteImages } from "./site-images";
import { liveHref } from "./live-site";

const NAV: { label: string; href: string }[] = [
  { label: "Le Bistrot du Port", href: "/" },
  { label: "La Carte", href: "/la-carte" },
  { label: "Maître Restaurateur", href: "/maitre-restaurateur" },
  { label: "Evènements", href: "/evenements" },
  { label: "Contact", href: "/contact" },
];

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export function BdpSiteHeader() {
  const pathname = usePathname();
  const onPortfolioShowcase = pathname.includes("/bistrot-du-port");

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-[#ebebeb] bg-[#fdfdfd]/90 px-6 py-3 backdrop-blur-md md:px-12"
    >
      <Link href={liveHref("/")} className="flex items-center gap-3">
        <Image
          src={siteImages.home.wordmark}
          alt={alt.wordmark}
          width={140}
          height={64}
          className="h-7 w-auto object-contain object-left"
          priority
        />
        <span className="hidden font-serif text-[11px] font-medium uppercase tracking-[0.15em] text-[#141414] sm:inline">
          Bistrot du Port
        </span>
      </Link>

      <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
        {NAV.map(({ label, href }) => {
          const active =
            onPortfolioShowcase && href === "/"
              ? true
              : !onPortfolioShowcase &&
                (pathname === href || (href !== "/" && pathname.startsWith(href)));
          return (
            <Link
              key={href}
              href={liveHref(href)}
              className={`text-[9px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
                active ? "text-[#141414]" : "text-[#666666] hover:text-[#141414]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden flex-col items-end text-[9px] uppercase tracking-wider text-[#888888] md:flex">
          <span>Aix-les-Bains</span>
          <span>73100</span>
        </div>
        <Link
          href={liveHref("/contact")}
          className="bg-[#141414] px-4 py-1.5 text-[10px] uppercase tracking-widest text-[#fdfdfd] transition-colors duration-300 hover:bg-[#333333]"
        >
          Réserver
        </Link>
      </div>
    </motion.header>
  );
}

export function BdpSiteFooter() {
  return (
    <footer className="border-t border-[#ebebeb] bg-[#fdfdfd] px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-[9px] uppercase tracking-[0.2em] text-[#888888]">
          Bistrot du Port · Aix-les-Bains
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[9px] font-medium uppercase tracking-widest text-[#666666]">
          <Link href={liveHref("/mentions-legales/")} className="transition-colors hover:text-[#141414]">
            Mentions légales
          </Link>
          <Link href={liveHref("/recrutement")} className="transition-colors hover:text-[#141414]">
            Recrutement
          </Link>
          <Link href={liveHref("/contact")} className="transition-colors hover:text-[#141414]">
            Contact
          </Link>
          <a
            href="https://www.instagram.com/lopincommunication/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#141414]"
          >
            Lopin
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function Vibe1HeroMainOnly() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition },
  };

  return (
    <>
      <div className="relative h-[min(44vh,440px)] min-h-[260px] w-full lg:hidden">
        <Image
          src={siteImages.home.hero}
          alt={alt.heroLac}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-[#fdfdfd]"
          aria-hidden
        />
      </div>

      <main className="mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 flex flex-col justify-center px-6 py-16 md:px-12 lg:pl-20 lg:pr-16 xl:pl-32"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <span className="block h-px w-6 bg-[#141414]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#666666]">
              Lac du Bourget
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-8 max-w-lg font-serif text-4xl font-light leading-[1.1] tracking-tight text-[#141414] md:text-5xl lg:text-6xl"
          >
            L&apos;élégance <br />
            <span className="italic text-[#778899]">à fleur d&apos;eau.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-12 max-w-md text-xs font-light leading-relaxed text-[#555555] md:text-sm"
          >
            Cuisine de bistrot au bord du lac : produits locaux, carte et ardoise, label Maître
            Restaurateur.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12 grid grid-cols-2 gap-8 border-l border-[#ebebeb] pl-6"
          >
            <div className="flex flex-col gap-1.5">
              <div className="mb-1 flex items-center gap-1.5 text-[#141414]">
                <Clock className="h-3 w-3" strokeWidth={1.5} aria-hidden />
                <span className="text-[10px] font-semibold uppercase tracking-widest">Service</span>
              </div>
              <div className="flex flex-col gap-1 text-[11px] leading-tight text-[#666666]">
                <span>
                  <strong className="font-medium text-[#141414]">Ouvert :</strong> 9h00 – 00h00 (7j/7)
                </span>
                <span>
                  <strong className="font-medium text-[#141414]">Midi :</strong> 12h00 – 14h15 (lun.–ven.)
                </span>
                <span>
                  <strong className="font-medium text-[#141414]">Soir :</strong> 19h00 – 22h00 (lun.–ven.)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="mb-1 flex items-center gap-1.5 text-[#141414]">
                  <ChefHat className="h-3 w-3" strokeWidth={1.5} aria-hidden />
                  <span className="text-[10px] font-semibold uppercase tracking-widest">Distinction</span>
                </div>
                <span className="text-[11px] text-[#666666]">
                  Titre d&apos;État
                  <br />
                  Maître Restaurateur
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <Link
              href={liveHref("/la-carte")}
              className="group flex items-center gap-3 border-b border-[#141414] pb-1 text-xs font-medium uppercase tracking-wider text-[#141414] transition-colors hover:border-[#666666] hover:text-[#666666]"
            >
              Découvrir la carte
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative hidden min-h-[520px] items-stretch overflow-hidden py-12 pl-6 pr-16 lg:flex xl:pr-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex w-full max-w-[560px] flex-col self-center overflow-hidden border border-[#e5e5e5] bg-[#0a0a0a] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.35)]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={siteImages.home.hero}
                alt={alt.heroLac}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 42vw, 0px"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-transparent to-[#fdfdfd]/15"
                aria-hidden
              />
              <p className="absolute bottom-6 left-6 right-6 text-balance font-serif text-lg font-light italic leading-snug text-[#fdfdfd] drop-shadow-sm md:text-xl">
                Lac du Bourget · Aix-les-Bains
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 bg-[#141414] px-5 py-3">
              <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#bdbdbd]">
                Maître Restaurateur
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#888888]">73100</span>
            </div>
          </motion.div>
          <div
            className="pointer-events-none absolute bottom-16 right-8 rotate-180 xl:right-12"
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#b0b0b0]">
              Photo — Bistrot du Port
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

const INTRO_PACK =
  "Le bistrot vous ouvre ses portes que ce soit pour le petit-déjeuner, une pause gourmande, à l'heure du déjeuner et du dîner. Profitez d'un cadre privilégié tout en savourant une cuisine authentique, à base de produits frais et de saison, servie dans une ambiance chaleureuse.";

const MAITRE_PACK =
  "Le seul label de la profession reconnu par l'État. Il récompense le professionnalisme d'un chef et de son Établissement. Valorise une cuisine entièrement faite maison, réalisée sur place à partir de produits bruts, frais, de terroir, toujours de saison en faisant appel aux producteurs locaux.";

export function HomeBelowFold() {
  const v = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="border-t border-[#ebebeb] bg-[#fafafa]">
      <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={v}>
          <h2 className="font-serif text-2xl font-light tracking-tight text-[#141414] md:text-3xl">
            Le Bistrot du Port
          </h2>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#666666]">
            Bord du lac d&apos;Aix-les-Bains
          </p>
          <p className="mt-8 text-sm leading-relaxed text-[#555555]">{INTRO_PACK}</p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={v}
        >
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.28em] text-[#888888]">Le lieu</p>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">
            <div className="relative aspect-[21/11] overflow-hidden border border-[#ebebeb] bg-[#f0f0f0] sm:col-span-2 lg:col-span-12 lg:aspect-[24/9]">
              <Image
                src={siteImages.home.wideA}
                alt={alt.salleLarge}
                fill
                className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, min(1200px, 90vw)"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-[#ebebeb] bg-[#f0f0f0] sm:col-span-1 lg:col-span-6 lg:min-h-[280px]">
              <Image
                src={siteImages.home.wideB}
                alt={alt.detailSalle}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 45vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-[#ebebeb] bg-[#f0f0f0] sm:col-span-1 lg:col-span-6 lg:min-h-[280px]">
              <Image
                src={siteImages.home.hero}
                alt={alt.heroLac}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 45vw"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={v}
          className="mt-4 md:mt-0"
        >
          <h3 className="font-serif text-xl text-[#141414]">Jours et horaires d&apos;ouvertures</h3>
          <p className="mt-2 text-xs text-[#666666]">Tous les jours de 9h à 00h</p>
          <ul className="mt-6 space-y-4 text-sm text-[#555555]">
            <li>
              <span className="font-medium text-[#141414]">Lundi au vendredi</span>
              <br />
              Service de midi : 12h00 – 14h15
              <br />
              Service du soir : 19h00 – 22h00
            </li>
            <li>
              <span className="font-medium text-[#141414]">Samedi</span>
              <br />
              Service du midi : 12h00 – 14h30
              <br />
              Service du soir : 19h00 – 22h30
            </li>
            <li>
              <span className="font-medium text-[#141414]">Dimanche</span>
              <br />
              Service du midi : 12h00 – 15h00
              <br />
              Service du soir : 19h00 – 22h00
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={v}
          className="mt-16"
        >
          <h3 className="font-serif text-xl text-[#141414]">Pour nous contacter</h3>
          <address className="mt-4 text-sm not-italic leading-relaxed text-[#555555]">
            2 Bld Robert Barrier Le Grand Port à Aix-les-Bains
            <br />
            <a href="tel:+33479634205" className="text-[#141414] underline-offset-2 hover:underline">
              04 79 63 42 05
            </a>
            <br />
            <a
              href="mailto:lebistrotduport.aixlesbains@orange.fr"
              className="text-[#141414] underline-offset-2 hover:underline"
            >
              lebistrotduport.aixlesbains@orange.fr
            </a>
          </address>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={v}
          className="mt-16 border-l border-[#ebebeb] pl-6"
        >
          <h3 className="font-serif text-xl text-[#141414]">Maître Restaurateur</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#555555]">{MAITRE_PACK}</p>
          <Link
            href={liveHref("/maitre-restaurateur")}
            className="mt-6 inline-flex items-center gap-2 border-b border-[#141414] pb-0.5 text-xs font-medium uppercase tracking-wider text-[#141414] transition-colors hover:border-[#666666] hover:text-[#666666]"
          >
            En savoir plus
            <ArrowRight className="h-3 w-3" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
