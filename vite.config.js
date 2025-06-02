import { defineConfig } from 'vite';

// Standard Vite configuration for deploying to a subdirectory on GitHub Pages.
// The `base` path is crucial for correct asset URL resolution.
export default defineConfig({
  base: '/solar-system/', // Must match the repository name if deploying to <username>.github.io/<repository-name>/
  build: {
    chunkSizeWarningLimit: 1000, // Optional: suppress large chunk warnings for Three.js
    outDir: 'dist'
  }
}); 