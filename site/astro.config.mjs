// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Served from GitHub Pages as a project site: https://galvareypoco.github.io/GalvareyPoco/
// If you add a custom domain later, set `site` to it and remove `base`.
export default defineConfig({
  site: "https://galvareypoco.github.io",
  base: "/GalvareyPoco",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
