import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,        // ✅ Vite will run on port 5174 inside the container
    host: true,        // ✅ Allow access from Docker or remote
    strictPort: true   // ✅ Fail if port is unavailable
  }
})
