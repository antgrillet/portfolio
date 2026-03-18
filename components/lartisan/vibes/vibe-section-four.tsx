import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  GlassWater,
  Info,
  Mail,
  Phone,
  Users,
} from "lucide-react";

export default function VibeSectionFour() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-stone-950 py-24 font-sans text-stone-300 selection:bg-amber-900/50 selection:text-amber-50 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-900/20 blur-[120px] mix-blend-screen" />
          <div className="absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-stone-800/40 blur-[150px] mix-blend-screen" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-20 flex flex-col items-center text-center md:mb-28">
            <img
              src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/cropped-cropped-cropped-lartisan_Logo-1-396x168.png"
              alt="L'Artisan Restaurant Logo"
              className="mb-8 h-16 object-contain opacity-90 md:h-20"
            />
            <h1 className="mb-4 font-serif text-4xl tracking-tight text-stone-100 md:text-5xl lg:text-6xl">
              L&apos;Artisan Restaurant
            </h1>
            <p className="text-sm font-medium uppercase tracking-wide text-amber-600/90 md:text-lg">
              Restaurant semi gastronomique à Annecy
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="flex flex-col gap-12 lg:col-span-7">
              <div className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-black/50">
                <div className="absolute inset-0 z-10 bg-stone-900/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
                <img
                  src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_96-scaled.jpg"
                  alt="Ambiance L'Artisan Restaurant"
                  className="h-[400px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 md:h-[500px]"
                />
              </div>

              <div className="prose prose-invert prose-stone max-w-none">
                <h2 className="mb-6 font-serif text-3xl text-stone-100 md:text-4xl">
                  L&apos;Écrin de vos Réceptions
                </h2>
                <div className="space-y-6 text-lg leading-relaxed font-light text-stone-400 md:text-xl">
                  <p>
                    Entreprises, associations et réunions peuvent privatiser le lieu
                    sur certains créneaux du midi.
                  </p>
                  <p>
                    Le déjeuner est préparé à l&apos;avance avec entrée, plat et
                    dessert.
                  </p>
                  <p>
                    Le restaurant accueille de 10 à 16 personnes assises et
                    jusqu&apos;à 30/40 debout pour un cocktail.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 md:gap-6">
                <div className="relative h-[250px] overflow-hidden rounded-xl ring-1 ring-white/10 md:h-[300px]">
                  <img
                    src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_154-scaled.jpg"
                    alt="Détail culinaire"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative mt-8 h-[250px] overflow-hidden rounded-xl ring-1 ring-white/10 md:mt-12 md:h-[300px]">
                  <img
                    src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/Location-de-salle-matinee-dejeuner-privatif-2-768x768.png"
                    alt="Salle privative"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:sticky lg:top-12 lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/80 p-8 shadow-xl backdrop-blur-md md:p-10">
                <div className="absolute top-0 left-0 h-16 w-16 rounded-tl-3xl border-t border-l border-amber-900/40 opacity-50" />
                <div className="absolute right-0 bottom-0 h-16 w-16 rounded-br-3xl border-r border-b border-amber-900/40 opacity-50" />

                <h3 className="mb-8 flex items-center gap-3 font-serif text-xl text-amber-500">
                  <span className="h-px flex-1 bg-stone-800" />
                  Conditions de Privatisation
                  <span className="h-px flex-1 bg-stone-800" />
                </h3>

                <ul className="space-y-6">
                  <li className="group flex items-start gap-4">
                    <div className="mt-1 rounded-full border border-stone-800 bg-stone-950 p-2 text-stone-500 transition-colors group-hover:text-amber-500">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="mb-1 block font-medium text-stone-200">
                        Capacité assise
                      </span>
                      <span className="text-sm text-stone-400">
                        10 à 16 personnes assises
                      </span>
                    </div>
                  </li>

                  <li className="group flex items-start gap-4">
                    <div className="mt-1 rounded-full border border-stone-800 bg-stone-950 p-2 text-stone-500 transition-colors group-hover:text-amber-500">
                      <GlassWater className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="mb-1 block font-medium text-stone-200">
                        Format Cocktail
                      </span>
                      <span className="text-sm text-stone-400">
                        30/40 debout pour un cocktail
                      </span>
                    </div>
                  </li>

                  <li className="group flex items-start gap-4">
                    <div className="mt-1 rounded-full border border-stone-800 bg-stone-950 p-2 text-stone-500 transition-colors group-hover:text-amber-500">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="mb-1 block font-medium text-stone-200">
                        Disponibilité
                      </span>
                      <span className="text-sm text-stone-400">
                        Uniquement le mardi, mercredi et jeudi
                      </span>
                    </div>
                  </li>

                  <li className="group flex items-start gap-4">
                    <div className="mt-1 rounded-full border border-stone-800 bg-stone-950 p-2 text-stone-500 transition-colors group-hover:text-amber-500">
                      <Info className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="mb-1 block font-medium text-stone-200">
                        Prérequis
                      </span>
                      <span className="text-sm text-stone-400">
                        Minimum 10 personnes
                      </span>
                    </div>
                  </li>

                  <li className="group flex items-start gap-4">
                    <div className="mt-1 rounded-full border border-stone-800 bg-stone-950 p-2 text-stone-500 transition-colors group-hover:text-amber-500">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="mb-1 block font-medium text-stone-200">
                        Délai de réservation
                      </span>
                      <span className="text-sm text-stone-400">
                        Réservation une semaine à l&apos;avance minimum
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://bookings.zenchef.com/results?rid=373793&pid=1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full items-center justify-between rounded-2xl bg-stone-100 px-8 py-5 font-medium text-stone-950 transition-all duration-300 hover:bg-white"
                >
                  <span className="text-lg">Réservez en ligne</span>
                  <div className="rounded-full bg-stone-200 p-2 transition-colors group-hover:bg-stone-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="mailto:contact@restaurantlartisan.fr"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-stone-800 bg-stone-900 px-6 py-4 text-stone-300 transition-colors duration-300 hover:bg-stone-800 hover:text-stone-100"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Nous contacter</span>
                  </a>

                  <a
                    href="tel:+33983810062"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-stone-800 bg-stone-900 px-6 py-4 text-stone-300 transition-colors duration-300 hover:bg-stone-800 hover:text-stone-100"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Appeler</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
