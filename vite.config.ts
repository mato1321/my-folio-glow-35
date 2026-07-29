import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/MY-CV/',
  tanstackStart: {
    server: { entry: "server" },
  },
  // 加上 Nitro 的純靜態預渲染設定，專門給 GitHub Pages 等靜態託管平臺使用
  nitro: {
    static: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
});