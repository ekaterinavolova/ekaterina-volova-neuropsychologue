// Markdown pour les agents IA : apres le build, ecrit une copie Markdown de
// chaque page a cote de son HTML (contact/index.html -> contact/index.md).
// La Pages Function functions/_middleware.js la sert quand une requete envoie
// `Accept: text/markdown` ; les navigateurs recoivent toujours le HTML.
// Seul <main> est converti : menu, pied de page et scripts n'apportent rien.
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import TurndownService from "turndown";

const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
td.remove(["script", "style", "svg", "noscript", "form"]);

const pick = (html, re) => html.match(re)?.[1]?.trim() ?? "";

async function* pages(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "_astro") yield* pages(path);
    else if (entry.name === "index.html") yield path;
  }
}

/** @returns {import("astro").AstroIntegration} */
export default function markdown() {
  return {
    name: "markdown-for-agents",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        let count = 0;
        for await (const file of pages(fileURLToPath(dir))) {
          const html = await readFile(file, "utf8");
          const main = pick(html, /<main[^>]*>([\s\S]*)<\/main>/);
          if (!main) continue;
          const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
          // compressHTML colle les balises ("**Bilan**450 €") et l'agent lit la
          // copie hors du site : on espace les balises, liens et images deviennent absolus
          const prepared = main
            .replace(/></g, "> <")
            .replace(/(href|src)="\//g, `$1="${new URL(canonical).origin}/`);
          const body = td.turndown(prepared).replace(/\n{3,}/g, "\n\n");
          await writeFile(file.replace(/\.html$/, ".md"), `${body}\n\nSource : ${canonical}\n`);
          count++;
        }
        logger.info(`${count} pages Markdown ecrites`);
      },
    },
  };
}
