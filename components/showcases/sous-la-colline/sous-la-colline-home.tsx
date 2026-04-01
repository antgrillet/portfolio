import Image from "next/image";
import Link from "next/link";
import { liveHref } from "./live-site";

type FeatureItem = { icon: string; label: string };
type RoomCard = { name: string; href: string; image: string };

const IMAGE_BASE =
  "https://xoxmmhill1jqtrst.public.blob.vercel-storage.com/images";

/** Snapshot des defaults contenu « home » du livrable (sans CMS / DB). */
const HOME = {
  "meta.home.title":
    "Camping & Chambres d'hôtes en Savoie — Sous La Colline",
  "meta.home.description":
    "Découvrez nos chambres d'hôtes de charme et notre camping en pleine nature, à deux pas du Lac du Bourget et d'Aix-les-Bains en Savoie.",
  "home.hero.image": `${IMAGE_BASE}/cmnf1bmgh0000pqgngspk6d1g/Chambre-3_2-scaled.jpg`,
  "home.hero.imageAlt": "Chambre d'hôtes Sous La Colline",
  "home.hero.badge": "Savoie · Lac du Bourget",
  "home.hero.title": "Camping & Chambres d'hôtes en Savoie",
  "home.hero.subtitle":
    "Un domaine familial de charme au cœur de la nature savoyarde, entre lac et montagne. Idéal pour se ressourcer à deux pas d'Aix-les-Bains.",
  "home.features": [
    { icon: "📶", label: "Wi-Fi inclus" },
    { icon: "🥐", label: "Petit-déjeuner" },
    { icon: "🌲", label: "Pleine nature" },
    { icon: "🚫", label: "Animaux non acceptés" },
    { icon: "🚗", label: "Parking gratuit" },
    { icon: "🏔️", label: "Vue montagne" },
  ] satisfies FeatureItem[],
  "home.rooms.eyebrow": "Hébergement",
  "home.rooms.title": "Nos Chambres d'hôtes",
  "home.rooms.lead":
    "4 chambres de charme entièrement équipées pour un séjour confortable, dans un cadre authentique et chaleureux.",
  "home.rooms.cards": [
    {
      name: "Chambre 1",
      href: "/chambre-1",
      image: `${IMAGE_BASE}/cmnf1bms9000apqgnucl06pjx/Chambre-1_2-scaled.jpg`,
    },
    {
      name: "Chambre 2",
      href: "/chambre-2",
      image: `${IMAGE_BASE}/cmnf1bmt3000bpqgnrroxi1td/Chambre-2_1-scaled.jpg`,
    },
    {
      name: "Chambre 3",
      href: "/chambre-3",
      image: `${IMAGE_BASE}/cmnf1bmty000cpqgnx9sdmc8y/Chambre-3_2-scaled.jpg`,
    },
    {
      name: "Chambre 4",
      href: "/chambre-4",
      image: `${IMAGE_BASE}/cmnf1bmur000dpqgnqba0jmg0/Chambre-4_1-scaled.jpg`,
    },
  ] satisfies RoomCard[],
  "home.camping.eyebrow": "Plein air",
  "home.camping.title": "Notre Camping Nature",
  "home.camping.body":
    "Installez votre tente ou caravane dans un cadre naturel exceptionnel. Le calme de la campagne savoyarde, à portée du lac et des sentiers de randonnée.",
  "home.camping.bullets": [
    "Emplacements spacieux et ombragés",
    "Sanitaires propres et entretenus",
    "Accès aux commerces d'Aix-les-Bains",
    "Environnement calme et familial",
  ],
  "home.camping.image": `${IMAGE_BASE}/cmnf1bmmg0003pqgn2frxhfz1/Camping-2.jpg`,
  "home.camping.imageAlt": "Camping Sous La Colline",
  "home.lac.image": `${IMAGE_BASE}/cmnf1bmgh0000pqgngspk6d1g/lac-du-bourget.jpg`,
  "home.lac.eyebrow": "À deux pas",
  "home.lac.title": "Entre lac et montagne",
  "home.lac.body":
    "Le Lac du Bourget, le plus grand lac naturel de France, les stations de ski, les gorges de la Chaudanne… La région vous offre des escapades inoubliables à toutes saisons.",
  "home.lac.cta": "Consulter le guide des activités",
  "home.breakfast.image": `${IMAGE_BASE}/cmnf1bmgh0000pqgngspk6d1g/Petit-dejeuner-1.jpg`,
  "home.breakfast.eyebrow": "Le matin",
  "home.breakfast.title": "Un petit-déjeuner fait maison",
  "home.breakfast.body":
    "Chaque matin, savourez un petit-déjeuner généreux préparé avec soin. Confitures maison, viennoiseries et produits locaux vous attendent pour bien démarrer la journée.",
  "home.breakfast.link": "En savoir plus sur notre domaine →",
  "home.cta.title": "Prêt à réserver votre séjour ?",
  "home.cta.subtitle":
    "Contactez-nous pour vérifier les disponibilités et obtenir toutes les informations sur votre séjour.",
} as const;

