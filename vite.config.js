import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE_PATH to the repository name (for example, /my-portfolio/)
// when deploying a project site to GitHub Pages. Use / for a user site.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
