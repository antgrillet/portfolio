import type { Metadata } from "next";
import LartisanPresentationClient from "@/app/[locale]/lartisan/presentation-client";

export const metadata: Metadata = {
  title: "L'Artisan Restaurant | Landing finale",
  description:
    "Landing finale de présentation pour L'Artisan Restaurant à Annecy, intégrée sur asmix.fr/lartisan.",
  alternates: {
    canonical: "https://asmix.fr/lartisan",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "L'Artisan Restaurant | Landing finale",
    description:
      "Landing finale de présentation pour L'Artisan Restaurant à Annecy, intégrée sur asmix.fr/lartisan.",
    url: "https://asmix.fr/lartisan",
    siteName: "asmix.fr",
  },
};

export default function LartisanPresentationPage() {
  return <LartisanPresentationClient />;
}
