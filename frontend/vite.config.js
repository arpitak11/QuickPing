// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  //base: './',
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
