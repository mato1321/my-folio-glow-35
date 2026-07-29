import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/MY-CV/',
  tanstackStart: {
    // 讓 TanStack 知道 baseUrl
    output: {
      dir: '.output',
    },
    server: { entry: "server" },
  },
});