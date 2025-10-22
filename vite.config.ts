import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    {enforce: 'pre', ...mdx()},
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
        VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MD‑PWA',
        short_name: 'MDPWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#6200ee',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^\/(api|assets)\//,
            handler: 'NetworkFirst',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@content': '/src/content/',
    },
  },
});
