import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://leter.net",
  output: "static",
  integrations: [tailwind()],
  adapter: cloudflare()
});