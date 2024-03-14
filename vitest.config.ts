import { fileURLToPath } from "url";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

const initPathAliases = () => {
  const paths = [
    { relative: "utils", path: "./src/utils" },
    { relative: "@", path: "./src" },
    { relative: "components", path: "./src/components" },
    { relative: "services", path: "./src/services" },
    { relative: "config", path: "./src/config" },
    { relative: "types", path: "./src/types" },
    { relative: "hooks", path: "./src/hooks" },
    { relative: "stores", path: "./src/stores" },
  ];

  return paths.map((item) => ({
    find: item.relative,
    replacement: fileURLToPath(new URL(item.path, import.meta.url)),
  }));
};
export default defineConfig({
  plugins: [vue(), chunkSplitPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: initPathAliases(),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
