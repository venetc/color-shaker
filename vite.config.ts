import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import { resolve } from "node:path";
import { URL, fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [
    devtools({
      autoname: true,
    }),
    solid(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@shared": resolve(__dirname, "src/shared"),
      "@features": resolve(__dirname, "src/features"),
      "@entities": resolve(__dirname, "src/entities"),
      "@pages": resolve(__dirname, "src/pages"),
      "@widgets": resolve(__dirname, "src/widgets"),
      "lucide-solid/icons": fileURLToPath(new URL("./node_modules/lucide-solid/dist/source/icons", import.meta.url)),
    },
  },
});
