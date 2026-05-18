# Cabinet de neuropsychologie - Ekaterina Volova

Site officiel du cabinet de neuropsychologie d'Ekaterina Volova, psychologue spécialisée en neuropsychologie (RPPS 10111377833), exerçant au cabinet Via SANA Parmentier, Paris 11e.

Site multilingue : français, русский, english.

## Stack

- [Astro](https://astro.build) 5
- [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript
- Hébergement : [Cloudflare Pages](https://pages.cloudflare.com)

## Développement local

Prérequis : Node.js 22+, Yarn 4 (Berry).

```bash
yarn install
yarn dev
```

Le site sera accessible sur `http://localhost:4321`.

## Build

```bash
yarn build
yarn preview
```

## Déploiement

Push sur la branche `main` déclenche un build automatique sur Cloudflare Pages.
