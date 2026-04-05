/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Clock,
  Download,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

const DATA = {
  restaurantName: "L'Artisan Restaurant",
  tagline: "Restaurant semi gastronomique à Annecy",
  heroTitle: "Bienvenue à L'Artisan",
  heroLines: [
    "Un comptoir pour manger directement face à la cuisine,",
    "Des produits de qualité sélectionnés avec soins en favorisant les circuits courts,",
    "Une ambiance intimiste pour retrouver le plaisir de passer du temps à table",
    "Et une équipe qui saura vous conseiller pour que vous profitiez pleinement de votre expérience !",
  ],
  heroReservationLine: "Réservations au 09.83.81.00.62",
  heroOnlineLine: "Ou en ligne :",
  navItems: [
    { label: "Le Lieu", href: "#le-lieu" },
    { label: "Carte & Menus", href: "#carte-menus" },
    { label: "Séminaires & Déjeuner", href: "#seminaires" },
    { label: "Infos pratiques", href: "#infos-pratiques" },
  ],
  placeTitle: "Le Lieu",
  placeLines: [
    "Profitez d’un moment de partage en mangeant directement au comptoir face à la cuisine.",
    "C’est en toute transparence que nous proposons une cuisine 100% ouverte sur la salle.",
    "Vous pourrez interagir directement avec le chef et ainsi voir tout ce qu’il se passe derrière les fourneaux.",
    "Une salle à manger juste à côté vous permet également de vous retrouver dans une ambiance plus intimiste.",
  ],
  menuTitle: "Carte & Menus",
  menuLines: [
    "Nous proposons une carte courte qui évolue au fil des saisons en travaillant en direct avec nos fournisseurs.",
    "Il est important pour nous de favoriser les circuits courts pour ainsi mettre en valeur les produits de notre belle région.",
    "La carte change fréquemment, pour la connaitre veuillez cliquer sur lien ci dessous :",
  ],
  giftCardLine:
    "Nous proposons des bons cadeaux du montant de votre choix, n’hésitez pas à nous contacter par mail ou téléphone.",
  menuPdfLabel: "Carte et Menus",
  privateEventsTitle: "Séminaires & Déjeuner",
  privateEventsSubtitle: "Privatisation & déjeuner",
  privateEvents: {
    introLines: [
      "Entreprises, associations, réunions, venez profiter d’un moment de sérénité à L’Artisan car le lieu sera réservé uniquement pour vous.",
      "Nous mettons à votre disposition notre restaurant pour la matinée, pause café et boissons froides comprises.",
      "Nous vous accueillons à partir de 10 jusqu’à 16 personnes assises et 30/40 debout pour un cocktail du mardi au jeudi midi.",
      "Le chef s’occupe de vous concocter un menu à l’avance pour le déjeuner avec entrée/plat/dessert. Avec tout l’amour habituel qu’il met dans ses plats !",
      "Possibilité de réserver uniquement pour la matinée ou le déjeuner.",
      "Contactez-nous pour un devis personnalisé !",
      "Nous nous adaptons à toute demande selon notre capacités d’accueil, n’hésitez pas à nous poser vos questions.",
      "Pour profiter de l’expérience complète, venez nous rendre visite le vendredi midi !",
    ],
    pricingHeading: "Tarifs (HT) :",
    pricingLines: [
      "Location de salle ½ journée, 150€ + 5€/pax pour la pause café",
      "Menu déjeuner 28€/pax",
      "Forfait boissons déjeuner (eaux, 1 verre de vin blanc ou 1 verre de vin rouge, café ou thé offert) 11€/pax",
      "Cocktail dinatoire sur devis en fonction du nombre de pièces souhaitées et du nombre de convives (5 pièces 10€, 10 pièces 20€…)",
    ],
    conditionsHeading: "Conditions générales :",
    conditionLines: [
      "Mise à disposition de la salle de 8h à 12h30.",
      "Uniquement le mardi, mercredi et jeudi.",
      "Minimum 10 personnes.",
      "Réservations une semaine à l’avance minimum.",
      "Choix du menu en amont, proposition envoyée par mail avec choix des plats à définir. A retourner 5 jours minimum avant la date de la réservation.",
      "50% acompte à verser avant la prestation, le reste à la fin de la prestation.",
      "Pour toute demande appelez nous au 09.83.81.00.62 ou par mail à : contact@restaurantlartisan.fr",
    ],
    ctaLabel: "Demander un devis",
    ctaHref: "mailto:contact@restaurantlartisan.fr",
  },
  practicalTitle: "Infos pratiques",
  practicalInfo: {
    hoursHeading: "Horaires d’ouverture :",
    hours: [
      "Soir : du Mardi au Samedi – de 19h30 à 21h30",
      "Midi : Du mardi au Jeudi, Privatisation uniquement",
      "Vendredi & Samedi midi – de 12h à 13h30",
      "Fermeture Dimanche & Lundi",
    ],
    contactHeading: "Contact :",
    addressLines: ["32 rue des Marquisats", "74000 Annecy"],
    phone: "09.83.81.00.62",
    email: "contact@restaurantlartisan.fr",
    directionsHeading: "Comment venir ?",
    directions: [
      "5 minutes à pied de l’Hôtel de Ville en direction de Sévrier",
      "Piste cyclable juste en face du restaurant",
      "Nombreux parkings autour du restaurant : Parking du port des Marquisats / Parking Thillier / Parking Stade Nautique / Parking des Marquisats",
    ],
  },
  footerNote:
    "Copyright © 2026 L'Artisan Restaurant | Crédit photos Pierre Antoine Pluquet",
  images: {
    logo: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/cropped-cropped-cropped-lartisan_Logo-1-396x168.png",
    heroPrimary:
      "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_154-scaled.jpg",
    heroSecondary:
      "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_96-scaled.jpg",
    lieu: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/LARTISAN_Pluquet_87-scaled.jpg",
    menu: "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/Location-de-salle-matinee-dejeuner-privatif-2-768x768.png",
    privateEvent:
      "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images/cmmw6oppo0000o2gnzol7e5bh/Location-de-salle-matinee-dejeuner-privatif-2-768x768.png",
  },
  links: {
    reservation:
      "https://bookings.zenchef.com/results?rid=373793&pid=1001",
    menuPdf:
      "https://restaurantlartisan.fr/wp-content/uploads/2026/02/Menu-24.02.pdf",
    instagram: "https://www.instagram.com/lartisan_restaurant/",
    facebook: "https://www.facebook.com/profile.php?id=61554719770083",
    phone: "tel:0983810062",
    email: "mailto:contact@restaurantlartisan.fr",
    privateEvent: "mailto:contact@restaurantlartisan.fr",
  },
} as const;

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 space-y-4">
      {eyebrow ? (
        <p
          className={`text-xs uppercase tracking-[0.28em] ${
            light ? "text-[#d8d2c4]/55" : "text-[#2c2825]/45"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-4xl leading-none tracking-tight md:text-6xl ${
          light ? "text-[#f3ede3]" : "text-[#2c2825]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-px w-20 ${light ? "bg-[#d8d2c4]/20" : "bg-[#2c2825]/10"}`}
      />
    </div>
  );
}