export function SousLaCollineHome() {
  const features = HOME["home.features"];
  const roomCards = HOME["home.rooms.cards"];
  const campingBullets = HOME["home.camping.bullets"];

  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
        <Image
          src={HOME["home.hero.image"]}
          alt={HOME["home.hero.imageAlt"]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
          <p className="mb-4 inline-block rounded-full bg-[var(--brand-terracotta)]/90 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {HOME["home.hero.badge"]}
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
            {HOME["home.hero.title"]}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            {HOME["home.hero.subtitle"]}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={liveHref("/reservation-chambres")}
              className="rounded-full bg-[var(--brand-terracotta)] px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Réserver une chambre
            </Link>
            <Link
              href={liveHref("/reservation-camping")}
              className="rounded-full bg-white/15 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/25"
            >
              Réserver le camping
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-warm)] py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-6 md:gap-10">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
            >
              <span className="text-xl">{f.icon}</span>
              {f.label}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--brand-terracotta)]">
              {HOME["home.rooms.eyebrow"]}
            </p>
            <h2 className="text-4xl font-bold text-[var(--foreground)]">
              {HOME["home.rooms.title"]}
            </h2>
            <p className="mt-3 max-w-xl text-[var(--brand-muted)]">
              {HOME["home.rooms.lead"]}
            </p>
          </div>
          <Link
            href={liveHref("/chambres")}
            className="shrink-0 text-sm font-bold text-[var(--brand-terracotta)] hover:underline"
          >
            Voir toutes les chambres →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roomCards.map((room) => (
            <Link
              key={room.href}
              href={liveHref(room.href)}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[var(--foreground)]">
                  {room.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-[var(--brand-terracotta)]">
                  Voir la chambre →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--brand-warm)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--brand-terracotta)]">
              {HOME["home.camping.eyebrow"]}
            </p>
            <h2 className="text-4xl font-bold text-[var(--foreground)]">
              {HOME["home.camping.title"]}
            </h2>
            <p className="mt-4 text-[var(--brand-muted)] leading-relaxed">
              {HOME["home.camping.body"]}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--brand-muted)]">
              {campingBullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[var(--brand-terracotta)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={liveHref("/camping")}
              className="mt-8 inline-block rounded-full bg-[var(--brand-terracotta)] px-7 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Découvrir le camping
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={HOME["home.camping.image"]}
              alt={HOME["home.camping.imageAlt"]}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <Image
          src={HOME["home.lac.image"]}
          alt="Lac du Bourget"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--brand-sand)]">
            {HOME["home.lac.eyebrow"]}
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {HOME["home.lac.title"]}
          </h2>
          <p className="mt-5 text-lg text-white/80">
            {HOME["home.lac.body"]}
          </p>
          <Link
            href={liveHref("/guide")}
            className="mt-8 inline-block rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-[var(--foreground)]"
          >
            {HOME["home.lac.cta"]}
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={HOME["home.breakfast.image"]}
            alt="Petit-déjeuner maison"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--brand-terracotta)]">
            {HOME["home.breakfast.eyebrow"]}
          </p>
          <h2 className="text-4xl font-bold text-[var(--foreground)]">
            {HOME["home.breakfast.title"]}
          </h2>
          <p className="mt-4 text-[var(--brand-muted)] leading-relaxed">
            {HOME["home.breakfast.body"]}
          </p>
          <Link
            href={liveHref("/a-propos")}
            className="mt-6 inline-block text-sm font-bold text-[var(--brand-terracotta)] hover:underline"
          >
            {HOME["home.breakfast.link"]}
          </Link>
        </div>
      </section>

      <section className="bg-[var(--brand-terracotta)] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {HOME["home.cta.title"]}
          </h2>
          <p className="mt-4 text-white/85">
            {HOME["home.cta.subtitle"]}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={liveHref("/reservation-chambres")}
              className="rounded-full bg-white px-8 py-4 font-semibold text-[var(--brand-terracotta)] transition hover:bg-[var(--brand-sand)]"
            >
              Réserver une chambre
            </Link>
            <Link
              href={liveHref("/reservation-camping")}
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              Réserver le camping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
