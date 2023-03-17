import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        'service-worker': resolve(__dirname, './src/workers/service-worker.js'),
      },
      output: {
        format: 'iife',
        entryFileNames: '[name].js',
      },
    },
  },
});
