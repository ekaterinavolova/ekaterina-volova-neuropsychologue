import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Domaine principal — autres domaines (volova-neuropsy.com, .fr × 2) en redirect 301
const SITE_URL = "https://ekaterina-volova.com";

export default defineConfig({
  site: SITE_URL,

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
          fr: "fr-FR",
          ru: "ru-RU",
          en: "en-US",
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
