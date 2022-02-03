import vue from "@vitejs/plugin-vue";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["logo-filled.svg", "bg.mp4"],
    },
  },
  server: {
    host: true,
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          customCollections: ["fluency"],
        }),
      ],
    }),
    WindiCSS(),
    Icons({
      customCollections: {
        fluency: FileSystemIconLoader("./src/assets/svg"),
      },
    }),
  ],
});
