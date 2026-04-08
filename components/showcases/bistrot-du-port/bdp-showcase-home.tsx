import { BdpHomeAccroche } from "./bdp-home-accroche";
import { BdpHomeCtas } from "./bdp-home-ctas";
import { BdpHomeHero } from "./bdp-home-hero";
import { BdpHomeHoraires } from "./bdp-home-horaires";

/** Accueil livré (vibe Marine Immersif) — même structure que le repo livrable `sonnet`. */
export function BdpShowcaseHome() {
  return (
    <>
      <BdpHomeHero />
      <BdpHomeAccroche />
      <BdpHomeHoraires />
      <BdpHomeCtas />
    </>
  );
}
