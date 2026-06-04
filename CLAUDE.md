# Site cabinet Ekaterina Volova - Documentation projet

Documentation interne lue automatiquement par Claude Code quand une session est ouverte dans ce dossier. Destinée à Kate (la praticienne) et Hecham (le développeur).

## Le projet en bref

Site vitrine du cabinet de neuropsychologie d'**Ekaterina Volova**, psychologue spécialisée en neuropsychologie (RPPS 10111377833), exerçant au cabinet Via SANA Parmentier, Paris 11e. Ouverture du cabinet : 15 juin 2026.

Site multilingue **français / русский / english**. Site statique, pas de back-end, pas de base de données patients (les RDV passent par Doctolib, certifié HDS).

**Domaines** :
- Principal : `ekaterina-volova.com`
- Redirects 301 vers le principal : `volova-neuropsy.com`, `ekaterina-volova.fr`, `volova-neuropsy.fr`

**Hébergement** : Cloudflare Pages (build auto à chaque push sur `main`).
**Registrar domaines** : OVH (les 4).
**Repo** : `ekaterinavolova/ekaterina-volova-neuropsychologue` (public).

## Stack technique

| Couche | Outil | Version | Notes |
|---|---|---|---|
| Framework | Astro | 5 | Statique-first, i18n built-in |
| Styling | Tailwind CSS | 4 | Via `@tailwindcss/vite`, tokens en `@theme` |
| Langage | TypeScript strict | 5 | Astro check pour le typecheck |
| Package manager | Yarn | 4 (Berry) | Mode `nodeLinker: node-modules` (compat Cloudflare Pages) |
| Fonts | Fontsource self-hosted | - | Inter Variable + Source Serif 4 Variable, latin + cyrillic |
| Node | 22 LTS | - | |

**Pas de** : React, Vue, framework JS lourd, base de données, CMS. C'est volontairement minimaliste.

## Architecture des fichiers

```
src/
├── i18n/
│   ├── ui.ts          ← TOUT le contenu textuel du site, en FR/RU/EN
│   └── utils.ts       ← Helpers (getLangFromUrl, useTranslations, etc.)
├── layouts/
│   └── BaseLayout.astro  ← Head SEO, hreflang, OG, wrapper html/body, Header, Footer
├── components/
│   ├── Container.astro   ← max-width wrapper (prose / content / wide)
│   ├── Section.astro     ← section avec padding vertical + variants de tone
│   ├── Button.astro      ← bouton (primary / secondary / ghost)
│   ├── Header.astro      ← Nav top sticky + mobile burger
│   ├── Footer.astro      ← Pied de page 3 colonnes
│   ├── LangSwitcher.astro ← Switch FR / RU / EN
│   └── HomeContent.astro ← Contenu de la page d'accueil (partagé entre FR/RU/EN)
├── pages/
│   ├── index.astro       ← Accueil FR (route /)
│   ├── ru/index.astro    ← Accueil RU (route /ru/)
│   └── en/index.astro    ← Accueil EN (route /en/)
└── styles/
    └── global.css        ← Tokens (@theme), reset, typographie de base

public/
└── robots.txt

astro.config.mjs       ← Config i18n, sitemap, Tailwind plugin
```

**Principe clé** : tout le contenu textuel du site vit dans `src/i18n/ui.ts` (un seul dictionnaire à 3 langues). Les composants `.astro` sont la structure visuelle, ils ne contiennent **pas** de texte en dur.

## Routes URL

- `/` → Accueil FR (langue par défaut, pas de préfixe)
- `/ru/` → Accueil RU
- `/en/` → Accueil EN
- `/a-propos` → À propos FR
- `/ru/a-propos` → À propos RU
- `/prestations`, `/cabinet`, `/contact`, `/mentions-legales` (et leurs variantes /ru/ et /en/)

Les slugs URL sont **identiques** dans toutes les langues (en français) pour la simplicité.

## Workflow Kate type

### Démarrer une session de travail

```bash
cd ~/Documents/claude/ekaterina-volova-neuropsychologue  # chemin sur le laptop de Kate
git pull                                                  # récupérer les derniers changements
yarn install                                              # installer les deps si besoin
yarn dev                                                  # lance le dev server
```

