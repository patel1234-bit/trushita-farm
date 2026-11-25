/**
 * Resolves internal routes and public asset URLs against Astro's configured BASE_URL
 * so links work both locally and on GitHub Pages (/trushita-farm/).
 */
export function withBase(path = "/") {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") {
    return `${base}/` || "/";
  }
  return `${base}${cleanPath}`;
}
