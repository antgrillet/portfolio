import "./showcase.css";
import { SousLaCollineFooter } from "@/components/showcases/sous-la-colline/sous-la-colline-footer";
import { SousLaCollineHeader } from "@/components/showcases/sous-la-colline/sous-la-colline-header";

export default function SousLaCollineShowcaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="slc-showcase flex min-h-full flex-col">
      <SousLaCollineHeader />
      <div className="flex-1">{children}</div>
      <SousLaCollineFooter />
    </div>
  );
}
