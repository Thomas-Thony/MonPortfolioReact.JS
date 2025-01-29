import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Ouvre automatiquement le navigateur
  },
  build: {
    outDir: 'dist', // Répertoire de sortie pour le build
  },
  base: '/', // Base URL pour le routage
});
