// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, resolve } from "node:path";
import svgLoader from "vite-svg-loader";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

const getPath = (path: string) =>
  fileURLToPath(new URL(`./src/${path}`, import.meta.url));
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: "./src",
  build: {
    transpile: ["vue-i18n"],
  },
  nitro: {
    preset: "node-server",
  },
  vite: {
    plugins: [
      svgLoader(),
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "~/locales/*.json"),
        ],
      }),
    ],
    resolve: {
      alias: [
        {
          find: "assets",
          replacement: getPath("assets"),
        },
      ],
    },
  },
  typescript: { shim: false },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  plugins: ["~/plugins/api.ts"],
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/i18n",
  ],
  experimental: {
    asyncEntry: false,
  },
})
