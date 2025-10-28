import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // Development server configuration, HMR (Hot Module Replacement)
    host: '0.0.0.0', // Allows Docker container to accept connections from outside
    port: 5173,
    watch: {
      usePolling: true, // Required for Docker on Windows to detect file changes
    },
  },
})
