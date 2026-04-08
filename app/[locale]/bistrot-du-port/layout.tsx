import "./showcase.css";
import { BdpSiteFooter } from "@/components/showcases/bistrot-du-port/bdp-footer";
import { BdpSiteHeader } from "@/components/showcases/bistrot-du-port/bdp-header";

export default function BistrotDuPortShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bdp-showcase-root flex min-h-full flex-col bg-[#021222] text-[#f5f0e8]">
      <BdpSiteHeader />
      <div className="flex-1">{children}</div>
      <BdpSiteFooter />
    </div>
  );
}
