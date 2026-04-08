import type { Metadata } from "next";
import { BdpShowcaseHome } from "@/components/showcases/bistrot-du-port/bdp-showcase-home";

const TITLE = "Bistrot du Port — showcase accueil (refonte Next.js)";
const DESCRIPTION =
  "Démo portfolio : accueil livré (Next.js, Framer Motion, GSAP) — identité Marine Immersif, lac du Bourget, Aix-les-Bains. Site public : bistrot-du-port.fr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://antoningrillet.dev/fr/bistrot-du-port",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://antoningrillet.dev/fr/bistrot-du-port",
    siteName: "Antonin Grillet",
  },
};

export default function BistrotDuPortShowcasePage() {
  return <BdpShowcaseHome />;
}
