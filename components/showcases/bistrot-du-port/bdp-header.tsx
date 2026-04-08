"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { liveHref } from "./live-site";

const NAV_LINKS = [
  { label: "La Carte", path: "/la-carte" },
  { label: "Maître Restaurateur", path: "/maitre-restaurateur" },
  { label: "Évènements", path: "/evenements" },
  { label: "Contact", path: "/contact" },
];

function isBistrotShowcaseHome(pathname: string | null): boolean {
  if (!pathname) return false;
  return /^\/(fr|en)\/bistrot-du-port\/?$/.test(pathname);
}

export function BdpSiteHeader() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const showcaseHome = isBistrotShowcaseHome(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.1 }
    );
  }, []);

  return (
    <header
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background:
          scrolled || !showcaseHome ? "rgba(2,18,34,0.96)" : "transparent",
        backdropFilter: scrolled || !showcaseHome ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href={liveHref("/")}
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: "#f5f0e8",
            fontSize: "1.05rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          Le Bistrot du Port
        </a>

        <div
          className="hidden md:flex"
          style={{ gap: "2.5rem", alignItems: "center" }}
        >
          {NAV_LINKS.map(({ label, path }) => (
            <a
              key={path}
              href={liveHref(path)}
              style={{
                fontFamily: "system-ui",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.6)",
                textDecoration: "none",
                transition: "color 0.2s",
                borderBottom: "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={liveHref("/contact")}
            style={{
              background: "rgba(245,240,232,0.1)",
              border: "1px solid rgba(245,240,232,0.3)",
              color: "#f5f0e8",
              padding: "0.5rem 1.5rem",
              fontFamily: "system-ui",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              backdropFilter: "blur(4px)",
            }}
          >
            Réserver
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#f5f0e8",
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                      ? "rotate(-45deg) translate(4px, -5px)"
                      : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            background: "rgba(2,18,34,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "1.5rem 2.5rem 2rem",
          }}
        >
          {NAV_LINKS.map(({ label, path }) => (
            <a
              key={path}
              href={liveHref(path)}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "system-ui",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.75)",
                textDecoration: "none",
                padding: "0.9rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
