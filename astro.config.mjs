import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
// import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ignathedev.com',
  integrations: [
    sitemap()
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});