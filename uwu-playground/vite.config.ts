import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['tomoko'],
  },
  plugins: [react(), tailwindcss(), nodePolyfills()],
});
