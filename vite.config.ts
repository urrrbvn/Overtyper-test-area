import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'overtyper_test_area',
      filename: 'overtyper_test_area_widget.js',
      exposes: {
        './widget': './src/core/bootstrap.ts',
      },
      shared: [],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
