import type { Metadata } from "next";
import React from "react";

import VibeSectionFive from "@/components/lartisan/vibes/vibe-section-five";
import VibeSectionFour from "@/components/lartisan/vibes/vibe-section-four";
import VibeSectionOne from "@/components/lartisan/vibes/vibe-section-one";
import VibeSectionThree from "@/components/lartisan/vibes/vibe-section-three";
import VibeSectionTwo from "@/components/lartisan/vibes/vibe-section-two";

export const metadata: Metadata = {
  title: "L'Artisan | Sélection de direction artistique",
  description:
    "Présentation client des pistes visuelles de refonte pour L'Artisan Restaurant à Annecy.",
  alternates: {
    canonical: "https://asmix.fr/lartisan",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "L'Artisan | Sélection de direction artistique",
    description:
      "Présentation client des pistes visuelles de refonte pour L'Artisan Restaurant à Annecy.",
    url: "https://asmix.fr/lartisan",
    siteName: "asmix.fr",
  },
};

const VIBES_DATA = [
  {
    id: "vibe-1",
    label: "Vibe 1",
    name: "Cinematic Warm Bistro",
    description: "Photo-driven, warm, dense, very restaurant-premium.",
    Component: VibeSectionOne,
  },
  {
    id: "vibe-2",
    label: "Vibe 2",
    name: "Restrained Artisan Editorial",
    description: "Bright, elegant, airy, paper-like and more understated.",
    Component: VibeSectionTwo,
  },
  {
    id: "vibe-3",
    label: "Vibe 3",
    name: "Contemporary Terroir",
    description: "Earthy, menu-first, tactile and more product-oriented.",
    Component: VibeSectionThree,
  },
  {
    id: "vibe-4",
    label: "Vibe 4",
    name: "Hospitality Lounge",
    description: "Private-dining focused, intimate and persuasive.",
    Component: VibeSectionFour,
  },
  {
    id: "vibe-5",
    label: "Vibe 5",
    name: "Lake-City Refinement",
    description: "Clean, geometric, modern hospitality with warmth.",
    Component: VibeSectionFive,
  },
];

export default function LartisanPresentationPage() {
  return (
    <main className="selection-page-wrapper relative min-h-screen bg-zinc-950 font-sans text-zinc-200 antialiased selection:bg-zinc-800 selection:text-zinc-50">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />

      <header className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-24 text-center">
        <div className="mb-6 flex justify-center">
          <span className="inline-block rounded-full border border-zinc-800/80 bg-zinc-900/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
            L&apos;Artisan Restaurant, Annecy
          </span>
        </div>

        <h1 className="mb-8 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
          Sélection de direction artistique
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Cette présentation regroupe 5 pistes visuelles construites à partir du
          vrai contenu du restaurant, de ses vraies images et d&apos;une échelle
          balanced. L&apos;objectif est de choisir une direction avant de construire
          le design system final et la home one-page définitive.
        </p>

        <div className="flex justify-center">
          <p className="max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900/80 px-6 py-4 text-sm text-zinc-300 shadow-xl backdrop-blur-md md:px-8 md:py-4 md:text-base">
            Choisissez simplement la proposition qui vous parle le plus: vibe 1,
            vibe 2, vibe 3, vibe 4 ou vibe 5.
          </p>
        </div>
      </header>

      <nav className="sticky top-6 z-50 mb-16 flex w-full justify-center px-4 transition-all duration-300 md:mb-24">
        <div className="hide-scrollbar flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-zinc-700/50 bg-zinc-900/90 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          {VIBES_DATA.map((v) => (
            <a
              key={v.id}
              href={`#${v.id}`}
              className="whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-zinc-400 transition-all hover:bg-zinc-800/80 hover:text-white md:text-sm"
            >
              {v.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative z-10 flex flex-col gap-32 pb-32 md:gap-48">
        {VIBES_DATA.map((vibe, index) => {
          const Component = vibe.Component;

          return (
            <section
              key={vibe.id}
              id={vibe.id}
              className="group mx-auto w-full max-w-[1400px] scroll-mt-32 px-4 sm:px-6 lg:px-8"
            >
              <div className="mb-8 flex flex-col gap-6 border-b border-zinc-800/60 pb-6 transition-colors group-hover:border-zinc-700/80 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="rounded-sm bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-950 shadow-sm">
                      {vibe.label}
                    </span>
                    <span className="font-mono text-sm tracking-widest text-zinc-600">
                      0{index + 1}/05
                    </span>
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl lg:text-4xl">
                    {vibe.name}
                  </h2>
                </div>

                <div className="md:max-w-xs md:text-right">
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {vibe.description}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] bg-zinc-950 ring-1 ring-white/10 shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500 group-hover:shadow-[0_0_80px_-15px_rgba(255,255,255,0.05)] md:rounded-[2.5rem]">
                <div className="flex h-8 w-full items-center gap-2 border-b border-white/5 bg-zinc-900/80 px-6 backdrop-blur-sm md:h-10">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700/50"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700/50"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700/50"></div>
                </div>

                <div className="relative w-full bg-white">
                  <Component />
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <div className="mb-12 flex items-center justify-center gap-4 opacity-50">
          <div className="h-px w-16 bg-zinc-700"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
          <div className="h-px w-16 bg-zinc-700"></div>
        </div>

        <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Prochaine étape
        </h2>

        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 shadow-2xl md:p-16">
          <div className="absolute top-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-20"></div>

          <div className="mb-8 text-3xl font-light tracking-tight text-white md:text-5xl">
            Répondez ensuite avec : <br className="md:hidden" />
            <span className="mt-2 inline-block bg-gradient-to-r from-white to-zinc-400 bg-clip-text font-medium text-transparent md:mt-0">
              vibe X
            </span>
          </div>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Après validation d&apos;une vibe, cette direction devient la base du
            design-system.md et du développement de la version finale.
          </p>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            html {
              scroll-behavior: smooth;
            }
          `,
        }}
      />
    </main>
  );
}
