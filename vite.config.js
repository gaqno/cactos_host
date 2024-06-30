/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";
import "dotenv/config";

const CACTOS_TOOLS = import.meta.env.VITE_APP_CACTOS_TOOLS
  || 'http://localhost:3001/assets/remoteEntry.js'

const CACTOS_ASSISTANT = import.meta.env.VITE_APP_CACTOS_ASSISTANT
  || 'http://localhost:3002/assets/remoteEntry.js'

const CACTOS_FINANCING = import.meta.env.VITE_APP_CACTOS_FINANCING
  || 'http://localhost:3003/assets/remoteEntry.js'

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
        "@cactos_tools": CACTOS_TOOLS,
        "@cactos_assistant": CACTOS_ASSISTANT,
        "@cactos_financing": CACTOS_FINANCING,
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
