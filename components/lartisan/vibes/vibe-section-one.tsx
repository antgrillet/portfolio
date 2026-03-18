import React from "react";

const DATA = {
  name: "L'Artisan Restaurant",
  tagline: "Restaurant semi gastronomique à Annecy",
  cta: {
    label: "Réservez en ligne",
    url: "https://bookings.zenchef.com/results?rid=373793&pid=1001",
  },
  nav: ["Le Lieu", "Cartes & Menus", "Séminaires & Déjeuner", "Infos pratiques"],
  copy: [
    "Un comptoir pour manger directement face à la cuisine.",
    "Des produits de qualité sélectionnés avec soin en favorisant les circuits courts.",
    "Une ambiance intimiste pour retrouver le plaisir de passer du temps à table.",
    "Une équipe qui saura vous conseiller pour profiter pleinement de l'expérience.",
  ],
  contact: {
    phone: "09.83.81.00.62",
    email: "contact@restaurantlartisan.fr",
    address: "32 rue des Marquisats, 74000 Annecy",
  },
  hours: [
    { label: "Soir", time: "du mardi au samedi - de 19h30 à 21h30" },
    { label: "Midi", time: "du mardi au jeudi, privatisation uniquement" },
    { label: "Week-end", time: "Vendredi & samedi midi - de 12h à 13h30" },
    { label: "Fermeture", time: "dimanche & lundi" },
  ],
  images: {
    logo: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/cropped-cropped-cropped-lartisan_Logo-1-396x168.png",
    hero1: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_154-scaled.jpg",
    hero2: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_96-scaled.jpg",
    hero3: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_87-scaled.jpg",
    gallery:
      "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/Location-de-salle-matinee-dejeuner-privatif-2-768x768.png",
  },
};

export default function VibeSectionOne() {
  return (
    <>
      <section className="w-full overflow-hidden bg-[#EDEae1] font-sans text-[#2C2825] antialiased selection:bg-[#2C2825] selection:text-[#EDEae1]">
        <header className="relative z-50 flex w-full flex-col items-center justify-between gap-6 border-b border-[#2C2825]/10 px-6 py-8 md:flex-row md:px-12">
          <div className="w-48 md:w-56">
            <img
              src={DATA.images.logo}
              alt={DATA.name}
              className="h-auto w-full object-contain mix-blend-multiply"
              loading="eager"
            />
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {DATA.nav.map((item, idx) => (
              <button
                key={idx}
                className="relative text-sm tracking-wide text-[#2C2825]/70 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[#2C2825] after:transition-all after:duration-300 after:content-[''] hover:text-[#2C2825] hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </nav>

          <a
            href={DATA.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-none border border-[#2C2825] bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-[#2C2825] transition-all duration-500 ease-out hover:bg-[#2C2825] hover:text-[#EDEae1]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {DATA.cta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </header>

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-16 pb-24 md:px-12 md:pt-32 md:pb-40">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="z-20 flex flex-col pt-12 lg:col-span-5 lg:pt-24">
              <span className="mb-6 block font-serif text-xl italic text-[#2C2825]/60 md:text-2xl">
                {DATA.tagline}
              </span>
              <h1 className="mb-12 font-serif text-[4rem] leading-[0.85] tracking-tight md:text-[6rem] lg:text-[7.5rem]">
                L&apos;Artisan
              </h1>
              <p className="max-w-md border-l border-[#2C2825]/20 pl-6 text-lg leading-relaxed font-light text-[#2C2825]/80">
                {DATA.copy[0]} {DATA.copy[1]}
              </p>
            </div>

            <div className="relative mt-12 min-h-[60vh] w-full lg:col-span-7 lg:mt-0 lg:min-h-[80vh]">
              <div className="absolute top-0 right-0 z-10 aspect-[3/4] w-[85%] shadow-2xl lg:w-[75%]">
                <img
                  src={DATA.images.hero1}
                  alt="Plat signature"
                  className="h-full w-full object-cover brightness-95 grayscale-[10%] sepia-[5%]"
                />
              </div>
              <div className="absolute bottom-[-10%] left-[5%] z-20 aspect-square w-[55%] border-8 border-[#EDEae1] shadow-xl lg:w-[45%]">
                <img
                  src={DATA.images.hero2}
                  alt="Détail du restaurant"
                  className="h-full w-full object-cover grayscale-[20%] sepia-[10%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1C1A18] px-6 py-32 text-[#D8D2C4] md:px-12">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="order-2 mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden lg:order-1 lg:mx-0">
              <img
                src={DATA.images.hero3}
                alt="En cuisine"
                className="h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-out hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 m-4 border border-[#D8D2C4]/20"></div>
            </div>

            <div className="order-1 flex flex-col space-y-16 lg:order-2">
              {DATA.copy.map((text, idx) => (
                <div key={idx} className="group flex items-start gap-8">
                  <span className="block w-8 pt-2 font-serif text-sm text-[#D8D2C4]/40">
                    0{idx + 1}
                  </span>
                  <p className="font-serif text-2xl leading-snug text-[#D8D2C4] transition-colors duration-500 group-hover:text-white md:text-4xl lg:leading-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1600px] px-6 py-32 md:px-12">
          <div className="grid grid-cols-1 gap-16 border-t border-[#2C2825]/10 pt-16 lg:grid-cols-12 lg:gap-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <div className="space-y-6">
                <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#2C2825]/50">
                  Adresse & Contact
                </h3>
                <p className="font-serif text-2xl text-[#2C2825]">
                  {DATA.contact.address}
                </p>
                <div className="flex flex-col gap-2 pt-4 text-[#2C2825]/70">
                  <a
                    href={`tel:${DATA.contact.phone.replace(/\./g, "")}`}
                    className="transition-colors hover:text-[#2C2825]"
                  >
                    {DATA.contact.phone}
                  </a>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="transition-colors hover:text-[#2C2825]"
                  >
                    {DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="space-y-6 lg:mt-12">
                <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#2C2825]/50">
                  Horaires
                </h3>
                <ul className="space-y-4">
                  {DATA.hours.map((hour, idx) => (
                    <li
                      key={idx}
                      className="flex flex-col gap-1 border-b border-[#2C2825]/5 pb-4 last:border-0"
                    >
                      <span className="font-serif text-lg text-[#2C2825]">
                        {hour.label}
                      </span>
                      <span className="text-sm text-[#2C2825]/60">{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex h-full flex-col justify-between lg:col-span-7">
              <div className="mb-12 aspect-[16/9] w-full overflow-hidden">
                <img
                  src={DATA.images.gallery}
                  alt="La salle"
                  className="h-full w-full object-cover opacity-90 mix-blend-multiply"
                />
              </div>

              <div className="flex flex-col items-start gap-8 bg-[#E3DFD4] p-8 sm:flex-row sm:items-end sm:justify-between lg:p-12">
                <div className="max-w-sm space-y-2">
                  <h4 className="font-serif text-3xl text-[#2C2825]">
                    Une table vous attend.
                  </h4>
                  <p className="text-sm text-[#2C2825]/70">
                    Privatisation possible pour vos séminaires et déjeuners
                    d&apos;affaires.
                  </p>
                </div>
                <a
                  href={DATA.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-[#2C2825] px-8 py-4 text-xs uppercase tracking-widest text-[#EDEae1] transition-colors hover:bg-black"
                >
                  {DATA.cta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
