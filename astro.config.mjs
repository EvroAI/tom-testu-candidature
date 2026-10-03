// @ts-check
import { defineConfig } from "astro/config";

// Ce site est un site statique, déployé sur Cloudflare Pages.
// La commande de build est `npm run build` et le dossier de sortie est `dist`.
//
// L'URL `site` sert d'URL canonique et au sitemap. Remplace-la par l'adresse
// *.pages.dev une fois ton projet Cloudflare Pages créé.
export default defineConfig({
  site: "https://tom-testu-candidature.pages.dev",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
