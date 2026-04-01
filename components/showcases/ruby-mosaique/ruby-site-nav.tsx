"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, C } from "./constants";
import { liveHref } from "./live-site";

export function RubySiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setIsScrolled(v > 60));

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "bg-[#f0f0f0]/90 backdrop-blur-xl border-b border-[#1a1a1a]/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Link
          href={liveHref("/")}
          className="text-[#1a1a1a] text-lg font-bold italic tracking-wide hover:text-[#991422] transition-colors"
          style={{ fontFamily: "var(--font-fraunces), serif" }}
        >
          {C.brand}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={liveHref(n.href)}
              className={`relative text-[10px] tracking-[0.2em] uppercase font-bold transition-colors group ${
                pathname === n.href ? "text-[#991422]" : "text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
              }`}
            >
              {n.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[#991422] transition-all duration-300 ${
                  pathname === n.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link href={liveHref("/contact")}>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#1a1a1a] text-white hover:bg-[#991422] px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-colors"
            >
              Contact
            </motion.button>
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 w-6 h-5 justify-center items-end z-50 relative"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <motion.span
            animate={{
              width: mobileOpen ? "100%" : "100%",
              rotate: mobileOpen ? 45 : 0,
              y: mobileOpen ? 8 : 0,
            }}
            className="block h-0.5 bg-[#1a1a1a] w-full origin-center"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1, width: "70%" }}
            className="block h-0.5 bg-[#1a1a1a]"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
            className="block h-0.5 bg-[#1a1a1a] w-full origin-center"
          />
        </button>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col items-start justify-center px-8"
          >
            <div className="flex flex-col gap-6 w-full">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={liveHref(n.href)}
                    className="text-4xl text-white/80 hover:text-[#991422] transition-colors block"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-12 left-8"
            >
              <p className="text-white/30 text-xs uppercase tracking-widest">{C.city}</p>
              <a
                href={`mailto:${C.email}`}
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                {C.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