Ouvrir http://localhost:4321 dans le navigateur. Le site se rafraîchit automatiquement à chaque modif.

### Modifier un texte existant

1. Identifier la clé du texte (ex. "home.lede" pour le pitch d'accueil)
2. Éditer `src/i18n/ui.ts` dans les sections `fr:`, `ru:`, `en:` pour les 3 langues
3. Vérifier visuellement dans le navigateur
4. `git add -A && git commit -m "..." && git push`
5. Cloudflare Pages rebuild auto en ~30s

### Ajouter une nouvelle page

1. Créer le contenu dans `src/i18n/ui.ts` (nouvelles clés FR/RU/EN)
2. Créer `src/pages/<slug>.astro` (version FR)
3. Créer `src/pages/ru/<slug>.astro` et `src/pages/en/<slug>.astro` (réutiliser le même composant via shared component si le contenu est i18n-fié)
4. Ajouter le lien dans `src/components/Header.astro` si la page doit être dans la nav
5. Tester en local, commit, push

### Avant de pousser : vérifier le build

```bash
yarn build
```

Si erreur : ne PAS pousser tant que `yarn build` ne passe pas. Cloudflare Pages refuserait de déployer.

## Conventions obligatoires

### Terminologie clinique (validée par Kate)

Cette terminologie doit être respectée dans tout le contenu, en français et dans les traductions :

| À utiliser | À NE PAS utiliser |
|---|---|
| remédiation cognitive, stimulation cognitive | rééducation cognitive |
| population (adulte, russophone, etc.) | public |
| maladies neurodégénératives | démence (sauf nom propre comme "démence à corps de Lewy" devient "maladie à corps de Lewy") |
| neuropsychologie | neuropsychologie clinique |
| dégénérescence fronto-temporale | démence fronto-temporale |
| maladie à corps de Lewy | démence à corps de Lewy |
| psychologue spécialisée en neuropsychologie | neuropsychologue clinicienne |

Référence canonique : `~/Documents/claude/family-agents/data/ekaterina/cabinet/kb/profil_pro_kate_neuropsy.md` (côté Kate) ou `~/Documents/code/personal/agents/data/ekaterina/cabinet/kb/profil_pro_kate_neuropsy.md` (côté Hecham).

### Synchronisation des 3 langues

Le type TypeScript force la présence de **toutes les clés** dans **chaque langue**. Si tu ajoutes une clé `"foo.bar"` dans la section `fr:`, le build échouera tant que `ru:` et `en:` ne contiennent pas la même clé.

Workflow recommandé pour ajouter du contenu :
1. Ajouter la clé en français d'abord
2. Tenter `yarn build` : il échouera en signalant les langues manquantes
3. Ajouter les versions RU et EN (Kate révise les traductions IA)
4. `yarn build` doit passer

### Pas de em dash (long tiret)

Ne **jamais** utiliser le caractère `—` (U+2014). Utiliser `-` (trait d'union) ou `--` (double trait d'union) ou reformuler la phrase. Règle globale du projet et du foyer.

### Pas de Google Fonts CDN, pas de tracker tiers

Les fonts sont auto-hébergées via Fontsource (RGPD-clean). Pas d'iframe YouTube, pas de Google Maps embed, pas de Facebook pixel. Si besoin de carte, utiliser OpenStreetMap ou simple lien sortant. Pas de banner cookie nécessaire avec cette stack.

### Pas de données patients

Le site est une **vitrine** uniquement. Aucun formulaire qui stocke des données médicales. La prise de RDV passe par **Doctolib** (lien externe, certifié HDS). Le formulaire de question de la page Contact est un **pur relais** : la Pages Function `functions/api/contact.js` vérifie Cloudflare Turnstile (anti-spam) puis transmet le message par email à Kate via Resend - rien n'est stocké côté site. Si la fonction échoue, le front bascule en `mailto:`. Les env vars `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY` (secrets) et `PUBLIC_TURNSTILE_SITE_KEY` vivent dans les settings Cloudflare Pages, jamais dans le repo.

## Tokens design system

Définis dans `src/styles/global.css` sous `@theme`. À respecter, ne pas réinventer :

**Couleurs** (oklch) :
- Encre : `--color-ink` (titres), `--color-ink-soft` (corps), `--color-ink-muted` (méta), `--color-ink-faint`
- Papier : `--color-paper` (fond), `--color-paper-warm` (sections alt), `--color-paper-deep` (cartes)
- Accent : `--color-accent`, `--color-accent-soft`, `--color-accent-deep`
- Règles : `--color-rule`, `--color-rule-soft`

**Typographie** :
- `--font-serif` : Source Serif 4 Variable (titres)
- `--font-sans` : Inter Variable (corps)

**Espacements** :
- Sections : `--spacing-section-sm` / `--spacing-section` / `--spacing-section-lg`
- Conteneurs : `--container-prose` / `--container-content` / `--container-wide`

Utilisation en classe Tailwind : `bg-[var(--color-paper-warm)]`, `text-[var(--color-ink-soft)]`, etc.

## Garde-fous

- **Avant push** : toujours `yarn build`. Si erreur, ne pas pousser.
- **Pas de secrets** dans le code : pas de clé API, pas de token. Si besoin d'env vars, utiliser Cloudflare Pages env settings (jamais dans le repo).
- **Pas de modifier les fichiers config sans demander** : `astro.config.mjs`, `tsconfig.json`, `.yarnrc.yml`, `package.json` ne se touchent qu'avec discussion.
- **Pas de force push** sur `main`. Si le history doit être réécrit, créer une branche.
- **Pas de gros changements de design sans review** : la palette, la typo, le layout global sont conçus comme un système cohérent. Modifier un seul token peut avoir un effet en cascade.

## Pour Claude - instructions spécifiques

Quand l'utilisateur (Kate ou Hecham) te demande de faire quelque chose dans ce repo :

1. **Si c'est une modif de contenu textuel** : édite `src/i18n/ui.ts`, dans les 3 langues. Respecte la terminologie obligatoire (section ci-dessus).

2. **Si c'est une nouvelle page** : crée 3 routes (`/page`, `/ru/page`, `/en/page`) qui utilisent un composant partagé `<PageContent />` lisant ses textes depuis `i18n/ui.ts`. Suivre le pattern de `HomeContent.astro`.

3. **Si c'est une demande de design / esthétique** : utilise les tokens existants (`var(--color-*)`, `var(--font-*)`, `var(--spacing-*)`). N'invente pas de nouvelles couleurs. Si tu penses qu'un nouveau token est nécessaire, propose-le avant d'éditer.

4. **Si c'est une demande technique ambiguë** : pose une question avant d'agir. Le repo est petit, mais les conventions doivent rester strictes pour rester maintenable.

5. **Toujours** : lance `yarn build` après les modifs pour vérifier que le typecheck et la compilation passent. Préviens si le build échoue.

6. **Toujours en FR** : réponds à Kate en français (sa langue de travail).

7. **Pas de commit automatique** : ne commit jamais sans validation explicite de l'utilisateur. Le push doit être déclenché par Kate ou Hecham.

## Liens utiles

- Repo GitHub : https://github.com/ekaterinavolova/ekaterina-volova-neuropsychologue
- Cloudflare Pages : https://dash.cloudflare.com (compte Kate `volova.neuropsy@gmail.com`)
- OVH Manager : https://www.ovh.com/manager (compte Kate `volova.neuropsy@gmail.com`)
- Astro docs : https://docs.astro.build/
- Tailwind v4 docs : https://tailwindcss.com/docs

## État du projet (mai 2026)

- ✅ Init projet, design system, layouts, header, footer
- ✅ Page Accueil FR / RU / EN (translations IA à faire réviser par Kate)
- ⏳ Pages À propos, Prestations, Cabinet, Contact, Mentions légales
- ⏳ Schema.org Physician, Open Graph image
- ⏳ Setup Cloudflare Pages (en attente propagation DNSSEC OFF, ~24h)
- ⏳ Branchement du domaine `ekaterina-volova.com`
- ⏳ Configuration des redirects 301 des 3 autres domaines

Quand toutes ces tâches sont OK, le site sera **V1 prête pour annexe 14 PMOE Bobigny** (dépôt cible début juin 2026).
