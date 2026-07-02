import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jiading-zhu.netlify.app",
  output: "static",
  integrations: [sitemap()],
});
