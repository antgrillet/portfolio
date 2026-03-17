import VibeOne from "@/components/vibes/VibeOne";
import VibeTwo from "@/components/vibes/VibeTwo";
import VibeThree from "@/components/vibes/VibeThree";
import VibeFour from "@/components/vibes/VibeFour";
import VibeFive from "@/components/vibes/VibeFive";

const vibes = [
  { id: "vibe-1", label: "Vibe 1", Component: VibeOne },
  { id: "vibe-2", label: "Vibe 2", Component: VibeTwo },
  { id: "vibe-3", label: "Vibe 3", Component: VibeThree },
  { id: "vibe-4", label: "Vibe 4", Component: VibeFour },
  { id: "vibe-5", label: "Vibe 5", Component: VibeFive },
] as const;

export default function VibesSelectionPage() {
  return (
    <main className="bg-[#f3f3f1] text-black">
      <div className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f3f1]/92 px-4 py-4 backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium tracking-tight">
            Sélection de direction visuelle
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            {vibes.map((vibe) => (
              <a
                key={vibe.id}
                href={`#${vibe.id}`}
                className="rounded-full border border-black/10 px-3 py-1.5 transition-colors hover:bg-black hover:text-white"
              >
                {vibe.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8 px-4 py-8 sm:px-6">
        {vibes.map(({ id, label, Component }) => (
          <section
            key={id}
            id={id}
            className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-black/10 px-5 py-4 text-sm font-medium">
              {label}
            </div>
            <Component />
          </section>
        ))}
      </div>
    </main>
  );
}
