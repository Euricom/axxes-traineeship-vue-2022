import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['**/*.spec.ts'],
    environment: 'happy-dom',
    deps: {
      inline: ['@vue'],
    },
  },
});
