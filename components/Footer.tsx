export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#040507] px-4 py-8 text-zinc-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Antonin Grillet. Portfolio React / Next.js.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:antoningrillet@asmix.fr"
            className="cursor-pointer transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            antoningrillet@asmix.fr
          </a>
          <a
            href="https://github.com/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
