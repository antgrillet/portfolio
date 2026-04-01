import type { Metadata } from "next";
import { SousLaCollineHome } from "@/components/showcases/sous-la-colline/sous-la-colline-home";

const TITLE =
  "Sous La Colline — Camping & chambres d'hôtes (showcase)";
const DESCRIPTION =
  "Accueil du site Sous La Colline : camping et chambres d'hôtes en Savoie, près du Lac du Bourget — intégration portfolio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://antoningrillet.dev/sous-la-colline",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://antoningrillet.dev/sous-la-colline",
    siteName: "antoningrillet.dev",
  },
};

export default function SousLaCollineShowcasePage() {
  return <SousLaCollineHome />;
}
