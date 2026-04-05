export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200/90 bg-[#ebe3d6] px-4 py-8 text-stone-600 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Antonin Grillet — React, Next.js, atelier & motion.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:antoningrillet@asmix.fr"
            className="cursor-pointer font-medium transition-colors duration-200 hover:text-[#b84328] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b2b]"
          >
            antoningrillet@asmix.fr
          </a>
          <a
            href="https://github.com/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-medium transition-colors duration-200 hover:text-[#b84328] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b2b]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/antoningrillet"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-medium transition-colors duration-200 hover:text-[#b84328] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b2b]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
