import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const target = process.env.VITE_CHAT_SERVICE_PROXY_TARGET || 'http://localhost:8080'

export default defineConfig({
  plugins: [react()],
  server: { // Development server configuration, HMR (Hot Module Replacement)
    host: '0.0.0.0', 
    port: 5173,
    watch: {
      usePolling: true, // Required for Docker on Windows to detect file changes
    },
     proxy: { //proxys anything with /api to Spring on 8080
      '/api': {
        target: target,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        // ws: true, // uncomment if you add WebSockets later
      },
    },
  },
})
