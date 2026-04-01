import { Fraunces, Lato } from "next/font/google";
import "./showcase.css";
import { RubyCustomCursor } from "@/components/showcases/ruby-mosaique/ruby-custom-cursor";
import { RubySiteFooter } from "@/components/showcases/ruby-mosaique/ruby-site-footer";
import { RubySiteNav } from "@/components/showcases/ruby-mosaique/ruby-site-nav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function RubyMosaiqueShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${fraunces.variable} ${lato.variable} ruby-showcase flex min-h-full flex-col overflow-x-hidden`}
    >
      <RubyCustomCursor />
      <RubySiteNav />
      <div className="flex-1">{children}</div>
      <RubySiteFooter />
    </div>
  );
}
