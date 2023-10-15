import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// import vercel from "@astrojs/vercel/static";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  })
});