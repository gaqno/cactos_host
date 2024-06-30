import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    cssMinify: false,
  },
  plugins: [
    react(),
    federation({
      name: "@cactos_host",
      exposes: {
        './Hooks': './src/hooks',
        './Components': './src/ui/components',
        './Templates': './src/ui/templates',
      },
      remotes: {
        "@cactos_tools": "http://localhost:5001/assets/remoteEntry.js",
        "@cactos_assistant": "http://localhost:5002/assets/remoteEntry.js",
        "@cactos_financing": "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "daisyui",
        "autoprefixer",
      ]
    }),
    topLevelAwait({}),
  ],
});
