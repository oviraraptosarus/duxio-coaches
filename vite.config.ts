// @leadconnector/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only, jsxSource fallback + tailwind config), @tanstack/devtools-vite source injection (data-tsd-source, dev-only),
//     HMR gate/flush, dev-server bridge controls, server diagnostics, lightningcss, and sandbox detection
//     (secure host allowlist, port/strictPort, watch ignores, and HMR overlay policy).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@leadconnector/vite-tanstack-config";

export default defineConfig({
  devServerBridge: { errorCollector: false },
  tanstackStart: {
    server: { allowedHosts: true, entry: "server" },
  },
  nitro: {
    preset: "vercel",
    externals: {
      inline: ["tslib", /@radix-ui\/.*/],
    },
  },
  vite: {
    ssr: {
      noExternal: ['tslib', /@radix-ui\/.*/],
    },
  },
});
