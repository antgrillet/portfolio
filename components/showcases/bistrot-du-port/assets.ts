/** Re-map `/images/...` du livrable vers les fichiers copiés sous `public/showcases/bistrot-du-port/`. */
export function bdpImg(sonnetPublicPath: string): string {
  if (!sonnetPublicPath.startsWith("/images/")) return sonnetPublicPath;
  return `/showcases/bistrot-du-port${sonnetPublicPath}`;
}
