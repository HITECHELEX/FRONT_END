import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,             // Enables LAN access (e.g., from mobile devices)
    port: 5173,             // Optional: You can set custom port
    open: false,            // Optional: Don't auto-open browser
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional: Use @ as src alias
    },
  },
  build: {
    outDir: 'dist',
  },
  base: './',               // Ensures proper routing in dev & production
})
