import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Domaine principal — autres domaines (volova-neuropsy.com, .fr × 2) en redirect 301
const SITE_URL = "https://ekaterina-volova.com";

export default defineConfig({
  site: SITE_URL,

  // Une seule forme d'URL (avec slash final) : canonical, hreflang, sitemap et
  // liens internes pointent tous vers la page servie, sans redirection 308.
  trailingSlash: "always",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "ru", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      ru: "fr",
      en: "fr",
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "fr",
          ru: "ru",
          en: "en",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: "auto",
  },

  compressHTML: true,
});
