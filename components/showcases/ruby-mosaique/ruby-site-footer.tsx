"use client";

import Link from "next/link";
import { C, NAV } from "./constants";
import { RubyInfiniteMarquee } from "./ruby-infinite-marquee";
import { liveHref } from "./live-site";

export function RubySiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-[#f0f0f0] overflow-hidden">
      <RubyInfiniteMarquee
        text="Mosaïque & Encadrement · Aix-les-Bains · Créations Uniques · Fait à la Main"
        className="border-t border-b border-white/10 py-4 text-white/20 text-xs uppercase tracking-[0.2em]"
        speed="slow"
      />

      <div className="px-8 md:px-14 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h2 className="text-4xl italic mb-6" style={{ fontFamily: "var(--font-fraunces), serif" }}>
            {C.brand}
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Atelier créatif de mosaïque et d'encadrement à Aix-les-Bains. Créations uniques, faites à la main.
          </p>
          <a
            href={`mailto:${C.email}`}
            className="mt-6 block text-[#991422] hover:text-white transition-colors text-sm"
          >
            {C.email}
          </a>
        </div>

        <div>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</p>
          <nav className="flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={liveHref(n.href)}
                className="text-white/60 hover:text-white transition-colors text-sm group flex items-center gap-3"
              >
                <span className="w-4 h-px bg-[#991422] opacity-0 group-hover:opacity-100 group-hover:w-6 transition-all duration-300" />
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-8">Atelier</p>
          <div className="space-y-4 text-sm text-white/60">
            <p>{C.name}</p>
            <p>{C.city}</p>
            <p>Siret 892 835 752 00015</p>
          </div>
          <div className="mt-10">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-4">Horaires</p>
            <p className="text-sm text-white/60">Sur rendez-vous</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} {C.brand} — Tous droits réservés
        </p>
        <Link
          href={liveHref("/mentions-legales")}
          className="text-white/20 hover:text-white/50 text-xs transition-colors"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
