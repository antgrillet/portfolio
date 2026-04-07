import { HomeBelowFold, Vibe1HeroMainOnly } from "./bdp-site-shell";

export function BdpShowcaseHome() {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#fdfdfd] font-sans text-[#141414] selection:bg-[#e5e5e5] selection:text-black">
      <Vibe1HeroMainOnly />
      <HomeBelowFold />
    </div>
  );
}
