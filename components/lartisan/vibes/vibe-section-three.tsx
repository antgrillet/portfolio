import React from "react";

export default function VibeSectionThree() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#F4F1EB] px-4 py-8 font-sans text-[#2A2B2A] selection:bg-[#8C4A32] selection:text-white sm:px-6 md:py-16 lg:px-12">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.4] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <header className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="shrink-0">
              <img
                src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/cropped-cropped-cropped-lartisan_Logo-1-396x168.png"
                alt="L'Artisan Restaurant"
                className="h-12 object-contain mix-blend-multiply md:h-16"
              />
            </div>

            <nav className="flex flex-wrap gap-2 md:gap-3">
              {[
                "Le Lieu",
                "Cartes & Menus",
                "Séminaires & Déjeuner",
                "Infos pratiques",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="rounded-full border border-[#2A2B2A]/15 bg-white/30 px-5 py-2.5 text-sm font-medium text-[#2A2B2A] backdrop-blur-sm transition-all duration-300 ease-out hover:border-[#3C4A3E] hover:bg-[#3C4A3E] hover:text-[#F4F1EB] active:scale-95"
                >
                  {item}
                </a>
              ))}
            </nav>
          </header>

          <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            <div className="group relative flex flex-col justify-center overflow-hidden rounded-3xl bg-[#3C4A3E] p-8 text-[#F4F1EB] shadow-sm sm:p-10 lg:col-span-7 lg:p-14">
              <div
                className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                }}
              />

              <div className="relative z-10">
                <h1 className="mb-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  L&apos;Artisan
                  <br />
                  <span className="text-4xl italic text-[#EAE6DF]/70 sm:text-5xl lg:text-6xl">
                    Restaurant
                  </span>
                </h1>
                <p className="mb-12 max-w-md border-l-2 border-[#8C4A32] pl-4 text-lg leading-relaxed font-light text-[#F4F1EB]/80 sm:text-xl">
                  Restaurant semi gastronomique à Annecy
                </p>

                <div className="mt-auto flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <a
                    href="https://bookings.zenchef.com/results?rid=373793&pid=1001"
                    className="group/btn flex w-full items-center justify-center gap-3 rounded-xl bg-[#8C4A32] px-8 py-4 font-medium tracking-wide text-[#F4F1EB] shadow-lg shadow-[#8C4A32]/20 transition-all duration-300 hover:bg-[#733c28] active:scale-[0.98] sm:w-auto"
                  >
                    Réservez en ligne
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>

                  <div className="flex w-full flex-col sm:w-auto">
                    <a
                      href="https://restaurantlartisan.fr/wp-content/uploads/2026/02/Menu-24.02.pdf"
                      className="w-full rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-center font-medium tracking-wide text-[#F4F1EB] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#3C4A3E] active:scale-[0.98] sm:w-auto"
                    >
                      Voir la carte
                    </a>
                    <span className="mt-2 hidden px-2 font-mono text-[10px] tracking-wider text-white/40 sm:block">
                      Note: Le site doit supporter l&apos;affichage du PDF, du
                      menu structuré, ou des deux.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[400px] overflow-hidden rounded-3xl bg-[#EAE6DF] shadow-sm lg:col-span-5 lg:min-h-full">
              <img
                src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_154-scaled.jpg"
                alt="Plat signature L'Artisan"
                className="absolute inset-0 h-full w-full object-cover sepia-[0.1] contrast-[1.05] transition-transform duration-[1.5s] ease-out hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-black/5 shadow-[inset_0_0_80px_rgba(42,43,42,0.15)]" />
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#EAE6DF] p-8 shadow-sm sm:p-10 lg:col-span-4">
              <div className="pointer-events-none absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-bl-full bg-[#F4F1EB] opacity-50 transition-transform duration-700 group-hover:scale-110" />

              <div className="relative z-10">
                <div className="mb-8 h-[2px] w-12 bg-[#8C4A32]" />
                <div className="space-y-6 font-serif text-xl leading-snug tracking-tight text-[#2A2B2A]/90 sm:text-2xl">
                  <p>
                    La carte évolue au fil des saisons en travaillant en direct avec
                    les fournisseurs.
                  </p>
                  <p className="text-lg italic text-[#2A2B2A]/60 sm:text-xl">
                    Les circuits courts sont privilégiés pour mettre en valeur les
                    produits de la région.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-12 flex justify-end opacity-30">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z"
                    fill="#3C4A3E"
                  />
                </svg>
              </div>
            </div>

            <div className="relative min-h-[350px] overflow-hidden rounded-3xl bg-[#3C4A3E] shadow-sm lg:col-span-4">
              <img
                src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_96-scaled.jpg"
                alt="Service de vin"
                className="absolute inset-0 h-full w-full object-cover object-top sepia-[0.15] contrast-[1.02] transition-transform duration-[2s] ease-out hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_rgba(42,43,42,0.3)]" />
            </div>

            <div className="flex flex-col rounded-3xl border border-white/40 bg-white/70 p-2 shadow-sm backdrop-blur-md lg:col-span-4">
              <div className="flex-grow p-6 sm:p-8">
                <h3 className="mb-8 flex items-center gap-3 font-serif text-2xl text-[#3C4A3E]">
                  Infos pratiques
                  <span className="ml-2 block h-[1px] flex-grow bg-[#EAE6DF]"></span>
                </h3>

                <ul className="space-y-5">
                  <li>
                    <a
                      href="tel:09.83.81.00.62"
                      className="group/link flex items-center gap-4 font-medium text-[#2A2B2A]/80 transition-colors hover:text-[#8C4A32]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAE6DF]/50 text-[#3C4A3E] transition-all duration-300 group-hover/link:bg-[#8C4A32] group-hover/link:text-white">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </span>
                      09.83.81.00.62
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@restaurantlartisan.fr"
                      className="group/link flex items-center gap-4 font-medium text-[#2A2B2A]/80 transition-colors hover:text-[#8C4A32]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAE6DF]/50 text-[#3C4A3E] transition-all duration-300 group-hover/link:bg-[#8C4A32] group-hover/link:text-white">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </span>
                      <span className="truncate">contact@restaurantlartisan.fr</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/lartisan_restaurant/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-4 font-medium text-[#2A2B2A]/80 transition-colors hover:text-[#8C4A32]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAE6DF]/50 text-[#3C4A3E] transition-all duration-300 group-hover/link:bg-[#8C4A32] group-hover/link:text-white">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </span>
                      @lartisan_restaurant
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group relative mt-auto h-36 w-full overflow-hidden rounded-2xl border border-black/5">
                <img
                  src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_87-scaled.jpg"
                  alt="Salle du restaurant"
                  className="absolute inset-0 h-full w-full object-cover sepia-[0.2] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
