// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, resolve } from "node:path";
import svgLoader from "vite-svg-loader";
import postcssNormalize from "postcss-normalize";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const getScssAdditionalData = (names: string[]) => {
  return names.reduce((acc, name) => {
    return `${acc}\n@import "@/assets/styles/${name}";`;
  }, "");
};
const getPath = (path: string) =>
  fileURLToPath(new URL(`./src/${path}`, import.meta.url));
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: "./src",
  build: {
    transpile: ["vue-i18n", "vuetify"],
  },
  nitro: {
    preset: "node-server",
  },
  css: ["@/assets/styles/main.scss", "sanitize.css"],
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
        {
          find: "static",
          replacement: getPath("static"),
        },
      ],
    },
    css: {
      postcss: {
        plugins: [postcssNormalize()],
      },
      preprocessorOptions: {
        scss: {
          additionalData: getScssAdditionalData([
            "_variables.scss",
            "_mixins.scss",
            "_layout.scss",
            "_utils.scss",
            "_animations.scss",
            "_fonts.scss",
          ]),
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  typescript: { shim: false },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },

  alias: {
    components: getPath("components"),
    middleware: getPath("middleware"),
    pages: getPath("pages"),
    utils: getPath("utils"),
    types: getPath("types"),
    services: getPath("services"),
    config: getPath("config"),
    hooks: getPath("hooks"),
    constants: getPath("constants"),
    composables: getPath("composables"),
    stores: getPath("stores"),
    static: getPath("static"),
  },
  plugins: ["~/plugins/api.ts", "~/plugins/vuetify.ts"],
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/i18n",
    "@sidebase/nuxt-auth",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  auth: {
    globalAppMiddleware: true,
    baseURL: process.env.NEW_API_BASE_URL + "/api",
    provider: {
      type: "refresh",
      sessionDataType: { role: "USER", username: "string", password: "string" },
      endpoints: {
        signIn: { path: "/auth/login", method: "post" },
        signOut: false, // not
        signUp: { path: "/auth/registration", method: "post" },
        getSession: { path: "/user", method: "get" },
        refresh: { path: "auth/refresh", method: "post" },
      },
      token: {
        signInResponseTokenPointer: "/accessToken",
        cookieName: "auth.tokens",
        maxAgeInSeconds: 10,
      },
      refreshToken: {
        signInResponseRefreshTokenPointer: "/refreshToken",
        cookieName: "auth.tokens",
        maxAgeInSeconds: 60 * 60,
      },
      pages: {
        login: "/login",
      },
    },
    session: {
      // enableRefreshOnWindowFocus: true, // Refetch user session every time when browser tab will be focused
      // enableRefreshPeriodically: 5000,
    },
    globalMiddlewareOptions: {
      allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
      addDefaultCallbackUrl: "/", // Where authenticated user will be redirected to by default
    },
  },
  experimental: {
    asyncEntry: false,
  },
});
