import "./showcase.css";

export default function SousLaCollineShowcaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="slc-showcase min-h-full">{children}</div>;
}
