import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import Compress from "astro-compress";
import { astroImageTools } from "astro-imagetools";
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [],
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



