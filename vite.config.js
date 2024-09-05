import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Chandaan_Portfolio/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
