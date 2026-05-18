import { ui, defaultLang, type Lang, type TranslationKey } from "./ui";

/**
 * Extrait la langue depuis une URL Astro.
 * `/ru/about` → `ru`, `/about` → `fr` (langue par défaut, pas de préfixe).
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Retourne une fonction `t(key)` qui résout les clés dans la langue donnée,
 * avec fallback automatique sur le français si la clé est absente.
 */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Construit un chemin vers une page dans la langue donnée.
 * `fr` est la langue par défaut sans préfixe : `/`, `/contact`.
 * Autres langues : `/ru/`, `/ru/contact`.
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return cleanPath === "/" ? "/" : cleanPath;
  return cleanPath === "/" ? `/${lang}/` : `/${lang}${cleanPath}`;
}

/**
 * Génère les URLs hreflang pour la page courante dans toutes les langues.
 * Utilisé pour les balises <link rel="alternate" hreflang="..."/>.
 */
export function getAlternateUrls(currentPath: string, site: URL): Record<Lang, string> {
  const cleanPath = currentPath.replace(/^\/(fr|ru|en)/, "") || "/";
  return {
    fr: new URL(getLocalizedPath(cleanPath, "fr"), site).toString(),
    ru: new URL(getLocalizedPath(cleanPath, "ru"), site).toString(),
    en: new URL(getLocalizedPath(cleanPath, "en"), site).toString(),
  };
}
