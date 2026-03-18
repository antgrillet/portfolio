import React from "react";

export default function VibeSectionTwo() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#F9F8F6] font-sans text-stone-900 selection:bg-stone-300 selection:text-stone-900">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1600px] border-x border-stone-300/40">
          <header className="flex flex-col items-center justify-between border-b border-stone-300/40 p-6 md:flex-row lg:px-12">
            <div className="mb-6 flex w-full justify-center md:mb-0 md:w-1/3 md:justify-start">
              <img
                src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/cropped-cropped-cropped-lartisan_Logo-1-396x168.png"
                alt="L'Artisan Restaurant Logo"
                className="h-10 w-auto object-contain opacity-90 mix-blend-darken grayscale contrast-125 lg:h-14"
              />
            </div>

            <nav className="flex w-full flex-wrap justify-center gap-6 text-xs font-medium uppercase tracking-[0.15em] text-stone-600 md:w-2/3 md:justify-end lg:gap-10">
              {[
                "Le Lieu",
                "Cartes & Menus",
                "Séminaires & Déjeuner",
                "Infos pratiques",
              ].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  className="group relative py-1"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-stone-500 transition-all duration-500 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>
          </header>

          <div className="grid min-h-[85vh] grid-cols-1 border-b border-stone-300/40 lg:grid-cols-12">
            <div className="flex flex-col justify-center border-b border-stone-300/40 bg-[#F9F8F6] p-8 md:p-16 lg:col-span-5 lg:border-r lg:border-b-0 xl:p-24">
              <p className="mb-8 ml-1 border-l border-stone-400 pl-4 text-xs uppercase tracking-[0.2em] text-stone-500">
                Restaurant semi gastronomique
                <br />à Annecy
              </p>

              <h1 className="mb-12 flex flex-col font-serif text-5xl leading-[0.9] tracking-tight text-stone-900 md:text-7xl lg:text-8xl">
                <span className="font-normal">L&apos;Artisan</span>
                <span className="mt-2 ml-8 italic text-stone-600 lg:ml-12">
                  Restaurant
                </span>
              </h1>

              <div className="mt-8">
                <a
                  href="https://bookings.zenchef.com/results?rid=373793&pid=1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-stone-900 px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#F9F8F6] transition-all duration-500 hover:bg-stone-800"
                >
                  <span>Réservez en ligne</span>
                  <svg
                    className="h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center bg-[#F3F1EC] p-6 lg:col-span-7 lg:p-12">
              <div className="relative min-h-[50vh] h-full w-full border border-stone-200 bg-white p-3 shadow-sm lg:p-4">
                <img
                  src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_154-scaled.jpg"
                  alt="Plat signature L'Artisan"
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-1000 ease-out hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 border-b border-stone-300/40 md:grid-cols-2 lg:grid-cols-12">
            <div className="border-b border-stone-300/40 bg-white p-6 md:border-r md:border-b-0 lg:col-span-4 lg:p-12">
              <div className="group relative aspect-[4/5] overflow-hidden border border-stone-200 bg-stone-100 p-2">
                <img
                  src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_96-scaled.jpg"
                  alt="La salle de L'Artisan"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col border-b border-stone-300/40 lg:col-span-4 lg:border-r lg:border-b-0">
              <div className="flex flex-1 flex-col justify-center border-b border-stone-300/40 p-8 lg:p-12">
                <p className="font-serif text-2xl leading-snug text-stone-800 lg:text-3xl">
                  <span className="mr-2 font-serif text-4xl italic text-stone-400">
                    &quot;
                  </span>
                  Profitez d&apos;un moment de partage en mangeant directement au
                  comptoir face à la cuisine.
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-center bg-[#F3F1EC] p-8 lg:p-12">
                <p className="mb-4 text-sm uppercase tracking-widest text-stone-500">
                  Transparence
                </p>
                <p className="text-base leading-relaxed font-light text-stone-700 lg:text-lg">
                  La cuisine est 100% ouverte sur la salle pour offrir une vraie
                  transparence. Une salle à manger attenante permet aussi une
                  ambiance plus intimiste.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-white p-6 lg:col-span-4 lg:gap-12 lg:p-12">
              <div className="group aspect-[3/2] overflow-hidden border border-stone-200 p-2 shadow-sm">
                <img
                  src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_87-scaled.jpg"
                  alt="Détail cuisine"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <div className="group mt-auto aspect-[3/2] overflow-hidden border border-stone-200 p-2 shadow-sm">
                <img
                  src="https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/Location-de-salle-matinee-dejeuner-privatif-2-768x768.png"
                  alt="Salle privative"
                  className="h-full w-full object-cover grayscale-[10%] transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y divide-stone-300/40 border-t-0 bg-[#F9F8F6] text-sm md:grid-cols-3 md:divide-x md:divide-y-0">
            <a
              href="tel:0983810062"
              className="group flex items-center justify-between p-6 transition-colors duration-300 hover:bg-[#F3F1EC] lg:p-8"
            >
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] uppercase tracking-widest text-stone-500">
                  Téléphone
                </span>
                <span className="font-serif text-lg tracking-wide text-stone-800 transition-all group-hover:italic">
                  09.83.81.00.62
                </span>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 transition-colors group-hover:border-stone-500">
                <svg
                  className="h-3 w-3 text-stone-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
            </a>

            <a
              href="mailto:contact@restaurantlartisan.fr"
              className="group flex items-center justify-between p-6 transition-colors duration-300 hover:bg-[#F3F1EC] lg:p-8"
            >
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] uppercase tracking-widest text-stone-500">
                  Email
                </span>
                <span className="font-serif text-lg tracking-wide text-stone-800 transition-all group-hover:italic">
                  contact@restaurantlartisan.fr
                </span>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 transition-colors group-hover:border-stone-500">
                <svg
                  className="h-3 w-3 text-stone-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </a>

            <div className="group flex cursor-default items-center justify-between p-6 transition-colors duration-300 hover:bg-[#F3F1EC] lg:p-8">
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] uppercase tracking-widest text-stone-500">
                  Adresse
                </span>
                <span className="font-serif text-lg tracking-wide text-stone-800 transition-all group-hover:italic">
                  32 rue des Marquisats, 74000 Annecy
                </span>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 transition-colors group-hover:border-stone-500">
                <svg
                  className="h-3 w-3 text-stone-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
