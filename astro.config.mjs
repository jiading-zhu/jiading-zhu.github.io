import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jiading-zhu.github.io",
  output: "static",
  integrations: [sitemap()],
});
