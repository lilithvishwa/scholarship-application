import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default () => {
  const env = loadEnv(process.cwd(), "");
  const backendURL = env.VITE_API_BACKEND;
  const frontendURL = env.VITE_API_FRONTEND;

  return defineConfig({
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
      allowedHosts: [backendURL, frontendURL],
      port: 5173,
      open: true,
      host: true,
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
};
