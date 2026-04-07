import type { Metadata } from "next";
import { RubyMosaiqueHome } from "@/components/showcases/ruby-mosaique/ruby-mosaique-home";

const TITLE = "Ruby'S Créations — Mosaïque & encadrement (showcase)";
const DESCRIPTION =
  "Accueil du site vitrine : atelier de mosaïque et d'encadrement à Aix-les-Bains — démo portfolio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://antoningrillet.dev/ruby-mosaique",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://antoningrillet.dev/ruby-mosaique",
    siteName: "antoningrillet.dev",
  },
};

export default function RubyMosaiqueShowcasePage() {
  return <RubyMosaiqueHome />;
}
