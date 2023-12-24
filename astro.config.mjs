import { defineConfig, squooshImageService } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import vercel from "@astrojs/vercel/serverless";
import partytown from '@astrojs/partytown';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ignathedev.com',
  image: {
    service: squooshImageService(),
  },
  integrations: [
    sitemap(),
    partytown({
      config: {
        config: { debug: true },
        forward: ['dataLayer.push'],
      },
    }),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});