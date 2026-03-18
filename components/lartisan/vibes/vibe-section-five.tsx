import React from "react";

const content = {
  name: "L'Artisan Restaurant",
  tagline: "Restaurant semi gastronomique à Annecy",
  cta: {
    label: "Réservez en ligne",
    url: "https://bookings.zenchef.com/results?rid=373793&pid=1001",
  },
  socials: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/lartisan_restaurant/",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61554719770083",
    },
  ],
  address: [
    "32 rue des Marquisats, 74000 Annecy.",
    "5 minutes à pied de l'Hôtel de Ville en direction de Sévrier.",
    "Piste cyclable juste en face du restaurant.",
    "Nombreux parkings autour du restaurant.",
  ],
  hours: [
    "Soir : du mardi au samedi - de 19h30 à 21h30",
    "Midi : du mardi au jeudi, privatisation uniquement",
    "Vendredi & samedi midi - de 12h à 13h30",
    "Fermeture dimanche & lundi",
  ],
  images: {
    logo: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/cropped-cropped-cropped-lartisan_Logo-1-396x168.png",
    heroPrimary: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_154-scaled.jpg",
    heroSecondary: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_87-scaled.jpg",
    atmosphere: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_96-scaled.jpg",
  },
};

export default function VibeSectionFive() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#F9F8F6] font-sans text-[#1E242B] selection:bg-[#c4a482] selection:text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#1E242B 1px, transparent 1px), linear-gradient(90deg, #1E242B 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[88rem] px-6 py-12 md:px-12 md:py-20 lg:px-16">
          <header className="flex flex-col items-center justify-between border-b border-[#1E242B]/10 pb-16 md:flex-row md:pb-24">
            <div className="mb-8 w-48 md:mb-0 md:w-56">
              <img
                src={content.images.logo}
                alt={content.name}
                className="h-auto w-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="flex gap-8 text-sm font-medium uppercase tracking-wider text-[#1E242B]/70">
              {content.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-[#1E242B] after:transition-transform after:duration-300 after:content-[''] hover:text-[#1E242B] hover:after:origin-left hover:after:scale-x-100"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 items-center gap-12 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-8">
            <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-5">
              <div className="mb-8 inline-flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[#c4a482]"></span>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#c4a482]">
                  Annecy
                </span>
              </div>

              <h1 className="mb-6 font-serif text-5xl leading-[1.1] tracking-tight text-[#1E242B] md:text-6xl lg:text-7xl">
                L&apos;Artisan
                <br />
                <span className="font-light italic text-[#1E242B]/80">
                  Restaurant
                </span>
              </h1>

              <p className="mb-12 max-w-md text-lg leading-relaxed font-light text-[#1E242B]/70 md:text-xl">
                {content.tagline}
              </p>

              <a
                href={content.cta.url}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-[#1E242B] px-8 py-4 text-white transition-all hover:shadow-xl hover:shadow-[#1E242B]/10"
              >
                <div className="absolute inset-0 origin-left scale-x-0 transform bg-[#c4a482] transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                <span className="relative z-10 flex items-center gap-3 text-sm font-medium uppercase tracking-widest">
                  {content.cta.label}
                  <svg
                    className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="order-1 relative h-[500px] w-full lg:order-2 lg:col-span-7 lg:h-[700px]">
              <div className="absolute top-0 right-0 h-[85%] w-[85%] overflow-hidden rounded-sm shadow-2xl shadow-[#1E242B]/5">
                <img
                  src={content.images.heroPrimary}
                  alt="Plat gastronomique"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 z-10 h-[60%] w-[55%] overflow-hidden rounded-sm border-8 border-[#F9F8F6] shadow-xl shadow-[#1E242B]/10">
                <img
                  src={content.images.atmosphere}
                  alt="Ambiance du restaurant"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-12 border-t border-[#1E242B]/10 pt-16 md:mt-40 md:pt-24 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h3 className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E242B]/50">
                <span className="h-[1px] w-4 bg-[#1E242B]/30"></span>
                Accès & Adresse
              </h3>
              <ul className="space-y-4 text-[15px] leading-relaxed font-light text-[#1E242B]/80">
                {content.address.map((item, index) => (
                  <li
                    key={index}
                    className={
                      index === 0
                        ? "mb-6 text-base font-medium text-[#1E242B]"
                        : ""
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 lg:col-start-6">
              <h3 className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E242B]/50">
                <span className="h-[1px] w-4 bg-[#1E242B]/30"></span>
                Horaires d&apos;Ouverture
              </h3>
              <ul className="space-y-4 text-[15px] leading-relaxed font-light text-[#1E242B]/80">
                {content.hours.map((item, index) => {
                  const [day, time] = item.split(" - ");

                  return (
                    <li
                      key={index}
                      className="flex flex-col border-b border-[#1E242B]/5 pb-3 sm:flex-row sm:justify-between"
                    >
                      <span className="font-medium text-[#1E242B]">{day}</span>
                      {time ? (
                        <span className="mt-1 text-[#1E242B]/60 sm:mt-0">
                          {time}
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="hidden lg:col-span-2 lg:col-start-11 lg:block">
              <div className="aspect-[3/4] h-full w-full overflow-hidden rounded-sm">
                <img
                  src={content.images.heroSecondary}
                  alt="Détail culinaire"
                  className="h-full w-full object-cover grayscale-[20%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
