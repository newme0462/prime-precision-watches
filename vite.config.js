import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on GitHub Pages under /<repo-name>/
// (and on any other static host) without further configuration.
export default defineConfig({
  base: './',
  plugins: [react()],
})
