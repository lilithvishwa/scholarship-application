import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@shared/ui": path.resolve(__dirname, "./src/shared/ui"),
    },
  },
  server: {
    allowedHosts: [
      "convolutional-celibatic-shu.ngrok-free.dev",
      "https://dorine-bolographic-apparently.ngrok-free.dev",
    ],
    // proxy: {
    //   "/api": {
    //     target: "https://scholarship-application.fastapicloud.dev",
    //     // target: "https://dorine-bolographic-apparently.ngrok-free.dev",
    //     changeOrigin: true,
    //     // secure: true,
    //     // rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // }
  },
});
