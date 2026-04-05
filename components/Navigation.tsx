"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#parcours" },

  { label: "Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...navItems.map((item) => item.href.slice(1))];
      const scrollPosition = window.scrollY + window.innerHeight * 0.24;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#c24b2b] focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu principal
      </a>

      <motion.nav
        initial={shouldReduceMotion ? { opacity: 0 } : { y: -24, opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 px-3 sm:px-6"
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full border-amber-100/40 px-3 py-2 text-zinc-900">
          <div className="flex items-center gap-3">
            <motion.a
              href="#hero"
              initial={shouldReduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.14 }}
              className="font-display cursor-pointer rounded-full px-3 py-2 text-sm font-semibold tracking-tight text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#c24b2b]"
              aria-label="Antonin Grillet - Retour à l'accueil"
            >
              Antonin
            </motion.a>
            <span className="hidden rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-zinc-500 md:inline-flex">
              React / Next.js / Motion
            </span>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={
                    shouldReduceMotion ? undefined : { opacity: 0, y: -10 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * (index + 1) }}
                  className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#c24b2b] ${
                    isActive
                      ? "text-zinc-950"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="floating-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
                      transition={{
                        type: "spring",
                        bounce: 0.18,
                        duration: 0.5,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
            <button
              type="button"
              onClick={scrollToContact}
              className="btn-editorial-solid ml-2 inline-flex cursor-pointer items-center gap-2 px-4 py-2.5 text-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              Parler de votre projet
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex cursor-pointer rounded-full p-3 text-zinc-700 transition-colors hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#c24b2b] md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }
              }
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-3 flex max-w-6xl flex-col gap-px overflow-hidden rounded-[1.25rem] border border-stone-200/90 bg-stone-200/80 shadow-[0_30px_60px_-20px_rgba(194,75,43,0.1)] max-[419px]:rounded-[1.1rem] md:hidden"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex cursor-pointer items-center justify-between bg-[#faf7f2] px-6 py-4 transition-colors hover:bg-[#f3ece3] focus:bg-[#f3ece3] focus:outline-none focus:ring-2 focus:ring-[#c24b2b] max-[419px]:px-5 max-[419px]:py-3.5"
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className={`text-xs font-medium transition-colors ${
                        isActive ? "text-[#b84328]" : "text-[#111111]"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`text-[10px] transition-colors duration-300 group-hover:text-[#b84328] ${
                        isActive ? "text-[#b84328]" : "text-[#a8a29e]"
                      }`}
                    >
                      {isActive ? "↓" : "↗"}
                    </span>
                  </a>
                );
              })}
              <button
                onClick={scrollToContact}
                className="group flex w-full cursor-pointer items-center justify-between bg-[linear-gradient(135deg,#c24b2b_0%,#a83a1f_100%)] px-6 py-5 text-white transition-colors hover:opacity-[0.96] focus:outline-none focus:ring-2 focus:ring-[#c24b2b] max-[419px]:px-5 max-[419px]:py-4"
              >
                <span className="text-xs font-medium">Parler de votre projet</span>
                <span className="text-[10px] text-white/75 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white">
                  →
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
