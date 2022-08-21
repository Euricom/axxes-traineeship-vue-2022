/* eslint-disable import/no-extraneous-dependencies */
import { join } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import pgk from './package.json';

const srcRoot = join(__dirname, 'src');

// More config, see: https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), vue()],
  resolve: {
    alias: {
      '@': srcRoot,
    },
  },
  define: {
    'import.meta.env.VERSION': JSON.stringify(pgk.version),
    'import.meta.env.BUILD_DATE': JSON.stringify(new Date().toISOString()),
  },
});
