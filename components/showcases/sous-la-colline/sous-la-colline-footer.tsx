import Link from "next/link";
import { liveHref } from "./live-site";

/** Copie du livrable `components/site/footer.tsx` — liens → site live via `liveHref`. */
export function SousLaCollineFooter() {
  return (
    <footer className="bg-[#111] text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Sous La Colline
          </p>
          <p className="text-sm leading-relaxed">
            Chambres d&apos;hôtes et camping de charme en Savoie, au cœur de
            la nature, à deux pas du Lac du Bourget et d&apos;Aix-les-Bains.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            {[
              ["Accueil", "/"],
              ["À propos", "/a-propos"],
              ["Chambres", "/chambres"],
              ["Camping", "/camping"],
              ["Infos & contacts", "/infos-et-contacts"],
              ["Témoignages", "/temoignages"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={liveHref(href)}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Réservations
          </p>
          <ul className="space-y-2 text-sm">
            {[
              ["Réservation chambres", "/reservation-chambres"],
              ["Réservation camping", "/reservation-camping"],
              ["Guide des activités", "/guide"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={liveHref(href)}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        Copyright Sous La Colline 2022 —{" "}
        <Link
          href={liveHref("/mentions-legales")}
          className="underline hover:text-gray-300"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
