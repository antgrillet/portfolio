"use client";

import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export function Navigation() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navItems = useMemo(
    () => [
      { label: t("projects"), href: "#projects" },
      { label: t("process"), href: "#process" },
      { label: t("contact"), href: "#contact" },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
  }, [navItems]);

  const toggleLocale = () => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-zinc-950 focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu principal
      </a>

      <motion.header
        initial={shouldReduceMotion ? { opacity: 0 } : { y: -24, opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 pt-4 md:pt-6 px-4 md:px-6"
        role="banner"
      >
        <div
          className={`mx-auto max-w-5xl rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-white/70 shadow-sm backdrop-blur-xl border border-zinc-200/50 py-3 px-4 md:px-6"
              : "bg-transparent border-transparent py-3 px-2 md:px-4"
          }`}
        >
          <nav
            className="flex items-center justify-between relative"
            role="navigation"
            aria-label="Navigation principale"
          >
            {/* Logo / Nom */}
            <motion.a
              href="#hero"
              initial={shouldReduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="relative z-10 flex items-center gap-2 cursor-pointer text-lg font-medium tracking-tight text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-2"
              aria-label="Antonin Grillet - Retour à l'accueil"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 text-white font-bold text-xs">
                AG
              </div>
              <span className="hidden sm:block">Antonin Grillet</span>
            </motion.a>

            {/* Liens Desktop */}
            <div className="hidden md:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * (index + 1) }}
                    className={`relative cursor-pointer text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-4 py-2 ${
                      isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-zinc-100"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Actions (Langue + Menu Mobile) */}
            <div className="flex items-center gap-2 relative z-10">
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-3 py-2 uppercase bg-zinc-50 hover:bg-zinc-100"
                aria-label="Changer de langue"
              >
                <Globe className="h-3.5 w-3.5" />
                {locale}
              </button>

              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="md:hidden inline-flex cursor-pointer items-center justify-center h-10 w-10 rounded-full bg-zinc-50 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Menu Mobile Déroulant */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-4 right-4 top-20 md:hidden origin-top"
            >
              <div className="rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-xl border border-zinc-200/50 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-zinc-100 text-zinc-950"
                          : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
