"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { liveHref } from "./live-site";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Chambres", href: "/chambres" },
  { label: "Camping", href: "/camping" },
  { label: "Guide", href: "/guide" },
  { label: "Infos & contacts", href: "/infos-et-contacts" },
  { label: "Témoignages", href: "/temoignages" },
];

/** Copie du livrable `components/site/header.tsx` — liens → site live via `liveHref`. Logo : `public/showcases/sous-la-colline/logo.jpg`. */
export function SousLaCollineHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href={liveHref("/")} className="shrink-0">
          <Image
            src="/showcases/sous-la-colline/logo.jpg"
            alt="Sous La Colline"
            width={540}
            height={200}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--brand-muted)] xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={liveHref(item.href)}
              className="transition-colors hover:text-[var(--brand-terracotta)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={liveHref("/reservation-chambres")}
            className="rounded-full bg-[var(--brand-terracotta)] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Réserver une chambre
          </Link>
          <Link
            href={liveHref("/reservation-camping")}
            className="rounded-full border border-[var(--brand-terracotta)] px-5 py-2 text-sm font-semibold text-[var(--brand-terracotta)] transition hover:bg-[var(--brand-terracotta)] hover:text-white"
          >
            Réserver le camping
          </Link>
        </div>

        <button
          type="button"
          className="text-[var(--foreground)] xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white px-6 pb-6 pt-4 xl:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={liveHref(item.href)}
                className="text-base font-medium text-[var(--foreground)] hover:text-[var(--brand-terracotta)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <Link
                href={liveHref("/reservation-chambres")}
                className="rounded-full bg-[var(--brand-terracotta)] px-5 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Réserver une chambre
              </Link>
              <Link
                href={liveHref("/reservation-camping")}
                className="rounded-full border border-[var(--brand-terracotta)] px-5 py-3 text-center text-sm font-semibold text-[var(--brand-terracotta)]"
                onClick={() => setOpen(false)}
              >
                Réserver le camping
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
