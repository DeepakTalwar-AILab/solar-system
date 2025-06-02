import { defineConfig } from 'vite';

export default defineConfig({
  // project specific configurations
  base: './', // Ensures assets are loaded correctly when deployed
  build: {
    chunkSizeWarningLimit: 1000, // Optional: suppress large chunk warnings for Three.js
  }
}); 