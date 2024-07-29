// vite.config.js
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///home/gaqno/coding/gaqno/cactos/cactos_host/node_modules/vite/dist/node/index.js";
import react from "file:///home/gaqno/coding/gaqno/cactos/cactos_host/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///home/gaqno/coding/gaqno/cactos/cactos_host/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import topLevelAwait from "file:///home/gaqno/coding/gaqno/cactos/cactos_host/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import "file:///home/gaqno/coding/gaqno/cactos/cactos_host/node_modules/dotenv/config.js";
var __vite_injected_original_import_meta_url = "file:///home/gaqno/coding/gaqno/cactos/cactos_host/vite.config.js";
var CACTOS_ASSISTANT = process.env.VITE_APP_CACTOS_ASSISTANT || "http://localhost:3002/assets/remoteEntry.js";
var CACTOS_FINANCING = process.env.VITE_APP_CACTOS_FINANCING || "http://localhost:3003/assets/remoteEntry.js";
var vite_config_default = defineConfig({
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)) }
    ]
  },
  plugins: [
    react(),
    federation({
      name: "@cactos_host",
      exposes: {
        "./Hooks": "./src/hooks"
      },
      remotes: {
        "@cactos_assistant": CACTOS_ASSISTANT,
        "@cactos_financing": CACTOS_FINANCING
      },
      shared: [
        "react",
        "react-dom"
      ]
    }),
    topLevelAwait({})
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9nYXFuby9jb2RpbmcvZ2Fxbm8vY2FjdG9zL2NhY3Rvc19ob3N0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9nYXFuby9jb2RpbmcvZ2Fxbm8vY2FjdG9zL2NhY3Rvc19ob3N0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2dhcW5vL2NvZGluZy9nYXFuby9jYWN0b3MvY2FjdG9zX2hvc3Qvdml0ZS5jb25maWcuanNcIjsvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG5cbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gXCJ2aXRlLXBsdWdpbi10b3AtbGV2ZWwtYXdhaXRcIjtcbmltcG9ydCBcImRvdGVudi9jb25maWdcIjtcblxuLy8gY29uc3QgQ0FDVE9TX1RPT0xTID0gcHJvY2Vzcy5lbnYuVklURV9BUFBfQ0FDVE9TX1RPT0xTXG4vLyAgIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXNzZXRzL3JlbW90ZUVudHJ5LmpzJ1xuXG5jb25zdCBDQUNUT1NfQVNTSVNUQU5UID0gcHJvY2Vzcy5lbnYuVklURV9BUFBfQ0FDVE9TX0FTU0lTVEFOVFxuICB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAyL2Fzc2V0cy9yZW1vdGVFbnRyeS5qcydcblxuY29uc3QgQ0FDVE9TX0ZJTkFOQ0lORyA9IHByb2Nlc3MuZW52LlZJVEVfQVBQX0NBQ1RPU19GSU5BTkNJTkdcbiAgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9hc3NldHMvcmVtb3RlRW50cnkuanMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAgeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSkgfSxcbiAgICBdXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogXCJAY2FjdG9zX2hvc3RcIixcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgJy4vSG9va3MnOiAnLi9zcmMvaG9va3MnLFxuICAgICAgfSxcbiAgICAgIHJlbW90ZXM6IHtcbiAgICAgICAgXCJAY2FjdG9zX2Fzc2lzdGFudFwiOiBDQUNUT1NfQVNTSVNUQU5ULFxuICAgICAgICBcIkBjYWN0b3NfZmluYW5jaW5nXCI6IENBQ1RPU19GSU5BTkNJTkcsXG4gICAgICB9LFxuICAgICAgc2hhcmVkOiBbXG4gICAgICAgIFwicmVhY3RcIixcbiAgICAgICAgXCJyZWFjdC1kb21cIixcbiAgICAgIF1cbiAgICB9KSxcbiAgICB0b3BMZXZlbEF3YWl0KHt9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdBLFNBQVMsZUFBZSxXQUFXO0FBQ25DLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPO0FBUnVMLElBQU0sMkNBQTJDO0FBYS9PLElBQU0sbUJBQW1CLFFBQVEsSUFBSSw2QkFDaEM7QUFFTCxJQUFNLG1CQUFtQixRQUFRLElBQUksNkJBQ2hDO0FBR0wsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sS0FBSyxhQUFhLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQyxFQUFFO0FBQUEsSUFDN0U7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AscUJBQXFCO0FBQUEsUUFDckIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWMsQ0FBQyxDQUFDO0FBQUEsRUFDbEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
