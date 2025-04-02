import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'index.ts'),
        runner: resolve(__dirname, 'runner.ts'),
      },
      name: 'UwUScript',
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
  },
});
