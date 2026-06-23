import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  server: {
    host: "0.0.0.0",
    port: 3001,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs",
  },
});
