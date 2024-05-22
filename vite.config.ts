import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@views': path.resolve(__dirname, 'src', 'views'),
      '@app': path.resolve(__dirname, 'src', 'app'),
    },
  },
  plugins: [react()],
});
