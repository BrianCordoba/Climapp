import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      manifest: {
          name: 'ClimApp',
          short_name: 'Administración',
          description: 'Sistema de administración de ClimApp',
          theme_color: '#0f172a',
          start_url: '/',
          icons: [
              {
                  src: "/android-chrome-512x512.png",
                  sizes: "512x512",
                  type: "image/png",
                  purpose: "any maskable"
              },
              {
                  src: "/android-chrome-192x192.png",
                  sizes: "192x192",
                  type: "image/png",
                  purpose: "any maskable"
              }
          ]
      }
  })
  ],
})
