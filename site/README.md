# Portfolio site

Galvarey's portfolio, built with [Astro](https://astro.build), Tailwind CSS and a couple of React islands. Deployed to GitHub Pages at https://galvareypoco.github.io/GalvareyPoco/.

## Run it

```sh
cd site
npm install
npm run dev      # http://localhost:4321/GalvareyPoco/
npm run build    # type-check + static build into dist/
```

## Edit the content

Everything on the page comes from files, no component changes needed:

| What | Where |
|---|---|
| Name, bio, links, stats, languages | `src/data/profile.ts` |
| Skills | `src/data/skills.ts` |
| Work experience | `src/content/experience.json` (roles with `highlights` get a full card; the rest go under "Earlier") |
| Education | `src/content/education.json` |
| Projects | one Markdown file per project in `src/content/projects/` (frontmatter = card, `- ` bullets = "what I did") |

## Deploy

`.github/workflows/deploy-site.yml` builds on every PR touching `site/` and deploys to Pages on pushes to `main`.
One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

Using a custom domain? Set `site` to it in `astro.config.mjs`, remove `base`, and add `public/CNAME`.