export default function LartisanPresentationClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden bg-[#edeae1] text-[#2c2825] antialiased selection:bg-[#2c2825] selection:text-[#edeae1]">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[#2c2825]/10 transition-all duration-300 ${
          isScrolled
            ? "bg-[#edeae1]/92 py-4 shadow-[0_10px_40px_rgba(44,40,37,0.08)] backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-6 md:px-12">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src={DATA.images.logo}
              alt={DATA.restaurantName}
              className="h-12 w-auto object-contain mix-blend-multiply md:h-14"
            />
            <span className="hidden text-xs uppercase tracking-[0.28em] text-[#2c2825]/55 lg:block">
              {DATA.tagline}
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {DATA.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm uppercase tracking-[0.24em] text-[#2c2825]/72 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#2c2825] after:transition-all after:duration-300 after:content-[''] hover:text-[#2c2825] hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={DATA.links.reservation}
              className="hidden border border-[#2c2825] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[#2c2825] transition-colors hover:bg-[#2c2825] hover:text-[#edeae1] md:inline-flex"
            >
              Réservez en ligne
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-[#2c2825]/15 text-[#2c2825] lg:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#edeae1] px-6 pt-32 transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {DATA.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-serif text-3xl tracking-tight text-[#2c2825]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="h-px w-full bg-[#2c2825]/10" />
          <a
            href={DATA.links.reservation}
            className="inline-flex w-fit items-center gap-3 bg-[#2c2825] px-8 py-4 text-sm uppercase tracking-[0.24em] text-[#edeae1]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Réservez en ligne <ArrowRight size={16} />
          </a>
        </nav>
      </div>

      <main id="top">
        <section className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-14 px-6 pt-32 pb-24 md:px-12 md:pt-44 md:pb-36 lg:grid-cols-12 lg:gap-10">
          <div className="z-10 flex flex-col justify-center lg:col-span-5 lg:pr-6">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#2c2825]/55">
              {DATA.tagline}
            </p>
            <h1 className="mb-8 font-serif text-[3.8rem] leading-[0.9] tracking-tight text-[#2c2825] md:text-[5.5rem] lg:text-[7rem]">
              {DATA.heroTitle}
            </h1>
            <div className="mb-10 space-y-4 border-l border-[#2c2825]/16 pl-6">
              {DATA.heroLines.map((line) => (
                <p
                  key={line}
                  className="max-w-xl text-lg leading-relaxed text-[#2c2825]/82 md:text-xl"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="space-y-4 text-sm uppercase tracking-[0.2em] text-[#2c2825]/72">
              <p>{DATA.heroReservationLine}</p>
              <div className="flex flex-wrap items-center gap-4">
                <span>{DATA.heroOnlineLine}</span>
                <a
                  href={DATA.links.reservation}
                  className="inline-flex items-center gap-2 border-b border-[#2c2825] pb-1 text-[#2c2825] transition-colors hover:text-[#6b5c4d]"
                >
                  Réservez en ligne <ArrowRight size={14} />
                </a>
                <a
                  href={DATA.links.menuPdf}
                  className="inline-flex items-center gap-2 border-b border-[#2c2825]/30 pb-1 text-[#2c2825]/82 transition-colors hover:text-[#2c2825]"
                >
                  {DATA.menuPdfLabel} <Download size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[28rem] lg:col-span-7 lg:min-h-[44rem]">
            <div className="absolute top-0 right-0 z-10 aspect-[3/4] w-[84%] overflow-hidden shadow-[0_40px_120px_rgba(28,26,24,0.18)] lg:w-[76%]">
              <img
                src={DATA.images.heroPrimary}
                alt="Ambiance du restaurant L'Artisan"
                className="h-full w-full object-cover brightness-[0.96] grayscale-[6%] sepia-[4%]"
              />
            </div>
            <div className="absolute bottom-0 left-[4%] z-20 aspect-square w-[52%] overflow-hidden border-[10px] border-[#edeae1] shadow-[0_30px_80px_rgba(28,26,24,0.16)] lg:w-[40%]">
              <img
                src={DATA.images.heroSecondary}
                alt="Cuisine et détails du restaurant"
                className="h-full w-full object-cover grayscale-[18%] sepia-[8%]"
              />
            </div>
          </div>
        </section>

        <section
          id="le-lieu"
          className="scroll-mt-28 bg-[#1c1a18] px-6 py-28 text-[#d8d2c4] md:px-12 md:py-32"
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1">
              <img
                src={DATA.images.lieu}
                alt="La cuisine ouverte de L'Artisan"
                className="h-full w-full object-cover opacity-92 transition-transform duration-1000 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-4 border border-[#d8d2c4]/20" />
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading eyebrow={DATA.tagline} title={DATA.placeTitle} light />
              <div className="space-y-8">
                {DATA.placeLines.map((line, index) => (
                  <div key={line} className="flex items-start gap-6">
                    <span className="w-8 pt-1 font-serif text-sm text-[#d8d2c4]/38">
                      0{index + 1}
                    </span>
                    <p className="font-serif text-2xl leading-snug text-[#f3ede3] md:text-3xl">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="carte-menus"
          className="scroll-mt-28 mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-32"
        >
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Notre philosophie" title={DATA.menuTitle} />
              <div className="space-y-5 border-l border-[#2c2825]/14 pl-6">
                {DATA.menuLines.map((line) => (
                  <p
                    key={line}
                    className="text-lg leading-relaxed text-[#2c2825]/82 md:text-xl"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-8 font-serif text-xl italic text-[#6b5c4d]">
                {DATA.giftCardLine}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={DATA.links.menuPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#2c2825] px-8 py-4 text-sm uppercase tracking-[0.22em] text-[#edeae1] transition-colors hover:bg-[#6b5c4d]"
                >
                  <Download size={16} />
                  {DATA.menuPdfLabel}
                </a>
                <a
                  href={DATA.links.email}
                  className="inline-flex items-center gap-3 border border-[#2c2825] px-8 py-4 text-sm uppercase tracking-[0.22em] text-[#2c2825] transition-colors hover:bg-[#2c2825] hover:text-[#edeae1]"
                >
                  Nous contacter
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="overflow-hidden bg-[#e3dfd4] p-5 shadow-[0_28px_80px_rgba(44,40,37,0.08)] md:p-8">
                  <div className="h-full border border-[#2c2825]/10 bg-[#f6f1e8] p-8 md:p-10">
                    <div className="flex h-full flex-col justify-between gap-10">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-[#2c2825]/45">
                          Carte du moment
                        </p>
                        <h3 className="mt-3 font-serif text-4xl text-[#2c2825]">
                          Produits de saison, cuisine courte, rythme vivant.
                        </h3>
                      </div>
                      <div className="space-y-4 text-[#2c2825]/78">
                        <p className="text-lg leading-relaxed">
                          La carte évolue régulièrement. Le PDF reste disponible en
                          permanence pour consulter les propositions en cours.
                        </p>
                        <p className="text-sm uppercase tracking-[0.22em] text-[#6b5c4d]">
                          Menu structuré activable dès qu&apos;il sera alimenté depuis
                          l&apos;admin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <img
                    src={DATA.images.menu}
                    alt="Assiette et salle du restaurant"
                    className="h-full min-h-[24rem] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="seminaires"
          className="scroll-mt-28 bg-[#1c1a18] px-6 py-28 text-[#d8d2c4] md:px-12 md:py-32"
        >
          <div className="mx-auto max-w-[1600px]">
            <SectionHeading
              eyebrow={DATA.privateEventsSubtitle}
              title={DATA.privateEventsTitle}
              light
            />
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div className="space-y-12">
                <div className="space-y-5 border-l border-[#d8d2c4]/14 pl-6">
                  {DATA.privateEvents.introLines.map((line) => (
                    <p
                      key={line}
                      className="text-lg leading-relaxed text-[#d8d2c4]/82 md:text-xl"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                  <div className="border border-[#d8d2c4]/12 bg-[#24211d] p-8">
                    <h3 className="font-serif text-3xl text-[#f3ede3]">
                      {DATA.privateEvents.pricingHeading}
                    </h3>
                    <ul className="mt-6 space-y-4 text-[#d8d2c4]/82">
                      {DATA.privateEvents.pricingLines.map((line) => (
                        <li key={line} className="leading-relaxed">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-[#d8d2c4]/12 bg-[#24211d] p-8">
                    <h3 className="font-serif text-3xl text-[#f3ede3]">
                      {DATA.privateEvents.conditionsHeading}
                    </h3>
                    <ul className="mt-6 space-y-4 text-[#d8d2c4]/82">
                      {DATA.privateEvents.conditionLines.map((line) => (
                        <li key={line} className="leading-relaxed">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={DATA.privateEvents.ctaHref}
                    className="inline-flex items-center gap-3 border border-[#d8d2c4] px-8 py-4 text-sm uppercase tracking-[0.22em] text-[#d8d2c4] transition-colors hover:bg-[#d8d2c4] hover:text-[#1c1a18]"
                  >
                    {DATA.privateEvents.ctaLabel}
                  </a>
                  <a
                    href={DATA.links.phone}
                    className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-[#d8d2c4]/78 transition-colors hover:text-[#f3ede3]"
                  >
                    <Phone size={16} />
                    {DATA.practicalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={DATA.images.privateEvent}
                  alt="Privatisation et déjeuner à L'Artisan"
                  className="h-full min-h-[28rem] w-full object-cover opacity-84 grayscale-[10%]"
                />
                <div className="pointer-events-none absolute inset-5 border border-[#d8d2c4]/20" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="infos-pratiques"
          className="scroll-mt-28 mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-32"
        >
          <SectionHeading title={DATA.practicalTitle} eyebrow={DATA.tagline} />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            <article className="border-t border-[#2c2825]/10 pt-10">
              <Clock className="mb-6 text-[#6b5c4d]" size={28} strokeWidth={1.4} />
              <h3 className="mb-5 text-sm uppercase tracking-[0.24em] text-[#2c2825]">
                {DATA.practicalInfo.hoursHeading}
              </h3>
              <div className="space-y-3 text-[#2c2825]/82">
                {DATA.practicalInfo.hours.map((line) => (
                  <p key={line} className="leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </article>

            <article className="border-t border-[#2c2825]/10 pt-10">
              <MapPin className="mb-6 text-[#6b5c4d]" size={28} strokeWidth={1.4} />
              <h3 className="mb-5 text-sm uppercase tracking-[0.24em] text-[#2c2825]">
                {DATA.practicalInfo.contactHeading}
              </h3>
              <div className="space-y-3 text-[#2c2825]/82">
                {DATA.practicalInfo.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>

            <article className="border-t border-[#2c2825]/10 pt-10">
              <Phone className="mb-6 text-[#6b5c4d]" size={28} strokeWidth={1.4} />
              <h3 className="mb-5 text-sm uppercase tracking-[0.24em] text-[#2c2825]">
                Contact direct
              </h3>
              <div className="space-y-3 text-[#2c2825]/82">
                <a
                  href={DATA.links.phone}
                  className="flex items-center gap-3 transition-colors hover:text-[#2c2825]"
                >
                  <Phone size={16} />
                  {DATA.practicalInfo.phone}
                </a>
                <a
                  href={DATA.links.email}
                  className="flex items-center gap-3 transition-colors hover:text-[#2c2825]"
                >
                  <Mail size={16} />
                  {DATA.practicalInfo.email}
                </a>
              </div>
            </article>

            <article className="border-t border-[#2c2825]/10 pt-10">
              <Instagram className="mb-6 text-[#6b5c4d]" size={28} strokeWidth={1.4} />
              <h3 className="mb-5 text-sm uppercase tracking-[0.24em] text-[#2c2825]">
                {DATA.practicalInfo.directionsHeading}
              </h3>
              <div className="space-y-4 text-[#2c2825]/82">
                {DATA.practicalInfo.directions.map((line) => (
                  <p key={line} className="leading-relaxed">
                    {line}
                  </p>
                ))}
                <div className="flex items-center gap-4 pt-3">
                  <a
                    href={DATA.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] transition-colors hover:text-[#2c2825]"
                  >
                    <Instagram size={18} />
                    Instagram
                  </a>
                  <a
                    href={DATA.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] transition-colors hover:text-[#2c2825]"
                  >
                    <Facebook size={18} />
                    Facebook
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="bg-[#1c1a18] px-6 py-10 text-[#d8d2c4] md:px-12">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 border-t border-[#d8d2c4]/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={DATA.images.logo}
              alt={DATA.restaurantName}
              className="h-10 w-auto object-contain opacity-90"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#d8d2c4]/62">
            {DATA.footerNote}
          </p>
        </div>
      </footer>
    </div>
  );
}
