# Candidature Tom Testu — Alpha to Omega

Site de candidature pour le stage **« Développement web, IA & gouvernance numérique »**
proposé par **Alpha to Omega** (Toulouse).

Il présente mon parcours, mes compétences, mes projets, ma motivation et ma
démarche d'utilisation de l'intelligence artificielle. Le site est **bilingue
français / anglais**, dispose d'un **thème clair et sombre**, et est **déployé
sur Cloudflare Pages**.

> 🟢 **En ligne :** https://tom-testu-candidature.pages.dev

## Stack

- [Astro](https://astro.build/) — site statique, aucune dépendance de runtime
- CSS écrit à la main (jetons de thème, aucun framework)
- TypeScript pour le contenu et la logique de langue

## Démarrage local

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # génère le site statique dans dist/
npm run preview  # prévisualise le build
```

## Déploiement sur Cloudflare Pages

Le plus simple est de passer par le tableau de bord Cloudflare :

1. Créer un compte sur [dash.cloudflare.com](https://dash.cloudflare.com/) puis
   ouvrir **Workers & Pages → Create → Pages → Connect to Git**.
2. Sélectionner le dépôt contenant ce projet.
3. Renseigner les paramètres de build :
   - **Framework preset** : Astro
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
4. Déployer. Le site est accessible sur une adresse `https://<projet>.pages.dev`.

### Déploiement direct (sans Git)

```bash
npm run build
npx wrangler pages deploy dist --project-name tom-testu
```

> Pense à mettre à jour l'URL canonique (`site`) dans `astro.config.mjs` avec
> l'adresse `*.pages.dev` obtenue.

## Personnalisation

- **Tout le texte du site** (français et anglais) est centralisé dans
  [`src/content.ts`](src/content.ts). Les deux langues partagent la même
  structure.
- **Couleurs, typographies et espacements** : [`src/styles/global.css`](src/styles/global.css),
  avec les variables `[data-theme="light"]` et `[data-theme="dark"]`.
- **Coordonnées et liens** (e-mail, téléphone, GitHub, LinkedIn, portfolio) :
  objet `SITE` en haut de `src/content.ts`.

## Structure

```
public/            fichiers servis tels quels (favicon, robots.txt, _headers)
src/
  assets/
    hero-enter.png  illustration du héros (optimisée en WebP au build)
  content.ts       contenu bilingue + coordonnées
  layouts/
    Layout.astro   gabarit : <head>, en-tête, pied de page, scripts thème/langue
  pages/
    index.astro    page unique : héros, profil, compétences, projets,
                   parcours, motivation, démarche IA, contact
  styles/
    global.css     feuille de style globale
astro.config.mjs   configuration Astro (URL du site, build)
```

## À propos de la démarche IA

Le brief de candidature impose un site développé avec l'aide de l'intelligence
artificielle et demande de préciser les outils utilisés, les étapes et la
manière. Ces informations sont regroupées dans la section **« Démarche IA »**
du site — pense à vérifier qu'elles correspondent bien à ton travail réel avant
de candidater.

## À transmettre à Alpha to Omega

Le document de candidature demande trois choses :

1. **L'URL publique** du site déployé : <https://tom-testu-candidature.pages.dev>
2. **Le ou les outils d'IA utilisés** ;
3. Quelques lignes sur les **difficultés rencontrées** ou les **choix techniques**.

À envoyer via <https://candidatures.alpha2omegaconsulting.com>.

### Redéployer après une modification

```bash
npm run build
npx wrangler pages deploy dist --project-name tom-testu-candidature
```

## Déployer pour la première fois (résumé)

1. `npm run build`
2. `npx wrangler login` (une fois)
3. `npx wrangler pages project create tom-testu-candidature --production-branch main`
4. `npx wrangler pages deploy dist --project-name tom-testu-candidature`

