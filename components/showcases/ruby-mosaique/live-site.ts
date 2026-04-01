/** Base du site client pour les liens internes (LINK_MODE live_site). */
export function getLiveSiteOrigin(): string {
  return (
    process.env.NEXT_PUBLIC_LIVE_SITE?.replace(/\/$/, "") ??
    "https://www.ruby-s-creations.com"
  );
}

export function liveHref(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = getLiveSiteOrigin();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
