/* eslint-disable no-undef */
/// <reference types="vite/client" />

import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";
import "dotenv/config";

// const CACTOS_TOOLS = process.env.VITE_APP_CACTOS_TOOLS
//   || 'http://localhost:3001/assets/remoteEntry.js'

const CACTOS_ASSISTANT = process.env.VITE_APP_CACTOS_ASSISTANT
  || 'http://localhost:3002/assets/remoteEntry.js'

const CACTOS_FINANCING = process.env.VITE_APP_CACTOS_FINANCING
  || 'http://localhost:3003/assets/remoteEntry.js'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
  plugins: [
    react(),
    federation({
      name: "@cactos_host",
      exposes: {
        './Hooks': './src/hooks',
      },
      remotes: {
        "@cactos_assistant": CACTOS_ASSISTANT,
        "@cactos_financing": CACTOS_FINANCING,
      },
      shared: [
        "react",
        "react-dom",
      ]
    }),
    topLevelAwait({}),
  ],
});
