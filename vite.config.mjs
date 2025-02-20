import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    port: 3000, // 開発サーバーのポート指定
  },
  root: "src", // 開発ディレクトリ設定
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "src/assets/js/home.js"),
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        assetFileNames: `assets/[ext]/[name].[ext]`,
        manualChunks: null,
      },
    },
  },
});
