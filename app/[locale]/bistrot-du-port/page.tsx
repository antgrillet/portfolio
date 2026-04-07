import type { Metadata } from "next";
import { BdpShowcaseHome } from "@/components/showcases/bistrot-du-port/bdp-showcase-home";

const TITLE = "Bistrot du Port — showcase accueil (refonte)";
const DESCRIPTION =
  "Démo portfolio : page d’accueil livrée (Next.js) — restaurant au lac du Bourget, Aix-les-Bains. Site public : bistrot-du-port.fr.";

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
