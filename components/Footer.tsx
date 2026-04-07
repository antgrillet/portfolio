"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 bg-white px-6 py-12 text-zinc-500 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium">
          {t("copyright", { year: currentYear })}
        </p>
        
        <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <a
            href="mailto:antoningrillet@asmix.fr"
            className="transition-colors hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-1"
          >
            Email
          </a>
          <a
            href="https://github.com/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-1"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-1"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
