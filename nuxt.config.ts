// https://nuxt.com/docs/api/configuration/nuxt-config
import cesium from "vite-plugin-cesium";

export default defineNuxtConfig({
  ssr: false,
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
  ],

  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000/api",
      apiInternalBase:
        process.env.NUXT_PUBLIC_INTERNAL_API_URL || "http://localhost:3000/api",
      CESIUM_ION_TOKEN: process.env.CESIUM_ION_TOKEN,
      CESIUM_BASE_URL: "/cesium",
    },
    internal: {
      cryptoKey: process.env.CRYPTO_KEY,
    },
  },

  compatibilityDate: "2024-07-11",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
  vite: {
    plugins: [cesium()],
  },
  app: {
    head: {
      script: [
        {
          src: '/cesium/Cesium.js',
          defer: true
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/cesium/Widgets/widgets.css'
        }
      ]
    }
  }
});
