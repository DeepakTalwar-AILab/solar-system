import { defineConfig } from 'vite';

export default defineConfig({
  // Set base path for GitHub Pages
  base: '/solar-system/',
  build: {
    chunkSizeWarningLimit: 1000, // Optional: suppress large chunk warnings for Three.js
    outDir: 'dist'
  }
}); 